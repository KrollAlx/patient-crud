goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65635 = arguments.length;
var i__5770__auto___65636 = (0);
while(true){
if((i__5770__auto___65636 < len__5769__auto___65635)){
args__5775__auto__.push((arguments[i__5770__auto___65636]));

var G__65638 = (i__5770__auto___65636 + (1));
i__5770__auto___65636 = G__65638;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq65117){
var G__65118 = cljs.core.first(seq65117);
var seq65117__$1 = cljs.core.next(seq65117);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65118,seq65117__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__65123 = cljs.core.seq(sources);
var chunk__65124 = null;
var count__65125 = (0);
var i__65126 = (0);
while(true){
if((i__65126 < count__65125)){
var map__65137 = chunk__65124.cljs$core$IIndexed$_nth$arity$2(null,i__65126);
var map__65137__$1 = cljs.core.__destructure_map(map__65137);
var src = map__65137__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65137__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65138){var e_65641 = e65138;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65641);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65641.message)].join('')));
}

var G__65642 = seq__65123;
var G__65643 = chunk__65124;
var G__65644 = count__65125;
var G__65645 = (i__65126 + (1));
seq__65123 = G__65642;
chunk__65124 = G__65643;
count__65125 = G__65644;
i__65126 = G__65645;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65123);
if(temp__5804__auto__){
var seq__65123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65123__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65123__$1);
var G__65646 = cljs.core.chunk_rest(seq__65123__$1);
var G__65647 = c__5568__auto__;
var G__65648 = cljs.core.count(c__5568__auto__);
var G__65649 = (0);
seq__65123 = G__65646;
chunk__65124 = G__65647;
count__65125 = G__65648;
i__65126 = G__65649;
continue;
} else {
var map__65140 = cljs.core.first(seq__65123__$1);
var map__65140__$1 = cljs.core.__destructure_map(map__65140);
var src = map__65140__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65140__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e65141){var e_65650 = e65141;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65650);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65650.message)].join('')));
}

var G__65651 = cljs.core.next(seq__65123__$1);
var G__65652 = null;
var G__65653 = (0);
var G__65654 = (0);
seq__65123 = G__65651;
chunk__65124 = G__65652;
count__65125 = G__65653;
i__65126 = G__65654;
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
var seq__65142 = cljs.core.seq(js_requires);
var chunk__65143 = null;
var count__65144 = (0);
var i__65145 = (0);
while(true){
if((i__65145 < count__65144)){
var js_ns = chunk__65143.cljs$core$IIndexed$_nth$arity$2(null,i__65145);
var require_str_65655 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65655);


var G__65658 = seq__65142;
var G__65659 = chunk__65143;
var G__65660 = count__65144;
var G__65661 = (i__65145 + (1));
seq__65142 = G__65658;
chunk__65143 = G__65659;
count__65144 = G__65660;
i__65145 = G__65661;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65142);
if(temp__5804__auto__){
var seq__65142__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65142__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65142__$1);
var G__65663 = cljs.core.chunk_rest(seq__65142__$1);
var G__65664 = c__5568__auto__;
var G__65665 = cljs.core.count(c__5568__auto__);
var G__65666 = (0);
seq__65142 = G__65663;
chunk__65143 = G__65664;
count__65144 = G__65665;
i__65145 = G__65666;
continue;
} else {
var js_ns = cljs.core.first(seq__65142__$1);
var require_str_65667 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65667);


