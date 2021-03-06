// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('datascript.pull_parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.db');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
datascript.pull_parser.PullSpec = (function (wildcard_QMARK_,attrs,__meta,__extmap,__hash){
this.wildcard_QMARK_ = wildcard_QMARK_;
this.attrs = attrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37482,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37484 = (((k37482 instanceof cljs.core.Keyword))?k37482.fqn:null);
switch (G__37484) {
case "wildcard?":
return self__.wildcard_QMARK_;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37482,else__8279__auto__);

}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullSpec{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37481){
var self__ = this;
var G__37481__$1 = this;
return (new cljs.core.RecordIter((0),G__37481__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wildcard_QMARK_,cljs.core.cst$kw$attrs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$attrs,null,cljs.core.cst$kw$wildcard_QMARK_,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37481){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37485 = cljs.core.keyword_identical_QMARK_;
var expr__37486 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37488 = cljs.core.cst$kw$wildcard_QMARK_;
var G__37489 = expr__37486;
return (pred__37485.cljs$core$IFn$_invoke$arity$2 ? pred__37485.cljs$core$IFn$_invoke$arity$2(G__37488,G__37489) : pred__37485.call(null,G__37488,G__37489));
})())){
return (new datascript.pull_parser.PullSpec(G__37481,self__.attrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37490 = cljs.core.cst$kw$attrs;
var G__37491 = expr__37486;
return (pred__37485.cljs$core$IFn$_invoke$arity$2 ? pred__37485.cljs$core$IFn$_invoke$arity$2(G__37490,G__37491) : pred__37485.call(null,G__37490,G__37491));
})())){
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,G__37481,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37481),null));
}
}
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wildcard_QMARK_,self__.wildcard_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37481){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullSpec(self__.wildcard_QMARK_,self__.attrs,G__37481,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$wildcard_QMARK_,cljs.core.cst$sym$attrs], null);
});

datascript.pull_parser.PullSpec.cljs$lang$type = true;

datascript.pull_parser.PullSpec.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.PullSpec.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullSpec");
});

datascript.pull_parser.__GT_PullSpec = (function datascript$pull_parser$__GT_PullSpec(wildcard_QMARK_,attrs){
return (new datascript.pull_parser.PullSpec(wildcard_QMARK_,attrs,null,null,null));
});

datascript.pull_parser.map__GT_PullSpec = (function datascript$pull_parser$map__GT_PullSpec(G__37483){
return (new datascript.pull_parser.PullSpec(cljs.core.cst$kw$wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(G__37483),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__37483),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37483,cljs.core.cst$kw$wildcard_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$attrs], 0)),null));
});


/**
 * @interface
 */
datascript.pull_parser.IPullSpecComponent = function(){};

