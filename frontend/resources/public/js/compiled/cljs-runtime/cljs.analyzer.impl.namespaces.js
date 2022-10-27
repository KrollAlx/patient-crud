goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__61998 = libspec;
var seq__61999 = cljs.core.seq(vec__61998);
var first__62000 = cljs.core.first(seq__61999);
var seq__61999__$1 = cljs.core.next(seq__61999);
var lib = first__62000;
var spec = seq__61999__$1;
var libspec__$1 = vec__61998;
var vec__62001 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62001,(0),null);
var vec__62004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62001,(1),null);
var seq__62005 = cljs.core.seq(vec__62004);
var first__62006 = cljs.core.first(seq__62005);
var seq__62005__$1 = cljs.core.next(seq__62005);
var _ = first__62006;
var first__62006__$1 = cljs.core.first(seq__62005__$1);
var seq__62005__$2 = cljs.core.next(seq__62005__$1);
var alias = first__62006__$1;
var post_spec = seq__62005__$2;
var post = vec__62004;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__62007 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62007,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__62007;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__62010 = cljs.core.seq(new_as_aliases);
var chunk__62011 = null;
var count__62012 = (0);
var i__62013 = (0);
while(true){
if((i__62013 < count__62012)){
var vec__62068 = chunk__62011.cljs$core$IIndexed$_nth$arity$2(null,i__62013);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62068,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62068,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__62098 = seq__62010;
var G__62099 = chunk__62011;
var G__62100 = count__62012;
var G__62101 = (i__62013 + (1));
seq__62010 = G__62098;
chunk__62011 = G__62099;
count__62012 = G__62100;
i__62013 = G__62101;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62010);
if(temp__5804__auto__){
var seq__62010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62010__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62010__$1);
var G__62102 = cljs.core.chunk_rest(seq__62010__$1);
var G__62103 = c__5568__auto__;
var G__62104 = cljs.core.count(c__5568__auto__);
var G__62105 = (0);
seq__62010 = G__62102;
chunk__62011 = G__62103;
count__62012 = G__62104;
i__62013 = G__62105;
continue;
} else {
var vec__62072 = cljs.core.first(seq__62010__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62072,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62072,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__62106 = cljs.core.next(seq__62010__$1);
var G__62107 = null;
var G__62108 = (0);
var G__62109 = (0);
seq__62010 = G__62106;
chunk__62011 = G__62107;
count__62012 = G__62108;
i__62013 = G__62109;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__62080 = arguments.length;
switch (G__62080) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__62081 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__62081__$1 = cljs.core.__destructure_map(map__62081);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62081__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__62082 = ret__$1;
var G__62082__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__62082,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__62082);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__62082__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__62082__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__62083,p__62084){
var map__62085 = p__62083;
var map__62085__$1 = cljs.core.__destructure_map(map__62085);
var ret__$1 = map__62085__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62085__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__62086 = p__62084;
var seq__62087 = cljs.core.seq(vec__62086);
var first__62088 = cljs.core.first(seq__62087);
var seq__62087__$1 = cljs.core.next(seq__62087);
var spec_key = first__62088;
var libspecs = seq__62087__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__62089 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__62089__$1 = cljs.core.__destructure_map(map__62089);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62089__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62089__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__62090 = ret__$1;
var G__62090__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__62090,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__62090);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__62090__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__62090__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
