goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__60457){
var map__60459 = p__60457;
var map__60459__$1 = cljs.core.__destructure_map(map__60459);
var m = map__60459__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__60469_60733 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60470_60734 = null;
var count__60471_60735 = (0);
var i__60472_60736 = (0);
while(true){
if((i__60472_60736 < count__60471_60735)){
var f_60743 = chunk__60470_60734.cljs$core$IIndexed$_nth$arity$2(null,i__60472_60736);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60743], 0));


var G__60745 = seq__60469_60733;
var G__60746 = chunk__60470_60734;
var G__60747 = count__60471_60735;
var G__60748 = (i__60472_60736 + (1));
seq__60469_60733 = G__60745;
chunk__60470_60734 = G__60746;
count__60471_60735 = G__60747;
i__60472_60736 = G__60748;
continue;
} else {
var temp__5804__auto___60750 = cljs.core.seq(seq__60469_60733);
if(temp__5804__auto___60750){
var seq__60469_60755__$1 = temp__5804__auto___60750;
if(cljs.core.chunked_seq_QMARK_(seq__60469_60755__$1)){
var c__5568__auto___60756 = cljs.core.chunk_first(seq__60469_60755__$1);
var G__60757 = cljs.core.chunk_rest(seq__60469_60755__$1);
var G__60758 = c__5568__auto___60756;
var G__60759 = cljs.core.count(c__5568__auto___60756);
var G__60760 = (0);
seq__60469_60733 = G__60757;
chunk__60470_60734 = G__60758;
count__60471_60735 = G__60759;
i__60472_60736 = G__60760;
continue;
} else {
var f_60761 = cljs.core.first(seq__60469_60755__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60761], 0));


var G__60762 = cljs.core.next(seq__60469_60755__$1);
var G__60763 = null;
var G__60764 = (0);
var G__60765 = (0);
seq__60469_60733 = G__60762;
chunk__60470_60734 = G__60763;
count__60471_60735 = G__60764;
i__60472_60736 = G__60765;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60766 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60766], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60766)))?cljs.core.second(arglists_60766):arglists_60766)], 0));
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
var seq__60478_60768 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__60479_60769 = null;
var count__60480_60770 = (0);
var i__60481_60771 = (0);
while(true){
if((i__60481_60771 < count__60480_60770)){
var vec__60493_60772 = chunk__60479_60769.cljs$core$IIndexed$_nth$arity$2(null,i__60481_60771);
var name_60773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493_60772,(0),null);
var map__60496_60774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60493_60772,(1),null);
var map__60496_60775__$1 = cljs.core.__destructure_map(map__60496_60774);
var doc_60776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60496_60775__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60496_60775__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60773], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60777], 0));

if(cljs.core.truth_(doc_60776)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60776], 0));
} else {
}


var G__60779 = seq__60478_60768;
var G__60780 = chunk__60479_60769;
var G__60781 = count__60480_60770;
var G__60782 = (i__60481_60771 + (1));
seq__60478_60768 = G__60779;
chunk__60479_60769 = G__60780;
count__60480_60770 = G__60781;
i__60481_60771 = G__60782;
continue;
} else {
var temp__5804__auto___60783 = cljs.core.seq(seq__60478_60768);
if(temp__5804__auto___60783){
var seq__60478_60786__$1 = temp__5804__auto___60783;
if(cljs.core.chunked_seq_QMARK_(seq__60478_60786__$1)){
var c__5568__auto___60787 = cljs.core.chunk_first(seq__60478_60786__$1);
var G__60788 = cljs.core.chunk_rest(seq__60478_60786__$1);
var G__60789 = c__5568__auto___60787;
var G__60790 = cljs.core.count(c__5568__auto___60787);
var G__60791 = (0);
seq__60478_60768 = G__60788;
chunk__60479_60769 = G__60789;
count__60480_60770 = G__60790;
i__60481_60771 = G__60791;
continue;
} else {
var vec__60500_60792 = cljs.core.first(seq__60478_60786__$1);
var name_60793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500_60792,(0),null);
var map__60503_60794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60500_60792,(1),null);
var map__60503_60795__$1 = cljs.core.__destructure_map(map__60503_60794);
var doc_60796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503_60795__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503_60795__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60793], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60797], 0));

if(cljs.core.truth_(doc_60796)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60796], 0));
} else {
}


var G__60802 = cljs.core.next(seq__60478_60786__$1);
var G__60803 = null;
var G__60804 = (0);
var G__60805 = (0);
seq__60478_60768 = G__60802;
chunk__60479_60769 = G__60803;
count__60480_60770 = G__60804;
i__60481_60771 = G__60805;
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

var seq__60507 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60508 = null;
var count__60509 = (0);
var i__60510 = (0);
while(true){
if((i__60510 < count__60509)){
var role = chunk__60508.cljs$core$IIndexed$_nth$arity$2(null,i__60510);
var temp__5804__auto___60806__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___60806__$1)){
var spec_60807 = temp__5804__auto___60806__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60807)], 0));
} else {
}


