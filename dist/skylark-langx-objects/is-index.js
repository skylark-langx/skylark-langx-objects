/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects"],function(n,t){const e=9007199254740991,s=/^(?:0|[1-9]\d*)$/;return t.isIndex=function(n,t){const o=typeof n;return!!(t=null==t?e:t)&&("number"===o||"symbol"!==o&&s.test(n))&&n>-1&&n%1==0&&n<t}});
//# sourceMappingURL=sourcemaps/is-index.js.map
