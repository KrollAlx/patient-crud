goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_63570 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_63570(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_63571 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_63571(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__62700 = coll;
var G__62701 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__62700,G__62701) : shadow.dom.lazy_native_coll_seq.call(null,G__62700,G__62701));
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
var G__62760 = arguments.length;
switch (G__62760) {
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
var G__62771 = arguments.length;
switch (G__62771) {
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
var G__62782 = arguments.length;
switch (G__62782) {
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
var G__62796 = arguments.length;
switch (G__62796) {
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
var G__62820 = arguments.length;
switch (G__62820) {
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
var G__62835 = arguments.length;
switch (G__62835) {
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
}catch (e62848){if((e62848 instanceof Object)){
var e = e62848;
return console.log("didnt support attachEvent",el,e);
} else {
throw e62848;

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
var seq__62865 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__62866 = null;
var count__62867 = (0);
var i__62868 = (0);
while(true){
if((i__62868 < count__62867)){
var el = chunk__62866.cljs$core$IIndexed$_nth$arity$2(null,i__62868);
var handler_63587__$1 = ((function (seq__62865,chunk__62866,count__62867,i__62868,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62865,chunk__62866,count__62867,i__62868,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63587__$1);


var G__63588 = seq__62865;
var G__63589 = chunk__62866;
var G__63590 = count__62867;
var G__63591 = (i__62868 + (1));
seq__62865 = G__63588;
chunk__62866 = G__63589;
count__62867 = G__63590;
i__62868 = G__63591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62865);
if(temp__5804__auto__){
var seq__62865__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62865__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62865__$1);
var G__63592 = cljs.core.chunk_rest(seq__62865__$1);
var G__63593 = c__5568__auto__;
var G__63594 = cljs.core.count(c__5568__auto__);
var G__63595 = (0);
seq__62865 = G__63592;
chunk__62866 = G__63593;
count__62867 = G__63594;
i__62868 = G__63595;
continue;
} else {
var el = cljs.core.first(seq__62865__$1);
var handler_63596__$1 = ((function (seq__62865,chunk__62866,count__62867,i__62868,el,seq__62865__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62865,chunk__62866,count__62867,i__62868,el,seq__62865__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63596__$1);


var G__63597 = cljs.core.next(seq__62865__$1);
var G__63598 = null;
var G__63599 = (0);
var G__63600 = (0);
seq__62865 = G__63597;
chunk__62866 = G__63598;
count__62867 = G__63599;
i__62868 = G__63600;
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
var G__62876 = arguments.length;
switch (G__62876) {
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
var seq__62890 = cljs.core.seq(events);
var chunk__62891 = null;
var count__62892 = (0);
var i__62893 = (0);
while(true){
if((i__62893 < count__62892)){
var vec__62905 = chunk__62891.cljs$core$IIndexed$_nth$arity$2(null,i__62893);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63606 = seq__62890;
var G__63607 = chunk__62891;
var G__63608 = count__62892;
var G__63609 = (i__62893 + (1));
seq__62890 = G__63606;
chunk__62891 = G__63607;
count__62892 = G__63608;
i__62893 = G__63609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62890);
if(temp__5804__auto__){
var seq__62890__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62890__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62890__$1);
var G__63610 = cljs.core.chunk_rest(seq__62890__$1);
var G__63611 = c__5568__auto__;
var G__63612 = cljs.core.count(c__5568__auto__);
var G__63613 = (0);
seq__62890 = G__63610;
chunk__62891 = G__63611;
count__62892 = G__63612;
i__62893 = G__63613;
continue;
} else {
var vec__62913 = cljs.core.first(seq__62890__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62913,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62913,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63614 = cljs.core.next(seq__62890__$1);
var G__63615 = null;
var G__63616 = (0);
var G__63617 = (0);
seq__62890 = G__63614;
chunk__62891 = G__63615;
count__62892 = G__63616;
i__62893 = G__63617;
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
var seq__62918 = cljs.core.seq(styles);
var chunk__62919 = null;
var count__62920 = (0);
var i__62921 = (0);
while(true){
if((i__62921 < count__62920)){
var vec__62938 = chunk__62919.cljs$core$IIndexed$_nth$arity$2(null,i__62921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62938,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63618 = seq__62918;
var G__63619 = chunk__62919;
var G__63620 = count__62920;
var G__63621 = (i__62921 + (1));
seq__62918 = G__63618;
chunk__62919 = G__63619;
count__62920 = G__63620;
i__62921 = G__63621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__62918);
if(temp__5804__auto__){
var seq__62918__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62918__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__62918__$1);
var G__63622 = cljs.core.chunk_rest(seq__62918__$1);
var G__63623 = c__5568__auto__;
var G__63624 = cljs.core.count(c__5568__auto__);
var G__63625 = (0);
seq__62918 = G__63622;
chunk__62919 = G__63623;
count__62920 = G__63624;
i__62921 = G__63625;
continue;
} else {
var vec__62947 = cljs.core.first(seq__62918__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62947,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62947,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63626 = cljs.core.next(seq__62918__$1);
var G__63627 = null;
var G__63628 = (0);
var G__63629 = (0);
seq__62918 = G__63626;
chunk__62919 = G__63627;
count__62920 = G__63628;
i__62921 = G__63629;
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
var G__62958_63630 = key;
var G__62958_63631__$1 = (((G__62958_63630 instanceof cljs.core.Keyword))?G__62958_63630.fqn:null);
switch (G__62958_63631__$1) {
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
var ks_63633 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_63633,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_63633,"aria-");
}
})())){
el.setAttribute(ks_63633,value);
} else {
(el[ks_63633] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__62996){
var map__62998 = p__62996;
var map__62998__$1 = cljs.core.__destructure_map(map__62998);
var props = map__62998__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62998__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__63003 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63003,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63003,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63003,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__63006 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__63006,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__63006;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__63008 = arguments.length;
switch (G__63008) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__63011){
var vec__63013 = p__63011;
var seq__63014 = cljs.core.seq(vec__63013);
var first__63015 = cljs.core.first(seq__63014);
var seq__63014__$1 = cljs.core.next(seq__63014);
var nn = first__63015;
var first__63015__$1 = cljs.core.first(seq__63014__$1);
var seq__63014__$2 = cljs.core.next(seq__63014__$1);
var np = first__63015__$1;
var nc = seq__63014__$2;
var node = vec__63013;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63019 = nn;
var G__63020 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63019,G__63020) : create_fn.call(null,G__63019,G__63020));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__63022 = nn;
var G__63023 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__63022,G__63023) : create_fn.call(null,G__63022,G__63023));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__63031 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63031,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63031,(1),null);
var seq__63035_63639 = cljs.core.seq(node_children);
var chunk__63036_63640 = null;
var count__63037_63641 = (0);
var i__63038_63642 = (0);
while(true){
if((i__63038_63642 < count__63037_63641)){
var child_struct_63643 = chunk__63036_63640.cljs$core$IIndexed$_nth$arity$2(null,i__63038_63642);
var children_63644 = shadow.dom.dom_node(child_struct_63643);
if(cljs.core.seq_QMARK_(children_63644)){
var seq__63078_63645 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63644));
var chunk__63080_63646 = null;
var count__63081_63647 = (0);
var i__63082_63648 = (0);
while(true){
if((i__63082_63648 < count__63081_63647)){
var child_63649 = chunk__63080_63646.cljs$core$IIndexed$_nth$arity$2(null,i__63082_63648);
if(cljs.core.truth_(child_63649)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63649);


var G__63650 = seq__63078_63645;
var G__63651 = chunk__63080_63646;
var G__63652 = count__63081_63647;
var G__63653 = (i__63082_63648 + (1));
seq__63078_63645 = G__63650;
chunk__63080_63646 = G__63651;
count__63081_63647 = G__63652;
i__63082_63648 = G__63653;
continue;
} else {
var G__63654 = seq__63078_63645;
var G__63655 = chunk__63080_63646;
var G__63656 = count__63081_63647;
var G__63657 = (i__63082_63648 + (1));
seq__63078_63645 = G__63654;
chunk__63080_63646 = G__63655;
count__63081_63647 = G__63656;
i__63082_63648 = G__63657;
continue;
}
} else {
var temp__5804__auto___63658 = cljs.core.seq(seq__63078_63645);
if(temp__5804__auto___63658){
var seq__63078_63659__$1 = temp__5804__auto___63658;
if(cljs.core.chunked_seq_QMARK_(seq__63078_63659__$1)){
var c__5568__auto___63660 = cljs.core.chunk_first(seq__63078_63659__$1);
var G__63661 = cljs.core.chunk_rest(seq__63078_63659__$1);
var G__63662 = c__5568__auto___63660;
var G__63663 = cljs.core.count(c__5568__auto___63660);
var G__63664 = (0);
seq__63078_63645 = G__63661;
chunk__63080_63646 = G__63662;
count__63081_63647 = G__63663;
i__63082_63648 = G__63664;
continue;
} else {
var child_63665 = cljs.core.first(seq__63078_63659__$1);
if(cljs.core.truth_(child_63665)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63665);


var G__63666 = cljs.core.next(seq__63078_63659__$1);
var G__63667 = null;
var G__63668 = (0);
var G__63669 = (0);
seq__63078_63645 = G__63666;
chunk__63080_63646 = G__63667;
count__63081_63647 = G__63668;
i__63082_63648 = G__63669;
continue;
} else {
var G__63670 = cljs.core.next(seq__63078_63659__$1);
var G__63671 = null;
var G__63672 = (0);
var G__63673 = (0);
seq__63078_63645 = G__63670;
chunk__63080_63646 = G__63671;
count__63081_63647 = G__63672;
i__63082_63648 = G__63673;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63644);
}


var G__63674 = seq__63035_63639;
var G__63675 = chunk__63036_63640;
var G__63676 = count__63037_63641;
var G__63677 = (i__63038_63642 + (1));
seq__63035_63639 = G__63674;
chunk__63036_63640 = G__63675;
count__63037_63641 = G__63676;
i__63038_63642 = G__63677;
continue;
} else {
var temp__5804__auto___63678 = cljs.core.seq(seq__63035_63639);
if(temp__5804__auto___63678){
var seq__63035_63679__$1 = temp__5804__auto___63678;
if(cljs.core.chunked_seq_QMARK_(seq__63035_63679__$1)){
var c__5568__auto___63680 = cljs.core.chunk_first(seq__63035_63679__$1);
var G__63681 = cljs.core.chunk_rest(seq__63035_63679__$1);
var G__63682 = c__5568__auto___63680;
var G__63683 = cljs.core.count(c__5568__auto___63680);
var G__63684 = (0);
seq__63035_63639 = G__63681;
chunk__63036_63640 = G__63682;
count__63037_63641 = G__63683;
i__63038_63642 = G__63684;
continue;
} else {
var child_struct_63685 = cljs.core.first(seq__63035_63679__$1);
var children_63686 = shadow.dom.dom_node(child_struct_63685);
if(cljs.core.seq_QMARK_(children_63686)){
var seq__63091_63687 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63686));
var chunk__63093_63688 = null;
var count__63094_63689 = (0);
var i__63095_63690 = (0);
while(true){
if((i__63095_63690 < count__63094_63689)){
var child_63691 = chunk__63093_63688.cljs$core$IIndexed$_nth$arity$2(null,i__63095_63690);
if(cljs.core.truth_(child_63691)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63691);


var G__63692 = seq__63091_63687;
var G__63693 = chunk__63093_63688;
var G__63694 = count__63094_63689;
var G__63695 = (i__63095_63690 + (1));
seq__63091_63687 = G__63692;
chunk__63093_63688 = G__63693;
count__63094_63689 = G__63694;
i__63095_63690 = G__63695;
continue;
} else {
var G__63699 = seq__63091_63687;
var G__63700 = chunk__63093_63688;
var G__63701 = count__63094_63689;
var G__63702 = (i__63095_63690 + (1));
seq__63091_63687 = G__63699;
chunk__63093_63688 = G__63700;
count__63094_63689 = G__63701;
i__63095_63690 = G__63702;
continue;
}
} else {
var temp__5804__auto___63703__$1 = cljs.core.seq(seq__63091_63687);
if(temp__5804__auto___63703__$1){
var seq__63091_63704__$1 = temp__5804__auto___63703__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63091_63704__$1)){
var c__5568__auto___63705 = cljs.core.chunk_first(seq__63091_63704__$1);
var G__63706 = cljs.core.chunk_rest(seq__63091_63704__$1);
var G__63707 = c__5568__auto___63705;
var G__63708 = cljs.core.count(c__5568__auto___63705);
var G__63709 = (0);
seq__63091_63687 = G__63706;
chunk__63093_63688 = G__63707;
count__63094_63689 = G__63708;
i__63095_63690 = G__63709;
continue;
} else {
var child_63710 = cljs.core.first(seq__63091_63704__$1);
if(cljs.core.truth_(child_63710)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63710);


var G__63711 = cljs.core.next(seq__63091_63704__$1);
var G__63712 = null;
var G__63713 = (0);
var G__63714 = (0);
seq__63091_63687 = G__63711;
chunk__63093_63688 = G__63712;
count__63094_63689 = G__63713;
i__63095_63690 = G__63714;
continue;
} else {
var G__63715 = cljs.core.next(seq__63091_63704__$1);
var G__63716 = null;
var G__63717 = (0);
var G__63718 = (0);
seq__63091_63687 = G__63715;
chunk__63093_63688 = G__63716;
count__63094_63689 = G__63717;
i__63095_63690 = G__63718;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63686);
}


var G__63719 = cljs.core.next(seq__63035_63679__$1);
var G__63720 = null;
var G__63721 = (0);
var G__63722 = (0);
seq__63035_63639 = G__63719;
chunk__63036_63640 = G__63720;
count__63037_63641 = G__63721;
i__63038_63642 = G__63722;
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
var seq__63130 = cljs.core.seq(node);
var chunk__63131 = null;
var count__63132 = (0);
var i__63133 = (0);
while(true){
if((i__63133 < count__63132)){
var n = chunk__63131.cljs$core$IIndexed$_nth$arity$2(null,i__63133);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63729 = seq__63130;
var G__63730 = chunk__63131;
var G__63731 = count__63132;
var G__63732 = (i__63133 + (1));
seq__63130 = G__63729;
chunk__63131 = G__63730;
count__63132 = G__63731;
i__63133 = G__63732;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63130);
if(temp__5804__auto__){
var seq__63130__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63130__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63130__$1);
var G__63741 = cljs.core.chunk_rest(seq__63130__$1);
var G__63742 = c__5568__auto__;
var G__63743 = cljs.core.count(c__5568__auto__);
var G__63744 = (0);
seq__63130 = G__63741;
chunk__63131 = G__63742;
count__63132 = G__63743;
i__63133 = G__63744;
continue;
} else {
var n = cljs.core.first(seq__63130__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63745 = cljs.core.next(seq__63130__$1);
var G__63746 = null;
var G__63747 = (0);
var G__63748 = (0);
seq__63130 = G__63745;
chunk__63131 = G__63746;
count__63132 = G__63747;
i__63133 = G__63748;
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
var G__63145 = arguments.length;
switch (G__63145) {
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
var G__63157 = arguments.length;
switch (G__63157) {
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
var G__63174 = arguments.length;
switch (G__63174) {
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
var len__5769__auto___63752 = arguments.length;
var i__5770__auto___63753 = (0);
while(true){
if((i__5770__auto___63753 < len__5769__auto___63752)){
args__5775__auto__.push((arguments[i__5770__auto___63753]));

var G__63754 = (i__5770__auto___63753 + (1));
i__5770__auto___63753 = G__63754;
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
var seq__63202_63755 = cljs.core.seq(nodes);
var chunk__63203_63756 = null;
var count__63204_63757 = (0);
var i__63205_63758 = (0);
while(true){
if((i__63205_63758 < count__63204_63757)){
var node_63759 = chunk__63203_63756.cljs$core$IIndexed$_nth$arity$2(null,i__63205_63758);
fragment.appendChild(shadow.dom._to_dom(node_63759));


var G__63760 = seq__63202_63755;
var G__63761 = chunk__63203_63756;
var G__63762 = count__63204_63757;
var G__63763 = (i__63205_63758 + (1));
seq__63202_63755 = G__63760;
chunk__63203_63756 = G__63761;
count__63204_63757 = G__63762;
i__63205_63758 = G__63763;
continue;
} else {
var temp__5804__auto___63764 = cljs.core.seq(seq__63202_63755);
if(temp__5804__auto___63764){
var seq__63202_63765__$1 = temp__5804__auto___63764;
if(cljs.core.chunked_seq_QMARK_(seq__63202_63765__$1)){
var c__5568__auto___63766 = cljs.core.chunk_first(seq__63202_63765__$1);
var G__63767 = cljs.core.chunk_rest(seq__63202_63765__$1);
var G__63768 = c__5568__auto___63766;
var G__63769 = cljs.core.count(c__5568__auto___63766);
var G__63770 = (0);
seq__63202_63755 = G__63767;
chunk__63203_63756 = G__63768;
count__63204_63757 = G__63769;
i__63205_63758 = G__63770;
continue;
} else {
var node_63771 = cljs.core.first(seq__63202_63765__$1);
fragment.appendChild(shadow.dom._to_dom(node_63771));


var G__63772 = cljs.core.next(seq__63202_63765__$1);
var G__63773 = null;
var G__63774 = (0);
var G__63775 = (0);
seq__63202_63755 = G__63772;
chunk__63203_63756 = G__63773;
count__63204_63757 = G__63774;
i__63205_63758 = G__63775;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq63195){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63195));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__63216_63776 = cljs.core.seq(scripts);
var chunk__63217_63777 = null;
var count__63218_63778 = (0);
var i__63219_63779 = (0);
while(true){
if((i__63219_63779 < count__63218_63778)){
var vec__63228_63780 = chunk__63217_63777.cljs$core$IIndexed$_nth$arity$2(null,i__63219_63779);
var script_tag_63781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228_63780,(0),null);
var script_body_63782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228_63780,(1),null);
eval(script_body_63782);


var G__63783 = seq__63216_63776;
var G__63784 = chunk__63217_63777;
var G__63785 = count__63218_63778;
var G__63786 = (i__63219_63779 + (1));
seq__63216_63776 = G__63783;
chunk__63217_63777 = G__63784;
count__63218_63778 = G__63785;
i__63219_63779 = G__63786;
continue;
} else {
var temp__5804__auto___63787 = cljs.core.seq(seq__63216_63776);
if(temp__5804__auto___63787){
var seq__63216_63788__$1 = temp__5804__auto___63787;
if(cljs.core.chunked_seq_QMARK_(seq__63216_63788__$1)){
var c__5568__auto___63789 = cljs.core.chunk_first(seq__63216_63788__$1);
var G__63790 = cljs.core.chunk_rest(seq__63216_63788__$1);
var G__63791 = c__5568__auto___63789;
var G__63792 = cljs.core.count(c__5568__auto___63789);
var G__63793 = (0);
seq__63216_63776 = G__63790;
chunk__63217_63777 = G__63791;
count__63218_63778 = G__63792;
i__63219_63779 = G__63793;
continue;
} else {
var vec__63231_63794 = cljs.core.first(seq__63216_63788__$1);
var script_tag_63795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63231_63794,(0),null);
var script_body_63796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63231_63794,(1),null);
eval(script_body_63796);


var G__63797 = cljs.core.next(seq__63216_63788__$1);
var G__63798 = null;
var G__63799 = (0);
var G__63800 = (0);
seq__63216_63776 = G__63797;
chunk__63217_63777 = G__63798;
count__63218_63778 = G__63799;
i__63219_63779 = G__63800;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__63234){
var vec__63235 = p__63234;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63235,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63235,(1),null);
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
var G__63241 = arguments.length;
switch (G__63241) {
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
var seq__63267 = cljs.core.seq(style_keys);
var chunk__63268 = null;
var count__63269 = (0);
var i__63270 = (0);
while(true){
if((i__63270 < count__63269)){
var it = chunk__63268.cljs$core$IIndexed$_nth$arity$2(null,i__63270);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63807 = seq__63267;
var G__63808 = chunk__63268;
var G__63809 = count__63269;
var G__63810 = (i__63270 + (1));
seq__63267 = G__63807;
chunk__63268 = G__63808;
count__63269 = G__63809;
i__63270 = G__63810;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__63267);
if(temp__5804__auto__){
var seq__63267__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63267__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__63267__$1);
var G__63812 = cljs.core.chunk_rest(seq__63267__$1);
var G__63813 = c__5568__auto__;
var G__63814 = cljs.core.count(c__5568__auto__);
var G__63815 = (0);
seq__63267 = G__63812;
chunk__63268 = G__63813;
count__63269 = G__63814;
i__63270 = G__63815;
continue;
} else {
var it = cljs.core.first(seq__63267__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63816 = cljs.core.next(seq__63267__$1);
var G__63817 = null;
var G__63818 = (0);
var G__63819 = (0);
seq__63267 = G__63816;
chunk__63268 = G__63817;
count__63269 = G__63818;
i__63270 = G__63819;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k63284,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__63297 = k63284;
var G__63297__$1 = (((G__63297 instanceof cljs.core.Keyword))?G__63297.fqn:null);
switch (G__63297__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63284,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__63306){
var vec__63307 = p__63306;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63307,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63307,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63283){
var self__ = this;
var G__63283__$1 = this;
return (new cljs.core.RecordIter((0),G__63283__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63285,other63286){
var self__ = this;
var this63285__$1 = this;
return (((!((other63286 == null)))) && ((((this63285__$1.constructor === other63286.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63285__$1.x,other63286.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63285__$1.y,other63286.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63285__$1.__extmap,other63286.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k63284){
var self__ = this;
var this__5350__auto____$1 = this;
var G__63335 = k63284;
var G__63335__$1 = (((G__63335 instanceof cljs.core.Keyword))?G__63335.fqn:null);
switch (G__63335__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63284);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__63283){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__63340 = cljs.core.keyword_identical_QMARK_;
var expr__63341 = k__5352__auto__;
if(cljs.core.truth_((pred__63340.cljs$core$IFn$_invoke$arity$2 ? pred__63340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__63341) : pred__63340.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__63341)))){
return (new shadow.dom.Coordinate(G__63283,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63340.cljs$core$IFn$_invoke$arity$2 ? pred__63340.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__63341) : pred__63340.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__63341)))){
return (new shadow.dom.Coordinate(self__.x,G__63283,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__63283),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__63283){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__63283,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__63291){
var extmap__5385__auto__ = (function (){var G__63359 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63291,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__63291)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63359);
} else {
return G__63359;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__63291),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__63291),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k63375,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__63382 = k63375;
var G__63382__$1 = (((G__63382 instanceof cljs.core.Keyword))?G__63382.fqn:null);
switch (G__63382__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63375,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__63383){
var vec__63384 = p__63383;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63384,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63384,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63374){
var self__ = this;
var G__63374__$1 = this;
return (new cljs.core.RecordIter((0),G__63374__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63376,other63377){
var self__ = this;
var this63376__$1 = this;
return (((!((other63377 == null)))) && ((((this63376__$1.constructor === other63377.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63376__$1.w,other63377.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63376__$1.h,other63377.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63376__$1.__extmap,other63377.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k63375){
var self__ = this;
var this__5350__auto____$1 = this;
var G__63387 = k63375;
var G__63387__$1 = (((G__63387 instanceof cljs.core.Keyword))?G__63387.fqn:null);
switch (G__63387__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63375);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__63374){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__63388 = cljs.core.keyword_identical_QMARK_;
var expr__63389 = k__5352__auto__;
if(cljs.core.truth_((pred__63388.cljs$core$IFn$_invoke$arity$2 ? pred__63388.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__63389) : pred__63388.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__63389)))){
return (new shadow.dom.Size(G__63374,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63388.cljs$core$IFn$_invoke$arity$2 ? pred__63388.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__63389) : pred__63388.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__63389)))){
return (new shadow.dom.Size(self__.w,G__63374,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__63374),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__63374){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__63374,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__63380){
var extmap__5385__auto__ = (function (){var G__63393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63380,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__63380)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63393);
} else {
return G__63393;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__63380),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__63380),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__63839 = (i + (1));
var G__63840 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63839;
ret = G__63840;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63403){
var vec__63404 = p__63403;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63404,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__63410 = arguments.length;
switch (G__63410) {
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
var G__63845 = ps;
var G__63846 = (i + (1));
el__$1 = G__63845;
i = G__63846;
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
var vec__63432 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63432,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__63435_63851 = cljs.core.seq(props);
var chunk__63436_63852 = null;
var count__63437_63853 = (0);
var i__63438_63854 = (0);
while(true){
if((i__63438_63854 < count__63437_63853)){
var vec__63449_63855 = chunk__63436_63852.cljs$core$IIndexed$_nth$arity$2(null,i__63438_63854);
var k_63856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63449_63855,(0),null);
var v_63857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63449_63855,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_63856);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63856),v_63857);


var G__63858 = seq__63435_63851;
var G__63859 = chunk__63436_63852;
var G__63860 = count__63437_63853;
var G__63861 = (i__63438_63854 + (1));
seq__63435_63851 = G__63858;
chunk__63436_63852 = G__63859;
count__63437_63853 = G__63860;
i__63438_63854 = G__63861;
continue;
} else {
var temp__5804__auto___63862 = cljs.core.seq(seq__63435_63851);
if(temp__5804__auto___63862){
var seq__63435_63863__$1 = temp__5804__auto___63862;
if(cljs.core.chunked_seq_QMARK_(seq__63435_63863__$1)){
var c__5568__auto___63864 = cljs.core.chunk_first(seq__63435_63863__$1);
var G__63865 = cljs.core.chunk_rest(seq__63435_63863__$1);
var G__63866 = c__5568__auto___63864;
var G__63867 = cljs.core.count(c__5568__auto___63864);
var G__63868 = (0);
seq__63435_63851 = G__63865;
chunk__63436_63852 = G__63866;
count__63437_63853 = G__63867;
i__63438_63854 = G__63868;
continue;
} else {
var vec__63452_63869 = cljs.core.first(seq__63435_63863__$1);
var k_63870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452_63869,(0),null);
var v_63871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63452_63869,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_63870);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63870),v_63871);


var G__63872 = cljs.core.next(seq__63435_63863__$1);
var G__63873 = null;
var G__63874 = (0);
var G__63875 = (0);
seq__63435_63851 = G__63872;
chunk__63436_63852 = G__63873;
count__63437_63853 = G__63874;
i__63438_63854 = G__63875;
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
var vec__63458 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63458,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63458,(1),null);
var seq__63461_63876 = cljs.core.seq(node_children);
var chunk__63463_63877 = null;
var count__63464_63878 = (0);
var i__63465_63879 = (0);
while(true){
if((i__63465_63879 < count__63464_63878)){
var child_struct_63880 = chunk__63463_63877.cljs$core$IIndexed$_nth$arity$2(null,i__63465_63879);
if((!((child_struct_63880 == null)))){
if(typeof child_struct_63880 === 'string'){
var text_63881 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63881),child_struct_63880].join(''));
} else {
var children_63882 = shadow.dom.svg_node(child_struct_63880);
if(cljs.core.seq_QMARK_(children_63882)){
var seq__63490_63883 = cljs.core.seq(children_63882);
var chunk__63492_63884 = null;
var count__63493_63885 = (0);
var i__63494_63886 = (0);
while(true){
if((i__63494_63886 < count__63493_63885)){
var child_63887 = chunk__63492_63884.cljs$core$IIndexed$_nth$arity$2(null,i__63494_63886);
if(cljs.core.truth_(child_63887)){
node.appendChild(child_63887);


var G__63888 = seq__63490_63883;
var G__63889 = chunk__63492_63884;
var G__63890 = count__63493_63885;
var G__63891 = (i__63494_63886 + (1));
seq__63490_63883 = G__63888;
chunk__63492_63884 = G__63889;
count__63493_63885 = G__63890;
i__63494_63886 = G__63891;
continue;
} else {
var G__63892 = seq__63490_63883;
var G__63893 = chunk__63492_63884;
var G__63894 = count__63493_63885;
var G__63895 = (i__63494_63886 + (1));
seq__63490_63883 = G__63892;
chunk__63492_63884 = G__63893;
count__63493_63885 = G__63894;
i__63494_63886 = G__63895;
continue;
}
} else {
var temp__5804__auto___63896 = cljs.core.seq(seq__63490_63883);
if(temp__5804__auto___63896){
var seq__63490_63897__$1 = temp__5804__auto___63896;
if(cljs.core.chunked_seq_QMARK_(seq__63490_63897__$1)){
var c__5568__auto___63898 = cljs.core.chunk_first(seq__63490_63897__$1);
var G__63899 = cljs.core.chunk_rest(seq__63490_63897__$1);
var G__63900 = c__5568__auto___63898;
var G__63901 = cljs.core.count(c__5568__auto___63898);
var G__63902 = (0);
seq__63490_63883 = G__63899;
chunk__63492_63884 = G__63900;
count__63493_63885 = G__63901;
i__63494_63886 = G__63902;
continue;
} else {
var child_63903 = cljs.core.first(seq__63490_63897__$1);
if(cljs.core.truth_(child_63903)){
node.appendChild(child_63903);


var G__63904 = cljs.core.next(seq__63490_63897__$1);
var G__63905 = null;
var G__63906 = (0);
var G__63907 = (0);
seq__63490_63883 = G__63904;
chunk__63492_63884 = G__63905;
count__63493_63885 = G__63906;
i__63494_63886 = G__63907;
continue;
} else {
var G__63908 = cljs.core.next(seq__63490_63897__$1);
var G__63909 = null;
var G__63910 = (0);
var G__63911 = (0);
seq__63490_63883 = G__63908;
chunk__63492_63884 = G__63909;
count__63493_63885 = G__63910;
i__63494_63886 = G__63911;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63882);
}
}


var G__63912 = seq__63461_63876;
var G__63913 = chunk__63463_63877;
var G__63914 = count__63464_63878;
var G__63915 = (i__63465_63879 + (1));
seq__63461_63876 = G__63912;
chunk__63463_63877 = G__63913;
count__63464_63878 = G__63914;
i__63465_63879 = G__63915;
continue;
} else {
var G__63916 = seq__63461_63876;
var G__63917 = chunk__63463_63877;
var G__63918 = count__63464_63878;
var G__63919 = (i__63465_63879 + (1));
seq__63461_63876 = G__63916;
chunk__63463_63877 = G__63917;
count__63464_63878 = G__63918;
i__63465_63879 = G__63919;
continue;
}
} else {
var temp__5804__auto___63920 = cljs.core.seq(seq__63461_63876);
if(temp__5804__auto___63920){
var seq__63461_63921__$1 = temp__5804__auto___63920;
if(cljs.core.chunked_seq_QMARK_(seq__63461_63921__$1)){
var c__5568__auto___63922 = cljs.core.chunk_first(seq__63461_63921__$1);
var G__63923 = cljs.core.chunk_rest(seq__63461_63921__$1);
var G__63924 = c__5568__auto___63922;
var G__63925 = cljs.core.count(c__5568__auto___63922);
var G__63926 = (0);
seq__63461_63876 = G__63923;
chunk__63463_63877 = G__63924;
count__63464_63878 = G__63925;
i__63465_63879 = G__63926;
continue;
} else {
var child_struct_63927 = cljs.core.first(seq__63461_63921__$1);
if((!((child_struct_63927 == null)))){
if(typeof child_struct_63927 === 'string'){
var text_63928 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63928),child_struct_63927].join(''));
} else {
var children_63933 = shadow.dom.svg_node(child_struct_63927);
if(cljs.core.seq_QMARK_(children_63933)){
var seq__63504_63934 = cljs.core.seq(children_63933);
var chunk__63506_63935 = null;
var count__63507_63936 = (0);
var i__63508_63937 = (0);
while(true){
if((i__63508_63937 < count__63507_63936)){
var child_63938 = chunk__63506_63935.cljs$core$IIndexed$_nth$arity$2(null,i__63508_63937);
if(cljs.core.truth_(child_63938)){
node.appendChild(child_63938);


var G__63941 = seq__63504_63934;
var G__63942 = chunk__63506_63935;
var G__63943 = count__63507_63936;
var G__63944 = (i__63508_63937 + (1));
seq__63504_63934 = G__63941;
chunk__63506_63935 = G__63942;
count__63507_63936 = G__63943;
i__63508_63937 = G__63944;
continue;
} else {
var G__63945 = seq__63504_63934;
var G__63946 = chunk__63506_63935;
var G__63947 = count__63507_63936;
var G__63948 = (i__63508_63937 + (1));
seq__63504_63934 = G__63945;
chunk__63506_63935 = G__63946;
count__63507_63936 = G__63947;
i__63508_63937 = G__63948;
continue;
}
} else {
var temp__5804__auto___63949__$1 = cljs.core.seq(seq__63504_63934);
if(temp__5804__auto___63949__$1){
var seq__63504_63950__$1 = temp__5804__auto___63949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63504_63950__$1)){
var c__5568__auto___63951 = cljs.core.chunk_first(seq__63504_63950__$1);
var G__63952 = cljs.core.chunk_rest(seq__63504_63950__$1);
var G__63953 = c__5568__auto___63951;
var G__63954 = cljs.core.count(c__5568__auto___63951);
var G__63955 = (0);
seq__63504_63934 = G__63952;
chunk__63506_63935 = G__63953;
count__63507_63936 = G__63954;
i__63508_63937 = G__63955;
continue;
} else {
var child_63958 = cljs.core.first(seq__63504_63950__$1);
if(cljs.core.truth_(child_63958)){
node.appendChild(child_63958);


var G__63959 = cljs.core.next(seq__63504_63950__$1);
var G__63960 = null;
var G__63961 = (0);
var G__63962 = (0);
seq__63504_63934 = G__63959;
chunk__63506_63935 = G__63960;
count__63507_63936 = G__63961;
i__63508_63937 = G__63962;
continue;
} else {
var G__63963 = cljs.core.next(seq__63504_63950__$1);
var G__63964 = null;
var G__63965 = (0);
var G__63966 = (0);
seq__63504_63934 = G__63963;
chunk__63506_63935 = G__63964;
count__63507_63936 = G__63965;
i__63508_63937 = G__63966;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63933);
}
}


var G__63970 = cljs.core.next(seq__63461_63921__$1);
var G__63971 = null;
var G__63972 = (0);
var G__63973 = (0);
seq__63461_63876 = G__63970;
chunk__63463_63877 = G__63971;
count__63464_63878 = G__63972;
i__63465_63879 = G__63973;
continue;
} else {
var G__63974 = cljs.core.next(seq__63461_63921__$1);
var G__63975 = null;
var G__63976 = (0);
var G__63977 = (0);
seq__63461_63876 = G__63974;
chunk__63463_63877 = G__63975;
count__63464_63878 = G__63976;
i__63465_63879 = G__63977;
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
var len__5769__auto___63978 = arguments.length;
var i__5770__auto___63979 = (0);
while(true){
if((i__5770__auto___63979 < len__5769__auto___63978)){
args__5775__auto__.push((arguments[i__5770__auto___63979]));

var G__63980 = (i__5770__auto___63979 + (1));
i__5770__auto___63979 = G__63980;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq63520){
var G__63521 = cljs.core.first(seq63520);
var seq63520__$1 = cljs.core.next(seq63520);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63521,seq63520__$1);
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
var G__63537 = arguments.length;
switch (G__63537) {
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
var c__34308__auto___63986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_63550){
var state_val_63551 = (state_63550[(1)]);
if((state_val_63551 === (1))){
var state_63550__$1 = state_63550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63550__$1,(2),once_or_cleanup);
} else {
if((state_val_63551 === (2))){
var inst_63547 = (state_63550[(2)]);
var inst_63548 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_63550__$1 = (function (){var statearr_63552 = state_63550;
(statearr_63552[(7)] = inst_63547);

return statearr_63552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63550__$1,inst_63548);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__34097__auto__ = null;
var shadow$dom$state_machine__34097__auto____0 = (function (){
var statearr_63553 = [null,null,null,null,null,null,null,null];
(statearr_63553[(0)] = shadow$dom$state_machine__34097__auto__);

(statearr_63553[(1)] = (1));

return statearr_63553;
});
var shadow$dom$state_machine__34097__auto____1 = (function (state_63550){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_63550);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e63554){var ex__34100__auto__ = e63554;
var statearr_63555_63989 = state_63550;
(statearr_63555_63989[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_63550[(4)]))){
var statearr_63556_63992 = state_63550;
(statearr_63556_63992[(1)] = cljs.core.first((state_63550[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63993 = state_63550;
state_63550 = G__63993;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
shadow$dom$state_machine__34097__auto__ = function(state_63550){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__34097__auto____0.call(this);
case 1:
return shadow$dom$state_machine__34097__auto____1.call(this,state_63550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__34097__auto____0;
shadow$dom$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__34097__auto____1;
return shadow$dom$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_63557 = f__34309__auto__();
(statearr_63557[(6)] = c__34308__auto___63986);

return statearr_63557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
