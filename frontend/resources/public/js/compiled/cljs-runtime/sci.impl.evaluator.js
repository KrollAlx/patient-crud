goog.provide('sci.impl.evaluator');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__45982 = xs;
args__$2 = G__45982;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__45983 = xs;
args__$2 = G__45983;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__44922 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__45984 = ctx__$1;
var G__45985 = bindings__$2;
var G__45986 = rest_let_bindings;
ctx__$1 = G__45984;
bindings__$1 = G__45985;
let_bindings__$1 = G__45986;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44922,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44922,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__45987 = nexprs;
exprs__$1 = G__45987;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5802__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5802__auto__)){
var mm = temp__5802__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978));
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5802__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
if(cljs.core.truth_((function (){var G__44943 = new cljs.core.Keyword(null,"eval","eval",-1103567905);
var G__44944 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__44943,G__44944) : sci.impl.utils.kw_identical_QMARK_.call(null,G__44943,G__44944));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44938_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__44938_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__44938_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44941_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__44941_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__44941_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__5045__auto__ = m;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__44965 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44965,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__44965;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__45011 = arguments.length;
switch (G__45011) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__45027 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45027,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45027,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5802__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__45030 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45030,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45030,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__45078 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__45079 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__45079);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__45078);
}}catch (e45035){if((e45035 instanceof Error)){
var e = e45035;
var temp__5802__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5045__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),clazz) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),clazz));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__5078__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__5079__auto__ = e;
return (x__5079__auto__ instanceof c__5078__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){var G__45072 = ctx;
var G__45073 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c),e);
var G__45074 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45072,G__45073,G__45074) : sci.impl.evaluator.eval.call(null,G__45072,G__45073,G__45074));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__45075 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45075,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e45035;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45092_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__45092_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__45092_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.map_QMARK_(instance_expr_STAR_);
if(and__5043__auto__){
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str));
} else {
var instance_class = (function (){var or__5045__auto__ = tag_class;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__5045__auto__ = allowed;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str));
}
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5804__auto__)){
var f = temp__5804__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45096_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__45096_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__45096_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__45115 = arguments.length;
switch (G__45115) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
var res = cljs.core.second((function (){var fexpr__45122 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__45122.cljs$core$IFn$_invoke$arity$3 ? fexpr__45122.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__45122.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.EvalFn)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45990 = arguments.length;
var i__5770__auto___45991 = (0);
while(true){
if((i__5770__auto___45991 < len__5769__auto___45990)){
args__5775__auto__.push((arguments[i__5770__auto___45991]));

var G__45992 = (i__5770__auto___45991 + (1));
i__5770__auto___45991 = G__45992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45123_SHARP_){
if(((cljs.core.seq_QMARK_(p1__45123_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__45123_SHARP_))))){
return cljs.core.second(p1__45123_SHARP_);
} else {
return p1__45123_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__45127 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45127,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5802__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5802__auto__)){
var clazz = temp__5802__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5802__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5802__auto____$1)){
var rec = temp__5802__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq45124){
var G__45125 = cljs.core.first(seq45124);
var seq45124__$1 = cljs.core.next(seq45124);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45125,seq45124__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__45130 = ctx;
var G__45131 = bindings;
var G__45132 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45130,G__45131,G__45132) : sci.impl.evaluator.eval.call(null,G__45130,G__45131,G__45132));
})();
var temp__5802__auto__ = cljs.core.next(exprs__$2);
if(temp__5802__auto__){
var exprs__$3 = temp__5802__auto__;
var G__45993 = exprs__$3;
exprs__$2 = G__45993;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__45333 = cljs.core.count(args);
switch (G__45333) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg45139 = (function (){var G__45335 = ctx;
var G__45336 = bindings;
var G__45337 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45335,G__45336,G__45337) : sci.impl.evaluator.eval.call(null,G__45335,G__45336,G__45337));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg45139) : f.call(null,arg45139));

break;
case (2):
var arg45140 = (function (){var G__45338 = ctx;
var G__45339 = bindings;
var G__45340 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45338,G__45339,G__45340) : sci.impl.evaluator.eval.call(null,G__45338,G__45339,G__45340));
})();
var args__$1 = cljs.core.rest(args);
var arg45141 = (function (){var G__45341 = ctx;
var G__45342 = bindings;
var G__45343 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45341,G__45342,G__45343) : sci.impl.evaluator.eval.call(null,G__45341,G__45342,G__45343));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg45140,arg45141) : f.call(null,arg45140,arg45141));

break;
case (3):
var arg45142 = (function (){var G__45346 = ctx;
var G__45347 = bindings;
var G__45348 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45346,G__45347,G__45348) : sci.impl.evaluator.eval.call(null,G__45346,G__45347,G__45348));
})();
var args__$1 = cljs.core.rest(args);
var arg45143 = (function (){var G__45350 = ctx;
var G__45351 = bindings;
var G__45352 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45350,G__45351,G__45352) : sci.impl.evaluator.eval.call(null,G__45350,G__45351,G__45352));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45144 = (function (){var G__45353 = ctx;
var G__45354 = bindings;
var G__45355 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45353,G__45354,G__45355) : sci.impl.evaluator.eval.call(null,G__45353,G__45354,G__45355));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg45142,arg45143,arg45144) : f.call(null,arg45142,arg45143,arg45144));

break;
case (4):
var arg45145 = (function (){var G__45358 = ctx;
var G__45359 = bindings;
var G__45360 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45358,G__45359,G__45360) : sci.impl.evaluator.eval.call(null,G__45358,G__45359,G__45360));
})();
var args__$1 = cljs.core.rest(args);
var arg45146 = (function (){var G__45362 = ctx;
var G__45363 = bindings;
var G__45364 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45362,G__45363,G__45364) : sci.impl.evaluator.eval.call(null,G__45362,G__45363,G__45364));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45147 = (function (){var G__45365 = ctx;
var G__45366 = bindings;
var G__45367 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45365,G__45366,G__45367) : sci.impl.evaluator.eval.call(null,G__45365,G__45366,G__45367));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45148 = (function (){var G__45368 = ctx;
var G__45369 = bindings;
var G__45370 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45368,G__45369,G__45370) : sci.impl.evaluator.eval.call(null,G__45368,G__45369,G__45370));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg45145,arg45146,arg45147,arg45148) : f.call(null,arg45145,arg45146,arg45147,arg45148));

