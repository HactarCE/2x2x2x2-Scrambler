// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('scrambler.ui.main');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof scrambler !== 'undefined') && (typeof scrambler.core !== 'undefined') && (typeof scrambler.core.app_state !== 'undefined')){
} else {
scrambler.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
scrambler.core.init_BANG_ = (function scrambler$core$init_BANG_(){
return reagent.core.render_component.call(null,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.main.main_ui], null);
}),document.getElementById("app"));
});
scrambler.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
