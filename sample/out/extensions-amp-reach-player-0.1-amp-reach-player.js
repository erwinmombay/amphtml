(self.AMP=self.AMP||[]).push({n:"extensions-amp-reach-player-0.1-amp-reach-player.js", v:"erwin", f:(function(){function $AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$($$jscomp$super$this$jscomp$68_element$jscomp$398$$){$$jscomp$super$this$jscomp$68_element$jscomp$398$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$68_element$jscomp$398$$)||this;$$jscomp$super$this$jscomp$68_element$jscomp$398$$.$iframe_$=null;return $$jscomp$super$this$jscomp$68_element$jscomp$398$$}$$jscomp$inherits$$($AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$,AMP.BaseElement);
$AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$.prototype.preconnectCallback=function($opt_onLayout$jscomp$22$$){this.preconnect.url("https://player-cdn.beachfrontmedia.com",$opt_onLayout$jscomp$22$$)};$AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$.prototype.isLayoutSupported=function($layout$jscomp$72$$){return $isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$72$$)};
$AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$.prototype.layoutCallback=function(){var $embedId$$=this.element.getAttribute("data-embed-id")||"default",$iframe$jscomp$62$$=this.element.ownerDocument.createElement("iframe");$iframe$jscomp$62$$.setAttribute("frameborder","no");$iframe$jscomp$62$$.setAttribute("scrolling","no");$iframe$jscomp$62$$.setAttribute("allowfullscreen","true");$iframe$jscomp$62$$.src="https://player-cdn.beachfrontmedia.com/playerapi/v1/frame/player/?embed_id="+
encodeURIComponent($embedId$$);this.applyFillContent($iframe$jscomp$62$$);this.element.appendChild($iframe$jscomp$62$$);this.$iframe_$=$iframe$jscomp$62$$;return this.loadPromise($iframe$jscomp$62$$)};$AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$.prototype.pauseCallback=function(){this.$iframe_$&&this.$iframe_$.contentWindow&&this.$iframe_$.contentWindow.postMessage("pause","https://player-cdn.beachfrontmedia.com")};
(function($AMP$jscomp$74$$){$AMP$jscomp$74$$.registerElement("amp-reach-player",$AmpReachPlayer$$module$extensions$amp_reach_player$0_1$amp_reach_player$$)})(self.AMP);})});
//# sourceMappingURL=extensions-amp-reach-player-0.1-amp-reach-player.js.map

