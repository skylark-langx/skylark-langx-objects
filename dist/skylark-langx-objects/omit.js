/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./objects","./mixin"],function(n,e){return n.omit=function(n,r,t){if(!n)return null;for(var i=e({},n),u=1;u<arguments.length;u++){var f=arguments[u];f in n&&delete i[f]}return i}});
//# sourceMappingURL=sourcemaps/omit.js.map
