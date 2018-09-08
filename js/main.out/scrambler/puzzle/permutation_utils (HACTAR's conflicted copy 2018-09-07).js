// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.puzzle.permutation_utils');
goog.require('cljs.core');
scrambler.puzzle.permutation_utils.swap_indices = (function scrambler$puzzle$permutation_utils$swap_indices(v,i1,i2){
return cljs.core.assoc.call(null,v,i1,cljs.core.nth.call(null,v,i2),i2,cljs.core.nth.call(null,v,i1));
});
scrambler.puzzle.permutation_utils.swap_indices_BANG_ = (function scrambler$puzzle$permutation_utils$swap_indices_BANG_(v,i1,i2){
return cljs.core.assoc_BANG_.call(null,v,i1,cljs.core.nth.call(null,v,i2),i2,cljs.core.nth.call(null,v,i1));
});
/**
 * Returns the parity (1 or -1) of a permutation by counting the number of swaps
 *   necessary to solve it.
 */
scrambler.puzzle.permutation_utils.get_permutation_parity = (function scrambler$puzzle$permutation_utils$get_permutation_parity(permutation){
var i = (0);
var v = cljs.core.transient$.call(null,permutation);
var parity = (1);
while(true){
var value = cljs.core.nth.call(null,v,i,null);
if((value == null)){
return parity;
} else {
if(cljs.core._EQ_.call(null,i,cljs.core.nth.call(null,v,i))){
var G__2841 = (i + (1));
var G__2842 = v;
var G__2843 = parity;
i = G__2841;
v = G__2842;
parity = G__2843;
continue;
} else {
var G__2844 = i;
var G__2845 = scrambler.puzzle.permutation_utils.swap_indices_BANG_.call(null,v,i,value);
var G__2846 = (- parity);
i = G__2844;
v = G__2845;
parity = G__2846;
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
return cljs.core.reduce.call(null,(function (m__$1,p__2847){
var vec__2848 = p__2847;
var k1 = cljs.core.nth.call(null,vec__2848,(0),null);
var k2 = cljs.core.nth.call(null,vec__2848,(1),null);
return scrambler.puzzle.permutation_utils.swap_indices.call(null,m__$1,k1,k2);
}),m,cljs.core.partition.call(null,(2),(1),cljs.core.reverse.call(null,keys)));
});
scrambler.puzzle.permutation_utils.even_parity_shuffle = (function scrambler$puzzle$permutation_utils$even_parity_shuffle(v){
var permutation = cljs.core.shuffle.call(null,v);
if((scrambler.puzzle.permutation_utils.get_permutation_parity.call(null,permutation) < (0))){
return scrambler.puzzle.permutation_utils.swap_indices.call(null,permutation,(0),(1));
} else {
return permutation;
}
});

//# sourceMappingURL=permutation_utils.js.map
