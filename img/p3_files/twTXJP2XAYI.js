if (self.CavalryLogger) { CavalryLogger.start_js(["ur\/vg"]); }

__d('NavigationTimingRecorder',['Banzai','BanzaiScuba','URI','performance'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='navigation_timing';if(c('performance').timing){var i=c('performance').timing,j=false,k=new (c('BanzaiScuba'))(h,null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true}),l=function(){var o={};return function(p,q){if(!(p in i||p in o)){o[p]=q;k.addInteger(p,q);}};},m=function(){if(j)return;var o=Object.keys(i);if(o.length===0)if(typeof i.toJSON==='function'){o=Object.keys(i.toJSON());}else o=Object.keys(Object.getPrototypeOf(i));o.forEach(function(t){if(i[t])k.addInteger(t,i[t]);});var p=l();if(b.MCustomTimingRecorder){var q=b.MCustomTimingRecorder.getMarks();q.forEach(function(t){p(t.name,t.date);});}if(c('performance').getEntriesByType){var r=c('performance').getEntriesByType("mark");r.forEach(function(t){p(t.name,Math.round(t.startTime)+c('performance').timing.navigationStart);});}var s=new (c('URI'))(b.location.href);k.addNormal('protocol',s.getProtocol());k.addNormal('domain',s.getDomain());k.addNormal('port',s.getPort());k.addNormal('path',s.getPath());k.post();j=true;},n=function(){c('Banzai').subscribe(c('Banzai').SEND,m);};if(b.document.readyState==='complete'){n();}else b.addEventListener('load',n);}},null);
__d('legacy:UsernameGrabPagesUI',['UsernameGrabPagesUI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.UsernameGrabPagesUI=c('UsernameGrabPagesUI');},3);