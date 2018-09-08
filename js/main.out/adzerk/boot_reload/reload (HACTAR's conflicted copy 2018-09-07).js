// Compiled by ClojureScript 1.10.339 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.html.legacyconversions');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__1297_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__1297_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__1298 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__1299 = null;
var count__1300 = (0);
var i__1301 = (0);
while(true){
if((i__1301 < count__1300)){
var s = cljs.core._nth.call(null,chunk__1299,i__1301);
var temp__4657__auto___1302 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1302)){
var sheet_1303 = temp__4657__auto___1302;
var temp__4657__auto___1304__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1303.href,changed);
if(cljs.core.truth_(temp__4657__auto___1304__$1)){
var href_uri_1305 = temp__4657__auto___1304__$1;
sheet_1303.ownerNode.href = href_uri_1305.makeUnique().toString();
} else {
}
} else {
}


var G__1306 = seq__1298;
var G__1307 = chunk__1299;
var G__1308 = count__1300;
var G__1309 = (i__1301 + (1));
seq__1298 = G__1306;
chunk__1299 = G__1307;
count__1300 = G__1308;
i__1301 = G__1309;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1298);
if(temp__4657__auto__){
var seq__1298__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1298__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__1298__$1);
var G__1310 = cljs.core.chunk_rest.call(null,seq__1298__$1);
var G__1311 = c__4351__auto__;
var G__1312 = cljs.core.count.call(null,c__4351__auto__);
var G__1313 = (0);
seq__1298 = G__1310;
chunk__1299 = G__1311;
count__1300 = G__1312;
i__1301 = G__1313;
continue;
} else {
var s = cljs.core.first.call(null,seq__1298__$1);
var temp__4657__auto___1314__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1314__$1)){
var sheet_1315 = temp__4657__auto___1314__$1;
var temp__4657__auto___1316__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1315.href,changed);
if(cljs.core.truth_(temp__4657__auto___1316__$2)){
var href_uri_1317 = temp__4657__auto___1316__$2;
sheet_1315.ownerNode.href = href_uri_1317.makeUnique().toString();
} else {
}
} else {
}


var G__1318 = cljs.core.next.call(null,seq__1298__$1);
var G__1319 = null;
var G__1320 = (0);
var G__1321 = (0);
seq__1298 = G__1318;
chunk__1299 = G__1319;
count__1300 = G__1320;
i__1301 = G__1321;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__1322 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__1323 = null;
var count__1324 = (0);
var i__1325 = (0);
while(true){
if((i__1325 < count__1324)){
var s = cljs.core._nth.call(null,chunk__1323,i__1325);
var temp__4657__auto___1326 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1326)){
var image_1327 = temp__4657__auto___1326;
var temp__4657__auto___1328__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_1327.src,changed);
if(cljs.core.truth_(temp__4657__auto___1328__$1)){
var href_uri_1329 = temp__4657__auto___1328__$1;
image_1327.src = href_uri_1329.makeUnique().toString();
} else {
}
} else {
}


var G__1330 = seq__1322;
var G__1331 = chunk__1323;
var G__1332 = count__1324;
var G__1333 = (i__1325 + (1));
seq__1322 = G__1330;
chunk__1323 = G__1331;
count__1324 = G__1332;
i__1325 = G__1333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1322);
if(temp__4657__auto__){
var seq__1322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1322__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__1322__$1);
var G__1334 = cljs.core.chunk_rest.call(null,seq__1322__$1);
var G__1335 = c__4351__auto__;
var G__1336 = cljs.core.count.call(null,c__4351__auto__);
var G__1337 = (0);
seq__1322 = G__1334;
chunk__1323 = G__1335;
count__1324 = G__1336;
i__1325 = G__1337;
continue;
} else {
var s = cljs.core.first.call(null,seq__1322__$1);
var temp__4657__auto___1338__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1338__$1)){
var image_1339 = temp__4657__auto___1338__$1;
var temp__4657__auto___1340__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_1339.src,changed);
if(cljs.core.truth_(temp__4657__auto___1340__$2)){
var href_uri_1341 = temp__4657__auto___1340__$2;
image_1339.src = href_uri_1341.makeUnique().toString();
} else {
}
} else {
}


