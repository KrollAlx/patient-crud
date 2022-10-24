(ns patient-crud.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [patient-crud.handler :refer :all]))

(deftest test-app
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) "Hi kroll"))))
  
  (testing "patients route"
    (let [response (app (mock/request :get "/patients"))]
      (is (= (:status response) 200))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
