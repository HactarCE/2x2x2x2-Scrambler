// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('scrambler.puzzle.state_generator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('scrambler.puzzle.permutation_utils');
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
 *   'inside' front
 *   'outside' back if positive handedness; 'inside' back if negative
 *   'outside' front
 *   'inside' back if positive handedness; 'outside' back if negative
 */
scrambler.puzzle.state_generator.solved_puzzle = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p,cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$1((16))),cljs.core.cst$kw$o,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((16),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null)))], null);
/**
 * A vector mapping piece ID to a name based on sticker colors. This order is
 *   different from pentaquark394's program, and thus requires a more complicated
 *   get-handedness function.
 */
scrambler.puzzle.state_generator.piece_names = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, ["wrbv","yrbv","yobv","wobv","wogv","yogv","yrgv","wrgv","wrgm","yrgm","yogm","wogm","wobm","yobm","yrbm","wrbm"], null);
scrambler.puzzle.state_generator.get_stickers = (function scrambler$puzzle$state_generator$get_stickers(piece_id){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scrambler.puzzle.state_generator.piece_names,piece_id)));
});
/**
 * A mask dictating where each piece belongs in the assembled puzzle.
 * 
 *   This is directly copied from pentaquark394's program.
 */
scrambler.puzzle.state_generator.piece_mask = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(12),(13),(14),(15)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(6),(5),(4),(11),(10),(9),(8)], null)], null);
/**
 * Returns 1 or -1 depending on the 'handedness' of a piece.
 * 
 * Pentaquark394's explanation:
 * 
 * Since some pieces like wogm are mirror images of wrbv if we don't distinguish
 * color pairs, their clockwise/counterclockwise orientations are switched.
 * 
 * To take account of this, we have to keep track of the 'handedness' of each
 * piece. The order of pieces is designed to make this easy to track.
 */
scrambler.puzzle.state_generator.handedness = (function scrambler$puzzle$state_generator$handedness(piece_id){
if((cljs.core.mod(piece_id,(2)) === (0))){
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
scrambler.puzzle.state_generator.get_corner_twist = (function scrambler$puzzle$state_generator$get_corner_twist(puzzle,piece_id){
return ((function (){var G__5683 = cljs.core.mod((function (){var G__5685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$o.cljs$core$IFn$_invoke$arity$1(puzzle),piece_id);
var fexpr__5684 = ((function (G__5685){
return (function (p1__5682_SHARP_){
return (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__5682_SHARP_,(0)) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__5682_SHARP_,(2)));
});})(G__5685))
;
return fexpr__5684(G__5685);
})(),(4));
switch (G__5683) {
case (1):
return (1);

break;
case (3):
return (-1);

break;
default:
return (0);

}
})() * scrambler.puzzle.state_generator.handedness(piece_id));
});
/**
 * Returns the sum of all twisted corners. See get-corner-twist.
 */
scrambler.puzzle.state_generator.get_corner_twist_sum = (function scrambler$puzzle$state_generator$get_corner_twist_sum(puzzle){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__5687_SHARP_){
return scrambler.puzzle.state_generator.get_corner_twist(puzzle,p1__5687_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((16))));
});
/**
 * Twists a corner by twist (-1=CCW, 0=none, 1=CW). Applies #(mod % 3) to input.
 */
scrambler.puzzle.state_generator.twist_corner = (function scrambler$puzzle$state_generator$twist_corner(puzzle,piece_id,twist){
var G__5692 = (function (){var G__5693 = cljs.core.mod((twist * scrambler.puzzle.state_generator.handedness(piece_id)),(3));
switch (G__5693) {
case (1):
return ((function (G__5693){
return (function (p1__5688_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys(p1__5688_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
});
;})(G__5693))

break;
case (2):
return ((function (G__5693){
return (function (p1__5689_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys(p1__5689_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1)], null));
});
;})(G__5693))

break;
default:
return cljs.core.identity;

}
})();
var fexpr__5691 = ((function (G__5692){
return (function (p1__5690_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$o,piece_id], null),p1__5690_SHARP_);
});})(G__5692))
;
return fexpr__5691(G__5692);
});
scrambler.puzzle.state_generator.resolve_corner_twist = (function scrambler$puzzle$state_generator$resolve_corner_twist(puzzle){
var total_twist = scrambler.puzzle.state_generator.get_corner_twist_sum(puzzle);
return scrambler.puzzle.state_generator.twist_corner(puzzle,(0),(- total_twist));
});
scrambler.puzzle.state_generator.get_scrambled_puzzle = (function scrambler$puzzle$state_generator$get_scrambled_puzzle(){
return scrambler.puzzle.state_generator.resolve_corner_twist(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$p,scrambler.puzzle.permutation_utils.even_parity_shuffle(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(scrambler.puzzle.state_generator.solved_puzzle)),cljs.core.cst$kw$o,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(scrambler.puzzle.permutation_utils.even_parity_shuffle,cljs.core.cst$kw$o.cljs$core$IFn$_invoke$arity$1(scrambler.puzzle.state_generator.solved_puzzle)))], null));
});
