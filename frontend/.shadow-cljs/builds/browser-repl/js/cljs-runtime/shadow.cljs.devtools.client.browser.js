goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42529 = arguments.length;
var i__5770__auto___42530 = (0);
while(true){
if((i__5770__auto___42530 < len__5769__auto___42529)){
args__5775__auto__.push((arguments[i__5770__auto___42530]));

var G__42531 = (i__5770__auto___42530 + (1));
i__5770__auto___42530 = G__42531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41419){
var G__41420 = cljs.core.first(seq41419);
var seq41419__$1 = cljs.core.next(seq41419);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41420,seq41419__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41424 = cljs.core.seq(sources);
var chunk__41425 = null;
var count__41426 = (0);
var i__41427 = (0);
while(true){
if((i__41427 < count__41426)){
var map__41474 = chunk__41425.cljs$core$IIndexed$_nth$arity$2(null,i__41427);
var map__41474__$1 = cljs.core.__destructure_map(map__41474);
var src = map__41474__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41474__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41481){var e_42532 = e41481;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42532);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42532.message)].join('')));
}

var G__42533 = seq__41424;
var G__42534 = chunk__41425;
var G__42535 = count__41426;
var G__42536 = (i__41427 + (1));
seq__41424 = G__42533;
chunk__41425 = G__42534;
count__41426 = G__42535;
i__41427 = G__42536;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41424);
if(temp__5804__auto__){
var seq__41424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41424__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41424__$1);
var G__42537 = cljs.core.chunk_rest(seq__41424__$1);
var G__42538 = c__5568__auto__;
var G__42539 = cljs.core.count(c__5568__auto__);
var G__42540 = (0);
seq__41424 = G__42537;
chunk__41425 = G__42538;
count__41426 = G__42539;
i__41427 = G__42540;
continue;
} else {
var map__41488 = cljs.core.first(seq__41424__$1);
var map__41488__$1 = cljs.core.__destructure_map(map__41488);
var src = map__41488__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41488__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41492){var e_42541 = e41492;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42541);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42541.message)].join('')));
}

var G__42542 = cljs.core.next(seq__41424__$1);
var G__42543 = null;
var G__42544 = (0);
var G__42545 = (0);
seq__41424 = G__42542;
chunk__41425 = G__42543;
count__41426 = G__42544;
i__41427 = G__42545;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41514 = cljs.core.seq(js_requires);
var chunk__41515 = null;
var count__41516 = (0);
var i__41517 = (0);
while(true){
if((i__41517 < count__41516)){
var js_ns = chunk__41515.cljs$core$IIndexed$_nth$arity$2(null,i__41517);
var require_str_42546 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42546);


var G__42547 = seq__41514;
var G__42548 = chunk__41515;
var G__42549 = count__41516;
var G__42550 = (i__41517 + (1));
seq__41514 = G__42547;
chunk__41515 = G__42548;
count__41516 = G__42549;
i__41517 = G__42550;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41514);
if(temp__5804__auto__){
var seq__41514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41514__$1);
var G__42551 = cljs.core.chunk_rest(seq__41514__$1);
var G__42552 = c__5568__auto__;
var G__42553 = cljs.core.count(c__5568__auto__);
var G__42554 = (0);
seq__41514 = G__42551;
chunk__41515 = G__42552;
count__41516 = G__42553;
i__41517 = G__42554;
continue;
} else {
var js_ns = cljs.core.first(seq__41514__$1);
var require_str_42555 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42555);