break;
case (5):
var arg45149 = (function (){var G__45371 = ctx;
var G__45372 = bindings;
var G__45373 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45371,G__45372,G__45373) : sci.impl.evaluator.eval.call(null,G__45371,G__45372,G__45373));
})();
var args__$1 = cljs.core.rest(args);
var arg45150 = (function (){var G__45376 = ctx;
var G__45377 = bindings;
var G__45378 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45376,G__45377,G__45378) : sci.impl.evaluator.eval.call(null,G__45376,G__45377,G__45378));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45151 = (function (){var G__45380 = ctx;
var G__45381 = bindings;
var G__45382 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45380,G__45381,G__45382) : sci.impl.evaluator.eval.call(null,G__45380,G__45381,G__45382));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45152 = (function (){var G__45383 = ctx;
var G__45384 = bindings;
var G__45385 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45383,G__45384,G__45385) : sci.impl.evaluator.eval.call(null,G__45383,G__45384,G__45385));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45153 = (function (){var G__45386 = ctx;
var G__45387 = bindings;
var G__45388 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45386,G__45387,G__45388) : sci.impl.evaluator.eval.call(null,G__45386,G__45387,G__45388));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg45149,arg45150,arg45151,arg45152,arg45153) : f.call(null,arg45149,arg45150,arg45151,arg45152,arg45153));

break;
case (6):
var arg45154 = (function (){var G__45389 = ctx;
var G__45390 = bindings;
var G__45391 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45389,G__45390,G__45391) : sci.impl.evaluator.eval.call(null,G__45389,G__45390,G__45391));
})();
var args__$1 = cljs.core.rest(args);
var arg45155 = (function (){var G__45392 = ctx;
var G__45393 = bindings;
var G__45394 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45392,G__45393,G__45394) : sci.impl.evaluator.eval.call(null,G__45392,G__45393,G__45394));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45156 = (function (){var G__45395 = ctx;
var G__45396 = bindings;
var G__45397 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45395,G__45396,G__45397) : sci.impl.evaluator.eval.call(null,G__45395,G__45396,G__45397));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45157 = (function (){var G__45399 = ctx;
var G__45400 = bindings;
var G__45401 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45399,G__45400,G__45401) : sci.impl.evaluator.eval.call(null,G__45399,G__45400,G__45401));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45158 = (function (){var G__45404 = ctx;
var G__45405 = bindings;
var G__45406 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45404,G__45405,G__45406) : sci.impl.evaluator.eval.call(null,G__45404,G__45405,G__45406));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45159 = (function (){var G__45407 = ctx;
var G__45408 = bindings;
var G__45409 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45407,G__45408,G__45409) : sci.impl.evaluator.eval.call(null,G__45407,G__45408,G__45409));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg45154,arg45155,arg45156,arg45157,arg45158,arg45159) : f.call(null,arg45154,arg45155,arg45156,arg45157,arg45158,arg45159));

break;
case (7):
var arg45160 = (function (){var G__45410 = ctx;
var G__45411 = bindings;
var G__45412 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45410,G__45411,G__45412) : sci.impl.evaluator.eval.call(null,G__45410,G__45411,G__45412));
})();
var args__$1 = cljs.core.rest(args);
var arg45161 = (function (){var G__45413 = ctx;
var G__45414 = bindings;
var G__45415 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45413,G__45414,G__45415) : sci.impl.evaluator.eval.call(null,G__45413,G__45414,G__45415));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45162 = (function (){var G__45420 = ctx;
var G__45421 = bindings;
var G__45422 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45420,G__45421,G__45422) : sci.impl.evaluator.eval.call(null,G__45420,G__45421,G__45422));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45163 = (function (){var G__45423 = ctx;
var G__45424 = bindings;
var G__45425 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45423,G__45424,G__45425) : sci.impl.evaluator.eval.call(null,G__45423,G__45424,G__45425));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45164 = (function (){var G__45426 = ctx;
var G__45427 = bindings;
var G__45428 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45426,G__45427,G__45428) : sci.impl.evaluator.eval.call(null,G__45426,G__45427,G__45428));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45165 = (function (){var G__45429 = ctx;
var G__45430 = bindings;
var G__45431 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45429,G__45430,G__45431) : sci.impl.evaluator.eval.call(null,G__45429,G__45430,G__45431));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45166 = (function (){var G__45435 = ctx;
var G__45436 = bindings;
var G__45437 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45435,G__45436,G__45437) : sci.impl.evaluator.eval.call(null,G__45435,G__45436,G__45437));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg45160,arg45161,arg45162,arg45163,arg45164,arg45165,arg45166) : f.call(null,arg45160,arg45161,arg45162,arg45163,arg45164,arg45165,arg45166));

break;
case (8):
var arg45167 = (function (){var G__45441 = ctx;
var G__45442 = bindings;
var G__45443 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45441,G__45442,G__45443) : sci.impl.evaluator.eval.call(null,G__45441,G__45442,G__45443));
})();
var args__$1 = cljs.core.rest(args);
var arg45168 = (function (){var G__45444 = ctx;
var G__45445 = bindings;
var G__45446 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45444,G__45445,G__45446) : sci.impl.evaluator.eval.call(null,G__45444,G__45445,G__45446));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45169 = (function (){var G__45452 = ctx;
var G__45453 = bindings;
var G__45454 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45452,G__45453,G__45454) : sci.impl.evaluator.eval.call(null,G__45452,G__45453,G__45454));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45170 = (function (){var G__45455 = ctx;
var G__45456 = bindings;
var G__45457 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45455,G__45456,G__45457) : sci.impl.evaluator.eval.call(null,G__45455,G__45456,G__45457));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45171 = (function (){var G__45458 = ctx;
var G__45459 = bindings;
var G__45460 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45458,G__45459,G__45460) : sci.impl.evaluator.eval.call(null,G__45458,G__45459,G__45460));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45172 = (function (){var G__45461 = ctx;
var G__45462 = bindings;
var G__45463 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45461,G__45462,G__45463) : sci.impl.evaluator.eval.call(null,G__45461,G__45462,G__45463));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45173 = (function (){var G__45464 = ctx;
var G__45465 = bindings;
var G__45466 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45464,G__45465,G__45466) : sci.impl.evaluator.eval.call(null,G__45464,G__45465,G__45466));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45174 = (function (){var G__45467 = ctx;
var G__45468 = bindings;
var G__45469 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45467,G__45468,G__45469) : sci.impl.evaluator.eval.call(null,G__45467,G__45468,G__45469));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg45167,arg45168,arg45169,arg45170,arg45171,arg45172,arg45173,arg45174) : f.call(null,arg45167,arg45168,arg45169,arg45170,arg45171,arg45172,arg45173,arg45174));

