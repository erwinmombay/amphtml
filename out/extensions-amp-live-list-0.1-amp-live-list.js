function fa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var h=Object.getOwnPropertyDescriptor(b,e);h&&Object.defineProperty(a,e,h)}else a[e]=b[e]};function w(a,b){try{return decodeURIComponent(a)}catch(c){return void 0===b?"":b}};var ga=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ha(a){var b=Object.create(null);if(!a)return b;for(var c;c=ga.exec(a);)b[w(c[1],c[1])]=c[2]?w(c[2],c[2]):"";return b};var ia="";self.log=self.log||{L:null,ca:null,qa:null};var ja=self.log;function ya(){if(!ja.L)throw Error("failed to call initLogConstructor");return ja.L};var J;function za(a,b){if(null==J){var c=a.ownerDocument;try{var e=c.createElement("div"),h=c.createElement("div");e.appendChild(h);J=e.querySelector(":scope div")===h}catch(f){J=!1}}if(J)return a.querySelector(":scope "+b);a.classList.add("i-amphtml-scoped");b=a.querySelector(".i-amphtml-scoped "+b);a.classList.remove("i-amphtml-scoped");return b};function Aa(a,b){var c=b||0;b=this.length;for(c=0<=c?c:Math.max(b+c,0);c<b;c++){var e=this[c];if(e===a||a!==a&&e!==e)return!0}return!1};function Ba(a){return a==this||this.documentElement.contains(a)};function Ca(a,b){if(void 0===b?this.contains(a):!b)return this.remove(a),!1;this.add(a);return!0};function Ta(a){return(a=Number(a))?0<a?1:-1:a};var Ua=Object.prototype.hasOwnProperty;function Va(a,b){if(null==a)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(a),e=1;e<arguments.length;e++){var h=arguments[e];if(null!=h)for(var f in h)Ua.call(h,f)&&(c[f]=h[f])}return c};function Wa(a,b){function c(a){return a.toLowerCase()}function e(){var a=T.splice(0,T.length);for(U=0;a.length;)a.shift().call(null,a.shift())}function h(a,d){for(var g=0,S=a.length;g<S;g++)ka(a[g],d)}function f(a){return function(d){gb(d)&&(ka(d,a),t.length&&h(d.querySelectorAll(t),a))}}function k(a){var d=D.call(a,"is");a=a.nodeName.toUpperCase();var g=y.call(C,d?"="+d.toUpperCase():"<"+a);return d&&-1<g&&!(-1<t.indexOf(a+'[is="'+d+'"]'))?-1:g}function l(a){var d=a.currentTarget,g=a.attrChange,
q=a.attrName,b=a.target,S=a.ADDITION||2,c=a.REMOVAL||3;!V||b&&b!==d||!d.attributeChangedCallback||"style"===q||a.prevValue===a.newValue&&(""!==a.newValue||g!==S&&g!==c)||d.attributeChangedCallback(q,g===S?null:a.prevValue,g===c?null:a.newValue)}function x(a){var d=f(a);return function(a){T.push(d,a.target);U&&clearTimeout(U);U=setTimeout(e,1)}}function m(a){Da&&(Da=!1,a.currentTarget.removeEventListener("DOMContentLoaded",m));t.length&&h((a.target||n).querySelectorAll(t),"detached"===a.detail?"detached":
"attached");if(E)for(var d=0,g=L.length;d<g;d++)a=L[d],F.contains(a)||(g--,L.splice(d--,1),ka(a,"detached"))}function v(a,d){Ea.call(this,a,d);la.call(this,{target:this})}function p(a,d){hb(a,d);W?W.observe(a,ib):(X&&(a.setAttribute=v,a[A]=ma(a),a.addEventListener("DOMSubtreeModified",la)),a.addEventListener("DOMAttrModified",l));a.createdCallback&&V&&(a.P=!0,a.createdCallback(),a.P=!1)}function z(a){throw Error("A "+a+" type is already registered");}function ka(a,d){var g,q=k(a);-1<q&&(na(a,M[q]),
q=0,"attached"!==d||a.attached?"detached"!==d||a.detached||(a.attached=!1,a.detached=!0,q=1):(a.detached=!1,a.attached=!0,q=1,E&&0>y.call(L,a)&&L.push(a)),q&&(g=a[d+"Callback"])&&g.call(a))}function Y(){}function Fa(a,d,g){g=g&&g["extends"]||"";var q=d.prototype,b=oa(q),e=d.ma||pa,f={prototype:b};Z(b,"createdCallback",{value:function(){if(aa)aa=!1;else if(!this.__dreCEv1){this.__dreCEv1=!0;new d(this);q.createdCallback&&q.createdCallback.call(this);var a=N[ba.get(d)];(!G||1<a.create.length)&&Ga(this)}}});
Z(b,"attributeChangedCallback",{value:function(a){-1<y.call(e,a)&&q.attributeChangedCallback.apply(this,arguments)}});q.connectedCallback&&Z(b,"attachedCallback",{value:q.connectedCallback});q.disconnectedCallback&&Z(b,"detachedCallback",{value:q.disconnectedCallback});g&&(f["extends"]=g);a=a.toUpperCase();N[a]={constructor:d,create:g?[g,c(a)]:[a]};ba.set(d,a);n.registerElement(a.toLowerCase(),f);qa(a);H[a].r()}function Ha(a){return(a=N[a.toUpperCase()])&&a.constructor}function Ia(a){return"string"===
typeof a?a:a&&a.is||""}function Ga(a){for(var d=a.attributeChangedCallback,g=d?a.attributes:pa,b=g.length,c;b--;)c=g[b],d.call(a,c.name||c.nodeName,null,c.value||c.nodeValue)}function qa(a){a=a.toUpperCase();a in H||(H[a]={},H[a].p=new Ja(function(d){H[a].r=d}));return H[a].p}function Ka(){function b(d){var g=a[d];if(g){a[d]=function(a){var d;a||(a=this);a.__dreCEv1||(aa=!0,a=N[ba.get(a.constructor)],a=(d=G&&1===a.create.length)?Reflect.construct(g,pa,a.constructor):n.createElement.apply(n,a.create),
a.__dreCEv1=!0,aa=!1,d||Ga(a));return a};a[d].prototype=g.prototype;try{g.prototype.constructor=a[d]}catch(Cb){I(g,"__dreCEv1",{value:a[d]})}}}B&&delete a.I;I(a,"customElements",{configurable:!0,value:new Y});I(a,"CustomElementRegistry",{configurable:!0,value:Y});for(var d=jb.get(/^HTML[A-Z]*[a-z]/),g=d.length;g--;b(d[g]));n.createElement=function(a,d){return(d=Ia(d))?ra.call(this,a,c(d)):ra.call(this,a)};La||(sa=!0,n.registerElement(""))}var n=a.document,u=a.Object,jb=function(a){function d(a,d){d=
d.toLowerCase();d in b||(b[a]=(b[a]||[]).concat(d),b[d]=b[d.toUpperCase()]=a)}var g=/^[A-Z]+[a-z]/,b=(u.create||u)(null),c={},e,f,h,k;for(f in a)for(k in a[f])for(h=a[f][k],b[k]=h,e=0;e<h.length;e++)b[h[e].toLowerCase()]=b[h[e].toUpperCase()]=k;c.get=function(a){if("string"===typeof a)a=b[a]||(g.test(a)?[]:"");else{var d=[],c;for(c in b)a.test(c)&&d.push(c);a=d}return a};c.set=function(a,b){return g.test(a)?d(a,b):d(b,a),c};return c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],
HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],
HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:"element abbr address article aside b bdi bdo cite code command dd dfn dt em figcaption figure footer header i kbd mark nav noscript rp rt ruby s samp section small strong sub summary sup u var wbr".split(" "),HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],
HTMLHeadElement:["head"],HTMLHeadingElement:"h1 h2 h3 h4 h5 h6".split(" "),HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],
HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],
HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],
Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});b||(b="auto");var A="__registerElement"+(1E5*a.Math.random()>>0),kb=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,lb="ANNOTATION-XML COLOR-PROFILE FONT-FACE FONT-FACE-SRC FONT-FACE-URI FONT-FACE-FORMAT FONT-FACE-NAME MISSING-GLYPH".split(" "),
C=[],M=[],t="",F=n.documentElement,y=C.indexOf||function(a){for(var d=this.length;d--&&this[d]!==a;);return d},ta=u.prototype,ua=ta.hasOwnProperty,ca=ta.isPrototypeOf,I=u.defineProperty,pa=[],va=u.getOwnPropertyDescriptor,Ma=u.getOwnPropertyNames,mb=u.getPrototypeOf,Na=u.setPrototypeOf,Oa=!!u.__proto__,B=a.I,G="force"!==b&&!!(B&&B.D&&B.get&&B.M),Pa=u.create||u,nb=a.Map||function(){var a=[],d=[],b;return{get:function(b){return d[y.call(a,b)]},set:function(g,c){b=y.call(a,g);0>b?d[a.push(g)-1]=c:d[b]=
c}}},Ja=a.Promise||function(a){function d(a){for(c=!0;b.length;)b.shift()(a)}var b=[],c=!1,e={"catch":function(){return e},then:function(a){b.push(a);c&&setTimeout(d,1);return e}};a(d);return e},aa=!1,N=Pa(null),H=Pa(null),ba=new nb,oa=u.create||function d(a){return a?(d.prototype=a,new d):this},hb=Na||(Oa?function(a,b){a.__proto__=b;return a}:Ma&&va?function(){return function(a,b){do for(var d=a,c=b,g,e=Ma(c),f=0,h=e.length;f<h;f++)g=e[f],ua.call(d,g)||I(d,g,va(c,g));while((b=mb(b))&&!ca.call(b,
a));return a}}():function(a,b){for(var d in b)a[d]=b[d];return a}),O=a.MutationObserver||a.WebKitMutationObserver,r=(a.HTMLElement||a.Element||a.Node).prototype,E=!ca.call(r,F),Z=E?function(a,b,c){a[b]=c.value;return a}:I,gb=E?function(a){return 1===a.nodeType}:function(a){return ca.call(r,a)},L=E&&[],Qa=r.N,ob=r.cloneNode,wa=r.dispatchEvent,D=r.getAttribute,pb=r.hasAttribute,qb=r.removeAttribute,Ea=r.setAttribute,da=n.createElement,ra=da,ib=O&&{attributes:!0,characterData:!0,attributeOldValue:!0},
Ra=O||function(){X=!1;F.removeEventListener("DOMAttrModified",Ra)},T,U=0,La="registerElement"in n,Sa=!0,sa=!1,X=!0,Da=!0,V=!0,la,ea,ma,W,xa,na,P;La||(Na||Oa?(na=function(a,b){ca.call(b,a)||p(a,b)},P=p):P=na=function(a,b){a[A]||(a[A]=u(!0),p(a,b))},E?(X=!1,function(){function a(a){var b=a.currentTarget,d=b[A];a=a.propertyName;var c;d.hasOwnProperty(a)&&(d=d[a],c=new CustomEvent("DOMAttrModified",{bubbles:!0}),c.attrName=d.name,c.prevValue=d.value||null,c.newValue=d.value=b[a]||null,null==c.prevValue?
c.ADDITION=c.attrChange=0:c.MODIFICATION=c.attrChange=1,wa.call(b,c))}function b(a,b){var d=pb.call(this,a),c=d&&D.call(this,a),g=new CustomEvent("DOMAttrModified",{bubbles:!0});Ea.call(this,a,b);g.attrName=a;g.prevValue=d?c:null;g.newValue=b;d?g.MODIFICATION=g.attrChange=1:g.ADDITION=g.attrChange=0;wa.call(this,g)}function c(a){var b=new CustomEvent("DOMAttrModified",{bubbles:!0});b.attrName=a;b.prevValue=D.call(this,a);b.newValue=null;b.REMOVAL=b.attrChange=2;qb.call(this,a);wa.call(this,b)}var e=
va(r,"addEventListener"),f=e.value;e.value=function(d,g,e){"DOMAttrModified"===d&&this.attributeChangedCallback&&this.setAttribute!==b&&(this[A]={className:{name:"class",value:this.className}},this.setAttribute=b,this.removeAttribute=c,f.call(this,"propertychange",a));f.call(this,d,g,e)};I(r,"addEventListener",e)}()):O||(F.addEventListener("DOMAttrModified",Ra),F.setAttribute(A,1),F.removeAttribute(A),X&&(la=function(a){var b,d;if(this===a.target){a=this[A];this[A]=b=ma(this);for(d in b){if(!(d in
a))return ea(0,this,d,a[d],b[d],"ADDITION");if(b[d]!==a[d])return ea(1,this,d,a[d],b[d],"MODIFICATION")}for(d in a)if(!(d in b))return ea(2,this,d,a[d],b[d],"REMOVAL")}},ea=function(a,b,c,e,f,h){b={attrChange:a,currentTarget:b,attrName:c,prevValue:e,newValue:f};b[h]=a;l(b)},ma=function(a){for(var b,d={},c=a.attributes,e=0,f=c.length;e<f;e++)a=c[e],b=a.name,"setAttribute"!==b&&(d[b]=a.value);return d})),n.registerElement=function(a,b){function d(){return e?n.createElement(g,l):n.createElement(g)}l=
a.toUpperCase();Sa&&(Sa=!1,O?(W=function(a,b){function d(a,b){for(var d=0,c=a.length;d<c;b(a[d++]));}return new O(function(c){for(var e,g,f,h=0,k=c.length;h<k;h++)e=c[h],"childList"===e.type?(d(e.addedNodes,a),d(e.removedNodes,b)):(g=e.target,V&&g.attributeChangedCallback&&"style"!==e.attributeName&&(f=D.call(g,e.attributeName),f!==e.oldValue&&g.attributeChangedCallback(e.attributeName,e.oldValue,f)))})}(f("attached"),f("detached")),xa=function(a){W.observe(a,{childList:!0,subtree:!0});return a},
xa(n),Qa&&(r.N=function(){return xa(Qa.apply(this,arguments))})):(T=[],n.addEventListener("DOMNodeInserted",x("attached")),n.addEventListener("DOMNodeRemoved",x("detached"))),n.addEventListener("DOMContentLoaded",m),n.addEventListener("readystatechange",m),r.cloneNode=function(a){var b=ob.call(this,!!a),d=k(b);-1<d&&P(b,M[d]);if(a&&t.length){a=b.querySelectorAll(t);for(var d=0,c=a.length,e;d<c;d++)e=a[d],P(e,M[k(e)])}return b});if(sa)return sa=!1;-2<y.call(C,"="+l)+y.call(C,"<"+l)&&z(a);if(!kb.test(l)||
-1<y.call(lb,l))throw Error("The type "+a+" is invalid");var c=b||ta,e=ua.call(c,"extends"),g=e?b["extends"].toUpperCase():l,l;e&&-1<y.call(C,"<"+g)&&z(g);b=C.push((e?"=":"<")+l)-1;t=t.concat(t.length?",":"",e?g+'[is="'+a.toLowerCase()+'"]':g);d.prototype=M[b]=ua.call(c,"prototype")?c.prototype:oa(r);t.length&&h(n.querySelectorAll(t),"attached");return d},n.createElement=ra=function(a,b){var d=(b=Ia(b))?da.call(n,a,c(b)):da.call(n,a);a=""+a;var e=y.call(C,(b?"=":"<")+(b||a).toUpperCase()),g=-1<e;
b&&(d.setAttribute("is",b=b.toLowerCase()),g&&(g=-1<t.indexOf(a.toUpperCase()+'[is="'+b+'"]')));V=!n.createElement.ia;g&&P(d,M[e]);return d});Y.prototype={constructor:Y,D:G?function(a,b,c){c?Fa(a,b,c):(c=a.toUpperCase(),N[c]={constructor:b,create:[c]},ba.set(b,c),B.D(a,b))}:Fa,get:G?function(a){return B.get(a)||Ha(a)}:Ha,M:G?function(a){return Ja.race([B.M(a),qa(a)])}:qa};if(B&&"force"!==b)try{(function(b,c,e){c["extends"]="a";b.prototype=oa(HTMLAnchorElement.prototype);b.prototype.constructor=b;
a.I.D(e,b,c);if(D.call(n.createElement("a",{is:e}),"is")!==e||G&&D.call(new b,"is")!==e)throw c;})(function g(){return Reflect.construct(HTMLAnchorElement,[],g)},{},"document-register-element-a")}catch(d){Ka()}else Ka();try{da.call(n,"a","a")}catch(d){c=function(a){return{is:a.toLowerCase()}}}}Wa(global);var K=self,Xa;if(K.H)Xa=K.H;else{var Ya=!(!K.AMP_TEST&&!K.$),Za=!(!self.AMP_CONFIG||!self.AMP_CONFIG.localDev)||Ya,$a=ha(K.location.W||K.location.hash),ab=ha(K.location.search);ia||(ia=Za?"$internalRuntimeVersion$":K.AMP_CONFIG&&K.AMP_CONFIG.v?K.AMP_CONFIG.v:"01$internalRuntimeVersion$");Xa=K.H={localDev:Za,da:!("1"!=$a.development&&!K.Z),ea:"2"==$a.development,filter:$a.filter,ka:!1,ja:void 0!=ab.amp_lite,test:Ya,log:$a.log,version:"$internalRuntimeVersion$",na:ia}}Xa.localDev||Wa.default(self,"auto");
/Trident|MSIE|IEMobile/i.test(self.navigator.userAgent)&&self.DOMTokenList&&self.Object.defineProperty(self.DOMTokenList.prototype,"toggle",{enumerable:!1,configurable:!0,writable:!0,value:Ca});self.Math.sign||self.Object.defineProperty(self.Math,"sign",{enumerable:!1,configurable:!0,writable:!0,value:Ta});self.Object.assign||self.Object.defineProperty(self.Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:Va});var bb=self.HTMLDocument||self.Document;
bb.prototype.contains||self.Object.defineProperty(bb.prototype,"contains",{enumerable:!1,configurable:!0,writable:!0,value:Ba});self.Array.prototype.includes||self.Object.defineProperty(Array.prototype,"includes",{enumerable:!1,configurable:!0,writable:!0,value:Aa});function cb(a){a:{var b;try{b=a.document.cookie}catch(h){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),e=c.indexOf("=");if(-1!=e&&"AMP_EXP"==w(c.substring(0,e).trim(),void 0)){a=c.substring(e+1).trim();a=w(a,a);break a}}a=null}a=a?a.split(/\s*,\s*/g):[];b=Object.create(null);for(c=0;c<a.length;c++)0!=a[c].length&&("-"==a[c][0]?b[a[c].substr(1)]=!1:b[a[c]]=!0);return b};function Q(a){AMP.BaseElement.call(this,a);this.F=this.c=this.K=this.l=null;this.T="";this.A=this.U=0;this.B=!1;this.h=Object.create(null);this.w=[];this.j=[];this.m=[];this.C=null;this.o=0;this.O=this.X.bind(this)}fa(Q,AMP.BaseElement);Q.prototype.isEnabled=function(){return!this.element.hasAttribute("disabled")};Q.prototype.toggle=function(a){a?this.element.removeAttribute("disabled"):this.element.setAttribute("disabled","")};
Q.prototype.update=function(a){var b=this,c=za(a,"> [items]");if(!c)return this.A;db(this,c);c=eb(this,c);fb(this,c.S);rb(this,c.replace);this.m.push.apply(this.m,c.Y);this.C=za(a,"> [pagination]");0<this.w.length?this.V(function(){sb(b,!0);b.l.pa()}):(0<this.j.length||0<this.m.length)&&tb(this);return this.A};
function tb(a){var b=0<a.w.length,c=0<a.m.length,e=0<a.j.length,e=b||e,h=a.V(function(){var e=ya().ba(a.c);b&&(ub(e,function(a){a.classList.remove("amp-live-list-item-new")}),a.o+=vb(a,a.w),a.w.length=0);0<a.j.length&&(wb(e,a.j),a.j.length=0);0<a.m.length&&(a.o-=xb(e,a.m),a.m.length=0);(b||c)&&a.F&&a.C&&(a.element.replaceChild(a.C,a.F),a.F=za(a.element,"> [pagination]"));sb(a,!1);a.C=null;return yb(a,e)});e&&(h=h.then(function(){var b=a.G.document.createEvent("Event");b.initEvent("amp:dom-update",
!0,!0);a.c.dispatchEvent(b)}));b&&(h=h.then(function(){return a.l.aa(a.B&&a.c.lastElementChild?a.c.lastElementChild:a.element)}))}function sb(a,b){a.K.classList.toggle("amp-hidden",!b);a.K.classList.toggle("amp-active",b)}
function vb(a,b){var c=0;b.forEach(function(b){if(0==a.c.childElementCount)a.c.appendChild(b);else{var e=R(b);if(a.B)for(var f=a.c.lastElementChild;f;f=f.previousElementSibling){var k=R(f);if(e>=k){f.nextElementSibling?a.c.insertBefore(b,f.nextElementSibling):a.c.appendChild(b);c++;break}else if(!f.previousElementSibling){a.c.insertBefore(b,f);c++;break}}else for(f=a.c.firstElementChild;f;f=f.nextElementSibling)if(k=R(f),e>=k){a.c.insertBefore(b,f);c++;break}else if(!f.nextElementSibling){a.c.appendChild(b);
c++;break}}});return c}function wb(a,b){var c=0;b.forEach(function(b){var e=b.getAttribute("id");if(e=a.querySelector("#"+e))a.replaceChild(b,e),c++})}function xb(a,b){var c=0;b.forEach(function(b){b=b.getAttribute("id");if(b=a.querySelector("#"+b))b.setAttribute("data-tombstone",""),b.textContent="",c++});return c}
function yb(a,b){var c=a.o-a.U;if(1>c)return Promise.resolve();var e=[],h=[];if(a.B)for(var f=b.firstElementChild;f&&!(e.length>=c);f=f.nextElementSibling)zb(f)||e.push(f);else for(f=b.lastElementChild;f&&!(e.length>=c);f=f.previousElementSibling)zb(f)||e.push(f);return a.ha().oa({measure:function(){for(var b=0;b<e.length;b++){var c=e[b];if(a.B){if(!(a.l.J(c).bottom<a.l.R()))break}else{var f;var m=a.G;if(m.__AMP__EXPERIMENT_TOGGLES)f=m.__AMP__EXPERIMENT_TOGGLES;else{m.__AMP__EXPERIMENT_TOGGLES=Object.create(null);
f=m.__AMP__EXPERIMENT_TOGGLES;if(m.AMP_CONFIG){var v=void 0;for(v in m.AMP_CONFIG){var p=m.AMP_CONFIG[v];"number"===typeof p&&0<=p&&1>=p&&(f[v]=Math.random()<p)}}if(m.AMP_CONFIG&&Array.isArray(m.AMP_CONFIG["allow-doc-opt-in"])&&0<m.AMP_CONFIG["allow-doc-opt-in"].length&&(v=m.AMP_CONFIG["allow-doc-opt-in"],p=m.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var p=p.getAttribute("content").split(","),z=0;z<p.length;z++)-1!=v.indexOf(p[z])&&(f[p[z]]=!0);Object.assign(f,cb(m));
if(m.AMP_CONFIG&&Array.isArray(m.AMP_CONFIG["allow-url-opt-in"])&&0<m.AMP_CONFIG["allow-url-opt-in"].length)for(v=m.AMP_CONFIG["allow-url-opt-in"],m=ha(m.location.W||m.location.hash),p=0;p<v.length;p++)z=m["e-"+v[p]],"1"==z&&(f[v[p]]=!0),"0"==z&&(f[v[p]]=!1)}if(!(f.layers?0<a.l.J(c).top:a.l.J(c).top>a.l.R()+a.l.ga().height))break}h.push(c)}},la:function(){h.forEach(function(c){b.removeChild(c);a.o--})}})}
function fb(a,b){b.sort(a.O).forEach(function(a){a.classList.add("amp-live-list-item");a.classList.add("amp-live-list-item-new")});a.w.push.apply(a.w,b)}function rb(a,b){b.forEach(function(b){var c;a:{c=a.j;for(var h=0;h<c.length;h++)if(c[h].getAttribute("id")==b.getAttribute("id")){c=h;break a}c=-1}b.classList.add("amp-live-list-item");-1==c?a.j.push(b):a.j[c]=b})}
function eb(a,b){var c=[],e=[],h=[];for(b=b.firstElementChild;b;b=b.nextElementSibling){var f=b.getAttribute("id"),k=a,l=b,x=l.getAttribute("id");l.hasAttribute("data-tombstone")||x in k.h?(k=a,x=b,!x.hasAttribute("data-update-time")||x.hasAttribute("data-tombstone")?k=!1:(l=x.getAttribute("id"),x=Ab(x),k=l in k.h&&-1!=k.h[l]&&x>k.h[l]),k?(k=Ab(b),a.h[f]=k,f=a.G.document.importNode(b,!0),k>a.A&&(a.A=k),e.push(f)):zb(b)&&-1!=a.h[f]&&(a.h[f]=-1,h.push(b))):(f=a.G.document.importNode(b,!0),c.push(f),
f=a,l=b,k=l.getAttribute("id"),l=Ab(l),l>f.A&&(f.A=l),f.h[k]=l)}return{S:c,replace:e,Y:h}}function zb(a){return a.hasAttribute("data-tombstone")}function db(a,b){var c=0,e=!1;ub(b,function(a){a.hasAttribute("id")&&0<Number(a.getAttribute("data-sort-time"))||(e=!0);c++});ya().assert(!e,"All amp-live-list-items under amp-live-list#"+a.T+" children must have id and data-sort-time attributes. data-sort-time must be a Number greater than 0.")}
function ub(a,b){for(a=a.firstElementChild;a;a=a.nextElementSibling)b(a)}Q.prototype.X=function(a,b){return R(a)-R(b)};function R(a){return Bb(a,"data-sort-time")}function Ab(a){return a.hasAttribute("data-update-time")?Bb(a,"data-update-time"):R(a)}function Bb(a,b){var c=Number(a.getAttribute(b));ya().assert(0<c,'"'+b+'" attribute must exist and value '+("must be a number greater than 0. Found "+c+" on ")+(a.getAttribute("id")+" instead."));return c}
AMP.fa("amp-live-list","0.1",function(a){a.registerElement("amp-live-list",Q,"amp-live-list>[update]{position:relative;z-index:1000}amp-live-list>.amp-active[update]{display:block}amp-live-list>[items]>[data-tombstone]{display:none}@-webkit-keyframes amp-live-list-item-highlight{0%{box-shadow:0 0 5px 2px #51cbee}to{box-shadow:0}}@keyframes amp-live-list-item-highlight{0%{box-shadow:0 0 5px 2px #51cbee}to{box-shadow:0}}\n/*# sourceURL=/extensions/amp-live-list/0.1/amp-live-list.css*/")});
