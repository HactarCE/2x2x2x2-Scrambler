// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2420){
var map__2421 = p__2420;
var map__2421__$1 = ((((!((map__2421 == null)))?(((((map__2421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2421):map__2421);
var m = map__2421__$1;
var n = cljs.core.get.call(null,map__2421__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2421__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2423_2445 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2424_2446 = null;
var count__2425_2447 = (0);
var i__2426_2448 = (0);
while(true){
if((i__2426_2448 < count__2425_2447)){
var f_2449 = cljs.core._nth.call(null,chunk__2424_2446,i__2426_2448);
cljs.core.println.call(null,"  ",f_2449);


var G__2450 = seq__2423_2445;
var G__2451 = chunk__2424_2446;
var G__2452 = count__2425_2447;
var G__2453 = (i__2426_2448 + (1));
seq__2423_2445 = G__2450;
chunk__2424_2446 = G__2451;
count__2425_2447 = G__2452;
i__2426_2448 = G__2453;
continue;
} else {
var temp__4657__auto___2454 = cljs.core.seq.call(null,seq__2423_2445);
if(temp__4657__auto___2454){
var seq__2423_2455__$1 = temp__4657__auto___2454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2423_2455__$1)){
var c__4351__auto___2456 = cljs.core.chunk_first.call(null,seq__2423_2455__$1);
var G__2457 = cljs.core.chunk_rest.call(null,seq__2423_2455__$1);
var G__2458 = c__4351__auto___2456;
var G__2459 = cljs.core.count.call(null,c__4351__auto___2456);
var G__2460 = (0);
seq__2423_2445 = G__2457;
chunk__2424_2446 = G__2458;
count__2425_2447 = G__2459;
i__2426_2448 = G__2460;
continue;
} else {
var f_2461 = cljs.core.first.call(null,seq__2423_2455__$1);
cljs.core.println.call(null,"  ",f_2461);


var G__2462 = cljs.core.next.call(null,seq__2423_2455__$1);
var G__2463 = null;
var G__2464 = (0);
var G__2465 = (0);
seq__2423_2445 = G__2462;
chunk__2424_2446 = G__2463;
count__2425_2447 = G__2464;
i__2426_2448 = G__2465;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2466 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2466);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2466)))?cljs.core.second.call(null,arglists_2466):arglists_2466));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2427_2467 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2428_2468 = null;
var count__2429_2469 = (0);
var i__2430_2470 = (0);
while(true){
if((i__2430_2470 < count__2429_2469)){
var vec__2431_2471 = cljs.core._nth.call(null,chunk__2428_2468,i__2430_2470);
var name_2472 = cljs.core.nth.call(null,vec__2431_2471,(0),null);
var map__2434_2473 = cljs.core.nth.call(null,vec__2431_2471,(1),null);
var map__2434_2474__$1 = ((((!((map__2434_2473 == null)))?(((((map__2434_2473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2434_2473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2434_2473):map__2434_2473);
var doc_2475 = cljs.core.get.call(null,map__2434_2474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2476 = cljs.core.get.call(null,map__2434_2474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2472);

cljs.core.println.call(null," ",arglists_2476);

if(cljs.core.truth_(doc_2475)){
cljs.core.println.call(null," ",doc_2475);
} else {
}


var G__2477 = seq__2427_2467;
var G__2478 = chunk__2428_2468;
var G__2479 = count__2429_2469;
var G__2480 = (i__2430_2470 + (1));
seq__2427_2467 = G__2477;
chunk__2428_2468 = G__2478;
count__2429_2469 = G__2479;
i__2430_2470 = G__2480;
continue;
} else {
var temp__4657__auto___2481 = cljs.core.seq.call(null,seq__2427_2467);
if(temp__4657__auto___2481){
var seq__2427_2482__$1 = temp__4657__auto___2481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2427_2482__$1)){
var c__4351__auto___2483 = cljs.core.chunk_first.call(null,seq__2427_2482__$1);
var G__2484 = cljs.core.chunk_rest.call(null,seq__2427_2482__$1);
var G__2485 = c__4351__auto___2483;
var G__2486 = cljs.core.count.call(null,c__4351__auto___2483);
var G__2487 = (0);
seq__2427_2467 = G__2484;
chunk__2428_2468 = G__2485;
count__2429_2469 = G__2486;
i__2430_2470 = G__2487;
continue;
} else {
var vec__2436_2488 = cljs.core.first.call(null,seq__2427_2482__$1);
var name_2489 = cljs.core.nth.call(null,vec__2436_2488,(0),null);
var map__2439_2490 = cljs.core.nth.call(null,vec__2436_2488,(1),null);
var map__2439_2491__$1 = ((((!((map__2439_2490 == null)))?(((((map__2439_2490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2439_2490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2439_2490):map__2439_2490);
var doc_2492 = cljs.core.get.call(null,map__2439_2491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2493 = cljs.core.get.call(null,map__2439_2491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2489);

cljs.core.println.call(null," ",arglists_2493);

if(cljs.core.truth_(doc_2492)){
cljs.core.println.call(null," ",doc_2492);
} else {
}


var G__2494 = cljs.core.next.call(null,seq__2427_2482__$1);
var G__2495 = null;
var G__2496 = (0);
var G__2497 = (0);
seq__2427_2467 = G__2494;
chunk__2428_2468 = G__2495;
count__2429_2469 = G__2496;
i__2430_2470 = G__2497;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__2441 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2442 = null;
var count__2443 = (0);
var i__2444 = (0);
while(true){
if((i__2444 < count__2443)){
var role = cljs.core._nth.call(null,chunk__2442,i__2444);
var temp__4657__auto___2498__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2498__$1)){
var spec_2499 = temp__4657__auto___2498__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2499));
} else {
}


var G__2500 = seq__2441;
var G__2501 = chunk__2442;
var G__2502 = count__2443;
var G__2503 = (i__2444 + (1));
seq__2441 = G__2500;
chunk__2442 = G__2501;
count__2443 = G__2502;
i__2444 = G__2503;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2441);
if(temp__4657__auto____$1){
var seq__2441__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2441__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__2441__$1);
var G__2504 = cljs.core.chunk_rest.call(null,seq__2441__$1);
var G__2505 = c__4351__auto__;
var G__2506 = cljs.core.count.call(null,c__4351__auto__);
var G__2507 = (0);
seq__2441 = G__2504;
chunk__2442 = G__2505;
count__2443 = G__2506;
i__2444 = G__2507;
continue;
} else {
var role = cljs.core.first.call(null,seq__2441__$1);
var temp__4657__auto___2508__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2508__$2)){
var spec_2509 = temp__4657__auto___2508__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2509));
} else {
}


var G__2510 = cljs.core.next.call(null,seq__2441__$1);
var G__2511 = null;
var G__2512 = (0);
var G__2513 = (0);
seq__2441 = G__2510;
chunk__2442 = G__2511;
count__2443 = G__2512;
i__2444 = G__2513;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