break;
case (9):
var arg45175 = (function (){var G__45470 = ctx;
var G__45471 = bindings;
var G__45472 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45470,G__45471,G__45472) : sci.impl.evaluator.eval.call(null,G__45470,G__45471,G__45472));
})();
var args__$1 = cljs.core.rest(args);
var arg45176 = (function (){var G__45473 = ctx;
var G__45474 = bindings;
var G__45475 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45473,G__45474,G__45475) : sci.impl.evaluator.eval.call(null,G__45473,G__45474,G__45475));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45177 = (function (){var G__45476 = ctx;
var G__45477 = bindings;
var G__45478 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45476,G__45477,G__45478) : sci.impl.evaluator.eval.call(null,G__45476,G__45477,G__45478));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45178 = (function (){var G__45479 = ctx;
var G__45480 = bindings;
var G__45481 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45479,G__45480,G__45481) : sci.impl.evaluator.eval.call(null,G__45479,G__45480,G__45481));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45179 = (function (){var G__45482 = ctx;
var G__45483 = bindings;
var G__45484 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45482,G__45483,G__45484) : sci.impl.evaluator.eval.call(null,G__45482,G__45483,G__45484));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45180 = (function (){var G__45485 = ctx;
var G__45486 = bindings;
var G__45487 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45485,G__45486,G__45487) : sci.impl.evaluator.eval.call(null,G__45485,G__45486,G__45487));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45181 = (function (){var G__45488 = ctx;
var G__45489 = bindings;
var G__45490 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45488,G__45489,G__45490) : sci.impl.evaluator.eval.call(null,G__45488,G__45489,G__45490));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45182 = (function (){var G__45491 = ctx;
var G__45492 = bindings;
var G__45493 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45491,G__45492,G__45493) : sci.impl.evaluator.eval.call(null,G__45491,G__45492,G__45493));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45183 = (function (){var G__45494 = ctx;
var G__45495 = bindings;
var G__45496 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45494,G__45495,G__45496) : sci.impl.evaluator.eval.call(null,G__45494,G__45495,G__45496));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg45175,arg45176,arg45177,arg45178,arg45179,arg45180,arg45181,arg45182,arg45183) : f.call(null,arg45175,arg45176,arg45177,arg45178,arg45179,arg45180,arg45181,arg45182,arg45183));

break;
case (10):
var arg45184 = (function (){var G__45497 = ctx;
var G__45498 = bindings;
var G__45499 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45497,G__45498,G__45499) : sci.impl.evaluator.eval.call(null,G__45497,G__45498,G__45499));
})();
var args__$1 = cljs.core.rest(args);
var arg45185 = (function (){var G__45500 = ctx;
var G__45501 = bindings;
var G__45502 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45500,G__45501,G__45502) : sci.impl.evaluator.eval.call(null,G__45500,G__45501,G__45502));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45186 = (function (){var G__45503 = ctx;
var G__45504 = bindings;
var G__45505 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45503,G__45504,G__45505) : sci.impl.evaluator.eval.call(null,G__45503,G__45504,G__45505));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45187 = (function (){var G__45506 = ctx;
var G__45507 = bindings;
var G__45508 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45506,G__45507,G__45508) : sci.impl.evaluator.eval.call(null,G__45506,G__45507,G__45508));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45188 = (function (){var G__45509 = ctx;
var G__45510 = bindings;
var G__45511 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45509,G__45510,G__45511) : sci.impl.evaluator.eval.call(null,G__45509,G__45510,G__45511));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45189 = (function (){var G__45512 = ctx;
var G__45513 = bindings;
var G__45514 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45512,G__45513,G__45514) : sci.impl.evaluator.eval.call(null,G__45512,G__45513,G__45514));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45190 = (function (){var G__45515 = ctx;
var G__45516 = bindings;
var G__45517 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45515,G__45516,G__45517) : sci.impl.evaluator.eval.call(null,G__45515,G__45516,G__45517));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45191 = (function (){var G__45518 = ctx;
var G__45519 = bindings;
var G__45520 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45518,G__45519,G__45520) : sci.impl.evaluator.eval.call(null,G__45518,G__45519,G__45520));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45192 = (function (){var G__45521 = ctx;
var G__45522 = bindings;
var G__45523 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45521,G__45522,G__45523) : sci.impl.evaluator.eval.call(null,G__45521,G__45522,G__45523));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45193 = (function (){var G__45524 = ctx;
var G__45525 = bindings;
var G__45526 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45524,G__45525,G__45526) : sci.impl.evaluator.eval.call(null,G__45524,G__45525,G__45526));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg45184,arg45185,arg45186,arg45187,arg45188,arg45189,arg45190,arg45191,arg45192,arg45193) : f.call(null,arg45184,arg45185,arg45186,arg45187,arg45188,arg45189,arg45190,arg45191,arg45192,arg45193));

break;
case (11):
var arg45194 = (function (){var G__45527 = ctx;
var G__45528 = bindings;
var G__45529 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45527,G__45528,G__45529) : sci.impl.evaluator.eval.call(null,G__45527,G__45528,G__45529));
})();
var args__$1 = cljs.core.rest(args);
var arg45195 = (function (){var G__45530 = ctx;
var G__45531 = bindings;
var G__45532 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45530,G__45531,G__45532) : sci.impl.evaluator.eval.call(null,G__45530,G__45531,G__45532));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45196 = (function (){var G__45533 = ctx;
var G__45534 = bindings;
var G__45535 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45533,G__45534,G__45535) : sci.impl.evaluator.eval.call(null,G__45533,G__45534,G__45535));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45197 = (function (){var G__45536 = ctx;
var G__45537 = bindings;
var G__45538 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45536,G__45537,G__45538) : sci.impl.evaluator.eval.call(null,G__45536,G__45537,G__45538));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45198 = (function (){var G__45539 = ctx;
var G__45540 = bindings;
var G__45541 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45539,G__45540,G__45541) : sci.impl.evaluator.eval.call(null,G__45539,G__45540,G__45541));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45199 = (function (){var G__45542 = ctx;
var G__45543 = bindings;
var G__45544 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45542,G__45543,G__45544) : sci.impl.evaluator.eval.call(null,G__45542,G__45543,G__45544));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45200 = (function (){var G__45545 = ctx;
var G__45546 = bindings;
var G__45547 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45545,G__45546,G__45547) : sci.impl.evaluator.eval.call(null,G__45545,G__45546,G__45547));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45201 = (function (){var G__45548 = ctx;
var G__45549 = bindings;
var G__45550 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45548,G__45549,G__45550) : sci.impl.evaluator.eval.call(null,G__45548,G__45549,G__45550));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45202 = (function (){var G__45551 = ctx;
var G__45552 = bindings;
var G__45553 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45551,G__45552,G__45553) : sci.impl.evaluator.eval.call(null,G__45551,G__45552,G__45553));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45203 = (function (){var G__45554 = ctx;
var G__45555 = bindings;
var G__45556 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45554,G__45555,G__45556) : sci.impl.evaluator.eval.call(null,G__45554,G__45555,G__45556));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45204 = (function (){var G__45557 = ctx;
var G__45558 = bindings;
var G__45559 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45557,G__45558,G__45559) : sci.impl.evaluator.eval.call(null,G__45557,G__45558,G__45559));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg45194,arg45195,arg45196,arg45197,arg45198,arg45199,arg45200,arg45201,arg45202,arg45203,arg45204) : f.call(null,arg45194,arg45195,arg45196,arg45197,arg45198,arg45199,arg45200,arg45201,arg45202,arg45203,arg45204));

