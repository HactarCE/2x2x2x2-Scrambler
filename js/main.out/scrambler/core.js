// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('scrambler.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('scrambler.ui.main');
cljs.core.enable_console_print_BANG_();
if((typeof scrambler !== 'undefined') && (typeof scrambler.core !== 'undefined') && (typeof scrambler.core.app_state !== 'undefined')){
} else {
scrambler.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
scrambler.core.init_BANG_ = (function scrambler$core$init_BANG_(){
var G__5732_5734 = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.main.main_ui], null);
});
var G__5733_5735 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__5732_5734,G__5733_5735) : reagent.core.render_component.call(null,G__5732_5734,G__5733_5735));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["reloaded"], 0));
});
scrambler.core.init_BANG_();
