(ns frontend.db)

(def default-db
  {:patients [{:id 1 :first_name "alisa" :surname "kekova" :middle_name "a"
               :sex "female" :birth_date "2022-10-24T00:00:00.000Z" :address "aboba"
               :policy_number "123426"}
              {:id 2 :first_name "german" :surname "kekov" :middle_name "a"
               :sex "male" :birth_date "2022-10-19T00:00:00.000Z" :address "aboba"
               :policy_number "123426"}]})
