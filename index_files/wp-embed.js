!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
/*
     FILE ARCHIVED ON 23:31:09 Jun 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:29:13 Oct 13, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 83.267 (3)
  esindex: 0.005
  captures_list: 98.285
  CDXLines.iter: 10.951 (3)
  PetaboxLoader3.datanode: 95.579 (4)
  exclusion.robots: 0.166
  exclusion.robots.policy: 0.157
  RedisCDXSource: 1.567
  PetaboxLoader3.resolve: 29.354
  load_resource: 140.932
*/