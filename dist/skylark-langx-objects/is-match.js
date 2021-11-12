/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./keys"],function(n,r,e){return r.isMatch=function(n,r){var e=e(r),t=e.length;if(null==n)return!t;for(var i=Object(n),u=0;u<t;u++){var a=e[u];if(r[a]!==i[a]||!(a in i))return!1}return!0}});
//# sourceMappingURL=sourcemaps/is-match.js.map
