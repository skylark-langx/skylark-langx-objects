/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects"],function(e){var n=types.isPlainObject,i=types.isArray;return e.clone=function e(r,l){var s;if(void 0===r||null===r)s=r;else if(l&&r.clone)s=r.clone();else if(i(r)){s=[];for(var f=0;f<r.length;f++)s.push(e(r[f]))}else if(n(r))for(var o in s={},r)s[o]=e(r[o]);else s=r;return s}});
//# sourceMappingURL=sourcemaps/clone.js.map
