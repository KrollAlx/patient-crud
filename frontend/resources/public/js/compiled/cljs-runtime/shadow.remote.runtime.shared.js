goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__60436,res){
var map__60437 = p__60436;
var map__60437__$1 = cljs.core.__destructure_map(map__60437);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60437__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__60438 = res;
var G__60438__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60438,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__60438);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60438__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__60438__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__60444 = arguments.length;
switch (G__60444) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__60445,msg,handlers,timeout_after_ms){
var map__60446 = p__60445;
var map__60446__$1 = cljs.core.__destructure_map(map__60446);
var runtime = map__60446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___60583 = arguments.length;
var i__5770__auto___60584 = (0);
while(true){
if((i__5770__auto___60584 < len__5769__auto___60583)){
args__5775__auto__.push((arguments[i__5770__auto___60584]));

var G__60585 = (i__5770__auto___60584 + (1));
i__5770__auto___60584 = G__60585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__60458,ev,args){
var map__60460 = p__60458;
var map__60460__$1 = cljs.core.__destructure_map(map__60460);
var runtime = map__60460__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__60461 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60464 = null;
var count__60465 = (0);
var i__60466 = (0);
while(true){
if((i__60466 < count__60465)){
var ext = chunk__60464.cljs$core$IIndexed$_nth$arity$2(null,i__60466);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60591 = seq__60461;
var G__60592 = chunk__60464;
var G__60593 = count__60465;
var G__60594 = (i__60466 + (1));
seq__60461 = G__60591;
chunk__60464 = G__60592;
count__60465 = G__60593;
i__60466 = G__60594;
continue;
} else {
var G__60595 = seq__60461;
var G__60596 = chunk__60464;
var G__60597 = count__60465;
var G__60598 = (i__60466 + (1));
seq__60461 = G__60595;
chunk__60464 = G__60596;
count__60465 = G__60597;
i__60466 = G__60598;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60461);
if(temp__5804__auto__){
var seq__60461__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60461__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60461__$1);
var G__60600 = cljs.core.chunk_rest(seq__60461__$1);
var G__60601 = c__5568__auto__;
var G__60602 = cljs.core.count(c__5568__auto__);
var G__60603 = (0);
seq__60461 = G__60600;
chunk__60464 = G__60601;
count__60465 = G__60602;
i__60466 = G__60603;
continue;
} else {
var ext = cljs.core.first(seq__60461__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60604 = cljs.core.next(seq__60461__$1);
var G__60605 = null;
var G__60606 = (0);
var G__60607 = (0);
seq__60461 = G__60604;
chunk__60464 = G__60605;
count__60465 = G__60606;
i__60466 = G__60607;
continue;
} else {
var G__60608 = cljs.core.next(seq__60461__$1);
var G__60609 = null;
var G__60610 = (0);
var G__60611 = (0);
seq__60461 = G__60608;
chunk__60464 = G__60609;
count__60465 = G__60610;
i__60466 = G__60611;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq60450){
var G__60451 = cljs.core.first(seq60450);
var seq60450__$1 = cljs.core.next(seq60450);
var G__60452 = cljs.core.first(seq60450__$1);
var seq60450__$2 = cljs.core.next(seq60450__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60451,G__60452,seq60450__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__60474,p__60475){
var map__60476 = p__60474;
var map__60476__$1 = cljs.core.__destructure_map(map__60476);
var runtime = map__60476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60477 = p__60475;
var map__60477__$1 = cljs.core.__destructure_map(map__60477);
var msg = map__60477__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__60486 = cljs.core.deref(state_ref);
var map__60486__$1 = cljs.core.__destructure_map(map__60486);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60486__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__60491){
var map__60492 = p__60491;
var map__60492__$1 = cljs.core.__destructure_map(map__60492);
var runtime = map__60492__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60492__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__60497,msg){
var map__60498 = p__60497;
var map__60498__$1 = cljs.core.__destructure_map(map__60498);
var runtime = map__60498__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60498__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__60511,key,p__60512){
var map__60513 = p__60511;
var map__60513__$1 = cljs.core.__destructure_map(map__60513);
var state = map__60513__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60513__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__60514 = p__60512;
var map__60514__$1 = cljs.core.__destructure_map(map__60514);
var spec = map__60514__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60514__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__60515,key,spec){
var map__60516 = p__60515;
var map__60516__$1 = cljs.core.__destructure_map(map__60516);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60516__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__60517_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__60517_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__60518_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__60518_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__60519_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__60519_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__60520_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__60520_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__60521_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__60521_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60535,key){
var map__60536 = p__60535;
var map__60536__$1 = cljs.core.__destructure_map(map__60536);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__60544,msg){
var map__60546 = p__60544;
var map__60546__$1 = cljs.core.__destructure_map(map__60546);
var runtime = map__60546__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60546__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60552,p__60553){
var map__60554 = p__60552;
var map__60554__$1 = cljs.core.__destructure_map(map__60554);
var runtime = map__60554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60555 = p__60553;
var map__60555__$1 = cljs.core.__destructure_map(map__60555);
var msg = map__60555__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60555__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60561 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60563 = null;
var count__60564 = (0);
var i__60565 = (0);
while(true){
if((i__60565 < count__60564)){
var map__60572 = chunk__60563.cljs$core$IIndexed$_nth$arity$2(null,i__60565);
var map__60572__$1 = cljs.core.__destructure_map(map__60572);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60572__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60623 = seq__60561;
var G__60624 = chunk__60563;
var G__60625 = count__60564;
var G__60626 = (i__60565 + (1));
seq__60561 = G__60623;
chunk__60563 = G__60624;
count__60564 = G__60625;
i__60565 = G__60626;
continue;
} else {
var G__60627 = seq__60561;
var G__60628 = chunk__60563;
var G__60629 = count__60564;
var G__60630 = (i__60565 + (1));
seq__60561 = G__60627;
chunk__60563 = G__60628;
count__60564 = G__60629;
i__60565 = G__60630;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__60561);
if(temp__5804__auto__){
var seq__60561__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60561__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60561__$1);
var G__60632 = cljs.core.chunk_rest(seq__60561__$1);
var G__60633 = c__5568__auto__;
var G__60634 = cljs.core.count(c__5568__auto__);
var G__60636 = (0);
seq__60561 = G__60632;
chunk__60563 = G__60633;
count__60564 = G__60634;
i__60565 = G__60636;
continue;
} else {
var map__60577 = cljs.core.first(seq__60561__$1);
var map__60577__$1 = cljs.core.__destructure_map(map__60577);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60577__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60637 = cljs.core.next(seq__60561__$1);
var G__60638 = null;
var G__60639 = (0);
var G__60640 = (0);
seq__60561 = G__60637;
chunk__60563 = G__60638;
count__60564 = G__60639;
i__60565 = G__60640;
continue;
} else {
var G__60642 = cljs.core.next(seq__60561__$1);
var G__60643 = null;
var G__60644 = (0);
var G__60645 = (0);
seq__60561 = G__60642;
chunk__60563 = G__60643;
count__60564 = G__60644;
i__60565 = G__60645;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
