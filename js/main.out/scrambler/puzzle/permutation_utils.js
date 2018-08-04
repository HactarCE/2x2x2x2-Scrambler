// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('scrambler.puzzle.permutation_utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
scrambler.puzzle.permutation_utils.swap_indices = (function scrambler$puzzle$permutation_utils$swap_indices(v,i1,i2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,i1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i1)], 0));
});
scrambler.puzzle.permutation_utils.swap_indices_BANG_ = (function scrambler$puzzle$permutation_utils$swap_indices_BANG_(v,i1,i2){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(v,i1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i2,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i1)], 0));
});
/**
 * Returns the parity (1 or -1) of a permutation by counting the number of swaps
 *   necessary to solve it.
 */
scrambler.puzzle.permutation_utils.get_permutation_parity = (function scrambler$puzzle$permutation_utils$get_permutation_parity(permutation){
var i = (0);
var v = cljs.core.transient$(permutation);
var parity = (1);
while(true){
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,i,null);
if((value == null)){
return parity;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i))){
var G__5670 = (i + (1));
var G__5671 = v;
var G__5672 = parity;
i = G__5670;
v = G__5671;
parity = G__5672;
continue;
} else {
var G__5673 = i;
var G__5674 = scrambler.puzzle.permutation_utils.swap_indices_BANG_(v,i,value);
var G__5675 = (- parity);
i = G__5673;
v = G__5674;
parity = G__5675;
continue;

}
}
break;
}
});
/**
 * Cycle keys in a map.
 */
scrambler.puzzle.permutation_utils.cycle_keys = (function scrambler$puzzle$permutation_utils$cycle_keys(m,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__5676){
var vec__5677 = p__5676;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5677,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5677,(1),null);
return scrambler.puzzle.permutation_utils.swap_indices(m__$1,k1,k2);
}),m,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.reverse(keys)));
});
scrambler.puzzle.permutation_utils.even_parity_shuffle = (function scrambler$puzzle$permutation_utils$even_parity_shuffle(v){
var permutation = cljs.core.shuffle(v);
if((scrambler.puzzle.permutation_utils.get_permutation_parity(permutation) < (0))){
return scrambler.puzzle.permutation_utils.swap_indices(permutation,(0),(1));
} else {
return permutation;
}
});
