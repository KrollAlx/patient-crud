(ns patient-crud.controller
  (:require
   [clojure.data.json :as json]
   [patient-crud.db :as db]
   [clj-time.format :as f]))

(defn- date-writer [key value]
  (let [fmt (f/formatter "yyyy-MM-dd")]
    (if (= key :birth_date)
      (f/unparse fmt value)
      value)))

(defn- date-reader [key value]
  (if (= key :birth_date)
    (f/parse value)
    value))

(defn- success-response [body]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body body})

(defn get-patients-controller [_]
  (success-response (json/write-str (db/get-all-patients) :value-fn date-writer)))

(defn get-patient-controller [req]
  (let [id (-> (get-in req [:route-params :id])
               (Integer/parseInt))]
    (success-response (json/write-str (db/get-patient id) :value-fn date-writer))))

(defn create-patient-contoller [req]
  (let [patient-data (json/read-str (slurp (:body req)) 
                                    :value-fn date-reader
                                    :key-fn keyword)
        patient (db/create-patient patient-data)]
    (success-response (json/write-str patient :value-fn date-writer))))

(defn update-patient-controller [req]
  (let [id (-> (get-in req [:route-params :id])
               (Integer/parseInt))
        patient-data (-> (json/read-str (slurp (:body req))
                                        :value-fn date-reader
                                        :key-fn keyword)
                         (assoc :id id))
        patient (db/update-patient patient-data)]
    (success-response (json/write-str patient :value-fn date-writer))))

(defn delete-patient-controller [req]
  (let [id (-> (get-in req [:route-params :id])
               (Integer/parseInt))]
     {:status 200
      :body (db/delete-patient id)}))

(defn filter-patients-controller [req]
  (let [filter-col (-> (get-in req [:params :col])
                       (keyword))
        value (get-in req [:params :value])]
    (success-response (json/write-str (db/filter-patients filter-col value) :value-fn date-writer))))

(defn search-patient-controller [req]
  (let [name (get-in req [:params :name])]
    (success-response (json/write-str (db/seach-patient name) :value-fn date-writer))))

;; (def built-in-formatter (f/formatter "yyyy-MM-dd"))

;; (def now (f/parse "2022-10-24T00:00:00.000Z"))
;; now

;; (json/read-str "{\"a\":1,\"b\":2}")
;; (f/unparse built-in-formatter now)