var G__42556 = cljs.core.next(seq__41514__$1);
var G__42557 = null;
var G__42558 = (0);
var G__42559 = (0);
seq__41514 = G__42556;
chunk__41515 = G__42557;
count__41516 = G__42558;
i__41517 = G__42559;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41579){
var map__41580 = p__41579;
var map__41580__$1 = cljs.core.__destructure_map(map__41580);
var msg = map__41580__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41580__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41580__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581(s__41582){
return (new cljs.core.LazySeq(null,(function (){
var s__41582__$1 = s__41582;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41582__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__41588 = cljs.core.first(xs__6360__auto__);
var map__41588__$1 = cljs.core.__destructure_map(map__41588);
var src = map__41588__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41588__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__41582__$1,map__41588,map__41588__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41580,map__41580__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(s__41584){
return (new cljs.core.LazySeq(null,((function (s__41582__$1,map__41588,map__41588__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41580,map__41580__$1,msg,info,reload_info){
return (function (){
var s__41584__$1 = s__41584;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41584__$1);
if(temp__5804__auto____$1){
var s__41584__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41584__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41584__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41586 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41585 = (0);
while(true){
if((i__41585 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__41585);
cljs.core.chunk_append(b__41586,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42560 = (i__41585 + (1));
i__41585 = G__42560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41586),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(cljs.core.chunk_rest(s__41584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41586),null);
}
} else {
var warning = cljs.core.first(s__41584__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581_$_iter__41583(cljs.core.rest(s__41584__$2)));
}
} else {
return null;
}
break;
}
});})(s__41582__$1,map__41588,map__41588__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41580,map__41580__$1,msg,info,reload_info))
,null,null));
});})(s__41582__$1,map__41588,map__41588__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__41580,map__41580__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41581(cljs.core.rest(s__41582__$1)));
} else {
var G__42569 = cljs.core.rest(s__41582__$1);
s__41582__$1 = G__42569;
continue;
}
} else {
var G__42570 = cljs.core.rest(s__41582__$1);
s__41582__$1 = G__42570;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41613_42571 = cljs.core.seq(warnings);
var chunk__41614_42572 = null;
var count__41615_42573 = (0);
var i__41616_42574 = (0);
while(true){
if((i__41616_42574 < count__41615_42573)){
var map__41625_42581 = chunk__41614_42572.cljs$core$IIndexed$_nth$arity$2(null,i__41616_42574);
var map__41625_42582__$1 = cljs.core.__destructure_map(map__41625_42581);
var w_42583 = map__41625_42582__$1;
var msg_42584__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625_42582__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625_42582__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625_42582__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41625_42582__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42587)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42585),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42586),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42584__$1)].join(''));


var G__42594 = seq__41613_42571;
var G__42595 = chunk__41614_42572;
var G__42596 = count__41615_42573;
var G__42597 = (i__41616_42574 + (1));
seq__41613_42571 = G__42594;
chunk__41614_42572 = G__42595;
count__41615_42573 = G__42596;
i__41616_42574 = G__42597;
continue;
} else {
var temp__5804__auto___42598 = cljs.core.seq(seq__41613_42571);
if(temp__5804__auto___42598){
var seq__41613_42599__$1 = temp__5804__auto___42598;
if(cljs.core.chunked_seq_QMARK_(seq__41613_42599__$1)){
var c__5568__auto___42600 = cljs.core.chunk_first(seq__41613_42599__$1);
var G__42601 = cljs.core.chunk_rest(seq__41613_42599__$1);
var G__42602 = c__5568__auto___42600;
var G__42603 = cljs.core.count(c__5568__auto___42600);
var G__42604 = (0);
seq__41613_42571 = G__42601;
chunk__41614_42572 = G__42602;
count__41615_42573 = G__42603;
i__41616_42574 = G__42604;
continue;
} else {
var map__41638_42605 = cljs.core.first(seq__41613_42599__$1);
var map__41638_42606__$1 = cljs.core.__destructure_map(map__41638_42605);
var w_42607 = map__41638_42606__$1;
var msg_42608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638_42606__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638_42606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638_42606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638_42606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42611)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42609),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42610),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42608__$1)].join(''));


