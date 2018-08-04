// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('scrambler.ui.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('scrambler.ui.flat_view');
goog.require('scrambler.puzzle.state_generator');
scrambler.ui.main.puzzle_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(scrambler.puzzle.state_generator.solved_puzzle);
scrambler.ui.main.scramble = (function scrambler$ui$main$scramble(puzzle){
return scrambler.puzzle.state_generator.get_scrambled_puzzle();
});
scrambler.ui.main.main_ui = (function scrambler$ui$main$main_ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"2x2x2x2 Scramble Generator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(scrambler.ui.main.puzzle_state,scrambler.ui.main.scramble);
})], null),"New scramble"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_puzzle,cljs.core.deref(scrambler.ui.main.puzzle_state)], null)], null);
});