datascript.pull_parser._as_spec = (function datascript$pull_parser$_as_spec(this$){
if((!((this$ == null))) && (!((this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 == null)))){
return this$.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1(this$);
} else {
var x__8319__auto__ = (((this$ == null))?null:this$);
var m__8320__auto__ = (datascript.pull_parser._as_spec[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto__.call(null,this$));
} else {
var m__8320__auto____$1 = (datascript.pull_parser._as_spec["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPullSpecComponent.-as-spec",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullAttrName = (function (attr,__meta,__extmap,__hash){
this.attr = attr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37494,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37496 = (((k37494 instanceof cljs.core.Keyword))?k37494.fqn:null);
switch (G__37496) {
case "attr":
return self__.attr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37494,else__8279__auto__);

}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullAttrName{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37493){
var self__ = this;
var G__37493__$1 = this;
return (new cljs.core.RecordIter((0),G__37493__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37493){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37497 = cljs.core.keyword_identical_QMARK_;
var expr__37498 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37500 = cljs.core.cst$kw$attr;
var G__37501 = expr__37498;
return (pred__37497.cljs$core$IFn$_invoke$arity$2 ? pred__37497.cljs$core$IFn$_invoke$arity$2(G__37500,G__37501) : pred__37497.call(null,G__37500,G__37501));
})())){
return (new datascript.pull_parser.PullAttrName(G__37493,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullAttrName(self__.attr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37493),null));
}
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37493){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullAttrName(self__.attr,G__37493,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr], null);
});

datascript.pull_parser.PullAttrName.cljs$lang$type = true;

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.PullAttrName.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullAttrName");
});

datascript.pull_parser.__GT_PullAttrName = (function datascript$pull_parser$__GT_PullAttrName(attr){
return (new datascript.pull_parser.PullAttrName(attr,null,null,null));
});

datascript.pull_parser.map__GT_PullAttrName = (function datascript$pull_parser$map__GT_PullAttrName(G__37495){
return (new datascript.pull_parser.PullAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__37495),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37495,cljs.core.cst$kw$attr),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullReverseAttrName = (function (attr,rattr,__meta,__extmap,__hash){
this.attr = attr;
this.rattr = rattr;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37504,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37506 = (((k37504 instanceof cljs.core.Keyword))?k37504.fqn:null);
switch (G__37506) {
case "attr":
return self__.attr;

break;
case "rattr":
return self__.rattr;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37504,else__8279__auto__);

}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullReverseAttrName{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37503){
var self__ = this;
var G__37503__$1 = this;
return (new cljs.core.RecordIter((0),G__37503__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$rattr], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullReverseAttrName.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.rattr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,self__.attr], null)], null);
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rattr,null,cljs.core.cst$kw$attr,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37503){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37507 = cljs.core.keyword_identical_QMARK_;
var expr__37508 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37510 = cljs.core.cst$kw$attr;
var G__37511 = expr__37508;
return (pred__37507.cljs$core$IFn$_invoke$arity$2 ? pred__37507.cljs$core$IFn$_invoke$arity$2(G__37510,G__37511) : pred__37507.call(null,G__37510,G__37511));
})())){
return (new datascript.pull_parser.PullReverseAttrName(G__37503,self__.rattr,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37512 = cljs.core.cst$kw$rattr;
var G__37513 = expr__37508;
return (pred__37507.cljs$core$IFn$_invoke$arity$2 ? pred__37507.cljs$core$IFn$_invoke$arity$2(G__37512,G__37513) : pred__37507.call(null,G__37512,G__37513));
})())){
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,G__37503,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37503),null));
}
}
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rattr,self__.rattr],null))], null),self__.__extmap));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37503){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullReverseAttrName(self__.attr,self__.rattr,G__37503,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullReverseAttrName.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullReverseAttrName.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$rattr], null);
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$type = true;

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.PullReverseAttrName.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullReverseAttrName");
});

datascript.pull_parser.__GT_PullReverseAttrName = (function datascript$pull_parser$__GT_PullReverseAttrName(attr,rattr){
return (new datascript.pull_parser.PullReverseAttrName(attr,rattr,null,null,null));
});

datascript.pull_parser.map__GT_PullReverseAttrName = (function datascript$pull_parser$map__GT_PullReverseAttrName(G__37505){
return (new datascript.pull_parser.PullReverseAttrName(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__37505),cljs.core.cst$kw$rattr.cljs$core$IFn$_invoke$arity$1(G__37505),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37505,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$rattr], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullLimitExpr = (function (attr,limit,__meta,__extmap,__hash){
this.attr = attr;
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37516,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37518 = (((k37516 instanceof cljs.core.Keyword))?k37516.fqn:null);
switch (G__37518) {
case "attr":
return self__.attr;

break;
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37516,else__8279__auto__);

}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullLimitExpr{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37515){
var self__ = this;
var G__37515__$1 = this;
return (new cljs.core.RecordIter((0),G__37515__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullLimitExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$limit], null),self__.limit);
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$limit,null,cljs.core.cst$kw$attr,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37515){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37519 = cljs.core.keyword_identical_QMARK_;
var expr__37520 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37522 = cljs.core.cst$kw$attr;
var G__37523 = expr__37520;
return (pred__37519.cljs$core$IFn$_invoke$arity$2 ? pred__37519.cljs$core$IFn$_invoke$arity$2(G__37522,G__37523) : pred__37519.call(null,G__37522,G__37523));
})())){
return (new datascript.pull_parser.PullLimitExpr(G__37515,self__.limit,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37524 = cljs.core.cst$kw$limit;
var G__37525 = expr__37520;
return (pred__37519.cljs$core$IFn$_invoke$arity$2 ? pred__37519.cljs$core$IFn$_invoke$arity$2(G__37524,G__37525) : pred__37519.call(null,G__37524,G__37525));
})())){
return (new datascript.pull_parser.PullLimitExpr(self__.attr,G__37515,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37515),null));
}
}
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37515){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullLimitExpr(self__.attr,self__.limit,G__37515,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullLimitExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullLimitExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullLimitExpr.cljs$lang$type = true;

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.PullLimitExpr.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullLimitExpr");
});

