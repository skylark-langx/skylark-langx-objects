/**
 * skylark-langx-objects - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-types","./objects","./is-key"],function(e,r,t){const n=".".charCodeAt(0),c=/\\(\\)?/g,s=RegExp("[^.[\\]]+|\\[(?:([^\"'][^[]*)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))","g"),a=e=>{const r=[];return e.charCodeAt(0)===n&&r.push(""),e.replace(s,(e,t,n,s)=>{let a=e;n?a=s.replace(c,"$1"):t&&(a=t.trim()),r.push(a)}),r};return function(r,n){return e.isArray(r)?r:t(r,n)?[r]:a(r)}});
//# sourceMappingURL=sourcemaps/_cast_path.js.map
