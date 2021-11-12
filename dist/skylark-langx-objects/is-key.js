/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(n,t){const e=n.isSymbol,r=n.isArray,s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;return t.isKey=function(n,t){if(r(n))return!1;const i=typeof n;return!("number"!==i&&"boolean"!==i&&null!=n&&!e(n))||o.test(n)||!s.test(n)||null!=t&&n in Object(t)}});
//# sourceMappingURL=sourcemaps/is-key.js.map
