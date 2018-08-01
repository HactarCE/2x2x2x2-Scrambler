(ns scrambler.puzzle.state-generator
  (:require [scrambler.puzzle.permutation-utils :as perm-utils]))


;;; This file is part of a Clojure port of pentaquark394's random-state
;;; scrambler for Melinda's 2x2x2x2: https://pastebin.com/kY2v4pPg

;;; The code here is my own, but many algorithms and comments/docstrings
;;; are copied nearly verbatim from pentaquark394's program. These instances
;;; are explicitly marked.


(def solved-puzzle
  "A solved puzzle for reference.

  :p - A vector mapping position on the puzzle to piece ID.
  :o - A vector mapping piece ID to orientation vector.

  An orientation vector describes the orientation of a piece based on how the
  axes are permuted. For example [2 1 3 0] describes a cycle of the zeroth,
  third, and second axes (with the first axis fixed).

  0: w/y (white/yellow)
  1: r/o (red/orange)
  2: b/g (blue/green)
  3: v/m (violet/magenta = purple/pink)

  This format is identical to pentaquark394's, except that all four corner axes
  stickers are included in the orientation description. They are, in order:
  'inside' front
  'outside' back if positive handedness; 'inside' back if negative
  'outside' front
  'inside' back if positive handedness; 'outside' back if negative"
  {:p (vec (range 16))
   :o (vec (repeat 16 [0 1 2 3]))})


;; TODO move to another file
(def piece-names
  "A vector mapping piece ID to a name based on sticker colors. This order is
  different from pentaquark394's program, and thus requires a more complicated
  get-handedness function."
  ; (->> (vec (repeat 4 (range 2)))) ; There are 4 axes, and 2 colors per axis.

  ["wrbv" "yrbv" "yobv" "wobv"
   "wogv" "yogv" "yrgv" "wrgv"
   "wrgm" "yrgm" "yogm" "wogm"
   "wobm" "yobm" "yrbm" "wrbm"])


; (def cartesian-product [sets]
;   (if sets (for [head (first sets)
;                  tail (cartesian-product (rest sets))]
;              (conj head tail))))


(defn get-stickers [piece-id]
  (vec (map keyword (nth piece-names piece-id))))


;; TODO move to another file
(def piece-mask
  "A mask dictating where each piece belongs in the assembled puzzle.

  This is directly copied from pentaquark394's program."
  ;; TODO move this to a section of display masks
  ;; TODO orientation mask of [0 2]
  [[0 1 2 3 12 13 14 15]
   [7 6 5 4 11 10  9  8]])


(defn handedness
   "Returns 1 or -1 depending on the 'handedness' of a piece.

   Pentaquark394's explanation:

   Since some pieces like wogm are mirror images of wrbv if we don't distinguish
   color pairs, their clockwise/counterclockwise orientations are switched.

   To take account of this, we have to keep track of the 'handedness' of each
   piece. The order of pieces is designed to make this easy to track."
   [piece-id]
   (if (zero? (mod piece-id 2)) 1 -1))



;;; Puzzle operations

(defn get-corner-twist
  "Returns -1 (CCW), 0 (no twist), or 1, representing how a corner is twisted.

  This algorithm is copied from pentaquark394's program."
  [puzzle piece-id]
  (-> (nth (:o puzzle) piece-id) ; Retrieve orientation of piece
      (#(+ (nth % 0) (nth % 2)))
      (mod 4)
      (case 1 1
            3 -1
            0)
      (* (handedness piece-id))))

(defn get-corner-twist-sum
  "Returns the sum of all twisted corners. See get-corner-twist."
  [puzzle]
  (->> (range 16) (map #(get-corner-twist puzzle %)) (reduce +)))

(defn twist-corner
  "Twists a corner by twist (-1=CCW, 0=none, 1=CW). Applies #(mod % 3) to input."
  [puzzle piece-id twist]
  (-> twist
      (* (handedness piece-id))
      (mod 3)
      ;; Get a function that applies the necessary twist to the corner
      (case 1 #(perm-utils/cycle-keys % [1 2 3]) ; Cycle clockwise
            2 #(perm-utils/cycle-keys % [3 2 1]) ; Cycle counterclockwise
            identity) ; Do not cycle
      ;; Actually apply the twist
      (#(update-in puzzle [:o piece-id] %))))

(defn resolve-corner-twist [puzzle]
  (let [total-twist (get-corner-twist-sum puzzle)]
    ;; If there is a net corner twist, twist the first piece to negate it.
    ; (println (str "Net twist: " total-twist))
    ; (println (str ({0 "No" 1 "CCW" 2 "CW"} (mod total-twist 3))
    ;               " twist is needed to make the puzzle solvable."))
    (twist-corner puzzle 0 (- total-twist))))

(defn get-scrambled-puzzle []
  ; (print "Preparing scrambled puzzle...")
  (-> {:p (->> (:p solved-puzzle)
               (perm-utils/even-parity-shuffle)) ; Randomly permute, preserving parity.
       :o (->> (:o solved-puzzle)
               (map perm-utils/even-parity-shuffle) ; Randomly orient each piece.
               (vec))} ; Re-vectorize.
      ;; Now we have to fix orientation (corner twist) parity.
      (resolve-corner-twist)))
