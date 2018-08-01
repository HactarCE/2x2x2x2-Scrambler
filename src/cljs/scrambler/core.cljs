(ns scrambler.core
  (:require [reagent.core :as r]
            [scrambler.ui.main :refer [main-ui]]))

(enable-console-print!)

(defonce app-state (atom {}))

(defn init! []
  (r/render-component
    (fn [] [main-ui])
    (.getElementById js/document "app"))
  (println "reloaded"))

(init!)
