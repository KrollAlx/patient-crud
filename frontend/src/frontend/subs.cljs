(ns frontend.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::patients
 (fn [db]
   (:patients db)))

(re-frame/reg-sub
 ::patient-data
 (fn [db]
   (:patient-data db)))

(re-frame/reg-sub
 ::create-form-valid?
 (fn [db]
   (:create-form-valid? db)))

(re-frame/reg-sub
 ::update-form-valid?
 (fn [db]
   (:update-form-valid? db)))

(re-frame/reg-sub
 ::update-patient?
 (fn [db]
   (:update-patient? db)))

(re-frame/reg-sub-raw
 ::modal
 (fn [db _] (:modal db)))