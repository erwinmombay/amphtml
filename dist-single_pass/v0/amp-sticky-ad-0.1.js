(self.AMP=self.AMP||[]).push({n:"amp-sticky-ad",i:["_base_i","_base_ad"],v:"1812270026550",f:(function(AMP,_){
var oZ=function(a){a=window.AMP.BaseElement.call(this,a)||this;a.S=_.Ch(a);a.Oi=null;a.U=null;a.ub=!1;a.mv=null;a.ZC=!1;a.qC=null;return a},pZ=function(a){a.mv&&(a.mv(),a.mv=null)},Xea=function(a){pZ(a);a.qC.then(function(){a.$(function(){a.ZC||(a.ub=!0,Vea(a),_.sr(a.U,a.element,!0).then(function(){return Wea(a)}))})})},Wea=function(a){_.gu(a.Oi).then(function(b){b.I().then(a.TM.bind(a))})},Vea=function(a){var b=a.B.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",
a.element.getAttribute("data-close-button-aria-label")||"Close this ad");var c=a.IN.bind(a);b.addEventListener("click",c);a.element.appendChild(b)};_.Bh.prototype.pr=_.Qq(18,function(a){this.element.Nb().pr(this.element,a)});_.Fl.prototype.pr=_.Qq(17,function(a,b){a=_.jj(a);b=_.nm(b);_.jm(this,a,b,function(a){_.uj(a)})});_.r(oZ,window.AMP.BaseElement);_.h=oZ.prototype;
_.h.ga=function(){var a=this;this.U=this.Ma();this.element.classList.add("i-amphtml-sticky-ad-layout");this.Oi=this.cf()[0];_.$q(this.Oi,this.element);this.qC=_.gu(this.Oi).then(function(a){return a.I()}).then(function(){return a.$(function(){_.W(a.element,!0)})});var b=this.B.document.createElement("amp-sticky-ad-top-padding");b.classList.add("amp-sticky-ad-top-padding");this.element.insertBefore(b,this.Oi);this.B.setTimeout(function(){a.mv=_.Al(a.U,function(){1<_.$l(a.U)&&Xea(a)})})};
_.h.va=function(){this.ub&&(_.W(this.element,!0),_.pr(this.U,this.element.offsetHeight),this.Pe(this.Oi,!0),this.Zc(this.Oi));return window.Promise.resolve()};_.h.ui=function(){return!0};_.h.Fa=function(){_.pr(this.U,0);return!0};_.h.detachedCallback=function(){pZ(this)};_.h.Mp=function(){var a=this;this.ZC=!0;this.ub=!1;_.W(this.element,!1);this.S.ea(function(){_.pr(a.U,0)})};
_.h.TM=function(){var a=this,b=this.Oi;this.Pe(b,!0);this.Zc(b);b=b.signals();return window.Promise.race([b.whenSignal("render-start"),b.whenSignal("load-end")]).then(function(){var b;return a.hg(function(){b=_.rf(a.B,a.element).backgroundColor}).then(function(){return _.kp(a.S,function(){a.element.setAttribute("visible","");_.pr(a.U,a.element.offsetHeight);var c=b.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");b!=c&&(_.t().Y("AMP-STICKY-AD","Do not allow container to be semitransparent"),
_.mf(a.element,"background-color",c))})})})};_.h.IN=function(){var a=this;this.S.ea(function(){a.ub=!1;a.pr(a.Oi);_.tr(a.U,a.element);_.mb(a.element);_.pr(a.U,0)})};window.self.AMP.registerElement("amp-sticky-ad",oZ,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;margin-bottom:0!important}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-webkit-box;display:-ms-flexbox;display:flex;visibility:hidden!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/");
})});
