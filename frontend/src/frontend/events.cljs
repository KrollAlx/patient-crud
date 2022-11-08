(ns frontend.events
  (:require
   [re-frame.core :as re-frame]
   [frontend.db :as db] 
   [ajax.core :as ajax]
   ))

(def url "http://localhost:3000/patients")

(def search-url (str url "/search?name="))

(defn initialize-db []
  db/default-db)

(re-frame/reg-event-db
 ::initialize-db
 initialize-db)

(defn update-form-data [db [_ id val]]
  (assoc-in db [:patient-data id] val))

(re-frame/reg-event-db
 ::update-form-data
 update-form-data)

(defn fetch-patients [{:keys [db]} _]
  {:db db
   :http-xhrio {:method          :get
                :uri             url
                :timeout         8000
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::fetch-patients-success]
                :on-failure      [::fetch-patients-failure]}})

(re-frame/reg-event-fx
 ::fetch-patients
 fetch-patients)

(defn fetch-patients-success [db [_ data]]
  (assoc db :patients data))

(re-frame/reg-event-db 
 ::fetch-patients-success
 fetch-patients-success)

(re-frame/reg-event-db
 ::fetch-patients-failure
 (fn [db [_]]
   db))

(defn validate-patient [patient-data]
  (and (not (empty? (get patient-data :first_name "")))
       (not (empty? (get patient-data :surname "")))
       (not (empty? (get patient-data :middle_name ""))) 
       (not (empty? (get patient-data :birth_date "")))
       (not (empty? (get patient-data :address "")))
       (not (empty? (get patient-data :sex "")))
       (and (<= (count (get patient-data :policy_number "")) 16)
            (> (count (get patient-data :policy_number "")) 0))))

(defn create-patient-fx [{:keys [db]} _]
  {:db   (assoc db :create-form-valid? true)
   :http-xhrio {:method          :post
                :uri             url
                :params (:patient-data db)
                :timeout         8000
                :format  (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::create-patient-success]
                :on-failure      [::create-patient-success]}})

(re-frame/reg-event-fx
 ::create-patient-fx
 create-patient-fx) 

(defn create-patient [db [_]]
  (if (validate-patient (:patient-data db))
    (re-frame/dispatch [::create-patient-fx])
    (assoc db :create-form-valid? false)))

(re-frame/reg-event-db
 ::create-patient
 create-patient)

(defn create-patient-success [db [_ [data]]]
  (-> db
      (update :patients conj data)
      (assoc :patient-data {})))

(re-frame/reg-event-db
 ::create-patient-success
 create-patient-success)

(defn delete-patient [{:keys [db]} [_ id]]
  {:db db
   :http-xhrio {:method          :delete
                :uri             (str url "/" id)
                :timeout         8000
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::delete-patient-success id]
                :on-failure      [::delete-patient-success id]}})

(re-frame/reg-event-fx
 ::delete-patient
 delete-patient)

(defn delete-patient-success [db [_ id]]
  (update db :patients
          (fn [patients] (filterv (fn [patient] (not (= (:id patient) id))) patients))))

(re-frame/reg-event-db
 ::delete-patient-success
 delete-patient-success)

(defn start-update-patient [db [_ patient]]
  (-> db
      (assoc :update-patient? true)
      (assoc :patient-data patient)))

(re-frame/reg-event-db
 ::start-update-patient
 start-update-patient)

(defn update-patient-fx [{:keys [db]} [_ id]]
  {:db   (assoc db :update-form-valid? true)
   :http-xhrio {:method          :put
                :uri             (str url "/" id)
                :params          (:patient-data db)
                :timeout         8000
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::update-patient-success]
                :on-failure      [::update-patient-success]}})

(re-frame/reg-event-fx
 ::update-patient-fx
 update-patient-fx)

(defn update-patient [db [_]]
  (if (validate-patient (:patient-data db))
    (re-frame/dispatch [::update-patient-fx (get-in db [:patient-data :id])])
    (assoc db :update-form-valid? false)))

(re-frame/reg-event-db
 ::update-patient
 update-patient)

(defn update-patient-success [db [_ [data]]]
  (let [patients (:patients db)
        updated-patient-list (mapv (fn [patient] (if (= (:id patient) (:id data)) data patient)) patients)]
    (-> db
        (assoc :patients updated-patient-list)
        (assoc :patient-data {})
        (assoc :update-patient? false))))

(re-frame/reg-event-db
 ::update-patient-success
 update-patient-success)

(defn update-search-value [db [_ val]]
  (assoc db :search-value val))

(re-frame/reg-event-db
 ::update-search-value
 update-search-value)

(defn search-patient [{:keys [db]} _]
  {:db db
   :http-xhrio {:method          :get
                :uri             (str search-url (:search-value db))
                :timeout         8000
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::search-patient-success]
                :on-failure      [::search-patient-failure]}})

(re-frame/reg-event-fx
 ::search-patient
 search-patient)

(defn search-patient-success [db [_ data]]
  (assoc db :patients data))

(re-frame/reg-event-db
 ::search-patient-success
 search-patient-success)

(re-frame/reg-event-db
 ::search-patient-failure
 (fn [db _]
   db))

(defn update-filter-value [db [_ val]]
  (assoc db :filter-value val))

(re-frame/reg-event-db
 ::update-filter-value
 update-filter-value)

(defn filter-patients [{:keys [db]} _]
  {:db db
   :http-xhrio {:method          :get
                :uri             (str url "/filter?col=sex&value=" (:filter-value db))
                :timeout         8000
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::filter-patients-success]
                :on-failure      [::filter-patients-failure]}})

(re-frame/reg-event-fx
 ::filter-patients
 filter-patients)

(defn filter-patients-success [db [_ data]]
  (assoc db :patients data))

(re-frame/reg-event-db
 ::filter-patients-success
 filter-patients-success)

(re-frame/reg-event-db
 ::filter-patients-failure
 (fn [db _]
   db))