break;
case (12):
var arg45205 = (function (){var G__45560 = ctx;
var G__45561 = bindings;
var G__45562 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45560,G__45561,G__45562) : sci.impl.evaluator.eval.call(null,G__45560,G__45561,G__45562));
})();
var args__$1 = cljs.core.rest(args);
var arg45206 = (function (){var G__45564 = ctx;
var G__45565 = bindings;
var G__45566 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45564,G__45565,G__45566) : sci.impl.evaluator.eval.call(null,G__45564,G__45565,G__45566));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45207 = (function (){var G__45570 = ctx;
var G__45571 = bindings;
var G__45572 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45570,G__45571,G__45572) : sci.impl.evaluator.eval.call(null,G__45570,G__45571,G__45572));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45208 = (function (){var G__45573 = ctx;
var G__45574 = bindings;
var G__45575 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45573,G__45574,G__45575) : sci.impl.evaluator.eval.call(null,G__45573,G__45574,G__45575));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45209 = (function (){var G__45576 = ctx;
var G__45577 = bindings;
var G__45578 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45576,G__45577,G__45578) : sci.impl.evaluator.eval.call(null,G__45576,G__45577,G__45578));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45210 = (function (){var G__45579 = ctx;
var G__45580 = bindings;
var G__45581 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45579,G__45580,G__45581) : sci.impl.evaluator.eval.call(null,G__45579,G__45580,G__45581));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45211 = (function (){var G__45582 = ctx;
var G__45583 = bindings;
var G__45584 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45582,G__45583,G__45584) : sci.impl.evaluator.eval.call(null,G__45582,G__45583,G__45584));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45212 = (function (){var G__45585 = ctx;
var G__45586 = bindings;
var G__45587 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45585,G__45586,G__45587) : sci.impl.evaluator.eval.call(null,G__45585,G__45586,G__45587));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45213 = (function (){var G__45588 = ctx;
var G__45589 = bindings;
var G__45590 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45588,G__45589,G__45590) : sci.impl.evaluator.eval.call(null,G__45588,G__45589,G__45590));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45214 = (function (){var G__45591 = ctx;
var G__45592 = bindings;
var G__45593 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45591,G__45592,G__45593) : sci.impl.evaluator.eval.call(null,G__45591,G__45592,G__45593));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45215 = (function (){var G__45594 = ctx;
var G__45595 = bindings;
var G__45596 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45594,G__45595,G__45596) : sci.impl.evaluator.eval.call(null,G__45594,G__45595,G__45596));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45216 = (function (){var G__45597 = ctx;
var G__45598 = bindings;
var G__45599 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45597,G__45598,G__45599) : sci.impl.evaluator.eval.call(null,G__45597,G__45598,G__45599));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg45205,arg45206,arg45207,arg45208,arg45209,arg45210,arg45211,arg45212,arg45213,arg45214,arg45215,arg45216) : f.call(null,arg45205,arg45206,arg45207,arg45208,arg45209,arg45210,arg45211,arg45212,arg45213,arg45214,arg45215,arg45216));

break;
case (13):
var arg45217 = (function (){var G__45600 = ctx;
var G__45601 = bindings;
var G__45602 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45600,G__45601,G__45602) : sci.impl.evaluator.eval.call(null,G__45600,G__45601,G__45602));
})();
var args__$1 = cljs.core.rest(args);
var arg45218 = (function (){var G__45603 = ctx;
var G__45604 = bindings;
var G__45605 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45603,G__45604,G__45605) : sci.impl.evaluator.eval.call(null,G__45603,G__45604,G__45605));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45219 = (function (){var G__45606 = ctx;
var G__45607 = bindings;
var G__45608 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45606,G__45607,G__45608) : sci.impl.evaluator.eval.call(null,G__45606,G__45607,G__45608));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45220 = (function (){var G__45609 = ctx;
var G__45610 = bindings;
var G__45611 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45609,G__45610,G__45611) : sci.impl.evaluator.eval.call(null,G__45609,G__45610,G__45611));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45221 = (function (){var G__45612 = ctx;
var G__45613 = bindings;
var G__45614 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45612,G__45613,G__45614) : sci.impl.evaluator.eval.call(null,G__45612,G__45613,G__45614));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45222 = (function (){var G__45615 = ctx;
var G__45616 = bindings;
var G__45617 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45615,G__45616,G__45617) : sci.impl.evaluator.eval.call(null,G__45615,G__45616,G__45617));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45223 = (function (){var G__45618 = ctx;
var G__45619 = bindings;
var G__45620 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45618,G__45619,G__45620) : sci.impl.evaluator.eval.call(null,G__45618,G__45619,G__45620));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45224 = (function (){var G__45621 = ctx;
var G__45622 = bindings;
var G__45623 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45621,G__45622,G__45623) : sci.impl.evaluator.eval.call(null,G__45621,G__45622,G__45623));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45225 = (function (){var G__45624 = ctx;
var G__45625 = bindings;
var G__45626 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45624,G__45625,G__45626) : sci.impl.evaluator.eval.call(null,G__45624,G__45625,G__45626));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45226 = (function (){var G__45627 = ctx;
var G__45628 = bindings;
var G__45629 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45627,G__45628,G__45629) : sci.impl.evaluator.eval.call(null,G__45627,G__45628,G__45629));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45227 = (function (){var G__45630 = ctx;
var G__45631 = bindings;
var G__45632 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45630,G__45631,G__45632) : sci.impl.evaluator.eval.call(null,G__45630,G__45631,G__45632));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45228 = (function (){var G__45634 = ctx;
var G__45635 = bindings;
var G__45636 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45634,G__45635,G__45636) : sci.impl.evaluator.eval.call(null,G__45634,G__45635,G__45636));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45229 = (function (){var G__45637 = ctx;
var G__45638 = bindings;
var G__45639 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45637,G__45638,G__45639) : sci.impl.evaluator.eval.call(null,G__45637,G__45638,G__45639));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg45217,arg45218,arg45219,arg45220,arg45221,arg45222,arg45223,arg45224,arg45225,arg45226,arg45227,arg45228,arg45229) : f.call(null,arg45217,arg45218,arg45219,arg45220,arg45221,arg45222,arg45223,arg45224,arg45225,arg45226,arg45227,arg45228,arg45229));

