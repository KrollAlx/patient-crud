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
 ::fetch-patients
 (fn [{:keys [db]} _]
   {:db   (assoc db :show-twirly true)
    :http-xhrio {:method          :get
                 :uri             "http://localhost:3000/patients" 
                 :timeout         8000 
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::fetch-patients-success]
                 :on-failure      [::fetch-patients-success]}}))

(re-frame/reg-event-db 
 ::fetch-patients-success
 (fn [db [_ data]]
   (assoc db :patients data)))

(re-frame/reg-event-fx
 ::create-patient
 (fn [{:keys [db]} _]                    
   {:db   (assoc db :show-twirly true)
    :http-xhrio {:method          :post
                 :uri             "http://localhost:3000/patients"
                 :params (:patient-data db)
                 :timeout         8000
                 :format  (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-create-patient]
                 :on-failure      [::success-create-patient]}}))

(re-frame/reg-event-db
 ::success-create-patient
 (fn [db [_ [data]]]
   (-> db
       (update :patients conj data)
       (update :patient-data (fn [_] {})))))