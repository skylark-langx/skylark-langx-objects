/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(r,n){var t=Object.prototype.hasOwnProperty;return n.has=function(n,e){if(!r.isArray(e))return null!=n&&t.call(n,e);for(var l=e.length,a=0;a<l;a++){var u=e[a];if(null==n||!t.call(n,u))return!1;n=n[u]}return!!l}});
//# sourceMappingURL=sourcemaps/has.js.map
