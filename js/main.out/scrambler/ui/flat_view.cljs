(ns scrambler.ui.flat-view
  (:require [scrambler.puzzle.core :as puzzle-core]))

(def colors
  {:w "white"
   :y "yellow"
   :r "red"
   :o "darkorange"
   :b "royalblue"
   :g "limegreen"
   :v "purple"
   :m "fuchsia"})

(defn get-piece-colors [piece-id]
  (mapv #(-> % str keyword colors) (puzzle-core/get-piece-string piece-id)))

(def piece-layout
  [[0 1 3 2 10 11  9  8]
   [4 5 7 6 14 15 13 12]])

;; Ok this line is really misleading
(def reversed-piece-layout (vec (rseq piece-layout)))



;;;; Rendering

(def piece-size 70)

(def peek-size 0.15)

(defn render-piece-label [piece-id y]
  (into
   [:g {:transform (str "translate(0.5 " (if (zero? y) -0.2 1.2) ")"
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

(def sticker-props {:stroke "black"
                    :stroke-width 0.02
                    :stroke-linecap "round"})

(defn render-piece
  ([puzzle x y] (render-piece puzzle x y nil))
  ([puzzle x y backside?]
   (let [layout (if backside? reversed-piece-layout piece-layout)
         piece-id (get-in puzzle [:p (get-in layout [y x])])
         orientation (get-in puzzle [:o piece-id])
         axis-map (if backside? [3 1 0 2] [0 2 3 1]) ; [front-inside front-outside back-inside back-outside]
         piece-colors (get-piece-colors piece-id)
         colors (mapv #(get piece-colors (get orientation %)) axis-map)
         x-scale (* (if backside? -1 1)
                    (if (even? x) 1 -1))
         y-scale (if (even? y) 1 -1)]
     [:g {:transform (str "translate(" x " " y ")")}
      [render-piece-label piece-id y]
      [:g {:transform (str "translate(0.5 0.5)"
                           "scale(" x-scale " " y-scale ")"
                           "translate(-0.5 -0.5)")}
        [:polygon (assoc sticker-props
                         :points "0,0 0,1 1,1"
                         :fill (get colors 0))]
        [:polygon (assoc sticker-props
                         :points "0,0 1,0 1,1"
                         :fill (get colors 1))]
        [:path (assoc sticker-props
                      :d (str "M 1 1"
                              "l " (- peek-size) " 0 a " peek-size " " peek-size " 0 0 1 " peek-size " " (- peek-size)
                              "L 1 1")
                      :fill (get colors 2))]
        [:path (assoc sticker-props
                      :d (str "M 0 0"
                              "l " peek-size " 0 a " peek-size " " peek-size " 0 0 1 " (- peek-size) " " peek-size
                              "L 0 0")
                      :fill (get colors 3))]]])))

(defn render-puzzle [puzzle]
  [:svg {:width (+ 4 (* piece-size 8))
         :height (* piece-size 8)}
   (into
    [:g {:transform (str "translate(2 50)"
                         "scale(" piece-size " " piece-size ")")}]
    (for [y (range 2)
          x (range 8)]
      [render-piece puzzle x y]))
   (into
    [:g {:transform (str "translate(2 300)"
                         "scale(" piece-size " " piece-size ")")}]
    (for [y (range 2)
          x (range 8)]
      [render-piece puzzle x y :backside]))])