var G__65668 = cljs.core.next(seq__65142__$1);
var G__65669 = null;
var G__65670 = (0);
var G__65671 = (0);
seq__65142 = G__65668;
chunk__65143 = G__65669;
count__65144 = G__65670;
i__65145 = G__65671;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__65152){
var map__65153 = p__65152;
var map__65153__$1 = cljs.core.__destructure_map(map__65153);
var msg = map__65153__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65153__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65154(s__65155){
return (new cljs.core.LazySeq(null,(function (){
var s__65155__$1 = s__65155;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__65155__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__65162 = cljs.core.first(xs__6360__auto__);
var map__65162__$1 = cljs.core.__destructure_map(map__65162);
var src = map__65162__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65162__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__65155__$1,map__65162,map__65162__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__65153,map__65153__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65154_$_iter__65156(s__65157){
return (new cljs.core.LazySeq(null,((function (s__65155__$1,map__65162,map__65162__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__65153,map__65153__$1,msg,info,reload_info){
return (function (){
var s__65157__$1 = s__65157;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__65157__$1);
if(temp__5804__auto____$1){
var s__65157__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65157__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__65157__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__65159 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__65158 = (0);
while(true){
if((i__65158 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__65158);
cljs.core.chunk_append(b__65159,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65676 = (i__65158 + (1));
i__65158 = G__65676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65159),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65154_$_iter__65156(cljs.core.chunk_rest(s__65157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65159),null);
}
} else {
var warning = cljs.core.first(s__65157__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65154_$_iter__65156(cljs.core.rest(s__65157__$2)));
}
} else {
return null;
}
break;
}
});})(s__65155__$1,map__65162,map__65162__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__65153,map__65153__$1,msg,info,reload_info))
,null,null));
});})(s__65155__$1,map__65162,map__65162__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__65153,map__65153__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__65154(cljs.core.rest(s__65155__$1)));
} else {
var G__65691 = cljs.core.rest(s__65155__$1);
s__65155__$1 = G__65691;
continue;
}
} else {
var G__65692 = cljs.core.rest(s__65155__$1);
s__65155__$1 = G__65692;
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
var seq__65165_65693 = cljs.core.seq(warnings);
var chunk__65166_65694 = null;
var count__65167_65695 = (0);
var i__65168_65696 = (0);
while(true){
if((i__65168_65696 < count__65167_65695)){
var map__65171_65697 = chunk__65166_65694.cljs$core$IIndexed$_nth$arity$2(null,i__65168_65696);
var map__65171_65698__$1 = cljs.core.__destructure_map(map__65171_65697);
var w_65699 = map__65171_65698__$1;
var msg_65700__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171_65698__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171_65698__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171_65698__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65171_65698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65703)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65701),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65702),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65700__$1)].join(''));


var G__65704 = seq__65165_65693;
var G__65705 = chunk__65166_65694;
var G__65706 = count__65167_65695;
var G__65707 = (i__65168_65696 + (1));
seq__65165_65693 = G__65704;
chunk__65166_65694 = G__65705;
count__65167_65695 = G__65706;
i__65168_65696 = G__65707;
continue;
} else {
var temp__5804__auto___65708 = cljs.core.seq(seq__65165_65693);
if(temp__5804__auto___65708){
var seq__65165_65709__$1 = temp__5804__auto___65708;
if(cljs.core.chunked_seq_QMARK_(seq__65165_65709__$1)){
var c__5568__auto___65710 = cljs.core.chunk_first(seq__65165_65709__$1);
var G__65711 = cljs.core.chunk_rest(seq__65165_65709__$1);
var G__65712 = c__5568__auto___65710;
var G__65713 = cljs.core.count(c__5568__auto___65710);
var G__65714 = (0);
seq__65165_65693 = G__65711;
chunk__65166_65694 = G__65712;
count__65167_65695 = G__65713;
i__65168_65696 = G__65714;
continue;
} else {
var map__65172_65715 = cljs.core.first(seq__65165_65709__$1);
var map__65172_65716__$1 = cljs.core.__destructure_map(map__65172_65715);
var w_65717 = map__65172_65716__$1;
var msg_65718__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172_65716__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172_65716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172_65716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65172_65716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65721)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65719),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65720),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65718__$1)].join(''));