var G__42612 = cljs.core.next(seq__41613_42599__$1);
var G__42613 = null;
var G__42614 = (0);
var G__42615 = (0);
seq__41613_42571 = G__42612;
chunk__41614_42572 = G__42613;
count__41615_42573 = G__42614;
i__41616_42574 = G__42615;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41524_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41524_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41651){
var map__41652 = p__41651;
var map__41652__$1 = cljs.core.__destructure_map(map__41652);
var msg = map__41652__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41654 = cljs.core.seq(updates);
var chunk__41659 = null;
var count__41660 = (0);
var i__41661 = (0);
while(true){
if((i__41661 < count__41660)){
var path = chunk__41659.cljs$core$IIndexed$_nth$arity$2(null,i__41661);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41899_42616 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41903_42617 = null;
var count__41904_42618 = (0);
var i__41905_42619 = (0);
while(true){
if((i__41905_42619 < count__41904_42618)){
var node_42620 = chunk__41903_42617.cljs$core$IIndexed$_nth$arity$2(null,i__41905_42619);
if(cljs.core.not(node_42620.shadow$old)){
var path_match_42621 = shadow.cljs.devtools.client.browser.match_paths(node_42620.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42621)){
var new_link_42622 = (function (){var G__42019 = node_42620.cloneNode(true);
G__42019.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42621),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42019;
})();
(node_42620.shadow$old = true);

(new_link_42622.onload = ((function (seq__41899_42616,chunk__41903_42617,count__41904_42618,i__41905_42619,seq__41654,chunk__41659,count__41660,i__41661,new_link_42622,path_match_42621,node_42620,path,map__41652,map__41652__$1,msg,updates,reload_info){
return (function (e){
var seq__42021_42623 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42023_42624 = null;
var count__42024_42625 = (0);
var i__42025_42626 = (0);
while(true){
if((i__42025_42626 < count__42024_42625)){
var map__42032_42627 = chunk__42023_42624.cljs$core$IIndexed$_nth$arity$2(null,i__42025_42626);
var map__42032_42628__$1 = cljs.core.__destructure_map(map__42032_42627);
var task_42629 = map__42032_42628__$1;
var fn_str_42630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032_42628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42032_42628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42632 = goog.getObjectByName(fn_str_42630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42631)].join(''));

(fn_obj_42632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42632.cljs$core$IFn$_invoke$arity$2(path,new_link_42622) : fn_obj_42632.call(null,path,new_link_42622));


var G__42633 = seq__42021_42623;
var G__42634 = chunk__42023_42624;
var G__42635 = count__42024_42625;
var G__42636 = (i__42025_42626 + (1));
seq__42021_42623 = G__42633;
chunk__42023_42624 = G__42634;
count__42024_42625 = G__42635;
i__42025_42626 = G__42636;
continue;
} else {
var temp__5804__auto___42637 = cljs.core.seq(seq__42021_42623);
if(temp__5804__auto___42637){
var seq__42021_42638__$1 = temp__5804__auto___42637;
if(cljs.core.chunked_seq_QMARK_(seq__42021_42638__$1)){
var c__5568__auto___42639 = cljs.core.chunk_first(seq__42021_42638__$1);
var G__42640 = cljs.core.chunk_rest(seq__42021_42638__$1);
var G__42641 = c__5568__auto___42639;
var G__42642 = cljs.core.count(c__5568__auto___42639);
var G__42643 = (0);
seq__42021_42623 = G__42640;
chunk__42023_42624 = G__42641;
count__42024_42625 = G__42642;
i__42025_42626 = G__42643;
continue;
} else {
var map__42036_42644 = cljs.core.first(seq__42021_42638__$1);
var map__42036_42645__$1 = cljs.core.__destructure_map(map__42036_42644);
var task_42646 = map__42036_42645__$1;
var fn_str_42647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42645__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42645__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42649 = goog.getObjectByName(fn_str_42647,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42648)].join(''));

(fn_obj_42649.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42649.cljs$core$IFn$_invoke$arity$2(path,new_link_42622) : fn_obj_42649.call(null,path,new_link_42622));


var G__42650 = cljs.core.next(seq__42021_42638__$1);
var G__42651 = null;
var G__42652 = (0);
var G__42653 = (0);
seq__42021_42623 = G__42650;
chunk__42023_42624 = G__42651;
count__42024_42625 = G__42652;
i__42025_42626 = G__42653;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42620);
});})(seq__41899_42616,chunk__41903_42617,count__41904_42618,i__41905_42619,seq__41654,chunk__41659,count__41660,i__41661,new_link_42622,path_match_42621,node_42620,path,map__41652,map__41652__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42621], 0));

goog.dom.insertSiblingAfter(new_link_42622,node_42620);


var G__42654 = seq__41899_42616;
var G__42655 = chunk__41903_42617;
var G__42656 = count__41904_42618;
var G__42657 = (i__41905_42619 + (1));
seq__41899_42616 = G__42654;
chunk__41903_42617 = G__42655;
count__41904_42618 = G__42656;
i__41905_42619 = G__42657;
continue;
} else {
var G__42658 = seq__41899_42616;
var G__42659 = chunk__41903_42617;
var G__42660 = count__41904_42618;
var G__42661 = (i__41905_42619 + (1));
seq__41899_42616 = G__42658;
chunk__41903_42617 = G__42659;
count__41904_42618 = G__42660;
i__41905_42619 = G__42661;
continue;
}
} else {
var G__42662 = seq__41899_42616;
var G__42663 = chunk__41903_42617;
var G__42664 = count__41904_42618;
var G__42665 = (i__41905_42619 + (1));
seq__41899_42616 = G__42662;
chunk__41903_42617 = G__42663;
count__41904_42618 = G__42664;
i__41905_42619 = G__42665;
continue;
}
} else {
var temp__5804__auto___42666 = cljs.core.seq(seq__41899_42616);
if(temp__5804__auto___42666){
var seq__41899_42667__$1 = temp__5804__auto___42666;
if(cljs.core.chunked_seq_QMARK_(seq__41899_42667__$1)){
var c__5568__auto___42668 = cljs.core.chunk_first(seq__41899_42667__$1);
var G__42669 = cljs.core.chunk_rest(seq__41899_42667__$1);
var G__42670 = c__5568__auto___42668;
var G__42671 = cljs.core.count(c__5568__auto___42668);
var G__42672 = (0);
seq__41899_42616 = G__42669;
chunk__41903_42617 = G__42670;
count__41904_42618 = G__42671;
i__41905_42619 = G__42672;
continue;
} else {
var node_42673 = cljs.core.first(seq__41899_42667__$1);
if(cljs.core.not(node_42673.shadow$old)){
var path_match_42674 = shadow.cljs.devtools.client.browser.match_paths(node_42673.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42674)){
var new_link_42675 = (function (){var G__42052 = node_42673.cloneNode(true);
G__42052.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42674),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42052;
})();
(node_42673.shadow$old = true);

(new_link_42675.onload = ((function (seq__41899_42616,chunk__41903_42617,count__41904_42618,i__41905_42619,seq__41654,chunk__41659,count__41660,i__41661,new_link_42675,path_match_42674,node_42673,seq__41899_42667__$1,temp__5804__auto___42666,path,map__41652,map__41652__$1,msg,updates,reload_info){
return (function (e){
var seq__42056_42676 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42058_42677 = null;
var count__42059_42678 = (0);
var i__42060_42679 = (0);
while(true){
if((i__42060_42679 < count__42059_42678)){
var map__42079_42680 = chunk__42058_42677.cljs$core$IIndexed$_nth$arity$2(null,i__42060_42679);
var map__42079_42681__$1 = cljs.core.__destructure_map(map__42079_42680);
var task_42682 = map__42079_42681__$1;
var fn_str_42683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079_42681__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079_42681__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42685 = goog.getObjectByName(fn_str_42683,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42684)].join(''));

(fn_obj_42685.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42685.cljs$core$IFn$_invoke$arity$2(path,new_link_42675) : fn_obj_42685.call(null,path,new_link_42675));


var G__42686 = seq__42056_42676;
var G__42687 = chunk__42058_42677;
var G__42688 = count__42059_42678;
var G__42689 = (i__42060_42679 + (1));
seq__42056_42676 = G__42686;
chunk__42058_42677 = G__42687;
count__42059_42678 = G__42688;
i__42060_42679 = G__42689;
continue;
} else {
var temp__5804__auto___42690__$1 = cljs.core.seq(seq__42056_42676);
if(temp__5804__auto___42690__$1){
var seq__42056_42691__$1 = temp__5804__auto___42690__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42056_42691__$1)){
var c__5568__auto___42692 = cljs.core.chunk_first(seq__42056_42691__$1);
var G__42693 = cljs.core.chunk_rest(seq__42056_42691__$1);
var G__42694 = c__5568__auto___42692;
var G__42695 = cljs.core.count(c__5568__auto___42692);
var G__42696 = (0);
seq__42056_42676 = G__42693;
chunk__42058_42677 = G__42694;
count__42059_42678 = G__42695;
i__42060_42679 = G__42696;
continue;
} else {
var map__42082_42697 = cljs.core.first(seq__42056_42691__$1);
var map__42082_42698__$1 = cljs.core.__destructure_map(map__42082_42697);
var task_42699 = map__42082_42698__$1;
var fn_str_42700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42082_42698__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42082_42698__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42702 = goog.getObjectByName(fn_str_42700,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42701)].join(''));

(fn_obj_42702.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42702.cljs$core$IFn$_invoke$arity$2(path,new_link_42675) : fn_obj_42702.call(null,path,new_link_42675));


var G__42703 = cljs.core.next(seq__42056_42691__$1);
var G__42704 = null;
var G__42705 = (0);
var G__42706 = (0);
seq__42056_42676 = G__42703;
chunk__42058_42677 = G__42704;
count__42059_42678 = G__42705;
i__42060_42679 = G__42706;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42673);
});})(seq__41899_42616,chunk__41903_42617,count__41904_42618,i__41905_42619,seq__41654,chunk__41659,count__41660,i__41661,new_link_42675,path_match_42674,node_42673,seq__41899_42667__$1,temp__5804__auto___42666,path,map__41652,map__41652__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42674], 0));

goog.dom.insertSiblingAfter(new_link_42675,node_42673);


var G__42707 = cljs.core.next(seq__41899_42667__$1);
var G__42708 = null;
var G__42709 = (0);
var G__42710 = (0);
seq__41899_42616 = G__42707;
chunk__41903_42617 = G__42708;
count__41904_42618 = G__42709;
i__41905_42619 = G__42710;
continue;
} else {
var G__42711 = cljs.core.next(seq__41899_42667__$1);
var G__42712 = null;
var G__42713 = (0);
var G__42714 = (0);
seq__41899_42616 = G__42711;
chunk__41903_42617 = G__42712;
count__41904_42618 = G__42713;
i__41905_42619 = G__42714;
continue;
}
} else {
var G__42715 = cljs.core.next(seq__41899_42667__$1);
var G__42716 = null;
var G__42717 = (0);
var G__42718 = (0);
seq__41899_42616 = G__42715;
chunk__41903_42617 = G__42716;
count__41904_42618 = G__42717;
i__41905_42619 = G__42718;
continue;
}
}
} else {
}
}
break;
}