datascript.pull_parser.__GT_PullLimitExpr = (function datascript$pull_parser$__GT_PullLimitExpr(attr,limit){
return (new datascript.pull_parser.PullLimitExpr(attr,limit,null,null,null));
});

datascript.pull_parser.map__GT_PullLimitExpr = (function datascript$pull_parser$map__GT_PullLimitExpr(G__37517){
return (new datascript.pull_parser.PullLimitExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__37517),cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__37517),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37517,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$limit], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullDefaultExpr = (function (attr,value,__meta,__extmap,__hash){
this.attr = attr;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37528,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37530 = (((k37528 instanceof cljs.core.Keyword))?k37528.fqn:null);
switch (G__37530) {
case "attr":
return self__.attr;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37528,else__8279__auto__);

}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullDefaultExpr{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37527){
var self__ = this;
var G__37527__$1 = this;
return (new cljs.core.RecordIter((0),G__37527__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullDefaultExpr.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in(datascript.pull_parser._as_spec(self__.attr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.cst$kw$default], null),self__.value);
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$attr,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37527){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37531 = cljs.core.keyword_identical_QMARK_;
var expr__37532 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37534 = cljs.core.cst$kw$attr;
var G__37535 = expr__37532;
return (pred__37531.cljs$core$IFn$_invoke$arity$2 ? pred__37531.cljs$core$IFn$_invoke$arity$2(G__37534,G__37535) : pred__37531.call(null,G__37534,G__37535));
})())){
return (new datascript.pull_parser.PullDefaultExpr(G__37527,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37536 = cljs.core.cst$kw$value;
var G__37537 = expr__37532;
return (pred__37531.cljs$core$IFn$_invoke$arity$2 ? pred__37531.cljs$core$IFn$_invoke$arity$2(G__37536,G__37537) : pred__37531.call(null,G__37536,G__37537));
})())){
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,G__37527,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37527),null));
}
}
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37527){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullDefaultExpr(self__.attr,self__.value,G__37527,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullDefaultExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullDefaultExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$value], null);
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$type = true;

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.PullDefaultExpr.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullDefaultExpr");
});

datascript.pull_parser.__GT_PullDefaultExpr = (function datascript$pull_parser$__GT_PullDefaultExpr(attr,value){
return (new datascript.pull_parser.PullDefaultExpr(attr,value,null,null,null));
});

datascript.pull_parser.map__GT_PullDefaultExpr = (function datascript$pull_parser$map__GT_PullDefaultExpr(G__37529){
return (new datascript.pull_parser.PullDefaultExpr(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__37529),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__37529),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37529,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$value], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
datascript.pull_parser.PullWildcard = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37540,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37542 = k37540;
switch (G__37542) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37540,else__8279__auto__);

}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullWildcard{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullWildcard.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37539){
var self__ = this;
var G__37539__$1 = this;
return (new cljs.core.RecordIter((0),G__37539__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37539){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37543 = cljs.core.keyword_identical_QMARK_;
var expr__37544 = k__8284__auto__;
return (new datascript.pull_parser.PullWildcard(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37539),null));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37539){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullWildcard(G__37539,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullWildcard.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullWildcard.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.pull_parser.PullWildcard.cljs$lang$type = true;

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.PullWildcard.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullWildcard");
});

datascript.pull_parser.__GT_PullWildcard = (function datascript$pull_parser$__GT_PullWildcard(){
return (new datascript.pull_parser.PullWildcard(null,null,null));
});

datascript.pull_parser.map__GT_PullWildcard = (function datascript$pull_parser$map__GT_PullWildcard(G__37541){
return (new datascript.pull_parser.PullWildcard(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__37541),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullRecursionLimit = (function (limit,__meta,__extmap,__hash){
this.limit = limit;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37548,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37550 = (((k37548 instanceof cljs.core.Keyword))?k37548.fqn:null);
switch (G__37550) {
case "limit":
return self__.limit;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37548,else__8279__auto__);

}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullRecursionLimit{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37547){
var self__ = this;
var G__37547__$1 = this;
return (new cljs.core.RecordIter((0),G__37547__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$limit], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullRecursionLimit.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$recursion,self__.limit], null);
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$limit,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37547){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37551 = cljs.core.keyword_identical_QMARK_;
var expr__37552 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37554 = cljs.core.cst$kw$limit;
var G__37555 = expr__37552;
return (pred__37551.cljs$core$IFn$_invoke$arity$2 ? pred__37551.cljs$core$IFn$_invoke$arity$2(G__37554,G__37555) : pred__37551.call(null,G__37554,G__37555));
})())){
return (new datascript.pull_parser.PullRecursionLimit(G__37547,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37547),null));
}
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$limit,self__.limit],null))], null),self__.__extmap));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37547){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullRecursionLimit(self__.limit,G__37547,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullRecursionLimit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullRecursionLimit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$limit], null);
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$type = true;

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.PullRecursionLimit.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullRecursionLimit");
});