var G__65722 = cljs.core.next(seq__65165_65709__$1);
var G__65723 = null;
var G__65724 = (0);
var G__65725 = (0);
seq__65165_65693 = G__65722;
chunk__65166_65694 = G__65723;
count__65167_65695 = G__65724;
i__65168_65696 = G__65725;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__65151_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__65151_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__65177){
var map__65178 = p__65177;
var map__65178__$1 = cljs.core.__destructure_map(map__65178);
var msg = map__65178__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65178__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65178__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__65179 = cljs.core.seq(updates);
var chunk__65181 = null;
var count__65182 = (0);
var i__65183 = (0);
while(true){
if((i__65183 < count__65182)){
var path = chunk__65181.cljs$core$IIndexed$_nth$arity$2(null,i__65183);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65389_65726 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65393_65728 = null;
var count__65394_65729 = (0);
var i__65395_65730 = (0);
while(true){
if((i__65395_65730 < count__65394_65729)){
var node_65731 = chunk__65393_65728.cljs$core$IIndexed$_nth$arity$2(null,i__65395_65730);
if(cljs.core.not(node_65731.shadow$old)){
var path_match_65732 = shadow.cljs.devtools.client.browser.match_paths(node_65731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65732)){
var new_link_65733 = (function (){var G__65449 = node_65731.cloneNode(true);
G__65449.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65449;
})();
(node_65731.shadow$old = true);

(new_link_65733.onload = ((function (seq__65389_65726,chunk__65393_65728,count__65394_65729,i__65395_65730,seq__65179,chunk__65181,count__65182,i__65183,new_link_65733,path_match_65732,node_65731,path,map__65178,map__65178__$1,msg,updates,reload_info){
return (function (e){
var seq__65450_65735 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__65452_65736 = null;
var count__65453_65737 = (0);
var i__65454_65738 = (0);
while(true){
if((i__65454_65738 < count__65453_65737)){
var map__65462_65740 = chunk__65452_65736.cljs$core$IIndexed$_nth$arity$2(null,i__65454_65738);
var map__65462_65741__$1 = cljs.core.__destructure_map(map__65462_65740);
var task_65742 = map__65462_65741__$1;
var fn_str_65743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462_65741__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65462_65741__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65745 = goog.getObjectByName(fn_str_65743,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65744)].join(''));

(fn_obj_65745.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65745.cljs$core$IFn$_invoke$arity$2(path,new_link_65733) : fn_obj_65745.call(null,path,new_link_65733));


var G__65746 = seq__65450_65735;
var G__65747 = chunk__65452_65736;
var G__65748 = count__65453_65737;
var G__65749 = (i__65454_65738 + (1));
seq__65450_65735 = G__65746;
chunk__65452_65736 = G__65747;
count__65453_65737 = G__65748;
i__65454_65738 = G__65749;
continue;
} else {
var temp__5804__auto___65750 = cljs.core.seq(seq__65450_65735);
if(temp__5804__auto___65750){
var seq__65450_65751__$1 = temp__5804__auto___65750;
if(cljs.core.chunked_seq_QMARK_(seq__65450_65751__$1)){
var c__5568__auto___65752 = cljs.core.chunk_first(seq__65450_65751__$1);
var G__65753 = cljs.core.chunk_rest(seq__65450_65751__$1);
var G__65754 = c__5568__auto___65752;
var G__65755 = cljs.core.count(c__5568__auto___65752);
var G__65756 = (0);
seq__65450_65735 = G__65753;
chunk__65452_65736 = G__65754;
count__65453_65737 = G__65755;
i__65454_65738 = G__65756;
continue;
} else {
var map__65463_65758 = cljs.core.first(seq__65450_65751__$1);
var map__65463_65759__$1 = cljs.core.__destructure_map(map__65463_65758);
var task_65760 = map__65463_65759__$1;
var fn_str_65761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65463_65759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65463_65759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65765 = goog.getObjectByName(fn_str_65761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65762)].join(''));

(fn_obj_65765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65765.cljs$core$IFn$_invoke$arity$2(path,new_link_65733) : fn_obj_65765.call(null,path,new_link_65733));


var G__65766 = cljs.core.next(seq__65450_65751__$1);
var G__65767 = null;
var G__65768 = (0);
var G__65769 = (0);
seq__65450_65735 = G__65766;
chunk__65452_65736 = G__65767;
count__65453_65737 = G__65768;
i__65454_65738 = G__65769;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_65731);
});})(seq__65389_65726,chunk__65393_65728,count__65394_65729,i__65395_65730,seq__65179,chunk__65181,count__65182,i__65183,new_link_65733,path_match_65732,node_65731,path,map__65178,map__65178__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65732], 0));

goog.dom.insertSiblingAfter(new_link_65733,node_65731);


var G__65770 = seq__65389_65726;
var G__65771 = chunk__65393_65728;
var G__65772 = count__65394_65729;
var G__65773 = (i__65395_65730 + (1));
seq__65389_65726 = G__65770;
chunk__65393_65728 = G__65771;
count__65394_65729 = G__65772;
i__65395_65730 = G__65773;
continue;
} else {
var G__65774 = seq__65389_65726;
var G__65775 = chunk__65393_65728;
var G__65776 = count__65394_65729;
var G__65777 = (i__65395_65730 + (1));
seq__65389_65726 = G__65774;
chunk__65393_65728 = G__65775;
count__65394_65729 = G__65776;
i__65395_65730 = G__65777;
continue;
}
} else {
var G__65778 = seq__65389_65726;
var G__65779 = chunk__65393_65728;
var G__65780 = count__65394_65729;
var G__65781 = (i__65395_65730 + (1));
seq__65389_65726 = G__65778;
chunk__65393_65728 = G__65779;
count__65394_65729 = G__65780;
i__65395_65730 = G__65781;
continue;
}
} else {
var temp__5804__auto___65782 = cljs.core.seq(seq__65389_65726);
if(temp__5804__auto___65782){
var seq__65389_65783__$1 = temp__5804__auto___65782;
if(cljs.core.chunked_seq_QMARK_(seq__65389_65783__$1)){
var c__5568__auto___65784 = cljs.core.chunk_first(seq__65389_65783__$1);
var G__65785 = cljs.core.chunk_rest(seq__65389_65783__$1);
var G__65786 = c__5568__auto___65784;
var G__65787 = cljs.core.count(c__5568__auto___65784);
var G__65788 = (0);
seq__65389_65726 = G__65785;
chunk__65393_65728 = G__65786;
count__65394_65729 = G__65787;
i__65395_65730 = G__65788;
continue;
} else {
var node_65789 = cljs.core.first(seq__65389_65783__$1);
if(cljs.core.not(node_65789.shadow$old)){
var path_match_65790 = shadow.cljs.devtools.client.browser.match_paths(node_65789.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65790)){
var new_link_65791 = (function (){var G__65465 = node_65789.cloneNode(true);
G__65465.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65790),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65465;
})();
(node_65789.shadow$old = true);

(new_link_65791.onload = ((function (seq__65389_65726,chunk__65393_65728,count__65394_65729,i__65395_65730,seq__65179,chunk__65181,count__65182,i__65183,new_link_65791,path_match_65790,node_65789,seq__65389_65783__$1,temp__5804__auto___65782,path,map__65178,map__65178__$1,msg,updates,reload_info){
return (function (e){
var seq__65468_65792 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__65470_65793 = null;
var count__65471_65794 = (0);
var i__65472_65795 = (0);
while(true){
if((i__65472_65795 < count__65471_65794)){
var map__65477_65796 = chunk__65470_65793.cljs$core$IIndexed$_nth$arity$2(null,i__65472_65795);
var map__65477_65797__$1 = cljs.core.__destructure_map(map__65477_65796);
var task_65798 = map__65477_65797__$1;
var fn_str_65799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65477_65797__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65477_65797__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65801 = goog.getObjectByName(fn_str_65799,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65800)].join(''));

(fn_obj_65801.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65801.cljs$core$IFn$_invoke$arity$2(path,new_link_65791) : fn_obj_65801.call(null,path,new_link_65791));


var G__65802 = seq__65468_65792;
var G__65803 = chunk__65470_65793;
var G__65804 = count__65471_65794;
var G__65805 = (i__65472_65795 + (1));
seq__65468_65792 = G__65802;
chunk__65470_65793 = G__65803;
count__65471_65794 = G__65804;
i__65472_65795 = G__65805;
continue;
} else {
var temp__5804__auto___65806__$1 = cljs.core.seq(seq__65468_65792);
if(temp__5804__auto___65806__$1){
var seq__65468_65807__$1 = temp__5804__auto___65806__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65468_65807__$1)){
var c__5568__auto___65808 = cljs.core.chunk_first(seq__65468_65807__$1);
var G__65809 = cljs.core.chunk_rest(seq__65468_65807__$1);
var G__65810 = c__5568__auto___65808;
var G__65811 = cljs.core.count(c__5568__auto___65808);
var G__65812 = (0);
seq__65468_65792 = G__65809;
chunk__65470_65793 = G__65810;
count__65471_65794 = G__65811;
i__65472_65795 = G__65812;
continue;
} else {
var map__65479_65813 = cljs.core.first(seq__65468_65807__$1);
var map__65479_65814__$1 = cljs.core.__destructure_map(map__65479_65813);
var task_65815 = map__65479_65814__$1;
var fn_str_65816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_65814__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65479_65814__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65818 = goog.getObjectByName(fn_str_65816,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65817)].join(''));

(fn_obj_65818.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65818.cljs$core$IFn$_invoke$arity$2(path,new_link_65791) : fn_obj_65818.call(null,path,new_link_65791));


var G__65819 = cljs.core.next(seq__65468_65807__$1);
var G__65820 = null;
var G__65821 = (0);
var G__65822 = (0);
seq__65468_65792 = G__65819;
chunk__65470_65793 = G__65820;
count__65471_65794 = G__65821;
i__65472_65795 = G__65822;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_65789);
});})(seq__65389_65726,chunk__65393_65728,count__65394_65729,i__65395_65730,seq__65179,chunk__65181,count__65182,i__65183,new_link_65791,path_match_65790,node_65789,seq__65389_65783__$1,temp__5804__auto___65782,path,map__65178,map__65178__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65790], 0));

goog.dom.insertSiblingAfter(new_link_65791,node_65789);


var G__65823 = cljs.core.next(seq__65389_65783__$1);
var G__65824 = null;
var G__65825 = (0);
var G__65826 = (0);
seq__65389_65726 = G__65823;
chunk__65393_65728 = G__65824;
count__65394_65729 = G__65825;
i__65395_65730 = G__65826;
continue;
} else {
var G__65827 = cljs.core.next(seq__65389_65783__$1);
var G__65828 = null;
var G__65829 = (0);
var G__65830 = (0);
seq__65389_65726 = G__65827;
chunk__65393_65728 = G__65828;
count__65394_65729 = G__65829;
i__65395_65730 = G__65830;
continue;
}
} else {
var G__65831 = cljs.core.next(seq__65389_65783__$1);
var G__65832 = null;
var G__65833 = (0);
var G__65834 = (0);
seq__65389_65726 = G__65831;
chunk__65393_65728 = G__65832;
count__65394_65729 = G__65833;
i__65395_65730 = G__65834;
continue;
}
}
} else {
}
}
break;
}


