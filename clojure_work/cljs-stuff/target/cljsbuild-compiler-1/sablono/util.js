// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null)))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__7072__auto__ = (((x == null))?null:x);
var m__7073__auto__ = (sablono.util.to_str[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__7073__auto__.call(null,x));
} else {
var m__7073__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__7073__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null)))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__7072__auto__ = (((x == null))?null:x);
var m__7073__auto__ = (sablono.util.to_uri[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__7073__auto__.call(null,x));
} else {
var m__7073__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__7073__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17518 = arguments.length;
var i__7485__auto___17519 = (0);
while(true){
if((i__7485__auto___17519 < len__7484__auto___17518)){
args__7491__auto__.push((arguments[i__7485__auto___17519]));

var G__17520 = (i__7485__auto___17519 + (1));
i__7485__auto___17519 = G__17520;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

sablono.util.as_str.cljs$lang$applyTo = (function (seq17517){
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17517));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if(cljs.core.truth_(k)){
var vec__17524 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var seq__17525 = cljs.core.seq(vec__17524);
var first__17526 = cljs.core.first(seq__17525);
var seq__17525__$1 = cljs.core.next(seq__17525);
var first_word = first__17526;
var words = seq__17525__$1;
if((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return null;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var ks = cljs.core.keys(m);
var kmap = cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.camel_case,ks));
var G__17528 = clojure.set.rename_keys(m,kmap);
if(cljs.core.map_QMARK_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__17528,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$style], null),sablono$util$camel_case_keys);
} else {
return G__17528;
}
} else {
return m;
}
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], null));
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.util.compact_map = (function sablono$util$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.util.merge_with_class = (function sablono$util$merge_with_class(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17531 = arguments.length;
var i__7485__auto___17532 = (0);
while(true){
if((i__7485__auto___17532 < len__7484__auto___17531)){
args__7491__auto__.push((arguments[i__7485__auto___17532]));

var G__17533 = (i__7485__auto___17532 + (1));
i__7485__auto___17532 = G__17533;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var classes = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__17529_SHARP_){
if(cljs.core.list_QMARK_(p1__17529_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17529_SHARP_], null);
} else {
if(cljs.core.sequential_QMARK_(p1__17529_SHARP_)){
return p1__17529_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17529_SHARP_], null);

}
}
}),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class,maps)], 0))));
var maps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps);
if(cljs.core.empty_QMARK_(classes)){
return maps__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maps__$1,cljs.core.cst$kw$class,classes);
}
});

sablono.util.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.util.merge_with_class.cljs$lang$applyTo = (function (seq17530){
return sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17530));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.util.strip_css = (function sablono$util$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.util.match_tag = (function sablono$util$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__17539 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17539,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17539,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__17539,tag_name,names){
return (function (p1__17534_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__17534_SHARP_));
});})(matches,vec__17539,tag_name,names))
,names))),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__17539,tag_name,names){
return (function (p1__17535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__17535_SHARP_));
});})(matches,vec__17539,tag_name,names))
,names)))], null);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.util.normalize_element = (function sablono$util$normalize_element(p__17542){
var vec__17549 = p__17542;
var seq__17550 = cljs.core.seq(vec__17549);
var first__17551 = cljs.core.first(seq__17550);
var seq__17550__$1 = cljs.core.next(seq__17550);
var tag = first__17551;
var content = seq__17550__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$content,content], null));
} else {
}

var vec__17552 = sablono.util.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(2),null);
var tag_attrs = sablono.util.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$class,class$], null));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(classes));
});
/**
 * Returns the React function to render `tag` as a symbol.
 */
sablono.util.react_symbol = (function sablono$util$react_symbol(tag){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name(tag))].join(''));
});
/**
 * Same as `react-symbol` but wrap input and text elements.
 */
sablono.util.react_fn = (function sablono$util$react_fn(tag){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$textarea,null,cljs.core.cst$kw$option,null,cljs.core.cst$kw$input,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sablono.interpreter",cljs.core.name(tag));
} else {
return sablono.util.react_symbol(tag);
}
});
/**
 * Returns a regular expression that matches the HTML attribute `attr`
 *   and it's value.
 */
sablono.util.attr_pattern = (function sablono$util$attr_pattern(attr){
return cljs.core.re_pattern([cljs.core.str("\\s+"),cljs.core.str(cljs.core.name(attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
 * Strip the HTML attribute `attr` and it's value from the string `s`.
 */
sablono.util.strip_attr = (function sablono$util$strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,sablono.util.attr_pattern(attr),"");
} else {
return null;
}
});
/**
 * Strip the outer HTML tag from the string `s`.
 */
sablono.util.strip_outer = (function sablono$util$strip_outer(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace(s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else {
return null;
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = true;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__6409__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})())){
return [cljs.core.str(x__$1)].join('');
} else {
var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1)))),cljs.core.str(x__$1)].join('');
} else {
return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});

(sablono.util.ToString["null"] = true);

(sablono.util.to_str["null"] = (function (_){
return "";
}));

(sablono.util.ToString["number"] = true);

(sablono.util.to_str["number"] = (function (x){
return [cljs.core.str(x)].join('');
}));

(sablono.util.ToString["_"] = true);

(sablono.util.to_str["_"] = (function (x){
return [cljs.core.str(x)].join('');
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

(sablono.util.ToURI["_"] = true);

(sablono.util.to_uri["_"] = (function (x){
return (new goog.Uri([cljs.core.str(x)].join('')));
}));
