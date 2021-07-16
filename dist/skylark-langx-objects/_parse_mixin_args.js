/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(e,n){var t=e.isBoolean;return function(e){var n=slice.call(arguments,0),r=n.shift(),s=!1;return t(n[n.length-1])&&(s=n.pop()),{target:r,sources:n,deep:s}}});
//# sourceMappingURL=sourcemaps/_parse_mixin_args.js.map
