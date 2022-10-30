(ns patient-crud.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [patient-crud.controller :as controller] 
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.util.response :as response]))

(defroutes app-routes
  (GET "/patients" [] controller/get-patients-controller)
  (GET "/patients/filter" [] controller/filter-patients-controller)
  (GET "/patients/search" [] controller/search-patient-controller)
  (GET "/patients/:id" [] controller/get-patient-controller) 
  (POST "/patients" [] controller/create-patient-contoller)
  (PUT "/patients/:id" [] controller/update-patient-controller)
  (DELETE "/patients/:id" [] controller/delete-patient-controller)
  (GET "/" [] (response/redirect "/patients"))
  (route/not-found "Not Found"))

(def app
  (wrap-cors (wrap-defaults app-routes api-defaults)
             :access-control-allow-origin [#".*"]
             :access-control-allow-methods [:get :post :put :delete]))