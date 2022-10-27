goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37976,p__37977){
var map__37978 = p__37976;
var map__37978__$1 = cljs.core.__destructure_map(map__37978);
var svc = map__37978__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37978__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37979 = p__37977;
var map__37979__$1 = cljs.core.__destructure_map(map__37979);
var msg = map__37979__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37979__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37979__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37979__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37979__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37992,p__37993){
var map__37994 = p__37992;
var map__37994__$1 = cljs.core.__destructure_map(map__37994);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37994__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37995 = p__37993;
var map__37995__$1 = cljs.core.__destructure_map(map__37995);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37995__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38014,p__38015){
var map__38020 = p__38014;
var map__38020__$1 = cljs.core.__destructure_map(map__38020);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38021 = p__38015;
var map__38021__$1 = cljs.core.__destructure_map(map__38021);
var msg = map__38021__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38021__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38050,tid){
var map__38051 = p__38050;
var map__38051__$1 = cljs.core.__destructure_map(map__38051);
var svc = map__38051__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38118 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38120 = null;
var count__38121 = (0);
var i__38122 = (0);
while(true){
if((i__38122 < count__38121)){
var vec__38166 = chunk__38120.cljs$core$IIndexed$_nth$arity$2(null,i__38122);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38233 = seq__38118;
var G__38234 = chunk__38120;
var G__38235 = count__38121;
var G__38236 = (i__38122 + (1));
seq__38118 = G__38233;
chunk__38120 = G__38234;
count__38121 = G__38235;
i__38122 = G__38236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38118);
if(temp__5804__auto__){
var seq__38118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38118__$1);
var G__38237 = cljs.core.chunk_rest(seq__38118__$1);
var G__38238 = c__5568__auto__;
var G__38239 = cljs.core.count(c__5568__auto__);
var G__38240 = (0);
seq__38118 = G__38237;
chunk__38120 = G__38238;
count__38121 = G__38239;
i__38122 = G__38240;
continue;
} else {
var vec__38175 = cljs.core.first(seq__38118__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38175,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38175,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38242 = cljs.core.next(seq__38118__$1);
var G__38243 = null;
var G__38244 = (0);
var G__38245 = (0);
seq__38118 = G__38242;
chunk__38120 = G__38243;
count__38121 = G__38244;
i__38122 = G__38245;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38053_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38053_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38054_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38054_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38055_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38055_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38060_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38060_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38181){
var map__38182 = p__38181;
var map__38182__$1 = cljs.core.__destructure_map(map__38182);
var svc = map__38182__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
