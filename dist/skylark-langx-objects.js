/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,require=e.require,t="function"==typeof n&&n.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!n){var i={};n=e.define=function(r,e,n){"function"==typeof n?(i[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),t=r.split("/");n.pop();for(var o=0;o<t.length;o++)"."!=t[o]&&(".."==t[o]?n.pop():n.push(t[o]));return n.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:n}},require=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var n=[];module.deps.forEach(function(r){n.push(require(r))}),module.exports=module.factory.apply(e,n)||null,module.resolved=!0}return module.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-langx-objects/objects",["skylark-langx-ns/ns","skylark-langx-ns/_attach","skylark-langx-types"],function(r,e,n){var t,o,i=Object.prototype.hasOwnProperty,a=Array.prototype.slice,l=n.isBoolean,u=n.isFunction,f=n.isObject,c=n.isPlainObject,s=n.isArray,v=n.isArrayLike,p=n.isString,h=n.toInteger;var y,d,g="undefined"!=typeof Symbol?Symbol.prototype:null;function b(r){if(!f(r))return[];var e=[];for(var n in r)e.push(n);return e}function j(r,e){if(!s(e))return null!=r&&i.call(r,e);for(var n=e.length,t=0;t<n;t++){var o=e[t];if(null==r||!i.call(r,o))return!1;r=r[o]}return!!n}function k(r,e,n,t){for(var o in e)t&&void 0!==r[o]||(n&&c(e[o])?(c(r[o])||(r[o]={}),k(r[o],e[o],n,t)):void 0!==e[o]&&(r[o]=e[o]));return r}function x(r){var e=a.call(arguments,0),n=e.shift(),t=!1;return l(e[e.length-1])&&(t=e.pop()),{target:n,sources:e,deep:t}}function O(){var r=x.apply(this,arguments);return r.sources.forEach(function(e){k(r.target,e,r.deep,!1)}),r.target}function m(r){for(var e=b(r),n=e.length,t=Array(n),o=0;o<n;o++)t[o]=r[e[o]];return t}return t=function(r,e,n,t){if(r===e)return 0!==r||1/r==1/e;if(null==r||null==e)return!1;if(r!=r)return e!=e;var i=typeof r;return("function"===i||"object"===i||"object"==typeof e)&&o(r,e,n,t)},o=function(r,e,n,o){var i=toString.call(r);if(i!==toString.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+r==""+e;case"[object Number]":return+r!=+r?+e!=+e:0==+r?1/+r==1/e:+r==+e;case"[object Date]":case"[object Boolean]":return+r==+e;case"[object Symbol]":return g.valueOf.call(r)===g.valueOf.call(e)}var a="[object Array]"===i;if(!a){if("object"!=typeof r||"object"!=typeof e)return!1;var l=r.constructor,f=e.constructor;if(l!==f&&!(u(l)&&l instanceof l&&u(f)&&f instanceof f)&&"constructor"in r&&"constructor"in e)return!1}n=n||[],o=o||[];for(var c=n.length;c--;)if(n[c]===r)return o[c]===e;if(n.push(r),o.push(e),a){if((c=r.length)!==e.length)return!1;for(;c--;)if(!t(r[c],e[c],n,o))return!1}else{var s,v=Object.keys(r);if(c=v.length,Object.keys(e).length!==c)return!1;for(;c--;)if(s=v[c],void 0===e[s]||!t(r[s],e[s],n,o))return!1}return n.pop(),o.pop(),!0},r.attach("langx.objects",{allKeys:b,attach:e,clone:function r(e,n){var t;if(void 0===e||null===e)t=e;else if(n&&e.clone)t=e.clone();else if(s(e)){t=[];for(var o=0;o<e.length;o++)t.push(r(e[o]))}else if(c(e))for(var i in t={},e)t[i]=r(e[i]);else t=e;return t},defaults:(y=b,d=!0,function(r){var e=arguments.length;if(d&&(r=Object(r)),e<2||null==r)return r;for(var n=1;n<e;n++)for(var t=arguments[n],o=y(t),i=o.length,a=0;a<i;a++){var l=o[a];d&&void 0!==r[l]||(r[l]=t[l])}return r}),each:function(r,e,n){var t,o,i,a;if(r)if(void 0===(t=r.length)){for(o in r)if(r.hasOwnProperty(o)&&(a=r[o],!1===(n?e.call(a,a,o):e.call(a,o,a))))break}else for(i=0;i<t&&(a=r[i],!1!==(n?e.call(a,a,i):e.call(a,i,a)));i++);return this},extend:function(r){var e,n=a.call(arguments,1);"boolean"==typeof r&&(e=r,r=n.shift());0==n.length&&(n=[r],r=this);return n.forEach(function(n){O(r,n,e)}),r},has:j,isEqual:function(r,e){return t(r,e)},includes:function(r,e,n,t){r=v(r)?r:m(r),n=n&&!t?h(n):0;var o=r.length;n<0&&(n=nativeMax(o+n,0));return p(r)?n<=o&&r.indexOf(e,n)>-1:!!o&&baseIndexOf(r,e,n)>-1},isMatch:function(r,e){var n=n(e),t=n.length;if(null==r)return!t;for(var o=Object(r),i=0;i<t;i++){var a=n[i];if(e[a]!==o[a]||!(a in o))return!1}return!0},keys:function(r){if(f(r))return[];var e=[];for(var n in r)j(r,n)&&e.push(n);return e},mixin:O,omit:function(r,e,n){if(!r)return null;for(var t=O({},r),o=1;o<arguments.length;o++){var i=arguments[o];i in r&&delete t[i]}return t},pick:function(r,e,n){if(!r)return null;for(var t={},o=1;o<arguments.length;o++){var i=arguments[o];i in r&&(t[i]=r[i])}return t},removeItem:function(r,e){if(s(r)){var n=r.indexOf(e);-1!=n&&r.splice(n,1)}else if(c(r))for(var t in r)if(r[t]==e){delete r[t];break}return this},result:function(r,e,n){s(e)||(e=e.split("."));var t=e.length;if(!t)return u(n)?n.call(r):n;for(var o=0;o<t;o++){var i=null==r?void 0:r[e[o]];void 0===i&&(i=n,o=t),r=u(i)?i.call(r):i}return r},safeMixin:function(){var r=x.apply(this,arguments);return r.sources.forEach(function(e){k(r.target,e,r.deep,!0)}),r.target},values:m})}),r("skylark-langx-objects/main",["./objects"],function(r){return r}),r("skylark-langx-objects",["skylark-langx-objects/main"],function(r){return r})}(n),!t){var a=require("skylark-langx-ns");o?module.exports=a:e.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-objects.js.map
