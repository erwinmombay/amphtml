(self.AMP=self.AMP||[]).push({n:"amp-vine",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$=function($$jscomp$super$this$jscomp$120_element$jscomp$769$$){$$jscomp$super$this$jscomp$120_element$jscomp$769$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$120_element$jscomp$769$$)||this;$$jscomp$super$this$jscomp$120_element$jscomp$769$$.$D$=null;return $$jscomp$super$this$jscomp$120_element$jscomp$769$$};_.$$jscomp$inherits$$($AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$,AMP.BaseElement);
$AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$.prototype.$preconnectCallback$=function($onLayout$jscomp$11$$){this.$preconnect$.url("https://vine.co",$onLayout$jscomp$11$$);this.$preconnect$.url("https://v.cdn.vine.co",$onLayout$jscomp$11$$)};$AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$.prototype.$isLayoutSupported$=function($layout$jscomp$119$$){return _.$isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$119$$)};
$AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$.prototype.$layoutCallback$=function(){var $vineid$$=this.element.getAttribute("data-vineid"),$iframe$jscomp$98$$=this.element.ownerDocument.createElement("iframe");$iframe$jscomp$98$$.setAttribute("frameborder","0");$iframe$jscomp$98$$.src="https://vine.co/v/"+encodeURIComponent($vineid$$)+"/embed/simple";_.$JSCompiler_StaticMethods_applyFillContent$$($iframe$jscomp$98$$);this.element.appendChild($iframe$jscomp$98$$);this.$D$=$iframe$jscomp$98$$;
return this.$loadPromise$($iframe$jscomp$98$$)};$AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$.prototype.$pauseCallback$=function(){this.$D$&&this.$D$.contentWindow&&this.$D$.contentWindow.postMessage("pause","*")};self.AMP.registerElement("amp-vine",$AmpVine$$module$extensions$amp_vine$0_1$amp_vine$$);
})});

//# sourceMappingURL=amp-vine-0.1.js.map
