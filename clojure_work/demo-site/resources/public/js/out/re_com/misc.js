// Compiled by ClojureScript 1.9.518 {}
goog.provide('re_com.misc');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
re_com.misc.input_text_args_desc = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"text of the input (can be atom or value)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. Passed the current input string"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(3),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"ONLY applies to 'input-textarea': the number of rows of text to show"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," function on blur, otherwise on every change (character by character)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"regex",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.regex_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user input is only accepted if it would result in a string that matches this regular expression"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"ONLY applies to super function 'base-input-text': either :input or :textarea"], null)], null);
/**
 * Returns markup for a basic text input label
 */
re_com.misc.input_text_base = (function re_com$misc$input_text_base(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54832 = arguments.length;
var i__29971__auto___54833 = (0);
while(true){
if((i__29971__auto___54833 < len__29970__auto___54832)){
args__29977__auto__.push((arguments[i__29971__auto___54833]));

var G__54834 = (i__29971__auto___54833 + (1));
i__29971__auto___54833 = G__54834;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__54824){
var map__54825 = p__54824;
var map__54825__$1 = ((((!((map__54825 == null)))?((((map__54825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54825):map__54825);
var args = map__54825__$1;
var model = cljs.core.get.call(null,map__54825__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.call(null,map__54825__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.input_text_args_desc),args,"input-text")))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var external_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model));
var internal_model = reagent.core.atom.call(null,(((cljs.core.deref.call(null,external_model) == null))?"":cljs.core.deref.call(null,external_model)));
return ((function (external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function() { 
var G__54835__delegate = function (p__54827){
var map__54828 = p__54827;
var map__54828__$1 = ((((!((map__54828 == null)))?((((map__54828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54828):map__54828);
var args__$1 = map__54828__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var validation_regex = cljs.core.get.call(null,map__54828__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.input_text_args_desc),args__$1,"input-text")))){
} else {
throw (new Error("Assert failed: (validate-args-macro input-text-args-desc args \"input-text\")"));
}

var latest_ext_model = re_com.util.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var showing_QMARK_ = reagent.core.atom.call(null,false);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-input-text-inner "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54830 = (((status instanceof cljs.core.Keyword))?status.fqn:null);
switch (G__54830) {
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__28737__auto__ = status;
if(cljs.core.truth_(and__28737__auto__)){
return status_icon_QMARK_;
} else {
return and__28737__auto__;
}
})())?"has-feedback":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style.call(null,"auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_type,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149)],[placeholder,disabled_QMARK___$1,cljs.core.deref.call(null,internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__28737__auto__ = on_change;
if(cljs.core.truth_(and__28737__auto__)){
var and__28737__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28737__auto____$1)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,external_model));
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
,((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"input","input",556931961)))?"text":null),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style),((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(cljs.core.truth_(rows)?rows:(3)):null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__54831_54837 = event.which;
switch (G__54831_54837) {
case (13):
if(cljs.core.truth_(on_change)){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

break;
case (27):
cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("form-control "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function (event){
var new_val_54839 = event.target.value;
if(cljs.core.truth_((function (){var and__28737__auto__ = on_change;
if(cljs.core.truth_(and__28737__auto__)){
var and__28737__auto____$1 = cljs.core.not.call(null,disabled_QMARK___$1);
if(and__28737__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find.call(null,validation_regex,new_val_54839);
} else {
return true;
}
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,internal_model,new_val_54839);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change.call(null,cljs.core.deref.call(null,internal_model));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
]),attr)], null)], null),(cljs.core.truth_((function (){var and__28737__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return status;
} else {
return and__28737__auto__;
}
})())?(cljs.core.truth_(status_tooltip)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"label","label",1718410804),status_tooltip,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right-center","right-center",2147253074),new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("zmdi "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"zmdi-alert-triangle":"zmdi-alert-circle")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__28737__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return status;
} else {
return and__28737__auto__;
}
})())?"1":"0")], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__28737__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return status;
} else {
return and__28737__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,showing_QMARK_,true);
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type){
return (function (event){
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__54828,map__54828__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,validation_regex,external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px"], null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("zmdi "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"warning","warning",-1685650671)))?"zmdi-alert-triangle":"zmdi-alert-circle")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" form-control-feedback")].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"static",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"130%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_((function (){var and__28737__auto__ = status_icon_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return status;
} else {
return and__28737__auto__;
}
})())?"1":"0"),new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)),new cljs.core.Keyword(null,"title","title",636505583),status_tooltip], null)], null)):null)], null)], null);
};
var G__54835 = function (var_args){
var p__54827 = null;
if (arguments.length > 0) {
var G__54840__i = 0, G__54840__a = new Array(arguments.length -  0);
while (G__54840__i < G__54840__a.length) {G__54840__a[G__54840__i] = arguments[G__54840__i + 0]; ++G__54840__i;}
  p__54827 = new cljs.core.IndexedSeq(G__54840__a,0);
} 
return G__54835__delegate.call(this,p__54827);};
G__54835.cljs$lang$maxFixedArity = 0;
G__54835.cljs$lang$applyTo = (function (arglist__54841){
var p__54827 = cljs.core.seq(arglist__54841);
return G__54835__delegate(p__54827);
});
G__54835.cljs$core$IFn$_invoke$arity$variadic = G__54835__delegate;
return G__54835;
})()
;
;})(external_model,internal_model,map__54825,map__54825__$1,args,model,input_type))
});