var G__1342 = cljs.core.next.call(null,seq__1322__$1);
var G__1343 = null;
var G__1344 = (0);
var G__1345 = (0);
seq__1322 = G__1342;
chunk__1323 = G__1343;
count__1324 = G__1344;
i__1325 = G__1345;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.load_files = (function adzerk$boot_reload$reload$load_files(urls){
var opts = ({"cleanupWhenDone": true});
if((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoadMany !== 'undefined')){
return goog.net.jsloader.safeLoadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (opts){
return (function (p1__1346_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__1346_SHARP_.toString());
});})(opts))
,urls)),opts);
} else {
if((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.loadMany !== 'undefined')){
return goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,urls),opts);
} else {
throw cljs.core.ex_info.call(null,"jsloader/safeLoadMany not found",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__1349){
var map__1350 = p__1349;
var map__1350__$1 = ((((!((map__1350 == null)))?(((((map__1350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1350):map__1350);
var on_jsload = cljs.core.get.call(null,map__1350__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__1350,map__1350__$1,on_jsload){
return (function (p1__1347_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__1347_SHARP_,".js");
});})(map__1350,map__1350__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__1350,map__1350__$1,on_jsload){
return (function (p1__1348_SHARP_){
return goog.Uri.parse(p1__1348_SHARP_).makeUnique();
});})(js_files,map__1350,map__1350__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__1350,map__1350__$1,on_jsload){
return (function() { 
var G__1352__delegate = function (_){
return on_jsload.call(null);
};
var G__1352 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__1353__i = 0, G__1353__a = new Array(arguments.length -  0);
while (G__1353__i < G__1353__a.length) {G__1353__a[G__1353__i] = arguments[G__1353__i + 0]; ++G__1353__i;}
  _ = new cljs.core.IndexedSeq(G__1353__a,0,null);
} 
return G__1352__delegate.call(this,_);};
G__1352.cljs$lang$maxFixedArity = 0;
G__1352.cljs$lang$applyTo = (function (arglist__1354){
var _ = cljs.core.seq(arglist__1354);
return G__1352__delegate(_);
});
G__1352.cljs$core$IFn$_invoke$arity$variadic = G__1352__delegate;
return G__1352;
})()
;})(js_files,map__1350,map__1350__$1,on_jsload))
,((function (js_files,map__1350,map__1350__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__1350,map__1350__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__1355_1359 = cljs.core.seq.call(null,things_to_log);
var chunk__1356_1360 = null;
var count__1357_1361 = (0);
var i__1358_1362 = (0);
while(true){
if((i__1358_1362 < count__1357_1361)){
var t_1363 = cljs.core._nth.call(null,chunk__1356_1360,i__1358_1362);
console.log(t_1363);


var G__1364 = seq__1355_1359;
var G__1365 = chunk__1356_1360;
var G__1366 = count__1357_1361;
var G__1367 = (i__1358_1362 + (1));
seq__1355_1359 = G__1364;
chunk__1356_1360 = G__1365;
count__1357_1361 = G__1366;
i__1358_1362 = G__1367;
continue;
} else {
var temp__4657__auto___1368 = cljs.core.seq.call(null,seq__1355_1359);
if(temp__4657__auto___1368){
var seq__1355_1369__$1 = temp__4657__auto___1368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1355_1369__$1)){
var c__4351__auto___1370 = cljs.core.chunk_first.call(null,seq__1355_1369__$1);
var G__1371 = cljs.core.chunk_rest.call(null,seq__1355_1369__$1);
var G__1372 = c__4351__auto___1370;
var G__1373 = cljs.core.count.call(null,c__4351__auto___1370);
var G__1374 = (0);
seq__1355_1359 = G__1371;
chunk__1356_1360 = G__1372;
count__1357_1361 = G__1373;
i__1358_1362 = G__1374;
continue;
} else {
var t_1375 = cljs.core.first.call(null,seq__1355_1369__$1);
console.log(t_1375);


var G__1376 = cljs.core.next.call(null,seq__1355_1369__$1);
var G__1377 = null;
var G__1378 = (0);
var G__1379 = (0);
seq__1355_1359 = G__1376;
chunk__1356_1360 = G__1377;
count__1357_1361 = G__1378;
i__1358_1362 = G__1379;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (((typeof window !== 'undefined')) && ((typeof window !== 'undefined') && (typeof window.document !== 'undefined')) && ((typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined')));
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__1380_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1380_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__1381){
var map__1382 = p__1381;
var map__1382__$1 = ((((!((map__1382 == null)))?(((((map__1382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1382):map__1382);
var canonical_path = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__1382__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__1384 = window;
var G__1384__$1 = (((G__1384 == null))?null:G__1384.location);
if((G__1384__$1 == null)){
return null;
} else {
return G__1384__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__1385 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__1385);

adzerk.boot_reload.reload.reload_css.call(null,G__1385);

adzerk.boot_reload.reload.reload_img.call(null,G__1385);

return G__1385;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
