goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37089){
var map__37090 = p__37089;
var map__37090__$1 = cljs.core.__destructure_map(map__37090);
var m = map__37090__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37090__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37093_37469 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37095_37470 = null;
var count__37096_37471 = (0);
var i__37097_37472 = (0);
while(true){
if((i__37097_37472 < count__37096_37471)){
var f_37474 = chunk__37095_37470.cljs$core$IIndexed$_nth$arity$2(null,i__37097_37472);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37474], 0));


var G__37475 = seq__37093_37469;
var G__37476 = chunk__37095_37470;
var G__37477 = count__37096_37471;
var G__37478 = (i__37097_37472 + (1));
seq__37093_37469 = G__37475;
chunk__37095_37470 = G__37476;
count__37096_37471 = G__37477;
i__37097_37472 = G__37478;
continue;
} else {
var temp__5804__auto___37479 = cljs.core.seq(seq__37093_37469);
if(temp__5804__auto___37479){
var seq__37093_37481__$1 = temp__5804__auto___37479;
if(cljs.core.chunked_seq_QMARK_(seq__37093_37481__$1)){
var c__5568__auto___37483 = cljs.core.chunk_first(seq__37093_37481__$1);
var G__37484 = cljs.core.chunk_rest(seq__37093_37481__$1);
var G__37485 = c__5568__auto___37483;
var G__37486 = cljs.core.count(c__5568__auto___37483);
var G__37487 = (0);
seq__37093_37469 = G__37484;
chunk__37095_37470 = G__37485;
count__37096_37471 = G__37486;
i__37097_37472 = G__37487;
continue;
} else {
var f_37489 = cljs.core.first(seq__37093_37481__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37489], 0));


var G__37491 = cljs.core.next(seq__37093_37481__$1);
var G__37492 = null;
var G__37493 = (0);
var G__37494 = (0);
seq__37093_37469 = G__37491;
chunk__37095_37470 = G__37492;
count__37096_37471 = G__37493;
i__37097_37472 = G__37494;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37496 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37496], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37496)))?cljs.core.second(arglists_37496):arglists_37496)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37143_37500 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37144_37501 = null;
var count__37145_37502 = (0);
var i__37146_37503 = (0);
while(true){
if((i__37146_37503 < count__37145_37502)){
var vec__37179_37504 = chunk__37144_37501.cljs$core$IIndexed$_nth$arity$2(null,i__37146_37503);
var name_37505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179_37504,(0),null);
var map__37182_37506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179_37504,(1),null);
var map__37182_37507__$1 = cljs.core.__destructure_map(map__37182_37506);
var doc_37508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182_37507__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182_37507__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37505], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37509], 0));

if(cljs.core.truth_(doc_37508)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37508], 0));
} else {
}


var G__37511 = seq__37143_37500;
var G__37512 = chunk__37144_37501;
var G__37513 = count__37145_37502;
var G__37514 = (i__37146_37503 + (1));
seq__37143_37500 = G__37511;
chunk__37144_37501 = G__37512;
count__37145_37502 = G__37513;
i__37146_37503 = G__37514;
continue;
} else {
var temp__5804__auto___37516 = cljs.core.seq(seq__37143_37500);
if(temp__5804__auto___37516){
var seq__37143_37517__$1 = temp__5804__auto___37516;
if(cljs.core.chunked_seq_QMARK_(seq__37143_37517__$1)){
var c__5568__auto___37518 = cljs.core.chunk_first(seq__37143_37517__$1);
var G__37519 = cljs.core.chunk_rest(seq__37143_37517__$1);
var G__37520 = c__5568__auto___37518;
var G__37521 = cljs.core.count(c__5568__auto___37518);
var G__37522 = (0);
seq__37143_37500 = G__37519;
chunk__37144_37501 = G__37520;
count__37145_37502 = G__37521;
i__37146_37503 = G__37522;
continue;
} else {
var vec__37196_37524 = cljs.core.first(seq__37143_37517__$1);
var name_37525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196_37524,(0),null);
var map__37199_37526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37196_37524,(1),null);
var map__37199_37527__$1 = cljs.core.__destructure_map(map__37199_37526);
var doc_37528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199_37527__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199_37527__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37525], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37529], 0));

if(cljs.core.truth_(doc_37528)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37528], 0));
} else {
}


var G__37530 = cljs.core.next(seq__37143_37517__$1);
var G__37531 = null;
var G__37532 = (0);
var G__37533 = (0);
seq__37143_37500 = G__37530;
chunk__37144_37501 = G__37531;
count__37145_37502 = G__37532;
i__37146_37503 = G__37533;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37222 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37223 = null;
var count__37224 = (0);
var i__37225 = (0);
while(true){
if((i__37225 < count__37224)){
var role = chunk__37223.cljs$core$IIndexed$_nth$arity$2(null,i__37225);
var temp__5804__auto___37537__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37537__$1)){
var spec_37538 = temp__5804__auto___37537__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37538)], 0));
} else {
}


