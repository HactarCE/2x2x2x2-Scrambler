(ns scrambler.puzzle.core)

;;; This file is part of a Clojure port of pentaquark394's random-state
;;; scrambler for Melinda's 2x2x2x2: https://pastebin.com/kY2v4pPg

;;; The code here is my own, but many algorithms and comments/docstrings are
;;; copied nearly verbatim from pentaquark394's program. These instances are
;;; explicitly marked.

(def solved-puzzle
  "A solved puzzle for reference.

  :p - A vector mapping position on the puzzle to piece ID.
  :o - A vector mapping piece ID to orientation vector.

  An orientation vector describes the orientation of a piece based on how the
  axes are permuted. For example [2 1 3 0] describes a cycle of the zeroth,
  third, and second axes (with the first axis fixed).

  0: X, r/o (red/orange)
  1: Y, b/g (blue/green)
  2: Z, w/y (white/yellow)
  3: W, v/m (violet/magenta = purple/pink)"
  {:p (vec (range 16))
   :o (vec (repeat 16 [0 1 2 3]))
   :inverted false})

(def sticker-chars
  "A vector of vectors, mapping an axis (0-3) and a value along that axis (0-1)
  to a single character representing a sticker color."
  [[\o \r] [\y \w] [\g \b] [\m \v]])


(defn get-piece-axis-value
  "Return a single integer (0 or 1) corresponding to the value of the piece
  along a given axis (0-3)."
  [piece-id axis]
  (if (bit-test piece-id axis) 1 0))

(defn get-piece-axis-values
  "Returns a vector of integers, where each index is an axis and each value
  coresponds to the color on that axis (either 0 or 1)."
  [piece-id]
  (mapv #(get-piece-axis-value piece-id %) (range 4))) ; Just return the bits in order.

(defn get-piece-string [piece-id]
  "Returns a four-letter string, where each letter represents one of the colors
  on the piece."
  (->> piece-id
       (get-piece-axis-values)
       (map-indexed #(get-in sticker-chars %&))
       (clojure.string/join)))


(defn handedness
  "Returns 1 or -1 depending on the 'handedness' of a piece.

  Unlike pentaquark394's implementation, we determine the handedness of a piece
  by looking at whether the sum of a piece's stickers (each either 0 or 1) is
  even or odd.

  Pentaquark394's explanation:

  Since some pieces like wogm are mirror images of wrbv if we don't distinguish
  color pairs, their clockwise/counterclockwise orientations are switched.

  To take account of this, we have to keep track of the 'handedness' of each
  piece."
  [piece-id]
  (if (even? (reduce + (get-piece-axis-values piece-id))) 1 -1))


(defn get-corner-twist
  "Returns -1 (CCW), 0 (no twist), or 1, representing how a corner is twisted.

  This algorithm is copied from pentaquark394's program."
  [puzzle piece-id]
  (-> (get (:o puzzle) piece-id) ; Retrieve orientation of piece
      (#(+ (get % 0) (get % 2)))
      (mod 4)
      (case 1 1
            3 -1
            0)
      (* (handedness piece-id))))

(defn get-corner-twist-sum
  "Returns the sum of all twisted corners. See get-corner-twist."
  [puzzle]
  (->> (range 16) (map #(get-corner-twist puzzle %)) (reduce +)))
