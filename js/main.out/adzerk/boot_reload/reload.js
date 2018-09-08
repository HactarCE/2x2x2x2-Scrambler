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
return (function (p1__1046_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__1046_SHARP_),path);
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
var seq__1047 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__1048 = null;
var count__1049 = (0);
var i__1050 = (0);
while(true){
if((i__1050 < count__1049)){
var s = cljs.core._nth.call(null,chunk__1048,i__1050);
var temp__4657__auto___1051 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1051)){
var sheet_1052 = temp__4657__auto___1051;
var temp__4657__auto___1053__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1052.href,changed);
if(cljs.core.truth_(temp__4657__auto___1053__$1)){
var href_uri_1054 = temp__4657__auto___1053__$1;
sheet_1052.ownerNode.href = href_uri_1054.makeUnique().toString();
} else {
}
} else {
}


var G__1055 = seq__1047;
var G__1056 = chunk__1048;
var G__1057 = count__1049;
var G__1058 = (i__1050 + (1));
seq__1047 = G__1055;
chunk__1048 = G__1056;
count__1049 = G__1057;
i__1050 = G__1058;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1047);
if(temp__4657__auto__){
var seq__1047__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1047__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__1047__$1);
var G__1059 = cljs.core.chunk_rest.call(null,seq__1047__$1);
var G__1060 = c__4351__auto__;
var G__1061 = cljs.core.count.call(null,c__4351__auto__);
var G__1062 = (0);
seq__1047 = G__1059;
chunk__1048 = G__1060;
count__1049 = G__1061;
i__1050 = G__1062;
continue;
} else {
var s = cljs.core.first.call(null,seq__1047__$1);
var temp__4657__auto___1063__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1063__$1)){
var sheet_1064 = temp__4657__auto___1063__$1;
var temp__4657__auto___1065__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1064.href,changed);
if(cljs.core.truth_(temp__4657__auto___1065__$2)){
var href_uri_1066 = temp__4657__auto___1065__$2;
sheet_1064.ownerNode.href = href_uri_1066.makeUnique().toString();
} else {
}
} else {
}


var G__1067 = cljs.core.next.call(null,seq__1047__$1);
var G__1068 = null;
var G__1069 = (0);
var G__1070 = (0);
seq__1047 = G__1067;
chunk__1048 = G__1068;
count__1049 = G__1069;
i__1050 = G__1070;
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
var seq__1071 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__1072 = null;
var count__1073 = (0);
var i__1074 = (0);
while(true){
if((i__1074 < count__1073)){
var s = cljs.core._nth.call(null,chunk__1072,i__1074);
var temp__4657__auto___1075 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1075)){
var image_1076 = temp__4657__auto___1075;
var temp__4657__auto___1077__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_1076.src,changed);
if(cljs.core.truth_(temp__4657__auto___1077__$1)){
var href_uri_1078 = temp__4657__auto___1077__$1;
image_1076.src = href_uri_1078.makeUnique().toString();
} else {
}
} else {
}


var G__1079 = seq__1071;
var G__1080 = chunk__1072;
var G__1081 = count__1073;
var G__1082 = (i__1074 + (1));
seq__1071 = G__1079;
chunk__1072 = G__1080;
count__1073 = G__1081;
i__1074 = G__1082;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1071);
if(temp__4657__auto__){
var seq__1071__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1071__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__1071__$1);
var G__1083 = cljs.core.chunk_rest.call(null,seq__1071__$1);
var G__1084 = c__4351__auto__;
var G__1085 = cljs.core.count.call(null,c__4351__auto__);
var G__1086 = (0);
seq__1071 = G__1083;
chunk__1072 = G__1084;
count__1073 = G__1085;
i__1074 = G__1086;
continue;
} else {
var s = cljs.core.first.call(null,seq__1071__$1);
var temp__4657__auto___1087__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1087__$1)){
var image_1088 = temp__4657__auto___1087__$1;
var temp__4657__auto___1089__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_1088.src,changed);
if(cljs.core.truth_(temp__4657__auto___1089__$2)){
var href_uri_1090 = temp__4657__auto___1089__$2;
image_1088.src = href_uri_1090.makeUnique().toString();
} else {
}
} else {
}