var G__42719 = seq__41654;
var G__42720 = chunk__41659;
var G__42721 = count__41660;
var G__42722 = (i__41661 + (1));
seq__41654 = G__42719;
chunk__41659 = G__42720;
count__41660 = G__42721;
i__41661 = G__42722;
continue;
} else {
var G__42723 = seq__41654;
var G__42724 = chunk__41659;
var G__42725 = count__41660;
var G__42726 = (i__41661 + (1));
seq__41654 = G__42723;
chunk__41659 = G__42724;
count__41660 = G__42725;
i__41661 = G__42726;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41654);
if(temp__5804__auto__){
var seq__41654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41654__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41654__$1);
var G__42733 = cljs.core.chunk_rest(seq__41654__$1);
var G__42734 = c__5568__auto__;
var G__42735 = cljs.core.count(c__5568__auto__);
var G__42736 = (0);
seq__41654 = G__42733;
chunk__41659 = G__42734;
count__41660 = G__42735;
i__41661 = G__42736;
continue;
} else {
var path = cljs.core.first(seq__41654__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42088_42739 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42092_42740 = null;
var count__42093_42741 = (0);
var i__42094_42742 = (0);
while(true){
if((i__42094_42742 < count__42093_42741)){
var node_42743 = chunk__42092_42740.cljs$core$IIndexed$_nth$arity$2(null,i__42094_42742);
if(cljs.core.not(node_42743.shadow$old)){
var path_match_42744 = shadow.cljs.devtools.client.browser.match_paths(node_42743.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42744)){
var new_link_42745 = (function (){var G__42298 = node_42743.cloneNode(true);
G__42298.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42744),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42298;
})();
(node_42743.shadow$old = true);

(new_link_42745.onload = ((function (seq__42088_42739,chunk__42092_42740,count__42093_42741,i__42094_42742,seq__41654,chunk__41659,count__41660,i__41661,new_link_42745,path_match_42744,node_42743,path,seq__41654__$1,temp__5804__auto__,map__41652,map__41652__$1,msg,updates,reload_info){
return (function (e){
var seq__42304_42752 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42306_42753 = null;
var count__42307_42754 = (0);
var i__42308_42755 = (0);
while(true){
if((i__42308_42755 < count__42307_42754)){
var map__42312_42756 = chunk__42306_42753.cljs$core$IIndexed$_nth$arity$2(null,i__42308_42755);
var map__42312_42757__$1 = cljs.core.__destructure_map(map__42312_42756);
var task_42758 = map__42312_42757__$1;
var fn_str_42759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42312_42757__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42312_42757__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42761 = goog.getObjectByName(fn_str_42759,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42760)].join(''));

(fn_obj_42761.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42761.cljs$core$IFn$_invoke$arity$2(path,new_link_42745) : fn_obj_42761.call(null,path,new_link_42745));


var G__42762 = seq__42304_42752;
var G__42763 = chunk__42306_42753;
var G__42764 = count__42307_42754;
var G__42765 = (i__42308_42755 + (1));
seq__42304_42752 = G__42762;
chunk__42306_42753 = G__42763;
count__42307_42754 = G__42764;
i__42308_42755 = G__42765;
continue;
} else {
var temp__5804__auto___42772__$1 = cljs.core.seq(seq__42304_42752);
if(temp__5804__auto___42772__$1){
var seq__42304_42773__$1 = temp__5804__auto___42772__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42304_42773__$1)){
var c__5568__auto___42774 = cljs.core.chunk_first(seq__42304_42773__$1);
var G__42775 = cljs.core.chunk_rest(seq__42304_42773__$1);
var G__42776 = c__5568__auto___42774;
var G__42777 = cljs.core.count(c__5568__auto___42774);
var G__42778 = (0);
seq__42304_42752 = G__42775;
chunk__42306_42753 = G__42776;
count__42307_42754 = G__42777;
i__42308_42755 = G__42778;
continue;
} else {
var map__42319_42779 = cljs.core.first(seq__42304_42773__$1);
var map__42319_42780__$1 = cljs.core.__destructure_map(map__42319_42779);
var task_42781 = map__42319_42780__$1;
var fn_str_42782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319_42780__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319_42780__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42784 = goog.getObjectByName(fn_str_42782,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42783)].join(''));

(fn_obj_42784.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42784.cljs$core$IFn$_invoke$arity$2(path,new_link_42745) : fn_obj_42784.call(null,path,new_link_42745));


var G__42785 = cljs.core.next(seq__42304_42773__$1);
var G__42786 = null;
var G__42787 = (0);
var G__42788 = (0);
seq__42304_42752 = G__42785;
chunk__42306_42753 = G__42786;
count__42307_42754 = G__42787;
i__42308_42755 = G__42788;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42743);
});})(seq__42088_42739,chunk__42092_42740,count__42093_42741,i__42094_42742,seq__41654,chunk__41659,count__41660,i__41661,new_link_42745,path_match_42744,node_42743,path,seq__41654__$1,temp__5804__auto__,map__41652,map__41652__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42744], 0));

goog.dom.insertSiblingAfter(new_link_42745,node_42743);


var G__42789 = seq__42088_42739;
var G__42790 = chunk__42092_42740;
var G__42791 = count__42093_42741;
var G__42792 = (i__42094_42742 + (1));
seq__42088_42739 = G__42789;
chunk__42092_42740 = G__42790;
count__42093_42741 = G__42791;
i__42094_42742 = G__42792;
continue;
} else {
var G__42793 = seq__42088_42739;
var G__42794 = chunk__42092_42740;
var G__42795 = count__42093_42741;
var G__42796 = (i__42094_42742 + (1));
seq__42088_42739 = G__42793;
chunk__42092_42740 = G__42794;
count__42093_42741 = G__42795;
i__42094_42742 = G__42796;
continue;
}
} else {
var G__42797 = seq__42088_42739;
var G__42798 = chunk__42092_42740;
var G__42799 = count__42093_42741;
var G__42800 = (i__42094_42742 + (1));
seq__42088_42739 = G__42797;
chunk__42092_42740 = G__42798;
count__42093_42741 = G__42799;
i__42094_42742 = G__42800;
continue;
}
} else {
var temp__5804__auto___42801__$1 = cljs.core.seq(seq__42088_42739);
if(temp__5804__auto___42801__$1){
var seq__42088_42802__$1 = temp__5804__auto___42801__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42088_42802__$1)){
var c__5568__auto___42803 = cljs.core.chunk_first(seq__42088_42802__$1);
var G__42804 = cljs.core.chunk_rest(seq__42088_42802__$1);
var G__42805 = c__5568__auto___42803;
var G__42806 = cljs.core.count(c__5568__auto___42803);
var G__42807 = (0);
seq__42088_42739 = G__42804;
chunk__42092_42740 = G__42805;
count__42093_42741 = G__42806;
i__42094_42742 = G__42807;
continue;
} else {
var node_42808 = cljs.core.first(seq__42088_42802__$1);
if(cljs.core.not(node_42808.shadow$old)){
var path_match_42809 = shadow.cljs.devtools.client.browser.match_paths(node_42808.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42809)){
var new_link_42810 = (function (){var G__42325 = node_42808.cloneNode(true);
G__42325.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42809),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42325;
})();
(node_42808.shadow$old = true);

(new_link_42810.onload = ((function (seq__42088_42739,chunk__42092_42740,count__42093_42741,i__42094_42742,seq__41654,chunk__41659,count__41660,i__41661,new_link_42810,path_match_42809,node_42808,seq__42088_42802__$1,temp__5804__auto___42801__$1,path,seq__41654__$1,temp__5804__auto__,map__41652,map__41652__$1,msg,updates,reload_info){
return (function (e){
var seq__42326_42811 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__42328_42812 = null;
var count__42329_42813 = (0);
var i__42330_42814 = (0);
while(true){
if((i__42330_42814 < count__42329_42813)){
var map__42339_42815 = chunk__42328_42812.cljs$core$IIndexed$_nth$arity$2(null,i__42330_42814);
var map__42339_42816__$1 = cljs.core.__destructure_map(map__42339_42815);
var task_42817 = map__42339_42816__$1;
var fn_str_42818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42339_42816__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42339_42816__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42820 = goog.getObjectByName(fn_str_42818,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42819)].join(''));

(fn_obj_42820.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42820.cljs$core$IFn$_invoke$arity$2(path,new_link_42810) : fn_obj_42820.call(null,path,new_link_42810));


var G__42821 = seq__42326_42811;
var G__42822 = chunk__42328_42812;
var G__42823 = count__42329_42813;
var G__42824 = (i__42330_42814 + (1));
seq__42326_42811 = G__42821;
chunk__42328_42812 = G__42822;
count__42329_42813 = G__42823;
i__42330_42814 = G__42824;
continue;
} else {
var temp__5804__auto___42825__$2 = cljs.core.seq(seq__42326_42811);
if(temp__5804__auto___42825__$2){
var seq__42326_42826__$1 = temp__5804__auto___42825__$2;
if(cljs.core.chunked_seq_QMARK_(seq__42326_42826__$1)){
var c__5568__auto___42827 = cljs.core.chunk_first(seq__42326_42826__$1);
var G__42828 = cljs.core.chunk_rest(seq__42326_42826__$1);
var G__42829 = c__5568__auto___42827;
var G__42830 = cljs.core.count(c__5568__auto___42827);
var G__42831 = (0);
seq__42326_42811 = G__42828;
chunk__42328_42812 = G__42829;
count__42329_42813 = G__42830;
i__42330_42814 = G__42831;
continue;
} else {
var map__42340_42832 = cljs.core.first(seq__42326_42826__$1);
var map__42340_42833__$1 = cljs.core.__destructure_map(map__42340_42832);
var task_42834 = map__42340_42833__$1;
var fn_str_42835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42340_42833__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42340_42833__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42837 = goog.getObjectByName(fn_str_42835,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42836)].join(''));

(fn_obj_42837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42837.cljs$core$IFn$_invoke$arity$2(path,new_link_42810) : fn_obj_42837.call(null,path,new_link_42810));


var G__42838 = cljs.core.next(seq__42326_42826__$1);
var G__42839 = null;
var G__42840 = (0);
var G__42841 = (0);
seq__42326_42811 = G__42838;
chunk__42328_42812 = G__42839;
count__42329_42813 = G__42840;
i__42330_42814 = G__42841;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_42808);
});})(seq__42088_42739,chunk__42092_42740,count__42093_42741,i__42094_42742,seq__41654,chunk__41659,count__41660,i__41661,new_link_42810,path_match_42809,node_42808,seq__42088_42802__$1,temp__5804__auto___42801__$1,path,seq__41654__$1,temp__5804__auto__,map__41652,map__41652__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42809], 0));

