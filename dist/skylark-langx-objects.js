/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){var e=n.define,require=n.require,r="function"==typeof e&&e.amd,s=!r&&"undefined"!=typeof exports;if(!r&&!e){var o={};e=n.define=function(t,n,e){"function"==typeof e?(o[t]={factory:e,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var e=n.split("/"),r=t.split("/");e.pop();for(var s=0;s<r.length;s++)"."!=r[s]&&(".."==r[s]?e.pop():e.push(r[s]));return e.join("/")}(n,t)}),resolved:!1,exports:null},require(t)):o[t]={factory:null,resolved:!0,exports:e}},require=n.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=o[t];if(!module.resolved){var e=[];module.deps.forEach(function(t){e.push(require(t))}),module.exports=module.factory.apply(n,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-langx-objects/objects",["skylark-langx-ns","skylark-langx-types"],function(t,n){return t.attach("langx.objects",{attach:t.attach})}),t("skylark-langx-objects/all-keys",["skylark-langx-types","./objects"],function(t,n){return n.allKeys=function(n){if(!t.isObject(n))return[];var e=[];for(var r in n)e.push(r);return e}}),t("skylark-langx-objects/assign",["skylark-langx-types","./objects"],function(t,n){return n.assign=Object.assign}),t("skylark-langx-objects/to-key",["skylark-langx-types","./objects"],function(t,n){const e=t.isSymbol,r=t.isString,s=1/0;return n.toKey=function(t){if(r(t)||e(t))return t;const n=`${t}`;return"0"==n&&1/t==-s?"-0":n}}),t("skylark-langx-objects/is-key",["skylark-langx-types","./objects"],function(t,n){const e=t.isSymbol,r=t.isArray,s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;return n.isKey=function(t,n){if(r(t))return!1;const a=typeof t;if("number"===a||"boolean"===a||null==t||e(t))return!0;return o.test(t)||!s.test(t)||null!=n&&t in Object(n)}}),t("skylark-langx-objects/_cast_path",["skylark-langx-types","./objects","./is-key"],function(t,n,e){const r=".".charCodeAt(0),s=/\\(\\)?/g,o=RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))","g"),a=t=>{const n=[];return t.charCodeAt(0)===r&&n.push(""),t.replace(o,(t,e,r,o)=>{let a=t;r?a=o.replace(s,"$1"):e&&(a=e.trim()),n.push(a)}),n};return function(n,r){if(t.isArray(n))return n;return e(n,r)?[n]:a(n)}}),t("skylark-langx-objects/get",["skylark-langx-types","./objects","./to-key","./_cast_path"],function(t,n,e,r){return n.get=function(t,n,s){const o=null==t?void 0:function(t,n){let s=0;const o=(n=r(n,t)).length;for(;null!=t&&s<o;)t=t[e(n[s++])];return s&&s==o?t:void 0}(t,n);return void 0===o?s:o}}),t("skylark-langx-objects/base-at",["./objects","./get"],function(t,n){return t.baseAt=function(t,e){let r=-1;const s=e.length,o=new Array(s),a=null==t;for(;++r<s;)o[r]=a?void 0:n(t,e[r]);return o}}),t("skylark-langx-objects/clone",["skylark-langx-types","./objects"],function(t,n){var e=t.isPlainObject,r=t.isArray;return n.clone=function t(n,s){var o;if(void 0===n||null===n)o=n;else if(s&&n.clone)o=n.clone();else if(r(n)){o=[];for(var a=0;a<n.length;a++)o.push(t(n[a]))}else if(e(n))for(var l in o={},n)o[l]=t(n[l]);else o=n;return o}}),t("skylark-langx-objects/defaults",["./objects","./all-keys"],function(t,n){return t.defaults=(e=n,r=!0,function(t){var n=arguments.length;if(r&&(t=Object(t)),n<2||null==t)return t;for(var s=1;s<n;s++)for(var o=arguments[s],a=e(o),l=a.length,i=0;i<l;i++){var c=a[i];r&&void 0!==t[c]||(t[c]=o[c])}return t});var e,r}),t("skylark-langx-objects/each",["./objects"],function(t){return t.each=function(t,n,e){var r,s,o,a;if(t)if(void 0===(r=t.length)){for(s in t)if(t.hasOwnProperty(s)&&(a=t[s],!1===(e?n.call(a,a,s):n.call(a,s,a))))break}else for(o=0;o<r&&(a=t[o],!1!==(e?n.call(a,a,o):n.call(a,o,a)));o++);return this}}),t("skylark-langx-objects/_mixin",["skylark-langx-types","./objects"],function(t,n){var e=t.isPlainObject;return function t(n,r,s,o){for(var a in r)o&&void 0!==n[a]||(s&&e(r[a])?(e(n[a])||(n[a]={}),t(n[a],r[a],s,o)):void 0!==r[a]&&(n[a]=r[a]));return n}}),t("skylark-langx-objects/_parse_mixin_args",["skylark-langx-types","./objects"],function(t,n){var e=Array.prototype.slice,r=t.isBoolean;return function(t){var n=e.call(arguments,0),s=n.shift(),o=!1;r(n[n.length-1])&&(o=n.pop());return{target:s,sources:n,deep:o}}}),t("skylark-langx-objects/mixin",["skylark-langx-types","./objects","./_mixin","./_parse_mixin_args"],function(t,n,e,r){return n.mixin=function(){var t=r.apply(this,arguments);return t.sources.forEach(function(n){e(t.target,n,t.deep,!1)}),t.target}}),t("skylark-langx-objects/extend",["./objects","./mixin"],function(t,n){var e=Array.prototype.slice;return t.extend=function(t){var r,s=e.call(arguments,1);"boolean"==typeof t&&(r=t,t=s.shift());0==s.length&&(s=[t],t=this);return s.forEach(function(e){n(t,e,r)}),t}}),t("skylark-langx-objects/for-each",["./objects","./each"],function(t,n){return t.forEach=function(t,e){if(!t)return;t.forEach?t.forEach(e):n(t,e,!0)}}),t("skylark-langx-objects/has",["skylark-langx-types","./objects"],function(t,n){var e=Object.prototype.hasOwnProperty;return n.has=function(n,r){if(!t.isArray(r))return null!=n&&e.call(n,r);for(var s=r.length,o=0;o<s;o++){var a=r[o];if(null==n||!e.call(n,a))return!1;n=n[a]}return!!s}}),t("skylark-langx-objects/includes",["./objects"],function(t){return t.includes=function(t,n,e,r){t=isArrayLike(t)?t:values(t),e=e&&!r?toInteger(e):0;var s=t.length;e<0&&(e=nativeMax(s+e,0));return isString(t)?e<=s&&t.indexOf(n,e)>-1:!!s&&baseIndexOf(t,n,e)>-1}}),t("skylark-langx-objects/is-equal",["skylark-langx-types","./objects"],function(t,n){var e,r,s=t.isFunction,o="undefined"!=typeof Symbol?Symbol.prototype:null;return e=function(t,n,e,s){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return!1;if(t!=t)return n!=n;var o=typeof t;return("function"===o||"object"===o||"object"==typeof n)&&r(t,n,e,s)},r=function(t,n,r,a){var l=toString.call(t);if(l!==toString.call(n))return!1;switch(l){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object Symbol]":return o.valueOf.call(t)===o.valueOf.call(n)}var i="[object Array]"===l;if(!i){if("object"!=typeof t||"object"!=typeof n)return!1;var c=t.constructor,u=n.constructor;if(c!==u&&!(s(c)&&c instanceof c&&s(u)&&u instanceof u)&&"constructor"in t&&"constructor"in n)return!1}r=r||[],a=a||[];for(var f=r.length;f--;)if(r[f]===t)return a[f]===n;if(r.push(t),a.push(n),i){if((f=t.length)!==n.length)return!1;for(;f--;)if(!e(t[f],n[f],r,a))return!1}else{var y,k=Object.keys(t);if(f=k.length,Object.keys(n).length!==f)return!1;for(;f--;)if(y=k[f],void 0===n[y]||!e(t[y],n[y],r,a))return!1}return r.pop(),a.pop(),!0},n.isEqual=function(t,n){return e(t,n)}}),t("skylark-langx-objects/keys",["skylark-langx-types","./objects","./has"],function(t,n,e){return n.keys=function(n){if(!t.isObject(n))return[];var r=[];for(var s in n)e(n,s)&&r.push(s);return r}}),t("skylark-langx-objects/is-match",["skylark-langx-types","./objects","./keys"],function(t,n,e){return n.isMatch=function(t,n){var e=e(n),r=e.length;if(null==t)return!r;for(var s=Object(t),o=0;o<r;o++){var a=e[o];if(n[a]!==s[a]||!(a in s))return!1}return!0}}),t("skylark-langx-objects/omit",["./objects"],function(t){return t.omit=function(t,n,e){if(!t)return null;for(var r=mixin({},t),s=1;s<arguments.length;s++){var o=arguments[s];o in t&&delete r[o]}return r}}),t("skylark-langx-objects/pick",["./objects"],function(t){return t.pick=function(t,n,e){if(!t)return null;for(var r={},s=1;s<arguments.length;s++){var o=arguments[s];o in t&&(r[o]=t[o])}return r}}),t("skylark-langx-objects/remove-items",["skylark-langx-types","./objects"],function(t,n){return n.removeItem=function(n,e){if(t.isArray(n)){var r=n.indexOf(e);-1!=r&&n.splice(r,1)}else if(t.isPlainObject(n))for(var s in n)if(n[s]==e){delete n[s];break}return this}}),t("skylark-langx-objects/result",["skylark-langx-types","./objects","./to-key","./_cast_path"],function(t,n,e,r){t.isArray;var s=t.isFunction;return n.result=function(t,n,o){let a=-1,l=(n=r(n,t)).length;l||(l=1,t=void 0);for(;++a<l;){let r=null==t?void 0:t[e(n[a])];void 0===r&&(a=l,r=o),t=s(r)?r.call(t):r}return t}}),t("skylark-langx-objects/safe-mixin",["./objects","./_mixin","./_parse_mixin_args"],function(t,n,e){return t.safeMixin=function(){var t=e.apply(this,arguments);return t.sources.forEach(function(e){n(t.target,e,t.deep,!0)}),t.target}}),t("skylark-langx-objects/scall",["./objects"],function(t){const n=Array.prototype.slice;return t.scall=function(t,e,r,s){if(t&&t[e]){var o=n.call(arguments,2);return t[e].apply(t,o)}}}),t("skylark-langx-objects/is-index",["skylark-langx-types","./objects"],function(t,n){const e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;return n.isIndex=function(t,n){const s=typeof t;return!!(n=null==n?e:n)&&("number"===s||"symbol"!==s&&r.test(t))&&t>-1&&t%1==0&&t<n}}),t("skylark-langx-objects/set",["skylark-langx-types","./objects","./_cast_path","./is-index","./to-key"],function(t,n,e,r,s){return n.set=function(n,o,a){return null==n?n:function(n,o,a,l){if(!t.isObject(n))return n;const i=(o=e(o,n)).length,c=i-1;let u=-1,f=n;for(;null!=f&&++u<i;){const n=s(o[u]);let e=a;if(u!=c){const s=f[n];void 0===(e=l?l(s,n,f):void 0)&&(e=t.isObject(s)?s:r(o[u+1])?[]:{})}f[n]=e,f=f[n]}return n}(n,o,a)}}),t("skylark-langx-objects/shadow",["./objects"],function(t){return t.shadow=function(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!1}),e}}),t("skylark-langx-objects/unset",["skylark-langx-types","./objects","./set"],function(t,n,e){return n.unset=function(t,n){return null==t||e(t,n,void 0)}}),t("skylark-langx-objects/values",["skylark-langx-types","./objects","./all-keys"],function(t,n,e){return n.values=function(t){for(var n=e(t),r=n.length,s=Array(r),o=0;o<r;o++)s[o]=t[n[o]];return s}}),t("skylark-langx-objects/main",["./objects","./all-keys","./assign","./base-at","./clone","./defaults","./each","./extend","./for-each","./get","./has","./includes","./is-equal","./is-key","./is-match","./keys","./mixin","./omit","./pick","./remove-items","./result","./safe-mixin","./scall","./set","./shadow","./to-key","./unset","./values"],function(t){return t}),t("skylark-langx-objects",["skylark-langx-objects/main"],function(t){return t})}(e),!r){var a=require("skylark-langx-ns");s?module.exports=a:n.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-langx-objects.js.map
