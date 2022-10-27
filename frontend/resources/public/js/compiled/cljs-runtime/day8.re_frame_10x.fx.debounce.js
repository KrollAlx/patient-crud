goog.provide('day8.re_frame_10x.fx.debounce');
day8.re_frame_10x.fx.debounce.now = (function day8$re_frame_10x$fx$debounce$now(){
return (new Date()).getTime();
});
day8.re_frame_10x.fx.debounce.registered_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded = (function day8$re_frame_10x$fx$debounce$dispatch_if_not_superceded(p__28908){
var map__28909 = p__28908;
var map__28909__$1 = cljs.core.__destructure_map(map__28909);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28909__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28909__$1,new cljs.core.Keyword(null,"event","event",301435442));
var time_received = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28909__$1,new cljs.core.Keyword(null,"time-received","time-received",1643766907));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time_received,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.fx.debounce.registered_keys),key))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(event);
} else {
return null;
}
});
day8.re_frame_10x.fx.debounce.dispatch_later = (function day8$re_frame_10x$fx$debounce$dispatch_later(p__28919){
var map__28920 = p__28919;
var map__28920__$1 = cljs.core.__destructure_map(map__28920);
var debounce = map__28920__$1;
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28920__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
return setTimeout((function (){
return day8.re_frame_10x.fx.debounce.dispatch_if_not_superceded(debounce);
}),delay);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.debounce","dispatch","day8.re-frame-10x.fx.debounce/dispatch",-293096343),(function day8$re_frame_10x$fx$debounce$dispatch_debounce(p__28937){
var map__28938 = p__28937;
var map__28938__$1 = cljs.core.__destructure_map(map__28938);
var debounce = map__28938__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28938__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28938__$1,new cljs.core.Keyword(null,"event","event",301435442));
var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28938__$1,new cljs.core.Keyword(null,"delay","delay",-574225219));
if((!((((key instanceof cljs.core.Keyword)) && (((cljs.core.vector_QMARK_(event)) && (cljs.core.integer_QMARK_(delay)))))))){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame-10x ::debounce/dispatch invalid argument"], 0));
} else {
}

var ts = day8.re_frame_10x.fx.debounce.now();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.fx.debounce.registered_keys,cljs.core.assoc,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(debounce),ts);

return day8.re_frame_10x.fx.debounce.dispatch_later(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(debounce,new cljs.core.Keyword(null,"time-received","time-received",1643766907),ts));
}));

//# sourceMappingURL=day8.re_frame_10x.fx.debounce.js.map
