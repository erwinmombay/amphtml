(self.AMP=self.AMP||[]).push({n:"amp-facebook",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook$$=function($element$jscomp$438$$){var $$jscomp$super$this$jscomp$49$$=AMP.BaseElement.call(this,$element$jscomp$438$$)||this;$$jscomp$super$this$jscomp$49$$.$D$=null;$$jscomp$super$this$jscomp$49$$.$H$=$element$jscomp$438$$.hasAttribute("data-locale")?$element$jscomp$438$$.getAttribute("data-locale"):_.$dashToUnderline$$module$src$string$$();$$jscomp$super$this$jscomp$49$$.$F$=null;$$jscomp$super$this$jscomp$49$$.$G$=0;return $$jscomp$super$this$jscomp$49$$};
_.$$jscomp$inherits$$($AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook$$,AMP.BaseElement);_.$JSCompiler_prototypeAlias$$=$AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook$$.prototype;_.$JSCompiler_prototypeAlias$$.$renderOutsideViewport$=function(){return.75};
_.$JSCompiler_prototypeAlias$$.$preconnectCallback$=function($opt_onLayout$jscomp$15$$){this.$preconnect$.url("https://facebook.com",$opt_onLayout$jscomp$15$$);this.$preconnect$.preload("https://connect.facebook.net/"+this.$H$+"/sdk.js","script");_.$preloadBootstrap$$module$src$3p_frame$$(this.$win$,this.$preconnect$)};_.$JSCompiler_prototypeAlias$$.$isLayoutSupported$=function($layout$jscomp$66$$){return _.$isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$66$$)};
_.$JSCompiler_prototypeAlias$$.$layoutCallback$=function(){var $$jscomp$this$jscomp$631$$=this,$iframe$jscomp$52$$=_.$getIframe$$module$src$3p_frame$$(this.$win$,this.element,"facebook");_.$JSCompiler_StaticMethods_applyFillContent$$($iframe$jscomp$52$$);_.$listenFor$$module$src$iframe_helper$$($iframe$jscomp$52$$,"embed-size",function($iframe$jscomp$52$$){_.$JSCompiler_StaticMethods_changeHeight$$($$jscomp$this$jscomp$631$$,$iframe$jscomp$52$$.height)},!0);this.$F$=_.$listen$$module$src$event_helper$$(this.$win$,
"message",this.$AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook_prototype$handleFacebookMessages_$.bind(this));this.$toggleLoading$(!0);_.$getMode$$module$src$mode$$().test&&this.$G$++;this.element.appendChild($iframe$jscomp$52$$);this.$D$=$iframe$jscomp$52$$;return this.$loadPromise$($iframe$jscomp$52$$)};
_.$JSCompiler_prototypeAlias$$.$AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook_prototype$handleFacebookMessages_$=function($event$jscomp$125_eventData$jscomp$10$$){this.$D$&&$event$jscomp$125_eventData$jscomp$10$$.source!=this.$D$.contentWindow||($event$jscomp$125_eventData$jscomp$10$$=$event$jscomp$125_eventData$jscomp$10$$.data)&&(_.$isObject$$module$src$types$$($event$jscomp$125_eventData$jscomp$10$$)?$event$jscomp$125_eventData$jscomp$10$$:_.$tryParseJson$$module$src$json$$($event$jscomp$125_eventData$jscomp$10$$))&&
"ready"==$event$jscomp$125_eventData$jscomp$10$$.action&&(this.$toggleLoading$(!1),_.$getMode$$module$src$mode$$().test&&this.$G$++)};_.$JSCompiler_prototypeAlias$$.$unlayoutOnPause$=function(){return!0};_.$JSCompiler_prototypeAlias$$.$unlayoutCallback$=function(){this.$D$&&(_.$removeElement$$module$src$dom$$(this.$D$),this.$D$=null);this.$F$&&this.$F$();return!0};self.AMP.registerElement("amp-facebook",$AmpFacebook$$module$extensions$amp_facebook$0_1$amp_facebook$$);
})});

//# sourceMappingURL=amp-facebook-0.1.js.map
