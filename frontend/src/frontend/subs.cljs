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
 ::form-valid?
 (fn [db]
   (:form-valid? db)))