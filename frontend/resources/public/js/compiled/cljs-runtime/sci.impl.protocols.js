goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46648 = arguments.length;
var i__5770__auto___46649 = (0);
while(true){
if((i__5770__auto___46649 < len__5769__auto___46648)){
args__5775__auto__.push((arguments[i__5770__auto___46649]));

var G__46650 = (i__5770__auto___46649 + (1));
i__5770__auto___46649 = G__46650;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__46011 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46011,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46011,(1),null);
var vec__46014 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46014,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46014,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46020){
var vec__46021 = p__46020;
var seq__46022 = cljs.core.seq(vec__46021);
var first__46023 = cljs.core.first(seq__46022);
var seq__46022__$1 = cljs.core.next(seq__46022);
var method_name = first__46023;
var ___$2 = seq__46022__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__45995__auto__","x__45995__auto__",2094604266,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__45996__auto__","args__45996__auto__",-2053328004,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__45997__auto__","methods__45997__auto__",-1406726299,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45995__auto__","x__45995__auto__",2094604266,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__45997__auto__","methods__45997__auto__",-1406726299,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45995__auto__","x__45995__auto__",2094604266,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__45996__auto__","args__45996__auto__",-2053328004,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__45998__auto__","x__45998__auto__",-1325863080,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__45999__auto__","args__45999__auto__",2117898879,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__46000__auto__","meta__46000__auto__",1427893758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45998__auto__","x__45998__auto__",-1325863080,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__46001__auto__","method__46001__auto__",-2124648492,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__46000__auto__","meta__46000__auto__",1427893758,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__46001__auto__","method__46001__auto__",-2124648492,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__46001__auto__","method__46001__auto__",-2124648492,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45998__auto__","x__45998__auto__",-1325863080,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__45999__auto__","args__45999__auto__",2117898879,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__45998__auto__","x__45998__auto__",-1325863080,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq46006){
var G__46007 = cljs.core.first(seq46006);
var seq46006__$1 = cljs.core.next(seq46006);
var G__46008 = cljs.core.first(seq46006__$1);
var seq46006__$2 = cljs.core.next(seq46006__$1);
var G__46009 = cljs.core.first(seq46006__$2);
var seq46006__$3 = cljs.core.next(seq46006__$2);
var G__46010 = cljs.core.first(seq46006__$3);
var seq46006__$4 = cljs.core.next(seq46006__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46007,G__46008,G__46009,G__46010,seq46006__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46700 = arguments.length;
var i__5770__auto___46701 = (0);
while(true){
if((i__5770__auto___46701 < len__5769__auto___46700)){
args__5775__auto__.push((arguments[i__5770__auto___46701]));

var G__46702 = (i__5770__auto___46701 + (1));
i__5770__auto___46701 = G__46702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__46042 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__46045 = null;
var count__46046 = (0);
var i__46047 = (0);
while(true){
if((i__46047 < count__46046)){
var vec__46105 = chunk__46045.cljs$core$IIndexed$_nth$arity$2(null,i__46047);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(1),null);
var extend_via_metadata_46709 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_46710 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_46711 = sci.impl.vars.getName(proto_ns_46710);
var pns_str_46712 = (cljs.core.truth_(extend_via_metadata_46709)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_46711):null);
var seq__46108_46713 = cljs.core.seq(mmap);
var chunk__46109_46714 = null;
var count__46110_46715 = (0);
var i__46111_46716 = (0);
while(true){
if((i__46111_46716 < count__46110_46715)){
var vec__46123_46718 = chunk__46109_46714.cljs$core$IIndexed$_nth$arity$2(null,i__46111_46716);
var meth_name_46719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46123_46718,(0),null);
var f_46720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46123_46718,(1),null);
var meth_str_46721 = cljs.core.name(meth_name_46719);
var meth_sym_46722 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_46721);
var env_46723 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_46724 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_46723,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_46711,meth_sym_46722], null));
var multi_method_46725 = cljs.core.deref(multi_method_var_46724);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_46725,atype,(cljs.core.truth_(extend_via_metadata_46709)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_46712,meth_str_46721);
return ((function (seq__46108_46713,chunk__46109_46714,count__46110_46715,i__46111_46716,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46721,meth_sym_46722,env_46723,multi_method_var_46724,multi_method_46725,vec__46123_46718,meth_name_46719,f_46720,extend_via_metadata_46709,proto_ns_46710,pns_46711,pns_str_46712,vec__46105,proto,mmap){
return (function() { 
var G__46727__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46720,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46720,this$,args);
}
};
var G__46727 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__46728__i = 0, G__46728__a = new Array(arguments.length -  1);
while (G__46728__i < G__46728__a.length) {G__46728__a[G__46728__i] = arguments[G__46728__i + 1]; ++G__46728__i;}
  args = new cljs.core.IndexedSeq(G__46728__a,0,null);
} 
return G__46727__delegate.call(this,this$,args);};
G__46727.cljs$lang$maxFixedArity = 1;
G__46727.cljs$lang$applyTo = (function (arglist__46729){
var this$ = cljs.core.first(arglist__46729);
var args = cljs.core.rest(arglist__46729);
return G__46727__delegate(this$,args);
});
G__46727.cljs$core$IFn$_invoke$arity$variadic = G__46727__delegate;
return G__46727;
})()
;
;})(seq__46108_46713,chunk__46109_46714,count__46110_46715,i__46111_46716,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46721,meth_sym_46722,env_46723,multi_method_var_46724,multi_method_46725,vec__46123_46718,meth_name_46719,f_46720,extend_via_metadata_46709,proto_ns_46710,pns_46711,pns_str_46712,vec__46105,proto,mmap))
})():f_46720));


