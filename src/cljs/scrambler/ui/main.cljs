(ns scrambler.ui.main
  (:require [reagent.core :refer [atom]]
            [scrambler.ui.flat-view :as flat-view]
            [scrambler.puzzle.core :as puzzle-core]
            [scrambler.puzzle.state-generator :as state-generator]))

(def puzzle-state (atom puzzle-core/solved-puzzle))

(defn scramble [puzzle] (state-generator/get-scrambled-puzzle))

(defn main-ui []
  [:center
   [:h1 "2x2x2x2 Scramble Generator"]
   [:div
    [:button {:type "button"
              :on-click #(swap! puzzle-state scramble)}
     "New scramble"]]
   [flat-view/render-puzzle @puzzle-state]])
