/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./_cast_path","./is-index","./to-key"],function(t,n,e,i,o){return n.set=function(n,s,c){return null==n?n:function(n,s,c,r){if(!t.isObject(n))return n;const l=(s=e(s,n)).length,u=l-1;let f=-1,a=n;for(;null!=a&&++f<l;){const n=o(s[f]);let e=c;if(f!=u){const o=a[n];void 0===(e=r?r(o,n,a):void 0)&&(e=t.isObject(o)?o:i(s[f+1])?[]:{})}a[n]=e,a=a[n]}return n}(n,s,c)}});
//# sourceMappingURL=sourcemaps/set.js.map
