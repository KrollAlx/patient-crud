goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23705 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23706 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23706);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23817 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23817)){
var new_db_23818 = temp__5804__auto___23817;
var fexpr__23712_23819 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23712_23819.cljs$core$IFn$_invoke$arity$1 ? fexpr__23712_23819.cljs$core$IFn$_invoke$arity$1(new_db_23818) : fexpr__23712_23819.call(null,new_db_23818));
} else {
}

var seq__23713 = cljs.core.seq(effects_without_db);
var chunk__23714 = null;
var count__23715 = (0);
var i__23716 = (0);
while(true){
if((i__23716 < count__23715)){
var vec__23731 = chunk__23714.cljs$core$IIndexed$_nth$arity$2(null,i__23716);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23731,(1),null);
var temp__5802__auto___23820 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23820)){
var effect_fn_23824 = temp__5802__auto___23820;
(effect_fn_23824.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23824.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23824.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23825 = seq__23713;
var G__23826 = chunk__23714;
var G__23827 = count__23715;
var G__23828 = (i__23716 + (1));
seq__23713 = G__23825;
chunk__23714 = G__23826;
count__23715 = G__23827;
i__23716 = G__23828;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23713);
if(temp__5804__auto__){
var seq__23713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23713__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23713__$1);
var G__23836 = cljs.core.chunk_rest(seq__23713__$1);
var G__23837 = c__5568__auto__;
var G__23838 = cljs.core.count(c__5568__auto__);
var G__23839 = (0);
seq__23713 = G__23836;
chunk__23714 = G__23837;
count__23715 = G__23838;
i__23716 = G__23839;
continue;
} else {
var vec__23737 = cljs.core.first(seq__23713__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(1),null);
var temp__5802__auto___23840 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23840)){
var effect_fn_23841 = temp__5802__auto___23840;
(effect_fn_23841.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23841.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23841.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23842 = cljs.core.next(seq__23713__$1);
var G__23843 = null;
var G__23844 = (0);
var G__23845 = (0);
seq__23713 = G__23842;
chunk__23714 = G__23843;
count__23715 = G__23844;
i__23716 = G__23845;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__23072__auto___23846 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__23073__auto___23847 = (end__23072__auto___23846 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23073__auto___23847,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__23072__auto___23846);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23705);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23848 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23848)){
var new_db_23849 = temp__5804__auto___23848;
var fexpr__23740_23850 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23740_23850.cljs$core$IFn$_invoke$arity$1 ? fexpr__23740_23850.cljs$core$IFn$_invoke$arity$1(new_db_23849) : fexpr__23740_23850.call(null,new_db_23849));
} else {
}

