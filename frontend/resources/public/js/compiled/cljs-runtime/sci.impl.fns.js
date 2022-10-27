goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206).cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = new cljs.core.Keyword(null,"bindings-fn","bindings-fn",300799951).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(new cljs.core.Keyword(null,"disable-arity-checks","disable-arity-checks",1131364206));
var f = ((cljs.core.not(var_arg_name))?(function (){var G__46859 = (fixed_arity | (0));
switch (G__46859) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46864 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__46863){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46864,G__46863);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47814 = cljs.core._nth(recur_val,(0));
G__46863 = G__47814;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46866 = cljs.core._nth(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__46865){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46866,G__46865);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47816 = cljs.core._nth(recur_val,(0));
G__46865 = G__47816;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46869 = cljs.core._nth(params,(0));
var G__46870 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__46867,G__46868){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46869,G__46867);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46870,G__46868);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47817 = cljs.core._nth(recur_val,(0));
var G__47818 = cljs.core._nth(recur_val,(1));
G__46867 = G__47817;
G__46868 = G__47818;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46873 = cljs.core._nth(params,(0));
var G__46874 = cljs.core._nth(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__46871,G__46872){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46873,G__46871);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46874,G__46872);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47819 = cljs.core._nth(recur_val,(0));
var G__47820 = cljs.core._nth(recur_val,(1));
G__46871 = G__47819;
G__46872 = G__47820;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46878 = cljs.core._nth(params,(0));
var G__46879 = cljs.core._nth(params,(1));
var G__46880 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__46875,G__46876,G__46877){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46878,G__46875);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46879,G__46876);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46880,G__46877);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47822 = cljs.core._nth(recur_val,(0));
var G__47823 = cljs.core._nth(recur_val,(1));
var G__47824 = cljs.core._nth(recur_val,(2));
G__46875 = G__47822;
G__46876 = G__47823;
G__46877 = G__47824;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46884 = cljs.core._nth(params,(0));
var G__46885 = cljs.core._nth(params,(1));
var G__46886 = cljs.core._nth(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__46881,G__46882,G__46883){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46884,G__46881);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46885,G__46882);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46886,G__46883);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47826 = cljs.core._nth(recur_val,(0));
var G__47827 = cljs.core._nth(recur_val,(1));
var G__47828 = cljs.core._nth(recur_val,(2));
G__46881 = G__47826;
G__46882 = G__47827;
G__46883 = G__47828;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46891 = cljs.core._nth(params,(0));
var G__46892 = cljs.core._nth(params,(1));
var G__46893 = cljs.core._nth(params,(2));
var G__46894 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__46887,G__46888,G__46889,G__46890){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46891,G__46887);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46892,G__46888);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46893,G__46889);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46894,G__46890);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47830 = cljs.core._nth(recur_val,(0));
var G__47831 = cljs.core._nth(recur_val,(1));
var G__47832 = cljs.core._nth(recur_val,(2));
var G__47833 = cljs.core._nth(recur_val,(3));
G__46887 = G__47830;
G__46888 = G__47831;
G__46889 = G__47832;
G__46890 = G__47833;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46899 = cljs.core._nth(params,(0));
var G__46900 = cljs.core._nth(params,(1));
var G__46901 = cljs.core._nth(params,(2));
var G__46902 = cljs.core._nth(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__46895,G__46896,G__46897,G__46898){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46899,G__46895);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46900,G__46896);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46901,G__46897);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46902,G__46898);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47834 = cljs.core._nth(recur_val,(0));
var G__47835 = cljs.core._nth(recur_val,(1));
var G__47836 = cljs.core._nth(recur_val,(2));
var G__47837 = cljs.core._nth(recur_val,(3));
G__46895 = G__47834;
G__46896 = G__47835;
G__46897 = G__47836;
G__46898 = G__47837;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46908 = cljs.core._nth(params,(0));
var G__46909 = cljs.core._nth(params,(1));
var G__46910 = cljs.core._nth(params,(2));
var G__46911 = cljs.core._nth(params,(3));
var G__46912 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__46903,G__46904,G__46905,G__46906,G__46907){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46908,G__46903);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46909,G__46904);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46910,G__46905);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46911,G__46906);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46912,G__46907);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47838 = cljs.core._nth(recur_val,(0));
var G__47839 = cljs.core._nth(recur_val,(1));
var G__47840 = cljs.core._nth(recur_val,(2));
var G__47841 = cljs.core._nth(recur_val,(3));
var G__47842 = cljs.core._nth(recur_val,(4));
G__46903 = G__47838;
G__46904 = G__47839;
G__46905 = G__47840;
G__46906 = G__47841;
G__46907 = G__47842;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46918 = cljs.core._nth(params,(0));
var G__46919 = cljs.core._nth(params,(1));
var G__46920 = cljs.core._nth(params,(2));
var G__46921 = cljs.core._nth(params,(3));
var G__46922 = cljs.core._nth(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__46913,G__46914,G__46915,G__46916,G__46917){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46918,G__46913);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46919,G__46914);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46920,G__46915);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46921,G__46916);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46922,G__46917);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47843 = cljs.core._nth(recur_val,(0));
var G__47844 = cljs.core._nth(recur_val,(1));
var G__47845 = cljs.core._nth(recur_val,(2));
var G__47846 = cljs.core._nth(recur_val,(3));
var G__47847 = cljs.core._nth(recur_val,(4));
G__46913 = G__47843;
G__46914 = G__47844;
G__46915 = G__47845;
G__46916 = G__47846;
G__46917 = G__47847;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46929 = cljs.core._nth(params,(0));
var G__46930 = cljs.core._nth(params,(1));
var G__46931 = cljs.core._nth(params,(2));
var G__46932 = cljs.core._nth(params,(3));
var G__46933 = cljs.core._nth(params,(4));
var G__46934 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__46923,G__46924,G__46925,G__46926,G__46927,G__46928){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46929,G__46923);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46930,G__46924);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46931,G__46925);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46932,G__46926);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46933,G__46927);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__46934,G__46928);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47848 = cljs.core._nth(recur_val,(0));
var G__47849 = cljs.core._nth(recur_val,(1));
var G__47850 = cljs.core._nth(recur_val,(2));
var G__47851 = cljs.core._nth(recur_val,(3));
var G__47852 = cljs.core._nth(recur_val,(4));
var G__47853 = cljs.core._nth(recur_val,(5));
G__46923 = G__47848;
G__46924 = G__47849;
G__46925 = G__47850;
G__46926 = G__47851;
G__46927 = G__47852;
G__46928 = G__47853;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46941 = cljs.core._nth(params,(0));
var G__46942 = cljs.core._nth(params,(1));
var G__46943 = cljs.core._nth(params,(2));
var G__46944 = cljs.core._nth(params,(3));
var G__46945 = cljs.core._nth(params,(4));
var G__46946 = cljs.core._nth(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__46935,G__46936,G__46937,G__46938,G__46939,G__46940){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46941,G__46935);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46942,G__46936);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46943,G__46937);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46944,G__46938);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46945,G__46939);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__46946,G__46940);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47854 = cljs.core._nth(recur_val,(0));
var G__47855 = cljs.core._nth(recur_val,(1));
var G__47856 = cljs.core._nth(recur_val,(2));
var G__47857 = cljs.core._nth(recur_val,(3));
var G__47858 = cljs.core._nth(recur_val,(4));
var G__47859 = cljs.core._nth(recur_val,(5));
G__46935 = G__47854;
G__46936 = G__47855;
G__46937 = G__47856;
G__46938 = G__47857;
G__46939 = G__47858;
G__46940 = G__47859;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46955 = cljs.core._nth(params,(0));
var G__46956 = cljs.core._nth(params,(1));
var G__46957 = cljs.core._nth(params,(2));
var G__46958 = cljs.core._nth(params,(3));
var G__46959 = cljs.core._nth(params,(4));
var G__46960 = cljs.core._nth(params,(5));
var G__46961 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__46947,G__46948,G__46949,G__46950,G__46951,G__46952,G__46953){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46955,G__46947);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46956,G__46948);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46957,G__46949);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46958,G__46950);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46959,G__46951);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__46960,G__46952);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__46961,G__46953);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47860 = cljs.core._nth(recur_val,(0));
var G__47861 = cljs.core._nth(recur_val,(1));
var G__47862 = cljs.core._nth(recur_val,(2));
var G__47863 = cljs.core._nth(recur_val,(3));
var G__47864 = cljs.core._nth(recur_val,(4));
var G__47865 = cljs.core._nth(recur_val,(5));
var G__47866 = cljs.core._nth(recur_val,(6));
G__46947 = G__47860;
G__46948 = G__47861;
G__46949 = G__47862;
G__46950 = G__47863;
G__46951 = G__47864;
G__46952 = G__47865;
G__46953 = G__47866;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__46970 = cljs.core._nth(params,(0));
var G__46971 = cljs.core._nth(params,(1));
var G__46972 = cljs.core._nth(params,(2));
var G__46973 = cljs.core._nth(params,(3));
var G__46974 = cljs.core._nth(params,(4));
var G__46975 = cljs.core._nth(params,(5));
var G__46976 = cljs.core._nth(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__46963,G__46964,G__46965,G__46966,G__46967,G__46968,G__46969){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__46970,G__46963);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46971,G__46964);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46972,G__46965);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46973,G__46966);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46974,G__46967);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__46975,G__46968);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__46976,G__46969);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47872 = cljs.core._nth(recur_val,(0));
var G__47873 = cljs.core._nth(recur_val,(1));
var G__47874 = cljs.core._nth(recur_val,(2));
var G__47875 = cljs.core._nth(recur_val,(3));
var G__47876 = cljs.core._nth(recur_val,(4));
var G__47877 = cljs.core._nth(recur_val,(5));
var G__47878 = cljs.core._nth(recur_val,(6));
G__46963 = G__47872;
G__46964 = G__47873;
G__46965 = G__47874;
G__46966 = G__47875;
G__46967 = G__47876;
G__46968 = G__47877;
G__46969 = G__47878;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__46986 = cljs.core._nth(params,(0));
var G__46987 = cljs.core._nth(params,(1));
var G__46988 = cljs.core._nth(params,(2));
var G__46989 = cljs.core._nth(params,(3));
var G__46990 = cljs.core._nth(params,(4));
var G__46991 = cljs.core._nth(params,(5));
var G__46992 = cljs.core._nth(params,(6));
var G__46993 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__46978,G__46979,G__46980,G__46981,G__46982,G__46983,G__46984,G__46985){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__46986,G__46978);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__46987,G__46979);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__46988,G__46980);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__46989,G__46981);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__46990,G__46982);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__46991,G__46983);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__46992,G__46984);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__46993,G__46985);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47880 = cljs.core._nth(recur_val,(0));
var G__47881 = cljs.core._nth(recur_val,(1));
var G__47882 = cljs.core._nth(recur_val,(2));
var G__47883 = cljs.core._nth(recur_val,(3));
var G__47884 = cljs.core._nth(recur_val,(4));
var G__47885 = cljs.core._nth(recur_val,(5));
var G__47886 = cljs.core._nth(recur_val,(6));
var G__47887 = cljs.core._nth(recur_val,(7));
G__46978 = G__47880;
G__46979 = G__47881;
G__46980 = G__47882;
G__46981 = G__47883;
G__46982 = G__47884;
G__46983 = G__47885;
G__46984 = G__47886;
G__46985 = G__47887;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47009 = cljs.core._nth(params,(0));
var G__47011 = cljs.core._nth(params,(1));
var G__47012 = cljs.core._nth(params,(2));
var G__47013 = cljs.core._nth(params,(3));
var G__47014 = cljs.core._nth(params,(4));
var G__47015 = cljs.core._nth(params,(5));
var G__47016 = cljs.core._nth(params,(6));
var G__47017 = cljs.core._nth(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__47001,G__47002,G__47003,G__47004,G__47005,G__47006,G__47007,G__47008){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47009,G__47001);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47011,G__47002);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47012,G__47003);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47013,G__47004);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47014,G__47005);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47015,G__47006);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47016,G__47007);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47017,G__47008);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47890 = cljs.core._nth(recur_val,(0));
var G__47891 = cljs.core._nth(recur_val,(1));
var G__47892 = cljs.core._nth(recur_val,(2));
var G__47893 = cljs.core._nth(recur_val,(3));
var G__47894 = cljs.core._nth(recur_val,(4));
var G__47895 = cljs.core._nth(recur_val,(5));
var G__47896 = cljs.core._nth(recur_val,(6));
var G__47897 = cljs.core._nth(recur_val,(7));
G__47001 = G__47890;
G__47002 = G__47891;
G__47003 = G__47892;
G__47004 = G__47893;
G__47005 = G__47894;
G__47006 = G__47895;
G__47007 = G__47896;
G__47008 = G__47897;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47031 = cljs.core._nth(params,(0));
var G__47032 = cljs.core._nth(params,(1));
var G__47033 = cljs.core._nth(params,(2));
var G__47034 = cljs.core._nth(params,(3));
var G__47035 = cljs.core._nth(params,(4));
var G__47036 = cljs.core._nth(params,(5));
var G__47037 = cljs.core._nth(params,(6));
var G__47038 = cljs.core._nth(params,(7));
var G__47039 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__47022,G__47023,G__47024,G__47025,G__47026,G__47027,G__47028,G__47029,G__47030){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47031,G__47022);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47032,G__47023);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47033,G__47024);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47034,G__47025);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47035,G__47026);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47036,G__47027);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47037,G__47028);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47038,G__47029);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47039,G__47030);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47903 = cljs.core._nth(recur_val,(0));
var G__47904 = cljs.core._nth(recur_val,(1));
var G__47905 = cljs.core._nth(recur_val,(2));
var G__47906 = cljs.core._nth(recur_val,(3));
var G__47907 = cljs.core._nth(recur_val,(4));
var G__47908 = cljs.core._nth(recur_val,(5));
var G__47909 = cljs.core._nth(recur_val,(6));
var G__47910 = cljs.core._nth(recur_val,(7));
var G__47911 = cljs.core._nth(recur_val,(8));
G__47022 = G__47903;
G__47023 = G__47904;
G__47024 = G__47905;
G__47025 = G__47906;
G__47026 = G__47907;
G__47027 = G__47908;
G__47028 = G__47909;
G__47029 = G__47910;
G__47030 = G__47911;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47049 = cljs.core._nth(params,(0));
var G__47050 = cljs.core._nth(params,(1));
var G__47051 = cljs.core._nth(params,(2));
var G__47052 = cljs.core._nth(params,(3));
var G__47053 = cljs.core._nth(params,(4));
var G__47054 = cljs.core._nth(params,(5));
var G__47055 = cljs.core._nth(params,(6));
var G__47056 = cljs.core._nth(params,(7));
var G__47057 = cljs.core._nth(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__47040,G__47041,G__47042,G__47043,G__47044,G__47045,G__47046,G__47047,G__47048){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47049,G__47040);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47050,G__47041);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47051,G__47042);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47052,G__47043);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47053,G__47044);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47054,G__47045);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47055,G__47046);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47056,G__47047);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47057,G__47048);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47914 = cljs.core._nth(recur_val,(0));
var G__47915 = cljs.core._nth(recur_val,(1));
var G__47916 = cljs.core._nth(recur_val,(2));
var G__47917 = cljs.core._nth(recur_val,(3));
var G__47918 = cljs.core._nth(recur_val,(4));
var G__47919 = cljs.core._nth(recur_val,(5));
var G__47920 = cljs.core._nth(recur_val,(6));
var G__47921 = cljs.core._nth(recur_val,(7));
var G__47922 = cljs.core._nth(recur_val,(8));
G__47040 = G__47914;
G__47041 = G__47915;
G__47042 = G__47916;
G__47043 = G__47917;
G__47044 = G__47918;
G__47045 = G__47919;
G__47046 = G__47920;
G__47047 = G__47921;
G__47048 = G__47922;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47068 = cljs.core._nth(params,(0));
var G__47069 = cljs.core._nth(params,(1));
var G__47070 = cljs.core._nth(params,(2));
var G__47071 = cljs.core._nth(params,(3));
var G__47072 = cljs.core._nth(params,(4));
var G__47073 = cljs.core._nth(params,(5));
var G__47074 = cljs.core._nth(params,(6));
var G__47075 = cljs.core._nth(params,(7));
var G__47076 = cljs.core._nth(params,(8));
var G__47077 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__47058,G__47059,G__47060,G__47061,G__47062,G__47063,G__47064,G__47065,G__47066,G__47067){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47068,G__47058);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47069,G__47059);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47070,G__47060);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47071,G__47061);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47072,G__47062);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47073,G__47063);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47074,G__47064);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47075,G__47065);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47076,G__47066);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47077,G__47067);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47923 = cljs.core._nth(recur_val,(0));
var G__47924 = cljs.core._nth(recur_val,(1));
var G__47925 = cljs.core._nth(recur_val,(2));
var G__47926 = cljs.core._nth(recur_val,(3));
var G__47927 = cljs.core._nth(recur_val,(4));
var G__47928 = cljs.core._nth(recur_val,(5));
var G__47929 = cljs.core._nth(recur_val,(6));
var G__47930 = cljs.core._nth(recur_val,(7));
var G__47931 = cljs.core._nth(recur_val,(8));
var G__47932 = cljs.core._nth(recur_val,(9));
G__47058 = G__47923;
G__47059 = G__47924;
G__47060 = G__47925;
G__47061 = G__47926;
G__47062 = G__47927;
G__47063 = G__47928;
G__47064 = G__47929;
G__47065 = G__47930;
G__47066 = G__47931;
G__47067 = G__47932;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47088 = cljs.core._nth(params,(0));
var G__47089 = cljs.core._nth(params,(1));
var G__47090 = cljs.core._nth(params,(2));
var G__47091 = cljs.core._nth(params,(3));
var G__47092 = cljs.core._nth(params,(4));
var G__47093 = cljs.core._nth(params,(5));
var G__47094 = cljs.core._nth(params,(6));
var G__47095 = cljs.core._nth(params,(7));
var G__47096 = cljs.core._nth(params,(8));
var G__47097 = cljs.core._nth(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__47078,G__47079,G__47080,G__47081,G__47082,G__47083,G__47084,G__47085,G__47086,G__47087){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47088,G__47078);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47089,G__47079);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47090,G__47080);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47091,G__47081);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47092,G__47082);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47093,G__47083);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47094,G__47084);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47095,G__47085);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47096,G__47086);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47097,G__47087);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47935 = cljs.core._nth(recur_val,(0));
var G__47936 = cljs.core._nth(recur_val,(1));
var G__47937 = cljs.core._nth(recur_val,(2));
var G__47938 = cljs.core._nth(recur_val,(3));
var G__47939 = cljs.core._nth(recur_val,(4));
var G__47940 = cljs.core._nth(recur_val,(5));
var G__47941 = cljs.core._nth(recur_val,(6));
var G__47942 = cljs.core._nth(recur_val,(7));
var G__47943 = cljs.core._nth(recur_val,(8));
var G__47944 = cljs.core._nth(recur_val,(9));
G__47078 = G__47935;
G__47079 = G__47936;
G__47080 = G__47937;
G__47081 = G__47938;
G__47082 = G__47939;
G__47083 = G__47940;
G__47084 = G__47941;
G__47085 = G__47942;
G__47086 = G__47943;
G__47087 = G__47944;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47113 = cljs.core._nth(params,(0));
var G__47114 = cljs.core._nth(params,(1));
var G__47115 = cljs.core._nth(params,(2));
var G__47116 = cljs.core._nth(params,(3));
var G__47117 = cljs.core._nth(params,(4));
var G__47118 = cljs.core._nth(params,(5));
var G__47119 = cljs.core._nth(params,(6));
var G__47120 = cljs.core._nth(params,(7));
var G__47121 = cljs.core._nth(params,(8));
var G__47122 = cljs.core._nth(params,(9));
var G__47123 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__47102,G__47103,G__47104,G__47105,G__47106,G__47107,G__47108,G__47109,G__47110,G__47111,G__47112){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47113,G__47102);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47114,G__47103);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47115,G__47104);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47116,G__47105);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47117,G__47106);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47118,G__47107);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47119,G__47108);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47120,G__47109);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47121,G__47110);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47122,G__47111);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47123,G__47112);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47949 = cljs.core._nth(recur_val,(0));
var G__47950 = cljs.core._nth(recur_val,(1));
var G__47951 = cljs.core._nth(recur_val,(2));
var G__47952 = cljs.core._nth(recur_val,(3));
var G__47953 = cljs.core._nth(recur_val,(4));
var G__47954 = cljs.core._nth(recur_val,(5));
var G__47955 = cljs.core._nth(recur_val,(6));
var G__47956 = cljs.core._nth(recur_val,(7));
var G__47957 = cljs.core._nth(recur_val,(8));
var G__47958 = cljs.core._nth(recur_val,(9));
var G__47959 = cljs.core._nth(recur_val,(10));
G__47102 = G__47949;
G__47103 = G__47950;
G__47104 = G__47951;
G__47105 = G__47952;
G__47106 = G__47953;
G__47107 = G__47954;
G__47108 = G__47955;
G__47109 = G__47956;
G__47110 = G__47957;
G__47111 = G__47958;
G__47112 = G__47959;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47135 = cljs.core._nth(params,(0));
var G__47136 = cljs.core._nth(params,(1));
var G__47137 = cljs.core._nth(params,(2));
var G__47138 = cljs.core._nth(params,(3));
var G__47139 = cljs.core._nth(params,(4));
var G__47140 = cljs.core._nth(params,(5));
var G__47141 = cljs.core._nth(params,(6));
var G__47142 = cljs.core._nth(params,(7));
var G__47143 = cljs.core._nth(params,(8));
var G__47144 = cljs.core._nth(params,(9));
var G__47145 = cljs.core._nth(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__47124,G__47125,G__47126,G__47127,G__47128,G__47129,G__47130,G__47131,G__47132,G__47133,G__47134){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47135,G__47124);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47136,G__47125);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47137,G__47126);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47138,G__47127);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47139,G__47128);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47140,G__47129);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47141,G__47130);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47142,G__47131);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47143,G__47132);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47144,G__47133);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47145,G__47134);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47961 = cljs.core._nth(recur_val,(0));
var G__47962 = cljs.core._nth(recur_val,(1));
var G__47963 = cljs.core._nth(recur_val,(2));
var G__47964 = cljs.core._nth(recur_val,(3));
var G__47965 = cljs.core._nth(recur_val,(4));
var G__47966 = cljs.core._nth(recur_val,(5));
var G__47967 = cljs.core._nth(recur_val,(6));
var G__47968 = cljs.core._nth(recur_val,(7));
var G__47969 = cljs.core._nth(recur_val,(8));
var G__47970 = cljs.core._nth(recur_val,(9));
var G__47971 = cljs.core._nth(recur_val,(10));
G__47124 = G__47961;
G__47125 = G__47962;
G__47126 = G__47963;
G__47127 = G__47964;
G__47128 = G__47965;
G__47129 = G__47966;
G__47130 = G__47967;
G__47131 = G__47968;
G__47132 = G__47969;
G__47133 = G__47970;
G__47134 = G__47971;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47158 = cljs.core._nth(params,(0));
var G__47159 = cljs.core._nth(params,(1));
var G__47160 = cljs.core._nth(params,(2));
var G__47161 = cljs.core._nth(params,(3));
var G__47162 = cljs.core._nth(params,(4));
var G__47163 = cljs.core._nth(params,(5));
var G__47164 = cljs.core._nth(params,(6));
var G__47165 = cljs.core._nth(params,(7));
var G__47166 = cljs.core._nth(params,(8));
var G__47167 = cljs.core._nth(params,(9));
var G__47168 = cljs.core._nth(params,(10));
var G__47169 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__47146,G__47147,G__47148,G__47149,G__47150,G__47151,G__47152,G__47153,G__47154,G__47155,G__47156,G__47157){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47158,G__47146);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47159,G__47147);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47160,G__47148);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47161,G__47149);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47162,G__47150);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47163,G__47151);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47164,G__47152);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47165,G__47153);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47166,G__47154);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47167,G__47155);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47168,G__47156);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47169,G__47157);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47972 = cljs.core._nth(recur_val,(0));
var G__47973 = cljs.core._nth(recur_val,(1));
var G__47974 = cljs.core._nth(recur_val,(2));
var G__47975 = cljs.core._nth(recur_val,(3));
var G__47976 = cljs.core._nth(recur_val,(4));
var G__47977 = cljs.core._nth(recur_val,(5));
var G__47978 = cljs.core._nth(recur_val,(6));
var G__47979 = cljs.core._nth(recur_val,(7));
var G__47980 = cljs.core._nth(recur_val,(8));
var G__47981 = cljs.core._nth(recur_val,(9));
var G__47982 = cljs.core._nth(recur_val,(10));
var G__47983 = cljs.core._nth(recur_val,(11));
G__47146 = G__47972;
G__47147 = G__47973;
G__47148 = G__47974;
G__47149 = G__47975;
G__47150 = G__47976;
G__47151 = G__47977;
G__47152 = G__47978;
G__47153 = G__47979;
G__47154 = G__47980;
G__47155 = G__47981;
G__47156 = G__47982;
G__47157 = G__47983;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47183 = cljs.core._nth(params,(0));
var G__47184 = cljs.core._nth(params,(1));
var G__47185 = cljs.core._nth(params,(2));
var G__47186 = cljs.core._nth(params,(3));
var G__47187 = cljs.core._nth(params,(4));
var G__47188 = cljs.core._nth(params,(5));
var G__47189 = cljs.core._nth(params,(6));
var G__47190 = cljs.core._nth(params,(7));
var G__47191 = cljs.core._nth(params,(8));
var G__47192 = cljs.core._nth(params,(9));
var G__47193 = cljs.core._nth(params,(10));
var G__47194 = cljs.core._nth(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__47171,G__47172,G__47173,G__47174,G__47175,G__47176,G__47177,G__47178,G__47179,G__47180,G__47181,G__47182){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47183,G__47171);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47184,G__47172);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47185,G__47173);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47186,G__47174);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47187,G__47175);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47188,G__47176);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47189,G__47177);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47190,G__47178);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47191,G__47179);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47192,G__47180);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47193,G__47181);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47194,G__47182);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47984 = cljs.core._nth(recur_val,(0));
var G__47985 = cljs.core._nth(recur_val,(1));
var G__47986 = cljs.core._nth(recur_val,(2));
var G__47987 = cljs.core._nth(recur_val,(3));
var G__47988 = cljs.core._nth(recur_val,(4));
var G__47989 = cljs.core._nth(recur_val,(5));
var G__47990 = cljs.core._nth(recur_val,(6));
var G__47991 = cljs.core._nth(recur_val,(7));
var G__47992 = cljs.core._nth(recur_val,(8));
var G__47993 = cljs.core._nth(recur_val,(9));
var G__47994 = cljs.core._nth(recur_val,(10));
var G__47995 = cljs.core._nth(recur_val,(11));
G__47171 = G__47984;
G__47172 = G__47985;
G__47173 = G__47986;
G__47174 = G__47987;
G__47175 = G__47988;
G__47176 = G__47989;
G__47177 = G__47990;
G__47178 = G__47991;
G__47179 = G__47992;
G__47180 = G__47993;
G__47181 = G__47994;
G__47182 = G__47995;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47208 = cljs.core._nth(params,(0));
var G__47209 = cljs.core._nth(params,(1));
var G__47210 = cljs.core._nth(params,(2));
var G__47211 = cljs.core._nth(params,(3));
var G__47212 = cljs.core._nth(params,(4));
var G__47213 = cljs.core._nth(params,(5));
var G__47214 = cljs.core._nth(params,(6));
var G__47215 = cljs.core._nth(params,(7));
var G__47216 = cljs.core._nth(params,(8));
var G__47217 = cljs.core._nth(params,(9));
var G__47218 = cljs.core._nth(params,(10));
var G__47219 = cljs.core._nth(params,(11));
var G__47220 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__47195,G__47196,G__47197,G__47198,G__47199,G__47200,G__47201,G__47202,G__47203,G__47204,G__47205,G__47206,G__47207){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47208,G__47195);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47209,G__47196);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47210,G__47197);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47211,G__47198);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47212,G__47199);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47213,G__47200);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47214,G__47201);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47215,G__47202);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47216,G__47203);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47217,G__47204);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47218,G__47205);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47219,G__47206);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47220,G__47207);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__47996 = cljs.core._nth(recur_val,(0));
var G__47997 = cljs.core._nth(recur_val,(1));
var G__47998 = cljs.core._nth(recur_val,(2));
var G__47999 = cljs.core._nth(recur_val,(3));
var G__48000 = cljs.core._nth(recur_val,(4));
var G__48001 = cljs.core._nth(recur_val,(5));
var G__48002 = cljs.core._nth(recur_val,(6));
var G__48003 = cljs.core._nth(recur_val,(7));
var G__48004 = cljs.core._nth(recur_val,(8));
var G__48005 = cljs.core._nth(recur_val,(9));
var G__48006 = cljs.core._nth(recur_val,(10));
var G__48007 = cljs.core._nth(recur_val,(11));
var G__48008 = cljs.core._nth(recur_val,(12));
G__47195 = G__47996;
G__47196 = G__47997;
G__47197 = G__47998;
G__47198 = G__47999;
G__47199 = G__48000;
G__47200 = G__48001;
G__47201 = G__48002;
G__47202 = G__48003;
G__47203 = G__48004;
G__47204 = G__48005;
G__47205 = G__48006;
G__47206 = G__48007;
G__47207 = G__48008;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47235 = cljs.core._nth(params,(0));
var G__47236 = cljs.core._nth(params,(1));
var G__47237 = cljs.core._nth(params,(2));
var G__47238 = cljs.core._nth(params,(3));
var G__47239 = cljs.core._nth(params,(4));
var G__47240 = cljs.core._nth(params,(5));
var G__47241 = cljs.core._nth(params,(6));
var G__47242 = cljs.core._nth(params,(7));
var G__47243 = cljs.core._nth(params,(8));
var G__47244 = cljs.core._nth(params,(9));
var G__47245 = cljs.core._nth(params,(10));
var G__47246 = cljs.core._nth(params,(11));
var G__47247 = cljs.core._nth(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__47222,G__47223,G__47224,G__47225,G__47226,G__47227,G__47228,G__47229,G__47230,G__47231,G__47232,G__47233,G__47234){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47235,G__47222);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47236,G__47223);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47237,G__47224);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47238,G__47225);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47239,G__47226);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47240,G__47227);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47241,G__47228);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47242,G__47229);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47243,G__47230);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47244,G__47231);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47245,G__47232);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47246,G__47233);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47247,G__47234);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48011 = cljs.core._nth(recur_val,(0));
var G__48012 = cljs.core._nth(recur_val,(1));
var G__48013 = cljs.core._nth(recur_val,(2));
var G__48014 = cljs.core._nth(recur_val,(3));
var G__48015 = cljs.core._nth(recur_val,(4));
var G__48016 = cljs.core._nth(recur_val,(5));
var G__48017 = cljs.core._nth(recur_val,(6));
var G__48018 = cljs.core._nth(recur_val,(7));
var G__48019 = cljs.core._nth(recur_val,(8));
var G__48020 = cljs.core._nth(recur_val,(9));
var G__48021 = cljs.core._nth(recur_val,(10));
var G__48022 = cljs.core._nth(recur_val,(11));
var G__48023 = cljs.core._nth(recur_val,(12));
G__47222 = G__48011;
G__47223 = G__48012;
G__47224 = G__48013;
G__47225 = G__48014;
G__47226 = G__48015;
G__47227 = G__48016;
G__47228 = G__48017;
G__47229 = G__48018;
G__47230 = G__48019;
G__47231 = G__48020;
G__47232 = G__48021;
G__47233 = G__48022;
G__47234 = G__48023;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47264 = cljs.core._nth(params,(0));
var G__47265 = cljs.core._nth(params,(1));
var G__47266 = cljs.core._nth(params,(2));
var G__47267 = cljs.core._nth(params,(3));
var G__47268 = cljs.core._nth(params,(4));
var G__47269 = cljs.core._nth(params,(5));
var G__47270 = cljs.core._nth(params,(6));
var G__47271 = cljs.core._nth(params,(7));
var G__47272 = cljs.core._nth(params,(8));
var G__47273 = cljs.core._nth(params,(9));
var G__47274 = cljs.core._nth(params,(10));
var G__47275 = cljs.core._nth(params,(11));
var G__47276 = cljs.core._nth(params,(12));
var G__47277 = cljs.core._nth(params,(13));
var G__47278 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__47249,G__47250,G__47251,G__47252,G__47253,G__47254,G__47255,G__47256,G__47257,G__47258,G__47259,G__47260,G__47261,G__47262,G__47263){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47264,G__47249);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47265,G__47250);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47266,G__47251);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47267,G__47252);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47268,G__47253);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47269,G__47254);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47270,G__47255);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47271,G__47256);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47272,G__47257);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47273,G__47258);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47274,G__47259);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47275,G__47260);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47276,G__47261);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47277,G__47262);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47278,G__47263);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48028 = cljs.core._nth(recur_val,(0));
var G__48029 = cljs.core._nth(recur_val,(1));
var G__48030 = cljs.core._nth(recur_val,(2));
var G__48031 = cljs.core._nth(recur_val,(3));
var G__48032 = cljs.core._nth(recur_val,(4));
var G__48033 = cljs.core._nth(recur_val,(5));
var G__48034 = cljs.core._nth(recur_val,(6));
var G__48035 = cljs.core._nth(recur_val,(7));
var G__48036 = cljs.core._nth(recur_val,(8));
var G__48037 = cljs.core._nth(recur_val,(9));
var G__48038 = cljs.core._nth(recur_val,(10));
var G__48039 = cljs.core._nth(recur_val,(11));
var G__48040 = cljs.core._nth(recur_val,(12));
var G__48041 = cljs.core._nth(recur_val,(13));
var G__48042 = cljs.core._nth(recur_val,(14));
G__47249 = G__48028;
G__47250 = G__48029;
G__47251 = G__48030;
G__47252 = G__48031;
G__47253 = G__48032;
G__47254 = G__48033;
G__47255 = G__48034;
G__47256 = G__48035;
G__47257 = G__48036;
G__47258 = G__48037;
G__47259 = G__48038;
G__47260 = G__48039;
G__47261 = G__48040;
G__47262 = G__48041;
G__47263 = G__48042;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47294 = cljs.core._nth(params,(0));
var G__47295 = cljs.core._nth(params,(1));
var G__47296 = cljs.core._nth(params,(2));
var G__47297 = cljs.core._nth(params,(3));
var G__47298 = cljs.core._nth(params,(4));
var G__47299 = cljs.core._nth(params,(5));
var G__47300 = cljs.core._nth(params,(6));
var G__47301 = cljs.core._nth(params,(7));
var G__47302 = cljs.core._nth(params,(8));
var G__47303 = cljs.core._nth(params,(9));
var G__47304 = cljs.core._nth(params,(10));
var G__47305 = cljs.core._nth(params,(11));
var G__47306 = cljs.core._nth(params,(12));
var G__47307 = cljs.core._nth(params,(13));
var G__47308 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__47279,G__47280,G__47281,G__47282,G__47283,G__47284,G__47285,G__47286,G__47287,G__47288,G__47289,G__47290,G__47291,G__47292,G__47293){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47294,G__47279);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47295,G__47280);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47296,G__47281);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47297,G__47282);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47298,G__47283);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47299,G__47284);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47300,G__47285);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47301,G__47286);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47302,G__47287);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47303,G__47288);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47304,G__47289);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47305,G__47290);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47306,G__47291);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47307,G__47292);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47308,G__47293);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48045 = cljs.core._nth(recur_val,(0));
var G__48046 = cljs.core._nth(recur_val,(1));
var G__48047 = cljs.core._nth(recur_val,(2));
var G__48048 = cljs.core._nth(recur_val,(3));
var G__48049 = cljs.core._nth(recur_val,(4));
var G__48050 = cljs.core._nth(recur_val,(5));
var G__48051 = cljs.core._nth(recur_val,(6));
var G__48052 = cljs.core._nth(recur_val,(7));
var G__48053 = cljs.core._nth(recur_val,(8));
var G__48054 = cljs.core._nth(recur_val,(9));
var G__48055 = cljs.core._nth(recur_val,(10));
var G__48056 = cljs.core._nth(recur_val,(11));
var G__48057 = cljs.core._nth(recur_val,(12));
var G__48058 = cljs.core._nth(recur_val,(13));
var G__48059 = cljs.core._nth(recur_val,(14));
G__47279 = G__48045;
G__47280 = G__48046;
G__47281 = G__48047;
G__47282 = G__48048;
G__47283 = G__48049;
G__47284 = G__48050;
G__47285 = G__48051;
G__47286 = G__48052;
G__47287 = G__48053;
G__47288 = G__48054;
G__47289 = G__48055;
G__47290 = G__48056;
G__47291 = G__48057;
G__47292 = G__48058;
G__47293 = G__48059;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47329 = cljs.core._nth(params,(0));
var G__47330 = cljs.core._nth(params,(1));
var G__47331 = cljs.core._nth(params,(2));
var G__47332 = cljs.core._nth(params,(3));
var G__47333 = cljs.core._nth(params,(4));
var G__47334 = cljs.core._nth(params,(5));
var G__47335 = cljs.core._nth(params,(6));
var G__47336 = cljs.core._nth(params,(7));
var G__47337 = cljs.core._nth(params,(8));
var G__47338 = cljs.core._nth(params,(9));
var G__47339 = cljs.core._nth(params,(10));
var G__47340 = cljs.core._nth(params,(11));
var G__47341 = cljs.core._nth(params,(12));
var G__47342 = cljs.core._nth(params,(13));
var G__47343 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__47314,G__47315,G__47316,G__47317,G__47318,G__47319,G__47320,G__47321,G__47322,G__47323,G__47324,G__47325,G__47326,G__47327,G__47328){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47329,G__47314);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47330,G__47315);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47331,G__47316);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47332,G__47317);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47333,G__47318);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47334,G__47319);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47335,G__47320);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47336,G__47321);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47337,G__47322);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47338,G__47323);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47339,G__47324);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47340,G__47325);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47341,G__47326);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47342,G__47327);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47343,G__47328);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48064 = cljs.core._nth(recur_val,(0));
var G__48065 = cljs.core._nth(recur_val,(1));
var G__48066 = cljs.core._nth(recur_val,(2));
var G__48067 = cljs.core._nth(recur_val,(3));
var G__48068 = cljs.core._nth(recur_val,(4));
var G__48069 = cljs.core._nth(recur_val,(5));
var G__48070 = cljs.core._nth(recur_val,(6));
var G__48071 = cljs.core._nth(recur_val,(7));
var G__48072 = cljs.core._nth(recur_val,(8));
var G__48073 = cljs.core._nth(recur_val,(9));
var G__48074 = cljs.core._nth(recur_val,(10));
var G__48075 = cljs.core._nth(recur_val,(11));
var G__48076 = cljs.core._nth(recur_val,(12));
var G__48077 = cljs.core._nth(recur_val,(13));
var G__48078 = cljs.core._nth(recur_val,(14));
G__47314 = G__48064;
G__47315 = G__48065;
G__47316 = G__48066;
G__47317 = G__48067;
G__47318 = G__48068;
G__47319 = G__48069;
G__47320 = G__48070;
G__47321 = G__48071;
G__47322 = G__48072;
G__47323 = G__48073;
G__47324 = G__48074;
G__47325 = G__48075;
G__47326 = G__48076;
G__47327 = G__48077;
G__47328 = G__48078;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47364 = cljs.core._nth(params,(0));
var G__47365 = cljs.core._nth(params,(1));
var G__47366 = cljs.core._nth(params,(2));
var G__47367 = cljs.core._nth(params,(3));
var G__47368 = cljs.core._nth(params,(4));
var G__47369 = cljs.core._nth(params,(5));
var G__47370 = cljs.core._nth(params,(6));
var G__47371 = cljs.core._nth(params,(7));
var G__47372 = cljs.core._nth(params,(8));
var G__47373 = cljs.core._nth(params,(9));
var G__47374 = cljs.core._nth(params,(10));
var G__47375 = cljs.core._nth(params,(11));
var G__47376 = cljs.core._nth(params,(12));
var G__47377 = cljs.core._nth(params,(13));
var G__47378 = cljs.core._nth(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__47349,G__47350,G__47351,G__47352,G__47353,G__47354,G__47355,G__47356,G__47357,G__47358,G__47359,G__47360,G__47361,G__47362,G__47363){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47364,G__47349);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47365,G__47350);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47366,G__47351);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47367,G__47352);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47368,G__47353);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47369,G__47354);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47370,G__47355);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47371,G__47356);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47372,G__47357);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47373,G__47358);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47374,G__47359);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47375,G__47360);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47376,G__47361);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47377,G__47362);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47378,G__47363);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48082 = cljs.core._nth(recur_val,(0));
var G__48083 = cljs.core._nth(recur_val,(1));
var G__48084 = cljs.core._nth(recur_val,(2));
var G__48085 = cljs.core._nth(recur_val,(3));
var G__48086 = cljs.core._nth(recur_val,(4));
var G__48087 = cljs.core._nth(recur_val,(5));
var G__48088 = cljs.core._nth(recur_val,(6));
var G__48089 = cljs.core._nth(recur_val,(7));
var G__48090 = cljs.core._nth(recur_val,(8));
var G__48091 = cljs.core._nth(recur_val,(9));
var G__48092 = cljs.core._nth(recur_val,(10));
var G__48093 = cljs.core._nth(recur_val,(11));
var G__48094 = cljs.core._nth(recur_val,(12));
var G__48095 = cljs.core._nth(recur_val,(13));
var G__48096 = cljs.core._nth(recur_val,(14));
G__47349 = G__48082;
G__47350 = G__48083;
G__47351 = G__48084;
G__47352 = G__48085;
G__47353 = G__48086;
G__47354 = G__48087;
G__47355 = G__48088;
G__47356 = G__48089;
G__47357 = G__48090;
G__47358 = G__48091;
G__47359 = G__48092;
G__47360 = G__48093;
G__47361 = G__48094;
G__47362 = G__48095;
G__47363 = G__48096;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47395 = cljs.core._nth(params,(0));
var G__47396 = cljs.core._nth(params,(1));
var G__47397 = cljs.core._nth(params,(2));
var G__47398 = cljs.core._nth(params,(3));
var G__47399 = cljs.core._nth(params,(4));
var G__47400 = cljs.core._nth(params,(5));
var G__47401 = cljs.core._nth(params,(6));
var G__47402 = cljs.core._nth(params,(7));
var G__47403 = cljs.core._nth(params,(8));
var G__47404 = cljs.core._nth(params,(9));
var G__47405 = cljs.core._nth(params,(10));
var G__47406 = cljs.core._nth(params,(11));
var G__47407 = cljs.core._nth(params,(12));
var G__47408 = cljs.core._nth(params,(13));
var G__47409 = cljs.core._nth(params,(14));
var G__47410 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__47379,G__47380,G__47381,G__47382,G__47383,G__47384,G__47385,G__47386,G__47387,G__47388,G__47389,G__47390,G__47391,G__47392,G__47393,G__47394){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47395,G__47379);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47396,G__47380);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47397,G__47381);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47398,G__47382);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47399,G__47383);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47400,G__47384);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47401,G__47385);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47402,G__47386);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47403,G__47387);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47404,G__47388);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47405,G__47389);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47406,G__47390);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47407,G__47391);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47408,G__47392);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47409,G__47393);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47410,G__47394);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48098 = cljs.core._nth(recur_val,(0));
var G__48099 = cljs.core._nth(recur_val,(1));
var G__48100 = cljs.core._nth(recur_val,(2));
var G__48101 = cljs.core._nth(recur_val,(3));
var G__48102 = cljs.core._nth(recur_val,(4));
var G__48103 = cljs.core._nth(recur_val,(5));
var G__48104 = cljs.core._nth(recur_val,(6));
var G__48105 = cljs.core._nth(recur_val,(7));
var G__48106 = cljs.core._nth(recur_val,(8));
var G__48107 = cljs.core._nth(recur_val,(9));
var G__48108 = cljs.core._nth(recur_val,(10));
var G__48109 = cljs.core._nth(recur_val,(11));
var G__48110 = cljs.core._nth(recur_val,(12));
var G__48111 = cljs.core._nth(recur_val,(13));
var G__48112 = cljs.core._nth(recur_val,(14));
var G__48113 = cljs.core._nth(recur_val,(15));
G__47379 = G__48098;
G__47380 = G__48099;
G__47381 = G__48100;
G__47382 = G__48101;
G__47383 = G__48102;
G__47384 = G__48103;
G__47385 = G__48104;
G__47386 = G__48105;
G__47387 = G__48106;
G__47388 = G__48107;
G__47389 = G__48108;
G__47390 = G__48109;
G__47391 = G__48110;
G__47392 = G__48111;
G__47393 = G__48112;
G__47394 = G__48113;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47427 = cljs.core._nth(params,(0));
var G__47428 = cljs.core._nth(params,(1));
var G__47429 = cljs.core._nth(params,(2));
var G__47430 = cljs.core._nth(params,(3));
var G__47431 = cljs.core._nth(params,(4));
var G__47432 = cljs.core._nth(params,(5));
var G__47433 = cljs.core._nth(params,(6));
var G__47434 = cljs.core._nth(params,(7));
var G__47435 = cljs.core._nth(params,(8));
var G__47436 = cljs.core._nth(params,(9));
var G__47437 = cljs.core._nth(params,(10));
var G__47438 = cljs.core._nth(params,(11));
var G__47439 = cljs.core._nth(params,(12));
var G__47440 = cljs.core._nth(params,(13));
var G__47441 = cljs.core._nth(params,(14));
var G__47442 = cljs.core._nth(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__47411,G__47412,G__47413,G__47414,G__47415,G__47416,G__47417,G__47418,G__47419,G__47420,G__47421,G__47422,G__47423,G__47424,G__47425,G__47426){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47427,G__47411);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47428,G__47412);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47429,G__47413);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47430,G__47414);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47431,G__47415);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47432,G__47416);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47433,G__47417);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47434,G__47418);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47435,G__47419);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47436,G__47420);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47437,G__47421);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47438,G__47422);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47439,G__47423);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47440,G__47424);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47441,G__47425);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47442,G__47426);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48115 = cljs.core._nth(recur_val,(0));
var G__48116 = cljs.core._nth(recur_val,(1));
var G__48117 = cljs.core._nth(recur_val,(2));
var G__48118 = cljs.core._nth(recur_val,(3));
var G__48119 = cljs.core._nth(recur_val,(4));
var G__48120 = cljs.core._nth(recur_val,(5));
var G__48121 = cljs.core._nth(recur_val,(6));
var G__48122 = cljs.core._nth(recur_val,(7));
var G__48123 = cljs.core._nth(recur_val,(8));
var G__48124 = cljs.core._nth(recur_val,(9));
var G__48125 = cljs.core._nth(recur_val,(10));
var G__48126 = cljs.core._nth(recur_val,(11));
var G__48127 = cljs.core._nth(recur_val,(12));
var G__48128 = cljs.core._nth(recur_val,(13));
var G__48129 = cljs.core._nth(recur_val,(14));
var G__48130 = cljs.core._nth(recur_val,(15));
G__47411 = G__48115;
G__47412 = G__48116;
G__47413 = G__48117;
G__47414 = G__48118;
G__47415 = G__48119;
G__47416 = G__48120;
G__47417 = G__48121;
G__47418 = G__48122;
G__47419 = G__48123;
G__47420 = G__48124;
G__47421 = G__48125;
G__47422 = G__48126;
G__47423 = G__48127;
G__47424 = G__48128;
G__47425 = G__48129;
G__47426 = G__48130;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47470 = cljs.core._nth(params,(0));
var G__47471 = cljs.core._nth(params,(1));
var G__47472 = cljs.core._nth(params,(2));
var G__47473 = cljs.core._nth(params,(3));
var G__47474 = cljs.core._nth(params,(4));
var G__47475 = cljs.core._nth(params,(5));
var G__47476 = cljs.core._nth(params,(6));
var G__47477 = cljs.core._nth(params,(7));
var G__47478 = cljs.core._nth(params,(8));
var G__47479 = cljs.core._nth(params,(9));
var G__47480 = cljs.core._nth(params,(10));
var G__47481 = cljs.core._nth(params,(11));
var G__47482 = cljs.core._nth(params,(12));
var G__47483 = cljs.core._nth(params,(13));
var G__47484 = cljs.core._nth(params,(14));
var G__47485 = cljs.core._nth(params,(15));
var G__47486 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__47453,G__47454,G__47455,G__47456,G__47457,G__47458,G__47459,G__47460,G__47461,G__47462,G__47463,G__47464,G__47465,G__47466,G__47467,G__47468,G__47469){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47470,G__47453);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47471,G__47454);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47472,G__47455);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47473,G__47456);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47474,G__47457);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47475,G__47458);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47476,G__47459);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47477,G__47460);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47478,G__47461);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47479,G__47462);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47480,G__47463);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47481,G__47464);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47482,G__47465);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47483,G__47466);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47484,G__47467);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47485,G__47468);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47486,G__47469);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48133 = cljs.core._nth(recur_val,(0));
var G__48134 = cljs.core._nth(recur_val,(1));
var G__48135 = cljs.core._nth(recur_val,(2));
var G__48136 = cljs.core._nth(recur_val,(3));
var G__48137 = cljs.core._nth(recur_val,(4));
var G__48138 = cljs.core._nth(recur_val,(5));
var G__48139 = cljs.core._nth(recur_val,(6));
var G__48140 = cljs.core._nth(recur_val,(7));
var G__48141 = cljs.core._nth(recur_val,(8));
var G__48142 = cljs.core._nth(recur_val,(9));
var G__48143 = cljs.core._nth(recur_val,(10));
var G__48144 = cljs.core._nth(recur_val,(11));
var G__48145 = cljs.core._nth(recur_val,(12));
var G__48146 = cljs.core._nth(recur_val,(13));
var G__48147 = cljs.core._nth(recur_val,(14));
var G__48148 = cljs.core._nth(recur_val,(15));
var G__48149 = cljs.core._nth(recur_val,(16));
G__47453 = G__48133;
G__47454 = G__48134;
G__47455 = G__48135;
G__47456 = G__48136;
G__47457 = G__48137;
G__47458 = G__48138;
G__47459 = G__48139;
G__47460 = G__48140;
G__47461 = G__48141;
G__47462 = G__48142;
G__47463 = G__48143;
G__47464 = G__48144;
G__47465 = G__48145;
G__47466 = G__48146;
G__47467 = G__48147;
G__47468 = G__48148;
G__47469 = G__48149;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47514 = cljs.core._nth(params,(0));
var G__47515 = cljs.core._nth(params,(1));
var G__47516 = cljs.core._nth(params,(2));
var G__47517 = cljs.core._nth(params,(3));
var G__47518 = cljs.core._nth(params,(4));
var G__47519 = cljs.core._nth(params,(5));
var G__47520 = cljs.core._nth(params,(6));
var G__47521 = cljs.core._nth(params,(7));
var G__47522 = cljs.core._nth(params,(8));
var G__47523 = cljs.core._nth(params,(9));
var G__47524 = cljs.core._nth(params,(10));
var G__47525 = cljs.core._nth(params,(11));
var G__47526 = cljs.core._nth(params,(12));
var G__47527 = cljs.core._nth(params,(13));
var G__47528 = cljs.core._nth(params,(14));
var G__47529 = cljs.core._nth(params,(15));
var G__47530 = cljs.core._nth(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__47497,G__47498,G__47499,G__47500,G__47501,G__47502,G__47503,G__47504,G__47505,G__47506,G__47507,G__47508,G__47509,G__47510,G__47511,G__47512,G__47513){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47514,G__47497);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47515,G__47498);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47516,G__47499);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47517,G__47500);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47518,G__47501);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47519,G__47502);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47520,G__47503);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47521,G__47504);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47522,G__47505);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47523,G__47506);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47524,G__47507);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47525,G__47508);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47526,G__47509);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47527,G__47510);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47528,G__47511);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47529,G__47512);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47530,G__47513);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48151 = cljs.core._nth(recur_val,(0));
var G__48152 = cljs.core._nth(recur_val,(1));
var G__48153 = cljs.core._nth(recur_val,(2));
var G__48154 = cljs.core._nth(recur_val,(3));
var G__48155 = cljs.core._nth(recur_val,(4));
var G__48156 = cljs.core._nth(recur_val,(5));
var G__48157 = cljs.core._nth(recur_val,(6));
var G__48158 = cljs.core._nth(recur_val,(7));
var G__48159 = cljs.core._nth(recur_val,(8));
var G__48160 = cljs.core._nth(recur_val,(9));
var G__48161 = cljs.core._nth(recur_val,(10));
var G__48162 = cljs.core._nth(recur_val,(11));
var G__48163 = cljs.core._nth(recur_val,(12));
var G__48164 = cljs.core._nth(recur_val,(13));
var G__48165 = cljs.core._nth(recur_val,(14));
var G__48166 = cljs.core._nth(recur_val,(15));
var G__48167 = cljs.core._nth(recur_val,(16));
G__47497 = G__48151;
G__47498 = G__48152;
G__47499 = G__48153;
G__47500 = G__48154;
G__47501 = G__48155;
G__47502 = G__48156;
G__47503 = G__48157;
G__47504 = G__48158;
G__47505 = G__48159;
G__47506 = G__48160;
G__47507 = G__48161;
G__47508 = G__48162;
G__47509 = G__48163;
G__47510 = G__48164;
G__47511 = G__48165;
G__47512 = G__48166;
G__47513 = G__48167;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47549 = cljs.core._nth(params,(0));
var G__47550 = cljs.core._nth(params,(1));
var G__47551 = cljs.core._nth(params,(2));
var G__47552 = cljs.core._nth(params,(3));
var G__47553 = cljs.core._nth(params,(4));
var G__47554 = cljs.core._nth(params,(5));
var G__47555 = cljs.core._nth(params,(6));
var G__47556 = cljs.core._nth(params,(7));
var G__47557 = cljs.core._nth(params,(8));
var G__47558 = cljs.core._nth(params,(9));
var G__47559 = cljs.core._nth(params,(10));
var G__47560 = cljs.core._nth(params,(11));
var G__47561 = cljs.core._nth(params,(12));
var G__47562 = cljs.core._nth(params,(13));
var G__47563 = cljs.core._nth(params,(14));
var G__47564 = cljs.core._nth(params,(15));
var G__47565 = cljs.core._nth(params,(16));
var G__47566 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__47531,G__47532,G__47533,G__47534,G__47535,G__47536,G__47537,G__47538,G__47539,G__47540,G__47541,G__47542,G__47543,G__47544,G__47545,G__47546,G__47547,G__47548){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47549,G__47531);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47550,G__47532);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47551,G__47533);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47552,G__47534);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47553,G__47535);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47554,G__47536);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47555,G__47537);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47556,G__47538);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47557,G__47539);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47558,G__47540);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47559,G__47541);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47560,G__47542);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47561,G__47543);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47562,G__47544);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47563,G__47545);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47564,G__47546);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47565,G__47547);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47566,G__47548);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48168 = cljs.core._nth(recur_val,(0));
var G__48169 = cljs.core._nth(recur_val,(1));
var G__48170 = cljs.core._nth(recur_val,(2));
var G__48171 = cljs.core._nth(recur_val,(3));
var G__48172 = cljs.core._nth(recur_val,(4));
var G__48173 = cljs.core._nth(recur_val,(5));
var G__48174 = cljs.core._nth(recur_val,(6));
var G__48175 = cljs.core._nth(recur_val,(7));
var G__48176 = cljs.core._nth(recur_val,(8));
var G__48177 = cljs.core._nth(recur_val,(9));
var G__48178 = cljs.core._nth(recur_val,(10));
var G__48179 = cljs.core._nth(recur_val,(11));
var G__48180 = cljs.core._nth(recur_val,(12));
var G__48181 = cljs.core._nth(recur_val,(13));
var G__48182 = cljs.core._nth(recur_val,(14));
var G__48183 = cljs.core._nth(recur_val,(15));
var G__48184 = cljs.core._nth(recur_val,(16));
var G__48185 = cljs.core._nth(recur_val,(17));
G__47531 = G__48168;
G__47532 = G__48169;
G__47533 = G__48170;
G__47534 = G__48171;
G__47535 = G__48172;
G__47536 = G__48173;
G__47537 = G__48174;
G__47538 = G__48175;
G__47539 = G__48176;
G__47540 = G__48177;
G__47541 = G__48178;
G__47542 = G__48179;
G__47543 = G__48180;
G__47544 = G__48181;
G__47545 = G__48182;
G__47546 = G__48183;
G__47547 = G__48184;
G__47548 = G__48185;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47588 = cljs.core._nth(params,(0));
var G__47589 = cljs.core._nth(params,(1));
var G__47590 = cljs.core._nth(params,(2));
var G__47591 = cljs.core._nth(params,(3));
var G__47592 = cljs.core._nth(params,(4));
var G__47593 = cljs.core._nth(params,(5));
var G__47594 = cljs.core._nth(params,(6));
var G__47595 = cljs.core._nth(params,(7));
var G__47596 = cljs.core._nth(params,(8));
var G__47597 = cljs.core._nth(params,(9));
var G__47598 = cljs.core._nth(params,(10));
var G__47599 = cljs.core._nth(params,(11));
var G__47600 = cljs.core._nth(params,(12));
var G__47601 = cljs.core._nth(params,(13));
var G__47602 = cljs.core._nth(params,(14));
var G__47603 = cljs.core._nth(params,(15));
var G__47604 = cljs.core._nth(params,(16));
var G__47605 = cljs.core._nth(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__47570,G__47571,G__47572,G__47573,G__47574,G__47575,G__47576,G__47577,G__47578,G__47579,G__47580,G__47581,G__47582,G__47583,G__47584,G__47585,G__47586,G__47587){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47588,G__47570);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47589,G__47571);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47590,G__47572);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47591,G__47573);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47592,G__47574);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47593,G__47575);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47594,G__47576);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47595,G__47577);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47596,G__47578);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47597,G__47579);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47598,G__47580);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47599,G__47581);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47600,G__47582);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47601,G__47583);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47602,G__47584);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47603,G__47585);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47604,G__47586);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47605,G__47587);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48186 = cljs.core._nth(recur_val,(0));
var G__48187 = cljs.core._nth(recur_val,(1));
var G__48188 = cljs.core._nth(recur_val,(2));
var G__48189 = cljs.core._nth(recur_val,(3));
var G__48190 = cljs.core._nth(recur_val,(4));
var G__48191 = cljs.core._nth(recur_val,(5));
var G__48192 = cljs.core._nth(recur_val,(6));
var G__48193 = cljs.core._nth(recur_val,(7));
var G__48194 = cljs.core._nth(recur_val,(8));
var G__48195 = cljs.core._nth(recur_val,(9));
var G__48196 = cljs.core._nth(recur_val,(10));
var G__48197 = cljs.core._nth(recur_val,(11));
var G__48198 = cljs.core._nth(recur_val,(12));
var G__48199 = cljs.core._nth(recur_val,(13));
var G__48200 = cljs.core._nth(recur_val,(14));
var G__48201 = cljs.core._nth(recur_val,(15));
var G__48202 = cljs.core._nth(recur_val,(16));
var G__48203 = cljs.core._nth(recur_val,(17));
G__47570 = G__48186;
G__47571 = G__48187;
G__47572 = G__48188;
G__47573 = G__48189;
G__47574 = G__48190;
G__47575 = G__48191;
G__47576 = G__48192;
G__47577 = G__48193;
G__47578 = G__48194;
G__47579 = G__48195;
G__47580 = G__48196;
G__47581 = G__48197;
G__47582 = G__48198;
G__47583 = G__48199;
G__47584 = G__48200;
G__47585 = G__48201;
G__47586 = G__48202;
G__47587 = G__48203;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47629 = cljs.core._nth(params,(0));
var G__47630 = cljs.core._nth(params,(1));
var G__47631 = cljs.core._nth(params,(2));
var G__47632 = cljs.core._nth(params,(3));
var G__47633 = cljs.core._nth(params,(4));
var G__47634 = cljs.core._nth(params,(5));
var G__47635 = cljs.core._nth(params,(6));
var G__47636 = cljs.core._nth(params,(7));
var G__47637 = cljs.core._nth(params,(8));
var G__47638 = cljs.core._nth(params,(9));
var G__47639 = cljs.core._nth(params,(10));
var G__47640 = cljs.core._nth(params,(11));
var G__47641 = cljs.core._nth(params,(12));
var G__47642 = cljs.core._nth(params,(13));
var G__47643 = cljs.core._nth(params,(14));
var G__47644 = cljs.core._nth(params,(15));
var G__47645 = cljs.core._nth(params,(16));
var G__47646 = cljs.core._nth(params,(17));
var G__47647 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__47610,G__47611,G__47612,G__47613,G__47614,G__47615,G__47616,G__47617,G__47618,G__47619,G__47620,G__47621,G__47622,G__47623,G__47624,G__47625,G__47626,G__47627,G__47628){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47629,G__47610);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47630,G__47611);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47631,G__47612);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47632,G__47613);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47633,G__47614);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47634,G__47615);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47635,G__47616);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47636,G__47617);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47637,G__47618);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47638,G__47619);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47639,G__47620);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47640,G__47621);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47641,G__47622);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47642,G__47623);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47643,G__47624);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47644,G__47625);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47645,G__47626);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47646,G__47627);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__47647,G__47628);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48205 = cljs.core._nth(recur_val,(0));
var G__48206 = cljs.core._nth(recur_val,(1));
var G__48207 = cljs.core._nth(recur_val,(2));
var G__48208 = cljs.core._nth(recur_val,(3));
var G__48209 = cljs.core._nth(recur_val,(4));
var G__48210 = cljs.core._nth(recur_val,(5));
var G__48211 = cljs.core._nth(recur_val,(6));
var G__48212 = cljs.core._nth(recur_val,(7));
var G__48213 = cljs.core._nth(recur_val,(8));
var G__48214 = cljs.core._nth(recur_val,(9));
var G__48215 = cljs.core._nth(recur_val,(10));
var G__48216 = cljs.core._nth(recur_val,(11));
var G__48217 = cljs.core._nth(recur_val,(12));
var G__48218 = cljs.core._nth(recur_val,(13));
var G__48219 = cljs.core._nth(recur_val,(14));
var G__48220 = cljs.core._nth(recur_val,(15));
var G__48221 = cljs.core._nth(recur_val,(16));
var G__48222 = cljs.core._nth(recur_val,(17));
var G__48223 = cljs.core._nth(recur_val,(18));
G__47610 = G__48205;
G__47611 = G__48206;
G__47612 = G__48207;
G__47613 = G__48208;
G__47614 = G__48209;
G__47615 = G__48210;
G__47616 = G__48211;
G__47617 = G__48212;
G__47618 = G__48213;
G__47619 = G__48214;
G__47620 = G__48215;
G__47621 = G__48216;
G__47622 = G__48217;
G__47623 = G__48218;
G__47624 = G__48219;
G__47625 = G__48220;
G__47626 = G__48221;
G__47627 = G__48222;
G__47628 = G__48223;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47670 = cljs.core._nth(params,(0));
var G__47671 = cljs.core._nth(params,(1));
var G__47672 = cljs.core._nth(params,(2));
var G__47673 = cljs.core._nth(params,(3));
var G__47674 = cljs.core._nth(params,(4));
var G__47675 = cljs.core._nth(params,(5));
var G__47676 = cljs.core._nth(params,(6));
var G__47677 = cljs.core._nth(params,(7));
var G__47678 = cljs.core._nth(params,(8));
var G__47679 = cljs.core._nth(params,(9));
var G__47680 = cljs.core._nth(params,(10));
var G__47681 = cljs.core._nth(params,(11));
var G__47682 = cljs.core._nth(params,(12));
var G__47683 = cljs.core._nth(params,(13));
var G__47684 = cljs.core._nth(params,(14));
var G__47685 = cljs.core._nth(params,(15));
var G__47686 = cljs.core._nth(params,(16));
var G__47687 = cljs.core._nth(params,(17));
var G__47688 = cljs.core._nth(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__47651,G__47652,G__47653,G__47654,G__47655,G__47656,G__47657,G__47658,G__47659,G__47660,G__47661,G__47662,G__47663,G__47664,G__47665,G__47666,G__47667,G__47668,G__47669){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47670,G__47651);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47671,G__47652);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47672,G__47653);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47673,G__47654);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47674,G__47655);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47675,G__47656);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47676,G__47657);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47677,G__47658);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47678,G__47659);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47679,G__47660);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47680,G__47661);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47681,G__47662);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47682,G__47663);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47683,G__47664);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47684,G__47665);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47685,G__47666);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47686,G__47667);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47687,G__47668);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__47688,G__47669);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48234 = cljs.core._nth(recur_val,(0));
var G__48235 = cljs.core._nth(recur_val,(1));
var G__48236 = cljs.core._nth(recur_val,(2));
var G__48237 = cljs.core._nth(recur_val,(3));
var G__48238 = cljs.core._nth(recur_val,(4));
var G__48239 = cljs.core._nth(recur_val,(5));
var G__48240 = cljs.core._nth(recur_val,(6));
var G__48241 = cljs.core._nth(recur_val,(7));
var G__48242 = cljs.core._nth(recur_val,(8));
var G__48243 = cljs.core._nth(recur_val,(9));
var G__48244 = cljs.core._nth(recur_val,(10));
var G__48245 = cljs.core._nth(recur_val,(11));
var G__48246 = cljs.core._nth(recur_val,(12));
var G__48247 = cljs.core._nth(recur_val,(13));
var G__48248 = cljs.core._nth(recur_val,(14));
var G__48249 = cljs.core._nth(recur_val,(15));
var G__48250 = cljs.core._nth(recur_val,(16));
var G__48251 = cljs.core._nth(recur_val,(17));
var G__48252 = cljs.core._nth(recur_val,(18));
G__47651 = G__48234;
G__47652 = G__48235;
G__47653 = G__48236;
G__47654 = G__48237;
G__47655 = G__48238;
G__47656 = G__48239;
G__47657 = G__48240;
G__47658 = G__48241;
G__47659 = G__48242;
G__47660 = G__48243;
G__47661 = G__48244;
G__47662 = G__48245;
G__47663 = G__48246;
G__47664 = G__48247;
G__47665 = G__48248;
G__47666 = G__48249;
G__47667 = G__48250;
G__47668 = G__48251;
G__47669 = G__48252;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__47711 = cljs.core._nth(params,(0));
var G__47712 = cljs.core._nth(params,(1));
var G__47713 = cljs.core._nth(params,(2));
var G__47714 = cljs.core._nth(params,(3));
var G__47715 = cljs.core._nth(params,(4));
var G__47716 = cljs.core._nth(params,(5));
var G__47717 = cljs.core._nth(params,(6));
var G__47718 = cljs.core._nth(params,(7));
var G__47719 = cljs.core._nth(params,(8));
var G__47720 = cljs.core._nth(params,(9));
var G__47721 = cljs.core._nth(params,(10));
var G__47722 = cljs.core._nth(params,(11));
var G__47723 = cljs.core._nth(params,(12));
var G__47724 = cljs.core._nth(params,(13));
var G__47725 = cljs.core._nth(params,(14));
var G__47726 = cljs.core._nth(params,(15));
var G__47727 = cljs.core._nth(params,(16));
var G__47728 = cljs.core._nth(params,(17));
var G__47729 = cljs.core._nth(params,(18));
var G__47730 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__47691,G__47692,G__47693,G__47694,G__47695,G__47696,G__47697,G__47698,G__47699,G__47700,G__47701,G__47702,G__47703,G__47704,G__47705,G__47706,G__47707,G__47708,G__47709,G__47710){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__47711,G__47691);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47712,G__47692);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47713,G__47693);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47714,G__47694);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47715,G__47695);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47716,G__47696);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47717,G__47697);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47718,G__47698);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47719,G__47699);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47720,G__47700);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47721,G__47701);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47722,G__47702);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47723,G__47703);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47724,G__47704);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47725,G__47705);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47726,G__47706);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47727,G__47707);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47728,G__47708);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__47729,G__47709);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__47730,G__47710);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48274 = cljs.core._nth(recur_val,(0));
var G__48275 = cljs.core._nth(recur_val,(1));
var G__48276 = cljs.core._nth(recur_val,(2));
var G__48277 = cljs.core._nth(recur_val,(3));
var G__48278 = cljs.core._nth(recur_val,(4));
var G__48279 = cljs.core._nth(recur_val,(5));
var G__48280 = cljs.core._nth(recur_val,(6));
var G__48281 = cljs.core._nth(recur_val,(7));
var G__48282 = cljs.core._nth(recur_val,(8));
var G__48283 = cljs.core._nth(recur_val,(9));
var G__48284 = cljs.core._nth(recur_val,(10));
var G__48285 = cljs.core._nth(recur_val,(11));
var G__48286 = cljs.core._nth(recur_val,(12));
var G__48287 = cljs.core._nth(recur_val,(13));
var G__48288 = cljs.core._nth(recur_val,(14));
var G__48289 = cljs.core._nth(recur_val,(15));
var G__48290 = cljs.core._nth(recur_val,(16));
var G__48291 = cljs.core._nth(recur_val,(17));
var G__48292 = cljs.core._nth(recur_val,(18));
var G__48293 = cljs.core._nth(recur_val,(19));
G__47691 = G__48274;
G__47692 = G__48275;
G__47693 = G__48276;
G__47694 = G__48277;
G__47695 = G__48278;
G__47696 = G__48279;
G__47697 = G__48280;
G__47698 = G__48281;
G__47699 = G__48282;
G__47700 = G__48283;
G__47701 = G__48284;
G__47702 = G__48285;
G__47703 = G__48286;
G__47704 = G__48287;
G__47705 = G__48288;
G__47706 = G__48289;
G__47707 = G__48290;
G__47708 = G__48291;
G__47709 = G__48292;
G__47710 = G__48293;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
} else {
var G__47754 = cljs.core._nth(params,(0));
var G__47755 = cljs.core._nth(params,(1));
var G__47756 = cljs.core._nth(params,(2));
var G__47757 = cljs.core._nth(params,(3));
var G__47758 = cljs.core._nth(params,(4));
var G__47759 = cljs.core._nth(params,(5));
var G__47760 = cljs.core._nth(params,(6));
var G__47761 = cljs.core._nth(params,(7));
var G__47762 = cljs.core._nth(params,(8));
var G__47763 = cljs.core._nth(params,(9));
var G__47764 = cljs.core._nth(params,(10));
var G__47765 = cljs.core._nth(params,(11));
var G__47766 = cljs.core._nth(params,(12));
var G__47767 = cljs.core._nth(params,(13));
var G__47768 = cljs.core._nth(params,(14));
var G__47769 = cljs.core._nth(params,(15));
var G__47770 = cljs.core._nth(params,(16));
var G__47771 = cljs.core._nth(params,(17));
var G__47772 = cljs.core._nth(params,(18));
var G__47773 = cljs.core._nth(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__47734,G__47735,G__47736,G__47737,G__47738,G__47739,G__47740,G__47741,G__47742,G__47743,G__47744,G__47745,G__47746,G__47747,G__47748,G__47749,G__47750,G__47751,G__47752,G__47753){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__47754,G__47734);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__47755,G__47735);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__47756,G__47736);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__47757,G__47737);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__47758,G__47738);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__47759,G__47739);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__47760,G__47740);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__47761,G__47741);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__47762,G__47742);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__47763,G__47743);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__47764,G__47744);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__47765,G__47745);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__47766,G__47746);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__47767,G__47747);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__47768,G__47748);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__47769,G__47749);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__47770,G__47750);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__47771,G__47751);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__47772,G__47752);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__47773,G__47753);
var ret__46121__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___46122__auto__ = (ret__46121__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___46122__auto__){
var recur_val = sci.impl.types.getVal(ret__46121__auto__);
var G__48299 = cljs.core._nth(recur_val,(0));
var G__48300 = cljs.core._nth(recur_val,(1));
var G__48301 = cljs.core._nth(recur_val,(2));
var G__48302 = cljs.core._nth(recur_val,(3));
var G__48303 = cljs.core._nth(recur_val,(4));
var G__48304 = cljs.core._nth(recur_val,(5));
var G__48305 = cljs.core._nth(recur_val,(6));
var G__48306 = cljs.core._nth(recur_val,(7));
var G__48307 = cljs.core._nth(recur_val,(8));
var G__48308 = cljs.core._nth(recur_val,(9));
var G__48309 = cljs.core._nth(recur_val,(10));
var G__48310 = cljs.core._nth(recur_val,(11));
var G__48311 = cljs.core._nth(recur_val,(12));
var G__48312 = cljs.core._nth(recur_val,(13));
var G__48313 = cljs.core._nth(recur_val,(14));
var G__48314 = cljs.core._nth(recur_val,(15));
var G__48315 = cljs.core._nth(recur_val,(16));
var G__48316 = cljs.core._nth(recur_val,(17));
var G__48317 = cljs.core._nth(recur_val,(18));
var G__48318 = cljs.core._nth(recur_val,(19));
G__47734 = G__48299;
G__47735 = G__48300;
G__47736 = G__48301;
G__47737 = G__48302;
G__47738 = G__48303;
G__47739 = G__48304;
G__47740 = G__48305;
G__47741 = G__48306;
G__47742 = G__48307;
G__47743 = G__48308;
G__47744 = G__48309;
G__47745 = G__48310;
G__47746 = G__48311;
G__47747 = G__48312;
G__47748 = G__48313;
G__47749 = G__48314;
G__47750 = G__48315;
G__47751 = G__48316;
G__47752 = G__48317;
G__47753 = G__48318;
continue;
} else {
return ret__46121__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__48320 = cljs.core.next(args_STAR_);
var G__48321 = cljs.core.next(params__$1);
var G__48322 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__48320;
params__$1 = G__48321;
ret = G__48322;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__47775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47775,(0),null);
var vec__47778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47775,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47778,(0),null);
var G__48327 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__48327;
continue;
} else {
var G__48328 = recur_val;
args = G__48328;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48329__i = 0, G__48329__a = new Array(arguments.length -  0);
while (G__48329__i < G__48329__a.length) {G__48329__a[G__48329__i] = arguments[G__48329__i + 0]; ++G__48329__i;}
  args = new cljs.core.IndexedSeq(G__48329__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__48330){
var args = cljs.core.seq(arglist__48330);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__48331 = cljs.core.next(args_STAR_);
var G__48332 = cljs.core.next(params__$1);
var G__48333 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__48331;
params__$1 = G__48332;
ret = G__48333;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__47781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(0),null);
var vec__47784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47781,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47784,(0),null);
var G__48339 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__48339;
continue;
} else {
var G__48340 = recur_val;
args = G__48340;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48341__i = 0, G__48341__a = new Array(arguments.length -  0);
while (G__48341__i < G__48341__a.length) {G__48341__a[G__48341__i] = arguments[G__48341__i + 0]; ++G__48341__i;}
  args = new cljs.core.IndexedSeq(G__48341__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__48342){
var args = cljs.core.seq(arglist__48342);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref){
var self_ref__$1 = (cljs.core.truth_(self_ref)?cljs.core.volatile_BANG_(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,self_ref__$1):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__48345__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5802__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__48345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48350__i = 0, G__48350__a = new Array(arguments.length -  0);
while (G__48350__i < G__48350__a.length) {G__48350__a[G__48350__i] = arguments[G__48350__i + 0]; ++G__48350__i;}
  args = new cljs.core.IndexedSeq(G__48350__a,0,null);
} 
return G__48345__delegate.call(this,args);};
G__48345.cljs$lang$maxFixedArity = 0;
G__48345.cljs$lang$applyTo = (function (arglist__48351){
var args = cljs.core.seq(arglist__48351);
return G__48345__delegate(args);
});
G__48345.cljs$core$IFn$_invoke$arity$variadic = G__48345__delegate;
return G__48345;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__47787_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47787_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref__$1)){
cljs.core.vreset_BANG_(self_ref__$1,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);

//# sourceMappingURL=sci.impl.fns.js.map
