(ns scrambler.puzzle.permutation-utils)

(defn swap-indices [v i1 i2]
  (assoc v i1 (get v i2) i2 (get v i1)))

(defn swap-indices! [v i1 i2]
  (assoc! v i1 (get v i2) i2 (get v i1)))

(defn get-permutation-parity
  "Returns the parity (1 or -1) of a permutation by counting the number of swaps
  necessary to solve it."
  [permutation]
  (loop [i 0 ; Start at the zeroth element
         v (transient permutation) ; Transient vector gives better performance
         parity 1]
    (let [value (get v i nil)]
      (cond
        ;; If we're done with the vector (it is ordered), return the parity.
        (nil? value) parity
        ;; If we're done with this index (index = value), proceed to the next index.
        (= i (get v i)) (recur (inc i) v parity)
        ;; Otherwise, negate parity and perform a swap to put this element in its proper place.
        :else (recur i
                     ;; Current index (i) <--> index where current element belongs (value)
                     (swap-indices! v i value)
                     (- parity))))))

(defn cycle-keys
  "Cycle keys in a map."
  [m keys]
  (reduce
    (fn [m [k1 k2]] (swap-indices m k1 k2))
    m
    (partition 2 1 (reverse keys))))

(defn even-parity-shuffle [v]
  (let [permutation (shuffle v)]
    (if (neg? (get-permutation-parity permutation))
      (swap-indices permutation 0 1) ; If there's odd parity, swap two pieces to fix it.
      permutation)))
