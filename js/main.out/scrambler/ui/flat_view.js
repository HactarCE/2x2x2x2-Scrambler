// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('scrambler.ui.flat_view');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('scrambler.puzzle.state_generator');
scrambler.ui.flat_view.colors = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$w,"white",cljs.core.cst$kw$y,"yellow",cljs.core.cst$kw$r,"red",cljs.core.cst$kw$o,"darkorange",cljs.core.cst$kw$b,"royalblue",cljs.core.cst$kw$g,"limegreen",cljs.core.cst$kw$v,"purple",cljs.core.cst$kw$m,"fuchsia"], null);
scrambler.ui.flat_view.get_piece_colors = (function scrambler$ui$flat_view$get_piece_colors(piece_id){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(scrambler.ui.flat_view.colors,scrambler.puzzle.state_generator.get_stickers(piece_id)));
});
scrambler.ui.flat_view.piece_layout = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(12),(13),(14),(15)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(6),(5),(4),(11),(10),(9),(8)], null)], null);
scrambler.ui.flat_view.reversed_piece_layout = cljs.core.vec(cljs.core.rseq(scrambler.ui.flat_view.piece_layout));
scrambler.ui.flat_view.piece_size = (70);
scrambler.ui.flat_view.peek_size = 0.15;
scrambler.ui.flat_view.render_piece_label = (function scrambler$ui$flat_view$render_piece_label(piece_id,y){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y === (0)))?-0.2:1.2)),")","scale(0.2 0.2)"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_piece_label_$_iter__5697(s__5698){
return (new cljs.core.LazySeq(null,(function (){
var s__5698__$1 = s__5698;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__5698__$1);
if(temp__4657__auto__){
var s__5698__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5698__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__5698__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__5700 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__5699 = (0);
while(true){
if((i__5699 < size__4323__auto__)){
var vec__5701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__5699);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5701,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5701,(1),null);
cljs.core.chunk_append(b__5700,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,((-2) + axis),cljs.core.cst$kw$y,-0.5,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$fill,color,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null));

var G__5707 = (i__5699 + (1));
i__5699 = G__5707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5700),scrambler$ui$flat_view$render_piece_label_$_iter__5697(cljs.core.chunk_rest(s__5698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5700),null);
}
} else {
var vec__5704 = cljs.core.first(s__5698__$2);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5704,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5704,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$x,((-2) + axis),cljs.core.cst$kw$y,-0.5,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(1),cljs.core.cst$kw$fill,color,cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.1,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null),scrambler$ui$flat_view$render_piece_label_$_iter__5697(cljs.core.rest(s__5698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,scrambler.ui.flat_view.get_piece_colors(piece_id)));
})());
});
scrambler.ui.flat_view.render_piece = (function scrambler$ui$flat_view$render_piece(var_args){
var G__5710 = arguments.length;
switch (G__5710) {
case 3:
return scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$3 = (function (puzzle,x,y){
return scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$4(puzzle,x,y,null);
});

scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$4 = (function (puzzle,x,y,backside_QMARK_){
var layout = (cljs.core.truth_(backside_QMARK_)?scrambler.ui.flat_view.reversed_piece_layout:scrambler.ui.flat_view.piece_layout);
var piece_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))], null));
var orientation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$o,piece_id], null));
var piece_colors = scrambler.ui.flat_view.get_piece_colors(piece_id);
var colors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (layout,piece_id,orientation,piece_colors){
return (function (p1__5708_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(piece_colors,p1__5708_SHARP_);
});})(layout,piece_id,orientation,piece_colors))
,orientation);
var x_scale = ((cljs.core.truth_(backside_QMARK_)?(-1):(1)) * (((cljs.core.mod(x,(2)) === (0)))?(1):(-1)));
var y_scale = (((cljs.core.mod(y,(2)) === (0)))?(1):(-1));
var inverted_QMARK_ = (cljs.core.mod(((x + y) + piece_id),(2)) > (0));
var axis_map = (cljs.core.truth_(backside_QMARK_)?((inverted_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(0),(2)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3),(0),(2)], null)):((inverted_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1),(3)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(1)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece_label,piece_id,y], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(0.5 0.5)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_scale)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_scale),")","translate(-0.5 -0.5)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$points,"0,0 0,1 1,1",cljs.core.cst$kw$fill,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(axis_map,(0))),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.02,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$points,"0,0 1,0 1,1",cljs.core.cst$kw$fill,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(axis_map,(1))),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.02,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$d,["M 1 1","l ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size))," 0 a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 0 1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size)),"L 1 1"].join(''),cljs.core.cst$kw$fill,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(axis_map,(2))),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.02,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$d,["M 0 0","l ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 0 1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size),"L 0 0"].join(''),cljs.core.cst$kw$fill,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(axis_map,(3))),cljs.core.cst$kw$stroke,"black",cljs.core.cst$kw$stroke_DASH_width,0.02,cljs.core.cst$kw$stroke_DASH_linecap,"round"], null)], null)], null)], null);
});

