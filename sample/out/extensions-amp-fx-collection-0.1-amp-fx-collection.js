(self.AMP=self.AMP||[]).push({n:"extensions-amp-fx-collection-0.1-amp-fx-collection.js", v:"erwin", f:(function(){var $Presets$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets$$={parallax:{isFxTypeSupported:function(){return!0},userAsserts:function($element$jscomp$318$$){var $factorValue$$=$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$($element$jscomp$318$$.getAttribute("data-parallax-factor"),"data-parallax-factor=<number> attribute must be provided for: %s",$element$jscomp$318$$);$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<parseFloat($factorValue$$),
"data-parallax-factor must be a number and greater than 0 for: %s",$element$jscomp$318$$)},update:function($entry$jscomp$28_top$jscomp$9$$){var $fxElement$$=this;if(($entry$jscomp$28_top$jscomp$9$$=$entry$jscomp$28_top$jscomp$9$$.positionRect?$entry$jscomp$28_top$jscomp$9$$.positionRect.top:null)&&!($entry$jscomp$28_top$jscomp$9$$>$fxElement$$.adjustedViewportHeight)){var $adjustedFactor$$=-(parseFloat($fxElement$$.getFactor())-1);$fxElement$$.setOffset(($fxElement$$.adjustedViewportHeight-$entry$jscomp$28_top$jscomp$9$$)*
$adjustedFactor$$);$fxElement$$.isMutateScheduled()||($fxElement$$.setIsMutateScheduled(!0),$fxElement$$.getResources().mutateElement($fxElement$$.getElement(),function(){$fxElement$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$$.getElement(),{transform:"translateY("+$fxElement$$.getOffset().toFixed(0)+"px)"})}))}}},"fly-in-bottom":{isFxTypeSupported:function($win$jscomp$297$$){return $isExperimentOn$$module$src$experiments$$($win$jscomp$297$$,"amp-fx-fly-in")},userAsserts:function($element$jscomp$319$$){var $marginStart$$=
parseFloat($element$jscomp$319$$.getAttribute("data-margin-start"));$marginStart$$&&$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$$&&100>=$marginStart$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$319$$)},update:function($entry$jscomp$29_top$jscomp$10$$){var $fxElement$jscomp$1$$=this;!($entry$jscomp$29_top$jscomp$10$$=$entry$jscomp$29_top$jscomp$10$$.positionRect?$entry$jscomp$29_top$jscomp$10$$.positionRect.top:
null)||$entry$jscomp$29_top$jscomp$10$$-$fxElement$jscomp$1$$.adjustedViewportHeight*$fxElement$jscomp$1$$.getFlyInDistance()/100>(1-$fxElement$jscomp$1$$.getMarginStart())*$fxElement$jscomp$1$$.adjustedViewportHeight||$fxElement$jscomp$1$$.isMutateScheduled()||($fxElement$jscomp$1$$.initialTrigger||$fxElement$jscomp$1$$.getResources().mutateElement($fxElement$jscomp$1$$.getElement(),function(){var $entry$jscomp$29_top$jscomp$10$$=$computedStyle$$module$src$style$$($fxElement$jscomp$1$$.getAmpDoc().win,
$fxElement$jscomp$1$$.getElement());$setStyles$$module$src$style$$($fxElement$jscomp$1$$.getElement(),{top:"calc("+$entry$jscomp$29_top$jscomp$10$$.top+" + "+$fxElement$jscomp$1$$.getFlyInDistance()+"vh)",visibility:"visible"});$fxElement$jscomp$1$$.initialTrigger=!0}),$fxElement$jscomp$1$$.setIsMutateScheduled(!0),$fxElement$jscomp$1$$.getResources().mutateElement($fxElement$jscomp$1$$.getElement(),function(){$fxElement$jscomp$1$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$1$$.getElement(),
{"transition-duration":$fxElement$jscomp$1$$.getDuration(),"transition-timing-function":$fxElement$jscomp$1$$.getEasing(),transform:"translateY(-"+$fxElement$jscomp$1$$.getFlyInDistance()+"vh)"})}))}},"fly-in-left":{isFxTypeSupported:function($win$jscomp$298$$){return $isExperimentOn$$module$src$experiments$$($win$jscomp$298$$,"amp-fx-fly-in")},userAsserts:function($element$jscomp$320$$){var $marginStart$jscomp$1$$=parseFloat($element$jscomp$320$$.getAttribute("data-margin-start"));$marginStart$jscomp$1$$&&
$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$jscomp$1$$&&100>=$marginStart$jscomp$1$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$320$$)},update:function($entry$jscomp$30_top$jscomp$11$$){var $fxElement$jscomp$2$$=this;!($entry$jscomp$30_top$jscomp$11$$=$entry$jscomp$30_top$jscomp$11$$.positionRect?$entry$jscomp$30_top$jscomp$11$$.positionRect.top:null)||$entry$jscomp$30_top$jscomp$11$$>(1-$fxElement$jscomp$2$$.getMarginStart())*
$fxElement$jscomp$2$$.adjustedViewportHeight||$fxElement$jscomp$2$$.isMutateScheduled()||($fxElement$jscomp$2$$.initialTrigger||$fxElement$jscomp$2$$.getResources().mutateElement($fxElement$jscomp$2$$.getElement(),function(){var $entry$jscomp$30_top$jscomp$11$$=$computedStyle$$module$src$style$$($fxElement$jscomp$2$$.getAmpDoc().win,$fxElement$jscomp$2$$.getElement());$setStyles$$module$src$style$$($fxElement$jscomp$2$$.getElement(),{left:"calc("+$entry$jscomp$30_top$jscomp$11$$.left+" - "+$fxElement$jscomp$2$$.getFlyInDistance()+
"vw)",visibility:"visible"});$fxElement$jscomp$2$$.initialTrigger=!0}),$fxElement$jscomp$2$$.setIsMutateScheduled(!0),$fxElement$jscomp$2$$.getResources().mutateElement($fxElement$jscomp$2$$.getElement(),function(){$fxElement$jscomp$2$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$2$$.getElement(),{"transition-duration":$fxElement$jscomp$2$$.getDuration(),"transition-timing-function":$fxElement$jscomp$2$$.getEasing(),transform:"translateX("+$fxElement$jscomp$2$$.getFlyInDistance()+
"vw)"})}))}},"fly-in-right":{isFxTypeSupported:function($win$jscomp$299$$){return $isExperimentOn$$module$src$experiments$$($win$jscomp$299$$,"amp-fx-fly-in")},userAsserts:function($element$jscomp$321$$){var $marginStart$jscomp$2$$=parseFloat($element$jscomp$321$$.getAttribute("data-margin-start"));$marginStart$jscomp$2$$&&$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$jscomp$2$$&&100>=$marginStart$jscomp$2$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",
$element$jscomp$321$$)},update:function($entry$jscomp$31_top$jscomp$12$$){var $fxElement$jscomp$3$$=this;!($entry$jscomp$31_top$jscomp$12$$=$entry$jscomp$31_top$jscomp$12$$.positionRect?$entry$jscomp$31_top$jscomp$12$$.positionRect.top:null)||$entry$jscomp$31_top$jscomp$12$$>(1-$fxElement$jscomp$3$$.getMarginStart())*$fxElement$jscomp$3$$.adjustedViewportHeight||$fxElement$jscomp$3$$.isMutateScheduled()||($fxElement$jscomp$3$$.initialTrigger||$fxElement$jscomp$3$$.getResources().mutateElement($fxElement$jscomp$3$$.getElement(),
function(){var $entry$jscomp$31_top$jscomp$12$$=$computedStyle$$module$src$style$$($fxElement$jscomp$3$$.getAmpDoc().win,$fxElement$jscomp$3$$.getElement());$setStyles$$module$src$style$$($fxElement$jscomp$3$$.getElement(),{left:"calc("+$entry$jscomp$31_top$jscomp$12$$.left+" + "+$fxElement$jscomp$3$$.getFlyInDistance()+"vw)",visibility:"visible"});$fxElement$jscomp$3$$.initialTrigger=!0}),$fxElement$jscomp$3$$.setIsMutateScheduled(!0),$fxElement$jscomp$3$$.getResources().mutateElement($fxElement$jscomp$3$$.getElement(),
function(){$fxElement$jscomp$3$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$3$$.getElement(),{"transition-duration":$fxElement$jscomp$3$$.getDuration(),"transition-timing-function":$fxElement$jscomp$3$$.getEasing(),transform:"translateX(-"+$fxElement$jscomp$3$$.getFlyInDistance()+"vw)"})}))}},"fly-in-top":{isFxTypeSupported:function($win$jscomp$300$$){return $isExperimentOn$$module$src$experiments$$($win$jscomp$300$$,"amp-fx-fly-in")},userAsserts:function($element$jscomp$322$$){var $marginStart$jscomp$3$$=
parseFloat($element$jscomp$322$$.getAttribute("data-margin-start"));$marginStart$jscomp$3$$&&$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$jscomp$3$$&&100>=$marginStart$jscomp$3$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$322$$)},update:function($entry$jscomp$32_top$jscomp$13$$){var $fxElement$jscomp$4$$=this;!($entry$jscomp$32_top$jscomp$13$$=$entry$jscomp$32_top$jscomp$13$$.positionRect?$entry$jscomp$32_top$jscomp$13$$.positionRect.top:
null)||$entry$jscomp$32_top$jscomp$13$$+$fxElement$jscomp$4$$.adjustedViewportHeight*$fxElement$jscomp$4$$.getFlyInDistance()/100>(1-$fxElement$jscomp$4$$.getMarginStart())*$fxElement$jscomp$4$$.adjustedViewportHeight||$fxElement$jscomp$4$$.isMutateScheduled()||($fxElement$jscomp$4$$.initialTrigger||$fxElement$jscomp$4$$.getResources().mutateElement($fxElement$jscomp$4$$.getElement(),function(){var $entry$jscomp$32_top$jscomp$13$$=$computedStyle$$module$src$style$$($fxElement$jscomp$4$$.getAmpDoc().win,
$fxElement$jscomp$4$$.getElement());$setStyles$$module$src$style$$($fxElement$jscomp$4$$.getElement(),{top:"calc("+$entry$jscomp$32_top$jscomp$13$$.top+" - "+$fxElement$jscomp$4$$.getFlyInDistance()+"vh)",visibility:"visible"});$fxElement$jscomp$4$$.initialTrigger=!0}),$fxElement$jscomp$4$$.setIsMutateScheduled(!0),$fxElement$jscomp$4$$.getResources().mutateElement($fxElement$jscomp$4$$.getElement(),function(){$fxElement$jscomp$4$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$4$$.getElement(),
{"transition-duration":$fxElement$jscomp$4$$.getDuration(),"transition-timing-function":$fxElement$jscomp$4$$.getEasing(),transform:"translateY("+$fxElement$jscomp$4$$.getFlyInDistance()+"vh)"})}))}},"fade-in":{isFxTypeSupported:function(){return!0},userAsserts:function($element$jscomp$323$$){var $marginStart$jscomp$4$$=parseFloat($element$jscomp$323$$.getAttribute("data-margin-start"));$marginStart$jscomp$4$$&&$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$jscomp$4$$&&
100>=$marginStart$jscomp$4$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$323$$)},update:function($entry$jscomp$33_top$jscomp$14$$){var $fxElement$jscomp$5$$=this;!($entry$jscomp$33_top$jscomp$14$$=$entry$jscomp$33_top$jscomp$14$$.positionRect?$entry$jscomp$33_top$jscomp$14$$.positionRect.top:null)||$entry$jscomp$33_top$jscomp$14$$>(1-$fxElement$jscomp$5$$.getMarginStart())*$fxElement$jscomp$5$$.adjustedViewportHeight||$fxElement$jscomp$5$$.isMutateScheduled()||
($fxElement$jscomp$5$$.setIsMutateScheduled(!0),$fxElement$jscomp$5$$.getResources().mutateElement($fxElement$jscomp$5$$.getElement(),function(){$fxElement$jscomp$5$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$5$$.getElement(),{"transition-duration":$fxElement$jscomp$5$$.getDuration(),"transition-timing-function":$fxElement$jscomp$5$$.getEasing(),opacity:1})}))}},"fade-in-scroll":{isFxTypeSupported:function(){return!0},userAsserts:function($element$jscomp$324$$){var $marginStart$jscomp$5$$=
parseFloat($element$jscomp$324$$.getAttribute("data-margin-start")),$marginEnd$$=parseFloat($element$jscomp$324$$.getAttribute("data-margin-end"));if($marginStart$jscomp$5$$||$marginEnd$$)$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginStart$jscomp$5$$&&100>=$marginStart$jscomp$5$$,"data-margin-start must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$324$$),$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$(0<=$marginEnd$$&&100>=
$marginEnd$$,"data-margin-end must be a percentage value and be between 0% and 100% for: %s",$element$jscomp$324$$),$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$($marginEnd$$>$marginStart$jscomp$5$$,"data-margin-end must be greater than data-margin-start for: %s",$element$jscomp$324$$)},update:function($entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$){var $fxElement$jscomp$6$$=this;$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$=$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$.positionRect?
$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$.positionRect.top:null;if(!(!$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$||$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$>(1-$fxElement$jscomp$6$$.getMarginStart())*$fxElement$jscomp$6$$.adjustedViewportHeight||$fxElement$jscomp$6$$.isMutateScheduled()||!$fxElement$jscomp$6$$.hasRepeat()&&1<=$fxElement$jscomp$6$$.getOffset())){var $marginDelta$$=$fxElement$jscomp$6$$.getMarginEnd()-$fxElement$jscomp$6$$.getMarginStart();$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$=
1*($fxElement$jscomp$6$$.adjustedViewportHeight-$entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$-$fxElement$jscomp$6$$.getMarginStart()*$fxElement$jscomp$6$$.adjustedViewportHeight)/($marginDelta$$*$fxElement$jscomp$6$$.adjustedViewportHeight);$fxElement$jscomp$6$$.setOffset($entry$jscomp$34_offset$jscomp$21_top$jscomp$15$$);$fxElement$jscomp$6$$.isMutateScheduled()||($fxElement$jscomp$6$$.setIsMutateScheduled(!0),$fxElement$jscomp$6$$.getResources().mutateElement($fxElement$jscomp$6$$.getElement(),
function(){$fxElement$jscomp$6$$.setIsMutateScheduled(!1);$setStyles$$module$src$style$$($fxElement$jscomp$6$$.getElement(),{opacity:$fxElement$jscomp$6$$.getOffset()})}))}}}};function $convertEasingKeyword$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($keyword$jscomp$2$$){switch($keyword$jscomp$2$$){case "linear":return"cubic-bezier(0.00, 0.00, 1.00, 1.00)";case "ease-in-out":return"cubic-bezier(0.80, 0.00, 0.20, 1.00)";case "ease-in":return"cubic-bezier(0.80, 0.00, 0.60, 1.00)";case "ease-out":return"cubic-bezier(0.40, 0.00, 0.40, 1.00)";default:return $user$$module$src$log$$().$Log$$module$src$log_prototype$assert$($startsWith$$module$src$string$$($keyword$jscomp$2$$,
"cubic-bezier"),"All custom bezier curves should be specified by following the `cubic-bezier()` function notation."),$keyword$jscomp$2$$}}function $resolvePercentageToNumber$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($val$jscomp$31$$){var $precentageStrippedVal$$=parseFloat($val$jscomp$31$$);if(!isNaN($precentageStrippedVal$$))return $precentageStrippedVal$$/100}
function $installStyles$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($fxType$$){switch($fxType$$){case "parallax":return{"will-change":"transform"};case "fade-in":return{"will-change":"opacity",opacity:0};case "fade-in-scroll":return{"will-change":"opacity",opacity:0};case "fly-in-bottom":case "fly-in-top":case "fly-in-left":case "fly-in-right":return{"will-change":"transform"};default:return{visibility:"visible"}}}
function $defaultDurationValues$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($ampdoc$jscomp$148_width$jscomp$43$$,$fxType$jscomp$1$$){switch($fxType$jscomp$1$$){case "fade-in":return"1000ms";case "fly-in-bottom":case "fly-in-top":case "fly-in-left":case "fly-in-right":return $ampdoc$jscomp$148_width$jscomp$43$$=$Services$$module$src$services$viewportForDoc$$($ampdoc$jscomp$148_width$jscomp$43$$).getSize().width,$mapRange$$module$src$utils$math$$(Math.min(1E3,$ampdoc$jscomp$148_width$jscomp$43$$),
480,1E3,400,600)+"ms";default:return"1ms"}}function $defaultMarginValues$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($fxType$jscomp$3$$){switch($fxType$jscomp$3$$){case "fade-in":case "fly-in-right":case "fly-in-left":case "fly-in-top":case "fly-in-bottom":return{start:.05};case "fade-in-scroll":return{start:0,end:.5};default:return{start:0,end:1}}};function $FxProvider$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$($ampdoc$jscomp$150$$,$fxType$jscomp$5$$){this.$viewport_$=$Services$$module$src$services$viewportForDoc$$($ampdoc$jscomp$150$$);this.C=$Services$$module$src$services$resourcesForDoc$$($ampdoc$jscomp$150$$);$installPositionObserverServiceForDoc$$module$src$service$position_observer$position_observer_impl$$($ampdoc$jscomp$150$$);this.$positionObserver_$=$getServiceForDoc$$module$src$service$$($ampdoc$jscomp$150$$,
"position-observer");this.$ampdoc_$=$ampdoc$jscomp$150$$;this.B=$fxType$jscomp$5$$}$FxProvider$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$.prototype.installOn=function($element$jscomp$326$$){new $FxElement$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$($element$jscomp$326$$,this.$positionObserver_$,this.$viewport_$,this.C,this.$ampdoc_$,this.B);$setStyles$$module$src$style$$($element$jscomp$326$$,$installStyles$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$(this.B))};
function $FxElement$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$($element$jscomp$327$$,$positionObserver$$,$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$,$resources$jscomp$8$$,$ampdoc$jscomp$151$$,$fxType$jscomp$6$$){var $$jscomp$this$jscomp$507$$=this;this.$positionObserver_$=$positionObserver$$;this.$viewport_$=$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$;this.F=$resources$jscomp$8$$;this.adjustedViewportHeight=null;
this.C=$element$jscomp$327$$;this.G=!1;this.D=0;this.B=$fxType$jscomp$6$$;this.$ampdoc_$=$ampdoc$jscomp$151$$;$Presets$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets$$[this.B].userAsserts($element$jscomp$327$$);this.J=parseFloat($element$jscomp$327$$.getAttribute("data-parallax-factor"));this.P=$element$jscomp$327$$.hasAttribute("data-margin-start")?$resolvePercentageToNumber$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($element$jscomp$327$$.getAttribute("data-margin-start")):
$defaultMarginValues$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$(this.B).start;this.O=$element$jscomp$327$$.hasAttribute("data-margin-end")?$resolvePercentageToNumber$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($element$jscomp$327$$.getAttribute("data-margin-end")):$defaultMarginValues$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$(this.B).end;if($element$jscomp$327$$.hasAttribute("data-easing"))$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$=
$element$jscomp$327$$.getAttribute("data-easing");else a:switch(this.B){case "fade-in":$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$="ease-in";break a;case "fly-in-right":case "fly-in-left":case "fly-in-top":case "fly-in-bottom":$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$="ease-out";break a;default:$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$="ease-in"}this.I=$convertEasingKeyword$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$($JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$);
this.H=$element$jscomp$327$$.hasAttribute("data-duration")?$element$jscomp$327$$.getAttribute("data-duration"):$defaultDurationValues$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets_utils$$(this.$ampdoc_$,this.B);if($element$jscomp$327$$.hasAttribute("data-fly-in-distance"))$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$=parseFloat($element$jscomp$327$$.getAttribute("data-fly-in-distance"));else a:switch(this.B){case "fly-in-bottom":case "fly-in-top":$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$=
1E3>$Services$$module$src$services$viewportForDoc$$(this.$ampdoc_$).getSize().width?25:33;break a;case "fly-in-left":case "fly-in-right":$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$=100;break a;default:$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$=1}this.K=$JSCompiler_temp$jscomp$446_JSCompiler_temp$jscomp$447_viewport$jscomp$14$$;this.M=$element$jscomp$327$$.hasAttribute("data-repeat");this.initialTrigger=!1;$JSCompiler_StaticMethods_getAdjustedViewportHeight_$$(this).then(function($element$jscomp$327$$){$$jscomp$this$jscomp$507$$.adjustedViewportHeight=
$element$jscomp$327$$;$JSCompiler_StaticMethods_observePositionChanges_$$($$jscomp$this$jscomp$507$$)})}
function $JSCompiler_StaticMethods_observePositionChanges_$$($JSCompiler_StaticMethods_observePositionChanges_$self$$){$JSCompiler_StaticMethods_observePositionChanges_$self$$.$positionObserver_$.observe($JSCompiler_StaticMethods_observePositionChanges_$self$$.C,1,$Presets$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets$$[$JSCompiler_StaticMethods_observePositionChanges_$self$$.B].update.bind($JSCompiler_StaticMethods_observePositionChanges_$self$$));$JSCompiler_StaticMethods_observePositionChanges_$self$$.$viewport_$.onResize(function(){$JSCompiler_StaticMethods_getAdjustedViewportHeight_$$($JSCompiler_StaticMethods_observePositionChanges_$self$$).then(function($adjustedViewportHeight$jscomp$1$$){$JSCompiler_StaticMethods_observePositionChanges_$self$$.adjustedViewportHeight=
$adjustedViewportHeight$jscomp$1$$})})}
function $JSCompiler_StaticMethods_getAdjustedViewportHeight_$$($JSCompiler_StaticMethods_getAdjustedViewportHeight_$self$$){return $JSCompiler_StaticMethods_getAdjustedViewportHeight_$self$$.F.measureElement(function(){for(var $viewportHeight$jscomp$5$$=$JSCompiler_StaticMethods_getAdjustedViewportHeight_$self$$.$viewport_$.getHeight(),$offsetTop$jscomp$1$$=0,$node$jscomp$61$$=$JSCompiler_StaticMethods_getAdjustedViewportHeight_$self$$.C;$node$jscomp$61$$;$node$jscomp$61$$=$node$jscomp$61$$.offsetParent)$offsetTop$jscomp$1$$+=
$node$jscomp$61$$.offsetTop;var $aboveTheFold$$=$offsetTop$jscomp$1$$<$viewportHeight$jscomp$5$$;return $aboveTheFold$$?$offsetTop$jscomp$1$$:$viewportHeight$jscomp$5$$})}$JSCompiler_prototypeAlias$$=$FxElement$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$.prototype;$JSCompiler_prototypeAlias$$.getAmpDoc=function(){return this.$ampdoc_$};$JSCompiler_prototypeAlias$$.getFactor=function(){return this.J};$JSCompiler_prototypeAlias$$.getDuration=function(){return this.H};
$JSCompiler_prototypeAlias$$.getMarginStart=function(){return this.P};$JSCompiler_prototypeAlias$$.getMarginEnd=function(){return this.O};$JSCompiler_prototypeAlias$$.getFlyInDistance=function(){return this.K};$JSCompiler_prototypeAlias$$.getEasing=function(){return this.I};$JSCompiler_prototypeAlias$$.getElement=function(){return this.C};$JSCompiler_prototypeAlias$$.getResources=function(){return this.F};$JSCompiler_prototypeAlias$$.getOffset=function(){return this.D};
$JSCompiler_prototypeAlias$$.setOffset=function($offset$jscomp$22$$){this.D=$offset$jscomp$22$$};$JSCompiler_prototypeAlias$$.isMutateScheduled=function(){return this.G};$JSCompiler_prototypeAlias$$.hasRepeat=function(){return this.M};$JSCompiler_prototypeAlias$$.setIsMutateScheduled=function($mutateScheduled$$){this.G=$mutateScheduled$$};var $FxType$$module$extensions$amp_fx_collection$0_1$amp_fx_collection$$={PARALLAX:"parallax",FADE_IN:"fade-in",FADE_IN_SCROLL:"fade-in-scroll",FLY_IN_BOTTOM:"fly-in-bottom",FLY_IN_LEFT:"fly-in-left",FLY_IN_RIGHT:"fly-in-right",FLY_IN_TOP:"fly-in-top"};
function $AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection$$($ampdoc$jscomp$152$$){var $$jscomp$this$jscomp$510$$=this;this.$ampdoc_$=$ampdoc$jscomp$152$$;this.C=$ampdoc$jscomp$152$$.getRootNode();this.$seen_$=[];this.$viewer_$=$Services$$module$src$services$viewerForDoc$$($ampdoc$jscomp$152$$);this.B=$map$$module$src$utils$object$$();Promise.all([$ampdoc$jscomp$152$$.whenReady(),this.$viewer_$.whenFirstVisible()]).then(function(){$$jscomp$this$jscomp$510$$.D();$listen$$module$src$event_helper$$($$jscomp$this$jscomp$510$$.C,
"amp:dom-update",$$jscomp$this$jscomp$510$$.D.bind($$jscomp$this$jscomp$510$$))})}
$AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection$$.prototype.D=function(){var $$jscomp$this$jscomp$511$$=this,$fxElements$$=this.C.querySelectorAll("[amp-fx]");$iterateCursor$$module$src$dom$$($fxElements$$,function($fxElements$$){if(!$$jscomp$this$jscomp$511$$.$seen_$.includes($fxElements$$))try{$JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$$($$jscomp$this$jscomp$511$$,$fxElements$$),$$jscomp$this$jscomp$511$$.$seen_$.push($fxElements$$)}catch($e$jscomp$236$$){$rethrowAsync$$module$src$log$$($e$jscomp$236$$)}})};
function $JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$$($JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$,$fxElement$jscomp$8$$){$fxElement$jscomp$8$$.hasAttribute("amp-fx");$JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.$seen_$.includes($fxElement$jscomp$8$$);$JSCompiler_StaticMethods_Viewer$$module$src$service$viewer_impl_prototype$isVisible$$($JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.$viewer_$);
var $fxTypes$$=$JSCompiler_StaticMethods_getFxTypes_$$($JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$,$fxElement$jscomp$8$$);$fxTypes$$.forEach(function($fxTypes$$){$JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.B[$fxTypes$$]||($JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.B[$fxTypes$$]=
new $FxProvider$$module$extensions$amp_fx_collection$0_1$providers$fx_provider$$($JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.$ampdoc_$,$fxTypes$$));var $fxType$jscomp$7$$=$JSCompiler_StaticMethods_AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection_prototype$register_$self$$.B[$fxTypes$$];$fxType$jscomp$7$$.installOn($fxElement$jscomp$8$$)})}
function $JSCompiler_StaticMethods_getFxTypes_$$($JSCompiler_StaticMethods_getFxTypes_$self$$,$fxElement$jscomp$9_fxTypes$jscomp$1$$){$fxElement$jscomp$9_fxTypes$jscomp$1$$.hasAttribute("amp-fx");$fxElement$jscomp$9_fxTypes$jscomp$1$$=$fxElement$jscomp$9_fxTypes$jscomp$1$$.getAttribute("amp-fx").trim().toLowerCase().split(/\s+/);$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$($fxElement$jscomp$9_fxTypes$jscomp$1$$.length,"No value provided for `amp-fx` attribute");$fxElement$jscomp$9_fxTypes$jscomp$1$$.forEach(function($fxElement$jscomp$9_fxTypes$jscomp$1$$){$Presets$$module$extensions$amp_fx_collection$0_1$providers$amp_fx_presets$$[$fxElement$jscomp$9_fxTypes$jscomp$1$$].isFxTypeSupported($JSCompiler_StaticMethods_getFxTypes_$self$$.$ampdoc_$.win);
$user$$module$src$log$$().assertEnumValue($FxType$$module$extensions$amp_fx_collection$0_1$amp_fx_collection$$,$fxElement$jscomp$9_fxTypes$jscomp$1$$,"amp-fx")});return $fxElement$jscomp$9_fxTypes$jscomp$1$$}(function($AMP$jscomp$44$$){$AMP$jscomp$44$$.registerServiceForDoc("amp-fx-collection",$AmpFxCollection$$module$extensions$amp_fx_collection$0_1$amp_fx_collection$$)})(self.AMP);})});
//# sourceMappingURL=extensions-amp-fx-collection-0.1-amp-fx-collection.js.map

