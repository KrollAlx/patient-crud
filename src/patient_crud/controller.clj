(ns patient-crud.controller
  (:require 
   [clojure.data.json :as json] 
   [patient-crud.db :as db])
  (:gen-class))

;; TODO initial realization
(defn date-writer [key value]
  (if (= key :birth_date)
    (str value)
    value))

(defn get-patients-controller [_]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str (db/get-all-patients) :value-fn date-writer)})

(defn get-patient-controller [req] 
  (let [id (get-in req [:route-params :id])]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (json/write-str (db/get-patient (Integer/parseInt id)) :value-fn date-writer)}))

;; (get-patients-handler {:a 1})

;; (def date #inst "2013-02-07T19:08:12.107-00:00")

;; (str date)

;; (int "2")