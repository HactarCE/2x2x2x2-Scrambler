(ns scrambler.ui.horizontal-net-view
  (:require [scrambler.puzzle.core :as puzzle-core]
            ; [scrambler.puzzle.permutation-utils :as perm-utils] ; TODO remove
            [scrambler.ui.utils :as ui-utils :refer [piece-size]]))

(def piece-layout ;; use faces/axes with lookup instead of four-letter symbols
  ;; [piece-id :face]
  [[ nil    nil   [4 :b] [12 :b] [13 :b] [5 :b]  nil    nil]
   [ nil    nil   [6 :b] [14 :b] [15 :b] [7 :b]  nil    nil]
   [ nil    nil   [6 :u] [14 :u] [15 :u] [7 :u]  nil    nil]
   [ nil    nil   [2 :u] [10 :u] [11 :u] [3 :u]  nil    nil]
   [[6 :l] [2 :l] [2 :f] [10 :f] [11 :f] [3 :f] [3 :r] [7 :r]]
   [[4 :l] [0 :l] [0 :f] [ 8 :f] [ 9 :f] [1 :f] [1 :r] [5 :r]]
   [ nil    nil   [0 :d] [ 8 :d] [ 9 :d] [1 :d]  nil    nil]
   [ nil    nil   [4 :d] [12 :d] [13 :d] [5 :d]  nil    nil]])

(defn get-axis-map [face inverted?]
  ;; [front-inside front-outside back-inside back-outside]
  (if inverted?
    (condp #(%2 %1) face
      #{:r :l} [1 2 nil nil]
      #{:u :d} [2 3 nil nil]
      #{:f :b} [1 3 nil nil])
    (condp #(%2 %1) face
      #{:r :l} [3 0 nil nil]
      #{:u :d} [1 0 nil nil]
      #{:f :b} [2 0 nil nil])))

(defn render-piece
  ([puzzle x y] (render-piece puzzle x y nil))
  ([puzzle x y backside?]
   (let [layout piece-layout
         inverted? (:inverted? puzzle)
         [piece-location render-face] (get-in layout [y x] [nil nil])]
     (when piece-location
       (let [piece-id (get-in puzzle [:p piece-location])
             orientation (get-in puzzle [:o piece-id])
             axis-map (get-axis-map render-face inverted?)
             piece-colors (ui-utils/get-piece-colors piece-id)
             colors (mapv #(get piece-colors (get orientation %)) axis-map)
             x-scale (* (if inverted? -1 1)
                        (if (even? x) -1 1))
             y-scale (if (even? y) 1 -1)]
         [:g {:transform (str "translate(" x " " y ")")}
          [ui-utils/render-flat-piece colors x-scale y-scale]])))))

(defn render-face [puzzle]
  (into
    [:g {:transform (str "translate(2 2)"
                         "scale(" piece-size " " piece-size ")")}]
    (for [y (range 8)
          x (range 8)]
      [render-piece puzzle x y])))

(defn render-puzzle [puzzle]
  [:div
   [:svg {:width (+ 4 (* piece-size 8))
          :height (+ 4 (* piece-size 8))
          :fill "#ffffff00"}
    [render-face puzzle]]])
