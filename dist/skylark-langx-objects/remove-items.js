/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(e,i){return i.removeItem=function(i,r){if(e.isArray(i)){var n=i.indexOf(r);-1!=n&&i.splice(n,1)}else if(e.isPlainObject(i))for(var t in i)if(i[t]==r){delete i[t];break}return this}});
//# sourceMappingURL=sourcemaps/remove-items.js.map
