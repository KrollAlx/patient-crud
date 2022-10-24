(ns patient-crud.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [patient-crud.controller :as controller] 
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
  (GET "/patients" [] controller/get-patients-controller)
  (GET "/patients/:id" [] controller/get-patient-controller)
  (GET "/" [] "Hi kroll")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))