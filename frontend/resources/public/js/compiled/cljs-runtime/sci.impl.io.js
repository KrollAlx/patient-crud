goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__44914 = arguments.length;
switch (G__44914) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.vars.clojure_core_ns], null));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 2);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__44917 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44918 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44918);

try{var G__44921 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__44921);

return G__44921;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44917);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__44925 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44926 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44926);

try{var G__44927 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__44927);

return G__44927;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44925);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__44928 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44929 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44929);

try{var G__44931 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__44931);

return G__44931;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44928);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__44932 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44933 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44933);

try{var G__44934 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__44934);

return G__44934;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44932);
}})();
sci.impl.io.print_meta = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null));
sci.impl.io.print_level = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null));
sci.impl.io.print_namespace_maps = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),true);
sci.impl.io.flush_on_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),cljs.core._STAR_flush_on_newline_STAR_);
sci.impl.io.print_readably = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),cljs.core._STAR_print_readably_STAR_);
sci.impl.io.print_newline = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),cljs.core._STAR_print_newline_STAR_);
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__44939 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44940 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44940);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44939);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45344 = arguments.length;
var i__5770__auto___45345 = (0);
while(true){
if((i__5770__auto___45345 < len__5769__auto___45344)){
args__5775__auto__.push((arguments[i__5770__auto___45345]));

var G__45349 = (i__5770__auto___45345 + (1));
i__5770__auto___45345 = G__45349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44958 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44959 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44960 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44961 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44962 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44963 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44964 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__44966 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44967 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44968 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44969 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44970 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44971 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44972 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44966);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44967);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44968);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44969);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44970);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44971);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44972);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44964);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44963);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44962);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44961);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44960);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44959);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44958);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq44945){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44945));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__44977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44978 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44978);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44977);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45356 = arguments.length;
var i__5770__auto___45357 = (0);
while(true){
if((i__5770__auto___45357 < len__5769__auto___45356)){
args__5775__auto__.push((arguments[i__5770__auto___45357]));

var G__45361 = (i__5770__auto___45357 + (1));
i__5770__auto___45357 = G__45361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44996 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44997 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44998 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44999 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45000 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45001 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__45002 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45003 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__45004 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__45005 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45006 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__45007 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45002);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45003);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__45004);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45005);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45006);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45007);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45001);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45000);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44999);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44998);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44997);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44996);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq44988){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44988));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45374 = arguments.length;
var i__5770__auto___45375 = (0);
while(true){
if((i__5770__auto___45375 < len__5769__auto___45374)){
args__5775__auto__.push((arguments[i__5770__auto___45375]));

var G__45379 = (i__5770__auto___45375 + (1));
i__5770__auto___45375 = G__45379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__45013 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__45014 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__45015 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__45016 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__45017 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45018 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45019 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__45020 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__45021 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45022 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__45023 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__45024 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45025 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__45026 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45020);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45021);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45022);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__45023);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45024);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45025);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45026);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45019);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45018);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__45017);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__45016);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45015);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45014);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45013);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq45009){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45009));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45398 = arguments.length;
var i__5770__auto___45402 = (0);
while(true){
if((i__5770__auto___45402 < len__5769__auto___45398)){
args__5775__auto__.push((arguments[i__5770__auto___45402]));

var G__45403 = (i__5770__auto___45402 + (1));
i__5770__auto___45402 = G__45403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__45037 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__45038 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__45039 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__45040 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45041 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45042 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__45043 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45044 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__45045 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__45046 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45047 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__45048 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45043);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45044);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__45045);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45046);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45047);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45048);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45042);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45041);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__45040);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__45039);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45038);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45037);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq45034){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45034));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45416 = arguments.length;
var i__5770__auto___45418 = (0);
while(true){
if((i__5770__auto___45418 < len__5769__auto___45416)){
args__5775__auto__.push((arguments[i__5770__auto___45418]));

var G__45419 = (i__5770__auto___45418 + (1));
i__5770__auto___45418 = G__45419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__45059 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__45060 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__45061 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__45062 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45063 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__45065 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__45066 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45067 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__45068 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45069 = null;
var _STAR_print_newline_STAR__temp_val__45070 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45065);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45066);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45067);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45068);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45070);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45064);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45063);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__45062);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45061);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45060);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45059);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq45058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45058));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45432 = arguments.length;
var i__5770__auto___45433 = (0);
while(true){
if((i__5770__auto___45433 < len__5769__auto___45432)){
args__5775__auto__.push((arguments[i__5770__auto___45433]));

var G__45434 = (i__5770__auto___45433 + (1));
i__5770__auto___45433 = G__45434;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__45080 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__45081 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__45082 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__45083 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45084 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45085 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_length_STAR__temp_val__45086 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45087 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__45088 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__45089 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45090 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__45091 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45086);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45087);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__45088);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45089);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45090);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45091);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45085);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45084);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__45083);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__45082);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45081);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45080);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq45071){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45071));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45438 = arguments.length;
var i__5770__auto___45439 = (0);
while(true){
if((i__5770__auto___45439 < len__5769__auto___45438)){
args__5775__auto__.push((arguments[i__5770__auto___45439]));

var G__45440 = (i__5770__auto___45439 + (1));
i__5770__auto___45439 = G__45440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__45098 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__45099 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__45100 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__45101 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__45102 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__45103 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__45104 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__temp_val__45105 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__45106 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__45107 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__45108 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__45109 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__45110 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__45111 = cljs.core.deref(sci.impl.io.print_newline);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45105);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45106);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45107);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__45108);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__45109);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__45110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45111);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45104);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__45103);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__45102);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__45101);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45100);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45099);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45098);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq45094){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45094));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45447 = arguments.length;
var i__5770__auto___45449 = (0);
while(true){
if((i__5770__auto___45449 < len__5769__auto___45447)){
args__5775__auto__.push((arguments[i__5770__auto___45449]));

var G__45451 = (i__5770__auto___45449 + (1));
i__5770__auto___45449 = G__45451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__45116__auto__","s__45116__auto__",165380133,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__45117__auto__","x__45117__auto__",-1974308823,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__45116__auto__","s__45116__auto__",165380133,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45117__auto__","x__45117__auto__",-1974308823,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__45116__auto__","s__45116__auto__",165380133,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq45118){
var G__45119 = cljs.core.first(seq45118);
var seq45118__$1 = cljs.core.next(seq45118);
var G__45120 = cljs.core.first(seq45118__$1);
var seq45118__$2 = cljs.core.next(seq45118__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45119,G__45120,seq45118__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