datascript.pull_parser.__GT_PullRecursionLimit = (function datascript$pull_parser$__GT_PullRecursionLimit(limit){
return (new datascript.pull_parser.PullRecursionLimit(limit,null,null,null));
});

datascript.pull_parser.map__GT_PullRecursionLimit = (function datascript$pull_parser$map__GT_PullRecursionLimit(G__37549){
return (new datascript.pull_parser.PullRecursionLimit(cljs.core.cst$kw$limit.cljs$core$IFn$_invoke$arity$1(G__37549),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37549,cljs.core.cst$kw$limit),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullMapSpecEntry = (function (attr,porrl,__meta,__extmap,__hash){
this.attr = attr;
this.porrl = porrl;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37558,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37560 = (((k37558 instanceof cljs.core.Keyword))?k37558.fqn:null);
switch (G__37560) {
case "attr":
return self__.attr;

break;
case "porrl":
return self__.porrl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37558,else__8279__auto__);

}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullMapSpecEntry{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37557){
var self__ = this;
var G__37557__$1 = this;
return (new cljs.core.RecordIter((0),G__37557__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$porrl], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullMapSpecEntry.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(datascript.pull_parser._as_spec(self__.attr),(1),cljs.core.conj,datascript.pull_parser._as_spec(self__.porrl));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$porrl,null,cljs.core.cst$kw$attr,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37557){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37561 = cljs.core.keyword_identical_QMARK_;
var expr__37562 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37564 = cljs.core.cst$kw$attr;
var G__37565 = expr__37562;
return (pred__37561.cljs$core$IFn$_invoke$arity$2 ? pred__37561.cljs$core$IFn$_invoke$arity$2(G__37564,G__37565) : pred__37561.call(null,G__37564,G__37565));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(G__37557,self__.porrl,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37566 = cljs.core.cst$kw$porrl;
var G__37567 = expr__37562;
return (pred__37561.cljs$core$IFn$_invoke$arity$2 ? pred__37561.cljs$core$IFn$_invoke$arity$2(G__37566,G__37567) : pred__37561.call(null,G__37566,G__37567));
})())){
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,G__37557,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37557),null));
}
}
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attr,self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$porrl,self__.porrl],null))], null),self__.__extmap));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37557){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullMapSpecEntry(self__.attr,self__.porrl,G__37557,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullMapSpecEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullMapSpecEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attr,cljs.core.cst$sym$porrl], null);
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$type = true;

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.PullMapSpecEntry.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullMapSpecEntry");
});

datascript.pull_parser.__GT_PullMapSpecEntry = (function datascript$pull_parser$__GT_PullMapSpecEntry(attr,porrl){
return (new datascript.pull_parser.PullMapSpecEntry(attr,porrl,null,null,null));
});

datascript.pull_parser.map__GT_PullMapSpecEntry = (function datascript$pull_parser$map__GT_PullMapSpecEntry(G__37559){
return (new datascript.pull_parser.PullMapSpecEntry(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(G__37559),cljs.core.cst$kw$porrl.cljs$core$IFn$_invoke$arity$1(G__37559),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37559,cljs.core.cst$kw$attr,cljs.core.array_seq([cljs.core.cst$kw$porrl], 0)),null));
});

