(ns frontend.events
  (:require
   [re-frame.core :as re-frame]
   [frontend.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [ajax.core :as ajax]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced []
   db/default-db))

(re-frame/reg-event-db
 ::update-form-data
 (fn [db [_ id val]]
   (assoc-in db [:patient-data id] val)))

(re-frame/reg-event-fx
 ::create-patient
 (fn [{:keys [db]} _]                    
   {:db   (assoc db :show-twirly true)
    :http-xhrio {:method          :post
                 :uri             "http://localhost:3000/patients"
                 :params (:patient-data db)
                 :timeout         8000
                 :request-format  (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:good-http-result]
                 :on-failure      [:bad-http-result]}}))