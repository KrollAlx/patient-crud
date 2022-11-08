(ns frontend.views
  (:require
   [re-frame.core :as re-frame]
   [frontend.subs :as subs]
   [frontend.events :as events]
   [clojure.string :as string] 
   ))

(defn text-input [key]
  (let [data-field (string/replace (name key) #"_" " ")
        value (-> (re-frame/subscribe [::subs/patient-data])
                  (deref)
                  (get key ""))]
    [:div.form-group
     [:label (string/capitalize data-field)]
     [:input.form-control {:on-change #(re-frame/dispatch [::events/update-form-data
                                                           key (-> % .-target .-value)])
                           :placeholder (str "Enter " data-field)
                           :value value}]]))

(defn radio-button [label name key value]
  [:div.form-check
   [:input.form-check-input {:on-change #(re-frame/dispatch [::events/update-form-data
                                                             key (-> % .-target .-value)])
                             :type "radio" :name name :value value}]
   [:label.form-check-label label]])

(defn date-picker [key min max]
  (let [data-field (string/replace (name key) #"_" " ")
        value (-> (re-frame/subscribe [::subs/patient-data])
                  (deref)
                  (get key ""))]
    [:div.form-group
     [:label (string/capitalize data-field)]
     [:input.form-control {:on-change #(re-frame/dispatch [::events/update-form-data
                                                           key (-> % .-target .-value)])
                           :type "date" :min min :max max :value value}]]))

(defn patient-form [valid-key]
  (let [form-valid? @(re-frame/subscribe [valid-key])
        update-patient? @(re-frame/subscribe [::subs/update-patient?])]
    [:div.mt-4 {:id "patient-form"}
     [:h3 "Patient form"]
     (when-not form-valid?
       [:label.text-danger "Validation error!"])
     [text-input :first_name]
     [text-input :surname]
     [text-input :middle_name]
     [date-picker :birth_date "1930-01-01" "2022-01-01"]
     [text-input :address]
     [text-input :policy_number]
     [radio-button "Male" "sex-radio" :sex "male"]
     [radio-button "Female" "sex-radio" :sex "female"]
     (if update-patient?
       [:button.btn.btn-primary.mt-3.mb-4 {:on-click #(re-frame/dispatch [::events/update-patient])} "Save"]
       [:button.btn.btn-primary.mt-3.mb-4 {:on-click #(re-frame/dispatch [::events/create-patient])} "Create patient"])]))

(defn patient-card [patient]
  [:div.card.mt-3.mb-3 {:key (:id patient)}
   [:div.card-body
    [:h5.card-title (str (:surname patient) " " (:first_name patient) " " (:middle_name patient))]
    [:p.card-text (str "Sex: " (:sex patient))]
    [:p.card-text (str "Birth date: " (:birth_date patient))]
    [:p.card-text (str "Address: " (:address patient))]
    [:p.card-text (str "Policy number: " (:policy_number patient))]
    [:div.btn-group
     [:button.btn.btn-primary {:on-click (fn [_]
                                           (.scrollIntoView (.getElementById js/document "patient-form"))
                                           (re-frame/dispatch [::events/start-update-patient patient]))} "Update patient"]
     [:button.btn.btn-danger {:on-click #(re-frame/dispatch [::events/delete-patient
                                                             (:id patient)])} "Delete patient"]]]])

(defn search-card []
  (let [search-value @(re-frame/subscribe [::subs/search-value])]
    [:div.card.mt-3.mb-2
     [:div.card-body
      [:input.form-control {:placeholder "Search by first name"
                            :value search-value
                            :on-change #(re-frame/dispatch [::events/update-search-value (-> % .-target .-value)])}]
      [:button.btn.btn-primary.mt-3 {:on-click #(re-frame/dispatch [::events/search-patient])} "Search"]
      [:button.btn.btn-primary.mt-3.ml-3 {:on-click #(re-frame/dispatch [::events/fetch-patients])} "Cancel"]]]))

(defn filter-card []
  [:div.card.mt-3
   [:div.card-body
    [:div.form-check
     [:input.form-check-input {:on-change #(re-frame/dispatch [::events/update-filter-value (-> % .-target .-value)])
                               :type "radio" :name "filter" :value "male"}]
     [:label.form-check-label "Male"]]
    [:div.form-check
     [:input.form-check-input {:on-change #(re-frame/dispatch [::events/update-filter-value (-> % .-target .-value)])
                               :type "radio" :name "filter" :value "female"}]
     [:label.form-check-label "Female"]]
    [:button.btn.btn-primary.mt-3 {:on-click #(re-frame/dispatch [::events/filter-patients])} "Filter"]
    [:button.btn.btn-primary.mt-3.ml-3 {:on-click #(re-frame/dispatch [::events/fetch-patients])} "Cancel"]]])

(defn main-panel []
  (let [patients @(re-frame/subscribe [::subs/patients])
        update-patient? @(re-frame/subscribe [::subs/update-patient?])]
    [:div.container
     [:div.row
      [:div.col-8
       [:h1.text-center.mt-3.mb-3 "Patients list"]
       (map patient-card patients)
       [patient-form (if update-patient?
                       ::subs/update-form-valid?
                       ::subs/create-form-valid?)]]
      [:div.col
       [:h1.text-center.mt-3.mb-3 "Search and filter"]
       [search-card]
       [filter-card]]]]))
