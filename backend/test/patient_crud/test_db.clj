(ns patient-crud.test-db
  (:require [fixpoint.core :as fix]
            [fixpoint.datasource.postgresql :as pg]
            [dotenv :refer [env app-env]]
            [clj-time.format :as f]
            [clj-time.jdbc]))

(def test-db
  (pg/make-datasource
   :test-db
   {:connection-uri
    (str "jdbc:postgresql://" (env :DB_HOST) ":" (env :DB_PORT) "/" (env :DB_NAME) "?user=" (env :DB_USER) "&password=" (env :DB_PASS))}))

(defn- patient [id first_name surname middle_name sex birth_date address policy_number]
  (-> {:db/table :patients
       :id id
       :first_name first_name
       :surname surname
       :middle_name middle_name
       :sex sex
       :birth_date birth_date
       :address address
       :policy_number policy_number}
      (fix/on-datasource :test-db)))

(def fmt (f/formatter "yyyy-MM-dd"))

(def patients-fixtures 
  [(patient 1 "alexey" "rakitin" "evgenevich" "male" (f/parse "2000-06-05") "pushkina street 32" "12345679")
   (patient 2 "alisa" "rakitina" "evgenevna" "female" (f/parse "1990-10-15") "pushkina street 32" "75843635")])

;; (f/parse "2000-06-05")

;; (fix/with-rollback-datasource [_ test-db]
;;   (fix/with-data patients-fixtures
;;     (vector
;;      (fix/property :patient/first_name)
;;      (fix/property :patient/birth_date))))