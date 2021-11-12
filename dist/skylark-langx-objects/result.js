/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./to-key","./_cast_path"],function(t,n,e,l){t.isArray;var r=t.isFunction;return n.result=function(t,n,i){let o=-1,a=(n=l(n,t)).length;for(a||(a=1,t=void 0);++o<a;){let l=null==t?void 0:t[e(n[o])];void 0===l&&(o=a,l=i),t=r(l)?l.call(t):l}return t}});
//# sourceMappingURL=sourcemaps/result.js.map
