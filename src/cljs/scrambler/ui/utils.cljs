(ns scrambler.ui.utils
  (:require [scrambler.puzzle.core :as puzzle-core]))

(def colors
  {:o "darkorange"
   :r "red"
   :y "yellow"
   :w "white"
   :g "limegreen"
   :b "royalblue"
   :m "fuchsia"
   :v "purple"})

(defn get-piece-colors [piece-id]
  (mapv #(-> % str keyword colors) (puzzle-core/get-piece-string piece-id)))

(def piece-size 70)
(def peek-size 0.15)
(def sticker-props {:stroke "black"
                    :stroke-width 0.02
                    :stroke-linecap "round"})

(defn render-horizontal-piece-label [piece-id y-offset]
  (into
   [:g {:transform (str "translate(0.5 " (+ y-offset 0.5) ")"
                        "scale(0.2 0.2)")}]
   (for [[axis color] (map-indexed vector (get-piece-colors piece-id))]
     [:rect {:x (+ -2 axis)
             :y -0.5
             :width 1
             :height 1
             :fill color
             :stroke "black"
             :stroke-width 0.1
             :stroke-linecap "round"}])))

(defn render-flat-piece
  ([colors x-scale y-scale] (render-flat-piece colors x-scale y-scale nil))
  ([colors x-scale y-scale peek?]
   [:g {:transform (str "translate(0.5 0.5)"
                        "scale(" x-scale " " y-scale ")"
                        "translate(-0.5 -0.5)")}
     [:polygon (assoc sticker-props
                     :points "0,0 0,1 1,1"
                     :fill (get colors 0))]
     [:polygon (assoc sticker-props
                     :points "0,0 1,0 1,1"
                     :fill (get colors 1))]
     (if peek?
       [:path (assoc sticker-props
                     :d (str "M 0 0"
                             "l " peek-size " 0 a " peek-size " " peek-size " 0 0 1 " (- peek-size) " " peek-size
                             "L 0 0")
                     :fill (get colors 2))])
     (if peek?
       [:path (assoc sticker-props
                     :d (str "M 1 1"
                             "l " (- peek-size) " 0 a " peek-size " " peek-size " 0 0 1 " peek-size " " (- peek-size)
                             "L 1 1")
                     :fill (get colors 3))])]))
