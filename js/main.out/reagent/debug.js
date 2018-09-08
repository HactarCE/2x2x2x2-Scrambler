// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1277__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1277 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1278__i = 0, G__1278__a = new Array(arguments.length -  0);
while (G__1278__i < G__1278__a.length) {G__1278__a[G__1278__i] = arguments[G__1278__i + 0]; ++G__1278__i;}
  args = new cljs.core.IndexedSeq(G__1278__a,0,null);
} 
return G__1277__delegate.call(this,args);};
G__1277.cljs$lang$maxFixedArity = 0;
G__1277.cljs$lang$applyTo = (function (arglist__1279){
var args = cljs.core.seq(arglist__1279);
return G__1277__delegate(args);
});
G__1277.cljs$core$IFn$_invoke$arity$variadic = G__1277__delegate;
return G__1277;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1280__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1281__i = 0, G__1281__a = new Array(arguments.length -  0);
while (G__1281__i < G__1281__a.length) {G__1281__a[G__1281__i] = arguments[G__1281__i + 0]; ++G__1281__i;}
  args = new cljs.core.IndexedSeq(G__1281__a,0,null);
} 
return G__1280__delegate.call(this,args);};
G__1280.cljs$lang$maxFixedArity = 0;
G__1280.cljs$lang$applyTo = (function (arglist__1282){
var args = cljs.core.seq(arglist__1282);
return G__1280__delegate(args);
});
G__1280.cljs$core$IFn$_invoke$arity$variadic = G__1280__delegate;
return G__1280;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
