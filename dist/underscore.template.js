/*
 * underscore.template 0.1.7
 * Extracted template from Underscore, use '_.template' without full underscore source.
 * https://github.com/superRaytin/underscore.template
 *
 * Copyright 2015-present, Leon Shi
 * Released under the MIT license.
*/

!function e(r,n,t){function o(u,i){if(!n[u]){if(!r[u]){var c="function"==typeof require&&require;if(!i&&c)return c(u,!0);if(a)return a(u,!0);throw new Error("Cannot find module '"+u+"'")}var f=n[u]={exports:{}};r[u][0].call(f.exports,function(e){var n=r[u][1][e];return o(n?n:e)},f,f.exports,e,r,n,t)}return n[u].exports}for(var a="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(e,r,n){"use strict";function t(e,r,n){return a(e,r,n)}var o=e("./underscore.template"),a=o.template;t._=o,r.exports=t,"function"==typeof define&&define.amd?define(function(){return t}):"undefined"==typeof window&&"undefined"==typeof navigator||(window.UnderscoreTemplate=t)},{"./underscore.template":2}],2:[function(e,r,n){"use strict";var t={},o=Array.prototype,a=o.slice,u=o.forEach,i=Object.keys,c=Array.isArray,f=function(){},l=f.each=f.forEach=function(e,r,n){if(null!=e)if(u&&e.forEach===u)e.forEach(r,n);else if(e.length===+e.length){for(var o=0,a=e.length;o<a;o++)if(r.call(n,e[o],o,e)===t)return}else for(var i=f.keys(e),o=0,a=i.length;o<a;o++)if(r.call(n,e[i[o]],i[o],e)===t)return};f.keys=i||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var r=[];for(var n in e)f.has(e,n)&&r.push(n);return r},f.defaults=function(e){return l(a.call(arguments,1),function(r){if(r)for(var n in r)void 0===e[n]&&(e[n]=r[n])}),e},f.isArray=c||function(e){return"[object Array]"===Object.prototype.toString.call(e)},f.has=function(e,r){if(!f.isArray(r))return null!=e&&hasOwnProperty.call(e,r);for(var n=r.length,t=0;t<n;t++){var o=r[t];if(null==e||!hasOwnProperty.call(e,o))return!1;e=e[o]}return!!n};var s={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}},p={escape:new RegExp("["+f.keys(s.escape).join("")+"]","g")};f.each(["escape"],function(e){f[e]=function(r){return null==r?"":(""+r).replace(p[e],function(r){return s[e][r]})}}),f.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var v=/(.)^/,_={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},h=/\\|'|\r|\n|\t|\u2028|\u2029/g;f.template=function(e,r,n){var t;n=f.defaults({},n,f.templateSettings);var o=new RegExp([(n.escape||v).source,(n.interpolate||v).source,(n.evaluate||v).source].join("|")+"|$","g"),a=0,u="__p+='";e.replace(o,function(r,n,t,o,i){return u+=e.slice(a,i).replace(h,function(e){return"\\"+_[e]}),n&&(u+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),t&&(u+="'+\n((__t=("+t+"))==null?'':__t)+\n'"),o&&(u+="';\n"+o+"\n__p+='"),a=i+r.length,r}),u+="';\n",n.variable||(u="with(obj||{}){\n"+u+"}\n"),u="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+u+"return __p;\n";try{t=new Function(n.variable||"obj","_",u)}catch(i){throw i.source=u,i}if(r)return t(r,f);var c=function(e){return t.call(this,e,f)};return c.source="function("+(n.variable||"obj")+"){\n"+u+"}",c},r.exports=f},{}]},{},[1]);