goog.dom.insertSiblingAfter(new_link_42810,node_42808);


var G__42842 = cljs.core.next(seq__42088_42802__$1);
var G__42843 = null;
var G__42844 = (0);
var G__42845 = (0);
seq__42088_42739 = G__42842;
chunk__42092_42740 = G__42843;
count__42093_42741 = G__42844;
i__42094_42742 = G__42845;
continue;
} else {
var G__42846 = cljs.core.next(seq__42088_42802__$1);
var G__42847 = null;
var G__42848 = (0);
var G__42849 = (0);
seq__42088_42739 = G__42846;
chunk__42092_42740 = G__42847;
count__42093_42741 = G__42848;
i__42094_42742 = G__42849;
continue;
}
} else {
var G__42850 = cljs.core.next(seq__42088_42802__$1);
var G__42851 = null;
var G__42852 = (0);
var G__42853 = (0);
seq__42088_42739 = G__42850;
chunk__42092_42740 = G__42851;
count__42093_42741 = G__42852;
i__42094_42742 = G__42853;
continue;
}
}
} else {
}
}
break;
}


var G__42854 = cljs.core.next(seq__41654__$1);
var G__42855 = null;
var G__42856 = (0);
var G__42857 = (0);
seq__41654 = G__42854;
chunk__41659 = G__42855;
count__41660 = G__42856;
i__41661 = G__42857;
continue;
} else {
var G__42858 = cljs.core.next(seq__41654__$1);
var G__42859 = null;
var G__42860 = (0);
var G__42861 = (0);
seq__41654 = G__42858;
chunk__41659 = G__42859;
count__41660 = G__42860;
i__41661 = G__42861;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42350){
var map__42353 = p__42350;
var map__42353__$1 = cljs.core.__destructure_map(map__42353);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42353__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42492){
var map__42493 = p__42492;
var map__42493__$1 = cljs.core.__destructure_map(map__42493);
var _ = map__42493__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42493__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42494,done,error){
var map__42495 = p__42494;
var map__42495__$1 = cljs.core.__destructure_map(map__42495);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42495__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42497,done,error){
var map__42498 = p__42497;
var map__42498__$1 = cljs.core.__destructure_map(map__42498);
var msg = map__42498__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42498__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42499){
var map__42500 = p__42499;
var map__42500__$1 = cljs.core.__destructure_map(map__42500);
var src = map__42500__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42500__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42501 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42501) : done.call(null,G__42501));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42502){
var map__42503 = p__42502;
var map__42503__$1 = cljs.core.__destructure_map(map__42503);
var msg__$1 = map__42503__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42503__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42504){var ex = e42504;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42506){
var map__42507 = p__42506;
var map__42507__$1 = cljs.core.__destructure_map(map__42507);
var env = map__42507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42518){
var map__42519 = p__42518;
var map__42519__$1 = cljs.core.__destructure_map(map__42519);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42523){
var map__42524 = p__42523;
var map__42524__$1 = cljs.core.__destructure_map(map__42524);
var svc = map__42524__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42524__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