re_com.misc.input_text_base.cljs$lang$maxFixedArity = (0);

re_com.misc.input_text_base.cljs$lang$applyTo = (function (seq54823){
return re_com.misc.input_text_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54823));
});

re_com.misc.input_text = (function re_com$misc$input_text(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54843 = arguments.length;
var i__29971__auto___54844 = (0);
while(true){
if((i__29971__auto___54844 < len__29970__auto___54843)){
args__29977__auto__.push((arguments[i__29971__auto___54844]));

var G__54845 = (i__29971__auto___54844 + (1));
i__29971__auto___54844 = G__54845;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
});

re_com.misc.input_text.cljs$lang$maxFixedArity = (0);

re_com.misc.input_text.cljs$lang$applyTo = (function (seq54842){
return re_com.misc.input_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54842));
});

re_com.misc.input_textarea = (function re_com$misc$input_textarea(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54847 = arguments.length;
var i__29971__auto___54848 = (0);
while(true){
if((i__29971__auto___54848 < len__29970__auto___54847)){
args__29977__auto__.push((arguments[i__29971__auto___54848]));

var G__54849 = (i__29971__auto___54848 + (1));
i__29971__auto___54848 = G__54849;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,re_com.misc.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"textarea","textarea",-650375824),args);
});

re_com.misc.input_textarea.cljs$lang$maxFixedArity = (0);

re_com.misc.input_textarea.cljs$lang$applyTo = (function (seq54846){
return re_com.misc.input_textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54846));
});

re_com.misc.checkbox_args_desc = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"holds state of the checkbox when it is called"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the checkbox is clicked. Passed the new value of the checkbox"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, user interaction is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS style style map"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied to the label"], null)], null);
/**
 * I return the markup for a checkbox, with an optional RHS label
 */
re_com.misc.checkbox = (function re_com$misc$checkbox(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54854 = arguments.length;
var i__29971__auto___54855 = (0);
while(true){
if((i__29971__auto___54855 < len__29970__auto___54854)){
args__29977__auto__.push((arguments[i__29971__auto___54855]));

var G__54856 = (i__29971__auto___54855 + (1));
i__29971__auto___54855 = G__54856;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (p__54851){
var map__54852 = p__54851;
var map__54852__$1 = ((((!((map__54852 == null)))?((((map__54852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54852):map__54852);
var args = map__54852__$1;
var model = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var label = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var style = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_class = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.call(null,map__54852__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.checkbox_args_desc),args,"checkbox")))){
} else {
throw (new Error("Assert failed: (validate-args-macro checkbox-args-desc args \"checkbox\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value.call(null,model);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style){
return (function (){
if(cljs.core.truth_((function (){var and__28737__auto__ = on_change;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__28737__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-checkbox",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),model__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style))
], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54852,map__54852__$1,args,model,on_change,label,disabled_QMARK_,style,label_class,label_style))
,new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style)], null),label], null):null)], null)], null);
});

re_com.misc.checkbox.cljs$lang$maxFixedArity = (0);

re_com.misc.checkbox.cljs$lang$applyTo = (function (seq54850){
return re_com.misc.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54850));
});