var G__65835 = seq__65179;
var G__65836 = chunk__65181;
var G__65837 = count__65182;
var G__65838 = (i__65183 + (1));
seq__65179 = G__65835;
chunk__65181 = G__65836;
count__65182 = G__65837;
i__65183 = G__65838;
continue;
} else {
var G__65839 = seq__65179;
var G__65840 = chunk__65181;
var G__65841 = count__65182;
var G__65842 = (i__65183 + (1));
seq__65179 = G__65839;
chunk__65181 = G__65840;
count__65182 = G__65841;
i__65183 = G__65842;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65179);
if(temp__5804__auto__){
var seq__65179__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65179__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__65179__$1);
var G__65843 = cljs.core.chunk_rest(seq__65179__$1);
var G__65844 = c__5568__auto__;
var G__65845 = cljs.core.count(c__5568__auto__);
var G__65846 = (0);
seq__65179 = G__65843;
chunk__65181 = G__65844;
count__65182 = G__65845;
i__65183 = G__65846;
continue;
} else {
var path = cljs.core.first(seq__65179__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65484_65847 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65488_65848 = null;
var count__65489_65849 = (0);
var i__65490_65850 = (0);
while(true){
if((i__65490_65850 < count__65489_65849)){
var node_65851 = chunk__65488_65848.cljs$core$IIndexed$_nth$arity$2(null,i__65490_65850);
if(cljs.core.not(node_65851.shadow$old)){
var path_match_65852 = shadow.cljs.devtools.client.browser.match_paths(node_65851.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65852)){
var new_link_65853 = (function (){var G__65543 = node_65851.cloneNode(true);
G__65543.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65852),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65543;
})();
(node_65851.shadow$old = true);

(new_link_65853.onload = ((function (seq__65484_65847,chunk__65488_65848,count__65489_65849,i__65490_65850,seq__65179,chunk__65181,count__65182,i__65183,new_link_65853,path_match_65852,node_65851,path,seq__65179__$1,temp__5804__auto__,map__65178,map__65178__$1,msg,updates,reload_info){
return (function (e){
var seq__65544_65854 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__65546_65855 = null;
var count__65547_65856 = (0);
var i__65548_65857 = (0);
while(true){
if((i__65548_65857 < count__65547_65856)){
var map__65559_65858 = chunk__65546_65855.cljs$core$IIndexed$_nth$arity$2(null,i__65548_65857);
var map__65559_65859__$1 = cljs.core.__destructure_map(map__65559_65858);
var task_65860 = map__65559_65859__$1;
var fn_str_65861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559_65859__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65559_65859__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65863 = goog.getObjectByName(fn_str_65861,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65862)].join(''));

(fn_obj_65863.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65863.cljs$core$IFn$_invoke$arity$2(path,new_link_65853) : fn_obj_65863.call(null,path,new_link_65853));


var G__65864 = seq__65544_65854;
var G__65865 = chunk__65546_65855;
var G__65866 = count__65547_65856;
var G__65867 = (i__65548_65857 + (1));
seq__65544_65854 = G__65864;
chunk__65546_65855 = G__65865;
count__65547_65856 = G__65866;
i__65548_65857 = G__65867;
continue;
} else {
var temp__5804__auto___65868__$1 = cljs.core.seq(seq__65544_65854);
if(temp__5804__auto___65868__$1){
var seq__65544_65869__$1 = temp__5804__auto___65868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65544_65869__$1)){
var c__5568__auto___65870 = cljs.core.chunk_first(seq__65544_65869__$1);
var G__65871 = cljs.core.chunk_rest(seq__65544_65869__$1);
var G__65872 = c__5568__auto___65870;
var G__65873 = cljs.core.count(c__5568__auto___65870);
var G__65874 = (0);
seq__65544_65854 = G__65871;
chunk__65546_65855 = G__65872;
count__65547_65856 = G__65873;
i__65548_65857 = G__65874;
continue;
} else {
var map__65560_65875 = cljs.core.first(seq__65544_65869__$1);
var map__65560_65876__$1 = cljs.core.__destructure_map(map__65560_65875);
var task_65877 = map__65560_65876__$1;
var fn_str_65878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65560_65876__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65560_65876__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65880 = goog.getObjectByName(fn_str_65878,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65879)].join(''));

(fn_obj_65880.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65880.cljs$core$IFn$_invoke$arity$2(path,new_link_65853) : fn_obj_65880.call(null,path,new_link_65853));


var G__65881 = cljs.core.next(seq__65544_65869__$1);
var G__65882 = null;
var G__65883 = (0);
var G__65884 = (0);
seq__65544_65854 = G__65881;
chunk__65546_65855 = G__65882;
count__65547_65856 = G__65883;
i__65548_65857 = G__65884;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_65851);
});})(seq__65484_65847,chunk__65488_65848,count__65489_65849,i__65490_65850,seq__65179,chunk__65181,count__65182,i__65183,new_link_65853,path_match_65852,node_65851,path,seq__65179__$1,temp__5804__auto__,map__65178,map__65178__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65852], 0));

goog.dom.insertSiblingAfter(new_link_65853,node_65851);


var G__65885 = seq__65484_65847;
var G__65886 = chunk__65488_65848;
var G__65887 = count__65489_65849;
var G__65888 = (i__65490_65850 + (1));
seq__65484_65847 = G__65885;
chunk__65488_65848 = G__65886;
count__65489_65849 = G__65887;
i__65490_65850 = G__65888;
continue;
} else {
var G__65889 = seq__65484_65847;
var G__65890 = chunk__65488_65848;
var G__65891 = count__65489_65849;
var G__65892 = (i__65490_65850 + (1));
seq__65484_65847 = G__65889;
chunk__65488_65848 = G__65890;
count__65489_65849 = G__65891;
i__65490_65850 = G__65892;
continue;
}
} else {
var G__65893 = seq__65484_65847;
var G__65894 = chunk__65488_65848;
var G__65895 = count__65489_65849;
var G__65896 = (i__65490_65850 + (1));
seq__65484_65847 = G__65893;
chunk__65488_65848 = G__65894;
count__65489_65849 = G__65895;
i__65490_65850 = G__65896;
continue;
}
} else {
var temp__5804__auto___65897__$1 = cljs.core.seq(seq__65484_65847);
if(temp__5804__auto___65897__$1){
var seq__65484_65898__$1 = temp__5804__auto___65897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65484_65898__$1)){
var c__5568__auto___65899 = cljs.core.chunk_first(seq__65484_65898__$1);
var G__65900 = cljs.core.chunk_rest(seq__65484_65898__$1);
var G__65901 = c__5568__auto___65899;
var G__65902 = cljs.core.count(c__5568__auto___65899);
var G__65903 = (0);
seq__65484_65847 = G__65900;
chunk__65488_65848 = G__65901;
count__65489_65849 = G__65902;
i__65490_65850 = G__65903;
continue;
} else {
var node_65904 = cljs.core.first(seq__65484_65898__$1);
if(cljs.core.not(node_65904.shadow$old)){
var path_match_65905 = shadow.cljs.devtools.client.browser.match_paths(node_65904.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65905)){
var new_link_65906 = (function (){var G__65576 = node_65904.cloneNode(true);
G__65576.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65905),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65576;
})();
(node_65904.shadow$old = true);

(new_link_65906.onload = ((function (seq__65484_65847,chunk__65488_65848,count__65489_65849,i__65490_65850,seq__65179,chunk__65181,count__65182,i__65183,new_link_65906,path_match_65905,node_65904,seq__65484_65898__$1,temp__5804__auto___65897__$1,path,seq__65179__$1,temp__5804__auto__,map__65178,map__65178__$1,msg,updates,reload_info){
return (function (e){
var seq__65581_65907 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__65583_65908 = null;
var count__65584_65909 = (0);
var i__65585_65910 = (0);
while(true){
if((i__65585_65910 < count__65584_65909)){
var map__65591_65911 = chunk__65583_65908.cljs$core$IIndexed$_nth$arity$2(null,i__65585_65910);
var map__65591_65912__$1 = cljs.core.__destructure_map(map__65591_65911);
var task_65913 = map__65591_65912__$1;
var fn_str_65914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65591_65912__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65591_65912__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65916 = goog.getObjectByName(fn_str_65914,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65915)].join(''));

(fn_obj_65916.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65916.cljs$core$IFn$_invoke$arity$2(path,new_link_65906) : fn_obj_65916.call(null,path,new_link_65906));


var G__65917 = seq__65581_65907;
var G__65918 = chunk__65583_65908;
var G__65919 = count__65584_65909;
var G__65920 = (i__65585_65910 + (1));
seq__65581_65907 = G__65917;
chunk__65583_65908 = G__65918;
count__65584_65909 = G__65919;
i__65585_65910 = G__65920;
continue;
} else {
var temp__5804__auto___65921__$2 = cljs.core.seq(seq__65581_65907);
if(temp__5804__auto___65921__$2){
var seq__65581_65922__$1 = temp__5804__auto___65921__$2;
if(cljs.core.chunked_seq_QMARK_(seq__65581_65922__$1)){
var c__5568__auto___65923 = cljs.core.chunk_first(seq__65581_65922__$1);
var G__65924 = cljs.core.chunk_rest(seq__65581_65922__$1);
var G__65925 = c__5568__auto___65923;
var G__65926 = cljs.core.count(c__5568__auto___65923);
var G__65927 = (0);
seq__65581_65907 = G__65924;
chunk__65583_65908 = G__65925;
count__65584_65909 = G__65926;
i__65585_65910 = G__65927;
continue;
} else {
var map__65594_65928 = cljs.core.first(seq__65581_65922__$1);
var map__65594_65929__$1 = cljs.core.__destructure_map(map__65594_65928);
var task_65930 = map__65594_65929__$1;
var fn_str_65931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65594_65929__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_65932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65594_65929__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_65933 = goog.getObjectByName(fn_str_65931,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_65932)].join(''));

(fn_obj_65933.cljs$core$IFn$_invoke$arity$2 ? fn_obj_65933.cljs$core$IFn$_invoke$arity$2(path,new_link_65906) : fn_obj_65933.call(null,path,new_link_65906));


var G__65934 = cljs.core.next(seq__65581_65922__$1);
var G__65935 = null;
var G__65936 = (0);
var G__65937 = (0);
seq__65581_65907 = G__65934;
chunk__65583_65908 = G__65935;
count__65584_65909 = G__65936;
i__65585_65910 = G__65937;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_65904);
});})(seq__65484_65847,chunk__65488_65848,count__65489_65849,i__65490_65850,seq__65179,chunk__65181,count__65182,i__65183,new_link_65906,path_match_65905,node_65904,seq__65484_65898__$1,temp__5804__auto___65897__$1,path,seq__65179__$1,temp__5804__auto__,map__65178,map__65178__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65905], 0));

