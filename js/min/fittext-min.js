/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/(function(){var a=function(a,b){return window.getComputedStyle?getComputedStyle(a).getPropertyValue(b):a.currentStyle[b]},b=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};window.fitText=function(c,d){var e=function(c){var e=parseFloat(a(c,"font-size")),f=d||1,g=function(){c.style.fontSize=Math.min(c.clientWidth/(f*10),e)+"px"};g();b(window,"resize",g)};if(c.length)for(var f=0;f<c.length;f++)e(c[f]);else e(c);return c}})();