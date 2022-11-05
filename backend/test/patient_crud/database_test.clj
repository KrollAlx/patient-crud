(ns patient-crud.database-test
  (:require [patient-crud.db :as db]
            [clojure.java.jdbc :as jdbc]
            [clj-time.format :as f] 
            [clj-time.jdbc]
            [clojure.test :refer :all]))

(def test-data [{:first_name "alexey"
                 :surname "rakitin"
                 :middle_name "evgenevich"
                 :sex "male"
                 :birth_date (f/parse "2000-06-05")
                 :address "pushkina street 32"
                 :policy_number "12345679"}
                {:first_name "alisa"
                 :surname "rakitina"
                 :middle_name "evgenevna"
                 :sex "female"
                 :birth_date (f/parse "1990-10-15")
                 :address "pushkina street 32"
                 :policy_number "75843635"}])

(defn insert-test-data []
  (jdbc/insert-multi! db/db :patients test-data))

(defn delete-test-data []
  (jdbc/execute! db/db ["delete from patients"]))

(defn setup-db-fixture [test]
  (insert-test-data)
  (test)
  (delete-test-data))

(use-fixtures :each setup-db-fixture)

(deftest crud-test
  (testing "Get all patients"
    (let [patients (->> (db/get-all-patients)
                        (mapv (fn [p]
                                (select-keys p
                                             [:first_name :surname :middle_name :sex :address :policy_number]))))]
      (is (= patients (mapv (fn [p] 
                              (select-keys p [:first_name :surname :middle_name :sex :address :policy_number])) 
                             test-data)))))
  
  (testing "Get one patient"
    (let [first-patient (-> (db/get-all-patients)
                            (first))
          result (-> (db/get-patient (:id first-patient))
                      (first))]
      (is (= first-patient result))))
  
  (testing "Create patient"
    (let [new-patient {:first_name "anton"
                       :surname "nikitin"
                       :middle_name "alekseevich"
                       :sex "male"
                       :birth_date (f/parse "1993-11-06")
                       :address "lenina street 4"
                       :policy_number "759275834"}
          result (-> (db/create-patient new-patient)
                     (first)
                     (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))]
      (is (= result (select-keys new-patient [:first_name :surname :middle_name :sex :address :policy_number]))))) 
  
  (testing "Update patient"
    (let [patient (-> (db/get-all-patients)
                      (first))
          updated-patient (assoc patient :first_name "maksim")
          result (-> (db/update-patient updated-patient)
                     (first)
                     (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))]
      (is (= result (select-keys updated-patient [:first_name :surname :middle_name :sex :address :policy_number])))))
  
  (testing "Delete patient"
    (let [deleted-patient (-> (db/get-all-patients)
                              (first))
          result (db/delete-patient (:id deleted-patient))
          patients (db/get-all-patients)]
      (is (not (some #(= deleted-patient %) patients))))))

(deftest filter-test
  (let [result (-> (db/filter-patients :sex "female")
                   (first)
                   (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))]
    (is (= result (-> test-data
                      (first)
                      (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))))))

(deftest search-test
  (let [result (-> (db/search-patient "alexey")
                   (first)
                   (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))]
    (is (= result (-> test-data
                      (first)
                      (select-keys [:first_name :surname :middle_name :sex :address :policy_number]))))))