goog.dom.insertSiblingAfter(new_link_65906,node_65904);


var G__65938 = cljs.core.next(seq__65484_65898__$1);
var G__65939 = null;
var G__65940 = (0);
var G__65941 = (0);
seq__65484_65847 = G__65938;
chunk__65488_65848 = G__65939;
count__65489_65849 = G__65940;
i__65490_65850 = G__65941;
continue;
} else {
var G__65942 = cljs.core.next(seq__65484_65898__$1);
var G__65943 = null;
var G__65944 = (0);
var G__65945 = (0);
seq__65484_65847 = G__65942;
chunk__65488_65848 = G__65943;
count__65489_65849 = G__65944;
i__65490_65850 = G__65945;
continue;
}
} else {
var G__65946 = cljs.core.next(seq__65484_65898__$1);
var G__65947 = null;
var G__65948 = (0);
var G__65949 = (0);
seq__65484_65847 = G__65946;
chunk__65488_65848 = G__65947;
count__65489_65849 = G__65948;
i__65490_65850 = G__65949;
continue;
}
}
} else {
}
}
break;
}


var G__65950 = cljs.core.next(seq__65179__$1);
var G__65951 = null;
var G__65952 = (0);
var G__65953 = (0);
seq__65179 = G__65950;
chunk__65181 = G__65951;
count__65182 = G__65952;
i__65183 = G__65953;
continue;
} else {
var G__65954 = cljs.core.next(seq__65179__$1);
var G__65955 = null;
var G__65956 = (0);
var G__65957 = (0);
seq__65179 = G__65954;
chunk__65181 = G__65955;
count__65182 = G__65956;
i__65183 = G__65957;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65599){
var map__65600 = p__65599;
var map__65600__$1 = cljs.core.__destructure_map(map__65600);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65600__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65612){
var map__65614 = p__65612;
var map__65614__$1 = cljs.core.__destructure_map(map__65614);
var _ = map__65614__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65614__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65615,done,error){
var map__65616 = p__65615;
var map__65616__$1 = cljs.core.__destructure_map(map__65616);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65616__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65619,done,error){
var map__65620 = p__65619;
var map__65620__$1 = cljs.core.__destructure_map(map__65620);
var msg = map__65620__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65620__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65620__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65620__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65621){
var map__65622 = p__65621;
var map__65622__$1 = cljs.core.__destructure_map(map__65622);
var src = map__65622__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65622__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65623 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65623) : done.call(null,G__65623));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65624){
var map__65625 = p__65624;
var map__65625__$1 = cljs.core.__destructure_map(map__65625);
var msg__$1 = map__65625__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65625__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65626){var ex = e65626;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65627){
var map__65628 = p__65627;
var map__65628__$1 = cljs.core.__destructure_map(map__65628);
var env = map__65628__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65628__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65629){
var map__65630 = p__65629;
var map__65630__$1 = cljs.core.__destructure_map(map__65630);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65630__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65630__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__65632){
var map__65633 = p__65632;
var map__65633__$1 = cljs.core.__destructure_map(map__65633);
var svc = map__65633__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65633__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
