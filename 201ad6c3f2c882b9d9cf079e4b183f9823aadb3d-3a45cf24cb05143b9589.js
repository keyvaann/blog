(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[237],{8828:function(e){"use strict";e.exports=Object.assign},8438:function(e){const t={title:"دو اد",description:"بلاگ دو اد",author:"اد",siteUrl:"https://keyvaann.github.io/blog",basePath:"/blog",lang:"fa",utterances:"sungik-choi/gatsby-starter-apple-comment",links:{github:"https://github.com/sungik-choi/gatsby-starter-apple"},favicon:"src/images/icon.png"};e.exports=t},1010:function(e,t,n){"use strict";n.d(t,{A:function(){return me}});var r,o,i,a,l=n(6540),c=n(5556),s=n.n(c),u=n(2098),d=n.n(u),f=n(115),p=n.n(f),h=n(8828),m=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(y).map((function(e){return y[e]})),"charset"),x="cssText",T="href",E="http-equiv",k="innerHTML",C="itemprop",A="name",S="property",O="rel",_="src",I="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",z="defer",P="encodeSpecialCharacters",N="onChangeClientState",q="titleTemplate",B=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),M=[y.NOSCRIPT,y.SCRIPT,y.STYLE],R="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=J(e,y.TITLE),n=J(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},W=function(e){return J(e,N)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],c=l.toLowerCase();-1===t.indexOf(c)||n===O&&"canonical"===e[n].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==k&&l!==x&&l!==C||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],c=m()({},r[l],o[l]);r[l]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),X=function(e){return clearTimeout(e)},Z="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:n.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;ae(y.BODY,r),ae(y.HTML,o),ie(d,f);var p={baseTag:le(y.BASE,n),linkTags:le(y.LINK,i),metaTags:le(y.META,a),noscriptTags:le(y.NOSCRIPT,l),scriptTags:le(y.SCRIPT,s),styleTags:le(y.STYLE,u)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(y.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var c=a[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"["+R+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(R,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,o=se(n,r),[l.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ce(n),i=oe(t);return o?"<"+e+" "+R+'="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+" "+R+'="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===k||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===M.indexOf(e);return t+"<"+e+" "+R+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:ue(y.BASE,t,r),bodyAttributes:ue(g,n,r),htmlAttributes:ue(b,o,r),link:ue(y.LINK,i,r),meta:ue(y.META,a,r),noscript:ue(y.NOSCRIPT,l,r),script:ue(y.SCRIPT,c,r),style:ue(y.STYLE,s,r),title:ue(y.TITLE,{title:d,titleAttributes:f},r)}},fe=d()((function(e){return{baseTag:G([T,I],e),bodyAttributes:$(g,e),defer:J(e,z),encode:J(e,P),htmlAttributes:$(b,e),linkTags:V(y.LINK,[O,T],e),metaTags:V(y.META,[A,w,E,S,C],e),noscriptTags:V(y.NOSCRIPT,[k],e),onChangeClientState:W(e),scriptTags:V(y.SCRIPT,[_,k],e),styleTags:V(y.STYLE,[x],e),title:K(e),titleAttributes:$(v,e)}}),(function(e){ne&&ee(ne),e.defer?ne=Z((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),de)((function(){return null})),pe=(o=fe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t));case y.BODY:return H({},o,{bodyAttributes:H({},i)});case y.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(o,r)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);pe.renderStatic=pe.rewind;var he=n(8864);var me=e=>{var t;let{title:n,desc:r=""}=e;const o=(0,he.A)(),i=r||o.description;return l.createElement(pe,{htmlAttributes:{lang:null!==(t=o.lang)&&void 0!==t?t:"fa"},title:null!=n?n:"",titleTemplate:`%s | ${o.title}`,meta:[{name:"description",content:i},{property:"og:title",content:n},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.author},{name:"twitter:title",content:n},{name:"twitter:description",content:i}]})}},6265:function(e,t,n){"use strict";n.d(t,{T:function(){return r},n:function(){return o}});const r="light",o="dark"},8864:function(e,t,n){"use strict";var r=n(4794);t.A=()=>{const{site:e}=(0,r.useStaticQuery)("786225983");return e.siteMetadata}},7569:function(e,t,n){"use strict";n.d(t,{A:function(){return ne}});var r=n(6540),o=n(9616),i=n(4794),a=n(8438),l=n.n(a),c=n(8864);var s=o.default.div.withConfig({displayName:"background__Background",componentId:"sc-18hdsa0-0"})(["position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;backdrop-filter:saturate(180%) blur(20px);background-color:var(--color-nav-bar);border-bottom:1px solid var(--color-nav-border);"]);var u=n(9843),d=n.n(u);const f=/(https?:\/\/)?[\w~\-]+(\.[\w~\-]+)+(\/[\w%:@~\-]*)*(#[\w-]*)?(\?\S*)?/gi;var p=e=>{let{links:t,setToggle:n}=e;return r.createElement(r.Fragment,null,null==t?void 0:t.map((e=>{if(d()(e))return;const{link:t,name:o}=e,a=d()(t)?"":t,l=f.test(a);return"/"===a?r.createElement("li",{key:o},r.createElement(i.Link,{to:a,onClick:()=>n(!1)},o)):l?r.createElement("li",{key:o},r.createElement("a",{target:"__blank",rel:"noreferrer",href:a},o)):r.createElement("li",{key:o},r.createElement(i.Link,{to:a},o))})))};const h=o.default.div.withConfig({displayName:"menuIcon__MenuIconBreadTop",componentId:"sc-1xhrvbj-0"})(["top:22px;"]),m=o.default.div.withConfig({displayName:"menuIcon__MenuIconBreadBottom",componentId:"sc-1xhrvbj-1"})(["bottom:22px;"]),g=o.default.button.withConfig({displayName:"menuIcon__MenuIconButton",componentId:"sc-1xhrvbj-2"})(["z-index:9999;display:none;@media (max-width:","){position:relative;margin-left:auto;display:block;cursor:pointer;width:var(--nav-height);height:var(--nav-height);border:none;background-color:transparent;& > div{position:absolute;width:18px;height:1px;right:var(--padding-sm);opacity:0.8;transition:opacity 0.3s ease,transform ",";}& > div > div{width:100%;height:100%;background-color:var(--color-text);transition:transform ",";}","{transform:",";div{transform:",";}}","{transform:",";div{transform:",";}}&:hover > div{opacity:1;}}"],(e=>{let{theme:t}=e;return t.device.sm}),(e=>{let{toggle:t}=e;return!0===t?"0.1s ease":"0.2s ease 0.1s"}),(e=>{let{toggle:t}=e;return!0===t?"0.2s ease 0.1s":"0.1s ease"}),h,(e=>{let{toggle:t}=e;return!1===t?"none":"translateY(4.5px)"}),(e=>{let{toggle:t}=e;return!1===t?"none":"rotate(45deg)"}),m,(e=>{let{toggle:t}=e;return!1===t?"none":"translateY(-4.5px)"}),(e=>{let{toggle:t}=e;return!1===t?"none":"rotate(-45deg)"}));var b=e=>{let{toggle:t,handleClick:n}=e;return r.createElement(g,{onClick:n,toggle:t,"aria-label":"Menu"},r.createElement(h,null,r.createElement("div",null)),r.createElement(m,null,r.createElement("div",null)))},v=n(6265),y=n(6293);var w=e=>{let{theme:t}=e;return r.createElement(r.Fragment,null,t===v.n?r.createElement(r.Fragment,null,r.createElement("g",null,r.createElement("circle",{cx:"12",cy:"12",r:"6"})),r.createElement("rect",{x:"11",y:"1",width:"2",height:"3"}),r.createElement("rect",{x:"4.3",y:"3.8",transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -2.1881 5.2825)",width:"2",height:"3"}),r.createElement("rect",{x:"1.5",y:"10.5",transform:"matrix(4.547480e-11 -1 1 4.547480e-11 -9.5 14.5)",width:"2",height:"3"}),r.createElement("rect",{x:"4.3",y:"17.2",transform:"matrix(-0.7071 -0.7071 0.7071 -0.7071 -4.2175 35.6881)",width:"2",height:"3"}),r.createElement("rect",{x:"11",y:"20",transform:"matrix(-1 -9.004010e-11 9.004010e-11 -1 24 43)",width:"2",height:"3"}),r.createElement("rect",{x:"17.7",y:"17.2",transform:"matrix(-0.7071 0.7071 -0.7071 -0.7071 45.1881 18.7175)",width:"2",height:"3"}),r.createElement("rect",{x:"20.5",y:"10.5",transform:"matrix(-1.355149e-10 1 -1 -1.355149e-10 33.5 -9.5)",width:"2",height:"3"}),r.createElement("rect",{x:"17.7",y:"3.8",transform:"matrix(0.7071 0.7071 -0.7071 0.7071 9.2175 -11.6881)",width:"2",height:"3"})):r.createElement("path",{d:"M16.3,15.2c-4.1-1.2-7.2-4.8-7.5-9.1C8.8,4.8,8.9,3.5,9.3,2.4C4.8,3.6,1.5,8,2.1,13.1c0.5,4.6,4.2,8.3,8.7,8.8 c4.9,0.6,9.2-2.4,10.6-6.7C19.9,15.7,18.1,15.8,16.3,15.2z"}))};const x=o.default.svg.withConfig({displayName:"themeToggleButton__Icon",componentId:"sc-z0axdq-0"})(["width:1.125rem;height:1.125rem;fill:var(--color-icon);transform:translateY(-1px);@media (max-width:","){width:0;height:1rem;transition:width 0.3s ease;}"],(e=>{let{theme:t}=e;return t.device.sm})),T=(0,o.default)(s).withConfig({displayName:"themeToggleButton__ButtonBackground",componentId:"sc-z0axdq-1"})(["border:none;background-color:var(--color-floating-button);border-radius:var(--border-radius-lg);box-shadow:0 3px 15px var(--color-floating-button-shadow);@media (max-width:","){visibility:hidden;background-color:transparent;border-radius:0;box-shadow:none;}"],(e=>{let{theme:t}=e;return t.device.sm})),E=o.default.div.withConfig({displayName:"themeToggleButton__Content",componentId:"sc-z0axdq-2"})(["z-index:2;display:flex;justify-content:center;align-items:center;background-color:transparent;"]),k=o.default.span.withConfig({displayName:"themeToggleButton__Text",componentId:"sc-z0axdq-3"})(["color:var(--color-floating-button-text);margin-left:6px;@media (max-width:","){color:var(--color-text);margin-left:0;font-weight:var(--font-weight-medium);border-radius:50%;}"],(e=>{let{theme:t}=e;return t.device.sm})),C=o.default.button.withConfig({displayName:"themeToggleButton__Button",componentId:"sc-z0axdq-4"})(["cursor:pointer;box-sizing:border-box;position:fixed;display:flex;justify-content:center;align-items:center;background-color:transparent;z-index:100;right:var(--sizing-md);bottom:var(--sizing-md);padding:var(--sizing-base);padding-right:20px;border:1px solid var(--color-floating-button-border);border-radius:var(--border-radius-lg);font-weight:var(--font-weight-medium);@media (min-width:","){&:hover{outline:none;border:1px solid var(--color-floating-button-border-hover);",",","{color:var(--color-floating-button-text-hover);fill:var(--color-floating-button-text-hover);}","{background-color:var(--color-floating-button-hover);box-shadow:0 3px 15px var(--color-floating-button-shadow-hover);}}}@media (max-width:","){justify-content:start;position:static;border-radius:0;border:none;width:100%;padding:0.5rem 0;&:hover{",",","{fill:var(--color-blue);color:var(--color-blue);}","{width:1rem;margin-right:4px;}}&:focus-visible{",",","{fill:var(--color-blue);color:var(--color-blue);}","{width:1rem;margin-right:4px;}}}"],(e=>{let{theme:t}=e;return t.device.sm}),x,k,T,(e=>{let{theme:t}=e;return t.device.sm}),x,k,x,x,k,x);var A=e=>{let{themeToggler:t}=e;const n=(0,r.useContext)(y.A),o=n===v.n?"Light theme":"Dark theme";return r.createElement(C,{onClick:t},r.createElement(T,null),r.createElement(E,null,r.createElement(x,{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 24 24"},r.createElement(w,{theme:n})),r.createElement(k,null,o)))},S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},S.apply(this,arguments)},O=function(){return"undefined"!=typeof window&&!!window.document&&!!window.document.createElement},_=new(function(){function e(){var e=this;this.handleWheel=function(e){e.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(t){var n=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(t.target.tagName)&&(n=n.filter((function(t){return!e.options.authorizedInInputs.includes(t)}))),n.includes(t.keyCode)&&t.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},O()&&(this.element=document.scrollingElement)}return e.prototype.on=function(e,t){var n,r,o,i;if(O()){this.element=e||this.element,this.options=S(S({},this.options),t);var a=this.options,l=a.disableKeys,c=a.disableScroll;a.disableWheel&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),c&&(this.lockToScrollPos=[null!==(r=null===(n=this.element)||void 0===n?void 0:n.scrollLeft)&&void 0!==r?r:0,null!==(i=null===(o=this.element)||void 0===o?void 0:o.scrollTop)&&void 0!==i?i:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),l&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},e.prototype.off=function(){O()&&(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},e}());const I=e=>!(!e||!e.current);var j=e=>{let{navRef:t,curtainRef:n,listRef:o,device:i}=e;const{0:a,1:l}=(0,r.useState)(!1),c=(0,r.useRef)(),s="a[href], button:not([disabled])";(0,r.useEffect)((()=>{c.current=window.matchMedia(`(max-width: ${i.sm})`)}),[i.sm]);const u=(0,r.useCallback)((()=>{var e,t;const n=null==o||null===(e=o.current)||void 0===e?void 0:e.querySelectorAll(s);if(null===(t=c.current)||void 0===t||!t.matches){if(n)for(const e of n)e.setAttribute("tabindex","0");return}const r=a?0:-1;if(n)for(const o of n)o.setAttribute("tabindex",`${r}`)}),[s,o,a]);return(0,r.useEffect)((()=>{u()}),[u]),(0,r.useEffect)((()=>{var e;return null===(e=c.current)||void 0===e||e.addEventListener("change",u),()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.removeEventListener("change",u)}})),(0,r.useEffect)((()=>{var e;const n=null==t||null===(e=t.current)||void 0===e?void 0:e.querySelectorAll(s),r=null==n?void 0:n[0],o=null==n?void 0:n[(null==n?void 0:n.length)-1],i=e=>{a&&("Tab"===e.code&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),null==o||o.focus()):document.activeElement===o&&(e.preventDefault(),null==r||r.focus())),"Escape"===e.code&&l(!1))};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)}),[s,t,a,l]),(0,r.useEffect)((()=>{a?_.on():_.off()}),[a]),(0,r.useEffect)((()=>{var e;const t=e=>{if(e.matches)return I(n)&&I(o)&&(n.current.style.display="none",o.current.style.display="none"),void setTimeout((()=>{I(n)&&I(o)&&(n.current.style.display="block",o.current.style.display="flex")}),500);l(!1)};return null===(e=c.current)||void 0===e||e.addEventListener("change",t),()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.removeEventListener("change",t)}})),{toggle:a,setToggle:l,handleClick:()=>l(!0!==a)}};const L=o.default.nav.withConfig({displayName:"navBar__Nav",componentId:"sc-1f8zn2y-0"})(["min-width:var(--min-width);position:sticky;top:0;left:0;width:100%;height:var(--nav-height);z-index:10;a:hover{text-decoration:none;}"]),z=o.default.div.withConfig({displayName:"navBar__Content",componentId:"sc-1f8zn2y-1"})(["box-sizing:content-box;position:relative;margin:0 auto;max-width:var(--width);padding:0 var(--padding-lg);height:100%;z-index:2;display:flex;justify-content:space-between;align-items:center;li{margin:0;list-style-type:none;}@media (max-width:","){padding:0 var(--padding-sm);}"],(e=>{let{theme:t}=e;return t.device.sm})),P=o.default.h1.withConfig({displayName:"navBar__Title",componentId:"sc-1f8zn2y-2"})(["z-index:9999;padding:0;border:none;font-size:var(--text-title);font-weight:var(--font-weight-semi-bold);color:var(--color-text);a{color:inherit;}@media (max-width:","){font-size:var(--text-md);}"],(e=>{let{theme:t}=e;return t.device.sm})),N=o.default.ul.withConfig({displayName:"navBar__LinkUl",componentId:"sc-1f8zn2y-3"})(["display:flex;a{font-weight:var(--font-weight-regular);}a:hover,a:focus{color:var(--color-blue);}li{display:flex;justify-content:center;align-items:center;margin-right:32px;}li:first-child,li:last-child{margin-left:0;}@media (max-width:","){"," pointer-events:",";flex-direction:column;padding:0 var(--sizing-lg);li{display:block;margin-left:0;font-size:var(--text-md);transform:",";opacity:",';}a{display:block;height:100%;padding:0.5rem 0;font-weight:var(--font-weight-medium);}li + li::before{content:"";display:block;position:absolute;width:calc(100vw - var(--sizing-lg) * 2);height:1px;transform:translateY(-2px);background-color:var(--color-divider);}}'],(e=>{let{theme:t}=e;return t.device.sm}),(e=>{let{toggle:t}=e;return(e=>{let t="";const n=e?"cubic-bezier(.19,.2,0,.99)":"ease-in",r=t=>e?.1+.06*t:.25-.06*t;for(let o=0;o<10;o+=1)t+=`\n    li:nth-child(${o}) {\n        transition-property: transform, opacity;\n        transition-duration: 0.5s, 0.3s;\n        transition-delay: ${r(o)}s;\n        transition-timing-function: ${n}, ease-out;\n    }\n    `;return(0,o.css)(["",""],t)})(t)}),(e=>{let{toggle:t}=e;return t?"auto":"none"}),(e=>{let{toggle:t}=e;return t?"translateY(var(--sizing-lg))":"translateY(0)"}),(e=>{let{toggle:t}=e;return t?"1":"0"})),q=(0,o.default)(s).withConfig({displayName:"navBar__NavBackground",componentId:"sc-1f8zn2y-4"})(["@media (max-width:","){&::after{",';content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-post-background);}}'],(e=>{let{theme:t}=e;return t.device.sm}),(e=>{let{toggle:t}=e;return(e=>{const t=e?"0.3s ease":"0.4s ease-in-out 0.48s",n=e?1:0;return(0,o.css)(["transition:opacity ",";opacity:",";"],t,n)})(t)})),B=o.default.div.withConfig({displayName:"navBar__Curtain",componentId:"sc-1f8zn2y-5"})(["display:none;@media (max-width:","){"," display:block;position:fixed;top:calc(var(--nav-height) - 1px);left:0;width:100%;height:calc(100% - var(--nav-height) + 1px);background-color:var(--color-post-background);}"],(e=>{let{theme:t}=e;return t.device.sm}),(e=>{let{toggle:t}=e;return(e=>{const t=e?"scaleY(1)":"scaleY(0)";return(0,o.css)(["transition:transform 0.6s cubic-bezier(0.41,0.06,0.05,1) 0.1s;transform:",";transform-origin:top;"],t)})(t)})),M=o.default.div.withConfig({displayName:"navBar__LinkContent",componentId:"sc-1f8zn2y-6"})(["@media (max-width:","){width:100%;z-index:200;}"],(e=>{let{theme:t}=e;return t.device.sm})),R=o.default.div.withConfig({displayName:"navBar__LinkWrap",componentId:"sc-1f8zn2y-7"})(["display:flex;@media (max-width:","){position:absolute;top:0;left:0;width:100%;height:var(--nav-height);}"],(e=>{let{theme:t}=e;return t.device.sm}));var Y=e=>{let{title:t,themeToggler:n}=e;const{menuLinks:a}=(0,c.A)(),{device:s}=(0,r.useContext)(o.ThemeContext),u=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(null),{toggle:h,setToggle:m,handleClick:g}=j({navRef:u,curtainRef:d,listRef:f,device:s});return r.createElement(L,{ref:u,"aria-label":"Global Navigation"},r.createElement(q,{toggle:h}),r.createElement(z,null,r.createElement(P,{onClick:()=>m(!1)},r.createElement(i.Link,{to:l().basePath},t)),r.createElement(R,null,r.createElement(B,{ref:d,toggle:h}),r.createElement(M,null,r.createElement(b,{toggle:h,handleClick:g}),r.createElement(N,{ref:f,toggle:h},r.createElement(p,{links:a,setToggle:m}),r.createElement("li",null,r.createElement(A,{themeToggler:n})))))))};var D,H,U=()=>{const{0:e,1:t}=(0,r.useState)(),n=(0,r.useCallback)((()=>{const n=e===v.T?v.n:v.T;t(n),window.__setPreferredTheme(n)}),[e]);return(0,r.useEffect)((()=>{"undefined"!=typeof window&&t(window.__theme),window.__onThemeChange=e=>{t(e)}}),[]),{theme:e,themeToggler:n}},F=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},K=(0,o.css)(D||(D=F(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),W=((0,o.createGlobalStyle)(H||(H=F(["",""],["",""])),K),K);var $=(0,o.createGlobalStyle)([""," :root{font-size:100%;--width:980px;--min-width:320px;--post-width:650px;--nav-height:54px;--footer-height:60px;--grid-gap-sm:10px;--grid-gap-lg:24px;--grid-gap-xl:36px;--padding-xs:10px;--padding-sm:16px;--padding-lg:22px;--border-radius-sm:6px;--border-radius-base:8px;--border-radius-lg:28px;--sizing-xs:4px;--sizing-sm:8px;--sizing-base:16px;--sizing-md:24px;--sizing-lg:40px;--sizing-xl:64px;--text-xs:0.625rem;--text-sm:0.75rem;--text-base:1rem;--text-md:1.125rem;--text-title:1.25rem;--text-lg:1.5rem;--text-xl:3rem;--device-xs-max-width:419px;--device-sm-max-width:767px;--device-md-max-width:1023px;--device-lg-max-width:1441px;--device-xs-max-width-query:(max-width:419px);--device-sm-max-width-query:(max-width:767px);--device-md-max-width-query:(max-width:1023px);--device-lg-max-width-query:(max-width:1441px);--font-weight-regular:400;--font-weight-medium:500;--font-weight-semi-bold:600;--font-weight-bold:700;--font-weight-extra-bold:800;--color-outline:rgba(0,125,250,0.6);body.light{--color-text:#1d1d1d;--color-text-2:#1d1d1d;--color-text-3:#696969;--color-white:#ffffff;--color-nav-bar:rgba(255,255,255,0.7);--color-nav-border:rgba(200,200,200,0.7);--color-category-button:#f2f2f2;--color-background:#f2f2f2;--color-post-background:#ffffff;--color-card:#ffffff;--color-code:#f2f2f2;--color-code-block:#fafafa;--color-code-highlight:rgba(0,0,0,0.05);--color-code-highlight-border:rgba(0,0,0,0.2);--color-gray-1:#f2f2f2;--color-gray-2:#e0e0e0;--color-gray-3:#d1d1d1;--color-gray-4:#868686;--color-gray-5:#6e6e6e;--color-gray-6:#696969;--color-divider:rgba(0,0,0,0.15);--color-dimmed:rgba(0,0,0,0.15);--color-floating-button:rgba(255,255,255,0.7);--color-floating-button-hover:rgba(50,50,50,0.7);--color-floating-button-border:rgba(230,230,230,0.7);--color-floating-button-border-hover:rgba(255,255,255,0.2);--color-floating-button-text:#202020;--color-floating-button-text-hover:#f2f2f2;--color-floating-button-shadow:rgba(0,0,0,0.2);--color-floating-button-shadow-hover:rgba(0,0,0,0.4);--color-blue:#0066cc;--color-icon:#2c2c2c;}body.dark{--color-text:#e6e6e6;--color-text-2:#d1d1d1;--color-text-3:#8c8c8c;--color-white:#e6e6e6;--color-nav-bar:rgba(29,29,29,0.7);--color-nav-border:rgba(255,255,255,0.2);--color-category-button:#484848;--color-background:#1c1c1c;--color-post-background:#1c1c1c;--color-card:#2c2c2c;--color-code:#3a3a3a;--color-code-block:#242424;--color-code-highlight:rgba(255,255,255,0.05);--color-code-highlight-border:rgba(255,255,255,0.2);--color-gray-1:#1c1c1c;--color-gray-2:#2c2c2c;--color-gray-3:#3a3a3a;--color-gray-4:#484848;--color-gray-5:#646464;--color-gray-6:#868686;--color-divider:rgba(255,255,255,0.15);--color-dimmed:rgba(0,0,0,0.15);--color-floating-button:rgba(50,50,50,0.7);--color-floating-button-hover:rgba(255,255,255,0.7);--color-floating-button-border:rgba(255,255,255,0.2);--color-floating-button-border-hover:rgba(230,230,230,0.7);--color-floating-button-text:#d1d1d1;--color-floating-button-text-hover:#202020;--color-floating-button-shadow:rgba(0,0,0,0.4);--color-floating-button-shadow-hover:rgba(0,0,0,0.4);--color-blue:#0a84ff;--color-icon:#d1d1d1;}}html,body,#___gatsby,#gatsby-focus-wrapper{min-height:100%;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';background-color:var(--color-post-background);-webkit-font-smoothing:antialiased;direction:rtl;*{color:var(--color-text);}}:lang(ko){word-break:keep-all;}ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,hgroup,p,blockquote,figure,form,fieldset,input,legend,pre,abbr,button{margin:0;padding:0;}h1 a,li a{text-decoration:none;}a{text-decoration:none;}*:focus:not(:focus-visible){outline:none;}:focus-visible{outline:4px solid var(--color-outline);outline-offset:1px;}.js-focus-visible :focus:not(.focus-visible){outline:none;}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],W);var G={device:{xs:"419px",sm:"767px",md:"1023px",lg:"1441px"}},V=JSON.parse('{"name":"gatsby-starter-apple","homepage":"https://github.com/sungik-choi/gatsby-starter-apple#readme"}');const{name:J,homepage:Q}=V,X=o.default.div.withConfig({displayName:"layout__Container",componentId:"sc-f55ym1-0"})(["width:100%;height:100%;min-height:calc(100vh - var(--footer-height));background-color:var(--color-post-background);"]),Z=o.default.footer.withConfig({displayName:"layout__Footer",componentId:"sc-f55ym1-1"})(["display:flex;text-align:center;justify-content:center;align-items:center;height:var(--footer-height);background-color:var(--color-gray-1);"]),ee=o.default.span.withConfig({displayName:"layout__Copyright",componentId:"sc-f55ym1-2"})(["font-size:var(--text-sm);font-weight:var(--font-weight-regular);color:var(--color-gray-6);"]),te=o.default.a.withConfig({displayName:"layout__RepoLink",componentId:"sc-f55ym1-3"})(["color:var(--color-blue);&:hover{text-decoration:underline;}"]);var ne=e=>{let{children:t}=e;const{theme:n,themeToggler:i}=U(),{title:a,author:l}=(0,c.A)(),s=`Copyright © ${l}. Built with `;return r.createElement(o.ThemeProvider,{theme:G},r.createElement(y.A.Provider,{value:n},r.createElement($,null),r.createElement(X,null,r.createElement(Y,{title:a,themeToggler:i}),t),r.createElement(Z,{role:"contentinfo"},r.createElement(ee,{"aria-label":"Copyright"},s,r.createElement(te,{href:Q,target:"__blank"},J)))))}},6293:function(e,t,n){"use strict";const r=n(6540).createContext(void 0);t.A=r},9843:function(e){e.exports=function(e){return null==e}},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(!i(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((l=e.length)!=a.length)return!1;for(c=l;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",l),d}}}}]);
//# sourceMappingURL=201ad6c3f2c882b9d9cf079e4b183f9823aadb3d-3a45cf24cb05143b9589.js.map