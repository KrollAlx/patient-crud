(defproject patient-crud "0.1.0-SNAPSHOT"
  :description "Test project for Health Samurai"
  :url "http://localhost:3000"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/java.jdbc "0.7.10"]
                 [org.postgresql/postgresql "42.1.4"]
                 [ring/ring-json "0.5.0"]
                 [ring/ring-defaults "0.3.2"]
                 [lynxeyes/dotenv "1.0.2"] 
                 [com.github.seancorfield/honeysql "2.3.928"]
                 [clj-time "0.15.2"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler patient-crud.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
