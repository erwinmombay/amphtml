(self.AMP=self.AMP||[]).push({n:"extensions-amp-facebook-comments-0.1-amp-facebook-comments.js", v:"erwin", f:(function(){function $AmpFacebookComments$$module$extensions$amp_facebook_comments$0_1$amp_facebook_comments$$($element$jscomp$300$$){var $$jscomp$super$this$jscomp$34$$;$$jscomp$super$this$jscomp$34$$=AMP.BaseElement.call(this,$element$jscomp$300$$)||this;$$jscomp$super$this$jscomp$34$$.$iframe_$=null;$$jscomp$super$this$jscomp$34$$.$dataLocale_$=$element$jscomp$300$$.hasAttribute("data-locale")?$element$jscomp$300$$.getAttribute("data-locale"):$dashToUnderline$$module$src$string$$();$$jscomp$super$this$jscomp$34$$.$unlistenMessage_$=
null;return $$jscomp$super$this$jscomp$34$$}$$jscomp$inherits$$($AmpFacebookComments$$module$extensions$amp_facebook_comments$0_1$amp_facebook_comments$$,AMP.BaseElement);$JSCompiler_prototypeAlias$$=$AmpFacebookComments$$module$extensions$amp_facebook_comments$0_1$amp_facebook_comments$$.prototype;$JSCompiler_prototypeAlias$$.renderOutsideViewport=function(){return.75};
$JSCompiler_prototypeAlias$$.preconnectCallback=function($opt_onLayout$jscomp$11$$){this.preconnect.url("https://facebook.com",$opt_onLayout$jscomp$11$$);this.preconnect.preload("https://connect.facebook.net/"+this.$dataLocale_$+"/sdk.js","script");$preloadBootstrap$$module$src$3p_frame$$(this.win,this.preconnect)};$JSCompiler_prototypeAlias$$.isLayoutSupported=function($layout$jscomp$45$$){return $isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$45$$)};
$JSCompiler_prototypeAlias$$.layoutCallback=function(){var $$jscomp$this$jscomp$483$$=this,$iframe$jscomp$38$$=$getIframe$$module$src$3p_frame$$(this.win,this.element,"facebook");this.applyFillContent($iframe$jscomp$38$$);$listenFor$$module$src$iframe_helper$$($iframe$jscomp$38$$,"embed-size",function($iframe$jscomp$38$$){$$jscomp$this$jscomp$483$$.changeHeight($iframe$jscomp$38$$.height)},!0);this.$unlistenMessage_$=$listen$$module$src$event_helper$$(this.win,"message",this.$handleFacebookMessages_$.bind(this));
this.toggleLoading(!0);this.element.appendChild($iframe$jscomp$38$$);this.$iframe_$=$iframe$jscomp$38$$;return this.loadPromise($iframe$jscomp$38$$)};
$JSCompiler_prototypeAlias$$.$handleFacebookMessages_$=function($event$jscomp$87_eventData$jscomp$4$$){if(!this.$iframe_$||$event$jscomp$87_eventData$jscomp$4$$.source==this.$iframe_$.contentWindow)if($event$jscomp$87_eventData$jscomp$4$$=$event$jscomp$87_eventData$jscomp$4$$.data){var $parsedEventData$$=$isObject$$module$src$types$$($event$jscomp$87_eventData$jscomp$4$$)?$event$jscomp$87_eventData$jscomp$4$$:$tryParseJson$$module$src$json$$($event$jscomp$87_eventData$jscomp$4$$);$parsedEventData$$&&
"ready"==$event$jscomp$87_eventData$jscomp$4$$.action&&this.toggleLoading(!1)}};$JSCompiler_prototypeAlias$$.unlayoutCallback=function(){this.$iframe_$&&($removeElement$$module$src$dom$$(this.$iframe_$),this.$iframe_$=null);this.$unlistenMessage_$&&this.$unlistenMessage_$();return!0};(function($AMP$jscomp$37$$){$AMP$jscomp$37$$.registerElement("amp-facebook-comments",$AmpFacebookComments$$module$extensions$amp_facebook_comments$0_1$amp_facebook_comments$$)})(self.AMP);})});
//# sourceMappingURL=extensions-amp-facebook-comments-0.1-amp-facebook-comments.js.map

