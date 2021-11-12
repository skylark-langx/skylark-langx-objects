/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./all-keys"],function(r,e){return r.defaults=(n=e,t=!0,function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||null==r)return r;for(var a=1;a<e;a++)for(var f=arguments[a],l=n(f),u=l.length,o=0;o<u;o++){var v=l[o];t&&void 0!==r[v]||(r[v]=f[v])}return r});var n,t});
//# sourceMappingURL=sourcemaps/defaults.js.map
