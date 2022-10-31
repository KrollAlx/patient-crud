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
                   (events/success-create-patient [::success-create-patient [new-patient]]))]
    (testing "Incorrect patient data"
      (is (= (:form-valid? db) false)))
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
               (events/success-create-patient [::success-create-patient [new-patient]]))
        effect (events/delete-patient db [::delete-patient (:id new-patient)])
        new-db (events/success-delete-patient db [::success-delete-patient (:id new-patient)])]
    (testing "Correct effect" 
      (is (= (get-in effect [:http-xhrio :uri]) (str "http://localhost:3000/patients/" (:id new-patient))))
      (is (= (get-in effect [:http-xhrio :on-success]) [:frontend.events/success-delete-patient (:id new-patient)])))
    (testing "Success delete patient"
      (is (= (:patients new-db) [])))))

;; (cljs.test/run-tests)