var G__46730 = seq__46108_46713;
var G__46731 = chunk__46109_46714;
var G__46732 = count__46110_46715;
var G__46733 = (i__46111_46716 + (1));
seq__46108_46713 = G__46730;
chunk__46109_46714 = G__46731;
count__46110_46715 = G__46732;
i__46111_46716 = G__46733;
continue;
} else {
var temp__5804__auto___46734 = cljs.core.seq(seq__46108_46713);
if(temp__5804__auto___46734){
var seq__46108_46735__$1 = temp__5804__auto___46734;
if(cljs.core.chunked_seq_QMARK_(seq__46108_46735__$1)){
var c__5568__auto___46736 = cljs.core.chunk_first(seq__46108_46735__$1);
var G__46737 = cljs.core.chunk_rest(seq__46108_46735__$1);
var G__46738 = c__5568__auto___46736;
var G__46739 = cljs.core.count(c__5568__auto___46736);
var G__46740 = (0);
seq__46108_46713 = G__46737;
chunk__46109_46714 = G__46738;
count__46110_46715 = G__46739;
i__46111_46716 = G__46740;
continue;
} else {
var vec__46134_46741 = cljs.core.first(seq__46108_46735__$1);
var meth_name_46742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134_46741,(0),null);
var f_46743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46134_46741,(1),null);
var meth_str_46744 = cljs.core.name(meth_name_46742);
var meth_sym_46745 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_46744);
var env_46746 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_46747 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_46746,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_46711,meth_sym_46745], null));
var multi_method_46748 = cljs.core.deref(multi_method_var_46747);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_46748,atype,(cljs.core.truth_(extend_via_metadata_46709)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_46712,meth_str_46744);
return ((function (seq__46108_46713,chunk__46109_46714,count__46110_46715,i__46111_46716,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46744,meth_sym_46745,env_46746,multi_method_var_46747,multi_method_46748,vec__46134_46741,meth_name_46742,f_46743,seq__46108_46735__$1,temp__5804__auto___46734,extend_via_metadata_46709,proto_ns_46710,pns_46711,pns_str_46712,vec__46105,proto,mmap){
return (function() { 
var G__46749__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46743,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46743,this$,args);
}
};
var G__46749 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__46751__i = 0, G__46751__a = new Array(arguments.length -  1);
while (G__46751__i < G__46751__a.length) {G__46751__a[G__46751__i] = arguments[G__46751__i + 1]; ++G__46751__i;}
  args = new cljs.core.IndexedSeq(G__46751__a,0,null);
} 
return G__46749__delegate.call(this,this$,args);};
G__46749.cljs$lang$maxFixedArity = 1;
G__46749.cljs$lang$applyTo = (function (arglist__46752){
var this$ = cljs.core.first(arglist__46752);
var args = cljs.core.rest(arglist__46752);
return G__46749__delegate(this$,args);
});
G__46749.cljs$core$IFn$_invoke$arity$variadic = G__46749__delegate;
return G__46749;
})()
;
;})(seq__46108_46713,chunk__46109_46714,count__46110_46715,i__46111_46716,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46744,meth_sym_46745,env_46746,multi_method_var_46747,multi_method_46748,vec__46134_46741,meth_name_46742,f_46743,seq__46108_46735__$1,temp__5804__auto___46734,extend_via_metadata_46709,proto_ns_46710,pns_46711,pns_str_46712,vec__46105,proto,mmap))
})():f_46743));


