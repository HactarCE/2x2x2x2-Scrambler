// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.puzzle.core');
goog.require('cljs.core');
/**
 * A solved puzzle for reference.
 * 
 *   :p - A vector mapping position on the puzzle to piece ID.
 *   :o - A vector mapping piece ID to orientation vector.
 * 
 *   An orientation vector describes the orientation of a piece based on how the
 *   axes are permuted. For example [2 1 3 0] describes a cycle of the zeroth,
 *   third, and second axes (with the first axis fixed).
 * 
 *   0: w/y (white/yellow)
 *   1: r/o (red/orange)
 *   2: b/g (blue/green)
 *   3: v/m (violet/magenta = purple/pink)
 * 
 *   This format is identical to pentaquark394's, except that all four corner axes
 *   stickers are included in the orientation description. They are, in order:
 *   W - 'inside' front
 *   Y - 'outside' back if positive handedness; 'inside' back if negative
 *   Z - 'outside' front
 *   X - 'inside' back if positive handedness; 'outside' back if negative
 */
scrambler.puzzle.core.solved_puzzle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.vec.call(null,cljs.core.range.call(null,(16))),new cljs.core.Keyword(null,"o","o",-1350007228),cljs.core.vec.call(null,cljs.core.repeat.call(null,(16),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)))], null);
/**
 * A vector of vectors, mapping an axis (0-3) and a value along that axis (0-1)
 *   to a single character representing a sticker color.
 */
scrambler.puzzle.core.sticker_chars = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","y"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r","o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["v","m"], null)], null);
/**
 * Return a single integer (0 or 1) corresponding to the value of the piece
 *   along a given axis (0-3).
 */
scrambler.puzzle.core.get_piece_axis_value = (function scrambler$puzzle$core$get_piece_axis_value(piece_id,axis){
if(((piece_id & (1 << axis)) != 0)){
return (1);
} else {
return (0);
}
});
/**
 * Returns a vector of integers, where each index is an axis and each value
 *   coresponds to the color on that axis (either 0 or 1).
 */
scrambler.puzzle.core.get_piece_axis_values = (function scrambler$puzzle$core$get_piece_axis_values(piece_id){
return cljs.core.mapv.call(null,(function (p1__8135_SHARP_){
return scrambler.puzzle.core.get_piece_axis_value.call(null,piece_id,p1__8135_SHARP_);
}),cljs.core.range.call(null,(4)));
});
scrambler.puzzle.core.get_piece_string = (function scrambler$puzzle$core$get_piece_string(piece_id){

return clojure.string.join.call(null,cljs.core.map_indexed.call(null,(function() { 
var G__8137__delegate = function (rest__8136_SHARP_){
return cljs.core.get_in.call(null,scrambler.puzzle.core.sticker_chars,rest__8136_SHARP_);
};
var G__8137 = function (var_args){
var rest__8136_SHARP_ = null;
if (arguments.length > 0) {
var G__8138__i = 0, G__8138__a = new Array(arguments.length -  0);
while (G__8138__i < G__8138__a.length) {G__8138__a[G__8138__i] = arguments[G__8138__i + 0]; ++G__8138__i;}
  rest__8136_SHARP_ = new cljs.core.IndexedSeq(G__8138__a,0,null);
} 
return G__8137__delegate.call(this,rest__8136_SHARP_);};
G__8137.cljs$lang$maxFixedArity = 0;
G__8137.cljs$lang$applyTo = (function (arglist__8139){
var rest__8136_SHARP_ = cljs.core.seq(arglist__8139);
return G__8137__delegate(rest__8136_SHARP_);
});
G__8137.cljs$core$IFn$_invoke$arity$variadic = G__8137__delegate;
return G__8137;
})()
,scrambler.puzzle.core.get_piece_axis_values.call(null,piece_id)));
});
/**
 * Returns 1 or -1 depending on the 'handedness' of a piece.
 * 
 *   Unlike pentaquark394's implementation, we determine the handedness of a piece
 *   by looking at whether the sum of a piece's stickers (each either 0 or 1) is
 *   even or odd.
 * 
 *   Pentaquark394's explanation:
 * 
 *   Since some pieces like wogm are mirror images of wrbv if we don't distinguish
 *   color pairs, their clockwise/counterclockwise orientations are switched.
 * 
 *   To take account of this, we have to keep track of the 'handedness' of each
 *   piece.
 */
scrambler.puzzle.core.handedness = (function scrambler$puzzle$core$handedness(piece_id){
if(cljs.core.even_QMARK_.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,scrambler.puzzle.core.get_piece_axis_values.call(null,piece_id)))){
return (1);
} else {
return (-1);
}
});
/**
 * Returns -1 (CCW), 0 (no twist), or 1, representing how a corner is twisted.
 * 
 *   This algorithm is copied from pentaquark394's program.
 */
scrambler.puzzle.core.get_corner_twist = (function scrambler$puzzle$core$get_corner_twist(puzzle,piece_id){
return ((function (){var G__8141 = cljs.core.mod.call(null,(function (p1__8140_SHARP_){
return (cljs.core.get.call(null,p1__8140_SHARP_,(0)) + cljs.core.get.call(null,p1__8140_SHARP_,(2)));
}).call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"o","o",-1350007228).cljs$core$IFn$_invoke$arity$1(puzzle),piece_id)),(4));
switch (G__8141) {
case (1):
return (1);

break;
case (3):
return (-1);

break;
default:
return (0);

}
})() * scrambler.puzzle.core.handedness.call(null,piece_id));
});
/**
 * Returns the sum of all twisted corners. See get-corner-twist.
 */
scrambler.puzzle.core.get_corner_twist_sum = (function scrambler$puzzle$core$get_corner_twist_sum(puzzle){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__8143_SHARP_){
return scrambler.puzzle.core.get_corner_twist.call(null,puzzle,p1__8143_SHARP_);
}),cljs.core.range.call(null,(16))));
});

//# sourceMappingURL=core.js.map
