// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.ui.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('scrambler.ui.flat_view');
goog.require('scrambler.puzzle.core');
goog.require('scrambler.puzzle.state_generator');
scrambler.ui.main.puzzle_state = reagent.core.atom.call(null,scrambler.puzzle.core.solved_puzzle);
scrambler.ui.main.scramble = (function scrambler$ui$main$scramble(puzzle){
return scrambler.puzzle.state_generator.get_scrambled_puzzle.call(null);
});
scrambler.ui.main.main_ui = (function scrambler$ui$main$main_ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"2x2x2x2 Scramble Generator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,scrambler.ui.main.puzzle_state,scrambler.ui.main.scramble);
})], null),"New scramble"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_puzzle,cljs.core.deref.call(null,scrambler.ui.main.puzzle_state)], null)], null);
});

//# sourceMappingURL=main.js.map
