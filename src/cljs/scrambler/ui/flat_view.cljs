(ns scrambler.ui.flat-view
  ;; TODO This is only here for get-stickers.
  ;; It should be moved.
  (:require [scrambler.puzzle.state-generator :refer [get-stickers piece-names handedness]]))

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
  (vec (map colors (get-stickers piece-id))))

(def piece-layout
  [[0 1 2 3 12 13 14 15]
   [7 6 5 4 11 10  9  8]])

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

(defn render-piece
  ([puzzle x y] (render-piece puzzle x y nil))
  ([puzzle x y backside?]
   (let [layout (if backside? reversed-piece-layout piece-layout)
         piece-id (get-in puzzle [:p (get-in layout [y x])])
         orientation (get-in puzzle [:o piece-id])
         piece-colors (get-piece-colors piece-id)
         colors (map #(nth piece-colors %) orientation)
         x-scale (* (if backside? -1 1)
                    (if (zero? (mod x 2)) 1 -1))
         y-scale (if (zero? (mod y 2)) 1 -1)
         inverted? (pos? (mod (+ x y piece-id) 2)) ; not really sure, but it works
         axis-map (if backside?
                      ;; [front-inside front-outside back-inside back-outside]
                      ;; This was determined through trial-and-error; any
                      ;; explanation would be greatly appreciated
                      (if inverted? [3 1 0 2] [1 3 0 2])
                      (if inverted? [0 2 1 3] [0 2 3 1]))]
     [:g {:transform (str "translate(" x " " y ")")}
      [render-piece-label piece-id y]
      [:g {:transform (str "translate(0.5 0.5)"
                           "scale(" x-scale " " y-scale ")"
                           "translate(-0.5 -0.5)")}
        [:polygon {:points "0,0 0,1 1,1"
                   :fill (nth colors (nth axis-map 0))
                   :stroke "black"
                   :stroke-width 0.02
                   :stroke-linecap "round"}]
        [:polygon {:points "0,0 1,0 1,1"
                   :fill (nth colors (nth axis-map 1))
                   :stroke "black"
                   :stroke-width 0.02
                   :stroke-linecap "round"}]
        [:path {:d (str "M 1 1"
                        "l " (- peek-size) " 0 a " peek-size " " peek-size " 0 0 1 " peek-size " " (- peek-size)
                        "L 1 1")
                :fill (nth colors (nth axis-map 2))
                :stroke "black"
                :stroke-width 0.02
                :stroke-linecap "round"}]
        [:path {:d (str "M 0 0"
                        "l " peek-size " 0 a " peek-size " " peek-size " 0 0 1 " (- peek-size) " " peek-size
                        "L 0 0")
                :fill (nth colors (nth axis-map 3))
                :stroke "black"
                :stroke-width 0.02
                :stroke-linecap "round"}]]])))

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
