// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5168__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5169__i = 0, G__5169__a = new Array(arguments.length -  0);
while (G__5169__i < G__5169__a.length) {G__5169__a[G__5169__i] = arguments[G__5169__i + 0]; ++G__5169__i;}
  args = new cljs.core.IndexedSeq(G__5169__a,0,null);
} 
return G__5168__delegate.call(this,args);};
G__5168.cljs$lang$maxFixedArity = 0;
G__5168.cljs$lang$applyTo = (function (arglist__5170){
var args = cljs.core.seq(arglist__5170);
return G__5168__delegate(args);
});
G__5168.cljs$core$IFn$_invoke$arity$variadic = G__5168__delegate;
return G__5168;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5171__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5172__i = 0, G__5172__a = new Array(arguments.length -  0);
while (G__5172__i < G__5172__a.length) {G__5172__a[G__5172__i] = arguments[G__5172__i + 0]; ++G__5172__i;}
  args = new cljs.core.IndexedSeq(G__5172__a,0,null);
} 
return G__5171__delegate.call(this,args);};
G__5171.cljs$lang$maxFixedArity = 0;
G__5171.cljs$lang$applyTo = (function (arglist__5173){
var args = cljs.core.seq(arglist__5173);
return G__5171__delegate(args);
});
G__5171.cljs$core$IFn$_invoke$arity$variadic = G__5171__delegate;
return G__5171;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
