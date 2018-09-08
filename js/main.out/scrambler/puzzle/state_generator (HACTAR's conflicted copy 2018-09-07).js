// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.puzzle.state_generator');
goog.require('cljs.core');
goog.require('scrambler.puzzle.core');
goog.require('scrambler.puzzle.permutation_utils');
/**
 * Twists a corner by twist (-1=CCW, 0=none, 1=CW). Applies #(mod % 3) to input.
 */
scrambler.puzzle.state_generator.twist_corner = (function scrambler$puzzle$state_generator$twist_corner(puzzle,piece_id,twist){
return (function (p1__3550_SHARP_){
return cljs.core.update_in.call(null,puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),piece_id], null),p1__3550_SHARP_);
}).call(null,(function (){var G__3551 = cljs.core.mod.call(null,(twist * scrambler.puzzle.core.handedness.call(null,piece_id)),(3));
switch (G__3551) {
case (1):
return ((function (G__3551){
return (function (p1__3548_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys.call(null,p1__3548_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
});
;})(G__3551))

break;
case (2):
return ((function (G__3551){
return (function (p1__3549_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys.call(null,p1__3549_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1)], null));
});
;})(G__3551))

break;
default:
return cljs.core.identity;

}
})());
});
scrambler.puzzle.state_generator.resolve_corner_twist = (function scrambler$puzzle$state_generator$resolve_corner_twist(puzzle){

var total_twist = scrambler.puzzle.core.get_corner_twist_sum.call(null,puzzle);
return scrambler.puzzle.state_generator.twist_corner.call(null,puzzle,(0),(- total_twist));
});
scrambler.puzzle.state_generator.get_scrambled_puzzle = (function scrambler$puzzle$state_generator$get_scrambled_puzzle(){

return scrambler.puzzle.state_generator.resolve_corner_twist.call(null,(function (p1__3553_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),scrambler.puzzle.permutation_utils.even_parity_shuffle.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__3553_SHARP_)),new cljs.core.Keyword(null,"o","o",-1350007228),cljs.core.vec.call(null,cljs.core.map.call(null,scrambler.puzzle.permutation_utils.even_parity_shuffle,new cljs.core.Keyword(null,"o","o",-1350007228).cljs$core$IFn$_invoke$arity$1(p1__3553_SHARP_)))], null).call(null);
}).call(null,scrambler.puzzle.core.solved_puzzle));
});

//# sourceMappingURL=state_generator.js.map