var G__1091 = cljs.core.next.call(null,seq__1071__$1);
var G__1092 = null;
var G__1093 = (0);
var G__1094 = (0);
seq__1071 = G__1091;
chunk__1072 = G__1092;
count__1073 = G__1093;
i__1074 = G__1094;
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
return (function (p1__1095_SHARP_){
return goog.html.legacyconversions.trustedResourceUrlFromString(p1__1095_SHARP_.toString());
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
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__1098){
var map__1099 = p__1098;
var map__1099__$1 = ((((!((map__1099 == null)))?(((((map__1099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1099):map__1099);
var on_jsload = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__1099,map__1099__$1,on_jsload){
return (function (p1__1096_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__1096_SHARP_,".js");
});})(map__1099,map__1099__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
adzerk.boot_reload.reload.load_files.call(null,cljs.core.map.call(null,((function (js_files,map__1099,map__1099__$1,on_jsload){
return (function (p1__1097_SHARP_){
return goog.Uri.parse(p1__1097_SHARP_).makeUnique();
});})(js_files,map__1099,map__1099__$1,on_jsload))
,js_files)).addCallbacks(((function (js_files,map__1099,map__1099__$1,on_jsload){
return (function() { 
var G__1101__delegate = function (_){
return on_jsload.call(null);
};
var G__1101 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__1102__i = 0, G__1102__a = new Array(arguments.length -  0);
while (G__1102__i < G__1102__a.length) {G__1102__a[G__1102__i] = arguments[G__1102__i + 0]; ++G__1102__i;}
  _ = new cljs.core.IndexedSeq(G__1102__a,0,null);
} 
return G__1101__delegate.call(this,_);};
G__1101.cljs$lang$maxFixedArity = 0;
G__1101.cljs$lang$applyTo = (function (arglist__1103){
var _ = cljs.core.seq(arglist__1103);
return G__1101__delegate(_);
});
G__1101.cljs$core$IFn$_invoke$arity$variadic = G__1101__delegate;
return G__1101;
})()
;})(js_files,map__1099,map__1099__$1,on_jsload))
,((function (js_files,map__1099,map__1099__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__1099,map__1099__$1,on_jsload))
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

var seq__1104_1108 = cljs.core.seq.call(null,things_to_log);
var chunk__1105_1109 = null;
var count__1106_1110 = (0);
var i__1107_1111 = (0);
while(true){
if((i__1107_1111 < count__1106_1110)){
var t_1112 = cljs.core._nth.call(null,chunk__1105_1109,i__1107_1111);
console.log(t_1112);


var G__1113 = seq__1104_1108;
var G__1114 = chunk__1105_1109;
var G__1115 = count__1106_1110;
var G__1116 = (i__1107_1111 + (1));
seq__1104_1108 = G__1113;
chunk__1105_1109 = G__1114;
count__1106_1110 = G__1115;
i__1107_1111 = G__1116;
continue;
} else {
var temp__4657__auto___1117 = cljs.core.seq.call(null,seq__1104_1108);
if(temp__4657__auto___1117){
var seq__1104_1118__$1 = temp__4657__auto___1117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1104_1118__$1)){
var c__4351__auto___1119 = cljs.core.chunk_first.call(null,seq__1104_1118__$1);
var G__1120 = cljs.core.chunk_rest.call(null,seq__1104_1118__$1);
var G__1121 = c__4351__auto___1119;
var G__1122 = cljs.core.count.call(null,c__4351__auto___1119);
var G__1123 = (0);
seq__1104_1108 = G__1120;
chunk__1105_1109 = G__1121;
count__1106_1110 = G__1122;
i__1107_1111 = G__1123;
continue;
} else {
var t_1124 = cljs.core.first.call(null,seq__1104_1118__$1);
console.log(t_1124);


var G__1125 = cljs.core.next.call(null,seq__1104_1118__$1);
var G__1126 = null;
var G__1127 = (0);
var G__1128 = (0);
seq__1104_1108 = G__1125;
chunk__1105_1109 = G__1126;
count__1106_1110 = G__1127;
i__1107_1111 = G__1128;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__1129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1129_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__1130){
var map__1131 = p__1130;
var map__1131__$1 = ((((!((map__1131 == null)))?(((((map__1131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1131):map__1131);
var canonical_path = cljs.core.get.call(null,map__1131__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__1131__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__1133 = window;
var G__1133__$1 = (((G__1133 == null))?null:G__1133.location);
if((G__1133__$1 == null)){
return null;
} else {
return G__1133__$1.protocol;
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
var G__1134 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__1134);

adzerk.boot_reload.reload.reload_css.call(null,G__1134);

adzerk.boot_reload.reload.reload_img.call(null,G__1134);

return G__1134;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
