(ns frontend.tests
  (:require
   [cljs.test :refer-macros [deftest is testing]]
   [frontend.events :as events]))

(deftest test-update-patient-data
  (let [db (-> (events/initialize-db)
               (events/update-form-data [::update-form-data :first_name "alex"])
               (events/update-form-data [::update-form-data :surname "rakitin"])
               (events/update-form-data [::update-form-data :middle_name "evgenevich"])
               (events/update-form-data [::update-form-data :sex "male"])
               (events/update-form-data [::update-form-data :birth_date "2000-06-05"])
               (events/update-form-data [::update-form-data :address "pushkina street 32"])
               (events/update-form-data [::update-form-data :policy_number "12345678"]))]
    (is (get-in db [:patient-data :first_name]) "alex")
    (is (get-in db [:patient-data :surname]) "rakitin")
    (is (get-in db [:patient-data :middle_name]) "evgenevich")
    (is (get-in db [:patient-data :sex]) "male")
    (is (get-in db [:patient-data :birth_date]) "2000-06-05")
    (is (get-in db [:patient-data :address]) "pushkina street 32")
    (is (get-in db [:patient-data :policy_number]) "12345678")))

(deftest test-validate-patient-data
  (let [db (-> (events/initialize-db)
               (events/update-form-data [::update-form-data :first_name "alex"])
               (events/update-form-data [::update-form-data :surname "rakitin"])
               (events/update-form-data [::update-form-data :middle_name "evgenevich"])
               (events/update-form-data [::update-form-data :sex "male"])
               (events/update-form-data [::update-form-data :birth_date "2000-06-05"])
               (events/update-form-data [::update-form-data :address "pushkina street 32"])
               (events/update-form-data [::update-form-data :policy_number "12345678"]))
        correct-patient-data (:patient-data db)
        incorrect-patient-data (-> db
                                   (events/update-form-data [::update-form-data :first_name ""])
                                   (events/update-form-data [::update-form-data :policy_number "123123123123123123123123123123123123123"])
                                   (:patient-data))]
    (testing "Success validation"
      (is (= (events/validate-patient correct-patient-data) true)))
    (testing "Failure validation"
      (is (= (events/validate-patient incorrect-patient-data) false)))))

(deftest test-create-patient
  (let [db (-> (events/initialize-db)
               (events/update-form-data [::update-form-data :first_name ""])
               (events/update-form-data [::update-form-data :surname "rakitin"])
               (events/update-form-data [::update-form-data :middle_name "evgenevich"])
               (events/update-form-data [::update-form-data :sex "male"])
               (events/update-form-data [::update-form-data :birth_date "2000-06-05"])
               (events/update-form-data [::update-form-data :address "pushkina street 32"])
               (events/update-form-data [::update-form-data :policy_number "12345678"])
               (events/create-patient [::create-patient]))
        new-patient {:id 1
                     :first_name "alex"
                     :surname "rakitin"
                     :middle_name "evgenevich"
                     :sex "male"
                     :birth_date "2000-06-05"
                     :address "pushkina street 32"
                     :policy_number "12345678"}
        new-db (-> db
                   (events/update-form-data [::update-form-data :first_name "alex"])
                   (events/create-patient-success [::create-patient-success [new-patient]]))]
    (testing "Incorrect patient data"
      (is (= (:create-form-valid? db) false)))
    (testing "Success create patient"
      (is (= (:patients new-db) [new-patient]))
      (is (= (:patient-data new-db) {})))))

(deftest test-delete-patient
  (let [new-patient {:id 1
                     :first_name "alex"
                     :surname "rakitin"
                     :middle_name "evgenevich"
                     :sex "male"
                     :birth_date "2000-06-05"
                     :address "pushkina street 32"
                     :policy_number "12345678"}
        db (-> (events/initialize-db)
               (events/create-patient-success [::create-patient-success [new-patient]]))
        effect (events/delete-patient db [::delete-patient (:id new-patient)])
        new-db (events/delete-patient-success db [::delete-patient-success (:id new-patient)])]
    (testing "Correct effect" 
      (is (= (get-in effect [:http-xhrio :uri]) (str events/url "/" (:id new-patient))))
      (is (= (get-in effect [:http-xhrio :on-success]) [:frontend.events/delete-patient-success (:id new-patient)])))
    (testing "Success delete patient"
      (is (= (:patients new-db) [])))))