var G__46753 = cljs.core.next(seq__46108_46735__$1);
var G__46754 = null;
var G__46755 = (0);
var G__46756 = (0);
seq__46108_46713 = G__46753;
chunk__46109_46714 = G__46754;
count__46110_46715 = G__46755;
i__46111_46716 = G__46756;
continue;
}
} else {
}
}
break;
}


var G__46757 = seq__46042;
var G__46758 = chunk__46045;
var G__46759 = count__46046;
var G__46760 = (i__46047 + (1));
seq__46042 = G__46757;
chunk__46045 = G__46758;
count__46046 = G__46759;
i__46047 = G__46760;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46042);
if(temp__5804__auto__){
var seq__46042__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46042__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46042__$1);
var G__46761 = cljs.core.chunk_rest(seq__46042__$1);
var G__46762 = c__5568__auto__;
var G__46763 = cljs.core.count(c__5568__auto__);
var G__46764 = (0);
seq__46042 = G__46761;
chunk__46045 = G__46762;
count__46046 = G__46763;
i__46047 = G__46764;
continue;
} else {
var vec__46139 = cljs.core.first(seq__46042__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46139,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46139,(1),null);
var extend_via_metadata_46766 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_46767 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_46768 = sci.impl.vars.getName(proto_ns_46767);
var pns_str_46769 = (cljs.core.truth_(extend_via_metadata_46766)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_46768):null);
var seq__46142_46770 = cljs.core.seq(mmap);
var chunk__46143_46771 = null;
var count__46144_46772 = (0);
var i__46145_46773 = (0);
while(true){
if((i__46145_46773 < count__46144_46772)){
var vec__46160_46774 = chunk__46143_46771.cljs$core$IIndexed$_nth$arity$2(null,i__46145_46773);
var meth_name_46775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160_46774,(0),null);
var f_46776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160_46774,(1),null);
var meth_str_46777 = cljs.core.name(meth_name_46775);
var meth_sym_46778 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_46777);
var env_46779 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_46780 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_46779,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_46768,meth_sym_46778], null));
var multi_method_46781 = cljs.core.deref(multi_method_var_46780);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_46781,atype,(cljs.core.truth_(extend_via_metadata_46766)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_46769,meth_str_46777);
return ((function (seq__46142_46770,chunk__46143_46771,count__46144_46772,i__46145_46773,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46777,meth_sym_46778,env_46779,multi_method_var_46780,multi_method_46781,vec__46160_46774,meth_name_46775,f_46776,extend_via_metadata_46766,proto_ns_46767,pns_46768,pns_str_46769,vec__46139,proto,mmap,seq__46042__$1,temp__5804__auto__){
return (function() { 
var G__46788__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46776,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46776,this$,args);
}
};
var G__46788 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__46790__i = 0, G__46790__a = new Array(arguments.length -  1);
while (G__46790__i < G__46790__a.length) {G__46790__a[G__46790__i] = arguments[G__46790__i + 1]; ++G__46790__i;}
  args = new cljs.core.IndexedSeq(G__46790__a,0,null);
} 
return G__46788__delegate.call(this,this$,args);};
G__46788.cljs$lang$maxFixedArity = 1;
G__46788.cljs$lang$applyTo = (function (arglist__46791){
var this$ = cljs.core.first(arglist__46791);
var args = cljs.core.rest(arglist__46791);
return G__46788__delegate(this$,args);
});
G__46788.cljs$core$IFn$_invoke$arity$variadic = G__46788__delegate;
return G__46788;
})()
;
;})(seq__46142_46770,chunk__46143_46771,count__46144_46772,i__46145_46773,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46777,meth_sym_46778,env_46779,multi_method_var_46780,multi_method_46781,vec__46160_46774,meth_name_46775,f_46776,extend_via_metadata_46766,proto_ns_46767,pns_46768,pns_str_46769,vec__46139,proto,mmap,seq__46042__$1,temp__5804__auto__))
})():f_46776));