break;
case (14):
var arg45230 = (function (){var G__45640 = ctx;
var G__45641 = bindings;
var G__45642 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45640,G__45641,G__45642) : sci.impl.evaluator.eval.call(null,G__45640,G__45641,G__45642));
})();
var args__$1 = cljs.core.rest(args);
var arg45231 = (function (){var G__45643 = ctx;
var G__45644 = bindings;
var G__45645 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45643,G__45644,G__45645) : sci.impl.evaluator.eval.call(null,G__45643,G__45644,G__45645));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45232 = (function (){var G__45646 = ctx;
var G__45647 = bindings;
var G__45648 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45646,G__45647,G__45648) : sci.impl.evaluator.eval.call(null,G__45646,G__45647,G__45648));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45233 = (function (){var G__45649 = ctx;
var G__45650 = bindings;
var G__45651 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45649,G__45650,G__45651) : sci.impl.evaluator.eval.call(null,G__45649,G__45650,G__45651));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45234 = (function (){var G__45652 = ctx;
var G__45653 = bindings;
var G__45654 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45652,G__45653,G__45654) : sci.impl.evaluator.eval.call(null,G__45652,G__45653,G__45654));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45235 = (function (){var G__45655 = ctx;
var G__45656 = bindings;
var G__45657 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45655,G__45656,G__45657) : sci.impl.evaluator.eval.call(null,G__45655,G__45656,G__45657));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45236 = (function (){var G__45658 = ctx;
var G__45659 = bindings;
var G__45660 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45658,G__45659,G__45660) : sci.impl.evaluator.eval.call(null,G__45658,G__45659,G__45660));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45237 = (function (){var G__45661 = ctx;
var G__45662 = bindings;
var G__45663 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45661,G__45662,G__45663) : sci.impl.evaluator.eval.call(null,G__45661,G__45662,G__45663));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45238 = (function (){var G__45664 = ctx;
var G__45665 = bindings;
var G__45666 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45664,G__45665,G__45666) : sci.impl.evaluator.eval.call(null,G__45664,G__45665,G__45666));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45239 = (function (){var G__45668 = ctx;
var G__45669 = bindings;
var G__45670 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45668,G__45669,G__45670) : sci.impl.evaluator.eval.call(null,G__45668,G__45669,G__45670));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45240 = (function (){var G__45673 = ctx;
var G__45674 = bindings;
var G__45675 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45673,G__45674,G__45675) : sci.impl.evaluator.eval.call(null,G__45673,G__45674,G__45675));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45241 = (function (){var G__45676 = ctx;
var G__45677 = bindings;
var G__45678 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45676,G__45677,G__45678) : sci.impl.evaluator.eval.call(null,G__45676,G__45677,G__45678));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45242 = (function (){var G__45679 = ctx;
var G__45680 = bindings;
var G__45681 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45679,G__45680,G__45681) : sci.impl.evaluator.eval.call(null,G__45679,G__45680,G__45681));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45243 = (function (){var G__45682 = ctx;
var G__45683 = bindings;
var G__45684 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45682,G__45683,G__45684) : sci.impl.evaluator.eval.call(null,G__45682,G__45683,G__45684));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg45230,arg45231,arg45232,arg45233,arg45234,arg45235,arg45236,arg45237,arg45238,arg45239,arg45240,arg45241,arg45242,arg45243) : f.call(null,arg45230,arg45231,arg45232,arg45233,arg45234,arg45235,arg45236,arg45237,arg45238,arg45239,arg45240,arg45241,arg45242,arg45243));

break;
case (15):
var arg45244 = (function (){var G__45690 = ctx;
var G__45691 = bindings;
var G__45692 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45690,G__45691,G__45692) : sci.impl.evaluator.eval.call(null,G__45690,G__45691,G__45692));
})();
var args__$1 = cljs.core.rest(args);
var arg45245 = (function (){var G__45693 = ctx;
var G__45694 = bindings;
var G__45695 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45693,G__45694,G__45695) : sci.impl.evaluator.eval.call(null,G__45693,G__45694,G__45695));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45246 = (function (){var G__45696 = ctx;
var G__45697 = bindings;
var G__45698 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45696,G__45697,G__45698) : sci.impl.evaluator.eval.call(null,G__45696,G__45697,G__45698));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45247 = (function (){var G__45699 = ctx;
var G__45700 = bindings;
var G__45701 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45699,G__45700,G__45701) : sci.impl.evaluator.eval.call(null,G__45699,G__45700,G__45701));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45248 = (function (){var G__45702 = ctx;
var G__45703 = bindings;
var G__45704 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45702,G__45703,G__45704) : sci.impl.evaluator.eval.call(null,G__45702,G__45703,G__45704));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45249 = (function (){var G__45705 = ctx;
var G__45706 = bindings;
var G__45707 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45705,G__45706,G__45707) : sci.impl.evaluator.eval.call(null,G__45705,G__45706,G__45707));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45250 = (function (){var G__45708 = ctx;
var G__45709 = bindings;
var G__45710 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45708,G__45709,G__45710) : sci.impl.evaluator.eval.call(null,G__45708,G__45709,G__45710));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45251 = (function (){var G__45711 = ctx;
var G__45712 = bindings;
var G__45713 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45711,G__45712,G__45713) : sci.impl.evaluator.eval.call(null,G__45711,G__45712,G__45713));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45252 = (function (){var G__45714 = ctx;
var G__45715 = bindings;
var G__45716 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45714,G__45715,G__45716) : sci.impl.evaluator.eval.call(null,G__45714,G__45715,G__45716));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45253 = (function (){var G__45717 = ctx;
var G__45718 = bindings;
var G__45719 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45717,G__45718,G__45719) : sci.impl.evaluator.eval.call(null,G__45717,G__45718,G__45719));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45254 = (function (){var G__45720 = ctx;
var G__45721 = bindings;
var G__45722 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45720,G__45721,G__45722) : sci.impl.evaluator.eval.call(null,G__45720,G__45721,G__45722));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45255 = (function (){var G__45723 = ctx;
var G__45724 = bindings;
var G__45725 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45723,G__45724,G__45725) : sci.impl.evaluator.eval.call(null,G__45723,G__45724,G__45725));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45256 = (function (){var G__45726 = ctx;
var G__45727 = bindings;
var G__45728 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45726,G__45727,G__45728) : sci.impl.evaluator.eval.call(null,G__45726,G__45727,G__45728));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45257 = (function (){var G__45729 = ctx;
var G__45730 = bindings;
var G__45731 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45729,G__45730,G__45731) : sci.impl.evaluator.eval.call(null,G__45729,G__45730,G__45731));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg45258 = (function (){var G__45732 = ctx;
var G__45733 = bindings;
var G__45734 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45732,G__45733,G__45734) : sci.impl.evaluator.eval.call(null,G__45732,G__45733,G__45734));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg45244,arg45245,arg45246,arg45247,arg45248,arg45249,arg45250,arg45251,arg45252,arg45253,arg45254,arg45255,arg45256,arg45257,arg45258) : f.call(null,arg45244,arg45245,arg45246,arg45247,arg45248,arg45249,arg45250,arg45251,arg45252,arg45253,arg45254,arg45255,arg45256,arg45257,arg45258));