datascript.pull_parser.aggregate_specs = (function datascript$pull_parser$aggregate_specs(res,part){
if((part instanceof datascript.pull_parser.PullWildcard)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,cljs.core.cst$kw$wildcard_QMARK_,true);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(res,cljs.core.cst$kw$attrs,cljs.core.conj_BANG_,datascript.pull_parser._as_spec(part));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.pull_parser.IPullSpecComponent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_parser.PullPattern = (function (specs,__meta,__extmap,__hash){
this.specs = specs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37570,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37572 = (((k37570 instanceof cljs.core.Keyword))?k37570.fqn:null);
switch (G__37572) {
case "specs":
return self__.specs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37570,else__8279__auto__);

}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.pull-parser.PullPattern{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37569){
var self__ = this;
var G__37569__$1 = this;
return (new cljs.core.RecordIter((0),G__37569__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$specs], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$ = cljs.core.PROTOCOL_SENTINEL;

datascript.pull_parser.PullPattern.prototype.datascript$pull_parser$IPullSpecComponent$_as_spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var init = (new datascript.pull_parser.PullSpec(false,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),null,null,null));
var spec = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_parser.aggregate_specs,init,self__.specs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$subpattern,cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$attrs,cljs.core.persistent_BANG_)], null);
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$specs,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37569){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37573 = cljs.core.keyword_identical_QMARK_;
var expr__37574 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37576 = cljs.core.cst$kw$specs;
var G__37577 = expr__37574;
return (pred__37573.cljs$core$IFn$_invoke$arity$2 ? pred__37573.cljs$core$IFn$_invoke$arity$2(G__37576,G__37577) : pred__37573.call(null,G__37576,G__37577));
})())){
return (new datascript.pull_parser.PullPattern(G__37569,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_parser.PullPattern(self__.specs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37569),null));
}
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$specs,self__.specs],null))], null),self__.__extmap));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37569){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.pull_parser.PullPattern(self__.specs,G__37569,self__.__extmap,self__.__hash));
});

datascript.pull_parser.PullPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.pull_parser.PullPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$specs], null);
});

datascript.pull_parser.PullPattern.cljs$lang$type = true;

datascript.pull_parser.PullPattern.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.PullPattern.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.pull-parser/PullPattern");
});

datascript.pull_parser.__GT_PullPattern = (function datascript$pull_parser$__GT_PullPattern(specs){
return (new datascript.pull_parser.PullPattern(specs,null,null,null));
});

datascript.pull_parser.map__GT_PullPattern = (function datascript$pull_parser$map__GT_PullPattern(G__37571){
return (new datascript.pull_parser.PullPattern(cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(G__37571),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37571,cljs.core.cst$kw$specs),null));
});

