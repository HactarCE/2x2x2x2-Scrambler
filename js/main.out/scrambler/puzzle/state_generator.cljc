(ns scrambler.puzzle.state-generator
  (:require [scrambler.puzzle.core :as puzzle-core]
            [scrambler.puzzle.permutation-utils :as perm-utils]))

;;; This file is part of a Clojure port of pentaquark394's random-state
;;; scrambler for Melinda's 2x2x2x2: https://pastebin.com/kY2v4pPg

;;; The code here is my own, but many algorithms and comments/docstrings are
;;; copied nearly verbatim from pentaquark394's program. These instances are
;;; explicitly marked.

(defn twist-corner
  "Twists a corner by twist (-1=CCW, 0=none, 1=CW). Applies #(mod % 3) to input."
  [puzzle piece-id twist]
  (-> twist
      (* (puzzle-core/handedness piece-id))
      (mod 3)
      ;; Get a function that applies the necessary twist to the corner
      (case 1 #(perm-utils/cycle-keys % [1 2 3]) ; Cycle clockwise
            2 #(perm-utils/cycle-keys % [3 2 1]) ; Cycle counterclockwise
            identity) ; Do not cycle
      ;; Actually apply the twist
      (#(update-in puzzle [:o piece-id] %))))

(defn resolve-corner-twist [puzzle]
  "If the puzzle has corner twist parity, resolve it by twisting a corner."
  (let [total-twist (puzzle-core/get-corner-twist-sum puzzle)]
    ;; If there is a net corner twist, twist the first piece to negate it.
    (twist-corner puzzle 0 (- total-twist))))

(defn resolve-handedness [puzzle]
  "Resolve the handedness of each corner in the puzzle by swapping two axes in
  the orientation vector.

  If the handedness of a piece does not match the handedness of its position,
  then its orientation vector must have odd parity instead of even parity.
  To visualize this, try swapping two adjacent pieces on the puzzle without
  changing their orientations with respect to any axis; it's impossible."
  (loop [puzzle puzzle
         indices (range (count (:p puzzle)))]
    (if (empty? indices)
      puzzle
      (recur
       (let [index (first indices)
             piece-id (get-in puzzle [:p index])]
         (if (pos? (* (puzzle-core/handedness index)
                      (puzzle-core/handedness piece-id)
                      (perm-utils/get-permutation-parity (get-in puzzle [:o piece-id]))))
           puzzle
           ;; Swap two axes in the orientation vector.
           ;; We intentionally swap axes 1 and 3 because they are not used by
           ;; puzzle-core for twist checking.
           (update-in puzzle [:o piece-id] perm-utils/swap-indices 1 3)))
       (rest indices)))))

(defn get-scrambled-puzzle []
  "Returns a random solvable puzzle state."
  (-> {:p (->> (:p puzzle-core/solved-puzzle)
               ;; Randomly permute, preserving parity.
               (perm-utils/even-parity-shuffle))
       :o (->> (:o puzzle-core/solved-puzzle)
               ;; Randomly orient each piece.
               (mapv perm-utils/even-parity-shuffle))}
      ;; Fix orientation (corner twist) parity.
      (resolve-corner-twist)
      ;; Resolve piece handedness. (See the resolve-handedness docstring.)
      (resolve-handedness)))