(deftest test-update-patient 
  (let [new-patient {:id 1
                     :first_name "alex"
                     :surname "rakitin"
                     :middle_name "evgenevich"
                     :sex "male"
                     :birth_date "2000-06-05"
                     :address "pushkina street 32"
                     :policy_number "12345678"}
        db (-> (events/initialize-db)
               (events/create-patient-success [::create-patient-success [new-patient]])
               (events/start-update-patient [::start-update-patient new-patient]))]
    (testing "Start update"
      (is (= (:update-patient? db) true))
      (is (= (:patient-data db) new-patient)))
    (testing "Incorrect patient data"
      (let [db (-> db
                       (events/update-form-data [::update-form-data :first_name ""])
                       (events/update-patient [::update-patient]))]
        (is (= (:update-form-valid? db) false))))
    (testing "Update patient"
      (let [updated-patient {:id 1
                             :first_name "alexey"
                             :surname "rakitin"
                             :middle_name "evgenevich"
                             :sex "male"
                             :birth_date "2000-06-05"
                             :address "pushkina street 32"
                             :policy_number "12345678"}
            db (-> db
                   (events/update-form-data [::update-form-data :first_name "alexey"])
                   (events/update-patient-success [::update-patient-success [updated-patient]]))]
        (is (= (:patients db) [updated-patient]))
        (is (= (:update-patient? db) false))
        (is (= (:update-form-valid? db) true))
        (is (= (:patient-data db) {}))))))

(deftest test-search-patient
  (let [patient-1 {:first_name "alex"
                   :surname "rakitin"
                   :middle_name "evgenevich"
                   :sex "male"
                   :birth_date "2000-06-05"
                   :address "pushkina street 32"
                   :policy_number "12345678"}
        patient-2 {:first_name "artem"
                   :surname "nikitin"
                   :middle_name "alekseevich"
                   :sex "male"
                   :birth_date "2000-09-19"
                   :address "lenina street 18"
                   :policy_number "56382956"}
        db (-> (events/initialize-db)
               (events/create-patient-success [::create-patient-success [patient-1]])
               (events/create-patient-success [::create-patient-success [patient-2]]))]
    (testing "Update search value"
      (let [db (events/update-search-value db [::update-search-value "artem"])]
        (is (= (:search-value db) "artem")))) 
    (testing "Search patient"
      (let [db (events/search-patient-success db [::search-patient-success [patient-2]])]
        (is (= (:patients db) [patient-2]))))))

(deftest test-fetch-patients
  (let [patient-1 {:first_name "alex"
                   :surname "rakitin"
                   :middle_name "evgenevich"
                   :sex "male"
                   :birth_date "2000-06-05"
                   :address "pushkina street 32"
                   :policy_number "12345678"}
        patient-2 {:first_name "artem"
                   :surname "nikitin"
                   :middle_name "alekseevich"
                   :sex "male"
                   :birth_date "2000-09-19"
                   :address "lenina street 18"
                   :policy_number "56382956"}
        db (-> (events/initialize-db)
               (events/fetch-patients-success [::fetch-patients-success [patient-1 patient-2]]))]
    (is (= (:patients db) [patient-1 patient-2]))))

(deftest test-filter-patients
  (let [patient-1 {:first_name "alex"
                   :surname "rakitin"
                   :middle_name "evgenevich"
                   :sex "male"
                   :birth_date "2000-06-05"
                   :address "pushkina street 32"
                   :policy_number "12345678"}
        patient-2 {:first_name "masha"
                   :surname "nikitina"
                   :middle_name "alekseevna"
                   :sex "female"
                   :birth_date "2000-09-19"
                   :address "lenina street 18"
                   :policy_number "56382956"}
        db (-> (events/initialize-db)
               (events/create-patient-success [::create-patient-success [patient-1]])
               (events/create-patient-success [::create-patient-success [patient-2]]))]
    (testing "Update filter value"
      (let [db (events/update-filter-value db [::update-filter-value "male"])]
        (is (= (:filter-value db) "male"))))
    (testing "Filter patient"
      (let [db (events/filter-patients-success db [::filter-patients-success [patient-2]])]
        (is (= (:patients db) [patient-2]))))))

;; (cljs.test/run-tests)