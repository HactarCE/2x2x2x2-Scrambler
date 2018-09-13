(ns scrambler.ui.main
  (:require [reagent.core :refer [atom]]
            ; [scrambler.ui.horizontal-4x4-flat-view :as flat-view]
            [scrambler.ui.horizontal-net-view :as flat-view]
            [scrambler.puzzle.core :as puzzle-core]
            [scrambler.puzzle.state-generator :as state-generator]
            [scrambler.puzzle.moves :as puzzle-moves]))

(def puzzle-state (atom puzzle-core/solved-puzzle))
(def debug-tools? (atom false))

(defn scramble [puzzle] (state-generator/get-scrambled-puzzle))

(defn move-fn [move-name]
  (fn [puzzle]
    (puzzle-moves/apply-named-move puzzle move-name)))

(defn main-ui []
  [:center
   [:h1 "2x2x2x2 Scramble Generator"]
   [:div
    [:button {:type "button"
              :on-click #(swap! puzzle-state scramble)}
     "New scramble"]]
   [:div
    [:button {:type "button"
              :on-click #(swap! debug-tools? not)}
     "Toggle debug tools"]]
   (when @debug-tools?
     [:div
      [:button {:type "button"
                :on-click #(println @puzzle-state)}
       "Print puzzle state"]
      [:button {:type "button"
                :on-click #(doseq [id (range 16)]
                             (println (str id " " (puzzle-core/get-piece-string id))))}
       "Print piece IDs"]])
   (when @debug-tools?
     (into [:div] (for [[move-name _] puzzle-moves/moves]
                    [:button {:type "button"
                              :on-click #(swap! puzzle-state (move-fn move-name))}
                     move-name])))
   [:div
    [flat-view/render-puzzle @puzzle-state]]
   [:div
    [:p "Scramble goes here"]]])
