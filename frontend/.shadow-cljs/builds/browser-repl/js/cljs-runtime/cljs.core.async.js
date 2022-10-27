goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34366 = arguments.length;
switch (G__34366) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34367 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34367 = (function (f,blockable,meta34368){
this.f = f;
this.blockable = blockable;
this.meta34368 = meta34368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34369,meta34368__$1){
var self__ = this;
var _34369__$1 = this;
return (new cljs.core.async.t_cljs$core$async34367(self__.f,self__.blockable,meta34368__$1));
}));

(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34369){
var self__ = this;
var _34369__$1 = this;
return self__.meta34368;
}));

(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34368","meta34368",849171502,null)], null);
}));

(cljs.core.async.t_cljs$core$async34367.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34367");

(cljs.core.async.t_cljs$core$async34367.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34367");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34367.
 */
cljs.core.async.__GT_t_cljs$core$async34367 = (function cljs$core$async$__GT_t_cljs$core$async34367(f__$1,blockable__$1,meta34368){
return (new cljs.core.async.t_cljs$core$async34367(f__$1,blockable__$1,meta34368));
});

}

return (new cljs.core.async.t_cljs$core$async34367(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34377 = arguments.length;
switch (G__34377) {
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
var G__34382 = arguments.length;
switch (G__34382) {
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
var G__34391 = arguments.length;
switch (G__34391) {
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
var val_36799 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36799) : fn1.call(null,val_36799));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36799) : fn1.call(null,val_36799));
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
var G__34393 = arguments.length;
switch (G__34393) {
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
var n__5636__auto___36801 = n;
var x_36802 = (0);
while(true){
if((x_36802 < n__5636__auto___36801)){
(a[x_36802] = x_36802);

var G__36803 = (x_36802 + (1));
x_36802 = G__36803;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34395 = (function (flag,meta34396){
this.flag = flag;
this.meta34396 = meta34396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34397,meta34396__$1){
var self__ = this;
var _34397__$1 = this;
return (new cljs.core.async.t_cljs$core$async34395(self__.flag,meta34396__$1));
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34397){
var self__ = this;
var _34397__$1 = this;
return self__.meta34396;
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34396","meta34396",-1293751021,null)], null);
}));

(cljs.core.async.t_cljs$core$async34395.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34395");

(cljs.core.async.t_cljs$core$async34395.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34395");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34395.
 */
cljs.core.async.__GT_t_cljs$core$async34395 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34395(flag__$1,meta34396){
return (new cljs.core.async.t_cljs$core$async34395(flag__$1,meta34396));
});

}

return (new cljs.core.async.t_cljs$core$async34395(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34400 = (function (flag,cb,meta34401){
this.flag = flag;
this.cb = cb;
this.meta34401 = meta34401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34402,meta34401__$1){
var self__ = this;
var _34402__$1 = this;
return (new cljs.core.async.t_cljs$core$async34400(self__.flag,self__.cb,meta34401__$1));
}));

(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34402){
var self__ = this;
var _34402__$1 = this;
return self__.meta34401;
}));

(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34401","meta34401",-733804561,null)], null);
}));

(cljs.core.async.t_cljs$core$async34400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34400");

(cljs.core.async.t_cljs$core$async34400.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34400.
 */
cljs.core.async.__GT_t_cljs$core$async34400 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34400(flag__$1,cb__$1,meta34401){
return (new cljs.core.async.t_cljs$core$async34400(flag__$1,cb__$1,meta34401));
});

}

return (new cljs.core.async.t_cljs$core$async34400(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34403_SHARP_){
var G__34408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34403_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34408) : fret.call(null,G__34408));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34404_SHARP_){
var G__34411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34404_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34411) : fret.call(null,G__34411));
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
var G__36818 = (i + (1));
i = G__36818;
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
var len__5769__auto___36819 = arguments.length;
var i__5770__auto___36820 = (0);
while(true){
if((i__5770__auto___36820 < len__5769__auto___36819)){
args__5775__auto__.push((arguments[i__5770__auto___36820]));

var G__36821 = (i__5770__auto___36820 + (1));
i__5770__auto___36820 = G__36821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34435){
var map__34436 = p__34435;
var map__34436__$1 = cljs.core.__destructure_map(map__34436);
var opts = map__34436__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34419){
var G__34420 = cljs.core.first(seq34419);
var seq34419__$1 = cljs.core.next(seq34419);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34420,seq34419__$1);
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
var G__34448 = arguments.length;
switch (G__34448) {
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
var c__34308__auto___36827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (7))){
var inst_34501 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34515_36828 = state_34508__$1;
(statearr_34515_36828[(2)] = inst_34501);

(statearr_34515_36828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
var statearr_34516_36829 = state_34508__$1;
(statearr_34516_36829[(2)] = null);

(statearr_34516_36829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (4))){
var inst_34483 = (state_34508[(7)]);
var inst_34483__$1 = (state_34508[(2)]);
var inst_34484 = (inst_34483__$1 == null);
var state_34508__$1 = (function (){var statearr_34517 = state_34508;
(statearr_34517[(7)] = inst_34483__$1);

return statearr_34517;
})();
if(cljs.core.truth_(inst_34484)){
var statearr_34518_36830 = state_34508__$1;
(statearr_34518_36830[(1)] = (5));

} else {
var statearr_34519_36831 = state_34508__$1;
(statearr_34519_36831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (13))){
var state_34508__$1 = state_34508;
var statearr_34521_36832 = state_34508__$1;
(statearr_34521_36832[(2)] = null);

(statearr_34521_36832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (6))){
var inst_34483 = (state_34508[(7)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34508__$1,(11),to,inst_34483);
} else {
if((state_val_34509 === (3))){
var inst_34503 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34508__$1,inst_34503);
} else {
if((state_val_34509 === (12))){
var state_34508__$1 = state_34508;
var statearr_34522_36833 = state_34508__$1;
(statearr_34522_36833[(2)] = null);

(statearr_34522_36833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (2))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34508__$1,(4),from);
} else {
if((state_val_34509 === (11))){
var inst_34494 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
if(cljs.core.truth_(inst_34494)){
var statearr_34523_36834 = state_34508__$1;
(statearr_34523_36834[(1)] = (12));

} else {
var statearr_34524_36835 = state_34508__$1;
(statearr_34524_36835[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (9))){
var state_34508__$1 = state_34508;
var statearr_34525_36836 = state_34508__$1;
(statearr_34525_36836[(2)] = null);

(statearr_34525_36836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var state_34508__$1 = state_34508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34527_36838 = state_34508__$1;
(statearr_34527_36838[(1)] = (8));

} else {
var statearr_34528_36840 = state_34508__$1;
(statearr_34528_36840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (14))){
var inst_34499 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34529_36841 = state_34508__$1;
(statearr_34529_36841[(2)] = inst_34499);

(statearr_34529_36841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (10))){
var inst_34491 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34530_36842 = state_34508__$1;
(statearr_34530_36842[(2)] = inst_34491);

(statearr_34530_36842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (8))){
var inst_34488 = cljs.core.async.close_BANG_(to);
var state_34508__$1 = state_34508;
var statearr_34531_36844 = state_34508__$1;
(statearr_34531_36844[(2)] = inst_34488);

(statearr_34531_36844[(1)] = (10));


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
var statearr_34533 = [null,null,null,null,null,null,null,null];
(statearr_34533[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_34533[(1)] = (1));

return statearr_34533;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_34508){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34508);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34534){var ex__34100__auto__ = e34534;
var statearr_34535_36862 = state_34508;
(statearr_34535_36862[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34508[(4)]))){
var statearr_34536_36867 = state_34508;
(statearr_34536_36867[(1)] = cljs.core.first((state_34508[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_34508;
state_34508 = G__36871;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34537 = f__34309__auto__();
(statearr_34537[(6)] = c__34308__auto___36827);

return statearr_34537;
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
var process__$1 = (function (p__34540){
var vec__34541 = p__34540;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34541,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34541,(1),null);
var job = vec__34541;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34308__auto___36901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34550){
var state_val_34552 = (state_34550[(1)]);
if((state_val_34552 === (1))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34550__$1,(2),res,v);
} else {
if((state_val_34552 === (2))){
var inst_34546 = (state_34550[(2)]);
var inst_34547 = cljs.core.async.close_BANG_(res);
var state_34550__$1 = (function (){var statearr_34553 = state_34550;
(statearr_34553[(7)] = inst_34546);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34550__$1,inst_34547);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_34550){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34550);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34555){var ex__34100__auto__ = e34555;
var statearr_34556_36906 = state_34550;
(statearr_34556_36906[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34550[(4)]))){
var statearr_34557_36907 = state_34550;
(statearr_34557_36907[(1)] = cljs.core.first((state_34550[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36908 = state_34550;
state_34550 = G__36908;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_34550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_34550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34559 = f__34309__auto__();
(statearr_34559[(6)] = c__34308__auto___36901);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34560){
var vec__34561 = p__34560;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34561,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34561,(1),null);
var job = vec__34561;
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
var n__5636__auto___36916 = n;
var __36917 = (0);
while(true){
if((__36917 < n__5636__auto___36916)){
var G__34567_36918 = type;
var G__34567_36919__$1 = (((G__34567_36918 instanceof cljs.core.Keyword))?G__34567_36918.fqn:null);
switch (G__34567_36919__$1) {
case "compute":
var c__34308__auto___36921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36917,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = ((function (__36917,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (1))){
var state_34582__$1 = state_34582;
var statearr_34584_36932 = state_34582__$1;
(statearr_34584_36932[(2)] = null);

(statearr_34584_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (2))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34582__$1,(4),jobs);
} else {
if((state_val_34583 === (3))){
var inst_34580 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34582__$1,inst_34580);
} else {
if((state_val_34583 === (4))){
var inst_34571 = (state_34582[(2)]);
var inst_34572 = process__$1(inst_34571);
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34572)){
var statearr_34586_36933 = state_34582__$1;
(statearr_34586_36933[(1)] = (5));

} else {
var statearr_34587_36934 = state_34582__$1;
(statearr_34587_36934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (5))){
var state_34582__$1 = state_34582;
var statearr_34588_36935 = state_34582__$1;
(statearr_34588_36935[(2)] = null);

(statearr_34588_36935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (6))){
var state_34582__$1 = state_34582;
var statearr_34589_36936 = state_34582__$1;
(statearr_34589_36936[(2)] = null);

(statearr_34589_36936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (7))){
var inst_34578 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34590_36937 = state_34582__$1;
(statearr_34590_36937[(2)] = inst_34578);

(statearr_34590_36937[(1)] = (3));


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
});})(__36917,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
;
return ((function (__36917,switch__34096__auto__,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_34591 = [null,null,null,null,null,null,null];
(statearr_34591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_34582){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34582);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34592){var ex__34100__auto__ = e34592;
var statearr_34594_36939 = state_34582;
(statearr_34594_36939[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34582[(4)]))){
var statearr_34595_36940 = state_34582;
(statearr_34595_36940[(1)] = cljs.core.first((state_34582[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36942 = state_34582;
state_34582 = G__36942;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
;})(__36917,switch__34096__auto__,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
})();
var state__34310__auto__ = (function (){var statearr_34596 = f__34309__auto__();
(statearr_34596[(6)] = c__34308__auto___36921);

return statearr_34596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
});})(__36917,c__34308__auto___36921,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
);


break;
case "async":
var c__34308__auto___36950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36917,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = ((function (__36917,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function (state_34609){
var state_val_34610 = (state_34609[(1)]);
if((state_val_34610 === (1))){
var state_34609__$1 = state_34609;
var statearr_34612_36951 = state_34609__$1;
(statearr_34612_36951[(2)] = null);

(statearr_34612_36951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (2))){
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34609__$1,(4),jobs);
} else {
if((state_val_34610 === (3))){
var inst_34607 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34609__$1,inst_34607);
} else {
if((state_val_34610 === (4))){
var inst_34599 = (state_34609[(2)]);
var inst_34600 = async(inst_34599);
var state_34609__$1 = state_34609;
if(cljs.core.truth_(inst_34600)){
var statearr_34613_36952 = state_34609__$1;
(statearr_34613_36952[(1)] = (5));

} else {
var statearr_34614_36953 = state_34609__$1;
(statearr_34614_36953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (5))){
var state_34609__$1 = state_34609;
var statearr_34615_36954 = state_34609__$1;
(statearr_34615_36954[(2)] = null);

(statearr_34615_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (6))){
var state_34609__$1 = state_34609;
var statearr_34616_36955 = state_34609__$1;
(statearr_34616_36955[(2)] = null);

(statearr_34616_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34610 === (7))){
var inst_34605 = (state_34609[(2)]);
var state_34609__$1 = state_34609;
var statearr_34617_36956 = state_34609__$1;
(statearr_34617_36956[(2)] = inst_34605);

(statearr_34617_36956[(1)] = (3));


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
});})(__36917,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
;
return ((function (__36917,switch__34096__auto__,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0 = (function (){
var statearr_34618 = [null,null,null,null,null,null,null];
(statearr_34618[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_34618[(1)] = (1));

return statearr_34618;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_34609){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34609);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34620){var ex__34100__auto__ = e34620;
var statearr_34621_36957 = state_34609;
(statearr_34621_36957[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34609[(4)]))){
var statearr_34622_36958 = state_34609;
(statearr_34622_36958[(1)] = cljs.core.first((state_34609[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36959 = state_34609;
state_34609 = G__36959;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_34609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_34609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
;})(__36917,switch__34096__auto__,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
})();
var state__34310__auto__ = (function (){var statearr_34623 = f__34309__auto__();
(statearr_34623[(6)] = c__34308__auto___36950);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
});})(__36917,c__34308__auto___36950,G__34567_36918,G__34567_36919__$1,n__5636__auto___36916,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34567_36919__$1)].join('')));

}

var G__36966 = (__36917 + (1));
__36917 = G__36966;
continue;
} else {
}
break;
}

var c__34308__auto___36967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (7))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34648_36968 = state_34645__$1;
(statearr_34648_36968[(2)] = inst_34641);

(statearr_34648_36968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34649_36969 = state_34645__$1;
(statearr_34649_36969[(2)] = null);

(statearr_34649_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (4))){
var inst_34626 = (state_34645[(7)]);
var inst_34626__$1 = (state_34645[(2)]);
var inst_34627 = (inst_34626__$1 == null);
var state_34645__$1 = (function (){var statearr_34650 = state_34645;
(statearr_34650[(7)] = inst_34626__$1);

return statearr_34650;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34651_36970 = state_34645__$1;
(statearr_34651_36970[(1)] = (5));

} else {
var statearr_34652_36971 = state_34645__$1;
(statearr_34652_36971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (6))){
var inst_34631 = (state_34645[(8)]);
var inst_34626 = (state_34645[(7)]);
var inst_34631__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34633 = [inst_34626,inst_34631__$1];
var inst_34634 = (new cljs.core.PersistentVector(null,2,(5),inst_34632,inst_34633,null));
var state_34645__$1 = (function (){var statearr_34653 = state_34645;
(statearr_34653[(8)] = inst_34631__$1);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(8),jobs,inst_34634);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (2))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34645__$1,(4),from);
} else {
if((state_val_34646 === (9))){
var inst_34638 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34654 = state_34645;
(statearr_34654[(9)] = inst_34638);

return statearr_34654;
})();
var statearr_34656_36972 = state_34645__$1;
(statearr_34656_36972[(2)] = null);

(statearr_34656_36972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (5))){
var inst_34629 = cljs.core.async.close_BANG_(jobs);
var state_34645__$1 = state_34645;
var statearr_34657_36973 = state_34645__$1;
(statearr_34657_36973[(2)] = inst_34629);

(statearr_34657_36973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (8))){
var inst_34631 = (state_34645[(8)]);
var inst_34636 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34658 = state_34645;
(statearr_34658[(10)] = inst_34636);

return statearr_34658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34645__$1,(9),results,inst_34631);
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
var statearr_34659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34659[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_34659[(1)] = (1));

return statearr_34659;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_34645){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34645);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34660){var ex__34100__auto__ = e34660;
var statearr_34661_36974 = state_34645;
(statearr_34661_36974[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34645[(4)]))){
var statearr_34663_36975 = state_34645;
(statearr_34663_36975[(1)] = cljs.core.first((state_34645[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36976 = state_34645;
state_34645 = G__36976;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34664 = f__34309__auto__();
(statearr_34664[(6)] = c__34308__auto___36967);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


var c__34308__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34703){
var state_val_34704 = (state_34703[(1)]);
if((state_val_34704 === (7))){
var inst_34699 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34706_36977 = state_34703__$1;
(statearr_34706_36977[(2)] = inst_34699);

(statearr_34706_36977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (20))){
var state_34703__$1 = state_34703;
var statearr_34707_36978 = state_34703__$1;
(statearr_34707_36978[(2)] = null);

(statearr_34707_36978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (1))){
var state_34703__$1 = state_34703;
var statearr_34708_36985 = state_34703__$1;
(statearr_34708_36985[(2)] = null);

(statearr_34708_36985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (4))){
var inst_34667 = (state_34703[(7)]);
var inst_34667__$1 = (state_34703[(2)]);
var inst_34669 = (inst_34667__$1 == null);
var state_34703__$1 = (function (){var statearr_34709 = state_34703;
(statearr_34709[(7)] = inst_34667__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34710_36986 = state_34703__$1;
(statearr_34710_36986[(1)] = (5));

} else {
var statearr_34711_36987 = state_34703__$1;
(statearr_34711_36987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (15))){
var inst_34681 = (state_34703[(8)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34703__$1,(18),to,inst_34681);
} else {
if((state_val_34704 === (21))){
var inst_34694 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34713_36988 = state_34703__$1;
(statearr_34713_36988[(2)] = inst_34694);

(statearr_34713_36988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (13))){
var inst_34696 = (state_34703[(2)]);
var state_34703__$1 = (function (){var statearr_34714 = state_34703;
(statearr_34714[(9)] = inst_34696);

return statearr_34714;
})();
var statearr_34715_36989 = state_34703__$1;
(statearr_34715_36989[(2)] = null);

(statearr_34715_36989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (6))){
var inst_34667 = (state_34703[(7)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34703__$1,(11),inst_34667);
} else {
if((state_val_34704 === (17))){
var inst_34689 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
if(cljs.core.truth_(inst_34689)){
var statearr_34716_36990 = state_34703__$1;
(statearr_34716_36990[(1)] = (19));

} else {
var statearr_34717_36991 = state_34703__$1;
(statearr_34717_36991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (3))){
var inst_34701 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34703__$1,inst_34701);
} else {
if((state_val_34704 === (12))){
var inst_34678 = (state_34703[(10)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34703__$1,(14),inst_34678);
} else {
if((state_val_34704 === (2))){
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34703__$1,(4),results);
} else {
if((state_val_34704 === (19))){
var state_34703__$1 = state_34703;
var statearr_34718_36996 = state_34703__$1;
(statearr_34718_36996[(2)] = null);

(statearr_34718_36996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (11))){
var inst_34678 = (state_34703[(2)]);
var state_34703__$1 = (function (){var statearr_34719 = state_34703;
(statearr_34719[(10)] = inst_34678);

return statearr_34719;
})();
var statearr_34720_36997 = state_34703__$1;
(statearr_34720_36997[(2)] = null);

(statearr_34720_36997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (9))){
var state_34703__$1 = state_34703;
var statearr_34722_36998 = state_34703__$1;
(statearr_34722_36998[(2)] = null);

(statearr_34722_36998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (5))){
var state_34703__$1 = state_34703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34723_36999 = state_34703__$1;
(statearr_34723_36999[(1)] = (8));

} else {
var statearr_34724_37000 = state_34703__$1;
(statearr_34724_37000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (14))){
var inst_34683 = (state_34703[(11)]);
var inst_34681 = (state_34703[(8)]);
var inst_34681__$1 = (state_34703[(2)]);
var inst_34682 = (inst_34681__$1 == null);
var inst_34683__$1 = cljs.core.not(inst_34682);
var state_34703__$1 = (function (){var statearr_34725 = state_34703;
(statearr_34725[(11)] = inst_34683__$1);

(statearr_34725[(8)] = inst_34681__$1);

return statearr_34725;
})();
if(inst_34683__$1){
var statearr_34726_37001 = state_34703__$1;
(statearr_34726_37001[(1)] = (15));

} else {
var statearr_34727_37002 = state_34703__$1;
(statearr_34727_37002[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (16))){
var inst_34683 = (state_34703[(11)]);
var state_34703__$1 = state_34703;
var statearr_34728_37007 = state_34703__$1;
(statearr_34728_37007[(2)] = inst_34683);

(statearr_34728_37007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (10))){
var inst_34675 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34729_37008 = state_34703__$1;
(statearr_34729_37008[(2)] = inst_34675);

(statearr_34729_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (18))){
var inst_34686 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34730_37009 = state_34703__$1;
(statearr_34730_37009[(2)] = inst_34686);

(statearr_34730_37009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (8))){
var inst_34672 = cljs.core.async.close_BANG_(to);
var state_34703__$1 = state_34703;
var statearr_34731_37010 = state_34703__$1;
(statearr_34731_37010[(2)] = inst_34672);

(statearr_34731_37010[(1)] = (10));


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
var statearr_34732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1 = (function (state_34703){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34703);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34733){var ex__34100__auto__ = e34733;
var statearr_34735_37011 = state_34703;
(statearr_34735_37011[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34703[(4)]))){
var statearr_34736_37012 = state_34703;
(statearr_34736_37012[(1)] = cljs.core.first((state_34703[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37013 = state_34703;
state_34703 = G__37013;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__ = function(state_34703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1.call(this,state_34703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34741 = f__34309__auto__();
(statearr_34741[(6)] = c__34308__auto__);

return statearr_34741;
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
var G__34751 = arguments.length;
switch (G__34751) {
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
var G__34758 = arguments.length;
switch (G__34758) {
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
var G__34767 = arguments.length;
switch (G__34767) {
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
var c__34308__auto___37017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34817){
var state_val_34818 = (state_34817[(1)]);
if((state_val_34818 === (7))){
var inst_34813 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34820_37018 = state_34817__$1;
(statearr_34820_37018[(2)] = inst_34813);

(statearr_34820_37018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (1))){
var state_34817__$1 = state_34817;
var statearr_34821_37019 = state_34817__$1;
(statearr_34821_37019[(2)] = null);

(statearr_34821_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (4))){
var inst_34794 = (state_34817[(7)]);
var inst_34794__$1 = (state_34817[(2)]);
var inst_34795 = (inst_34794__$1 == null);
var state_34817__$1 = (function (){var statearr_34822 = state_34817;
(statearr_34822[(7)] = inst_34794__$1);

return statearr_34822;
})();
if(cljs.core.truth_(inst_34795)){
var statearr_34823_37021 = state_34817__$1;
(statearr_34823_37021[(1)] = (5));

} else {
var statearr_34824_37022 = state_34817__$1;
(statearr_34824_37022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (13))){
var state_34817__$1 = state_34817;
var statearr_34825_37023 = state_34817__$1;
(statearr_34825_37023[(2)] = null);

(statearr_34825_37023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (6))){
var inst_34794 = (state_34817[(7)]);
var inst_34800 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34794) : p.call(null,inst_34794));
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34800)){
var statearr_34826_37024 = state_34817__$1;
(statearr_34826_37024[(1)] = (9));

} else {
var statearr_34827_37025 = state_34817__$1;
(statearr_34827_37025[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (3))){
var inst_34815 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34817__$1,inst_34815);
} else {
if((state_val_34818 === (12))){
var state_34817__$1 = state_34817;
var statearr_34829_37026 = state_34817__$1;
(statearr_34829_37026[(2)] = null);

(statearr_34829_37026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (2))){
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34817__$1,(4),ch);
} else {
if((state_val_34818 === (11))){
var inst_34794 = (state_34817[(7)]);
var inst_34804 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34817__$1,(8),inst_34804,inst_34794);
} else {
if((state_val_34818 === (9))){
var state_34817__$1 = state_34817;
var statearr_34830_37027 = state_34817__$1;
(statearr_34830_37027[(2)] = tc);

(statearr_34830_37027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (5))){
var inst_34797 = cljs.core.async.close_BANG_(tc);
var inst_34798 = cljs.core.async.close_BANG_(fc);
var state_34817__$1 = (function (){var statearr_34831 = state_34817;
(statearr_34831[(8)] = inst_34797);

return statearr_34831;
})();
var statearr_34832_37028 = state_34817__$1;
(statearr_34832_37028[(2)] = inst_34798);

(statearr_34832_37028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (14))){
var inst_34811 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
var statearr_34833_37029 = state_34817__$1;
(statearr_34833_37029[(2)] = inst_34811);

(statearr_34833_37029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (10))){
var state_34817__$1 = state_34817;
var statearr_34835_37034 = state_34817__$1;
(statearr_34835_37034[(2)] = fc);

(statearr_34835_37034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34818 === (8))){
var inst_34806 = (state_34817[(2)]);
var state_34817__$1 = state_34817;
if(cljs.core.truth_(inst_34806)){
var statearr_34836_37035 = state_34817__$1;
(statearr_34836_37035[(1)] = (12));

} else {
var statearr_34845_37036 = state_34817__$1;
(statearr_34845_37036[(1)] = (13));

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
var statearr_34854 = [null,null,null,null,null,null,null,null,null];
(statearr_34854[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_34854[(1)] = (1));

return statearr_34854;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_34817){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34817);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34859){var ex__34100__auto__ = e34859;
var statearr_34860_37037 = state_34817;
(statearr_34860_37037[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34817[(4)]))){
var statearr_34861_37038 = state_34817;
(statearr_34861_37038[(1)] = cljs.core.first((state_34817[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37039 = state_34817;
state_34817 = G__37039;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_34817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_34817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34862 = f__34309__auto__();
(statearr_34862[(6)] = c__34308__auto___37017);

return statearr_34862;
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
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34888){
var state_val_34889 = (state_34888[(1)]);
if((state_val_34889 === (7))){
var inst_34884 = (state_34888[(2)]);
var state_34888__$1 = state_34888;
var statearr_34891_37040 = state_34888__$1;
(statearr_34891_37040[(2)] = inst_34884);

(statearr_34891_37040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (1))){
var inst_34864 = init;
var inst_34865 = inst_34864;
var state_34888__$1 = (function (){var statearr_34892 = state_34888;
(statearr_34892[(7)] = inst_34865);

return statearr_34892;
})();
var statearr_34893_37041 = state_34888__$1;
(statearr_34893_37041[(2)] = null);

(statearr_34893_37041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (4))){
var inst_34870 = (state_34888[(8)]);
var inst_34870__$1 = (state_34888[(2)]);
var inst_34872 = (inst_34870__$1 == null);
var state_34888__$1 = (function (){var statearr_34894 = state_34888;
(statearr_34894[(8)] = inst_34870__$1);

return statearr_34894;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34895_37042 = state_34888__$1;
(statearr_34895_37042[(1)] = (5));

} else {
var statearr_34896_37043 = state_34888__$1;
(statearr_34896_37043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (6))){
var inst_34870 = (state_34888[(8)]);
var inst_34865 = (state_34888[(7)]);
var inst_34875 = (state_34888[(9)]);
var inst_34875__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34865,inst_34870) : f.call(null,inst_34865,inst_34870));
var inst_34876 = cljs.core.reduced_QMARK_(inst_34875__$1);
var state_34888__$1 = (function (){var statearr_34897 = state_34888;
(statearr_34897[(9)] = inst_34875__$1);

return statearr_34897;
})();
if(inst_34876){
var statearr_34898_37044 = state_34888__$1;
(statearr_34898_37044[(1)] = (8));

} else {
var statearr_34899_37045 = state_34888__$1;
(statearr_34899_37045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (3))){
var inst_34886 = (state_34888[(2)]);
var state_34888__$1 = state_34888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34888__$1,inst_34886);
} else {
if((state_val_34889 === (2))){
var state_34888__$1 = state_34888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34888__$1,(4),ch);
} else {
if((state_val_34889 === (9))){
var inst_34875 = (state_34888[(9)]);
var inst_34865 = inst_34875;
var state_34888__$1 = (function (){var statearr_34901 = state_34888;
(statearr_34901[(7)] = inst_34865);

return statearr_34901;
})();
var statearr_34902_37047 = state_34888__$1;
(statearr_34902_37047[(2)] = null);

(statearr_34902_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (5))){
var inst_34865 = (state_34888[(7)]);
var state_34888__$1 = state_34888;
var statearr_34903_37048 = state_34888__$1;
(statearr_34903_37048[(2)] = inst_34865);

(statearr_34903_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (10))){
var inst_34882 = (state_34888[(2)]);
var state_34888__$1 = state_34888;
var statearr_34910_37049 = state_34888__$1;
(statearr_34910_37049[(2)] = inst_34882);

(statearr_34910_37049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34889 === (8))){
var inst_34875 = (state_34888[(9)]);
var inst_34878 = cljs.core.deref(inst_34875);
var state_34888__$1 = state_34888;
var statearr_34929_37052 = state_34888__$1;
(statearr_34929_37052[(2)] = inst_34878);

(statearr_34929_37052[(1)] = (10));


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
var statearr_34930 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34930[(0)] = cljs$core$async$reduce_$_state_machine__34097__auto__);

(statearr_34930[(1)] = (1));

return statearr_34930;
});
var cljs$core$async$reduce_$_state_machine__34097__auto____1 = (function (state_34888){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34888);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34931){var ex__34100__auto__ = e34931;
var statearr_34932_37055 = state_34888;
(statearr_34932_37055[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34888[(4)]))){
var statearr_34933_37056 = state_34888;
(statearr_34933_37056[(1)] = cljs.core.first((state_34888[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37057 = state_34888;
state_34888 = G__37057;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34097__auto__ = function(state_34888){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34097__auto____1.call(this,state_34888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34097__auto____0;
cljs$core$async$reduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34097__auto____1;
return cljs$core$async$reduce_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34935 = f__34309__auto__();
(statearr_34935[(6)] = c__34308__auto__);

return statearr_34935;
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
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_34944){
var state_val_34945 = (state_34944[(1)]);
if((state_val_34945 === (1))){
var inst_34939 = cljs.core.async.reduce(f__$1,init,ch);
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34944__$1,(2),inst_34939);
} else {
if((state_val_34945 === (2))){
var inst_34941 = (state_34944[(2)]);
var inst_34942 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34941) : f__$1.call(null,inst_34941));
var state_34944__$1 = state_34944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34944__$1,inst_34942);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34097__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34097__auto____0 = (function (){
var statearr_34947 = [null,null,null,null,null,null,null];
(statearr_34947[(0)] = cljs$core$async$transduce_$_state_machine__34097__auto__);

(statearr_34947[(1)] = (1));

return statearr_34947;
});
var cljs$core$async$transduce_$_state_machine__34097__auto____1 = (function (state_34944){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_34944);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e34953){var ex__34100__auto__ = e34953;
var statearr_34958_37060 = state_34944;
(statearr_34958_37060[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_34944[(4)]))){
var statearr_34962_37061 = state_34944;
(statearr_34962_37061[(1)] = cljs.core.first((state_34944[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37063 = state_34944;
state_34944 = G__37063;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34097__auto__ = function(state_34944){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34097__auto____1.call(this,state_34944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34097__auto____0;
cljs$core$async$transduce_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34097__auto____1;
return cljs$core$async$transduce_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_34972 = f__34309__auto__();
(statearr_34972[(6)] = c__34308__auto__);

return statearr_34972;
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
var G__34986 = arguments.length;
switch (G__34986) {
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
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_35043){
var state_val_35044 = (state_35043[(1)]);
if((state_val_35044 === (7))){
var inst_35025 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35045_37067 = state_35043__$1;
(statearr_35045_37067[(2)] = inst_35025);

(statearr_35045_37067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (1))){
var inst_35013 = cljs.core.seq(coll);
var inst_35016 = inst_35013;
var state_35043__$1 = (function (){var statearr_35046 = state_35043;
(statearr_35046[(7)] = inst_35016);

return statearr_35046;
})();
var statearr_35049_37069 = state_35043__$1;
(statearr_35049_37069[(2)] = null);

(statearr_35049_37069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (4))){
var inst_35016 = (state_35043[(7)]);
var inst_35023 = cljs.core.first(inst_35016);
var state_35043__$1 = state_35043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35043__$1,(7),ch,inst_35023);
} else {
if((state_val_35044 === (13))){
var inst_35037 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35050_37070 = state_35043__$1;
(statearr_35050_37070[(2)] = inst_35037);

(statearr_35050_37070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (6))){
var inst_35028 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
if(cljs.core.truth_(inst_35028)){
var statearr_35051_37071 = state_35043__$1;
(statearr_35051_37071[(1)] = (8));

} else {
var statearr_35052_37072 = state_35043__$1;
(statearr_35052_37072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (3))){
var inst_35041 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35043__$1,inst_35041);
} else {
if((state_val_35044 === (12))){
var state_35043__$1 = state_35043;
var statearr_35053_37073 = state_35043__$1;
(statearr_35053_37073[(2)] = null);

(statearr_35053_37073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (2))){
var inst_35016 = (state_35043[(7)]);
var state_35043__$1 = state_35043;
if(cljs.core.truth_(inst_35016)){
var statearr_35054_37074 = state_35043__$1;
(statearr_35054_37074[(1)] = (4));

} else {
var statearr_35055_37075 = state_35043__$1;
(statearr_35055_37075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (11))){
var inst_35034 = cljs.core.async.close_BANG_(ch);
var state_35043__$1 = state_35043;
var statearr_35057_37076 = state_35043__$1;
(statearr_35057_37076[(2)] = inst_35034);

(statearr_35057_37076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (9))){
var state_35043__$1 = state_35043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35058_37077 = state_35043__$1;
(statearr_35058_37077[(1)] = (11));

} else {
var statearr_35063_37078 = state_35043__$1;
(statearr_35063_37078[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (5))){
var inst_35016 = (state_35043[(7)]);
var state_35043__$1 = state_35043;
var statearr_35068_37079 = state_35043__$1;
(statearr_35068_37079[(2)] = inst_35016);

(statearr_35068_37079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (10))){
var inst_35039 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35073_37080 = state_35043__$1;
(statearr_35073_37080[(2)] = inst_35039);

(statearr_35073_37080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (8))){
var inst_35016 = (state_35043[(7)]);
var inst_35030 = cljs.core.next(inst_35016);
var inst_35016__$1 = inst_35030;
var state_35043__$1 = (function (){var statearr_35074 = state_35043;
(statearr_35074[(7)] = inst_35016__$1);

return statearr_35074;
})();
var statearr_35075_37081 = state_35043__$1;
(statearr_35075_37081[(2)] = null);

(statearr_35075_37081[(1)] = (2));


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
var statearr_35078 = [null,null,null,null,null,null,null,null];
(statearr_35078[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_35078[(1)] = (1));

return statearr_35078;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_35043){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_35043);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e35079){var ex__34100__auto__ = e35079;
var statearr_35080_37085 = state_35043;
(statearr_35080_37085[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_35043[(4)]))){
var statearr_35081_37087 = state_35043;
(statearr_35081_37087[(1)] = cljs.core.first((state_35043[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37088 = state_35043;
state_35043 = G__37088;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_35043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_35043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_35082 = f__34309__auto__();
(statearr_35082[(6)] = c__34308__auto__);

return statearr_35082;
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
var G__35086 = arguments.length;
switch (G__35086) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37092 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37092(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37094 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37094(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37098 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37098(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37100 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37100(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35091 = (function (ch,cs,meta35092){
this.ch = ch;
this.cs = cs;
this.meta35092 = meta35092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35093,meta35092__$1){
var self__ = this;
var _35093__$1 = this;
return (new cljs.core.async.t_cljs$core$async35091(self__.ch,self__.cs,meta35092__$1));
}));

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35093){
var self__ = this;
var _35093__$1 = this;
return self__.meta35092;
}));

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35091.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35092","meta35092",13987105,null)], null);
}));

(cljs.core.async.t_cljs$core$async35091.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35091");

(cljs.core.async.t_cljs$core$async35091.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35091");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35091.
 */
cljs.core.async.__GT_t_cljs$core$async35091 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35091(ch__$1,cs__$1,meta35092){
return (new cljs.core.async.t_cljs$core$async35091(ch__$1,cs__$1,meta35092));
});

}

return (new cljs.core.async.t_cljs$core$async35091(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34308__auto___37105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_35304){
var state_val_35308 = (state_35304[(1)]);
if((state_val_35308 === (7))){
var inst_35299 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35325_37109 = state_35304__$1;
(statearr_35325_37109[(2)] = inst_35299);

(statearr_35325_37109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (20))){
var inst_35168 = (state_35304[(7)]);
var inst_35207 = cljs.core.first(inst_35168);
var inst_35209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35207,(0),null);
var inst_35210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35207,(1),null);
var state_35304__$1 = (function (){var statearr_35328 = state_35304;
(statearr_35328[(8)] = inst_35209);

return statearr_35328;
})();
if(cljs.core.truth_(inst_35210)){
var statearr_35331_37110 = state_35304__$1;
(statearr_35331_37110[(1)] = (22));

} else {
var statearr_35332_37111 = state_35304__$1;
(statearr_35332_37111[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (27))){
var inst_35238 = (state_35304[(9)]);
var inst_35246 = (state_35304[(10)]);
var inst_35105 = (state_35304[(11)]);
var inst_35240 = (state_35304[(12)]);
var inst_35246__$1 = cljs.core._nth(inst_35238,inst_35240);
var inst_35247 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35246__$1,inst_35105,done);
var state_35304__$1 = (function (){var statearr_35378 = state_35304;
(statearr_35378[(10)] = inst_35246__$1);

return statearr_35378;
})();
if(cljs.core.truth_(inst_35247)){
var statearr_35382_37112 = state_35304__$1;
(statearr_35382_37112[(1)] = (30));

} else {
var statearr_35384_37113 = state_35304__$1;
(statearr_35384_37113[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (1))){
var state_35304__$1 = state_35304;
var statearr_35389_37114 = state_35304__$1;
(statearr_35389_37114[(2)] = null);

(statearr_35389_37114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (24))){
var inst_35168 = (state_35304[(7)]);
var inst_35215 = (state_35304[(2)]);
var inst_35216 = cljs.core.next(inst_35168);
var inst_35114 = inst_35216;
var inst_35115 = null;
var inst_35116 = (0);
var inst_35117 = (0);
var state_35304__$1 = (function (){var statearr_35397 = state_35304;
(statearr_35397[(13)] = inst_35215);

(statearr_35397[(14)] = inst_35116);

(statearr_35397[(15)] = inst_35115);

(statearr_35397[(16)] = inst_35117);

(statearr_35397[(17)] = inst_35114);

return statearr_35397;
})();
var statearr_35399_37115 = state_35304__$1;
(statearr_35399_37115[(2)] = null);

(statearr_35399_37115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (39))){
var state_35304__$1 = state_35304;
var statearr_35414_37116 = state_35304__$1;
(statearr_35414_37116[(2)] = null);

(statearr_35414_37116[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (4))){
var inst_35105 = (state_35304[(11)]);
var inst_35105__$1 = (state_35304[(2)]);
var inst_35106 = (inst_35105__$1 == null);
var state_35304__$1 = (function (){var statearr_35416 = state_35304;
(statearr_35416[(11)] = inst_35105__$1);

return statearr_35416;
})();
if(cljs.core.truth_(inst_35106)){
var statearr_35419_37117 = state_35304__$1;
(statearr_35419_37117[(1)] = (5));

} else {
var statearr_35420_37118 = state_35304__$1;
(statearr_35420_37118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (15))){
var inst_35116 = (state_35304[(14)]);
var inst_35115 = (state_35304[(15)]);
var inst_35117 = (state_35304[(16)]);
var inst_35114 = (state_35304[(17)]);
var inst_35157 = (state_35304[(2)]);
var inst_35161 = (inst_35117 + (1));
var tmp35404 = inst_35116;
var tmp35405 = inst_35115;
var tmp35406 = inst_35114;
var inst_35114__$1 = tmp35406;
var inst_35115__$1 = tmp35405;
var inst_35116__$1 = tmp35404;
var inst_35117__$1 = inst_35161;
var state_35304__$1 = (function (){var statearr_35421 = state_35304;
(statearr_35421[(18)] = inst_35157);

(statearr_35421[(14)] = inst_35116__$1);

(statearr_35421[(15)] = inst_35115__$1);

(statearr_35421[(16)] = inst_35117__$1);

(statearr_35421[(17)] = inst_35114__$1);

return statearr_35421;
})();
var statearr_35422_37119 = state_35304__$1;
(statearr_35422_37119[(2)] = null);

(statearr_35422_37119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (21))){
var inst_35219 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35426_37120 = state_35304__$1;
(statearr_35426_37120[(2)] = inst_35219);

(statearr_35426_37120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (31))){
var inst_35246 = (state_35304[(10)]);
var inst_35250 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35246);
var state_35304__$1 = state_35304;
var statearr_35427_37125 = state_35304__$1;
(statearr_35427_37125[(2)] = inst_35250);

(statearr_35427_37125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (32))){
var inst_35239 = (state_35304[(19)]);
var inst_35238 = (state_35304[(9)]);
var inst_35237 = (state_35304[(20)]);
var inst_35240 = (state_35304[(12)]);
var inst_35252 = (state_35304[(2)]);
var inst_35253 = (inst_35240 + (1));
var tmp35423 = inst_35239;
var tmp35424 = inst_35238;
var tmp35425 = inst_35237;
var inst_35237__$1 = tmp35425;
var inst_35238__$1 = tmp35424;
var inst_35239__$1 = tmp35423;
var inst_35240__$1 = inst_35253;
var state_35304__$1 = (function (){var statearr_35428 = state_35304;
(statearr_35428[(19)] = inst_35239__$1);

(statearr_35428[(21)] = inst_35252);

(statearr_35428[(9)] = inst_35238__$1);

(statearr_35428[(20)] = inst_35237__$1);

(statearr_35428[(12)] = inst_35240__$1);

return statearr_35428;
})();
var statearr_35429_37126 = state_35304__$1;
(statearr_35429_37126[(2)] = null);

(statearr_35429_37126[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (40))){
var inst_35269 = (state_35304[(22)]);
var inst_35273 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35269);
var state_35304__$1 = state_35304;
var statearr_35430_37127 = state_35304__$1;
(statearr_35430_37127[(2)] = inst_35273);

(statearr_35430_37127[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (33))){
var inst_35260 = (state_35304[(23)]);
var inst_35262 = cljs.core.chunked_seq_QMARK_(inst_35260);
var state_35304__$1 = state_35304;
if(inst_35262){
var statearr_35431_37132 = state_35304__$1;
(statearr_35431_37132[(1)] = (36));

} else {
var statearr_35432_37133 = state_35304__$1;
(statearr_35432_37133[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (13))){
var inst_35127 = (state_35304[(24)]);
var inst_35154 = cljs.core.async.close_BANG_(inst_35127);
var state_35304__$1 = state_35304;
var statearr_35433_37147 = state_35304__$1;
(statearr_35433_37147[(2)] = inst_35154);

(statearr_35433_37147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (22))){
var inst_35209 = (state_35304[(8)]);
var inst_35212 = cljs.core.async.close_BANG_(inst_35209);
var state_35304__$1 = state_35304;
var statearr_35435_37148 = state_35304__$1;
(statearr_35435_37148[(2)] = inst_35212);

(statearr_35435_37148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (36))){
var inst_35260 = (state_35304[(23)]);
var inst_35264 = cljs.core.chunk_first(inst_35260);
var inst_35265 = cljs.core.chunk_rest(inst_35260);
var inst_35266 = cljs.core.count(inst_35264);
var inst_35237 = inst_35265;
var inst_35238 = inst_35264;
var inst_35239 = inst_35266;
var inst_35240 = (0);
var state_35304__$1 = (function (){var statearr_35436 = state_35304;
(statearr_35436[(19)] = inst_35239);

(statearr_35436[(9)] = inst_35238);

(statearr_35436[(20)] = inst_35237);

(statearr_35436[(12)] = inst_35240);

return statearr_35436;
})();
var statearr_35437_37153 = state_35304__$1;
(statearr_35437_37153[(2)] = null);

(statearr_35437_37153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (41))){
var inst_35260 = (state_35304[(23)]);
var inst_35276 = (state_35304[(2)]);
var inst_35278 = cljs.core.next(inst_35260);
var inst_35237 = inst_35278;
var inst_35238 = null;
var inst_35239 = (0);
var inst_35240 = (0);
var state_35304__$1 = (function (){var statearr_35438 = state_35304;
(statearr_35438[(19)] = inst_35239);

(statearr_35438[(9)] = inst_35238);

(statearr_35438[(20)] = inst_35237);

(statearr_35438[(25)] = inst_35276);

(statearr_35438[(12)] = inst_35240);

return statearr_35438;
})();
var statearr_35439_37161 = state_35304__$1;
(statearr_35439_37161[(2)] = null);

(statearr_35439_37161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (43))){
var state_35304__$1 = state_35304;
var statearr_35441_37162 = state_35304__$1;
(statearr_35441_37162[(2)] = null);

(statearr_35441_37162[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (29))){
var inst_35286 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35442_37163 = state_35304__$1;
(statearr_35442_37163[(2)] = inst_35286);

(statearr_35442_37163[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (44))){
var inst_35295 = (state_35304[(2)]);
var state_35304__$1 = (function (){var statearr_35443 = state_35304;
(statearr_35443[(26)] = inst_35295);

return statearr_35443;
})();
var statearr_35444_37164 = state_35304__$1;
(statearr_35444_37164[(2)] = null);

(statearr_35444_37164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (6))){
var inst_35229 = (state_35304[(27)]);
var inst_35228 = cljs.core.deref(cs);
var inst_35229__$1 = cljs.core.keys(inst_35228);
var inst_35230 = cljs.core.count(inst_35229__$1);
var inst_35231 = cljs.core.reset_BANG_(dctr,inst_35230);
var inst_35236 = cljs.core.seq(inst_35229__$1);
var inst_35237 = inst_35236;
var inst_35238 = null;
var inst_35239 = (0);
var inst_35240 = (0);
var state_35304__$1 = (function (){var statearr_35445 = state_35304;
(statearr_35445[(19)] = inst_35239);

(statearr_35445[(9)] = inst_35238);

(statearr_35445[(28)] = inst_35231);

(statearr_35445[(20)] = inst_35237);

(statearr_35445[(27)] = inst_35229__$1);

(statearr_35445[(12)] = inst_35240);

return statearr_35445;
})();
var statearr_35446_37176 = state_35304__$1;
(statearr_35446_37176[(2)] = null);

(statearr_35446_37176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (28))){
var inst_35237 = (state_35304[(20)]);
var inst_35260 = (state_35304[(23)]);
var inst_35260__$1 = cljs.core.seq(inst_35237);
var state_35304__$1 = (function (){var statearr_35447 = state_35304;
(statearr_35447[(23)] = inst_35260__$1);

return statearr_35447;
})();
if(inst_35260__$1){
var statearr_35448_37177 = state_35304__$1;
(statearr_35448_37177[(1)] = (33));

} else {
var statearr_35449_37178 = state_35304__$1;
(statearr_35449_37178[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (25))){
var inst_35239 = (state_35304[(19)]);
var inst_35240 = (state_35304[(12)]);
var inst_35243 = (inst_35240 < inst_35239);
var inst_35244 = inst_35243;
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35244)){
var statearr_35450_37183 = state_35304__$1;
(statearr_35450_37183[(1)] = (27));

} else {
var statearr_35451_37184 = state_35304__$1;
(statearr_35451_37184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (34))){
var state_35304__$1 = state_35304;
var statearr_35452_37188 = state_35304__$1;
(statearr_35452_37188[(2)] = null);

(statearr_35452_37188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (17))){
var state_35304__$1 = state_35304;
var statearr_35453_37189 = state_35304__$1;
(statearr_35453_37189[(2)] = null);

(statearr_35453_37189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (3))){
var inst_35301 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35304__$1,inst_35301);
} else {
if((state_val_35308 === (12))){
var inst_35224 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35455_37190 = state_35304__$1;
(statearr_35455_37190[(2)] = inst_35224);

(statearr_35455_37190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (2))){
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35304__$1,(4),ch);
} else {
if((state_val_35308 === (23))){
var state_35304__$1 = state_35304;
var statearr_35456_37194 = state_35304__$1;
(statearr_35456_37194[(2)] = null);

(statearr_35456_37194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (35))){
var inst_35284 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35457_37195 = state_35304__$1;
(statearr_35457_37195[(2)] = inst_35284);

(statearr_35457_37195[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (19))){
var inst_35168 = (state_35304[(7)]);
var inst_35193 = cljs.core.chunk_first(inst_35168);
var inst_35196 = cljs.core.chunk_rest(inst_35168);
var inst_35199 = cljs.core.count(inst_35193);
var inst_35114 = inst_35196;
var inst_35115 = inst_35193;
var inst_35116 = inst_35199;
var inst_35117 = (0);
var state_35304__$1 = (function (){var statearr_35458 = state_35304;
(statearr_35458[(14)] = inst_35116);

(statearr_35458[(15)] = inst_35115);

(statearr_35458[(16)] = inst_35117);

(statearr_35458[(17)] = inst_35114);

return statearr_35458;
})();
var statearr_35459_37207 = state_35304__$1;
(statearr_35459_37207[(2)] = null);

(statearr_35459_37207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (11))){
var inst_35168 = (state_35304[(7)]);
var inst_35114 = (state_35304[(17)]);
var inst_35168__$1 = cljs.core.seq(inst_35114);
var state_35304__$1 = (function (){var statearr_35460 = state_35304;
(statearr_35460[(7)] = inst_35168__$1);

return statearr_35460;
})();
if(inst_35168__$1){
var statearr_35461_37209 = state_35304__$1;
(statearr_35461_37209[(1)] = (16));

} else {
var statearr_35462_37211 = state_35304__$1;
(statearr_35462_37211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (9))){
var inst_35226 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35463_37213 = state_35304__$1;
(statearr_35463_37213[(2)] = inst_35226);

(statearr_35463_37213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (5))){
var inst_35112 = cljs.core.deref(cs);
var inst_35113 = cljs.core.seq(inst_35112);
var inst_35114 = inst_35113;
var inst_35115 = null;
var inst_35116 = (0);
var inst_35117 = (0);
var state_35304__$1 = (function (){var statearr_35464 = state_35304;
(statearr_35464[(14)] = inst_35116);

(statearr_35464[(15)] = inst_35115);

(statearr_35464[(16)] = inst_35117);

(statearr_35464[(17)] = inst_35114);

return statearr_35464;
})();
var statearr_35465_37226 = state_35304__$1;
(statearr_35465_37226[(2)] = null);

(statearr_35465_37226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (14))){
var state_35304__$1 = state_35304;
var statearr_35466_37230 = state_35304__$1;
(statearr_35466_37230[(2)] = null);

(statearr_35466_37230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (45))){
var inst_35292 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35467_37231 = state_35304__$1;
(statearr_35467_37231[(2)] = inst_35292);

(statearr_35467_37231[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (26))){
var inst_35229 = (state_35304[(27)]);
var inst_35288 = (state_35304[(2)]);
var inst_35289 = cljs.core.seq(inst_35229);
var state_35304__$1 = (function (){var statearr_35468 = state_35304;
(statearr_35468[(29)] = inst_35288);

return statearr_35468;
})();
if(inst_35289){
var statearr_35469_37232 = state_35304__$1;
(statearr_35469_37232[(1)] = (42));

} else {
var statearr_35470_37233 = state_35304__$1;
(statearr_35470_37233[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (16))){
var inst_35168 = (state_35304[(7)]);
var inst_35174 = cljs.core.chunked_seq_QMARK_(inst_35168);
var state_35304__$1 = state_35304;
if(inst_35174){
var statearr_35472_37234 = state_35304__$1;
(statearr_35472_37234[(1)] = (19));

} else {
var statearr_35473_37235 = state_35304__$1;
(statearr_35473_37235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (38))){
var inst_35281 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35474_37236 = state_35304__$1;
(statearr_35474_37236[(2)] = inst_35281);

(statearr_35474_37236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (30))){
var state_35304__$1 = state_35304;
var statearr_35475_37237 = state_35304__$1;
(statearr_35475_37237[(2)] = null);

(statearr_35475_37237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (10))){
var inst_35115 = (state_35304[(15)]);
var inst_35117 = (state_35304[(16)]);
var inst_35126 = cljs.core._nth(inst_35115,inst_35117);
var inst_35127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35126,(0),null);
var inst_35148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35126,(1),null);
var state_35304__$1 = (function (){var statearr_35476 = state_35304;
(statearr_35476[(24)] = inst_35127);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35148)){
var statearr_35477_37242 = state_35304__$1;
(statearr_35477_37242[(1)] = (13));

} else {
var statearr_35478_37243 = state_35304__$1;
(statearr_35478_37243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (18))){
var inst_35222 = (state_35304[(2)]);
var state_35304__$1 = state_35304;
var statearr_35482_37248 = state_35304__$1;
(statearr_35482_37248[(2)] = inst_35222);

(statearr_35482_37248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (42))){
var state_35304__$1 = state_35304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35304__$1,(45),dchan);
} else {
if((state_val_35308 === (37))){
var inst_35260 = (state_35304[(23)]);
var inst_35269 = (state_35304[(22)]);
var inst_35105 = (state_35304[(11)]);
var inst_35269__$1 = cljs.core.first(inst_35260);
var inst_35270 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35269__$1,inst_35105,done);
var state_35304__$1 = (function (){var statearr_35483 = state_35304;
(statearr_35483[(22)] = inst_35269__$1);

return statearr_35483;
})();
if(cljs.core.truth_(inst_35270)){
var statearr_35484_37252 = state_35304__$1;
(statearr_35484_37252[(1)] = (39));

} else {
var statearr_35485_37253 = state_35304__$1;
(statearr_35485_37253[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35308 === (8))){
var inst_35116 = (state_35304[(14)]);
var inst_35117 = (state_35304[(16)]);
var inst_35119 = (inst_35117 < inst_35116);
var inst_35120 = inst_35119;
var state_35304__$1 = state_35304;
if(cljs.core.truth_(inst_35120)){
var statearr_35486_37260 = state_35304__$1;
(statearr_35486_37260[(1)] = (10));

} else {
var statearr_35487_37261 = state_35304__$1;
(statearr_35487_37261[(1)] = (11));

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
var statearr_35488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35488[(0)] = cljs$core$async$mult_$_state_machine__34097__auto__);

(statearr_35488[(1)] = (1));

return statearr_35488;
});
var cljs$core$async$mult_$_state_machine__34097__auto____1 = (function (state_35304){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_35304);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e35489){var ex__34100__auto__ = e35489;
var statearr_35490_37271 = state_35304;
(statearr_35490_37271[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_35304[(4)]))){
var statearr_35491_37272 = state_35304;
(statearr_35491_37272[(1)] = cljs.core.first((state_35304[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37273 = state_35304;
state_35304 = G__37273;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34097__auto__ = function(state_35304){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34097__auto____1.call(this,state_35304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34097__auto____0;
cljs$core$async$mult_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34097__auto____1;
return cljs$core$async$mult_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_35492 = f__34309__auto__();
(statearr_35492[(6)] = c__34308__auto___37105);

return statearr_35492;
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
var G__35494 = arguments.length;
switch (G__35494) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37275 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37275(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37283 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37283(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37284 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37284(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37285 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37285(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37286 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37286(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37297 = arguments.length;
var i__5770__auto___37299 = (0);
while(true){
if((i__5770__auto___37299 < len__5769__auto___37297)){
args__5775__auto__.push((arguments[i__5770__auto___37299]));

var G__37300 = (i__5770__auto___37299 + (1));
i__5770__auto___37299 = G__37300;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35503){
var map__35504 = p__35503;
var map__35504__$1 = cljs.core.__destructure_map(map__35504);
var opts = map__35504__$1;
var statearr_35505_37308 = state;
(statearr_35505_37308[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35506_37309 = state;
(statearr_35506_37309[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_35507_37311 = state;
(statearr_35507_37311[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35499){
var G__35500 = cljs.core.first(seq35499);
var seq35499__$1 = cljs.core.next(seq35499);
var G__35501 = cljs.core.first(seq35499__$1);
var seq35499__$2 = cljs.core.next(seq35499__$1);
var G__35502 = cljs.core.first(seq35499__$2);
var seq35499__$3 = cljs.core.next(seq35499__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35500,G__35501,G__35502,seq35499__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35510 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35511){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35511 = meta35511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35512,meta35511__$1){
var self__ = this;
var _35512__$1 = this;
return (new cljs.core.async.t_cljs$core$async35510(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35511__$1));
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35512){
var self__ = this;
var _35512__$1 = this;
return self__.meta35511;
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35510.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35511","meta35511",-1320943516,null)], null);
}));

(cljs.core.async.t_cljs$core$async35510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35510");

(cljs.core.async.t_cljs$core$async35510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35510.
 */
cljs.core.async.__GT_t_cljs$core$async35510 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35510(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35511){
return (new cljs.core.async.t_cljs$core$async35510(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35511));
});

}

return (new cljs.core.async.t_cljs$core$async35510(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34308__auto___37339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_35626){
var state_val_35627 = (state_35626[(1)]);
if((state_val_35627 === (7))){
var inst_35570 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35570)){
var statearr_35632_37344 = state_35626__$1;
(statearr_35632_37344[(1)] = (8));

} else {
var statearr_35633_37345 = state_35626__$1;
(statearr_35633_37345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (20))){
var inst_35563 = (state_35626[(7)]);
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35626__$1,(23),out,inst_35563);
} else {
if((state_val_35627 === (1))){
var inst_35545 = calc_state();
var inst_35546 = cljs.core.__destructure_map(inst_35545);
var inst_35548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35546,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35551 = inst_35545;
var state_35626__$1 = (function (){var statearr_35635 = state_35626;
(statearr_35635[(8)] = inst_35548);

(statearr_35635[(9)] = inst_35549);

(statearr_35635[(10)] = inst_35550);

(statearr_35635[(11)] = inst_35551);

return statearr_35635;
})();
var statearr_35636_37347 = state_35626__$1;
(statearr_35636_37347[(2)] = null);

(statearr_35636_37347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (24))){
var inst_35554 = (state_35626[(12)]);
var inst_35551 = inst_35554;
var state_35626__$1 = (function (){var statearr_35637 = state_35626;
(statearr_35637[(11)] = inst_35551);

return statearr_35637;
})();
var statearr_35638_37349 = state_35626__$1;
(statearr_35638_37349[(2)] = null);

(statearr_35638_37349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (4))){
var inst_35563 = (state_35626[(7)]);
var inst_35565 = (state_35626[(13)]);
var inst_35562 = (state_35626[(2)]);
var inst_35563__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35562,(0),null);
var inst_35564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35562,(1),null);
var inst_35565__$1 = (inst_35563__$1 == null);
var state_35626__$1 = (function (){var statearr_35646 = state_35626;
(statearr_35646[(14)] = inst_35564);

(statearr_35646[(7)] = inst_35563__$1);

(statearr_35646[(13)] = inst_35565__$1);

return statearr_35646;
})();
if(cljs.core.truth_(inst_35565__$1)){
var statearr_35648_37351 = state_35626__$1;
(statearr_35648_37351[(1)] = (5));

} else {
var statearr_35649_37352 = state_35626__$1;
(statearr_35649_37352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (15))){
var inst_35555 = (state_35626[(15)]);
var inst_35589 = (state_35626[(16)]);
var inst_35589__$1 = cljs.core.empty_QMARK_(inst_35555);
var state_35626__$1 = (function (){var statearr_35650 = state_35626;
(statearr_35650[(16)] = inst_35589__$1);

return statearr_35650;
})();
if(inst_35589__$1){
var statearr_35651_37353 = state_35626__$1;
(statearr_35651_37353[(1)] = (17));

} else {
var statearr_35655_37354 = state_35626__$1;
(statearr_35655_37354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (21))){
var inst_35554 = (state_35626[(12)]);
var inst_35551 = inst_35554;
var state_35626__$1 = (function (){var statearr_35657 = state_35626;
(statearr_35657[(11)] = inst_35551);

return statearr_35657;
})();
var statearr_35658_37355 = state_35626__$1;
(statearr_35658_37355[(2)] = null);

(statearr_35658_37355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (13))){
var inst_35577 = (state_35626[(2)]);
var inst_35579 = calc_state();
var inst_35551 = inst_35579;
var state_35626__$1 = (function (){var statearr_35659 = state_35626;
(statearr_35659[(17)] = inst_35577);

(statearr_35659[(11)] = inst_35551);

return statearr_35659;
})();
var statearr_35663_37357 = state_35626__$1;
(statearr_35663_37357[(2)] = null);

(statearr_35663_37357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (22))){
var inst_35612 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35665_37359 = state_35626__$1;
(statearr_35665_37359[(2)] = inst_35612);

(statearr_35665_37359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (6))){
var inst_35564 = (state_35626[(14)]);
var inst_35568 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35564,change);
var state_35626__$1 = state_35626;
var statearr_35666_37360 = state_35626__$1;
(statearr_35666_37360[(2)] = inst_35568);

(statearr_35666_37360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (25))){
var state_35626__$1 = state_35626;
var statearr_35667_37361 = state_35626__$1;
(statearr_35667_37361[(2)] = null);

(statearr_35667_37361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (17))){
var inst_35564 = (state_35626[(14)]);
var inst_35556 = (state_35626[(18)]);
var inst_35593 = (inst_35556.cljs$core$IFn$_invoke$arity$1 ? inst_35556.cljs$core$IFn$_invoke$arity$1(inst_35564) : inst_35556.call(null,inst_35564));
var inst_35594 = cljs.core.not(inst_35593);
var state_35626__$1 = state_35626;
var statearr_35672_37362 = state_35626__$1;
(statearr_35672_37362[(2)] = inst_35594);

(statearr_35672_37362[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (3))){
var inst_35616 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35626__$1,inst_35616);
} else {
if((state_val_35627 === (12))){
var state_35626__$1 = state_35626;
var statearr_35673_37364 = state_35626__$1;
(statearr_35673_37364[(2)] = null);

(statearr_35673_37364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (2))){
var inst_35554 = (state_35626[(12)]);
var inst_35551 = (state_35626[(11)]);
var inst_35554__$1 = cljs.core.__destructure_map(inst_35551);
var inst_35555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35554__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35554__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35554__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35626__$1 = (function (){var statearr_35674 = state_35626;
(statearr_35674[(15)] = inst_35555);

(statearr_35674[(12)] = inst_35554__$1);

(statearr_35674[(18)] = inst_35556);

return statearr_35674;
})();
return cljs.core.async.ioc_alts_BANG_(state_35626__$1,(4),inst_35557);
} else {
if((state_val_35627 === (23))){
var inst_35603 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35603)){
var statearr_35675_37366 = state_35626__$1;
(statearr_35675_37366[(1)] = (24));

} else {
var statearr_35676_37367 = state_35626__$1;
(statearr_35676_37367[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (19))){
var inst_35597 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35677_37369 = state_35626__$1;
(statearr_35677_37369[(2)] = inst_35597);

(statearr_35677_37369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (11))){
var inst_35564 = (state_35626[(14)]);
var inst_35574 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35564);
var state_35626__$1 = state_35626;
var statearr_35678_37370 = state_35626__$1;
(statearr_35678_37370[(2)] = inst_35574);

(statearr_35678_37370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (9))){
var inst_35564 = (state_35626[(14)]);
var inst_35555 = (state_35626[(15)]);
var inst_35585 = (state_35626[(19)]);
var inst_35585__$1 = (inst_35555.cljs$core$IFn$_invoke$arity$1 ? inst_35555.cljs$core$IFn$_invoke$arity$1(inst_35564) : inst_35555.call(null,inst_35564));
var state_35626__$1 = (function (){var statearr_35680 = state_35626;
(statearr_35680[(19)] = inst_35585__$1);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35585__$1)){
var statearr_35681_37374 = state_35626__$1;
(statearr_35681_37374[(1)] = (14));

} else {
var statearr_35682_37375 = state_35626__$1;
(statearr_35682_37375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (5))){
var inst_35565 = (state_35626[(13)]);
var state_35626__$1 = state_35626;
var statearr_35683_37376 = state_35626__$1;
(statearr_35683_37376[(2)] = inst_35565);

(statearr_35683_37376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (14))){
var inst_35585 = (state_35626[(19)]);
var state_35626__$1 = state_35626;
var statearr_35684_37378 = state_35626__$1;
(statearr_35684_37378[(2)] = inst_35585);

(statearr_35684_37378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (26))){
var inst_35608 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35685_37379 = state_35626__$1;
(statearr_35685_37379[(2)] = inst_35608);

(statearr_35685_37379[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (16))){
var inst_35599 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35599)){
var statearr_35694_37380 = state_35626__$1;
(statearr_35694_37380[(1)] = (20));

} else {
var statearr_35703_37381 = state_35626__$1;
(statearr_35703_37381[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (10))){
var inst_35614 = (state_35626[(2)]);
var state_35626__$1 = state_35626;
var statearr_35708_37382 = state_35626__$1;
(statearr_35708_37382[(2)] = inst_35614);

(statearr_35708_37382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (18))){
var inst_35589 = (state_35626[(16)]);
var state_35626__$1 = state_35626;
var statearr_35709_37383 = state_35626__$1;
(statearr_35709_37383[(2)] = inst_35589);

(statearr_35709_37383[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35627 === (8))){
var inst_35563 = (state_35626[(7)]);
var inst_35572 = (inst_35563 == null);
var state_35626__$1 = state_35626;
if(cljs.core.truth_(inst_35572)){
var statearr_35710_37385 = state_35626__$1;
(statearr_35710_37385[(1)] = (11));

} else {
var statearr_35711_37386 = state_35626__$1;
(statearr_35711_37386[(1)] = (12));

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
var statearr_35712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35712[(0)] = cljs$core$async$mix_$_state_machine__34097__auto__);

(statearr_35712[(1)] = (1));

return statearr_35712;
});
var cljs$core$async$mix_$_state_machine__34097__auto____1 = (function (state_35626){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_35626);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e35713){var ex__34100__auto__ = e35713;
var statearr_35714_37394 = state_35626;
(statearr_35714_37394[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_35626[(4)]))){
var statearr_35715_37395 = state_35626;
(statearr_35715_37395[(1)] = cljs.core.first((state_35626[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37397 = state_35626;
state_35626 = G__37397;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34097__auto__ = function(state_35626){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34097__auto____1.call(this,state_35626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34097__auto____0;
cljs$core$async$mix_$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34097__auto____1;
return cljs$core$async$mix_$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_35716 = f__34309__auto__();
(statearr_35716[(6)] = c__34308__auto___37339);

return statearr_35716;
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

var cljs$core$async$Pub$sub_STAR_$dyn_37410 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_37410(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37417 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_37417(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37436 = (function() {
var G__37437 = null;
var G__37437__1 = (function (p){
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
var G__37437__2 = (function (p,v){
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
G__37437 = function(p,v){
switch(arguments.length){
case 1:
return G__37437__1.call(this,p);
case 2:
return G__37437__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37437.cljs$core$IFn$_invoke$arity$1 = G__37437__1;
G__37437.cljs$core$IFn$_invoke$arity$2 = G__37437__2;
return G__37437;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35725 = arguments.length;
switch (G__35725) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37436(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37436(p,v);
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
var G__35728 = arguments.length;
switch (G__35728) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35726_SHARP_){
if(cljs.core.truth_((p1__35726_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35726_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35726_SHARP_.call(null,topic)))){
return p1__35726_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35726_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35729 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35730){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35730 = meta35730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35731,meta35730__$1){
var self__ = this;
var _35731__$1 = this;
return (new cljs.core.async.t_cljs$core$async35729(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35730__$1));
}));

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35731){
var self__ = this;
var _35731__$1 = this;
return self__.meta35730;
}));

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35730","meta35730",-1083709739,null)], null);
}));

(cljs.core.async.t_cljs$core$async35729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35729");

(cljs.core.async.t_cljs$core$async35729.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35729.
 */
cljs.core.async.__GT_t_cljs$core$async35729 = (function cljs$core$async$__GT_t_cljs$core$async35729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35730){
return (new cljs.core.async.t_cljs$core$async35729(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35730));
});

}

return (new cljs.core.async.t_cljs$core$async35729(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34308__auto___37461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_35809){
var state_val_35810 = (state_35809[(1)]);
if((state_val_35810 === (7))){
var inst_35805 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35811_37462 = state_35809__$1;
(statearr_35811_37462[(2)] = inst_35805);

(statearr_35811_37462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (20))){
var state_35809__$1 = state_35809;
var statearr_35812_37463 = state_35809__$1;
(statearr_35812_37463[(2)] = null);

(statearr_35812_37463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (1))){
var state_35809__$1 = state_35809;
var statearr_35813_37464 = state_35809__$1;
(statearr_35813_37464[(2)] = null);

(statearr_35813_37464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (24))){
var inst_35788 = (state_35809[(7)]);
var inst_35797 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35788);
var state_35809__$1 = state_35809;
var statearr_35814_37465 = state_35809__$1;
(statearr_35814_37465[(2)] = inst_35797);

(statearr_35814_37465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (4))){
var inst_35735 = (state_35809[(8)]);
var inst_35735__$1 = (state_35809[(2)]);
var inst_35736 = (inst_35735__$1 == null);
var state_35809__$1 = (function (){var statearr_35815 = state_35809;
(statearr_35815[(8)] = inst_35735__$1);

return statearr_35815;
})();
if(cljs.core.truth_(inst_35736)){
var statearr_35816_37466 = state_35809__$1;
(statearr_35816_37466[(1)] = (5));

} else {
var statearr_35817_37467 = state_35809__$1;
(statearr_35817_37467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (15))){
var inst_35782 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35819_37468 = state_35809__$1;
(statearr_35819_37468[(2)] = inst_35782);

(statearr_35819_37468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (21))){
var inst_35802 = (state_35809[(2)]);
var state_35809__$1 = (function (){var statearr_35821 = state_35809;
(statearr_35821[(9)] = inst_35802);

return statearr_35821;
})();
var statearr_35822_37473 = state_35809__$1;
(statearr_35822_37473[(2)] = null);

(statearr_35822_37473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (13))){
var inst_35760 = (state_35809[(10)]);
var inst_35762 = cljs.core.chunked_seq_QMARK_(inst_35760);
var state_35809__$1 = state_35809;
if(inst_35762){
var statearr_35823_37480 = state_35809__$1;
(statearr_35823_37480[(1)] = (16));

} else {
var statearr_35824_37482 = state_35809__$1;
(statearr_35824_37482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (22))){
var inst_35794 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
if(cljs.core.truth_(inst_35794)){
var statearr_35825_37488 = state_35809__$1;
(statearr_35825_37488[(1)] = (23));

} else {
var statearr_35826_37490 = state_35809__$1;
(statearr_35826_37490[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (6))){
var inst_35735 = (state_35809[(8)]);
var inst_35790 = (state_35809[(11)]);
var inst_35788 = (state_35809[(7)]);
var inst_35788__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35735) : topic_fn.call(null,inst_35735));
var inst_35789 = cljs.core.deref(mults);
var inst_35790__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35789,inst_35788__$1);
var state_35809__$1 = (function (){var statearr_35831 = state_35809;
(statearr_35831[(11)] = inst_35790__$1);

(statearr_35831[(7)] = inst_35788__$1);

return statearr_35831;
})();
if(cljs.core.truth_(inst_35790__$1)){
var statearr_35832_37497 = state_35809__$1;
(statearr_35832_37497[(1)] = (19));

} else {
var statearr_35833_37498 = state_35809__$1;
(statearr_35833_37498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (25))){
var inst_35799 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35834_37499 = state_35809__$1;
(statearr_35834_37499[(2)] = inst_35799);

(statearr_35834_37499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (17))){
var inst_35760 = (state_35809[(10)]);
var inst_35773 = cljs.core.first(inst_35760);
var inst_35774 = cljs.core.async.muxch_STAR_(inst_35773);
var inst_35775 = cljs.core.async.close_BANG_(inst_35774);
var inst_35776 = cljs.core.next(inst_35760);
var inst_35746 = inst_35776;
var inst_35747 = null;
var inst_35748 = (0);
var inst_35749 = (0);
var state_35809__$1 = (function (){var statearr_35836 = state_35809;
(statearr_35836[(12)] = inst_35775);

(statearr_35836[(13)] = inst_35749);

(statearr_35836[(14)] = inst_35746);

(statearr_35836[(15)] = inst_35747);

(statearr_35836[(16)] = inst_35748);

return statearr_35836;
})();
var statearr_35837_37510 = state_35809__$1;
(statearr_35837_37510[(2)] = null);

(statearr_35837_37510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (3))){
var inst_35807 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35809__$1,inst_35807);
} else {
if((state_val_35810 === (12))){
var inst_35784 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35838_37515 = state_35809__$1;
(statearr_35838_37515[(2)] = inst_35784);

(statearr_35838_37515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (2))){
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35809__$1,(4),ch);
} else {
if((state_val_35810 === (23))){
var state_35809__$1 = state_35809;
var statearr_35840_37523 = state_35809__$1;
(statearr_35840_37523[(2)] = null);

(statearr_35840_37523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (19))){
var inst_35735 = (state_35809[(8)]);
var inst_35790 = (state_35809[(11)]);
var inst_35792 = cljs.core.async.muxch_STAR_(inst_35790);
var state_35809__$1 = state_35809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35809__$1,(22),inst_35792,inst_35735);
} else {
if((state_val_35810 === (11))){
var inst_35760 = (state_35809[(10)]);
var inst_35746 = (state_35809[(14)]);
var inst_35760__$1 = cljs.core.seq(inst_35746);
var state_35809__$1 = (function (){var statearr_35843 = state_35809;
(statearr_35843[(10)] = inst_35760__$1);

return statearr_35843;
})();
if(inst_35760__$1){
var statearr_35845_37534 = state_35809__$1;
(statearr_35845_37534[(1)] = (13));

} else {
var statearr_35846_37535 = state_35809__$1;
(statearr_35846_37535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (9))){
var inst_35786 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35847_37536 = state_35809__$1;
(statearr_35847_37536[(2)] = inst_35786);

(statearr_35847_37536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (5))){
var inst_35743 = cljs.core.deref(mults);
var inst_35744 = cljs.core.vals(inst_35743);
var inst_35745 = cljs.core.seq(inst_35744);
var inst_35746 = inst_35745;
var inst_35747 = null;
var inst_35748 = (0);
var inst_35749 = (0);
var state_35809__$1 = (function (){var statearr_35848 = state_35809;
(statearr_35848[(13)] = inst_35749);

(statearr_35848[(14)] = inst_35746);

(statearr_35848[(15)] = inst_35747);

(statearr_35848[(16)] = inst_35748);

return statearr_35848;
})();
var statearr_35849_37544 = state_35809__$1;
(statearr_35849_37544[(2)] = null);

(statearr_35849_37544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (14))){
var state_35809__$1 = state_35809;
var statearr_35856_37550 = state_35809__$1;
(statearr_35856_37550[(2)] = null);

(statearr_35856_37550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (16))){
var inst_35760 = (state_35809[(10)]);
var inst_35764 = cljs.core.chunk_first(inst_35760);
var inst_35768 = cljs.core.chunk_rest(inst_35760);
var inst_35770 = cljs.core.count(inst_35764);
var inst_35746 = inst_35768;
var inst_35747 = inst_35764;
var inst_35748 = inst_35770;
var inst_35749 = (0);
var state_35809__$1 = (function (){var statearr_35857 = state_35809;
(statearr_35857[(13)] = inst_35749);

(statearr_35857[(14)] = inst_35746);

(statearr_35857[(15)] = inst_35747);

(statearr_35857[(16)] = inst_35748);

return statearr_35857;
})();
var statearr_35858_37560 = state_35809__$1;
(statearr_35858_37560[(2)] = null);

(statearr_35858_37560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (10))){
var inst_35749 = (state_35809[(13)]);
var inst_35746 = (state_35809[(14)]);
var inst_35747 = (state_35809[(15)]);
var inst_35748 = (state_35809[(16)]);
var inst_35754 = cljs.core._nth(inst_35747,inst_35749);
var inst_35755 = cljs.core.async.muxch_STAR_(inst_35754);
var inst_35756 = cljs.core.async.close_BANG_(inst_35755);
var inst_35757 = (inst_35749 + (1));
var tmp35850 = inst_35746;
var tmp35851 = inst_35747;
var tmp35852 = inst_35748;
var inst_35746__$1 = tmp35850;
var inst_35747__$1 = tmp35851;
var inst_35748__$1 = tmp35852;
var inst_35749__$1 = inst_35757;
var state_35809__$1 = (function (){var statearr_35859 = state_35809;
(statearr_35859[(13)] = inst_35749__$1);

(statearr_35859[(17)] = inst_35756);

(statearr_35859[(14)] = inst_35746__$1);

(statearr_35859[(15)] = inst_35747__$1);

(statearr_35859[(16)] = inst_35748__$1);

return statearr_35859;
})();
var statearr_35860_37561 = state_35809__$1;
(statearr_35860_37561[(2)] = null);

(statearr_35860_37561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (18))){
var inst_35779 = (state_35809[(2)]);
var state_35809__$1 = state_35809;
var statearr_35861_37564 = state_35809__$1;
(statearr_35861_37564[(2)] = inst_35779);

(statearr_35861_37564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35810 === (8))){
var inst_35749 = (state_35809[(13)]);
var inst_35748 = (state_35809[(16)]);
var inst_35751 = (inst_35749 < inst_35748);
var inst_35752 = inst_35751;
var state_35809__$1 = state_35809;
if(cljs.core.truth_(inst_35752)){
var statearr_35862_37567 = state_35809__$1;
(statearr_35862_37567[(1)] = (10));

} else {
var statearr_35863_37568 = state_35809__$1;
(statearr_35863_37568[(1)] = (11));

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
var statearr_35877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35877[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_35877[(1)] = (1));

return statearr_35877;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_35809){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_35809);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e35878){var ex__34100__auto__ = e35878;
var statearr_35885_37571 = state_35809;
(statearr_35885_37571[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_35809[(4)]))){
var statearr_35886_37572 = state_35809;
(statearr_35886_37572[(1)] = cljs.core.first((state_35809[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37573 = state_35809;
state_35809 = G__37573;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_35809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_35809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_35887 = f__34309__auto__();
(statearr_35887[(6)] = c__34308__auto___37461);

return statearr_35887;
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
var G__35896 = arguments.length;
switch (G__35896) {
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
var G__35904 = arguments.length;
switch (G__35904) {
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
var G__35910 = arguments.length;
switch (G__35910) {
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
var c__34308__auto___37578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_35961){
var state_val_35962 = (state_35961[(1)]);
if((state_val_35962 === (7))){
var state_35961__$1 = state_35961;
var statearr_35965_37579 = state_35961__$1;
(statearr_35965_37579[(2)] = null);

(statearr_35965_37579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (1))){
var state_35961__$1 = state_35961;
var statearr_35966_37580 = state_35961__$1;
(statearr_35966_37580[(2)] = null);

(statearr_35966_37580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (4))){
var inst_35921 = (state_35961[(7)]);
var inst_35922 = (state_35961[(8)]);
var inst_35924 = (inst_35922 < inst_35921);
var state_35961__$1 = state_35961;
if(cljs.core.truth_(inst_35924)){
var statearr_35967_37582 = state_35961__$1;
(statearr_35967_37582[(1)] = (6));

} else {
var statearr_35969_37583 = state_35961__$1;
(statearr_35969_37583[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (15))){
var inst_35947 = (state_35961[(9)]);
var inst_35952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35947);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35961__$1,(17),out,inst_35952);
} else {
if((state_val_35962 === (13))){
var inst_35947 = (state_35961[(9)]);
var inst_35947__$1 = (state_35961[(2)]);
var inst_35948 = cljs.core.some(cljs.core.nil_QMARK_,inst_35947__$1);
var state_35961__$1 = (function (){var statearr_35974 = state_35961;
(statearr_35974[(9)] = inst_35947__$1);

return statearr_35974;
})();
if(cljs.core.truth_(inst_35948)){
var statearr_35975_37584 = state_35961__$1;
(statearr_35975_37584[(1)] = (14));

} else {
var statearr_35976_37586 = state_35961__$1;
(statearr_35976_37586[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (6))){
var state_35961__$1 = state_35961;
var statearr_35977_37587 = state_35961__$1;
(statearr_35977_37587[(2)] = null);

(statearr_35977_37587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (17))){
var inst_35954 = (state_35961[(2)]);
var state_35961__$1 = (function (){var statearr_35979 = state_35961;
(statearr_35979[(10)] = inst_35954);

return statearr_35979;
})();
var statearr_35980_37588 = state_35961__$1;
(statearr_35980_37588[(2)] = null);

(statearr_35980_37588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (3))){
var inst_35959 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35961__$1,inst_35959);
} else {
if((state_val_35962 === (12))){
var _ = (function (){var statearr_35985 = state_35961;
(statearr_35985[(4)] = cljs.core.rest((state_35961[(4)])));

return statearr_35985;
})();
var state_35961__$1 = state_35961;
var ex35978 = (state_35961__$1[(2)]);
var statearr_35987_37594 = state_35961__$1;
(statearr_35987_37594[(5)] = ex35978);


if((ex35978 instanceof Object)){
var statearr_35988_37595 = state_35961__$1;
(statearr_35988_37595[(1)] = (11));

(statearr_35988_37595[(5)] = null);

} else {
throw ex35978;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (2))){
var inst_35919 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35921 = cnt;
var inst_35922 = (0);
var state_35961__$1 = (function (){var statearr_35991 = state_35961;
(statearr_35991[(7)] = inst_35921);

(statearr_35991[(8)] = inst_35922);

(statearr_35991[(11)] = inst_35919);

return statearr_35991;
})();
var statearr_35992_37596 = state_35961__$1;
(statearr_35992_37596[(2)] = null);

(statearr_35992_37596[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (11))){
var inst_35926 = (state_35961[(2)]);
var inst_35927 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35961__$1 = (function (){var statearr_35993 = state_35961;
(statearr_35993[(12)] = inst_35926);

return statearr_35993;
})();
var statearr_35994_37597 = state_35961__$1;
(statearr_35994_37597[(2)] = inst_35927);

(statearr_35994_37597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (9))){
var inst_35922 = (state_35961[(8)]);
var _ = (function (){var statearr_35995 = state_35961;
(statearr_35995[(4)] = cljs.core.cons((12),(state_35961[(4)])));

return statearr_35995;
})();
var inst_35933 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35922) : chs__$1.call(null,inst_35922));
var inst_35934 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35922) : done.call(null,inst_35922));
var inst_35935 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35933,inst_35934);
var ___$1 = (function (){var statearr_35997 = state_35961;
(statearr_35997[(4)] = cljs.core.rest((state_35961[(4)])));

return statearr_35997;
})();
var state_35961__$1 = state_35961;
var statearr_35998_37598 = state_35961__$1;
(statearr_35998_37598[(2)] = inst_35935);

(statearr_35998_37598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (5))){
var inst_35945 = (state_35961[(2)]);
var state_35961__$1 = (function (){var statearr_36000 = state_35961;
(statearr_36000[(13)] = inst_35945);

return statearr_36000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35961__$1,(13),dchan);
} else {
if((state_val_35962 === (14))){
var inst_35950 = cljs.core.async.close_BANG_(out);
var state_35961__$1 = state_35961;
var statearr_36004_37603 = state_35961__$1;
(statearr_36004_37603[(2)] = inst_35950);

(statearr_36004_37603[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (16))){
var inst_35957 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_36005_37604 = state_35961__$1;
(statearr_36005_37604[(2)] = inst_35957);

(statearr_36005_37604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (10))){
var inst_35922 = (state_35961[(8)]);
var inst_35938 = (state_35961[(2)]);
var inst_35939 = (inst_35922 + (1));
var inst_35922__$1 = inst_35939;
var state_35961__$1 = (function (){var statearr_36006 = state_35961;
(statearr_36006[(14)] = inst_35938);

(statearr_36006[(8)] = inst_35922__$1);

return statearr_36006;
})();
var statearr_36007_37606 = state_35961__$1;
(statearr_36007_37606[(2)] = null);

(statearr_36007_37606[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (8))){
var inst_35943 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_36008_37607 = state_35961__$1;
(statearr_36008_37607[(2)] = inst_35943);

(statearr_36008_37607[(1)] = (5));


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
var statearr_36009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36009[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36009[(1)] = (1));

return statearr_36009;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_35961){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_35961);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36010){var ex__34100__auto__ = e36010;
var statearr_36011_37611 = state_35961;
(statearr_36011_37611[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_35961[(4)]))){
var statearr_36012_37612 = state_35961;
(statearr_36012_37612[(1)] = cljs.core.first((state_35961[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37613 = state_35961;
state_35961 = G__37613;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_35961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_35961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36013 = f__34309__auto__();
(statearr_36013[(6)] = c__34308__auto___37578);

return statearr_36013;
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
var G__36016 = arguments.length;
switch (G__36016) {
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
var c__34308__auto___37615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36056){
var state_val_36057 = (state_36056[(1)]);
if((state_val_36057 === (7))){
var inst_36036 = (state_36056[(7)]);
var inst_36035 = (state_36056[(8)]);
var inst_36035__$1 = (state_36056[(2)]);
var inst_36036__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36035__$1,(0),null);
var inst_36037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36035__$1,(1),null);
var inst_36038 = (inst_36036__$1 == null);
var state_36056__$1 = (function (){var statearr_36060 = state_36056;
(statearr_36060[(7)] = inst_36036__$1);

(statearr_36060[(9)] = inst_36037);

(statearr_36060[(8)] = inst_36035__$1);

return statearr_36060;
})();
if(cljs.core.truth_(inst_36038)){
var statearr_36061_37616 = state_36056__$1;
(statearr_36061_37616[(1)] = (8));

} else {
var statearr_36062_37617 = state_36056__$1;
(statearr_36062_37617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (1))){
var inst_36025 = cljs.core.vec(chs);
var inst_36026 = inst_36025;
var state_36056__$1 = (function (){var statearr_36063 = state_36056;
(statearr_36063[(10)] = inst_36026);

return statearr_36063;
})();
var statearr_36064_37618 = state_36056__$1;
(statearr_36064_37618[(2)] = null);

(statearr_36064_37618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (4))){
var inst_36026 = (state_36056[(10)]);
var state_36056__$1 = state_36056;
return cljs.core.async.ioc_alts_BANG_(state_36056__$1,(7),inst_36026);
} else {
if((state_val_36057 === (6))){
var inst_36052 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36068_37619 = state_36056__$1;
(statearr_36068_37619[(2)] = inst_36052);

(statearr_36068_37619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (3))){
var inst_36054 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36056__$1,inst_36054);
} else {
if((state_val_36057 === (2))){
var inst_36026 = (state_36056[(10)]);
var inst_36028 = cljs.core.count(inst_36026);
var inst_36029 = (inst_36028 > (0));
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36029)){
var statearr_36070_37620 = state_36056__$1;
(statearr_36070_37620[(1)] = (4));

} else {
var statearr_36071_37621 = state_36056__$1;
(statearr_36071_37621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (11))){
var inst_36026 = (state_36056[(10)]);
var inst_36045 = (state_36056[(2)]);
var tmp36069 = inst_36026;
var inst_36026__$1 = tmp36069;
var state_36056__$1 = (function (){var statearr_36072 = state_36056;
(statearr_36072[(10)] = inst_36026__$1);

(statearr_36072[(11)] = inst_36045);

return statearr_36072;
})();
var statearr_36073_37624 = state_36056__$1;
(statearr_36073_37624[(2)] = null);

(statearr_36073_37624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (9))){
var inst_36036 = (state_36056[(7)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36056__$1,(11),out,inst_36036);
} else {
if((state_val_36057 === (5))){
var inst_36050 = cljs.core.async.close_BANG_(out);
var state_36056__$1 = state_36056;
var statearr_36074_37627 = state_36056__$1;
(statearr_36074_37627[(2)] = inst_36050);

(statearr_36074_37627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (10))){
var inst_36048 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36075_37629 = state_36056__$1;
(statearr_36075_37629[(2)] = inst_36048);

(statearr_36075_37629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (8))){
var inst_36036 = (state_36056[(7)]);
var inst_36037 = (state_36056[(9)]);
var inst_36035 = (state_36056[(8)]);
var inst_36026 = (state_36056[(10)]);
var inst_36040 = (function (){var cs = inst_36026;
var vec__36031 = inst_36035;
var v = inst_36036;
var c = inst_36037;
return (function (p1__36014_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36014_SHARP_);
});
})();
var inst_36041 = cljs.core.filterv(inst_36040,inst_36026);
var inst_36026__$1 = inst_36041;
var state_36056__$1 = (function (){var statearr_36076 = state_36056;
(statearr_36076[(10)] = inst_36026__$1);

return statearr_36076;
})();
var statearr_36077_37630 = state_36056__$1;
(statearr_36077_37630[(2)] = null);

(statearr_36077_37630[(1)] = (2));


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
var statearr_36078 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36078[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36078[(1)] = (1));

return statearr_36078;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36056){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36056);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36079){var ex__34100__auto__ = e36079;
var statearr_36080_37632 = state_36056;
(statearr_36080_37632[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36056[(4)]))){
var statearr_36081_37633 = state_36056;
(statearr_36081_37633[(1)] = cljs.core.first((state_36056[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37634 = state_36056;
state_36056 = G__37634;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36082 = f__34309__auto__();
(statearr_36082[(6)] = c__34308__auto___37615);

return statearr_36082;
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
var G__36084 = arguments.length;
switch (G__36084) {
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
var c__34308__auto___37636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var inst_36090 = (state_36108[(7)]);
var inst_36090__$1 = (state_36108[(2)]);
var inst_36091 = (inst_36090__$1 == null);
var inst_36092 = cljs.core.not(inst_36091);
var state_36108__$1 = (function (){var statearr_36110 = state_36108;
(statearr_36110[(7)] = inst_36090__$1);

return statearr_36110;
})();
if(inst_36092){
var statearr_36111_37637 = state_36108__$1;
(statearr_36111_37637[(1)] = (8));

} else {
var statearr_36112_37638 = state_36108__$1;
(statearr_36112_37638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var inst_36085 = (0);
var state_36108__$1 = (function (){var statearr_36113 = state_36108;
(statearr_36113[(8)] = inst_36085);

return statearr_36113;
})();
var statearr_36114_37639 = state_36108__$1;
(statearr_36114_37639[(2)] = null);

(statearr_36114_37639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36108__$1,(7),ch);
} else {
if((state_val_36109 === (6))){
var inst_36103 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36115_37640 = state_36108__$1;
(statearr_36115_37640[(2)] = inst_36103);

(statearr_36115_37640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (3))){
var inst_36105 = (state_36108[(2)]);
var inst_36106 = cljs.core.async.close_BANG_(out);
var state_36108__$1 = (function (){var statearr_36117 = state_36108;
(statearr_36117[(9)] = inst_36105);

return statearr_36117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (2))){
var inst_36085 = (state_36108[(8)]);
var inst_36087 = (inst_36085 < n);
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36087)){
var statearr_36118_37644 = state_36108__$1;
(statearr_36118_37644[(1)] = (4));

} else {
var statearr_36119_37645 = state_36108__$1;
(statearr_36119_37645[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (11))){
var inst_36085 = (state_36108[(8)]);
var inst_36095 = (state_36108[(2)]);
var inst_36096 = (inst_36085 + (1));
var inst_36085__$1 = inst_36096;
var state_36108__$1 = (function (){var statearr_36120 = state_36108;
(statearr_36120[(10)] = inst_36095);

(statearr_36120[(8)] = inst_36085__$1);

return statearr_36120;
})();
var statearr_36121_37646 = state_36108__$1;
(statearr_36121_37646[(2)] = null);

(statearr_36121_37646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (9))){
var state_36108__$1 = state_36108;
var statearr_36122_37647 = state_36108__$1;
(statearr_36122_37647[(2)] = null);

(statearr_36122_37647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (5))){
var state_36108__$1 = state_36108;
var statearr_36123_37649 = state_36108__$1;
(statearr_36123_37649[(2)] = null);

(statearr_36123_37649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_36100 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36124_37653 = state_36108__$1;
(statearr_36124_37653[(2)] = inst_36100);

(statearr_36124_37653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_36090 = (state_36108[(7)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36108__$1,(11),out,inst_36090);
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
var statearr_36128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36128[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36128[(1)] = (1));

return statearr_36128;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36108){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36108);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36129){var ex__34100__auto__ = e36129;
var statearr_36130_37655 = state_36108;
(statearr_36130_37655[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36108[(4)]))){
var statearr_36131_37657 = state_36108;
(statearr_36131_37657[(1)] = cljs.core.first((state_36108[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37663 = state_36108;
state_36108 = G__37663;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36132 = f__34309__auto__();
(statearr_36132[(6)] = c__34308__auto___37636);

return statearr_36132;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36134 = (function (f,ch,meta36135){
this.f = f;
this.ch = ch;
this.meta36135 = meta36135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36136,meta36135__$1){
var self__ = this;
var _36136__$1 = this;
return (new cljs.core.async.t_cljs$core$async36134(self__.f,self__.ch,meta36135__$1));
}));

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36136){
var self__ = this;
var _36136__$1 = this;
return self__.meta36135;
}));

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36141 = (function (f,ch,meta36135,_,fn1,meta36142){
this.f = f;
this.ch = ch;
this.meta36135 = meta36135;
this._ = _;
this.fn1 = fn1;
this.meta36142 = meta36142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36143,meta36142__$1){
var self__ = this;
var _36143__$1 = this;
return (new cljs.core.async.t_cljs$core$async36141(self__.f,self__.ch,self__.meta36135,self__._,self__.fn1,meta36142__$1));
}));

(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36143){
var self__ = this;
var _36143__$1 = this;
return self__.meta36142;
}));

(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36133_SHARP_){
var G__36144 = (((p1__36133_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36133_SHARP_) : self__.f.call(null,p1__36133_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36144) : f1.call(null,G__36144));
});
}));

(cljs.core.async.t_cljs$core$async36141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36135","meta36135",-1618503287,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36134","cljs.core.async/t_cljs$core$async36134",1345130694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36142","meta36142",1238045987,null)], null);
}));

(cljs.core.async.t_cljs$core$async36141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36141");

(cljs.core.async.t_cljs$core$async36141.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36141.
 */
cljs.core.async.__GT_t_cljs$core$async36141 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36141(f__$1,ch__$1,meta36135__$1,___$2,fn1__$1,meta36142){
return (new cljs.core.async.t_cljs$core$async36141(f__$1,ch__$1,meta36135__$1,___$2,fn1__$1,meta36142));
});

}

return (new cljs.core.async.t_cljs$core$async36141(self__.f,self__.ch,self__.meta36135,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36145 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36145) : self__.f.call(null,G__36145));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36135","meta36135",-1618503287,null)], null);
}));

(cljs.core.async.t_cljs$core$async36134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36134");

(cljs.core.async.t_cljs$core$async36134.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36134.
 */
cljs.core.async.__GT_t_cljs$core$async36134 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36134(f__$1,ch__$1,meta36135){
return (new cljs.core.async.t_cljs$core$async36134(f__$1,ch__$1,meta36135));
});

}

return (new cljs.core.async.t_cljs$core$async36134(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36166 = (function (f,ch,meta36167){
this.f = f;
this.ch = ch;
this.meta36167 = meta36167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36168,meta36167__$1){
var self__ = this;
var _36168__$1 = this;
return (new cljs.core.async.t_cljs$core$async36166(self__.f,self__.ch,meta36167__$1));
}));

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36168){
var self__ = this;
var _36168__$1 = this;
return self__.meta36167;
}));

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36167","meta36167",937164420,null)], null);
}));

(cljs.core.async.t_cljs$core$async36166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36166");

(cljs.core.async.t_cljs$core$async36166.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36166.
 */
cljs.core.async.__GT_t_cljs$core$async36166 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36166(f__$1,ch__$1,meta36167){
return (new cljs.core.async.t_cljs$core$async36166(f__$1,ch__$1,meta36167));
});

}

return (new cljs.core.async.t_cljs$core$async36166(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36192 = (function (p,ch,meta36193){
this.p = p;
this.ch = ch;
this.meta36193 = meta36193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36194,meta36193__$1){
var self__ = this;
var _36194__$1 = this;
return (new cljs.core.async.t_cljs$core$async36192(self__.p,self__.ch,meta36193__$1));
}));

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36194){
var self__ = this;
var _36194__$1 = this;
return self__.meta36193;
}));

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36193","meta36193",651503427,null)], null);
}));

(cljs.core.async.t_cljs$core$async36192.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36192");

(cljs.core.async.t_cljs$core$async36192.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36192");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36192.
 */
cljs.core.async.__GT_t_cljs$core$async36192 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36192(p__$1,ch__$1,meta36193){
return (new cljs.core.async.t_cljs$core$async36192(p__$1,ch__$1,meta36193));
});

}

return (new cljs.core.async.t_cljs$core$async36192(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36199 = arguments.length;
switch (G__36199) {
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
var c__34308__auto___37669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36220){
var state_val_36221 = (state_36220[(1)]);
if((state_val_36221 === (7))){
var inst_36216 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36222_37671 = state_36220__$1;
(statearr_36222_37671[(2)] = inst_36216);

(statearr_36222_37671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (1))){
var state_36220__$1 = state_36220;
var statearr_36223_37672 = state_36220__$1;
(statearr_36223_37672[(2)] = null);

(statearr_36223_37672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (4))){
var inst_36202 = (state_36220[(7)]);
var inst_36202__$1 = (state_36220[(2)]);
var inst_36203 = (inst_36202__$1 == null);
var state_36220__$1 = (function (){var statearr_36224 = state_36220;
(statearr_36224[(7)] = inst_36202__$1);

return statearr_36224;
})();
if(cljs.core.truth_(inst_36203)){
var statearr_36225_37673 = state_36220__$1;
(statearr_36225_37673[(1)] = (5));

} else {
var statearr_36226_37674 = state_36220__$1;
(statearr_36226_37674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (6))){
var inst_36202 = (state_36220[(7)]);
var inst_36207 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36202) : p.call(null,inst_36202));
var state_36220__$1 = state_36220;
if(cljs.core.truth_(inst_36207)){
var statearr_36227_37675 = state_36220__$1;
(statearr_36227_37675[(1)] = (8));

} else {
var statearr_36228_37676 = state_36220__$1;
(statearr_36228_37676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (3))){
var inst_36218 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36220__$1,inst_36218);
} else {
if((state_val_36221 === (2))){
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36220__$1,(4),ch);
} else {
if((state_val_36221 === (11))){
var inst_36210 = (state_36220[(2)]);
var state_36220__$1 = state_36220;
var statearr_36229_37677 = state_36220__$1;
(statearr_36229_37677[(2)] = inst_36210);

(statearr_36229_37677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (9))){
var state_36220__$1 = state_36220;
var statearr_36230_37679 = state_36220__$1;
(statearr_36230_37679[(2)] = null);

(statearr_36230_37679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (5))){
var inst_36205 = cljs.core.async.close_BANG_(out);
var state_36220__$1 = state_36220;
var statearr_36231_37680 = state_36220__$1;
(statearr_36231_37680[(2)] = inst_36205);

(statearr_36231_37680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (10))){
var inst_36213 = (state_36220[(2)]);
var state_36220__$1 = (function (){var statearr_36232 = state_36220;
(statearr_36232[(8)] = inst_36213);

return statearr_36232;
})();
var statearr_36233_37681 = state_36220__$1;
(statearr_36233_37681[(2)] = null);

(statearr_36233_37681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36221 === (8))){
var inst_36202 = (state_36220[(7)]);
var state_36220__$1 = state_36220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36220__$1,(11),out,inst_36202);
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
var statearr_36234 = [null,null,null,null,null,null,null,null,null];
(statearr_36234[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36234[(1)] = (1));

return statearr_36234;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36220){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36220);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36235){var ex__34100__auto__ = e36235;
var statearr_36236_37686 = state_36220;
(statearr_36236_37686[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36220[(4)]))){
var statearr_36237_37687 = state_36220;
(statearr_36237_37687[(1)] = cljs.core.first((state_36220[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37688 = state_36220;
state_36220 = G__37688;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36238 = f__34309__auto__();
(statearr_36238[(6)] = c__34308__auto___37669);

return statearr_36238;
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
var G__36245 = arguments.length;
switch (G__36245) {
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
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36313){
var state_val_36314 = (state_36313[(1)]);
if((state_val_36314 === (7))){
var inst_36309 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36315_37694 = state_36313__$1;
(statearr_36315_37694[(2)] = inst_36309);

(statearr_36315_37694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (20))){
var inst_36279 = (state_36313[(7)]);
var inst_36290 = (state_36313[(2)]);
var inst_36291 = cljs.core.next(inst_36279);
var inst_36265 = inst_36291;
var inst_36266 = null;
var inst_36267 = (0);
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36316 = state_36313;
(statearr_36316[(8)] = inst_36290);

(statearr_36316[(9)] = inst_36268);

(statearr_36316[(10)] = inst_36266);

(statearr_36316[(11)] = inst_36267);

(statearr_36316[(12)] = inst_36265);

return statearr_36316;
})();
var statearr_36317_37696 = state_36313__$1;
(statearr_36317_37696[(2)] = null);

(statearr_36317_37696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (1))){
var state_36313__$1 = state_36313;
var statearr_36318_37698 = state_36313__$1;
(statearr_36318_37698[(2)] = null);

(statearr_36318_37698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (4))){
var inst_36254 = (state_36313[(13)]);
var inst_36254__$1 = (state_36313[(2)]);
var inst_36255 = (inst_36254__$1 == null);
var state_36313__$1 = (function (){var statearr_36319 = state_36313;
(statearr_36319[(13)] = inst_36254__$1);

return statearr_36319;
})();
if(cljs.core.truth_(inst_36255)){
var statearr_36320_37699 = state_36313__$1;
(statearr_36320_37699[(1)] = (5));

} else {
var statearr_36322_37700 = state_36313__$1;
(statearr_36322_37700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (15))){
var state_36313__$1 = state_36313;
var statearr_36326_37701 = state_36313__$1;
(statearr_36326_37701[(2)] = null);

(statearr_36326_37701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (21))){
var state_36313__$1 = state_36313;
var statearr_36328_37702 = state_36313__$1;
(statearr_36328_37702[(2)] = null);

(statearr_36328_37702[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (13))){
var inst_36268 = (state_36313[(9)]);
var inst_36266 = (state_36313[(10)]);
var inst_36267 = (state_36313[(11)]);
var inst_36265 = (state_36313[(12)]);
var inst_36275 = (state_36313[(2)]);
var inst_36276 = (inst_36268 + (1));
var tmp36323 = inst_36266;
var tmp36324 = inst_36267;
var tmp36325 = inst_36265;
var inst_36265__$1 = tmp36325;
var inst_36266__$1 = tmp36323;
var inst_36267__$1 = tmp36324;
var inst_36268__$1 = inst_36276;
var state_36313__$1 = (function (){var statearr_36329 = state_36313;
(statearr_36329[(14)] = inst_36275);

(statearr_36329[(9)] = inst_36268__$1);

(statearr_36329[(10)] = inst_36266__$1);

(statearr_36329[(11)] = inst_36267__$1);

(statearr_36329[(12)] = inst_36265__$1);

return statearr_36329;
})();
var statearr_36332_37706 = state_36313__$1;
(statearr_36332_37706[(2)] = null);

(statearr_36332_37706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (22))){
var state_36313__$1 = state_36313;
var statearr_36333_37707 = state_36313__$1;
(statearr_36333_37707[(2)] = null);

(statearr_36333_37707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (6))){
var inst_36254 = (state_36313[(13)]);
var inst_36263 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36254) : f.call(null,inst_36254));
var inst_36264 = cljs.core.seq(inst_36263);
var inst_36265 = inst_36264;
var inst_36266 = null;
var inst_36267 = (0);
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36334 = state_36313;
(statearr_36334[(9)] = inst_36268);

(statearr_36334[(10)] = inst_36266);

(statearr_36334[(11)] = inst_36267);

(statearr_36334[(12)] = inst_36265);

return statearr_36334;
})();
var statearr_36335_37709 = state_36313__$1;
(statearr_36335_37709[(2)] = null);

(statearr_36335_37709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (17))){
var inst_36279 = (state_36313[(7)]);
var inst_36283 = cljs.core.chunk_first(inst_36279);
var inst_36284 = cljs.core.chunk_rest(inst_36279);
var inst_36285 = cljs.core.count(inst_36283);
var inst_36265 = inst_36284;
var inst_36266 = inst_36283;
var inst_36267 = inst_36285;
var inst_36268 = (0);
var state_36313__$1 = (function (){var statearr_36337 = state_36313;
(statearr_36337[(9)] = inst_36268);

(statearr_36337[(10)] = inst_36266);

(statearr_36337[(11)] = inst_36267);

(statearr_36337[(12)] = inst_36265);

return statearr_36337;
})();
var statearr_36339_37717 = state_36313__$1;
(statearr_36339_37717[(2)] = null);

(statearr_36339_37717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (3))){
var inst_36311 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36313__$1,inst_36311);
} else {
if((state_val_36314 === (12))){
var inst_36299 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36340_37719 = state_36313__$1;
(statearr_36340_37719[(2)] = inst_36299);

(statearr_36340_37719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (2))){
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36313__$1,(4),in$);
} else {
if((state_val_36314 === (23))){
var inst_36307 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36343_37722 = state_36313__$1;
(statearr_36343_37722[(2)] = inst_36307);

(statearr_36343_37722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (19))){
var inst_36294 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36344_37725 = state_36313__$1;
(statearr_36344_37725[(2)] = inst_36294);

(statearr_36344_37725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (11))){
var inst_36279 = (state_36313[(7)]);
var inst_36265 = (state_36313[(12)]);
var inst_36279__$1 = cljs.core.seq(inst_36265);
var state_36313__$1 = (function (){var statearr_36345 = state_36313;
(statearr_36345[(7)] = inst_36279__$1);

return statearr_36345;
})();
if(inst_36279__$1){
var statearr_36346_37728 = state_36313__$1;
(statearr_36346_37728[(1)] = (14));

} else {
var statearr_36347_37729 = state_36313__$1;
(statearr_36347_37729[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (9))){
var inst_36301 = (state_36313[(2)]);
var inst_36302 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36313__$1 = (function (){var statearr_36348 = state_36313;
(statearr_36348[(15)] = inst_36301);

return statearr_36348;
})();
if(cljs.core.truth_(inst_36302)){
var statearr_36349_37730 = state_36313__$1;
(statearr_36349_37730[(1)] = (21));

} else {
var statearr_36350_37731 = state_36313__$1;
(statearr_36350_37731[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (5))){
var inst_36257 = cljs.core.async.close_BANG_(out);
var state_36313__$1 = state_36313;
var statearr_36354_37732 = state_36313__$1;
(statearr_36354_37732[(2)] = inst_36257);

(statearr_36354_37732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (14))){
var inst_36279 = (state_36313[(7)]);
var inst_36281 = cljs.core.chunked_seq_QMARK_(inst_36279);
var state_36313__$1 = state_36313;
if(inst_36281){
var statearr_36355_37733 = state_36313__$1;
(statearr_36355_37733[(1)] = (17));

} else {
var statearr_36356_37734 = state_36313__$1;
(statearr_36356_37734[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (16))){
var inst_36297 = (state_36313[(2)]);
var state_36313__$1 = state_36313;
var statearr_36357_37735 = state_36313__$1;
(statearr_36357_37735[(2)] = inst_36297);

(statearr_36357_37735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36314 === (10))){
var inst_36268 = (state_36313[(9)]);
var inst_36266 = (state_36313[(10)]);
var inst_36273 = cljs.core._nth(inst_36266,inst_36268);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36313__$1,(13),out,inst_36273);
} else {
if((state_val_36314 === (18))){
var inst_36279 = (state_36313[(7)]);
var inst_36288 = cljs.core.first(inst_36279);
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36313__$1,(20),out,inst_36288);
} else {
if((state_val_36314 === (8))){
var inst_36268 = (state_36313[(9)]);
var inst_36267 = (state_36313[(11)]);
var inst_36270 = (inst_36268 < inst_36267);
var inst_36271 = inst_36270;
var state_36313__$1 = state_36313;
if(cljs.core.truth_(inst_36271)){
var statearr_36358_37748 = state_36313__$1;
(statearr_36358_37748[(1)] = (10));

} else {
var statearr_36359_37749 = state_36313__$1;
(statearr_36359_37749[(1)] = (11));

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
var statearr_36360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36360[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1 = (function (state_36313){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36313);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36361){var ex__34100__auto__ = e36361;
var statearr_36362_37760 = state_36313;
(statearr_36362_37760[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36313[(4)]))){
var statearr_36363_37761 = state_36313;
(statearr_36363_37761[(1)] = cljs.core.first((state_36313[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37767 = state_36313;
state_36313 = G__37767;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__ = function(state_36313){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1.call(this,state_36313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34097__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36364 = f__34309__auto__();
(statearr_36364[(6)] = c__34308__auto__);

return statearr_36364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));

return c__34308__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36366 = arguments.length;
switch (G__36366) {
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
var G__36381 = arguments.length;
switch (G__36381) {
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
var G__36393 = arguments.length;
switch (G__36393) {
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
var c__34308__auto___37781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36437){
var state_val_36438 = (state_36437[(1)]);
if((state_val_36438 === (7))){
var inst_36431 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
var statearr_36440_37788 = state_36437__$1;
(statearr_36440_37788[(2)] = inst_36431);

(statearr_36440_37788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (1))){
var inst_36413 = null;
var state_36437__$1 = (function (){var statearr_36441 = state_36437;
(statearr_36441[(7)] = inst_36413);

return statearr_36441;
})();
var statearr_36442_37789 = state_36437__$1;
(statearr_36442_37789[(2)] = null);

(statearr_36442_37789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (4))){
var inst_36416 = (state_36437[(8)]);
var inst_36416__$1 = (state_36437[(2)]);
var inst_36417 = (inst_36416__$1 == null);
var inst_36418 = cljs.core.not(inst_36417);
var state_36437__$1 = (function (){var statearr_36444 = state_36437;
(statearr_36444[(8)] = inst_36416__$1);

return statearr_36444;
})();
if(inst_36418){
var statearr_36446_37790 = state_36437__$1;
(statearr_36446_37790[(1)] = (5));

} else {
var statearr_36447_37791 = state_36437__$1;
(statearr_36447_37791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (6))){
var state_36437__$1 = state_36437;
var statearr_36451_37792 = state_36437__$1;
(statearr_36451_37792[(2)] = null);

(statearr_36451_37792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (3))){
var inst_36433 = (state_36437[(2)]);
var inst_36434 = cljs.core.async.close_BANG_(out);
var state_36437__$1 = (function (){var statearr_36458 = state_36437;
(statearr_36458[(9)] = inst_36433);

return statearr_36458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36437__$1,inst_36434);
} else {
if((state_val_36438 === (2))){
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36437__$1,(4),ch);
} else {
if((state_val_36438 === (11))){
var inst_36416 = (state_36437[(8)]);
var inst_36425 = (state_36437[(2)]);
var inst_36413 = inst_36416;
var state_36437__$1 = (function (){var statearr_36459 = state_36437;
(statearr_36459[(10)] = inst_36425);

(statearr_36459[(7)] = inst_36413);

return statearr_36459;
})();
var statearr_36460_37799 = state_36437__$1;
(statearr_36460_37799[(2)] = null);

(statearr_36460_37799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (9))){
var inst_36416 = (state_36437[(8)]);
var state_36437__$1 = state_36437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36437__$1,(11),out,inst_36416);
} else {
if((state_val_36438 === (5))){
var inst_36413 = (state_36437[(7)]);
var inst_36416 = (state_36437[(8)]);
var inst_36420 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36416,inst_36413);
var state_36437__$1 = state_36437;
if(inst_36420){
var statearr_36463_37800 = state_36437__$1;
(statearr_36463_37800[(1)] = (8));

} else {
var statearr_36464_37801 = state_36437__$1;
(statearr_36464_37801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (10))){
var inst_36428 = (state_36437[(2)]);
var state_36437__$1 = state_36437;
var statearr_36465_37802 = state_36437__$1;
(statearr_36465_37802[(2)] = inst_36428);

(statearr_36465_37802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36438 === (8))){
var inst_36413 = (state_36437[(7)]);
var tmp36462 = inst_36413;
var inst_36413__$1 = tmp36462;
var state_36437__$1 = (function (){var statearr_36467 = state_36437;
(statearr_36467[(7)] = inst_36413__$1);

return statearr_36467;
})();
var statearr_36468_37803 = state_36437__$1;
(statearr_36468_37803[(2)] = null);

(statearr_36468_37803[(1)] = (2));


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
var statearr_36469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36469[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36469[(1)] = (1));

return statearr_36469;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36437){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36437);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36470){var ex__34100__auto__ = e36470;
var statearr_36471_37805 = state_36437;
(statearr_36471_37805[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36437[(4)]))){
var statearr_36472_37806 = state_36437;
(statearr_36472_37806[(1)] = cljs.core.first((state_36437[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37808 = state_36437;
state_36437 = G__37808;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36473 = f__34309__auto__();
(statearr_36473[(6)] = c__34308__auto___37781);

return statearr_36473;
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
var G__36475 = arguments.length;
switch (G__36475) {
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
var c__34308__auto___37810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36513){
var state_val_36514 = (state_36513[(1)]);
if((state_val_36514 === (7))){
var inst_36509 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
var statearr_36517_37811 = state_36513__$1;
(statearr_36517_37811[(2)] = inst_36509);

(statearr_36517_37811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (1))){
var inst_36476 = (new Array(n));
var inst_36477 = inst_36476;
var inst_36478 = (0);
var state_36513__$1 = (function (){var statearr_36518 = state_36513;
(statearr_36518[(7)] = inst_36477);

(statearr_36518[(8)] = inst_36478);

return statearr_36518;
})();
var statearr_36520_37814 = state_36513__$1;
(statearr_36520_37814[(2)] = null);

(statearr_36520_37814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (4))){
var inst_36481 = (state_36513[(9)]);
var inst_36481__$1 = (state_36513[(2)]);
var inst_36482 = (inst_36481__$1 == null);
var inst_36483 = cljs.core.not(inst_36482);
var state_36513__$1 = (function (){var statearr_36521 = state_36513;
(statearr_36521[(9)] = inst_36481__$1);

return statearr_36521;
})();
if(inst_36483){
var statearr_36522_37815 = state_36513__$1;
(statearr_36522_37815[(1)] = (5));

} else {
var statearr_36523_37817 = state_36513__$1;
(statearr_36523_37817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (15))){
var inst_36503 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
var statearr_36524_37819 = state_36513__$1;
(statearr_36524_37819[(2)] = inst_36503);

(statearr_36524_37819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (13))){
var state_36513__$1 = state_36513;
var statearr_36525_37820 = state_36513__$1;
(statearr_36525_37820[(2)] = null);

(statearr_36525_37820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (6))){
var inst_36478 = (state_36513[(8)]);
var inst_36499 = (inst_36478 > (0));
var state_36513__$1 = state_36513;
if(cljs.core.truth_(inst_36499)){
var statearr_36526_37821 = state_36513__$1;
(statearr_36526_37821[(1)] = (12));

} else {
var statearr_36527_37823 = state_36513__$1;
(statearr_36527_37823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (3))){
var inst_36511 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36513__$1,inst_36511);
} else {
if((state_val_36514 === (12))){
var inst_36477 = (state_36513[(7)]);
var inst_36501 = cljs.core.vec(inst_36477);
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36513__$1,(15),out,inst_36501);
} else {
if((state_val_36514 === (2))){
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36513__$1,(4),ch);
} else {
if((state_val_36514 === (11))){
var inst_36493 = (state_36513[(2)]);
var inst_36494 = (new Array(n));
var inst_36477 = inst_36494;
var inst_36478 = (0);
var state_36513__$1 = (function (){var statearr_36537 = state_36513;
(statearr_36537[(7)] = inst_36477);

(statearr_36537[(8)] = inst_36478);

(statearr_36537[(10)] = inst_36493);

return statearr_36537;
})();
var statearr_36538_37825 = state_36513__$1;
(statearr_36538_37825[(2)] = null);

(statearr_36538_37825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (9))){
var inst_36477 = (state_36513[(7)]);
var inst_36491 = cljs.core.vec(inst_36477);
var state_36513__$1 = state_36513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36513__$1,(11),out,inst_36491);
} else {
if((state_val_36514 === (5))){
var inst_36486 = (state_36513[(11)]);
var inst_36477 = (state_36513[(7)]);
var inst_36478 = (state_36513[(8)]);
var inst_36481 = (state_36513[(9)]);
var inst_36485 = (inst_36477[inst_36478] = inst_36481);
var inst_36486__$1 = (inst_36478 + (1));
var inst_36487 = (inst_36486__$1 < n);
var state_36513__$1 = (function (){var statearr_36539 = state_36513;
(statearr_36539[(11)] = inst_36486__$1);

(statearr_36539[(12)] = inst_36485);

return statearr_36539;
})();
if(cljs.core.truth_(inst_36487)){
var statearr_36540_37826 = state_36513__$1;
(statearr_36540_37826[(1)] = (8));

} else {
var statearr_36541_37827 = state_36513__$1;
(statearr_36541_37827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (14))){
var inst_36506 = (state_36513[(2)]);
var inst_36507 = cljs.core.async.close_BANG_(out);
var state_36513__$1 = (function (){var statearr_36544 = state_36513;
(statearr_36544[(13)] = inst_36506);

return statearr_36544;
})();
var statearr_36545_37828 = state_36513__$1;
(statearr_36545_37828[(2)] = inst_36507);

(statearr_36545_37828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (10))){
var inst_36497 = (state_36513[(2)]);
var state_36513__$1 = state_36513;
var statearr_36546_37829 = state_36513__$1;
(statearr_36546_37829[(2)] = inst_36497);

(statearr_36546_37829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36514 === (8))){
var inst_36486 = (state_36513[(11)]);
var inst_36477 = (state_36513[(7)]);
var tmp36543 = inst_36477;
var inst_36477__$1 = tmp36543;
var inst_36478 = inst_36486;
var state_36513__$1 = (function (){var statearr_36547 = state_36513;
(statearr_36547[(7)] = inst_36477__$1);

(statearr_36547[(8)] = inst_36478);

return statearr_36547;
})();
var statearr_36548_37831 = state_36513__$1;
(statearr_36548_37831[(2)] = null);

(statearr_36548_37831[(1)] = (2));


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
var statearr_36549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36549[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36549[(1)] = (1));

return statearr_36549;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36513){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36513);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36550){var ex__34100__auto__ = e36550;
var statearr_36551_37834 = state_36513;
(statearr_36551_37834[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36513[(4)]))){
var statearr_36552_37836 = state_36513;
(statearr_36552_37836[(1)] = cljs.core.first((state_36513[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37837 = state_36513;
state_36513 = G__37837;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36553 = f__34309__auto__();
(statearr_36553[(6)] = c__34308__auto___37810);

return statearr_36553;
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
var G__36555 = arguments.length;
switch (G__36555) {
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
var c__34308__auto___37841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34309__auto__ = (function (){var switch__34096__auto__ = (function (state_36604){
var state_val_36605 = (state_36604[(1)]);
if((state_val_36605 === (7))){
var inst_36600 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36613_37842 = state_36604__$1;
(statearr_36613_37842[(2)] = inst_36600);

(statearr_36613_37842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (1))){
var inst_36558 = [];
var inst_36560 = inst_36558;
var inst_36561 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36604__$1 = (function (){var statearr_36614 = state_36604;
(statearr_36614[(7)] = inst_36561);

(statearr_36614[(8)] = inst_36560);

return statearr_36614;
})();
var statearr_36616_37843 = state_36604__$1;
(statearr_36616_37843[(2)] = null);

(statearr_36616_37843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (4))){
var inst_36565 = (state_36604[(9)]);
var inst_36565__$1 = (state_36604[(2)]);
var inst_36566 = (inst_36565__$1 == null);
var inst_36567 = cljs.core.not(inst_36566);
var state_36604__$1 = (function (){var statearr_36617 = state_36604;
(statearr_36617[(9)] = inst_36565__$1);

return statearr_36617;
})();
if(inst_36567){
var statearr_36618_37844 = state_36604__$1;
(statearr_36618_37844[(1)] = (5));

} else {
var statearr_36619_37845 = state_36604__$1;
(statearr_36619_37845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (15))){
var inst_36560 = (state_36604[(8)]);
var inst_36592 = cljs.core.vec(inst_36560);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36604__$1,(18),out,inst_36592);
} else {
if((state_val_36605 === (13))){
var inst_36587 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36629_37846 = state_36604__$1;
(statearr_36629_37846[(2)] = inst_36587);

(statearr_36629_37846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (6))){
var inst_36560 = (state_36604[(8)]);
var inst_36589 = inst_36560.length;
var inst_36590 = (inst_36589 > (0));
var state_36604__$1 = state_36604;
if(cljs.core.truth_(inst_36590)){
var statearr_36630_37847 = state_36604__$1;
(statearr_36630_37847[(1)] = (15));

} else {
var statearr_36631_37848 = state_36604__$1;
(statearr_36631_37848[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (17))){
var inst_36597 = (state_36604[(2)]);
var inst_36598 = cljs.core.async.close_BANG_(out);
var state_36604__$1 = (function (){var statearr_36633 = state_36604;
(statearr_36633[(10)] = inst_36597);

return statearr_36633;
})();
var statearr_36636_37849 = state_36604__$1;
(statearr_36636_37849[(2)] = inst_36598);

(statearr_36636_37849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (3))){
var inst_36602 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36604__$1,inst_36602);
} else {
if((state_val_36605 === (12))){
var inst_36560 = (state_36604[(8)]);
var inst_36580 = cljs.core.vec(inst_36560);
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36604__$1,(14),out,inst_36580);
} else {
if((state_val_36605 === (2))){
var state_36604__$1 = state_36604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36604__$1,(4),ch);
} else {
if((state_val_36605 === (11))){
var inst_36560 = (state_36604[(8)]);
var inst_36569 = (state_36604[(11)]);
var inst_36565 = (state_36604[(9)]);
var inst_36577 = inst_36560.push(inst_36565);
var tmp36638 = inst_36560;
var inst_36560__$1 = tmp36638;
var inst_36561 = inst_36569;
var state_36604__$1 = (function (){var statearr_36646 = state_36604;
(statearr_36646[(12)] = inst_36577);

(statearr_36646[(7)] = inst_36561);

(statearr_36646[(8)] = inst_36560__$1);

return statearr_36646;
})();
var statearr_36647_37852 = state_36604__$1;
(statearr_36647_37852[(2)] = null);

(statearr_36647_37852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (9))){
var inst_36561 = (state_36604[(7)]);
var inst_36573 = cljs.core.keyword_identical_QMARK_(inst_36561,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36604__$1 = state_36604;
var statearr_36649_37855 = state_36604__$1;
(statearr_36649_37855[(2)] = inst_36573);

(statearr_36649_37855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (5))){
var inst_36561 = (state_36604[(7)]);
var inst_36569 = (state_36604[(11)]);
var inst_36565 = (state_36604[(9)]);
var inst_36570 = (state_36604[(13)]);
var inst_36569__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36565) : f.call(null,inst_36565));
var inst_36570__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36569__$1,inst_36561);
var state_36604__$1 = (function (){var statearr_36650 = state_36604;
(statearr_36650[(11)] = inst_36569__$1);

(statearr_36650[(13)] = inst_36570__$1);

return statearr_36650;
})();
if(inst_36570__$1){
var statearr_36651_37856 = state_36604__$1;
(statearr_36651_37856[(1)] = (8));

} else {
var statearr_36652_37857 = state_36604__$1;
(statearr_36652_37857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (14))){
var inst_36569 = (state_36604[(11)]);
var inst_36565 = (state_36604[(9)]);
var inst_36582 = (state_36604[(2)]);
var inst_36583 = [];
var inst_36584 = inst_36583.push(inst_36565);
var inst_36560 = inst_36583;
var inst_36561 = inst_36569;
var state_36604__$1 = (function (){var statearr_36653 = state_36604;
(statearr_36653[(7)] = inst_36561);

(statearr_36653[(8)] = inst_36560);

(statearr_36653[(14)] = inst_36582);

(statearr_36653[(15)] = inst_36584);

return statearr_36653;
})();
var statearr_36656_37860 = state_36604__$1;
(statearr_36656_37860[(2)] = null);

(statearr_36656_37860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (16))){
var state_36604__$1 = state_36604;
var statearr_36657_37861 = state_36604__$1;
(statearr_36657_37861[(2)] = null);

(statearr_36657_37861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (10))){
var inst_36575 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
if(cljs.core.truth_(inst_36575)){
var statearr_36663_37866 = state_36604__$1;
(statearr_36663_37866[(1)] = (11));

} else {
var statearr_36664_37867 = state_36604__$1;
(statearr_36664_37867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (18))){
var inst_36594 = (state_36604[(2)]);
var state_36604__$1 = state_36604;
var statearr_36665_37868 = state_36604__$1;
(statearr_36665_37868[(2)] = inst_36594);

(statearr_36665_37868[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36605 === (8))){
var inst_36570 = (state_36604[(13)]);
var state_36604__$1 = state_36604;
var statearr_36666_37875 = state_36604__$1;
(statearr_36666_37875[(2)] = inst_36570);

(statearr_36666_37875[(1)] = (10));


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
var statearr_36667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36667[(0)] = cljs$core$async$state_machine__34097__auto__);

(statearr_36667[(1)] = (1));

return statearr_36667;
});
var cljs$core$async$state_machine__34097__auto____1 = (function (state_36604){
while(true){
var ret_value__34098__auto__ = (function (){try{while(true){
var result__34099__auto__ = switch__34096__auto__(state_36604);
if(cljs.core.keyword_identical_QMARK_(result__34099__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34099__auto__;
}
break;
}
}catch (e36669){var ex__34100__auto__ = e36669;
var statearr_36670_37876 = state_36604;
(statearr_36670_37876[(2)] = ex__34100__auto__);


if(cljs.core.seq((state_36604[(4)]))){
var statearr_36671_37877 = state_36604;
(statearr_36671_37877[(1)] = cljs.core.first((state_36604[(4)])));

} else {
throw ex__34100__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34098__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37878 = state_36604;
state_36604 = G__37878;
continue;
} else {
return ret_value__34098__auto__;
}
break;
}
});
cljs$core$async$state_machine__34097__auto__ = function(state_36604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34097__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34097__auto____1.call(this,state_36604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34097__auto____0;
cljs$core$async$state_machine__34097__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34097__auto____1;
return cljs$core$async$state_machine__34097__auto__;
})()
})();
var state__34310__auto__ = (function (){var statearr_36675 = f__34309__auto__();
(statearr_36675[(6)] = c__34308__auto___37841);

return statearr_36675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34310__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
