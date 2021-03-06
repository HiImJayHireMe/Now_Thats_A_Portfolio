// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('com.stuartsierra.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('com.stuartsierra.dependency');
goog.require('com.stuartsierra.component.platform');

/**
 * @interface
 */
com.stuartsierra.component.Lifecycle = function(){};

/**
 * Begins operation of this component. Synchronous, does not return
 *   until the component is started. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.start = (function com$stuartsierra$component$start(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$start$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$start$arity$1(component);
} else {
var x__8319__auto__ = (((component == null))?null:component);
var m__8320__auto__ = (com.stuartsierra.component.start[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(component) : m__8320__auto__.call(null,component));
} else {
var m__8320__auto____$1 = (com.stuartsierra.component.start["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(component) : m__8320__auto____$1.call(null,component));
} else {
throw cljs.core.missing_protocol("Lifecycle.start",component);
}
}
}
});

/**
 * Ceases operation of this component. Synchronous, does not return
 *   until the component is stopped. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.stop = (function com$stuartsierra$component$stop(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$stop$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$stop$arity$1(component);
} else {
var x__8319__auto__ = (((component == null))?null:component);
var m__8320__auto__ = (com.stuartsierra.component.stop[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(component) : m__8320__auto__.call(null,component));
} else {
var m__8320__auto____$1 = (com.stuartsierra.component.stop["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(component) : m__8320__auto____$1.call(null,component));
} else {
throw cljs.core.missing_protocol("Lifecycle.stop",component);
}
}
}
});

(com.stuartsierra.component.Lifecycle["_"] = true);

(com.stuartsierra.component.start["_"] = (function (this$){
return this$;
}));

(com.stuartsierra.component.stop["_"] = (function (this$){
return this$;
}));
/**
 * Returns the map of other components on which this component depends.
 */
com.stuartsierra.component.dependencies = (function com$stuartsierra$component$dependencies(component){
return cljs.core.cst$kw$com$stuartsierra$component_SLASH_dependencies.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Associates metadata with component describing the other components
 *   on which it depends. Component dependencies are specified as a map.
 *   Keys in the map correspond to keys in this component which must be
 *   provided by its containing system. Values in the map are the keys in
 *   the system at which those components may be found. Alternatively, if
 *   the keys are the same in both the component and its enclosing
 *   system, they may be specified as a vector of keys.
 */
com.stuartsierra.component.using = (function com$stuartsierra$component$using(component,dependencies){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$com$stuartsierra$component_SLASH_dependencies], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_(dependencies))?dependencies:((cljs.core.vector_QMARK_(dependencies))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_invalid_DASH_dependencies,cljs.core.cst$kw$component,component,cljs.core.cst$kw$dependencies,dependencies], null))})()
)));
});
com.stuartsierra.component.nil_component = (function com$stuartsierra$component$nil_component(system,key){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" was nil in system; maybe it returned nil from start or stop")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_nil_DASH_component,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$system,system], null));
});
com.stuartsierra.component.get_component = (function com$stuartsierra$component$get_component(system,key){
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$3(system,key,cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found);
if((component == null)){
throw com.stuartsierra.component.nil_component(system,key);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found,component)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" from system")].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_missing_DASH_component,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$system,system], null));
} else {
}

return component;
});
com.stuartsierra.component.get_dependency = (function com$stuartsierra$component$get_dependency(system,system_key,component,dependency_key){
var dependency = cljs.core.get.cljs$core$IFn$_invoke$arity$3(system,system_key,cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found);
if((dependency == null)){
throw com.stuartsierra.component.nil_component(system,system_key);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$com$stuartsierra$component_SLASH_not_DASH_found,dependency)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing dependency "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dependency_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.stuartsierra.component.platform.type_name(component)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" expected in system at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(system_key)].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_missing_DASH_dependency,cljs.core.cst$kw$system_DASH_key,system_key,cljs.core.cst$kw$dependency_DASH_key,dependency_key,cljs.core.cst$kw$component,component,cljs.core.cst$kw$system,system], null));
} else {
}

