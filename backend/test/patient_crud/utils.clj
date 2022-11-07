(ns patient-crud.utils)

(defn select-patient-data [patient]
  (select-keys patient [:first_name :surname :middle_name :sex :address :policy_number]))