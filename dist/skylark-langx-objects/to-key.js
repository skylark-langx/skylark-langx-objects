/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(n,t){const e=n.isSymbol,r=n.isString,i=1/0;return t.toKey=function(n){if(r(n)||e(n))return n;const t=`${n}`;return"0"==t&&1/n==-i?"-0":t}});
//# sourceMappingURL=sourcemaps/to-key.js.map