var G__60808 = seq__60507;
var G__60809 = chunk__60508;
var G__60810 = count__60509;
var G__60811 = (i__60510 + (1));
seq__60507 = G__60808;
chunk__60508 = G__60809;
count__60509 = G__60810;
i__60510 = G__60811;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__60507);
if(temp__5804__auto____$1){
var seq__60507__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60507__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__60507__$1);
var G__60812 = cljs.core.chunk_rest(seq__60507__$1);
var G__60813 = c__5568__auto__;
var G__60814 = cljs.core.count(c__5568__auto__);
var G__60815 = (0);
seq__60507 = G__60812;
chunk__60508 = G__60813;
count__60509 = G__60814;
i__60510 = G__60815;
continue;
} else {
var role = cljs.core.first(seq__60507__$1);
var temp__5804__auto___60822__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___60822__$2)){
var spec_60825 = temp__5804__auto___60822__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60825)], 0));
} else {
}


var G__60831 = cljs.core.next(seq__60507__$1);
var G__60832 = null;
var G__60834 = (0);
var G__60835 = (0);
seq__60507 = G__60831;
chunk__60508 = G__60832;
count__60509 = G__60834;
i__60510 = G__60835;
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
var G__60849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60850 = cljs.core.ex_cause(t);
via = G__60849;
t = G__60850;
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
var map__60556 = datafied_throwable;
var map__60556__$1 = cljs.core.__destructure_map(map__60556);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60556__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60556__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60557 = cljs.core.last(via);
var map__60557__$1 = cljs.core.__destructure_map(map__60557);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60557__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60558 = data;
var map__60558__$1 = cljs.core.__destructure_map(map__60558);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60559 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60559__$1 = cljs.core.__destructure_map(map__60559);
var top_data = map__60559__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60559__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60573 = phase;
var G__60573__$1 = (((G__60573 instanceof cljs.core.Keyword))?G__60573.fqn:null);
switch (G__60573__$1) {
case "read-source":
var map__60578 = data;
var map__60578__$1 = cljs.core.__destructure_map(map__60578);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60578__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60578__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60579 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60579__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60579,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60579);
var G__60579__$2 = (cljs.core.truth_((function (){var fexpr__60580 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60580.cljs$core$IFn$_invoke$arity$1 ? fexpr__60580.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60580.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60579__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60579__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60579__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60582 = top_data;
var G__60582__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60582,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60582);
var G__60582__$2 = (cljs.core.truth_((function (){var fexpr__60586 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60586.cljs$core$IFn$_invoke$arity$1 ? fexpr__60586.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60586.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60582__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60582__$1);
var G__60582__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60582__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60582__$2);
var G__60582__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60582__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60582__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60582__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60582__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60587 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60587,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60587,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60587,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60587,(3),null);
var G__60590 = top_data;
var G__60590__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60590,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60590);
var G__60590__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60590__$1);
var G__60590__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60590__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60590__$2);
var G__60590__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60590__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60590__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60590__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60590__$4;
}

break;
case "execution":
var vec__60612 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60612,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60551_SHARP_){
var or__5045__auto__ = (p1__60551_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__60615 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60615.cljs$core$IFn$_invoke$arity$1 ? fexpr__60615.cljs$core$IFn$_invoke$arity$1(p1__60551_SHARP_) : fexpr__60615.call(null,p1__60551_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__60616 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60616__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60616,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60616);
var G__60616__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60616__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60616__$1);
var G__60616__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60616__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60616__$2);
var G__60616__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60616__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60616__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60616__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60616__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60573__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60631){
var map__60635 = p__60631;
var map__60635__$1 = cljs.core.__destructure_map(map__60635);
var triage_data = map__60635__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60635__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__60666 = phase;
var G__60666__$1 = (((G__60666 instanceof cljs.core.Keyword))?G__60666.fqn:null);
switch (G__60666__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60667 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60668 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60669 = loc;
var G__60670 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60671_60927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60672_60928 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60673_60929 = true;
var _STAR_print_fn_STAR__temp_val__60674_60930 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60673_60929);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60674_60930);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60621_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60621_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60672_60928);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60671_60927);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60667,G__60668,G__60669,G__60670) : format.call(null,G__60667,G__60668,G__60669,G__60670));

break;
case "macroexpansion":
var G__60681 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60682 = cause_type;
var G__60683 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60684 = loc;
var G__60685 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60681,G__60682,G__60683,G__60684,G__60685) : format.call(null,G__60681,G__60682,G__60683,G__60684,G__60685));

break;
case "compile-syntax-check":
var G__60686 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60687 = cause_type;
var G__60688 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60689 = loc;
var G__60690 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60686,G__60687,G__60688,G__60689,G__60690) : format.call(null,G__60686,G__60687,G__60688,G__60689,G__60690));

break;
case "compilation":
var G__60691 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60692 = cause_type;
var G__60693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60694 = loc;
var G__60695 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60691,G__60692,G__60693,G__60694,G__60695) : format.call(null,G__60691,G__60692,G__60693,G__60694,G__60695));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60697 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60698 = symbol;
var G__60699 = loc;
var G__60700 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60701_60951 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60702_60952 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60703_60953 = true;
var _STAR_print_fn_STAR__temp_val__60704_60954 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60703_60953);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60704_60954);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60622_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60622_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60702_60952);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60701_60951);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60697,G__60698,G__60699,G__60700) : format.call(null,G__60697,G__60698,G__60699,G__60700));
} else {
var G__60710 = "Execution error%s at %s(%s).\n%s\n";
var G__60711 = cause_type;
var G__60712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60713 = loc;
var G__60714 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60710,G__60711,G__60712,G__60713,G__60714) : format.call(null,G__60710,G__60711,G__60712,G__60713,G__60714));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60666__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
