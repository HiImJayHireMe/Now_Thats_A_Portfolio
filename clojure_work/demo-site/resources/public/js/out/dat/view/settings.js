// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.view.settings');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('dat.reactor');
goog.require('dat.reactor.dispatcher');
goog.require('taoensso.timbre');
goog.require('posh.reagent');
dat.view.settings.schema = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("dat.view","settings","dat.view/settings",1705836879),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889),cljs.core.PersistentArrayMap.EMPTY], null);
dat.view.settings.init_BANG_ = (function dat$view$settings$init_BANG_(app){
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.core.tempid.call(null,(-1)),new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","settings","dat.view/settings",1705836879),new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889),window.location.pathname], null)], null);
return datascript.core.transact_BANG_.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),tx);
});
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.view.settings","update","dat.view.settings/update",-1733360771),(function (app,db,p__55101){
var vec__55102 = p__55101;
var _ = cljs.core.nth.call(null,vec__55102,(0),null);
var vec__55105 = cljs.core.nth.call(null,vec__55102,(1),null);
var setting_ident = cljs.core.nth.call(null,vec__55105,(0),null);
var setting_value = cljs.core.nth.call(null,vec__55105,(1),null);
var tx = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","settings","dat.view/settings",1705836879),setting_ident,setting_value])], null);
return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),tx], null)], null));
}));
dat.view.settings.update_setting = (function dat$view$settings$update_setting(app,setting,new_value){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view.settings","/tmp/form-init6286146101766555450.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-setting called with",setting,new_value], null);
}),null)),null,186176288);

return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.settings","update","dat.view.settings/update",-1733360771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [setting,new_value], null)], null));
});
dat.view.settings.get_setting = (function dat$view$settings$get_setting(var_args){
var args55108 = [];
var len__29970__auto___55111 = arguments.length;
var i__29971__auto___55112 = (0);
while(true){
if((i__29971__auto___55112 < len__29970__auto___55111)){
args55108.push((arguments[i__29971__auto___55112]));

var G__55113 = (i__29971__auto___55112 + (1));
i__29971__auto___55112 = G__55113;
continue;
} else {
}
break;
}

var G__55110 = args55108.length;
switch (G__55110) {
case 2:
return dat.view.settings.get_setting.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.view.settings.get_setting.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55108.length)].join('')));

}
});

dat.view.settings.get_setting.cljs$core$IFn$_invoke$arity$2 = (function (app,setting_ident){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,dat.view.settings.get_setting.call(null,app)),setting_ident);
}));
});

dat.view.settings.get_setting.cljs$core$IFn$_invoke$arity$1 = (function (app){
return posh.reagent.pull.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("dat.view","settings","dat.view/settings",1705836879)], null));
});

dat.view.settings.get_setting.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=settings.js.map