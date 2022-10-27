goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__60402 = arguments.length;
switch (G__60402) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60405 = (function (f,blockable,meta60406){
this.f = f;
this.blockable = blockable;
this.meta60406 = meta60406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60407,meta60406__$1){
var self__ = this;
var _60407__$1 = this;
return (new cljs.core.async.t_cljs$core$async60405(self__.f,self__.blockable,meta60406__$1));
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60407){
var self__ = this;
var _60407__$1 = this;
return self__.meta60406;
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async60405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta60406","meta60406",-387793383,null)], null);
}));

(cljs.core.async.t_cljs$core$async60405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60405");

(cljs.core.async.t_cljs$core$async60405.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async60405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60405.
 */
cljs.core.async.__GT_t_cljs$core$async60405 = (function cljs$core$async$__GT_t_cljs$core$async60405(f__$1,blockable__$1,meta60406){
return (new cljs.core.async.t_cljs$core$async60405(f__$1,blockable__$1,meta60406));
});

}

return (new cljs.core.async.t_cljs$core$async60405(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__60418 = arguments.length;
switch (G__60418) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__60423 = arguments.length;
switch (G__60423) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__60426 = arguments.length;
switch (G__60426) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_62671 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62671) : fn1.call(null,val_62671));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62671) : fn1.call(null,val_62671));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__60428 = arguments.length;
switch (G__60428) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___62673 = n;
var x_62674 = (0);
while(true){
if((x_62674 < n__5636__auto___62673)){
(a[x_62674] = x_62674);

var G__62675 = (x_62674 + (1));
x_62674 = G__62675;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60433 = (function (flag,meta60434){
this.flag = flag;
this.meta60434 = meta60434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60435,meta60434__$1){
var self__ = this;
var _60435__$1 = this;
return (new cljs.core.async.t_cljs$core$async60433(self__.flag,meta60434__$1));
}));

(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60435){
var self__ = this;
var _60435__$1 = this;
return self__.meta60434;
}));

(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async60433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60434","meta60434",-1316025865,null)], null);
}));

(cljs.core.async.t_cljs$core$async60433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60433");

(cljs.core.async.t_cljs$core$async60433.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async60433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60433.
 */
cljs.core.async.__GT_t_cljs$core$async60433 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60433(flag__$1,meta60434){
return (new cljs.core.async.t_cljs$core$async60433(flag__$1,meta60434));
});

}

return (new cljs.core.async.t_cljs$core$async60433(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60447 = (function (flag,cb,meta60448){
this.flag = flag;
this.cb = cb;
this.meta60448 = meta60448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60449,meta60448__$1){
var self__ = this;
var _60449__$1 = this;
return (new cljs.core.async.t_cljs$core$async60447(self__.flag,self__.cb,meta60448__$1));
}));

(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60449){
var self__ = this;
var _60449__$1 = this;
return self__.meta60448;
}));

(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async60447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60448","meta60448",-193307641,null)], null);
}));

(cljs.core.async.t_cljs$core$async60447.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60447");

(cljs.core.async.t_cljs$core$async60447.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async60447");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60447.
 */
cljs.core.async.__GT_t_cljs$core$async60447 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60447(flag__$1,cb__$1,meta60448){
return (new cljs.core.async.t_cljs$core$async60447(flag__$1,cb__$1,meta60448));
});

}

