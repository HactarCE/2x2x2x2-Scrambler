// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.puzzle.state_generator');
goog.require('cljs.core');
goog.require('scrambler.puzzle.core');
goog.require('scrambler.puzzle.permutation_utils');
/**
 * Twists a corner by twist (-1=CCW, 0=none, 1=CW). Applies #(mod % 3) to input.
 */
scrambler.puzzle.state_generator.twist_corner = (function scrambler$puzzle$state_generator$twist_corner(puzzle,piece_id,twist){
return (function (p1__13336_SHARP_){
return cljs.core.update_in.call(null,puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),piece_id], null),p1__13336_SHARP_);
}).call(null,(function (){var G__13337 = cljs.core.mod.call(null,(twist * scrambler.puzzle.core.handedness.call(null,piece_id)),(3));
switch (G__13337) {
case (1):
return ((function (G__13337){
return (function (p1__13334_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys.call(null,p1__13334_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
});
;})(G__13337))

break;
case (2):
return ((function (G__13337){
return (function (p1__13335_SHARP_){
return scrambler.puzzle.permutation_utils.cycle_keys.call(null,p1__13335_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2),(1)], null));
});
;})(G__13337))

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
scrambler.puzzle.state_generator.resolve_handedness = (function scrambler$puzzle$state_generator$resolve_handedness(puzzle){

var puzzle__$1 = puzzle;
var indices = cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(puzzle__$1)));
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return puzzle__$1;
} else {
var G__13339 = (function (){var index = cljs.core.first.call(null,indices);
var piece_id = cljs.core.get_in.call(null,puzzle__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),index], null));
if((((scrambler.puzzle.core.handedness.call(null,index) * scrambler.puzzle.core.handedness.call(null,piece_id)) * scrambler.puzzle.permutation_utils.get_permutation_parity.call(null,cljs.core.get_in.call(null,puzzle__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),piece_id], null)))) > (0))){
return puzzle__$1;
} else {
return cljs.core.update_in.call(null,puzzle__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),piece_id], null),scrambler.puzzle.permutation_utils.swap_indices,(1),(3));
}
})();
var G__13340 = cljs.core.rest.call(null,indices);
puzzle__$1 = G__13339;
indices = G__13340;
continue;
}
break;
}
});
scrambler.puzzle.state_generator.get_scrambled_puzzle = (function scrambler$puzzle$state_generator$get_scrambled_puzzle(){

return scrambler.puzzle.state_generator.resolve_handedness.call(null,scrambler.puzzle.state_generator.resolve_corner_twist.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),scrambler.puzzle.permutation_utils.even_parity_shuffle.call(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(scrambler.puzzle.core.solved_puzzle)),new cljs.core.Keyword(null,"o","o",-1350007228),cljs.core.mapv.call(null,scrambler.puzzle.permutation_utils.even_parity_shuffle,new cljs.core.Keyword(null,"o","o",-1350007228).cljs$core$IFn$_invoke$arity$1(scrambler.puzzle.core.solved_puzzle))], null)));
});

//# sourceMappingURL=state_generator.js.map
