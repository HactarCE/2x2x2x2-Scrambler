// Compiled by ClojureScript 1.10.339 {}
goog.provide('scrambler.ui.flat_view');
goog.require('cljs.core');
goog.require('scrambler.puzzle.core');
scrambler.ui.flat_view.colors = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"w","w",354169001),"white",new cljs.core.Keyword(null,"y","y",-1757859776),"yellow",new cljs.core.Keyword(null,"r","r",-471384190),"red",new cljs.core.Keyword(null,"o","o",-1350007228),"darkorange",new cljs.core.Keyword(null,"b","b",1482224470),"royalblue",new cljs.core.Keyword(null,"g","g",1738089905),"limegreen",new cljs.core.Keyword(null,"v","v",21465059),"purple",new cljs.core.Keyword(null,"m","m",1632677161),"fuchsia"], null);
scrambler.ui.flat_view.get_piece_colors = (function scrambler$ui$flat_view$get_piece_colors(piece_id){
return cljs.core.map.call(null,(function (p1__3480_SHARP_){
return scrambler.ui.flat_view.colors.call(null,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3480_SHARP_)].join('')));
}),scrambler.puzzle.core.get_piece_string.call(null,piece_id));
});
scrambler.ui.flat_view.piece_layout = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(2),(10),(11),(9),(8)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(7),(6),(14),(15),(13),(12)], null)], null);
scrambler.ui.flat_view.reversed_piece_layout = cljs.core.vec.call(null,cljs.core.rseq.call(null,scrambler.ui.flat_view.piece_layout));
scrambler.ui.flat_view.piece_size = (70);
scrambler.ui.flat_view.peek_size = 0.15;
scrambler.ui.flat_view.render_piece_label = (function scrambler$ui$flat_view$render_piece_label(piece_id,y){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(0.5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y === (0)))?-0.2:1.2)),")","scale(0.2 0.2)"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_piece_label_$_iter__3481(s__3482){
return (new cljs.core.LazySeq(null,(function (){
var s__3482__$1 = s__3482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3482__$1);
if(temp__4657__auto__){
var s__3482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3482__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__3482__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__3484 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__3483 = (0);
while(true){
if((i__3483 < size__4323__auto__)){
var vec__3485 = cljs.core._nth.call(null,c__4322__auto__,i__3483);
var axis = cljs.core.nth.call(null,vec__3485,(0),null);
var color = cljs.core.nth.call(null,vec__3485,(1),null);
cljs.core.chunk_append.call(null,b__3484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),((-2) + axis),new cljs.core.Keyword(null,"y","y",-1757859776),-0.5,new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null));

var G__3491 = (i__3483 + (1));
i__3483 = G__3491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3484),scrambler$ui$flat_view$render_piece_label_$_iter__3481.call(null,cljs.core.chunk_rest.call(null,s__3482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3484),null);
}
} else {
var vec__3488 = cljs.core.first.call(null,s__3482__$2);
var axis = cljs.core.nth.call(null,vec__3488,(0),null);
var color = cljs.core.nth.call(null,vec__3488,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),((-2) + axis),new cljs.core.Keyword(null,"y","y",-1757859776),-0.5,new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.1,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),scrambler$ui$flat_view$render_piece_label_$_iter__3481.call(null,cljs.core.rest.call(null,s__3482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,scrambler.ui.flat_view.get_piece_colors.call(null,piece_id)));
})());
});
scrambler.ui.flat_view.render_piece = (function scrambler$ui$flat_view$render_piece(var_args){
var G__3494 = arguments.length;
switch (G__3494) {
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
return scrambler.ui.flat_view.render_piece.call(null,puzzle,x,y,null);
});

scrambler.ui.flat_view.render_piece.cljs$core$IFn$_invoke$arity$4 = (function (puzzle,x,y,backside_QMARK_){
var layout = (cljs.core.truth_(backside_QMARK_)?scrambler.ui.flat_view.reversed_piece_layout:scrambler.ui.flat_view.piece_layout);
var piece_id = cljs.core.get_in.call(null,puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get_in.call(null,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))], null));
var orientation = cljs.core.get_in.call(null,puzzle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),piece_id], null));
var piece_colors = scrambler.ui.flat_view.get_piece_colors.call(null,piece_id);
var colors = cljs.core.map.call(null,((function (layout,piece_id,orientation,piece_colors){
return (function (p1__3492_SHARP_){
return cljs.core.nth.call(null,piece_colors,p1__3492_SHARP_);
});})(layout,piece_id,orientation,piece_colors))
,orientation);
var x_scale = ((cljs.core.truth_(backside_QMARK_)?(-1):(1)) * ((cljs.core.even_QMARK_.call(null,x))?(1):(-1)));
var y_scale = ((cljs.core.even_QMARK_.call(null,y))?(1):(-1));
var axis_map = (cljs.core.truth_(backside_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(0),(2)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3),(1)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece_label,piece_id,y], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(0.5 0.5)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_scale)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_scale),")","translate(-0.5 -0.5)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,1 1,1",new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.nth.call(null,colors,cljs.core.nth.call(null,axis_map,(0))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.02,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 1,0 1,1",new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.nth.call(null,colors,cljs.core.nth.call(null,axis_map,(1))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.02,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),["M 1 1","l ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size))," 0 a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 0 1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size)),"L 1 1"].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.nth.call(null,colors,cljs.core.nth.call(null,axis_map,(2))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.02,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"d","d",1972142424),["M 0 0","l ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size)," 0 0 1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((- scrambler.ui.flat_view.peek_size))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.peek_size),"L 0 0"].join(''),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.nth.call(null,colors,cljs.core.nth.call(null,axis_map,(3))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.02,new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null)], null);
});

