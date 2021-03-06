// Compiled by ClojureScript 1.9.518 {}
goog.provide('posh.lib.db');
goog.require('cljs.core');
goog.require('posh.lib.datom_matcher');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__32132 = (((cljs.core.first.call(null,poshdb) instanceof cljs.core.Keyword))?cljs.core.first.call(null,poshdb).fqn:null);
switch (G__32132) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second.call(null,poshdb);

break;
case "filter-pull":
return cljs.core.second.call(null,poshdb);

break;
case "filter-q":
return cljs.core.first.call(null,cljs.core.nth.call(null,poshdb,(2)));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,poshdb))].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__32134 = cljs.core.cons.call(null,pdb,path);
var G__32135 = posh.lib.db.get_parent_db.call(null,pdb);
path = G__32134;
pdb = G__32135;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"conns","conns",-1475268193).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"dbs","dbs",1889628467).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return cljs.core.second.call(null,poshdb);
} else {
var G__32136 = posh.lib.db.get_parent_db.call(null,poshdb);
poshdb = G__32136;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.db_id__GT_db.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs.call(null,posh_tree,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var args32137 = [];
var len__29970__auto___32142 = arguments.length;
var i__29971__auto___32143 = (0);
while(true){
if((i__29971__auto___32143 < len__29970__auto___32142)){
args32137.push((arguments[i__29971__auto___32143]));

var G__32144 = (i__29971__auto___32143 + (1));
i__29971__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var G__32139 = args32137.length;
switch (G__32139) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32137.length)].join('')));

}
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.call(null,dcfg,conn,filters,null);
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__32140 = filters;
var map__32140__$1 = ((((!((map__32140 == null)))?((((map__32140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32140):map__32140);
var filter = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var as_of = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"as-of","as-of",-1841962382));
var since = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"since","since",315379842));
var with$ = cljs.core.get.call(null,map__32140__$1,new cljs.core.Keyword(null,"with","with",-1536296876));
var db__$1 = (function (){var or__28749__auto__ = db;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn);
}
})();
var db__$2 = (cljs.core.truth_(since)?new cljs.core.Keyword(null,"since","since",315379842).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$1,since):db__$1);
var db__$3 = (cljs.core.truth_(as_of)?new cljs.core.Keyword(null,"as-of","as-of",-1841962382).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$2,as_of):db__$2);
var db__$4 = (cljs.core.truth_(with$)?new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$3,with$)):db__$3);
var db__$5 = (cljs.core.truth_(filter)?new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$4,(((filter instanceof cljs.core.Symbol))?null:filter)):db__$4);
return db__$5;
});

posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4;

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__32146,poshdb){
var map__32149 = p__32146;
var map__32149__$1 = ((((!((map__32149 == null)))?((((map__32149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32149):map__32149);
var posh_tree = map__32149__$1;
var dcfg = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var cache = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,poshdb),new cljs.core.Keyword(null,"db","db",993250759))){
return posh.lib.db.db_id__GT_db.call(null,posh_tree,cljs.core.second.call(null,poshdb));
} else {
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,posh.lib.db.poshdb__GT_db.call(null,posh_tree,posh.lib.db.get_parent_db.call(null,poshdb)),posh.lib.db.make_filter_pred.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cache,poshdb))));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id.call(null,poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),posh.lib.db.poshdb__GT_db.call(null,posh_tree,poshdb),new cljs.core.Keyword(null,"conn","conn",278309663),posh.lib.db.db_id__GT_conn.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791),posh.lib.db.db_id__GT_schema.call(null,posh_tree,db_id),new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
});

//# sourceMappingURL=db.js.map