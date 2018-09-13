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
;;      ...]
;;  :inverted? inverted?}

(defn inverse-move [move]
  (let [p (perm-utils/inverse-permutation (:p move))
        o (->> (:o move)
               (#(reduce perm-utils/apply-permutation % [p p]))
               (mapv perm-utils/inverse-permutation))
        inverted? (:inverted? move)]
    {:p p :o o :inverted? inverted?}))

(defn make-twisting-move [cycles rot-plane]
  "Make a twisting move.

  cycles - A collection of cycles, where each cycle is a collection of
           pieces to cycle.
  rot-plane - A collection of two axis numbers that swap to resolve
              handedness."
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
    {:p p :o o :inverted? false}))

(defn make-stacking-move [cycles axis-permutation invert?]
  "Make a stacking move.

  cycles - A collection of cycles, where each cycle is a collection of
           pieces to cycle.
  axis-permutation - A vector of the resultant orientation for all
                     pieces."
  {:p (reduce perm-utils/cycle-keys
              (:p puzzle-core/solved-puzzle)
              cycles)
   :o (vec (repeat 16 axis-permutation))
   :inverted? invert?})

(defn apply-move [puzzle move]
  "Apply a move to a puzzle.

  This function is essential to the solver, so it should be highly optimized."
  {:p (perm-utils/apply-permutation (:p puzzle) (:p move))
   :o (-> (:o move)
          (perm-utils/apply-permutation (perm-utils/inverse-permutation (:p puzzle)))
          (#(mapv perm-utils/apply-permutation (:o puzzle) %)))
   ;; Does Clojure seriously not have an XOR operator?
   :inverted? (if (:inverted? puzzle) (not (:inverted? move)) (:inverted? move))})

(defn apply-moves [puzzle & moves] (reduce apply-move puzzle moves))

(defn conjugate-moves [setup action] (apply-moves setup action (inverse-move setup)))

(defn make-move-family [name move]
  {name move
   (str name "'") (inverse-move move)
   (str name "2") (apply-move move move)})

(def moves
  "A map of all named moves that can be applied to the physical puzzle."
  (conj
   (make-move-family "Rr" (make-twisting-move [[1 3 7 5]] [1 2]))
   (make-move-family "Ll" (make-twisting-move [[4 6 2 0]] [1 2]))
   (make-move-family "Rx" (make-twisting-move [[1 3 7 5] [9 11 15 13]] [1 2]))
   (make-move-family "Lx" (make-twisting-move [[0 2 6 4] [8 10 14 12]] [1 2]))
   (make-move-family "Ry" (make-twisting-move [[1 9 13 5] [3 11 15 7]] [2 3]))
   (make-move-family "Ly" (make-twisting-move [[0 4 12 8] [2 6 14 10]] [2 3]))
   (make-move-family "Rz" (make-twisting-move [[1 9 11 3] [5 13 15 7]] [1 3]))
   (make-move-family "Lz" (make-twisting-move [[0 2 10 8] [4 6 14 12]] [1 3]))
   (make-move-family "M" (make-stacking-move [[0 8 9 1] [2 10 11 3] [4 12 13 5] [6 14 15 7]] [3 2 1 0] true))
   {"E" (make-stacking-move [[0 2] [1 3] [4 6] [5 7] [8 10] [9 11] [12 14] [13 15]] [1 0 3 2] true)} ; TODO
   {"S" (make-stacking-move [[0 4] [1 5] [2 6] [3 7] [8 12] [9 13] [10 14] [11 15]] [2 3 0 1] true)} ; TODO
   {"U2" (make-twisting-move [[2 7] [3 6] [10 15] [11 14]] [2 3])}
   {"D2" (make-twisting-move [[0 5] [1 4] [8 13] [9 12]] [2 3])}
   {"F2" (make-twisting-move [[0 3] [1 2] [8 11] [9 10]] [0 3])}
   {"B2" (make-twisting-move [[4 7] [5 6] [12 15] [13 14]] [0 3])}))

(defn apply-named-move [puzzle move-name] (apply-move puzzle (get moves move-name)))
(defn apply-named-moves [puzzle & move-names] (reduce apply-named-move puzzle move-names))
