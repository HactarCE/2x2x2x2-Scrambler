(ns scrambler.puzzle.moves
  (:require [scrambler.puzzle.core :as puzzle-core]
            [scrambler.puzzle.permutation-utils :as perm-utils]))

;; The term "move" is used to refer to any operation that changes the physical
;; puzzle state, regardless of virtual equivalence.

;; A move is represented as the puzzle state after it is applied to a solved
;; puzzle. This is what that looks like:
;; {:p [old-position-of-piece-at-pos-0
;;      old-position-of-piece-at-pos-1
;;      ...
;;      old-position-of-piece-at-pos-15]
;;  :o [[old-position-of-axis-at-axis-0-in-piece-previously-at-0
;;       old-position-of-axis-at-axis-1-in-piece-previously-at-0
;;       old-position-of-axis-at-axis-2-in-piece-previously-at-pos-0
;;       old-position-of-axis-at-axis-3-in-piece-previously-at-pos-0]
;;      [old-position-of-axis-at-axis-0-in-piece-previously-at-pos-1
;;       ...
;;       ...
;;       ... -axis-3- ... -pos-1]
;;      ...]}

(defn apply-permutation [perm1 perm2]
  "Reorder the first vector according to the second."
  (mapv #(get perm1 %) perm2))

(defn inverse-permutation [permutation]
  (reduce-kv (fn [new-permutation destination source]
               (assoc new-permutation source destination))
             ;; It doesn't actually matter what vector we start with, as long
             ;; as it's the same length as the permutation.
             permutation
             permutation))

(defn inverse-move [move]
  (let [p (inverse-permutation (:p move))
        o (->> (:o move)
               (#(reduce apply-permutation % [p p]))
               (mapv inverse-permutation))]
    {:p p :o o}))

(defn make-twisting-move [cycles rot-plane]
  "Make a twisting move.

  cycles - A collection of cycles, where each cycle is a collection of pieces
           to cycle.
  rot-plane - A collection of two axis numbers that swap to resolve handedness."
  (let [p (reduce perm-utils/cycle-keys
                  (:p puzzle-core/solved-puzzle)
                  cycles)
        o (reduce (fn [orientations piece-new-pos]
                    (let [piece-old-pos (get p piece-new-pos)]
                      (if (not= (puzzle-core/handedness piece-old-pos)
                                (puzzle-core/handedness piece-new-pos))
                        (assoc orientations
                               piece-new-pos
                               (perm-utils/cycle-keys (vec (range 4)) rot-plane))
                        orientations)))
                  (:o puzzle-core/solved-puzzle)
                  (range 16))]
    {:p p :o o}))

(defn apply-move [puzzle move]
  "Apply a move to a puzzle.

  This function is essential to the solver, so it should be highly optimized."
  {:p (apply-permutation (:p puzzle) (:p move))
   :o (-> (:o move)
          (apply-permutation (:p puzzle))
          (#(mapv apply-permutation (:o puzzle) %)))})

(defn apply-moves [puzzle & moves] (reduce apply-move puzzle moves))

(defn make-move-family [name move]
  {name move
   (str name "'") (inverse-move move)
   (str name "2") (apply-move move move)})

(def moves
  "A map of all named moves that can be applied to the physical puzzle."
  (conj
   (make-move-family "Uu" (make-twisting-move [[0 8 12 4]] [2 3]))
   (make-move-family "Dd" (make-twisting-move [[2 6 14 10]] [2 3]))
   {"R2" (make-twisting-move [[8 14] [9 15] [10 12] [11 13]] [0 2])}
   {"F2" (make-twisting-move [[4 14] [5 15] [6 12] [7 13]] [0 3])}))

; (println moves)

(defn apply-named-move [puzzle move-name] (apply-move puzzle (get moves move-name)))
(defn apply-named-moves [puzzle & move-names] (reduce apply-named-move puzzle move-names))
