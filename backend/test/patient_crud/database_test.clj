(ns patient-crud.database-test
  (:require [patient-crud.db :as db]
            [clj-time.format :as f] 
            [patient-crud.fixture :refer [setup-db-fixture test-data]]
            [clojure.test :refer :all]
            [patient-crud.utils :refer [select-patient-data]]))

(use-fixtures :each setup-db-fixture)

(deftest test-crud
  (testing "Get all patients"
    (let [patients (->> (db/get-all-patients)
                        (mapv select-patient-data))]
      (is (= patients (mapv select-patient-data test-data)))))
  
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
                     (select-patient-data))]
      (is (= result (select-patient-data new-patient))))) 
  
  (testing "Update patient"
    (let [patient (-> (db/get-all-patients)
                      (first))
          updated-patient (assoc patient :first_name "maksim")
          result (-> (db/update-patient updated-patient)
                     (first)
                     (select-patient-data))]
      (is (= result (select-patient-data updated-patient)))))
  
  (testing "Delete patient"
    (let [deleted-patient (-> (db/get-all-patients)
                              (first))
          result (db/delete-patient (:id deleted-patient))
          patients (db/get-all-patients)]
      (is (= result '(1)))
      (is (not (some #(= deleted-patient %) patients))))))

(deftest test-filter
  (let [result (-> (db/filter-patients :sex "female")
                   (first)
                   (select-patient-data))]
    (is (= result (-> test-data
                      (first)
                      (select-patient-data))))))

(deftest test-search
  (let [result (-> (db/search-patient "alexey")
                   (first)
                   (select-patient-data))]
    (is (= result (-> test-data
                      (first)
                      (select-patient-data))))))