return dependency;
});
/**
 * Associates dependency metadata with multiple components in the
 *   system. dependency-map is a map of keys in the system to maps or
 *   vectors specifying the dependencies of the component at that key in
 *   the system, as per 'using'.
 */
com.stuartsierra.component.system_using = (function com$stuartsierra$component$system_using(system,dependency_map){
return cljs.core.reduce_kv((function (system__$1,key,dependencies){
var component = com.stuartsierra.component.get_component(system__$1,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.using(component,dependencies));
}),system,dependency_map);
});
/**
 * Returns a dependency graph, using the data structures defined in
 *   com.stuartsierra.dependency, for the components found by
 *   (select-keys system component-keys)
 */
com.stuartsierra.component.dependency_graph = (function com$stuartsierra$component$dependency_graph(system,component_keys){
return cljs.core.reduce_kv((function (graph,key,component){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38796_SHARP_,p2__38797_SHARP_){
return com.stuartsierra.dependency.depend(p1__38796_SHARP_,key,p2__38797_SHARP_);
}),graph,cljs.core.vals(com.stuartsierra.component.dependencies(component)));
}),com.stuartsierra.dependency.graph(),cljs.core.select_keys(system,component_keys));
});
com.stuartsierra.component.assoc_dependency = (function com$stuartsierra$component$assoc_dependency(system,component,dependency_key,system_key){
var dependency = com.stuartsierra.component.get_dependency(system,system_key,component,dependency_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,dependency_key,dependency);
});
com.stuartsierra.component.assoc_dependencies = (function com$stuartsierra$component$assoc_dependencies(component,system){
return cljs.core.reduce_kv((function (p1__38798_SHARP_,p2__38799_SHARP_,p3__38800_SHARP_){
return com.stuartsierra.component.assoc_dependency(system,p1__38798_SHARP_,p2__38799_SHARP_,p3__38800_SHARP_);
}),component,com.stuartsierra.component.dependencies(component));
});
com.stuartsierra.component.try_action = (function com$stuartsierra$component$try_action(component,system,key,f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,component,args);
}catch (e38802){var t = e38802;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error in component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in system "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.stuartsierra.component.platform.type_name(system)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" calling "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$com$stuartsierra$component_SLASH_component_DASH_function_DASH_threw_DASH_exception,cljs.core.cst$kw$function,f,cljs.core.cst$kw$system_DASH_key,key,cljs.core.cst$kw$component,component,cljs.core.cst$kw$system,system], null),t);
}});
/**
 * Invokes (apply f component args) on each of the components at
 *   component-keys in the system, in dependency order. Before invoking
 *   f, assoc's updated dependencies of the component.
 */
com.stuartsierra.component.update_system = (function com$stuartsierra$component$update_system(var_args){
var args__8829__auto__ = [];
var len__8822__auto___38807 = arguments.length;
var i__8823__auto___38808 = (0);
while(true){
if((i__8823__auto___38808 < len__8822__auto___38807)){
args__8829__auto__.push((arguments[i__8823__auto___38808]));

var G__38809 = (i__8823__auto___38808 + (1));
i__8823__auto___38808 = G__38809;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((3) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((3)),(0),null)):null);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8830__auto__);
});

com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.try_action(com.stuartsierra.component.assoc_dependencies(com.stuartsierra.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(graph),component_keys));
});

com.stuartsierra.component.update_system.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system.cljs$lang$applyTo = (function (seq38803){
var G__38804 = cljs.core.first(seq38803);
var seq38803__$1 = cljs.core.next(seq38803);
var G__38805 = cljs.core.first(seq38803__$1);
var seq38803__$2 = cljs.core.next(seq38803__$1);
var G__38806 = cljs.core.first(seq38803__$2);
var seq38803__$3 = cljs.core.next(seq38803__$2);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic(G__38804,G__38805,G__38806,seq38803__$3);
});

/**
 * Like update-system but operates in reverse dependency order.
 */
