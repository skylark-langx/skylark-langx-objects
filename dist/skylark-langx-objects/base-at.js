/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./get"],function(n,e){return n.baseAt=function(n,t){let r=-1;const o=t.length,u=new Array(o),c=null==n;for(;++r<o;)u[r]=c?void 0:e(n,t[r]);return u}});
//# sourceMappingURL=sourcemaps/base-at.js.map