scrambler.ui.flat_view.render_piece.cljs$lang$maxFixedArity = 4;

scrambler.ui.flat_view.render_puzzle = (function scrambler$ui$flat_view$render_puzzle(puzzle){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((4) + (scrambler.ui.flat_view.piece_size * (8))),new cljs.core.Keyword(null,"height","height",1025178622),(scrambler.ui.flat_view.piece_size * (8))], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(2 50)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_puzzle_$_iter__3496(s__3497){
return (new cljs.core.LazySeq(null,(function (){
var s__3497__$1 = s__3497;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3497__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__4320__auto__ = ((function (s__3497__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function scrambler$ui$flat_view$render_puzzle_$_iter__3496_$_iter__3498(s__3499){
return (new cljs.core.LazySeq(null,((function (s__3497__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__3499__$1 = s__3499;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__3499__$1);
if(temp__4657__auto____$1){
var s__3499__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3499__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__3499__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__3501 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__3500 = (0);
while(true){
if((i__3500 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__3500);
cljs.core.chunk_append.call(null,b__3501,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y], null));

var G__3508 = (i__3500 + (1));
i__3500 = G__3508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3501),scrambler$ui$flat_view$render_puzzle_$_iter__3496_$_iter__3498.call(null,cljs.core.chunk_rest.call(null,s__3499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3501),null);
}
} else {
var x = cljs.core.first.call(null,s__3499__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y], null),scrambler$ui$flat_view$render_puzzle_$_iter__3496_$_iter__3498.call(null,cljs.core.rest.call(null,s__3499__$2)));
}
} else {
return null;
}
break;
}
});})(s__3497__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__3497__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(8))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,scrambler$ui$flat_view$render_puzzle_$_iter__3496.call(null,cljs.core.rest.call(null,s__3497__$1)));
} else {
var G__3509 = cljs.core.rest.call(null,s__3497__$1);
s__3497__$1 = G__3509;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(2)));
})()),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(2 300)","scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.flat_view.piece_size),")"].join('')], null)], null),(function (){var iter__4324__auto__ = (function scrambler$ui$flat_view$render_puzzle_$_iter__3502(s__3503){
return (new cljs.core.LazySeq(null,(function (){
var s__3503__$1 = s__3503;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__3503__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var y = cljs.core.first.call(null,xs__5205__auto__);
var iterys__4320__auto__ = ((function (s__3503__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function scrambler$ui$flat_view$render_puzzle_$_iter__3502_$_iter__3504(s__3505){
return (new cljs.core.LazySeq(null,((function (s__3503__$1,y,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__3505__$1 = s__3505;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__3505__$1);
if(temp__4657__auto____$1){
var s__3505__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3505__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__3505__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__3507 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__3506 = (0);
while(true){
if((i__3506 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__3506);
cljs.core.chunk_append.call(null,b__3507,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y,new cljs.core.Keyword(null,"backside","backside",1769475597)], null));

var G__3510 = (i__3506 + (1));
i__3506 = G__3510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3507),scrambler$ui$flat_view$render_puzzle_$_iter__3502_$_iter__3504.call(null,cljs.core.chunk_rest.call(null,s__3505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3507),null);
}
} else {
var x = cljs.core.first.call(null,s__3505__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.flat_view.render_piece,puzzle,x,y,new cljs.core.Keyword(null,"backside","backside",1769475597)], null),scrambler$ui$flat_view$render_puzzle_$_iter__3502_$_iter__3504.call(null,cljs.core.rest.call(null,s__3505__$2)));
}
} else {
return null;
}
break;
}
});})(s__3503__$1,y,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__3503__$1,y,xs__5205__auto__,temp__4657__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.range.call(null,(8))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,scrambler$ui$flat_view$render_puzzle_$_iter__3502.call(null,cljs.core.rest.call(null,s__3503__$1)));
} else {
var G__3511 = cljs.core.rest.call(null,s__3503__$1);
s__3503__$1 = G__3511;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(2)));
})())], null);
});

//# sourceMappingURL=flat_view.js.map