var G__37539 = seq__37222;
var G__37540 = chunk__37223;
var G__37541 = count__37224;
var G__37542 = (i__37225 + (1));
seq__37222 = G__37539;
chunk__37223 = G__37540;
count__37224 = G__37541;
i__37225 = G__37542;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__37222);
if(temp__5804__auto____$1){
var seq__37222__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37222__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37222__$1);
var G__37546 = cljs.core.chunk_rest(seq__37222__$1);
var G__37547 = c__5568__auto__;
var G__37548 = cljs.core.count(c__5568__auto__);
var G__37549 = (0);
seq__37222 = G__37546;
chunk__37223 = G__37547;
count__37224 = G__37548;
i__37225 = G__37549;
continue;
} else {
var role = cljs.core.first(seq__37222__$1);
var temp__5804__auto___37551__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___37551__$2)){
var spec_37552 = temp__5804__auto___37551__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37552)], 0));
} else {
}


var G__37556 = cljs.core.next(seq__37222__$1);
var G__37557 = null;
var G__37558 = (0);
var G__37559 = (0);
seq__37222 = G__37556;
chunk__37223 = G__37557;
count__37224 = G__37558;
i__37225 = G__37559;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37562 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37563 = cljs.core.ex_cause(t);
via = G__37562;
t = G__37563;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37329 = datafied_throwable;
var map__37329__$1 = cljs.core.__destructure_map(map__37329);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37329__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37330 = cljs.core.last(via);
var map__37330__$1 = cljs.core.__destructure_map(map__37330);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37330__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37330__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37330__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37331 = data;
var map__37331__$1 = cljs.core.__destructure_map(map__37331);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37331__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37332 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37332__$1 = cljs.core.__destructure_map(map__37332);
var top_data = map__37332__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37336 = phase;
var G__37336__$1 = (((G__37336 instanceof cljs.core.Keyword))?G__37336.fqn:null);
switch (G__37336__$1) {
case "read-source":
var map__37350 = data;
var map__37350__$1 = cljs.core.__destructure_map(map__37350);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37356__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37356,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37356);
var G__37356__$2 = (cljs.core.truth_((function (){var fexpr__37363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37363.cljs$core$IFn$_invoke$arity$1 ? fexpr__37363.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37363.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37356__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37356__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37356__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37356__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37365 = top_data;
var G__37365__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37365,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37365);
var G__37365__$2 = (cljs.core.truth_((function (){var fexpr__37368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37368.cljs$core$IFn$_invoke$arity$1 ? fexpr__37368.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37368.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37365__$1);
var G__37365__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37365__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37365__$2);
var G__37365__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37365__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37365__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37365__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37365__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37371 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37371,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37371,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37371,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37371,(3),null);
var G__37377 = top_data;
var G__37377__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37377);
var G__37377__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37377__$1);
var G__37377__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37377__$2);
var G__37377__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37377__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37377__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37377__$4;
}

break;
case "execution":
var vec__37387 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37387,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37387,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37387,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37387,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37312_SHARP_){
var or__5045__auto__ = (p1__37312_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__37393 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37393.cljs$core$IFn$_invoke$arity$1 ? fexpr__37393.cljs$core$IFn$_invoke$arity$1(p1__37312_SHARP_) : fexpr__37393.call(null,p1__37312_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__37396 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37396__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37396,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37396);
var G__37396__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37396__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37396__$1);
var G__37396__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37396__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37396__$2);
var G__37396__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37396__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37396__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37396__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37396__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37336__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37408){
var map__37409 = p__37408;
var map__37409__$1 = cljs.core.__destructure_map(map__37409);
var triage_data = map__37409__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37409__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37412 = phase;
var G__37412__$1 = (((G__37412 instanceof cljs.core.Keyword))?G__37412.fqn:null);
switch (G__37412__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37413 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37414 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37415 = loc;
var G__37416 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37418_37590 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37419_37591 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37420_37592 = true;
var _STAR_print_fn_STAR__temp_val__37421_37593 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37420_37592);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37421_37593);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37402_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37402_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37419_37591);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37418_37590);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37413,G__37414,G__37415,G__37416) : format.call(null,G__37413,G__37414,G__37415,G__37416));

break;
case "macroexpansion":
var G__37426 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37427 = cause_type;
var G__37428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37429 = loc;
var G__37430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37426,G__37427,G__37428,G__37429,G__37430) : format.call(null,G__37426,G__37427,G__37428,G__37429,G__37430));

break;
case "compile-syntax-check":
var G__37431 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37432 = cause_type;
var G__37433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37434 = loc;
var G__37435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37431,G__37432,G__37433,G__37434,G__37435) : format.call(null,G__37431,G__37432,G__37433,G__37434,G__37435));

break;
case "compilation":
var G__37438 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37439 = cause_type;
var G__37440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37441 = loc;
var G__37442 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37438,G__37439,G__37440,G__37441,G__37442) : format.call(null,G__37438,G__37439,G__37440,G__37441,G__37442));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37443 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37444 = symbol;
var G__37445 = loc;
var G__37446 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37449_37599 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37450_37600 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37451_37601 = true;
var _STAR_print_fn_STAR__temp_val__37452_37602 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37451_37601);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37452_37602);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37403_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37403_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37450_37600);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37449_37599);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37443,G__37444,G__37445,G__37446) : format.call(null,G__37443,G__37444,G__37445,G__37446));
} else {
var G__37455 = "Execution error%s at %s(%s).\n%s\n";
var G__37456 = cause_type;
var G__37457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37458 = loc;
var G__37459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37455,G__37456,G__37457,G__37458,G__37459) : format.call(null,G__37455,G__37456,G__37457,G__37458,G__37459));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37412__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
