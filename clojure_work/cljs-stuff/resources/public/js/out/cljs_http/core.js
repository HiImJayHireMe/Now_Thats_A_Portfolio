// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__12185){
var vec__12186 = p__12185;
var k = cljs.core.nth.call(null,vec__12186,(0),null);
var v = cljs.core.nth.call(null,vec__12186,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__12190 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__12190)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__12190)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__12190)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__12190)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__12190)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__12190)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__12191){
var map__12195 = p__12191;
var map__12195__$1 = ((((!((map__12195 == null)))?((((map__12195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12195):map__12195);
var request = map__12195__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12195__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__12195__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__12195__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__12197 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__12197,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__12197,response_type);

G__12197.setTimeoutInterval(timeout);

G__12197.setWithCredentials(send_credentials);

return G__12197;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__12198){
var map__12226 = p__12198;
var map__12226__$1 = ((((!((map__12226 == null)))?((((map__12226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12226):map__12226);
var request = map__12226__$1;
var request_method = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__12226__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__6409__auto__ = request_method;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_12253 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__12228_12254 = xhr__$1;
G__12228_12254.setProgressEventsEnabled(true);

G__12228_12254.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_12253,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__12228_12254.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_12253,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__9355__auto___12255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_12239){
var state_val_12240 = (state_12239[(1)]);
if((state_val_12240 === (1))){
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12239__$1,(2),cancel);
} else {
if((state_val_12240 === (2))){
var inst_12230 = (state_12239[(2)]);
var inst_12231 = xhr__$1.isComplete();
var inst_12232 = cljs.core.not.call(null,inst_12231);
var state_12239__$1 = (function (){var statearr_12241 = state_12239;
(statearr_12241[(7)] = inst_12230);

return statearr_12241;
})();
if(inst_12232){
var statearr_12242_12256 = state_12239__$1;
(statearr_12242_12256[(1)] = (3));

} else {
var statearr_12243_12257 = state_12239__$1;
(statearr_12243_12257[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (3))){
var inst_12234 = xhr__$1.abort();
var state_12239__$1 = state_12239;
var statearr_12244_12258 = state_12239__$1;
(statearr_12244_12258[(2)] = inst_12234);

(statearr_12244_12258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (4))){
var state_12239__$1 = state_12239;
var statearr_12245_12259 = state_12239__$1;
(statearr_12245_12259[(2)] = null);

(statearr_12245_12259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12240 === (5))){
var inst_12237 = (state_12239[(2)]);
var state_12239__$1 = state_12239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12239__$1,inst_12237);
} else {
return null;
}
}
}
}
}
});})(c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__9243__auto__,c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__9244__auto__ = null;
var cljs_http$core$xhr_$_state_machine__9244__auto____0 = (function (){
var statearr_12249 = [null,null,null,null,null,null,null,null];
(statearr_12249[(0)] = cljs_http$core$xhr_$_state_machine__9244__auto__);

(statearr_12249[(1)] = (1));

return statearr_12249;
});
var cljs_http$core$xhr_$_state_machine__9244__auto____1 = (function (state_12239){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_12239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e12250){if((e12250 instanceof Object)){
var ex__9247__auto__ = e12250;
var statearr_12251_12260 = state_12239;
(statearr_12251_12260[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12261 = state_12239;
state_12239 = G__12261;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__9244__auto__ = function(state_12239){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__9244__auto____1.call(this,state_12239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__9244__auto____0;
cljs_http$core$xhr_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__9244__auto____1;
return cljs_http$core$xhr_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__9357__auto__ = (function (){var statearr_12252 = f__9356__auto__.call(null);
(statearr_12252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___12255);

return statearr_12252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___12255,channel,request_url,method,headers__$1,xhr__$1,map__12226,map__12226__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__12262){
var map__12279 = p__12262;
var map__12279__$1 = ((((!((map__12279 == null)))?((((map__12279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12279):map__12279);
var request = map__12279__$1;
var timeout = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__12279__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_12295 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_12295], null));

if(cljs.core.truth_(cancel)){
var c__9355__auto___12296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_12285){
var state_val_12286 = (state_12285[(1)]);
if((state_val_12286 === (1))){
var state_12285__$1 = state_12285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12285__$1,(2),cancel);
} else {
if((state_val_12286 === (2))){
var inst_12282 = (state_12285[(2)]);
var inst_12283 = jsonp__$1.cancel(req_12295);
var state_12285__$1 = (function (){var statearr_12287 = state_12285;
(statearr_12287[(7)] = inst_12282);

return statearr_12287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12285__$1,inst_12283);
} else {
return null;
}
}
});})(c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__9243__auto__,c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__9244__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__9244__auto____0 = (function (){
var statearr_12291 = [null,null,null,null,null,null,null,null];
(statearr_12291[(0)] = cljs_http$core$jsonp_$_state_machine__9244__auto__);

(statearr_12291[(1)] = (1));

return statearr_12291;
});
var cljs_http$core$jsonp_$_state_machine__9244__auto____1 = (function (state_12285){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_12285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e12292){if((e12292 instanceof Object)){
var ex__9247__auto__ = e12292;
var statearr_12293_12297 = state_12285;
(statearr_12293_12297[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12298 = state_12285;
state_12285 = G__12298;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__9244__auto__ = function(state_12285){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__9244__auto____1.call(this,state_12285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__9244__auto____0;
cljs_http$core$jsonp_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__9244__auto____1;
return cljs_http$core$jsonp_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__9357__auto__ = (function (){var statearr_12294 = f__9356__auto__.call(null);
(statearr_12294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___12296);

return statearr_12294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___12296,req_12295,channel,jsonp__$1,map__12279,map__12279__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__12299){
var map__12302 = p__12299;
var map__12302__$1 = ((((!((map__12302 == null)))?((((map__12302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12302):map__12302);
var request__$1 = map__12302__$1;
var request_method = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map