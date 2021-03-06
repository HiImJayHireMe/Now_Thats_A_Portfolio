// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.remote');
goog.require('cljs.core');
goog.require('dat.reactor');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
/**
 * Public API function wrapping dat.spec.protocols/send-event! of the PRemoteSendEvent protocol
 */
dat.remote.send_event_BANG_ = (function dat$remote$send_event_BANG_(remote,event){
return dat.spec.protocols.send_event_BANG_.call(null,remote,event);
});
/**
 * Public API function for returning the event chan of the remote; May remove ability to specify handler
 *   function via PRemoteSendEvent.
 */
dat.remote.event_chan = (function dat$remote$event_chan(remote){
return dat.spec.protocols.remote_event_chan.call(null,remote);
});
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.remote","send-event!","dat.remote/send-event!",934871644),(function (app,db,p__57062){
var vec__57063 = p__57062;
var event_id = cljs.core.nth.call(null,vec__57063,(0),null);
var server_event = cljs.core.nth.call(null,vec__57063,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote","/tmp/form-init6286146101766555450.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__57063,event_id,server_event){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-event! called"], null);
});})(vec__57063,event_id,server_event))
,null)),null,307954301);

return dat.remote.send_event_BANG_.call(null,new cljs.core.Keyword(null,"remote","remote",-1593576576).cljs$core$IFn$_invoke$arity$1(app),server_event);
}));

//# sourceMappingURL=remote.js.map