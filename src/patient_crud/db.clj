(ns patient-crud.db
  (:require
   [dotenv :refer [env]]
   [clojure.java.jdbc :as jdbc]
   [honey.sql :as sql]
  ;;  [clj-time.core :as t]
   [clj-time.jdbc])
  (:gen-class))

(def db
  {:dbtype "postgresql"
   :dbname (env :DB_NAME)
   :host (env :DB_HOST)
   :user (env :DB_USER)
   :password (env :DB_PASS)})

(defn select-query [sqlmap]
  (jdbc/query db (sql/format sqlmap)))

(defn get-all-patients []
  (select-query {:select [:*] 
                 :from [:patients]}))

(defn get-patient [id]
  (select-query {:select [:*]
                 :from [:patients]
                 :where [:= :id id]}))

(defn create-patient [patient-data]
  (jdbc/insert! db :patients patient-data))

(defn update-patient [patient-data]
  (jdbc/update! db :patients 
                (select-keys patient-data 
                            [:first_name :surname :middle_name :sex :birth_date :address :policy_number])
                ["id = ?" (:id patient-data)])
  (get-patient (:id patient-data)))

(defn delete-patient [id]
  (jdbc/delete! db :patients ["id = ?" id]))

;; (def test-patient {:id 5 :first_name "kisa" :surname "lol" :middle_name "a"
;;                 ;;    :sex "male" :birth_date (.g)(new java.util.Date) :address "aboba"
;;                    :sex "male" :birth_date (t/now) :address "aboba"
;;                    :policy_number "123426"})

;; (jdbc/execute! db (sql/format {:insert-into [:patients]
;;                                :columns [:first_name :surname :middle_name :sex :birth_date :address :policy_number]
;;                                :values [(vals test-patient)]}))

;; (jdbc/execute! db (sql/format {:update :patients
;;                                :set (select-keys test-patient
;;                                                  [:first_name :surname :middle_name :sex :birth_date :address :policy_number])
;;                                :where [:= :id 2]}))

;; (jdbc/insert! db :patients test-patient)