scrambler.ui.flat_view.render_piece.cljs$lang$maxFixedArity = 4;

scrambler.ui.flat_view.render_puzzle = (function scrambler$ui$flat_view$render_puzzle(puzzle){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,((4) + (scrambler.ui.flat_view.piece_size * (8))),cljs.core.cst$kw$height,(scrambler.ui.flat_view.piece_size * (8))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(2 50)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_puzzle_$_iter__5712(s__5713){
return (new cljs.core.LazySeq(null,(function (){
var s__5713__$1 = s__5713;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__5713__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first(xs__5205__auto__);
var iterys__4320__auto__ = ((function (s__5713__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function scrambler$ui$flat_view$render_puzzle_$_iter__5712_$_iter__5714(s__5715){
return (new cljs.core.LazySeq(null,((function (s__5713__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__5715__$1 = s__5715;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__5715__$1);
if(temp__4657__auto____$1){
var s__5715__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__5715__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__5715__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__5717 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__5716 = (0);
while(true){
if((i__5716 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__5716);
cljs.core.chunk_append(b__5717,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y], null));

var G__5724 = (i__5716 + (1));
i__5716 = G__5724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5717),scrambler$ui$flat_view$render_puzzle_$_iter__5712_$_iter__5714(cljs.core.chunk_rest(s__5715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5717),null);
}
} else {
var x = cljs.core.first(s__5715__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y], null),scrambler$ui$flat_view$render_puzzle_$_iter__5712_$_iter__5714(cljs.core.rest(s__5715__$2)));
}
} else {
return null;
}
break;
}
});})(s__5713__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__5713__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,scrambler$ui$flat_view$render_puzzle_$_iter__5712(cljs.core.rest(s__5713__$1)));
} else {
var G__5725 = cljs.core.rest(s__5713__$1);
s__5713__$1 = G__5725;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((2)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["translate(2 300)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_puzzle_$_iter__5718(s__5719){
return (new cljs.core.LazySeq(null,(function (){
var s__5719__$1 = s__5719;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__5719__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first(xs__5205__auto__);
var iterys__4320__auto__ = ((function (s__5719__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function scrambler$ui$flat_view$render_puzzle_$_iter__5718_$_iter__5720(s__5721){
return (new cljs.core.LazySeq(null,((function (s__5719__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__5721__$1 = s__5721;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__5721__$1);
if(temp__4657__auto____$1){
var s__5721__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__5721__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__5721__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__5723 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__5722 = (0);
while(true){
if((i__5722 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__5722);
cljs.core.chunk_append(b__5723,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y,cljs.core.cst$kw$backside], null));

var G__5726 = (i__5722 + (1));
i__5722 = G__5726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5723),scrambler$ui$flat_view$render_puzzle_$_iter__5718_$_iter__5720(cljs.core.chunk_rest(s__5721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5723),null);
}
} else {
var x = cljs.core.first(s__5721__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y,cljs.core.cst$kw$backside], null),scrambler$ui$flat_view$render_puzzle_$_iter__5718_$_iter__5720(cljs.core.rest(s__5721__$2)));
}
} else {
return null;
}
break;
}
});})(s__5719__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__5719__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((8))));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,scrambler$ui$flat_view$render_puzzle_$_iter__5718(cljs.core.rest(s__5719__$1)));
} else {
var G__5727 = cljs.core.rest(s__5719__$1);
s__5719__$1 = G__5727;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((2)));
})())], null);
});