re_com.misc.radio_button_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"selected value of the radio button group. See also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":model"], null)," equals ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)," then this radio button is selected"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"anything -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the radio button is clicked. Passed ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":value"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the label shown to the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the radio button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"radio button style map"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-style","label-style",-1703650121),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied overall to the component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-class","label-class",-2068991202),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS class applied to the label"], null)], null);
/**
 * I return the markup for a radio button, with an optional RHS label
 */
re_com.misc.radio_button = (function re_com$misc$radio_button(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54861 = arguments.length;
var i__29971__auto___54862 = (0);
while(true){
if((i__29971__auto___54862 < len__29970__auto___54861)){
args__29977__auto__.push((arguments[i__29971__auto___54862]));

var G__54863 = (i__29971__auto___54862 + (1));
i__29971__auto___54862 = G__54863;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__54858){
var map__54859 = p__54858;
var map__54859__$1 = ((((!((map__54859 == null)))?((((map__54859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54859):map__54859);
var args = map__54859__$1;
var model = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var style = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label_class = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"label-class","label-class",-2068991202));
var label_style = cljs.core.get.call(null,map__54859__$1,new cljs.core.Keyword(null,"label-style","label-style",-1703650121));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.radio_button_args_desc),args,"radio-button")))){
} else {
throw (new Error("Assert failed: (validate-args-macro radio-button-args-desc args \"radio-button\")"));
}

var cursor = "default";
var model__$1 = re_com.util.deref_or_value.call(null,model);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var callback_fn = ((function (cursor,model__$1,disabled_QMARK___$1,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style){
return (function (){
if(cljs.core.truth_((function (){var and__28737__auto__ = on_change;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__28737__auto__;
}
})())){
return on_change.call(null,cljs.core.not.call(null,model__$1));
} else {
return null;
}
});})(cursor,model__$1,disabled_QMARK___$1,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style))
;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-radio-button",new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),style),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,model__$1,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style))
], null)], null),(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style){
return (function (event){
callback_fn.call(null);

return null;
});})(cursor,model__$1,disabled_QMARK___$1,callback_fn,map__54859,map__54859__$1,args,model,on_change,value,label,disabled_QMARK_,style,label_class,label_style))
,new cljs.core.Keyword(null,"class","class",-2030961996),label_class,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"8px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor], null),label_style)], null),label], null):null)], null)], null);
});

re_com.misc.radio_button.cljs$lang$maxFixedArity = (0);

re_com.misc.radio_button.cljs$lang$applyTo = (function (seq54857){
return re_com.misc.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54857));
});

re_com.misc.slider_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when the slider is moved. Passed the new value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the minimum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(100),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum value of the slider"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(1),new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"step value between min and max"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"400px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't change the slider"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * Returns markup for an HTML5 slider input
 */
re_com.misc.slider = (function re_com$misc$slider(){
return (function() { 
var G__54870__delegate = function (p__54867){
var map__54868 = p__54867;
var map__54868__$1 = ((((!((map__54868 == null)))?((((map__54868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54868):map__54868);
var args = map__54868__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var step = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var model = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var width = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var style = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var max = cljs.core.get.call(null,map__54868__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.slider_args_desc),args,"slider")))){
} else {
throw (new Error("Assert failed: (validate-args-macro slider-args-desc args \"slider\")"));
}

var model__$1 = re_com.util.deref_or_value.call(null,model);
var min__$1 = re_com.util.deref_or_value.call(null,min);
var max__$1 = re_com.util.deref_or_value.call(null,max);
var step__$1 = re_com.util.deref_or_value.call(null,step);
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[min__$1,disabled_QMARK___$1,model__$1,"range",cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"400px"),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK___$1)?"not-allowed":"default")], null),style),max__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-slider "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__54868,map__54868__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max){
return (function (event){
on_change.call(null,Number(event.target.value));

return null;
});})(model__$1,min__$1,max__$1,step__$1,disabled_QMARK___$1,map__54868,map__54868__$1,args,disabled_QMARK_,on_change,step,model,attr,min,width,style,class$,max))
,step__$1]),attr)], null)], null);
};
var G__54870 = function (var_args){
var p__54867 = null;
if (arguments.length > 0) {
var G__54871__i = 0, G__54871__a = new Array(arguments.length -  0);
while (G__54871__i < G__54871__a.length) {G__54871__a[G__54871__i] = arguments[G__54871__i + 0]; ++G__54871__i;}
  p__54867 = new cljs.core.IndexedSeq(G__54871__a,0);
} 
return G__54870__delegate.call(this,p__54867);};
G__54870.cljs$lang$maxFixedArity = 0;
G__54870.cljs$lang$applyTo = (function (arglist__54872){
var p__54867 = cljs.core.seq(arglist__54872);
return G__54870__delegate(p__54867);
});
G__54870.cljs$core$IFn$_invoke$arity$variadic = G__54870__delegate;
return G__54870;
})()
;
});
re_com.misc.progress_bar_args_desc = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"double | string | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"current value of the slider. A number between 0 and 100"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"striped?","striped?",-797214979),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the progress section is a set of animated stripes"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * Render a bootstrap styled progress bar
 */
