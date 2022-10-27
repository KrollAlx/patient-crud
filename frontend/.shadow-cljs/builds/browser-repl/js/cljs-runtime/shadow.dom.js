goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37980 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37980(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37981 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37981(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36775 = coll;
var G__36776 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36775,G__36776) : shadow.dom.lazy_native_coll_seq.call(null,G__36775,G__36776));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36782 = arguments.length;
switch (G__36782) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36784 = arguments.length;
switch (G__36784) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36790 = arguments.length;
switch (G__36790) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36793 = arguments.length;
switch (G__36793) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36805 = arguments.length;
switch (G__36805) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36808 = arguments.length;
switch (G__36808) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36813){if((e36813 instanceof Object)){
var e = e36813;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36813;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36822 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36823 = null;
var count__36824 = (0);
var i__36825 = (0);
while(true){
if((i__36825 < count__36824)){
var el = chunk__36823.cljs$core$IIndexed$_nth$arity$2(null,i__36825);
var handler_37996__$1 = ((function (seq__36822,chunk__36823,count__36824,i__36825,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36822,chunk__36823,count__36824,i__36825,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37996__$1);


var G__37997 = seq__36822;
var G__37998 = chunk__36823;
var G__37999 = count__36824;
var G__38000 = (i__36825 + (1));
seq__36822 = G__37997;
chunk__36823 = G__37998;
count__36824 = G__37999;
i__36825 = G__38000;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36822);
if(temp__5804__auto__){
var seq__36822__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36822__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36822__$1);
var G__38002 = cljs.core.chunk_rest(seq__36822__$1);
var G__38003 = c__5568__auto__;
var G__38004 = cljs.core.count(c__5568__auto__);
var G__38005 = (0);
seq__36822 = G__38002;
chunk__36823 = G__38003;
count__36824 = G__38004;
i__36825 = G__38005;
continue;
} else {
var el = cljs.core.first(seq__36822__$1);
var handler_38007__$1 = ((function (seq__36822,chunk__36823,count__36824,i__36825,el,seq__36822__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36822,chunk__36823,count__36824,i__36825,el,seq__36822__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38007__$1);


var G__38008 = cljs.core.next(seq__36822__$1);
var G__38009 = null;
var G__38010 = (0);
var G__38011 = (0);
seq__36822 = G__38008;
chunk__36823 = G__38009;
count__36824 = G__38010;
i__36825 = G__38011;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36845 = arguments.length;
switch (G__36845) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36846 = cljs.core.seq(events);
var chunk__36847 = null;
var count__36848 = (0);
var i__36849 = (0);
while(true){
if((i__36849 < count__36848)){
var vec__36856 = chunk__36847.cljs$core$IIndexed$_nth$arity$2(null,i__36849);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38016 = seq__36846;
var G__38017 = chunk__36847;
var G__38018 = count__36848;
var G__38019 = (i__36849 + (1));
seq__36846 = G__38016;
chunk__36847 = G__38017;
count__36848 = G__38018;
i__36849 = G__38019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36846);
if(temp__5804__auto__){
var seq__36846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36846__$1);
var G__38023 = cljs.core.chunk_rest(seq__36846__$1);
var G__38024 = c__5568__auto__;
var G__38025 = cljs.core.count(c__5568__auto__);
var G__38026 = (0);
seq__36846 = G__38023;
chunk__36847 = G__38024;
count__36848 = G__38025;
i__36849 = G__38026;
continue;
} else {
var vec__36859 = cljs.core.first(seq__36846__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36859,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38027 = cljs.core.next(seq__36846__$1);
var G__38028 = null;
var G__38029 = (0);
var G__38030 = (0);
seq__36846 = G__38027;
chunk__36847 = G__38028;
count__36848 = G__38029;
i__36849 = G__38030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36863 = cljs.core.seq(styles);
var chunk__36864 = null;
var count__36865 = (0);
var i__36866 = (0);
while(true){
if((i__36866 < count__36865)){
var vec__36875 = chunk__36864.cljs$core$IIndexed$_nth$arity$2(null,i__36866);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36875,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38031 = seq__36863;
var G__38032 = chunk__36864;
var G__38033 = count__36865;
var G__38034 = (i__36866 + (1));
seq__36863 = G__38031;
chunk__36864 = G__38032;
count__36865 = G__38033;
i__36866 = G__38034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36863);
if(temp__5804__auto__){
var seq__36863__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36863__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36863__$1);
var G__38035 = cljs.core.chunk_rest(seq__36863__$1);
var G__38036 = c__5568__auto__;
var G__38037 = cljs.core.count(c__5568__auto__);
var G__38038 = (0);
seq__36863 = G__38035;
chunk__36864 = G__38036;
count__36865 = G__38037;
i__36866 = G__38038;
continue;
} else {
var vec__36878 = cljs.core.first(seq__36863__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38040 = cljs.core.next(seq__36863__$1);
var G__38041 = null;
var G__38042 = (0);
var G__38043 = (0);
seq__36863 = G__38040;
chunk__36864 = G__38041;
count__36865 = G__38042;
i__36866 = G__38043;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36881_38044 = key;
var G__36881_38045__$1 = (((G__36881_38044 instanceof cljs.core.Keyword))?G__36881_38044.fqn:null);
switch (G__36881_38045__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38047 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38047,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38047,"aria-");
}
})())){
el.setAttribute(ks_38047,value);
} else {
(el[ks_38047] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36889){
var map__36890 = p__36889;
var map__36890__$1 = cljs.core.__destructure_map(map__36890);
var props = map__36890__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36890__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36891 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36891,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36895 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36895,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36895;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36897 = arguments.length;
switch (G__36897) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36902){
var vec__36903 = p__36902;
var seq__36904 = cljs.core.seq(vec__36903);
var first__36905 = cljs.core.first(seq__36904);
var seq__36904__$1 = cljs.core.next(seq__36904);
var nn = first__36905;
var first__36905__$1 = cljs.core.first(seq__36904__$1);
var seq__36904__$2 = cljs.core.next(seq__36904__$1);
var np = first__36905__$1;
var nc = seq__36904__$2;
var node = vec__36903;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36909 = nn;
var G__36910 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36909,G__36910) : create_fn.call(null,G__36909,G__36910));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36911 = nn;
var G__36912 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36911,G__36912) : create_fn.call(null,G__36911,G__36912));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36913 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36913,(1),null);
var seq__36922_38056 = cljs.core.seq(node_children);
var chunk__36923_38057 = null;
var count__36924_38058 = (0);
var i__36925_38059 = (0);
while(true){
if((i__36925_38059 < count__36924_38058)){
var child_struct_38061 = chunk__36923_38057.cljs$core$IIndexed$_nth$arity$2(null,i__36925_38059);
var children_38062 = shadow.dom.dom_node(child_struct_38061);
if(cljs.core.seq_QMARK_(children_38062)){
var seq__36960_38063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38062));
var chunk__36962_38064 = null;
var count__36963_38065 = (0);
var i__36964_38066 = (0);
while(true){
if((i__36964_38066 < count__36963_38065)){
var child_38067 = chunk__36962_38064.cljs$core$IIndexed$_nth$arity$2(null,i__36964_38066);
if(cljs.core.truth_(child_38067)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38067);


var G__38068 = seq__36960_38063;
var G__38069 = chunk__36962_38064;
var G__38070 = count__36963_38065;
var G__38071 = (i__36964_38066 + (1));
seq__36960_38063 = G__38068;
chunk__36962_38064 = G__38069;
count__36963_38065 = G__38070;
i__36964_38066 = G__38071;
continue;
} else {
var G__38072 = seq__36960_38063;
var G__38073 = chunk__36962_38064;
var G__38074 = count__36963_38065;
var G__38075 = (i__36964_38066 + (1));
seq__36960_38063 = G__38072;
chunk__36962_38064 = G__38073;
count__36963_38065 = G__38074;
i__36964_38066 = G__38075;
continue;
}
} else {
var temp__5804__auto___38076 = cljs.core.seq(seq__36960_38063);
if(temp__5804__auto___38076){
var seq__36960_38077__$1 = temp__5804__auto___38076;
if(cljs.core.chunked_seq_QMARK_(seq__36960_38077__$1)){
var c__5568__auto___38078 = cljs.core.chunk_first(seq__36960_38077__$1);
var G__38079 = cljs.core.chunk_rest(seq__36960_38077__$1);
var G__38080 = c__5568__auto___38078;
var G__38081 = cljs.core.count(c__5568__auto___38078);
var G__38082 = (0);
seq__36960_38063 = G__38079;
chunk__36962_38064 = G__38080;
count__36963_38065 = G__38081;
i__36964_38066 = G__38082;
continue;
} else {
var child_38083 = cljs.core.first(seq__36960_38077__$1);
if(cljs.core.truth_(child_38083)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38083);


var G__38084 = cljs.core.next(seq__36960_38077__$1);
var G__38085 = null;
var G__38086 = (0);
var G__38087 = (0);
seq__36960_38063 = G__38084;
chunk__36962_38064 = G__38085;
count__36963_38065 = G__38086;
i__36964_38066 = G__38087;
continue;
} else {
var G__38088 = cljs.core.next(seq__36960_38077__$1);
var G__38089 = null;
var G__38090 = (0);
var G__38091 = (0);
seq__36960_38063 = G__38088;
chunk__36962_38064 = G__38089;
count__36963_38065 = G__38090;
i__36964_38066 = G__38091;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38062);
}


var G__38092 = seq__36922_38056;
var G__38093 = chunk__36923_38057;
var G__38094 = count__36924_38058;
var G__38095 = (i__36925_38059 + (1));
seq__36922_38056 = G__38092;
chunk__36923_38057 = G__38093;
count__36924_38058 = G__38094;
i__36925_38059 = G__38095;
continue;
} else {
var temp__5804__auto___38096 = cljs.core.seq(seq__36922_38056);
if(temp__5804__auto___38096){
var seq__36922_38097__$1 = temp__5804__auto___38096;
if(cljs.core.chunked_seq_QMARK_(seq__36922_38097__$1)){
var c__5568__auto___38098 = cljs.core.chunk_first(seq__36922_38097__$1);
var G__38099 = cljs.core.chunk_rest(seq__36922_38097__$1);
var G__38100 = c__5568__auto___38098;
var G__38101 = cljs.core.count(c__5568__auto___38098);
var G__38102 = (0);
seq__36922_38056 = G__38099;
chunk__36923_38057 = G__38100;
count__36924_38058 = G__38101;
i__36925_38059 = G__38102;
continue;
} else {
var child_struct_38103 = cljs.core.first(seq__36922_38097__$1);
var children_38104 = shadow.dom.dom_node(child_struct_38103);
if(cljs.core.seq_QMARK_(children_38104)){
var seq__36979_38105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38104));
var chunk__36981_38106 = null;
var count__36982_38107 = (0);
var i__36983_38108 = (0);
while(true){
if((i__36983_38108 < count__36982_38107)){
var child_38109 = chunk__36981_38106.cljs$core$IIndexed$_nth$arity$2(null,i__36983_38108);
if(cljs.core.truth_(child_38109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38109);


var G__38110 = seq__36979_38105;
var G__38111 = chunk__36981_38106;
var G__38112 = count__36982_38107;
var G__38113 = (i__36983_38108 + (1));
seq__36979_38105 = G__38110;
chunk__36981_38106 = G__38111;
count__36982_38107 = G__38112;
i__36983_38108 = G__38113;
continue;
} else {
var G__38114 = seq__36979_38105;
var G__38115 = chunk__36981_38106;
var G__38116 = count__36982_38107;
var G__38117 = (i__36983_38108 + (1));
seq__36979_38105 = G__38114;
chunk__36981_38106 = G__38115;
count__36982_38107 = G__38116;
i__36983_38108 = G__38117;
continue;
}
} else {
var temp__5804__auto___38119__$1 = cljs.core.seq(seq__36979_38105);
if(temp__5804__auto___38119__$1){
var seq__36979_38126__$1 = temp__5804__auto___38119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36979_38126__$1)){
var c__5568__auto___38127 = cljs.core.chunk_first(seq__36979_38126__$1);
var G__38128 = cljs.core.chunk_rest(seq__36979_38126__$1);
var G__38129 = c__5568__auto___38127;
var G__38130 = cljs.core.count(c__5568__auto___38127);
var G__38131 = (0);
seq__36979_38105 = G__38128;
chunk__36981_38106 = G__38129;
count__36982_38107 = G__38130;
i__36983_38108 = G__38131;
continue;
} else {
var child_38132 = cljs.core.first(seq__36979_38126__$1);
if(cljs.core.truth_(child_38132)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38132);


var G__38133 = cljs.core.next(seq__36979_38126__$1);
var G__38134 = null;
var G__38135 = (0);
var G__38136 = (0);
seq__36979_38105 = G__38133;
chunk__36981_38106 = G__38134;
count__36982_38107 = G__38135;
i__36983_38108 = G__38136;
continue;
} else {
var G__38137 = cljs.core.next(seq__36979_38126__$1);
var G__38138 = null;
var G__38139 = (0);
var G__38140 = (0);
seq__36979_38105 = G__38137;
chunk__36981_38106 = G__38138;
count__36982_38107 = G__38139;
i__36983_38108 = G__38140;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38104);
}


var G__38141 = cljs.core.next(seq__36922_38097__$1);
var G__38142 = null;
var G__38143 = (0);
var G__38144 = (0);
seq__36922_38056 = G__38141;
chunk__36923_38057 = G__38142;
count__36924_38058 = G__38143;
i__36925_38059 = G__38144;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37030 = cljs.core.seq(node);
var chunk__37031 = null;
var count__37032 = (0);
var i__37033 = (0);
while(true){
if((i__37033 < count__37032)){
var n = chunk__37031.cljs$core$IIndexed$_nth$arity$2(null,i__37033);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38145 = seq__37030;
var G__38146 = chunk__37031;
var G__38147 = count__37032;
var G__38148 = (i__37033 + (1));
seq__37030 = G__38145;
chunk__37031 = G__38146;
count__37032 = G__38147;
i__37033 = G__38148;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37030);
if(temp__5804__auto__){
var seq__37030__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37030__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37030__$1);
var G__38149 = cljs.core.chunk_rest(seq__37030__$1);
var G__38150 = c__5568__auto__;
var G__38151 = cljs.core.count(c__5568__auto__);
var G__38152 = (0);
seq__37030 = G__38149;
chunk__37031 = G__38150;
count__37032 = G__38151;
i__37033 = G__38152;
continue;
} else {
var n = cljs.core.first(seq__37030__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38169 = cljs.core.next(seq__37030__$1);
var G__38170 = null;
var G__38171 = (0);
var G__38172 = (0);
seq__37030 = G__38169;
chunk__37031 = G__38170;
count__37032 = G__38171;
i__37033 = G__38172;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37054 = arguments.length;
switch (G__37054) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37065 = arguments.length;
switch (G__37065) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37084 = arguments.length;
switch (G__37084) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38183 = arguments.length;
var i__5770__auto___38184 = (0);
while(true){
if((i__5770__auto___38184 < len__5769__auto___38183)){
args__5775__auto__.push((arguments[i__5770__auto___38184]));

var G__38185 = (i__5770__auto___38184 + (1));
i__5770__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37104_38186 = cljs.core.seq(nodes);
var chunk__37106_38187 = null;
var count__37107_38188 = (0);
var i__37108_38189 = (0);
while(true){
if((i__37108_38189 < count__37107_38188)){
var node_38190 = chunk__37106_38187.cljs$core$IIndexed$_nth$arity$2(null,i__37108_38189);
fragment.appendChild(shadow.dom._to_dom(node_38190));


var G__38191 = seq__37104_38186;
var G__38192 = chunk__37106_38187;
var G__38193 = count__37107_38188;
var G__38194 = (i__37108_38189 + (1));
seq__37104_38186 = G__38191;
chunk__37106_38187 = G__38192;
count__37107_38188 = G__38193;
i__37108_38189 = G__38194;
continue;
} else {
var temp__5804__auto___38195 = cljs.core.seq(seq__37104_38186);
if(temp__5804__auto___38195){
var seq__37104_38196__$1 = temp__5804__auto___38195;
if(cljs.core.chunked_seq_QMARK_(seq__37104_38196__$1)){
var c__5568__auto___38197 = cljs.core.chunk_first(seq__37104_38196__$1);
var G__38198 = cljs.core.chunk_rest(seq__37104_38196__$1);
var G__38199 = c__5568__auto___38197;
var G__38200 = cljs.core.count(c__5568__auto___38197);
var G__38201 = (0);
seq__37104_38186 = G__38198;
chunk__37106_38187 = G__38199;
count__37107_38188 = G__38200;
i__37108_38189 = G__38201;
continue;
} else {
var node_38202 = cljs.core.first(seq__37104_38196__$1);
fragment.appendChild(shadow.dom._to_dom(node_38202));


var G__38203 = cljs.core.next(seq__37104_38196__$1);
var G__38204 = null;
var G__38205 = (0);
var G__38206 = (0);
seq__37104_38186 = G__38203;
chunk__37106_38187 = G__38204;
count__37107_38188 = G__38205;
i__37108_38189 = G__38206;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37101){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37101));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37165_38207 = cljs.core.seq(scripts);
var chunk__37166_38208 = null;
var count__37167_38209 = (0);
var i__37168_38210 = (0);
while(true){
if((i__37168_38210 < count__37167_38209)){
var vec__37191_38211 = chunk__37166_38208.cljs$core$IIndexed$_nth$arity$2(null,i__37168_38210);
var script_tag_38212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37191_38211,(0),null);
var script_body_38213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37191_38211,(1),null);
eval(script_body_38213);


var G__38214 = seq__37165_38207;
var G__38215 = chunk__37166_38208;
var G__38216 = count__37167_38209;
var G__38217 = (i__37168_38210 + (1));
seq__37165_38207 = G__38214;
chunk__37166_38208 = G__38215;
count__37167_38209 = G__38216;
i__37168_38210 = G__38217;
continue;
} else {
var temp__5804__auto___38218 = cljs.core.seq(seq__37165_38207);
if(temp__5804__auto___38218){
var seq__37165_38219__$1 = temp__5804__auto___38218;
if(cljs.core.chunked_seq_QMARK_(seq__37165_38219__$1)){
var c__5568__auto___38220 = cljs.core.chunk_first(seq__37165_38219__$1);
var G__38221 = cljs.core.chunk_rest(seq__37165_38219__$1);
var G__38222 = c__5568__auto___38220;
var G__38223 = cljs.core.count(c__5568__auto___38220);
var G__38224 = (0);
seq__37165_38207 = G__38221;
chunk__37166_38208 = G__38222;
count__37167_38209 = G__38223;
i__37168_38210 = G__38224;
continue;
} else {
var vec__37204_38225 = cljs.core.first(seq__37165_38219__$1);
var script_tag_38226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204_38225,(0),null);
var script_body_38227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204_38225,(1),null);
eval(script_body_38227);


var G__38228 = cljs.core.next(seq__37165_38219__$1);
var G__38229 = null;
var G__38230 = (0);
var G__38231 = (0);
seq__37165_38207 = G__38228;
chunk__37166_38208 = G__38229;
count__37167_38209 = G__38230;
i__37168_38210 = G__38231;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37212){
var vec__37215 = p__37212;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37215,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37215,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37259 = arguments.length;
switch (G__37259) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37291 = cljs.core.seq(style_keys);
var chunk__37292 = null;
var count__37293 = (0);
var i__37294 = (0);
while(true){
if((i__37294 < count__37293)){
var it = chunk__37292.cljs$core$IIndexed$_nth$arity$2(null,i__37294);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38246 = seq__37291;
var G__38247 = chunk__37292;
var G__38248 = count__37293;
var G__38249 = (i__37294 + (1));
seq__37291 = G__38246;
chunk__37292 = G__38247;
count__37293 = G__38248;
i__37294 = G__38249;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37291);
if(temp__5804__auto__){
var seq__37291__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37291__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37291__$1);
var G__38250 = cljs.core.chunk_rest(seq__37291__$1);
var G__38251 = c__5568__auto__;
var G__38252 = cljs.core.count(c__5568__auto__);
var G__38253 = (0);
seq__37291 = G__38250;
chunk__37292 = G__38251;
count__37293 = G__38252;
i__37294 = G__38253;
continue;
} else {
var it = cljs.core.first(seq__37291__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38254 = cljs.core.next(seq__37291__$1);
var G__38255 = null;
var G__38256 = (0);
var G__38257 = (0);
seq__37291 = G__38254;
chunk__37292 = G__38255;
count__37293 = G__38256;
i__37294 = G__38257;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37322,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37337 = k37322;
var G__37337__$1 = (((G__37337 instanceof cljs.core.Keyword))?G__37337.fqn:null);
switch (G__37337__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37322,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37340){
var vec__37341 = p__37340;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37341,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37321){
var self__ = this;
var G__37321__$1 = this;
return (new cljs.core.RecordIter((0),G__37321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37323,other37324){
var self__ = this;
var this37323__$1 = this;
return (((!((other37324 == null)))) && ((((this37323__$1.constructor === other37324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37323__$1.x,other37324.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37323__$1.y,other37324.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37323__$1.__extmap,other37324.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37322){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37384 = k37322;
var G__37384__$1 = (((G__37384 instanceof cljs.core.Keyword))?G__37384.fqn:null);
switch (G__37384__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37322);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37321){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37390 = cljs.core.keyword_identical_QMARK_;
var expr__37391 = k__5352__auto__;
if(cljs.core.truth_((pred__37390.cljs$core$IFn$_invoke$arity$2 ? pred__37390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37391) : pred__37390.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37391)))){
return (new shadow.dom.Coordinate(G__37321,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37390.cljs$core$IFn$_invoke$arity$2 ? pred__37390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37391) : pred__37390.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37391)))){
return (new shadow.dom.Coordinate(self__.x,G__37321,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37321),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37321){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37321,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37333){
var extmap__5385__auto__ = (function (){var G__37411 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37333,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37411);
} else {
return G__37411;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37333),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37333),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37423,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37495 = k37423;
var G__37495__$1 = (((G__37495 instanceof cljs.core.Keyword))?G__37495.fqn:null);
switch (G__37495__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37423,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37543){
var vec__37553 = p__37543;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37553,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37422){
var self__ = this;
var G__37422__$1 = this;
return (new cljs.core.RecordIter((0),G__37422__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37424,other37425){
var self__ = this;
var this37424__$1 = this;
return (((!((other37425 == null)))) && ((((this37424__$1.constructor === other37425.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37424__$1.w,other37425.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37424__$1.h,other37425.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37424__$1.__extmap,other37425.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37423){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37605 = k37423;
var G__37605__$1 = (((G__37605 instanceof cljs.core.Keyword))?G__37605.fqn:null);
switch (G__37605__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37423);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37422){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37608 = cljs.core.keyword_identical_QMARK_;
var expr__37609 = k__5352__auto__;
if(cljs.core.truth_((pred__37608.cljs$core$IFn$_invoke$arity$2 ? pred__37608.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37609) : pred__37608.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37609)))){
return (new shadow.dom.Size(G__37422,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37608.cljs$core$IFn$_invoke$arity$2 ? pred__37608.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37609) : pred__37608.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37609)))){
return (new shadow.dom.Size(self__.w,G__37422,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37422),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37422){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37422,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37453){
var extmap__5385__auto__ = (function (){var G__37628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37453,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37453)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37628);
} else {
return G__37628;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37453),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37453),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38262 = (i + (1));
var G__38263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38262;
ret = G__38263;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37689){
var vec__37691 = p__37689;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37697 = arguments.length;
switch (G__37697) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38265 = ps;
var G__38266 = (i + (1));
el__$1 = G__38265;
i = G__38266;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37740 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37744_38267 = cljs.core.seq(props);
var chunk__37745_38268 = null;
var count__37746_38269 = (0);
var i__37747_38270 = (0);
while(true){
if((i__37747_38270 < count__37746_38269)){
var vec__37764_38271 = chunk__37745_38268.cljs$core$IIndexed$_nth$arity$2(null,i__37747_38270);
var k_38272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37764_38271,(0),null);
var v_38273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37764_38271,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_38272);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38272),v_38273);


var G__38274 = seq__37744_38267;
var G__38275 = chunk__37745_38268;
var G__38276 = count__37746_38269;
var G__38277 = (i__37747_38270 + (1));
seq__37744_38267 = G__38274;
chunk__37745_38268 = G__38275;
count__37746_38269 = G__38276;
i__37747_38270 = G__38277;
continue;
} else {
var temp__5804__auto___38278 = cljs.core.seq(seq__37744_38267);
if(temp__5804__auto___38278){
var seq__37744_38279__$1 = temp__5804__auto___38278;
if(cljs.core.chunked_seq_QMARK_(seq__37744_38279__$1)){
var c__5568__auto___38280 = cljs.core.chunk_first(seq__37744_38279__$1);
var G__38281 = cljs.core.chunk_rest(seq__37744_38279__$1);
var G__38282 = c__5568__auto___38280;
var G__38283 = cljs.core.count(c__5568__auto___38280);
var G__38284 = (0);
seq__37744_38267 = G__38281;
chunk__37745_38268 = G__38282;
count__37746_38269 = G__38283;
i__37747_38270 = G__38284;
continue;
} else {
var vec__37773_38285 = cljs.core.first(seq__37744_38279__$1);
var k_38286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773_38285,(0),null);
var v_38287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37773_38285,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_38286);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38286),v_38287);


var G__38288 = cljs.core.next(seq__37744_38279__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__37744_38267 = G__38288;
chunk__37745_38268 = G__38289;
count__37746_38269 = G__38290;
i__37747_38270 = G__38291;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37778 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(1),null);
var seq__37782_38292 = cljs.core.seq(node_children);
var chunk__37784_38293 = null;
var count__37785_38294 = (0);
var i__37786_38295 = (0);
while(true){
if((i__37786_38295 < count__37785_38294)){
var child_struct_38296 = chunk__37784_38293.cljs$core$IIndexed$_nth$arity$2(null,i__37786_38295);
if((!((child_struct_38296 == null)))){
if(typeof child_struct_38296 === 'string'){
var text_38297 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38297),child_struct_38296].join(''));
} else {
var children_38298 = shadow.dom.svg_node(child_struct_38296);
if(cljs.core.seq_QMARK_(children_38298)){
var seq__37887_38299 = cljs.core.seq(children_38298);
var chunk__37889_38300 = null;
var count__37890_38301 = (0);
var i__37891_38302 = (0);
while(true){
if((i__37891_38302 < count__37890_38301)){
var child_38303 = chunk__37889_38300.cljs$core$IIndexed$_nth$arity$2(null,i__37891_38302);
if(cljs.core.truth_(child_38303)){
node.appendChild(child_38303);


var G__38304 = seq__37887_38299;
var G__38305 = chunk__37889_38300;
var G__38306 = count__37890_38301;
var G__38307 = (i__37891_38302 + (1));
seq__37887_38299 = G__38304;
chunk__37889_38300 = G__38305;
count__37890_38301 = G__38306;
i__37891_38302 = G__38307;
continue;
} else {
var G__38308 = seq__37887_38299;
var G__38309 = chunk__37889_38300;
var G__38310 = count__37890_38301;
var G__38311 = (i__37891_38302 + (1));
seq__37887_38299 = G__38308;
chunk__37889_38300 = G__38309;
count__37890_38301 = G__38310;
i__37891_38302 = G__38311;
continue;
}
} else {
var temp__5804__auto___38312 = cljs.core.seq(seq__37887_38299);
if(temp__5804__auto___38312){
var seq__37887_38313__$1 = temp__5804__auto___38312;
if(cljs.core.chunked_seq_QMARK_(seq__37887_38313__$1)){
var c__5568__auto___38314 = cljs.core.chunk_first(seq__37887_38313__$1);
var G__38315 = cljs.core.chunk_rest(seq__37887_38313__$1);
var G__38316 = c__5568__auto___38314;
var G__38317 = cljs.core.count(c__5568__auto___38314);
var G__38318 = (0);
seq__37887_38299 = G__38315;
chunk__37889_38300 = G__38316;
count__37890_38301 = G__38317;
i__37891_38302 = G__38318;
continue;
} else {
var child_38319 = cljs.core.first(seq__37887_38313__$1);
if(cljs.core.truth_(child_38319)){
node.appendChild(child_38319);


var G__38320 = cljs.core.next(seq__37887_38313__$1);
var G__38321 = null;
var G__38322 = (0);
var G__38323 = (0);
seq__37887_38299 = G__38320;
chunk__37889_38300 = G__38321;
count__37890_38301 = G__38322;
i__37891_38302 = G__38323;
continue;
} else {
var G__38324 = cljs.core.next(seq__37887_38313__$1);
var G__38325 = null;
var G__38326 = (0);
var G__38327 = (0);
seq__37887_38299 = G__38324;
chunk__37889_38300 = G__38325;
count__37890_38301 = G__38326;
i__37891_38302 = G__38327;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38298);
}
}


var G__38328 = seq__37782_38292;
var G__38329 = chunk__37784_38293;
var G__38330 = count__37785_38294;
var G__38331 = (i__37786_38295 + (1));
seq__37782_38292 = G__38328;
chunk__37784_38293 = G__38329;
count__37785_38294 = G__38330;
i__37786_38295 = G__38331;
continue;
} else {
var G__38332 = seq__37782_38292;
var G__38333 = chunk__37784_38293;
var G__38334 = count__37785_38294;
var G__38335 = (i__37786_38295 + (1));
seq__37782_38292 = G__38332;
chunk__37784_38293 = G__38333;
count__37785_38294 = G__38334;
i__37786_38295 = G__38335;
continue;
}
} else {
var temp__5804__auto___38336 = cljs.core.seq(seq__37782_38292);
if(temp__5804__auto___38336){
var seq__37782_38337__$1 = temp__5804__auto___38336;
if(cljs.core.chunked_seq_QMARK_(seq__37782_38337__$1)){
var c__5568__auto___38338 = cljs.core.chunk_first(seq__37782_38337__$1);
var G__38340 = cljs.core.chunk_rest(seq__37782_38337__$1);
var G__38341 = c__5568__auto___38338;
var G__38342 = cljs.core.count(c__5568__auto___38338);
var G__38343 = (0);
seq__37782_38292 = G__38340;
chunk__37784_38293 = G__38341;
count__37785_38294 = G__38342;
i__37786_38295 = G__38343;
continue;
} else {
var child_struct_38344 = cljs.core.first(seq__37782_38337__$1);
if((!((child_struct_38344 == null)))){
if(typeof child_struct_38344 === 'string'){
var text_38345 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38345),child_struct_38344].join(''));
} else {
var children_38347 = shadow.dom.svg_node(child_struct_38344);
if(cljs.core.seq_QMARK_(children_38347)){
var seq__37904_38348 = cljs.core.seq(children_38347);
var chunk__37906_38349 = null;
var count__37907_38350 = (0);
var i__37908_38351 = (0);
while(true){
if((i__37908_38351 < count__37907_38350)){
var child_38352 = chunk__37906_38349.cljs$core$IIndexed$_nth$arity$2(null,i__37908_38351);
if(cljs.core.truth_(child_38352)){
node.appendChild(child_38352);


var G__38353 = seq__37904_38348;
var G__38354 = chunk__37906_38349;
var G__38355 = count__37907_38350;
var G__38356 = (i__37908_38351 + (1));
seq__37904_38348 = G__38353;
chunk__37906_38349 = G__38354;
count__37907_38350 = G__38355;
i__37908_38351 = G__38356;
continue;
} else {
var G__38357 = seq__37904_38348;
var G__38358 = chunk__37906_38349;
var G__38359 = count__37907_38350;
var G__38360 = (i__37908_38351 + (1));
seq__37904_38348 = G__38357;
chunk__37906_38349 = G__38358;
count__37907_38350 = G__38359;
i__37908_38351 = G__38360;
continue;
}
} else {
var temp__5804__auto___38361__$1 = cljs.core.seq(seq__37904_38348);
if(temp__5804__auto___38361__$1){
var seq__37904_38362__$1 = temp__5804__auto___38361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37904_38362__$1)){
var c__5568__auto___38363 = cljs.core.chunk_first(seq__37904_38362__$1);
var G__38364 = cljs.core.chunk_rest(seq__37904_38362__$1);
var G__38365 = c__5568__auto___38363;
var G__38366 = cljs.core.count(c__5568__auto___38363);
var G__38367 = (0);
seq__37904_38348 = G__38364;
chunk__37906_38349 = G__38365;
count__37907_38350 = G__38366;
i__37908_38351 = G__38367;
continue;
} else {
var child_38368 = cljs.core.first(seq__37904_38362__$1);
if(cljs.core.truth_(child_38368)){
node.appendChild(child_38368);


var G__38369 = cljs.core.next(seq__37904_38362__$1);
var G__38370 = null;
var G__38371 = (0);
var G__38372 = (0);
seq__37904_38348 = G__38369;
chunk__37906_38349 = G__38370;
count__37907_38350 = G__38371;
i__37908_38351 = G__38372;
continue;
} else {
var G__38373 = cljs.core.next(seq__37904_38362__$1);
var G__38374 = null;
var G__38375 = (0);
var G__38376 = (0);
seq__37904_38348 = G__38373;
chunk__37906_38349 = G__38374;
count__37907_38350 = G__38375;
i__37908_38351 = G__38376;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38347);
}
}


var G__38377 = cljs.core.next(seq__37782_38337__$1);
var G__38378 = null;
var G__38379 = (0);
var G__38380 = (0);
seq__37782_38292 = G__38377;
chunk__37784_38293 = G__38378;
count__37785_38294 = G__38379;
i__37786_38295 = G__38380;
continue;
} else {
var G__38381 = cljs.core.next(seq__37782_38337__$1);
var G__38382 = null;
var G__38383 = (0);
var G__38384 = (0);
seq__37782_38292 = G__38381;
chunk__37784_38293 = G__38382;
count__37785_38294 = G__38383;
i__37786_38295 = G__38384;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38385 = arguments.length;
var i__5770__auto___38386 = (0);
while(true){
if((i__5770__auto___38386 < len__5769__auto___38385)){
args__5775__auto__.push((arguments[i__5770__auto___38386]));

var G__38387 = (i__5770__auto___38386 + (1));
i__5770__auto___38386 = G__38387;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37920){
var G__37921 = cljs.core.first(seq37920);
var seq37920__$1 = cljs.core.next(seq37920);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37921,seq37920__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37928 = arguments.length;
switch (G__37928) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__34308__auto___38389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_37962){
var state_val_37963 = (state_37962[(1)]);
if((state_val_37963 === (1))){
var state_37962__$1 = state_37962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37962__$1,(2),once_or_cleanup);
} else {
if((state_val_37963 === (2))){
var inst_37954 = (state_37962[(2)]);
var inst_37958 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37962__$1 = (function (){var statearr_37968 = state_37962;
(statearr_37968[(7)] = inst_37954);

return statearr_37968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37962__$1,inst_37958);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34097__auto__ = null;
var shadow$dom$state_machine__34097__auto____0 = (function (){
var statearr_37970 = [null,null,null,null,null,null,null,null];
(statearr_37970[(0)] = shadow$dom$state_machine__34097__auto__);

(statearr_37970[(1)] = (1));

return statearr_37970;
});
var shadow$dom$state_machine__34097__auto____1 = (function (state_37962){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_37962);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e37971){var ex__34100__auto__ = e37971;
var statearr_37972_38391 = state_37962;
(statearr_37972_38391[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_37962[(4)]))){
var statearr_37973_38392 = state_37962;
(statearr_37973_38392[(1)] = cljs.core.first((state_37962[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38393 = state_37962;
state_37962 = G__38393;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
shadow$dom$state_machine__34097__auto__ = function(state_37962){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34097__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34097__auto____1.call(this,state_37962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34097__auto____0;
shadow$dom$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34097__auto____1;
return shadow$dom$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_37975 = f__34309__auto__();
(statearr_37975[(6)] = c__34308__auto___38389);

return statearr_37975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