com.stuartsierra.component.update_system_reverse = (function com$stuartsierra$component$update_system_reverse(var_args){
var args__8829__auto__ = [];
var len__8822__auto___38814 = arguments.length;
var i__8823__auto___38815 = (0);
while(true){
if((i__8823__auto___38815 < len__8822__auto___38814)){
args__8829__auto__.push((arguments[i__8823__auto___38815]));

var G__38816 = (i__8823__auto___38815 + (1));
i__8823__auto___38815 = G__38816;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((3) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((3)),(0),null)):null);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8830__auto__);
});

com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph(system,component_keys);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system__$1,key,com.stuartsierra.component.try_action(com.stuartsierra.component.assoc_dependencies(com.stuartsierra.component.get_component(system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(graph),component_keys)));
});

com.stuartsierra.component.update_system_reverse.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system_reverse.cljs$lang$applyTo = (function (seq38810){
var G__38811 = cljs.core.first(seq38810);
var seq38810__$1 = cljs.core.next(seq38810);
var G__38812 = cljs.core.first(seq38810__$1);
var seq38810__$2 = cljs.core.next(seq38810__$1);
var G__38813 = cljs.core.first(seq38810__$2);
var seq38810__$3 = cljs.core.next(seq38810__$2);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic(G__38811,G__38812,G__38813,seq38810__$3);
});

/**
 * Recursively starts components in the system, in dependency order,
 *   assoc'ing in their dependencies along the way. component-keys is a
 *   collection of keys (order doesn't matter) in the system specifying
 *   the components to start, defaults to all keys in the system.
 */
com.stuartsierra.component.start_system = (function com$stuartsierra$component$start_system(var_args){
var args38817 = [];
var len__8822__auto___38820 = arguments.length;
var i__8823__auto___38821 = (0);
while(true){
if((i__8823__auto___38821 < len__8822__auto___38820)){
args38817.push((arguments[i__8823__auto___38821]));

var G__38822 = (i__8823__auto___38821 + (1));
i__8823__auto___38821 = G__38822;
continue;
} else {
}
break;
}

var G__38819 = args38817.length;
switch (G__38819) {
case 1:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38817.length)].join('')));

}
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system(system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.start;},cljs.core.cst$sym$com$stuartsierra$component_SLASH_start,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$protocol,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$stuartsierra$component_SLASH_Lifecycle,cljs.core.cst$sym$com$stuartsierra$component,cljs.core.cst$sym$start,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/com/stuartsierra/component.cljc",9,1,5,6,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component], null)),"Begins operation of this component. Synchronous, does not return\n  until the component is started. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.start)?com.stuartsierra.component.start.cljs$lang$test:null)])));
});

com.stuartsierra.component.start_system.cljs$lang$maxFixedArity = 2;

/**
 * Recursively stops components in the system, in reverse dependency
 *   order. component-keys is a collection of keys (order doesn't matter)
 *   in the system specifying the components to stop, defaults to all
 *   keys in the system.
 */
com.stuartsierra.component.stop_system = (function com$stuartsierra$component$stop_system(var_args){
var args38824 = [];
var len__8822__auto___38827 = arguments.length;
var i__8823__auto___38828 = (0);
while(true){
if((i__8823__auto___38828 < len__8822__auto___38827)){
args38824.push((arguments[i__8823__auto___38828]));

var G__38829 = (i__8823__auto___38828 + (1));
i__8823__auto___38828 = G__38829;
continue;
} else {
}
break;
}

var G__38826 = args38824.length;
switch (G__38826) {
case 1:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38824.length)].join('')));

}
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2(system,cljs.core.keys(system));
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system_reverse(system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.stop;},cljs.core.cst$sym$com$stuartsierra$component_SLASH_stop,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$protocol,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$com$stuartsierra$component_SLASH_Lifecycle,cljs.core.cst$sym$com$stuartsierra$component,cljs.core.cst$sym$stop,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/com/stuartsierra/component.cljc",8,1,5,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$component], null)),"Ceases operation of this component. Synchronous, does not return\n  until the component is stopped. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.stop)?com.stuartsierra.component.stop.cljs$lang$test:null)])));
});

