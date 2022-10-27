goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__29043 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29044 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29044);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___29127 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___29127)){
var new_db_29128 = temp__5804__auto___29127;
var fexpr__29046_29129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__29046_29129.cljs$core$IFn$_invoke$arity$1 ? fexpr__29046_29129.cljs$core$IFn$_invoke$arity$1(new_db_29128) : fexpr__29046_29129.call(null,new_db_29128));
} else {
}

var seq__29047 = cljs.core.seq(effects_without_db);
var chunk__29048 = null;
var count__29049 = (0);
var i__29050 = (0);
while(true){
if((i__29050 < count__29049)){
var vec__29062 = chunk__29048.cljs$core$IIndexed$_nth$arity$2(null,i__29050);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(1),null);
var temp__5802__auto___29130 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29130)){
var effect_fn_29131 = temp__5802__auto___29130;
(effect_fn_29131.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29131.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29131.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__29132 = seq__29047;
var G__29133 = chunk__29048;
var G__29134 = count__29049;
var G__29135 = (i__29050 + (1));
seq__29047 = G__29132;
chunk__29048 = G__29133;
count__29049 = G__29134;
i__29050 = G__29135;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29047);
if(temp__5804__auto__){
var seq__29047__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29047__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29047__$1);
var G__29136 = cljs.core.chunk_rest(seq__29047__$1);
var G__29137 = c__5568__auto__;
var G__29138 = cljs.core.count(c__5568__auto__);
var G__29139 = (0);
seq__29047 = G__29136;
chunk__29048 = G__29137;
count__29049 = G__29138;
i__29050 = G__29139;
continue;
} else {
var vec__29067 = cljs.core.first(seq__29047__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(1),null);
var temp__5802__auto___29140 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29140)){
var effect_fn_29141 = temp__5802__auto___29140;
(effect_fn_29141.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29141.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29141.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__29142 = cljs.core.next(seq__29047__$1);
var G__29143 = null;
var G__29144 = (0);
var G__29145 = (0);
seq__29047 = G__29142;
chunk__29048 = G__29143;
count__29049 = G__29144;
i__29050 = G__29145;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26895__auto___29146 = re_frame.interop.now();
var duration__26896__auto___29147 = (end__26895__auto___29146 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26896__auto___29147,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26895__auto___29146);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29043);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___29148 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___29148)){
var new_db_29149 = temp__5804__auto___29148;
var fexpr__29073_29150 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__29073_29150.cljs$core$IFn$_invoke$arity$1 ? fexpr__29073_29150.cljs$core$IFn$_invoke$arity$1(new_db_29149) : fexpr__29073_29150.call(null,new_db_29149));
} else {
}

