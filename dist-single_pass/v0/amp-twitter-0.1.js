(self.AMP=self.AMP||[]).push({n:"amp-twitter",i:["_base_i","_base_misc"],v:"1901181729101",f:(function(AMP,_){
var $isFadingPlaceholder$$module$extensions$amp_twitter$0_1$amp_twitter$$ = function($win$jscomp$474$$) {
  return _.$isExperimentOn$$module$src$experiments$$($win$jscomp$474$$, "twitter-default-placeholder-fade");
}, $AmpTwitter$$module$extensions$amp_twitter$0_1$amp_twitter$$ = function($$jscomp$super$this$jscomp$110_element$jscomp$648$$) {
  $$jscomp$super$this$jscomp$110_element$jscomp$648$$ = window.AMP.BaseElement.call(this, $$jscomp$super$this$jscomp$110_element$jscomp$648$$) || this;
  $$jscomp$super$this$jscomp$110_element$jscomp$648$$.$iframe_$ = null;
  $$jscomp$super$this$jscomp$110_element$jscomp$648$$.$userPlaceholder_$ = null;
  return $$jscomp$super$this$jscomp$110_element$jscomp$648$$;
}, $JSCompiler_StaticMethods_updateForLoadingState_$$ = function($JSCompiler_StaticMethods_updateForLoadingState_$self$$) {
  var $height$jscomp$65$$;
  $JSCompiler_StaticMethods_updateForLoadingState_$self$$.$measureMutateElement$(function() {
    $height$jscomp$65$$ = $JSCompiler_StaticMethods_updateForLoadingState_$self$$.element.getBoundingClientRect().height;
  }, function() {
    $JSCompiler_StaticMethods_updateForLoadingState_$self$$.element.setAttribute("i-amphtml-loading", "start");
    _.$JSCompiler_StaticMethods_changeHeight$$($JSCompiler_StaticMethods_updateForLoadingState_$self$$, $height$jscomp$65$$);
  });
}, $JSCompiler_StaticMethods_updateForSuccessState_$$ = function($JSCompiler_StaticMethods_updateForSuccessState_$self$$, $height$jscomp$66$$) {
  var $placeholderHeight$$;
  $JSCompiler_StaticMethods_updateForSuccessState_$self$$.$measureMutateElement$(function() {
    !$JSCompiler_StaticMethods_updateForSuccessState_$self$$.$userPlaceholder_$ && $isFadingPlaceholder$$module$extensions$amp_twitter$0_1$amp_twitter$$($JSCompiler_StaticMethods_updateForSuccessState_$self$$.$win$) && ($placeholderHeight$$ = $JSCompiler_StaticMethods_updateForSuccessState_$self$$.element.getBoundingClientRect().height);
  }, function() {
    $JSCompiler_StaticMethods_updateForSuccessState_$self$$.$userPlaceholder_$ && $JSCompiler_StaticMethods_updateForSuccessState_$self$$.$togglePlaceholder$(!1);
    $JSCompiler_StaticMethods_updateForSuccessState_$self$$.element.setAttribute("i-amphtml-loading", "done");
    _.$JSCompiler_StaticMethods_changeHeight$$($JSCompiler_StaticMethods_updateForSuccessState_$self$$, $height$jscomp$66$$);
    $placeholderHeight$$ && _.$setStyle$$module$src$style$$($JSCompiler_StaticMethods_updateForSuccessState_$self$$.$getPlaceholder$(), "height", $placeholderHeight$$, "px");
  });
}, $JSCompiler_StaticMethods_updateForFailureState_$$ = function($JSCompiler_StaticMethods_updateForFailureState_$self$$) {
  var $fallback$jscomp$3$$ = $JSCompiler_StaticMethods_updateForFailureState_$self$$.$getFallback$(), $content$jscomp$28$$ = $fallback$jscomp$3$$ || $JSCompiler_StaticMethods_updateForFailureState_$self$$.$userPlaceholder_$;
  $JSCompiler_StaticMethods_updateForFailureState_$self$$.$mutateElement$(function() {
    $fallback$jscomp$3$$ && ($JSCompiler_StaticMethods_updateForFailureState_$self$$.$togglePlaceholder$(!1), $JSCompiler_StaticMethods_updateForFailureState_$self$$.$toggleFallback$(!0));
    $content$jscomp$28$$ && _.$JSCompiler_StaticMethods_changeHeight$$($JSCompiler_StaticMethods_updateForFailureState_$self$$, $content$jscomp$28$$.offsetHeight);
  });
};
var $_template$$module$extensions$amp_twitter$0_1$amp_twitter$$ = ['<div class=i-amphtml-twitter-placeholder placeholder><div class=i-amphtml-twitter-placeholder-logo><svg class=i-amphtml-twitter-placeholder-svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 400 400"><defs><style>.cls-1{fill:none;}.cls-2{fill:#1da1f2;}</style></defs><rect class=cls-1 width=400 height=400></rect><path class=cls-2 d=M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23></path></svg></div></div>'];
_.$$jscomp$inherits$$($AmpTwitter$$module$extensions$amp_twitter$0_1$amp_twitter$$, window.AMP.BaseElement);
_.$JSCompiler_prototypeAlias$$ = $AmpTwitter$$module$extensions$amp_twitter$0_1$amp_twitter$$.prototype;
_.$JSCompiler_prototypeAlias$$.$buildCallback$ = function() {
  this.$userPlaceholder_$ = this.$getPlaceholder$();
};
_.$JSCompiler_prototypeAlias$$.$createPlaceholderCallback$ = function() {
  if (_.$isExperimentOn$$module$src$experiments$$(this.$win$, "twitter-default-placeholder")) {
    return _.$htmlFor$$module$src$static_template$$(this.element)($_template$$module$extensions$amp_twitter$0_1$amp_twitter$$);
  }
};
_.$JSCompiler_prototypeAlias$$.$preconnectCallback$ = function($opt_onLayout$jscomp$28$$) {
  _.$preloadBootstrap$$module$src$3p_frame$$(this.$win$, this.$preconnect$);
  this.$preconnect$.$preload$("https://platform.twitter.com/widgets.js", "script");
  this.$preconnect$.url("https://syndication.twitter.com", $opt_onLayout$jscomp$28$$);
  this.$preconnect$.url("https://pbs.twimg.com", $opt_onLayout$jscomp$28$$);
  this.$preconnect$.url("https://cdn.syndication.twimg.com", $opt_onLayout$jscomp$28$$);
};
_.$JSCompiler_prototypeAlias$$.$isLayoutSupported$ = function($layout$jscomp$106$$) {
  return _.$isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$106$$);
};
_.$JSCompiler_prototypeAlias$$.$firstLayoutCompleted$ = function() {
};
_.$JSCompiler_prototypeAlias$$.$layoutCallback$ = function() {
  var $$jscomp$this$jscomp$1268$$ = this, $iframe$jscomp$94$$ = _.$getIframe$$module$src$3p_frame$$(this.$win$, this.element, "twitter", null, {$allowFullscreen$:!0});
  _.$JSCompiler_StaticMethods_applyFillContent$$($iframe$jscomp$94$$);
  $iframe$jscomp$94$$.classList.add("i-amphtml-twitter-iframe");
  _.$isExperimentOn$$module$src$experiments$$(this.$win$, "twitter-default-placeholder-pulse") && this.element.classList.add("i-amphtml-twitter-pulse");
  $isFadingPlaceholder$$module$extensions$amp_twitter$0_1$amp_twitter$$(this.$win$) && this.element.classList.add("i-amphtml-twitter-fade");
  _.$isExperimentOn$$module$src$experiments$$(this.$win$, "twitter-default-placeholder-burst") && this.element.classList.add("i-amphtml-twitter-burst");
  $JSCompiler_StaticMethods_updateForLoadingState_$$(this);
  _.$listenFor$$module$src$iframe_helper$$($iframe$jscomp$94$$, "embed-size", function($iframe$jscomp$94$$) {
    $JSCompiler_StaticMethods_updateForSuccessState_$$($$jscomp$this$jscomp$1268$$, $iframe$jscomp$94$$.height);
  }, !0);
  _.$listenFor$$module$src$iframe_helper$$($iframe$jscomp$94$$, "no-content", function() {
    $JSCompiler_StaticMethods_updateForFailureState_$$($$jscomp$this$jscomp$1268$$);
  }, !0);
  this.element.appendChild($iframe$jscomp$94$$);
  this.$iframe_$ = $iframe$jscomp$94$$;
  return this.$loadPromise$($iframe$jscomp$94$$);
};
_.$JSCompiler_prototypeAlias$$.$unlayoutOnPause$ = function() {
  return !0;
};
_.$JSCompiler_prototypeAlias$$.$unlayoutCallback$ = function() {
  this.$iframe_$ && (_.$removeElement$$module$src$dom$$(this.$iframe_$), this.$iframe_$ = null);
  return !0;
};
var $AMP$jscomp$inline_5103$$ = window.self.AMP, $styles$jscomp$inline_5104$$ = _.$isExperimentOn$$module$src$experiments$$($AMP$jscomp$inline_5103$$.$win$, "twitter-default-placeholder") ? "amp-twitter{-webkit-transition-property:height;transition-property:height;-webkit-transition-duration:250ms;transition-duration:250ms}.i-amphtml-twitter-placeholder[placeholder]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:500px;min-width:220px;margin:0 auto;border-radius:5px;border:1px solid #e1e8ed;overflow:hidden;pointer-events:none}.i-amphtml-twitter-placeholder-logo{width:100%;height:100%;max-width:200px;max-height:200px}.i-amphtml-twitter-pulse .i-amphtml-twitter-placeholder-logo{animation:amp-twitter-pulse 750ms ease-in-out infinite alternate-reverse}.i-amphtml-twitter-placeholder-svg{width:100%;height:100%}.i-amphtml-twitter-pulse:not([i-amphtml-loading]) .i-amphtml-twitter-placeholder-svg{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:100ms;transition-duration:100ms;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in;-webkit-transform:scale(0.4);transform:scale(0.4);opacity:0.6}.i-amphtml-twitter-fade .i-amphtml-twitter-placeholder-svg{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:100ms;transition-duration:100ms}.i-amphtml-twitter-iframe{opacity:0}.i-amphtml-twitter-fade .i-amphtml-twitter-iframe,.i-amphtml-twitter-pulse .i-amphtml-twitter-iframe{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:200ms;transition-duration:200ms;-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.i-amphtml-twitter-pulse[i-amphtml-loading=start] .i-amphtml-twitter-placeholder-svg{-webkit-transition-duration:250ms;transition-duration:250ms;-webkit-transform:scale(1);transform:scale(1);opacity:1}amp-twitter[i-amphtml-loading=done] .i-amphtml-twitter-placeholder{border:none}amp-twitter[i-amphtml-loading=done] .i-amphtml-twitter-placeholder-svg{opacity:0}.i-amphtml-twitter-burst[i-amphtml-loading=done] .i-amphtml-twitter-placeholder-svg{-webkit-transform:scale(12);transform:scale(12)}.i-amphtml-twitter-burst[i-amphtml-loading=done] .i-amphtml-twitter-placeholder-svg,.i-amphtml-twitter-fade[i-amphtml-loading=done] .i-amphtml-twitter-placeholder-svg{-webkit-transition-duration:250ms;transition-duration:250ms;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}amp-twitter[i-amphtml-loading=done] .i-amphtml-twitter-iframe{opacity:1}@-webkit-keyframes amp-twitter-pulse{0%{-webkit-transform:scale(0.85);transform:scale(0.85);opacity:0.9}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes amp-twitter-pulse{0%{-webkit-transform:scale(0.85);transform:scale(0.85);opacity:0.9}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\n/*# sourceURL=/extensions/amp-twitter/0.1/amp-twitter.css*/" : 
void 0;
$AMP$jscomp$inline_5103$$.registerElement("amp-twitter", $AmpTwitter$$module$extensions$amp_twitter$0_1$amp_twitter$$, $styles$jscomp$inline_5104$$);

})});
