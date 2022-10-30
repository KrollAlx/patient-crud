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

(defn validate-patient [patient-data]
  (and (not (empty? (get patient-data :first_name "")))
       (not (empty? (get patient-data :surname "")))
       (not (empty? (get patient-data :middle_name ""))) 
       (not (empty? (get patient-data :birth_date "")))
       (not (empty? (get patient-data :address "")))
       (not (empty? (get patient-data :sex "")))
       (and (<= (count (get patient-data :policy_number "")) 16)
            (> (count (get patient-data :policy_number "")) 0))))

;; TODO не работает
(re-frame/reg-event-fx
 ::create-patient-fx
 (fn [{:keys [db]} _]
   {:db   (update db :form-valid? (fn [_] true))
    :http-xhrio {:method          :post
                 :uri             "http://localhost:3000/patients"
                 :params (:patient-data db)
                 :timeout         8000
                 :format  (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-create-patient]
                 :on-failure      [::success-create-patient]}})) 

(re-frame/reg-event-db
 ::create-patient
 (fn [db [_]]
   (if (validate-patient (:patient-data db))
     (re-frame/dispatch [::create-patient-fx])
     (update db :form-valid? (fn [_] false)))))

(re-frame/reg-event-db
 ::success-create-patient
 (fn [db [_ [data]]]
   (-> db
       (update :patients conj data)
       (update :patient-data (fn [_] {})))))

(re-frame/reg-event-fx
 ::delete-patient
 (fn [{:keys [db]} [_ id]]
   {:db   (assoc db :show-twirly true)
    :http-xhrio {:method          :delete
                 :uri             (str "http://localhost:3000/patients/" id) 
                 :timeout         8000 
                 :format  (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-delete-patient id]
                 :on-failure      [::success-delete-patient id]}}))

(re-frame/reg-event-db
 ::success-delete-patient
 (fn [db [_ id]]
   (update db :patients 
           (fn [patients] (filterv (fn [patient] (not (= (:id patient) id))) patients)))))