if (self.CavalryLogger) { CavalryLogger.start_js(["h38eU"]); }

__d('BrowseClientSizeLogger',['BanzaiLogger','getElementPosition'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={log:function(i){var j=i.getAttribute('data-xt'),k=JSON.parse(j.substring(j.indexOf('{'))),l=c('getElementPosition')(i);k.client_height=l.height;k.client_width=l.width;k.raw_id=+k.raw_id;c('BanzaiLogger').log('SearchResultsClientSizeLoggerConfig',k);}};f.exports=h;},null);
__d('BrowseEmptyResult',['csx','$','DOMQuery','UIPagelet'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={init:function(j,k,l){var m=[],n=false;if(j===null)return;for(var o=0;o<j.length;o++){var p=c('$')(j[o]);if(j[o]==='initial_browse_result'){var q=c('DOMQuery').scry(p,"._58b7");if(q.length>0)n=true;}if(p!==null&&p.textContent)m.push(j[o]);}if(m.length===0||!n){j&&j.length===0;c('UIPagelet').loadFromEndpoint('BrowsePageletNoContentError',k,l,{usePipe:false});}}};f.exports=i;},null);
__d('BrowseScrollingPager',['Arbiter','CSS','DOM','OnVisible','SubscriptionsHandler','UIPagelet'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=800,i=[],j,k=0;function l(m,n,o){'use strict';this.loadingNode=m;this.globalData=n;this.visibleBuffer=o?o:h;this.subscriptionsHandler=new (c('SubscriptionsHandler'))();j&&this.pageletComplete(j);j=null;}l.prototype.pageletComplete=function(m){'use strict';this.pageData=m;c('Arbiter').inform('BrowseScrollingPageletLoaded');setTimeout(this.$BrowseScrollingPager1.bind(this),1000);};l.prototype.destroy=function(){'use strict';if(this.pageletLoadHandler)this.pageletLoadHandler.cancel();this.loadingNode=null;this.subscriptionsHandler.release();};l.prototype.$BrowseScrollingPager1=function(){'use strict';if(!this.loadingNode){return;}else if(this.pageData){c('CSS').show(this.loadingNode);this.subscriptionsHandler.addSubscriptions(new (c('OnVisible'))(this.loadingNode,this.$BrowseScrollingPager2.bind(this),false,this.visibleBuffer));}else c('CSS').hide(this.loadingNode);};l.prototype.$BrowseScrollingPager3=function(){'use strict';return 'fbBrowseScrollingPagerContainer'+k++;};l.prototype.$BrowseScrollingPager2=function(){'use strict';if(this.$BrowseScrollingPager4)return;c('CSS').show(this.loadingNode.firstChild);this.contentContainer=c('DOM').create('div',{id:this.$BrowseScrollingPager3()});c('DOM').insertBefore(this.loadingNode,this.contentContainer);this.pageletLoadHandler=c('UIPagelet').loadFromEndpoint('BrowseScrollingSetPagelet',this.contentContainer.id,babelHelpers['extends']({},this.globalData,this.pageData),{constHeight:true,sid:this.globalData.typeahead_sid||0,displayCallback:this.$BrowseScrollingPager5.bind(this)});};l.prototype.$BrowseScrollingPager5=function(m){'use strict';try{m();}catch(n){this.$BrowseScrollingPager4=true;}finally{this.loadingNode&&c('CSS').hide(this.loadingNode.firstChild);}};l.init=function(m,n,o){var p=new l(m,n,o);i.push(p);};l.pageletComplete=function(m){var n=i[i.length-1];if(n){n.pageletComplete.call(n,m);}else j=m;};l.destroyAllPagers=function(){i.forEach(function(m){m.destroy();});i=[];};c('Arbiter').subscribe('BrowseScrollingPager/destroyIfNotLast',function(){if(i.length>1){var m=i.pop();m.destroy();}});f.exports=l;},null);
__d('BrowseTopFiltersFullWidth',['cx','Arbiter','CSS','NavigationMessage','SubscriptionsHandler'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j=/(facebook\.com\/(search|hashtag|topic)\/)/,k={init:function(){c('CSS').addClass(document.body,"_4dik");i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_FIRST_RESPONSE,this.cleanup));c('Arbiter').inform('browse_top_filters_full_width_displayed');},cleanup:function(){i&&i.release();if(!window.location.href.match(j))c('CSS').removeClass(document.body,"_4dik");}};f.exports=k;},null);
__d('BrowseWindowTransitions',['Arbiter','Banzai','BrowseClientEventLogger','Event','NavigationMessage','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j){this.subscriptions=new (c('SubscriptionsHandler'))();this.currentSessionID=i;this.currentVertical=j;this.logData('window_load');c('Run').onLeave(function(){this.logData('window_transition_to_fb_page');this.cleanup();}.bind(this));if(!this.unLoadAttached){this.unLoadAttached=true;c('Run').onUnload(function(){this.logData('window_unloaded');}.bind(this));}this.subscriptions.addSubscriptions(c('Event').listen(window,'focus',function(){this.logData('window_focus');}.bind(this)),c('Event').listen(window,'blur',function(){this.logData('window_blur');}.bind(this)),c('Arbiter').subscribe('pre_page_transition',function(event,k){this.logData('window_pre_page_transition');}.bind(this)),c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(event,k){this.logData('window_transition_to_LHC');this.cleanup();}.bind(this)),c('Arbiter').subscribe('BlueBar/homeClick',function(){this.logData('window_transition_to_home_click');this.cleanup();}.bind(this)));},logData:function(event){c('BrowseClientEventLogger').logData(event,this.currentSessionID,this.currentVertical);},cleanup:function(){this.subscriptions.release();}};f.exports=h;},null);
__d('DesktopVisibilityTracking',['Arbiter','ErrorUtils','LitestandMessages','Run','VisibilityTracking','VisibilityTrackingConfig'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(){if(h.instance===undefined){h.instance=new (c('VisibilityTracking'))(c('VisibilityTrackingConfig'));h.instance.listeners.addSubscriptions(c('Arbiter').subscribe([c('LitestandMessages').STORIES_INSERTED],c('ErrorUtils').guard(function(){h.instance.refreshAndFireEvent();},'VisibilityTracking')));}c('Run').onLoad(function(){h.instance.refreshAndFireEvent();});}};f.exports=h;},null);
__d('InlineVideoAttributionOverlay',['CSS'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$InlineVideoAttributionOverlay1=j;this.$InlineVideoAttributionOverlay2=i;i.addListener('beginPlayback',function(){c('CSS').hide(this.$InlineVideoAttributionOverlay1);}.bind(this));i.addListener('pausePlayback',function(){c('CSS').show(this.$InlineVideoAttributionOverlay1);}.bind(this));i.addListener('finishPlayback',function(){c('CSS').show(this.$InlineVideoAttributionOverlay1);}.bind(this));}f.exports=h;},null);