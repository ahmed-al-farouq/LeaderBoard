(()=>{"use strict";var n,e,t,r,o,i,a,s,c,d,l,p,u,f,m={150:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nmain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  width: 98%;\n  margin: auto;\n}\n\nmain h1 {\n  font-size: 40px;\n  padding: 40px;\n  width: 100%;\n}\n\nmain div.scores {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n}\n\nmain div.scores .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\nmain form h2,\nmain div.scores .header h2 {\n  font-size: 22px;\n}\n\nmain div.scores .header button {\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\nmain div.scores ul.body {\n  width: 100%;\n  list-style: none;\n  border: 1px solid #3c00004f;\n  margin: 10px 0;\n  box-shadow: 0 0 4px 1px #3c00004f;\n}\n\nmain div.scores ul.body li {\n  padding: 5px;\n  font-size: 17px;\n}\n\nmain div.scores ul.body li:nth-child(odd) {\n  background-color: #e2e9f5;\n}\n\nmain form div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 50%;\n}\n\nmain form div input {\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid black;\n  background-color: #e2e2e24f;\n  font-size: 13px;\n  padding: 3px 10px;\n}\n\nmain form div input::placeholder {\n  color: rgb(65, 1, 1);\n}\n\nmain form div input:last-child {\n  align-self: flex-end;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 15px;\n  cursor: pointer;\n  background-color: #e2e9f5;\n}\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function h(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),i=h.n(o),a=h(565),s=h.n(a),c=h(216),d=h.n(c),l=h(589),p=h.n(l),u=h(150),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.body.innerHTML='\n  <main>\n    <h1 class="title">Leader Board</h1>\n    <div class="scores">\n      <div class="header">\n        <h2>Recent Scores</h2>\n        <button>\n          Refresh\n        </button>\n      </div>\n      <ul class="body">\n        <li>name: 100</li>\n        <li>name: 20</li>\n        <li>name: 30</li>\n        <li>name: 50</li>\n        <li>name: 40</li>\n        <li>name: 60</li>\n        <li>name: 90</li>\n      </ul>\n    </div>  \n    <form action="#" method="post" class="add-score">\n      <h2>Add your score</h2>\n      <div>\n        <input type="text" name="name" id="name" placeholder="Your Name"/>\n        <input type="text" name="score" id="score" placeholder="Your Score"/>\n        <input type="submit" value="Submit"/>\n      </div>\n    </form>\n  </main>\n  '})();