break;
case (16):
var arg45259 = (function (){var G__45735 = ctx;
var G__45736 = bindings;
var G__45737 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45735,G__45736,G__45737) : sci.impl.evaluator.eval.call(null,G__45735,G__45736,G__45737));
})();
var args__$1 = cljs.core.rest(args);
var arg45260 = (function (){var G__45738 = ctx;
var G__45739 = bindings;
var G__45740 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45738,G__45739,G__45740) : sci.impl.evaluator.eval.call(null,G__45738,G__45739,G__45740));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45261 = (function (){var G__45742 = ctx;
var G__45743 = bindings;
var G__45744 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45742,G__45743,G__45744) : sci.impl.evaluator.eval.call(null,G__45742,G__45743,G__45744));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45262 = (function (){var G__45746 = ctx;
var G__45747 = bindings;
var G__45748 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45746,G__45747,G__45748) : sci.impl.evaluator.eval.call(null,G__45746,G__45747,G__45748));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45263 = (function (){var G__45751 = ctx;
var G__45752 = bindings;
var G__45753 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45751,G__45752,G__45753) : sci.impl.evaluator.eval.call(null,G__45751,G__45752,G__45753));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45264 = (function (){var G__45755 = ctx;
var G__45756 = bindings;
var G__45757 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45755,G__45756,G__45757) : sci.impl.evaluator.eval.call(null,G__45755,G__45756,G__45757));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45265 = (function (){var G__45759 = ctx;
var G__45760 = bindings;
var G__45761 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45759,G__45760,G__45761) : sci.impl.evaluator.eval.call(null,G__45759,G__45760,G__45761));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45266 = (function (){var G__45762 = ctx;
var G__45763 = bindings;
var G__45764 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45762,G__45763,G__45764) : sci.impl.evaluator.eval.call(null,G__45762,G__45763,G__45764));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45267 = (function (){var G__45765 = ctx;
var G__45766 = bindings;
var G__45767 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45765,G__45766,G__45767) : sci.impl.evaluator.eval.call(null,G__45765,G__45766,G__45767));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45268 = (function (){var G__45769 = ctx;
var G__45770 = bindings;
var G__45771 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45769,G__45770,G__45771) : sci.impl.evaluator.eval.call(null,G__45769,G__45770,G__45771));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45269 = (function (){var G__45772 = ctx;
var G__45773 = bindings;
var G__45774 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45772,G__45773,G__45774) : sci.impl.evaluator.eval.call(null,G__45772,G__45773,G__45774));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45270 = (function (){var G__45775 = ctx;
var G__45776 = bindings;
var G__45777 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45775,G__45776,G__45777) : sci.impl.evaluator.eval.call(null,G__45775,G__45776,G__45777));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45271 = (function (){var G__45778 = ctx;
var G__45779 = bindings;
var G__45780 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45778,G__45779,G__45780) : sci.impl.evaluator.eval.call(null,G__45778,G__45779,G__45780));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45272 = (function (){var G__45781 = ctx;
var G__45782 = bindings;
var G__45783 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45781,G__45782,G__45783) : sci.impl.evaluator.eval.call(null,G__45781,G__45782,G__45783));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg45273 = (function (){var G__45784 = ctx;
var G__45785 = bindings;
var G__45786 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45784,G__45785,G__45786) : sci.impl.evaluator.eval.call(null,G__45784,G__45785,G__45786));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg45274 = (function (){var G__45787 = ctx;
var G__45788 = bindings;
var G__45789 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45787,G__45788,G__45789) : sci.impl.evaluator.eval.call(null,G__45787,G__45788,G__45789));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg45259,arg45260,arg45261,arg45262,arg45263,arg45264,arg45265,arg45266,arg45267,arg45268,arg45269,arg45270,arg45271,arg45272,arg45273,arg45274) : f.call(null,arg45259,arg45260,arg45261,arg45262,arg45263,arg45264,arg45265,arg45266,arg45267,arg45268,arg45269,arg45270,arg45271,arg45272,arg45273,arg45274));

