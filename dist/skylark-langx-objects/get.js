/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./to-key","./_cast_path"],function(n,t,e,o){return t.get=function(n,t,l){const r=null==n?void 0:function(n,t){let l=0;const r=(t=o(t,n)).length;for(;null!=n&&l<r;)n=n[e(t[l++])];return l&&l==r?n:void 0}(n,t);return void 0===r?l:r}});
//# sourceMappingURL=sourcemaps/get.js.map
