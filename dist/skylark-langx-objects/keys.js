/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./has"],function(n,r,e){return r.keys=function(r){if(!n.isObject(r))return[];var t=[];for(var s in r)e(r,s)&&t.push(s);return t}});
//# sourceMappingURL=sourcemaps/keys.js.map
