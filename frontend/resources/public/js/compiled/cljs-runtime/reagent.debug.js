goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__25089__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25090__i = 0, G__25090__a = new Array(arguments.length -  0);
while (G__25090__i < G__25090__a.length) {G__25090__a[G__25090__i] = arguments[G__25090__i + 0]; ++G__25090__i;}
  args = new cljs.core.IndexedSeq(G__25090__a,0,null);
} 
return G__25089__delegate.call(this,args);};
G__25089.cljs$lang$maxFixedArity = 0;
G__25089.cljs$lang$applyTo = (function (arglist__25091){
var args = cljs.core.seq(arglist__25091);
return G__25089__delegate(args);
});
G__25089.cljs$core$IFn$_invoke$arity$variadic = G__25089__delegate;
return G__25089;
})()
);

(o.error = (function() { 
var G__25093__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25094__i = 0, G__25094__a = new Array(arguments.length -  0);
while (G__25094__i < G__25094__a.length) {G__25094__a[G__25094__i] = arguments[G__25094__i + 0]; ++G__25094__i;}
  args = new cljs.core.IndexedSeq(G__25094__a,0,null);
} 
return G__25093__delegate.call(this,args);};
G__25093.cljs$lang$maxFixedArity = 0;
G__25093.cljs$lang$applyTo = (function (arglist__25095){
var args = cljs.core.seq(arglist__25095);
return G__25093__delegate(args);
});
G__25093.cljs$core$IFn$_invoke$arity$variadic = G__25093__delegate;
return G__25093;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
