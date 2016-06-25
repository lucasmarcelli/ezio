if (self.CavalryLogger) { CavalryLogger.start_js(["cqXIN"]); }

__d('NotificationBeeper.react',['cx','Arbiter','ChannelConstants','NotificationBeeperConst','NotificationBeeperItem.react','NotificationBeeperPinnedPostLoader','NotificationConstants','NotificationImpressions','NotificationPhotoThumbnail','NotificationSound','NotificationUpdates','NotificationURI','NotificationUserActions','React','WorkFocusModeController','setTimeoutAcrossTransitions','shield'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('WorkFocusModeController').WorkFocusMode,j=c('NotificationBeeperConst').ACTIVE_DELAY_LONG,k=c('NotificationBeeperConst').BeepStates,l=c('NotificationBeeperConst').FADE_OUT_LENGTH,m=c('NotificationBeeperConst').IDLE_DELAY,n=c('NotificationBeeperPinnedPostLoader').payload,o='beeper',p=c('NotificationConstants').PayloadSourceType,q=p.LIVE_SEND,r=p.OTHER_APPLICATION,s=p.CLIENT,t=c('React').createClass({displayName:'NotificationBeeper',getInitialState:function(){return {soundEnabled:this.props.soundEnabled,hovering:false,fading:false,beeps:{}};},componentWillMount:function(){this.subscriptions=[c('NotificationUpdates').subscribe('update-notifications',function(u,v){if(v.payloadsource===q||v.payloadsource===r||v.payloadsource===s){var w=v.nodes;if(w&&w.length){if(i&&i.currentViewerInFocusMode())return;this._handleBeepChanges(this._convertNotifications(w));}}if(v.payloadsource===s)this._handleBeepRemovals(v.hiddenState||{});}.bind(this)),c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notif_sound_pref_changed'),function(u,v){this.setState({soundEnabled:v.obj.enabled});}.bind(this))];c('Arbiter').inform('NotificationBeeper/mounted',null,c('Arbiter').BEHAVIOR_PERSISTENT);if(n)this._handleBeepChanges(this._convertNotifications(n.nodes));},componentWillUnmount:function(){this.subscriptions.forEach(function(u){u.unsubscribe();});this.subscriptions=null;},_onMouseEnter:function(){this._hideWait&&clearTimeout(this._hideWait);var u=[],v=this.state.beeps;Object.keys(v).forEach(function(w){if(v[w].state!=k.PENDING){u.push(w);}else v[w].state=k.RENDERED;});c('NotificationUserActions').markNotificationsAsSeen(u);this.setState({hovering:true,fading:false,beeps:v});},_onMouseLeave:function(){this._waitToHide(j);this.setState({hovering:false});},_onInsertedItem:function(u){if(!this.state.hovering)this._waitToHide();if(this.state.soundEnabled&&u.sound){if(!this._notifSound)this._notifSound=new (c('NotificationSound'))(this.props.soundPath);this._notifSound.play(u.beepID);}if(this.props.shouldLogImpressions)c('NotificationImpressions').log([u.notificationID],o);},_waitToHide:function(u){this._hideWait&&clearTimeout(this._hideWait);this._hideWait=c('setTimeoutAcrossTransitions')(c('shield')(this._hide,this),u==null?m:u);},_onReadyToHide:function(u,v){this.state.beeps[u].state=k.READY_TO_HIDE;if(!this._hideWait)this._waitToHide(v);},_onPreventHide:function(u){this.state.beeps[u].state=k.RENDERED;},_hide:function(){this._hideWait=null;var u=this.state.beeps;Object.keys(u).forEach(function(v){if(u[v].state==k.READY_TO_HIDE)u[v].state=k.FADING_OUT;});this.setState({fading:true});c('setTimeoutAcrossTransitions')(c('shield')(this._finishHide,this),l);},_finishHide:function(){if(!this.state.fading)return;var u=this.state.beeps;Object.keys(u).forEach(function(v){if(u[v].state==k.FADING_OUT)delete u[v];});this.setState({fading:false,beeps:u});c('setTimeoutAcrossTransitions')(function(){var v=this.state.beeps;Object.keys(v).forEach(function(w){if(v[w].state==k.PENDING)v[w].state=k.RENDERED;});this.setState({beeps:v});}.bind(this));},_handleBeepChanges:function(u){var v=this.state.fading?k.PENDING:k.RENDERED,w=this.state.beeps,x=false;Object.keys(u).reverse().forEach(function(y){var z={state:v,data:u[y]};if(!w[y]||w[y].data.beepID!=z.data.beepID){if(w[y]){x=true;if(z.data.beepUpdatesOnTop)delete w[y];}w[y]=z;}});if(x)this._waitToHide();this.forceUpdate();},_handleBeepRemovals:function(u){var v=this.state.beeps;Object.keys(u).forEach(function(w){if(v[w])v[w].state=k.READY_TO_HIDE;});this._waitToHide(0);this.forceUpdate();},render:function(){var u=this.state.beeps,v=[];Object.keys(u).reverse().forEach(function(y){var z=u[y];if(z.state==k.PENDING)return;v.push(c('React').createElement(c('NotificationBeeperItem.react'),{key:y,fadingOut:this.state.fading&&z.state==k.FADING_OUT,beep:z.data,onInserted:this._onInsertedItem,onReadyToHide:this._onReadyToHide,onPreventHide:this._onPreventHide}));},this);var w=v.length>0,x=(!w?"hidden_elem":'')+(' '+"_50d1");return (c('React').createElement('ul',{ref:'container',className:x,'data-gt':this.props.tracking,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},v));},_convertNotifications:function(u){var v={};u.forEach(function(w){if(!w.showBeep||!w.alert_id)return;var x=w.alert_id,y=x+'-'+w.receivedTime,z=c('NotificationPhotoThumbnail').getThumbnail(w.attachments,w.attached_story);v[x]={notificationID:x,notifID:w.id,beepID:y,beepRenderer:w.beepRenderer,rendererData:w.rendererData,beepUpdatesOnTop:w.beepUpdatesOnTop,actors:w.unaggregatedActors||w.actors,icon:w.icon,link:w.url?c('NotificationURI').localize(w.url):'#',url:w.url,ajaxifyLink:w.ajaxify_url,photo:z,text:w.unaggregatedTitle||w.title,timestamp:w.timestamp,receivedTime:w.receivedTime,sound:!!w.sound,tracking:w.tracking};});return v;}});f.exports=t;},null);