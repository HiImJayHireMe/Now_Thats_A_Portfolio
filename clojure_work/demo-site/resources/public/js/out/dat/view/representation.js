// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.view.representation');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('taoensso.timbre');
goog.require('dat.view.styles');
goog.require('dat.view.context');
dat.view.representation.cljc_atom = (function dat$view$representation$cljc_atom(init_value){
return reagent.core.atom.call(null,init_value);
});
if(typeof dat.view.representation.represent_STAR_ !== 'undefined'){
} else {
/**
 * Reprsent some data given a representation specification
 */
dat.view.representation.represent_STAR_ = (function (){var method_table__29780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29784__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.view.representation","represent*"),((function (method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__){
return (function (_,representation,___$1){
try{return cljs.core.first.call(null,representation);
}catch (e55240){var e = e55240;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.representation","/tmp/form-init6286146101766555450.clj",21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not dispatch on malformed representation:",representation], null);
});})(e,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__))
,null)),null,-600408427);
}});})(method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29784__auto__,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__));
})();
}
dat.view.representation.represent = (function dat$view$representation$represent(app,representation,data){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("representation "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){try{return cljs.core.first.call(null,representation);
}catch (e55242){var _ = e55242;
return "?";
}})())].join(''),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (app__$1,representation__$1,data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.representation.represent_STAR_,app__$1,representation__$1,data__$1], null);
})], null));
});
if(typeof dat.view.representation.registrations !== 'undefined'){
} else {
dat.view.representation.registrations = dat.view.representation.cljc_atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Representation middleware: *Should* make it so that when we update representations on the client, they update in the views.
 */
dat.view.representation.reactively_register = (function dat$view$representation$reactively_register(representation_id,representation_fn){
cljs.core.swap_BANG_.call(null,dat.view.representation.registrations,cljs.core.assoc,representation_id,representation_fn);

var registration_reaction = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,dat.view.representation.registrations),representation_id);
}));
return ((function (registration_reaction){
return (function (app,representation,data){
cljs.core.deref.call(null,registration_reaction);

return representation_fn.call(null,app,representation,data);
});
;})(registration_reaction))
});
/**
 * Representation middleware: *Should* make it so that when we update representations on the client, they update in the views.
 */
