(ns patient-crud.handler-test
  (:require [clojure.test :refer :all]
            [clojure.data.json :as json] 
            [ring.mock.request :as mock]
            [patient-crud.handler :refer :all]
            [patient-crud.utils :refer [select-patient-data]]
            [patient-crud.fixture :refer [setup-db-fixture test-data]]))

(use-fixtures :each setup-db-fixture)

(deftest test-get-routes 
  (testing "Patients route"
    (let [response (app (mock/request :get "/patients"))
          data (->> (json/read-str (:body response) 
                                   :key-fn keyword) 
                    (mapv select-patient-data))]
      (is (= (:status response) 200))
      (is (= data (mapv select-patient-data test-data)))))
  
  (testing "Patient route"
    (let [response (app (mock/request :get "/patients"))
          id (-> response
                 (:body)
                 (json/read-str :key-fn keyword)
                 (first)
                 (:id))
          response (app (mock/request :get (str "/patients/" id)))
          patient (-> response
                      (:body)
                      (json/read-str :key-fn keyword)
                      (first)
                      (select-patient-data))]
      (is (= (:status response) 200))
      (is (= patient (-> test-data
                         (first)
                         (select-patient-data))))))
  
  (testing "Search route"
    (let [response (app (mock/request :get "/patients/search?name=alexey"))
          patient (-> response
                      (:body)
                      (json/read-str :key-fn keyword)
                      (first)
                      (select-patient-data))]
      (is (= (:status response) 200))
      (is (= patient (-> test-data
                         (first)
                         (select-patient-data))))))

  (testing "Filter route"
    (let [response (app (mock/request :get "/patients/filter?col=sex&value=male"))
          patient (-> response
                      (:body)
                      (json/read-str :key-fn keyword)
                      (first)
                      (select-patient-data))]
      (is (= (:status response) 200))
      (is (= patient (-> test-data
                         (last)
                         (select-patient-data))))))
  
  (testing "Not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))

(deftest test-post-route
  (testing "Create route"
    (let [new-patient {:first_name "anton"
                       :surname "nikitin"
                       :middle_name "alekseevich"
                       :sex "male"
                       :birth_date "1993-11-06"
                       :address "lenina street 4"
                       :policy_number "759275834"}
          response (app (-> (mock/request :post "/patients")
                            (mock/json-body new-patient)))
          patient (-> response
                      (:body)
                      (json/read-str :key-fn keyword)
                      (first)
                      (select-patient-data))]
      (is (= (:status response) 201))
      (is (= patient (select-patient-data new-patient))))))

(deftest test-put-route
  (testing "Update route"
    (let [response (app (mock/request :get "/patients"))
          updated-patient (-> response
                              (:body)
                              (json/read-str :key-fn keyword)
                              (first)
                              (assoc :first_name "maksim")
                              (assoc :birth_date "2000-06-05")) 
          response (app (-> (mock/request :put (str "/patients/" (:id updated-patient)))
                            (mock/json-body updated-patient)))
          patient (-> response
                      (:body)
                      (json/read-str :key-fn keyword)
                      (first)
                      (select-patient-data))]
      (is (= (:status response) 200))
      (is (= patient (select-patient-data updated-patient))))))

(deftest test-delete-route
  (testing "Delete route"
    (let [response (app (mock/request :get "/patients"))
          id (-> response
                 (:body)
                 (json/read-str :key-fn keyword)
                 (first)
                 (:id))
          response (app (mock/request :delete (str "/patients/" id)))]
      (is (= (:status response) 200))
      (is (= (:body response) '(1))))))