// Compiled by ClojureScript 1.9.518 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(88),(2)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args47992 = [];
var len__29970__auto___48001 = arguments.length;
var i__29971__auto___48002 = (0);
while(true){
if((i__29971__auto___48002 < len__29970__auto___48001)){
args47992.push((arguments[i__29971__auto___48002]));

var G__48003 = (i__29971__auto___48002 + (1));
i__29971__auto___48002 = G__48003;
continue;
} else {
}
break;
}

var G__47994 = args47992.length;
switch (G__47994) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47992.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.call(null,sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__47995 = (((typeof cljs.core.first.call(null,args) === 'string') && (cljs.core.next.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.call(null,vec__47995,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__47995,(1),null);
var vec__47998 = (((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__$1))) && (cljs.core.next.call(null,args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.call(null,vec__47998,(0),null);
var args__$2 = cljs.core.nth.call(null,vec__47998,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta.call(null,sym))?cljs.core.conj.call(null,cljs.core.meta.call(null,sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.call(null,attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args48005 = [];
var len__29970__auto___48008 = arguments.length;
var i__29971__auto___48009 = (0);
while(true){
if((i__29971__auto___48009 < len__29970__auto___48008)){
args48005.push((arguments[i__29971__auto___48009]));

var G__48010 = (i__29971__auto___48009 + (1));
i__29971__auto___48009 = G__48010;
continue;
} else {
}
break;
}

var G__48007 = args48005.length;
switch (G__48007) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48005.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)):readers);
var default$__$1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399)))?cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1);
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
} else {
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args48012 = [];
var len__29970__auto___48017 = arguments.length;
var i__29971__auto___48018 = (0);
while(true){
if((i__29971__auto___48018 < len__29970__auto___48017)){
args48012.push((arguments[i__29971__auto___48018]));

var G__48019 = (i__29971__auto___48018 + (1));
i__29971__auto___48018 = G__48019;
continue;
} else {
}
break;
}

var G__48014 = args48012.length;
switch (G__48014) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48012.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_48015 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_48016 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_48016;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48015;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__46363__auto__ = (function (){var or__28749__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__46363__auto__)){
var data_map = b2__46363__auto__;
return cljs.core.conj.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_.call(null,x)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__28737__auto__ = taoensso.encore.ident_QMARK_.call(null,x);
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__28737__auto____$1)){
return true;
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__28737__auto__ = (x instanceof cljs.core.Symbol);
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__28737__auto____$1)){
return true;
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace.call(null,x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__28737__auto__ = (x instanceof cljs.core.Keyword);
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(and__28737__auto____$1)){
return true;
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.call(null,x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_.call(null,x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_.call(null,x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__28737__auto__ = typeof x === 'number';
if(and__28737__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__28737__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_.call(null,x)){
var n = cljs.core.name.call(null,x);
var b2__46363__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var ns = b2__46363__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.call(null,x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var n = b2__46363__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var n = b2__46363__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var n = b2__46363__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var n = b2__46363__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var n = b2__46363__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__46363__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(b2__46363__auto__)){
var f = b2__46363__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__46363__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(b2__46363__auto__)){
var email = b2__46363__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e48030){if((e48030 instanceof Error)){
var _ = e48030;
return false;
} else {
throw e48030;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args48031 = [];
var len__29970__auto___48034 = arguments.length;
var i__29971__auto___48035 = (0);
while(true){
if((i__29971__auto___48035 < len__29970__auto___48034)){
args48031.push((arguments[i__29971__auto___48035]));

var G__48036 = (i__29971__auto___48035 + (1));
i__29971__auto___48035 = G__48036;
continue;
} else {
}
break;
}

var G__48033 = args48031.length;
switch (G__48033) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48031.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("`is!` "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failure against arg: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("`as-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,as_name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("` failed against: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nzero.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nempty_str.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_udt.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nat_int.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_pos_int.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_nat_float.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_pos_float.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__28749__auto__ = taoensso.encore.as__QMARK_pval.call(null,x);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.as_qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args48038 = [];
var len__29970__auto___48041 = arguments.length;
var i__29971__auto___48042 = (0);
while(true){
if((i__29971__auto___48042 < len__29970__auto___48041)){
args48038.push((arguments[i__29971__auto___48042]));

var G__48043 = (i__29971__auto___48042 + (1));
i__29971__auto___48042 = G__48043;
continue;
} else {
}
break;
}

var G__48040 = args48038.length;
switch (G__48040) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48038.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.call(null,ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq.call(null,ks)){
var parts = cljs.core.reduce.call(null,(function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.call(null,cljs.core.conj,acc,taoensso.encore.explode_keyword.call(null,in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq.call(null,parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.seq.call(null,ppop))?clojure.string.join.call(null,".",ppop):null),cljs.core.peek.call(null,parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__48051){
var vec__48052 = p__48051;
var k = cljs.core.nth.call(null,vec__48052,(0),null);
var v = cljs.core.nth.call(null,vec__48052,(1),null);
return rf.call(null,acc,k,v);
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.call(null,rf,init,cljs.core.range.call(null,n));
});
var inc_48055 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_48055){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,inc_48055){
return (function (acc,in$){
return rf.call(null,acc,cljs.core._vreset_BANG_.call(null,i,inc_48055.call(null,cljs.core._deref.call(null,i))),in$);
});})(i,inc_48055))
,init,coll);
});})(inc_48055))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.call(null,(function (acc,k){
return f.call(null,acc,k,goog.object.get(o,k,null));
}),init,cljs.core.js_keys.call(null,o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.call(null,(function (p1__48057_SHARP_,p2__48056_SHARP_){
return proc.call(null,p2__48056_SHARP_);
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__48060_SHARP_,p2__48058_SHARP_,p3__48059_SHARP_){
return proc.call(null,p2__48058_SHARP_,p3__48059_SHARP_);
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs.call(null,(function (p1__48063_SHARP_,p2__48061_SHARP_,p3__48062_SHARP_){
return proc.call(null,p2__48061_SHARP_,p3__48062_SHARP_);
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj.call(null,(function (p1__48066_SHARP_,p2__48064_SHARP_,p3__48065_SHARP_){
return proc.call(null,p2__48064_SHARP_,p3__48065_SHARP_);
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var b2__46363__auto__ = pred.call(null,in$);
if(cljs.core.truth_(b2__46363__auto__)){
var p = b2__46363__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var b2__46363__auto__ = pred.call(null,k,v);
if(cljs.core.truth_(b2__46363__auto__)){
var p = b2__46363__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return cljs.core.reduced.call(null,in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.reduced.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return true;
} else {
return cljs.core.reduced.call(null,false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return coll;
} else {
return cljs.core.reduced.call(null,null);
}
}),coll,coll);
});
var inc_48068 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_48068){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (idx_,inc_48068){
return (function (){
return cljs.core._vreset_BANG_.call(null,idx_,inc_48068.call(null,cljs.core._deref.call(null,idx_)));
});
;})(idx_,inc_48068))
});})(inc_48068))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var args48069 = [];
var len__29970__auto___48072 = arguments.length;
var i__29971__auto___48073 = (0);
while(true){
if((i__29971__auto___48073 < len__29970__auto___48072)){
args48069.push((arguments[i__29971__auto___48073]));

var G__48074 = (i__29971__auto___48073 + (1));
i__29971__auto___48073 = G__48074;
continue;
} else {
}
break;
}

var G__48071 = args48069.length;
switch (G__48071) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48069.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (Math.abs((x - y)) < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return (Math.abs((x - y)) < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args48076 = [];
var len__29970__auto___48080 = arguments.length;
var i__29971__auto___48081 = (0);
while(true){
if((i__29971__auto___48081 < len__29970__auto___48080)){
args48076.push((arguments[i__29971__auto___48081]));

var G__48082 = (i__29971__auto___48081 + (1));
i__29971__auto___48081 = G__48082;
continue;
} else {
}
break;
}

var G__48078 = args48076.length;
switch (G__48078) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48076.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__48079 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48079) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$.call(null,rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args48085 = [];
var len__29970__auto___48091 = arguments.length;
var i__29971__auto___48092 = (0);
while(true){
if((i__29971__auto___48092 < len__29970__auto___48091)){
args48085.push((arguments[i__29971__auto___48092]));

var G__48093 = (i__29971__auto___48092 + (1));
i__29971__auto___48092 = G__48093;
continue;
} else {
}
break;
}

var G__48087 = args48085.length;
switch (G__48087) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48085.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.call(null,n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__48088){
var map__48089 = p__48088;
var map__48089__$1 = ((((!((map__48089 == null)))?((((map__48089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48089):map__48089);
var min = cljs.core.get.call(null,map__48089__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.call(null,map__48089__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__48089__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$.call(null,(((b + cljs.core.rand.call(null,b)) * 0.5) * factor));
var t__$1 = cljs.core.long$.call(null,(cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$.call(null,(cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_.call(null,x)){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta.call(null,x,taoensso.encore.merge.call(null,cljs.core.meta.call(null,x),m));
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args48096 = [];
var len__29970__auto___48102 = arguments.length;
var i__29971__auto___48103 = (0);
while(true){
if((i__29971__auto___48103 < len__29970__auto___48102)){
args48096.push((arguments[i__29971__auto___48103]));

var G__48104 = (i__29971__auto___48103 + (1));
i__29971__auto___48103 = G__48104;
continue;
} else {
}
break;
}

var G__48101 = args48096.length;
switch (G__48101) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48096.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__28737__auto__ = taoensso.encore.some_QMARK_.call(null,x);
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core._EQ_.call(null,x,y);
if(and__28737__auto____$1){
return taoensso.encore.revery_QMARK_.call(null,((function (and__28737__auto____$1,and__28737__auto__){
return (function (p1__48095_SHARP_){
return cljs.core._EQ_.call(null,p1__48095_SHARP_,x);
});})(and__28737__auto____$1,and__28737__auto__))
,more);
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq48097){
var G__48098 = cljs.core.first.call(null,seq48097);
var seq48097__$1 = cljs.core.next.call(null,seq48097);
var G__48099 = cljs.core.first.call(null,seq48097__$1);
var seq48097__$2 = cljs.core.next.call(null,seq48097__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__48098,G__48099,seq48097__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args48106 = [];
var len__29970__auto___48113 = arguments.length;
var i__29971__auto___48114 = (0);
while(true){
if((i__29971__auto___48114 < len__29970__auto___48113)){
args48106.push((arguments[i__29971__auto___48114]));

var G__48115 = (i__29971__auto___48114 + (1));
i__29971__auto___48114 = G__48115;
continue;
} else {
}
break;
}

var G__48112 = args48106.length;
switch (G__48112) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48106.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29993__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst.call(null,taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq48107){
var G__48108 = cljs.core.first.call(null,seq48107);
var seq48107__$1 = cljs.core.next.call(null,seq48107);
var G__48109 = cljs.core.first.call(null,seq48107__$1);
var seq48107__$2 = cljs.core.next.call(null,seq48107__$1);
var G__48110 = cljs.core.first.call(null,seq48107__$2);
var seq48107__$3 = cljs.core.next.call(null,seq48107__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__48108,G__48109,G__48110,seq48107__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__48120 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.call(null,vec__48120,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.call(null,vec__48120,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__46363__auto__ = cljs.core.re_seq.call(null,/\d+/,s_version);
if(cljs.core.truth_(b2__46363__auto__)){
var s = b2__46363__auto__;
return cljs.core.mapv.call(null,taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__46363__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__46363__auto__)){
var s = b2__46363__auto__;
return clojure.string.lower_case.call(null,s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__48133 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__48133,(0),null);
var yc = cljs.core.nth.call(null,vec__48133,(1),null);
var zc = cljs.core.nth.call(null,vec__48133,(2),null);
var vec__48136 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version.call(null,min_version)));
var xm = cljs.core.nth.call(null,vec__48136,(0),null);
var ym = cljs.core.nth.call(null,vec__48136,(1),null);
var zm = cljs.core.nth.call(null,vec__48136,(2),null);
var vec__48139 = cljs.core.mapv.call(null,((function (vec__48133,xc,yc,zc,vec__48136,xm,ym,zm){
return (function (p1__48123_SHARP_){
var or__28749__auto__ = p1__48123_SHARP_;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return (0);
}
});})(vec__48133,xc,yc,zc,vec__48136,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__48139,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__48139,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__48139,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args48142 = [];
var len__29970__auto___48145 = arguments.length;
var i__29971__auto___48146 = (0);
while(true){
if((i__29971__auto___48146 < len__29970__auto___48145)){
args48142.push((arguments[i__29971__auto___48146]));

var G__48147 = (i__29971__auto___48146 + (1));
i__29971__auto___48146 = G__48147;
continue;
} else {
}
break;
}

var G__48144 = args48142.length;
switch (G__48144) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48142.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48150 = arguments.length;
var i__29971__auto___48151 = (0);
while(true){
if((i__29971__auto___48151 < len__29970__auto___48150)){
args__29977__auto__.push((arguments[i__29971__auto___48151]));

var G__48152 = (i__29971__auto___48151 + (1));
i__29971__auto___48151 = G__48152;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq48149){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48149));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args48153 = [];
var len__29970__auto___48156 = arguments.length;
var i__29971__auto___48157 = (0);
while(true){
if((i__29971__auto___48157 < len__29970__auto___48156)){
args48153.push((arguments[i__29971__auto___48157]));

var G__48158 = (i__29971__auto___48157 + (1));
i__29971__auto___48157 = G__48158;
continue;
} else {
}
break;
}

var G__48155 = args48153.length;
switch (G__48155) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48153.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_48165 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_48165){
return (function taoensso$encore$oget_in(var_args){
var args48162 = [];
var len__29970__auto___48166 = arguments.length;
var i__29971__auto___48167 = (0);
while(true){
if((i__29971__auto___48167 < len__29970__auto___48166)){
args48162.push((arguments[i__29971__auto___48167]));

var G__48168 = (i__29971__auto___48167 + (1));
i__29971__auto___48167 = G__48168;
continue;
} else {
}
break;
}

var G__48164 = args48162.length;
switch (G__48164) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48162.length)].join('')));

}
});})(sentinel_48165))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_48165){
return (function (o,ks){
return taoensso.encore.oget_in.call(null,o,ks,null);
});})(sentinel_48165))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_48165){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1){
var o__$2 = goog.object.get(o__$1,cljs.core.first.call(null,ks__$1),sentinel_48165);
if((o__$2 === sentinel_48165)){
return not_found;
} else {
var G__48170 = o__$2;
var G__48171 = cljs.core.next.call(null,ks__$1);
o__$1 = G__48170;
ks__$1 = G__48171;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_48165))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args48172 = [];
var len__29970__auto___48184 = arguments.length;
var i__29971__auto___48185 = (0);
while(true){
if((i__29971__auto___48185 < len__29970__auto___48184)){
args48172.push((arguments[i__29971__auto___48185]));

var G__48186 = (i__29971__auto___48185 + (1));
i__29971__auto___48185 = G__48186;
continue;
} else {
}
break;
}

var G__48177 = args48172.length;
switch (G__48177) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48172.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.call(null,coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq48173){
var G__48174 = cljs.core.first.call(null,seq48173);
var seq48173__$1 = cljs.core.next.call(null,seq48173);
var G__48175 = cljs.core.first.call(null,seq48173__$1);
var seq48173__$2 = cljs.core.next.call(null,seq48173__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__48174,G__48175,seq48173__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var args48178 = [];
var len__29970__auto___48188 = arguments.length;
var i__29971__auto___48189 = (0);
while(true){
if((i__29971__auto___48189 < len__29970__auto___48188)){
args48178.push((arguments[i__29971__auto___48189]));

var G__48190 = (i__29971__auto___48189 + (1));
i__29971__auto___48189 = G__48190;
continue;
} else {
}
break;
}

var G__48183 = args48178.length;
switch (G__48183) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48178.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.call(null,taoensso.encore.conj_when,taoensso.encore.conj_when.call(null,coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq48179){
var G__48180 = cljs.core.first.call(null,seq48179);
var seq48179__$1 = cljs.core.next.call(null,seq48179);
var G__48181 = cljs.core.first.call(null,seq48179__$1);
var seq48179__$2 = cljs.core.next.call(null,seq48179__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__48180,G__48181,seq48179__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args48192 = [];
var len__29970__auto___48213 = arguments.length;
var i__29971__auto___48214 = (0);
while(true){
if((i__29971__auto___48214 < len__29970__auto___48213)){
args48192.push((arguments[i__29971__auto___48214]));

var G__48215 = (i__29971__auto___48214 + (1));
i__29971__auto___48214 = G__48215;
continue;
} else {
}
break;
}

var G__48198 = args48192.length;
switch (G__48198) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48192.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29993__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq48193){
var G__48194 = cljs.core.first.call(null,seq48193);
var seq48193__$1 = cljs.core.next.call(null,seq48193);
var G__48195 = cljs.core.first.call(null,seq48193__$1);
var seq48193__$2 = cljs.core.next.call(null,seq48193__$1);
var G__48196 = cljs.core.first.call(null,seq48193__$2);
var seq48193__$3 = cljs.core.next.call(null,seq48193__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__48194,G__48195,G__48196,seq48193__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args48199 = [];
var len__29970__auto___48217 = arguments.length;
var i__29971__auto___48218 = (0);
while(true){
if((i__29971__auto___48218 < len__29970__auto___48217)){
args48199.push((arguments[i__29971__auto___48218]));

var G__48219 = (i__29971__auto___48218 + (1));
i__29971__auto___48218 = G__48219;
continue;
} else {
}
break;
}

var G__48205 = args48199.length;
switch (G__48205) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48199.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29993__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,(function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.call(null,m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq48200){
var G__48201 = cljs.core.first.call(null,seq48200);
var seq48200__$1 = cljs.core.next.call(null,seq48200);
var G__48202 = cljs.core.first.call(null,seq48200__$1);
var seq48200__$2 = cljs.core.next.call(null,seq48200__$1);
var G__48203 = cljs.core.first.call(null,seq48200__$2);
var seq48200__$3 = cljs.core.next.call(null,seq48200__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__48201,G__48202,G__48203,seq48200__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var args48206 = [];
var len__29970__auto___48221 = arguments.length;
var i__29971__auto___48222 = (0);
while(true){
if((i__29971__auto___48222 < len__29970__auto___48221)){
args48206.push((arguments[i__29971__auto___48222]));

var G__48223 = (i__29971__auto___48222 + (1));
i__29971__auto___48222 = G__48223;
continue;
} else {
}
break;
}

var G__48212 = args48206.length;
switch (G__48212) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48206.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29993__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs.call(null,taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.call(null,m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq48207){
var G__48208 = cljs.core.first.call(null,seq48207);
var seq48207__$1 = cljs.core.next.call(null,seq48207);
var G__48209 = cljs.core.first.call(null,seq48207__$1);
var seq48207__$2 = cljs.core.next.call(null,seq48207__$1);
var G__48210 = cljs.core.first.call(null,seq48207__$2);
var seq48207__$3 = cljs.core.next.call(null,seq48207__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__48208,G__48209,G__48210,seq48207__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.contains_QMARK_.call(null,m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.call(null,m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var args48225 = [];
var len__29970__auto___48228 = arguments.length;
var i__29971__auto___48229 = (0);
while(true){
if((i__29971__auto___48229 < len__29970__auto___48228)){
args48225.push((arguments[i__29971__auto___48229]));

var G__48230 = (i__29971__auto___48229 + (1));
i__29971__auto___48229 = G__48230;
continue;
} else {
}
break;
}

var G__48227 = args48225.length;
switch (G__48227) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48225.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count.call(null,v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var args48232 = [];
var len__29970__auto___48235 = arguments.length;
var i__29971__auto___48236 = (0);
while(true){
if((i__29971__auto___48236 < len__29970__auto___48235)){
args48232.push((arguments[i__29971__auto___48236]));

var G__48237 = (i__29971__auto___48236 + (1));
i__29971__auto___48236 = G__48237;
continue;
} else {
}
break;
}

var G__48234 = args48232.length;
switch (G__48234) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48232.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count.call(null,v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.call(null,v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$.call(null,cljs.core.count.call(null,v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.call(null,v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.call(null,v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__48242 = v;
var v1 = cljs.core.nth.call(null,vec__48242,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__48248 = xs__$1;
var seq__48249 = cljs.core.seq.call(null,vec__48248);
var first__48250 = cljs.core.first.call(null,seq__48249);
var seq__48249__$1 = cljs.core.next.call(null,seq__48249);
var x1 = first__48250;
var xn = seq__48249__$1;
if(xn){
var G__48251 = cljs.core.conj.call(null,butlast,x1);
var G__48252 = xn;
butlast = G__48251;
xs__$1 = G__48252;
continue;
} else {
return f.call(null,butlast,x1);
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.get_subvector.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48255 = arguments.length;
var i__29971__auto___48256 = (0);
while(true){
if((i__29971__auto___48256 < len__29970__auto___48255)){
args__29977__auto__.push((arguments[i__29971__auto___48256]));

var G__48257 = (i__29971__auto___48256 + (1));
i__29971__auto___48256 = G__48257;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,taoensso.encore.fsplit_last.call(null,(function (xs,lx){
return cljs.core.concat.call(null,xs,taoensso.encore.seq_kvs.call(null,lx));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq48253){
var G__48254 = cljs.core.first.call(null,seq48253);
var seq48253__$1 = cljs.core.next.call(null,seq48253);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__48254,seq48253__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args48258 = [];
var len__29970__auto___48264 = arguments.length;
var i__29971__auto___48265 = (0);
while(true){
if((i__29971__auto___48265 < len__29970__auto___48264)){
args48258.push((arguments[i__29971__auto___48265]));

var G__48266 = (i__29971__auto___48265 + (1));
i__29971__auto___48265 = G__48266;
continue;
} else {
}
break;
}

var G__48263 = args48258.length;
switch (G__48263) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48258.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (acc,in$){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$.call(null,to),cljs.core.cons.call(null,from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq48259){
var G__48260 = cljs.core.first.call(null,seq48259);
var seq48259__$1 = cljs.core.next.call(null,seq48259);
var G__48261 = cljs.core.first.call(null,seq48259__$1);
var seq48259__$2 = cljs.core.next.call(null,seq48259__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__48260,G__48261,seq48259__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj_BANG_.call(null,acc,f.call(null));
}),cljs.core.transient$.call(null,coll),n));
} else {
return taoensso.encore.reduce_n.call(null,(function (acc,_){
return cljs.core.conj.call(null,acc,f.call(null));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args48268 = [];
var len__29970__auto___48271 = arguments.length;
var i__29971__auto___48272 = (0);
while(true){
if((i__29971__auto___48272 < len__29970__auto___48271)){
args48268.push((arguments[i__29971__auto___48272]));

var G__48273 = (i__29971__auto___48272 + (1));
i__29971__auto___48272 = G__48273;
continue;
} else {
}
break;
}

var G__48270 = args48268.length;
switch (G__48270) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48268.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args48275 = [];
var len__29970__auto___48278 = arguments.length;
var i__29971__auto___48279 = (0);
while(true){
if((i__29971__auto___48279 < len__29970__auto___48278)){
args48275.push((arguments[i__29971__auto___48279]));

var G__48280 = (i__29971__auto___48279 + (1));
i__29971__auto___48279 = G__48280;
continue;
} else {
}
break;
}

var G__48277 = args48275.length;
switch (G__48277) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48275.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__48282 = null;
var G__48282__0 = (function (){
return rf.call(null);
});
var G__48282__1 = (function (acc){
return rf.call(null,acc);
});
var G__48282__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__48282 = function(acc,input){
switch(arguments.length){
case 0:
return G__48282__0.call(this);
case 1:
return G__48282__1.call(this,acc);
case 2:
return G__48282__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__48282.cljs$core$IFn$_invoke$arity$0 = G__48282__0;
G__48282.cljs$core$IFn$_invoke$arity$1 = G__48282__1;
G__48282.cljs$core$IFn$_invoke$arity$2 = G__48282__2;
return G__48282;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,k,f.call(null,v));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,f.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__48283_SHARP_){
return taoensso.encore.some_QMARK_.call(null,cljs.core.get.call(null,m,p1__48283_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var args48284 = [];
var len__29970__auto___48287 = arguments.length;
var i__29971__auto___48288 = (0);
while(true){
if((i__29971__auto___48288 < len__29970__auto___48287)){
args48284.push((arguments[i__29971__auto___48288]));

var G__48289 = (i__29971__auto___48288 + (1));
i__29971__auto___48288 = G__48289;
continue;
} else {
}
break;
}

var G__48286 = args48284.length;
switch (G__48286) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48284.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.call(null,m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__46363__auto__ = cljs.core.seq.call(null,ks);
if(b2__46363__auto__){
var ks_seq = b2__46363__auto__;
var k = cljs.core.nth.call(null,ks,(0));
var b2__46363__auto____$1 = cljs.core.next.call(null,ks_seq);
if(b2__46363__auto____$1){
var ks__$1 = b2__46363__auto____$1;
return cljs.core.assoc.call(null,m,k,taoensso.encore.update_in.call(null,cljs.core.get.call(null,m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
var v = f.call(null,cljs.core.get.call(null,m,k,not_found));
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
}
}
} else {
return f.call(null,m);
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var args48291 = [];
var len__29970__auto___48294 = arguments.length;
var i__29971__auto___48295 = (0);
while(true){
if((i__29971__auto___48295 < len__29970__auto___48294)){
args48291.push((arguments[i__29971__auto___48295]));

var G__48296 = (i__29971__auto___48295 + (1));
i__29971__auto___48295 = G__48296;
continue;
} else {
}
break;
}

var G__48293 = args48291.length;
switch (G__48293) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48291.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq.call(null,ks)){
return taoensso.encore.fsplit_last.call(null,(function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.call(null,coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args48298 = [];
var len__29970__auto___48305 = arguments.length;
var i__29971__auto___48306 = (0);
while(true){
if((i__29971__auto___48306 < len__29970__auto___48305)){
args48298.push((arguments[i__29971__auto___48306]));

var G__48307 = (i__29971__auto___48306 + (1));
i__29971__auto___48306 = G__48307;
continue;
} else {
}
break;
}

var G__48304 = args48298.length;
switch (G__48304) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48298.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29993__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.dissoc.call(null,m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.call(null,m,ks,null,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq48299){
var G__48300 = cljs.core.first.call(null,seq48299);
var seq48299__$1 = cljs.core.next.call(null,seq48299);
var G__48301 = cljs.core.first.call(null,seq48299__$1);
var seq48299__$2 = cljs.core.next.call(null,seq48299__$1);
var G__48302 = cljs.core.first.call(null,seq48299__$2);
var seq48299__$3 = cljs.core.next.call(null,seq48299__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__48300,G__48301,G__48302,seq48299__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args48309 = [];
var len__29970__auto___48315 = arguments.length;
var i__29971__auto___48316 = (0);
while(true){
if((i__29971__auto___48316 < len__29970__auto___48315)){
args48309.push((arguments[i__29971__auto___48316]));

var G__48317 = (i__29971__auto___48316 + (1));
i__29971__auto___48316 = G__48317;
continue;
} else {
}
break;
}

var G__48314 = args48309.length;
switch (G__48314) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48309.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq48310){
var G__48311 = cljs.core.first.call(null,seq48310);
var seq48310__$1 = cljs.core.next.call(null,seq48310);
var G__48312 = cljs.core.first.call(null,seq48310__$1);
var seq48310__$2 = cljs.core.next.call(null,seq48310__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__48311,G__48312,seq48310__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
while(true){
if((s1) && (s2)){
var G__48319 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,v,cljs.core.first.call(null,s1)),cljs.core.first.call(null,s2));
var G__48320 = cljs.core.next.call(null,s1);
var G__48321 = cljs.core.next.call(null,s2);
v = G__48319;
s1 = G__48320;
s2 = G__48321;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_.call(null,v);
}
}
}
break;
}
});
var not_found_48324 = {};
taoensso.encore._merge_with = ((function (not_found_48324){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.call(null,((function (not_found_48324){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv.call(null,((function (not_found_48324){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.call(null,acc__$1,k,not_found_48324);
if((lv === not_found_48324)){
return cljs.core.assoc.call(null,acc__$1,k,rv);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__28737__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return (cljs.core.map_QMARK_.call(null,rv)) && (cljs.core.map_QMARK_.call(null,lv));
} else {
return and__28737__auto__;
}
})())){
return cljs.core.assoc.call(null,acc__$1,k,cljs.core.reduce_kv.call(null,taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = f.call(null,lv,rv);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_rv,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return cljs.core.dissoc.call(null,acc__$1,k);
} else {
return cljs.core.assoc.call(null,acc__$1,k,new_rv);
}
}
}
}
});})(not_found_48324))
,(function (){var or__28749__auto__ = acc;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_48324))
,null,maps);
});})(not_found_48324))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48331 = arguments.length;
var i__29971__auto___48332 = (0);
while(true){
if((i__29971__auto___48332 < len__29970__auto___48331)){
args__29977__auto__.push((arguments[i__29971__auto___48332]));

var G__48333 = (i__29971__auto___48332 + (1));
i__29971__auto___48332 = G__48333;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq48325){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48325));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48334 = arguments.length;
var i__29971__auto___48335 = (0);
while(true){
if((i__29971__auto___48335 < len__29970__auto___48334)){
args__29977__auto__.push((arguments[i__29971__auto___48335]));

var G__48336 = (i__29971__auto___48335 + (1));
i__29971__auto___48335 = G__48336;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq48326){
var G__48327 = cljs.core.first.call(null,seq48326);
var seq48326__$1 = cljs.core.next.call(null,seq48326);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__48327,seq48326__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48337 = arguments.length;
var i__29971__auto___48338 = (0);
while(true){
if((i__29971__auto___48338 < len__29970__auto___48337)){
args__29977__auto__.push((arguments[i__29971__auto___48338]));

var G__48339 = (i__29971__auto___48338 + (1));
i__29971__auto___48338 = G__48339;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq48328){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48328));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48340 = arguments.length;
var i__29971__auto___48341 = (0);
while(true){
if((i__29971__auto___48341 < len__29970__auto___48340)){
args__29977__auto__.push((arguments[i__29971__auto___48341]));

var G__48342 = (i__29971__auto___48341 + (1));
i__29971__auto___48341 = G__48342;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with.call(null,new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq48329){
var G__48330 = cljs.core.first.call(null,seq48329);
var seq48329__$1 = cljs.core.next.call(null,seq48329);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__48330,seq48329__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
})

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v1 = f.call(null,cljs.core.get.call(null,m0,k));
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref.call(null,atom_);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,v1);

return true;
})()
){
return return$.call(null,v0,v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.dissoc.call(null,m0,k);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get.call(null,m0,k,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?cljs.core.dissoc.call(null,m0,k):cljs.core.assoc.call(null,m0,k,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc.call(null,m0,k,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get.call(null,m0,k,not_found),v1);
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__46363__auto__ = cljs.core.seq.call(null,ks);
if(b2__46363__auto__){
var ks_seq = b2__46363__auto__;
if(cljs.core.next.call(null,ks_seq)){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = taoensso.encore.fsplit_last.call(null,((function (m0,ks_seq,b2__46363__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,ks_seq,b2__46363__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var v0 = cljs.core.get_in.call(null,m0,ks,not_found);
var s1 = f.call(null,v0);
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,v1,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.fsplit_last.call(null,((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__46363__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.call(null,m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__46363__auto__))
,ks):cljs.core.assoc_in.call(null,m0,ks,v1));
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return return$.call(null,v0,v1);
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_.call(null,return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__46363__auto__ = cljs.core.seq.call(null,ks);
if(b2__46363__auto__){
var ks_seq = b2__46363__auto__;
if(cljs.core.next.call(null,ks_seq)){
while(true){
var m0 = cljs.core.deref.call(null,atom_);
var m1 = cljs.core.assoc_in.call(null,m0,ks,v1);
if((function (){
cljs.core.reset_BANG_.call(null,atom_,m1);

return true;
})()
){
return return$.call(null,cljs.core.get_in.call(null,m0,ks,not_found),v1);
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_.call(null,return$,atom_,cljs.core.nth.call(null,ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_.call(null,return$,atom_,v1);
}
});
var return_48346 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_48346){
return (function taoensso$encore$swap_val_BANG_(var_args){
var args48343 = [];
var len__29970__auto___48347 = arguments.length;
var i__29971__auto___48348 = (0);
while(true){
if((i__29971__auto___48348 < len__29970__auto___48347)){
args48343.push((arguments[i__29971__auto___48348]));

var G__48349 = (i__29971__auto___48348 + (1));
i__29971__auto___48348 = G__48349;
continue;
} else {
}
break;
}

var G__48345 = args48343.length;
switch (G__48345) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48343.length)].join('')));

}
});})(return_48346))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48346){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_48346,atom_,k,null,f);
});})(return_48346))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48346){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_48346,atom_,k,not_found,f);
});})(return_48346))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_48354 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_48354){
return (function taoensso$encore$reset_val_BANG_(var_args){
var args48351 = [];
var len__29970__auto___48355 = arguments.length;
var i__29971__auto___48356 = (0);
while(true){
if((i__29971__auto___48356 < len__29970__auto___48355)){
args48351.push((arguments[i__29971__auto___48356]));

var G__48357 = (i__29971__auto___48356 + (1));
i__29971__auto___48356 = G__48357;
continue;
} else {
}
break;
}

var G__48353 = args48351.length;
switch (G__48353) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48351.length)].join('')));

}
});})(return_48354))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48354){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_48354,atom_,k,null,val);
});})(return_48354))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48354){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_.call(null,return_48354,atom_,k,not_found,val);
});})(return_48354))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_48362 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_48362){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var args48359 = [];
var len__29970__auto___48363 = arguments.length;
var i__29971__auto___48364 = (0);
while(true){
if((i__29971__auto___48364 < len__29970__auto___48363)){
args48359.push((arguments[i__29971__auto___48364]));

var G__48365 = (i__29971__auto___48364 + (1));
i__29971__auto___48364 = G__48365;
continue;
} else {
}
break;
}

var G__48361 = args48359.length;
switch (G__48361) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48359.length)].join('')));

}
});})(return_48362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48362){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_48362,atom_,k,null,f);
});})(return_48362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48362){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_.call(null,return_48362,atom_,k,not_found,f);
});})(return_48362))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var args48367 = [];
var len__29970__auto___48373 = arguments.length;
var i__29971__auto___48374 = (0);
while(true){
if((i__29971__auto___48374 < len__29970__auto___48373)){
args48367.push((arguments[i__29971__auto___48374]));

var G__48375 = (i__29971__auto___48374 + (1));
i__29971__auto___48374 = G__48375;
continue;
} else {
}
break;
}

var G__48369 = args48367.length;
switch (G__48369) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48367.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.call(null,atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__48370 = taoensso.encore.swap_val_BANG__STAR_.call(null,atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.call(null,vec__48370,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_48379 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_48379){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.call(null,atom_,k,not_found_48379,new_val);
if(cljs.core._EQ_.call(null,v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_48379))
;
var return_48383 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_48383){
return (function taoensso$encore$swap_in_BANG_(var_args){
var args48380 = [];
var len__29970__auto___48384 = arguments.length;
var i__29971__auto___48385 = (0);
while(true){
if((i__29971__auto___48385 < len__29970__auto___48384)){
args48380.push((arguments[i__29971__auto___48385]));

var G__48386 = (i__29971__auto___48385 + (1));
i__29971__auto___48385 = G__48386;
continue;
} else {
}
break;
}

var G__48382 = args48380.length;
switch (G__48382) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48380.length)].join('')));

}
});})(return_48383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_48383){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_48383,atom_,f);
});})(return_48383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48383){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_48383,atom_,ks,null,f);
});})(return_48383))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48383){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_48383,atom_,ks,not_found,f);
});})(return_48383))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_48391 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_48391){
return (function taoensso$encore$reset_in_BANG_(var_args){
var args48388 = [];
var len__29970__auto___48392 = arguments.length;
var i__29971__auto___48393 = (0);
while(true){
if((i__29971__auto___48393 < len__29970__auto___48392)){
args48388.push((arguments[i__29971__auto___48393]));

var G__48394 = (i__29971__auto___48393 + (1));
i__29971__auto___48393 = G__48394;
continue;
} else {
}
break;
}

var G__48390 = args48388.length;
switch (G__48390) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48388.length)].join('')));

}
});})(return_48391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_48391){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_.call(null,return_48391,atom_,val);
});})(return_48391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48391){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_48391,atom_,ks,null,val);
});})(return_48391))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48391){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_.call(null,return_48391,atom_,ks,not_found,val);
});})(return_48391))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_48399 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_48399){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var args48396 = [];
var len__29970__auto___48400 = arguments.length;
var i__29971__auto___48401 = (0);
while(true){
if((i__29971__auto___48401 < len__29970__auto___48400)){
args48396.push((arguments[i__29971__auto___48401]));

var G__48402 = (i__29971__auto___48401 + (1));
i__29971__auto___48401 = G__48402;
continue;
} else {
}
break;
}

var G__48398 = args48396.length;
switch (G__48398) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48396.length)].join('')));

}
});})(return_48399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_48399){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_.call(null,return_48399,atom_,f);
});})(return_48399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_48399){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_48399,atom_,ks,null,f);
});})(return_48399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_48399){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_.call(null,return_48399,atom_,ks,not_found,f);
});})(return_48399))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__46363__auto__ = taoensso.encore.oget.call(null,taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__46363__auto__)){
var perf = b2__46363__auto__;
var b2__46363__auto____$1 = (function (){var or__28749__auto__ = taoensso.encore.oget.call(null,perf,"now");
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = taoensso.encore.oget.call(null,perf,"mozNow");
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
var or__28749__auto____$2 = taoensso.encore.oget.call(null,perf,"msNow");
if(cljs.core.truth_(or__28749__auto____$2)){
return or__28749__auto____$2;
} else {
var or__28749__auto____$3 = taoensso.encore.oget.call(null,perf,"oNow");
if(cljs.core.truth_(or__28749__auto____$3)){
return or__28749__auto____$3;
} else {
return taoensso.encore.oget.call(null,perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__46363__auto____$1)){
var f = b2__46363__auto____$1;
return ((function (f,b2__46363__auto____$1,perf,b2__46363__auto__){
return (function (){
return ((1000000) * cljs.core.long$.call(null,f.call(perf)));
});
;})(f,b2__46363__auto____$1,perf,b2__46363__auto__))
} else {
return ((function (b2__46363__auto____$1,perf,b2__46363__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__46363__auto____$1,perf,b2__46363__auto__))
}
} else {
return ((function (b2__46363__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__46363__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__48408__delegate = function (xs){
var x1 = cljs.core.first.call(null,xs);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var xn = cljs.core.next.call(null,xs);
var x2 = cljs.core.first.call(null,xn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.vreset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.dissoc.call(null,cljs.core._deref.call(null,cache_),xn));
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,x1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133)))){
var xn = cljs.core.next.call(null,xs);
var v = cljs.core.apply.call(null,f,xn);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xn,v));

return v;
} else {
var v = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.call(null,f,xs);
cljs.core._vreset_BANG_.call(null,cache_,cljs.core.assoc.call(null,cljs.core._deref.call(null,cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__48408 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__48409__i = 0, G__48409__a = new Array(arguments.length -  0);
while (G__48409__i < G__48409__a.length) {G__48409__a[G__48409__i] = arguments[G__48409__i + 0]; ++G__48409__i;}
  xs = new cljs.core.IndexedSeq(G__48409__a,0);
} 
return G__48408__delegate.call(this,xs);};
G__48408.cljs$lang$maxFixedArity = 0;
G__48408.cljs$lang$applyTo = (function (arglist__48410){
var xs = cljs.core.seq(arglist__48410);
return G__48408__delegate(xs);
});
G__48408.cljs$core$IFn$_invoke$arity$variadic = G__48408__delegate;
return G__48408;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__48411__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__28749__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__28749__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__28749__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__28749__auto__,cache_))
,null))]);
}
});})(or__28749__auto__,cache_))
),args);
}
})());
};
var G__48411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48412__i = 0, G__48412__a = new Array(arguments.length -  0);
while (G__48412__i < G__48412__a.length) {G__48412__a[G__48412__i] = arguments[G__48412__i + 0]; ++G__48412__i;}
  args = new cljs.core.IndexedSeq(G__48412__a,0);
} 
return G__48411__delegate.call(this,args);};
G__48411.cljs$lang$maxFixedArity = 0;
G__48411.cljs$lang$applyTo = (function (arglist__48413){
var args = cljs.core.seq(arglist__48413);
return G__48411__delegate(args);
});
G__48411.cljs$core$IFn$_invoke$arity$variadic = G__48411__delegate;
return G__48411;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
})

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
})

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args48414 = [];
var len__29970__auto___48419 = arguments.length;
var i__29971__auto___48420 = (0);
while(true){
if((i__29971__auto___48420 < len__29970__auto___48419)){
args48414.push((arguments[i__29971__auto___48420]));

var G__48421 = (i__29971__auto___48420 + (1));
i__29971__auto___48420 = G__48421;
continue;
} else {
}
break;
}

var G__48416 = args48414.length;
switch (G__48416) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48414.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_.call(null,f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_48423 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48417){if((e48417 instanceof Error)){
var e = e48417;
return e;
} else {
throw e48417;

}
}})();
if((e_48423 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1717,"(pos-int? ttl-ms)",ttl_ms,e_48423,null);
}

var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__48424__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_48425 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_48425);

return true;
})()
){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_48425,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_48425,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_48425,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$.call(null,(function (){var or__28749__auto__ = m;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_48425,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__28749__auto__ = (_QMARK_e == null);
if(or__28749__auto__){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__48424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48426__i = 0, G__48426__a = new Array(arguments.length -  0);
while (G__48426__i < G__48426__a.length) {G__48426__a[G__48426__i] = arguments[G__48426__i + 0]; ++G__48426__i;}
  args = new cljs.core.IndexedSeq(G__48426__a,0);
} 
return G__48424__delegate.call(this,args);};
G__48424.cljs$lang$maxFixedArity = 0;
G__48424.cljs$lang$applyTo = (function (arglist__48427){
var args = cljs.core.seq(arglist__48427);
return G__48424__delegate(args);
});
G__48424.cljs$core$IFn$_invoke$arity$variadic = G__48424__delegate;
return G__48424;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__28749__auto__ = (x == null);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1768,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_48428 = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48418){if((e48418 instanceof Error)){
var e = e48418;
return e;
} else {
throw e48418;

}
}})();
if((e_48428 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1769,"(pos-int? cache-size)",cache_size,e_48428,null);
}

var tick_ = cljs.core.atom.call(null,(0));
var cache_ = cljs.core.atom.call(null,null);
var latch_ = cljs.core.atom.call(null,null);
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__28749__auto__ = ttl_ms;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__48429__delegate = function (args){
var a1 = cljs.core.first.call(null,args);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
var argn = cljs.core.next.call(null,args);
var a2 = cljs.core.first.call(null,argn);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,a2,new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,null);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_48430 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_48430);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.call(null,cache_,((function (latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__28749__auto__ = m;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_48431 = cljs.core.deref.call(null,cache_);
var n_to_gc_48432 = (cljs.core.count.call(null,snapshot_48431) - cache_size__$1);
if((n_to_gc_48432 > (64))){
var ks_to_gc_48433 = taoensso.encore.top.call(null,n_to_gc_48432,((function (snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.call(null,snapshot_48431,k);
return (e.tick_lru + e.tick_lfu);
});})(snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.keys.call(null,snapshot_48431));
cljs.core.swap_BANG_.call(null,cache_,((function (ks_to_gc_48433,snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_48433,snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_48433,snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$.call(null,(function (){var or__28749__auto__ = m;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_48433));
});})(ks_to_gc_48433,snapshot_48431,n_to_gc_48432,latch_48430,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,a1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next.call(null,args):args);
var tick = cljs.core.swap_BANG_.call(null,tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__28749__auto__ = (_QMARK_e == null);
if(or__28749__auto__){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref.call(null,e.delay);
}
};
var G__48429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48434__i = 0, G__48434__a = new Array(arguments.length -  0);
while (G__48434__i < G__48434__a.length) {G__48434__a[G__48434__i] = arguments[G__48434__i + 0]; ++G__48434__i;}
  args = new cljs.core.IndexedSeq(G__48434__a,0);
} 
return G__48429__delegate.call(this,args);};
G__48429.cljs$lang$maxFixedArity = 0;
G__48429.cljs$lang$applyTo = (function (arglist__48435){
var args = cljs.core.seq(arglist__48435);
return G__48429__delegate(args);
});
G__48429.cljs$core$IFn$_invoke$arity$variadic = G__48429__delegate;
return G__48429;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
})

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
})

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
})

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_48454 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48436){if((e48436 instanceof Error)){
var e = e48436;
return e;
} else {
throw e48436;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1869,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_.call(null,ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48437){if((e48437 instanceof Error)){
var e = e48437;
return e;
} else {
throw e48437;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",1869,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_48454){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,((function (limit_spec_48454){
return (function (acc,sid,p__48446){
var vec__48447 = p__48446;
var n = cljs.core.nth.call(null,vec__48447,(0),null);
var ms = cljs.core.nth.call(null,vec__48447,(1),null);
return cljs.core.assoc.call(null,acc,sid,limit_spec_48454.call(null,n,ms));
});})(limit_spec_48454))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return cljs.core.reduce.call(null,((function (i,limit_spec_48454){
return (function (acc,p__48450){
var vec__48451 = p__48450;
var n = cljs.core.nth.call(null,vec__48451,(0),null);
var ms = cljs.core.nth.call(null,vec__48451,(1),null);
var _QMARK_id = cljs.core.nth.call(null,vec__48451,(2),null);
return cljs.core.assoc.call(null,acc,(function (){var or__28749__auto__ = _QMARK_id;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core._vreset_BANG_.call(null,i,((function (or__28749__auto__,vec__48451,n,ms,_QMARK_id,i,limit_spec_48454){
return (function (i__$1){
return (i__$1 + (1));
});})(or__28749__auto__,vec__48451,n,ms,_QMARK_id,i,limit_spec_48454))
.call(null,cljs.core._deref.call(null,i)));
}
})(),limit_spec_48454.call(null,n,ms));
});})(i,limit_spec_48454))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.call(null,"No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_48454))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly.call(null,null)], null);
} else {
var latch_ = cljs.core.atom.call(null,null);
var reqs_ = cljs.core.atom.call(null,null);
var specs__$1 = taoensso.encore.coerce_limit_specs.call(null,specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not.call(null,peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_48455 = null;
if((function (){
cljs.core.reset_BANG_.call(null,latch_,latch_48455);

return true;
})()
){
cljs.core.swap_BANG_.call(null,reqs_,((function (latch_48455,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (latch_48455,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv.call(null,((function (latch_48455,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__46363__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__46363__auto__)){
var s = b2__46363__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.call(null,acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.call(null,acc__$1,sid);
}
});})(latch_48455,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_.call(null,new_entries)){
return cljs.core.dissoc_BANG_.call(null,acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.call(null,acc,rid__$1,new_entries);
}
});})(latch_48455,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$.call(null,(function (){var or__28749__auto__ = reqs;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_48455,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref.call(null,reqs_);
var entries = cljs.core.get.call(null,reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv.call(null,((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__46363__auto__ = cljs.core.get.call(null,specs__$1,sid);
if(cljs.core.truth_(b2__46363__auto__)){
var s = b2__46363__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.call(null,acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__28749__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__46363__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__46363__auto__)){
var h = b2__46363__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__46363__auto__ = cljs.core.deref.call(null,latch_);
if(cljs.core.truth_(b2__46363__auto__)){
var l = b2__46363__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv.call(null,((function (b2__46363__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.call(null,acc,sid,(function (){var b2__46363__auto____$1 = cljs.core.get.call(null,entries,sid);
if(cljs.core.truth_(b2__46363__auto____$1)){
var e = b2__46363__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__46363__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_.call(null,reqs_,cljs.core.assoc.call(null,reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1.call(null,null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1.call(null,req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,req_id,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,reqs_,null);
} else {
cljs.core.swap_BANG_.call(null,reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cmd,new cljs.core.Keyword("rl","peek","rl/peek",-291391771)))){
return f1.call(null,req_id,true);
} else {
throw cljs.core.ex_info.call(null,"Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__48459 = taoensso.encore.limiter_STAR_.call(null,specs);
var _ = cljs.core.nth.call(null,vec__48459,(0),null);
var f = cljs.core.nth.call(null,vec__48459,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args48462 = [];
var len__29970__auto___48468 = arguments.length;
var i__29971__auto___48469 = (0);
while(true){
if((i__29971__auto___48469 < len__29970__auto___48468)){
args48462.push((arguments[i__29971__auto___48469]));

var G__48470 = (i__29971__auto___48469 + (1));
i__29971__auto___48469 = G__48470;
continue;
} else {
}
break;
}

var G__48467 = args48462.length;
switch (G__48467) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__29993__auto__ = (new cljs.core.IndexedSeq(args48462.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29993__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.call(null,str_builder,s);

return cljs.core.reduce.call(null,(function (acc,in$){
return taoensso.encore.sb_append.call(null,acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq48463){
var G__48464 = cljs.core.first.call(null,seq48463);
var seq48463__$1 = cljs.core.next.call(null,seq48463);
var G__48465 = cljs.core.first.call(null,seq48463__$1);
var seq48463__$2 = cljs.core.next.call(null,seq48463__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__48464,G__48465,seq48463__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_.call(null,acc)){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,((taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args48472 = [];
var len__29970__auto___48475 = arguments.length;
var i__29971__auto___48476 = (0);
while(true){
if((i__29971__auto___48476 < len__29970__auto___48475)){
args48472.push((arguments[i__29971__auto___48476]));

var G__48477 = (i__29971__auto___48476 + (1));
i__29971__auto___48476 = G__48477;
continue;
} else {
}
break;
}

var G__48474 = args48472.length;
switch (G__48474) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48472.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__28737__auto__ = separator;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__28737__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args48479 = [];
var len__29970__auto___48482 = arguments.length;
var i__29971__auto___48483 = (0);
while(true){
if((i__29971__auto___48483 < len__29970__auto___48482)){
args48479.push((arguments[i__29971__auto___48483]));

var G__48484 = (i__29971__auto___48483 + (1));
i__29971__auto___48483 = G__48484;
continue;
} else {
}
break;
}

var G__48481 = args48479.length;
switch (G__48481) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48479.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.call(null,s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.call(null,s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var args48486 = [];
var len__29970__auto___48489 = arguments.length;
var i__29971__auto___48490 = (0);
while(true){
if((i__29971__auto___48490 < len__29970__auto___48489)){
args48486.push((arguments[i__29971__auto___48490]));

var G__48491 = (i__29971__auto___48490 + (1));
i__29971__auto___48490 = G__48491;
continue;
} else {
}
break;
}

var G__48488 = args48486.length;
switch (G__48488) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48486.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var args48493 = [];
var len__29970__auto___48496 = arguments.length;
var i__29971__auto___48497 = (0);
while(true){
if((i__29971__auto___48497 < len__29970__auto___48496)){
args48493.push((arguments[i__29971__auto___48497]));

var G__48498 = (i__29971__auto___48497 + (1));
i__29971__auto___48497 = G__48498;
continue;
} else {
}
break;
}

var G__48495 = args48493.length;
switch (G__48495) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48493.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str.call(null,s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("g"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__48500__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__48500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48501__i = 0, G__48501__a = new Array(arguments.length -  0);
while (G__48501__i < G__48501__a.length) {G__48501__a[G__48501__i] = arguments[G__48501__i + 0]; ++G__48501__i;}
  args = new cljs.core.IndexedSeq(G__48501__a,0);
} 
return G__48500__delegate.call(this,args);};
G__48500.cljs$lang$maxFixedArity = 0;
G__48500.cljs$lang$applyTo = (function (arglist__48502){
var args = cljs.core.seq(arglist__48502);
return G__48500__delegate(args);
});
G__48500.cljs$core$IFn$_invoke$arity$variadic = G__48500__delegate;
return G__48500;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid match arg: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__28749__auto__ = fmt;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48505 = arguments.length;
var i__29971__auto___48506 = (0);
while(true){
if((i__29971__auto___48506 < len__29970__auto___48505)){
args__29977__auto__.push((arguments[i__29971__auto___48506]));

var G__48507 = (i__29971__auto___48506 + (1));
i__29971__auto___48506 = G__48507;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq48503){
var G__48504 = cljs.core.first.call(null,seq48503);
var seq48503__$1 = cljs.core.next.call(null,seq48503);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__48504,seq48503__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_.call(null,sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_.call(null,false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_.call(null,true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.call(null,in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_.call(null,in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_.call(null,in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref.call(null,acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref.call(null,acc_empty_QMARK__);
cljs.core.vreset_BANG_.call(null,acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_.call(null,acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__28749__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.call(null,acc,in$__$1);
} else {
taoensso.encore.sb_append.call(null,acc,sep);

return taoensso.encore.sb_append.call(null,acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.call(null),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48509 = arguments.length;
var i__29971__auto___48510 = (0);
while(true){
if((i__29971__auto___48510 < len__29970__auto___48509)){
args__29977__auto__.push((arguments[i__29971__auto___48510]));

var G__48511 = (i__29971__auto___48510 + (1));
i__29971__auto___48510 = G__48511;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once.call(null,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq48508){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48508));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args48512 = [];
var len__29970__auto___48515 = arguments.length;
var i__29971__auto___48516 = (0);
while(true){
if((i__29971__auto___48516 < len__29970__auto___48515)){
args48512.push((arguments[i__29971__auto___48516]));

var G__48517 = (i__29971__auto___48516 + (1));
i__29971__auto___48516 = G__48517;
continue;
} else {
}
break;
}

var G__48514 = args48512.length;
switch (G__48514) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48512.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48520 = arguments.length;
var i__29971__auto___48521 = (0);
while(true){
if((i__29971__auto___48521 < len__29970__auto___48520)){
args__29977__auto__.push((arguments[i__29971__auto___48521]));

var G__48522 = (i__29971__auto___48521 + (1));
i__29971__auto___48521 = G__48522;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_.call(null,in$)){
return cljs.core.reduce.call(null,taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.call(null),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq48519){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48519));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
var sentinel_48528 = {};
var nil__GT_sentinel_48529 = ((function (sentinel_48528){
return (function (x){
if((x == null)){
return sentinel_48528;
} else {
return x;
}
});})(sentinel_48528))
;
var sentinel__GT_nil_48530 = ((function (sentinel_48528,nil__GT_sentinel_48529){
return (function (x){
if((x === sentinel_48528)){
return null;
} else {
return x;
}
});})(sentinel_48528,nil__GT_sentinel_48529))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530){
return (function taoensso$encore$reduce_top(var_args){
var args48525 = [];
var len__29970__auto___48531 = arguments.length;
var i__29971__auto___48532 = (0);
while(true){
if((i__29971__auto___48532 < len__29970__auto___48531)){
args48525.push((arguments[i__29971__auto___48532]));

var G__48533 = (i__29971__auto___48532 + (1));
i__29971__auto___48532 = G__48533;
continue;
} else {
}
break;
}

var G__48527 = args48525.length;
switch (G__48527) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48525.length)].join('')));

}
});})(sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.call(null,n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count.call(null,coll);
var n__$1 = cljs.core.long$.call(null,(function (){var x__29094__auto__ = coll_size;
var y__29095__auto__ = cljs.core.long$.call(null,n);
return ((x__29094__auto__ < y__29095__auto__) ? x__29094__auto__ : y__29095__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.call(null,cljs.core.take.call(null,n__$1),cljs.core.completing.call(null,rf),init,cljs.core.sort_by.call(null,keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_48528,nil__GT_sentinel_48529,sentinel__GT_nil_48530))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var args48535 = [];
var len__29970__auto___48538 = arguments.length;
var i__29971__auto___48539 = (0);
while(true){
if((i__29971__auto___48539 < len__29970__auto___48538)){
args48535.push((arguments[i__29971__auto___48539]));

var G__48540 = (i__29971__auto___48539 + (1));
i__29971__auto___48539 = G__48540;
continue;
} else {
}
break;
}

var G__48537 = args48535.length;
switch (G__48537) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48535.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.call(null,to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.call(null,to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_.call(null,to)){
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$.call(null,to),coll));
} else {
return taoensso.encore.reduce_top.call(null,n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args48542 = [];
var len__29970__auto___48545 = arguments.length;
var i__29971__auto___48546 = (0);
while(true){
if((i__29971__auto___48546 < len__29970__auto___48545)){
args48542.push((arguments[i__29971__auto___48546]));

var G__48547 = (i__29971__auto___48546 + (1));
i__29971__auto___48546 = G__48547;
continue;
} else {
}
break;
}

var G__48544 = args48542.length;
switch (G__48544) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48542.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.call(null,cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48565 = arguments.length;
var i__29971__auto___48566 = (0);
while(true){
if((i__29971__auto___48566 < len__29970__auto___48565)){
args__29977__auto__.push((arguments[i__29971__auto___48566]));

var G__48567 = (i__29971__auto___48566 + (1));
i__29971__auto___48566 = G__48567;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__48562){
var map__48563 = p__48562;
var map__48563__$1 = ((((!((map__48563 == null)))?((((map__48563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48563):map__48563);
var opts = map__48563__$1;
var years = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__48563__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
taoensso.truss.impl.revery_QMARK_.call(null,((function (map__48563,map__48563__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2372,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__48563,map__48563__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts));

return taoensso.encore.round0.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq48561){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48561));
});

taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__48578__delegate = function (xs){
var b2__46363__auto__ = console.log;
if(cljs.core.truth_(b2__46363__auto__)){
var f = b2__46363__auto__;
return f.apply(console,cljs.core.into_array.call(null,xs));
} else {
return null;
}
};
var G__48578 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__48579__i = 0, G__48579__a = new Array(arguments.length -  0);
while (G__48579__i < G__48579__a.length) {G__48579__a[G__48579__i] = arguments[G__48579__i + 0]; ++G__48579__i;}
  xs = new cljs.core.IndexedSeq(G__48579__a,0);
} 
return G__48578__delegate.call(this,xs);};
G__48578.cljs$lang$maxFixedArity = 0;
G__48578.cljs$lang$applyTo = (function (arglist__48580){
var xs = cljs.core.seq(arglist__48580);
return G__48578__delegate(xs);
});
G__48578.cljs$core$IFn$_invoke$arity$variadic = G__48578__delegate;
return G__48578;
})()
:(function() { 
var G__48581__delegate = function (xs){
return null;
};
var G__48581 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__48582__i = 0, G__48582__a = new Array(arguments.length -  0);
while (G__48582__i < G__48582__a.length) {G__48582__a[G__48582__i] = arguments[G__48582__i + 0]; ++G__48582__i;}
  xs = new cljs.core.IndexedSeq(G__48582__a,0);
} 
return G__48581__delegate.call(this,xs);};
G__48581.cljs$lang$maxFixedArity = 0;
G__48581.cljs$lang$applyTo = (function (arglist__48583){
var xs = cljs.core.seq(arglist__48583);
return G__48581__delegate(xs);
});
G__48581.cljs$core$IFn$_invoke$arity$variadic = G__48581__delegate;
return G__48581;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48584 = arguments.length;
var i__29971__auto___48585 = (0);
while(true){
if((i__29971__auto___48585 < len__29970__auto___48584)){
args__29977__auto__.push((arguments[i__29971__auto___48585]));

var G__48586 = (i__29971__auto___48585 + (1));
i__29971__auto___48585 = G__48586;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq48572){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48572));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48587 = arguments.length;
var i__29971__auto___48588 = (0);
while(true){
if((i__29971__auto___48588 < len__29970__auto___48587)){
args__29977__auto__.push((arguments[i__29971__auto___48588]));

var G__48589 = (i__29971__auto___48588 + (1));
i__29971__auto___48588 = G__48589;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq48573){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48573));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48590 = arguments.length;
var i__29971__auto___48591 = (0);
while(true){
if((i__29971__auto___48591 < len__29970__auto___48590)){
args__29977__auto__.push((arguments[i__29971__auto___48591]));

var G__48592 = (i__29971__auto___48591 + (1));
i__29971__auto___48591 = G__48592;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq48574){
var G__48575 = cljs.core.first.call(null,seq48574);
var seq48574__$1 = cljs.core.next.call(null,seq48574);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__48575,seq48574__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48593 = arguments.length;
var i__29971__auto___48594 = (0);
while(true){
if((i__29971__auto___48594 < len__29970__auto___48593)){
args__29977__auto__.push((arguments[i__29971__auto___48594]));

var G__48595 = (i__29971__auto___48594 + (1));
i__29971__auto___48594 = G__48595;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq48576){
var G__48577 = cljs.core.first.call(null,seq48576);
var seq48576__$1 = cljs.core.next.call(null,seq48576);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__48577,seq48576__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__46363__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__46363__auto__)){
var js_win = b2__46363__auto__;
var b2__46363__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__46363__auto____$1)){
var loc = b2__46363__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq.call(null,params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.call(null,params);
var uri_with_query = ((clojure.string.blank_QMARK_.call(null,qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_(taoensso.encore.js_form_data_QMARK_.call(null,params))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_48608 = (function (){try{if(cljs.core.map_QMARK_.call(null,params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e48596){if((e48596 instanceof Error)){
var e = e48596;
return e;
} else {
throw e48596;

}
}})();
if((e_48608 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2675,"(map? params)",params,e_48608,null);
}

if(cljs.core.truth_((function (){var and__28737__auto__ = typeof FormData !== 'undefined';
if(and__28737__auto__){
return taoensso.encore.rsome.call(null,taoensso.encore.js_file_QMARK_,cljs.core.vals.call(null,params));
} else {
return and__28737__auto__;
}
})())){
var form_data = (new FormData());
var seq__48597_48609 = cljs.core.seq.call(null,params);
var chunk__48598_48610 = null;
var count__48599_48611 = (0);
var i__48600_48612 = (0);
while(true){
if((i__48600_48612 < count__48599_48611)){
var vec__48601_48613 = cljs.core._nth.call(null,chunk__48598_48610,i__48600_48612);
var k_48614 = cljs.core.nth.call(null,vec__48601_48613,(0),null);
var v_48615 = cljs.core.nth.call(null,vec__48601_48613,(1),null);
form_data.append(cljs.core.name.call(null,k_48614),v_48615);

var G__48616 = seq__48597_48609;
var G__48617 = chunk__48598_48610;
var G__48618 = count__48599_48611;
var G__48619 = (i__48600_48612 + (1));
seq__48597_48609 = G__48616;
chunk__48598_48610 = G__48617;
count__48599_48611 = G__48618;
i__48600_48612 = G__48619;
continue;
} else {
var temp__6738__auto___48620 = cljs.core.seq.call(null,seq__48597_48609);
if(temp__6738__auto___48620){
var seq__48597_48621__$1 = temp__6738__auto___48620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48597_48621__$1)){
var c__29660__auto___48622 = cljs.core.chunk_first.call(null,seq__48597_48621__$1);
var G__48623 = cljs.core.chunk_rest.call(null,seq__48597_48621__$1);
var G__48624 = c__29660__auto___48622;
var G__48625 = cljs.core.count.call(null,c__29660__auto___48622);
var G__48626 = (0);
seq__48597_48609 = G__48623;
chunk__48598_48610 = G__48624;
count__48599_48611 = G__48625;
i__48600_48612 = G__48626;
continue;
} else {
var vec__48604_48627 = cljs.core.first.call(null,seq__48597_48621__$1);
var k_48628 = cljs.core.nth.call(null,vec__48604_48627,(0),null);
var v_48629 = cljs.core.nth.call(null,vec__48604_48627,(1),null);
form_data.append(cljs.core.name.call(null,k_48628),v_48629);

var G__48630 = cljs.core.next.call(null,seq__48597_48621__$1);
var G__48631 = null;
var G__48632 = (0);
var G__48633 = (0);
seq__48597_48609 = G__48630;
chunk__48598_48610 = G__48631;
count__48599_48611 = G__48632;
i__48600_48612 = G__48633;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.call(null,params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__28749__auto__ = (x == null);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,x);
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2687,"([:or nil? map?] params)",params,null,null);
}

var G__48607 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__48607) {
case "get":
return url_encode.call(null,uri,params);

break;
case "post":
return adaptive_encode.call(null,uri,params);

break;
case "put":
return adaptive_encode.call(null,uri,params);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__48636,callback_fn){
var map__48655 = p__48636;
var map__48655__$1 = ((((!((map__48655 == null)))?((((map__48655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48655):map__48655);
var opts = map__48655__$1;
var method = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__48655__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_(((function (map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__28749__auto__ = (x == null);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",2719,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__46363__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(b2__46363__auto__)){
var xhr = b2__46363__auto__;
try{var timeout_ms__$1 = (function (){var or__28749__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__48661 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__48661) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')));

}
})();
var vec__48658 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params);
var xhr_uri = cljs.core.nth.call(null,vec__48658,(0),null);
var xhr__QMARK_data = cljs.core.nth.call(null,vec__48658,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys.call(null,((function (timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__48635_SHARP_){
return clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__48635_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.call(null,headers__$1,"x-requested-with",cljs.core.get.call(null,headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js.call(null,headers__$2);
})();
var G__48662_48674 = xhr;
goog.events.listenOnce(G__48662_48674,goog.net.EventType.READY,((function (G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);

goog.events.listenOnce(G__48662_48674,goog.net.EventType.COMPLETE,((function (G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__48668 = ((cljs.core.not_EQ_.call(null,_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_.call(null,cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_.call(null,"/edn"))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/json"))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(match_QMARK_.call(null,"/xml"))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__48672 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__48672) {
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp_type__$1)].join('')));

}
}catch (e48671){if((e48671 instanceof Error)){
var _e = e48671;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e48671;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.call(null,vec__48668,(0),null);
var _QMARK_content_type = cljs.core.nth.call(null,vec__48668,(1),null);
var _QMARK_content = cljs.core.nth.call(null,vec__48668,(2),null);
return callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null));
});})(G__48662_48674,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);


var b2__46363__auto___48676__$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__46363__auto___48676__$1)){
var pf_48677 = b2__46363__auto___48676__$1;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_48677,b2__46363__auto___48676__$1,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__28737__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__28737__auto__;
}
})())?(loaded / total):null);
return pf_48677.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_48677,b2__46363__auto___48676__$1,timeout_ms__$1,xhr_method,vec__48658,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__46363__auto__,map__48655,map__48655__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
);
} else {
}

xhr.setTimeoutInterval((function (){var or__28749__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e48657){if((e48657 instanceof Error)){
var e = e48657;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null));

return null;
} else {
throw e48657;

}
}} else {
callback_fn.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48684 = arguments.length;
var i__29971__auto___48685 = (0);
while(true){
if((i__29971__auto___48685 < len__29970__auto___48684)){
args__29977__auto__.push((arguments[i__29971__auto___48685]));

var G__48686 = (i__29971__auto___48685 + (1));
i__29971__auto___48685 = G__48686;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__48680){
var vec__48681 = p__48680;
var encoding = cljs.core.nth.call(null,vec__48681,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq48678){
var G__48679 = cljs.core.first.call(null,seq48678);
var seq48678__$1 = cljs.core.next.call(null,seq48678);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__48679,seq48678__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,taoensso.encore.as_qname.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode.call(null,(function (){var or__28749__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__29611__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__48703(s__48704){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__48704__$1 = s__48704;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__48704__$1);
if(temp__6738__auto__){
var s__48704__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48704__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__48704__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__48706 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__48705 = (0);
while(true){
if((i__48705 < size__29610__auto__)){
var vec__48713 = cljs.core._nth.call(null,c__29609__auto__,i__48705);
var k = cljs.core.nth.call(null,vec__48713,(0),null);
var v = cljs.core.nth.call(null,vec__48713,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
cljs.core.chunk_append.call(null,b__48706,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__28749__auto__ = cljs.core.seq.call(null,v);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__48719 = (i__48705 + (1));
i__48705 = G__48719;
continue;
} else {
var G__48720 = (i__48705 + (1));
i__48705 = G__48720;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48706),taoensso$encore$format_query_string_$_iter__48703.call(null,cljs.core.chunk_rest.call(null,s__48704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48706),null);
}
} else {
var vec__48716 = cljs.core.first.call(null,s__48704__$2);
var k = cljs.core.nth.call(null,vec__48716,(0),null);
var v = cljs.core.nth.call(null,vec__48716,(1),null);
if(taoensso.encore.some_QMARK_.call(null,v)){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__28749__auto__ = cljs.core.seq.call(null,v);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__48703.call(null,cljs.core.rest.call(null,s__48704__$2)));
} else {
var G__48721 = cljs.core.rest.call(null,s__48704__$2);
s__48704__$1 = G__48721;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__29611__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var b2__46363__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(b2__46363__auto__)){
var cur = b2__46363__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48731 = arguments.length;
var i__29971__auto___48732 = (0);
while(true){
if((i__29971__auto___48732 < len__29970__auto___48731)){
args__29977__auto__.push((arguments[i__29971__auto___48732]));

var G__48733 = (i__29971__auto___48732 + (1));
i__29971__auto___48732 = G__48733;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__48724){
var vec__48725 = p__48724;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__48725,(0),null);
var encoding = cljs.core.nth.call(null,vec__48725,(1),null);
if((clojure.string.blank_QMARK_.call(null,s)) || (!(taoensso.encore.str_contains_QMARK_.call(null,s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?cljs.core.subs.call(null,s,(1)):s);
var m = cljs.core.reduce.call(null,((function (s__$1,vec__48725,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__46363__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(b2__46363__auto__)){
var vec__48728 = b2__46363__auto__;
var k = cljs.core.nth.call(null,vec__48728,(0),null);
var v = cljs.core.nth.call(null,vec__48728,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__48725,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq48722){
var G__48723 = cljs.core.first.call(null,seq48722);
var seq48722__$1 = cljs.core.next.call(null,seq48722);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__48723,seq48722__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__48737 = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__48737,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__48737,(1),null);
var qmap = taoensso.encore.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys.call(null,cljs.core.keyword,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.map_keys.call(null,cljs.core.keyword,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var b2__46363__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__46363__auto__)){
var qstr = b2__46363__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_.call(null,(function() { 
var G__48740__delegate = function (args){
throw cljs.core.ex_info.call(null,"Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__48740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48741__i = 0, G__48741__a = new Array(arguments.length -  0);
while (G__48741__i < G__48741__a.length) {G__48741__a[G__48741__i] = arguments[G__48741__i + 0]; ++G__48741__i;}
  args = new cljs.core.IndexedSeq(G__48741__a,0);
} 
return G__48740__delegate.call(this,args);};
G__48740.cljs$lang$maxFixedArity = 0;
G__48740.cljs$lang$applyTo = (function (arglist__48742){
var args = cljs.core.seq(arglist__48742);
return G__48740__delegate(args);
});
G__48740.cljs$core$IFn$_invoke$arity$variadic = G__48740__delegate;
return G__48740;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_.call(null,f)){
return f;
} else {
throw cljs.core.ex_info.call(null,"Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_.call(null,x)){
return (function (ns_str){
return cljs.core.re_find.call(null,x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_.call(null,x,"*")){
var re = cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find.call(null,re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.call(null,ns_str,x);
});
}
} else {
throw cljs.core.ex_info.call(null,"Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_.call(null,x)){
return taoensso$encore$self.call(null,new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.set_QMARK_.call(null,x))){
return taoensso$encore$self.call(null,x,null);
} else {
if(cljs.core._EQ_.call(null,x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1.call(null,x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(match_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq.call(null,whitelist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,whitelist);
var vec__48751 = match_fns;
var seq__48752 = cljs.core.seq.call(null,vec__48751);
var first__48753 = cljs.core.first.call(null,seq__48752);
var seq__48752__$1 = cljs.core.next.call(null,seq__48752);
var m1 = first__48753;
var mn = seq__48752__$1;
if(mn){
return ((function (match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome.call(null,((function (match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1){
return (function (p1__48743_SHARP_){
return p1__48743_SHARP_.call(null,ns_str);
});})(match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1){
return (function (ns_str){
return m1.call(null,ns_str);
});
;})(match_fns,vec__48751,seq__48752,first__48753,seq__48752__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq.call(null,blacklist))?(function (){var match_fns = cljs.core.mapv.call(null,compile1,blacklist);
var vec__48754 = match_fns;
var seq__48755 = cljs.core.seq.call(null,vec__48754);
var first__48756 = cljs.core.first.call(null,seq__48755);
var seq__48755__$1 = cljs.core.next.call(null,seq__48755);
var m1 = first__48756;
var mn = seq__48755__$1;
if(mn){
return ((function (match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,taoensso.encore.rsome.call(null,((function (match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1){
return (function (p1__48744_SHARP_){
return p1__48744_SHARP_.call(null,ns_str);
});})(match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not.call(null,m1.call(null,ns_str));
});
;})(match_fns,vec__48754,seq__48755,first__48756,seq__48755__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__28737__auto__ = white;
if(cljs.core.truth_(and__28737__auto__)){
return black;
} else {
return and__28737__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_(white.call(null,ns_str))){
if(cljs.core.truth_(black.call(null,ns_str))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(white.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_(black.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('')))){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_,msecs,f);
} else {
var m__29468__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_,msecs,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
})
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref.call(null,result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result.call(null,cljs.core.deref.call(null,self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_pending);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.deref.call(null,self__.result__),taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_.call(null,self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_done_QMARK_.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return taoensso.encore.tf_poll.call(null,t__$1);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var args48761 = [];
var len__29970__auto___48764 = arguments.length;
var i__29971__auto___48765 = (0);
while(true){
if((i__29971__auto___48765 < len__29970__auto___48764)){
args48761.push((arguments[i__29971__auto___48765]));

var G__48766 = (i__29971__auto___48765 + (1));
i__29971__auto___48765 = G__48766;
continue;
} else {
}
break;
}

var G__48763 = args48761.length;
switch (G__48763) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48761.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.call(null,taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$.call(null,msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.call(null,taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return f.call(null);
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,result__,taoensso.encore._tout_pending,result_))){
return cljs.core.deref.call(null,result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_48768 = cljs.core.force.call(null,impl_);
taoensso.encore._schedule_timeout.call(null,impl_48768,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__48770){
var map__48773 = p__48770;
var map__48773__$1 = ((((!((map__48773 == null)))?((((map__48773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48773):map__48773);
var before = cljs.core.get.call(null,map__48773__$1,new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Symbol(null,"do","do",1686842252,null));
var after = cljs.core.get.call(null,map__48773__$1,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Symbol(null,"do","do",1686842252,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29683__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__48769__auto__","f__48769__auto__",2089656061,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})(),(function (){var x__29683__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29683__auto__ = before;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})(),(function (){var x__29683__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f__48769__auto__","f__48769__auto__",2089656061,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})(),(function (){var x__29683__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29683__auto__ = after;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto__);
})())));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.call(null,cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.call(null,taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48907 = arguments.length;
var i__29971__auto___48908 = (0);
while(true){
if((i__29971__auto___48908 < len__29970__auto___48907)){
args__29977__auto__.push((arguments[i__29971__auto___48908]));

var G__48909 = (i__29971__auto___48908 + (1));
i__29971__auto___48908 = G__48909;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__48786){
var vec__48787 = p__48786;
var type = cljs.core.nth.call(null,vec__48787,(0),null);
var nplaces = cljs.core.nth.call(null,vec__48787,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__28749__auto__ = type;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq48784){
var G__48785 = cljs.core.first.call(null,seq48784);
var seq48784__$1 = cljs.core.next.call(null,seq48784);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__48785,seq48784__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args48790 = [];
var len__29970__auto___48910 = arguments.length;
var i__29971__auto___48911 = (0);
while(true){
if((i__29971__auto___48911 < len__29970__auto___48910)){
args48790.push((arguments[i__29971__auto___48911]));

var G__48912 = (i__29971__auto___48911 + (1));
i__29971__auto___48911 = G__48912;
continue;
} else {
}
break;
}

var G__48792 = args48790.length;
switch (G__48792) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48790.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.call(null,x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.call(null,signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48914 = arguments.length;
var i__29971__auto___48915 = (0);
while(true){
if((i__29971__auto___48915 < len__29970__auto___48914)){
args__29977__auto__.push((arguments[i__29971__auto___48915]));

var G__48916 = (i__29971__auto___48915 + (1));
i__29971__auto___48915 = G__48916;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once.call(null,sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq48793){
var G__48794 = cljs.core.first.call(null,seq48793);
var seq48793__$1 = cljs.core.next.call(null,seq48793);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__48794,seq48793__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome.call(null,(function (p__48802){
var vec__48803 = p__48802;
var _ = cljs.core.nth.call(null,vec__48803,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__48803,(1),null);
var id = cljs.core.nth.call(null,vec__48803,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter.call(null,specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__48917__delegate = function (args){
var b2__46363__auto__ = cljs.core.apply.call(null,lfn,args);
if(cljs.core.truth_(b2__46363__auto__)){
var vec__48806 = b2__46363__auto__;
var worst_sid = cljs.core.nth.call(null,vec__48806,(0),null);
var backoff_ms = cljs.core.nth.call(null,vec__48806,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__48917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48918__i = 0, G__48918__a = new Array(arguments.length -  0);
while (G__48918__i < G__48918__a.length) {G__48918__a[G__48918__i] = arguments[G__48918__i + 0]; ++G__48918__i;}
  args = new cljs.core.IndexedSeq(G__48918__a,0);
} 
return G__48917__delegate.call(this,args);};
G__48917.cljs$lang$maxFixedArity = 0;
G__48917.cljs$lang$applyTo = (function (arglist__48919){
var args = cljs.core.seq(arglist__48919);
return G__48917__delegate(args);
});
G__48917.cljs$core$IFn$_invoke$arity$variadic = G__48917__delegate;
return G__48917;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__48920__delegate = function (args){
var b2__46363__auto__ = rl.call(null);
if(cljs.core.truth_(b2__46363__auto__)){
var backoff = b2__46363__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__48920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48921__i = 0, G__48921__a = new Array(arguments.length -  0);
while (G__48921__i < G__48921__a.length) {G__48921__a[G__48921__i] = arguments[G__48921__i + 0]; ++G__48921__i;}
  args = new cljs.core.IndexedSeq(G__48921__a,0);
} 
return G__48920__delegate.call(this,args);};
G__48920.cljs$lang$maxFixedArity = 0;
G__48920.cljs$lang$applyTo = (function (arglist__48922){
var args = cljs.core.seq(arglist__48922);
return G__48920__delegate(args);
});
G__48920.cljs$core$IFn$_invoke$arity$variadic = G__48920__delegate;
return G__48920;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__48923__delegate = function (args){
var b2__46363__auto__ = rl.call(null);
if(cljs.core.truth_(b2__46363__auto__)){
var backoff_ms = b2__46363__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__48923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48924__i = 0, G__48924__a = new Array(arguments.length -  0);
while (G__48924__i < G__48924__a.length) {G__48924__a[G__48924__i] = arguments[G__48924__i + 0]; ++G__48924__i;}
  args = new cljs.core.IndexedSeq(G__48924__a,0);
} 
return G__48923__delegate.call(this,args);};
G__48923.cljs$lang$maxFixedArity = 0;
G__48923.cljs$lang$applyTo = (function (arglist__48925){
var args = cljs.core.seq(arglist__48925);
return G__48923__delegate(args);
});
G__48923.cljs$core$IFn$_invoke$arity$variadic = G__48923__delegate;
return G__48923;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48926 = arguments.length;
var i__29971__auto___48927 = (0);
while(true){
if((i__29971__auto___48927 < len__29970__auto___48926)){
args__29977__auto__.push((arguments[i__29971__auto___48927]));

var G__48928 = (i__29971__auto___48927 + (1));
i__29971__auto___48927 = G__48928;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__48811){
var vec__48812 = p__48811;
var nattempt = cljs.core.nth.call(null,vec__48812,(0),null);
var b2__46363__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__46363__auto__)){
var js_win = b2__46363__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__28749__auto__ = nattempt;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq48809){
var G__48810 = cljs.core.first.call(null,seq48809);
var seq48809__$1 = cljs.core.next.call(null,seq48809);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48810,seq48809__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48929 = arguments.length;
var i__29971__auto___48930 = (0);
while(true){
if((i__29971__auto___48930 < len__29970__auto___48929)){
args__29977__auto__.push((arguments[i__29971__auto___48930]));

var G__48931 = (i__29971__auto___48930 + (1));
i__29971__auto___48930 = G__48931;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq48815){
var G__48816 = cljs.core.first.call(null,seq48815);
var seq48815__$1 = cljs.core.next.call(null,seq48815);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__48816,seq48815__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48932 = arguments.length;
var i__29971__auto___48933 = (0);
while(true){
if((i__29971__auto___48933 < len__29970__auto___48932)){
args__29977__auto__.push((arguments[i__29971__auto___48933]));

var G__48934 = (i__29971__auto___48933 + (1));
i__29971__auto___48933 = G__48934;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq48817){
var G__48818 = cljs.core.first.call(null,seq48817);
var seq48817__$1 = cljs.core.next.call(null,seq48817);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__48818,seq48817__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48935 = arguments.length;
var i__29971__auto___48936 = (0);
while(true){
if((i__29971__auto___48936 < len__29970__auto___48935)){
args__29977__auto__.push((arguments[i__29971__auto___48936]));

var G__48937 = (i__29971__auto___48936 + (1));
i__29971__auto___48936 = G__48937;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq48819){
var G__48820 = cljs.core.first.call(null,seq48819);
var seq48819__$1 = cljs.core.next.call(null,seq48819);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__48820,seq48819__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48938 = arguments.length;
var i__29971__auto___48939 = (0);
while(true){
if((i__29971__auto___48939 < len__29970__auto___48938)){
args__29977__auto__.push((arguments[i__29971__auto___48939]));

var G__48940 = (i__29971__auto___48939 + (1));
i__29971__auto___48939 = G__48940;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("WARN: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq48821){
var G__48822 = cljs.core.first.call(null,seq48821);
var seq48821__$1 = cljs.core.next.call(null,seq48821);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__48822,seq48821__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48941 = arguments.length;
var i__29971__auto___48942 = (0);
while(true){
if((i__29971__auto___48942 < len__29970__auto___48941)){
args__29977__auto__.push((arguments[i__29971__auto___48942]));

var G__48943 = (i__29971__auto___48942 + (1));
i__29971__auto___48942 = G__48943;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq48823){
var G__48824 = cljs.core.first.call(null,seq48823);
var seq48823__$1 = cljs.core.next.call(null,seq48823);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__48824,seq48823__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48944 = arguments.length;
var i__29971__auto___48945 = (0);
while(true){
if((i__29971__auto___48945 < len__29970__auto___48944)){
args__29977__auto__.push((arguments[i__29971__auto___48945]));

var G__48946 = (i__29971__auto___48945 + (1));
i__29971__auto___48945 = G__48946;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FATAL: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq48825){
var G__48826 = cljs.core.first.call(null,seq48825);
var seq48825__$1 = cljs.core.next.call(null,seq48825);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__48826,seq48825__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48947 = arguments.length;
var i__29971__auto___48948 = (0);
while(true){
if((i__29971__auto___48948 < len__29970__auto___48947)){
args__29977__auto__.push((arguments[i__29971__auto___48948]));

var G__48949 = (i__29971__auto___48948 + (1));
i__29971__auto___48948 = G__48949;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq48827){
var G__48828 = cljs.core.first.call(null,seq48827);
var seq48827__$1 = cljs.core.next.call(null,seq48827);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__48828,seq48827__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48950 = arguments.length;
var i__29971__auto___48951 = (0);
while(true){
if((i__29971__auto___48951 < len__29970__auto___48950)){
args__29977__auto__.push((arguments[i__29971__auto___48951]));

var G__48952 = (i__29971__auto___48951 + (1));
i__29971__auto___48951 = G__48952;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__48831){
var vec__48832 = p__48831;
var _QMARK_comparator = cljs.core.nth.call(null,vec__48832,(0),null);
var comparator = (function (){var or__28749__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__48832,_QMARK_comparator){
return (function (p1__48775_SHARP_,p2__48776_SHARP_){
if((comparator.call(null,p1__48775_SHARP_,p2__48776_SHARP_) > (0))){
return p2__48776_SHARP_;
} else {
return p1__48775_SHARP_;
}
});})(comparator,vec__48832,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq48829){
var G__48830 = cljs.core.first.call(null,seq48829);
var seq48829__$1 = cljs.core.next.call(null,seq48829);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__48830,seq48829__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48953 = arguments.length;
var i__29971__auto___48954 = (0);
while(true){
if((i__29971__auto___48954 < len__29970__auto___48953)){
args__29977__auto__.push((arguments[i__29971__auto___48954]));

var G__48955 = (i__29971__auto___48954 + (1));
i__29971__auto___48954 = G__48955;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__48837){
var vec__48838 = p__48837;
var _QMARK_comparator = cljs.core.nth.call(null,vec__48838,(0),null);
var comparator = (function (){var or__28749__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__48838,_QMARK_comparator){
return (function (p1__48777_SHARP_,p2__48778_SHARP_){
if((comparator.call(null,p1__48777_SHARP_,p2__48778_SHARP_) < (0))){
return p2__48778_SHARP_;
} else {
return p1__48777_SHARP_;
}
});})(comparator,vec__48838,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq48835){
var G__48836 = cljs.core.first.call(null,seq48835);
var seq48835__$1 = cljs.core.next.call(null,seq48835);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__48836,seq48835__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__28749__auto__ = x;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__48853,seen__$1){
while(true){
var vec__48854 = p__48853;
var v = cljs.core.nth.call(null,vec__48854,(0),null);
var xs__$1 = vec__48854;
var b2__46363__auto__ = cljs.core.seq.call(null,xs__$1);
if(b2__46363__auto__){
var s = b2__46363__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__48956 = cljs.core.rest.call(null,s);
var G__48957 = seen__$1;
p__48853 = G__48956;
seen__$1 = G__48957;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args48857 = [];
var len__29970__auto___48958 = arguments.length;
var i__29971__auto___48959 = (0);
while(true){
if((i__29971__auto___48959 < len__29970__auto___48958)){
args48857.push((arguments[i__29971__auto___48959]));

var G__48960 = (i__29971__auto___48959 + (1));
i__29971__auto___48959 = G__48960;
continue;
} else {
}
break;
}

var G__48859 = args48857.length;
switch (G__48859) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48857.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__48860,in$){
var vec__48861 = p__48860;
var v = cljs.core.nth.call(null,vec__48861,(0),null);
var seen = cljs.core.nth.call(null,vec__48861,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(cljs.core.contains_QMARK_.call(null,seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48962 = arguments.length;
var i__29971__auto___48963 = (0);
while(true){
if((i__29971__auto___48963 < len__29970__auto___48962)){
args__29977__auto__.push((arguments[i__29971__auto___48963]));

var G__48964 = (i__29971__auto___48963 + (1));
i__29971__auto___48963 = G__48964;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__48866){
var vec__48867 = p__48866;
var kf = cljs.core.nth.call(null,vec__48867,(0),null);
var vf = cljs.core.nth.call(null,vec__48867,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__48867,kf,vf){
return (function (_,v){
return v;
});})(vec__48867,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__48867,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__48867,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__48867,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__48867,kf,vf))
:kf));
return cljs.core.persistent_BANG_.call(null,taoensso.encore.reduce_kvs.call(null,((function (vf__$1,kf__$1,vec__48867,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.call(null,m,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1,vec__48867,kf,vf))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq48864){
var G__48865 = cljs.core.first.call(null,seq48864);
var seq48864__$1 = cljs.core.next.call(null,seq48864);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__48865,seq48864__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys.call(null,cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48965 = arguments.length;
var i__29971__auto___48966 = (0);
while(true){
if((i__29971__auto___48966 < len__29970__auto___48965)){
args__29977__auto__.push((arguments[i__29971__auto___48966]));

var G__48967 = (i__29971__auto___48966 + (1));
i__29971__auto___48966 = G__48967;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref.call(null,taoensso.encore._swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
} else {
return cljs.core.apply.call(null,f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq48870){
var G__48871 = cljs.core.first.call(null,seq48870);
var seq48870__$1 = cljs.core.next.call(null,seq48870);
var G__48872 = cljs.core.first.call(null,seq48870__$1);
var seq48870__$2 = cljs.core.next.call(null,seq48870__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__48871,G__48872,seq48870__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__29094__auto__ = signed_idx;
var y__29095__auto__ = max_idx;
return ((x__29094__auto__ < y__29095__auto__) ? x__29094__auto__ : y__29095__auto__);
} else {
var x__29087__auto__ = (0);
var y__29088__auto__ = (signed_idx + max_idx);
return ((x__29087__auto__ > y__29088__auto__) ? x__29087__auto__ : y__29088__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48968 = arguments.length;
var i__29971__auto___48969 = (0);
while(true){
if((i__29971__auto___48969 < len__29970__auto___48968)){
args__29977__auto__.push((arguments[i__29971__auto___48969]));

var G__48970 = (i__29971__auto___48969 + (1));
i__29971__auto___48969 = G__48970;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__48876){
var map__48877 = p__48876;
var map__48877__$1 = ((((!((map__48877 == null)))?((((map__48877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48877):map__48877);
var max_len = cljs.core.get.call(null,map__48877__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__48877__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__46819__auto__ = (start_idx_STAR_ + max_len);
var n2__46820__auto__ = xlen;
if((n1__46819__auto__ > n2__46820__auto__)){
return n2__46820__auto__;
} else {
return n1__46819__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq48873){
var G__48874 = cljs.core.first.call(null,seq48873);
var seq48873__$1 = cljs.core.next.call(null,seq48873);
var G__48875 = cljs.core.first.call(null,seq48873__$1);
var seq48873__$2 = cljs.core.next.call(null,seq48873__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__48874,G__48875,seq48873__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48971 = arguments.length;
var i__29971__auto___48972 = (0);
while(true){
if((i__29971__auto___48972 < len__29970__auto___48971)){
args__29977__auto__.push((arguments[i__29971__auto___48972]));

var G__48973 = (i__29971__auto___48972 + (1));
i__29971__auto___48972 = G__48973;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__48882){
var vec__48883 = p__48882;
var _QMARK_max_len = cljs.core.nth.call(null,vec__48883,(0),null);
var vec__48886 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__48886,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__48886,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq48879){
var G__48880 = cljs.core.first.call(null,seq48879);
var seq48879__$1 = cljs.core.next.call(null,seq48879);
var G__48881 = cljs.core.first.call(null,seq48879__$1);
var seq48879__$2 = cljs.core.next.call(null,seq48879__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__48880,G__48881,seq48879__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48974 = arguments.length;
var i__29971__auto___48975 = (0);
while(true){
if((i__29971__auto___48975 < len__29970__auto___48974)){
args__29977__auto__.push((arguments[i__29971__auto___48975]));

var G__48976 = (i__29971__auto___48975 + (1));
i__29971__auto___48975 = G__48976;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__48892){
var vec__48893 = p__48892;
var _QMARK_max_len = cljs.core.nth.call(null,vec__48893,(0),null);
var vec__48896 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__48896,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__48896,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq48889){
var G__48890 = cljs.core.first.call(null,seq48889);
var seq48889__$1 = cljs.core.next.call(null,seq48889);
var G__48891 = cljs.core.first.call(null,seq48889__$1);
var seq48889__$2 = cljs.core.next.call(null,seq48889__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__48890,G__48891,seq48889__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__48904 = coll;
var c1 = cljs.core.nth.call(null,vec__48904,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__48977 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__48978 = cljs.core.next.call(null,ks__$1);
var G__48979 = cljs.core.next.call(null,vs__$1);
m = G__48977;
ks__$1 = G__48978;
vs__$1 = G__48979;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__29977__auto__ = [];
var len__29970__auto___48980 = arguments.length;
var i__29971__auto___48981 = (0);
while(true){
if((i__29971__auto___48981 < len__29970__auto___48980)){
args__29977__auto__.push((arguments[i__29971__auto___48981]));

var G__48982 = (i__29971__auto___48981 + (1));
i__29971__auto___48981 = G__48982;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.call(null,(function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__48781 = _QMARK_op;
var type = cljs.core.nth.call(null,vec__48781,(0),null);
var ks = cljs.core.nth.call(null,vec__48781,(1),null);
var valf = cljs.core.nth.call(null,vec__48781,(2),null);
var f = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"reset","reset",-800929946)))?((function (vec__48781,type,ks,valf){
return (function (_){
return valf;
});})(vec__48781,type,ks,valf))
:valf);
return taoensso.encore.update_in.call(null,m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq48779){
var G__48780 = cljs.core.first.call(null,seq48779);
var seq48779__$1 = cljs.core.next.call(null,seq48779);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__48780,seq48779__$1);
});


//# sourceMappingURL=encore.js.map