var G__46792 = seq__46142_46770;
var G__46793 = chunk__46143_46771;
var G__46794 = count__46144_46772;
var G__46795 = (i__46145_46773 + (1));
seq__46142_46770 = G__46792;
chunk__46143_46771 = G__46793;
count__46144_46772 = G__46794;
i__46145_46773 = G__46795;
continue;
} else {
var temp__5804__auto___46796__$1 = cljs.core.seq(seq__46142_46770);
if(temp__5804__auto___46796__$1){
var seq__46142_46797__$1 = temp__5804__auto___46796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46142_46797__$1)){
var c__5568__auto___46798 = cljs.core.chunk_first(seq__46142_46797__$1);
var G__46799 = cljs.core.chunk_rest(seq__46142_46797__$1);
var G__46800 = c__5568__auto___46798;
var G__46801 = cljs.core.count(c__5568__auto___46798);
var G__46802 = (0);
seq__46142_46770 = G__46799;
chunk__46143_46771 = G__46800;
count__46144_46772 = G__46801;
i__46145_46773 = G__46802;
continue;
} else {
var vec__46163_46803 = cljs.core.first(seq__46142_46797__$1);
var meth_name_46804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163_46803,(0),null);
var f_46805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46163_46803,(1),null);
var meth_str_46806 = cljs.core.name(meth_name_46804);
var meth_sym_46807 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_46806);
var env_46808 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_46809 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_46808,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_46768,meth_sym_46807], null));
var multi_method_46810 = cljs.core.deref(multi_method_var_46809);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_46810,atype,(cljs.core.truth_(extend_via_metadata_46766)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_46769,meth_str_46806);
return ((function (seq__46142_46770,chunk__46143_46771,count__46144_46772,i__46145_46773,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46806,meth_sym_46807,env_46808,multi_method_var_46809,multi_method_46810,vec__46163_46803,meth_name_46804,f_46805,seq__46142_46797__$1,temp__5804__auto___46796__$1,extend_via_metadata_46766,proto_ns_46767,pns_46768,pns_str_46769,vec__46139,proto,mmap,seq__46042__$1,temp__5804__auto__){
return (function() { 
var G__46811__delegate = function (this$,args){
var temp__5802__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5802__auto__)){
var m = temp__5802__auto__;
var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5802__auto____$1)){
var meth = temp__5802__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46805,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_46805,this$,args);
}
};
var G__46811 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__46813__i = 0, G__46813__a = new Array(arguments.length -  1);
while (G__46813__i < G__46813__a.length) {G__46813__a[G__46813__i] = arguments[G__46813__i + 1]; ++G__46813__i;}
  args = new cljs.core.IndexedSeq(G__46813__a,0,null);
} 
return G__46811__delegate.call(this,this$,args);};
G__46811.cljs$lang$maxFixedArity = 1;
G__46811.cljs$lang$applyTo = (function (arglist__46814){
var this$ = cljs.core.first(arglist__46814);
var args = cljs.core.rest(arglist__46814);
return G__46811__delegate(this$,args);
});
G__46811.cljs$core$IFn$_invoke$arity$variadic = G__46811__delegate;
return G__46811;
})()
;
;})(seq__46142_46770,chunk__46143_46771,count__46144_46772,i__46145_46773,seq__46042,chunk__46045,count__46046,i__46047,fq,meth_str_46806,meth_sym_46807,env_46808,multi_method_var_46809,multi_method_46810,vec__46163_46803,meth_name_46804,f_46805,seq__46142_46797__$1,temp__5804__auto___46796__$1,extend_via_metadata_46766,proto_ns_46767,pns_46768,pns_str_46769,vec__46139,proto,mmap,seq__46042__$1,temp__5804__auto__))
})():f_46805));


