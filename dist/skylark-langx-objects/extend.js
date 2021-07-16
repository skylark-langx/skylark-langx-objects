/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./mixin"],function(n,e){return n.extend=function(n){var t,i=slice.call(arguments,1);return"boolean"==typeof n&&(t=n,n=i.shift()),0==i.length&&(i=[n],n=this),i.forEach(function(i){e(n,i,t)}),n}});
//# sourceMappingURL=sourcemaps/extend.js.map