dat.view.representation.handle_errors = (function dat$view$representation$handle_errors(representation_id,representation_fn){
return (function (app,representation,data){
try{return representation_fn.call(null,app,representation,data);
}catch (e55245){var e = e55245;
var collapse_QMARK_ = dat.view.representation.cljc_atom.call(null,true);
return ((function (collapse_QMARK_,e){
return (function (app__$1,representation__$1,data__$1){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.representation","/tmp/form-init6286146101766555450.clj",60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (collapse_QMARK_,e){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Exception raised for representation: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(representation_id)].join('')], null);
});})(collapse_QMARK_,e))
,null)),null,-1080305751);

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"red",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px 3px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Error rendering component ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(representation_id)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapse_QMARK_,e){
return (function() { 
var G__55247__delegate = function (args){
return cljs.core.swap_BANG_.call(null,collapse_QMARK_,cljs.core.not);
};
var G__55247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55248__i = 0, G__55248__a = new Array(arguments.length -  0);
while (G__55248__i < G__55248__a.length) {G__55248__a[G__55248__i] = arguments[G__55248__i + 0]; ++G__55248__i;}
  args = new cljs.core.IndexedSeq(G__55248__a,0);
} 
return G__55247__delegate.call(this,args);};
G__55247.cljs$lang$maxFixedArity = 0;
G__55247.cljs$lang$applyTo = (function (arglist__55249){
var args = cljs.core.seq(arglist__55249);
return G__55247__delegate(args);
});
G__55247.cljs$core$IFn$_invoke$arity$variadic = G__55247__delegate;
return G__55247;
})()
;})(collapse_QMARK_,e))
], null),"See more/less"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,collapse_QMARK_))?null:new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Error"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,e),(function (){try{return e.stack;
}catch (e55246){var e__$1 = e55246;
return "!!!Unable to print stack trace!!!";
}})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"representation:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,representation__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Data:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,data__$1)], null)], null))], null);
});
;})(collapse_QMARK_,e))
}});
});
dat.view.representation.representation_override = (function dat$view$representation$representation_override(representation_fn){
return (function (app,p__55254,data){
var vec__55255 = p__55254;
var representation_id = cljs.core.nth.call(null,vec__55255,(0),null);
var context_data = cljs.core.nth.call(null,vec__55255,(1),null);
var temp__6736__auto__ = new cljs.core.Keyword("dat.view","representation-id","dat.view/representation-id",-1099789176).cljs$core$IFn$_invoke$arity$1(context_data);
if(cljs.core.truth_(temp__6736__auto__)){
var representation_id__$1 = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.representation.represent,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [representation_id__$1,cljs.core.dissoc.call(null,context_data,new cljs.core.Keyword("dat.view","representation-id","dat.view/representation-id",-1099789176))], null),data], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [representation_fn,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [representation_id,context_data], null),data], null);
}
});
});
if(typeof dat.view.representation.resolve_context_STAR_ !== 'undefined'){
} else {
dat.view.representation.resolve_context_STAR_ = (function (){var method_table__29780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29784__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.view.representation","resolve-context*"),((function (method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__){
return (function (app,representation){
return cljs.core.first.call(null,representation);
});})(method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29784__auto__,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__));
})();
}
cljs.core._add_method.call(null,dat.view.representation.resolve_context_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,representation){
return cljs.core.second.call(null,representation);
}));
dat.view.representation.resolve_context = (function dat$view$representation$resolve_context(app,p__55258){
var vec__55262 = p__55258;
var representation_id = cljs.core.nth.call(null,vec__55262,(0),null);
var local_context = cljs.core.nth.call(null,vec__55262,(1),null);
var context = cljs.core.deref.call(null,dat.view.context.component_context.call(null,app,representation_id,local_context));
return dat.view.representation.resolve_context_STAR_.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [representation_id,context], null));
});
dat.view.representation.register_context_resolution = (function dat$view$representation$register_context_resolution(representation_id,middleware,resolution_fn){
return cljs.core._add_method.call(null,dat.view.representation.resolve_context_STAR_,representation_id,(function (app,representation,representation_id__$1){
var middleware_fn = cljs.core.apply.call(null,cljs.core.comp,middleware);
var resolution_fn__$1 = middleware_fn.call(null,resolution_fn);
return resolution_fn__$1.call(null,app,representation,representation_id__$1);
}));
});
dat.view.representation.resolve_context_ware = (function dat$view$representation$resolve_context_ware(representation_fn){
return (function (app,representation,data){
return representation_fn.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,representation),dat.view.representation.resolve_context.call(null,app,representation)], null),data);
});
});
dat.view.representation.apply_form2_middleware = (function dat$view$representation$apply_form2_middleware(middleware,representation_fn){
return (function (app,representation,data){
var return_val = representation_fn.call(null,app,representation,data);
if(cljs.core.fn_QMARK_.call(null,return_val)){
return cljs.core.apply.call(null,cljs.core.comp,middleware).call(null,return_val);
} else {
return return_val;
}
});
});
dat.view.representation.register_representation = (function dat$view$representation$register_representation(var_args){
var args55265 = [];
var len__29970__auto___55268 = arguments.length;
var i__29971__auto___55269 = (0);
while(true){
if((i__29971__auto___55269 < len__29970__auto___55268)){
args55265.push((arguments[i__29971__auto___55269]));

var G__55270 = (i__29971__auto___55269 + (1));
i__29971__auto___55269 = G__55270;
continue;
} else {
}
break;
}

var G__55267 = args55265.length;
switch (G__55267) {
case 3:
return dat.view.representation.register_representation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.view.representation.register_representation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55265.length)].join('')));

}
});

dat.view.representation.register_representation.cljs$core$IFn$_invoke$arity$3 = (function (representation_id,middleware,representation_fn){
var base_middleware = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.view.representation.resolve_context_ware,cljs.core.partial.call(null,dat.view.representation.reactively_register,representation_id),cljs.core.partial.call(null,dat.view.representation.handle_errors,representation_id)], null);
var outer_middleware = cljs.core.concat.call(null,middleware,base_middleware);
var middleware__$1 = cljs.core.concat.call(null,middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.partial.call(null,dat.view.representation.apply_form2_middleware,outer_middleware)], null),base_middleware);
var middleware_fn = cljs.core.apply.call(null,cljs.core.comp,middleware__$1);
var representation_fn_SINGLEQUOTE_ = middleware_fn.call(null,representation_fn);
cljs.core.swap_BANG_.call(null,dat.view.representation.registrations,cljs.core.assoc,representation_id,representation_fn_SINGLEQUOTE_);

return cljs.core._add_method.call(null,dat.view.representation.represent_STAR_,representation_id,((function (base_middleware,outer_middleware,middleware__$1,middleware_fn,representation_fn_SINGLEQUOTE_){
return (function (app,context,data){
return representation_fn_SINGLEQUOTE_.call(null,app,context,data);
});})(base_middleware,outer_middleware,middleware__$1,middleware_fn,representation_fn_SINGLEQUOTE_))
);
});

dat.view.representation.register_representation.cljs$core$IFn$_invoke$arity$2 = (function (representation_id,representation_fn){
return dat.view.representation.register_representation.call(null,representation_id,cljs.core.PersistentVector.EMPTY,representation_fn);
});

dat.view.representation.register_representation.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=representation.js.map