var G__46815 = cljs.core.next(seq__46142_46797__$1);
var G__46816 = null;
var G__46817 = (0);
var G__46818 = (0);
seq__46142_46770 = G__46815;
chunk__46143_46771 = G__46816;
count__46144_46772 = G__46817;
i__46145_46773 = G__46818;
continue;
}
} else {
}
}
break;
}


var G__46819 = cljs.core.next(seq__46042__$1);
var G__46820 = null;
var G__46821 = (0);
var G__46822 = (0);
seq__46042 = G__46819;
chunk__46045 = G__46820;
count__46046 = G__46821;
i__46047 = G__46822;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq46032){
var G__46033 = cljs.core.first(seq46032);
var seq46032__$1 = cljs.core.next(seq46032);
var G__46034 = cljs.core.first(seq46032__$1);
var seq46032__$2 = cljs.core.next(seq46032__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46033,G__46034,seq46032__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__46172){
var vec__46173 = p__46172;
var seq__46174 = cljs.core.seq(vec__46173);
var first__46175 = cljs.core.first(seq__46174);
var seq__46174__$1 = cljs.core.next(seq__46174);
var args = first__46175;
var body = seq__46174__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__46169__auto__","farg__46169__auto__",-1632927993,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__46170__auto__","m__46170__auto__",-698626185,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__46169__auto__","farg__46169__auto__",-1632927993,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__46171__auto__","meth__46171__auto__",1264019213,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__46170__auto__","m__46170__auto__",-698626185,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__46171__auto__","meth__46171__auto__",1264019213,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(type,meths,protocol_ns,extend_via_metadata){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46350){
var vec__46351 = p__46350;
var seq__46352 = cljs.core.seq(vec__46351);
var first__46353 = cljs.core.first(seq__46352);
var seq__46352__$1 = cljs.core.next(seq__46352);
var meth_name = first__46353;
var fn_body = seq__46352__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body):cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46326_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__46326_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_body], 0))):fn_body);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}),meths);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46824 = arguments.length;
var i__5770__auto___46825 = (0);
while(true){
if((i__5770__auto___46825 < len__5769__auto___46824)){
args__5775__auto__.push((arguments[i__5770__auto___46825]));

var G__46826 = (i__5770__auto___46825 + (1));
i__5770__auto___46825 = G__46826;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__46381_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__46381_SHARP_)));
}),impls);
var protocol_var = (function (){var G__46450 = ctx;
var G__46451 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__46452 = protocol_name;
var fexpr__46449 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__46449.cljs$core$IFn$_invoke$arity$3 ? fexpr__46449.cljs$core$IFn$_invoke$arity$3(G__46450,G__46451,G__46452) : fexpr__46449.call(null,G__46450,G__46451,G__46452));
})();
var protocol_data = cljs.core.deref(protocol_var);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46454){
var vec__46455 = p__46454;
var seq__46456 = cljs.core.seq(vec__46455);
var first__46457 = cljs.core.first(seq__46456);
var seq__46456__$1 = cljs.core.next(seq__46456);
var type = first__46457;
var meths = seq__46456__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(type,meths,pns,extend_via_metadata))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq46383){
var G__46384 = cljs.core.first(seq46383);
var seq46383__$1 = cljs.core.next(seq46383);
var G__46385 = cljs.core.first(seq46383__$1);
var seq46383__$2 = cljs.core.next(seq46383__$1);
var G__46386 = cljs.core.first(seq46383__$2);
var seq46383__$3 = cljs.core.next(seq46383__$2);
var G__46387 = cljs.core.first(seq46383__$3);
var seq46383__$4 = cljs.core.next(seq46383__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46384,G__46385,G__46386,G__46387,seq46383__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46827 = arguments.length;
var i__5770__auto___46828 = (0);
while(true){
if((i__5770__auto___46828 < len__5769__auto___46827)){
args__5775__auto__.push((arguments[i__5770__auto___46828]));

var G__46829 = (i__5770__auto___46828 + (1));
i__5770__auto___46828 = G__46829;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__46468_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__46468_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46510){
var vec__46511 = p__46510;
var seq__46512 = cljs.core.seq(vec__46511);
var first__46513 = cljs.core.first(seq__46512);
var seq__46512__$1 = cljs.core.next(seq__46512);
var proto = first__46513;
var meths = seq__46512__$1;
var protocol_var = (function (){var G__46516 = ctx;
var G__46517 = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var G__46518 = proto;
var fexpr__46515 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__46515.cljs$core$IFn$_invoke$arity$3 ? fexpr__46515.cljs$core$IFn$_invoke$arity$3(G__46516,G__46517,G__46518) : fexpr__46515.call(null,G__46516,G__46517,G__46518));
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),sci.impl.protocols.process_methods(atype,meths,pns,extend_via_metadata))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq46504){
var G__46505 = cljs.core.first(seq46504);
var seq46504__$1 = cljs.core.next(seq46504);
var G__46506 = cljs.core.first(seq46504__$1);
var seq46504__$2 = cljs.core.next(seq46504__$1);
var G__46507 = cljs.core.first(seq46504__$2);
var seq46504__$3 = cljs.core.next(seq46504__$2);
var G__46508 = cljs.core.first(seq46504__$3);
var seq46504__$4 = cljs.core.next(seq46504__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46505,G__46506,G__46507,G__46508,seq46504__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__46555_SHARP_){
var temp__5804__auto__ = cljs.core.get_method(p1__46555_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var ms = cljs.core.methods$(p1__46555_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5045__auto__ = (function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var pred__46556 = cljs.core._EQ_;
var expr__46557 = p;
if(cljs.core.truth_((pred__46556.cljs$core$IFn$_invoke$arity$2 ? pred__46556.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__46557) : pred__46556.call(null,cljs.core.IDeref,expr__46557)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__46556.cljs$core$IFn$_invoke$arity$2 ? pred__46556.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__46557) : pred__46556.call(null,cljs.core.ISwap,expr__46557)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__46556.cljs$core$IFn$_invoke$arity$2 ? pred__46556.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__46557) : pred__46556.call(null,cljs.core.IReset,expr__46557)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__46557)].join('')));
}
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((function (){var and__5043__auto__ = (clazz instanceof cljs.core.Symbol);
if(and__5043__auto__){
var G__46604 = clazz;
var G__46604__$1 = (((G__46604 == null))?null:cljs.core.meta(G__46604));
if((G__46604__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","record","sci.impl/record",-1939193950).cljs$core$IFn$_invoke$arity$1(G__46604__$1);
}
} else {
return and__5043__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__46607_SHARP_){
return cljs.core.get_method(p1__46607_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
