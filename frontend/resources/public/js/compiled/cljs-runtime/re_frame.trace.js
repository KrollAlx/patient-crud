goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26927){
var map__26928 = p__26927;
var map__26928__$1 = cljs.core.__destructure_map(map__26928);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26931_26964 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26932_26965 = null;
var count__26933_26966 = (0);
var i__26934_26967 = (0);
while(true){
if((i__26934_26967 < count__26933_26966)){
var vec__26946_26969 = chunk__26932_26965.cljs$core$IIndexed$_nth$arity$2(null,i__26934_26967);
var k_26970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946_26969,(0),null);
var cb_26971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946_26969,(1),null);
try{var G__26950_26975 = cljs.core.deref(re_frame.trace.traces);
(cb_26971.cljs$core$IFn$_invoke$arity$1 ? cb_26971.cljs$core$IFn$_invoke$arity$1(G__26950_26975) : cb_26971.call(null,G__26950_26975));
}catch (e26949){var e_26976 = e26949;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26970,"while storing",cljs.core.deref(re_frame.trace.traces),e_26976], 0));
}

var G__26978 = seq__26931_26964;
var G__26979 = chunk__26932_26965;
var G__26980 = count__26933_26966;
var G__26981 = (i__26934_26967 + (1));
seq__26931_26964 = G__26978;
chunk__26932_26965 = G__26979;
count__26933_26966 = G__26980;
i__26934_26967 = G__26981;
continue;
} else {
var temp__5804__auto___26982 = cljs.core.seq(seq__26931_26964);
if(temp__5804__auto___26982){
var seq__26931_26983__$1 = temp__5804__auto___26982;
if(cljs.core.chunked_seq_QMARK_(seq__26931_26983__$1)){
var c__5568__auto___26984 = cljs.core.chunk_first(seq__26931_26983__$1);
var G__26985 = cljs.core.chunk_rest(seq__26931_26983__$1);
var G__26986 = c__5568__auto___26984;
var G__26987 = cljs.core.count(c__5568__auto___26984);
var G__26988 = (0);
seq__26931_26964 = G__26985;
chunk__26932_26965 = G__26986;
count__26933_26966 = G__26987;
i__26934_26967 = G__26988;
continue;
} else {
var vec__26951_26989 = cljs.core.first(seq__26931_26983__$1);
var k_26990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_26989,(0),null);
var cb_26991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26951_26989,(1),null);
try{var G__26955_26992 = cljs.core.deref(re_frame.trace.traces);
(cb_26991.cljs$core$IFn$_invoke$arity$1 ? cb_26991.cljs$core$IFn$_invoke$arity$1(G__26955_26992) : cb_26991.call(null,G__26955_26992));
}catch (e26954){var e_26993 = e26954;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26990,"while storing",cljs.core.deref(re_frame.trace.traces),e_26993], 0));
}

var G__26995 = cljs.core.next(seq__26931_26983__$1);
var G__26996 = null;
var G__26997 = (0);
var G__26998 = (0);
seq__26931_26964 = G__26995;
chunk__26932_26965 = G__26996;
count__26933_26966 = G__26997;
i__26934_26967 = G__26998;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