return (new cljs.core.async.t_cljs$core$async60447(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60499_SHARP_){
var G__60522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60499_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__60522) : fret.call(null,G__60522));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60504_SHARP_){
var G__60524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60504_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__60524) : fret.call(null,G__60524));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__62676 = (i + (1));
i = G__62676;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62677 = arguments.length;
var i__5770__auto___62678 = (0);
while(true){
if((i__5770__auto___62678 < len__5769__auto___62677)){
args__5775__auto__.push((arguments[i__5770__auto___62678]));

var G__62679 = (i__5770__auto___62678 + (1));
i__5770__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60543){
var map__60545 = p__60543;
var map__60545__$1 = cljs.core.__destructure_map(map__60545);
var opts = map__60545__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60533){
var G__60534 = cljs.core.first(seq60533);
var seq60533__$1 = cljs.core.next(seq60533);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60534,seq60533__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__60567 = arguments.length;
switch (G__60567) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34308__auto___62681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_60664){
var state_val_60665 = (state_60664[(1)]);
if((state_val_60665 === (7))){
var inst_60660 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
var statearr_60675_62682 = state_60664__$1;
(statearr_60675_62682[(2)] = inst_60660);

(statearr_60675_62682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (1))){
var state_60664__$1 = state_60664;
var statearr_60676_62683 = state_60664__$1;
(statearr_60676_62683[(2)] = null);

(statearr_60676_62683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (4))){
var inst_60618 = (state_60664[(7)]);
var inst_60618__$1 = (state_60664[(2)]);
var inst_60619 = (inst_60618__$1 == null);
var state_60664__$1 = (function (){var statearr_60677 = state_60664;
(statearr_60677[(7)] = inst_60618__$1);

return statearr_60677;
})();
if(cljs.core.truth_(inst_60619)){
var statearr_60678_62684 = state_60664__$1;
(statearr_60678_62684[(1)] = (5));

} else {
var statearr_60679_62685 = state_60664__$1;
(statearr_60679_62685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (13))){
var state_60664__$1 = state_60664;
var statearr_60680_62686 = state_60664__$1;
(statearr_60680_62686[(2)] = null);

(statearr_60680_62686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (6))){
var inst_60618 = (state_60664[(7)]);
var state_60664__$1 = state_60664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60664__$1,(11),to,inst_60618);
} else {
if((state_val_60665 === (3))){
var inst_60662 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60664__$1,inst_60662);
} else {
if((state_val_60665 === (12))){
var state_60664__$1 = state_60664;
var statearr_60696_62687 = state_60664__$1;
(statearr_60696_62687[(2)] = null);

(statearr_60696_62687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (2))){
var state_60664__$1 = state_60664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60664__$1,(4),from);
} else {
if((state_val_60665 === (11))){
var inst_60653 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
if(cljs.core.truth_(inst_60653)){
var statearr_60705_62688 = state_60664__$1;
(statearr_60705_62688[(1)] = (12));

} else {
var statearr_60706_62689 = state_60664__$1;
(statearr_60706_62689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (9))){
var state_60664__$1 = state_60664;
var statearr_60707_62690 = state_60664__$1;
(statearr_60707_62690[(2)] = null);

(statearr_60707_62690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (5))){
var state_60664__$1 = state_60664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60708_62691 = state_60664__$1;
(statearr_60708_62691[(1)] = (8));

} else {
var statearr_60709_62692 = state_60664__$1;
(statearr_60709_62692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (14))){
var inst_60658 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
var statearr_60715_62693 = state_60664__$1;
(statearr_60715_62693[(2)] = inst_60658);

(statearr_60715_62693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (10))){
var inst_60650 = (state_60664[(2)]);
var state_60664__$1 = state_60664;
var statearr_60716_62694 = state_60664__$1;
(statearr_60716_62694[(2)] = inst_60650);

(statearr_60716_62694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60665 === (8))){
var inst_60646 = cljs.core.async.close_BANG_(to);
var state_60664__$1 = state_60664;
var statearr_60717_62695 = state_60664__$1;
(statearr_60717_62695[(2)] = inst_60646);

(statearr_60717_62695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_60718 = [null,null,null,null,null,null,null,null];
(statearr_60718[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_60718[(1)] = (1));

return statearr_60718;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_60664){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_60664);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e60719){var ex__34100__auto__ = e60719;
var statearr_60720_62697 = state_60664;
(statearr_60720_62697[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_60664[(4)]))){
var statearr_60725_62698 = state_60664;
(statearr_60725_62698[(1)] = cljs.core.first((state_60664[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62699 = state_60664;
state_60664 = G__62699;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_60664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_60664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_60767 = f__34309__auto__();
(statearr_60767[(6)] = c__34308__auto___62681);

return statearr_60767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__60798){
var vec__60799 = p__60798;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60799,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60799,(1),null);
var job = vec__60799;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34308__auto___62702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_60833){
var state_val_60836 = (state_60833[(1)]);
if((state_val_60836 === (1))){
var state_60833__$1 = state_60833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60833__$1,(2),res,v);
} else {
if((state_val_60836 === (2))){
var inst_60821 = (state_60833[(2)]);
var inst_60823 = cljs.core.async.close_BANG_(res);
var state_60833__$1 = (function (){var statearr_60851 = state_60833;
(statearr_60851[(7)] = inst_60821);

return statearr_60851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60833__$1,inst_60823);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_60852 = [null,null,null,null,null,null,null,null];
(statearr_60852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_60852[(1)] = (1));

return statearr_60852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_60833){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_60833);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e60865){var ex__34100__auto__ = e60865;
var statearr_60870_62704 = state_60833;
(statearr_60870_62704[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_60833[(4)]))){
var statearr_60871_62706 = state_60833;
(statearr_60871_62706[(1)] = cljs.core.first((state_60833[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62707 = state_60833;
state_60833 = G__62707;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_60833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_60833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_60872 = f__34309__auto__();
(statearr_60872[(6)] = c__34308__auto___62702);

return statearr_60872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__60879){
var vec__60889 = p__60879;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60889,(1),null);
var job = vec__60889;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___62708 = n;
var __62709 = (0);
while(true){
if((__62709 < n__5636__auto___62708)){
var G__60904_62710 = type;
var G__60904_62711__$1 = (((G__60904_62710 instanceof cljs.core.Keyword))?G__60904_62710.fqn:null);
switch (G__60904_62711__$1) {
case "compute":
var c__34308__auto___62713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62709,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = ((function (__62709,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function (state_60918){
var state_val_60919 = (state_60918[(1)]);
if((state_val_60919 === (1))){
var state_60918__$1 = state_60918;
var statearr_60925_62714 = state_60918__$1;
(statearr_60925_62714[(2)] = null);

(statearr_60925_62714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60919 === (2))){
var state_60918__$1 = state_60918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60918__$1,(4),jobs);
} else {
if((state_val_60919 === (3))){
var inst_60916 = (state_60918[(2)]);
var state_60918__$1 = state_60918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60918__$1,inst_60916);
} else {
if((state_val_60919 === (4))){
var inst_60907 = (state_60918[(2)]);
var inst_60908 = process__$1(inst_60907);
var state_60918__$1 = state_60918;
if(cljs.core.truth_(inst_60908)){
var statearr_60931_62715 = state_60918__$1;
(statearr_60931_62715[(1)] = (5));

} else {
var statearr_60936_62716 = state_60918__$1;
(statearr_60936_62716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60919 === (5))){
var state_60918__$1 = state_60918;
var statearr_60941_62717 = state_60918__$1;
(statearr_60941_62717[(2)] = null);

(statearr_60941_62717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60919 === (6))){
var state_60918__$1 = state_60918;
var statearr_60942_62718 = state_60918__$1;
(statearr_60942_62718[(2)] = null);

(statearr_60942_62718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60919 === (7))){
var inst_60914 = (state_60918[(2)]);
var state_60918__$1 = state_60918;
var statearr_60948_62720 = state_60918__$1;
(statearr_60948_62720[(2)] = inst_60914);

(statearr_60948_62720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__62709,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
;
return ((function (__62709,switch__34096__auto__,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_60950 = [null,null,null,null,null,null,null];
(statearr_60950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_60950[(1)] = (1));

return statearr_60950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_60918){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_60918);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e60956){var ex__34100__auto__ = e60956;
var statearr_60957_62721 = state_60918;
(statearr_60957_62721[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_60918[(4)]))){
var statearr_60958_62722 = state_60918;
(statearr_60958_62722[(1)] = cljs.core.first((state_60918[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62729 = state_60918;
state_60918 = G__62729;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_60918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_60918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
;})(__62709,switch__34096__auto__,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
})();
var state__34310__auto__ = (function (){var statearr_60962 = f__34309__auto__();
(statearr_60962[(6)] = c__34308__auto___62713);

return statearr_60962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
});})(__62709,c__34308__auto___62713,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
);


break;
case "async":
var c__34308__auto___62730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62709,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = ((function (__62709,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function (state_60975){
var state_val_60976 = (state_60975[(1)]);
if((state_val_60976 === (1))){
var state_60975__$1 = state_60975;
var statearr_60977_62731 = state_60975__$1;
(statearr_60977_62731[(2)] = null);

(statearr_60977_62731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60976 === (2))){
var state_60975__$1 = state_60975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60975__$1,(4),jobs);
} else {
if((state_val_60976 === (3))){
var inst_60973 = (state_60975[(2)]);
var state_60975__$1 = state_60975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60975__$1,inst_60973);
} else {
if((state_val_60976 === (4))){
var inst_60965 = (state_60975[(2)]);
var inst_60966 = async(inst_60965);
var state_60975__$1 = state_60975;
if(cljs.core.truth_(inst_60966)){
var statearr_60978_62732 = state_60975__$1;
(statearr_60978_62732[(1)] = (5));

} else {
var statearr_60979_62733 = state_60975__$1;
(statearr_60979_62733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60976 === (5))){
var state_60975__$1 = state_60975;
var statearr_60980_62734 = state_60975__$1;
(statearr_60980_62734[(2)] = null);

(statearr_60980_62734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60976 === (6))){
var state_60975__$1 = state_60975;
var statearr_60981_62735 = state_60975__$1;
(statearr_60981_62735[(2)] = null);

(statearr_60981_62735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60976 === (7))){
var inst_60971 = (state_60975[(2)]);
var state_60975__$1 = state_60975;
var statearr_60982_62736 = state_60975__$1;
(statearr_60982_62736[(2)] = inst_60971);

(statearr_60982_62736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__62709,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
;
return ((function (__62709,switch__34096__auto__,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_60983 = [null,null,null,null,null,null,null];
(statearr_60983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_60983[(1)] = (1));

return statearr_60983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_60975){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_60975);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e60984){var ex__34100__auto__ = e60984;
var statearr_60985_62737 = state_60975;
(statearr_60985_62737[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_60975[(4)]))){
var statearr_60986_62738 = state_60975;
(statearr_60986_62738[(1)] = cljs.core.first((state_60975[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62739 = state_60975;
state_60975 = G__62739;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_60975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_60975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
;})(__62709,switch__34096__auto__,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
})();
var state__34310__auto__ = (function (){var statearr_60988 = f__34309__auto__();
(statearr_60988[(6)] = c__34308__auto___62730);

return statearr_60988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
});})(__62709,c__34308__auto___62730,G__60904_62710,G__60904_62711__$1,n__5636__auto___62708,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60904_62711__$1)].join('')));

}

var G__62740 = (__62709 + (1));
__62709 = G__62740;
continue;
} else {
}
break;
}

var c__34308__auto___62741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61013){
var state_val_61014 = (state_61013[(1)]);
if((state_val_61014 === (7))){
var inst_61009 = (state_61013[(2)]);
var state_61013__$1 = state_61013;
var statearr_61015_62742 = state_61013__$1;
(statearr_61015_62742[(2)] = inst_61009);

(statearr_61015_62742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (1))){
var state_61013__$1 = state_61013;
var statearr_61016_62743 = state_61013__$1;
(statearr_61016_62743[(2)] = null);

(statearr_61016_62743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (4))){
var inst_60994 = (state_61013[(7)]);
var inst_60994__$1 = (state_61013[(2)]);
var inst_60995 = (inst_60994__$1 == null);
var state_61013__$1 = (function (){var statearr_61018 = state_61013;
(statearr_61018[(7)] = inst_60994__$1);

return statearr_61018;
})();
if(cljs.core.truth_(inst_60995)){
var statearr_61019_62744 = state_61013__$1;
(statearr_61019_62744[(1)] = (5));

} else {
var statearr_61020_62745 = state_61013__$1;
(statearr_61020_62745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (6))){
var inst_60999 = (state_61013[(8)]);
var inst_60994 = (state_61013[(7)]);
var inst_60999__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61001 = [inst_60994,inst_60999__$1];
var inst_61002 = (new cljs.core.PersistentVector(null,2,(5),inst_61000,inst_61001,null));
var state_61013__$1 = (function (){var statearr_61021 = state_61013;
(statearr_61021[(8)] = inst_60999__$1);

return statearr_61021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61013__$1,(8),jobs,inst_61002);
} else {
if((state_val_61014 === (3))){
var inst_61011 = (state_61013[(2)]);
var state_61013__$1 = state_61013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61013__$1,inst_61011);
} else {
if((state_val_61014 === (2))){
var state_61013__$1 = state_61013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61013__$1,(4),from);
} else {
if((state_val_61014 === (9))){
var inst_61006 = (state_61013[(2)]);
var state_61013__$1 = (function (){var statearr_61022 = state_61013;
(statearr_61022[(9)] = inst_61006);

return statearr_61022;
})();
var statearr_61023_62748 = state_61013__$1;
(statearr_61023_62748[(2)] = null);

(statearr_61023_62748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (5))){
var inst_60997 = cljs.core.async.close_BANG_(jobs);
var state_61013__$1 = state_61013;
var statearr_61024_62750 = state_61013__$1;
(statearr_61024_62750[(2)] = inst_60997);

(statearr_61024_62750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61014 === (8))){
var inst_60999 = (state_61013[(8)]);
var inst_61004 = (state_61013[(2)]);
var state_61013__$1 = (function (){var statearr_61025 = state_61013;
(statearr_61025[(10)] = inst_61004);

return statearr_61025;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61013__$1,(9),results,inst_60999);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_61026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_61026[(1)] = (1));

return statearr_61026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_61013){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61013);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61027){var ex__34100__auto__ = e61027;
var statearr_61028_62751 = state_61013;
(statearr_61028_62751[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61013[(4)]))){
var statearr_61029_62752 = state_61013;
(statearr_61029_62752[(1)] = cljs.core.first((state_61013[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62753 = state_61013;
state_61013 = G__62753;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_61013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_61013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61030 = f__34309__auto__();
(statearr_61030[(6)] = c__34308__auto___62741);

return statearr_61030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61078){
var state_val_61079 = (state_61078[(1)]);
if((state_val_61079 === (7))){
var inst_61074 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61081_62754 = state_61078__$1;
(statearr_61081_62754[(2)] = inst_61074);

(statearr_61081_62754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (20))){
var state_61078__$1 = state_61078;
var statearr_61082_62755 = state_61078__$1;
(statearr_61082_62755[(2)] = null);

(statearr_61082_62755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (1))){
var state_61078__$1 = state_61078;
var statearr_61083_62756 = state_61078__$1;
(statearr_61083_62756[(2)] = null);

(statearr_61083_62756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (4))){
var inst_61042 = (state_61078[(7)]);
var inst_61042__$1 = (state_61078[(2)]);
var inst_61043 = (inst_61042__$1 == null);
var state_61078__$1 = (function (){var statearr_61084 = state_61078;
(statearr_61084[(7)] = inst_61042__$1);

return statearr_61084;
})();
if(cljs.core.truth_(inst_61043)){
var statearr_61085_62757 = state_61078__$1;
(statearr_61085_62757[(1)] = (5));

} else {
var statearr_61086_62759 = state_61078__$1;
(statearr_61086_62759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (15))){
var inst_61055 = (state_61078[(8)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61078__$1,(18),to,inst_61055);
} else {
if((state_val_61079 === (21))){
var inst_61069 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61089_62761 = state_61078__$1;
(statearr_61089_62761[(2)] = inst_61069);

(statearr_61089_62761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (13))){
var inst_61071 = (state_61078[(2)]);
var state_61078__$1 = (function (){var statearr_61092 = state_61078;
(statearr_61092[(9)] = inst_61071);

return statearr_61092;
})();
var statearr_61093_62762 = state_61078__$1;
(statearr_61093_62762[(2)] = null);

(statearr_61093_62762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (6))){
var inst_61042 = (state_61078[(7)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61078__$1,(11),inst_61042);
} else {
if((state_val_61079 === (17))){
var inst_61064 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
if(cljs.core.truth_(inst_61064)){
var statearr_61096_62763 = state_61078__$1;
(statearr_61096_62763[(1)] = (19));

} else {
var statearr_61097_62764 = state_61078__$1;
(statearr_61097_62764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (3))){
var inst_61076 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61078__$1,inst_61076);
} else {
if((state_val_61079 === (12))){
var inst_61052 = (state_61078[(10)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61078__$1,(14),inst_61052);
} else {
if((state_val_61079 === (2))){
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61078__$1,(4),results);
} else {
if((state_val_61079 === (19))){
var state_61078__$1 = state_61078;
var statearr_61100_62765 = state_61078__$1;
(statearr_61100_62765[(2)] = null);

(statearr_61100_62765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (11))){
var inst_61052 = (state_61078[(2)]);
var state_61078__$1 = (function (){var statearr_61101 = state_61078;
(statearr_61101[(10)] = inst_61052);

return statearr_61101;
})();
var statearr_61103_62766 = state_61078__$1;
(statearr_61103_62766[(2)] = null);

(statearr_61103_62766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (9))){
var state_61078__$1 = state_61078;
var statearr_61105_62768 = state_61078__$1;
(statearr_61105_62768[(2)] = null);

(statearr_61105_62768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (5))){
var state_61078__$1 = state_61078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61108_62770 = state_61078__$1;
(statearr_61108_62770[(1)] = (8));

} else {
var statearr_61109_62772 = state_61078__$1;
(statearr_61109_62772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (14))){
var inst_61055 = (state_61078[(8)]);
var inst_61058 = (state_61078[(11)]);
var inst_61055__$1 = (state_61078[(2)]);
var inst_61057 = (inst_61055__$1 == null);
var inst_61058__$1 = cljs.core.not(inst_61057);
var state_61078__$1 = (function (){var statearr_61112 = state_61078;
(statearr_61112[(8)] = inst_61055__$1);

(statearr_61112[(11)] = inst_61058__$1);

return statearr_61112;
})();
if(inst_61058__$1){
var statearr_61113_62774 = state_61078__$1;
(statearr_61113_62774[(1)] = (15));

} else {
var statearr_61114_62775 = state_61078__$1;
(statearr_61114_62775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (16))){
var inst_61058 = (state_61078[(11)]);
var state_61078__$1 = state_61078;
var statearr_61115_62776 = state_61078__$1;
(statearr_61115_62776[(2)] = inst_61058);

(statearr_61115_62776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (10))){
var inst_61049 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61116_62777 = state_61078__$1;
(statearr_61116_62777[(2)] = inst_61049);

(statearr_61116_62777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (18))){
var inst_61061 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61117_62778 = state_61078__$1;
(statearr_61117_62778[(2)] = inst_61061);

(statearr_61117_62778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (8))){
var inst_61046 = cljs.core.async.close_BANG_(to);
var state_61078__$1 = state_61078;
var statearr_61118_62779 = state_61078__$1;
(statearr_61118_62779[(2)] = inst_61046);

(statearr_61118_62779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_61121 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_61121[(1)] = (1));

return statearr_61121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_61078){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61078);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61124){var ex__34100__auto__ = e61124;
var statearr_61125_62781 = state_61078;
(statearr_61125_62781[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61078[(4)]))){
var statearr_61126_62783 = state_61078;
(statearr_61126_62783[(1)] = cljs.core.first((state_61078[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62784 = state_61078;
state_61078 = G__62784;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_61078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_61078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61129 = f__34309__auto__();
(statearr_61129[(6)] = c__34308__auto__);

return statearr_61129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__61131 = arguments.length;
switch (G__61131) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__61143 = arguments.length;
switch (G__61143) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__61145 = arguments.length;
switch (G__61145) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34308__auto___62798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61174){
var state_val_61175 = (state_61174[(1)]);
if((state_val_61175 === (7))){
var inst_61170 = (state_61174[(2)]);
var state_61174__$1 = state_61174;
var statearr_61176_62799 = state_61174__$1;
(statearr_61176_62799[(2)] = inst_61170);

(statearr_61176_62799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (1))){
var state_61174__$1 = state_61174;
var statearr_61177_62800 = state_61174__$1;
(statearr_61177_62800[(2)] = null);

(statearr_61177_62800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (4))){
var inst_61151 = (state_61174[(7)]);
var inst_61151__$1 = (state_61174[(2)]);
var inst_61152 = (inst_61151__$1 == null);
var state_61174__$1 = (function (){var statearr_61178 = state_61174;
(statearr_61178[(7)] = inst_61151__$1);

return statearr_61178;
})();
if(cljs.core.truth_(inst_61152)){
var statearr_61179_62801 = state_61174__$1;
(statearr_61179_62801[(1)] = (5));

} else {
var statearr_61180_62802 = state_61174__$1;
(statearr_61180_62802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (13))){
var state_61174__$1 = state_61174;
var statearr_61181_62803 = state_61174__$1;
(statearr_61181_62803[(2)] = null);

(statearr_61181_62803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (6))){
var inst_61151 = (state_61174[(7)]);
var inst_61157 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61151) : p.call(null,inst_61151));
var state_61174__$1 = state_61174;
if(cljs.core.truth_(inst_61157)){
var statearr_61182_62804 = state_61174__$1;
(statearr_61182_62804[(1)] = (9));

} else {
var statearr_61183_62805 = state_61174__$1;
(statearr_61183_62805[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (3))){
var inst_61172 = (state_61174[(2)]);
var state_61174__$1 = state_61174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61174__$1,inst_61172);
} else {
if((state_val_61175 === (12))){
var state_61174__$1 = state_61174;
var statearr_61184_62806 = state_61174__$1;
(statearr_61184_62806[(2)] = null);

(statearr_61184_62806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (2))){
var state_61174__$1 = state_61174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61174__$1,(4),ch);
} else {
if((state_val_61175 === (11))){
var inst_61151 = (state_61174[(7)]);
var inst_61161 = (state_61174[(2)]);
var state_61174__$1 = state_61174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61174__$1,(8),inst_61161,inst_61151);
} else {
if((state_val_61175 === (9))){
var state_61174__$1 = state_61174;
var statearr_61185_62807 = state_61174__$1;
(statearr_61185_62807[(2)] = tc);

(statearr_61185_62807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (5))){
var inst_61154 = cljs.core.async.close_BANG_(tc);
var inst_61155 = cljs.core.async.close_BANG_(fc);
var state_61174__$1 = (function (){var statearr_61188 = state_61174;
(statearr_61188[(8)] = inst_61154);

return statearr_61188;
})();
var statearr_61189_62808 = state_61174__$1;
(statearr_61189_62808[(2)] = inst_61155);

(statearr_61189_62808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (14))){
var inst_61168 = (state_61174[(2)]);
var state_61174__$1 = state_61174;
var statearr_61190_62809 = state_61174__$1;
(statearr_61190_62809[(2)] = inst_61168);

(statearr_61190_62809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (10))){
var state_61174__$1 = state_61174;
var statearr_61191_62810 = state_61174__$1;
(statearr_61191_62810[(2)] = fc);

(statearr_61191_62810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61175 === (8))){
var inst_61163 = (state_61174[(2)]);
var state_61174__$1 = state_61174;
if(cljs.core.truth_(inst_61163)){
var statearr_61197_62811 = state_61174__$1;
(statearr_61197_62811[(1)] = (12));

} else {
var statearr_61198_62812 = state_61174__$1;
(statearr_61198_62812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_61199 = [null,null,null,null,null,null,null,null,null];
(statearr_61199[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_61199[(1)] = (1));

return statearr_61199;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_61174){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61174);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61201){var ex__34100__auto__ = e61201;
var statearr_61202_62813 = state_61174;
(statearr_61202_62813[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61174[(4)]))){
var statearr_61203_62814 = state_61174;
(statearr_61203_62814[(1)] = cljs.core.first((state_61174[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62815 = state_61174;
state_61174 = G__62815;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_61174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_61174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61204 = f__34309__auto__();
(statearr_61204[(6)] = c__34308__auto___62798);

return statearr_61204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61255){
var state_val_61256 = (state_61255[(1)]);
if((state_val_61256 === (7))){
var inst_61251 = (state_61255[(2)]);
var state_61255__$1 = state_61255;
var statearr_61261_62817 = state_61255__$1;
(statearr_61261_62817[(2)] = inst_61251);

(statearr_61261_62817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (1))){
var inst_61223 = init;
var inst_61224 = inst_61223;
var state_61255__$1 = (function (){var statearr_61264 = state_61255;
(statearr_61264[(7)] = inst_61224);

return statearr_61264;
})();
var statearr_61265_62819 = state_61255__$1;
(statearr_61265_62819[(2)] = null);

(statearr_61265_62819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (4))){
var inst_61232 = (state_61255[(8)]);
var inst_61232__$1 = (state_61255[(2)]);
var inst_61233 = (inst_61232__$1 == null);
var state_61255__$1 = (function (){var statearr_61266 = state_61255;
(statearr_61266[(8)] = inst_61232__$1);

return statearr_61266;
})();
if(cljs.core.truth_(inst_61233)){
var statearr_61267_62821 = state_61255__$1;
(statearr_61267_62821[(1)] = (5));

} else {
var statearr_61268_62822 = state_61255__$1;
(statearr_61268_62822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (6))){
var inst_61236 = (state_61255[(9)]);
var inst_61224 = (state_61255[(7)]);
var inst_61232 = (state_61255[(8)]);
var inst_61236__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61224,inst_61232) : f.call(null,inst_61224,inst_61232));
var inst_61237 = cljs.core.reduced_QMARK_(inst_61236__$1);
var state_61255__$1 = (function (){var statearr_61269 = state_61255;
(statearr_61269[(9)] = inst_61236__$1);

return statearr_61269;
})();
if(inst_61237){
var statearr_61270_62823 = state_61255__$1;
(statearr_61270_62823[(1)] = (8));

} else {
var statearr_61271_62824 = state_61255__$1;
(statearr_61271_62824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (3))){
var inst_61253 = (state_61255[(2)]);
var state_61255__$1 = state_61255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61255__$1,inst_61253);
} else {
if((state_val_61256 === (2))){
var state_61255__$1 = state_61255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61255__$1,(4),ch);
} else {
if((state_val_61256 === (9))){
var inst_61236 = (state_61255[(9)]);
var inst_61224 = inst_61236;
var state_61255__$1 = (function (){var statearr_61274 = state_61255;
(statearr_61274[(7)] = inst_61224);

return statearr_61274;
})();
var statearr_61275_62825 = state_61255__$1;
(statearr_61275_62825[(2)] = null);

(statearr_61275_62825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (5))){
var inst_61224 = (state_61255[(7)]);
var state_61255__$1 = state_61255;
var statearr_61278_62826 = state_61255__$1;
(statearr_61278_62826[(2)] = inst_61224);

(statearr_61278_62826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (10))){
var inst_61249 = (state_61255[(2)]);
var state_61255__$1 = state_61255;
var statearr_61279_62827 = state_61255__$1;
(statearr_61279_62827[(2)] = inst_61249);

(statearr_61279_62827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61256 === (8))){
var inst_61236 = (state_61255[(9)]);
var inst_61245 = cljs.core.deref(inst_61236);
var state_61255__$1 = state_61255;
var statearr_61280_62828 = state_61255__$1;
(statearr_61280_62828[(2)] = inst_61245);

(statearr_61280_62828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34097__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34097__auto____0 = (function (){
var statearr_61281 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61281[(0)] = cljs$core$async$reduce_$_state_machine__34097__auto__);

(statearr_61281[(1)] = (1));

return statearr_61281;
});
var cljs$core$async$reduce_$_state_machine__34097__auto____1 = (function (state_61255){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61255);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61282){var ex__34100__auto__ = e61282;
var statearr_61283_62831 = state_61255;
(statearr_61283_62831[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61255[(4)]))){
var statearr_61284_62832 = state_61255;
(statearr_61284_62832[(1)] = cljs.core.first((state_61255[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62833 = state_61255;
state_61255 = G__62833;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34097__auto__ = function(state_61255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34097__auto____1.call(this,state_61255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34097__auto____0;
cljs$core$async$reduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34097__auto____1;
return cljs$core$async$reduce_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61286 = f__34309__auto__();
(statearr_61286[(6)] = c__34308__auto__);

return statearr_61286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61292){
var state_val_61293 = (state_61292[(1)]);
if((state_val_61293 === (1))){
var inst_61287 = cljs.core.async.reduce(f__$1,init,ch);
var state_61292__$1 = state_61292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61292__$1,(2),inst_61287);
} else {
if((state_val_61293 === (2))){
var inst_61289 = (state_61292[(2)]);
var inst_61290 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_61289) : f__$1.call(null,inst_61289));
var state_61292__$1 = state_61292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61292__$1,inst_61290);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34097__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34097__auto____0 = (function (){
var statearr_61295 = [null,null,null,null,null,null,null];
(statearr_61295[(0)] = cljs$core$async$transduce_$_state_machine__34097__auto__);

(statearr_61295[(1)] = (1));

return statearr_61295;
});
var cljs$core$async$transduce_$_state_machine__34097__auto____1 = (function (state_61292){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61292);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61296){var ex__34100__auto__ = e61296;
var statearr_61297_62838 = state_61292;
(statearr_61297_62838[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61292[(4)]))){
var statearr_61298_62839 = state_61292;
(statearr_61298_62839[(1)] = cljs.core.first((state_61292[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62840 = state_61292;
state_61292 = G__62840;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34097__auto__ = function(state_61292){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34097__auto____1.call(this,state_61292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34097__auto____0;
cljs$core$async$transduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34097__auto____1;
return cljs$core$async$transduce_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61299 = f__34309__auto__();
(statearr_61299[(6)] = c__34308__auto__);

return statearr_61299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__61301 = arguments.length;
switch (G__61301) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61326){
var state_val_61327 = (state_61326[(1)]);
if((state_val_61327 === (7))){
var inst_61308 = (state_61326[(2)]);
var state_61326__$1 = state_61326;
var statearr_61328_62843 = state_61326__$1;
(statearr_61328_62843[(2)] = inst_61308);

(statearr_61328_62843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (1))){
var inst_61302 = cljs.core.seq(coll);
var inst_61303 = inst_61302;
var state_61326__$1 = (function (){var statearr_61329 = state_61326;
(statearr_61329[(7)] = inst_61303);

return statearr_61329;
})();
var statearr_61330_62844 = state_61326__$1;
(statearr_61330_62844[(2)] = null);

(statearr_61330_62844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (4))){
var inst_61303 = (state_61326[(7)]);
var inst_61306 = cljs.core.first(inst_61303);
var state_61326__$1 = state_61326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61326__$1,(7),ch,inst_61306);
} else {
if((state_val_61327 === (13))){
var inst_61320 = (state_61326[(2)]);
var state_61326__$1 = state_61326;
var statearr_61331_62845 = state_61326__$1;
(statearr_61331_62845[(2)] = inst_61320);

(statearr_61331_62845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (6))){
var inst_61311 = (state_61326[(2)]);
var state_61326__$1 = state_61326;
if(cljs.core.truth_(inst_61311)){
var statearr_61332_62846 = state_61326__$1;
(statearr_61332_62846[(1)] = (8));

} else {
var statearr_61333_62847 = state_61326__$1;
(statearr_61333_62847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (3))){
var inst_61324 = (state_61326[(2)]);
var state_61326__$1 = state_61326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61326__$1,inst_61324);
} else {
if((state_val_61327 === (12))){
var state_61326__$1 = state_61326;
var statearr_61334_62849 = state_61326__$1;
(statearr_61334_62849[(2)] = null);

(statearr_61334_62849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (2))){
var inst_61303 = (state_61326[(7)]);
var state_61326__$1 = state_61326;
if(cljs.core.truth_(inst_61303)){
var statearr_61335_62850 = state_61326__$1;
(statearr_61335_62850[(1)] = (4));

} else {
var statearr_61336_62851 = state_61326__$1;
(statearr_61336_62851[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (11))){
var inst_61317 = cljs.core.async.close_BANG_(ch);
var state_61326__$1 = state_61326;
var statearr_61337_62852 = state_61326__$1;
(statearr_61337_62852[(2)] = inst_61317);

(statearr_61337_62852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (9))){
var state_61326__$1 = state_61326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61342_62853 = state_61326__$1;
(statearr_61342_62853[(1)] = (11));

} else {
var statearr_61343_62854 = state_61326__$1;
(statearr_61343_62854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (5))){
var inst_61303 = (state_61326[(7)]);
var state_61326__$1 = state_61326;
var statearr_61344_62855 = state_61326__$1;
(statearr_61344_62855[(2)] = inst_61303);

(statearr_61344_62855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (10))){
var inst_61322 = (state_61326[(2)]);
var state_61326__$1 = state_61326;
var statearr_61345_62856 = state_61326__$1;
(statearr_61345_62856[(2)] = inst_61322);

(statearr_61345_62856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61327 === (8))){
var inst_61303 = (state_61326[(7)]);
var inst_61313 = cljs.core.next(inst_61303);
var inst_61303__$1 = inst_61313;
var state_61326__$1 = (function (){var statearr_61350 = state_61326;
(statearr_61350[(7)] = inst_61303__$1);

return statearr_61350;
})();
var statearr_61351_62861 = state_61326__$1;
(statearr_61351_62861[(2)] = null);

(statearr_61351_62861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_61357 = [null,null,null,null,null,null,null,null];
(statearr_61357[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_61357[(1)] = (1));

return statearr_61357;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_61326){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61326);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61360){var ex__34100__auto__ = e61360;
var statearr_61361_62862 = state_61326;
(statearr_61361_62862[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61326[(4)]))){
var statearr_61362_62863 = state_61326;
(statearr_61362_62863[(1)] = cljs.core.first((state_61326[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62864 = state_61326;
state_61326 = G__62864;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_61326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_61326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61369 = f__34309__auto__();
(statearr_61369[(6)] = c__34308__auto__);

return statearr_61369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__61382 = arguments.length;
switch (G__61382) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_62870 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_62870(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_62871 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_62871(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_62872 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_62872(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_62873 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_62873(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61423 = (function (ch,cs,meta61424){
this.ch = ch;
this.cs = cs;
this.meta61424 = meta61424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61425,meta61424__$1){
var self__ = this;
var _61425__$1 = this;
return (new cljs.core.async.t_cljs$core$async61423(self__.ch,self__.cs,meta61424__$1));
}));

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61425){
var self__ = this;
var _61425__$1 = this;
return self__.meta61424;
}));

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async61423.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async61423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61424","meta61424",966847897,null)], null);
}));

(cljs.core.async.t_cljs$core$async61423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61423");

(cljs.core.async.t_cljs$core$async61423.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61423.
 */
cljs.core.async.__GT_t_cljs$core$async61423 = (function cljs$core$async$mult_$___GT_t_cljs$core$async61423(ch__$1,cs__$1,meta61424){
return (new cljs.core.async.t_cljs$core$async61423(ch__$1,cs__$1,meta61424));
});

}

return (new cljs.core.async.t_cljs$core$async61423(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34308__auto___62877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61558){
var state_val_61559 = (state_61558[(1)]);
if((state_val_61559 === (7))){
var inst_61554 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61560_62878 = state_61558__$1;
(statearr_61560_62878[(2)] = inst_61554);

(statearr_61560_62878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (20))){
var inst_61459 = (state_61558[(7)]);
var inst_61471 = cljs.core.first(inst_61459);
var inst_61472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61471,(0),null);
var inst_61473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61471,(1),null);
var state_61558__$1 = (function (){var statearr_61561 = state_61558;
(statearr_61561[(8)] = inst_61472);

return statearr_61561;
})();
if(cljs.core.truth_(inst_61473)){
var statearr_61564_62880 = state_61558__$1;
(statearr_61564_62880[(1)] = (22));

} else {
var statearr_61565_62881 = state_61558__$1;
(statearr_61565_62881[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (27))){
var inst_61428 = (state_61558[(9)]);
var inst_61503 = (state_61558[(10)]);
var inst_61501 = (state_61558[(11)]);
var inst_61508 = (state_61558[(12)]);
var inst_61508__$1 = cljs.core._nth(inst_61501,inst_61503);
var inst_61509 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61508__$1,inst_61428,done);
var state_61558__$1 = (function (){var statearr_61568 = state_61558;
(statearr_61568[(12)] = inst_61508__$1);

return statearr_61568;
})();
if(cljs.core.truth_(inst_61509)){
var statearr_61569_62883 = state_61558__$1;
(statearr_61569_62883[(1)] = (30));

} else {
var statearr_61570_62884 = state_61558__$1;
(statearr_61570_62884[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (1))){
var state_61558__$1 = state_61558;
var statearr_61571_62885 = state_61558__$1;
(statearr_61571_62885[(2)] = null);

(statearr_61571_62885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (24))){
var inst_61459 = (state_61558[(7)]);
var inst_61478 = (state_61558[(2)]);
var inst_61479 = cljs.core.next(inst_61459);
var inst_61437 = inst_61479;
var inst_61438 = null;
var inst_61439 = (0);
var inst_61440 = (0);
var state_61558__$1 = (function (){var statearr_61573 = state_61558;
(statearr_61573[(13)] = inst_61478);

(statearr_61573[(14)] = inst_61440);

(statearr_61573[(15)] = inst_61437);

(statearr_61573[(16)] = inst_61439);

(statearr_61573[(17)] = inst_61438);

return statearr_61573;
})();
var statearr_61574_62886 = state_61558__$1;
(statearr_61574_62886[(2)] = null);

(statearr_61574_62886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (39))){
var state_61558__$1 = state_61558;
var statearr_61578_62887 = state_61558__$1;
(statearr_61578_62887[(2)] = null);

(statearr_61578_62887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (4))){
var inst_61428 = (state_61558[(9)]);
var inst_61428__$1 = (state_61558[(2)]);
var inst_61429 = (inst_61428__$1 == null);
var state_61558__$1 = (function (){var statearr_61580 = state_61558;
(statearr_61580[(9)] = inst_61428__$1);

return statearr_61580;
})();
if(cljs.core.truth_(inst_61429)){
var statearr_61581_62888 = state_61558__$1;
(statearr_61581_62888[(1)] = (5));

} else {
var statearr_61582_62889 = state_61558__$1;
(statearr_61582_62889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (15))){
var inst_61440 = (state_61558[(14)]);
var inst_61437 = (state_61558[(15)]);
var inst_61439 = (state_61558[(16)]);
var inst_61438 = (state_61558[(17)]);
var inst_61455 = (state_61558[(2)]);
var inst_61456 = (inst_61440 + (1));
var tmp61575 = inst_61437;
var tmp61576 = inst_61439;
var tmp61577 = inst_61438;
var inst_61437__$1 = tmp61575;
var inst_61438__$1 = tmp61577;
var inst_61439__$1 = tmp61576;
var inst_61440__$1 = inst_61456;
var state_61558__$1 = (function (){var statearr_61583 = state_61558;
(statearr_61583[(14)] = inst_61440__$1);

(statearr_61583[(15)] = inst_61437__$1);

(statearr_61583[(16)] = inst_61439__$1);

(statearr_61583[(17)] = inst_61438__$1);

(statearr_61583[(18)] = inst_61455);

return statearr_61583;
})();
var statearr_61584_62897 = state_61558__$1;
(statearr_61584_62897[(2)] = null);

(statearr_61584_62897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (21))){
var inst_61482 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61588_62899 = state_61558__$1;
(statearr_61588_62899[(2)] = inst_61482);

(statearr_61588_62899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (31))){
var inst_61508 = (state_61558[(12)]);
var inst_61512 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61508);
var state_61558__$1 = state_61558;
var statearr_61589_62904 = state_61558__$1;
(statearr_61589_62904[(2)] = inst_61512);

(statearr_61589_62904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (32))){
var inst_61503 = (state_61558[(10)]);
var inst_61501 = (state_61558[(11)]);
var inst_61500 = (state_61558[(19)]);
var inst_61502 = (state_61558[(20)]);
var inst_61514 = (state_61558[(2)]);
var inst_61515 = (inst_61503 + (1));
var tmp61585 = inst_61501;
var tmp61586 = inst_61500;
var tmp61587 = inst_61502;
var inst_61500__$1 = tmp61586;
var inst_61501__$1 = tmp61585;
var inst_61502__$1 = tmp61587;
var inst_61503__$1 = inst_61515;
var state_61558__$1 = (function (){var statearr_61590 = state_61558;
(statearr_61590[(10)] = inst_61503__$1);

(statearr_61590[(11)] = inst_61501__$1);

(statearr_61590[(19)] = inst_61500__$1);

(statearr_61590[(21)] = inst_61514);

(statearr_61590[(20)] = inst_61502__$1);

return statearr_61590;
})();
var statearr_61591_62908 = state_61558__$1;
(statearr_61591_62908[(2)] = null);

(statearr_61591_62908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (40))){
var inst_61527 = (state_61558[(22)]);
var inst_61531 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61527);
var state_61558__$1 = state_61558;
var statearr_61592_62909 = state_61558__$1;
(statearr_61592_62909[(2)] = inst_61531);

(statearr_61592_62909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (33))){
var inst_61518 = (state_61558[(23)]);
var inst_61520 = cljs.core.chunked_seq_QMARK_(inst_61518);
var state_61558__$1 = state_61558;
if(inst_61520){
var statearr_61594_62910 = state_61558__$1;
(statearr_61594_62910[(1)] = (36));

} else {
var statearr_61595_62911 = state_61558__$1;
(statearr_61595_62911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (13))){
var inst_61449 = (state_61558[(24)]);
var inst_61452 = cljs.core.async.close_BANG_(inst_61449);
var state_61558__$1 = state_61558;
var statearr_61596_62912 = state_61558__$1;
(statearr_61596_62912[(2)] = inst_61452);

(statearr_61596_62912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (22))){
var inst_61472 = (state_61558[(8)]);
var inst_61475 = cljs.core.async.close_BANG_(inst_61472);
var state_61558__$1 = state_61558;
var statearr_61597_62916 = state_61558__$1;
(statearr_61597_62916[(2)] = inst_61475);

(statearr_61597_62916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (36))){
var inst_61518 = (state_61558[(23)]);
var inst_61522 = cljs.core.chunk_first(inst_61518);
var inst_61523 = cljs.core.chunk_rest(inst_61518);
var inst_61524 = cljs.core.count(inst_61522);
var inst_61500 = inst_61523;
var inst_61501 = inst_61522;
var inst_61502 = inst_61524;
var inst_61503 = (0);
var state_61558__$1 = (function (){var statearr_61598 = state_61558;
(statearr_61598[(10)] = inst_61503);

(statearr_61598[(11)] = inst_61501);

(statearr_61598[(19)] = inst_61500);

(statearr_61598[(20)] = inst_61502);

return statearr_61598;
})();
var statearr_61599_62917 = state_61558__$1;
(statearr_61599_62917[(2)] = null);

(statearr_61599_62917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (41))){
var inst_61518 = (state_61558[(23)]);
var inst_61533 = (state_61558[(2)]);
var inst_61534 = cljs.core.next(inst_61518);
var inst_61500 = inst_61534;
var inst_61501 = null;
var inst_61502 = (0);
var inst_61503 = (0);
var state_61558__$1 = (function (){var statearr_61600 = state_61558;
(statearr_61600[(25)] = inst_61533);

(statearr_61600[(10)] = inst_61503);

(statearr_61600[(11)] = inst_61501);

(statearr_61600[(19)] = inst_61500);

(statearr_61600[(20)] = inst_61502);

return statearr_61600;
})();
var statearr_61601_62922 = state_61558__$1;
(statearr_61601_62922[(2)] = null);

(statearr_61601_62922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (43))){
var state_61558__$1 = state_61558;
var statearr_61602_62924 = state_61558__$1;
(statearr_61602_62924[(2)] = null);

(statearr_61602_62924[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (29))){
var inst_61542 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61605_62928 = state_61558__$1;
(statearr_61605_62928[(2)] = inst_61542);

(statearr_61605_62928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (44))){
var inst_61551 = (state_61558[(2)]);
var state_61558__$1 = (function (){var statearr_61607 = state_61558;
(statearr_61607[(26)] = inst_61551);

return statearr_61607;
})();
var statearr_61608_62929 = state_61558__$1;
(statearr_61608_62929[(2)] = null);

(statearr_61608_62929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (6))){
var inst_61492 = (state_61558[(27)]);
var inst_61491 = cljs.core.deref(cs);
var inst_61492__$1 = cljs.core.keys(inst_61491);
var inst_61493 = cljs.core.count(inst_61492__$1);
var inst_61494 = cljs.core.reset_BANG_(dctr,inst_61493);
var inst_61499 = cljs.core.seq(inst_61492__$1);
var inst_61500 = inst_61499;
var inst_61501 = null;
var inst_61502 = (0);
var inst_61503 = (0);
var state_61558__$1 = (function (){var statearr_61609 = state_61558;
(statearr_61609[(28)] = inst_61494);

(statearr_61609[(10)] = inst_61503);

(statearr_61609[(11)] = inst_61501);

(statearr_61609[(19)] = inst_61500);

(statearr_61609[(27)] = inst_61492__$1);

(statearr_61609[(20)] = inst_61502);

return statearr_61609;
})();
var statearr_61610_62930 = state_61558__$1;
(statearr_61610_62930[(2)] = null);

(statearr_61610_62930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (28))){
var inst_61500 = (state_61558[(19)]);
var inst_61518 = (state_61558[(23)]);
var inst_61518__$1 = cljs.core.seq(inst_61500);
var state_61558__$1 = (function (){var statearr_61612 = state_61558;
(statearr_61612[(23)] = inst_61518__$1);

return statearr_61612;
})();
if(inst_61518__$1){
var statearr_61613_62934 = state_61558__$1;
(statearr_61613_62934[(1)] = (33));

} else {
var statearr_61614_62935 = state_61558__$1;
(statearr_61614_62935[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (25))){
var inst_61503 = (state_61558[(10)]);
var inst_61502 = (state_61558[(20)]);
var inst_61505 = (inst_61503 < inst_61502);
var inst_61506 = inst_61505;
var state_61558__$1 = state_61558;
if(cljs.core.truth_(inst_61506)){
var statearr_61615_62936 = state_61558__$1;
(statearr_61615_62936[(1)] = (27));

} else {
var statearr_61616_62937 = state_61558__$1;
(statearr_61616_62937[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (34))){
var state_61558__$1 = state_61558;
var statearr_61617_62943 = state_61558__$1;
(statearr_61617_62943[(2)] = null);

(statearr_61617_62943[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (17))){
var state_61558__$1 = state_61558;
var statearr_61621_62944 = state_61558__$1;
(statearr_61621_62944[(2)] = null);

(statearr_61621_62944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (3))){
var inst_61556 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61558__$1,inst_61556);
} else {
if((state_val_61559 === (12))){
var inst_61487 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61629_62945 = state_61558__$1;
(statearr_61629_62945[(2)] = inst_61487);

(statearr_61629_62945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (2))){
var state_61558__$1 = state_61558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61558__$1,(4),ch);
} else {
if((state_val_61559 === (23))){
var state_61558__$1 = state_61558;
var statearr_61632_62946 = state_61558__$1;
(statearr_61632_62946[(2)] = null);

(statearr_61632_62946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (35))){
var inst_61540 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61634_62950 = state_61558__$1;
(statearr_61634_62950[(2)] = inst_61540);

(statearr_61634_62950[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (19))){
var inst_61459 = (state_61558[(7)]);
var inst_61463 = cljs.core.chunk_first(inst_61459);
var inst_61464 = cljs.core.chunk_rest(inst_61459);
var inst_61465 = cljs.core.count(inst_61463);
var inst_61437 = inst_61464;
var inst_61438 = inst_61463;
var inst_61439 = inst_61465;
var inst_61440 = (0);
var state_61558__$1 = (function (){var statearr_61636 = state_61558;
(statearr_61636[(14)] = inst_61440);

(statearr_61636[(15)] = inst_61437);

(statearr_61636[(16)] = inst_61439);

(statearr_61636[(17)] = inst_61438);

return statearr_61636;
})();
var statearr_61637_62951 = state_61558__$1;
(statearr_61637_62951[(2)] = null);

(statearr_61637_62951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (11))){
var inst_61459 = (state_61558[(7)]);
var inst_61437 = (state_61558[(15)]);
var inst_61459__$1 = cljs.core.seq(inst_61437);
var state_61558__$1 = (function (){var statearr_61640 = state_61558;
(statearr_61640[(7)] = inst_61459__$1);

return statearr_61640;
})();
if(inst_61459__$1){
var statearr_61641_62952 = state_61558__$1;
(statearr_61641_62952[(1)] = (16));

} else {
var statearr_61642_62953 = state_61558__$1;
(statearr_61642_62953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (9))){
var inst_61489 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61643_62954 = state_61558__$1;
(statearr_61643_62954[(2)] = inst_61489);

(statearr_61643_62954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (5))){
var inst_61435 = cljs.core.deref(cs);
var inst_61436 = cljs.core.seq(inst_61435);
var inst_61437 = inst_61436;
var inst_61438 = null;
var inst_61439 = (0);
var inst_61440 = (0);
var state_61558__$1 = (function (){var statearr_61644 = state_61558;
(statearr_61644[(14)] = inst_61440);

(statearr_61644[(15)] = inst_61437);

(statearr_61644[(16)] = inst_61439);

(statearr_61644[(17)] = inst_61438);

return statearr_61644;
})();
var statearr_61646_62955 = state_61558__$1;
(statearr_61646_62955[(2)] = null);

(statearr_61646_62955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (14))){
var state_61558__$1 = state_61558;
var statearr_61648_62956 = state_61558__$1;
(statearr_61648_62956[(2)] = null);

(statearr_61648_62956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (45))){
var inst_61548 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61649_62957 = state_61558__$1;
(statearr_61649_62957[(2)] = inst_61548);

(statearr_61649_62957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (26))){
var inst_61492 = (state_61558[(27)]);
var inst_61544 = (state_61558[(2)]);
var inst_61545 = cljs.core.seq(inst_61492);
var state_61558__$1 = (function (){var statearr_61650 = state_61558;
(statearr_61650[(29)] = inst_61544);

return statearr_61650;
})();
if(inst_61545){
var statearr_61651_62959 = state_61558__$1;
(statearr_61651_62959[(1)] = (42));

} else {
var statearr_61652_62960 = state_61558__$1;
(statearr_61652_62960[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (16))){
var inst_61459 = (state_61558[(7)]);
var inst_61461 = cljs.core.chunked_seq_QMARK_(inst_61459);
var state_61558__$1 = state_61558;
if(inst_61461){
var statearr_61653_62961 = state_61558__$1;
(statearr_61653_62961[(1)] = (19));

} else {
var statearr_61654_62962 = state_61558__$1;
(statearr_61654_62962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (38))){
var inst_61537 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61659_62964 = state_61558__$1;
(statearr_61659_62964[(2)] = inst_61537);

(statearr_61659_62964[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (30))){
var state_61558__$1 = state_61558;
var statearr_61660_62968 = state_61558__$1;
(statearr_61660_62968[(2)] = null);

(statearr_61660_62968[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (10))){
var inst_61440 = (state_61558[(14)]);
var inst_61438 = (state_61558[(17)]);
var inst_61448 = cljs.core._nth(inst_61438,inst_61440);
var inst_61449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61448,(0),null);
var inst_61450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61448,(1),null);
var state_61558__$1 = (function (){var statearr_61662 = state_61558;
(statearr_61662[(24)] = inst_61449);

return statearr_61662;
})();
if(cljs.core.truth_(inst_61450)){
var statearr_61663_62969 = state_61558__$1;
(statearr_61663_62969[(1)] = (13));

} else {
var statearr_61664_62970 = state_61558__$1;
(statearr_61664_62970[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (18))){
var inst_61485 = (state_61558[(2)]);
var state_61558__$1 = state_61558;
var statearr_61666_62971 = state_61558__$1;
(statearr_61666_62971[(2)] = inst_61485);

(statearr_61666_62971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (42))){
var state_61558__$1 = state_61558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61558__$1,(45),dchan);
} else {
if((state_val_61559 === (37))){
var inst_61527 = (state_61558[(22)]);
var inst_61428 = (state_61558[(9)]);
var inst_61518 = (state_61558[(23)]);
var inst_61527__$1 = cljs.core.first(inst_61518);
var inst_61528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61527__$1,inst_61428,done);
var state_61558__$1 = (function (){var statearr_61667 = state_61558;
(statearr_61667[(22)] = inst_61527__$1);

return statearr_61667;
})();
if(cljs.core.truth_(inst_61528)){
var statearr_61668_62972 = state_61558__$1;
(statearr_61668_62972[(1)] = (39));

} else {
var statearr_61669_62973 = state_61558__$1;
(statearr_61669_62973[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61559 === (8))){
var inst_61440 = (state_61558[(14)]);
var inst_61439 = (state_61558[(16)]);
var inst_61442 = (inst_61440 < inst_61439);
var inst_61443 = inst_61442;
var state_61558__$1 = state_61558;
if(cljs.core.truth_(inst_61443)){
var statearr_61671_62974 = state_61558__$1;
(statearr_61671_62974[(1)] = (10));

} else {
var statearr_61672_62976 = state_61558__$1;
(statearr_61672_62976[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34097__auto__ = null;
var cljs$core$async$mult_$_state_machine__34097__auto____0 = (function (){
var statearr_61673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61673[(0)] = cljs$core$async$mult_$_state_machine__34097__auto__);

(statearr_61673[(1)] = (1));

return statearr_61673;
});
var cljs$core$async$mult_$_state_machine__34097__auto____1 = (function (state_61558){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61558);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61674){var ex__34100__auto__ = e61674;
var statearr_61675_62977 = state_61558;
(statearr_61675_62977[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61558[(4)]))){
var statearr_61677_62978 = state_61558;
(statearr_61677_62978[(1)] = cljs.core.first((state_61558[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62979 = state_61558;
state_61558 = G__62979;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34097__auto__ = function(state_61558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34097__auto____1.call(this,state_61558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34097__auto____0;
cljs$core$async$mult_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34097__auto____1;
return cljs$core$async$mult_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61678 = f__34309__auto__();
(statearr_61678[(6)] = c__34308__auto___62877);

return statearr_61678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__61684 = arguments.length;
switch (G__61684) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_62984 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_62984(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_62988 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_62988(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_62989 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_62989(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_62991 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_62991(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_62992 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_62992(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___62993 = arguments.length;
var i__5770__auto___62994 = (0);
while(true){
if((i__5770__auto___62994 < len__5769__auto___62993)){
args__5775__auto__.push((arguments[i__5770__auto___62994]));

var G__62995 = (i__5770__auto___62994 + (1));
i__5770__auto___62994 = G__62995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61699){
var map__61700 = p__61699;
var map__61700__$1 = cljs.core.__destructure_map(map__61700);
var opts = map__61700__$1;
var statearr_61701_62999 = state;
(statearr_61701_62999[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_61702_63001 = state;
(statearr_61702_63001[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_61703_63002 = state;
(statearr_61703_63002[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61691){
var G__61692 = cljs.core.first(seq61691);
var seq61691__$1 = cljs.core.next(seq61691);
var G__61693 = cljs.core.first(seq61691__$1);
var seq61691__$2 = cljs.core.next(seq61691__$1);
var G__61694 = cljs.core.first(seq61691__$2);
var seq61691__$3 = cljs.core.next(seq61691__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61692,G__61693,G__61694,seq61691__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61709 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta61710){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta61710 = meta61710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61711,meta61710__$1){
var self__ = this;
var _61711__$1 = this;
return (new cljs.core.async.t_cljs$core$async61709(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta61710__$1));
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61711){
var self__ = this;
var _61711__$1 = this;
return self__.meta61710;
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async61709.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async61709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta61710","meta61710",-840454823,null)], null);
}));

(cljs.core.async.t_cljs$core$async61709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61709");

(cljs.core.async.t_cljs$core$async61709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61709.
 */
cljs.core.async.__GT_t_cljs$core$async61709 = (function cljs$core$async$mix_$___GT_t_cljs$core$async61709(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61710){
return (new cljs.core.async.t_cljs$core$async61709(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61710));
});

}

return (new cljs.core.async.t_cljs$core$async61709(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34308__auto___63012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61797){
var state_val_61798 = (state_61797[(1)]);
if((state_val_61798 === (7))){
var inst_61751 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
if(cljs.core.truth_(inst_61751)){
var statearr_61799_63016 = state_61797__$1;
(statearr_61799_63016[(1)] = (8));

} else {
var statearr_61800_63017 = state_61797__$1;
(statearr_61800_63017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (20))){
var inst_61742 = (state_61797[(7)]);
var state_61797__$1 = state_61797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61797__$1,(23),out,inst_61742);
} else {
if((state_val_61798 === (1))){
var inst_61722 = calc_state();
var inst_61725 = cljs.core.__destructure_map(inst_61722);
var inst_61726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61725,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61725,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61725,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61729 = inst_61722;
var state_61797__$1 = (function (){var statearr_61801 = state_61797;
(statearr_61801[(8)] = inst_61729);

(statearr_61801[(9)] = inst_61728);

(statearr_61801[(10)] = inst_61726);

(statearr_61801[(11)] = inst_61727);

return statearr_61801;
})();
var statearr_61802_63018 = state_61797__$1;
(statearr_61802_63018[(2)] = null);

(statearr_61802_63018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (24))){
var inst_61733 = (state_61797[(12)]);
var inst_61729 = inst_61733;
var state_61797__$1 = (function (){var statearr_61804 = state_61797;
(statearr_61804[(8)] = inst_61729);

return statearr_61804;
})();
var statearr_61805_63021 = state_61797__$1;
(statearr_61805_63021[(2)] = null);

(statearr_61805_63021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (4))){
var inst_61742 = (state_61797[(7)]);
var inst_61746 = (state_61797[(13)]);
var inst_61741 = (state_61797[(2)]);
var inst_61742__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61741,(0),null);
var inst_61744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61741,(1),null);
var inst_61746__$1 = (inst_61742__$1 == null);
var state_61797__$1 = (function (){var statearr_61807 = state_61797;
(statearr_61807[(7)] = inst_61742__$1);

(statearr_61807[(13)] = inst_61746__$1);

(statearr_61807[(14)] = inst_61744);

return statearr_61807;
})();
if(cljs.core.truth_(inst_61746__$1)){
var statearr_61808_63025 = state_61797__$1;
(statearr_61808_63025[(1)] = (5));

} else {
var statearr_61809_63026 = state_61797__$1;
(statearr_61809_63026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (15))){
var inst_61734 = (state_61797[(15)]);
var inst_61771 = (state_61797[(16)]);
var inst_61771__$1 = cljs.core.empty_QMARK_(inst_61734);
var state_61797__$1 = (function (){var statearr_61811 = state_61797;
(statearr_61811[(16)] = inst_61771__$1);

return statearr_61811;
})();
if(inst_61771__$1){
var statearr_61812_63028 = state_61797__$1;
(statearr_61812_63028[(1)] = (17));

} else {
var statearr_61813_63029 = state_61797__$1;
(statearr_61813_63029[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (21))){
var inst_61733 = (state_61797[(12)]);
var inst_61729 = inst_61733;
var state_61797__$1 = (function (){var statearr_61815 = state_61797;
(statearr_61815[(8)] = inst_61729);

return statearr_61815;
})();
var statearr_61816_63030 = state_61797__$1;
(statearr_61816_63030[(2)] = null);

(statearr_61816_63030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (13))){
var inst_61760 = (state_61797[(2)]);
var inst_61761 = calc_state();
var inst_61729 = inst_61761;
var state_61797__$1 = (function (){var statearr_61817 = state_61797;
(statearr_61817[(8)] = inst_61729);

(statearr_61817[(17)] = inst_61760);

return statearr_61817;
})();
var statearr_61819_63034 = state_61797__$1;
(statearr_61819_63034[(2)] = null);

(statearr_61819_63034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (22))){
var inst_61791 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
var statearr_61820_63039 = state_61797__$1;
(statearr_61820_63039[(2)] = inst_61791);

(statearr_61820_63039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (6))){
var inst_61744 = (state_61797[(14)]);
var inst_61749 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61744,change);
var state_61797__$1 = state_61797;
var statearr_61821_63040 = state_61797__$1;
(statearr_61821_63040[(2)] = inst_61749);

(statearr_61821_63040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (25))){
var state_61797__$1 = state_61797;
var statearr_61823_63041 = state_61797__$1;
(statearr_61823_63041[(2)] = null);

(statearr_61823_63041[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (17))){
var inst_61744 = (state_61797[(14)]);
var inst_61735 = (state_61797[(18)]);
var inst_61773 = (inst_61735.cljs$core$IFn$_invoke$arity$1 ? inst_61735.cljs$core$IFn$_invoke$arity$1(inst_61744) : inst_61735.call(null,inst_61744));
var inst_61774 = cljs.core.not(inst_61773);
var state_61797__$1 = state_61797;
var statearr_61824_63048 = state_61797__$1;
(statearr_61824_63048[(2)] = inst_61774);

(statearr_61824_63048[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (3))){
var inst_61795 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61797__$1,inst_61795);
} else {
if((state_val_61798 === (12))){
var state_61797__$1 = state_61797;
var statearr_61826_63049 = state_61797__$1;
(statearr_61826_63049[(2)] = null);

(statearr_61826_63049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (2))){
var inst_61729 = (state_61797[(8)]);
var inst_61733 = (state_61797[(12)]);
var inst_61733__$1 = cljs.core.__destructure_map(inst_61729);
var inst_61734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61733__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61733__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61733__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61797__$1 = (function (){var statearr_61827 = state_61797;
(statearr_61827[(15)] = inst_61734);

(statearr_61827[(18)] = inst_61735);

(statearr_61827[(12)] = inst_61733__$1);

return statearr_61827;
})();
return cljs.core.async.ioc_alts_BANG_(state_61797__$1,(4),inst_61736);
} else {
if((state_val_61798 === (23))){
var inst_61782 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
if(cljs.core.truth_(inst_61782)){
var statearr_61828_63050 = state_61797__$1;
(statearr_61828_63050[(1)] = (24));

} else {
var statearr_61829_63051 = state_61797__$1;
(statearr_61829_63051[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (19))){
var inst_61777 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
var statearr_61840_63052 = state_61797__$1;
(statearr_61840_63052[(2)] = inst_61777);

(statearr_61840_63052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (11))){
var inst_61744 = (state_61797[(14)]);
var inst_61757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_61744);
var state_61797__$1 = state_61797;
var statearr_61841_63053 = state_61797__$1;
(statearr_61841_63053[(2)] = inst_61757);

(statearr_61841_63053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (9))){
var inst_61734 = (state_61797[(15)]);
var inst_61744 = (state_61797[(14)]);
var inst_61766 = (state_61797[(19)]);
var inst_61766__$1 = (inst_61734.cljs$core$IFn$_invoke$arity$1 ? inst_61734.cljs$core$IFn$_invoke$arity$1(inst_61744) : inst_61734.call(null,inst_61744));
var state_61797__$1 = (function (){var statearr_61842 = state_61797;
(statearr_61842[(19)] = inst_61766__$1);

return statearr_61842;
})();
if(cljs.core.truth_(inst_61766__$1)){
var statearr_61843_63054 = state_61797__$1;
(statearr_61843_63054[(1)] = (14));

} else {
var statearr_61844_63055 = state_61797__$1;
(statearr_61844_63055[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (5))){
var inst_61746 = (state_61797[(13)]);
var state_61797__$1 = state_61797;
var statearr_61845_63056 = state_61797__$1;
(statearr_61845_63056[(2)] = inst_61746);

(statearr_61845_63056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (14))){
var inst_61766 = (state_61797[(19)]);
var state_61797__$1 = state_61797;
var statearr_61846_63057 = state_61797__$1;
(statearr_61846_63057[(2)] = inst_61766);

(statearr_61846_63057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (26))){
var inst_61787 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
var statearr_61848_63058 = state_61797__$1;
(statearr_61848_63058[(2)] = inst_61787);

(statearr_61848_63058[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (16))){
var inst_61779 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
if(cljs.core.truth_(inst_61779)){
var statearr_61849_63059 = state_61797__$1;
(statearr_61849_63059[(1)] = (20));

} else {
var statearr_61850_63060 = state_61797__$1;
(statearr_61850_63060[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (10))){
var inst_61793 = (state_61797[(2)]);
var state_61797__$1 = state_61797;
var statearr_61851_63061 = state_61797__$1;
(statearr_61851_63061[(2)] = inst_61793);

(statearr_61851_63061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (18))){
var inst_61771 = (state_61797[(16)]);
var state_61797__$1 = state_61797;
var statearr_61852_63062 = state_61797__$1;
(statearr_61852_63062[(2)] = inst_61771);

(statearr_61852_63062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61798 === (8))){
var inst_61742 = (state_61797[(7)]);
var inst_61754 = (inst_61742 == null);
var state_61797__$1 = state_61797;
if(cljs.core.truth_(inst_61754)){
var statearr_61853_63063 = state_61797__$1;
(statearr_61853_63063[(1)] = (11));

} else {
var statearr_61854_63064 = state_61797__$1;
(statearr_61854_63064[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34097__auto__ = null;
var cljs$core$async$mix_$_state_machine__34097__auto____0 = (function (){
var statearr_61855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61855[(0)] = cljs$core$async$mix_$_state_machine__34097__auto__);

(statearr_61855[(1)] = (1));

return statearr_61855;
});
var cljs$core$async$mix_$_state_machine__34097__auto____1 = (function (state_61797){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61797);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61856){var ex__34100__auto__ = e61856;
var statearr_61857_63071 = state_61797;
(statearr_61857_63071[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61797[(4)]))){
var statearr_61858_63072 = state_61797;
(statearr_61858_63072[(1)] = cljs.core.first((state_61797[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63073 = state_61797;
state_61797 = G__63073;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34097__auto__ = function(state_61797){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34097__auto____1.call(this,state_61797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34097__auto____0;
cljs$core$async$mix_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34097__auto____1;
return cljs$core$async$mix_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61859 = f__34309__auto__();
(statearr_61859[(6)] = c__34308__auto___63012);

return statearr_61859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_63074 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_63074(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_63075 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_63075(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_63076 = (function() {
var G__63077 = null;
var G__63077__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__63077__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__63077 = function(p,v){
switch(arguments.length){
case 1:
return G__63077__1.call(this,p);
case 2:
return G__63077__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63077.cljs$core$IFn$_invoke$arity$1 = G__63077__1;
G__63077.cljs$core$IFn$_invoke$arity$2 = G__63077__2;
return G__63077;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__61864 = arguments.length;
switch (G__61864) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63076(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63076(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__61867 = arguments.length;
switch (G__61867) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__61865_SHARP_){
if(cljs.core.truth_((p1__61865_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__61865_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__61865_SHARP_.call(null,topic)))){
return p1__61865_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__61865_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61868 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61869){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61869 = meta61869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61870,meta61869__$1){
var self__ = this;
var _61870__$1 = this;
return (new cljs.core.async.t_cljs$core$async61868(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61869__$1));
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61870){
var self__ = this;
var _61870__$1 = this;
return self__.meta61869;
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async61868.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async61868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61869","meta61869",653520809,null)], null);
}));

(cljs.core.async.t_cljs$core$async61868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61868");

(cljs.core.async.t_cljs$core$async61868.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async61868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61868.
 */
cljs.core.async.__GT_t_cljs$core$async61868 = (function cljs$core$async$__GT_t_cljs$core$async61868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61869){
return (new cljs.core.async.t_cljs$core$async61868(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61869));
});

}

return (new cljs.core.async.t_cljs$core$async61868(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34308__auto___63097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_61942){
var state_val_61943 = (state_61942[(1)]);
if((state_val_61943 === (7))){
var inst_61938 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61944_63098 = state_61942__$1;
(statearr_61944_63098[(2)] = inst_61938);

(statearr_61944_63098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (20))){
var state_61942__$1 = state_61942;
var statearr_61945_63099 = state_61942__$1;
(statearr_61945_63099[(2)] = null);

(statearr_61945_63099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (1))){
var state_61942__$1 = state_61942;
var statearr_61946_63100 = state_61942__$1;
(statearr_61946_63100[(2)] = null);

(statearr_61946_63100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (24))){
var inst_61921 = (state_61942[(7)]);
var inst_61930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_61921);
var state_61942__$1 = state_61942;
var statearr_61947_63101 = state_61942__$1;
(statearr_61947_63101[(2)] = inst_61930);

(statearr_61947_63101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (4))){
var inst_61873 = (state_61942[(8)]);
var inst_61873__$1 = (state_61942[(2)]);
var inst_61874 = (inst_61873__$1 == null);
var state_61942__$1 = (function (){var statearr_61948 = state_61942;
(statearr_61948[(8)] = inst_61873__$1);

return statearr_61948;
})();
if(cljs.core.truth_(inst_61874)){
var statearr_61949_63102 = state_61942__$1;
(statearr_61949_63102[(1)] = (5));

} else {
var statearr_61950_63103 = state_61942__$1;
(statearr_61950_63103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (15))){
var inst_61915 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61951_63104 = state_61942__$1;
(statearr_61951_63104[(2)] = inst_61915);

(statearr_61951_63104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (21))){
var inst_61935 = (state_61942[(2)]);
var state_61942__$1 = (function (){var statearr_61952 = state_61942;
(statearr_61952[(9)] = inst_61935);

return statearr_61952;
})();
var statearr_61953_63105 = state_61942__$1;
(statearr_61953_63105[(2)] = null);

(statearr_61953_63105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (13))){
var inst_61897 = (state_61942[(10)]);
var inst_61899 = cljs.core.chunked_seq_QMARK_(inst_61897);
var state_61942__$1 = state_61942;
if(inst_61899){
var statearr_61954_63106 = state_61942__$1;
(statearr_61954_63106[(1)] = (16));

} else {
var statearr_61955_63107 = state_61942__$1;
(statearr_61955_63107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (22))){
var inst_61927 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
if(cljs.core.truth_(inst_61927)){
var statearr_61956_63108 = state_61942__$1;
(statearr_61956_63108[(1)] = (23));

} else {
var statearr_61957_63109 = state_61942__$1;
(statearr_61957_63109[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (6))){
var inst_61923 = (state_61942[(11)]);
var inst_61873 = (state_61942[(8)]);
var inst_61921 = (state_61942[(7)]);
var inst_61921__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_61873) : topic_fn.call(null,inst_61873));
var inst_61922 = cljs.core.deref(mults);
var inst_61923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61922,inst_61921__$1);
var state_61942__$1 = (function (){var statearr_61958 = state_61942;
(statearr_61958[(11)] = inst_61923__$1);

(statearr_61958[(7)] = inst_61921__$1);

return statearr_61958;
})();
if(cljs.core.truth_(inst_61923__$1)){
var statearr_61959_63110 = state_61942__$1;
(statearr_61959_63110[(1)] = (19));

} else {
var statearr_61960_63111 = state_61942__$1;
(statearr_61960_63111[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (25))){
var inst_61932 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61961_63112 = state_61942__$1;
(statearr_61961_63112[(2)] = inst_61932);

(statearr_61961_63112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (17))){
var inst_61897 = (state_61942[(10)]);
var inst_61906 = cljs.core.first(inst_61897);
var inst_61907 = cljs.core.async.muxch_STAR_(inst_61906);
var inst_61908 = cljs.core.async.close_BANG_(inst_61907);
var inst_61909 = cljs.core.next(inst_61897);
var inst_61883 = inst_61909;
var inst_61884 = null;
var inst_61885 = (0);
var inst_61886 = (0);
var state_61942__$1 = (function (){var statearr_61962 = state_61942;
(statearr_61962[(12)] = inst_61886);

(statearr_61962[(13)] = inst_61908);

(statearr_61962[(14)] = inst_61883);

(statearr_61962[(15)] = inst_61884);

(statearr_61962[(16)] = inst_61885);

return statearr_61962;
})();
var statearr_61963_63115 = state_61942__$1;
(statearr_61963_63115[(2)] = null);

(statearr_61963_63115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (3))){
var inst_61940 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61942__$1,inst_61940);
} else {
if((state_val_61943 === (12))){
var inst_61917 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61965_63116 = state_61942__$1;
(statearr_61965_63116[(2)] = inst_61917);

(statearr_61965_63116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (2))){
var state_61942__$1 = state_61942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61942__$1,(4),ch);
} else {
if((state_val_61943 === (23))){
var state_61942__$1 = state_61942;
var statearr_61966_63117 = state_61942__$1;
(statearr_61966_63117[(2)] = null);

(statearr_61966_63117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (19))){
var inst_61923 = (state_61942[(11)]);
var inst_61873 = (state_61942[(8)]);
var inst_61925 = cljs.core.async.muxch_STAR_(inst_61923);
var state_61942__$1 = state_61942;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61942__$1,(22),inst_61925,inst_61873);
} else {
if((state_val_61943 === (11))){
var inst_61897 = (state_61942[(10)]);
var inst_61883 = (state_61942[(14)]);
var inst_61897__$1 = cljs.core.seq(inst_61883);
var state_61942__$1 = (function (){var statearr_61970 = state_61942;
(statearr_61970[(10)] = inst_61897__$1);

return statearr_61970;
})();
if(inst_61897__$1){
var statearr_61971_63118 = state_61942__$1;
(statearr_61971_63118[(1)] = (13));

} else {
var statearr_61972_63119 = state_61942__$1;
(statearr_61972_63119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (9))){
var inst_61919 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61973_63120 = state_61942__$1;
(statearr_61973_63120[(2)] = inst_61919);

(statearr_61973_63120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (5))){
var inst_61880 = cljs.core.deref(mults);
var inst_61881 = cljs.core.vals(inst_61880);
var inst_61882 = cljs.core.seq(inst_61881);
var inst_61883 = inst_61882;
var inst_61884 = null;
var inst_61885 = (0);
var inst_61886 = (0);
var state_61942__$1 = (function (){var statearr_61974 = state_61942;
(statearr_61974[(12)] = inst_61886);

(statearr_61974[(14)] = inst_61883);

(statearr_61974[(15)] = inst_61884);

(statearr_61974[(16)] = inst_61885);

return statearr_61974;
})();
var statearr_61975_63121 = state_61942__$1;
(statearr_61975_63121[(2)] = null);

(statearr_61975_63121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (14))){
var state_61942__$1 = state_61942;
var statearr_61979_63122 = state_61942__$1;
(statearr_61979_63122[(2)] = null);

(statearr_61979_63122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (16))){
var inst_61897 = (state_61942[(10)]);
var inst_61901 = cljs.core.chunk_first(inst_61897);
var inst_61902 = cljs.core.chunk_rest(inst_61897);
var inst_61903 = cljs.core.count(inst_61901);
var inst_61883 = inst_61902;
var inst_61884 = inst_61901;
var inst_61885 = inst_61903;
var inst_61886 = (0);
var state_61942__$1 = (function (){var statearr_61980 = state_61942;
(statearr_61980[(12)] = inst_61886);

(statearr_61980[(14)] = inst_61883);

(statearr_61980[(15)] = inst_61884);

(statearr_61980[(16)] = inst_61885);

return statearr_61980;
})();
var statearr_61981_63123 = state_61942__$1;
(statearr_61981_63123[(2)] = null);

(statearr_61981_63123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (10))){
var inst_61886 = (state_61942[(12)]);
var inst_61883 = (state_61942[(14)]);
var inst_61884 = (state_61942[(15)]);
var inst_61885 = (state_61942[(16)]);
var inst_61891 = cljs.core._nth(inst_61884,inst_61886);
var inst_61892 = cljs.core.async.muxch_STAR_(inst_61891);
var inst_61893 = cljs.core.async.close_BANG_(inst_61892);
var inst_61894 = (inst_61886 + (1));
var tmp61976 = inst_61883;
var tmp61977 = inst_61884;
var tmp61978 = inst_61885;
var inst_61883__$1 = tmp61976;
var inst_61884__$1 = tmp61977;
var inst_61885__$1 = tmp61978;
var inst_61886__$1 = inst_61894;
var state_61942__$1 = (function (){var statearr_61982 = state_61942;
(statearr_61982[(12)] = inst_61886__$1);

(statearr_61982[(14)] = inst_61883__$1);

(statearr_61982[(17)] = inst_61893);

(statearr_61982[(15)] = inst_61884__$1);

(statearr_61982[(16)] = inst_61885__$1);

return statearr_61982;
})();
var statearr_61983_63128 = state_61942__$1;
(statearr_61983_63128[(2)] = null);

(statearr_61983_63128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (18))){
var inst_61912 = (state_61942[(2)]);
var state_61942__$1 = state_61942;
var statearr_61984_63129 = state_61942__$1;
(statearr_61984_63129[(2)] = inst_61912);

(statearr_61984_63129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61943 === (8))){
var inst_61886 = (state_61942[(12)]);
var inst_61885 = (state_61942[(16)]);
var inst_61888 = (inst_61886 < inst_61885);
var inst_61889 = inst_61888;
var state_61942__$1 = state_61942;
if(cljs.core.truth_(inst_61889)){
var statearr_61985_63134 = state_61942__$1;
(statearr_61985_63134[(1)] = (10));

} else {
var statearr_61986_63135 = state_61942__$1;
(statearr_61986_63135[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_61987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61987[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_61987[(1)] = (1));

return statearr_61987;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_61942){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_61942);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e61988){var ex__34100__auto__ = e61988;
var statearr_61989_63137 = state_61942;
(statearr_61989_63137[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_61942[(4)]))){
var statearr_61990_63139 = state_61942;
(statearr_61990_63139[(1)] = cljs.core.first((state_61942[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63140 = state_61942;
state_61942 = G__63140;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_61942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_61942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_61991 = f__34309__auto__();
(statearr_61991[(6)] = c__34308__auto___63097);

return statearr_61991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__61993 = arguments.length;
switch (G__61993) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__61995 = arguments.length;
switch (G__61995) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__61997 = arguments.length;
switch (G__61997) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34308__auto___63146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62075){
var state_val_62076 = (state_62075[(1)]);
if((state_val_62076 === (7))){
var state_62075__$1 = state_62075;
var statearr_62091_63148 = state_62075__$1;
(statearr_62091_63148[(2)] = null);

(statearr_62091_63148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (1))){
var state_62075__$1 = state_62075;
var statearr_62092_63150 = state_62075__$1;
(statearr_62092_63150[(2)] = null);

(statearr_62092_63150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (4))){
var inst_62020 = (state_62075[(7)]);
var inst_62019 = (state_62075[(8)]);
var inst_62022 = (inst_62020 < inst_62019);
var state_62075__$1 = state_62075;
if(cljs.core.truth_(inst_62022)){
var statearr_62093_63151 = state_62075__$1;
(statearr_62093_63151[(1)] = (6));

} else {
var statearr_62094_63152 = state_62075__$1;
(statearr_62094_63152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (15))){
var inst_62052 = (state_62075[(9)]);
var inst_62058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62052);
var state_62075__$1 = state_62075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62075__$1,(17),out,inst_62058);
} else {
if((state_val_62076 === (13))){
var inst_62052 = (state_62075[(9)]);
var inst_62052__$1 = (state_62075[(2)]);
var inst_62054 = cljs.core.some(cljs.core.nil_QMARK_,inst_62052__$1);
var state_62075__$1 = (function (){var statearr_62095 = state_62075;
(statearr_62095[(9)] = inst_62052__$1);

return statearr_62095;
})();
if(cljs.core.truth_(inst_62054)){
var statearr_62096_63153 = state_62075__$1;
(statearr_62096_63153[(1)] = (14));

} else {
var statearr_62097_63154 = state_62075__$1;
(statearr_62097_63154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (6))){
var state_62075__$1 = state_62075;
var statearr_62110_63155 = state_62075__$1;
(statearr_62110_63155[(2)] = null);

(statearr_62110_63155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (17))){
var inst_62060 = (state_62075[(2)]);
var state_62075__$1 = (function (){var statearr_62113 = state_62075;
(statearr_62113[(10)] = inst_62060);

return statearr_62113;
})();
var statearr_62114_63158 = state_62075__$1;
(statearr_62114_63158[(2)] = null);

(statearr_62114_63158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (3))){
var inst_62066 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62075__$1,inst_62066);
} else {
if((state_val_62076 === (12))){
var _ = (function (){var statearr_62115 = state_62075;
(statearr_62115[(4)] = cljs.core.rest((state_62075[(4)])));

return statearr_62115;
})();
var state_62075__$1 = state_62075;
var ex62112 = (state_62075__$1[(2)]);
var statearr_62116_63159 = state_62075__$1;
(statearr_62116_63159[(5)] = ex62112);


if((ex62112 instanceof Object)){
var statearr_62117_63160 = state_62075__$1;
(statearr_62117_63160[(1)] = (11));

(statearr_62117_63160[(5)] = null);

} else {
throw ex62112;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (2))){
var inst_62018 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62019 = cnt;
var inst_62020 = (0);
var state_62075__$1 = (function (){var statearr_62118 = state_62075;
(statearr_62118[(7)] = inst_62020);

(statearr_62118[(11)] = inst_62018);

(statearr_62118[(8)] = inst_62019);

return statearr_62118;
})();
var statearr_62119_63164 = state_62075__$1;
(statearr_62119_63164[(2)] = null);

(statearr_62119_63164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (11))){
var inst_62027 = (state_62075[(2)]);
var inst_62028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62075__$1 = (function (){var statearr_62120 = state_62075;
(statearr_62120[(12)] = inst_62027);

return statearr_62120;
})();
var statearr_62121_63166 = state_62075__$1;
(statearr_62121_63166[(2)] = inst_62028);

(statearr_62121_63166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (9))){
var inst_62020 = (state_62075[(7)]);
var _ = (function (){var statearr_62122 = state_62075;
(statearr_62122[(4)] = cljs.core.cons((12),(state_62075[(4)])));

return statearr_62122;
})();
var inst_62034 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62020) : chs__$1.call(null,inst_62020));
var inst_62036 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62020) : done.call(null,inst_62020));
var inst_62037 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62034,inst_62036);
var ___$1 = (function (){var statearr_62125 = state_62075;
(statearr_62125[(4)] = cljs.core.rest((state_62075[(4)])));

return statearr_62125;
})();
var state_62075__$1 = state_62075;
var statearr_62126_63167 = state_62075__$1;
(statearr_62126_63167[(2)] = inst_62037);

(statearr_62126_63167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (5))){
var inst_62050 = (state_62075[(2)]);
var state_62075__$1 = (function (){var statearr_62129 = state_62075;
(statearr_62129[(13)] = inst_62050);

return statearr_62129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62075__$1,(13),dchan);
} else {
if((state_val_62076 === (14))){
var inst_62056 = cljs.core.async.close_BANG_(out);
var state_62075__$1 = state_62075;
var statearr_62131_63168 = state_62075__$1;
(statearr_62131_63168[(2)] = inst_62056);

(statearr_62131_63168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (16))){
var inst_62064 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62132_63169 = state_62075__$1;
(statearr_62132_63169[(2)] = inst_62064);

(statearr_62132_63169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (10))){
var inst_62020 = (state_62075[(7)]);
var inst_62040 = (state_62075[(2)]);
var inst_62041 = (inst_62020 + (1));
var inst_62020__$1 = inst_62041;
var state_62075__$1 = (function (){var statearr_62133 = state_62075;
(statearr_62133[(7)] = inst_62020__$1);

(statearr_62133[(14)] = inst_62040);

return statearr_62133;
})();
var statearr_62134_63170 = state_62075__$1;
(statearr_62134_63170[(2)] = null);

(statearr_62134_63170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62076 === (8))){
var inst_62045 = (state_62075[(2)]);
var state_62075__$1 = state_62075;
var statearr_62135_63171 = state_62075__$1;
(statearr_62135_63171[(2)] = inst_62045);

(statearr_62135_63171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62136[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62136[(1)] = (1));

return statearr_62136;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62075){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62075);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62137){var ex__34100__auto__ = e62137;
var statearr_62138_63173 = state_62075;
(statearr_62138_63173[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62075[(4)]))){
var statearr_62139_63175 = state_62075;
(statearr_62139_63175[(1)] = cljs.core.first((state_62075[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63176 = state_62075;
state_62075 = G__63176;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62140 = f__34309__auto__();
(statearr_62140[(6)] = c__34308__auto___63146);

return statearr_62140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__62143 = arguments.length;
switch (G__62143) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62176){
var state_val_62177 = (state_62176[(1)]);
if((state_val_62177 === (7))){
var inst_62156 = (state_62176[(7)]);
var inst_62155 = (state_62176[(8)]);
var inst_62155__$1 = (state_62176[(2)]);
var inst_62156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62155__$1,(0),null);
var inst_62157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62155__$1,(1),null);
var inst_62158 = (inst_62156__$1 == null);
var state_62176__$1 = (function (){var statearr_62180 = state_62176;
(statearr_62180[(9)] = inst_62157);

(statearr_62180[(7)] = inst_62156__$1);

(statearr_62180[(8)] = inst_62155__$1);

return statearr_62180;
})();
if(cljs.core.truth_(inst_62158)){
var statearr_62181_63179 = state_62176__$1;
(statearr_62181_63179[(1)] = (8));

} else {
var statearr_62182_63180 = state_62176__$1;
(statearr_62182_63180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (1))){
var inst_62144 = cljs.core.vec(chs);
var inst_62146 = inst_62144;
var state_62176__$1 = (function (){var statearr_62183 = state_62176;
(statearr_62183[(10)] = inst_62146);

return statearr_62183;
})();
var statearr_62184_63181 = state_62176__$1;
(statearr_62184_63181[(2)] = null);

(statearr_62184_63181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (4))){
var inst_62146 = (state_62176[(10)]);
var state_62176__$1 = state_62176;
return cljs.core.async.ioc_alts_BANG_(state_62176__$1,(7),inst_62146);
} else {
if((state_val_62177 === (6))){
var inst_62172 = (state_62176[(2)]);
var state_62176__$1 = state_62176;
var statearr_62186_63183 = state_62176__$1;
(statearr_62186_63183[(2)] = inst_62172);

(statearr_62186_63183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (3))){
var inst_62174 = (state_62176[(2)]);
var state_62176__$1 = state_62176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62176__$1,inst_62174);
} else {
if((state_val_62177 === (2))){
var inst_62146 = (state_62176[(10)]);
var inst_62148 = cljs.core.count(inst_62146);
var inst_62149 = (inst_62148 > (0));
var state_62176__$1 = state_62176;
if(cljs.core.truth_(inst_62149)){
var statearr_62188_63185 = state_62176__$1;
(statearr_62188_63185[(1)] = (4));

} else {
var statearr_62189_63186 = state_62176__$1;
(statearr_62189_63186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (11))){
var inst_62146 = (state_62176[(10)]);
var inst_62165 = (state_62176[(2)]);
var tmp62187 = inst_62146;
var inst_62146__$1 = tmp62187;
var state_62176__$1 = (function (){var statearr_62190 = state_62176;
(statearr_62190[(10)] = inst_62146__$1);

(statearr_62190[(11)] = inst_62165);

return statearr_62190;
})();
var statearr_62191_63187 = state_62176__$1;
(statearr_62191_63187[(2)] = null);

(statearr_62191_63187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (9))){
var inst_62156 = (state_62176[(7)]);
var state_62176__$1 = state_62176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62176__$1,(11),out,inst_62156);
} else {
if((state_val_62177 === (5))){
var inst_62170 = cljs.core.async.close_BANG_(out);
var state_62176__$1 = state_62176;
var statearr_62192_63188 = state_62176__$1;
(statearr_62192_63188[(2)] = inst_62170);

(statearr_62192_63188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (10))){
var inst_62168 = (state_62176[(2)]);
var state_62176__$1 = state_62176;
var statearr_62193_63189 = state_62176__$1;
(statearr_62193_63189[(2)] = inst_62168);

(statearr_62193_63189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62177 === (8))){
var inst_62157 = (state_62176[(9)]);
var inst_62156 = (state_62176[(7)]);
var inst_62155 = (state_62176[(8)]);
var inst_62146 = (state_62176[(10)]);
var inst_62160 = (function (){var cs = inst_62146;
var vec__62151 = inst_62155;
var v = inst_62156;
var c = inst_62157;
return (function (p1__62141_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62141_SHARP_);
});
})();
var inst_62161 = cljs.core.filterv(inst_62160,inst_62146);
var inst_62146__$1 = inst_62161;
var state_62176__$1 = (function (){var statearr_62194 = state_62176;
(statearr_62194[(10)] = inst_62146__$1);

return statearr_62194;
})();
var statearr_62195_63190 = state_62176__$1;
(statearr_62195_63190[(2)] = null);

(statearr_62195_63190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62196 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62196[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62196[(1)] = (1));

return statearr_62196;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62176){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62176);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62197){var ex__34100__auto__ = e62197;
var statearr_62198_63191 = state_62176;
(statearr_62198_63191[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62176[(4)]))){
var statearr_62199_63192 = state_62176;
(statearr_62199_63192[(1)] = cljs.core.first((state_62176[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63193 = state_62176;
state_62176 = G__63193;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62200 = f__34309__auto__();
(statearr_62200[(6)] = c__34308__auto___63178);

return statearr_62200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__62204 = arguments.length;
switch (G__62204) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62230){
var state_val_62231 = (state_62230[(1)]);
if((state_val_62231 === (7))){
var inst_62212 = (state_62230[(7)]);
var inst_62212__$1 = (state_62230[(2)]);
var inst_62213 = (inst_62212__$1 == null);
var inst_62214 = cljs.core.not(inst_62213);
var state_62230__$1 = (function (){var statearr_62233 = state_62230;
(statearr_62233[(7)] = inst_62212__$1);

return statearr_62233;
})();
if(inst_62214){
var statearr_62234_63198 = state_62230__$1;
(statearr_62234_63198[(1)] = (8));

} else {
var statearr_62235_63199 = state_62230__$1;
(statearr_62235_63199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (1))){
var inst_62206 = (0);
var state_62230__$1 = (function (){var statearr_62236 = state_62230;
(statearr_62236[(8)] = inst_62206);

return statearr_62236;
})();
var statearr_62237_63200 = state_62230__$1;
(statearr_62237_63200[(2)] = null);

(statearr_62237_63200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (4))){
var state_62230__$1 = state_62230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62230__$1,(7),ch);
} else {
if((state_val_62231 === (6))){
var inst_62225 = (state_62230[(2)]);
var state_62230__$1 = state_62230;
var statearr_62238_63201 = state_62230__$1;
(statearr_62238_63201[(2)] = inst_62225);

(statearr_62238_63201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (3))){
var inst_62227 = (state_62230[(2)]);
var inst_62228 = cljs.core.async.close_BANG_(out);
var state_62230__$1 = (function (){var statearr_62239 = state_62230;
(statearr_62239[(9)] = inst_62227);

return statearr_62239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62230__$1,inst_62228);
} else {
if((state_val_62231 === (2))){
var inst_62206 = (state_62230[(8)]);
var inst_62209 = (inst_62206 < n);
var state_62230__$1 = state_62230;
if(cljs.core.truth_(inst_62209)){
var statearr_62240_63206 = state_62230__$1;
(statearr_62240_63206[(1)] = (4));

} else {
var statearr_62241_63207 = state_62230__$1;
(statearr_62241_63207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (11))){
var inst_62206 = (state_62230[(8)]);
var inst_62217 = (state_62230[(2)]);
var inst_62218 = (inst_62206 + (1));
var inst_62206__$1 = inst_62218;
var state_62230__$1 = (function (){var statearr_62242 = state_62230;
(statearr_62242[(8)] = inst_62206__$1);

(statearr_62242[(10)] = inst_62217);

return statearr_62242;
})();
var statearr_62243_63208 = state_62230__$1;
(statearr_62243_63208[(2)] = null);

(statearr_62243_63208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (9))){
var state_62230__$1 = state_62230;
var statearr_62244_63209 = state_62230__$1;
(statearr_62244_63209[(2)] = null);

(statearr_62244_63209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (5))){
var state_62230__$1 = state_62230;
var statearr_62245_63210 = state_62230__$1;
(statearr_62245_63210[(2)] = null);

(statearr_62245_63210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (10))){
var inst_62222 = (state_62230[(2)]);
var state_62230__$1 = state_62230;
var statearr_62246_63211 = state_62230__$1;
(statearr_62246_63211[(2)] = inst_62222);

(statearr_62246_63211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62231 === (8))){
var inst_62212 = (state_62230[(7)]);
var state_62230__$1 = state_62230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62230__$1,(11),out,inst_62212);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62247[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62247[(1)] = (1));

return statearr_62247;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62230){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62230);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62248){var ex__34100__auto__ = e62248;
var statearr_62249_63213 = state_62230;
(statearr_62249_63213[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62230[(4)]))){
var statearr_62250_63214 = state_62230;
(statearr_62250_63214[(1)] = cljs.core.first((state_62230[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63215 = state_62230;
state_62230 = G__63215;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62251 = f__34309__auto__();
(statearr_62251[(6)] = c__34308__auto___63197);

return statearr_62251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62253 = (function (f,ch,meta62254){
this.f = f;
this.ch = ch;
this.meta62254 = meta62254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62255,meta62254__$1){
var self__ = this;
var _62255__$1 = this;
return (new cljs.core.async.t_cljs$core$async62253(self__.f,self__.ch,meta62254__$1));
}));

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62255){
var self__ = this;
var _62255__$1 = this;
return self__.meta62254;
}));

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62256 = (function (f,ch,meta62254,_,fn1,meta62257){
this.f = f;
this.ch = ch;
this.meta62254 = meta62254;
this._ = _;
this.fn1 = fn1;
this.meta62257 = meta62257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62258,meta62257__$1){
var self__ = this;
var _62258__$1 = this;
return (new cljs.core.async.t_cljs$core$async62256(self__.f,self__.ch,self__.meta62254,self__._,self__.fn1,meta62257__$1));
}));

(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62258){
var self__ = this;
var _62258__$1 = this;
return self__.meta62257;
}));

(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__62252_SHARP_){
var G__62259 = (((p1__62252_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62252_SHARP_) : self__.f.call(null,p1__62252_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62259) : f1.call(null,G__62259));
});
}));

(cljs.core.async.t_cljs$core$async62256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62254","meta62254",647157943,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62253","cljs.core.async/t_cljs$core$async62253",-639643888,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62257","meta62257",696099881,null)], null);
}));

(cljs.core.async.t_cljs$core$async62256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62256");

(cljs.core.async.t_cljs$core$async62256.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62256.
 */
cljs.core.async.__GT_t_cljs$core$async62256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62256(f__$1,ch__$1,meta62254__$1,___$2,fn1__$1,meta62257){
return (new cljs.core.async.t_cljs$core$async62256(f__$1,ch__$1,meta62254__$1,___$2,fn1__$1,meta62257));
});

}

return (new cljs.core.async.t_cljs$core$async62256(self__.f,self__.ch,self__.meta62254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62260 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62260) : self__.f.call(null,G__62260));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async62253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62254","meta62254",647157943,null)], null);
}));

(cljs.core.async.t_cljs$core$async62253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62253");

(cljs.core.async.t_cljs$core$async62253.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62253.
 */
cljs.core.async.__GT_t_cljs$core$async62253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62253(f__$1,ch__$1,meta62254){
return (new cljs.core.async.t_cljs$core$async62253(f__$1,ch__$1,meta62254));
});

}

return (new cljs.core.async.t_cljs$core$async62253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62261 = (function (f,ch,meta62262){
this.f = f;
this.ch = ch;
this.meta62262 = meta62262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62263,meta62262__$1){
var self__ = this;
var _62263__$1 = this;
return (new cljs.core.async.t_cljs$core$async62261(self__.f,self__.ch,meta62262__$1));
}));

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62263){
var self__ = this;
var _62263__$1 = this;
return self__.meta62262;
}));

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async62261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62262","meta62262",1801305699,null)], null);
}));

(cljs.core.async.t_cljs$core$async62261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62261");

(cljs.core.async.t_cljs$core$async62261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62261.
 */
cljs.core.async.__GT_t_cljs$core$async62261 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62261(f__$1,ch__$1,meta62262){
return (new cljs.core.async.t_cljs$core$async62261(f__$1,ch__$1,meta62262));
});

}

return (new cljs.core.async.t_cljs$core$async62261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62264 = (function (p,ch,meta62265){
this.p = p;
this.ch = ch;
this.meta62265 = meta62265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62266,meta62265__$1){
var self__ = this;
var _62266__$1 = this;
return (new cljs.core.async.t_cljs$core$async62264(self__.p,self__.ch,meta62265__$1));
}));

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62266){
var self__ = this;
var _62266__$1 = this;
return self__.meta62265;
}));

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async62264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62265","meta62265",944909448,null)], null);
}));

(cljs.core.async.t_cljs$core$async62264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62264");

(cljs.core.async.t_cljs$core$async62264.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async62264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62264.
 */
cljs.core.async.__GT_t_cljs$core$async62264 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62264(p__$1,ch__$1,meta62265){
return (new cljs.core.async.t_cljs$core$async62264(p__$1,ch__$1,meta62265));
});

}

return (new cljs.core.async.t_cljs$core$async62264(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__62268 = arguments.length;
switch (G__62268) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62289){
var state_val_62290 = (state_62289[(1)]);
if((state_val_62290 === (7))){
var inst_62285 = (state_62289[(2)]);
var state_62289__$1 = state_62289;
var statearr_62291_63242 = state_62289__$1;
(statearr_62291_63242[(2)] = inst_62285);

(statearr_62291_63242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (1))){
var state_62289__$1 = state_62289;
var statearr_62292_63243 = state_62289__$1;
(statearr_62292_63243[(2)] = null);

(statearr_62292_63243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (4))){
var inst_62271 = (state_62289[(7)]);
var inst_62271__$1 = (state_62289[(2)]);
var inst_62272 = (inst_62271__$1 == null);
var state_62289__$1 = (function (){var statearr_62293 = state_62289;
(statearr_62293[(7)] = inst_62271__$1);

return statearr_62293;
})();
if(cljs.core.truth_(inst_62272)){
var statearr_62294_63244 = state_62289__$1;
(statearr_62294_63244[(1)] = (5));

} else {
var statearr_62295_63245 = state_62289__$1;
(statearr_62295_63245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (6))){
var inst_62271 = (state_62289[(7)]);
var inst_62276 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62271) : p.call(null,inst_62271));
var state_62289__$1 = state_62289;
if(cljs.core.truth_(inst_62276)){
var statearr_62296_63246 = state_62289__$1;
(statearr_62296_63246[(1)] = (8));

} else {
var statearr_62297_63247 = state_62289__$1;
(statearr_62297_63247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (3))){
var inst_62287 = (state_62289[(2)]);
var state_62289__$1 = state_62289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62289__$1,inst_62287);
} else {
if((state_val_62290 === (2))){
var state_62289__$1 = state_62289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62289__$1,(4),ch);
} else {
if((state_val_62290 === (11))){
var inst_62279 = (state_62289[(2)]);
var state_62289__$1 = state_62289;
var statearr_62298_63248 = state_62289__$1;
(statearr_62298_63248[(2)] = inst_62279);

(statearr_62298_63248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (9))){
var state_62289__$1 = state_62289;
var statearr_62299_63249 = state_62289__$1;
(statearr_62299_63249[(2)] = null);

(statearr_62299_63249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (5))){
var inst_62274 = cljs.core.async.close_BANG_(out);
var state_62289__$1 = state_62289;
var statearr_62300_63250 = state_62289__$1;
(statearr_62300_63250[(2)] = inst_62274);

(statearr_62300_63250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (10))){
var inst_62282 = (state_62289[(2)]);
var state_62289__$1 = (function (){var statearr_62301 = state_62289;
(statearr_62301[(8)] = inst_62282);

return statearr_62301;
})();
var statearr_62302_63251 = state_62289__$1;
(statearr_62302_63251[(2)] = null);

(statearr_62302_63251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62290 === (8))){
var inst_62271 = (state_62289[(7)]);
var state_62289__$1 = state_62289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62289__$1,(11),out,inst_62271);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62303 = [null,null,null,null,null,null,null,null,null];
(statearr_62303[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62303[(1)] = (1));

return statearr_62303;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62289){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62289);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62304){var ex__34100__auto__ = e62304;
var statearr_62305_63252 = state_62289;
(statearr_62305_63252[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62289[(4)]))){
var statearr_62306_63253 = state_62289;
(statearr_62306_63253[(1)] = cljs.core.first((state_62289[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63254 = state_62289;
state_62289 = G__63254;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62307 = f__34309__auto__();
(statearr_62307[(6)] = c__34308__auto___63240);

return statearr_62307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62309 = arguments.length;
switch (G__62309) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62371){
var state_val_62372 = (state_62371[(1)]);
if((state_val_62372 === (7))){
var inst_62367 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
var statearr_62373_63256 = state_62371__$1;
(statearr_62373_63256[(2)] = inst_62367);

(statearr_62373_63256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (20))){
var inst_62337 = (state_62371[(7)]);
var inst_62348 = (state_62371[(2)]);
var inst_62349 = cljs.core.next(inst_62337);
var inst_62323 = inst_62349;
var inst_62324 = null;
var inst_62325 = (0);
var inst_62326 = (0);
var state_62371__$1 = (function (){var statearr_62374 = state_62371;
(statearr_62374[(8)] = inst_62323);

(statearr_62374[(9)] = inst_62325);

(statearr_62374[(10)] = inst_62326);

(statearr_62374[(11)] = inst_62324);

(statearr_62374[(12)] = inst_62348);

return statearr_62374;
})();
var statearr_62375_63257 = state_62371__$1;
(statearr_62375_63257[(2)] = null);

(statearr_62375_63257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (1))){
var state_62371__$1 = state_62371;
var statearr_62376_63258 = state_62371__$1;
(statearr_62376_63258[(2)] = null);

(statearr_62376_63258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (4))){
var inst_62312 = (state_62371[(13)]);
var inst_62312__$1 = (state_62371[(2)]);
var inst_62313 = (inst_62312__$1 == null);
var state_62371__$1 = (function (){var statearr_62377 = state_62371;
(statearr_62377[(13)] = inst_62312__$1);

return statearr_62377;
})();
if(cljs.core.truth_(inst_62313)){
var statearr_62378_63259 = state_62371__$1;
(statearr_62378_63259[(1)] = (5));

} else {
var statearr_62379_63260 = state_62371__$1;
(statearr_62379_63260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (15))){
var state_62371__$1 = state_62371;
var statearr_62383_63261 = state_62371__$1;
(statearr_62383_63261[(2)] = null);

(statearr_62383_63261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (21))){
var state_62371__$1 = state_62371;
var statearr_62384_63262 = state_62371__$1;
(statearr_62384_63262[(2)] = null);

(statearr_62384_63262[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (13))){
var inst_62323 = (state_62371[(8)]);
var inst_62325 = (state_62371[(9)]);
var inst_62326 = (state_62371[(10)]);
var inst_62324 = (state_62371[(11)]);
var inst_62333 = (state_62371[(2)]);
var inst_62334 = (inst_62326 + (1));
var tmp62380 = inst_62323;
var tmp62381 = inst_62325;
var tmp62382 = inst_62324;
var inst_62323__$1 = tmp62380;
var inst_62324__$1 = tmp62382;
var inst_62325__$1 = tmp62381;
var inst_62326__$1 = inst_62334;
var state_62371__$1 = (function (){var statearr_62385 = state_62371;
(statearr_62385[(8)] = inst_62323__$1);

(statearr_62385[(9)] = inst_62325__$1);

(statearr_62385[(10)] = inst_62326__$1);

(statearr_62385[(11)] = inst_62324__$1);

(statearr_62385[(14)] = inst_62333);

return statearr_62385;
})();
var statearr_62386_63264 = state_62371__$1;
(statearr_62386_63264[(2)] = null);

(statearr_62386_63264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (22))){
var state_62371__$1 = state_62371;
var statearr_62387_63265 = state_62371__$1;
(statearr_62387_63265[(2)] = null);

(statearr_62387_63265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (6))){
var inst_62312 = (state_62371[(13)]);
var inst_62321 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62312) : f.call(null,inst_62312));
var inst_62322 = cljs.core.seq(inst_62321);
var inst_62323 = inst_62322;
var inst_62324 = null;
var inst_62325 = (0);
var inst_62326 = (0);
var state_62371__$1 = (function (){var statearr_62388 = state_62371;
(statearr_62388[(8)] = inst_62323);

(statearr_62388[(9)] = inst_62325);

(statearr_62388[(10)] = inst_62326);

(statearr_62388[(11)] = inst_62324);

return statearr_62388;
})();
var statearr_62389_63266 = state_62371__$1;
(statearr_62389_63266[(2)] = null);

(statearr_62389_63266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (17))){
var inst_62337 = (state_62371[(7)]);
var inst_62341 = cljs.core.chunk_first(inst_62337);
var inst_62342 = cljs.core.chunk_rest(inst_62337);
var inst_62343 = cljs.core.count(inst_62341);
var inst_62323 = inst_62342;
var inst_62324 = inst_62341;
var inst_62325 = inst_62343;
var inst_62326 = (0);
var state_62371__$1 = (function (){var statearr_62390 = state_62371;
(statearr_62390[(8)] = inst_62323);

(statearr_62390[(9)] = inst_62325);

(statearr_62390[(10)] = inst_62326);

(statearr_62390[(11)] = inst_62324);

return statearr_62390;
})();
var statearr_62391_63271 = state_62371__$1;
(statearr_62391_63271[(2)] = null);

(statearr_62391_63271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (3))){
var inst_62369 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62371__$1,inst_62369);
} else {
if((state_val_62372 === (12))){
var inst_62357 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
var statearr_62392_63272 = state_62371__$1;
(statearr_62392_63272[(2)] = inst_62357);

(statearr_62392_63272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (2))){
var state_62371__$1 = state_62371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62371__$1,(4),in$);
} else {
if((state_val_62372 === (23))){
var inst_62365 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
var statearr_62393_63273 = state_62371__$1;
(statearr_62393_63273[(2)] = inst_62365);

(statearr_62393_63273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (19))){
var inst_62352 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
var statearr_62394_63274 = state_62371__$1;
(statearr_62394_63274[(2)] = inst_62352);

(statearr_62394_63274[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (11))){
var inst_62323 = (state_62371[(8)]);
var inst_62337 = (state_62371[(7)]);
var inst_62337__$1 = cljs.core.seq(inst_62323);
var state_62371__$1 = (function (){var statearr_62395 = state_62371;
(statearr_62395[(7)] = inst_62337__$1);

return statearr_62395;
})();
if(inst_62337__$1){
var statearr_62396_63275 = state_62371__$1;
(statearr_62396_63275[(1)] = (14));

} else {
var statearr_62397_63276 = state_62371__$1;
(statearr_62397_63276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (9))){
var inst_62359 = (state_62371[(2)]);
var inst_62360 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62371__$1 = (function (){var statearr_62398 = state_62371;
(statearr_62398[(15)] = inst_62359);

return statearr_62398;
})();
if(cljs.core.truth_(inst_62360)){
var statearr_62399_63277 = state_62371__$1;
(statearr_62399_63277[(1)] = (21));

} else {
var statearr_62400_63278 = state_62371__$1;
(statearr_62400_63278[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (5))){
var inst_62315 = cljs.core.async.close_BANG_(out);
var state_62371__$1 = state_62371;
var statearr_62401_63279 = state_62371__$1;
(statearr_62401_63279[(2)] = inst_62315);

(statearr_62401_63279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (14))){
var inst_62337 = (state_62371[(7)]);
var inst_62339 = cljs.core.chunked_seq_QMARK_(inst_62337);
var state_62371__$1 = state_62371;
if(inst_62339){
var statearr_62404_63280 = state_62371__$1;
(statearr_62404_63280[(1)] = (17));

} else {
var statearr_62405_63281 = state_62371__$1;
(statearr_62405_63281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (16))){
var inst_62355 = (state_62371[(2)]);
var state_62371__$1 = state_62371;
var statearr_62406_63282 = state_62371__$1;
(statearr_62406_63282[(2)] = inst_62355);

(statearr_62406_63282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62372 === (10))){
var inst_62326 = (state_62371[(10)]);
var inst_62324 = (state_62371[(11)]);
var inst_62331 = cljs.core._nth(inst_62324,inst_62326);
var state_62371__$1 = state_62371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62371__$1,(13),out,inst_62331);
} else {
if((state_val_62372 === (18))){
var inst_62337 = (state_62371[(7)]);
var inst_62346 = cljs.core.first(inst_62337);
var state_62371__$1 = state_62371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62371__$1,(20),out,inst_62346);
} else {
if((state_val_62372 === (8))){
var inst_62325 = (state_62371[(9)]);
var inst_62326 = (state_62371[(10)]);
var inst_62328 = (inst_62326 < inst_62325);
var inst_62329 = inst_62328;
var state_62371__$1 = state_62371;
if(cljs.core.truth_(inst_62329)){
var statearr_62409_63288 = state_62371__$1;
(statearr_62409_63288[(1)] = (10));

} else {
var statearr_62410_63289 = state_62371__$1;
(statearr_62410_63289[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_62411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__);

(statearr_62411[(1)] = (1));

return statearr_62411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1 = (function (state_62371){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62371);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62412){var ex__34100__auto__ = e62412;
var statearr_62413_63290 = state_62371;
(statearr_62413_63290[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62371[(4)]))){
var statearr_62414_63292 = state_62371;
(statearr_62414_63292[(1)] = cljs.core.first((state_62371[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63293 = state_62371;
state_62371 = G__63293;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__ = function(state_62371){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1.call(this,state_62371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62415 = f__34309__auto__();
(statearr_62415[(6)] = c__34308__auto__);

return statearr_62415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62417 = arguments.length;
switch (G__62417) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62421 = arguments.length;
switch (G__62421) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62425 = arguments.length;
switch (G__62425) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62453){
var state_val_62454 = (state_62453[(1)]);
if((state_val_62454 === (7))){
var inst_62448 = (state_62453[(2)]);
var state_62453__$1 = state_62453;
var statearr_62455_63300 = state_62453__$1;
(statearr_62455_63300[(2)] = inst_62448);

(statearr_62455_63300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (1))){
var inst_62430 = null;
var state_62453__$1 = (function (){var statearr_62456 = state_62453;
(statearr_62456[(7)] = inst_62430);

return statearr_62456;
})();
var statearr_62461_63302 = state_62453__$1;
(statearr_62461_63302[(2)] = null);

(statearr_62461_63302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (4))){
var inst_62433 = (state_62453[(8)]);
var inst_62433__$1 = (state_62453[(2)]);
var inst_62434 = (inst_62433__$1 == null);
var inst_62435 = cljs.core.not(inst_62434);
var state_62453__$1 = (function (){var statearr_62465 = state_62453;
(statearr_62465[(8)] = inst_62433__$1);

return statearr_62465;
})();
if(inst_62435){
var statearr_62466_63303 = state_62453__$1;
(statearr_62466_63303[(1)] = (5));

} else {
var statearr_62467_63304 = state_62453__$1;
(statearr_62467_63304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (6))){
var state_62453__$1 = state_62453;
var statearr_62468_63305 = state_62453__$1;
(statearr_62468_63305[(2)] = null);

(statearr_62468_63305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (3))){
var inst_62450 = (state_62453[(2)]);
var inst_62451 = cljs.core.async.close_BANG_(out);
var state_62453__$1 = (function (){var statearr_62472 = state_62453;
(statearr_62472[(9)] = inst_62450);

return statearr_62472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62453__$1,inst_62451);
} else {
if((state_val_62454 === (2))){
var state_62453__$1 = state_62453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62453__$1,(4),ch);
} else {
if((state_val_62454 === (11))){
var inst_62433 = (state_62453[(8)]);
var inst_62442 = (state_62453[(2)]);
var inst_62430 = inst_62433;
var state_62453__$1 = (function (){var statearr_62476 = state_62453;
(statearr_62476[(10)] = inst_62442);

(statearr_62476[(7)] = inst_62430);

return statearr_62476;
})();
var statearr_62477_63310 = state_62453__$1;
(statearr_62477_63310[(2)] = null);

(statearr_62477_63310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (9))){
var inst_62433 = (state_62453[(8)]);
var state_62453__$1 = state_62453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62453__$1,(11),out,inst_62433);
} else {
if((state_val_62454 === (5))){
var inst_62433 = (state_62453[(8)]);
var inst_62430 = (state_62453[(7)]);
var inst_62437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62433,inst_62430);
var state_62453__$1 = state_62453;
if(inst_62437){
var statearr_62482_63311 = state_62453__$1;
(statearr_62482_63311[(1)] = (8));

} else {
var statearr_62483_63312 = state_62453__$1;
(statearr_62483_63312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (10))){
var inst_62445 = (state_62453[(2)]);
var state_62453__$1 = state_62453;
var statearr_62484_63313 = state_62453__$1;
(statearr_62484_63313[(2)] = inst_62445);

(statearr_62484_63313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62454 === (8))){
var inst_62430 = (state_62453[(7)]);
var tmp62478 = inst_62430;
var inst_62430__$1 = tmp62478;
var state_62453__$1 = (function (){var statearr_62485 = state_62453;
(statearr_62485[(7)] = inst_62430__$1);

return statearr_62485;
})();
var statearr_62486_63314 = state_62453__$1;
(statearr_62486_63314[(2)] = null);

(statearr_62486_63314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62487[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62487[(1)] = (1));

return statearr_62487;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62453){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62453);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62488){var ex__34100__auto__ = e62488;
var statearr_62489_63315 = state_62453;
(statearr_62489_63315[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62453[(4)]))){
var statearr_62490_63316 = state_62453;
(statearr_62490_63316[(1)] = cljs.core.first((state_62453[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63317 = state_62453;
state_62453 = G__63317;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62491 = f__34309__auto__();
(statearr_62491[(6)] = c__34308__auto___63298);

return statearr_62491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62494 = arguments.length;
switch (G__62494) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62532){
var state_val_62533 = (state_62532[(1)]);
if((state_val_62533 === (7))){
var inst_62528 = (state_62532[(2)]);
var state_62532__$1 = state_62532;
var statearr_62536_63320 = state_62532__$1;
(statearr_62536_63320[(2)] = inst_62528);

(statearr_62536_63320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (1))){
var inst_62495 = (new Array(n));
var inst_62496 = inst_62495;
var inst_62497 = (0);
var state_62532__$1 = (function (){var statearr_62537 = state_62532;
(statearr_62537[(7)] = inst_62497);

(statearr_62537[(8)] = inst_62496);

return statearr_62537;
})();
var statearr_62538_63321 = state_62532__$1;
(statearr_62538_63321[(2)] = null);

(statearr_62538_63321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (4))){
var inst_62500 = (state_62532[(9)]);
var inst_62500__$1 = (state_62532[(2)]);
var inst_62501 = (inst_62500__$1 == null);
var inst_62502 = cljs.core.not(inst_62501);
var state_62532__$1 = (function (){var statearr_62539 = state_62532;
(statearr_62539[(9)] = inst_62500__$1);

return statearr_62539;
})();
if(inst_62502){
var statearr_62540_63322 = state_62532__$1;
(statearr_62540_63322[(1)] = (5));

} else {
var statearr_62542_63323 = state_62532__$1;
(statearr_62542_63323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (15))){
var inst_62522 = (state_62532[(2)]);
var state_62532__$1 = state_62532;
var statearr_62544_63324 = state_62532__$1;
(statearr_62544_63324[(2)] = inst_62522);

(statearr_62544_63324[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (13))){
var state_62532__$1 = state_62532;
var statearr_62545_63325 = state_62532__$1;
(statearr_62545_63325[(2)] = null);

(statearr_62545_63325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (6))){
var inst_62497 = (state_62532[(7)]);
var inst_62518 = (inst_62497 > (0));
var state_62532__$1 = state_62532;
if(cljs.core.truth_(inst_62518)){
var statearr_62546_63326 = state_62532__$1;
(statearr_62546_63326[(1)] = (12));

} else {
var statearr_62547_63327 = state_62532__$1;
(statearr_62547_63327[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (3))){
var inst_62530 = (state_62532[(2)]);
var state_62532__$1 = state_62532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62532__$1,inst_62530);
} else {
if((state_val_62533 === (12))){
var inst_62496 = (state_62532[(8)]);
var inst_62520 = cljs.core.vec(inst_62496);
var state_62532__$1 = state_62532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62532__$1,(15),out,inst_62520);
} else {
if((state_val_62533 === (2))){
var state_62532__$1 = state_62532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62532__$1,(4),ch);
} else {
if((state_val_62533 === (11))){
var inst_62512 = (state_62532[(2)]);
var inst_62513 = (new Array(n));
var inst_62496 = inst_62513;
var inst_62497 = (0);
var state_62532__$1 = (function (){var statearr_62548 = state_62532;
(statearr_62548[(10)] = inst_62512);

(statearr_62548[(7)] = inst_62497);

(statearr_62548[(8)] = inst_62496);

return statearr_62548;
})();
var statearr_62549_63331 = state_62532__$1;
(statearr_62549_63331[(2)] = null);

(statearr_62549_63331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (9))){
var inst_62496 = (state_62532[(8)]);
var inst_62510 = cljs.core.vec(inst_62496);
var state_62532__$1 = state_62532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62532__$1,(11),out,inst_62510);
} else {
if((state_val_62533 === (5))){
var inst_62505 = (state_62532[(11)]);
var inst_62497 = (state_62532[(7)]);
var inst_62500 = (state_62532[(9)]);
var inst_62496 = (state_62532[(8)]);
var inst_62504 = (inst_62496[inst_62497] = inst_62500);
var inst_62505__$1 = (inst_62497 + (1));
var inst_62506 = (inst_62505__$1 < n);
var state_62532__$1 = (function (){var statearr_62550 = state_62532;
(statearr_62550[(11)] = inst_62505__$1);

(statearr_62550[(12)] = inst_62504);

return statearr_62550;
})();
if(cljs.core.truth_(inst_62506)){
var statearr_62551_63332 = state_62532__$1;
(statearr_62551_63332[(1)] = (8));

} else {
var statearr_62552_63333 = state_62532__$1;
(statearr_62552_63333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (14))){
var inst_62525 = (state_62532[(2)]);
var inst_62526 = cljs.core.async.close_BANG_(out);
var state_62532__$1 = (function (){var statearr_62554 = state_62532;
(statearr_62554[(13)] = inst_62525);

return statearr_62554;
})();
var statearr_62555_63336 = state_62532__$1;
(statearr_62555_63336[(2)] = inst_62526);

(statearr_62555_63336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (10))){
var inst_62516 = (state_62532[(2)]);
var state_62532__$1 = state_62532;
var statearr_62556_63338 = state_62532__$1;
(statearr_62556_63338[(2)] = inst_62516);

(statearr_62556_63338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62533 === (8))){
var inst_62505 = (state_62532[(11)]);
var inst_62496 = (state_62532[(8)]);
var tmp62553 = inst_62496;
var inst_62496__$1 = tmp62553;
var inst_62497 = inst_62505;
var state_62532__$1 = (function (){var statearr_62557 = state_62532;
(statearr_62557[(7)] = inst_62497);

(statearr_62557[(8)] = inst_62496__$1);

return statearr_62557;
})();
var statearr_62558_63339 = state_62532__$1;
(statearr_62558_63339[(2)] = null);

(statearr_62558_63339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62559[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62559[(1)] = (1));

return statearr_62559;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62532){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62532);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62560){var ex__34100__auto__ = e62560;
var statearr_62561_63343 = state_62532;
(statearr_62561_63343[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62532[(4)]))){
var statearr_62562_63344 = state_62532;
(statearr_62562_63344[(1)] = cljs.core.first((state_62532[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63345 = state_62532;
state_62532 = G__63345;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62563 = f__34309__auto__();
(statearr_62563[(6)] = c__34308__auto___63319);

return statearr_62563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62565 = arguments.length;
switch (G__62565) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34308__auto___63347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_62610){
var state_val_62611 = (state_62610[(1)]);
if((state_val_62611 === (7))){
var inst_62606 = (state_62610[(2)]);
var state_62610__$1 = state_62610;
var statearr_62615_63348 = state_62610__$1;
(statearr_62615_63348[(2)] = inst_62606);

(statearr_62615_63348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (1))){
var inst_62566 = [];
var inst_62567 = inst_62566;
var inst_62568 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62610__$1 = (function (){var statearr_62616 = state_62610;
(statearr_62616[(7)] = inst_62567);

(statearr_62616[(8)] = inst_62568);

return statearr_62616;
})();
var statearr_62617_63349 = state_62610__$1;
(statearr_62617_63349[(2)] = null);

(statearr_62617_63349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (4))){
var inst_62571 = (state_62610[(9)]);
var inst_62571__$1 = (state_62610[(2)]);
var inst_62572 = (inst_62571__$1 == null);
var inst_62573 = cljs.core.not(inst_62572);
var state_62610__$1 = (function (){var statearr_62618 = state_62610;
(statearr_62618[(9)] = inst_62571__$1);

return statearr_62618;
})();
if(inst_62573){
var statearr_62619_63353 = state_62610__$1;
(statearr_62619_63353[(1)] = (5));

} else {
var statearr_62620_63354 = state_62610__$1;
(statearr_62620_63354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (15))){
var inst_62567 = (state_62610[(7)]);
var inst_62598 = cljs.core.vec(inst_62567);
var state_62610__$1 = state_62610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62610__$1,(18),out,inst_62598);
} else {
if((state_val_62611 === (13))){
var inst_62593 = (state_62610[(2)]);
var state_62610__$1 = state_62610;
var statearr_62621_63355 = state_62610__$1;
(statearr_62621_63355[(2)] = inst_62593);

(statearr_62621_63355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (6))){
var inst_62567 = (state_62610[(7)]);
var inst_62595 = inst_62567.length;
var inst_62596 = (inst_62595 > (0));
var state_62610__$1 = state_62610;
if(cljs.core.truth_(inst_62596)){
var statearr_62622_63356 = state_62610__$1;
(statearr_62622_63356[(1)] = (15));

} else {
var statearr_62623_63357 = state_62610__$1;
(statearr_62623_63357[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (17))){
var inst_62603 = (state_62610[(2)]);
var inst_62604 = cljs.core.async.close_BANG_(out);
var state_62610__$1 = (function (){var statearr_62624 = state_62610;
(statearr_62624[(10)] = inst_62603);

return statearr_62624;
})();
var statearr_62625_63358 = state_62610__$1;
(statearr_62625_63358[(2)] = inst_62604);

(statearr_62625_63358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (3))){
var inst_62608 = (state_62610[(2)]);
var state_62610__$1 = state_62610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62610__$1,inst_62608);
} else {
if((state_val_62611 === (12))){
var inst_62567 = (state_62610[(7)]);
var inst_62586 = cljs.core.vec(inst_62567);
var state_62610__$1 = state_62610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62610__$1,(14),out,inst_62586);
} else {
if((state_val_62611 === (2))){
var state_62610__$1 = state_62610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62610__$1,(4),ch);
} else {
if((state_val_62611 === (11))){
var inst_62567 = (state_62610[(7)]);
var inst_62571 = (state_62610[(9)]);
var inst_62575 = (state_62610[(11)]);
var inst_62583 = inst_62567.push(inst_62571);
var tmp62626 = inst_62567;
var inst_62567__$1 = tmp62626;
var inst_62568 = inst_62575;
var state_62610__$1 = (function (){var statearr_62627 = state_62610;
(statearr_62627[(7)] = inst_62567__$1);

(statearr_62627[(12)] = inst_62583);

(statearr_62627[(8)] = inst_62568);

return statearr_62627;
})();
var statearr_62628_63360 = state_62610__$1;
(statearr_62628_63360[(2)] = null);

(statearr_62628_63360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (9))){
var inst_62568 = (state_62610[(8)]);
var inst_62579 = cljs.core.keyword_identical_QMARK_(inst_62568,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_62610__$1 = state_62610;
var statearr_62630_63361 = state_62610__$1;
(statearr_62630_63361[(2)] = inst_62579);

(statearr_62630_63361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (5))){
var inst_62571 = (state_62610[(9)]);
var inst_62576 = (state_62610[(13)]);
var inst_62568 = (state_62610[(8)]);
var inst_62575 = (state_62610[(11)]);
var inst_62575__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62571) : f.call(null,inst_62571));
var inst_62576__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62575__$1,inst_62568);
var state_62610__$1 = (function (){var statearr_62633 = state_62610;
(statearr_62633[(13)] = inst_62576__$1);

(statearr_62633[(11)] = inst_62575__$1);

return statearr_62633;
})();
if(inst_62576__$1){
var statearr_62634_63366 = state_62610__$1;
(statearr_62634_63366[(1)] = (8));

} else {
var statearr_62635_63367 = state_62610__$1;
(statearr_62635_63367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (14))){
var inst_62571 = (state_62610[(9)]);
var inst_62575 = (state_62610[(11)]);
var inst_62588 = (state_62610[(2)]);
var inst_62589 = [];
var inst_62590 = inst_62589.push(inst_62571);
var inst_62567 = inst_62589;
var inst_62568 = inst_62575;
var state_62610__$1 = (function (){var statearr_62636 = state_62610;
(statearr_62636[(7)] = inst_62567);

(statearr_62636[(14)] = inst_62590);

(statearr_62636[(8)] = inst_62568);

(statearr_62636[(15)] = inst_62588);

return statearr_62636;
})();
var statearr_62637_63368 = state_62610__$1;
(statearr_62637_63368[(2)] = null);

(statearr_62637_63368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (16))){
var state_62610__$1 = state_62610;
var statearr_62638_63369 = state_62610__$1;
(statearr_62638_63369[(2)] = null);

(statearr_62638_63369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (10))){
var inst_62581 = (state_62610[(2)]);
var state_62610__$1 = state_62610;
if(cljs.core.truth_(inst_62581)){
var statearr_62641_63370 = state_62610__$1;
(statearr_62641_63370[(1)] = (11));

} else {
var statearr_62642_63371 = state_62610__$1;
(statearr_62642_63371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (18))){
var inst_62600 = (state_62610[(2)]);
var state_62610__$1 = state_62610;
var statearr_62643_63372 = state_62610__$1;
(statearr_62643_63372[(2)] = inst_62600);

(statearr_62643_63372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62611 === (8))){
var inst_62576 = (state_62610[(13)]);
var state_62610__$1 = state_62610;
var statearr_62646_63373 = state_62610__$1;
(statearr_62646_63373[(2)] = inst_62576);

(statearr_62646_63373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34097__auto__ = null;
var cljs$core$async$state_machine__34097__auto____0 = (function (){
var statearr_62649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62649[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_62649[(1)] = (1));

return statearr_62649;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_62610){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_62610);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e62650){var ex__34100__auto__ = e62650;
var statearr_62651_63378 = state_62610;
(statearr_62651_63378[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_62610[(4)]))){
var statearr_62653_63379 = state_62610;
(statearr_62653_63379[(1)] = cljs.core.first((state_62610[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63381 = state_62610;
state_62610 = G__63381;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_62610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_62610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_62656 = f__34309__auto__();
(statearr_62656[(6)] = c__34308__auto___63347);

return statearr_62656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