var seq__23745 = cljs.core.seq(effects_without_db);
var chunk__23746 = null;
var count__23747 = (0);
var i__23748 = (0);
while(true){
if((i__23748 < count__23747)){
var vec__23755 = chunk__23746.cljs$core$IIndexed$_nth$arity$2(null,i__23748);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23755,(1),null);
var temp__5802__auto___23851 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23851)){
var effect_fn_23852 = temp__5802__auto___23851;
(effect_fn_23852.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23852.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23852.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23853 = seq__23745;
var G__23854 = chunk__23746;
var G__23855 = count__23747;
var G__23856 = (i__23748 + (1));
seq__23745 = G__23853;
chunk__23746 = G__23854;
count__23747 = G__23855;
i__23748 = G__23856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23745);
if(temp__5804__auto__){
var seq__23745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23745__$1);
var G__23857 = cljs.core.chunk_rest(seq__23745__$1);
var G__23858 = c__5568__auto__;
var G__23859 = cljs.core.count(c__5568__auto__);
var G__23860 = (0);
seq__23745 = G__23857;
chunk__23746 = G__23858;
count__23747 = G__23859;
i__23748 = G__23860;
continue;
} else {
var vec__23758 = cljs.core.first(seq__23745__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23758,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23758,(1),null);
var temp__5802__auto___23861 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23861)){
var effect_fn_23863 = temp__5802__auto___23861;
(effect_fn_23863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23863.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23864 = cljs.core.next(seq__23745__$1);
var G__23865 = null;
var G__23866 = (0);
var G__23867 = (0);
seq__23745 = G__23864;
chunk__23746 = G__23865;
count__23747 = G__23866;
i__23748 = G__23867;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__23763){
var map__23764 = p__23763;
var map__23764__$1 = cljs.core.__destructure_map(map__23764);
var effect = map__23764__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23764__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__23769 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23770 = null;
var count__23771 = (0);
var i__23772 = (0);
while(true){
if((i__23772 < count__23771)){
var effect = chunk__23770.cljs$core$IIndexed$_nth$arity$2(null,i__23772);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__23869 = seq__23769;
var G__23870 = chunk__23770;
var G__23871 = count__23771;
var G__23872 = (i__23772 + (1));
seq__23769 = G__23869;
chunk__23770 = G__23870;
count__23771 = G__23871;
i__23772 = G__23872;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23769);
if(temp__5804__auto__){
var seq__23769__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23769__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23769__$1);
var G__23873 = cljs.core.chunk_rest(seq__23769__$1);
var G__23874 = c__5568__auto__;
var G__23875 = cljs.core.count(c__5568__auto__);
var G__23876 = (0);
seq__23769 = G__23873;
chunk__23770 = G__23874;
count__23771 = G__23875;
i__23772 = G__23876;
continue;
} else {
var effect = cljs.core.first(seq__23769__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__23877 = cljs.core.next(seq__23769__$1);
var G__23878 = null;
var G__23879 = (0);
var G__23880 = (0);
seq__23769 = G__23877;
chunk__23770 = G__23878;
count__23771 = G__23879;
i__23772 = G__23880;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23783 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23784 = null;
var count__23785 = (0);
var i__23786 = (0);
while(true){
if((i__23786 < count__23785)){
var vec__23793 = chunk__23784.cljs$core$IIndexed$_nth$arity$2(null,i__23786);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23793,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23881 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23881)){
var effect_fn_23882 = temp__5802__auto___23881;
(effect_fn_23882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23882.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23883 = seq__23783;
var G__23884 = chunk__23784;
var G__23885 = count__23785;
var G__23886 = (i__23786 + (1));
seq__23783 = G__23883;
chunk__23784 = G__23884;
count__23785 = G__23885;
i__23786 = G__23886;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23783);
if(temp__5804__auto__){
var seq__23783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23783__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23783__$1);
var G__23887 = cljs.core.chunk_rest(seq__23783__$1);
var G__23888 = c__5568__auto__;
var G__23889 = cljs.core.count(c__5568__auto__);
var G__23890 = (0);
seq__23783 = G__23887;
chunk__23784 = G__23888;
count__23785 = G__23889;
i__23786 = G__23890;
continue;
} else {
var vec__23796 = cljs.core.first(seq__23783__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23796,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23796,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23893 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23893)){
var effect_fn_23895 = temp__5802__auto___23893;
(effect_fn_23895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23895.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23897 = cljs.core.next(seq__23783__$1);
var G__23898 = null;
var G__23899 = (0);
var G__23900 = (0);
seq__23783 = G__23897;
chunk__23784 = G__23898;
count__23785 = G__23899;
i__23786 = G__23900;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23803 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23804 = null;
var count__23805 = (0);
var i__23806 = (0);
while(true){
if((i__23806 < count__23805)){
var event = chunk__23804.cljs$core$IIndexed$_nth$arity$2(null,i__23806);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__23901 = seq__23803;
var G__23902 = chunk__23804;
var G__23903 = count__23805;
var G__23904 = (i__23806 + (1));
seq__23803 = G__23901;
chunk__23804 = G__23902;
count__23805 = G__23903;
i__23806 = G__23904;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23803);
if(temp__5804__auto__){
var seq__23803__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23803__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23803__$1);
var G__23905 = cljs.core.chunk_rest(seq__23803__$1);
var G__23906 = c__5568__auto__;
var G__23907 = cljs.core.count(c__5568__auto__);
var G__23908 = (0);
seq__23803 = G__23905;
chunk__23804 = G__23906;
count__23805 = G__23907;
i__23806 = G__23908;
continue;
} else {
var event = cljs.core.first(seq__23803__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__23909 = cljs.core.next(seq__23803__$1);
var G__23910 = null;
var G__23911 = (0);
var G__23912 = (0);
seq__23803 = G__23909;
chunk__23804 = G__23910;
count__23805 = G__23911;
i__23806 = G__23912;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23808 = cljs.core.seq(value);
var chunk__23809 = null;
var count__23810 = (0);
var i__23811 = (0);
while(true){
if((i__23811 < count__23810)){
var event = chunk__23809.cljs$core$IIndexed$_nth$arity$2(null,i__23811);
clear_event(event);


var G__23915 = seq__23808;
var G__23916 = chunk__23809;
var G__23917 = count__23810;
var G__23918 = (i__23811 + (1));
seq__23808 = G__23915;
chunk__23809 = G__23916;
count__23810 = G__23917;
i__23811 = G__23918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23808);
if(temp__5804__auto__){
var seq__23808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23808__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23808__$1);
var G__23920 = cljs.core.chunk_rest(seq__23808__$1);
var G__23921 = c__5568__auto__;
var G__23922 = cljs.core.count(c__5568__auto__);
var G__23923 = (0);
seq__23808 = G__23920;
chunk__23809 = G__23921;
count__23810 = G__23922;
i__23811 = G__23923;
continue;
} else {
var event = cljs.core.first(seq__23808__$1);
clear_event(event);


var G__23924 = cljs.core.next(seq__23808__$1);
var G__23925 = null;
var G__23926 = (0);
var G__23927 = (0);
seq__23808 = G__23924;
chunk__23809 = G__23925;
count__23810 = G__23926;
i__23811 = G__23927;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