var seq__29075 = cljs.core.seq(effects_without_db);
var chunk__29076 = null;
var count__29077 = (0);
var i__29078 = (0);
while(true){
if((i__29078 < count__29077)){
var vec__29086 = chunk__29076.cljs$core$IIndexed$_nth$arity$2(null,i__29078);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29086,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29086,(1),null);
var temp__5802__auto___29151 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29151)){
var effect_fn_29152 = temp__5802__auto___29151;
(effect_fn_29152.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29152.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29152.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__29153 = seq__29075;
var G__29154 = chunk__29076;
var G__29155 = count__29077;
var G__29156 = (i__29078 + (1));
seq__29075 = G__29153;
chunk__29076 = G__29154;
count__29077 = G__29155;
i__29078 = G__29156;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29075);
if(temp__5804__auto__){
var seq__29075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29075__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29075__$1);
var G__29157 = cljs.core.chunk_rest(seq__29075__$1);
var G__29158 = c__5568__auto__;
var G__29159 = cljs.core.count(c__5568__auto__);
var G__29160 = (0);
seq__29075 = G__29157;
chunk__29076 = G__29158;
count__29077 = G__29159;
i__29078 = G__29160;
continue;
} else {
var vec__29089 = cljs.core.first(seq__29075__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(1),null);
var temp__5802__auto___29161 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29161)){
var effect_fn_29162 = temp__5802__auto___29161;
(effect_fn_29162.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29162.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29162.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__29163 = cljs.core.next(seq__29075__$1);
var G__29164 = null;
var G__29165 = (0);
var G__29166 = (0);
seq__29075 = G__29163;
chunk__29076 = G__29164;
count__29077 = G__29165;
i__29078 = G__29166;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__29092){
var map__29093 = p__29092;
var map__29093__$1 = cljs.core.__destructure_map(map__29093);
var effect = map__29093__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29093__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29093__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__29094 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__29095 = null;
var count__29096 = (0);
var i__29097 = (0);
while(true){
if((i__29097 < count__29096)){
var effect = chunk__29095.cljs$core$IIndexed$_nth$arity$2(null,i__29097);
re_frame.fx.dispatch_later(effect);


var G__29167 = seq__29094;
var G__29168 = chunk__29095;
var G__29169 = count__29096;
var G__29170 = (i__29097 + (1));
seq__29094 = G__29167;
chunk__29095 = G__29168;
count__29096 = G__29169;
i__29097 = G__29170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29094);
if(temp__5804__auto__){
var seq__29094__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29094__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29094__$1);
var G__29171 = cljs.core.chunk_rest(seq__29094__$1);
var G__29172 = c__5568__auto__;
var G__29173 = cljs.core.count(c__5568__auto__);
var G__29174 = (0);
seq__29094 = G__29171;
chunk__29095 = G__29172;
count__29096 = G__29173;
i__29097 = G__29174;
continue;
} else {
var effect = cljs.core.first(seq__29094__$1);
re_frame.fx.dispatch_later(effect);


var G__29175 = cljs.core.next(seq__29094__$1);
var G__29176 = null;
var G__29177 = (0);
var G__29178 = (0);
seq__29094 = G__29175;
chunk__29095 = G__29176;
count__29096 = G__29177;
i__29097 = G__29178;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__29098 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__29099 = null;
var count__29100 = (0);
var i__29101 = (0);
while(true){
if((i__29101 < count__29100)){
var vec__29108 = chunk__29099.cljs$core$IIndexed$_nth$arity$2(null,i__29101);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29108,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___29179 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29179)){
var effect_fn_29180 = temp__5802__auto___29179;
(effect_fn_29180.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29180.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29180.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__29181 = seq__29098;
var G__29182 = chunk__29099;
var G__29183 = count__29100;
var G__29184 = (i__29101 + (1));
seq__29098 = G__29181;
chunk__29099 = G__29182;
count__29100 = G__29183;
i__29101 = G__29184;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29098);
if(temp__5804__auto__){
var seq__29098__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29098__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29098__$1);
var G__29185 = cljs.core.chunk_rest(seq__29098__$1);
var G__29186 = c__5568__auto__;
var G__29187 = cljs.core.count(c__5568__auto__);
var G__29188 = (0);
seq__29098 = G__29185;
chunk__29099 = G__29186;
count__29100 = G__29187;
i__29101 = G__29188;
continue;
} else {
var vec__29114 = cljs.core.first(seq__29098__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29114,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___29189 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___29189)){
var effect_fn_29190 = temp__5802__auto___29189;
(effect_fn_29190.cljs$core$IFn$_invoke$arity$1 ? effect_fn_29190.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_29190.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__29191 = cljs.core.next(seq__29098__$1);
var G__29192 = null;
var G__29193 = (0);
var G__29194 = (0);
seq__29098 = G__29191;
chunk__29099 = G__29192;
count__29100 = G__29193;
i__29101 = G__29194;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__29119 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__29120 = null;
var count__29121 = (0);
var i__29122 = (0);
while(true){
if((i__29122 < count__29121)){
var event = chunk__29120.cljs$core$IIndexed$_nth$arity$2(null,i__29122);
re_frame.router.dispatch(event);


var G__29195 = seq__29119;
var G__29196 = chunk__29120;
var G__29197 = count__29121;
var G__29198 = (i__29122 + (1));
seq__29119 = G__29195;
chunk__29120 = G__29196;
count__29121 = G__29197;
i__29122 = G__29198;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29119);
if(temp__5804__auto__){
var seq__29119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29119__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29119__$1);
var G__29199 = cljs.core.chunk_rest(seq__29119__$1);
var G__29200 = c__5568__auto__;
var G__29201 = cljs.core.count(c__5568__auto__);
var G__29202 = (0);
seq__29119 = G__29199;
chunk__29120 = G__29200;
count__29121 = G__29201;
i__29122 = G__29202;
continue;
} else {
var event = cljs.core.first(seq__29119__$1);
re_frame.router.dispatch(event);


var G__29203 = cljs.core.next(seq__29119__$1);
var G__29204 = null;
var G__29205 = (0);
var G__29206 = (0);
seq__29119 = G__29203;
chunk__29120 = G__29204;
count__29121 = G__29205;
i__29122 = G__29206;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__29123 = cljs.core.seq(value);
var chunk__29124 = null;
var count__29125 = (0);
var i__29126 = (0);
while(true){
if((i__29126 < count__29125)){
var event = chunk__29124.cljs$core$IIndexed$_nth$arity$2(null,i__29126);
clear_event(event);


var G__29207 = seq__29123;
var G__29208 = chunk__29124;
var G__29209 = count__29125;
var G__29210 = (i__29126 + (1));
seq__29123 = G__29207;
chunk__29124 = G__29208;
count__29125 = G__29209;
i__29126 = G__29210;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29123);
if(temp__5804__auto__){
var seq__29123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29123__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29123__$1);
var G__29211 = cljs.core.chunk_rest(seq__29123__$1);
var G__29212 = c__5568__auto__;
var G__29213 = cljs.core.count(c__5568__auto__);
var G__29214 = (0);
seq__29123 = G__29211;
chunk__29124 = G__29212;
count__29125 = G__29213;
i__29126 = G__29214;
continue;
} else {
var event = cljs.core.first(seq__29123__$1);
clear_event(event);


var G__29215 = cljs.core.next(seq__29123__$1);
var G__29216 = null;
var G__29217 = (0);
var G__29218 = (0);
seq__29123 = G__29215;
chunk__29124 = G__29216;
count__29125 = G__29217;
i__29126 = G__29218;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
