(ns frontend.views
  (:require
   [re-frame.core :as re-frame]
   [frontend.subs :as subs]
   [frontend.events :as events]
   [clojure.string :as string]
  ;;  [re-com.core :refer [datepicker]]
   ))

;; (string/capitalize (name :key))

(defn patient-card [patient]
  [:div.card.mt-3.mb-3 {:key (:id patient)}
   [:div.card-body
    [:h5.card-title (str (:surname patient) " " (:first_name patient) " " (:middle_name patient))]
    [:p.card-text (str "Sex: " (:sex patient))]
    [:p.card-text (str "Birth date: " (:birth_date patient))]
    [:p.card-text (str "Address: " (:address patient))]
    [:p.card-text (str "Policy number: " (:policy_number patient))]
    [:div.btn-group
     [:button.btn.btn-primary "Update patient"]
     [:button.btn.btn-danger "Delete patient"]]]])

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

(defn patient-form []
  [:form.mt-4
   [:h3 "Patient form"]
   [text-input :first_name]
   [text-input :surname]
   [text-input :middle_name]
   [:div.form-group
    [:label "Birth date"]
    ;; [datepicker :start-of-week 0]]
    [:input.form-control {:on-change #(re-frame/dispatch [::events/update-form-data
                                                          :birth_date (-> % .-target .-value)])
                          :type "date" :min "1930-01-01" :max "2022-01-01"}]]
   [text-input :address]
   [text-input :policy_number]
   [radio-button "Male" "sex-radio" :sex "male"]
   [radio-button "Female" "sex-radio" :sex "female"] 
   [:button.btn.btn-primary.mt-3.mb-4 {
                                       :type "submit"} "Create patient"]])

(defn main-panel []
  (let [patients (re-frame/subscribe [::subs/patients])]
    [:div.container
     [:h1.text-center.mt-3.mb-3 "Patients list"]
     (map patient-card @patients)
     [patient-form]]))