datascript.pull_parser.wildcard_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_STAR_,null,"*",null,cljs.core.cst$sym$_STAR_,null], null), null);
datascript.pull_parser.parse_wildcard = (function datascript$pull_parser$parse_wildcard(spec){
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.wildcard_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullWildcard(null,null,null));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_name = (function datascript$pull_parser$parse_attr_name(spec){
if(((spec instanceof cljs.core.Keyword)) || (typeof spec === 'string')){
if(datascript.db.reverse_ref_QMARK_(spec)){
return (new datascript.pull_parser.PullReverseAttrName(datascript.db.reverse_ref(spec),spec,null,null,null));
} else {
return (new datascript.pull_parser.PullAttrName(spec,null,null,null));
}
} else {
return null;
}
});
datascript.pull_parser.unlimited_recursion_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["...",null,cljs.core.cst$sym$$$$,null], null), null);
datascript.pull_parser.parse_recursion_limit = (function datascript$pull_parser$parse_recursion_limit(spec){
if(cljs.core.truth_((datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.unlimited_recursion_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : datascript.pull_parser.unlimited_recursion_QMARK_.call(null,spec)))){
return (new datascript.pull_parser.PullRecursionLimit(null,null,null,null));
} else {
if((typeof spec === 'number') && ((spec > (0)))){
return (new datascript.pull_parser.PullRecursionLimit(spec,null,null,null));
} else {
return null;
}
}
});
datascript.pull_parser.maybe_attr_expr_QMARK_ = (function datascript$pull_parser$maybe_attr_expr_QMARK_(spec){
return (cljs.core.sequential_QMARK_(spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(spec)));
});
datascript.pull_parser.limit_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$limit,null,cljs.core.cst$kw$limit,null,"limit",null], null), null);
datascript.pull_parser.parse_limit_expr = (function datascript$pull_parser$parse_limit_expr(spec){
var vec__37582 = spec;
var limit_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(1),null);
var pos_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37582,(2),null);
if(cljs.core.truth_((datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.limit_QMARK_.cljs$core$IFn$_invoke$arity$1(limit_sym) : datascript.pull_parser.limit_QMARK_.call(null,limit_sym)))){
var temp__6736__auto__ = (function (){var and__7589__auto__ = ((pos_num == null)) || ((typeof pos_num === 'number') && ((pos_num > (0))));
if(and__7589__auto__){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var attr_name = temp__6736__auto__;
return (new datascript.pull_parser.PullLimitExpr(attr_name,pos_num,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected [\"limit\" attr-name (positive-number | nil)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.default_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$sym$default,null,cljs.core.cst$kw$default,null,"default",null], null), null);
datascript.pull_parser.parse_default_expr = (function datascript$pull_parser$parse_default_expr(spec){
var vec__37588 = spec;
var default_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(0),null);
var attr_name_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(1),null);
var default_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37588,(2),null);
if(cljs.core.truth_((datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym)))){
var temp__6736__auto__ = (function (){var and__7589__auto__ = (datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.default_QMARK_.cljs$core$IFn$_invoke$arity$1(default_sym) : datascript.pull_parser.default_QMARK_.call(null,default_sym));
if(cljs.core.truth_(and__7589__auto__)){
return datascript.pull_parser.parse_attr_name(attr_name_spec);
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var attr_name = temp__6736__auto__;
return (new datascript.pull_parser.PullDefaultExpr(attr_name,default_val,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected [\"default\" attr-name any-value]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
} else {
return null;
}
});
datascript.pull_parser.parse_map_spec_entry = (function datascript$pull_parser$parse_map_spec_entry(p__37591){
var vec__37595 = p__37591;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37595,(1),null);
var temp__6736__auto__ = (function (){var or__7601__auto__ = datascript.pull_parser.parse_attr_name(k);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(k))){
return datascript.pull_parser.parse_limit_expr(k);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var attr_name = temp__6736__auto__;
var temp__6736__auto____$1 = (function (){var or__7601__auto__ = datascript.pull_parser.parse_recursion_limit(v);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.parse_pattern.cljs$core$IFn$_invoke$arity$1(v) : datascript.pull_parser.parse_pattern.call(null,v));
}
})();
if(cljs.core.truth_(temp__6736__auto____$1)){
var pattern_or_rec = temp__6736__auto____$1;
return (new datascript.pull_parser.PullMapSpecEntry(attr_name,pattern_or_rec,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected (pattern | recursion-limit)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected (attr-name | limit-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)], null));
}
});
datascript.pull_parser.parse_map_spec = (function datascript$pull_parser$parse_map_spec(spec){
if(cljs.core.map_QMARK_(spec)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(spec))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Maps should contain exactly 1 entry"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(= 1 (count spec))")].join('')));
}

return datascript.pull_parser.parse_map_spec_entry(cljs.core.first(spec));
} else {
return null;
}
});
datascript.pull_parser.parse_attr_expr = (function datascript$pull_parser$parse_attr_expr(spec){
if(cljs.core.truth_(datascript.pull_parser.maybe_attr_expr_QMARK_(spec))){
var or__7601__auto__ = datascript.pull_parser.parse_limit_expr(spec);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return datascript.pull_parser.parse_default_expr(spec);
}
} else {
return null;
}
});
datascript.pull_parser.parse_attr_spec = (function datascript$pull_parser$parse_attr_spec(spec){
var or__7601__auto__ = datascript.pull_parser.parse_attr_name(spec);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.pull_parser.parse_wildcard(spec);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.pull_parser.parse_map_spec(spec);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
var or__7601__auto____$3 = datascript.pull_parser.parse_attr_expr(spec);
if(cljs.core.truth_(or__7601__auto____$3)){
return or__7601__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse attr-spec, expected: (attr-name | wildcard | map-spec | attr-expr)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,spec], null));
}
}
}
}
});
datascript.pull_parser.pattern_clause_type = (function datascript$pull_parser$pattern_clause_type(clause){
if(cljs.core.map_QMARK_(clause)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.truth_((datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.pull_parser.wildcard_QMARK_.cljs$core$IFn$_invoke$arity$1(clause) : datascript.pull_parser.wildcard_QMARK_.call(null,clause)))){
return cljs.core.cst$kw$wildcard;
} else {
return cljs.core.cst$kw$other;

}
}
});
datascript.pull_parser.expand_map_clause = (function datascript$pull_parser$expand_map_clause(clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__37598_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__37598_SHARP_);
})),clause);
});
datascript.pull_parser.simplify_pattern_clauses = (function datascript$pull_parser$simplify_pattern_clauses(pattern){
var groups = cljs.core.group_by(datascript.pull_parser.pattern_clause_type,pattern);
var base = (cljs.core.truth_(cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$wildcard)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(base,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$other)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.expand_map_clause),cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.cst$kw$map));
});
/**
 * Parse an EDN pull pattern into a tree of records using the following
 * grammar:
 * 
 * ```
 * pattern            = [attr-spec+]
 * attr-spec          = attr-name | wildcard | map-spec | attr-expr
 * attr-name          = an edn keyword that names an attr
 * wildcard           = "*" or '*'
 * map-spec           = { ((attr-name | limit-expr) (pattern | recursion-limit))+ }
 * attr-expr          = limit-expr | default-expr
 * limit-expr         = ["limit" attr-name (positive-number | nil)]
 * default-expr       = ["default" attr-name any-value]
 * recursion-limit    = positive-number | '...'
 * ```
 */