com.stuartsierra.component.stop_system.cljs$lang$maxFixedArity = 2;


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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.component.SystemMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1(system__$1);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k38832,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__38834 = k38832;
switch (G__38834) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38832,else__8279__auto__);

}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#com.stuartsierra.component.SystemMap{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38831){
var self__ = this;
var G__38831__$1 = this;
return (new cljs.core.RecordIter((0),G__38831__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
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

com.stuartsierra.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
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

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__38831){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__38835 = cljs.core.keyword_identical_QMARK_;
var expr__38836 = k__8284__auto__;
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__38831),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__38831){
var self__ = this;
var this__8275__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(G__38831,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

com.stuartsierra.component.SystemMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.stuartsierra.component.SystemMap.cljs$lang$type = true;

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.__GT_SystemMap = (function com$stuartsierra$component$__GT_SystemMap(){
return (new com.stuartsierra.component.SystemMap(null,null,null));
});

com.stuartsierra.component.map__GT_SystemMap = (function com$stuartsierra$component$map__GT_SystemMap(G__38833){
return (new com.stuartsierra.component.SystemMap(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__38833),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write(writer,"#<SystemMap>");
});
/**
 * Returns a system constructed of key/value pairs. The system has
 *   default implementations of the Lifecycle 'start' and 'stop' methods
 *   which recursively start/stop all components in the system.
 * 
 *   System maps print as #<SystemMap> to avoid overwhelming the printer
 *   with large objects. As a consequence, printed system maps cannot be
 *   'read'. To disable this behavior and print system maps like normal
 *   records, call
 *   (remove-method clojure.core/print-method com.stuartsierra.component.SystemMap)
 */
com.stuartsierra.component.system_map = (function com$stuartsierra$component$system_map(var_args){
var args__8829__auto__ = [];
var len__8822__auto___38840 = arguments.length;
var i__8823__auto___38841 = (0);
while(true){
if((i__8823__auto___38841 < len__8822__auto___38840)){
args__8829__auto__.push((arguments[i__8823__auto___38841]));

var G__38842 = (i__8823__auto___38841 + (1));
i__8823__auto___38841 = G__38842;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
if(cljs.core.even_QMARK_(cljs.core.count(keyvals))){
} else {
throw com.stuartsierra.component.platform.argument_error("system-map requires an even number of arguments");
}

return com.stuartsierra.component.map__GT_SystemMap(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,keyvals));
});

com.stuartsierra.component.system_map.cljs$lang$maxFixedArity = (0);

com.stuartsierra.component.system_map.cljs$lang$applyTo = (function (seq38839){
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38839));
});

/**
 * True if the error has ex-data indicating it was thrown by something
 *   in the com.stuartsierra.component namespace.
 */
com.stuartsierra.component.ex_component_QMARK_ = (function com$stuartsierra$component$ex_component_QMARK_(error){
var map__38845 = cljs.core.ex_data(error);
var map__38845__$1 = ((((!((map__38845 == null)))?((((map__38845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38845):map__38845);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38845__$1,cljs.core.cst$kw$reason);
return ((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("com.stuartsierra.component",cljs.core.namespace(reason)));
});
/**
 * If the error has ex-data provided by the com.stuartsierra.component
 *   namespace, returns a new exception instance with the :component
 *   and :system removed from its ex-data. Preserves the other details of
 *   the original error. If the error was not created by this namespace,
 *   returns it unchanged. Use this when you want to catch and rethrow
 *   exceptions without including the full component or system.
 */
com.stuartsierra.component.ex_without_components = (function com$stuartsierra$component$ex_without_components(error){
if(cljs.core.truth_(com.stuartsierra.component.ex_component_QMARK_(error))){
return com.stuartsierra.component.platform.alter_ex_data.cljs$core$IFn$_invoke$arity$variadic(error,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$component,cljs.core.cst$kw$system], 0));
} else {
return error;
}
});
