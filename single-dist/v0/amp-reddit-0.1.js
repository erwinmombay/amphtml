(self.AMP=self.AMP||[]).push({n:"amp-reddit",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$=function($var_args$jscomp$82$$){return AMP.BaseElement.apply(this,arguments)||this};_.$$jscomp$inherits$$($AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$,AMP.BaseElement);
$AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$.prototype.$preconnectCallback$=function($onLayout$jscomp$9$$){"comment"===this.element.getAttribute("data-embedtype")?(this.$preconnect$.url("https://www.redditmedia.com",$onLayout$jscomp$9$$),this.$preconnect$.url("https://www.redditstatic.com",$onLayout$jscomp$9$$),this.$preconnect$.preload("https://www.redditstatic.com/comment-embed.js","script")):(this.$preconnect$.url("https://www.reddit.com",$onLayout$jscomp$9$$),this.$preconnect$.url("https://cdn.embedly.com",
$onLayout$jscomp$9$$),this.$preconnect$.preload("https://embed.redditmedia.com/widgets/platform.js","script"));_.$preloadBootstrap$$module$src$3p_frame$$(this.$win$,this.$preconnect$)};$AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$.prototype.$isLayoutSupported$=function($layout$jscomp$98$$){return _.$isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$98$$)};
$AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$.prototype.$layoutCallback$=function(){var $$jscomp$this$jscomp$863$$=this,$iframe$jscomp$80$$=_.$getIframe$$module$src$3p_frame$$(this.$win$,this.element,"reddit",null,{$allowFullscreen$:!0});_.$JSCompiler_StaticMethods_applyFillContent$$($iframe$jscomp$80$$);_.$listenFor$$module$src$iframe_helper$$($iframe$jscomp$80$$,"embed-size",function($iframe$jscomp$80$$){_.$JSCompiler_StaticMethods_changeHeight$$($$jscomp$this$jscomp$863$$,$iframe$jscomp$80$$.height)},
!0);this.element.appendChild($iframe$jscomp$80$$);return this.$loadPromise$($iframe$jscomp$80$$)};self.AMP.registerElement("amp-reddit",$AmpReddit$$module$extensions$amp_reddit$0_1$amp_reddit$$);
})});

//# sourceMappingURL=amp-reddit-0.1.js.map
