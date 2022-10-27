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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34405,res){
var map__34406 = p__34405;
var map__34406__$1 = cljs.core.__destructure_map(map__34406);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34406__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34406__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34407 = res;
var G__34407__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34407,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34407);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34407__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34407__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34410 = arguments.length;
switch (G__34410) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34413,msg,handlers,timeout_after_ms){
var map__34414 = p__34413;
var map__34414__$1 = cljs.core.__destructure_map(map__34414);
var runtime = map__34414__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34414__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34763 = arguments.length;
var i__5770__auto___34764 = (0);
while(true){
if((i__5770__auto___34764 < len__5769__auto___34763)){
args__5775__auto__.push((arguments[i__5770__auto___34764]));

var G__34765 = (i__5770__auto___34764 + (1));
i__5770__auto___34764 = G__34765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34425,ev,args){
var map__34426 = p__34425;
var map__34426__$1 = cljs.core.__destructure_map(map__34426);
var runtime = map__34426__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34426__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34427 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34430 = null;
var count__34431 = (0);
var i__34432 = (0);
while(true){
if((i__34432 < count__34431)){
var ext = chunk__34430.cljs$core$IIndexed$_nth$arity$2(null,i__34432);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34768 = seq__34427;
var G__34769 = chunk__34430;
var G__34770 = count__34431;
var G__34771 = (i__34432 + (1));
seq__34427 = G__34768;
chunk__34430 = G__34769;
count__34431 = G__34770;
i__34432 = G__34771;
continue;
} else {
var G__34772 = seq__34427;
var G__34773 = chunk__34430;
var G__34774 = count__34431;
var G__34775 = (i__34432 + (1));
seq__34427 = G__34772;
chunk__34430 = G__34773;
count__34431 = G__34774;
i__34432 = G__34775;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34427);
if(temp__5804__auto__){
var seq__34427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34427__$1);
var G__34779 = cljs.core.chunk_rest(seq__34427__$1);
var G__34780 = c__5568__auto__;
var G__34781 = cljs.core.count(c__5568__auto__);
var G__34782 = (0);
seq__34427 = G__34779;
chunk__34430 = G__34780;
count__34431 = G__34781;
i__34432 = G__34782;
continue;
} else {
var ext = cljs.core.first(seq__34427__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34784 = cljs.core.next(seq__34427__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__34427 = G__34784;
chunk__34430 = G__34785;
count__34431 = G__34786;
i__34432 = G__34787;
continue;
} else {
var G__34788 = cljs.core.next(seq__34427__$1);
var G__34789 = null;
var G__34790 = (0);
var G__34791 = (0);
seq__34427 = G__34788;
chunk__34430 = G__34789;
count__34431 = G__34790;
i__34432 = G__34791;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34416){
var G__34417 = cljs.core.first(seq34416);
var seq34416__$1 = cljs.core.next(seq34416);
var G__34418 = cljs.core.first(seq34416__$1);
var seq34416__$2 = cljs.core.next(seq34416__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34417,G__34418,seq34416__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34437,p__34438){
var map__34439 = p__34437;
var map__34439__$1 = cljs.core.__destructure_map(map__34439);
var runtime = map__34439__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34439__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34440 = p__34438;
var map__34440__$1 = cljs.core.__destructure_map(map__34440);
var msg = map__34440__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34440__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34441 = cljs.core.deref(state_ref);
var map__34441__$1 = cljs.core.__destructure_map(map__34441);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34441__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34449){
var map__34450 = p__34449;
var map__34450__$1 = cljs.core.__destructure_map(map__34450);
var runtime = map__34450__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34450__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34457,msg){
var map__34458 = p__34457;
var map__34458__$1 = cljs.core.__destructure_map(map__34458);
var runtime = map__34458__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34458__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34460,key,p__34461){
var map__34462 = p__34460;
var map__34462__$1 = cljs.core.__destructure_map(map__34462);
var state = map__34462__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34462__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34463 = p__34461;
var map__34463__$1 = cljs.core.__destructure_map(map__34463);
var spec = map__34463__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34463__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34465,key,spec){
var map__34466 = p__34465;
var map__34466__$1 = cljs.core.__destructure_map(map__34466);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34466__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34467_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34467_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34468_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34468_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34469_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34469_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34470_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34470_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34471_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34471_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34473,key){
var map__34474 = p__34473;
var map__34474__$1 = cljs.core.__destructure_map(map__34474);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34475,msg){
var map__34476 = p__34475;
var map__34476__$1 = cljs.core.__destructure_map(map__34476);
var runtime = map__34476__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34478,p__34479){
var map__34480 = p__34478;
var map__34480__$1 = cljs.core.__destructure_map(map__34480);
var runtime = map__34480__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34481 = p__34479;
var map__34481__$1 = cljs.core.__destructure_map(map__34481);
var msg = map__34481__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34481__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__34510 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34564 = null;
var count__34565 = (0);
var i__34566 = (0);
while(true){
if((i__34566 < count__34565)){
var map__34749 = chunk__34564.cljs$core$IIndexed$_nth$arity$2(null,i__34566);
var map__34749__$1 = cljs.core.__destructure_map(map__34749);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34749__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34837 = seq__34510;
var G__34838 = chunk__34564;
var G__34839 = count__34565;
var G__34840 = (i__34566 + (1));
seq__34510 = G__34837;
chunk__34564 = G__34838;
count__34565 = G__34839;
i__34566 = G__34840;
continue;
} else {
var G__34841 = seq__34510;
var G__34842 = chunk__34564;
var G__34843 = count__34565;
var G__34844 = (i__34566 + (1));
seq__34510 = G__34841;
chunk__34564 = G__34842;
count__34565 = G__34843;
i__34566 = G__34844;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34510);
if(temp__5804__auto__){
var seq__34510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34510__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34510__$1);
var G__34846 = cljs.core.chunk_rest(seq__34510__$1);
var G__34847 = c__5568__auto__;
var G__34848 = cljs.core.count(c__5568__auto__);
var G__34849 = (0);
seq__34510 = G__34846;
chunk__34564 = G__34847;
count__34565 = G__34848;
i__34566 = G__34849;
continue;
} else {
var map__34755 = cljs.core.first(seq__34510__$1);
var map__34755__$1 = cljs.core.__destructure_map(map__34755);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34850 = cljs.core.next(seq__34510__$1);
var G__34851 = null;
var G__34852 = (0);
var G__34853 = (0);
seq__34510 = G__34850;
chunk__34564 = G__34851;
count__34565 = G__34852;
i__34566 = G__34853;
continue;
} else {
var G__34855 = cljs.core.next(seq__34510__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34510 = G__34855;
chunk__34564 = G__34856;
count__34565 = G__34857;
i__34566 = G__34858;
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
