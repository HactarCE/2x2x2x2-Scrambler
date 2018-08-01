(ns scrambler.ui.main
  (:require [reagent.core :refer [atom]]
            [scrambler.ui.flat-view :as flat-view]
            [scrambler.puzzle.state-generator :as state-generator]))

(def puzzle-state (atom state-generator/solved-puzzle))

(defn scramble [puzzle] (state-generator/get-scrambled-puzzle))
; (defn scramble [puzzle]
;   (-> puzzle
;       (state-generator/twist-corner 0 1)
;       (#(do (println (state-generator/get-corner-twist-sum %)) %))))
;       (state-generator/twist-corner 7 -1))

(defn main-ui []
  [:center
   [:h1 "2x2x2x2 Scramble Generator"]
   [:div
    [:button {:type "button"
              :on-click #(swap! puzzle-state scramble)}
     "New scramble"]]
   [flat-view/render-puzzle @puzzle-state]])
   ; [flat-view/render-puzzle (state-generator/get-scrambled-puzzle)]])
