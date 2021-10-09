/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects"],function(n){const r=Array.prototype.slice;return n.scall=function(n,t,c,e){if(n&&n[t]){var l=r.call(arguments,2);return n[t].apply(n,l)}}});
//# sourceMappingURL=sourcemaps/scall.js.map