break;
case (17):
var arg45275 = (function (){var G__45791 = ctx;
var G__45792 = bindings;
var G__45793 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45791,G__45792,G__45793) : sci.impl.evaluator.eval.call(null,G__45791,G__45792,G__45793));
})();
var args__$1 = cljs.core.rest(args);
var arg45276 = (function (){var G__45794 = ctx;
var G__45795 = bindings;
var G__45796 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45794,G__45795,G__45796) : sci.impl.evaluator.eval.call(null,G__45794,G__45795,G__45796));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45277 = (function (){var G__45797 = ctx;
var G__45798 = bindings;
var G__45799 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45797,G__45798,G__45799) : sci.impl.evaluator.eval.call(null,G__45797,G__45798,G__45799));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45278 = (function (){var G__45800 = ctx;
var G__45801 = bindings;
var G__45802 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45800,G__45801,G__45802) : sci.impl.evaluator.eval.call(null,G__45800,G__45801,G__45802));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45279 = (function (){var G__45803 = ctx;
var G__45804 = bindings;
var G__45805 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45803,G__45804,G__45805) : sci.impl.evaluator.eval.call(null,G__45803,G__45804,G__45805));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45280 = (function (){var G__45806 = ctx;
var G__45807 = bindings;
var G__45808 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45806,G__45807,G__45808) : sci.impl.evaluator.eval.call(null,G__45806,G__45807,G__45808));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45281 = (function (){var G__45809 = ctx;
var G__45810 = bindings;
var G__45811 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45809,G__45810,G__45811) : sci.impl.evaluator.eval.call(null,G__45809,G__45810,G__45811));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45282 = (function (){var G__45813 = ctx;
var G__45814 = bindings;
var G__45815 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45813,G__45814,G__45815) : sci.impl.evaluator.eval.call(null,G__45813,G__45814,G__45815));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45283 = (function (){var G__45816 = ctx;
var G__45817 = bindings;
var G__45818 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45816,G__45817,G__45818) : sci.impl.evaluator.eval.call(null,G__45816,G__45817,G__45818));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45284 = (function (){var G__45819 = ctx;
var G__45820 = bindings;
var G__45821 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45819,G__45820,G__45821) : sci.impl.evaluator.eval.call(null,G__45819,G__45820,G__45821));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45285 = (function (){var G__45822 = ctx;
var G__45823 = bindings;
var G__45824 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45822,G__45823,G__45824) : sci.impl.evaluator.eval.call(null,G__45822,G__45823,G__45824));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45286 = (function (){var G__45825 = ctx;
var G__45826 = bindings;
var G__45827 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45825,G__45826,G__45827) : sci.impl.evaluator.eval.call(null,G__45825,G__45826,G__45827));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45287 = (function (){var G__45828 = ctx;
var G__45829 = bindings;
var G__45830 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45828,G__45829,G__45830) : sci.impl.evaluator.eval.call(null,G__45828,G__45829,G__45830));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45288 = (function (){var G__45831 = ctx;
var G__45832 = bindings;
var G__45833 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45831,G__45832,G__45833) : sci.impl.evaluator.eval.call(null,G__45831,G__45832,G__45833));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg45289 = (function (){var G__45837 = ctx;
var G__45838 = bindings;
var G__45839 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45837,G__45838,G__45839) : sci.impl.evaluator.eval.call(null,G__45837,G__45838,G__45839));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg45290 = (function (){var G__45840 = ctx;
var G__45841 = bindings;
var G__45842 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45840,G__45841,G__45842) : sci.impl.evaluator.eval.call(null,G__45840,G__45841,G__45842));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg45291 = (function (){var G__45843 = ctx;
var G__45844 = bindings;
var G__45845 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45843,G__45844,G__45845) : sci.impl.evaluator.eval.call(null,G__45843,G__45844,G__45845));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg45275,arg45276,arg45277,arg45278,arg45279,arg45280,arg45281,arg45282,arg45283,arg45284,arg45285,arg45286,arg45287,arg45288,arg45289,arg45290,arg45291) : f.call(null,arg45275,arg45276,arg45277,arg45278,arg45279,arg45280,arg45281,arg45282,arg45283,arg45284,arg45285,arg45286,arg45287,arg45288,arg45289,arg45290,arg45291));

break;
case (18):
var arg45292 = (function (){var G__45846 = ctx;
var G__45847 = bindings;
var G__45848 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45846,G__45847,G__45848) : sci.impl.evaluator.eval.call(null,G__45846,G__45847,G__45848));
})();
var args__$1 = cljs.core.rest(args);
var arg45293 = (function (){var G__45849 = ctx;
var G__45850 = bindings;
var G__45851 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45849,G__45850,G__45851) : sci.impl.evaluator.eval.call(null,G__45849,G__45850,G__45851));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45294 = (function (){var G__45852 = ctx;
var G__45853 = bindings;
var G__45854 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45852,G__45853,G__45854) : sci.impl.evaluator.eval.call(null,G__45852,G__45853,G__45854));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45295 = (function (){var G__45857 = ctx;
var G__45858 = bindings;
var G__45859 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45857,G__45858,G__45859) : sci.impl.evaluator.eval.call(null,G__45857,G__45858,G__45859));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45296 = (function (){var G__45860 = ctx;
var G__45861 = bindings;
var G__45862 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45860,G__45861,G__45862) : sci.impl.evaluator.eval.call(null,G__45860,G__45861,G__45862));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45297 = (function (){var G__45863 = ctx;
var G__45864 = bindings;
var G__45865 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45863,G__45864,G__45865) : sci.impl.evaluator.eval.call(null,G__45863,G__45864,G__45865));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45298 = (function (){var G__45866 = ctx;
var G__45867 = bindings;
var G__45868 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45866,G__45867,G__45868) : sci.impl.evaluator.eval.call(null,G__45866,G__45867,G__45868));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45299 = (function (){var G__45869 = ctx;
var G__45870 = bindings;
var G__45871 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45869,G__45870,G__45871) : sci.impl.evaluator.eval.call(null,G__45869,G__45870,G__45871));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45300 = (function (){var G__45872 = ctx;
var G__45873 = bindings;
var G__45874 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45872,G__45873,G__45874) : sci.impl.evaluator.eval.call(null,G__45872,G__45873,G__45874));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45301 = (function (){var G__45875 = ctx;
var G__45876 = bindings;
var G__45877 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45875,G__45876,G__45877) : sci.impl.evaluator.eval.call(null,G__45875,G__45876,G__45877));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45302 = (function (){var G__45883 = ctx;
var G__45884 = bindings;
var G__45885 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45883,G__45884,G__45885) : sci.impl.evaluator.eval.call(null,G__45883,G__45884,G__45885));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45303 = (function (){var G__45886 = ctx;
var G__45887 = bindings;
var G__45888 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45886,G__45887,G__45888) : sci.impl.evaluator.eval.call(null,G__45886,G__45887,G__45888));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45304 = (function (){var G__45889 = ctx;
var G__45890 = bindings;
var G__45891 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45889,G__45890,G__45891) : sci.impl.evaluator.eval.call(null,G__45889,G__45890,G__45891));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45305 = (function (){var G__45892 = ctx;
var G__45893 = bindings;
var G__45894 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45892,G__45893,G__45894) : sci.impl.evaluator.eval.call(null,G__45892,G__45893,G__45894));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg45306 = (function (){var G__45895 = ctx;
var G__45896 = bindings;
var G__45897 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45895,G__45896,G__45897) : sci.impl.evaluator.eval.call(null,G__45895,G__45896,G__45897));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg45307 = (function (){var G__45898 = ctx;
var G__45899 = bindings;
var G__45900 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45898,G__45899,G__45900) : sci.impl.evaluator.eval.call(null,G__45898,G__45899,G__45900));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg45308 = (function (){var G__45902 = ctx;
var G__45903 = bindings;
var G__45904 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45902,G__45903,G__45904) : sci.impl.evaluator.eval.call(null,G__45902,G__45903,G__45904));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg45309 = (function (){var G__45905 = ctx;
var G__45906 = bindings;
var G__45907 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45905,G__45906,G__45907) : sci.impl.evaluator.eval.call(null,G__45905,G__45906,G__45907));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg45292,arg45293,arg45294,arg45295,arg45296,arg45297,arg45298,arg45299,arg45300,arg45301,arg45302,arg45303,arg45304,arg45305,arg45306,arg45307,arg45308,arg45309) : f.call(null,arg45292,arg45293,arg45294,arg45295,arg45296,arg45297,arg45298,arg45299,arg45300,arg45301,arg45302,arg45303,arg45304,arg45305,arg45306,arg45307,arg45308,arg45309));

