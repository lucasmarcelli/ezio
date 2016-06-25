if (self.CavalryLogger) { CavalryLogger.start_js(["yVaxW"]); }

__d('EgoAdsObjectSet',['csx','DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){'use strict';this._allEgoUnits=[];this._egoUnits=[];}i.prototype.init=function(k){'use strict';this._allEgoUnits=k;this._egoUnits=[];this._allEgoUnits.forEach(function(l){var m=j(l);if(!m||!m.holdout)this._egoUnits.push(l);},this);};i.prototype.getCount=function(){'use strict';return this._egoUnits.length;};i.prototype.forEach=function(k,l){'use strict';this._egoUnits.forEach(k,l);};i.prototype.getUnit=function(k){'use strict';return this._egoUnits[k];};i.prototype.getHoldoutAdIDsForSpace=function(k,l){'use strict';if(!k||!l)return [];var m=[];for(var n=0;k>0&&n<this._allEgoUnits.length;n++){var o=this._allEgoUnits[n],p=l(o),q=j(o);if(k>=p&&q&&q.holdout)m.push(q.adid);k-=p;}return m;};i.prototype.getHoldoutAdIDsForNumAds=function(k){'use strict';k=Math.min(k,this._allEgoUnits.length);var l=[];for(var m=0;m<k;m++){var n=this._allEgoUnits[m],o=j(n);if(o&&o.holdout)l.push(o.adid);}return l;};function j(k){var l=c('DOM').scry(k,"div._4u8")[0],m=l&&l.getAttribute('data-ad');return m&&JSON.parse(m)||undefined;}f.exports=i;},null);
__d('WebMessengerEvents',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=Object.assign(new (c('Arbiter'))(),{MASTER_DOM_CHANGED:'master-dom-changed',DETAIL_DOM_CHANGED:'detail-dom-changed',FOCUS_COMPOSER:'focus-composer',FOCUS_SEARCH:'focus-search',FOCUS_AND_SELECT_SEARCH:'focus-and-select-search',STICKER_CLICKED:'sticker-clicked',SUBMIT_REPLY:'submit-reply',UPDATE_SELECTION:'update-selection',masterDOMChanged:function(){this.inform(h.MASTER_DOM_CHANGED);},detailDOMChanged:function(){this.inform(h.DETAIL_DOM_CHANGED);},focusComposer:function(){this.inform(h.FOCUS_COMPOSER);},focusSearch:function(){this.inform(h.FOCUS_SEARCH);},focusAndSelectSearch:function(){this.inform(h.FOCUS_AND_SELECT_SEARCH);},updateSelection:function(i){this.inform(h.UPDATE_SELECTION,i);},stickerClicked:function(i,j){this.inform(h.STICKER_CLICKED,{packID:i,stickerID:j});},submitReply:function(){this.inform(h.SUBMIT_REPLY);}});f.exports=h;},null);
__d('WebMessengerSubscriptionsHandler',['SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=new (c('SubscriptionsHandler'))('webmessenger');f.exports=h;},null);
__d("isWebMessengerURI",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return (/^(\/messages)/.test(i.getPath()));}f.exports=h;},null);
__d('WebMessengerWidthControl',['csx','Arbiter','BlueBar','CSS','CSSClassTransition','Event','Style','URI','ViewportBounds','WebMessengerEvents','WebMessengerSubscriptionsHandler','$','getViewportDimensions','isWebMessengerURI','requestAnimationFrame','shield','throttle'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=205,j=981,k=257,l=18,m=848,n=724,o=.57,p=56,q,r,s;function t(y,z,aa){this.masterChanged=y;this.detailChaned=z;c('WebMessengerSubscriptionsHandler').addSubscriptions(c('Event').listen(window,'resize',c('throttle')(c('shield')(u,this,this),100)),c('Arbiter').subscribe(['sidebar/initialized','sidebar/visibility','minisidebar/show'],c('shield')(u,this,this),c('Arbiter').SUBSCRIBE_NEW));var ba=x()?p:0;if(aa)ba=i;this._width=x()?0:m;s=true;u(this,ba);}function u(y,z){var aa=c('ViewportBounds').getRight()+c('ViewportBounds').getLeft();aa=aa||z||0;var ba=c('getViewportDimensions').withoutScrollbars().width-aa,ca=Math.round(Math.max(0,ba/2-j/2));ba=j+ca-k;ba-=l;ba=Math.max(n,Math.min(m,ba));if(!isNaN(ba)&&y._width!==ba){y._width=ba;var da=Math.round(ba/(1+o)),ea=ba-da;y.masterChanged(ea);y.detailChaned(da);if(x()){var fa=ba+k;v(function(){if(r){document.body.className=r;r='';}w(fa+'px');s&&c('WebMessengerEvents').detailDOMChanged();s=false;},r);}}}function v(y,z){c('requestAnimationFrame')(y);}function w(y){c('Style').set(c('BlueBar').getNavRoot(),'width',y);c('Style').set(c('$')('globalContainer'),'width',y);}function x(){if(!q)q=c('CSS').matchesSelector(document.body,"._6nw");return q;}c('CSSClassTransition').registerHandler(function(y,z,aa,ba){function ca(da){return x()&&c('isWebMessengerURI')(new (c('URI'))(da));}if(ca(ba)){r=z;return true;}else if(ca(aa)){v(function(){y.className=z;w('');},true);return true;}});f.exports=t;},null);
__d('Dock',['csx','Event','shield','WebMessengerWidthControl','Arbiter','ArbiterMixin','BlueBar','ChatQuietLinks','CSS','DataStore','DOM','Parent','Scroll','Style','Toggler','Vector','emptyFunction'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();c('WebMessengerWidthControl');function i(){}Object.assign(i,c('ArbiterMixin'),{MIN_HEIGHT:140,INITIAL_FLYOUT_HEIGHT_OFFSET:10,init:function(j){this.init=c('emptyFunction');this.rootEl=j;this.calculateViewportDimensions();c('ChatQuietLinks').removeEmptyHrefs(this.rootEl);c('Event').listen(j,'click',this._onClick.bind(this));c('Event').listen(window,'resize',this._onWindowResize.bind(this));c('Toggler').subscribe(['show','hide'],function(k,l){var m=l.getActive();if(!c('DOM').contains(j,m))return;if(c('CSS').hasClass(m,'fbNub')){this.notifyNub(m,k);if(k==='show')this._resizeNubFlyout(m);}else{var n=c('Parent').byClass(m,'fbNubFlyout');if(n)c('CSS').conditionClass(n,'menuOpened',k==='show');}}.bind(this));this.inform('init',{},c('Arbiter').BEHAVIOR_PERSISTENT);},calculateViewportDimensions:function(){return this.viewportDimensions=c('Vector').getViewportDimensions();},getFlyoutHeightOffset:function(){if(this.flyoutHeightOffset)return this.flyoutHeightOffset;this.flyoutHeightOffset=this.INITIAL_FLYOUT_HEIGHT_OFFSET+c('Vector').getElementDimensions(this.rootEl).y;var j=c('BlueBar').getBar();if(j){var k=c('Style').isFixed(j)?'viewport':'document';this.flyoutHeightOffset+=c('Vector').getElementPosition(j,k).y+c('Vector').getElementDimensions(j).y;}return this.flyoutHeightOffset;},toggle:function(j){var k=this._findFlyout(j);if(!k)return;this.subscribe('init',function(){c('Toggler').toggle(j);});},show:function(j){this.subscribe('init',function(){c('Toggler').show(j);});},showNub:function(j){c('CSS').show(j);},hide:function(j){this.subscribe('init',function(){var k=c('Toggler').getInstance(j);c('DOM').contains(j,k.getActive())&&k.hide();});},hideNub:function(j){c('CSS').hide(j);this.hide(j);},setUseMaxHeight:function(j,k){c('CSS').conditionClass(j,'maxHeight',k!==false);this._resizeNubFlyout(j);},_resizeNubFlyout:function(j){var k=this._findFlyout(j);if(!k||c('CSS').hasClass(j,'placeholder')||!(c('CSS').hasClass(j,'openToggler')||c('CSS').hasClass(j,'opened')))return;var l=c('DOM').find(k,'div.fbNubFlyoutOuter'),m=c('DOM').find(l,'div.fbNubFlyoutInner'),n=c('DOM').find(m,'div.fbNubFlyoutBody'),o=c('Scroll').getTop(n),p=n.offsetHeight;c('Style').set(n,'height','auto');var q=c('Vector').getElementDimensions(k),r=c('Vector').getElementDimensions(n),s=this.getMaxFlyoutHeight(j);c('Style').set(k,'max-height',s+'px');c('Style').set(l,'max-height',s+'px');q=c('Vector').getElementDimensions(k);var t=c('Vector').getElementDimensions(m),u=t.y-r.y,v=q.y-u,w=parseInt(n.style.height||n.clientHeight,10),x=v!==w;if(q.y>u&&x)c('Style').set(n,'height',v+'px');c('CSS').removeClass(k,'swapDirection');var y=c('Vector').getElementPosition(k).x;c('CSS').conditionClass(k,'swapDirection',function(){if(y<0)return true;return y+q.x>this.viewportDimensions.x;}.bind(this)());if(x&&o+p>=r.y){c('Scroll').setTop(n,n.scrollHeight);}else c('Scroll').setTop(n,o);this.notifyNub(j,'resize');},getMaxFlyoutHeight:function(j){var k=this._findFlyout(j),l=c('Vector').getElementPosition(k,'viewport'),m=c('Vector').getElementDimensions(k),n=Math.max(this.MIN_HEIGHT,this.viewportDimensions.y-this.getFlyoutHeightOffset())-(this.viewportDimensions.y-l.y-m.y);return Math.max(n,0);},resizeAllFlyouts:function(){var j=this._getAllNubs(),k=j.length;while(k--)this._resizeNubFlyout(j[k]);},hideAllFlyouts:function(){var j=this._getAllNubs(),k=j.length;while(k--)this.hide(j[k]);},_getAllNubs:function(){var j=c('DOM').scry(this.rootEl,"div._50-v.openToggler");return j.concat(c('DOM').scry(this.rootEl,"div._50-v.opened"));},_onClick:function(event){var j=event.getTarget(),k=c('Parent').byClass(j,'fbNub');if(k){if(c('Parent').byClass(j,'fbNubFlyoutTitlebar')){var l=c('Parent').byTag(j,'a'),m=j.nodeName=='INPUT'&&j.getAttribute('type')=='submit';if(!l&&!m){this.hide(k);return false;}}this.notifyNub(k,'click');}},_onWindowResize:function(event){this.calculateViewportDimensions();this.resizeAllFlyouts();},_findFlyout:function(j){return c('CSS').hasClass(j,'fbNubFlyout')?j:c('DOM').scry(j,'div.fbNubFlyout')[0]||null;},registerNubController:function(j,k){c('DataStore').set(j,'dock:nub:controller',k);k.subscribe('nub/button/content-changed',c('shield')(this.inform,this,'resize',j));k.subscribe('nub/flyout/content-changed',c('shield')(this._resizeNubFlyout,this,j));},unregisterNubController:function(j){c('DataStore').remove(j,'dock:nub:controller');},notifyNub:function(j,k,l){var m=c('DataStore').get(j,'dock:nub:controller');m&&m.inform(k,l);}});f.exports=b.Dock||i;},null);
__d('NubController',['ArbiterMixin','Dock'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){}Object.assign(h.prototype,c('ArbiterMixin'),{init:function(i){this.el=i;c('Dock').registerNubController(i,this);return this;},buttonContentChanged:function(){this.inform('nub/button/content-changed');},flyoutContentChanged:function(){this.inform('nub/flyout/content-changed');},hide:function(){c('Dock').hide(this.el);},show:function(){c('Dock').show(this.el);}});f.exports=h;},null);
__d('ChatTabViewEvents',['Arbiter'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new (c('Arbiter'))();},null);
__d('MessengerDispatcher',['Dispatcher_DEPRECATED'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new (c('Dispatcher_DEPRECATED'))();},null);
__d('FBRTCLogger',['Log','LogHistory','MarauderLogger','formatDate','pageID'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='webrtc',i='sent_message',j='received_message',k='send_succeeded',l='send_failed',m='info',n='call_action',o='client_event',p='client_error',q='type',r='msg_id',s='ack_msg_id',t='call_id',u='from',v='to',w='content',x='tag',y='peer_id',z='error_code',aa='trigger',ba='endcallstats',ca=null;da.getInstance=function(){'use strict';if(!ca)ca=new da();return ca;};function da(){'use strict';this.$FBRTCLogger1=c('LogHistory').getInstance(h);}da.prototype.logToConsole=function(ea){'use strict';var fa='Console';this.$FBRTCLogger2(null,null,fa,ea);this.$FBRTCLogger1.log(fa,ea);};da.prototype.logReceivedMessage=function(ea,fa,ga){'use strict';var ha={};ha[u]=ea;ha[t]=fa;ha[q]=ga.type;ha[r]=ga.msg_id;if(ga.sdp)ha[w]=ga.sdp;if(ga.ack_id)ha[s]=ga.ack_id;this.$FBRTCLogger3(j,ha);this.$FBRTCLogger2(ea,fa,'Received',ga.type+', '+ga.msg_id);};da.prototype.logSentMessage=function(ea,fa,ga){'use strict';var ha={};ha[v]=ea;ha[t]=fa;ha[q]=ga.type;ha[r]=ga.msg_id;if(ga.sdp)ha[w]=ga.sdp;if(ga.ack_id)ha[s]=ga.ack_id;this.$FBRTCLogger3(i,ha);this.$FBRTCLogger2(ea,fa,'Sent',ga.type+', '+ga.msg_id);};da.prototype.logSentMessageSuccess=function(ea,fa,ga,ha){'use strict';var ia={};ia[y]=ea;ia[t]=fa;ia[q]=ga;ia[r]=ha;this.$FBRTCLogger3(k,ia);};da.prototype.logSentMessageFailure=function(ea,fa,ga,ha,ia){'use strict';var ja={};ja[y]=ea;ja[t]=fa;ja[q]=ga;ja[r]=ha;ja[z]=ia;this.$FBRTCLogger3(l,ja);this.$FBRTCLogger2(ea,fa,'Send Failed',ga+', '+ia);};da.prototype.logCallAction=function(ea,fa,ga,ha,ia){'use strict';var ja={};ja[y]=ea;ja[t]=fa;ja[n]=ga;ja[w]=ha;if(ia)ja[aa]=ia;this.$FBRTCLogger3(n,ja);this.$FBRTCLogger2(ea,fa,'CallAction',ga+', '+ha);};da.prototype.logEvent=function(ea,fa,event){'use strict';var ga={};ga[y]=ea;ga[t]=fa;ga[w]=event;this.$FBRTCLogger3(o,ga);this.$FBRTCLogger2(ea,fa,'Event',event);};da.prototype.logInfo=function(ea,fa,ga){'use strict';var ha={};ha[y]=ea;ha[t]=fa;ha[w]=ga;this.$FBRTCLogger3(m,ha);this.$FBRTCLogger2(ea,fa,'Info',ga);};da.prototype.logError=function(ea,fa,ga){'use strict';var ha={};ha[y]=ea;ha[t]=fa;ha[w]=ga;this.$FBRTCLogger3(p,ha);this.$FBRTCLogger2(ea,fa,'Error',ga);};da.prototype.logErrorWithoutID=function(ea){'use strict';this.logError(null,null,ea);};da.prototype.logEndCallSummary=function(ea){'use strict';if(!ea)return;var fa={};fa[y]=ea.peerID;fa[t]=ea.callID;fa[x]=ba;fa[w]=ea.toString();var ga=ea.getExtraInfo();for(var ha in ga)if(ga.hasOwnProperty(ha))fa[ha]=ga[ha];this.$FBRTCLogger3(m,fa);this.$FBRTCLogger2(ea.peerID,ea.callID,'Call Summary',fa);};da.prototype.$FBRTCLogger3=function(ea,fa){'use strict';fa.page_id=c('pageID');this.$FBRTCLogger1.log(ea,fa);c('MarauderLogger').log(ea,h,fa);};da.prototype.$FBRTCLogger2=function(ea,fa,ga,ha){'use strict';};da.CallAction={START_CALL:'start_call',RECEIVED_CALL:'received_call',ANSWER_CALL:'answer_call',END_CALL:'end_call',DENIED_PERMISSION:'denied_permission',SET_MUTE:'set_mute',SET_VIDEO_ON:'set_video_on',SET_SELF_VIEW_ON:'set_self_view_on',SET_FULLSCREEN_ON:'set_fullscreen_on',START_SKYPE:'start_skype',TRY_NEW:'try_new',OPEN_POPUP:'open_popup',POPUP_OPENED:'popup_opened',AUTO_DISABLE_VIDEO:'auto_disable_video',FAILED_GETTING_URI:'failed_getting_uri',OLD_URI:'old_uri',USER_SETTINGS_CHANGED:'user_settings_changed'};da.Trigger={ADMIN_MESSAGE:'admin_message',CHAT_TAB_ICON:'chat_tab_icon',CHAT_TAB_ICON_TOUR:'chat_tab_icon_tour',CHAT_TAB_VOICE_ICON:'chat_tab_voice_icon',SKYPE_DEPRECATION_DIALOG:'skype_deprecation_dialog',REDIAL_BUTTON:'redial_button',RETURN_CALL:'return_call',WEB_MESSENGER:'web_messenger',POPUP_CALL_START_BUTTON:'popup_start_call_button',TIMELINE_PROFILE:'timeline_profile',UNKNOWN:'unknown',RESET_CALL:'install_screen_sharing_ext_dialog'};da.Key={DEVICE_INFO:'device_info',RATING:'rating5',RATING_SHOWN:'rating_shown',SURVEY_CHOICE:'survey_choice',SURVEY_DETAILS:'survey_details',SURVEY_SHOWN:'survey_shown',INITIATED_BY_PAGE_ID:'initiated_by_page_id',PEER_IS_MOBILE:'peer_is_mobile'};f.exports=da;},null);
__d('FBRTCLocalMessageQueue',['CacheStorage','FBRTCLogger','Map','RTCConfig'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='localstorage',i='RTC_',j='offer',k='offer_msg',l='data_',m=30*1000,n=15*1000,o=500,p=new (c('Map'))();function q(){'use strict';this.$FBRTCLocalMessageQueue1=c('FBRTCLogger').getInstance();}q.prototype.enqueueOffer=function(r,s){'use strict';var t=this.$FBRTCLocalMessageQueue2(r,k);this.$FBRTCLocalMessageQueue3(t,j,s);};q.prototype.getOffer=function(r){'use strict';var s=this.$FBRTCLocalMessageQueue2(r,k);return this.$FBRTCLocalMessageQueue4(s,j);};q.prototype.removeOffer=function(r){'use strict';var s=this.$FBRTCLocalMessageQueue2(r,k);s.remove(j);};q.prototype.enqueueMessage=function(r,s,t,u){'use strict';var v=l+t.toString(),w=p.get(r)||new (c('Map'))();w.set(v,u);p.set(r,w);this.$FBRTCLocalMessageQueue1.logToConsole('Queued '+v);};q.prototype.drainQueue=function(r,s){'use strict';var t=p.get(r)||new (c('Map'))(),u,v;for(var w=t,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){if(x){if(y>=w.length)break;var z=w[y++];u=z[0];v=z[1];}else{y=w.next();if(y.done)break;var aa=y.value;u=aa[0];v=aa[1];}void u;s(v);}p.set(r,new (c('Map'))());};q.prototype.enableDequeuing=function(r,s,t,u){'use strict';if(u===undefined)u=n;this.$FBRTCLocalMessageQueue5(r,s,t,u);};q.prototype.$FBRTCLocalMessageQueue5=function(r,s,t,u){'use strict';var v=this.$FBRTCLocalMessageQueue2(r,s),w=v.keys(),x=w.length;for(var y=0;y<x;y++){var z=this.$FBRTCLocalMessageQueue6(v,w[y]);if(z&&t)t(z);}this.$FBRTCLocalMessageQueue1.logToConsole('Dequeued '+x+' ('+r+') with '+u+' left)');if(u>0){u-=o;setTimeout(function(){this.$FBRTCLocalMessageQueue5(r,s,t,u);}.bind(this),o);}};q.prototype.$FBRTCLocalMessageQueue3=function(r,s,t){'use strict';var u={__t:Date.now(),__d:t};r.set(s,u);};q.prototype.$FBRTCLocalMessageQueue4=function(r,s){'use strict';var t=r.get(s);if(t&&this.$FBRTCLocalMessageQueue7(t)){return t.__d;}else if(t)r.remove(s);return null;};q.prototype.$FBRTCLocalMessageQueue6=function(r,s){'use strict';var t=this.$FBRTCLocalMessageQueue4(r,s);if(t!==null){r.remove(s);return t;}return null;};q.prototype.$FBRTCLocalMessageQueue7=function(r){'use strict';return Date.now()-r.__t<m;};q.prototype.$FBRTCLocalMessageQueue2=function(r,s){'use strict';return new (c('CacheStorage'))(h,''+i+r+'_'+s+'_');};f.exports=q;},null);
__d('FBRTCCallControlActions',['FBRTCDispatcher','keyMirror'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('keyMirror')({ACCEPT_ESCALATION:null,HANG_UP:null,PARENT_WINDOW_START_CALL:null,TOGGLE_FULL_SCREEN:null,TOGGLE_MUTE_AUDIO:null,TOGGLE_MUTE_VIDEO:null,TOGGLE_SCREEN_SHARING:null,TOGGLE_SELF_VIEW:null,SHOW_SETTINGS:null,START_CALL:null,DECLINE_ESCALATION:null,RECEIVED_SIGNALING_MESSAGE:null,RESET_CALL:null,OPEN_SCREEN_IN_NEW:null,CLOSE_STANDALONE_SCREEN:null,REDIAL_CALL:null}),i={Types:h,hangUp:function(){c('FBRTCDispatcher').dispatch({type:h.HANG_UP});},toggleMuteAudio:function(){c('FBRTCDispatcher').dispatch({type:h.TOGGLE_MUTE_AUDIO});},toggleMuteVideo:function(){c('FBRTCDispatcher').dispatch({type:h.TOGGLE_MUTE_VIDEO});},toggleFullScreen:function(){c('FBRTCDispatcher').dispatch({type:h.TOGGLE_FULL_SCREEN});},toggleSelfView:function(){c('FBRTCDispatcher').dispatch({type:h.TOGGLE_SELF_VIEW});},showSettings:function(){c('FBRTCDispatcher').dispatch({type:h.SHOW_SETTINGS});},toggleScreenSharing:function(){c('FBRTCDispatcher').dispatch({type:h.TOGGLE_SCREEN_SHARING});},startCall:function(){c('FBRTCDispatcher').dispatch({type:h.START_CALL});},openScreenInNewWindow:function(){c('FBRTCDispatcher').dispatch({type:h.OPEN_SCREEN_IN_NEW});},receivedSignalingMessage:function(j){c('FBRTCDispatcher').dispatch({type:h.RECEIVED_SIGNALING_MESSAGE,message_type:j.msgType,message:j});},acceptEscalation:function(){c('FBRTCDispatcher').dispatch({type:h.ACCEPT_ESCALATION});},declineEscalation:function(){c('FBRTCDispatcher').dispatch({type:h.DECLINE_ESCALATION});},resetCall:function(j){c('FBRTCDispatcher').dispatch({type:h.RESET_CALL,trigger:j});},redialCall:function(){c('FBRTCDispatcher').dispatch({type:h.REDIAL_CALL});},parentWindowStartCall:function(){c('FBRTCDispatcher').dispatch({type:h.PARENT_WINDOW_START_CALL});}};f.exports=i;},null);
__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isSendWebrtcSupported:function(){return c('RTCConfig').SendNewVCGK;},isReceiveWebrtcSupported:function(){return c('RTCConfig').ReceiveNewVCGK;},isVideoInteropSupported:function(){return c('RTCConfig').VideoInteropGK;},isVideoCallBlockingSupported:function(){return c('RTCConfig').VideoCallBlockingGK;},isWebrtcSupported:function(){return (c('UserAgent').isBrowser('Chrome >= 28')||c('UserAgent').isBrowser('Firefox >= 25')||c('UserAgent').isBrowser('Opera >= 20'));},isCollabSupported:function(){return c('RTCConfig').CollabWhitelistedBrowserGK||c('UserAgent').isBrowser('Chrome >= 48');},isOSSupported:function(){return !c('UserAgent').isPlatform('Android')&&!c('UserAgent').isPlatform('iOS');},getCapabilities:function(){var i=0;if(this.isReceiveWebrtcSupported())i=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;return i;}};f.exports=h;},null);
__d('FBRTCMessageListener',['invariant','Arbiter','ChannelConstants','FBRTCCallControlActions','FBRTCLocalMessageQueue','FBRTCSupport','RTCConfig','guid','mixInEventEmitter'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=45*1000,j='rtc_child_window_ready',k='rtc_child_window_start_call',l='rtc_child_window_message',m=[],n=null,o=null,p=null,q=null,r=null,s=false,t=null,u={init:function(v,w){if(s)return;s=true;c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('webrtc'),function(y,z){this._onMessage(z.obj);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('webrtc_offer'),function(y,z){this._onMessage(z.obj);}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('webrtc_offerack'),function(y,z){this._onMessage(z.obj);}.bind(this));if(c('RTCConfig').RtcConferencingGK)c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('rtc_multi_json'),function(y,z){this._onMultiwayMessage(z.obj);}.bind(this));this._localMessageQueue=new (c('FBRTCLocalMessageQueue'))();if(c('RTCConfig').PassMessagesBetweenWindowsGK){if(c('FBRTCSupport').isWebrtcSupported()&&window.addEventListener){var x=v?this._handleWindowMessageToChild.bind(this):this._handleWindowMessageToParent.bind(this);window.addEventListener('message',x,false);}if(v)this._connectToParentWindow(w);}},setParentWindowNonce:function(v){q=v;},generateNewNonce:function(){r=c('guid')();return r;},setMultiwayMessageHandler:function(v,w){!!t?h(0):void 0;t=w?v.bind(w):v;},_onMultiwayMessage:function(v){this.emit('multiwayMessageReceived',v);if(t)t(v);},setMessageHandler:function(v,w){!!n?h(0):void 0;n=w?v.bind(w):v;while(m.length)n(m.shift());},removeMessageHandler:function(){n=null;},_onMessage:function(v){this.emit('messageReceived',v);if(n){n(v);}else m.push(v);this._passMessageToChildWindow(v);},_connectToParentWindow:function(v){if(window.opener&&window.opener.postMessage){var w={type:j,nonce:q,childNonce:this.generateNewNonce(),peerID:v};window.opener.postMessage(w,window.location.origin);}},_verifyWindowMessage:function(event){return event.origin===window.location.origin&&event.data&&r&&event.data.nonce===r;},_handleWindowMessageToParent:function(event){if(!this._verifyWindowMessage(event))return;if(event.data.type===j){this.setParentWindowNonce(event.data.childNonce);this._setChildWindow(event.source);this._replayQueuedMessagesToChild(event.data.peerID,o);}},_handleWindowMessageToChild:function(event){if(!this._verifyWindowMessage(event))return;if(event.data.type===l)this._onMessage(event.data.message);if(event.data.type===k)c('FBRTCCallControlActions').parentWindowStartCall();},_replayQueuedMessagesToChild:function(v,w){this._localMessageQueue.drainQueue(v,function(x){var y={type:l,nonce:q,message:x};w.postMessage(y,window.location.origin);});},_setChildWindow:function(v){o=v;clearTimeout(p);p=setTimeout(function(){o=null;},i);this._startCallInChildWindow();this.generateNewNonce();},_passMessageToChildWindow:function(v){if(o){var w={type:l,nonce:q,message:v};o.postMessage(w,window.location.origin);}},_startCallInChildWindow:function(){if(o){var v={type:k,nonce:q};o.postMessage(v,window.location.origin);}}};c('mixInEventEmitter')(u,{messageReceived:true,multiwayMessageReceived:true});f.exports=u;},null);
__d('FBRTCMessageHandler',['invariant','Bootloader','FBRTCMessageListener','FBRTCSupport'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=false,k=null,l={init:function(){if(!j&&c('FBRTCSupport').isReceiveWebrtcSupported()){j=true;c('FBRTCMessageListener').init(false);c('FBRTCMessageListener').once('messageReceived',function(o){m();});c('FBRTCMessageListener').once('multiwayMessageReceived',function(o){n(o);});}},resetListener:function(){!i?h(0):void 0;c('FBRTCMessageListener').removeMessageHandler();c('FBRTCMessageListener').setMessageHandler(i.onMessageReceived,i);}};function m(){if(!i)c('Bootloader').loadModules(["FBRTCIncomingCallController","FBRTCIncomingCallDialog","FBRTCMissedVideoCallHandler","FBRTCUnsupportedBrowserMessage"],function(o,p,q,r){i=new o(p,r,new q());c('FBRTCMessageListener').setMessageHandler(i.onMessageReceived,i);},'FBRTCMessageHandler');}function n(o){if(!k)c('Bootloader').loadModules(["FBRTCGroupCallIncomingController"],function(p){k=new p();c('FBRTCMessageListener').setMultiwayMessageHandler(k.onMessageReceived,k);k.onMessageReceived(o);},'FBRTCMessageHandler');}f.exports=l;},null);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='menu:mouseover',i=null;function j(t){if(c('CSS').hasClass(t,'uiMenuContainer'))return t;return c('Parent').byClass(t,'uiMenu');}function k(t){return c('Parent').byClass(t,'uiMenuItem');}function l(t){if(document.activeElement){var u=k(document.activeElement);return t.indexOf(u);}return -1;}function m(t){return c('DOM').find(t,'a.itemAnchor');}function n(t){return c('CSS').hasClass(t,'checked');}function o(t){return !c('CSS').hasClass(t,'disabled')&&c('Style').get(t,'display')!=='none';}function p(event){var t=document.activeElement;if(!t||!c('Parent').byClass(t,'uiMenu')||!c('DOM').isInputNode(t)){var u=k(event.getTarget());u&&s.focusItem(u);}}function q(t){c('UserAgent_DEPRECATED').firefox()&&m(t).blur();s.inform('select',{menu:j(t),item:t});}var r=function(){r=c('emptyFunction');var t={};t.click=function(event){var u=k(event.getTarget());if(u&&o(u)){q(u);var v=m(u),w=v.href,x=v.getAttribute('rel');return x&&x!=='ignore'||w&&w.charAt(w.length-1)!=='#';}};t.keydown=function(event){var u=event.getTarget();if(event.getModifiers().any)return;if(!i||c('DOM').isInputNode(u))return;var v=c('Event').getKeyCode(event),w;switch(v){case c('Keys').UP:case c('Keys').DOWN:var x=s.getEnabledItems(i);w=l(x);s.focusItem(x[w+(v===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var y=k(u);if(y){q(y);event.prevent();}break;default:var z=String.fromCharCode(v).toLowerCase(),aa=s.getEnabledItems(i);w=l(aa);var ba=w,ca=aa.length;while(~w&&(ba=++ba%ca)!==w||!~w&&++ba<ca){var da=s.getItemLabel(aa[ba]);if(da&&da.charAt(0).toLowerCase()===z){s.focusItem(aa[ba]);return false;}}}};c('Event').listen(document.body,t);},s=Object.assign(new (c('Arbiter'))(),{focusItem:function(t){if(t&&o(t)){this._removeSelected(j(t));c('CSS').addClass(t,'selected');m(t).focus();}},getEnabledItems:function(t){return s.getItems(t).filter(o);},getCheckedItems:function(t){return s.getItems(t).filter(n);},getItems:function(t){return c('DOM').scry(t,'li.uiMenuItem');},getItemLabel:function(t){return t.getAttribute('data-label',2)||'';},isItemChecked:function(t){return c('CSS').hasClass(t,'checked');},autoregister:function(t,u,v){t.subscribe('show',function(){s.register(u,v);});t.subscribe('hide',function(){s.unregister(u);});},register:function(t,u){t=j(t);r();if(!c('DataStore').get(t,h))c('DataStore').set(t,h,c('Event').listen(t,'mouseover',p));if(u!==false)i=t;},setItemEnabled:function(t,u){if(!u&&!c('DOM').scry(t,'span.disabledAnchor')[0])c('DOM').appendContent(t,c('DOM').create('span',{className:c('DOM').find(t,'a').className+' disabledAnchor'},c('HTML')(m(t).innerHTML)));c('CSS').conditionClass(t,'disabled',!u);},toggleItem:function(t){var u=!s.isItemChecked(t);s.setItemChecked(t,u);},setItemChecked:function(t,u){c('CSS').conditionClass(t,'checked',u);m(t).setAttribute('aria-checked',u);},unregister:function(t){t=j(t);var u=c('DataStore').remove(t,h);u&&u.remove();i=null;this._removeSelected(t);},_removeSelected:function(t){s.getItems(t).filter(function(u){return c('CSS').hasClass(u,'selected');}).forEach(function(u){c('CSS').removeClass(u,'selected');});}});f.exports=s;},null);
__d('ServerRedirect',['ReloadPage','goURI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={redirectPageTo:c('goURI'),reloadPage:c('ReloadPage').now};f.exports=h;},null);
__d('SoundPlayer',['URI','createArrayFromMixed'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=null,j={};function k(q){var r=new (c('URI'))(q);if(!r.getDomain())return new (c('URI'))(window.location.href).setPath(r.getPath()).toString();return q;}function l(q){var r=new (c('URI'))(q).getPath();if(/\.mp3$/.test(r))return 'audio/mpeg';if(/\.og[ga]$/.test(r))return 'audio/ogg';return '';}function m(){if(!i){var q=document.createElement('audio');if(!q||!q.canPlayType)return null;q.setAttribute('preload','auto');document.body.appendChild(q);i=q;}return i;}function n(q){return j[q];}function o(q,r){j[q]=r;}var p={init:function(q){q=c('createArrayFromMixed')(q);var r;for(var s=0;s<q.length;++s){r=q[s];if(h[r])return;}var t=m();for(s=0;t&&s<q.length;++s){r=q[s];if(t.canPlayType(r)){h[r]=true;return;}}},createAndPlayNewNative:function(q,r){var s=document.createElement('audio');s.setAttribute('preload','auto');document.body.appendChild(s);s.src=k(q);if(r){s.setAttribute('loop','');}else s.removeAttribute('loop');s.play();o(q,s);return;},play:function(q,r){q=c('createArrayFromMixed')(q);var s=m(),t,u;for(var v=0;s&&v<q.length;++v){t=q[v];var w=n(t);if(w){if(r){w.setAttribute('loop','');}else w.removeAttribute('loop');w.play();return;}u=l(t);if(!s.canPlayType(u))continue;p.init([u]);p.createAndPlayNewNative(t,r);return;}for(v=0;v<q.length;++v){t=k(q[v]);u=l(t);if(u!='audio/mpeg')continue;p.init([u]);}},stop:function(q){q=c('createArrayFromMixed')(q);for(var r=0;r<q.length;++r){var s=k(q[r]),t=n(q[r]);if(t&&t.src==s){t.pause();t.removeAttribute('src');t.src=s;}}}};f.exports=p;},null);
__d('SoundSynchronizer',['SoundPlayer','WebStorage','createArrayFromMixed'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='fb_sounds_playing3';function i(){var m=c('WebStorage').getLocalStorage();if(m)try{var o=m[h];if(o){o=JSON.parse(o);if(Array.isArray(o))return o;}}catch(n){}return [];}function j(m){var n=c('WebStorage').getLocalStorage();if(n){var o=i();o.push(m);while(o.length>5)o.shift();try{n[h]=JSON.stringify(o);}catch(p){}}}function k(m){return i().some(function(n){return n===m;});}var l={play:function(m,n,o){m=c('createArrayFromMixed')(m);n=n||m[0]+Math.floor(Date.now()/1000);if(k(n))return;c('SoundPlayer').play(m,o);j(n);},isSupported:function(){return !!c('WebStorage').getLocalStorage();}};f.exports=l;},null);
__d('SoundRPC',['Event','FBJSON','SoundSynchronizer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l){c('SoundSynchronizer').play(j,k,l);}var i={playLocal:h,playRemote:function(j,k,l,m){var n={name:'SoundRPC',data:{paths:k,sync:l,loop:m}};j.postMessage(c('FBJSON').stringify(n),'*');},supportsRPC:function(){return !!window.postMessage;},_listen:function(){c('Event').listen(window,'message',function(j){if(!/\.facebook.com$/.test(j.origin))return;var k={};try{k=c('FBJSON').parse(j.data);}catch(l){}if(k.name==='SoundRPC')h(k.data.paths,k.data.sync,k.data.loop);});}};f.exports=i;},null);
__d('Sound',['SoundInitialData','SoundPlayer','SoundRPC','SoundSynchronizer','URI','UserAgent_DEPRECATED','Visibility','isFacebookURI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=false,j={init:function(n){if(!h)c('SoundPlayer').init(n);},play:function(n,o,p){if(h){c('SoundRPC').playRemote(h.contentWindow,n,o,false);}else c('SoundRPC').playLocal(n,o,p);i=true;},hasPlayedSoundBefore:function(){return i;},playOnlyIfImmediate:function(n,o,p){if(!i&&c('Visibility').isHidden())return;this.play(n,o,p);},stop:function(n){if(!h)c('SoundPlayer').stop(n);}},k=new (c('URI'))(location.href);if(k.getSubdomain()&&k.getSubdomain()!=='www')k.setSubdomain('www');var l=k.getDomain();function m(){if(c('UserAgent_DEPRECATED').ie()<9)return false;if(c('SoundInitialData').RPC_DISABLED)return false;return c('SoundSynchronizer').isSupported()&&c('SoundRPC').supportsRPC();}if(c('isFacebookURI')(k)&&location.host!==l&&m()){h=document.createElement('iframe');h.setAttribute('src','//'+l+'/sound_iframe.php');h.style.display='none';document.body.appendChild(h);}f.exports=j;},null);
__d('NotificationJewelReminderLoader',['JSResource'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={init:function(h){c('JSResource')('NotificationJewelReminder').__setRef('NotificationJewelReminderLoader').load().done(function(i){new i(h);});}};},null);
__d('P2PActionConstants',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={CREDIT_CARDS_UPDATED:'credit_cards_updated',CREDIT_CARDS_UPDATED_ERROR:'credit_cards_updated_error',CHANNEL_EVENTS_ALLOWED:'channel_events_allowed',CHANNEL_EVENTS_IGNORED:'channel_events_ignored',CREDIT_CARD_SAVING:'credit_card_saving',CREDIT_CARD_ADDED:'credit_card_added',CREDIT_CARD_ADDED_ERROR:'credit_card_added_error',CREDIT_CARD_ADDED_ERROR_CLEARED:'credit_card_added_error_cleared',CREDIT_CARD_DELETED:'credit_card_deleted',CREDIT_CARD_DELETED_ERROR:'credit_card_deleted_error',CREDIT_CARD_UPDATED:'credit_card_updated',CREDIT_CARD_UPDATED_ERROR:'credit_card_updated_error',PRESET_CREDIT_CARD_UPDATED:'preset_credit_card_updated',PRESET_CREDIT_CARD_UPDATED_ERROR:'preset_credit_card_updated_error',CREDIT_CARD_VERIFIED:'credit_card_verified',CREDIT_CARD_VERIFIED_ERROR:'credit_card_verified_error',PAYMENT_METHODS_UPDATED:'payment_methods_updated',PAYMENT_METHODS_UPDATED_ERROR:'payment_methods_updated_error',TRANSFERS_UPDATED:'transfers_updated',TRANSFERS_UPDATED_ERROR:'transfers_updated_error',NUX_TRANSFERS_UPDATED:'nux_transfers_updated',TRANSFER_ADDED:'transfer_added',TRANSFER_ADDED_ERROR:'transfer_added_error',TRANSFER_UPDATED:'transfer_updated',TRANSFER_UPDATED_ERROR:'transfer_updated_error',TRANSFER_ACCEPTED:'transfer_accepted',TRANSFER_DECLINED:'transfer_declined',CHAT_SEND_VIEW_OPENED:'chat_send_view_opened',CHAT_SEND_VIEW_CLOSED:'chat_send_view_closed',BIN_NUMBER_VALIDATED:'bin_number_validated',BIN_NUMBER_VALIDATED_ERROR:'bin_number_validated_error',USER_ELIGIBILITY_UDPATED:'user_eligibility_updated',FRIENDS_LIST_UPDATED:'friends_list_updated',DIALOG_SHOWN:'dialog_shown',DIALOG_CLOSED:'dialog_closed',BANNER_STATES_UPDATED:'banner_states_updated',BANNER_DISMISSED:'banner_dismissed',BANNER_VIEWED:'banner_viewed',BANNER_COMPLETED:'banner_completed',MONEYPENNY_TRANSFER_CREATED:'moneypenny_transfer_created',MONEYPENNY_TRANSFER_CREATED_ERROR:'moneypenny_transfer_created_error',PLATFORM_CONTEXT_ADDED:'platform_context_added',PLATFORM_CONTEXT_ADDED_ERROR:'platform_context_added_error',PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED:'platform_context_save_errors_cleared',PLATFORM_CONTEXT_BANNER_DISMISSED:'platform_context_banner_dismissed',PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD:'platform_context_product_item_sold',PLATFORM_CONTEXT_CHANGED:'platform_context_changed',EXTENSIVE_TRANSFER_DETAILS_UPDATED:'extensive_transfer_details_updated',ADDRESS_SAVING:'address_saving',ADDRESSES_UPDATED:'addresses_updated',ADDRESS_ADDED:'address_added',ADDRESS_ADDED_ERROR:'address_added_error',ADDRESS_ADDED_ERROR_CLEARED:'address_added_error_cleared',CHECKOUT_CART_INITIATED:'checkout_cart_initiated',CHECKOUT_CART_CREATED:'checkout_cart_created',CHECKOUT_SHIPPING_OPTION_SELECTED:'checkout_shipping_option_selected',CHECKOUT_ADDRESS_SELECTED:'checkout_address_selected',CHECKOUT_CREDIT_CARD_SELECTED:'checkout_credit_card_selected',CHECKOUT_ADDRESS_FORM_TOGGLED:'checkout_address_form_toggled',CHECKOUT_CREDIT_CARD_FORM_TOGGLED:'checkout_credit_card_form_toggled',CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED:'checkout_address_options_toggled',CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED:'checkout_credit_card_edit_options_toggled',CHECKOUT_PAYMENT_METHOD_EDIT_OPTIONS_TOGGLED:'checkout_payment_edit_options_toggled',CHECKOUT_PAYMENT_METHOD_SELECTED:'checkout_payment_method_selected',CHECKOUT_PAYMENT_METHOD_CONFIGURED:'checkout_payment_method_configured',CHECKOUT_PAYMENT_METHOD_CONFIRMED:'checkout_payment_method_confirmed',CHECKOUT_ADDRESS_FORM_VALIDATED:'checkout_address_form_validated',CHECKOUT_CREDIT_CARD_FORM_VALIDATED:'checkout_credit_card_form_validated',CHECKOUT_EDIT_COMPLETED:'checkout_completed',CHECKOUT_PROCESSING:'checkout_processing',CHECKOUT_BUYER_PROFILE_UPDATED:'checkout_buyer_profile_updated',CHECKOUT_MANUAL_PAYMENT_RECEIPT_UPDATED:'checkout_manual_payment_receipt_updated',PAYMENT_REQUEST_INITIATED:'payment_request_initiated',PAYMENT_REQUEST_INITIATED_COMPLETE:'payment_request_initiated_completed',PAYMENT_REQUEST_CREATED:'payment_request_created',PAYMENT_REQUEST_CREATED_ERROR:'payment_request_created_error',PAYMENT_REQUEST_UPDATED:'payment_request_updated',PAYMENT_REQUEST_DECLINE_INITIATED:'payment_request_decline_initiated',PAYMENT_REQUEST_DECLINED:'payment_request_declined',PAYMENT_REQUEST_DECLINE_ERROR:'payment_request_decline_error',PAYMENT_REQUESTS_FETCHED:'payment_requests_fetched',PAYMENT_REQUEST_CANCEL_INITIATED:'payment_request_cancel_initiated',PAYMENT_REQUEST_CANCELED:'payment_request_canceled',PAYMENT_REQUEST_CANCEL_ERROR:'payment_request_cancel_error'};f.exports=h;},null);
__d('P2PDispatcher',['Dispatcher_DEPRECATED'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=new (c('Dispatcher_DEPRECATED'))();},null);
__d("XFeedEgoImpressionLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/impression\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true}});},null);