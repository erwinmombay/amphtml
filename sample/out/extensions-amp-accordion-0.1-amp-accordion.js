(self.AMP=self.AMP||[]).push({n:"extensions-amp-accordion-0.1-amp-accordion.js", v:"erwin", f:(function(){function $px$$module$src$transition$$($transition$jscomp$5$$){return function($time$jscomp$13$$){return $transition$jscomp$5$$($time$jscomp$13$$)+"px"}}var $EXPAND_CURVE_$$module$extensions$amp_accordion$0_1$amp_accordion$$=$bezierCurve$$module$src$curve$$(.47,0,.745,.715),$COLLAPSE_CURVE_$$module$extensions$amp_accordion$0_1$amp_accordion$$=$bezierCurve$$module$src$curve$$(.39,.575,.565,1);
function $AmpAccordion$$module$extensions$amp_accordion$0_1$amp_accordion$$($$jscomp$super$this$jscomp$5_element$jscomp$220$$){$$jscomp$super$this$jscomp$5_element$jscomp$220$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$5_element$jscomp$220$$)||this;$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$headers_$=[];$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$sessionId_$=null;$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$currentState_$=null;$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$sessionOptOut_$=
!1;$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$sections_$=null;$$jscomp$super$this$jscomp$5_element$jscomp$220$$.$action_$=null;return $$jscomp$super$this$jscomp$5_element$jscomp$220$$}$$jscomp$inherits$$($AmpAccordion$$module$extensions$amp_accordion$0_1$amp_accordion$$,AMP.BaseElement);$JSCompiler_prototypeAlias$$=$AmpAccordion$$module$extensions$amp_accordion$0_1$amp_accordion$$.prototype;$JSCompiler_prototypeAlias$$.isLayoutSupported=function($layout$jscomp$26$$){return"container"==$layout$jscomp$26$$};
$JSCompiler_prototypeAlias$$.buildCallback=function(){var $$jscomp$this$jscomp$261$$=this;this.$action_$=$Services$$module$src$services$actionServiceForDoc$$(this.element);this.$sessionOptOut_$=this.element.hasAttribute("disable-session-states");this.$sessionId_$=$JSCompiler_StaticMethods_getSessionStorageKey_$$(this);this.$currentState_$=$JSCompiler_StaticMethods_getSessionState_$$(this);this.$sections_$=this.getRealChildren();this.$sections_$.forEach(function($section$jscomp$3$$,$header$jscomp$3_index$jscomp$72$$){$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$("section"==
$section$jscomp$3$$.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",$$jscomp$this$jscomp$261$$.element);var $sectionComponents$$=$section$jscomp$3$$.children;$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(2==$sectionComponents$$.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/master/extensions/amp-accordion/amp-accordion.md. Found in: %s",
$$jscomp$this$jscomp$261$$.element);var $content$jscomp$6$$=$sectionComponents$$[1];$content$jscomp$6$$.classList.add("i-amphtml-accordion-content");var $contentId$$=$content$jscomp$6$$.getAttribute("id");$contentId$$||($contentId$$=$$jscomp$this$jscomp$261$$.element.id+"_AMP_content_"+$header$jscomp$3_index$jscomp$72$$,$content$jscomp$6$$.setAttribute("id",$contentId$$));$$jscomp$this$jscomp$261$$.registerAction("toggle",function($section$jscomp$3$$){if($section$jscomp$3$$.args){$section$jscomp$3$$=
$section$jscomp$3$$.args.section;var $header$jscomp$3_index$jscomp$72$$=$$jscomp$this$jscomp$261$$.getAmpDoc().getElementById($section$jscomp$3$$);$user$$module$src$log$$().assertElement($header$jscomp$3_index$jscomp$72$$,"No element found with id:"+$section$jscomp$3$$);$$jscomp$this$jscomp$261$$.$toggle_$($header$jscomp$3_index$jscomp$72$$)}else for($section$jscomp$3$$=0;$section$jscomp$3$$<$$jscomp$this$jscomp$261$$.$sections_$.length;$section$jscomp$3$$++)$$jscomp$this$jscomp$261$$.$toggle_$($$jscomp$this$jscomp$261$$.$sections_$[$section$jscomp$3$$])});
$$jscomp$this$jscomp$261$$.registerAction("expand",function($section$jscomp$3$$){if($section$jscomp$3$$.args){$section$jscomp$3$$=$section$jscomp$3$$.args.section;var $header$jscomp$3_index$jscomp$72$$=$$jscomp$this$jscomp$261$$.getAmpDoc().getElementById($section$jscomp$3$$);$user$$module$src$log$$().assertElement($header$jscomp$3_index$jscomp$72$$,"No element found with id:"+$section$jscomp$3$$);$$jscomp$this$jscomp$261$$.$expand_$($header$jscomp$3_index$jscomp$72$$)}else for($section$jscomp$3$$=
0;$section$jscomp$3$$<$$jscomp$this$jscomp$261$$.$sections_$.length;$section$jscomp$3$$++)$$jscomp$this$jscomp$261$$.$expand_$($$jscomp$this$jscomp$261$$.$sections_$[$section$jscomp$3$$])});$$jscomp$this$jscomp$261$$.registerAction("collapse",function($section$jscomp$3$$){if($section$jscomp$3$$.args){$section$jscomp$3$$=$section$jscomp$3$$.args.section;var $header$jscomp$3_index$jscomp$72$$=$$jscomp$this$jscomp$261$$.getAmpDoc().getElementById($section$jscomp$3$$);$user$$module$src$log$$().assertElement($header$jscomp$3_index$jscomp$72$$,
"No element found with id:"+$section$jscomp$3$$);$$jscomp$this$jscomp$261$$.$toggle_$($header$jscomp$3_index$jscomp$72$$,!1)}else for($section$jscomp$3$$=0;$section$jscomp$3$$<$$jscomp$this$jscomp$261$$.$sections_$.length;$section$jscomp$3$$++)$$jscomp$this$jscomp$261$$.$toggle_$($$jscomp$this$jscomp$261$$.$sections_$[$section$jscomp$3$$],!1)});$$jscomp$this$jscomp$261$$.$currentState_$[$contentId$$]?$section$jscomp$3$$.setAttribute("expanded",""):!1===$$jscomp$this$jscomp$261$$.$currentState_$[$contentId$$]&&
$section$jscomp$3$$.removeAttribute("expanded");$$jscomp$this$jscomp$261$$.mutateElement(function(){});$header$jscomp$3_index$jscomp$72$$=$sectionComponents$$[0];$header$jscomp$3_index$jscomp$72$$.classList.add("i-amphtml-accordion-header");$header$jscomp$3_index$jscomp$72$$.setAttribute("role","button");$header$jscomp$3_index$jscomp$72$$.setAttribute("aria-controls",$contentId$$);$header$jscomp$3_index$jscomp$72$$.setAttribute("aria-expanded",$section$jscomp$3$$.hasAttribute("expanded").toString());
$header$jscomp$3_index$jscomp$72$$.hasAttribute("tabindex")||$header$jscomp$3_index$jscomp$72$$.setAttribute("tabindex",0);$$jscomp$this$jscomp$261$$.$headers_$.push($header$jscomp$3_index$jscomp$72$$);$header$jscomp$3_index$jscomp$72$$.addEventListener("click",$$jscomp$this$jscomp$261$$.$clickHandler_$.bind($$jscomp$this$jscomp$261$$));$header$jscomp$3_index$jscomp$72$$.addEventListener("keydown",$$jscomp$this$jscomp$261$$.$keyDownHandler_$.bind($$jscomp$this$jscomp$261$$))})};
function $JSCompiler_StaticMethods_getSessionStorageKey_$$($JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$){var $id_$$=$JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$.element.id||$JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$.element.getResourceId();$JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$=$removeFragment$$module$src$url$$($JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$.win.location.href);
return"amp-"+$id_$$+"-"+$JSCompiler_StaticMethods_getSessionStorageKey_$self_url$jscomp$116$$}
function $JSCompiler_StaticMethods_getSessionState_$$($JSCompiler_StaticMethods_getSessionState_$self$$){if($JSCompiler_StaticMethods_getSessionState_$self$$.$sessionOptOut_$)return{};try{var $sessionStr$$=$JSCompiler_StaticMethods_getSessionState_$self$$.win.sessionStorage.getItem($JSCompiler_StaticMethods_getSessionState_$self$$.$sessionId_$);return $sessionStr$$?$parseJson$$module$src$json$$($sessionStr$$):{}}catch($e$jscomp$121$$){return{}}}
function $JSCompiler_StaticMethods_setSessionState_$$($JSCompiler_StaticMethods_setSessionState_$self$$){if(!$JSCompiler_StaticMethods_setSessionState_$self$$.$sessionOptOut_$){var $sessionStr$jscomp$1$$=JSON.stringify($JSCompiler_StaticMethods_setSessionState_$self$$.$currentState_$);try{$JSCompiler_StaticMethods_setSessionState_$self$$.win.sessionStorage.setItem($JSCompiler_StaticMethods_setSessionState_$self$$.$sessionId_$,$sessionStr$jscomp$1$$)}catch($e$jscomp$122$$){}}}
$JSCompiler_prototypeAlias$$.$toggle_$=function($section$jscomp$4$$,$opt_forceExpand$$){var $$jscomp$this$jscomp$262$$=this,$contentId$jscomp$1_sectionComponents$jscomp$1$$=$section$jscomp$4$$.children,$header$jscomp$4$$=$contentId$jscomp$1_sectionComponents$jscomp$1$$[0],$contentId$jscomp$1_sectionComponents$jscomp$1$$=$contentId$jscomp$1_sectionComponents$jscomp$1$$[1].getAttribute("id"),$isSectionClosedAfterClick$$=$section$jscomp$4$$.hasAttribute("expanded"),$toExpand$$=void 0==$opt_forceExpand$$?
!$section$jscomp$4$$.hasAttribute("expanded"):$opt_forceExpand$$;this.element.hasAttribute("animate")?$toExpand$$?($header$jscomp$4$$.setAttribute("aria-expanded","true"),$JSCompiler_StaticMethods_animateExpand_$$(this,$section$jscomp$4$$),this.element.hasAttribute("expand-single-section")&&this.$sections_$.forEach(function($opt_forceExpand$$){$opt_forceExpand$$!=$section$jscomp$4$$&&($JSCompiler_StaticMethods_animateCollapse_$$($$jscomp$this$jscomp$262$$,$opt_forceExpand$$),$opt_forceExpand$$.children[0].setAttribute("aria-expanded",
"false"))})):($header$jscomp$4$$.setAttribute("aria-expanded","false"),$JSCompiler_StaticMethods_animateCollapse_$$(this,$section$jscomp$4$$)):this.mutateElement(function(){$toExpand$$?($section$jscomp$4$$.setAttribute("expanded",""),$header$jscomp$4$$.setAttribute("aria-expanded","true"),$$jscomp$this$jscomp$262$$.element.hasAttribute("expand-single-section")&&$$jscomp$this$jscomp$262$$.$sections_$.forEach(function($opt_forceExpand$$){$opt_forceExpand$$!=$section$jscomp$4$$&&($opt_forceExpand$$.removeAttribute("expanded"),
$opt_forceExpand$$.children[0].setAttribute("aria-expanded","false"))})):($section$jscomp$4$$.removeAttribute("expanded"),$header$jscomp$4$$.setAttribute("aria-expanded","false"))},$section$jscomp$4$$);this.$currentState_$[$contentId$jscomp$1_sectionComponents$jscomp$1$$]=!$isSectionClosedAfterClick$$;$JSCompiler_StaticMethods_setSessionState_$$(this)};
function $JSCompiler_StaticMethods_animateExpand_$$($JSCompiler_StaticMethods_animateExpand_$self$$,$section$jscomp$5$$){var $height$jscomp$25$$,$duration$jscomp$12$$,$sectionChild$$=$section$jscomp$5$$.children[1];$JSCompiler_StaticMethods_animateExpand_$self$$.mutateElement(function(){$setStyles$$module$src$style$$($sectionChild$$,{opacity:0,position:"fixed"});$section$jscomp$5$$.setAttribute("expanded","")}).then(function(){return $JSCompiler_StaticMethods_animateExpand_$self$$.measureMutateElement(function(){$height$jscomp$25$$=
$sectionChild$$.offsetHeight;var $section$jscomp$5$$=$JSCompiler_StaticMethods_animateExpand_$self$$.getViewport().getHeight();$duration$jscomp$12$$=$JSCompiler_StaticMethods_animateExpand_$self$$.$getTransitionDuration_$(Math.abs($height$jscomp$25$$),$section$jscomp$5$$)},function(){$setStyles$$module$src$style$$($sectionChild$$,{opacity:"",height:0,position:""})})}).then(function(){return $JSCompiler_StaticMethods_AnimationPlayer$$module$src$animation_prototype$thenAlways$$($Animation$$module$src$animation$animate$$($JSCompiler_StaticMethods_animateExpand_$self$$.element,
$setStyles$$module$src$transition$$($sectionChild$$,{height:$px$$module$src$transition$$($numeric$$module$src$transition$$(0,$height$jscomp$25$$)),opacity:$numeric$$module$src$transition$$(0,1)}),$duration$jscomp$12$$,$EXPAND_CURVE_$$module$extensions$amp_accordion$0_1$amp_accordion$$),function(){$JSCompiler_StaticMethods_animateExpand_$self$$.mutateElement(function(){$setStyles$$module$src$style$$($sectionChild$$,{height:"",opacity:""})})})})}
function $JSCompiler_StaticMethods_animateCollapse_$$($JSCompiler_StaticMethods_animateCollapse_$self$$,$section$jscomp$6$$){var $height$jscomp$26$$,$duration$jscomp$13$$,$sectionChild$jscomp$1$$=$section$jscomp$6$$.children[1];$JSCompiler_StaticMethods_animateCollapse_$self$$.measureElement(function(){$height$jscomp$26$$=$section$jscomp$6$$.offsetHeight;var $sectionChild$jscomp$1$$=$JSCompiler_StaticMethods_animateCollapse_$self$$.getViewport().getSize().height;$duration$jscomp$13$$=$JSCompiler_StaticMethods_animateCollapse_$self$$.$getTransitionDuration_$(Math.abs($height$jscomp$26$$),
$sectionChild$jscomp$1$$)}).then(function(){return $JSCompiler_StaticMethods_AnimationPlayer$$module$src$animation_prototype$thenAlways$$($Animation$$module$src$animation$animate$$($sectionChild$jscomp$1$$,$setStyles$$module$src$transition$$($sectionChild$jscomp$1$$,{height:$px$$module$src$transition$$($numeric$$module$src$transition$$($height$jscomp$26$$,0))}),$duration$jscomp$13$$,$COLLAPSE_CURVE_$$module$extensions$amp_accordion$0_1$amp_accordion$$),function(){return $JSCompiler_StaticMethods_animateCollapse_$self$$.mutateElement(function(){$section$jscomp$6$$.removeAttribute("expanded");
$setStyles$$module$src$style$$($sectionChild$jscomp$1$$,{height:""})})})})}$JSCompiler_prototypeAlias$$.$getTransitionDuration_$=function($dy$jscomp$9$$,$maxY$$,$opt_minDur$$,$opt_maxDur$$){$opt_minDur$$=void 0===$opt_minDur$$?200:$opt_minDur$$;$opt_maxDur$$=void 0===$opt_maxDur$$?500:$opt_maxDur$$;var $distanceAdjustedDuration$$=Math.abs($dy$jscomp$9$$)/$maxY$$*$opt_maxDur$$;return $clamp$$module$src$utils$math$$($distanceAdjustedDuration$$,$opt_minDur$$,$opt_maxDur$$)};
$JSCompiler_prototypeAlias$$.$expand_$=function($section$jscomp$7$$){this.$toggle_$($section$jscomp$7$$,!0)};$JSCompiler_prototypeAlias$$.$clickHandler_$=function($event$jscomp$49$$){this.$shouldHandleClick_$($event$jscomp$49$$)&&($event$jscomp$49$$.preventDefault(),this.$toggle_$($event$jscomp$49$$.currentTarget.parentElement))};
$JSCompiler_prototypeAlias$$.$shouldHandleClick_$=function($event$jscomp$50_header$jscomp$6$$){var $target$jscomp$106$$=$event$jscomp$50_header$jscomp$6$$.target;$event$jscomp$50_header$jscomp$6$$=$event$jscomp$50_header$jscomp$6$$.currentTarget;var $hasAnchor$$=!!$closest$$module$src$dom$$($target$jscomp$106$$,function($event$jscomp$50_header$jscomp$6$$){return"A"==$event$jscomp$50_header$jscomp$6$$.tagName},$event$jscomp$50_header$jscomp$6$$),$hasTapAction$$=this.$action_$.hasAction($target$jscomp$106$$,
"tap",$event$jscomp$50_header$jscomp$6$$);return!$hasAnchor$$&&!$hasTapAction$$};$JSCompiler_prototypeAlias$$.$keyDownHandler_$=function($event$jscomp$51$$){if(!$event$jscomp$51$$.defaultPrevented)switch($event$jscomp$51$$.keyCode){case 38:case 40:this.$navigationKeyDownHandler_$($event$jscomp$51$$);break;case 13:case 32:$event$jscomp$51$$.target==$event$jscomp$51$$.currentTarget&&($event$jscomp$51$$.preventDefault(),this.$toggle_$($event$jscomp$51$$.currentTarget.parentElement))}};
$JSCompiler_prototypeAlias$$.$navigationKeyDownHandler_$=function($event$jscomp$52$$){var $index$jscomp$73$$=this.$headers_$.indexOf($event$jscomp$52$$.currentTarget);if(-1!==$index$jscomp$73$$){$event$jscomp$52$$.preventDefault();var $diff$$=38==$event$jscomp$52$$.keyCode?-1:1,$newFocusIndex$$=($index$jscomp$73$$+$diff$$)%this.$headers_$.length;0>$newFocusIndex$$&&($newFocusIndex$$+=this.$headers_$.length);var $newFocusHeader$$=this.$headers_$[$newFocusIndex$$];$tryFocus$$module$src$dom$$($newFocusHeader$$)}};
(function($AMP$jscomp$6$$){$AMP$jscomp$6$$.registerElement("amp-accordion",$AmpAccordion$$module$extensions$amp_accordion$0_1$amp_accordion$$)})(self.AMP);})});
//# sourceMappingURL=extensions-amp-accordion-0.1-amp-accordion.js.map