break;
case (19):
var arg45310 = (function (){var G__45908 = ctx;
var G__45909 = bindings;
var G__45910 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45908,G__45909,G__45910) : sci.impl.evaluator.eval.call(null,G__45908,G__45909,G__45910));
})();
var args__$1 = cljs.core.rest(args);
var arg45311 = (function (){var G__45912 = ctx;
var G__45913 = bindings;
var G__45914 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45912,G__45913,G__45914) : sci.impl.evaluator.eval.call(null,G__45912,G__45913,G__45914));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg45312 = (function (){var G__45915 = ctx;
var G__45916 = bindings;
var G__45917 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45915,G__45916,G__45917) : sci.impl.evaluator.eval.call(null,G__45915,G__45916,G__45917));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg45313 = (function (){var G__45918 = ctx;
var G__45919 = bindings;
var G__45920 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45918,G__45919,G__45920) : sci.impl.evaluator.eval.call(null,G__45918,G__45919,G__45920));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg45314 = (function (){var G__45921 = ctx;
var G__45922 = bindings;
var G__45923 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45921,G__45922,G__45923) : sci.impl.evaluator.eval.call(null,G__45921,G__45922,G__45923));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg45315 = (function (){var G__45924 = ctx;
var G__45925 = bindings;
var G__45926 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45924,G__45925,G__45926) : sci.impl.evaluator.eval.call(null,G__45924,G__45925,G__45926));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg45316 = (function (){var G__45927 = ctx;
var G__45928 = bindings;
var G__45929 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45927,G__45928,G__45929) : sci.impl.evaluator.eval.call(null,G__45927,G__45928,G__45929));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg45317 = (function (){var G__45930 = ctx;
var G__45931 = bindings;
var G__45932 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45930,G__45931,G__45932) : sci.impl.evaluator.eval.call(null,G__45930,G__45931,G__45932));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg45318 = (function (){var G__45936 = ctx;
var G__45937 = bindings;
var G__45938 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45936,G__45937,G__45938) : sci.impl.evaluator.eval.call(null,G__45936,G__45937,G__45938));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg45319 = (function (){var G__45939 = ctx;
var G__45940 = bindings;
var G__45941 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45939,G__45940,G__45941) : sci.impl.evaluator.eval.call(null,G__45939,G__45940,G__45941));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg45320 = (function (){var G__45942 = ctx;
var G__45943 = bindings;
var G__45944 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45942,G__45943,G__45944) : sci.impl.evaluator.eval.call(null,G__45942,G__45943,G__45944));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg45321 = (function (){var G__45948 = ctx;
var G__45949 = bindings;
var G__45950 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45948,G__45949,G__45950) : sci.impl.evaluator.eval.call(null,G__45948,G__45949,G__45950));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg45322 = (function (){var G__45951 = ctx;
var G__45952 = bindings;
var G__45953 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45951,G__45952,G__45953) : sci.impl.evaluator.eval.call(null,G__45951,G__45952,G__45953));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg45323 = (function (){var G__45954 = ctx;
var G__45955 = bindings;
var G__45956 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45954,G__45955,G__45956) : sci.impl.evaluator.eval.call(null,G__45954,G__45955,G__45956));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg45324 = (function (){var G__45957 = ctx;
var G__45958 = bindings;
var G__45960 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45957,G__45958,G__45960) : sci.impl.evaluator.eval.call(null,G__45957,G__45958,G__45960));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg45325 = (function (){var G__45961 = ctx;
var G__45962 = bindings;
var G__45963 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45961,G__45962,G__45963) : sci.impl.evaluator.eval.call(null,G__45961,G__45962,G__45963));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg45326 = (function (){var G__45964 = ctx;
var G__45965 = bindings;
var G__45966 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45964,G__45965,G__45966) : sci.impl.evaluator.eval.call(null,G__45964,G__45965,G__45966));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg45327 = (function (){var G__45967 = ctx;
var G__45968 = bindings;
var G__45969 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45967,G__45968,G__45969) : sci.impl.evaluator.eval.call(null,G__45967,G__45968,G__45969));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg45328 = (function (){var G__45970 = ctx;
var G__45971 = bindings;
var G__45972 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__45970,G__45971,G__45972) : sci.impl.evaluator.eval.call(null,G__45970,G__45971,G__45972));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg45310,arg45311,arg45312,arg45313,arg45314,arg45315,arg45316,arg45317,arg45318,arg45319,arg45320,arg45321,arg45322,arg45323,arg45324,arg45325,arg45326,arg45327,arg45328) : f.call(null,arg45310,arg45311,arg45312,arg45313,arg45314,arg45315,arg45316,arg45317,arg45318,arg45319,arg45320,arg45321,arg45322,arg45323,arg45324,arg45325,arg45326,arg45327,arg45328));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44700_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__44700_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__44700_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e45974){if((e45974 instanceof Error)){
var e = e45974;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e45974;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);

//# sourceMappingURL=sci.impl.evaluator.js.map
