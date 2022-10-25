(ns patient-crud.db
  (:require
   [dotenv :refer [env]]
   [clojure.java.jdbc :as jdbc]
   [honey.sql :as sql]
  ;;  [clj-time.core :as t]
   [clj-time.jdbc]))

(def db
  {:dbtype "postgresql"
   :dbname (env :DB_NAME)
   :host (env :DB_HOST)
   :user (env :DB_USER)
   :password (env :DB_PASS)})

(defn- select-query [sqlmap]
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

(defn filter-patients [filter-col value]
  (select-query {:select [:*]
                 :from [:patients]
                 :where [:= filter-col value]}))

(defn seach-patient [name]
  (select-query {:select [:*]
                 :from [:patients]
                 :where [:= :first_name name]}))

;; (def test-patient {:first_name "dog" :surname "lol" :middle_name "a" 
;;                    :sex "female" :birth_date (t/now) :address "aboba"
;;                    :policy_number "123426"})

;; (create-patient test-patient)

;; (jdbc/execute! db (sql/format {:insert-into [:patients]
;;                                :columns [:first_name :surname :middle_name :sex :birth_date :address :policy_number]
;;                                :values [(vals test-patient)]}))

;; (jdbc/execute! db (sql/format {:update :patients
;;                                :set (select-keys test-patient
;;                                                  [:first_name :surname :middle_name :sex :birth_date :address :policy_number])
;;                                :where [:= :id 2]}))

;; (jdbc/insert! db :patients test-patient)

;; (println (t/now))