datascript.pull_parser.parse_pattern = (function datascript$pull_parser$parse_pattern(pattern){
if(cljs.core.sequential_QMARK_(pattern)){
return (new datascript.pull_parser.PullPattern(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(datascript.pull_parser.parse_attr_spec),datascript.pull_parser.simplify_pattern_clauses(pattern)),null,null,null));
} else {
return null;
}
});
/**
 * Convert a parsed tree of pull pattern records into a `PullSpec` instance,
 * a record type containing two keys:
 * 
 * * `:wildcard?` - a boolean indicating if the pattern contains a wildcard.
 * * `:attrs` - a map of attribute specifications.
 * 
 * The attribute specification map consists of keys which will become the keys
 * in the result map, and values which are themselves maps describing the
 * attribute:
 * 
 * * `:attr`       (required) - The attr name to pull; for reverse attributes
 *                           this will be the normalized attribute name.
 * * `:limit`      (optional) - If present, specifies a custom limit for this
 *                           attribute; Either `nil`, indicating no limit,
 *                           or a positive integer.
 * * `:default`    (optional) - If present, specifies a default value for this
 *                           attribute
 * * `:recursion`  (optional) - If present, specifies a recursion limit for this
 *                           attribute; Either `nil`, indicating no limit, or
 *                           a positive integer.
 * * `:subpattern` (optional) - If present, specifies a sub `PullSpec` instance
 *                           to be applied to entities matched by this
 *                           attribute.
 */
datascript.pull_parser.pattern__GT_spec = (function datascript$pull_parser$pattern__GT_spec(pattern){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(datascript.pull_parser._as_spec(pattern),(1));
});
/**
 * Parse EDN pull `pattern` specification (see `parse-pattern`), and
 * convert the resulting tree into a `PullSpec` instance (see `pattern->spec`).
 * Throws an error if the supplied `pattern` cannot be parsed.
 */
datascript.pull_parser.parse_pull = (function datascript$pull_parser$parse_pull(pattern){
var or__7601__auto__ = (function (){var G__37602 = pattern;
var G__37602__$1 = (((G__37602 == null))?null:datascript.pull_parser.parse_pattern(G__37602));
if((G__37602__$1 == null)){
return null;
} else {
return datascript.pull_parser.pattern__GT_spec(G__37602__$1);
}
})();
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull pattern, expected: [attr-spec+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_pull,cljs.core.cst$kw$fragment,pattern], null));
}
});
