(self.AMP=self.AMP||[]).push({n:"extensions-amp-instagram-0.1-amp-instagram.js", v:"erwin", f:(function(){function $AmpInstagram$$module$extensions$amp_instagram$0_1$amp_instagram$$($$jscomp$super$this$jscomp$52_element$jscomp$351$$){$$jscomp$super$this$jscomp$52_element$jscomp$351$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$52_element$jscomp$351$$)||this;$$jscomp$super$this$jscomp$52_element$jscomp$351$$.$iframe_$=null;$$jscomp$super$this$jscomp$52_element$jscomp$351$$.$shortcode_$="";$$jscomp$super$this$jscomp$52_element$jscomp$351$$.$unlistenMessage_$=null;$$jscomp$super$this$jscomp$52_element$jscomp$351$$.$captioned_$=
"";$$jscomp$super$this$jscomp$52_element$jscomp$351$$.$iframePromise_$=null;return $$jscomp$super$this$jscomp$52_element$jscomp$351$$}$$jscomp$inherits$$($AmpInstagram$$module$extensions$amp_instagram$0_1$amp_instagram$$,AMP.BaseElement);$JSCompiler_prototypeAlias$$=$AmpInstagram$$module$extensions$amp_instagram$0_1$amp_instagram$$.prototype;
$JSCompiler_prototypeAlias$$.preconnectCallback=function($opt_onLayout$jscomp$17$$){this.preconnect.url("https://www.instagram.com",$opt_onLayout$jscomp$17$$);this.preconnect.url("https://instagram.fsnc1-1.fna.fbcdn.net",$opt_onLayout$jscomp$17$$)};$JSCompiler_prototypeAlias$$.renderOutsideViewport=function(){return!1};
$JSCompiler_prototypeAlias$$.buildCallback=function(){this.$shortcode_$=$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(this.element.getAttribute("data-shortcode")||this.element.getAttribute("shortcode"),"The data-shortcode attribute is required for <amp-instagram> %s",this.element);this.$captioned_$=this.element.hasAttribute("data-captioned")?"captioned/":""};
$JSCompiler_prototypeAlias$$.createPlaceholderCallback=function(){var $placeholder$jscomp$9$$=this.win.document.createElement("div");$placeholder$jscomp$9$$.setAttribute("placeholder","");var $image$jscomp$9$$=this.win.document.createElement("amp-img");$image$jscomp$9$$.setAttribute("noprerender","");$image$jscomp$9$$.setAttribute("src","https://www.instagram.com/p/"+encodeURIComponent(this.$shortcode_$)+"/media/?size=l");$image$jscomp$9$$.setAttribute("layout","fill");$image$jscomp$9$$.setAttribute("referrerpolicy",
"origin");this.propagateAttributes(["alt"],$image$jscomp$9$$);this.element.hasAttribute("data-default-framing")&&this.element.classList.add("amp-instagram-default-framing");$setStyles$$module$src$style$$($image$jscomp$9$$,{top:"0 px",bottom:"0 px",left:"0 px",right:"0 px"});$placeholder$jscomp$9$$.appendChild($image$jscomp$9$$);return $placeholder$jscomp$9$$};$JSCompiler_prototypeAlias$$.isLayoutSupported=function($layout$jscomp$59$$){return $isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$59$$)};
$JSCompiler_prototypeAlias$$.layoutCallback=function(){var $$jscomp$this$jscomp$558$$=this,$iframe$jscomp$51$$=this.element.ownerDocument.createElement("iframe");this.$iframe_$=$iframe$jscomp$51$$;this.$unlistenMessage_$=$listen$$module$src$event_helper$$(this.win,"message",this.$handleInstagramMessages_$.bind(this));$iframe$jscomp$51$$.setAttribute("scrolling","no");$iframe$jscomp$51$$.setAttribute("frameborder","0");$iframe$jscomp$51$$.setAttribute("allowtransparency","true");$iframe$jscomp$51$$.setAttribute("title",
"Instagram: "+this.element.getAttribute("alt"));$iframe$jscomp$51$$.src="https://www.instagram.com/p/"+encodeURIComponent(this.$shortcode_$)+"/embed/"+this.$captioned_$+"?cr=1&v=7";this.applyFillContent($iframe$jscomp$51$$);this.element.appendChild($iframe$jscomp$51$$);$setStyles$$module$src$style$$($iframe$jscomp$51$$,{opacity:0});return this.$iframePromise_$=this.loadPromise($iframe$jscomp$51$$).then(function(){$$jscomp$this$jscomp$558$$.getVsync().mutate(function(){$setStyles$$module$src$style$$($iframe$jscomp$51$$,
{opacity:1})})})};
$JSCompiler_prototypeAlias$$.$handleInstagramMessages_$=function($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$){var $$jscomp$this$jscomp$559$$=this;if("https://www.instagram.com"==$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.origin&&$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.source==this.$iframe_$.contentWindow&&($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$=$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.data)&&($isObject$$module$src$types$$($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$)||$startsWith$$module$src$string$$($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$,
"{"))&&($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$=$isObject$$module$src$types$$($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$)?$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$:$tryParseJson$$module$src$json$$($data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$),void 0!==$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$&&"MEASURE"==$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.type&&$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.details)){var $height$jscomp$49$$=
$data$jscomp$112_event$jscomp$109_eventData$jscomp$11$$.details.height;this.getVsync().measure(function(){$$jscomp$this$jscomp$559$$.$iframe_$&&$$jscomp$this$jscomp$559$$.$iframe_$.offsetHeight!==$height$jscomp$49$$&&$$jscomp$this$jscomp$559$$.changeHeight($height$jscomp$49$$)})}};$JSCompiler_prototypeAlias$$.unlayoutOnPause=function(){return!0};
$JSCompiler_prototypeAlias$$.unlayoutCallback=function(){this.$iframe_$&&($removeElement$$module$src$dom$$(this.$iframe_$),this.$iframePromise_$=this.$iframe_$=null);this.$unlistenMessage_$&&this.$unlistenMessage_$();return!0};(function($AMP$jscomp$57$$){$AMP$jscomp$57$$.registerElement("amp-instagram",$AmpInstagram$$module$extensions$amp_instagram$0_1$amp_instagram$$,"amp-instagram.amp-instagram-default-framing{border:1px solid #dbdbdb!important}\n/*# sourceURL=/extensions/amp-instagram/0.1/amp-instagram.css*/")})(self.AMP);})});
//# sourceMappingURL=extensions-amp-instagram-0.1-amp-instagram.js.map

