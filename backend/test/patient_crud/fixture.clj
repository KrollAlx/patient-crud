(ns patient-crud.fixture
  (:require [patient-crud.db :as db]
            [clojure.java.jdbc :as jdbc]
            [clj-time.format :as f]
            [clj-time.jdbc]))

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

(defn- insert-test-data []
  (jdbc/insert-multi! db/db :patients test-data))

(defn- delete-test-data []
  (jdbc/execute! db/db ["delete from patients"]))

(defn setup-db-fixture [test]
  (insert-test-data)
  (test)
  (delete-test-data))