re_com.misc.progress_bar = (function re_com$misc$progress_bar(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54877 = arguments.length;
var i__29971__auto___54878 = (0);
while(true){
if((i__29971__auto___54878 < len__29970__auto___54877)){
args__29977__auto__.push((arguments[i__29971__auto___54878]));

var G__54879 = (i__29971__auto___54878 + (1));
i__29971__auto___54878 = G__54879;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic = (function (p__54874){
var map__54875 = p__54874;
var map__54875__$1 = ((((!((map__54875 == null)))?((((map__54875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54875):map__54875);
var args = map__54875__$1;
var model = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"width","width",-384071477),"100%");
var striped_QMARK_ = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"striped?","striped?",-797214979));
var class$ = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__54875__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.progress_bar_args_desc),args,"progress-bar")))){
} else {
throw (new Error("Assert failed: (validate-args-macro progress-bar-args-desc args \"progress-bar\")"));
}

var model__$1 = re_com.util.deref_or_value.call(null,model);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-progress-bar progress "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style)], null),attr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("progress-bar "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(striped_QMARK_)?"progress-bar-striped active":null))].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"progressbar",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join(''),new cljs.core.Keyword(null,"transition","transition",765692007),"none"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(model__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('')], null)], null)], null);
});

re_com.misc.progress_bar.cljs$lang$maxFixedArity = (0);

re_com.misc.progress_bar.cljs$lang$applyTo = (function (seq54873){
return re_com.misc.progress_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54873));
});

re_com.misc.throbber_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.throbber_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.throbber_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"default","default",-1987822328),"#999",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * Render an animated throbber using CSS
 */
re_com.misc.throbber = (function re_com$misc$throbber(var_args){
var args__29977__auto__ = [];
var len__29970__auto___54885 = arguments.length;
var i__29971__auto___54886 = (0);
while(true){
if((i__29971__auto___54886 < len__29970__auto___54885)){
args__29977__auto__.push((arguments[i__29971__auto___54886]));

var G__54887 = (i__29971__auto___54886 + (1));
i__29971__auto___54886 = G__54887;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic = (function (p__54881){
var map__54882 = p__54881;
var map__54882__$1 = ((((!((map__54882 == null)))?((((map__54882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54882):map__54882);
var args = map__54882__$1;
var size = cljs.core.get.call(null,map__54882__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__54882__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var class$ = cljs.core.get.call(null,map__54882__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__54882__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__54882__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.misc.throbber_args_desc),args,"throbber")))){
} else {
throw (new Error("Assert failed: (validate-args-macro throbber-args-desc args \"throbber\")"));
}

var seg = ((function (map__54882,map__54882__$1,args,size,color,class$,style,attr){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null)], null):null)], null);
});})(map__54882,map__54882__$1,args,size,color,class$,style,attr))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-throbber loader "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__54884 = (((size instanceof cljs.core.Keyword))?size.fqn:null);
switch (G__54884) {
case "regular":
return "";

break;
case "small":
return "small ";

break;
case "large":
return "large ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [seg], null)], null)], null);
});

re_com.misc.throbber.cljs$lang$maxFixedArity = (0);

re_com.misc.throbber.cljs$lang$applyTo = (function (seq54880){
return re_com.misc.throbber.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54880));
});


//# sourceMappingURL=misc.js.map