(self.AMP=self.AMP||[]).push({n:"amp-story",i:["_base_i","_base_misc"],v:"1901181729101",f:(function(AMP,_){
var $JSCompiler_StaticMethods_addToWhitelist$$ = function($JSCompiler_StaticMethods_addToWhitelist$self$$, $method$jscomp$8$$) {
  $JSCompiler_StaticMethods_addToWhitelist$self$$.$F$ || ($JSCompiler_StaticMethods_addToWhitelist$self$$.$F$ = []);
  $JSCompiler_StaticMethods_addToWhitelist$self$$.$F$.push({$tagOrTarget$:"AMP-CONSENT", method:$method$jscomp$8$$});
}, $Services$$module$src$services$storyStoreServiceV01$$ = function($win$jscomp$72$$) {
  return _.$getService$$module$src$service$$($win$jscomp$72$$, "story-store");
}, $Services$$module$src$services$localizationServiceForOrNullV01$$ = function($win$jscomp$74$$) {
  return _.$getElementServiceIfAvailable$$module$src$element_service$$($win$jscomp$74$$, "localization-v01", "amp-story", !0);
}, $getLanguageCodesFromString$$module$extensions$amp_story$0_1$localization$$ = function($languageCode$$) {
  if (!$languageCode$$) {
    return ["en", "default"];
  }
  var $matches$jscomp$19$$ = $languageCode$$.match($LANGUAGE_CODE_CHUNK_REGEX$$module$extensions$amp_story$0_1$localization$$) || [];
  return $matches$jscomp$19$$.reduce(function($languageCode$$, $chunk$jscomp$8$$, $index$jscomp$138$$) {
    $languageCode$$.unshift($matches$jscomp$19$$.slice(0, $index$jscomp$138$$ + 1).join("-").toLowerCase());
    return $languageCode$$;
  }, ["default"]);
}, $findLocalizedString$$module$extensions$amp_story$0_1$localization$$ = function($localizedStringBundles$$, $languageCodes$$, $localizedStringId$$) {
  var $localizedString$$ = null;
  $languageCodes$$.some(function($languageCodes$$) {
    return ($languageCodes$$ = $localizedStringBundles$$[$languageCodes$$]) && $languageCodes$$[$localizedStringId$$] && $languageCodes$$[$localizedStringId$$].string ? ($localizedString$$ = $languageCodes$$[$localizedStringId$$].string, !0) : !1;
  });
  return $localizedString$$;
}, $createPseudoLocale$$module$extensions$amp_story$0_1$localization$$ = function($localizationFn$$) {
  var $localizedStringBundle$jscomp$2$$ = $$jscompDefaultExport$$module$extensions$amp_story$0_1$_locales$en$$, $pseudoLocaleStringBundle$$ = _.$parseJson$$module$src$json$$(JSON.stringify($localizedStringBundle$jscomp$2$$));
  Object.keys($pseudoLocaleStringBundle$$).forEach(function($localizedStringIdAsStr$$) {
    $pseudoLocaleStringBundle$$[$localizedStringIdAsStr$$].string = $localizationFn$$($localizedStringBundle$jscomp$2$$[$localizedStringIdAsStr$$].string);
  });
  return $pseudoLocaleStringBundle$$;
}, $LocalizationService$$module$extensions$amp_story$0_1$localization$$ = function($win$jscomp$368$$) {
  this.$F$ = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLanguageCodesForElement_$$($win$jscomp$368$$.document.documentElement);
  this.$D$ = {};
}, $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLanguageCodesForElement_$$ = function($element$jscomp$551_languageCode$jscomp$2_languageEl$$) {
  $element$jscomp$551_languageCode$jscomp$2_languageEl$$ = ($element$jscomp$551_languageCode$jscomp$2_languageEl$$ = _.$closest$$module$src$dom$$($element$jscomp$551_languageCode$jscomp$2_languageEl$$, function($element$jscomp$551_languageCode$jscomp$2_languageEl$$) {
    return $element$jscomp$551_languageCode$jscomp$2_languageEl$$.hasAttribute("lang");
  })) ? $element$jscomp$551_languageCode$jscomp$2_languageEl$$.getAttribute("lang") : null;
  return $getLanguageCodesFromString$$module$extensions$amp_story$0_1$localization$$($element$jscomp$551_languageCode$jscomp$2_languageEl$$ || "");
}, $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$$ = function($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$self$$, $languageCode$jscomp$3$$, $localizedStringBundle$jscomp$3$$) {
  $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$self$$.$D$[$languageCode$jscomp$3$$] || ($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$self$$.$D$[$languageCode$jscomp$3$$] = {});
  Object.assign($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$self$$.$D$[$languageCode$jscomp$3$$], $localizedStringBundle$jscomp$3$$);
  return $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$self$$;
}, $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$ = function($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$self$$, $LocalizedStringId$$) {
  return $findLocalizedString$$module$extensions$amp_story$0_1$localization$$($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$self$$.$D$, $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$self$$.$F$, $LocalizedStringId$$);
}, $renderSimpleTemplate$$module$extensions$amp_story$0_1$simple_template$$ = function($doc$jscomp$114$$, $elementsDef$$) {
  return _.$isArray$$module$src$types$$($elementsDef$$) ? $renderMulti$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$114$$, $elementsDef$$) : $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$114$$, $elementsDef$$);
}, $renderAsElement$$module$extensions$amp_story$0_1$simple_template$$ = function($doc$jscomp$115$$, $elementDef$$) {
  return $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$115$$, $elementDef$$);
}, $renderMulti$$module$extensions$amp_story$0_1$simple_template$$ = function($doc$jscomp$116$$, $elementsDef$jscomp$1$$) {
  var $fragment$jscomp$13$$ = $doc$jscomp$116$$.createDocumentFragment();
  $elementsDef$jscomp$1$$.forEach(function($elementsDef$jscomp$1$$) {
    return $fragment$jscomp$13$$.appendChild($renderSingle$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$116$$, $elementsDef$jscomp$1$$));
  });
  return $fragment$jscomp$13$$;
}, $renderSingle$$module$extensions$amp_story$0_1$simple_template$$ = function($doc$jscomp$117$$, $elementDef$jscomp$2$$) {
  var $el$jscomp$90$$ = $elementDef$jscomp$2$$.$attrs$ ? _.$createElementWithAttributes$$module$src$dom$$($doc$jscomp$117$$, $elementDef$jscomp$2$$.tag, $elementDef$jscomp$2$$.$attrs$) : $doc$jscomp$117$$.createElement($elementDef$jscomp$2$$.tag);
  $elementDef$jscomp$2$$.$localizedStringId$ && $Services$$module$src$services$localizationServiceForOrNullV01$$($doc$jscomp$117$$.defaultView).then(function($doc$jscomp$117$$) {
    $el$jscomp$90$$.textContent = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($doc$jscomp$117$$, $elementDef$jscomp$2$$.$localizedStringId$);
  });
  $elementDef$jscomp$2$$.$unlocalizedString$ && ($el$jscomp$90$$.textContent = $elementDef$jscomp$2$$.$unlocalizedString$);
  $elementDef$jscomp$2$$.children && $el$jscomp$90$$.appendChild($renderMulti$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$117$$, $elementDef$jscomp$2$$.children));
  return $el$jscomp$90$$;
}, $Toast$$module$extensions$amp_story$0_1$toast$show$$ = function($win$jscomp$370$$, $childNodeOrText$$) {
  var $toast$$ = _.$createElementWithAttributes$$module$src$dom$$($win$jscomp$370$$.document, "div", {"class":"i-amphtml-story-toast"});
  "string" == typeof $childNodeOrText$$ ? $toast$$.textContent = $childNodeOrText$$ : $toast$$.appendChild($childNodeOrText$$);
  $win$jscomp$370$$.document.body.appendChild($toast$$);
  _.$Services$$module$src$services$timerFor$$($win$jscomp$370$$).delay(function() {
    return _.$removeElement$$module$src$dom$$($toast$$);
  }, 2600);
}, $buildProviderParams$$module$extensions$amp_story$0_1$amp_story_share$$ = function($opt_params$$) {
  var $attrs$jscomp$9$$ = {};
  $opt_params$$ && Object.keys($opt_params$$).forEach(function($field$jscomp$12$$) {
    $attrs$jscomp$9$$["data-param-" + $field$jscomp$12$$] = $opt_params$$[$field$jscomp$12$$];
  });
  return $attrs$jscomp$9$$;
}, $buildProvider$$module$extensions$amp_story$0_1$amp_story_share$$ = function($doc$jscomp$118$$, $shareType$$, $opt_params$jscomp$1$$) {
  var $shareProviderLocalizedStringId$$ = $SHARE_PROVIDER_LOCALIZED_STRING_ID$$module$extensions$amp_story$0_1$amp_story_share$$[$shareType$$];
  return $renderSimpleTemplate$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$118$$, [{tag:"amp-social-share", $attrs$:Object.assign(_.$dict$$module$src$utils$object$$({width:48, height:66, "class":"i-amphtml-story-share-icon", type:$shareType$$}), $buildProviderParams$$module$extensions$amp_story$0_1$amp_story_share$$($opt_params$jscomp$1$$)), $localizedStringId$:$shareProviderLocalizedStringId$$}]);
}, $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$ = function($win$jscomp$371$$) {
  this.$ampdoc_$ = null;
  this.$win$ = $win$jscomp$371$$;
  this.$I$ = this.$D$ = null;
  this.$requestService_$ = _.$getService$$module$src$service$$(this.$win$, "story-request-v01");
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$self$$) {
  if ($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$self$$.$win$.document.queryCommandSupported("copy")) {
    var $linkShareButton$$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$self$$.$win$.document, $LINK_SHARE_ITEM_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$);
    $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$self$$, $linkShareButton$$);
    _.$listen$$module$src$event_helper$$($linkShareButton$$, "click", function($linkShareButton$$) {
      $linkShareButton$$.preventDefault();
      $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$self$$);
    });
  }
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$) {
  var $url$jscomp$198$$ = _.$Services$$module$src$services$documentInfoForDoc$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$ampdoc_$).canonicalUrl;
  _.$copyTextToClipboard$$module$src$clipboard$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$win$, $url$jscomp$198$$) ? $Toast$$module$extensions$amp_story$0_1$toast$show$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$win$, $renderAsElement$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$win$.document, 
  {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-copy-successful"}), children:[{tag:"div", $localizedStringId$:"5"}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-copy-url"}), $unlocalizedString$:$url$jscomp$198$$}]})) : $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$I$.then(function($url$jscomp$198$$) {
    $url$jscomp$198$$ = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($url$jscomp$198$$, "4");
    $Toast$$module$extensions$amp_story$0_1$toast$show$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$copyUrlToClipboard_$self$$.$win$, $url$jscomp$198$$);
  });
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$, $ampdoc$jscomp$197_viewer$jscomp$48$$) {
  $ampdoc$jscomp$197_viewer$jscomp$48$$ = void 0 === $ampdoc$jscomp$197_viewer$jscomp$48$$ ? $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$.$ampdoc_$ : $ampdoc$jscomp$197_viewer$jscomp$48$$;
  $ampdoc$jscomp$197_viewer$jscomp$48$$ = _.$Services$$module$src$services$viewerForDoc$$($ampdoc$jscomp$197_viewer$jscomp$48$$);
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$ = _.$Services$$module$src$services$platformFor$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$.$win$);
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$ = _.$JSCompiler_StaticMethods_isWebviewEmbedded$$($ampdoc$jscomp$197_viewer$jscomp$48$$) && _.$JSCompiler_StaticMethods_isChrome$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$);
  return "share" in window.navigator && !$JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$self_isChromeWebview$jscomp$1_platform$jscomp$14$$;
}, $JSCompiler_StaticMethods_parseProvidersToClassicApi$$ = function($providers$jscomp$1$$) {
  var $providersMap$$ = {};
  $providers$jscomp$1$$.forEach(function($providers$jscomp$1$$) {
    _.$isObject$$module$src$types$$($providers$jscomp$1$$) && "facebook" == $providers$jscomp$1$$.provider ? $providersMap$$.facebook = {app_id:$providers$jscomp$1$$.app_id} : _.$isObject$$module$src$types$$($providers$jscomp$1$$) ? $providersMap$$[$providers$jscomp$1$$.provider] = !0 : $providersMap$$[$providers$jscomp$1$$] = !0;
  });
  return $providersMap$$;
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$self$$, $providers$jscomp$2$$) {
  Array.isArray($providers$jscomp$2$$) && ($providers$jscomp$2$$ = $JSCompiler_StaticMethods_parseProvidersToClassicApi$$($providers$jscomp$2$$));
  Object.keys($providers$jscomp$2$$).forEach(function($type$jscomp$190$$) {
    "system" == $type$jscomp$190$$ ? _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("AMP-STORY", "`system` is not a valid share provider type. Native sharing is enabled by default and cannot be turned off.", $type$jscomp$190$$) : _.$isObject$$module$src$types$$($providers$jscomp$2$$[$type$jscomp$190$$]) ? $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$self$$, 
    $buildProvider$$module$extensions$amp_story$0_1$amp_story_share$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$self$$.$win$.document, $type$jscomp$190$$, $providers$jscomp$2$$[$type$jscomp$190$$])) : !0 === $providers$jscomp$2$$[$type$jscomp$190$$] ? $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$self$$, 
    $buildProvider$$module$extensions$amp_story$0_1$amp_story_share$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$self$$.$win$.document, $type$jscomp$190$$)) : _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("AMP-STORY", 'Invalid share providers configuration for "' + $type$jscomp$190$$ + '" in bookend. Value must be `true` or a params object.');
  });
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$self$$, $ampdoc$jscomp$198$$) {
  $ampdoc$jscomp$198$$ = void 0 === $ampdoc$jscomp$198$$ ? $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$self$$.$ampdoc_$ : $ampdoc$jscomp$198$$;
  _.$JSCompiler_StaticMethods_installExtensionForDoc$$(_.$Services$$module$src$services$extensionsFor$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$self$$.$win$), $ampdoc$jscomp$198$$, "amp-social-share");
}, $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$$ = function($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$, $node$jscomp$102$$) {
  var $list$jscomp$9$$ = $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$.$D$.firstElementChild;
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$.$win$.document, $SHARE_ITEM_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$);
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$.appendChild($node$jscomp$102$$);
  $list$jscomp$9$$.insertBefore($JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$add_$self_item$jscomp$20$$, $list$jscomp$9$$.lastElementChild);
}, $ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$ = function($win$jscomp$373$$) {
  $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.call(this, $win$jscomp$373$$);
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$($win$jscomp$373$$);
  this.$G$ = null;
}, $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$$ = function($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$) {
  var $items$jscomp$8$$ = $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$$($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$);
  $items$jscomp$8$$.length && _.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$vsync_$, {measure:function($state$jscomp$79$$) {
    var $containerWidth$jscomp$4$$ = $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$D$.clientWidth;
    if ($containerWidth$jscomp$4$$ == $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$G$) {
      $state$jscomp$79$$.$noop$ = !0;
    } else {
      var $icon$jscomp$3_iconWidth$$ = $items$jscomp$8$$[0].firstElementChild, $availableWidth_leftMargin$$ = $icon$jscomp$3_iconWidth$$.offsetLeft - $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$D$.offsetLeft;
      $icon$jscomp$3_iconWidth$$ = $icon$jscomp$3_iconWidth$$.offsetWidth;
      $icon$jscomp$3_iconWidth$$ * $items$jscomp$8$$.length + 20 * ($items$jscomp$8$$.length - 1) > $containerWidth$jscomp$4$$ - 2 * $availableWidth_leftMargin$$ ? ($availableWidth_leftMargin$$ = $containerWidth$jscomp$4$$ - $availableWidth_leftMargin$$ - $icon$jscomp$3_iconWidth$$ / 2, $state$jscomp$79$$.padding = 0.5 * ($availableWidth_leftMargin$$ / Math.floor($availableWidth_leftMargin$$ / ($icon$jscomp$3_iconWidth$$ + 20)) - $icon$jscomp$3_iconWidth$$)) : $state$jscomp$79$$.padding = Math.min(16, 
      ($containerWidth$jscomp$4$$ - 2 * $availableWidth_leftMargin$$ - $icon$jscomp$3_iconWidth$$ * $items$jscomp$8$$.length) / ($items$jscomp$8$$.length - 1) * 0.5);
      $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$G$ = $containerWidth$jscomp$4$$;
    }
  }, $mutate$:function($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$) {
    $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.$noop$ || $items$jscomp$8$$.forEach(function($state$jscomp$80$$, $i$jscomp$366$$) {
      0 != $i$jscomp$366$$ && _.$setImportantStyles$$module$src$style$$($state$jscomp$80$$, {"padding-left":_.$px$$module$src$style$$($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.padding)});
      $i$jscomp$366$$ != $items$jscomp$8$$.length - 1 && _.$setImportantStyles$$module$src$style$$($state$jscomp$80$$, {"padding-right":_.$px$$module$src$style$$($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$self$$.padding)});
    });
  }}, {});
}, $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$$ = function($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$self$$) {
  return Array.prototype.filter.call($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$self$$.$D$.querySelectorAll("li"), function($JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$self$$) {
    return !!$JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$getVisibleItems_$self$$.firstElementChild;
  });
}, $actions$$module$extensions$amp_story$0_1$amp_story_store_service$$ = function($state$jscomp$81$$, $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$, $$jscomp$compprop63_data$jscomp$176$$) {
  switch($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$) {
    case "togglead":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.adstate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "togglebookend":
      if (!$state$jscomp$81$$.canshowbookend) {
        return $state$jscomp$81$$;
      }
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {};
      return Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.bookendstate = !!$$jscomp$compprop63_data$jscomp$176$$, $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "toggledesktop":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.desktopstate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "toggleinfodialog":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.infodialogstate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "togglehasaudio":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.hasaudiostate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "togglelandscape":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.landscapestate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "togglemuted":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.mutedstate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "togglesupportedbrowser":
      return $$jscomp$compprop63_data$jscomp$176$$ && _.$dev$$module$src$log$$().error("amp-story", "Cannot exit unsupported browser state."), $$jscomp$compprop63_data$jscomp$176$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop63_data$jscomp$176$$.caninsertautomaticad = !1, $$jscomp$compprop63_data$jscomp$176$$.canshowbookend = !1, $$jscomp$compprop63_data$jscomp$176$$.canshownavigationoverlayhint = !1, $$jscomp$compprop63_data$jscomp$176$$.canshowpreviouspagehelp = !1, $$jscomp$compprop63_data$jscomp$176$$.canshowsystemlayerbuttons = 
      !1, $$jscomp$compprop63_data$jscomp$176$$.bookendstate = !1, $$jscomp$compprop63_data$jscomp$176$$.desktopstate = !1, $$jscomp$compprop63_data$jscomp$176$$.hasaudiostate = !1, $$jscomp$compprop63_data$jscomp$176$$.mutedstate = !0, $$jscomp$compprop63_data$jscomp$176$$.supportedbrowserstate = !1, $$jscomp$compprop63_data$jscomp$176$$));
    case "togglesharemenu":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.sharemenustate = !!$$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "setconsentid":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.consentid = $$jscomp$compprop63_data$jscomp$176$$, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    case "changepage":
      return $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ = {}, Object.assign({}, $state$jscomp$81$$, ($$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.currentpageid = $$jscomp$compprop63_data$jscomp$176$$.id, 
      $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$.currentpageindex = $$jscomp$compprop63_data$jscomp$176$$.index, $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$));
    default:
      return _.$dev$$module$src$log$$().error("amp-story", "Unknown action " + $$jscomp$compprop56_$jscomp$compprop57_$jscomp$compprop58_$jscomp$compprop59_$jscomp$compprop60_$jscomp$compprop61_$jscomp$compprop62_$jscomp$compprop64_$jscomp$compprop65_$jscomp$compprop66_action$jscomp$22$$ + "."), $state$jscomp$81$$;
  }
}, $AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service$$ = function($$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$) {
  this.$F$ = $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$;
  this.$D$ = {};
  $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$ = {};
  $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$ = ($$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.caninsertautomaticad = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.canshowbookend = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.canshownavigationoverlayhint = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.canshowpreviouspagehelp = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.canshowsharinguis = 
  !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.canshowsystemlayerbuttons = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.adstate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.bookendstate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.desktopstate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.infodialogstate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.hasaudiostate = 
  !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.landscapestate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.mutedstate = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.sharemenustate = !1, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.supportedbrowserstate = !0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.consentid = null, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.currentpageid = 
  "", $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$.currentpageindex = 0, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$);
  this.$state_$ = Object.assign({}, $$jscomp$inline_4110_JSCompiler_inline_result$jscomp$862_win$jscomp$375$$, $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$$(this));
}, $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$ = function($JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$, $action$jscomp$23$$, $data$jscomp$177$$) {
  var $oldState$jscomp$6$$ = Object.assign({}, $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$state_$);
  $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$state_$ = $actions$$module$extensions$amp_story$0_1$amp_story_store_service$$($JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$state_$, $action$jscomp$23$$, $data$jscomp$177$$);
  Object.keys($JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$D$).forEach(function($action$jscomp$23$$) {
    $oldState$jscomp$6$$[$action$jscomp$23$$] !== $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$state_$[$action$jscomp$23$$] && $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$D$[$action$jscomp$23$$].$fire$($JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$self$$.$state_$[$action$jscomp$23$$]);
  });
}, $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$$ = function($$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$) {
  $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$ = _.$parseQueryString_$$module$src$url_parse_query_string$$($$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.$F$.location.hash).embedMode;
  $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$ = (0,window.parseInt)($$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$, 
  10);
  switch(_.$isEnumValue$$module$src$types$$($EmbedMode$$module$extensions$amp_story$0_1$embed_mode$$, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$) ? $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$ : 
  0) {
    case 1:
      return $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$ = {}, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.caninsertautomaticad = 
      !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.canshowbookend = !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.canshownavigationoverlayhint = 
      !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.canshowpreviouspagehelp = !0, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.canshowsystemlayerbuttons = 
      !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.mutedstate = !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$;
    case 2:
      return $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$ = {}, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$.canshowsharinguis = 
      !1, $$jscomp$compprop68_$jscomp$compprop69_JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$getEmbedOverrides_$self_embedModeIndex$jscomp$inline_4114_unsanitizedEmbedMode$jscomp$inline_4113$$;
    default:
      return {};
  }
}, $dispatch$$module$extensions$amp_story$0_1$events$$ = function($source$jscomp$45$$, $eventName$jscomp$9$$) {
  var $event$jscomp$188$$ = new window.Event($eventName$jscomp$9$$, {bubbles:!0});
  $event$jscomp$188$$.initEvent && $event$jscomp$188$$.initEvent($eventName$jscomp$9$$, !0, !1);
  $source$jscomp$45$$.dispatchEvent($event$jscomp$188$$);
}, $dispatchCustom$$module$extensions$amp_story$0_1$events$$ = function($event$jscomp$189_win$jscomp$376$$, $source$jscomp$46$$, $eventName$jscomp$10$$, $payload$jscomp$20$$) {
  $event$jscomp$189_win$jscomp$376$$ = _.$createCustomEvent$$module$src$event_helper$$($event$jscomp$189_win$jscomp$376$$, $eventName$jscomp$10$$, $payload$jscomp$20$$, {bubbles:!0});
  $source$jscomp$46$$.dispatchEvent($event$jscomp$189_win$jscomp$376$$);
}, $getJsonLd$$module$extensions$amp_story$0_1$jsonld$$ = function($root$jscomp$72_scriptTag$jscomp$1$$) {
  return ($root$jscomp$72_scriptTag$jscomp$1$$ = $root$jscomp$72_scriptTag$jscomp$1$$.querySelector('script[type="application/ld+json"]')) && _.$isJsonLdScriptTag$$module$src$dom$$($root$jscomp$72_scriptTag$jscomp$1$$) ? _.$tryParseJson$$module$src$json$$($root$jscomp$72_scriptTag$jscomp$1$$.textContent, function($root$jscomp$72_scriptTag$jscomp$1$$) {
    _.$user$$module$src$log$$().error("getJsonLd", "Failed to parse ld+json. Is it valid JSON?", $root$jscomp$72_scriptTag$jscomp$1$$);
  }) || null : null;
}, $buildArticleFromJson_$$module$extensions$amp_story$0_1$related_articles$$ = function($articleJson$$) {
  if (!$articleJson$$.title || !$articleJson$$.url) {
    return _.$user$$module$src$log$$().error("amp-story", "Articles must contain `title` and `url` fields, skipping invalid."), null;
  }
  var $article$jscomp$1_articleUrl$$ = $articleJson$$.url;
  try {
    var $domain$jscomp$16$$ = _.$parseUrlDeprecated$$module$src$url$$(_.$getSourceOrigin$$module$src$url$$($article$jscomp$1_articleUrl$$)).hostname;
  } catch ($e$290$$) {
    $domain$jscomp$16$$ = _.$parseUrlDeprecated$$module$src$url$$($article$jscomp$1_articleUrl$$).hostname;
  }
  $article$jscomp$1_articleUrl$$ = {title:$articleJson$$.title, url:$article$jscomp$1_articleUrl$$, $domainName$:$domain$jscomp$16$$};
  $articleJson$$.image && ($article$jscomp$1_articleUrl$$.$image$ = $articleJson$$.image);
  return $article$jscomp$1_articleUrl$$;
}, $relatedArticlesFromJson$$module$extensions$amp_story$0_1$related_articles$$ = function($opt_articleSetsResponse$$) {
  return Object.keys($opt_articleSetsResponse$$ || {}).map(function($headingKey$$) {
    var $articleSet$$ = {$articles$:$opt_articleSetsResponse$$[$headingKey$$].map($buildArticleFromJson_$$module$extensions$amp_story$0_1$related_articles$$).filter(function($opt_articleSetsResponse$$) {
      return !!$opt_articleSetsResponse$$;
    })};
    $headingKey$$.trim().length && ($articleSet$$.heading = $headingKey$$);
    return $articleSet$$;
  });
}, $parseArticlesToClassicApi$$module$extensions$amp_story$0_1$related_articles$$ = function($articles_bookendComponents$$) {
  var $articleSet$jscomp$1$$ = {$articles$:[]};
  $articles_bookendComponents$$.forEach(function($articles_bookendComponents$$) {
    "small" == $articles_bookendComponents$$.type ? $articleSet$jscomp$1$$.$articles$.push($buildArticleFromJson_$$module$extensions$amp_story$0_1$related_articles$$($articles_bookendComponents$$)) : $NEW_COMPONENTS$$module$extensions$amp_story$0_1$related_articles$$.includes($articles_bookendComponents$$.type) ? _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-story", $articles_bookendComponents$$.type + " is not supported in amp-story-0.1, upgrade to v1.0 to use this feature.") : 
    _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-story", $articles_bookendComponents$$.type + " is not valid, skipping invalid.");
  });
  $articles_bookendComponents$$ = [];
  $articles_bookendComponents$$.push($articleSet$jscomp$1$$);
  return $articles_bookendComponents$$;
}, $timeStrToMillis$$module$extensions$amp_story$0_1$utils$$ = function($match$jscomp$38_time$jscomp$35$$) {
  $match$jscomp$38_time$jscomp$35$$ = $match$jscomp$38_time$jscomp$35$$.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
  if (!$match$jscomp$38_time$jscomp$35$$) {
    return window.NaN;
  }
  var $num$jscomp$23$$ = $match$jscomp$38_time$jscomp$35$$[1];
  return "s" == $match$jscomp$38_time$jscomp$35$$[2] ? 1000 * (0,window.parseFloat)($num$jscomp$23$$) : (0,window.parseInt)($num$jscomp$23$$, 10);
}, $unscaledClientRect$$module$extensions$amp_story$0_1$utils$$ = function($el$jscomp$94_scaleFactorY$$) {
  var $$jscomp$destructuring$var500$$ = $el$jscomp$94_scaleFactorY$$.getBoundingClientRect(), $width$jscomp$59$$ = $$jscomp$destructuring$var500$$.width, $height$jscomp$57$$ = $$jscomp$destructuring$var500$$.height, $scaleFactorX$$ = 0 == $width$jscomp$59$$ ? 1 : $width$jscomp$59$$ / $el$jscomp$94_scaleFactorY$$.offsetWidth;
  $el$jscomp$94_scaleFactorY$$ = 0 == $height$jscomp$57$$ ? 1 : $height$jscomp$57$$ / $el$jscomp$94_scaleFactorY$$.offsetHeight;
  return {left:$$jscomp$destructuring$var500$$.left / $scaleFactorX$$, top:$$jscomp$destructuring$var500$$.top / $el$jscomp$94_scaleFactorY$$, width:$width$jscomp$59$$ / $scaleFactorX$$, height:$height$jscomp$57$$ / $el$jscomp$94_scaleFactorY$$};
}, $ampMediaElementFor$$module$extensions$amp_story$0_1$utils$$ = function($el$jscomp$95$$) {
  return _.$closestBySelector$$module$src$dom$$($el$jscomp$95$$, "amp-video, amp-audio");
}, $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$ = function($container$jscomp$30_shadowRoot$jscomp$20$$, $element$jscomp$552$$, $css$jscomp$11$$) {
  $container$jscomp$30_shadowRoot$jscomp$20$$ = _.$createShadowRoot$$module$src$shadow_embed$$($container$jscomp$30_shadowRoot$jscomp$20$$);
  var $style$jscomp$25$$ = window.self.document.createElement("style");
  $style$jscomp$25$$.textContent = $css$jscomp$11$$;
  $container$jscomp$30_shadowRoot$jscomp$20$$.appendChild($style$jscomp$25$$);
  $container$jscomp$30_shadowRoot$jscomp$20$$.appendChild($element$jscomp$552$$);
}, $getTextColorForRGB$$module$extensions$amp_story$0_1$utils$$ = function($rgb$$) {
  function $getLinearRGBValue$$($rgb$$) {
    $rgb$$ /= 255;
    return 0.03928 >= $rgb$$ ? $rgb$$ / 12.92 : Math.pow(($rgb$$ + 0.055) / 1.055, 2.4);
  }
  return 0.179 < 0.2126 * $getLinearRGBValue$$($rgb$$.r) + 0.7152 * $getLinearRGBValue$$($rgb$$.g) + 0.0722 * $getLinearRGBValue$$($rgb$$.b) ? "#000" : "#FFF";
}, $buildArticlesContainerTemplate$$module$extensions$amp_story$0_1$amp_story_bookend$$ = function($articleSets$$) {
  var $template$jscomp$32$$ = [];
  $articleSets$$.forEach(function($articleSets$$) {
    $articleSets$$.heading && $template$jscomp$32$$.push({tag:"h3", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-heading"}), $unlocalizedString$:$articleSets$$.heading});
    $template$jscomp$32$$.push({tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-set"}), children:$articleSets$$.$articles$.map(function($articleSets$$) {
      var $template$jscomp$32$$ = {tag:"a", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article", href:$articleSets$$.url, target:"_top"}), children:[{tag:"h2", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-heading"}), $unlocalizedString$:$articleSets$$.title}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-meta"}), $unlocalizedString$:$articleSets$$.$domainName$}]};
      $articleSets$$.$image$ && $template$jscomp$32$$.children.unshift({tag:"amp-img", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-image", src:$articleSets$$.$image$, width:100, height:100})});
      return $template$jscomp$32$$;
    })});
  });
  return $template$jscomp$32$$;
}, $Bookend$$module$extensions$amp_story$0_1$amp_story_bookend$$ = function($win$jscomp$377$$, $parentEl$$) {
  this.$D$ = $win$jscomp$377$$;
  this.$I$ = this.$isBuilt_$ = !1;
  this.$bookendEl_$ = this.$G$ = this.$replayButton_$ = null;
  this.$requestService_$ = _.$getService$$module$src$service$$(this.$D$, "story-request-v01");
  this.$shareWidget_$ = new $ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$(this.$D$);
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$D$);
  this.$F$ = $parentEl$$;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$D$);
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$bookendEl_$.addEventListener("click", function($event$jscomp$190$$) {
    var $target$jscomp$inline_4121$$ = $event$jscomp$190$$.target;
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$elementOutsideUsableArea_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$, $target$jscomp$inline_4121$$) ? ($event$jscomp$190$$.stopPropagation(), $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$storeService_$, 
    "togglebookend", !1)) : $target$jscomp$inline_4121$$.hasAttribute("on") && _.$Services$$module$src$services$actionServiceForDoc$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$F$).$trigger$($target$jscomp$inline_4121$$, "tap", $event$jscomp$190$$, 100);
  });
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$replayButton_$.addEventListener("click", function($event$jscomp$191$$) {
    $event$jscomp$191$$.stopPropagation();
    $dispatch$$module$extensions$amp_story$0_1$events$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$G$, "ampstory:replay");
  });
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$bookendEl_$.firstElementChild.addEventListener("scroll", _.$throttle$$module$src$utils$rate_limit$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$D$, function() {
    return $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$);
  }, 100));
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$D$.addEventListener("keyup", function($event$jscomp$192$$) {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$isActive_$() && "Escape" == $event$jscomp$192$$.key && ($event$jscomp$192$$.preventDefault(), $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$storeService_$, "togglebookend", 
    !1));
  });
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$storeService_$.subscribe("bookendstate", function($isActive$jscomp$2$$) {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$toggle_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$, $isActive$jscomp$2$$);
  });
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$storeService_$.subscribe("canshowsharinguis", function($show$jscomp$5$$) {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onCanShowSharingUisUpdate_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$, $show$jscomp$5$$);
  }, !0);
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$.$storeService_$.subscribe("desktopstate", function($isDesktop$$) {
    $JSCompiler_StaticMethods_toggleDesktopAttribute_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$self$$, $isDesktop$$);
  }, !0);
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onCanShowSharingUisUpdate_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onCanShowSharingUisUpdate_$self$$, $canShowSharingUis$$) {
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onCanShowSharingUisUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onCanShowSharingUisUpdate_$self$$.$bookendEl_$.classList.toggle("i-amphtml-story-no-sharing", !$canShowSharingUis$$);
  });
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$, $applyConfig$$) {
  $applyConfig$$ = void 0 === $applyConfig$$ ? !0 : $applyConfig$$;
  return void 0 !== $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$ ? ($applyConfig$$ && $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$ && $JSCompiler_StaticMethods_setConfig_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$), 
  window.Promise.resolve($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$)) : $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$requestService_$.$F$().then(function($response$jscomp$60$$) {
    if (!$response$jscomp$60$$) {
      return null;
    }
    $response$jscomp$60$$["bookend-version"] && _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("AMP-STORY-BOOKEND", "`bookend-version` and `share-providers` keys in the bookend config are deprecated, please `bookendVersion` and `shareProviders` keys");
    "v1.0" === ($response$jscomp$60$$["bookend-version"] || $response$jscomp$60$$.bookendVersion || null) ? $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$ = {$shareProviders$:$JSCompiler_StaticMethods_parseProvidersToClassicApi$$($response$jscomp$60$$.shareProviders || $response$jscomp$60$$["share-providers"]), $relatedArticles$:$parseArticlesToClassicApi$$module$extensions$amp_story$0_1$related_articles$$($response$jscomp$60$$.components)} : 
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$ = {$shareProviders$:$response$jscomp$60$$["share-providers"], $relatedArticles$:$relatedArticlesFromJson$$module$extensions$amp_story$0_1$related_articles$$($response$jscomp$60$$["related-articles"])};
    $applyConfig$$ && $JSCompiler_StaticMethods_setConfig_$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$);
    return $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.$config_$;
  }).catch(function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$) {
    _.$user$$module$src$log$$().error("amp-story", "Error fetching bookend configuration", $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$self$$.message);
    return null;
  });
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$elementOutsideUsableArea_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$elementOutsideUsableArea_$self$$, $el$jscomp$96$$) {
  return !_.$closest$$module$src$dom$$($el$jscomp$96$$, function($el$jscomp$96$$) {
    return $el$jscomp$96$$ == $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$elementOutsideUsableArea_$self$$.$bookendEl_$.firstElementChild.firstElementChild;
  });
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$self$$) {
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$self$$.$isActive_$() && _.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$self$$.$vsync_$, {measure:function($state$jscomp$82$$) {
    $state$jscomp$82$$.$shouldBeFullBleed$ = 88 <= $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$self$$.$bookendEl_$.firstElementChild.scrollTop;
  }, $mutate$:function($state$jscomp$83$$) {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$onScroll_$self$$.$bookendEl_$.classList.toggle("i-amphtml-story-bookend-fullbleed", $state$jscomp$83$$.$shouldBeFullBleed$);
  }}, {});
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$toggle_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$toggle_$self$$, $show$jscomp$6$$) {
  $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$toggle_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$toggle_$self$$.$bookendEl_$.classList.toggle("i-amphtml-hidden", !$show$jscomp$6$$);
  });
}, $JSCompiler_StaticMethods_toggleDesktopAttribute_$$ = function($JSCompiler_StaticMethods_toggleDesktopAttribute_$self$$, $isDesktop$jscomp$2$$) {
  $JSCompiler_StaticMethods_toggleDesktopAttribute_$self$$.$vsync_$.$mutate$(function() {
    $isDesktop$jscomp$2$$ ? $JSCompiler_StaticMethods_toggleDesktopAttribute_$self$$.$bookendEl_$.setAttribute("desktop", "") : $JSCompiler_StaticMethods_toggleDesktopAttribute_$self$$.$bookendEl_$.removeAttribute("desktop");
  });
}, $JSCompiler_StaticMethods_setConfig_$$ = function($JSCompiler_StaticMethods_setConfig_$self$$, $bookendConfig$$) {
  $JSCompiler_StaticMethods_setConfig_$self$$.$I$ || ($JSCompiler_StaticMethods_setConfig_$self$$.$I$ = !0, $JSCompiler_StaticMethods_setRelatedArticles_$$($JSCompiler_StaticMethods_setConfig_$self$$, $bookendConfig$$.$relatedArticles$));
}, $JSCompiler_StaticMethods_setRelatedArticles_$$ = function($JSCompiler_StaticMethods_setRelatedArticles_$self$$, $articleSets$jscomp$1$$) {
  $JSCompiler_StaticMethods_setRelatedArticles_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_setRelatedArticles_$self$$.$bookendEl_$.firstElementChild.firstElementChild.appendChild($renderSimpleTemplate$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_setRelatedArticles_$self$$.$D$.document, $buildArticlesContainerTemplate$$module$extensions$amp_story$0_1$amp_story_bookend$$($articleSets$jscomp$1$$)));
  });
}, $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$$ = function($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$self$$) {
  var $JSCompiler_object_inline_domainName_6824_ampdoc$jscomp$inline_4136$$ = _.$getAmpdoc$$module$src$service$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$self$$.$F$), $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ = $getJsonLd$$module$extensions$amp_story$0_1$jsonld$$($JSCompiler_object_inline_domainName_6824_ampdoc$jscomp$inline_4136$$.getRootNode()), $JSCompiler_object_inline_title_6823$$ = $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ && 
  $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$.headline ? $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$.headline : _.$JSCompiler_StaticMethods_assertElement$$(_.$user$$module$src$log$$(), $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$self$$.$D$.document.head.querySelector("title"), "Please set <title> or structured data (JSON-LD).").textContent;
  $JSCompiler_object_inline_domainName_6824_ampdoc$jscomp$inline_4136$$ = _.$parseUrlDeprecated$$module$src$url$$(_.$Services$$module$src$services$documentInfoForDoc$$($JSCompiler_object_inline_domainName_6824_ampdoc$jscomp$inline_4136$$).canonicalUrl).hostname;
  var $JSCompiler_object_inline_imageUrl_6825$$;
  $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ && _.$isArray$$module$src$types$$($jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$.image) && $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$.image.length && ($JSCompiler_object_inline_imageUrl_6825$$ = $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$.image[0]);
  $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ = $JSCompiler_object_inline_imageUrl_6825$$;
  return $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$self$$.$D$.document, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-replay"}), children:[$jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ ? {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-replay-image", style:"background-image: url(" + 
  $jsonLd$jscomp$inline_4137_opt_imageUrl$jscomp$inline_4142$$ + ") !important"}), children:[$REPLAY_ICON_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_bookend$$]} : $REPLAY_ICON_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_bookend$$, {tag:"h2", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-heading"}), $unlocalizedString$:$JSCompiler_object_inline_title_6823$$}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-article-meta"}), 
  $unlocalizedString$:$JSCompiler_object_inline_domainName_6824_ampdoc$jscomp$inline_4136$$}]});
}, $getTemplate$$module$extensions$amp_story$0_1$amp_story_consent$$ = function($config$jscomp$81$$, $consentId$jscomp$4$$, $logoSrc$$) {
  return {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent i-amphtml-story-system-reset"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-overflow"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-container"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-header"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-logo", 
  style:$logoSrc$$ ? "background-image: url('" + $logoSrc$$ + "') !important;" : ""}), children:[]}]}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-content"}), children:[{tag:"h3", $attrs$:_.$dict$$module$src$utils$object$$({}), children:[], $unlocalizedString$:$config$jscomp$81$$.title}, {tag:"p", $attrs$:_.$dict$$module$src$utils$object$$({}), children:[], $unlocalizedString$:$config$jscomp$81$$.message}, {tag:"ul", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-vendors"}), 
  children:$config$jscomp$81$$.$vendors$ && $config$jscomp$81$$.$vendors$.map(function($config$jscomp$81$$) {
    return {tag:"li", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-vendor"}), children:[], $unlocalizedString$:$config$jscomp$81$$};
  })}, {tag:"a", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-external-link " + ($config$jscomp$81$$.$externalLink$.title && $config$jscomp$81$$.$externalLink$.href ? "" : "i-amphtml-hidden"), href:$config$jscomp$81$$.$externalLink$.href, target:"_top", title:$config$jscomp$81$$.$externalLink$.title}), children:[], $unlocalizedString$:$config$jscomp$81$$.$externalLink$.title}]}]}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-actions"}), 
  children:[{tag:"button", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-action i-amphtml-story-consent-action-reject" + (!0 === $config$jscomp$81$$.$onlyAccept$ ? " i-amphtml-hidden" : ""), on:"tap:" + $consentId$jscomp$4$$ + ".reject"}), children:[], $localizedStringId$:"23"}, {tag:"button", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-consent-action i-amphtml-story-consent-action-accept", on:"tap:" + $consentId$jscomp$4$$ + ".accept"}), children:[], 
  $localizedStringId$:"22"}]}]}]};
}, $AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent$$ = function($$jscomp$super$this$jscomp$98_element$jscomp$553$$) {
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$ = window.AMP.BaseElement.call(this, $$jscomp$super$this$jscomp$98_element$jscomp$553$$) || this;
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$.$actions_$ = _.$Services$$module$src$services$actionServiceForDoc$$($$jscomp$super$this$jscomp$98_element$jscomp$553$$.element);
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$.$scrollableEl_$ = null;
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$($$jscomp$super$this$jscomp$98_element$jscomp$553$$.$win$);
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$.$storyConsentConfig_$ = null;
  $$jscomp$super$this$jscomp$98_element$jscomp$553$$.$storyConsentEl_$ = null;
  return $$jscomp$super$this$jscomp$98_element$jscomp$553$$;
}, $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$storyConsentEl_$.addEventListener("click", function($event$jscomp$195$$) {
    $event$jscomp$195$$.target && $event$jscomp$195$$.target.hasAttribute("on") && $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$actions_$.$trigger$($event$jscomp$195$$.target, "tap", $event$jscomp$195$$, 100);
  }, !0);
  $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$scrollableEl_$ = $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$storyConsentEl_$.querySelector(".i-amphtml-story-consent-overflow");
  $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$scrollableEl_$.addEventListener("scroll", _.$throttle$$module$src$utils$rate_limit$$($JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$.$win$, function() {
    return $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$$($JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$self$$);
  }, 100));
}, $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$$ = function($JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$self$$) {
  var $isFullBleed$$;
  $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$self$$.element.$getResources$().$measureMutateElement$($JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$self$$.$storyConsentEl_$, function() {
    return $isFullBleed$$ = 88 < $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$self$$.$scrollableEl_$.scrollTop;
  }, function() {
    $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$onScroll_$self$$.$storyConsentEl_$.classList.toggle("i-amphtml-story-consent-fullbleed", $isFullBleed$$);
  });
}, $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$ = function($element$jscomp$554$$) {
  return window.AMP.BaseElement.call(this, $element$jscomp$554$$) || this;
}, $AmpStoryCtaLayer$$module$extensions$amp_story$0_1$amp_story_cta_layer$$ = function($var_args$jscomp$84$$) {
  return $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.apply(this, arguments) || this;
}, $AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$ = function($$jscomp$super$this$jscomp$99_element$jscomp$555$$) {
  $$jscomp$super$this$jscomp$99_element$jscomp$555$$ = $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.call(this, $$jscomp$super$this$jscomp$99_element$jscomp$555$$) || this;
  $$jscomp$super$this$jscomp$99_element$jscomp$555$$.$prerenderAllowed_$ = !1;
  return $$jscomp$super$this$jscomp$99_element$jscomp$555$$;
}, $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$$ = function($JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$) {
  $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$ = _.$scopedQuerySelectorAll$$module$src$dom$$($JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$.element, $SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR$$module$extensions$amp_story$0_1$amp_story_grid_layer$$);
  Array.prototype.forEach.call($JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$, function($JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$) {
    $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setCssGridStyles_$$($JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$self_elementsToUpgradeStyles$$);
  });
}, $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setCssGridStyles_$$ = function($element$jscomp$557$$) {
  for (var $styles$jscomp$7$$ = {}, $i$292$$ = $element$jscomp$557$$.attributes.length - 1; 0 <= $i$292$$; $i$292$$--) {
    var $attribute$jscomp$8$$ = $element$jscomp$557$$.attributes[$i$292$$], $attributeName$jscomp$4$$ = $attribute$jscomp$8$$.name.toLowerCase(), $propertyName$jscomp$16$$ = $SUPPORTED_CSS_GRID_ATTRIBUTES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$[$attributeName$jscomp$4$$];
    $propertyName$jscomp$16$$ && ($styles$jscomp$7$$[$propertyName$jscomp$16$$] = $attribute$jscomp$8$$.value, $element$jscomp$557$$.removeAttribute($attributeName$jscomp$4$$));
  }
  _.$setStyles$$module$src$style$$($element$jscomp$557$$, _.$assertDoesNotContainDisplay$$module$src$style$$($styles$jscomp$7$$));
}, $AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint$$ = function($win$jscomp$378$$, $parentEl$jscomp$1$$) {
  this.$G$ = $win$jscomp$378$$;
  this.$isBuilt_$ = !1;
  this.$document_$ = this.$G$.document;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$G$);
  this.$timer_$ = _.$Services$$module$src$services$timerFor$$(this.$G$);
  this.$F$ = this.$D$ = null;
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$G$);
  this.$I$ = $parentEl$jscomp$1$$;
}, $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$$ = function($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$, $hintClass$$) {
  $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$storeService_$.get("desktopstate") || ($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$build$(), $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$D$.classList.toggle("show-navigation-overlay", "show-navigation-overlay" == $hintClass$$);
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$D$.classList.toggle("show-first-page-overlay", "show-first-page-overlay" == $hintClass$$);
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$.$D$.classList.remove("i-amphtml-hidden");
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$$($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$self$$, "show-navigation-overlay" == $hintClass$$ ? 3000 : 275);
  }));
}, $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$$ = function($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$self$$, $timeout$jscomp$16$$) {
  $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$self$$.$F$ = $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$self$$.$timer_$.delay(function() {
    return $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$$($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAfterTimeout$self$$);
  }, $timeout$jscomp$16$$);
}, $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$$ = function($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$self$$) {
  $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$self$$.$isBuilt_$ && $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$self$$.$D$.classList.add("i-amphtml-hidden");
  });
}, $InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog$$ = function($win$jscomp$379$$, $parentEl$jscomp$2$$) {
  this.$I$ = $win$jscomp$379$$;
  this.$J$ = this.$element_$ = null;
  this.$isBuilt_$ = !1;
  this.$localizationService_$ = _.$getService$$module$src$service$$(this.$I$, "localization-v01");
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$I$);
  this.$F$ = $parentEl$jscomp$2$$;
  this.$G$ = _.$Services$$module$src$services$resourcesForDoc$$(_.$getAmpdoc$$module$src$service$$(this.$I$.document));
  this.$D$ = null;
  this.$viewer_$ = _.$Services$$module$src$services$viewerForDoc$$(this.$F$);
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$self$$.$storeService_$.subscribe("infodialogstate", function($isOpen$$) {
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$self$$, $isOpen$$);
  });
  $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$self$$.$element_$.addEventListener("click", function($event$jscomp$197$$) {
    return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$self$$, $event$jscomp$197$$);
  });
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$self$$, $isOpen$jscomp$1$$) {
  $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$self$$.$G$.$mutateElement$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$self$$.$element_$, function() {
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogStateUpdated_$self$$.$element_$.classList.toggle("i-amphtml-story-info-dialog-visible", $isOpen$jscomp$1$$);
  });
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$self$$, $event$jscomp$198$$) {
  _.$closest$$module$src$dom$$($event$jscomp$198$$.target, function($event$jscomp$198$$) {
    return $event$jscomp$198$$ === $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$self$$.$J$;
  }, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$self$$.$element_$) || $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$onInfoDialogClick_$self$$.$storeService_$, "toggleinfodialog", !1);
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$) {
  return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$.$viewer_$.$F$ ? _.$JSCompiler_StaticMethods_sendMessageAwaitResponse$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$.$viewer_$, "moreInfoLinkUrl", void 0).then(function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$) {
    return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$ ? _.$parseUrlDeprecated$$module$src$url$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$self$$).href : null;
  }) : window.Promise.resolve();
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$self$$) {
  var $label$jscomp$14$$ = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$self$$.$localizationService_$, "25"), $headingEl$$ = $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$self$$.$element_$.querySelector(".i-amphtml-story-info-heading");
  return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$self$$.$G$.$mutateElement$($headingEl$$, function() {
    $headingEl$$.textContent = $label$jscomp$14$$;
  });
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setPageLink_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setPageLink_$self$$, $pageUrl$jscomp$3$$) {
  var $linkEl$$ = $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setPageLink_$self$$.$element_$.querySelector(".i-amphtml-story-info-link");
  return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setPageLink_$self$$.$G$.$mutateElement$($linkEl$$, function() {
    $linkEl$$.setAttribute("href", $pageUrl$jscomp$3$$);
    $linkEl$$.textContent = $pageUrl$jscomp$3$$.replace(/([/.]+)/gi, "$1\u200b");
  });
}, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$$ = function($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$, $moreInfoUrl$jscomp$2$$) {
  if (!$moreInfoUrl$jscomp$2$$) {
    return window.Promise.resolve();
  }
  $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$ = $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$element_$.querySelector(".i-amphtml-story-info-moreinfo");
  return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$G$.$mutateElement$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$, function() {
    var $label$jscomp$15$$ = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$localizationService_$, "26");
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$.classList.add("i-amphtml-story-info-moreinfo-visible");
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$.setAttribute("href", $moreInfoUrl$jscomp$2$$);
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$.setAttribute("target", "_blank");
    $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$self$$.$D$.textContent = $label$jscomp$15$$;
  });
}, $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($startX$jscomp$2$$, $startY$jscomp$2$$, $endX$$, $endY$$) {
  return [{transform:_.$translate$$module$src$style$$($startX$jscomp$2$$, $startY$jscomp$2$$)}, {transform:_.$translate$$module$src$style$$($endX$$, $endY$$)}];
}, $rotateAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($startX$jscomp$3$$, $direction$jscomp$9$$) {
  return [{transform:_.$translate$$module$src$style$$($startX$jscomp$3$$, 0) + " " + _.$rotate$$module$src$style$$(360 * $direction$jscomp$9$$)}, {transform:_.$translate$$module$src$style$$(0, 0) + " " + _.$rotate$$module$src$style$$(0)}];
}, $whooshIn$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($startX$jscomp$4$$) {
  return [{opacity:0, transform:_.$translate$$module$src$style$$($startX$jscomp$4$$, 0) + " " + _.$scale$$module$src$style$$(0.15)}, {opacity:1, transform:_.$translate$$module$src$style$$(0, 0) + " " + _.$scale$$module$src$style$$(1)}];
}, $calculateTargetScalingFactor$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($dimensions$jscomp$4$$) {
  return $dimensions$jscomp$4$$.$targetWidth$ <= $dimensions$jscomp$4$$.$pageWidth$ || $dimensions$jscomp$4$$.$targetHeight$ <= $dimensions$jscomp$4$$.$pageHeight$ ? 1.25 * Math.max($dimensions$jscomp$4$$.$pageWidth$ > $dimensions$jscomp$4$$.$targetWidth$ ? $dimensions$jscomp$4$$.$pageWidth$ / $dimensions$jscomp$4$$.$targetWidth$ : 1, $dimensions$jscomp$4$$.$pageHeight$ > $dimensions$jscomp$4$$.$targetHeight$ ? $dimensions$jscomp$4$$.$pageHeight$ / $dimensions$jscomp$4$$.$targetHeight$ : 1) : 1;
}, $enlargeKeyFrames$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($keyframes$jscomp$4$$, $scalingFactor$jscomp$1$$) {
  $keyframes$jscomp$4$$.forEach(function($keyframes$jscomp$4$$) {
    $keyframes$jscomp$4$$.transform += " " + _.$scale$$module$src$style$$($scalingFactor$jscomp$1$$);
    $keyframes$jscomp$4$$["transform-origin"] = "left top";
  });
  return $keyframes$jscomp$4$$;
}, $scaleAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$ = function($startX$jscomp$5$$, $startY$jscomp$5$$, $endX$jscomp$3$$, $endY$jscomp$3$$, $scalingFactor$jscomp$2$$) {
  return 1 === $scalingFactor$jscomp$2$$ ? $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$($startX$jscomp$5$$, $startY$jscomp$5$$, $endX$jscomp$3$$, $endY$jscomp$3$$) : $enlargeKeyFrames$$module$extensions$amp_story$0_1$animation_presets_utils$$($translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$($startX$jscomp$5$$, $startY$jscomp$5$$, $endX$jscomp$3$$, $endY$jscomp$3$$), $scalingFactor$jscomp$2$$);
}, $AnimationRunner$$module$extensions$amp_story$0_1$animation$$ = function($page$jscomp$3$$, $animationDef$$, $webAnimationBuilderPromise$$, $vsync$jscomp$5$$, $timer$jscomp$3$$, $sequence$$) {
  var $$jscomp$this$jscomp$889$$ = this;
  this.$U$ = $page$jscomp$3$$;
  this.$timer_$ = $timer$jscomp$3$$;
  this.$vsync_$ = $vsync$jscomp$5$$;
  this.$target_$ = $animationDef$$.target;
  this.$K$ = $sequence$$;
  this.$O$ = $animationDef$$;
  this.$J$ = $animationDef$$.$preset$;
  this.$I$ = $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$filterKeyframes_$$(this, $animationDef$$.$preset$.keyframes);
  this.$P$ = $animationDef$$.delay || this.$J$.delay || 0;
  this.$duration_$ = $animationDef$$.duration || this.$J$.duration || 0;
  this.$runnerPromise_$ = $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$$(this).then(function($page$jscomp$3$$) {
    return $webAnimationBuilderPromise$$.then(function($animationDef$$) {
      return $animationDef$$.$F$($page$jscomp$3$$);
    });
  });
  this.$R$ = this.$I$.then(function($page$jscomp$3$$) {
    return _.$omit$$module$src$utils$object$$($page$jscomp$3$$[0], ["offset"]);
  });
  this.$G$ = this.$D$ = this.$runner_$ = null;
  this.$I$.then(function($page$jscomp$3$$) {
    return !$page$jscomp$3$$[0].offset;
  });
  this.$runnerPromise_$.then(function($page$jscomp$3$$) {
    return $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$$($$jscomp$this$jscomp$889$$, $page$jscomp$3$$);
  });
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$self$$) {
  return _.$JSCompiler_StaticMethods_measurePromise$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$self$$.$vsync_$, function() {
    var $targetRect$$ = $unscaledClientRect$$module$extensions$amp_story$0_1$utils$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$self$$.$target_$), $pageRect$$ = $unscaledClientRect$$module$extensions$amp_story$0_1$utils$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$self$$.$U$);
    return {$pageWidth$:$pageRect$$.width, $pageHeight$:$pageRect$$.height, $targetWidth$:$targetRect$$.width, $targetHeight$:$targetRect$$.height, $targetX$:$targetRect$$.left - $pageRect$$.left, $targetY$:$targetRect$$.top - $pageRect$$.top};
  });
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$filterKeyframes_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$filterKeyframes_$self$$, $keyframesArrayOrFn$$) {
  return Array.isArray($keyframesArrayOrFn$$) ? window.Promise.resolve($keyframesArrayOrFn$$) : $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getDims$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$filterKeyframes_$self$$).then($keyframesArrayOrFn$$);
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$self$$) {
  return $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$self$$.$I$.then(function($keyframes$jscomp$7$$) {
    return {keyframes:$keyframes$jscomp$7$$, target:$JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$self$$.$target_$, duration:$JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$self$$.$duration_$ + "ms", easing:$JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getWebAnimationDef_$self$$.$J$.easing, fill:"forwards"};
  });
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$) {
  if ($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$F$()) {
    return window.Promise.resolve();
  }
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$runner_$ && $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$runner_$.cancel();
  return $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$R$.then(function($firstFrameProps$$) {
    return _.$JSCompiler_StaticMethods_mutatePromise$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$vsync_$, function() {
      _.$setStyles$$module$src$style$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$.$target_$, _.$assertDoesNotContainDisplay$$module$src$style$$($firstFrameProps$$));
    });
  });
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$) {
  var $promise$jscomp$53$$ = window.Promise.resolve();
  if ($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$O$.$startAfterId$) {
    var $startAfterId$$ = $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$O$.$startAfterId$;
    $promise$jscomp$53$$ = $promise$jscomp$53$$.then(function() {
      var $promise$jscomp$53$$ = $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$K$;
      if (!($startAfterId$$ in $promise$jscomp$53$$.$D$)) {
        var $deferred$jscomp$inline_4168$$ = new _.$Deferred$$module$src$utils$promise$$;
        $promise$jscomp$53$$.$D$[$startAfterId$$] = $deferred$jscomp$inline_4168$$.$promise$;
        $promise$jscomp$53$$.$F$[$startAfterId$$] = $deferred$jscomp$inline_4168$$.resolve;
      }
      return $promise$jscomp$53$$.$D$[$startAfterId$$];
    });
  }
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$P$ && ($promise$jscomp$53$$ = $promise$jscomp$53$$.then(function() {
    return $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$timer_$.$promise$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$self$$.$P$);
  }));
  return $promise$jscomp$53$$;
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$self$$, $activity$jscomp$2$$, $opt_wait_wait$jscomp$4$$) {
  $opt_wait_wait$jscomp$4$$ = $opt_wait_wait$jscomp$4$$ || null;
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$self$$.$D$ = $activity$jscomp$2$$;
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$self$$.$G$ = $opt_wait_wait$jscomp$4$$;
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$self$$.$runner_$ && $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$self$$, $activity$jscomp$2$$, $opt_wait_wait$jscomp$4$$);
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$, $activity$jscomp$3$$, $wait$jscomp$5$$) {
  var $runner$jscomp$4$$ = $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$.$runner_$;
  ($wait$jscomp$5$$ || window.Promise.resolve()).then(function() {
    if ($activity$jscomp$3$$ ? $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$.$D$ === $activity$jscomp$3$$ : null !== $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$.$D$) {
      switch($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$.$D$ = null, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$self$$.$G$ = null, $activity$jscomp$3$$) {
        case 0:
          $runner$jscomp$4$$.start();
          break;
        case 1:
          "running" == $runner$jscomp$4$$.$getPlayState$() && $runner$jscomp$4$$.finish();
      }
    }
  });
}, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$$ = function($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$, $runner$jscomp$5$$) {
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$runner_$ = $runner$jscomp$5$$;
  $runner$jscomp$5$$.$onPlayStateChanged$(function($runner$jscomp$5$$) {
    "finished" == $runner$jscomp$5$$ && $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$target_$.id && $JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$K$, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$target_$.id);
  });
  null !== $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$D$ && $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playbackWhenReady_$$($JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$D$, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$onRunnerReady_$self$$.$G$);
}, $AnimationManager$$module$extensions$amp_story$0_1$animation$$ = function($root$jscomp$75$$, $ampdoc$jscomp$202$$) {
  _.$scopedQuerySelector$$module$src$dom$$($root$jscomp$75$$, "[animate-in]");
  this.$F$ = $root$jscomp$75$$;
  this.$ampdoc_$ = $ampdoc$jscomp$202$$;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$ampdoc_$.$win$);
  this.$timer_$ = _.$Services$$module$src$services$timerFor$$(this.$ampdoc_$.$win$);
  this.$G$ = $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$$(this);
  this.$D$ = null;
  this.$I$ = new $AnimationSequence$$module$extensions$amp_story$0_1$animation$$;
}, $AnimationManager$$module$extensions$amp_story$0_1$animation$create$$ = function($root$jscomp$76$$, $ampdoc$jscomp$203$$) {
  return new $AnimationManager$$module$extensions$amp_story$0_1$animation$$($root$jscomp$76$$, $ampdoc$jscomp$203$$);
}, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$$ = function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$) {
  return window.Promise.all($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$).map(function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$) {
    return $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$self$$);
  }));
}, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$$ = function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$self$$) {
  $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$self$$.$D$.forEach(function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$self$$) {
    return $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$self$$.start();
  });
}, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$$ = function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$self$$) {
  $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$self$$.$D$ && $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$self$$.$D$.forEach(function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$self$$) {
    return $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$self$$.cancel();
  });
}, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$$ = function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$) {
  $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$D$ || ($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$D$ = Array.prototype.map.call(_.$scopedQuerySelectorAll$$module$src$dom$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$F$, "[animate-in]"), function($el$jscomp$101$$) {
    var $animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$ = $el$jscomp$101$$.getAttribute("animate-in");
    if (0 <= $FULL_BLEED_ANIMATION_NAMES$$module$extensions$amp_story$0_1$animation_presets$$.indexOf($animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$)) {
      var $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$ = $el$jscomp$101$$.parentElement;
      $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$.classList.contains($GRID_LAYER_TEMPLATE_CLASS_NAMES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$.fill) && $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$.classList.remove($GRID_LAYER_TEMPLATE_CLASS_NAMES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$.fill);
      $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$.classList.add($ANIMATION_CSS_CLASS_NAMES$$module$extensions$amp_story$0_1$animation_presets$$["full-bleed"]);
    }
    $animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$ = {target:$el$jscomp$101$$, $preset$:$PRESETS$$module$extensions$amp_story$0_1$animation_presets$$[$animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$]};
    $el$jscomp$101$$.hasAttribute("animate-in-duration") && ($animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$.duration = $timeStrToMillis$$module$extensions$amp_story$0_1$utils$$($el$jscomp$101$$.getAttribute("animate-in-duration")));
    $el$jscomp$101$$.hasAttribute("animate-in-delay") && ($animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$.delay = $timeStrToMillis$$module$extensions$amp_story$0_1$utils$$($el$jscomp$101$$.getAttribute("animate-in-delay")));
    $el$jscomp$101$$.hasAttribute("animate-in-after") && ($dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$ = $el$jscomp$101$$.getAttribute("animate-in-after"), _.$JSCompiler_StaticMethods_assertElement$$(_.$user$$module$src$log$$(), $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$F$.querySelector("#" + _.$cssEscape$$module$third_party$css_escape$css_escape$$($dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$)), 
    "The attribute 'animate-in-after' in tag " + ("'" + $el$jscomp$101$$.tagName + "' is set to the invalid value ") + ("'" + $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$ + "'. No children of parenting 'amp-story-page' ") + ("exist with id " + $dependencyId$jscomp$inline_6389_parent$jscomp$inline_6383$$ + ".")), $animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$.$startAfterId$ = $el$jscomp$101$$.getAttribute("animate-in-after"));
    return new $AnimationRunner$$module$extensions$amp_story$0_1$animation$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$F$, $animationDef$jscomp$inline_6388_name$jscomp$inline_6382$$, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$G$, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$vsync_$, 
    $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$timer_$, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$I$);
  }));
  return $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$getOrCreateRunners_$self$$.$D$;
}, $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$$ = function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$) {
  return _.$JSCompiler_StaticMethods_installExtensionForDoc$$(_.$Services$$module$src$services$extensionsFor$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$.$ampdoc_$.$win$), $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$.$ampdoc_$, "amp-animation").then(function() {
    return _.$Services$$module$src$services$webAnimationServiceFor$$($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$.$F$);
  }).then(function($JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$) {
    return $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$createAnimationBuilderPromise_$self$$.$createBuilder$();
  });
}, $AnimationSequence$$module$extensions$amp_story$0_1$animation$$ = function() {
  this.$D$ = _.$map$$module$src$utils$object$$();
  this.$F$ = _.$map$$module$src$utils$object$$();
}, $JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$$ = function($JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$self$$, $id$jscomp$91$$) {
  $id$jscomp$91$$ in $JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$self$$.$D$ && ((0,$JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$self$$.$F$[$id$jscomp$91$$])(), delete $JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$self$$.$D$[$id$jscomp$91$$]);
}, $upgradeBackgroundAudio$$module$extensions$amp_story$0_1$audio$$ = function($element$jscomp$559$$) {
  if (!$element$jscomp$559$$.hasAttribute("background-audio")) {
    return null;
  }
  var $audioEl$$ = $element$jscomp$559$$.ownerDocument.createElement("audio"), $audioSrc$$ = $element$jscomp$559$$.getAttribute("background-audio");
  $audioEl$$.setAttribute("src", $audioSrc$$);
  $audioEl$$.setAttribute("preload", "auto");
  $audioEl$$.setAttribute("loop", "");
  $audioEl$$.setAttribute("autoplay", "");
  $audioEl$$.setAttribute("muted", "");
  $audioEl$$.muted = !0;
  $audioEl$$.classList.add("i-amphtml-story-background-audio");
  $element$jscomp$559$$.appendChild($audioEl$$);
  return $audioEl$$;
}, $LoadingSpinner$$module$extensions$amp_story$0_1$loading_spinner$$ = function($doc$jscomp$121$$) {
  this.$doc_$ = $doc$jscomp$121$$;
  this.$D$ = null;
  this.$isActive_$ = !1;
}, $getPosterFromVideo$$module$extensions$amp_story$0_1$logging$$ = function($el$jscomp$105$$) {
  return new window.Promise(function($resolve$jscomp$64$$, $reject$jscomp$26$$) {
    var $poster$jscomp$1$$ = new window.Image;
    $poster$jscomp$1$$.onload = function() {
      return $resolve$jscomp$64$$($poster$jscomp$1$$);
    };
    $poster$jscomp$1$$.onerror = $reject$jscomp$26$$;
    $poster$jscomp$1$$.src = $el$jscomp$105$$.getAttribute("poster");
  });
}, $getLogEntry$$module$extensions$amp_story$0_1$logging$$ = function($rootElement$jscomp$10$$, $logType$jscomp$1$$, $element$jscomp$560$$) {
  var $predicate$jscomp$3$$ = $logType$jscomp$1$$.$predicate$ || function() {
    return !1;
  };
  return _.$tryResolve$$module$src$utils$promise$$(function() {
    return $predicate$jscomp$3$$($element$jscomp$560$$);
  }).then(function($predicate$jscomp$3$$) {
    return new window.Promise(function($conforms$$) {
      $conforms$$(_.$dict$$module$src$utils$object$$({rootElement:$rootElement$jscomp$10$$, element:$element$jscomp$560$$, conforms:$predicate$jscomp$3$$, level:$logType$jscomp$1$$.level, message:$logType$jscomp$1$$.message, moreInfo:$logType$jscomp$1$$.$moreInfo$}));
    });
  });
}, $getLogEntriesForType$$module$extensions$amp_story$0_1$logging$$ = function($rootElement$jscomp$11$$, $logType$jscomp$2$$) {
  var $precondition$$ = $logType$jscomp$2$$.$precondition$ || function() {
    return !0;
  };
  return ($logType$jscomp$2$$.selector ? [].slice.call(_.$scopedQuerySelectorAll$$module$src$dom$$($rootElement$jscomp$11$$, $logType$jscomp$2$$.selector)) : [$rootElement$jscomp$11$$]).filter($precondition$$).map($getLogEntry$$module$extensions$amp_story$0_1$logging$$.bind(null, $rootElement$jscomp$11$$, $logType$jscomp$2$$));
}, $logEntryCompareFn$$module$extensions$amp_story$0_1$logging$$ = function($logEntryA$$, $logEntryB$$) {
  return $logEntryA$$.$conforms$ == $logEntryB$$.$conforms$ ? $logEntryA$$.level <= $logEntryB$$.level ? -1 : 1 : $logEntryA$$.$conforms$ < $logEntryB$$.$conforms$ ? -1 : 1;
}, $getLogEntries$$module$extensions$amp_story$0_1$logging$$ = function($rootElement$jscomp$12$$) {
  var $logEntryPromises$$ = Object.keys($LogType$$module$extensions$amp_story$0_1$logging$$).reduce(function($logEntryPromises$$, $key$jscomp$146_newEntries$$) {
    $key$jscomp$146_newEntries$$ = $getLogEntriesForType$$module$extensions$amp_story$0_1$logging$$($rootElement$jscomp$12$$, $LogType$$module$extensions$amp_story$0_1$logging$$[$key$jscomp$146_newEntries$$]);
    return $logEntryPromises$$.concat($key$jscomp$146_newEntries$$);
  }, []);
  return window.Promise.all($logEntryPromises$$).then(function($rootElement$jscomp$12$$) {
    return $rootElement$jscomp$12$$.sort($logEntryCompareFn$$module$extensions$amp_story$0_1$logging$$);
  });
}, $Sources$$module$extensions$amp_story$0_1$sources$$ = function($opt_srcAttr$$, $opt_srcEls$$, $opt_trackEls$$) {
  this.$D$ = $opt_srcAttr$$ && $opt_srcAttr$$.length ? $opt_srcAttr$$ : null;
  this.$G$ = $opt_srcEls$$ || [];
  this.$F$ = $opt_trackEls$$ || [];
}, $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$$ = function($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$, $element$jscomp$561$$) {
  Array.prototype.forEach.call($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.$F$, function($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$) {
    var $trackEl$$ = window.document.createElement("track");
    $trackEl$$.id = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.id;
    $trackEl$$.kind = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.kind;
    $trackEl$$.label = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.label;
    $trackEl$$.srclang = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.srclang;
    $trackEl$$.default = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.default;
    $trackEl$$.src = $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$self$$.src;
    $trackEl$$.addEventListener("load", function() {
      $trackEl$$.mode = "showing";
      $element$jscomp$561$$.textTracks[0].mode = "showing";
    });
    $element$jscomp$561$$.appendChild($trackEl$$);
  });
}, $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$$ = function($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$, $element$jscomp$562$$) {
  $Sources$$module$extensions$amp_story$0_1$sources$removeFrom$$($element$jscomp$562$$);
  $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$.$D$ ? $element$jscomp$562$$.setAttribute("src", $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$.$D$) : $element$jscomp$562$$.removeAttribute("src");
  Array.prototype.forEach.call($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$.$G$, function($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$) {
    return $element$jscomp$562$$.appendChild($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$);
  });
  if (0 < $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$.$F$.length) {
    if (1 <= $element$jscomp$562$$.readyState) {
      $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$$($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$, $element$jscomp$562$$);
    } else {
      var $addTracksHandler$$ = function() {
        $element$jscomp$562$$.removeEventListener("loadedmetadata", $addTracksHandler$$);
        $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyTracksToElement_$$($JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$self$$, $element$jscomp$562$$);
      };
      $element$jscomp$562$$.addEventListener("loadedmetadata", $addTracksHandler$$);
    }
  }
}, $Sources$$module$extensions$amp_story$0_1$sources$removeFrom$$ = function($element$jscomp$563_srcAttr$jscomp$1$$) {
  var $elementToUse$jscomp$1_trackEls$$ = $ampMediaElementFor$$module$extensions$amp_story$0_1$utils$$($element$jscomp$563_srcAttr$jscomp$1$$) || $element$jscomp$563_srcAttr$jscomp$1$$;
  $element$jscomp$563_srcAttr$jscomp$1$$ = $elementToUse$jscomp$1_trackEls$$.getAttribute("src");
  $elementToUse$jscomp$1_trackEls$$.removeAttribute("src");
  var $srcEls$$ = $elementToUse$jscomp$1_trackEls$$.querySelectorAll("source");
  Array.prototype.forEach.call($srcEls$$, function($element$jscomp$563_srcAttr$jscomp$1$$) {
    return _.$removeElement$$module$src$dom$$($element$jscomp$563_srcAttr$jscomp$1$$);
  });
  $elementToUse$jscomp$1_trackEls$$ = $elementToUse$jscomp$1_trackEls$$.querySelectorAll("track");
  Array.prototype.forEach.call($elementToUse$jscomp$1_trackEls$$, function($element$jscomp$563_srcAttr$jscomp$1$$) {
    return _.$removeElement$$module$src$dom$$($element$jscomp$563_srcAttr$jscomp$1$$);
  });
  return new $Sources$$module$extensions$amp_story$0_1$sources$$($element$jscomp$563_srcAttr$jscomp$1$$, $srcEls$$, $elementToUse$jscomp$1_trackEls$$);
}, $copyCssClasses$$module$extensions$amp_story$0_1$media_tasks$$ = function($fromEl$$, $toEl$$) {
  for (var $i$293_i$294$$ = $toEl$$.classList.length - 1; 0 <= $i$293_i$294$$; $i$293_i$294$$--) {
    var $cssClass$295_cssClass$jscomp$2$$ = $toEl$$.classList.item($i$293_i$294$$);
    0 <= $PROTECTED_CSS_CLASS_NAMES$$module$extensions$amp_story$0_1$media_tasks$$.indexOf($cssClass$295_cssClass$jscomp$2$$) || $toEl$$.classList.remove($cssClass$295_cssClass$jscomp$2$$);
  }
  for ($i$293_i$294$$ = 0; $i$293_i$294$$ < $fromEl$$.classList.length; $i$293_i$294$$++) {
    $cssClass$295_cssClass$jscomp$2$$ = $fromEl$$.classList.item($i$293_i$294$$), 0 <= $PROTECTED_CSS_CLASS_NAMES$$module$extensions$amp_story$0_1$media_tasks$$.indexOf($cssClass$295_cssClass$jscomp$2$$) || $toEl$$.classList.add($cssClass$295_cssClass$jscomp$2$$);
  }
}, $copyAttributes$$module$extensions$amp_story$0_1$media_tasks$$ = function($fromAttributes_fromEl$jscomp$1$$, $toEl$jscomp$1$$) {
  $fromAttributes_fromEl$jscomp$1$$ = $fromAttributes_fromEl$jscomp$1$$.attributes;
  for (var $i$297_toAttributes$$ = $toEl$jscomp$1$$.attributes, $attributeName$298_i$296$$ = $i$297_toAttributes$$.length - 1; 0 <= $attributeName$298_i$296$$; $attributeName$298_i$296$$--) {
    var $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$ = $i$297_toAttributes$$[$attributeName$298_i$296$$].name;
    0 <= $PROTECTED_ATTRIBUTES$$module$extensions$amp_story$0_1$media_tasks$$.indexOf($$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$) || $toEl$jscomp$1$$.removeAttribute($$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$);
  }
  for ($i$297_toAttributes$$ = 0; $i$297_toAttributes$$ < $fromAttributes_fromEl$jscomp$1$$.length; $i$297_toAttributes$$++) {
    $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$ = $fromAttributes_fromEl$jscomp$1$$[$i$297_toAttributes$$], $attributeName$298_i$296$$ = $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$.name, $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$ = $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$.value, 0 <= $PROTECTED_ATTRIBUTES$$module$extensions$amp_story$0_1$media_tasks$$.indexOf($attributeName$298_i$296$$) || 
    $toEl$jscomp$1$$.setAttribute($attributeName$298_i$296$$, $$jscomp$destructuring$var502_attributeName$jscomp$6_attributeValue$$);
  }
}, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  var $deferred$jscomp$58$$ = new _.$Deferred$$module$src$utils$promise$$;
  this.$I$ = $deferred$jscomp$58$$.$promise$;
  this.$J$ = $deferred$jscomp$58$$.resolve;
  this.$G$ = $deferred$jscomp$58$$.reject;
}, $PlayTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "play");
}, $PauseTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "pause");
}, $UnmuteTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "unmute");
}, $MuteTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "mute");
}, $RewindTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "rewind");
}, $LoadTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "load");
}, $BlessTask$$module$extensions$amp_story$0_1$media_tasks$$ = function() {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "bless");
}, $UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$ = function($newSources$$) {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "update-src");
  this.$F$ = $newSources$$;
}, $SwapIntoDomTask$$module$extensions$amp_story$0_1$media_tasks$$ = function($replacedMediaEl$$) {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "swap-into-dom");
  this.$F$ = $replacedMediaEl$$;
}, $SwapOutOfDomTask$$module$extensions$amp_story$0_1$media_tasks$$ = function($placeholderMediaEl$$) {
  $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.call(this, "swap-out-of-dom");
  this.$F$ = $placeholderMediaEl$$;
}, $MediaPool$$module$extensions$amp_story$0_1$media_pool$$ = function($$jscomp$compprop71_win$jscomp$380$$, $maxCounts$$, $distanceFn$$) {
  var $$jscomp$this$jscomp$899$$ = this;
  this.$O$ = $$jscomp$compprop71_win$jscomp$380$$;
  this.$timer_$ = _.$Services$$module$src$services$timerFor$$($$jscomp$compprop71_win$jscomp$380$$);
  this.$G$ = $distanceFn$$;
  this.$D$ = {};
  this.$F$ = {};
  this.$I$ = {};
  this.$J$ = {};
  this.$P$ = 0;
  this.$K$ = !1;
  $$jscomp$compprop71_win$jscomp$380$$ = {};
  this.$R$ = ($$jscomp$compprop71_win$jscomp$380$$.audio = function() {
    var $$jscomp$compprop71_win$jscomp$380$$ = $$jscomp$this$jscomp$899$$.$O$.document.createElement("audio");
    $$jscomp$compprop71_win$jscomp$380$$.setAttribute("muted", "");
    $$jscomp$compprop71_win$jscomp$380$$.muted = !0;
    $$jscomp$compprop71_win$jscomp$380$$.classList.add("i-amphtml-pool-media");
    $$jscomp$compprop71_win$jscomp$380$$.classList.add("i-amphtml-pool-audio");
    return $$jscomp$compprop71_win$jscomp$380$$;
  }, $$jscomp$compprop71_win$jscomp$380$$.video = function() {
    var $$jscomp$compprop71_win$jscomp$380$$ = $$jscomp$this$jscomp$899$$.$O$.document.createElement("video");
    $$jscomp$compprop71_win$jscomp$380$$.setAttribute("muted", "");
    $$jscomp$compprop71_win$jscomp$380$$.muted = !0;
    $$jscomp$compprop71_win$jscomp$380$$.setAttribute("playsinline", "");
    $$jscomp$compprop71_win$jscomp$380$$.classList.add("i-amphtml-pool-media");
    $$jscomp$compprop71_win$jscomp$380$$.classList.add("i-amphtml-pool-video");
    return $$jscomp$compprop71_win$jscomp$380$$;
  }, $$jscomp$compprop71_win$jscomp$380$$);
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$$(this, $maxCounts$$);
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$, $maxCounts$jscomp$1$$) {
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaType_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$, function($key$jscomp$147_type$jscomp$191$$) {
    $key$jscomp$147_type$jscomp$191$$ = $MediaType$$module$extensions$amp_story$0_1$media_pool$$[$key$jscomp$147_type$jscomp$191$$];
    var $count$jscomp$28_i$299$$ = $maxCounts$jscomp$1$$[$key$jscomp$147_type$jscomp$191$$] || 0;
    if (!(0 >= $count$jscomp$28_i$299$$)) {
      var $mediaElSeed$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$.$R$[$key$jscomp$147_type$jscomp$191$$].call($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$);
      $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$.$D$[$key$jscomp$147_type$jscomp$191$$] = [];
      for ($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$.$F$[$key$jscomp$147_type$jscomp$191$$] = []; 0 < $count$jscomp$28_i$299$$; $count$jscomp$28_i$299$$--) {
        var $mediaEl$jscomp$12$$ = 1 == $count$jscomp$28_i$299$$ ? $mediaElSeed$$ : $mediaElSeed$$.cloneNode(!0), $sources$jscomp$5$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getDefaultSource_$$($key$jscomp$147_type$jscomp$191$$);
        $mediaEl$jscomp$12$$.setAttribute("pool-element", $elId$$module$extensions$amp_story$0_1$media_pool$$++);
        $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$, $mediaEl$jscomp$12$$, new $UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$($sources$jscomp$5$$));
        $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$initializeMediaPool_$self$$.$F$[$key$jscomp$147_type$jscomp$191$$].push($mediaEl$jscomp$12$$);
      }
    }
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getDefaultSource_$$ = function($mediaType$$) {
  switch($mediaType$$) {
    case "audio":
      return new $Sources$$module$extensions$amp_story$0_1$sources$$("data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YRAAAAAAAAAAAAAAAAAAAAAAAA==");
    case "video":
      return new $Sources$$module$extensions$amp_story$0_1$sources$$("data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw");
    default:
      return _.$dev$$module$src$log$$().error("AMP-STORY", "No default media for type " + $mediaType$$ + "."), new $Sources$$module$extensions$amp_story$0_1$sources$$;
  }
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$ = function($mediaElement$jscomp$1$$) {
  switch($mediaElement$jscomp$1$$.tagName.toLowerCase()) {
    case "audio":
      return "audio";
    case "video":
      return "video";
    default:
      return "unsupported";
  }
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$, $index$jscomp$139_mediaType$jscomp$2$$, $domMediaEl$$) {
  if (0 <= $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$.$D$[$index$jscomp$139_mediaType$jscomp$2$$].indexOf($domMediaEl$$)) {
    return $domMediaEl$$;
  }
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$.$D$[$index$jscomp$139_mediaType$jscomp$2$$];
  $index$jscomp$139_mediaType$jscomp$2$$ = _.$findIndex$$module$src$utils$array$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$, function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$) {
    return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$["replaced-media"] === $domMediaEl$$.id;
  });
  return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$self_allocatedEls$$[$index$jscomp$139_mediaType$jscomp$2$$];
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$, $mediaType$jscomp$3$$, $indexToRemove_poolMediaEl$jscomp$1$$) {
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$.$D$[$mediaType$jscomp$3$$].push($indexToRemove_poolMediaEl$jscomp$1$$);
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$.$F$[$mediaType$jscomp$3$$];
  $indexToRemove_poolMediaEl$jscomp$1$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$.indexOf($indexToRemove_poolMediaEl$jscomp$1$$);
  0 <= $indexToRemove_poolMediaEl$jscomp$1$$ && $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$self_unallocatedEls$$.splice($indexToRemove_poolMediaEl$jscomp$1$$, 1);
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$, $mediaType$jscomp$4$$, $opt_elToAllocate_poolMediaEl$jscomp$2$$) {
  var $allocatedEls$jscomp$1$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$D$[$mediaType$jscomp$4$$];
  $allocatedEls$jscomp$1$$.sort(function($mediaType$jscomp$4$$, $opt_elToAllocate_poolMediaEl$jscomp$2$$) {
    $mediaType$jscomp$4$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$G$($mediaType$jscomp$4$$);
    $opt_elToAllocate_poolMediaEl$jscomp$2$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$G$($opt_elToAllocate_poolMediaEl$jscomp$2$$);
    return $mediaType$jscomp$4$$ < $opt_elToAllocate_poolMediaEl$jscomp$2$$ ? -1 : 1;
  });
  if ($opt_elToAllocate_poolMediaEl$jscomp$2$$) {
    var $furthestEl$$ = $allocatedEls$jscomp$1$$[$allocatedEls$jscomp$1$$.length - 1];
    if (!$furthestEl$$ || $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$G$($furthestEl$$) < $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$G$($opt_elToAllocate_poolMediaEl$jscomp$2$$)) {
      return null;
    }
  }
  $opt_elToAllocate_poolMediaEl$jscomp$2$$ = $allocatedEls$jscomp$1$$.pop();
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$self$$.$F$[$mediaType$jscomp$4$$].push($opt_elToAllocate_poolMediaEl$jscomp$2$$);
  return $opt_elToAllocate_poolMediaEl$jscomp$2$$;
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$self$$, $poolMediaEl$jscomp$3$$) {
  var $mediaType$jscomp$5$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($poolMediaEl$jscomp$3$$), $allocatedEls$jscomp$2$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$self$$.$D$[$mediaType$jscomp$5$$];
  (_.$isConnectedNode$$module$src$dom$$($poolMediaEl$jscomp$3$$) ? $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$self$$, $poolMediaEl$jscomp$3$$) : window.Promise.resolve()).then(function() {
    $allocatedEls$jscomp$2$$.splice($allocatedEls$jscomp$2$$.indexOf($poolMediaEl$jscomp$3$$), 1);
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$self$$.$F$[$mediaType$jscomp$5$$].push($poolMediaEl$jscomp$3$$);
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$evictMediaElement_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$evictMediaElement_$self$$, $mediaType$jscomp$6_poolMediaEl$jscomp$4$$, $opt_elToAllocate$jscomp$1$$) {
  $mediaType$jscomp$6_poolMediaEl$jscomp$4$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$deallocateMediaElement_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$evictMediaElement_$self$$, $mediaType$jscomp$6_poolMediaEl$jscomp$4$$, $opt_elToAllocate$jscomp$1$$);
  if (!$mediaType$jscomp$6_poolMediaEl$jscomp$4$$) {
    return null;
  }
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$evictMediaElement_$self$$, $mediaType$jscomp$6_poolMediaEl$jscomp$4$$);
  return $mediaType$jscomp$6_poolMediaEl$jscomp$4$$;
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$self$$, $domMediaEl$jscomp$1$$, $poolMediaEl$jscomp$5$$, $sources$jscomp$6$$) {
  var $ampMediaForPoolEl$$ = $ampMediaElementFor$$module$extensions$amp_story$0_1$utils$$($poolMediaEl$jscomp$5$$), $ampMediaForDomEl$$ = $ampMediaElementFor$$module$extensions$amp_story$0_1$utils$$($domMediaEl$jscomp$1$$);
  $poolMediaEl$jscomp$5$$["replaced-media"] = $domMediaEl$jscomp$1$$.id;
  return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$self$$, $poolMediaEl$jscomp$5$$, new $SwapIntoDomTask$$module$extensions$amp_story$0_1$media_tasks$$($domMediaEl$jscomp$1$$)).then(function() {
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$maybeResetAmpMedia_$$($ampMediaForPoolEl$$);
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$maybeResetAmpMedia_$$($ampMediaForDomEl$$);
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$self$$, $poolMediaEl$jscomp$5$$, new $UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$($sources$jscomp$6$$));
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$self$$, $poolMediaEl$jscomp$5$$, new $LoadTask$$module$extensions$amp_story$0_1$media_tasks$$);
  }, function() {
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forceDeallocateMediaElement_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$self$$, $poolMediaEl$jscomp$5$$);
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$maybeResetAmpMedia_$$ = function($componentEl$$) {
  $componentEl$$ && "amp-audio" != $componentEl$$.tagName.toLowerCase() && $componentEl$$.$getImpl$().then(function($componentEl$$) {
    $componentEl$$.$resetOnDomChange$ && $componentEl$$.$resetOnDomChange$();
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$resetPoolMediaElementSource_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$resetPoolMediaElementSource_$self$$, $poolMediaEl$jscomp$6$$) {
  var $defaultSources$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getDefaultSource_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($poolMediaEl$jscomp$6$$));
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$resetPoolMediaElementSource_$self$$, $poolMediaEl$jscomp$6$$, new $UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$($defaultSources$$));
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$self$$, $poolMediaEl$jscomp$7$$) {
  var $swapOutOfDom$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$self$$, $poolMediaEl$jscomp$7$$, new $SwapOutOfDomTask$$module$extensions$amp_story$0_1$media_tasks$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$self$$.$J$[$poolMediaEl$jscomp$7$$["replaced-media"]])).then(function() {
    $poolMediaEl$jscomp$7$$["replaced-media"] = null;
  });
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$resetPoolMediaElementSource_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementOutOfDom_$self$$, $poolMediaEl$jscomp$7$$);
  return $swapOutOfDom$$;
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaType_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaType_$self$$, $callbackFn$$) {
  Object.keys($MediaType$$module$extensions$amp_story$0_1$media_pool$$).forEach($callbackFn$$.bind($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaType_$self$$));
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$self$$, $callbackFn$jscomp$1$$) {
  [$JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$self$$.$D$, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$self$$.$F$].forEach(function($mediaSet$$) {
    $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaType_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$self$$, function($els_key$jscomp$148$$) {
      ($els_key$jscomp$148$$ = $mediaSet$$[$MediaType$$module$extensions$amp_story$0_1$media_pool$$[$els_key$jscomp$148$$]]) && $els_key$jscomp$148$$.forEach($callbackFn$jscomp$1$$.bind($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$self$$));
    });
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$, $domMediaEl$jscomp$2$$) {
  if (!_.$isConnectedNode$$module$src$dom$$($domMediaEl$jscomp$2$$)) {
    return window.Promise.resolve();
  }
  var $mediaType$jscomp$9$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($domMediaEl$jscomp$2$$), $existingPoolMediaEl_sources$jscomp$7$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$, $mediaType$jscomp$9$$, $domMediaEl$jscomp$2$$);
  if ($existingPoolMediaEl_sources$jscomp$7$$) {
    return window.Promise.resolve($existingPoolMediaEl_sources$jscomp$7$$);
  }
  $existingPoolMediaEl_sources$jscomp$7$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$.$I$[$domMediaEl$jscomp$2$$.id];
  var $poolMediaEl$jscomp$8$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$.$F$[$mediaType$jscomp$9$$].pop() || $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$evictMediaElement_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$, $mediaType$jscomp$9$$, $domMediaEl$jscomp$2$$);
  if (!$poolMediaEl$jscomp$8$$) {
    return window.Promise.resolve();
  }
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$allocateMediaElement_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$, $mediaType$jscomp$9$$, $poolMediaEl$jscomp$8$$);
  return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$swapPoolMediaElementIntoDom_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$self$$, $domMediaEl$jscomp$2$$, $poolMediaEl$jscomp$8$$, $existingPoolMediaEl_sources$jscomp$7$$).then(function() {
    return $poolMediaEl$jscomp$8$$;
  });
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$bless_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$bless_$self$$, $poolMediaEl$jscomp$9$$) {
  return $poolMediaEl$jscomp$9$$.__AMP_MEDIA_IS_BLESSED__ ? window.Promise.resolve() : $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$bless_$self$$, $poolMediaEl$jscomp$9$$, new $BlessTask$$module$extensions$amp_story$0_1$media_tasks$$);
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$, $mediaEl$jscomp$14$$) {
  var $queue$jscomp$7$$ = $mediaEl$jscomp$14$$.__AMP_MEDIA_ELEMENT_TASKS__;
  if (0 !== $queue$jscomp$7$$.length) {
    var $task$jscomp$24$$ = $queue$jscomp$7$$[0], $executionFn$$ = function() {
      $task$jscomp$24$$.execute($mediaEl$jscomp$14$$).catch(function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$) {
        return _.$dev$$module$src$log$$().error("AMP-STORY", $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$);
      }).then(function() {
        $queue$jscomp$7$$.shift();
        $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$, $mediaEl$jscomp$14$$);
      });
    };
    $task$jscomp$24$$.$requiresSynchronousExecution$() ? $executionFn$$.call($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$) : $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$.$timer_$.delay($executionFn$$.bind($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$self$$), 0);
  }
}, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$ = function($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$self$$, $mediaEl$jscomp$15$$, $task$jscomp$25$$) {
  $mediaEl$jscomp$15$$.__AMP_MEDIA_ELEMENT_TASKS__ || ($mediaEl$jscomp$15$$.__AMP_MEDIA_ELEMENT_TASKS__ = []);
  var $queue$jscomp$8$$ = $mediaEl$jscomp$15$$.__AMP_MEDIA_ELEMENT_TASKS__, $isQueueRunning$$ = 0 !== $queue$jscomp$8$$.length;
  $queue$jscomp$8$$.push($task$jscomp$25$$);
  $isQueueRunning$$ || $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$executeNextMediaElementTask_$$($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$self$$, $mediaEl$jscomp$15$$);
  return $task$jscomp$25$$.$whenComplete$();
}, $MediaPool$$module$extensions$amp_story$0_1$media_pool$for$$ = function($root$jscomp$77$$) {
  var $element$jscomp$564$$ = $root$jscomp$77$$.$getElement$(), $existingId_newId$jscomp$1$$ = $element$jscomp$564$$.__AMP_MEDIA_POOL_ID__;
  if ($existingId_newId$jscomp$1$$ && $instances$$module$extensions$amp_story$0_1$media_pool$$[$existingId_newId$jscomp$1$$]) {
    return $instances$$module$extensions$amp_story$0_1$media_pool$$[$existingId_newId$jscomp$1$$];
  }
  $existingId_newId$jscomp$1$$ = String($nextInstanceId$$module$extensions$amp_story$0_1$media_pool$$++);
  $element$jscomp$564$$.__AMP_MEDIA_POOL_ID__ = $existingId_newId$jscomp$1$$;
  $instances$$module$extensions$amp_story$0_1$media_pool$$[$existingId_newId$jscomp$1$$] = new $MediaPool$$module$extensions$amp_story$0_1$media_pool$$($root$jscomp$77$$.$getElement$().ownerDocument.defaultView, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$$($root$jscomp$77$$), function($element$jscomp$564$$) {
    return ($element$jscomp$564$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$$($root$jscomp$77$$, $element$jscomp$564$$)) ? (0,window.parseInt)($element$jscomp$564$$.element.getAttribute("distance"), 10) : -1;
  });
  return $instances$$module$extensions$amp_story$0_1$media_pool$$[$existingId_newId$jscomp$1$$];
}, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$ = function() {
  this.$J$ = [];
  this.$I$ = [];
  this.$P$ = [];
  this.$K$ = [];
  this.$F$ = !1;
}, $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$$ = function($JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$self$$) {
  $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$self$$.$I$.forEach(function($JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$self$$) {
    $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$self$$();
  });
}, $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$$ = function($JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$self$$, $navigationDirection$$) {
  $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$self$$.$K$.forEach(function($JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$self$$) {
    $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$self$$($navigationDirection$$);
  });
}, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$forPage$$ = function($page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$) {
  $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$ = $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$.element;
  var $win$jscomp$381$$ = $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$.ownerDocument.defaultView, $autoAdvanceStr$$ = $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$.getAttribute("auto-advance-after");
  $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$ = [new $ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$($page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$), $TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$fromAutoAdvanceString$$($autoAdvanceStr$$, $win$jscomp$381$$), $MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$fromAutoAdvanceString$$($autoAdvanceStr$$, $win$jscomp$381$$, $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$)].filter(function($page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$) {
    return null !== $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$;
  });
  return 0 === $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$.length ? new $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$ : 1 === $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$.length ? $page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$[0] : new $MultipleAdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$($page$jscomp$4_rootEl$jscomp$1_supportedAdvancementModes$$);
}, $MultipleAdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$ = function($advancementModes$$) {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.call(this);
  this.$D$ = $advancementModes$$;
}, $ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$ = function($element$jscomp$566$$) {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.call(this);
  this.$element_$ = $element$jscomp$566$$;
  this.$D$ = this.$G$.bind(this);
  this.$O$ = this.$element_$.getAttribute("auto-advance-after");
}, $JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$$ = function($JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$self$$, $e$jscomp$303$$) {
  return !_.$closest$$module$src$dom$$($e$jscomp$303$$.target, function($JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$self$$) {
    return $JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$self$$.hasAttribute("on") && !!$JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$self$$.getAttribute("on").match(/(^|;)\s*tap\s*:/);
  }, $JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$self$$.$element_$);
}, $JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$$ = function($JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$self$$, $event$jscomp$199$$) {
  return !!_.$closest$$module$src$dom$$($event$jscomp$199$$.target, function($JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$self$$) {
    return $PROTECTED_ELEMENTS$$module$extensions$amp_story$0_1$page_advancement$$[$JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$self$$.tagName];
  }, $JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$self$$.$element_$);
}, $TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$ = function($win$jscomp$382$$, $delayMs$$) {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.call(this);
  this.$timer_$ = _.$Services$$module$src$services$timerFor$$($win$jscomp$382$$);
  this.$O$ = $delayMs$$;
  this.$G$ = this.$D$ = null;
}, $TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$fromAutoAdvanceString$$ = function($autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$, $win$jscomp$383$$) {
  if (!$autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$) {
    return null;
  }
  $autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$ = $timeStrToMillis$$module$extensions$amp_story$0_1$utils$$($autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$);
  return void 0 === $autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$ || (0,window.isNaN)($autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$) ? null : new $TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$($win$jscomp$383$$, Number($autoAdvanceStr$jscomp$1_delayMs$jscomp$1$$));
}, $MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$ = function($win$jscomp$384$$, $element$jscomp$567$$) {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.call(this);
  this.$timer_$ = _.$Services$$module$src$services$timerFor$$($win$jscomp$384$$);
  this.$element_$ = $element$jscomp$567$$;
  this.$video_$ = this.$D$ = null;
}, $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isVideoInterfaceVideo_$$ = function($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isVideoInterfaceVideo_$self$$) {
  return $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isVideoInterfaceVideo_$self$$.$element_$.classList.contains("i-amphtml-video-interface");
}, $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$$ = function($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$self$$) {
  var $mediaElement$jscomp$2$$ = $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$self$$.$D$;
  _.$listenOnce$$module$src$event_helper$$($mediaElement$jscomp$2$$, "ended", function() {
    return $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$$($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$self$$);
  });
  _.$listenOnce$$module$src$event_helper$$($mediaElement$jscomp$2$$, "timeupdate", function() {
    return $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$self$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onProgressUpdate$();
  });
}, $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$$ = function($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$) {
  $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$element_$.$getImpl$().then(function($video$jscomp$36$$) {
    $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$video_$ = $video$jscomp$36$$;
  });
  _.$listenOnce$$module$src$event_helper$$($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$element_$, _.$VideoEvents$$module$src$video_interface$$.$ENDED$, function() {
    return $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$$($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$);
  }, {capture:!0});
  _.$JSCompiler_StaticMethods_poll$$($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$timer_$, 300, function() {
    $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onProgressUpdate$();
    return !$JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$self$$.$F$;
  });
}, $MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$fromAutoAdvanceString$$ = function($autoAdvanceStr$jscomp$2$$, $win$jscomp$385$$, $rootEl$jscomp$2$$) {
  try {
    var $element$jscomp$568$$ = $rootEl$jscomp$2$$.querySelector("#" + _.$cssEscape$$module$third_party$css_escape$css_escape$$($autoAdvanceStr$jscomp$2$$));
    return $element$jscomp$568$$ ? new $MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$($win$jscomp$385$$, $element$jscomp$568$$) : null;
  } catch ($e$300$$) {
    return null;
  }
}, $AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page$$ = function($deferred$jscomp$59_element$jscomp$569$$) {
  var $$jscomp$super$this$jscomp$100$$ = window.AMP.BaseElement.call(this, $deferred$jscomp$59_element$jscomp$569$$) || this;
  $$jscomp$super$this$jscomp$100$$.$animationManager_$ = null;
  $$jscomp$super$this$jscomp$100$$.$advancement_$ = $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$forPage$$($$jscomp$super$this$jscomp$100$$);
  $$jscomp$super$this$jscomp$100$$.$loadingSpinner_$ = null;
  $$jscomp$super$this$jscomp$100$$.$mediaLayoutPromise_$ = $$jscomp$super$this$jscomp$100$$.$waitForMediaLayout_$();
  $$jscomp$super$this$jscomp$100$$.$pageLoadPromise_$ = $$jscomp$super$this$jscomp$100$$.$mediaLayoutPromise_$.then(function() {
    $$jscomp$super$this$jscomp$100$$.$markPageAsLoaded_$();
  });
  $deferred$jscomp$59_element$jscomp$569$$ = new _.$Deferred$$module$src$utils$promise$$;
  $$jscomp$super$this$jscomp$100$$.$mediaPoolPromise_$ = $deferred$jscomp$59_element$jscomp$569$$.$promise$;
  $$jscomp$super$this$jscomp$100$$.$mediaPoolResolveFn_$ = $deferred$jscomp$59_element$jscomp$569$$.resolve;
  $$jscomp$super$this$jscomp$100$$.$mediaPoolRejectFn_$ = $deferred$jscomp$59_element$jscomp$569$$.reject;
  $$jscomp$super$this$jscomp$100$$.$prerenderAllowed_$ = !1;
  $$jscomp$super$this$jscomp$100$$.$debounceToggleLoadingSpinner_$ = _.$debounce$$module$src$utils$rate_limit$$($$jscomp$super$this$jscomp$100$$.$win$, function($deferred$jscomp$59_element$jscomp$569$$) {
    return $$jscomp$super$this$jscomp$100$$.$toggleLoadingSpinner_$(!!$deferred$jscomp$59_element$jscomp$569$$);
  }, 100);
  $$jscomp$super$this$jscomp$100$$.$unlisteners_$ = [];
  $$jscomp$super$this$jscomp$100$$.$isBotUserAgent_$ = _.$JSCompiler_StaticMethods_isBot$$(_.$Services$$module$src$services$platformFor$$($$jscomp$super$this$jscomp$100$$.$win$));
  return $$jscomp$super$this$jscomp$100$$;
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$self$$) {
  _.$closestBySelector$$module$src$dom$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$self$$.element, "amp-story").$getImpl$().then(function($storyImpl$$) {
    $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$self$$.$mediaPoolResolveFn_$($MediaPool$$module$extensions$amp_story$0_1$media_pool$for$$($storyImpl$$));
  }, function($reason$jscomp$34$$) {
    return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$self$$.$mediaPoolRejectFn_$($reason$jscomp$34$$);
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$self$$) {
  Array.prototype.forEach.call($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$self$$.element.querySelectorAll("amp-audio, amp-video"), function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$self$$) {
    $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$self$$.setAttribute("preload", "auto");
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$self$$, $callbackFn$jscomp$2$$) {
  var $mediaSet$jscomp$3$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$self$$.element.querySelectorAll("audio, video");
  return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$self$$.$mediaPoolPromise_$.then(function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$self$$) {
    var $mediaPool$$ = Array.prototype.map.call($mediaSet$jscomp$3$$, function($mediaSet$jscomp$3$$) {
      return $callbackFn$jscomp$2$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$self$$, $mediaSet$jscomp$3$$);
    });
    return window.Promise.all($mediaPool$$);
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$pauseAllMedia_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$pauseAllMedia_$self$$) {
  var $rewindToBeginning$jscomp$1$$ = !0;
  $rewindToBeginning$jscomp$1$$ = void 0 === $rewindToBeginning$jscomp$1$$ ? !1 : $rewindToBeginning$jscomp$1$$;
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$pauseAllMedia_$self$$, function($mediaPool$jscomp$1$$, $mediaEl$jscomp$18$$) {
    if ($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$pauseAllMedia_$self$$.$isBotUserAgent_$) {
      $mediaEl$jscomp$18$$.pause();
    } else {
      return $mediaPool$jscomp$1$$.pause($mediaEl$jscomp$18$$, $rewindToBeginning$jscomp$1$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$playAllMedia_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$playAllMedia_$self$$) {
  return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$playAllMedia_$self$$, function($mediaPool$jscomp$2$$, $mediaEl$jscomp$19$$) {
    if ($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$playAllMedia_$self$$.$isBotUserAgent_$) {
      $mediaEl$jscomp$19$$.play();
    } else {
      return $mediaPool$jscomp$2$$.play($mediaEl$jscomp$19$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$self$$) {
  return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$self$$, function($mediaPool$jscomp$3$$, $mediaEl$jscomp$20$$) {
    if (!$JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$self$$.$isBotUserAgent_$) {
      return $mediaPool$jscomp$3$$.$preload$($mediaEl$jscomp$20$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$unmuteAllMedia$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$unmuteAllMedia$self$$) {
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$unmuteAllMedia$self$$, function($mediaPool$jscomp$5$$, $mediaEl$jscomp$22$$) {
    if ($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$unmuteAllMedia$self$$.$isBotUserAgent_$) {
      $mediaEl$jscomp$22$$.muted = !1, $mediaEl$jscomp$22$$.removeAttribute("muted");
    } else {
      return $mediaPool$jscomp$5$$.$unmute$($mediaEl$jscomp$22$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$self$$) {
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$self$$, function($mediaPool$jscomp$6$$, $mediaEl$jscomp$23$$) {
    if (!$JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$self$$.$isBotUserAgent_$) {
      return $mediaPool$jscomp$6$$.register($mediaEl$jscomp$23$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$self$$) {
  return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$self$$.$animationManager_$ ? $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$applyFirstFrame$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$self$$.$animationManager_$) : window.Promise.resolve();
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$) {
  var $adjacentPageIds$$ = [], $autoAdvanceNext$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$, !0), $manualAdvanceNext$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$, 
  !1);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$ = $JSCompiler_StaticMethods_getPreviousPageId_$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$);
  $autoAdvanceNext$$ && $adjacentPageIds$$.push($autoAdvanceNext$$);
  $manualAdvanceNext$$ && $manualAdvanceNext$$ != $autoAdvanceNext$$ && $adjacentPageIds$$.push($manualAdvanceNext$$);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$ && $adjacentPageIds$$.push($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$self_previous$$);
  return $adjacentPageIds$$;
}, $JSCompiler_StaticMethods_getPreviousPageId_$$ = function($JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$) {
  return $JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$.element.hasAttribute("i-amphtml-return-to") ? $JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$.element.getAttribute("i-amphtml-return-to") : ($JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$ = $JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$.element.previousElementSibling) && "amp-story-page" === $JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$.tagName.toLowerCase() ? 
  $JSCompiler_StaticMethods_getPreviousPageId_$self_previousElement$$.id : null;
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$, $opt_isAutomaticAdvance$$) {
  return $opt_isAutomaticAdvance$$ && $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.element.hasAttribute("auto-advance-to") ? $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.element.getAttribute("auto-advance-to") : $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.element.hasAttribute("i-amphtml-advance-to") ? 
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.element.getAttribute("i-amphtml-advance-to") : ($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.element.nextElementSibling) && "amp-story-page" === $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.tagName.toLowerCase() ? 
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$self_nextElement$$.id : null;
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$self$$, $targetPageId$jscomp$1$$) {
  $dispatchCustom$$module$extensions$amp_story$0_1$events$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$self$$.$win$, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$self$$.element, "ampstory:switchpage", _.$dict$$module$src$utils$object$$({targetPageId:$targetPageId$jscomp$1$$}));
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$self$$) {
  _.$getMode$$module$src$mode$$().$development$ && $getLogEntries$$module$extensions$amp_story$0_1$logging$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$self$$.element).then(function($logEntries$jscomp$1$$) {
    $dispatchCustom$$module$extensions$amp_story$0_1$events$$($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$self$$.$win$, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$self$$.element, "ampstory:devlogentriesavailable", $logEntries$jscomp$1$$);
  });
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$) {
  var $videos$jscomp$1$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.element.querySelectorAll("video");
  0 !== $videos$jscomp$1$$.length && ($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.$debounceToggleLoadingSpinner_$(!0), Array.prototype.forEach.call($videos$jscomp$1$$, function($videos$jscomp$1$$) {
    $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.$unlisteners_$.push(_.$listen$$module$src$event_helper$$($videos$jscomp$1$$, "playing", function() {
      return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.$debounceToggleLoadingSpinner_$(!1);
    }));
    $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.$unlisteners_$.push(_.$listen$$module$src$event_helper$$($videos$jscomp$1$$, "waiting", function() {
      return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$self$$.$debounceToggleLoadingSpinner_$(!0);
    }));
  }));
}, $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$$ = function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$) {
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$.$debounceToggleLoadingSpinner_$(!1);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$.$unlisteners_$.forEach(function($JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$) {
    return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$();
  });
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$self$$.$unlisteners_$ = [];
}, $AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service$$ = function($win$jscomp$386$$, $storyElement$$) {
  var $$jscomp$this$jscomp$927$$ = this;
  this.$D$ = $storyElement$$;
  this.$xhr_$ = _.$Services$$module$src$services$xhrFor$$($win$jscomp$386$$);
  this.$F$ = _.$once$$module$src$utils$function$$(function() {
    return $JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$$($$jscomp$this$jscomp$927$$);
  });
}, $JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$$ = function($JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$) {
  if (!$JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$.$D$.hasAttribute("bookend-config-src")) {
    return window.Promise.resolve(null);
  }
  var $rawUrl$$ = $JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$.$D$.getAttribute("bookend-config-src"), $opts$jscomp$21$$ = {requireAmpResponseSourceOrigin:!1};
  return _.$JSCompiler_StaticMethods_expandUrlAsync$$(_.$Services$$module$src$services$urlReplacementsForDoc$$($JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$.$D$), _.$JSCompiler_StaticMethods_assertString$$(_.$user$$module$src$log$$(), $rawUrl$$)).then(function($rawUrl$$) {
    return _.$JSCompiler_StaticMethods_fetchJson$$($JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$.$xhr_$, $rawUrl$$, $opts$jscomp$21$$);
  }).then(function($JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$) {
    return $JSCompiler_StaticMethods_AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service_prototype$loadJsonFromAttribute_$self$$.json();
  });
}, $ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu$$ = function($win$jscomp$387$$, $parentEl$jscomp$3$$) {
  this.$D$ = $win$jscomp$387$$;
  this.$I$ = this.$element_$ = null;
  this.$F$ = this.$isBuilt_$ = !1;
  this.$shareWidget_$ = new $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$(this.$D$);
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$D$);
  this.$G$ = $parentEl$jscomp$3$$;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$D$);
}, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$$ = function($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$) {
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$shareWidget_$, _.$getAmpdoc$$module$src$service$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$G$));
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$element_$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$D$.document, $AMP_SOCIAL_SYSTEM_SHARE_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share_menu$$);
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$);
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$vsync_$.$mutate$(function() {
    _.$toggle$$module$src$style$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$element_$, !1);
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$G$.appendChild($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$self$$.$element_$);
  });
}, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$$ = function($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$) {
  var $root$jscomp$78$$ = $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$D$.document.createElement("div");
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$element_$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$D$.document, $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share_menu$$);
  $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$($root$jscomp$78$$, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$element_$, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' fill='%23fff' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-menu{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;-webkit-transform:translate3d(0,100vh,0)!important;transform:translate3d(0,100vh,0)!important;-webkit-transition-delay:0.15s!important;transition-delay:0.15s!important}.i-amphtml-story-share-menu-visible{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition-delay:0s!important;transition-delay:0s!important}.i-amphtml-story-share-menu:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;-webkit-transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu.i-amphtml-story-share-menu-visible:before{opacity:0.4!important;-webkit-transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-container{position:absolute!important;bottom:0!important;left:0!important;right:0!important;height:auto!important;background:rgba(0,0,0,0.9)!important;-webkit-transform:translate3d(0,100%,0)!important;transform:translate3d(0,100%,0)!important;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1),-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1),-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-share-menu.css*/");
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$);
  _.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$vsync_$, {measure:function() {
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$I$ = $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$element_$.querySelector(".i-amphtml-story-share-menu-container");
  }, $mutate$:function() {
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$G$.appendChild($root$jscomp$78$$);
    var $shareWidget$$ = $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$shareWidget_$.$build$(_.$getAmpdoc$$module$src$service$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$G$));
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$self$$.$I$.appendChild($shareWidget$$);
  }});
}, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$.$storeService_$.subscribe("sharemenustate", function($isOpen$jscomp$2$$) {
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$, $isOpen$jscomp$2$$);
  });
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$.$F$ || $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$.$element_$.addEventListener("click", function($event$jscomp$201$$) {
    return $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$initializeListeners_$self$$, $event$jscomp$201$$);
  });
}, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$$ = function($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$, $isOpen$jscomp$3$$) {
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$F$ && $isOpen$jscomp$3$$ && ($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$element_$.dispatchEvent(new window.Event("click")), $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$storeService_$, 
  "togglesharemenu", !1));
  $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$F$ || $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuStateUpdate_$self$$.$element_$.classList.toggle("i-amphtml-story-share-menu-visible", $isOpen$jscomp$3$$);
  });
}, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$$ = function($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$self$$, $event$jscomp$202$$) {
  _.$closest$$module$src$dom$$($event$jscomp$202$$.target, function($event$jscomp$202$$) {
    return $event$jscomp$202$$ === $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$self$$.$I$;
  }, $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$self$$.$element_$) || $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$onShareMenuClick_$self$$.$storeService_$, "togglesharemenu", !1);
}, $toggleHiddenAttribute$$module$extensions$amp_story$0_1$development_ui$$ = function($vsync$jscomp$6$$, $el$jscomp$118$$, $isHidden$$) {
  $vsync$jscomp$6$$.$mutate$(function() {
    _.$toggle$$module$src$style$$($el$jscomp$118$$, !$isHidden$$);
  });
}, $createButton$$module$extensions$amp_story$0_1$development_ui$$ = function($win$jscomp$388$$, $classNameOrList$$, $handler$jscomp$57$$) {
  var $button$jscomp$3$$ = $win$jscomp$388$$.document.createElement("div");
  $button$jscomp$3$$.setAttribute("role", "button");
  _.$isArray$$module$src$types$$($classNameOrList$$) ? $classNameOrList$$.forEach(function($win$jscomp$388$$) {
    return $button$jscomp$3$$.classList.add($win$jscomp$388$$);
  }) : $button$jscomp$3$$.classList.add($classNameOrList$$);
  $button$jscomp$3$$.classList.add("i-amphtml-story-button");
  $button$jscomp$3$$.addEventListener("click", $handler$jscomp$57$$);
  return $button$jscomp$3$$;
}, $DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui$$ = function($win$jscomp$389$$) {
  this.$J$ = $win$jscomp$389$$;
  this.$G$ = this.$I$ = this.$F$ = this.$D$ = null;
}, $JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$$ = function($JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$self$$, $logEntry$$) {
  if ($logEntry$$.$conforms$) {
    return $JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$self$$.$G$;
  }
  switch($logEntry$$.level) {
    case 1:
      return $JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$self$$.$F$;
    case 2:
      return $JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$self$$.$I$;
    default:
      return null;
  }
}, $DevelopmentModeLog$$module$extensions$amp_story$0_1$development_ui$$ = function($win$jscomp$391$$) {
  this.$D$ = $win$jscomp$391$$;
  this.$I$ = this.$G$ = this.$F$ = null;
}, $ProgressBar$$module$extensions$amp_story$0_1$progress_bar$$ = function($win$jscomp$393$$) {
  this.$G$ = $win$jscomp$393$$;
  this.$isBuilt_$ = !1;
  this.$D$ = null;
  this.$J$ = this.$I$ = 0;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$G$);
  this.$F$ = _.$map$$module$src$utils$object$$();
}, $JSCompiler_StaticMethods_setActiveSegmentId$$ = function($JSCompiler_StaticMethods_setActiveSegmentId$self$$, $segmentId_segmentIndex$$) {
  _.$hasOwn$$module$src$utils$object$$($JSCompiler_StaticMethods_setActiveSegmentId$self$$.$F$, $segmentId_segmentIndex$$);
  $segmentId_segmentIndex$$ = $JSCompiler_StaticMethods_setActiveSegmentId$self$$.$F$[$segmentId_segmentIndex$$];
  for (var $i$302$$ = 0; $i$302$$ < $JSCompiler_StaticMethods_setActiveSegmentId$self$$.$I$; $i$302$$++) {
    $i$302$$ < $segmentId_segmentIndex$$ ? $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$$($JSCompiler_StaticMethods_setActiveSegmentId$self$$, $i$302$$, 1.0, $i$302$$ == $segmentId_segmentIndex$$ - 1) : $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$$($JSCompiler_StaticMethods_setActiveSegmentId$self$$, $i$302$$, 0.0, 0 != $segmentId_segmentIndex$$ && 1 != 
    $JSCompiler_StaticMethods_setActiveSegmentId$self$$.$J$);
  }
}, $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$$ = function($JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$, $segmentIndex$jscomp$2$$, $progress$jscomp$5$$, $withTransition$$) {
  $withTransition$$ = void 0 === $withTransition$$ ? !0 : $withTransition$$;
  $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$.$J$ = $segmentIndex$jscomp$2$$;
  var $progressEl$$ = _.$scopedQuerySelector$$module$src$dom$$($JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$.$D$, ".i-amphtml-story-page-progress-bar:nth-child(" + String($segmentIndex$jscomp$2$$ + 1) + ") .i-amphtml-story-page-progress-value");
  $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$.$vsync_$.$mutate$(function() {
    var $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$ = "none";
    $withTransition$$ && ($JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$ = 1 === $progress$jscomp$5$$ || 0 === $progress$jscomp$5$$ ? "transform 200ms ease" : "transform 300ms linear");
    _.$setImportantStyles$$module$src$style$$($progressEl$$, {transform:_.$scale$$module$src$style$$($progress$jscomp$5$$ + ",1"), transition:$JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$self$$});
  });
}, $SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer$$ = function($win$jscomp$395$$) {
  this.$G$ = $win$jscomp$395$$;
  this.$isBuilt_$ = !1;
  this.$O$ = this.$D$ = this.$J$ = null;
  this.$K$ = new $ProgressBar$$module$extensions$amp_story$0_1$progress_bar$$($win$jscomp$395$$);
  this.$F$ = new $DevelopmentModeLog$$module$extensions$amp_story$0_1$development_ui$$($win$jscomp$395$$);
  this.$I$ = new $DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui$$($win$jscomp$395$$);
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$G$);
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$G$);
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$D$.addEventListener("click", function($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$) {
    $event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$ = $event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$.target;
    _.$matches$$module$src$dom$$($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$, ".i-amphtml-story-mute-audio-control, .i-amphtml-story-mute-audio-control *") ? $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$, "togglemuted", !0) : _.$matches$$module$src$dom$$($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$, 
    ".i-amphtml-story-unmute-audio-control, .i-amphtml-story-unmute-audio-control *") ? $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$, "togglemuted", !1) : _.$matches$$module$src$dom$$($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$, 
    ".i-amphtml-story-share-control, .i-amphtml-story-share-control *") ? ($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$ = $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.get("sharemenustate"), $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$, 
    "togglesharemenu", !$event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$)) : _.$matches$$module$src$dom$$($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$, ".i-amphtml-story-info-control, .i-amphtml-story-info-control *") && ($event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$ = $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.get("infodialogstate"), 
    $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$, "toggleinfodialog", !$event$jscomp$203_isOpen$jscomp$inline_4230_isOpen$jscomp$inline_4233_target$jscomp$167$$));
  });
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("bookendstate", function($isActive$jscomp$8$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$D$.classList.toggle("i-amphtml-story-bookend-active", $isActive$jscomp$8$$);
  });
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("canshowsharinguis", function($show$jscomp$7$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onCanShowSharingUisUpdate_$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$, $show$jscomp$7$$);
  }, !0);
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("desktopstate", function($isDesktop$jscomp$3$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$, $isDesktop$jscomp$3$$);
  }, !0);
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("hasaudiostate", function($hasAudio$$) {
    $JSCompiler_StaticMethods_onHasAudioStateUpdate_$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$, $hasAudio$$);
  }, !0);
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("mutedstate", function($isMuted$jscomp$3$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$, $isMuted$jscomp$3$$);
  }, !0);
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("currentpageindex", function($index$jscomp$141$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onPageIndexUpdate_$$($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$self$$, $index$jscomp$141$$);
  }, !0);
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onCanShowSharingUisUpdate_$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onCanShowSharingUisUpdate_$self$$, $canShowSharingUis$jscomp$1$$) {
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onCanShowSharingUisUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onCanShowSharingUisUpdate_$self$$.$D$.classList.toggle("i-amphtml-story-no-sharing", !$canShowSharingUis$jscomp$1$$);
  });
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$self$$, $isDesktop$jscomp$4$$) {
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $isDesktop$jscomp$4$$ ? $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$self$$.$D$.setAttribute("desktop", "") : $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onDesktopStateUpdate_$self$$.$D$.removeAttribute("desktop");
  });
}, $JSCompiler_StaticMethods_onHasAudioStateUpdate_$$ = function($JSCompiler_StaticMethods_onHasAudioStateUpdate_$self$$, $hasAudio$jscomp$1$$) {
  $JSCompiler_StaticMethods_onHasAudioStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_onHasAudioStateUpdate_$self$$.$D$.classList.toggle("audio-playing", $hasAudio$jscomp$1$$);
  });
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$self$$, $isMuted$jscomp$4$$) {
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $isMuted$jscomp$4$$ ? $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$self$$.$D$.setAttribute("muted", "") : $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onMutedStateUpdate_$self$$.$D$.removeAttribute("muted");
  });
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onPageIndexUpdate_$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onPageIndexUpdate_$self$$, $index$jscomp$142$$) {
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onPageIndexUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$onPageIndexUpdate_$self$$.$D$.classList.toggle("first-page-active", 0 === $index$jscomp$142$$);
  });
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$self$$, $logEntries$jscomp$2$$) {
  _.$getMode$$module$src$mode$$().$development$ && $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$self$$.$vsync_$.$mutate$(function() {
    $logEntries$jscomp$2$$.forEach(function($logEntries$jscomp$2$$) {
      $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$self$$.$I$.log($logEntries$jscomp$2$$);
      $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$self$$.$F$.log($logEntries$jscomp$2$$);
    });
  });
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$resetDeveloperLogs$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$resetDeveloperLogs$self$$) {
  _.$getMode$$module$src$mode$$().$development$ && ($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$resetDeveloperLogs$self$$.$I$.clear(), $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$resetDeveloperLogs$self$$.$F$.clear());
}, $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$setDeveloperLogContextString$$ = function($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$setDeveloperLogContextString$self$$, $contextString$jscomp$1$$) {
  _.$getMode$$module$src$mode$$().$development$ && ($JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$setDeveloperLogContextString$self$$.$F$.$I$.textContent = $contextString$jscomp$1$$);
}, $UnsupportedBrowserLayer$$module$extensions$amp_story$0_1$amp_story_unsupported_browser_layer$$ = function($win$jscomp$396$$) {
  this.$F$ = $win$jscomp$396$$;
  this.$D$ = null;
}, $ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$ = function($win$jscomp$397$$, $storyElement$jscomp$1$$) {
  this.$F$ = $win$jscomp$397$$;
  this.$isBuilt_$ = !1;
  this.$D$ = null;
  this.$platform_$ = _.$Services$$module$src$services$platformFor$$(this.$F$);
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$F$);
  this.$G$ = $storyElement$jscomp$1$$;
  this.$vsync_$ = _.$Services$$module$src$services$vsyncFor$$(this.$F$);
  $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$$(this);
}, $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("desktopstate", function($isDesktop$jscomp$5$$) {
    $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$$($JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$self$$, $isDesktop$jscomp$5$$);
  }, !0);
  $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$self$$.$storeService_$.subscribe("landscapestate", function($isLandscape$$) {
    $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$$($JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$initializeListeners_$self$$, $isLandscape$$);
  }, !0);
}, $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$$ = function($JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$, $isLandscape$jscomp$1$$) {
  var $isDesktop$jscomp$6$$ = $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$.$storeService_$.get("desktopstate");
  if (!$isDesktop$jscomp$6$$ && $isLandscape$jscomp$1$$ || $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$.$isBuilt_$) {
    $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$.$build$(), $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$.$vsync_$.$mutate$(function() {
      $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onLandscapeStateUpdate_$self$$.$D$.classList.toggle("i-amphtml-story-landscape", !$isDesktop$jscomp$6$$ && $isLandscape$jscomp$1$$);
    });
  }
}, $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$$ = function($JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$self$$, $isDesktop$jscomp$7$$) {
  $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$self$$.$isBuilt_$ && $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $isDesktop$jscomp$7$$ ? $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$self$$.$D$.setAttribute("desktop", "") : $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$self$$.$D$.removeAttribute("desktop");
  });
}, $NavigationState$$module$extensions$amp_story$0_1$navigation_state$$ = function($win$jscomp$398$$, $hasBookend$jscomp$2$$) {
  this.$hasBookend_$ = $hasBookend$jscomp$2$$;
  this.$D$ = new _.$Observable$$module$src$observable$$;
  this.$F$ = $win$jscomp$398$$;
  this.$storeService_$ = $Services$$module$src$services$storyStoreServiceV01$$(this.$F$);
  $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$$(this);
}, $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$self$$.$storeService_$.subscribe("bookendstate", function($isActive$jscomp$10$$) {
    $isActive$jscomp$10$$ && ($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$self$$, 1), $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$self$$, 
    3));
    $isActive$jscomp$10$$ || $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$initializeListeners_$self$$, 2);
  });
}, $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$$ = function($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$self$$, $pageIndex$jscomp$3$$, $totalPages$jscomp$1$$, $pageId$jscomp$7$$) {
  $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$self$$, 0, {pageIndex:$pageIndex$jscomp$3$$, pageId:$pageId$jscomp$7$$, $totalPages$:$totalPages$jscomp$1$$, $storyProgress$:$pageIndex$jscomp$3$$ / $totalPages$jscomp$1$$});
  $pageIndex$jscomp$3$$ >= $totalPages$jscomp$1$$ - 1 && $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$self$$.$hasBookend_$().then(function($pageIndex$jscomp$3$$) {
    $pageIndex$jscomp$3$$ || $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$self$$, 3);
  });
}, $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$$ = function($JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$self$$, $type$jscomp$193$$, $opt_changeValue$jscomp$1$$) {
  $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$fire_$self$$.$D$.$fire$({type:$type$jscomp$193$$, value:$opt_changeValue$jscomp$1$$});
}, $AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics$$ = function($win$jscomp$399$$, $element$jscomp$570$$) {
  this.$D$ = $win$jscomp$399$$;
  this.$element_$ = $element$jscomp$570$$;
}, $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$$ = function($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$self$$, $eventType$jscomp$63$$) {
  _.$Services$$module$src$services$storyVariableServiceForOrNull$$($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$self$$.$D$).then(function($variables$$) {
    _.$triggerAnalyticsEvent$$module$src$analytics$$($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$self$$.$element_$, $eventType$jscomp$63$$, $variables$$);
  }, function($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$self$$) {
    _.$dev$$module$src$log$$().error("AMP-STORY", "Could not get analytics variables", $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$self$$);
  });
}, $maybeLoadImage$$module$extensions$amp_story$0_1$background$$ = function($url$jscomp$200$$) {
  if (!$url$jscomp$200$$) {
    return window.Promise.resolve();
  }
  var $img$jscomp$13$$ = new window.Image;
  $img$jscomp$13$$.src = $url$jscomp$200$$;
  return _.$listenOncePromise$$module$src$event_helper$$($img$jscomp$13$$, "load");
}, $AmpStoryBackground$$module$extensions$amp_story$0_1$background$$ = function($win$jscomp$400$$, $element$jscomp$571$$) {
  this.$element_$ = $element$jscomp$571$$;
  this.$I$ = $win$jscomp$400$$;
  this.$G$ = 0;
  this.$container_$ = this.$element_$.ownerDocument.createElement("div");
  this.$F$ = this.$element_$.ownerDocument.createElement("div");
  this.$D$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$$(this);
  this.$active_$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$$(this);
  this.$container_$.classList.add("i-amphtml-story-background-container");
  this.$F$.classList.add("i-amphtml-story-background-overlay");
  this.$container_$.appendChild(this.$D$);
  this.$container_$.appendChild(this.$active_$);
  this.$container_$.appendChild(this.$F$);
}, $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$$ = function($JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$self_bg$$) {
  $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$self_bg$$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$self_bg$$.$element_$.ownerDocument.createElement("div");
  $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$self_bg$$.classList.add("i-amphtml-story-background");
  return $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$createBackground_$self_bg$$;
}, $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$$ = function($JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$, $color$jscomp$4$$, $url$jscomp$201$$, $initial$jscomp$3_timeout$jscomp$17$$) {
  function $whenFresh$$($color$jscomp$4$$, $url$jscomp$201$$) {
    return $color$jscomp$4$$.then(function() {
      $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$G$ == $countAtAdd$jscomp$1$$ && $url$jscomp$201$$();
    });
  }
  $initial$jscomp$3_timeout$jscomp$17$$ = void 0 === $initial$jscomp$3_timeout$jscomp$17$$ ? !1 : $initial$jscomp$3_timeout$jscomp$17$$;
  var $countAtAdd$jscomp$1$$ = ++$JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$G$, $imgLoad$$ = $maybeLoadImage$$module$extensions$amp_story$0_1$background$$($url$jscomp$201$$);
  $initial$jscomp$3_timeout$jscomp$17$$ = _.$Services$$module$src$services$timerFor$$($JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$I$).$promise$($initial$jscomp$3_timeout$jscomp$17$$ ? 0 : 500);
  var $hidden$jscomp$3$$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$D$;
  _.$setStyle$$module$src$style$$($hidden$jscomp$3$$, "background-image", "none");
  $whenFresh$$($imgLoad$$, function() {
    _.$setStyle$$module$src$style$$($hidden$jscomp$3$$, "background-image", $url$jscomp$201$$ ? "url(" + $url$jscomp$201$$ + ")" : null);
  });
  $whenFresh$$(window.Promise.race([$imgLoad$$, $initial$jscomp$3_timeout$jscomp$17$$]), function() {
    _.$setStyle$$module$src$style$$($hidden$jscomp$3$$, "background-color", $color$jscomp$4$$);
    var $url$jscomp$201$$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$active_$;
    $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$active_$ = $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$D$;
    $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$D$ = $url$jscomp$201$$;
    $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$active_$.classList.add("active");
    $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$self$$.$D$.classList.remove("active");
  });
}, $setClassOnHover$$module$extensions$amp_story$0_1$pagination_buttons$$ = function($hoverEl$$, $targetEl$jscomp$1$$, $className$jscomp$10$$) {
  $hoverEl$$.addEventListener("mouseenter", function() {
    $targetEl$jscomp$1$$.classList.add($className$jscomp$10$$);
  });
  $hoverEl$$.addEventListener("mouseleave", function() {
    $targetEl$jscomp$1$$.classList.remove($className$jscomp$10$$);
  });
}, $PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons$$ = function($doc$jscomp$122$$, $initialState$jscomp$3$$, $storeService$jscomp$1$$) {
  var $$jscomp$this$jscomp$952$$ = this;
  this.$state_$ = $initialState$jscomp$3$$;
  this.element = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$($doc$jscomp$122$$, $BUTTON$$module$extensions$amp_story$0_1$pagination_buttons$$);
  this.element.classList.add($initialState$jscomp$3$$.className);
  this.element.addEventListener("click", function($doc$jscomp$122$$) {
    $doc$jscomp$122$$.preventDefault();
    $$jscomp$this$jscomp$952$$.$state_$.$triggers$ ? $dispatch$$module$extensions$amp_story$0_1$events$$($$jscomp$this$jscomp$952$$.element, $$jscomp$this$jscomp$952$$.$state_$.$triggers$) : $$jscomp$this$jscomp$952$$.$state_$.action && $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($$jscomp$this$jscomp$952$$.$storeService_$, $$jscomp$this$jscomp$952$$.$state_$.action, $$jscomp$this$jscomp$952$$.$state_$.data);
  });
  this.$storeService_$ = $storeService$jscomp$1$$;
}, $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$ = function($JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$, $state$jscomp$85$$) {
  $state$jscomp$85$$ !== $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$.$state_$ && ($JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$.element.classList.remove($JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$.$state_$.className), $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$.element.classList.add($state$jscomp$85$$.className), 
  $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$self$$.$state_$ = $state$jscomp$85$$);
}, $PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons$$ = function($storeService$jscomp$2_win$jscomp$401$$) {
  var $doc$jscomp$123$$ = $storeService$jscomp$2_win$jscomp$401$$.document;
  $storeService$jscomp$2_win$jscomp$401$$ = $Services$$module$src$services$storyStoreServiceV01$$($storeService$jscomp$2_win$jscomp$401$$);
  this.$F$ = new $PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons$$($doc$jscomp$123$$, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$NEXT_PAGE$$, $storeService$jscomp$2_win$jscomp$401$$);
  this.$D$ = new $PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons$$($doc$jscomp$123$$, $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$HIDDEN$$, $storeService$jscomp$2_win$jscomp$401$$);
  this.$F$.element.classList.add("next-container");
  this.$D$.element.classList.add("prev-container");
}, $AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service$$ = function() {
  var $$jscomp$compprop72$$ = {};
  this.$D$ = _.$dict$$module$src$utils$object$$(($$jscomp$compprop72$$.storyPageIndex = null, $$jscomp$compprop72$$.storyPageId = null, $$jscomp$compprop72$$.storyPageCount = null, $$jscomp$compprop72$$.storyProgress = null, $$jscomp$compprop72$$.storyIsMuted = null, $$jscomp$compprop72$$));
}, $AmpStory$$module$extensions$amp_story$0_1$amp_story$$ = function($element$jscomp$573_enXaPseudoLocaleBundle$$) {
  var $$jscomp$super$this$jscomp$101$$ = window.AMP.BaseElement.call(this, $element$jscomp$573_enXaPseudoLocaleBundle$$) || this;
  $$jscomp$super$this$jscomp$101$$.$storeService_$ = new $AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service$$($$jscomp$super$this$jscomp$101$$.$win$);
  _.$registerServiceBuilder$$module$src$service$$($$jscomp$super$this$jscomp$101$$.$win$, "story-store", function() {
    return $$jscomp$super$this$jscomp$101$$.$storeService_$;
  });
  $$jscomp$super$this$jscomp$101$$.$requestService_$ = new $AmpStoryRequestService$$module$extensions$amp_story$0_1$amp_story_request_service$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  _.$registerServiceBuilder$$module$src$service$$($$jscomp$super$this$jscomp$101$$.$win$, "story-request-v01", function() {
    return $$jscomp$super$this$jscomp$101$$.$requestService_$;
  });
  $$jscomp$super$this$jscomp$101$$.$navigationState_$ = new $NavigationState$$module$extensions$amp_story$0_1$navigation_state$$($$jscomp$super$this$jscomp$101$$.$win$, function() {
    return $$jscomp$super$this$jscomp$101$$.$hasBookend_$();
  });
  $$jscomp$super$this$jscomp$101$$.$analytics_$ = new $AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  $$jscomp$super$this$jscomp$101$$.$vsync_$ = _.$JSCompiler_StaticMethods_getVsync$$($$jscomp$super$this$jscomp$101$$);
  $$jscomp$super$this$jscomp$101$$.$localizationService_$ = new $LocalizationService$$module$extensions$amp_story$0_1$localization$$($$jscomp$super$this$jscomp$101$$.$win$);
  $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$$($JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$$($$jscomp$super$this$jscomp$101$$.$localizationService_$, "default", $$jscompDefaultExport$$module$extensions$amp_story$0_1$_locales$default$$), "en", $$jscompDefaultExport$$module$extensions$amp_story$0_1$_locales$en$$);
  $element$jscomp$573_enXaPseudoLocaleBundle$$ = $createPseudoLocale$$module$extensions$amp_story$0_1$localization$$(function($element$jscomp$573_enXaPseudoLocaleBundle$$) {
    return "[" + $element$jscomp$573_enXaPseudoLocaleBundle$$ + " one two]";
  });
  $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$registerLocalizedStringBundle$$($$jscomp$super$this$jscomp$101$$.$localizationService_$, "en-xa", $element$jscomp$573_enXaPseudoLocaleBundle$$);
  _.$registerServiceBuilder$$module$src$service$$($$jscomp$super$this$jscomp$101$$.$win$, "localization-v01", function() {
    return $$jscomp$super$this$jscomp$101$$.$localizationService_$;
  });
  $$jscomp$super$this$jscomp$101$$.$bookend_$ = new $Bookend$$module$extensions$amp_story$0_1$amp_story_bookend$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  $$jscomp$super$this$jscomp$101$$.$shareMenu_$ = new $ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  $$jscomp$super$this$jscomp$101$$.$systemLayer_$ = new $SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer$$($$jscomp$super$this$jscomp$101$$.$win$);
  $$jscomp$super$this$jscomp$101$$.$unsupportedBrowserLayer_$ = new $UnsupportedBrowserLayer$$module$extensions$amp_story$0_1$amp_story_unsupported_browser_layer$$($$jscomp$super$this$jscomp$101$$.$win$);
  new $ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  $$jscomp$super$this$jscomp$101$$.$pages_$ = [];
  $$jscomp$super$this$jscomp$101$$.$adPages_$ = [];
  $$jscomp$super$this$jscomp$101$$.$variableService_$ = new $AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service$$;
  _.$registerServiceBuilder$$module$src$service$$($$jscomp$super$this$jscomp$101$$.$win$, "story-variable", function() {
    return $$jscomp$super$this$jscomp$101$$.$variableService_$.get();
  });
  $$jscomp$super$this$jscomp$101$$.$activePage_$ = null;
  $$jscomp$super$this$jscomp$101$$.$desktopMedia_$ = $$jscomp$super$this$jscomp$101$$.$win$.matchMedia("(min-width: 1024px) and (min-height: 550px)");
  $$jscomp$super$this$jscomp$101$$.$canRotateToDesktopMedia_$ = $$jscomp$super$this$jscomp$101$$.$win$.matchMedia("(min-width: 550px) and (min-height: 1024px)");
  $$jscomp$super$this$jscomp$101$$.$background_$ = null;
  $$jscomp$super$this$jscomp$101$$.$backgroundAudioEl_$ = null;
  $$jscomp$super$this$jscomp$101$$.$paginationButtons_$ = null;
  $$jscomp$super$this$jscomp$101$$.$topBar_$ = null;
  $$jscomp$super$this$jscomp$101$$.$shareWidget_$ = null;
  $$jscomp$super$this$jscomp$101$$.$originWhitelist_$ = $ORIGIN_WHITELIST$$module$extensions$amp_story$0_1$origin_whitelist$$;
  $$jscomp$super$this$jscomp$101$$.$ampStoryHint_$ = new $AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint$$($$jscomp$super$this$jscomp$101$$.$win$, $$jscomp$super$this$jscomp$101$$.element);
  $$jscomp$super$this$jscomp$101$$.$mediaPool_$ = $MediaPool$$module$extensions$amp_story$0_1$media_pool$for$$($$jscomp$super$this$jscomp$101$$);
  $$jscomp$super$this$jscomp$101$$.$timer_$ = _.$Services$$module$src$services$timerFor$$($$jscomp$super$this$jscomp$101$$.$win$);
  $$jscomp$super$this$jscomp$101$$.$platform_$ = _.$Services$$module$src$services$platformFor$$($$jscomp$super$this$jscomp$101$$.$win$);
  return $$jscomp$super$this$jscomp$101$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$) {
  var $pageIds$jscomp$1$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$.$pages_$.map(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$) {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$.element.id;
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$.element.appendChild($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$.$systemLayer_$.$build$($pageIds$jscomp$1$$));
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$self$$);
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:nextpage", function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$);
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:previouspage", function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.$previous$();
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("mutedstate", function($isMuted$jscomp$7$$) {
    $isMuted$jscomp$7$$ ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) : $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$variableService_$.$D$.storyIsMuted = $isMuted$jscomp$7$$;
  }, !0);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("mutedstate", function($isMuted$jscomp$8$$) {
    $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$analytics_$, $isMuted$jscomp$8$$ ? "story-audio-muted" : "story-audio-unmuted");
  }, !1);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("supportedbrowserstate", function($isBrowserSupported$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$, $isBrowserSupported$$);
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:switchpage", function($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.get("bookendstate") || ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$, $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$.detail.targetPageId), 
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$ampStoryHint_$, $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideInternal_$$($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$), 
    null !== $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$.$F$ && ($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$.$timer_$.cancel($JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$.$F$), 
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$hideAllNavigationHint$self$jscomp$inline_4274_e$jscomp$306$$.$F$ = null));
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:pageprogress", function($e$jscomp$307_pageId$jscomp$9$$) {
    var $detail$jscomp$7_progress$jscomp$7$$ = $e$jscomp$307_pageId$jscomp$9$$.detail;
    $e$jscomp$307_pageId$jscomp$9$$ = $detail$jscomp$7_progress$jscomp$7$$.pageId;
    $detail$jscomp$7_progress$jscomp$7$$ = $detail$jscomp$7_progress$jscomp$7$$.progress;
    if ($e$jscomp$307_pageId$jscomp$9$$ === $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.element.id && !$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.$isAd$()) {
      var $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgress$self$jscomp$inline_6396$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$systemLayer_$.$K$;
      _.$hasOwn$$module$src$utils$object$$($JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgress$self$jscomp$inline_6396$$.$F$, $e$jscomp$307_pageId$jscomp$9$$);
      $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgressByIndex_$$($JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgress$self$jscomp$inline_6396$$, $JSCompiler_StaticMethods_ProgressBar$$module$extensions$amp_story$0_1$progress_bar_prototype$updateProgress$self$jscomp$inline_6396$$.$F$[$e$jscomp$307_pageId$jscomp$9$$], $detail$jscomp$7_progress$jscomp$7$$);
    }
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:replay", function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.get("bookendstate") && $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$, "togglebookend", !1);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$pages_$[0].element.id);
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:shownopreviouspagehelp", function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.get("canshowpreviouspagehelp") && $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$ampStoryHint_$, "show-first-page-overlay");
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.addEventListener("ampstory:tapnavigation", function($direction$jscomp$inline_4285_e$jscomp$308$$) {
    $direction$jscomp$inline_4285_e$jscomp$308$$ = $direction$jscomp$inline_4285_e$jscomp$308$$.detail.direction;
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) : 1 === $direction$jscomp$inline_4285_e$jscomp$308$$ ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) : 
    2 === $direction$jscomp$inline_4285_e$jscomp$308$$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.$previous$();
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("bookendstate", function($isActive$jscomp$11$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$, $isActive$jscomp$11$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.element.classList.toggle("i-amphtml-story-bookend-active", $isActive$jscomp$11$$);
    if ($isActive$jscomp$11$$) {
      var $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$hideDeveloperLog$self$jscomp$inline_6404$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$systemLayer_$;
      _.$getMode$$module$src$mode$$().$development$ && $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$hideDeveloperLog$self$jscomp$inline_6404$$.$F$.$hide$();
      $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.$pauseCallback$();
    }
    $isActive$jscomp$11$$ || $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$activePage_$.$resumeCallback$();
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("desktopstate", function($isDesktop$jscomp$8$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$, $isDesktop$jscomp$8$$);
  }, !0);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$win$.document.addEventListener("keydown", function($e$jscomp$309$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$onKeyDown_$($e$jscomp$309$$);
  }, !0);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$storeService_$.subscribe("currentpageid", function($pageId$jscomp$10$$) {
    if (!$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$getPageById$($pageId$jscomp$10$$).$isAd$()) {
      var $history$jscomp$inline_6408$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$win$.history;
      $history$jscomp$inline_6408$$.replaceState && $JSCompiler_StaticMethods_getHistoryStatePageId_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$) !== $pageId$jscomp$10$$ && $history$jscomp$inline_6408$$.replaceState({$ampStoryPageId$:$pageId$jscomp$10$$}, "");
    }
  });
  _.$JSCompiler_StaticMethods_Viewport$$module$src$service$viewport$viewport_impl_prototype$onResize$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$getViewport$(), _.$debounce$$module$src$utils$rate_limit$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$.$win$, function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$);
  }, 300));
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$self$$);
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$) {
  var $gestures$jscomp$5$$ = _.$Gestures$$module$src$gesture$get$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$.element, !0);
  _.$JSCompiler_StaticMethods_onGesture$$($gestures$jscomp$5$$, _.$DoubletapRecognizer$$module$src$gesture_recognizers$$, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$.event.preventDefault();
  });
  _.$JSCompiler_StaticMethods_onGesture$$($gestures$jscomp$5$$, _.$SwipeXYRecognizer$$module$src$gesture_recognizers$$, function($gestures$jscomp$5$$) {
    var $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showNavigationOverlay$self$jscomp$inline_4298_deltaX$jscomp$19_gesture$jscomp$5$$ = $gestures$jscomp$5$$.data;
    $gestures$jscomp$5$$ = $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showNavigationOverlay$self$jscomp$inline_4298_deltaX$jscomp$19_gesture$jscomp$5$$.deltaX;
    $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showNavigationOverlay$self$jscomp$inline_4298_deltaX$jscomp$19_gesture$jscomp$5$$ = $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showNavigationOverlay$self$jscomp$inline_4298_deltaX$jscomp$19_gesture$jscomp$5$$.deltaY;
    !$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$.$storeService_$.get("bookendstate") && (50 <= Math.abs($gestures$jscomp$5$$) || 50 <= -1 * $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showNavigationOverlay$self$jscomp$inline_4298_deltaX$jscomp$19_gesture$jscomp$5$$) && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$.$storeService_$.get("canshownavigationoverlayhint") && 
    ($gestures$jscomp$5$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$installGestureRecognizers_$self$$.$ampStoryHint_$, $gestures$jscomp$5$$.$storeService_$.get("sharemenustate") || $JSCompiler_StaticMethods_AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint_prototype$showHint_$$($gestures$jscomp$5$$, "show-navigation-overlay"));
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListenersForDev_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListenersForDev_$self$$) {
  _.$getMode$$module$src$mode$$().$development$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListenersForDev_$self$$.element.addEventListener("ampstory:devlogentriesavailable", function($e$jscomp$310$$) {
    $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$logAll$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListenersForDev_$self$$.$systemLayer_$, $e$jscomp$310$$.detail);
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$self$$) {
  var $document$jscomp$14$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$self$$.$win$.document;
  _.$setImportantStyles$$module$src$style$$($document$jscomp$14$$.documentElement, {overflow:"hidden"});
  _.$setImportantStyles$$module$src$style$$($document$jscomp$14$$.body, {overflow:"hidden"});
  _.$JSCompiler_StaticMethods_resetTouchZoom$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$self$$.$getViewport$());
  _.$JSCompiler_StaticMethods_disableTouchZoom$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$self$$.$getViewport$());
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$self$$);
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$self_lockOrientation$$) {
  var $screen$jscomp$6$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$self_lockOrientation$$.$win$.screen;
  if ($screen$jscomp$6$$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$self_lockOrientation$$.$canRotateToDesktopMedia_$.matches) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$self_lockOrientation$$ = $screen$jscomp$6$$.$D$ || $screen$jscomp$6$$.$F$ || $screen$jscomp$6$$.$I$ || function() {
    };
    try {
      $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$maybeLockScreenOrientation_$self_lockOrientation$$("portrait");
    } catch ($e$303$$) {
      _.$dev$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-story", "Failed to lock screen orientation:", $e$303$$.message);
    }
  }
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.$paginationButtons_$ = new $PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.$win$);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.$paginationButtons_$.$attach$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.element);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.$navigationState_$.observe(function($e$jscomp$311_pageIndex$jscomp$inline_4303$$) {
    var $JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$self$$.$paginationButtons_$;
    switch($e$jscomp$311_pageIndex$jscomp$inline_4303$$.type) {
      case 0:
        var $$jscomp$inline_4302_totalPages$jscomp$inline_4304$$ = $e$jscomp$311_pageIndex$jscomp$inline_4303$$.value;
        $e$jscomp$311_pageIndex$jscomp$inline_4303$$ = $$jscomp$inline_4302_totalPages$jscomp$inline_4304$$.pageIndex;
        $$jscomp$inline_4302_totalPages$jscomp$inline_4304$$ = $$jscomp$inline_4302_totalPages$jscomp$inline_4304$$.$totalPages$;
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$D$, 0 === $e$jscomp$311_pageIndex$jscomp$inline_4303$$ ? $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$HIDDEN$$ : $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$PREVIOUS_PAGE$$);
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$F$, $e$jscomp$311_pageIndex$jscomp$inline_4303$$ === $$jscomp$inline_4302_totalPages$jscomp$inline_4304$$ - 1 ? $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$SHOW_BOOKEND$$ : $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$NEXT_PAGE$$);
        break;
      case 1:
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$D$, $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$CLOSE_BOOKEND$$);
        break;
      case 2:
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$D$, $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$PREVIOUS_PAGE$$);
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$F$, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$SHOW_BOOKEND$$);
        break;
      case 3:
        $JSCompiler_StaticMethods_PaginationButton$$module$extensions$amp_story$0_1$pagination_buttons_prototype$updateState$$($JSCompiler_StaticMethods_PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons_prototype$onNavigationStateChange$self$jscomp$inline_4300$$.$F$, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$REPLAY$$);
    }
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.$topBar_$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.element.ownerDocument.createElement("div");
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.$topBar_$.classList.add("i-amphtml-story-top", "i-amphtml-story-system-reset");
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.$topBar_$.appendChild($JSCompiler_StaticMethods_buildTopBarShare_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$));
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.element.insertBefore($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.$topBar_$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$self$$.element.firstChild);
}, $JSCompiler_StaticMethods_buildTopBarShare_$$ = function($JSCompiler_StaticMethods_buildTopBarShare_$self$$) {
  var $container$jscomp$31$$ = $renderSimpleTemplate$$module$extensions$amp_story$0_1$simple_template$$($JSCompiler_StaticMethods_buildTopBarShare_$self$$.$win$.document, $SHARE_WIDGET_PILL_CONTAINER$$module$extensions$amp_story$0_1$amp_story$$);
  $JSCompiler_StaticMethods_buildTopBarShare_$self$$.$shareWidget_$ = new $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$($JSCompiler_StaticMethods_buildTopBarShare_$self$$.$win$);
  var $shareLabelEl$$ = $container$jscomp$31$$.querySelector(".i-amphtml-story-share-pill-label");
  $container$jscomp$31$$.insertBefore($JSCompiler_StaticMethods_buildTopBarShare_$self$$.$shareWidget_$.$build$($JSCompiler_StaticMethods_buildTopBarShare_$self$$.$getAmpDoc$()), $shareLabelEl$$);
  return $container$jscomp$31$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$) {
  var $timeoutMs$$ = 5000;
  $timeoutMs$$ = void 0 === $timeoutMs$$ ? 0 : $timeoutMs$$;
  var $pagesToWaitFor_storyLoadPromise$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$) ? [$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$.$pages_$[0], $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$.$pages_$[1]] : 
  [$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$.$pages_$[0]];
  $pagesToWaitFor_storyLoadPromise$$ = window.Promise.all($pagesToWaitFor_storyLoadPromise$$.filter(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$) {
    return !!$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$;
  }).map(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$) {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$.$whenLoaded$();
  }));
  return _.$JSCompiler_StaticMethods_timeoutPromise$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$self$$.$timer_$, $timeoutMs$$, $pagesToWaitFor_storyLoadPromise$$).catch(function() {
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$self$$) {
  $dispatch$$module$extensions$amp_story$0_1$events$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$self$$.element, "ampstory:load");
  _.$JSCompiler_StaticMethods_signal$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$self$$.signals(), "ini-load");
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$self$$.$mutateElement$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$self$$.element.classList.add("i-amphtml-story-loaded");
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$) {
  var $consentEl$jscomp$1$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$.element.querySelector("amp-consent");
  if ($consentEl$jscomp$1$$) {
    _.$childElementByTag$$module$src$dom$$($consentEl$jscomp$1$$, "amp-story-consent") || _.$dev$$module$src$log$$().error("amp-story", "amp-consent must have an amp-story-consent child");
    var $allowedTags$jscomp$2$$ = ["SCRIPT", "AMP-STORY-CONSENT"];
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$ = _.$childElements$$module$src$dom$$($consentEl$jscomp$1$$, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$) {
      return -1 === $allowedTags$jscomp$2$$.indexOf($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$.tagName);
    });
    0 !== $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$.length && (_.$dev$$module$src$log$$().error("amp-story", "amp-consent only allows tags: " + $allowedTags$jscomp$2$$), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$.forEach(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$) {
      return $consentEl$jscomp$1$$.removeChild($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$self_toRemoveChildren$$);
    }));
  }
}, $JSCompiler_StaticMethods_isAmpStoryEnabled_$$ = function($JSCompiler_StaticMethods_isAmpStoryEnabled_$self$$) {
  if (_.$isExperimentOn$$module$src$experiments$$($JSCompiler_StaticMethods_isAmpStoryEnabled_$self$$.$win$, "amp-story") || "file:" === $JSCompiler_StaticMethods_isAmpStoryEnabled_$self$$.$win$.location.protocol) {
    return !0;
  }
  var $origin$jscomp$31$$ = _.$getSourceOrigin$$module$src$url$$($JSCompiler_StaticMethods_isAmpStoryEnabled_$self$$.$win$.location);
  return $JSCompiler_StaticMethods_isOriginWhitelisted_$$($JSCompiler_StaticMethods_isAmpStoryEnabled_$self$$, $origin$jscomp$31$$);
}, $JSCompiler_StaticMethods_isOriginWhitelisted_$$ = function($JSCompiler_StaticMethods_isOriginWhitelisted_$self$$, $origin$jscomp$32$$) {
  var $domains$jscomp$6$$ = _.$parseUrlDeprecated$$module$src$url$$($origin$jscomp$32$$).hostname.split(".");
  return $domains$jscomp$6$$.some(function($origin$jscomp$32$$, $index$jscomp$143$$) {
    return $JSCompiler_StaticMethods_isOriginWhitelisted_$self$$.$originWhitelist_$.includes(_.$stringHash32$$module$src$string$$($domains$jscomp$6$$.slice($index$jscomp$143$$, $domains$jscomp$6$$.length).join(".").toLowerCase()));
  });
}, $JSCompiler_StaticMethods_assertAmpStoryExperiment_$$ = function($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$) {
  if (!$JSCompiler_StaticMethods_isAmpStoryEnabled_$$($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$)) {
    var $errorIconEl$$ = $JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$win$.document.createElement("div");
    $errorIconEl$$.classList.add("i-amphtml-story-experiment-icon");
    $errorIconEl$$.classList.add("i-amphtml-story-experiment-icon-error");
    var $errorMsgEl$$ = $JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$win$.document.createElement("span");
    $errorMsgEl$$.textContent = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$localizationService_$, "19");
    var $experimentsLinkEl$$ = $JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$win$.document.createElement("button");
    $experimentsLinkEl$$.textContent = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$localizationService_$, "0");
    $experimentsLinkEl$$.addEventListener("click", function() {
      _.$toggleExperiment$$module$src$experiments$$($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$win$, "amp-story", !0);
      $errorIconEl$$.classList.remove("i-amphtml-story-experiment-icon-error");
      $errorIconEl$$.classList.add("i-amphtml-story-experiment-icon-done");
      $errorMsgEl$$.textContent = $JSCompiler_StaticMethods_LocalizationService$$module$extensions$amp_story$0_1$localization_prototype$getLocalizedString$$($JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$localizationService_$, "1");
      _.$removeElement$$module$src$dom$$($experimentsLinkEl$$);
    });
    var $errorEl$$ = $JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.$win$.document.createElement("div");
    $errorEl$$.classList.add("i-amphtml-story-experiment-error");
    $errorEl$$.appendChild($errorIconEl$$);
    $errorEl$$.appendChild($errorMsgEl$$);
    $errorEl$$.appendChild($experimentsLinkEl$$);
    $JSCompiler_StaticMethods_assertAmpStoryExperiment_$self$$.element.appendChild($errorEl$$);
    _.$user$$module$src$log$$().error("amp-story", "enable amp-story experiment");
  }
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializePages_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializePages_$self$$) {
  var $pageImplPromises$$ = Array.prototype.map.call($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializePages_$self$$.element.querySelectorAll("amp-story-page"), function($pageImplPromises$$, $index$jscomp$144$$) {
    return $pageImplPromises$$.$getImpl$().then(function($pageImplPromises$$) {
      $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializePages_$self$$.$pages_$[$index$jscomp$144$$] = $pageImplPromises$$;
    });
  });
  return window.Promise.all($pageImplPromises$$);
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$) {
  var $activePage$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$.$activePage_$, $lastPage$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$.$pages_$[$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$.$pages_$.length - $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$.$adPages_$.length - 
  1];
  $activePage$$.element.hasAttribute("i-amphtml-advance-to") || $activePage$$ !== $lastPage$$ ? $activePage$$.next(void 0) : $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$.$hasBookend_$().then(function($activePage$$) {
    $activePage$$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$showBookend_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$self$$);
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$, $targetPageId$jscomp$2$$) {
  var $targetPage$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$getPageById$($targetPageId$jscomp$2$$), $pageIndex$jscomp$6$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$, $targetPage$$);
  $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$storeService_$, "changepage", {id:$targetPageId$jscomp$2$$, index:$pageIndex$jscomp$6$$});
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$, $targetPage$$.element, !$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$);
  $targetPage$$.$isAd$() ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.element.setAttribute("ad-showing", "");
  }) : ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.element.removeAttribute("ad-showing");
  }), $JSCompiler_StaticMethods_setActiveSegmentId$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$systemLayer_$.$K$, $targetPageId$jscomp$2$$));
  $JSCompiler_StaticMethods_NavigationState$$module$extensions$amp_story$0_1$navigation_state_prototype$updateActivePage$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$navigationState_$, $pageIndex$jscomp$6$$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$pages_$.length - $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$adPages_$.length, 
  $targetPage$$.element.id);
  var $oldPage$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$, $activePriorSibling$$ = $targetPage$$.element.previousElementSibling, $previousActivePriorSibling$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.element.querySelector("[" + _.$cssEscape$$module$third_party$css_escape$css_escape$$("pre-active") + "]");
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$ = $targetPage$$;
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$resetDeveloperLogs$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$systemLayer_$);
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$setDeveloperLogContextString$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$systemLayer_$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$.element.id);
  return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$$($targetPage$$).then(function() {
    _.$Services$$module$src$services$actionServiceForDoc$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.element).$trigger$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$.element, "active", null, 100);
    $oldPage$$ && $oldPage$$.setActive(!1);
    $targetPage$$.setActive(!0);
    $activePriorSibling$$ && _.$matches$$module$src$dom$$($activePriorSibling$$, "amp-story-page") && $activePriorSibling$$.setAttribute("pre-active", "");
    $previousActivePriorSibling$$ && $previousActivePriorSibling$$.removeAttribute("pre-active");
    $oldPage$$ || $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$storeService_$.get("mutedstate") || ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$));
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$activePage_$) + 1 >= $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$pages_$.length - 
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$.$adPages_$.length && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$self$$);
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$) {
  if (_.$JSCompiler_StaticMethods_isSafari$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.$platform_$) || _.$JSCompiler_StaticMethods_isIos$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.$platform_$)) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$) || $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.$mutateElement$(function() {
      _.$toggle$$module$src$style$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.element, !1);
      0 <= $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.element.offsetHeight && _.$toggle$$module$src$style$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$forceRepaintForSafari_$self$$.element, !0);
    });
  }
}, $JSCompiler_StaticMethods_getHistoryStatePageId_$$ = function($JSCompiler_StaticMethods_getHistoryStatePageId_$self_state$jscomp$86$$) {
  return ($JSCompiler_StaticMethods_getHistoryStatePageId_$self_state$jscomp$86$$ = _.$getState$$module$src$history$$($JSCompiler_StaticMethods_getHistoryStatePageId_$self_state$jscomp$86$$.$win$.history)) ? $JSCompiler_StaticMethods_getHistoryStatePageId_$self_state$jscomp$86$$.$ampStoryPageId$ : null;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$) {
  var $isDesktop$jscomp$9$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$);
  $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$.$storeService_$, "toggledesktop", $isDesktop$jscomp$9$$);
  $isDesktop$jscomp$9$$ ? $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$.$storeService_$, "togglelandscape", !1) : _.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$.$vsync_$, {measure:function($isDesktop$jscomp$9$$) {
    var $state$jscomp$87$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$.element;
    $isDesktop$jscomp$9$$.$isLandscape$ = $state$jscomp$87$$.offsetWidth > $state$jscomp$87$$.offsetHeight;
  }, $mutate$:function($isDesktop$jscomp$9$$) {
    $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$self$$.$storeService_$, "togglelandscape", $isDesktop$jscomp$9$$.$isLandscape$);
  }}, {});
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$, $isDesktop$jscomp$10$$) {
  $isDesktop$jscomp$10$$ ? ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.element.setAttribute("desktop", "");
  }), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$topBar_$ || $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildTopBar_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$background_$ || ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$background_$ = 
  new $AmpStoryBackground$$module$extensions$amp_story$0_1$background$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$win$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.element), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$background_$.$attach$()), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$activePage_$ && 
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$activePage_$.element, !0)) : ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$shareMenu_$.$build$(), 
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.$vsync_$.$mutate$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onDesktopStateUpdate_$self$$.element.removeAttribute("desktop");
  }));
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$self$$) {
  return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$self$$.$desktopMedia_$.matches && !_.$JSCompiler_StaticMethods_isBot$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$self$$.$platform_$) && !_.$isExperimentOn$$module$src$experiments$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$self$$.$win$, "disable-amp-story-desktop");
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$, $fallbackEl_isBrowserSupported$jscomp$1$$) {
  $fallbackEl_isBrowserSupported$jscomp$1$$ && _.$dev$$module$src$log$$().error("amp-story", "No handler to exit unsupported browser state.");
  $fallbackEl_isBrowserSupported$jscomp$1$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.$getFallback$();
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.$mutateElement$(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.element.classList.add("i-amphtml-story-fallback");
  });
  $fallbackEl_isBrowserSupported$jscomp$1$$ ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.$toggleFallback$(!0) : $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.element.appendChild($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onSupportedBrowserStateUpdate_$self$$.$unsupportedBrowserLayer_$.$build$());
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$self$$, $pageElement$jscomp$1$$, $initial$jscomp$4$$) {
  $initial$jscomp$4$$ = void 0 === $initial$jscomp$4$$ ? !1 : $initial$jscomp$4$$;
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$self$$.$background_$ && _.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$(_.$JSCompiler_StaticMethods_getVsync$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$self$$), {measure:function($initial$jscomp$4$$) {
    var $state$jscomp$89$$ = $pageElement$jscomp$1$$.querySelector('[template="fill"]:not(.i-amphtml-hidden-by-media-query)');
    if ($state$jscomp$89$$) {
      var $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ = $state$jscomp$89$$.querySelector("[poster]:not(.i-amphtml-hidden-by-media-query)");
      $state$jscomp$89$$ = $state$jscomp$89$$.querySelector("[src]:not(.i-amphtml-hidden-by-media-query)");
      $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ = $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ ? $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$.getAttribute("poster") : "";
      $state$jscomp$89$$ = $state$jscomp$89$$ ? $state$jscomp$89$$.getAttribute("src") : "";
      $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ = $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ || $state$jscomp$89$$;
    } else {
      $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$ = null;
    }
    $initial$jscomp$4$$.url = $JSCompiler_inline_result$jscomp$899_fillPoster$jscomp$inline_4320_fillPosterElement$jscomp$inline_4318$$;
    $initial$jscomp$4$$.color = _.$computedStyle$$module$src$style$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$self$$.$win$, $pageElement$jscomp$1$$).getPropertyValue("background-color");
  }, $mutate$:function($pageElement$jscomp$1$$) {
    $JSCompiler_StaticMethods_AmpStoryBackground$$module$extensions$amp_story$0_1$background_prototype$setBackground$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateBackground_$self$$.$background_$, $pageElement$jscomp$1$$.color, $pageElement$jscomp$1$$.url, $initial$jscomp$4$$);
  }}, {});
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$showBookend_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$showBookend_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$showBookend_$self$$).then(function() {
    $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$showBookend_$self$$.$storeService_$, "togglebookend", !0);
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$, $isActive$jscomp$13$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$) && ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$ = _.$scopedQuerySelectorAll$$module$src$dom$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$.element, 
  "amp-story-page, .i-amphtml-story-system-layer"), Array.prototype.forEach.call($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$) {
    $isActive$jscomp$13$$ ? _.$setImportantStyles$$module$src$style$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$, {opacity:0, transition:"opacity 0.1s"}) : _.$resetStyles$$module$src$style$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$toggleElementsOnBookend_$self_elements$jscomp$39$$, ["opacity", "transition"]);
  }));
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$) {
  var $distanceMap$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$, 0, {}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$.$activePage_$.element.id), $pagesByDistance$$ = [];
  Object.keys($distanceMap$$).forEach(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$) {
    var $pageId$jscomp$13$$ = $distanceMap$$[$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$];
    $pagesByDistance$$[$pageId$jscomp$13$$] || ($pagesByDistance$$[$pageId$jscomp$13$$] = []);
    $pagesByDistance$$[$pageId$jscomp$13$$].push($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$self$$);
  });
  return $pagesByDistance$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$self$$, $distance$jscomp$13$$, $map$jscomp$2$$, $pageId$jscomp$14$$) {
  if (void 0 !== $map$jscomp$2$$[$pageId$jscomp$14$$] && $map$jscomp$2$$[$pageId$jscomp$14$$] <= $distance$jscomp$13$$) {
    return $map$jscomp$2$$;
  }
  $map$jscomp$2$$[$pageId$jscomp$14$$] = $distance$jscomp$13$$;
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getAdjacentPageIds$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$self$$.$getPageById$($pageId$jscomp$14$$)).forEach(function($pageId$jscomp$14$$) {
    void 0 !== $map$jscomp$2$$[$pageId$jscomp$14$$] && $map$jscomp$2$$[$pageId$jscomp$14$$] <= $distance$jscomp$13$$ || ($map$jscomp$2$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageDistanceMapHelper_$self$$, $distance$jscomp$13$$ + 1, $map$jscomp$2$$, $pageId$jscomp$14$$));
  });
  return $map$jscomp$2$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$) {
  if (_.$JSCompiler_StaticMethods_isBot$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$.$platform_$)) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$.$pages_$.forEach(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$) {
      $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$.$setDistance$(0);
    });
  } else {
    var $pagesByDistance$jscomp$1$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPagesByDistance_$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$);
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$.$mutateElement$(function() {
      $pagesByDistance$jscomp$1$$.forEach(function($pagesByDistance$jscomp$1$$, $distance$jscomp$14$$) {
        $pagesByDistance$jscomp$1$$.forEach(function($pagesByDistance$jscomp$1$$) {
          $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$self$$.$getPageById$($pagesByDistance$jscomp$1$$).$setDistance$($distance$jscomp$14$$);
        });
      });
    });
  }
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$) {
  var $backgroundAudioEl$$ = $upgradeBackgroundAudio$$module$extensions$amp_story$0_1$audio$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.element);
  $backgroundAudioEl$$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.$activePage_$.$whenLoaded$().then(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.$mediaPool_$.register($backgroundAudioEl$$);
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.$mediaPool_$.$preload$($backgroundAudioEl$$);
  }).then(function() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.$backgroundAudioEl_$ = _.$childElement$$module$src$dom$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.element, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$) {
      return "audio" === $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$registerAndPreloadBackgroundAudio_$self$$.tagName.toLowerCase();
    });
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$self$$.$bookend_$.$build$();
  return $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildAndPreloadBookend_$self$$.$bookend_$);
}, $JSCompiler_StaticMethods_getPageIndexById_$$ = function($JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$, $id$jscomp$95$$) {
  $JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$ = _.$findIndex$$module$src$utils$array$$($JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$.$pages_$, function($JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$) {
    return $JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$.element.id === $id$jscomp$95$$;
  });
  0 > $JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$ && _.$user$$module$src$log$$().error("amp-story", 'Story refers to page "' + $id$jscomp$95$$ + '", but no such page exists.');
  return $JSCompiler_StaticMethods_getPageIndexById_$self_pageIndex$jscomp$8$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$self$$, $desiredPage$$) {
  return _.$findIndex$$module$src$utils$array$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$self$$.$pages_$, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$self$$) {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageIndex$self$$ === $desiredPage$$;
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$self$$, $element$jscomp$575$$) {
  var $pageIndex$jscomp$10$$ = _.$findIndex$$module$src$utils$array$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$self$$.$pages_$, function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$self$$) {
    return !!_.$closest$$module$src$dom$$($element$jscomp$575$$, function($element$jscomp$575$$) {
      return $element$jscomp$575$$ === $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$self$$.element;
    });
  });
  return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getPageContainingElement_$self$$.$pages_$[$pageIndex$jscomp$10$$] || null;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$$ = function($$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$) {
  var $audioMediaElementsCount$$ = $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$.element.querySelectorAll("amp-audio, [background-audio]").length, $videoMediaElementsCount$$ = $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$.element.querySelectorAll("amp-video").length;
  $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$.element.hasAttribute("background-audio") && $audioMediaElementsCount$$++;
  $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$ = {};
  return $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$.audio = Math.min($audioMediaElementsCount$$, $MAX_MEDIA_ELEMENT_COUNTS$$module$extensions$amp_story$0_1$amp_story$$.audio), $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$.video = Math.min($videoMediaElementsCount$$, $MAX_MEDIA_ELEMENT_COUNTS$$module$extensions$amp_story$0_1$amp_story$$.video), 
  $$jscomp$compprop74_JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$getMaxMediaElementCounts$self$$;
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$) {
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$.$backgroundAudioEl_$ && $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$.$mediaPool_$.$mute$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$.$backgroundAudioEl_$);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$.$pages_$.forEach(function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$) {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$mute_$self$$.$muteAllMedia$();
  });
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$) {
  function $unmuteAllMedia$$() {
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$backgroundAudioEl_$ && ($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$mediaPool_$.$unmute$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$backgroundAudioEl_$), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$mediaPool_$.play($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$backgroundAudioEl_$));
    $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$activePage_$ && $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$unmuteAllMedia$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$activePage_$);
  }
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$unmute_$self$$.$mediaPool_$.$blessAll$().then($unmuteAllMedia$$, $unmuteAllMedia$$);
}, $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$$ = function($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$self$$) {
  var $hasStoryAudio$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$self$$.element.hasAttribute("background-audio");
  $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$($JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$self$$.$storeService_$, "togglehasaudio", !!$JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$updateAudioIcon_$self$$.element.querySelector("amp-audio, amp-video:not([noaudio]), [background-audio]") || $hasStoryAudio$$);
}, $AmpStory$$module$extensions$amp_story$0_1$amp_story$isBrowserSupported$$ = function($win$jscomp$403$$) {
  return !!($win$jscomp$403$$.CSS && $win$jscomp$403$$.CSS.supports && $win$jscomp$403$$.CSS.supports("display", "grid"));
};
var $LANGUAGE_CODE_CHUNK_REGEX$$module$extensions$amp_story$0_1$localization$$ = /\w+/gi;
var $$jscomp$compprop54$$ = {}, $$jscompDefaultExport$$module$extensions$amp_story$0_1$_locales$default$$ = ($$jscomp$compprop54$$["28"] = {string:"Privacy settings"}, $$jscomp$compprop54$$["27"] = {string:"Change data privacy settings"}, $$jscomp$compprop54$$["22"] = {string:"Accept"}, $$jscomp$compprop54$$["23"] = {string:"Decline"}, $$jscomp$compprop54$$["0"] = {string:"Enable"}, $$jscomp$compprop54$$["1"] = {string:"Experiment enabled.  Please reload."}, $$jscomp$compprop54$$["4"] = {string:":("}, 
$$jscomp$compprop54$$["17"] = {string:"Share"}, $$jscomp$compprop54$$["18"] = {string:"Expand your window to view this experience"}, $$jscomp$compprop54$$["19"] = {string:"You must enable the amp-story experiment to view this content."}, $$jscomp$compprop54$$["20"] = {string:"The page is best viewed in portrait mode"}, $$jscomp$compprop54$$["21"] = {string:"We're sorry, it looks like your browser doesn't support this experience"}, $$jscomp$compprop54$$);
var $$jscomp$compprop55$$ = {}, $$jscompDefaultExport$$module$extensions$amp_story$0_1$_locales$en$$ = ($$jscomp$compprop55$$["28"] = {string:"Privacy settings", description:"Title for a section that allows the user to configure their privacy settings"}, $$jscomp$compprop55$$["27"] = {string:"Change data privacy settings", description:"Label for a button that allows the user to change their choice to consent to providing their cookie access."}, $$jscomp$compprop55$$["22"] = {string:"Accept", description:"Label for a button that allows the user to consent to providing their cookie access."}, 
$$jscomp$compprop55$$["23"] = {string:"Decline", description:"Label for a button that allows the user to disconsent to providing their cookie access."}, $$jscomp$compprop55$$["25"] = {string:"View on original domain:", description:"Label for a heading of a dialog that shows the user the domain from which the story is served."}, $$jscomp$compprop55$$["26"] = {string:"More about AMP results", description:"Label for a link to documentation on how AMP links are handled."}, $$jscomp$compprop55$$["0"] = 
{string:"Enable", description:"Label for a button that enables the amp-story experiment."}, $$jscomp$compprop55$$["1"] = {string:"Experiment enabled.  Please reload.", description:"Text that is shown once the amp-story experiment has been successfully enabled."}, $$jscomp$compprop55$$["2"] = {string:"Tap Next", description:"Label indicating that users can navigate to the next page, in the amp-story hint UI."}, $$jscomp$compprop55$$["3"] = {string:"Tap Back", description:"Label indicating that users can navigate to the previous page, in the amp-story hint UI."}, 
$$jscomp$compprop55$$["4"] = {string:"Could not copy link to clipboard :(", description:"String shown in a failure message to inform the user that a link could not be successfully copied to their clipboard."}, $$jscomp$compprop55$$["5"] = {string:"Link copied!", description:"String shown in a confirmation message to inform the user that a link was successfully copied to their clipboard."}, $$jscomp$compprop55$$["6"] = {string:"Email", description:"Button label for the share target that shares a link via email."}, 
$$jscomp$compprop55$$["7"] = {string:"Facebook", description:"Button label for the share target that shares a link via Facebook."}, $$jscomp$compprop55$$["8"] = {string:"Google+", description:"Button label for the share target that shares a link via Google+."}, $$jscomp$compprop55$$["9"] = {string:"Get Link", description:"Button label for the share target that shares a link via by copying it to the user's clipboard."}, $$jscomp$compprop55$$["10"] = {string:"LinkedIn", description:"Button label for the share target that shares a link via LinkedIn."}, 
$$jscomp$compprop55$$["11"] = {string:"Pinterest", description:"Button label for the share target that shares a link via Pinterest."}, $$jscomp$compprop55$$["12"] = {string:"SMS", description:"Button label for the share target that shares a link via SMS."}, $$jscomp$compprop55$$["13"] = {string:"More", description:"Button label for the share target that shares a link via deferral to the operating system's native sharing handler."}, $$jscomp$compprop55$$["14"] = {string:"Tumblr", description:"Button label for the share target that shares a link via Tumblr."}, 
$$jscomp$compprop55$$["15"] = {string:"Twitter", description:"Button label for the share target that shares a link via Twitter."}, $$jscomp$compprop55$$["16"] = {string:"Whatsapp", description:"Button label for the share target that shares a link via Whatsapp."}, $$jscomp$compprop55$$["17"] = {string:"Share", description:"Label for the expandable share widget shown in the desktop UI."}, $$jscomp$compprop55$$["18"] = {string:"Expand your window to view this experience", description:"Text for a warning screen that informs the user that stories are only supported in larger browser windows."}, 
$$jscomp$compprop55$$["19"] = {string:"You must enable the amp-story experiment to view this content.", description:"Text for a warning screen that informs the user that they must enable an experiment to use stories."}, $$jscomp$compprop55$$["20"] = {string:"The page is best viewed in portrait mode", description:"Text for a warning screen that informs the user that stories are only supported in portrait orientation."}, $$jscomp$compprop55$$["21"] = {string:"We're sorry, it looks like your browser doesn't support this experience", 
description:"Text for a warning screen that informs the user that their browser does not support stories."}, $$jscomp$compprop55$$);
var $SHARE_PROVIDER_LOCALIZED_STRING_ID$$module$extensions$amp_story$0_1$amp_story_share$$ = _.$map$$module$src$utils$object$$({system:"13", email:"6", facebook:"7", linkedin:"10", pinterest:"11", gplus:"8", tumblr:"14", twitter:"15", whatsapp:"16", sms:"12"}), $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-widget"}), children:[{tag:"ul", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-list"}), 
children:[{tag:"li", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-system"})}]}]}, $SHARE_ITEM_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$ = {tag:"li", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-item"})}, $LINK_SHARE_ITEM_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-icon i-amphtml-story-share-icon-link"}), $localizedStringId$:"9"};
$ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$build$ = function($ampdoc$jscomp$196_container$jscomp$inline_4107$$) {
  this.$ampdoc_$ = $ampdoc$jscomp$196_container$jscomp$inline_4107$$;
  this.$I$ = $Services$$module$src$services$localizationServiceForOrNullV01$$(this.$win$);
  this.$D$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$win$.document, $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share$$);
  this.$F$();
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$maybeAddLinkShareButton_$$(this);
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$$(this) && ($ampdoc$jscomp$196_container$jscomp$inline_4107$$ = this.$D$.querySelector(".i-amphtml-story-share-system"), $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$$(this), $ampdoc$jscomp$196_container$jscomp$inline_4107$$.appendChild($buildProvider$$module$extensions$amp_story$0_1$amp_story_share$$(this.$win$.document, 
  "system")));
  return this.$D$;
};
$ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$F$ = function() {
  var $$jscomp$this$jscomp$863$$ = this;
  $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$loadRequiredExtensions$$(this);
  this.$requestService_$.$F$().then(function($config$jscomp$79_providers$$) {
    ($config$jscomp$79_providers$$ = $config$jscomp$79_providers$$ && ($config$jscomp$79_providers$$.shareProviders || $config$jscomp$79_providers$$["share-providers"])) && $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$setProviders_$$($$jscomp$this$jscomp$863$$, $config$jscomp$79_providers$$);
  });
};
_.$$jscomp$inherits$$($ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$, $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$);
$ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$build$ = function($ampdoc$jscomp$199$$) {
  var $$jscomp$this$jscomp$865$$ = this;
  $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$build$.call(this, $ampdoc$jscomp$199$$);
  this.$D$.classList.add("i-amphtml-story-share-widget-scrollable");
  _.$JSCompiler_StaticMethods_Viewport$$module$src$service$viewport$viewport_impl_prototype$onResize$$(_.$Services$$module$src$services$viewportForDoc$$($ampdoc$jscomp$199$$), _.$throttle$$module$src$utils$rate_limit$$(this.$win$, function() {
    return $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$$($$jscomp$this$jscomp$865$$);
  }, 100));
  return this.$D$;
};
$ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$F$ = function() {
  $ShareWidget$$module$extensions$amp_story$0_1$amp_story_share$$.prototype.$F$.call(this);
  $JSCompiler_StaticMethods_ScrollableShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$applyButtonPadding_$$(this);
};
var $EmbedMode$$module$extensions$amp_story$0_1$embed_mode$$ = {$NOT_EMBEDDED$:0, $NAME_TBD$:1, $NO_SHARING$:2};
$AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service$$.prototype.get = function($key$jscomp$142$$) {
  if (_.$hasOwn$$module$src$utils$object$$(this.$state_$, $key$jscomp$142$$)) {
    return this.$state_$[$key$jscomp$142$$];
  }
  _.$dev$$module$src$log$$().error("amp-story", "Unknown state " + $key$jscomp$142$$ + ".");
};
$AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service$$.prototype.subscribe = function($key$jscomp$143$$, $listener$jscomp$86$$, $callToInitialize$jscomp$1$$) {
  $callToInitialize$jscomp$1$$ = void 0 === $callToInitialize$jscomp$1$$ ? !1 : $callToInitialize$jscomp$1$$;
  _.$hasOwn$$module$src$utils$object$$(this.$state_$, $key$jscomp$143$$) ? (this.$D$[$key$jscomp$143$$] || (this.$D$[$key$jscomp$143$$] = new _.$Observable$$module$src$observable$$), this.$D$[$key$jscomp$143$$].add($listener$jscomp$86$$), $callToInitialize$jscomp$1$$ && $listener$jscomp$86$$(this.get($key$jscomp$143$$))) : _.$dev$$module$src$log$$().error("amp-story", "Can't subscribe to unknown state " + $key$jscomp$143$$ + ".");
};
var $NEW_COMPONENTS$$module$extensions$amp_story$0_1$related_articles$$ = ["landscape", "portrait", "cta-link", "heading", "textbox"];
var $ROOT_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_bookend$$ = {tag:"section", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend i-amphtml-story-system-reset i-amphtml-hidden"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-overflow"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-inner"})}]}]}, $REPLAY_ICON_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_bookend$$ = 
{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-replay-icon"})};
$Bookend$$module$extensions$amp_story$0_1$amp_story_bookend$$.prototype.$build$ = function() {
  var $$jscomp$this$jscomp$868$$ = this;
  if (!this.$isBuilt_$) {
    this.$isBuilt_$ = !0;
    this.$G$ = this.$D$.document.createElement("div");
    this.$bookendEl_$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$D$.document, $ROOT_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_bookend$$);
    $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$(this.$G$, this.$bookendEl_$, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' fill='%23fff' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend{text-align:left!important;color:#fff!important;bottom:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;left:0!important;position:absolute!important;right:0!important;top:0!important;z-index:100001!important;-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.3s cubic-bezier(0.0,0.0,0.2,1),-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-bookend.i-amphtml-hidden{-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.2s cubic-bezier(0.4,0.0,1,1),-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;-webkit-transform:translateY(100vh)!important;transform:translateY(100vh)!important;pointer-events:none!important}.i-amphtml-story-bookend-overflow{overflow:auto!important;-webkit-overflow-scrolling:touch!important;margin-top:auto!important}.i-amphtml-story-bookend-inner{margin:88px 0 0!important;position:relative!important;padding-top:32px!important;overflow:hidden!important}.i-amphtml-story-bookend-inner:before{content:\" \"!important;display:block!important;z-index:-1!important;background:rgba(0,0,0,0.7)!important;position:absolute!important;left:8px!important;top:8px!important;bottom:8px!important;right:8px!important;border-radius:8px!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-inner:before{left:0!important;top:0!important;bottom:0!important;right:0!important;border-radius:0!important}.i-amphtml-story-bookend-heading{text-transform:uppercase!important;font-size:12px!important;padding-bottom:8px!important;margin:48px 0 8px!important;border-bottom:1px solid hsla(0,0%,100%,0.25)!important;color:hsla(0,0%,100%,0.54)!important;font-family:Roboto,sans-serif;font-weight:700!important;letter-spacing:0.83px!important;line-height:1!important}.i-amphtml-story-bookend-consent{margin:0 32px 32px!important}.i-amphtml-story-bookend-consent .i-amphtml-story-bookend-heading{margin-left:0!important;margin-right:0!important}.i-amphtml-story-bookend-article-meta{font-family:Roboto,sans-serif;font-weight:400!important;font-size:14px!important;line-height:1!important;color:hsla(0,0%,100%,0.6)!important}.i-amphtml-story-bookend-article{box-sizing:border-box!important;display:block!important;text-decoration:none!important;color:inherit!important;overflow:hidden!important;-webkit-box-flex:1!important;-ms-flex:1 0 320px!important;flex:1 0 320px!important;min-width:33%!important;margin:24px 0!important;padding:0 32px!important}@media (min-width:640px){.i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:960px){.i-amphtml-story-bookend-article{max-width:33%!important}}.i-amphtml-story-bookend-article-heading,.i-amphtml-story-bookend-consent-button{font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:16px!important;color:#fff!important;line-height:1.4;margin:0 0 8px!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-image{width:100px!important;height:100px!important;border-radius:8px!important;overflow:hidden}.i-amphtml-story-bookend-article-image.amp-notsupported{display:none!important}.i-amphtml-story-bookend-article-image>img{-o-object-fit:cover!important;object-fit:cover!important;width:100%!important;height:100%!important}.i-amphtml-story-bookend-replay-image{background-position:50%!important;background-size:cover!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-icon,.i-amphtml-story-bookend-replay-image{float:right!important;margin-left:24px!important;position:relative!important}.i-amphtml-story-bookend-replay{padding:16px 0!important;margin:0 0 24px!important;overflow:hidden!important}.i-amphtml-story-bookend-replay-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") 50% no-repeat!important}.i-amphtml-story-bookend-replay-image>.i-amphtml-story-bookend-replay-icon{width:100%!important;height:100%!important;background-color:rgba(0,0,0,0.3)!important;position:absolute!important;margin-left:0!important}.i-amphtml-story-bookend-replay>.i-amphtml-story-bookend-replay-icon{width:48px!important;height:48px!important;background-color:rgba(60,60,60,0.5)!important;position:static!important;border-radius:4px!important}.i-amphtml-story-bookend-heading+.i-amphtml-story-bookend-article-set{border-top:none!important}.i-amphtml-story-bookend-article-set{border-top:1px solid hsla(0,0%,100%,0.25)!important;margin-bottom:32px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-bookend-heading,.i-amphtml-story-bookend-replay{margin-left:32px!important;margin-right:32px!important}.i-amphtml-story-bookend-fullbleed:before{content:\" \"!important;display:block!important;background-image:-webkit-linear-gradient(bottom,rgba(1,1,1,0),#000)!important;background-image:linear-gradient(0deg,rgba(1,1,1,0),#000)!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:40px!important;pointer-events:none!important;z-index:1!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}[desktop].i-amphtml-story-bookend{-webkit-transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;-webkit-transform:translateY(0)!important;transform:translateY(0)!important;opacity:1!important}[desktop].i-amphtml-story-bookend.i-amphtml-hidden{-webkit-transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1)!important;-webkit-transform:translateY(100vh)!important;transform:translateY(100vh)!important;opacity:0!important}[desktop].i-amphtml-story-bookend .i-amphtml-story-share-widget{display:none!important}[desktop] .i-amphtml-story-bookend-inner{box-sizing:border-box!important;min-height:100vh!important;padding:104px 156px 64px!important;margin:0!important}[desktop] .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-replay{display:none!important}[desktop] .i-amphtml-story-bookend-overflow{margin-top:0!important;margin-bottom:0!important}@media (min-width:952px){[desktop] .i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:1272px){[desktop] .i-amphtml-story-bookend-article{max-width:33%!important}}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-bookend.css*/");
    this.$replayButton_$ = $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$buildReplayButton_$$(this);
    var $ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$ = _.$getAmpdoc$$module$src$service$$(this.$F$), $innerContainer$$ = this.$bookendEl_$.firstElementChild.firstElementChild;
    $innerContainer$$.appendChild(this.$replayButton_$);
    $innerContainer$$.appendChild(this.$shareWidget_$.$build$($ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$));
    if ($ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$ = this.$storeService_$.get("consentid")) {
      $ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$D$.document, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-consent"}), children:[{tag:"h3", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-heading"}), $localizedStringId$:"28"}, {tag:"h2", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-bookend-consent-button", on:"tap:" + 
      String($ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$) + ".prompt", role:"button", "aria-label":"Change data privacy settings"}), $localizedStringId$:"27"}]}), $innerContainer$$.appendChild($ampdoc$jscomp$200_consentId$jscomp$3_promptConsentEl$$);
    }
    $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$initializeListeners_$$(this);
    this.$vsync_$.$mutate$(function() {
      $$jscomp$this$jscomp$868$$.$F$.appendChild($$jscomp$this$jscomp$868$$.$G$);
    });
  }
};
$Bookend$$module$extensions$amp_story$0_1$amp_story_bookend$$.prototype.$isActive_$ = function() {
  return !!this.$storeService_$.get("bookendstate");
};
var $DEFAULT_OPTIONAL_PARAMETERS$$module$extensions$amp_story$0_1$amp_story_consent$$ = {$externalLink$:{}, $onlyAccept$:!1};
_.$$jscomp$inherits$$($AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent$$, window.AMP.BaseElement);
$AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent$$.prototype.$buildCallback$ = function() {
  var $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$ = _.$childElementByTag$$module$src$dom$$(this.element, "script");
  this.$storyConsentConfig_$ = Object.assign({}, $DEFAULT_OPTIONAL_PARAMETERS$$module$extensions$amp_story$0_1$amp_story_consent$$, _.$parseJson$$module$src$json$$($buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$.textContent));
  _.$JSCompiler_StaticMethods_assertString$$(_.$user$$module$src$log$$(), this.$storyConsentConfig_$.title, "amp-story-consent: config requires a title");
  _.$JSCompiler_StaticMethods_assertString$$(_.$user$$module$src$log$$(), this.$storyConsentConfig_$.message, "amp-story-consent: config requires a message");
  _.$JSCompiler_StaticMethods_assertBoolean$$(_.$user$$module$src$log$$(), this.$storyConsentConfig_$.$onlyAccept$, 'amp-story-consent: config requires "onlyAccept" to be a boolean');
  if (this.$storyConsentConfig_$.$externalLink$.href || this.$storyConsentConfig_$.$externalLink$.title) {
    _.$JSCompiler_StaticMethods_assertString$$(_.$user$$module$src$log$$(), this.$storyConsentConfig_$.$externalLink$.title, 'amp-story-consent: config requires "externalLink.title" to be a string'), _.$JSCompiler_StaticMethods_assertString$$(_.$user$$module$src$log$$(), this.$storyConsentConfig_$.$externalLink$.href, 'amp-story-consent: config requires "externalLink.href" to be an absolute URL'), _.$parseUrlDeprecated$$module$src$url$$(this.$storyConsentConfig_$.$externalLink$.href);
  }
  var $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = _.$closestByTag$$module$src$dom$$(this.element, "AMP-STORY");
  $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$ = _.$closestByTag$$module$src$dom$$(this.element, "AMP-CONSENT").id;
  $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$(this.$storeService_$, "setconsentid", $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$);
  ($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ && $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$.getAttribute("publisher-logo-src")) || _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-story-consent", 'Expected "publisher-logo-src" attribute on <amp-story>');
  if (this.$storyConsentConfig_$) {
    this.$storyConsentEl_$ = $renderAsElement$$module$extensions$amp_story$0_1$simple_template$$(this.$win$.document, $getTemplate$$module$extensions$amp_story$0_1$amp_story_consent$$(this.$storyConsentConfig_$, $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$, $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$));
    $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$(this.element, this.$storyConsentEl_$, ".i-amphtml-story-consent{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;z-index:100003!important}.i-amphtml-story-consent,.i-amphtml-story-consent:before{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important}.i-amphtml-story-consent:before{content:\"\"!important;background:#000!important;opacity:0.4!important}.i-amphtml-story-consent-overflow{margin-top:auto!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-story-consent-container{position:relative!important;margin:88px 8px 72px!important;background:#fff!important;border-radius:8px 8px 0 0!important;color:rgba(0,0,0,0.87)!important;font-family:Roboto,sans-serif!important;text-align:left!important;overflow:hidden!important}.i-amphtml-story-consent-fullbleed .i-amphtml-story-consent-container{margin:88px 0px 72px!important;padding:0 8px!important;border-radius:initial!important}.i-amphtml-story-consent-header{position:relative!important;height:80px!important;min-height:80px!important;background:var(--primary-color,#f0f0f0)!important;z-index:2!important;margin:0 -8px!important}.i-amphtml-story-consent-logo{position:absolute!important;bottom:-32px!important;margin-left:-32px!important;left:50%!important;height:64px!important;width:64px!important;background:#f0f0f0!important;background-position:50%!important;background-repeat:no-repeat!important;background-size:contain!important;border-radius:5px!important}.i-amphtml-story-consent-logo:before{content:\"\"!important;position:absolute!important;top:-6px!important;bottom:-6px!important;left:-6px!important;right:-6px!important;background:#fff!important;border-radius:6px!important;box-shadow:0 2px 3px rgba(0,0,0,0.12)!important;z-index:-1!important}.i-amphtml-story-consent-content{padding:42px 16px 16px!important;font-size:14px!important;z-index:0!important}.i-amphtml-story-consent-vendors{margin:0!important;padding:0!important;list-style:none!important}.i-amphtml-story-consent-vendor{height:40px!important;border-bottom:1px solid #f0f0f0!important;line-height:40px!important;text-overflow:ellipsis!important;overflow:hidden!important}.i-amphtml-story-consent-external-link{position:relative!important;display:inline-block!important;margin:24px 0!important;color:rgba(0,0,0,0.87)!important;font-size:15px!important;font-weight:700!important;text-decoration:none!important}.i-amphtml-story-consent-external-link:hover{text-decoration:underline!important}.i-amphtml-story-consent-external-link:after{content:\"\"!important;position:absolute!important;display:block!important;height:16px!important;width:16px!important;top:3px!important;right:-20px!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='rgba(0, 0, 0, 0.87)'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") 50% no-repeat!important}.i-amphtml-story-consent-external-link.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-actions{position:absolute!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;bottom:0!important;left:8px!important;right:8px!important;height:72px!important;min-height:72px!important;background:#fff!important;box-shadow:0 -2px 3px rgba(0,0,0,0.12)!important;z-index:1!important}.i-amphtml-story-consent-fullbleed .i-amphtml-story-consent-actions{left:0px!important;right:0px!important}.i-amphtml-story-consent-action{position:relative!important;padding:0 24px!important;margin:0 12px!important;height:40px!important;width:40vw!important;background:#fff!important;border:none!important;border-radius:40px!important;box-sizing:border-box!important;cursor:pointer!important;font-size:13px!important;font-weight:700!important;line-height:40px!important;text-transform:uppercase!important}.i-amphtml-story-consent-action.i-amphtml-hidden{display:none!important}.i-amphtml-story-consent-action-accept{background:var(--primary-color,#000)!important;color:#fff!important}.i-amphtml-story-consent-action-reject{border:1px solid #000!important}@media (min-width:420px){.i-amphtml-story-consent{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.i-amphtml-story-consent-overflow{margin-top:0!important}.i-amphtml-story-consent-container{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;margin:0!important;max-height:80vh!important;min-height:40vh!important;width:calc(100vw - 80px)!important;max-width:800px!important}.i-amphtml-story-consent-content{margin:0 auto!important;max-width:424px!important;-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important;overflow-y:auto!important}.i-amphtml-story-consent-content::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-consent-actions{position:relative!important;left:0px!important;right:0px!important}.i-amphtml-story-consent-action{width:33vw!important;max-width:200px!important}}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-consent.css*/");
    $JSCompiler_StaticMethods_addToWhitelist$$(this.$actions_$, "accept");
    $JSCompiler_StaticMethods_addToWhitelist$$(this.$actions_$, "prompt");
    $JSCompiler_StaticMethods_addToWhitelist$$(this.$actions_$, "reject");
    $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$ = this.$storyConsentEl_$.querySelector(".i-amphtml-story-consent-action-accept");
    $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = _.$computedStyle$$module$src$style$$(this.$win$, $buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$)["background-color"];
    var $regexPattern$jscomp$inline_6378$$ = /rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})/;
    $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$.match($regexPattern$jscomp$inline_6378$$) ? ($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = $regexPattern$jscomp$inline_6378$$.exec($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$), $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = 
    {r:Number($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$[1]), g:Number($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$[2]), b:Number($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$[3])}) : (_.$user$$module$src$log$$().error("UTILS", "getRGBFromCssColorValue expects a parameter in the form of 'rgba(0, 0, 0, 1)' or 'rgb(0, 0, 0)' but got " + 
    $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$), $JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$ = {r:0, g:0, b:0});
    _.$setImportantStyles$$module$src$style$$($buttonEl$jscomp$inline_4148_consentId$jscomp$5_storyConsentScript$jscomp$inline_4145$$, {color:$getTextColorForRGB$$module$extensions$amp_story$0_1$utils$$($JSCompiler_inline_result$jscomp$5652_cssValue$jscomp$inline_6377_logoSrc$jscomp$1_matches$jscomp$inline_6379_storyEl$$)});
    $JSCompiler_StaticMethods_AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent_prototype$initializeListeners_$$(this);
  }
};
$AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent$$.prototype.$isLayoutSupported$ = function($layout$jscomp$95$$) {
  return "nodisplay" == $layout$jscomp$95$$;
};
_.$$jscomp$inherits$$($AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$, window.AMP.BaseElement);
$AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.prototype.$isLayoutSupported$ = function($layout$jscomp$96$$) {
  return "container" == $layout$jscomp$96$$;
};
$AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.prototype.$buildCallback$ = function() {
  this.element.classList.add("i-amphtml-story-layer");
};
_.$$jscomp$inherits$$($AmpStoryCtaLayer$$module$extensions$amp_story$0_1$amp_story_cta_layer$$, $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$);
$AmpStoryCtaLayer$$module$extensions$amp_story$0_1$amp_story_cta_layer$$.prototype.$buildCallback$ = function() {
  $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.prototype.$buildCallback$.call(this);
  for (var $ctaLinks$jscomp$inline_4156$$ = this.element.querySelectorAll("a"), $i$291$jscomp$inline_4157$$ = 0; $i$291$jscomp$inline_4157$$ < $ctaLinks$jscomp$inline_4156$$.length; $i$291$jscomp$inline_4157$$++) {
    $ctaLinks$jscomp$inline_4156$$[$i$291$jscomp$inline_4157$$].setAttribute("target", "_blank");
  }
};
var $SUPPORTED_CSS_GRID_ATTRIBUTES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$ = {"align-content":"alignContent", "align-items":"alignItems", "align-self":"alignSelf", "grid-area":"gridArea", "justify-content":"justifyContent", "justify-items":"justifyItems", "justify-self":"justifySelf"}, $SUPPORTED_CSS_GRID_ATTRIBUTES_SELECTOR$$module$extensions$amp_story$0_1$amp_story_grid_layer$$ = Object.keys($SUPPORTED_CSS_GRID_ATTRIBUTES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$).map(function($key$jscomp$145$$) {
  return "[" + $key$jscomp$145$$ + "]";
}).join(","), $GRID_LAYER_TEMPLATE_CLASS_NAMES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$ = {fill:"i-amphtml-story-grid-template-fill", vertical:"i-amphtml-story-grid-template-vertical", horizontal:"i-amphtml-story-grid-template-horizontal", thirds:"i-amphtml-story-grid-template-thirds"};
_.$$jscomp$inherits$$($AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$, $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$);
$AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$.prototype.$firstAttachedCallback$ = function() {
  this.$prerenderAllowed_$ = _.$matches$$module$src$dom$$(this.element, "amp-story-page:first-of-type amp-story-grid-layer");
};
$AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$.prototype.$buildCallback$ = function() {
  $AmpStoryBaseLayer$$module$extensions$amp_story$0_1$amp_story_base_layer$$.prototype.$buildCallback$.call(this);
  if (this.element.hasAttribute("template")) {
    var $templateName$jscomp$inline_4160$$ = this.element.getAttribute("template");
    this.element.classList.add($GRID_LAYER_TEMPLATE_CLASS_NAMES$$module$extensions$amp_story$0_1$amp_story_grid_layer$$[$templateName$jscomp$inline_4160$$]);
  }
  $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setCssGridStyles_$$(this.element);
  $JSCompiler_StaticMethods_AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer_prototype$setDescendentCssGridStyles_$$(this);
};
$AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$.prototype.$prerenderAllowed$ = function() {
  return this.$prerenderAllowed_$;
};
var $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_hint$$ = {tag:"aside", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-navigation-help-overlay"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-navigation-help-section prev-page"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-placeholder"}), 
children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button-icon"})}]}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button-text"}), $localizedStringId$:"3"}]}]}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-navigation-help-section next-page"}), children:[{tag:"div", 
$attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-placeholder"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button-icon"})}]}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-hint-tap-button-text"}), $localizedStringId$:"2"}]}]}]}]};
$AmpStoryHint$$module$extensions$amp_story$0_1$amp_story_hint$$.prototype.$build$ = function() {
  var $$jscomp$this$jscomp$880$$ = this;
  if (!this.$isBuilt_$) {
    this.$isBuilt_$ = !0;
    var $root$jscomp$73$$ = this.$document_$.createElement("div");
    this.$D$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$document_$, $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_hint$$);
    $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$($root$jscomp$73$$, this.$D$, ".i-amphtml-story-hint-container{-webkit-transition-property:opacity!important;transition-property:opacity!important;-webkit-transition-duration:200ms!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;z-index:2!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.prev-page{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:-webkit-linear-gradient(left,rgba(0,0,0,0.5),transparent)!important;background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-webkit-box-flex:3!important;-ms-flex:3!important;flex:3!important;border-left:1px dashed transparent!important;border-image-source:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath fill='none' stroke-linecap='square' stroke-dasharray='6,6' stroke='%23fff' d='M0 0v30'/%3E%3C/svg%3E\")!important;border-image-slice:33% 33%!important;border-image-repeat:repeat!important;border-image-width:14px!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:30px!important;height:30px!important;display:inline-block!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:\"\"!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{-webkit-animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important;animation:expandingBubble 1000ms cubic-bezier(0.4,0,0.2,1) infinite!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:24px!important;height:24px!important;display:inline-block!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important}@-webkit-keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-hint.css*/");
    this.$vsync_$.$mutate$(function() {
      $$jscomp$this$jscomp$880$$.$I$.appendChild($root$jscomp$73$$);
    });
  }
};
var $_template$$module$extensions$amp_story$0_1$amp_story_info_dialog$$ = ['<div class="i-amphtml-story-info-dialog i-amphtml-story-system-reset"><div class=i-amphtml-story-info-dialog-container><h1 class=i-amphtml-story-info-heading></h1><a class=i-amphtml-story-info-link></a> <a class=i-amphtml-story-info-moreinfo></a></div></div>'];
$InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog$$.prototype.$build$ = function() {
  var $$jscomp$this$jscomp$884$$ = this;
  if (this.$isBuilt_$) {
    return window.Promise.resolve();
  }
  this.$isBuilt_$ = !0;
  var $root$jscomp$74$$ = this.$I$.document.createElement("div");
  this.$element_$ = _.$htmlFor$$module$src$static_template$$(this.$F$)($_template$$module$extensions$amp_story$0_1$amp_story_info_dialog$$);
  $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$($root$jscomp$74$$, this.$element_$, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' fill='%23fff' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-info-dialog{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;-webkit-transform:translate3d(0,-100%,0)!important;transform:translate3d(0,-100%,0)!important;-webkit-transition-delay:0.15s!important;transition-delay:0.15s!important}.i-amphtml-story-info-dialog-visible{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition-delay:0s!important;transition-delay:0s!important}.i-amphtml-story-info-dialog:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;-webkit-transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-info-dialog.i-amphtml-story-info-dialog-visible:before{opacity:0.4!important;-webkit-transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-dialog-container{position:absolute!important;top:0!important;left:0!important;right:0!important;height:auto!important;background:#fff!important;-webkit-transform:translate3d(0,-100%,0)!important;transform:translate3d(0,-100%,0)!important;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1),-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;padding:20px!important;font-family:Roboto,sans-serif!important}.i-amphtml-story-info-dialog-visible .i-amphtml-story-info-dialog-container{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1),-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-info-heading{display:block!important;font-size:14px!important;font-weight:700!important;margin:0 0 8px!important}.i-amphtml-story-info-link{color:#000!important;display:block!important;margin:0!important;opacity:0.64!important;font-size:12px!important;text-decoration:none!important}.i-amphtml-story-info-moreinfo{color:#4285f4!important;display:none!important;font-family:Roboto-Medium,sans-serif!important;font-size:12px!important;letter-spacing:0.5px!important;margin:16px 0 0;text-decoration:none!important}.i-amphtml-story-info-moreinfo.i-amphtml-story-info-moreinfo-visible{display:block!important}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-info-dialog.css*/");
  $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$initializeListeners_$$(this);
  this.$J$ = this.$element_$.querySelector(".i-amphtml-story-info-dialog-container");
  var $appendPromise$$ = this.$G$.$mutateElement$(this.$F$, function() {
    $$jscomp$this$jscomp$884$$.$F$.appendChild($root$jscomp$74$$);
  }), $pageUrl$jscomp$2$$ = _.$Services$$module$src$services$documentInfoForDoc$$(_.$getAmpdoc$$module$src$service$$(this.$F$)).canonicalUrl;
  return window.Promise.all([$appendPromise$$, $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setHeading_$$(this), $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setPageLink_$$(this, $pageUrl$jscomp$2$$), $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$requestMoreInfoLink_$$(this).then(function($root$jscomp$74$$) {
    return $JSCompiler_StaticMethods_InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog_prototype$setMoreInfoLinkUrl_$$($$jscomp$this$jscomp$884$$, $root$jscomp$74$$);
  })]);
};
var $FULL_BLEED_ANIMATION_NAMES$$module$extensions$amp_story$0_1$animation_presets$$ = "pan-up pan-down pan-right pan-left zoom-in zoom-out".split(" "), $$jscomp$compprop70$$ = {}, $ANIMATION_CSS_CLASS_NAMES$$module$extensions$amp_story$0_1$animation_presets$$ = ($$jscomp$compprop70$$["full-bleed"] = "i-amphtml-story-grid-template-with-full-bleed-animation", $$jscomp$compprop70$$), $PRESETS$$module$extensions$amp_story$0_1$animation_presets$$ = {pulse:{duration:500, easing:"linear", keyframes:[{offset:0, 
transform:"scale(1)"}, {offset:0.25, transform:"scale(0.95)"}, {offset:0.75, transform:"scale(1.05)"}, {offset:1, transform:"scale(1)"}]}, "fly-in-left":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$5$$) {
  return $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$(-($dimensions$jscomp$5$$.$targetX$ + $dimensions$jscomp$5$$.$targetWidth$), 0, 0, 0);
}}, "fly-in-right":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$6$$) {
  return $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$6$$.$pageWidth$ - $dimensions$jscomp$6$$.$targetX$, 0, 0, 0);
}}, "fly-in-top":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$7$$) {
  return $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$(0, -($dimensions$jscomp$7$$.$targetY$ + $dimensions$jscomp$7$$.$targetHeight$), 0, 0);
}}, "fly-in-bottom":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$8$$) {
  return $translate2d$$module$extensions$amp_story$0_1$animation_presets_utils$$(0, $dimensions$jscomp$8$$.$pageHeight$ - $dimensions$jscomp$8$$.$targetY$, 0, 0);
}}, "rotate-in-left":{duration:700, easing:"ease-out", keyframes:function($dimensions$jscomp$9$$) {
  return $rotateAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$(-($dimensions$jscomp$9$$.$targetX$ + $dimensions$jscomp$9$$.$targetWidth$), -1);
}}, "rotate-in-right":{duration:700, easing:"ease-out", keyframes:function($dimensions$jscomp$10$$) {
  return $rotateAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$10$$.$pageWidth$ - $dimensions$jscomp$10$$.$targetX$, 1);
}}, "fade-in":{duration:500, easing:"ease-out", keyframes:[{opacity:0}, {opacity:1}]}, drop:{duration:1600, keyframes:function($dimensions$jscomp$11_maxBounceHeight$$) {
  $dimensions$jscomp$11_maxBounceHeight$$ = Math.max(160, $dimensions$jscomp$11_maxBounceHeight$$.$targetY$ + $dimensions$jscomp$11_maxBounceHeight$$.$targetHeight$);
  return [{offset:0, transform:"translateY(" + _.$px$$module$src$style$$(-$dimensions$jscomp$11_maxBounceHeight$$) + ")", easing:"cubic-bezier(.75,.05,.86,.08)"}, {offset:0.3, transform:"translateY(0)", easing:"cubic-bezier(.22,.61,.35,1)"}, {offset:0.52, transform:"translateY(" + _.$px$$module$src$style$$(-0.6 * $dimensions$jscomp$11_maxBounceHeight$$) + ")", easing:"cubic-bezier(.75,.05,.86,.08)"}, {offset:0.74, transform:"translateY(0)", easing:"cubic-bezier(.22,.61,.35,1)"}, {offset:0.83, transform:"translateY(" + 
  _.$px$$module$src$style$$(-0.3 * $dimensions$jscomp$11_maxBounceHeight$$) + ")", easing:"cubic-bezier(.75,.05,.86,.08)"}, {offset:1, transform:"translateY(0)", easing:"cubic-bezier(.22,.61,.35,1)"}];
}}, "twirl-in":{duration:1000, easing:"cubic-bezier(.2,.75,.4,1)", keyframes:[{transform:"rotate(-540deg) scale(0.1)", opacity:0}, {transform:"none", opacity:1}]}, "whoosh-in-left":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$12$$) {
  return $whooshIn$$module$extensions$amp_story$0_1$animation_presets_utils$$(-($dimensions$jscomp$12$$.$targetX$ + $dimensions$jscomp$12$$.$targetWidth$));
}}, "whoosh-in-right":{duration:500, easing:"ease-out", keyframes:function($dimensions$jscomp$13$$) {
  return $whooshIn$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$13$$.$pageWidth$ - $dimensions$jscomp$13$$.$targetX$);
}}, "pan-left":{duration:1000, easing:"linear", keyframes:function($dimensions$jscomp$14$$) {
  var $scalingFactor$jscomp$3$$ = $calculateTargetScalingFactor$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$14$$);
  $dimensions$jscomp$14$$.$targetWidth$ *= $scalingFactor$jscomp$3$$;
  $dimensions$jscomp$14$$.$targetHeight$ *= $scalingFactor$jscomp$3$$;
  var $offsetY$jscomp$2$$ = ($dimensions$jscomp$14$$.$pageHeight$ - $dimensions$jscomp$14$$.$targetHeight$) / 2;
  return $scaleAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$14$$.$pageWidth$ - $dimensions$jscomp$14$$.$targetWidth$, $offsetY$jscomp$2$$, 0, $offsetY$jscomp$2$$, $scalingFactor$jscomp$3$$);
}}, "pan-right":{duration:1000, easing:"linear", keyframes:function($dimensions$jscomp$15$$) {
  var $scalingFactor$jscomp$4$$ = $calculateTargetScalingFactor$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$15$$);
  $dimensions$jscomp$15$$.$targetWidth$ *= $scalingFactor$jscomp$4$$;
  $dimensions$jscomp$15$$.$targetHeight$ *= $scalingFactor$jscomp$4$$;
  var $offsetY$jscomp$3$$ = ($dimensions$jscomp$15$$.$pageHeight$ - $dimensions$jscomp$15$$.$targetHeight$) / 2;
  return $scaleAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$(0, $offsetY$jscomp$3$$, $dimensions$jscomp$15$$.$pageWidth$ - $dimensions$jscomp$15$$.$targetWidth$, $offsetY$jscomp$3$$, $scalingFactor$jscomp$4$$);
}}, "pan-down":{duration:1000, easing:"linear", keyframes:function($dimensions$jscomp$16$$) {
  var $scalingFactor$jscomp$5$$ = $calculateTargetScalingFactor$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$16$$);
  $dimensions$jscomp$16$$.$targetWidth$ *= $scalingFactor$jscomp$5$$;
  $dimensions$jscomp$16$$.$targetHeight$ *= $scalingFactor$jscomp$5$$;
  var $offsetX$jscomp$8$$ = -$dimensions$jscomp$16$$.$targetWidth$ / 2;
  return $scaleAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$($offsetX$jscomp$8$$, 0, $offsetX$jscomp$8$$, $dimensions$jscomp$16$$.$pageHeight$ - $dimensions$jscomp$16$$.$targetHeight$, $scalingFactor$jscomp$5$$);
}}, "pan-up":{duration:1000, easing:"linear", keyframes:function($dimensions$jscomp$17$$) {
  var $scalingFactor$jscomp$6$$ = $calculateTargetScalingFactor$$module$extensions$amp_story$0_1$animation_presets_utils$$($dimensions$jscomp$17$$);
  $dimensions$jscomp$17$$.$targetWidth$ *= $scalingFactor$jscomp$6$$;
  $dimensions$jscomp$17$$.$targetHeight$ *= $scalingFactor$jscomp$6$$;
  var $offsetX$jscomp$9$$ = -$dimensions$jscomp$17$$.$targetWidth$ / 2;
  return $scaleAndTranslate$$module$extensions$amp_story$0_1$animation_presets_utils$$($offsetX$jscomp$9$$, $dimensions$jscomp$17$$.$pageHeight$ - $dimensions$jscomp$17$$.$targetHeight$, $offsetX$jscomp$9$$, 0, $scalingFactor$jscomp$6$$);
}}, "zoom-in":{duration:1000, easing:"linear", keyframes:[{transform:"scale(1,1)"}, {transform:"scale(3,3)"}]}, "zoom-out":{duration:1000, easing:"linear", keyframes:[{transform:"scale(3,3)"}, {transform:"scale(1,1)"}]}};
$AnimationRunner$$module$extensions$amp_story$0_1$animation$$.prototype.start = function() {
  this.$F$() || $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$$(this, 0, $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$getStartWaitPromise_$$(this));
};
$AnimationRunner$$module$extensions$amp_story$0_1$animation$$.prototype.$F$ = function() {
  return null !== this.$D$ || !!this.$runner_$ && "running" == this.$runner_$.$getPlayState$();
};
$AnimationRunner$$module$extensions$amp_story$0_1$animation$$.prototype.finish = function() {
  this.$runner_$ || this.$target_$.id && $JSCompiler_StaticMethods_AnimationSequence$$module$extensions$amp_story$0_1$animation_prototype$notifyFinish$$(this.$K$, this.$target_$.id);
  $JSCompiler_StaticMethods_AnimationRunner$$module$extensions$amp_story$0_1$animation_prototype$playback_$$(this, 1);
};
$AnimationRunner$$module$extensions$amp_story$0_1$animation$$.prototype.cancel = function() {
  this.$G$ = this.$D$ = null;
  this.$runner_$ && this.$runner_$.cancel();
};
var $SPINNER$$module$extensions$amp_story$0_1$loading_spinner$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-spinner", "aria-hidden":"true", "aria-label":"Loading video"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-spinner-container"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-spinner-layer"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-spinner-circle-clipper left"})}, 
{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-spinner-circle-clipper right"})}]}]}]};
$LoadingSpinner$$module$extensions$amp_story$0_1$loading_spinner$$.prototype.$build$ = function() {
  return this.$D$ ? this.$D$ : this.$D$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$doc_$, $SPINNER$$module$extensions$amp_story$0_1$loading_spinner$$);
};
$LoadingSpinner$$module$extensions$amp_story$0_1$loading_spinner$$.prototype.toggle = function($isActive$jscomp$4$$) {
  $isActive$jscomp$4$$ !== this.$isActive_$ && ($isActive$jscomp$4$$ ? (this.$D$.setAttribute("active", ""), this.$D$.setAttribute("aria-hidden", "false")) : (this.$D$.removeAttribute("active"), this.$D$.setAttribute("aria-hidden", "true")), this.$isActive_$ = $isActive$jscomp$4$$);
};
var $LogType$$module$extensions$amp_story$0_1$logging$$ = {$VIDEOS_POSTER_SPECIFIED$:{message:"Videos should specify a poster image.", $moreInfo$:"https://www.ampproject.org/docs/reference/components/amp-video#poster", selector:"video:not([poster])", level:1}, $IMAGES_MAX_720P_OR_SRCSET$:{message:"Images should not be larger than 720p.  If you wish to use images that are larger than 720p, you should specify a srcset.", $moreInfo$:"https://www.ampproject.org/docs/guides/responsive/art_direction#srcset", 
selector:"img:not([srcset])", $predicate$:function($el$jscomp$106$$) {
  return 720 >= $el$jscomp$106$$.naturalWidth && 1280 >= $el$jscomp$106$$.naturalHeight;
}, level:2}, $IMAGES_PORTRAIT$:{message:"Full-bleed images should be in portrait orientation.", selector:'amp-story-grid-layer[template="fill"] > amp-img > img', $predicate$:function($el$jscomp$107$$) {
  return $el$jscomp$107$$.naturalWidth < $el$jscomp$107$$.naturalHeight;
}, level:2}, $VIDEOS_MAX_720P$:{message:"Videos should not be larger than 720p.", selector:"video", $predicate$:function($el$jscomp$108$$) {
  return 720 >= $el$jscomp$108$$.videoWidth && 1280 >= $el$jscomp$108$$.videoHeight;
}, level:2}, $VIDEOS_PORTRAIT$:{message:"Full-bleed videos should be in portrait orientation.", selector:'amp-story-grid-layer[template="fill"] > amp-video > video', $predicate$:function($el$jscomp$109$$) {
  return $el$jscomp$109$$.videoWidth < $el$jscomp$109$$.videoHeight;
}, level:2}, $VIDEO_POSTER_MAX_720P$:{message:"Video poster images should not be larger than 720p.", selector:"video[poster]", $predicate$:function($el$jscomp$110$$) {
  return $getPosterFromVideo$$module$extensions$amp_story$0_1$logging$$($el$jscomp$110$$).then(function($el$jscomp$110$$) {
    return 720 >= $el$jscomp$110$$.naturalWidth && 1280 >= $el$jscomp$110$$.naturalHeight;
  });
}, level:2}, $VIDEO_POSTER_POTRAIT$:{message:"Poster images for full-bleed videos should be in portrait orientation.", selector:'amp-story-grid-layer[template="fill"] > amp-video > video[poster]', $predicate$:function($el$jscomp$111$$) {
  return $getPosterFromVideo$$module$extensions$amp_story$0_1$logging$$($el$jscomp$111$$).then(function($el$jscomp$111$$) {
    return $el$jscomp$111$$.naturalWidth < $el$jscomp$111$$.naturalHeight;
  });
}, level:2}};
var $PROTECTED_CSS_CLASS_NAMES$$module$extensions$amp_story$0_1$media_tasks$$ = ["i-amphtml-pool-media", "i-amphtml-pool-audio", "i-amphtml-pool-video"], $PROTECTED_ATTRIBUTES$$module$extensions$amp_story$0_1$media_tasks$$ = ["id", "src", "class", "autoplay"];
$MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$whenComplete$ = function() {
  return this.$I$;
};
$MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.execute = function($mediaEl$jscomp$1$$) {
  return this.$D$($mediaEl$jscomp$1$$).then(this.$J$, this.$G$);
};
$MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function() {
  return window.Promise.resolve();
};
$MediaTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$requiresSynchronousExecution$ = function() {
  return !1;
};
_.$$jscomp$inherits$$($PlayTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$PlayTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$2$$) {
  return $mediaEl$jscomp$2$$.paused ? _.$tryResolve$$module$src$utils$promise$$(function() {
    return $mediaEl$jscomp$2$$.play();
  }) : window.Promise.resolve();
};
_.$$jscomp$inherits$$($PauseTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$PauseTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$3$$) {
  $mediaEl$jscomp$3$$.pause();
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($UnmuteTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$UnmuteTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$4$$) {
  $mediaEl$jscomp$4$$.muted = !1;
  $mediaEl$jscomp$4$$.removeAttribute("muted");
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($MuteTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$MuteTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$5$$) {
  $mediaEl$jscomp$5$$.muted = !0;
  $mediaEl$jscomp$5$$.setAttribute("muted", "");
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($RewindTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$RewindTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$6$$) {
  $mediaEl$jscomp$6$$.currentTime = 0;
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($LoadTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$LoadTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$7$$) {
  $mediaEl$jscomp$7$$.load();
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($BlessTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$BlessTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$requiresSynchronousExecution$ = function() {
  return !0;
};
$BlessTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$8$$) {
  var $isMuted$jscomp$2$$ = $mediaEl$jscomp$8$$.muted;
  $mediaEl$jscomp$8$$.muted = !1;
  $isMuted$jscomp$2$$ && ($mediaEl$jscomp$8$$.muted = !0);
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$UpdateSourcesTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$9$$) {
  $Sources$$module$extensions$amp_story$0_1$sources$removeFrom$$($mediaEl$jscomp$9$$);
  $JSCompiler_StaticMethods_Sources$$module$extensions$amp_story$0_1$sources_prototype$applyToElement$$(this.$F$, $mediaEl$jscomp$9$$);
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($SwapIntoDomTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$SwapIntoDomTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$10$$) {
  if (!_.$isConnectedNode$$module$src$dom$$(this.$F$)) {
    return this.$G$("Cannot swap media for element that is not in DOM."), window.Promise.resolve();
  }
  $copyCssClasses$$module$extensions$amp_story$0_1$media_tasks$$(this.$F$, $mediaEl$jscomp$10$$);
  $copyAttributes$$module$extensions$amp_story$0_1$media_tasks$$(this.$F$, $mediaEl$jscomp$10$$);
  this.$F$.parentElement.replaceChild($mediaEl$jscomp$10$$, this.$F$);
  return window.Promise.resolve();
};
_.$$jscomp$inherits$$($SwapOutOfDomTask$$module$extensions$amp_story$0_1$media_tasks$$, $MediaTask$$module$extensions$amp_story$0_1$media_tasks$$);
$SwapOutOfDomTask$$module$extensions$amp_story$0_1$media_tasks$$.prototype.$D$ = function($mediaEl$jscomp$11$$) {
  $copyCssClasses$$module$extensions$amp_story$0_1$media_tasks$$($mediaEl$jscomp$11$$, this.$F$);
  $copyAttributes$$module$extensions$amp_story$0_1$media_tasks$$($mediaEl$jscomp$11$$, this.$F$);
  $mediaEl$jscomp$11$$.parentElement.replaceChild(this.$F$, $mediaEl$jscomp$11$$);
  return window.Promise.resolve();
};
var $MediaType$$module$extensions$amp_story$0_1$media_pool$$ = {$UNSUPPORTED$:"unsupported", $AUDIO$:"audio", $VIDEO$:"video"}, $instances$$module$extensions$amp_story$0_1$media_pool$$ = {}, $nextInstanceId$$module$extensions$amp_story$0_1$media_pool$$ = 0, $elId$$module$extensions$amp_story$0_1$media_pool$$ = 0;
_.$JSCompiler_prototypeAlias$$ = $MediaPool$$module$extensions$amp_story$0_1$media_pool$$.prototype;
_.$JSCompiler_prototypeAlias$$.register = function($domMediaEl$jscomp$3$$) {
  if (0 <= this.$D$[$JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($domMediaEl$jscomp$3$$)].indexOf($domMediaEl$jscomp$3$$)) {
    return window.Promise.resolve();
  }
  var $id$jscomp$93$$ = $domMediaEl$jscomp$3$$.id || "i-amphtml-media-" + this.$P$++;
  if (this.$I$[$id$jscomp$93$$] && this.$J$[$id$jscomp$93$$]) {
    return window.Promise.resolve();
  }
  $domMediaEl$jscomp$3$$.id = $id$jscomp$93$$;
  var $sources$jscomp$8$$ = $Sources$$module$extensions$amp_story$0_1$sources$removeFrom$$($domMediaEl$jscomp$3$$);
  this.$I$[$id$jscomp$93$$] = $sources$jscomp$8$$;
  this.$J$[$id$jscomp$93$$] = $domMediaEl$jscomp$3$$;
  $domMediaEl$jscomp$3$$.muted = !0;
  $domMediaEl$jscomp$3$$.setAttribute("muted", "");
  $domMediaEl$jscomp$3$$.pause();
  return window.Promise.resolve();
};
_.$JSCompiler_prototypeAlias$$.$preload$ = function($domMediaEl$jscomp$4$$) {
  return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$$(this, $domMediaEl$jscomp$4$$).then();
};
_.$JSCompiler_prototypeAlias$$.play = function($domMediaEl$jscomp$5$$) {
  var $$jscomp$this$jscomp$905$$ = this;
  return $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$loadInternal_$$(this, $domMediaEl$jscomp$5$$).then(function($domMediaEl$jscomp$5$$) {
    return $domMediaEl$jscomp$5$$ ? $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($$jscomp$this$jscomp$905$$, $domMediaEl$jscomp$5$$, new $PlayTask$$module$extensions$amp_story$0_1$media_tasks$$) : window.Promise.resolve();
  });
};
_.$JSCompiler_prototypeAlias$$.pause = function($domMediaEl$jscomp$6$$, $rewindToBeginning$$) {
  var $$jscomp$this$jscomp$906$$ = this;
  $rewindToBeginning$$ = void 0 === $rewindToBeginning$$ ? !1 : $rewindToBeginning$$;
  var $poolMediaEl$jscomp$11$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$$(this, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($domMediaEl$jscomp$6$$), $domMediaEl$jscomp$6$$);
  return $poolMediaEl$jscomp$11$$ ? $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$(this, $poolMediaEl$jscomp$11$$, new $PauseTask$$module$extensions$amp_story$0_1$media_tasks$$).then(function() {
    $rewindToBeginning$$ && $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$($$jscomp$this$jscomp$906$$, $poolMediaEl$jscomp$11$$, new $RewindTask$$module$extensions$amp_story$0_1$media_tasks$$);
  }) : window.Promise.resolve();
};
_.$JSCompiler_prototypeAlias$$.$mute$ = function($domMediaEl$jscomp$8_poolMediaEl$jscomp$13$$) {
  return ($domMediaEl$jscomp$8_poolMediaEl$jscomp$13$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$$(this, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($domMediaEl$jscomp$8_poolMediaEl$jscomp$13$$), $domMediaEl$jscomp$8_poolMediaEl$jscomp$13$$)) ? $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$(this, 
  $domMediaEl$jscomp$8_poolMediaEl$jscomp$13$$, new $MuteTask$$module$extensions$amp_story$0_1$media_tasks$$) : window.Promise.resolve();
};
_.$JSCompiler_prototypeAlias$$.$unmute$ = function($domMediaEl$jscomp$9_poolMediaEl$jscomp$14$$) {
  return ($domMediaEl$jscomp$9_poolMediaEl$jscomp$14$$ = $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMatchingMediaElementFromPool_$$(this, $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$getMediaType_$$($domMediaEl$jscomp$9_poolMediaEl$jscomp$14$$), $domMediaEl$jscomp$9_poolMediaEl$jscomp$14$$)) ? $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$enqueueMediaElementTask_$$(this, 
  $domMediaEl$jscomp$9_poolMediaEl$jscomp$14$$, new $UnmuteTask$$module$extensions$amp_story$0_1$media_tasks$$) : window.Promise.resolve();
};
_.$JSCompiler_prototypeAlias$$.$blessAll$ = function() {
  var $$jscomp$this$jscomp$907$$ = this;
  if (this.$K$) {
    return window.Promise.resolve();
  }
  var $blessPromises$$ = [];
  $JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$forEachMediaElement_$$(this, function($mediaEl$jscomp$13$$) {
    $blessPromises$$.push($JSCompiler_StaticMethods_MediaPool$$module$extensions$amp_story$0_1$media_pool_prototype$bless_$$($$jscomp$this$jscomp$907$$, $mediaEl$jscomp$13$$));
  });
  return window.Promise.all($blessPromises$$).then(function() {
    $$jscomp$this$jscomp$907$$.$K$ = !0;
  }).catch(function($$jscomp$this$jscomp$907$$) {
    _.$dev$$module$src$log$$().$expectedError$("AMP-STORY", "Blessing all media failed: ", $$jscomp$this$jscomp$907$$);
  });
};
var $PROTECTED_ELEMENTS$$module$extensions$amp_story$0_1$page_advancement$$ = _.$map$$module$src$utils$object$$({$A$:!0, $BUTTON$:!0});
_.$JSCompiler_prototypeAlias$$ = $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype;
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addProgressListener$ = function($progressListener$$) {
  this.$J$.push($progressListener$$);
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addAdvanceListener$ = function($advanceListener$$) {
  this.$I$.push($advanceListener$$);
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addPreviousListener$ = function($previousListener$$) {
  this.$P$.push($previousListener$$);
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addOnTapNavigationListener$ = function($onTapNavigationListener$$) {
  this.$K$.push($onTapNavigationListener$$);
};
_.$JSCompiler_prototypeAlias$$.start = function() {
  this.$F$ = !0;
};
_.$JSCompiler_prototypeAlias$$.stop = function() {
  this.$F$ = !1;
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$ = function() {
  return 1;
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onProgressUpdate$ = function() {
  var $progress$$ = this.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$();
  this.$J$.forEach(function($progressListener$jscomp$1$$) {
    $progressListener$jscomp$1$$($progress$$);
  });
};
_.$$jscomp$inherits$$($MultipleAdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$);
_.$JSCompiler_prototypeAlias$$ = $MultipleAdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype;
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addProgressListener$ = function($progressListener$jscomp$2$$) {
  this.$D$.forEach(function($advancementMode$$) {
    $advancementMode$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addProgressListener$($progressListener$jscomp$2$$);
  });
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addOnTapNavigationListener$ = function($onTapNavigationListener$jscomp$1$$) {
  this.$D$.forEach(function($advancementMode$jscomp$1$$) {
    $advancementMode$jscomp$1$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addOnTapNavigationListener$($onTapNavigationListener$jscomp$1$$);
  });
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addAdvanceListener$ = function($advanceListener$jscomp$2$$) {
  this.$D$.forEach(function($advancementMode$jscomp$2$$) {
    $advancementMode$jscomp$2$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addAdvanceListener$($advanceListener$jscomp$2$$);
  });
};
_.$JSCompiler_prototypeAlias$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addPreviousListener$ = function($previousListener$jscomp$2$$) {
  this.$D$.forEach(function($advancementMode$jscomp$3$$) {
    $advancementMode$jscomp$3$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addPreviousListener$($previousListener$jscomp$2$$);
  });
};
_.$JSCompiler_prototypeAlias$$.start = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start.call(this);
  this.$D$.forEach(function($advancementMode$jscomp$4$$) {
    $advancementMode$jscomp$4$$.start();
  });
};
_.$JSCompiler_prototypeAlias$$.stop = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop.call(this);
  this.$D$.forEach(function($advancementMode$jscomp$5$$) {
    $advancementMode$jscomp$5$$.stop();
  });
};
_.$$jscomp$inherits$$($ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$);
$ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start.call(this);
  this.$element_$.addEventListener("click", this.$D$, !0);
  this.$O$ || $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onProgressUpdate$.call(this);
};
$ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop.call(this);
  this.$element_$.removeEventListener("click", this.$D$, !0);
};
$ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$ = function() {
  return 1.0;
};
$ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$G$ = function($event$jscomp$200$$) {
  if ($JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isNavigationalClick_$$(this, $event$jscomp$200$$) && !$JSCompiler_StaticMethods_ManualAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isProtectedTarget_$$(this, $event$jscomp$200$$)) {
    $event$jscomp$200$$.stopPropagation();
    var $elRect_offsetWidth$jscomp$1$$ = this.$element_$.getBoundingClientRect(), $offsetLeft$$ = "x" in $elRect_offsetWidth$jscomp$1$$ ? $elRect_offsetWidth$jscomp$1$$.x : $elRect_offsetWidth$jscomp$1$$.left;
    $elRect_offsetWidth$jscomp$1$$ = $elRect_offsetWidth$jscomp$1$$.width;
    var $nextScreenAreaMin$$ = $offsetLeft$$ + .25 * $elRect_offsetWidth$jscomp$1$$;
    $event$jscomp$200$$.pageX >= $nextScreenAreaMin$$ && $event$jscomp$200$$.pageX < $offsetLeft$$ + $elRect_offsetWidth$jscomp$1$$ ? $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$$(this, 1) : $event$jscomp$200$$.pageX >= $offsetLeft$$ && $event$jscomp$200$$.pageX < $nextScreenAreaMin$$ && $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onTapNavigation$$(this, 2);
  }
};
_.$$jscomp$inherits$$($TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$);
$TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start = function() {
  var $$jscomp$this$jscomp$909$$ = this;
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start.call(this);
  this.$D$ = Date.now();
  this.$G$ = this.$timer_$.delay(function() {
    return $JSCompiler_StaticMethods_AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onAdvance$$($$jscomp$this$jscomp$909$$);
  }, this.$O$);
  _.$JSCompiler_StaticMethods_poll$$(this.$timer_$, 300, function() {
    $$jscomp$this$jscomp$909$$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$onProgressUpdate$();
    return !$$jscomp$this$jscomp$909$$.$F$;
  });
};
$TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop.call(this);
  null !== this.$G$ && this.$timer_$.cancel(this.$G$);
};
$TimeBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$ = function() {
  return null === this.$D$ ? 0 : Math.min(Math.max((Date.now() - this.$D$) / this.$O$, 0), 1);
};
_.$$jscomp$inherits$$($MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$, $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$);
$MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start = function() {
  var $$jscomp$this$jscomp$910$$ = this;
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.start.call(this);
  (this.$element_$.$K$ ? this.$element_$.$K$() : window.Promise.resolve()).then(function() {
    if ($JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isVideoInterfaceVideo_$$($$jscomp$this$jscomp$910$$)) {
      $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startVideoInterfaceElement_$$($$jscomp$this$jscomp$910$$);
    } else {
      if (!$$jscomp$this$jscomp$910$$.$D$) {
        var $tagName$jscomp$inline_6392$$ = $$jscomp$this$jscomp$910$$.$element_$.tagName.toLowerCase();
        $$jscomp$this$jscomp$910$$.$D$ = $$jscomp$this$jscomp$910$$.$element_$ instanceof window.HTMLMediaElement ? $$jscomp$this$jscomp$910$$.$element_$ : !$$jscomp$this$jscomp$910$$.$element_$.hasAttribute("background-audio") || "amp-story" !== $tagName$jscomp$inline_6392$$ && "amp-story-page" !== $tagName$jscomp$inline_6392$$ ? "amp-audio" === $tagName$jscomp$inline_6392$$ ? $$jscomp$this$jscomp$910$$.$element_$.querySelector("audio") : null : $$jscomp$this$jscomp$910$$.$element_$.querySelector(".i-amphtml-story-background-audio");
      }
      $$jscomp$this$jscomp$910$$.$D$ ? $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$startHtmlMediaElement_$$($$jscomp$this$jscomp$910$$) : _.$user$$module$src$log$$().error("AMP-STORY-PAGE", "Element with ID " + $$jscomp$this$jscomp$910$$.$element_$.id + " is not a media element supported for automatic advancement.");
    }
  });
};
$MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop = function() {
  $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.stop.call(this);
};
$MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$ = function() {
  return $JSCompiler_StaticMethods_MediaBasedAdvancement$$module$extensions$amp_story$0_1$page_advancement_prototype$isVideoInterfaceVideo_$$(this) ? this.$video_$ && this.$video_$.$getDuration$() ? this.$video_$.$getCurrentTime$() / this.$video_$.$getDuration$() : 0 : this.$D$ && this.$D$.duration ? this.$D$.currentTime / this.$D$.duration : $AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement$$.prototype.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$getProgress$.call(this);
};
_.$$jscomp$inherits$$($AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page$$, window.AMP.BaseElement);
_.$JSCompiler_prototypeAlias$$ = $AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page$$.prototype;
_.$JSCompiler_prototypeAlias$$.$firstAttachedCallback$ = function() {
  this.$prerenderAllowed_$ = _.$matches$$module$src$dom$$(this.element, "amp-story-page:first-of-type");
};
_.$JSCompiler_prototypeAlias$$.$buildCallback$ = function() {
  var $$jscomp$this$jscomp$914$$ = this;
  $upgradeBackgroundAudio$$module$extensions$amp_story$0_1$audio$$(this.element);
  this.$delegateVideoAutoplay$();
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$markMediaElementsWithPreload_$$(this);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$initializeMediaPool_$$(this);
  !this.$animationManager_$ && _.$scopedQuerySelector$$module$src$dom$$(this.element, "[animate-in]") && (this.$animationManager_$ = $AnimationManager$$module$extensions$amp_story$0_1$animation$create$$(this.element, this.$getAmpDoc$(), this.$getAmpDoc$().$AmpDoc$$module$src$service$ampdoc_impl_prototype$getUrl$()));
  this.$advancement_$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addPreviousListener$(function() {
    return $$jscomp$this$jscomp$914$$.$previous$();
  });
  this.$advancement_$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addAdvanceListener$(function() {
    return $$jscomp$this$jscomp$914$$.next(!0);
  });
  this.$advancement_$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addOnTapNavigationListener$(function($navigationDirection$jscomp$1$$) {
    $dispatchCustom$$module$extensions$amp_story$0_1$events$$($$jscomp$this$jscomp$914$$.$win$, $$jscomp$this$jscomp$914$$.element, "ampstory:tapnavigation", _.$dict$$module$src$utils$object$$({direction:$navigationDirection$jscomp$1$$}));
  });
  this.$advancement_$.$AdvancementConfig$$module$extensions$amp_story$0_1$page_advancement_prototype$addProgressListener$(function($progress$jscomp$2$$) {
    $dispatchCustom$$module$extensions$amp_story$0_1$events$$($$jscomp$this$jscomp$914$$.$win$, $$jscomp$this$jscomp$914$$.element, "ampstory:pageprogress", _.$dict$$module$src$utils$object$$({pageId:$$jscomp$this$jscomp$914$$.element.id, progress:$progress$jscomp$2$$}));
  });
};
_.$JSCompiler_prototypeAlias$$.$delegateVideoAutoplay$ = function() {
  var $videos$$ = this.element.querySelectorAll("amp-video");
  1 > $videos$$.length || _.$toArray$$module$src$types$$($videos$$).forEach(function($videos$$) {
    _.$VideoServiceSync$$module$src$service$video_service_sync_impl$delegateAutoplay$$($videos$$);
  });
};
_.$JSCompiler_prototypeAlias$$.$isLayoutSupported$ = function($layout$jscomp$97$$) {
  return "container" == $layout$jscomp$97$$;
};
_.$JSCompiler_prototypeAlias$$.$pauseCallback$ = function() {
  this.$advancement_$.stop();
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$stopListeningToVideoEvents_$$(this);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$pauseAllMedia_$$(this);
  this.$animationManager_$ && $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$cancelAll$$(this.$animationManager_$);
};
_.$JSCompiler_prototypeAlias$$.$resumeCallback$ = function() {
  var $$jscomp$this$jscomp$916$$ = this;
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$$(this);
  this.element.hasAttribute("active") && (this.$advancement_$.start(), this.$animationManager_$ && $JSCompiler_StaticMethods_AnimationManager$$module$extensions$amp_story$0_1$animation_prototype$animateIn$$(this.$animationManager_$), $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$$(this).then(function() {
    return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$startListeningToVideoEvents_$$($$jscomp$this$jscomp$916$$);
  }).then(function() {
    return $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$playAllMedia_$$($$jscomp$this$jscomp$916$$);
  }));
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$reportDevModeErrors_$$(this);
};
_.$JSCompiler_prototypeAlias$$.$layoutCallback$ = function() {
  this.$muteAllMedia$();
  return window.Promise.all([$JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$$(this), this.$mediaLayoutPromise_$, this.$mediaPoolPromise_$]);
};
_.$JSCompiler_prototypeAlias$$.$waitForMediaLayout_$ = function() {
  var $mediaPromises_mediaSet$jscomp$2$$ = _.$scopedQuerySelectorAll$$module$src$dom$$(this.element, "amp-audio, amp-video, amp-img, amp-anim");
  $mediaPromises_mediaSet$jscomp$2$$ = Array.prototype.map.call($mediaPromises_mediaSet$jscomp$2$$, function($mediaPromises_mediaSet$jscomp$2$$) {
    return new window.Promise(function($mediaEl$jscomp$16$$) {
      switch($mediaPromises_mediaSet$jscomp$2$$.tagName.toLowerCase()) {
        case "amp-img":
        case "amp-anim":
          $mediaPromises_mediaSet$jscomp$2$$.addEventListener("load", $mediaEl$jscomp$16$$, !0);
          break;
        case "amp-audio":
        case "amp-video":
          if (2 <= $mediaPromises_mediaSet$jscomp$2$$.readyState) {
            $mediaEl$jscomp$16$$();
            return;
          }
          $mediaPromises_mediaSet$jscomp$2$$.addEventListener("canplay", $mediaEl$jscomp$16$$, !0);
          break;
        default:
          $mediaEl$jscomp$16$$();
      }
      $mediaPromises_mediaSet$jscomp$2$$.addEventListener("error", $mediaEl$jscomp$16$$, !0);
    });
  });
  return window.Promise.all($mediaPromises_mediaSet$jscomp$2$$);
};
_.$JSCompiler_prototypeAlias$$.$whenLoaded$ = function() {
  return this.$pageLoadPromise_$;
};
_.$JSCompiler_prototypeAlias$$.$markPageAsLoaded_$ = function() {
  var $$jscomp$this$jscomp$917$$ = this;
  $dispatch$$module$extensions$amp_story$0_1$events$$(this.element, "ampstory:pageload");
  this.$mutateElement$(function() {
    $$jscomp$this$jscomp$917$$.element.classList.add("i-amphtml-story-page-loaded");
  });
};
_.$JSCompiler_prototypeAlias$$.$prerenderAllowed$ = function() {
  return this.$prerenderAllowed_$;
};
_.$JSCompiler_prototypeAlias$$.$muteAllMedia$ = function() {
  var $$jscomp$this$jscomp$921$$ = this;
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$whenAllMediaElements_$$(this, function($mediaPool$jscomp$4$$, $mediaEl$jscomp$21$$) {
    if ($$jscomp$this$jscomp$921$$.$isBotUserAgent_$) {
      $mediaEl$jscomp$21$$.muted = !0, $mediaEl$jscomp$21$$.setAttribute("muted", "");
    } else {
      return $mediaPool$jscomp$4$$.$mute$($mediaEl$jscomp$21$$);
    }
  });
};
_.$JSCompiler_prototypeAlias$$.setActive = function($isActive$jscomp$6$$) {
  $isActive$jscomp$6$$ ? (this.element.setAttribute("active", ""), $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$maybeApplyFirstAnimationFrame$$(this), this.$resumeCallback$()) : (this.element.removeAttribute("active"), this.$pauseCallback$());
};
_.$JSCompiler_prototypeAlias$$.$setDistance$ = function($distance$jscomp$11$$) {
  this.$isAd$() && ($distance$jscomp$11$$ = Math.min($distance$jscomp$11$$, 2));
  this.element.setAttribute("distance", $distance$jscomp$11$$);
  $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$registerAllMedia_$$(this);
  0 < $distance$jscomp$11$$ && 2 >= $distance$jscomp$11$$ && $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$preloadAllMedia_$$(this);
};
_.$JSCompiler_prototypeAlias$$.$previous$ = function() {
  var $targetPageId$$ = $JSCompiler_StaticMethods_getPreviousPageId_$$(this);
  null === $targetPageId$$ ? $dispatch$$module$extensions$amp_story$0_1$events$$(this.element, "ampstory:shownopreviouspagehelp") : $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$$(this, $targetPageId$$);
};
_.$JSCompiler_prototypeAlias$$.next = function($opt_isAutomaticAdvance$jscomp$1_pageId$jscomp$4$$) {
  ($opt_isAutomaticAdvance$jscomp$1_pageId$jscomp$4$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$$(this, $opt_isAutomaticAdvance$jscomp$1_pageId$jscomp$4$$)) && $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$switchTo_$$(this, $opt_isAutomaticAdvance$jscomp$1_pageId$jscomp$4$$);
};
_.$JSCompiler_prototypeAlias$$.$toggleLoadingSpinner_$ = function($isActive$jscomp$7$$) {
  var $$jscomp$this$jscomp$926$$ = this;
  _.$JSCompiler_StaticMethods_getVsync$$(this).$mutate$(function() {
    $$jscomp$this$jscomp$926$$.$loadingSpinner_$ || ($$jscomp$this$jscomp$926$$.$loadingSpinner_$ = new $LoadingSpinner$$module$extensions$amp_story$0_1$loading_spinner$$($$jscomp$this$jscomp$926$$.$win$.document), $$jscomp$this$jscomp$926$$.element.appendChild($$jscomp$this$jscomp$926$$.$loadingSpinner_$.$build$()));
    $$jscomp$this$jscomp$926$$.$loadingSpinner_$.toggle($isActive$jscomp$7$$);
  });
};
_.$JSCompiler_prototypeAlias$$.$isAd$ = function() {
  return this.element.hasAttribute("ad");
};
var $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share_menu$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-menu i-amphtml-story-system-reset"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-menu-container"}), children:[]}]}, $AMP_SOCIAL_SYSTEM_SHARE_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_share_menu$$ = {tag:"amp-social-share", $attrs$:_.$dict$$module$src$utils$object$$({type:"system"})};
$ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu$$.prototype.$build$ = function() {
  this.$isBuilt_$ || (this.$isBuilt_$ = !0, (this.$F$ = $JSCompiler_StaticMethods_ShareWidget$$module$extensions$amp_story$0_1$amp_story_share_prototype$isSystemShareSupported$$(this.$shareWidget_$, _.$getAmpdoc$$module$src$service$$(this.$G$))) ? $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForSystemSharing_$$(this) : $JSCompiler_StaticMethods_ShareMenu$$module$extensions$amp_story$0_1$amp_story_share_menu_prototype$buildForFallbackSharing_$$(this));
};
$DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui$$.prototype.$build$ = function($logButtonActionFn$$) {
  this.$F$ = $createButton$$module$extensions$amp_story$0_1$development_ui$$(this.$J$, ["i-amphtml-story-error-button", "i-amphtml-story-dev-logs-button"], function() {
    return $logButtonActionFn$$();
  });
  this.$I$ = $createButton$$module$extensions$amp_story$0_1$development_ui$$(this.$J$, ["i-amphtml-story-warning-button", "i-amphtml-story-dev-logs-button"], function() {
    return $logButtonActionFn$$();
  });
  this.$G$ = $createButton$$module$extensions$amp_story$0_1$development_ui$$(this.$J$, ["i-amphtml-story-success-button", "i-amphtml-story-dev-logs-button"], function() {
    return $logButtonActionFn$$();
  });
  this.$D$ = this.$J$.document.createElement("div");
  this.$D$.appendChild(this.$F$);
  this.$D$.appendChild(this.$I$);
  this.$D$.appendChild(this.$G$);
  return this.$D$;
};
$DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui$$.prototype.log = function($button$jscomp$4_logEntry$jscomp$1$$) {
  if ($button$jscomp$4_logEntry$jscomp$1$$ = $JSCompiler_StaticMethods_DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui_prototype$getButtonForLogEntry_$$(this, $button$jscomp$4_logEntry$jscomp$1$$)) {
    var $oldCount$$ = (0,window.parseInt)($button$jscomp$4_logEntry$jscomp$1$$.getAttribute("data-count") || 0, 10);
    $button$jscomp$4_logEntry$jscomp$1$$.setAttribute("data-count", $oldCount$$ + 1);
  }
};
$DevelopmentModeLogButtonSet$$module$extensions$amp_story$0_1$development_ui$$.prototype.clear = function() {
  this.$F$.setAttribute("data-count", 0);
  this.$I$.setAttribute("data-count", 0);
  this.$G$.setAttribute("data-count", 0);
};
_.$JSCompiler_prototypeAlias$$ = $DevelopmentModeLog$$module$extensions$amp_story$0_1$development_ui$$.prototype;
_.$JSCompiler_prototypeAlias$$.$build$ = function() {
  var $$jscomp$this$jscomp$934$$ = this;
  this.$I$ = this.$D$.document.createElement("span");
  this.$I$.classList.add("i-amphtml-story-developer-log-context");
  var $titleEl$jscomp$1$$ = this.$D$.document.createElement("div");
  $titleEl$jscomp$1$$.textContent = "Developer logs for page ";
  $titleEl$jscomp$1$$.appendChild(this.$I$);
  var $closeDeveloperLogEl$$ = $createButton$$module$extensions$amp_story$0_1$development_ui$$(this.$D$, "i-amphtml-story-developer-log-close", function() {
    return $$jscomp$this$jscomp$934$$.$hide$();
  }), $headerEl$$ = this.$D$.document.createElement("div");
  $headerEl$$.classList.add("i-amphtml-story-developer-log-header");
  $headerEl$$.appendChild($titleEl$jscomp$1$$);
  $headerEl$$.appendChild($closeDeveloperLogEl$$);
  this.$G$ = this.$D$.document.createElement("ul");
  this.$G$.classList.add("i-amphtml-story-developer-log-entries");
  this.$F$ = this.$D$.document.createElement("div");
  this.$F$.classList.add("i-amphtml-story-developer-log");
  _.$toggle$$module$src$style$$(this.$F$, !1);
  this.$F$.appendChild($headerEl$$);
  this.$F$.appendChild(this.$G$);
  this.clear();
  return this.$F$;
};
_.$JSCompiler_prototypeAlias$$.log = function($logEntry$jscomp$2$$) {
  a: {
    switch($logEntry$jscomp$2$$.level) {
      case 2:
        var $JSCompiler_inline_result$jscomp$887_logLevelClass$$ = "i-amphtml-story-developer-log-entry-warning";
        break a;
      case 1:
        $JSCompiler_inline_result$jscomp$887_logLevelClass$$ = "i-amphtml-story-developer-log-entry-error";
        break a;
      default:
        $JSCompiler_inline_result$jscomp$887_logLevelClass$$ = null;
    }
  }
  var $conformanceClass$$ = $logEntry$jscomp$2$$.$conforms$ ? "i-amphtml-story-developer-log-entry-success" : null, $logEntryUi$$ = this.$D$.document.createElement("li");
  $logEntryUi$$.classList.add("i-amphtml-story-developer-log-entry");
  $JSCompiler_inline_result$jscomp$887_logLevelClass$$ && $logEntryUi$$.classList.add($JSCompiler_inline_result$jscomp$887_logLevelClass$$);
  $conformanceClass$$ && $logEntryUi$$.classList.add($conformanceClass$$);
  $logEntryUi$$.textContent = $logEntry$jscomp$2$$.message;
  this.$G$.appendChild($logEntryUi$$);
};
_.$JSCompiler_prototypeAlias$$.clear = function() {
  var $$jscomp$this$jscomp$935$$ = this;
  _.$Services$$module$src$services$vsyncFor$$(this.$D$).$mutate$(function() {
    _.$removeChildren$$module$src$dom$$($$jscomp$this$jscomp$935$$.$G$);
  });
};
_.$JSCompiler_prototypeAlias$$.toggle = function() {
  var $newHiddenState$$ = !this.$F$.hasAttribute("hidden");
  $toggleHiddenAttribute$$module$extensions$amp_story$0_1$development_ui$$(_.$Services$$module$src$services$vsyncFor$$(this.$D$), this.$F$, $newHiddenState$$);
};
_.$JSCompiler_prototypeAlias$$.$hide$ = function() {
  $toggleHiddenAttribute$$module$extensions$amp_story$0_1$development_ui$$(_.$Services$$module$src$services$vsyncFor$$(this.$D$), this.$F$, !0);
};
$ProgressBar$$module$extensions$amp_story$0_1$progress_bar$$.prototype.$build$ = function($i$301_segmentIds$$) {
  var $$jscomp$this$jscomp$936$$ = this;
  if (this.$isBuilt_$) {
    return this.$D$;
  }
  var $segmentCount_segmentProgressBar$$ = $i$301_segmentIds$$.length;
  this.$isBuilt_$ = !0;
  this.$I$ = $segmentCount_segmentProgressBar$$;
  $i$301_segmentIds$$.forEach(function($i$301_segmentIds$$, $segmentCount_segmentProgressBar$$) {
    return $$jscomp$this$jscomp$936$$.$F$[$i$301_segmentIds$$] = $segmentCount_segmentProgressBar$$;
  });
  this.$D$ = this.$G$.document.createElement("ol");
  this.$D$.classList.add("i-amphtml-story-progress-bar");
  for ($i$301_segmentIds$$ = 0; $i$301_segmentIds$$ < this.$I$; $i$301_segmentIds$$++) {
    $segmentCount_segmentProgressBar$$ = this.$G$.document.createElement("li");
    $segmentCount_segmentProgressBar$$.classList.add("i-amphtml-story-page-progress-bar");
    var $segmentProgressValue$$ = this.$G$.document.createElement("div");
    $segmentProgressValue$$.classList.add("i-amphtml-story-page-progress-value");
    $segmentCount_segmentProgressBar$$.appendChild($segmentProgressValue$$);
    this.$D$.appendChild($segmentCount_segmentProgressBar$$);
  }
  return this.$D$;
};
var $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_system_layer$$ = {tag:"aside", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-system-layer i-amphtml-story-system-reset"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-system-layer-buttons"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({role:"button", "class":"i-amphtml-story-info-control i-amphtml-story-button"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({role:"button", 
"class":"i-amphtml-story-unmute-audio-control i-amphtml-story-button"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({role:"button", "class":"i-amphtml-story-mute-audio-control i-amphtml-story-button"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({role:"button", "class":"i-amphtml-story-share-control i-amphtml-story-button"})}]}]};
$SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer$$.prototype.$build$ = function($pageIds$$) {
  if (this.$isBuilt_$) {
    return this.$J$;
  }
  this.$isBuilt_$ = !0;
  this.$J$ = this.$G$.document.createElement("div");
  this.$D$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$G$.document, $TEMPLATE$$module$extensions$amp_story$0_1$amp_story_system_layer$$);
  $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$(this.$J$, this.$D$, ".i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(0,0,0,0.35),transparent)!important;background:linear-gradient(180deg,rgba(0,0,0,0.35),transparent)!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:56px!important;z-index:100000!important;box-sizing:border-box!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important;pointer-events:none!important}.i-amphtml-story-bookend-active.i-amphtml-story-system-layer{opacity:0.3!important}.i-amphtml-story-system-layer-buttons{margin-top:8px;float:right!important;pointer-events:auto!important}.i-amphtml-story-button{background-repeat:no-repeat!important;background-position:50%!important;height:48px!important;width:48px!important;cursor:pointer!important;border-radius:50%!important;box-sizing:border-box!important;position:relative!important;background:50% no-repeat!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-system-layer .i-amphtml-story-button{float:left!important}.i-amphtml-story-progress-bar{border:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;margin:4px 0 0!important;padding:0 2px!important;position:absolute!important;right:0!important;top:0!important;visibility:visible!important;z-index:100001!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;-webkit-transform:translateZ(0) scaleX(0)!important;transform:translateZ(0) scaleX(0)!important;-webkit-transform-origin:left!important;transform-origin:left!important;will-change:transform,transition!important}[dir=rtl] .i-amphtml-story-progress-value{-webkit-transform-origin:right!important;transform-origin:right!important}.i-amphtml-story-mute-audio-control,.i-amphtml-story-unmute-audio-control{display:none!important}.audio-playing:not([muted]) .i-amphtml-story-mute-audio-control,.audio-playing[muted] .i-amphtml-story-unmute-audio-control{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{display:none!important}.i-amphtml-story-unmute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-mute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")!important}[ios] .i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z'/%3E%3C/svg%3E\")!important;background-position-y:calc(50% - 2px)!important}.i-amphtml-story-info-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 48 48' fill='%23FFF'%3E%3Cpath d='M0 0h48v48H0z' fill='none'/%3E%3Cpath d='M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z'/%3E%3C/svg%3E\")!important;display:none!important}.i-amphtml-embedded.first-page-active .i-amphtml-story-info-control{display:block!important}.i-amphtml-story-no-sharing .i-amphtml-story-info-control,.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}[desktop].i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(180deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important;top:auto!important;bottom:0!important;height:96px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}[desktop] .i-amphtml-story-progress-bar{position:relative!important;margin:0px 24px!important;height:3px!important;width:33.33333vw!important}[desktop] .i-amphtml-story-page-progress-bar{border-radius:100px!important}[desktop].i-amphtml-story-system-layer .i-amphtml-story-system-layer-buttons{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin-top:0px!important;height:40px!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}[desktop] .i-amphtml-story-share-control{display:none!important}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-system-layer.css*/");
  this.$D$.insertBefore(this.$K$.$build$($pageIds$$), this.$D$.lastChild);
  this.$O$ = this.$D$.querySelector(".i-amphtml-story-system-layer-buttons");
  _.$getMode$$module$src$mode$$().$development$ && (this.$O$.appendChild(this.$I$.$build$(this.$F$.toggle.bind(this.$F$))), this.$D$.appendChild(this.$F$.$build$()));
  $JSCompiler_StaticMethods_SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer_prototype$initializeListeners_$$(this);
  this.$storeService_$.get("canshowsystemlayerbuttons") || this.$D$.classList.add("i-amphtml-story-ui-no-buttons");
  _.$JSCompiler_StaticMethods_isIos$$(_.$Services$$module$src$services$platformFor$$(this.$G$)) && this.$D$.setAttribute("ios", "");
  _.$Services$$module$src$services$viewerForDoc$$(this.$G$.document.documentElement).$F$ && this.$D$.classList.add("i-amphtml-embedded");
  return this.$J$;
};
$SystemLayer$$module$extensions$amp_story$0_1$amp_story_system_layer$$.prototype.log = function($logEntry$jscomp$5$$) {
  _.$getMode$$module$src$mode$$().$development$ && (this.$I$.log($logEntry$jscomp$5$$), this.$F$.log($logEntry$jscomp$5$$));
};
var $UNSUPPORTED_BROWSER_LAYER_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_unsupported_browser_layer$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-unsupported-browser-overlay"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-overlay-container"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-gear-icon"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-overlay-text"}), 
$localizedStringId$:"21"}]}]};
$UnsupportedBrowserLayer$$module$extensions$amp_story$0_1$amp_story_unsupported_browser_layer$$.prototype.$build$ = function() {
  if (this.$D$) {
    return this.$D$;
  }
  this.$D$ = this.$F$.document.createElement("div");
  var $overlayEl$$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$F$.document, $UNSUPPORTED_BROWSER_LAYER_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_unsupported_browser_layer$$);
  $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$(this.$D$, $overlayEl$$, ".i-amphtml-story-unsupported-browser-overlay{position:absolute!important;z-index:200001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34a.4.4 0 0 0-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E\")!important}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-unsupported-browser-layer.css*/");
  return this.$D$;
};
var $LANDSCAPE_ORIENTATION_WARNING_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-no-rotation-overlay i-amphtml-story-system-reset"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-overlay-container"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-rotate-icon"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-overlay-text"}), 
$localizedStringId$:"20"}]}]}, $DESKTOP_SIZE_WARNING_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-no-rotation-overlay i-amphtml-story-system-reset"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-overlay-container"}), children:[{tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-desktop-size-icon"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-overlay-text"}), 
$localizedStringId$:"18"}]}]};
$ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$.prototype.$build$ = function() {
  var $$jscomp$this$jscomp$944$$ = this;
  if (!this.$isBuilt_$) {
    this.$isBuilt_$ = !0;
    var $root$jscomp$79$$ = this.$F$.document.createElement("div");
    this.$D$ = $renderSingle$$module$extensions$amp_story$0_1$simple_template$$(this.$F$.document, _.$JSCompiler_StaticMethods_isIos$$(this.$platform_$) || _.$JSCompiler_StaticMethods_isAndroid$$(this.$platform_$) ? $LANDSCAPE_ORIENTATION_WARNING_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$ : $DESKTOP_SIZE_WARNING_TEMPLATE$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer$$);
    $createShadowRootWithStyle$$module$extensions$amp_story$0_1$utils$$($root$jscomp$79$$, this.$D$, ".i-amphtml-story-no-rotation-overlay{position:absolute!important;z-index:200000!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}.i-amphtml-story-landscape.i-amphtml-story-no-rotation-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-desktop-size-icon,.i-amphtml-rotate-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important}.i-amphtml-rotate-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z'/%3E%3C/svg%3E\")!important}.i-amphtml-desktop-size-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z'/%3E%3C/svg%3E\")!important}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story-viewport-warning-layer.css*/");
    $JSCompiler_StaticMethods_ViewportWarningLayer$$module$extensions$amp_story$0_1$amp_story_viewport_warning_layer_prototype$onDesktopStateUpdate_$$(this, !!this.$storeService_$.get("desktopstate"));
    this.$vsync_$.$mutate$(function() {
      $$jscomp$this$jscomp$944$$.$G$.insertBefore($root$jscomp$79$$, $$jscomp$this$jscomp$944$$.$G$.firstChild);
    });
  }
};
$NavigationState$$module$extensions$amp_story$0_1$navigation_state$$.prototype.observe = function($stateChangeFn$jscomp$1$$) {
  this.$D$.add($stateChangeFn$jscomp$1$$);
};
$AmpStoryBackground$$module$extensions$amp_story$0_1$background$$.prototype.$attach$ = function() {
  this.$element_$.insertBefore(this.$container_$, this.$element_$.firstChild);
};
var $ORIGIN_WHITELIST$$module$extensions$amp_story$0_1$origin_whitelist$$ = "1005249088 1006163429 1008162951 10089108 1010750108 101608808 1019348494 1024745460 1025683127 1033170015 1040387537 1042067194 1044520440 1048639639 1048768124 1055309246 1061774354 1066656902 1071568410 1075430814 1080553171 1081382723 1085278050 1087738722 108933955 1097876642 1098115586 1120549175 1120627104 1122637707 1123796379 1137284944 1139124777 1139232118 1148058575 1151862878 1152230187 1158106191 1162517776 1167928101 1170971680 1172399292 1179223384 1180555863 1182996899 1188221598 1189200007 1191530385 1193086302 1196288955 1203175957 1203629527 1206202368 1209396307 1210508580 1212905960 1217648514 1219663970 1221946827 1223948430 1224563123 1224575240 122776143 1230010468 1235870422 1239612924 1252045233 1266686880 1267058499 1271217363 1271836085 1272420392 1275112483 1279420495 128315777 1288425632 1291233749 1291285285 129196458 1296373605 1303205228 1304908597 1314122247 1315067761 1323716407 1324465699 1331021272 1332628692 1337085136 1338665863 1341677116 1343032467 1343153594 134439678 1346203807 1348111506 1358036688 1358275160 1362700107 1363274340 1365188219 1366298771 136948846 1370863654 1382180463 1384161523 1384885545 1390195319 1390422041 1391355679 1392973808 1401234945 140139328 1403015859 1406014587 1408213495 1409815047 1416203172 1416336576 1420964370 1424038674 1426205130 1426908974 142793127 1429768323 1433535079 1436589466 1444797690 1446722118 1448422024 1451865411 1452555948 1452631355 1454471704 1456452353 1462086116 1463873379 1465911308 1472537769 1474107485 1476740172 1485177716 1491204959 1491535554 1495909416 1496939000 1502183300 1502183303 1505657051 1506356073 1510693494 1512200976 1515192136 1516044894 1516712134 1527869901 1527955987 1531622827 1542113246 1542890108 1544071036 1544904918 154680092 1548043628 1551216225 1554302139 1560556568 156105329 1565761663 1568645882 1568765576 1569754863 1574632236 1581752952 1587531568 1597805481 1598215278 1604714840 1605964375 1606771939 1606845272 1607498054 1607726622 1616084341 1618633174 1628432066 1629009934 1633699767 1635597923 1638733129 1639295851 1639843601 164006119 1641361303 1641559905 1641755208 1645367571 1648418043 164958789 1651834381 165218748 1657655384 1657857651 166080441 166550074 1668265379 167065142 1672286708 167457365 1686480925 1692205821 1696562222 1710525818 1712515810 172062822 1721539702 1727000213 1729406438 1734343726 1741775485 1746787055 174935976 1750274567 1752199172 1755487660 1758506884 176099546 1761507447 1762075722 1762779619 1765761661 1766408482 1777879957 1778814731 1782415871 1786821707 1790421447 1793364122 1796631487 179954814 1799580062 1800644108 1804754165 1814333326 1820719129 1828302437 1829392117 1831449632 1834315395 1842365929 1844097179 185695994 1857703569 1862429134 1866288580 1868825623 1873175698 1875012067 1878840548 188153886 1881549152 1885949806 1888202576 1890223908 1890285526 1890671223 1890684493 1891136033 1892097962 1892894796 1897412628 1897877027 190058212 1911273138 191151933 1914691069 1916053925 1921891253 19233369 1924394550 1925340007 1926444709 192946894 1932332195 1934543421 1937775827 1938906399 1944707380 1948987049 1956324539 1958476175 1960309827 1960384540 1966744125 1969495793 197478601 1978180435 1980609434 198514785 198596 1996557418 2003114268 200513980 2025148527 2025653254 2028144989 2034674542 2038626037 2038733725 2045713344 2046769120 2050218658 2051204756 2052997999 2062991370 2064945552 2065286458 2068779408 2072157691 2072267213 2074180413 207690439 2076974480 2077125460 208348204 2084091630 2085643881 209024299 2105278890 2109740133 2114974219 2115738579 2116825342 2117678752 2118239665 2120518392 2124375454 2126860507 212690086 2127261154 2128662947 2130032338 2131418359 2133539483 2134891083 2138194233 2139925877 2143498672 2150296095 2151200413 2154124693 2160565275 2160983462 2160997979 2163333100 2164891421 21653271 2172705717 2182978707 218358682 2183916165 2185544172 2193197883 2199838184 220103233 220632861 2207832807 2214432888 2221548842 2231215830 2232562594 2236849121 2242481580 2246978037 2247419316 2250390055 2250762825 2252559194 2254619785 2258293519 2266549358 2271213671 2275977064 2277458929 2278516260 2284332078 2297008443 2299758819 2311290044 2313067530 2319346288 2320558357 2325333010 2326328585 2334635490 2335819407 2342924379 234914730 2355703345 2360854839 2362191459 2373437534 2374338088 2375389254 2380804515 2388222966 2391306573 2393754227 2406112565 2408225607 2408621595 24124510 2413038656 2414533450 2415015357 241505564 2422198952 2426360694 2427371871 2428857403 2430945021 2434633986 2437839027 2438549543 2450881433 2451485116 2454481433 2465244303 2471412274 2472591333 2479714660 2479885882 2480671357 2483800093 2486258543 2487828098 2490491327 2491279653 2497807902 2497925282 2498415300 2500743291 25024500 250464294 2505963428 2512768819 2514009950 2514987571 2517493756 251839354 25231870 2527538528 2529138038 2529319010 2540030627 2544113070 2556872339 255752794 2563128128 2564618500 2565653830 2569424332 2580152873 2587850265 2588277885 2594064109 2600368355 2602595202 2605626788 2606715995 2611729722 2612967453 2613072379 2616846056 2619537797 2625905896 2627761745 2629810525 2632114880 2632194804 2635588792 2636391541 2637085339 2638013283 2639830307 2652634921 2662207691 2669510717 2671290557 2672599929 2676022422 2678501748 2678784124 2688673784 2689355865 2690235168 2697147002 2697162102 2702577685 2705736432 270580042 2709426781 2713112922 2718273594 2718446350 2718657511 2720496885 2723434276 2725145135 2731883839 2732398879 2734313767 273580543 2738155690 2741673809 2749835187 2754997109 2755153627 2759976952 2761508292 2762302648 2766106524 2766754689 2767961054 2769442224 2771182563 2771839729 2773939274 2774175302 2777697460 2780223587 2780639696 2784212793 2784479860 2787853368 2790502057 2791249547 2795182078 2797839121 2797844367 2798104093 2803957366 2812672743 2814213354 2814269253 2818266545 2820864954 2824188819 2825564215 2826727325 2830660705 2835331287 283661147 2845803411 2852627326 2861134475 2866448207 2866470331 2869433580 2870769104 2871678619 2872980659 288246341 2885388648 2887960156 2889518419 2893467144 2893590542 2911378586 2912197083 2914243153 2916268499 2917909858 2918230434 2919447987 2927763036 2930531110 2930818498 2933287666 2933678691 2934412348 2939338957 2941207893 294281365 294281662 2947883909 2951025154 2955070851 2956714159 296084766 296529422 2970931887 2972849537 2981581097 3003621454 3017572169 3018496372 3018644774 3021388654 3022092377 302251478 3024284791 3028558767 3029994837 3033234915 3034807703 3036809290 303732921 3040972817 3046149777 3047184436 305548058 3057278033 3058691259 3060519019 3060985947 3063651839 3071986971 3075313860 3084083922 3090387299 3090399922 3092172140 3107121214 3108333779 3109674920 3121167307 3125715798 3129729985 313079991 3132221784 3132507840 3133369938 3143386019 3144086645 3144741080 3150411430 3153172095 3156001180 3162265419 3172876126 3176449798 3181090214 3185535902 3188249139 3188949253 3189406311 3200093935 3201739013 3208039641 3213623864 3216947982 3226517851 323546264 3238374737 3240528713 3244251087 3246119198 3250723869 3252080663 3256754508 3259979025 3261687030 3263349802 3263974103 3268659322 3271330177 3277018274 3283747143 3284374556 3285310371 32924227 3295776646 3301018689 3301688194 3305747518 3307671928 3308888367 3309952347 3317371897 3318184596 3319768647 3320829318 3321457753 3322156041 3326846086 3341054457 334796489 3348379104 3349409886 3353312560 3355368229 3355514211 3355865416 335855777 335993804 3361466716 3362397554 3367171293 3376790055 3377688480 3381390900 3381459707 3385268402 3385846727 3387204737 338844244 3390751743 3394315494 3394334006 3400713300 3402978750 3408249191 3412968150 3416831537 3422087589 3424311896 3426850699 3429649351 3432208034 3436742277 3437958748 3446215673 3447835494 3448620799 3450221390 3450932588 3451824873 3455711044 3458310975 3460779095 3464002149 3473901382 3478297609 3493836323 3494887100 3498056818 3500123957 3500124664 3501893757 3506413408 3512587025 351733085 3523014533 3523382932 35263365 353380306 3535681127 354082441 3546004700 3549522247 3550596029 3551433075 3552657708 3561349461 3568064118 3572504894 3574354948 3584992110 3585356855 3589838638 3591084947 3591311390 3594356251 3595155179 3601411955 3607050633 3616387476 3620312512 3623074634 3625642354 3625812674 3625817820 3626599030 3635562717 3638406088 363894702 3651158166 365125059 3652728877 3655120568 365605518 3656736643 3657625030 3662429216 3670522374 3673866953 3685844947 3692367215 3695202375 369644343 3699602083 3700425047 3700982698 3710911628 3711744991 3712090763 3715241048 3718288426 3720081763 3723719135 3724179151 3739222329 3739723588 3741803823 3742076373 3743398870 3747063085 3748953276 3751013831 3751563702 3759458978 3760821273 3768651282 3774834930 3782187505 3783616226 3785031815 3802272349 3803427289 3808515023 3817759242 3821795909 3828669497 3828921363 382915004 3835330948 3835931824 3838983789 3840525739 3841844405 3842213279 3855175500 3866956400 3867683259 3872981885 387441557 3882281943 3882775575 3887146960 3887937944 3902596111 3907965689 3909837387 3916735828 3919621757 3926983707 3931371606 3935672072 3942169396 39435537 3949846101 3950676371 3952253013 3952985875 3956139136 3960376034 3964022265 3965548152 3966987861 3969333164 3980734000 3981323989 3984520418 3984648422 398689081 3989863158 399163616 4011166599 4012569232 4015960781 402077837 4022635071 4031427958 4038419154 4038719404 4040963526 4045001232 4045348626 4047076163 4050194446 4051110478 4053566461 4062202631 4064403033 4067292809 4071169494 4072394641 4083044353 4084194935 4088806601 4092369519 4092664937 4096098894 4097039999 4098138342 4100429993 4101484574 4102232185 410737467 4107833758 4109200270 4118237066 4118683051 4120045721 4123031720 4123388433 4126100909 4127212193 4127351496 4129698325 4130370977 4136314176 4137128901 4137746800 4138310485 4138329786 4138748709 4139415765 4140762491 414191242 4143625838 4158727075 416271463 4162923732 4165850368 4166086783 4166688207 4171920376 4177803870 4188696195 4189589756 4189681769 4190697962 4192009492 4192906772 4194824130 4195946149 4197762186 4199121874 4200069764 4205027822 4205379393 4206479264 4214687327 4218607244 4220526267 4225558487 4236710113 4237053731 4237182114 4237691393 4239963767 4248203292 4249010776 4249223952 4265092200 4266729165 4269692612 4273375831 4278046063 4279918903 4280076006 4280929457 4282579220 4283958960 4286009170 4287324892 4288013307 428973607 4292132695 431449824 436035672 436895478 4389594 439949811 44587625 446783407 451861333 455553168 468972428 473408210 475325125 480050636 481608910 482157976 497560025 499586047 508331528 509623217 509801075 510469576 52068258 524581881 525657889 526607860 527981890 535848262 542002382 54455908 552831033 56119367 589348565 590180088 590449081 605645428 607649949 613252162 616398681 616652136 620434036 628256541 630124302 637590687 645596329 646925241 649068147 663752382 664849843 666552315 667284477 667802223 67153338 672304730 673490260 675617839 676286387 67750003 679088556 679226261 681317506 684496063 687924735 690204840 699169033 699554795 699835401 708478954 709875223 713842199 714291084 721006546 722659024 724181429 72862350 738209012 740460396 743664866 749072475 750731789 759835262 760180450 760645918 76243793 763580606 764546410 769246051 770400223 773697188 777846327 779185847 781950191 785278645 791888271 793360597 795111685 799038630 802940860 803626326 805461297 809525143 812914966 817596813 826702818 829747121 830059440 834917366 835348130 836634675 838130347 839663198 840748945 845690173 851918419 853535426 855882027 856215399 865387614 870075114 870901046 878041739 884037848 884942273 885000263 886030867 887992794 888009729 889471570 9021761 904920502 90677328 907695148 911963500 919166850 926902921 92732745 92829579 93038994 930681418 932642421 932940871 938755445 939810501 947303209 956771599 95816379 958749034 959889676 960466505 962380673 963095446 965728075 968466010 973612916 976603789 978364597 982152280 9851868 986539863 988140002 989444878 990312922 994801981".split(" ");
var $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$CLOSE_BOOKEND$$ = {className:"i-amphtml-story-back-close-bookend", action:"togglebookend", data:!1}, $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$HIDDEN$$ = {className:"i-amphtml-story-button-hidden"}, $BackButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$PREVIOUS_PAGE$$ = {className:"i-amphtml-story-back-prev", $triggers$:"ampstory:previouspage"}, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$NEXT_PAGE$$ = 
{className:"i-amphtml-story-fwd-next", $triggers$:"ampstory:nextpage"}, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$REPLAY$$ = {className:"i-amphtml-story-fwd-replay", $triggers$:"ampstory:replay"}, $ForwardButtonStates$$module$extensions$amp_story$0_1$pagination_buttons$SHOW_BOOKEND$$ = {className:"i-amphtml-story-fwd-more", action:"togglebookend", data:!0}, $BUTTON$$module$extensions$amp_story$0_1$pagination_buttons$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-button-container"}), 
children:[{tag:"button", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-button-move"})}, {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-page-sentinel"})}]};
$PaginationButtons$$module$extensions$amp_story$0_1$pagination_buttons$$.prototype.$attach$ = function($element$jscomp$572$$) {
  $setClassOnHover$$module$extensions$amp_story$0_1$pagination_buttons$$(this.$F$.element, $element$jscomp$572$$, "i-amphtml-story-next-hover");
  $setClassOnHover$$module$extensions$amp_story$0_1$pagination_buttons$$(this.$D$.element, $element$jscomp$572$$, "i-amphtml-story-prev-hover");
  $element$jscomp$572$$.appendChild(this.$F$.element);
  $element$jscomp$572$$.appendChild(this.$D$.element);
};
$AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service$$.prototype.get = function() {
  return this.$D$;
};
var $$jscomp$compprop73$$ = {}, $MAX_MEDIA_ELEMENT_COUNTS$$module$extensions$amp_story$0_1$amp_story$$ = ($$jscomp$compprop73$$.audio = 4, $$jscomp$compprop73$$.video = 8, $$jscomp$compprop73$$), $SHARE_WIDGET_PILL_CONTAINER$$module$extensions$amp_story$0_1$amp_story$$ = {tag:"div", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-pill"}), children:[{tag:"span", $attrs$:_.$dict$$module$src$utils$object$$({"class":"i-amphtml-story-share-pill-label"}), $localizedStringId$:"17"}]};
_.$$jscomp$inherits$$($AmpStory$$module$extensions$amp_story$0_1$amp_story$$, window.AMP.BaseElement);
_.$JSCompiler_prototypeAlias$$ = $AmpStory$$module$extensions$amp_story$0_1$amp_story$$.prototype;
_.$JSCompiler_prototypeAlias$$.$buildCallback$ = function() {
  var $$jscomp$this$jscomp$954$$ = this;
  $JSCompiler_StaticMethods_assertAmpStoryExperiment_$$(this);
  this.element.hasAttribute("standalone") && (this.$win$.document.documentElement.classList.add("i-amphtml-story-standalone"), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$lockBody_$$(this), $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$onResize$$(this));
  this.$mutateElement$(function() {
  });
  this.element.querySelector("amp-story-page").setAttribute("active", "");
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListeners_$$(this);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializeListenersForDev_$$(this);
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$(this) && $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$(this.$storeService_$, "toggledesktop", !0);
  this.$navigationState_$.observe(function($stateChangeEvent$jscomp$3$$) {
    var $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$ = $$jscomp$this$jscomp$954$$.$variableService_$;
    switch($stateChangeEvent$jscomp$3$$.type) {
      case 0:
        var $$jscomp$inline_4257$$ = $stateChangeEvent$jscomp$3$$.value, $pageId$jscomp$inline_4258$$ = $$jscomp$inline_4257$$.pageId, $storyProgress$jscomp$inline_4259$$ = $$jscomp$inline_4257$$.$storyProgress$, $totalPages$jscomp$inline_4260$$ = $$jscomp$inline_4257$$.$totalPages$;
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$.$D$.storyPageIndex = $$jscomp$inline_4257$$.pageIndex;
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$.$D$.storyPageId = $pageId$jscomp$inline_4258$$;
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$.$D$.storyProgress = $storyProgress$jscomp$inline_4259$$;
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$.$D$.storyPageCount = $totalPages$jscomp$inline_4260$$;
    }
    $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$ = $$jscomp$this$jscomp$954$$.$analytics_$;
    switch($stateChangeEvent$jscomp$3$$.type) {
      case 0:
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$$($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$, "story-page-visible");
        break;
      case 1:
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$$($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$, "story-bookend-enter");
        break;
      case 2:
        $JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$triggerEvent_$$($JSCompiler_StaticMethods_AmpStoryAnalytics$$module$extensions$amp_story$0_1$analytics_prototype$onNavigationStateChange$self$jscomp$inline_4262_JSCompiler_StaticMethods_AmpStoryVariableService$$module$extensions$amp_story$0_1$variable_service_prototype$onNavigationStateChange$self$jscomp$inline_4255$$, "story-bookend-exit");
    }
  });
};
_.$JSCompiler_prototypeAlias$$.$layoutCallback$ = function() {
  var $$jscomp$this$jscomp$959$$ = this;
  if (!$AmpStory$$module$extensions$amp_story$0_1$amp_story$isBrowserSupported$$(this.$win$) && !_.$JSCompiler_StaticMethods_isBot$$(this.$platform_$)) {
    return $JSCompiler_StaticMethods_AmpStoryStoreService$$module$extensions$amp_story$0_1$amp_story_store_service_prototype$dispatch$$(this.$storeService_$, "togglesupportedbrowser", !1), window.Promise.resolve();
  }
  var $firstPageEl_storyLayoutPromise$$ = _.$JSCompiler_StaticMethods_assertElement$$(_.$user$$module$src$log$$(), this.element.querySelector("amp-story-page"), "Story must have at least one page."), $initialPageId$$ = $JSCompiler_StaticMethods_getHistoryStatePageId_$$(this) || $firstPageEl_storyLayoutPromise$$.id;
  this.$paginationButtons_$ || $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildPaginationButtons_$$(this);
  $firstPageEl_storyLayoutPromise$$ = $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$initializePages_$$(this).then(function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$buildSystemLayer_$$($$jscomp$this$jscomp$959$$);
  }).then(function() {
    $$jscomp$this$jscomp$959$$.$pages_$.forEach(function($$jscomp$this$jscomp$959$$) {
      $$jscomp$this$jscomp$959$$.setActive(!1);
    });
  }).then(function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$switchTo_$$($$jscomp$this$jscomp$959$$, $initialPageId$$);
  }).then(function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$preloadPagesByDistance_$$($$jscomp$this$jscomp$959$$);
  }).then(function() {
    $$jscomp$this$jscomp$959$$.$storeService_$.get("desktopstate") || $$jscomp$this$jscomp$959$$.$shareMenu_$.$build$();
    var $firstPageEl_storyLayoutPromise$$ = _.$Services$$module$src$services$viewerForDoc$$($$jscomp$this$jscomp$959$$.element).$F$ ? new $InfoDialog$$module$extensions$amp_story$0_1$amp_story_info_dialog$$($$jscomp$this$jscomp$959$$.$win$, $$jscomp$this$jscomp$959$$.element) : null;
    $firstPageEl_storyLayoutPromise$$ && $firstPageEl_storyLayoutPromise$$.$build$();
  });
  $firstPageEl_storyLayoutPromise$$.then(function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$whenPagesLoaded_$$($$jscomp$this$jscomp$959$$);
  }).then(function() {
    return $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$markStoryAsLoaded_$$($$jscomp$this$jscomp$959$$);
  });
  $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$validateConsent_$$(this);
  return $firstPageEl_storyLayoutPromise$$;
};
_.$JSCompiler_prototypeAlias$$.$isLayoutSupported$ = function($layout$jscomp$98$$) {
  return "container" == $layout$jscomp$98$$;
};
_.$JSCompiler_prototypeAlias$$.$prerenderAllowed$ = function() {
  return !0;
};
_.$JSCompiler_prototypeAlias$$.$onKeyDown_$ = function($e$jscomp$312$$) {
  if (!this.$storeService_$.get("bookendstate")) {
    switch($e$jscomp$312$$.key) {
      case "ArrowLeft":
        this.$activePage_$.$previous$();
        break;
      case "ArrowRight":
        $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$next_$$(this);
    }
  }
};
_.$JSCompiler_prototypeAlias$$.$hasBookend_$ = function() {
  return this.$storeService_$.get("canshowbookend") ? $JSCompiler_StaticMethods_AmpStory$$module$extensions$amp_story$0_1$amp_story_prototype$isDesktop_$$(this) ? $JSCompiler_StaticMethods_Bookend$$module$extensions$amp_story$0_1$amp_story_bookend_prototype$loadConfig$$(this.$bookend_$, !1).then(function($config$jscomp$82$$) {
    return !!($config$jscomp$82$$ && $config$jscomp$82$$.$relatedArticles$ && $config$jscomp$82$$.$relatedArticles$.length);
  }) : window.Promise.resolve(!0) : window.Promise.resolve(!1);
};
_.$JSCompiler_prototypeAlias$$.$getPageById$ = function($id$jscomp$96_pageIndex$jscomp$9$$) {
  $id$jscomp$96_pageIndex$jscomp$9$$ = $JSCompiler_StaticMethods_getPageIndexById_$$(this, $id$jscomp$96_pageIndex$jscomp$9$$);
  return this.$pages_$[$id$jscomp$96_pageIndex$jscomp$9$$];
};
_.$JSCompiler_prototypeAlias$$.$getElement$ = function() {
  return this.element;
};
_.$JSCompiler_prototypeAlias$$.$getNavigationState$ = function() {
  return this.$navigationState_$;
};
_.$JSCompiler_prototypeAlias$$.$addPage$ = function($page$jscomp$18$$) {
  this.$pages_$.push($page$jscomp$18$$);
  $page$jscomp$18$$.$isAd$() && this.$adPages_$.push($page$jscomp$18$$);
};
_.$JSCompiler_prototypeAlias$$.$insertPage$ = function($nextPageEl_pageBeforeId$$, $pageToBeInsertedId$$) {
  var $nextPageId_pageBeforeEl_pageToBeInserted$$ = this.$getPageById$($pageToBeInsertedId$$), $pageToBeInsertedEl$$ = $nextPageId_pageBeforeEl_pageToBeInserted$$.element;
  if ($nextPageId_pageBeforeEl_pageToBeInserted$$.$isAd$() && !this.$storeService_$.get("caninsertautomaticad")) {
    _.$dev$$module$src$log$$().$expectedError$("amp-story", "Inserting ads automatically is disallowed.");
  } else {
    var $nextPage$jscomp$1_pageBefore$$ = this.$getPageById$($nextPageEl_pageBeforeId$$);
    $nextPageId_pageBeforeEl_pageToBeInserted$$ = $nextPage$jscomp$1_pageBefore$$.element;
    if ($nextPage$jscomp$1_pageBefore$$ = this.$getNextPage$($nextPage$jscomp$1_pageBefore$$)) {
      $nextPageId_pageBeforeEl_pageToBeInserted$$.setAttribute("i-amphtml-advance-to", $pageToBeInsertedId$$), $nextPageId_pageBeforeEl_pageToBeInserted$$.setAttribute("auto-advance-to", $pageToBeInsertedId$$), $pageToBeInsertedEl$$.setAttribute("i-amphtml-return-to", $nextPageEl_pageBeforeId$$), $nextPageEl_pageBeforeId$$ = $nextPage$jscomp$1_pageBefore$$.element, $nextPageId_pageBeforeEl_pageToBeInserted$$ = $nextPageEl_pageBeforeId$$.id, $pageToBeInsertedEl$$.setAttribute("i-amphtml-advance-to", 
      $nextPageId_pageBeforeEl_pageToBeInserted$$), $pageToBeInsertedEl$$.setAttribute("auto-advance-to", $nextPageId_pageBeforeEl_pageToBeInserted$$), $nextPageEl_pageBeforeId$$.setAttribute("i-amphtml-return-to", $pageToBeInsertedId$$);
    }
  }
};
_.$JSCompiler_prototypeAlias$$.$getNextPage$ = function($nextPageId$jscomp$1_page$jscomp$19$$) {
  return ($nextPageId$jscomp$1_page$jscomp$19$$ = $JSCompiler_StaticMethods_AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page_prototype$getNextPageId$$($nextPageId$jscomp$1_page$jscomp$19$$, !0)) ? this.$getPageById$($nextPageId$jscomp$1_page$jscomp$19$$) : null;
};
var $AMP$jscomp$inline_4323$$ = window.self.AMP;
$AMP$jscomp$inline_4323$$.registerElement("amp-story", $AmpStory$$module$extensions$amp_story$0_1$amp_story$$, ".i-amphtml-story-background{background-color:transparent}amp-story[standalone][desktop]{max-width:none!important;max-height:none!important;width:100vw!important}[desktop] .i-amphtml-story-logo{display:block!important}.i-amphtml-story-background-container{opacity:.8!important;position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;overflow:hidden!important}.i-amphtml-story-background-overlay,.i-amphtml-story-background-overlay:after{position:absolute!important;left:0!important;top:0!important;height:100%!important;width:100%!important;z-index:1!important;background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-background-overlay:after{content:\"\"!important;display:block!important;opacity:0!important;background-color:rgba(0,0,0,0.5)!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important}.i-amphtml-story-bookend-active .i-amphtml-story-background-overlay:after{opacity:1!important}.i-amphtml-story-background{position:absolute!important;top:-150px!important;right:-150px!important;bottom:-150px!important;left:-150px!important;opacity:0!important;-webkit-filter:blur(50px)!important;filter:blur(50px)!important;background-size:cover!important;background-color:transparent!important;background-position:50%!important;will-change:opacity,z-index!important;z-index:0!important}.i-amphtml-story-background.active{opacity:1!important;z-index:1!important}[desktop] amp-story-page{-webkit-transform:scale(1.0) translateX(-200vw) translateY(0%)!important;transform:scale(1.0) translateX(-200vw) translateY(0%)!important;opacity:.05!important;-webkit-transform-origin:left!important;transform-origin:left!important;border-radius:16px!important}[desktop] amp-story-page[distance=\"0\"],[desktop] amp-story-page[distance=\"1\"]{-webkit-transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1),-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important}[desktop] .i-amphtml-story-button-container{position:absolute!important;top:0!important;bottom:0!important;left:0!important;right:0!important;z-index:100002!important;pointer-events:none!important;display:block!important}[desktop] .i-amphtml-story-button-container:before{content:\"\";position:absolute!important;top:0!important;bottom:0!important;width:calc(50vw - 23vh - 32px)!important}.i-amphtml-story-back-prev>.i-amphtml-story-page-sentinel,.i-amphtml-story-button-move,.i-amphtml-story-fwd-next>.i-amphtml-story-page-sentinel{pointer-events:all!important}.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{cursor:default!important;pointer-events:none!important;opacity:0!important}[desktop]>.next-container:before{right:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(90deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important}[desktop]>.prev-container:before{left:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(90deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}[desktop]>.next-container>.i-amphtml-story-button-move{right:0!important}.prev-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}.next-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translate(calc(50% + 64px))!important;transform:scale(0.9) translate(calc(50% + 64px))!important}[desktop] amp-story-page[active]+amp-story-page~amp-story-page,[dir=rtl] [desktop] amp-story-page{-webkit-transform:scale(0.9) translateX(55vw) translateY(0%)!important;transform:scale(0.9) translateX(55vw) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page~amp-story-page{-webkit-transform:scale(0.9) translateX(-200vw) translateY(0%)!important;transform:scale(0.9) translateX(-200vw) translateY(0%)!important}.i-amphtml-story-page-sentinel,[desktop]>amp-story-page{left:50%!important;right:auto!important;margin:auto!important;max-height:75vh!important;max-width:45vh!important;min-width:320px!important;min-height:533px!important}[desktop]>amp-story-page{box-shadow:0 0 15px rgba(0,0,0,0.4)!important}.i-amphtml-story-page-sentinel{width:100vw!important;height:100vh!important;margin-left:-32px!important;cursor:pointer}.i-amphtml-story-button-move,.i-amphtml-story-page-sentinel{position:absolute!important;top:0!important;bottom:0!important;z-index:100002!important}.i-amphtml-story-button-move{margin:auto 40px!important;width:60px!important;height:60px!important;border-radius:50%!important;border:0!important;background-color:#fff!important;background-repeat:no-repeat!important;background-size:12px 17px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:.5!important;-webkit-transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear,-webkit-transform 300ms linear!important;cursor:pointer!important;outline:none!important}.i-amphtml-story-next-hover>amp-story-page[active]+amp-story-page,.i-amphtml-story-prev-hover>amp-story-page[pre-active]{opacity:0.3!important}.prev-container>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7 22l-9.5-9.5L15.7 3l-3-3L.4 12.6 12.8 25'/%3E%3C/svg%3E\")!important;background-position:45% 50%!important;left:0!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.3 3l9.5 9.5L.3 22l3 3 12.4-12.5L3.2 0'/%3E%3C/svg%3E\")!important;background-position:55% 50%!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-next-hover>.next-container>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.prev-container>.i-amphtml-story-button-move{-webkit-transform:scale(1.1)!important;transform:scale(1.1)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{opacity:0!important}.i-amphtml-story-next-hover>.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{-webkit-transform:translateX(8px)!important;transform:translateX(8px)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-back-close-bookend>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.i-amphtml-story-back-prev>.i-amphtml-story-button-move{-webkit-transform:translateX(-8px)!important;transform:translateX(-8px)!important;opacity:1!important}div.i-amphtml-story-top{position:relative!important;display:block!important;height:96px!important;width:100%!important;z-index:1!important;background:-webkit-linear-gradient(top,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(180deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}.i-amphtml-story-share-pill{display:none!important;position:absolute!important;top:0!important;right:40px!important;bottom:0!important;margin:auto!important;height:40px!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}[desktop] .i-amphtml-story-share-pill{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}span.i-amphtml-story-share-pill-label{font-family:Roboto,sans-serif!important;position:absolute!important;right:15px!important;text-align:center!important;width:60px!important;font-size:12px!important;font-weight:700!important;letter-spacing:.5px!important;margin:auto!important;color:#fff!important;box-sizing:initial!important;text-transform:uppercase!important}.i-amphtml-story-share-pill:before{position:absolute!important;content:\"\"!important;width:58px!important;height:40px!important;padding:0 16px!important;background-color:hsla(0,0%,100%,0.2)!important;border-radius:500px!important;box-sizing:initial!important;-webkit-transition:width 300ms ease-in-out!important;transition:width 300ms ease-in-out!important;right:0!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{opacity:0!important;-webkit-transition:opacity 300ms linear!important;transition:opacity 300ms linear!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item{opacity:1!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{margin:0!important;width:48px!important;height:48px!important;padding:0!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(9){-webkit-transition-delay:30ms!important;transition-delay:30ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(8){-webkit-transition-delay:60ms!important;transition-delay:60ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(7){-webkit-transition-delay:90ms!important;transition-delay:90ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(6){-webkit-transition-delay:120ms!important;transition-delay:120ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(5){-webkit-transition-delay:150ms!important;transition-delay:150ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(4){-webkit-transition-delay:180ms!important;transition-delay:180ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(3){-webkit-transition-delay:210ms!important;transition-delay:210ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(2){-webkit-transition-delay:240ms!important;transition-delay:240ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:first-child{-webkit-transition-delay:270ms!important;transition-delay:270ms!important}.i-amphtml-story-share-pill .i-amphtml-story-share-list{padding:0!important;margin:0 72px 0 0!important}.i-amphtml-story-share-pill:hover:before{width:calc(100% - 32px)!important}.i-amphtml-story-share-pill .i-amphtml-story-share-icon{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:48px!important;height:48px!important;padding:0}[desktop] .i-amphtml-story-share-icon{font-size:0px!important;background-size:24px 24px!important;background-position:50%!important;padding:0!important}[desktop] .i-amphtml-story-share-icon.amp-social-share-facebook{background-size:28px 28px!important;background-position:50%!important}[desktop] .i-amphtml-story-share-icon:active:before,[desktop] .i-amphtml-story-share-icon:before{display:none!important}[desktop] .i-amphtml-story-share-list{margin-right:72px!important}[desktop] .i-amphtml-story-top{z-index:100002!important}amp-story{font-display:optional}.i-amphtml-story-grid-template-vertical{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start;padding:32px}.i-amphtml-story-grid-template-vertical>*{width:100%}.i-amphtml-story-grid-template-horizontal{-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:start;grid-gap:16px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;padding:32px}.i-amphtml-story-grid-template-thirds{padding:32px}amp-story-grid-layer{padding:68px 32px 32px}.amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' fill='%23fff' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}amp-story,amp-story-cta-layer,amp-story-grid-layer,amp-story-page{contain:strict!important;overflow:hidden!important}amp-consent{position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:none!important;z-index:initial!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:start!important;width:auto!important}amp-story{height:100%!important;position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;width:100%!important}html.i-amphtml-story-standalone,html.i-amphtml-story-standalone body{height:100%!important;margin:0!important;padding:0!important;width:100%!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}html.i-amphtml-story-standalone #i-amphtml-wrapper body{border-top:none!important;overflow:hidden!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important;max-height:initial!important;max-width:initial!important;min-height:initial!important;min-width:initial!important}amp-story[standalone]:-webkit-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-moz-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story .amp-video-eq{height:14px!important;width:14px!important}amp-story .amp-video-eq .amp-video-eq-col{margin-right:2px!important}amp-story .amp-video-eq .amp-video-eq-col:last-child{margin-right:0!important}amp-story .amp-video-eq:not(.amp-video-eq-play){display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;opacity:1!important;-webkit-transition:none!important;transition:none!important;z-index:0!important}amp-story-page[active]{z-index:1!important}.i-amphtml-story-fallback amp-story-page{display:none!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container:not([active]){-webkit-transform:translateY(1000%)!important;transform:translateY(1000%)!important}amp-story-page[active],amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"0\"],amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"1\"]{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"2\"]{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}.i-amphtml-story-bookend-active:not([desktop])>amp-story-page.i-amphtml-layout-container[active]{-webkit-transform:translateY(0) scale(1.2)!important;transform:translateY(0) scale(1.2)!important;-webkit-filter:blur(15px)!important;filter:blur(15px)!important}.i-amphtml-story-bookend-active>amp-story-page[active]:after{content:\"\"!important;display:block!important;left:0!important;top:0!important;bottom:0!important;right:0!important;position:absolute!important;background:hsla(0,0%,45.9%,0.3)!important;z-index:2!important}amp-story amp-video:after{content:\"\"!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}amp-story-cta-layer{display:block!important;top:80%!important;margin:0!important;z-index:3!important}amp-story-cta-layer,amp-story-grid-layer{position:absolute!important;right:0!important;bottom:0!important;left:0!important}amp-story-grid-layer{display:grid!important;top:0!important;z-index:2!important}amp-story-grid-layer *{box-sizing:border-box!important;margin:0!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}.i-amphtml-story-grid-template-fill>:not(:first-child),.i-amphtml-story-logo{display:none!important}.i-amphtml-story-logo{margin:15px!important}.i-amphtml-story-grid-template-fill>:first-child{bottom:0!important;display:block!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}.i-amphtml-story-grid-template-fill>amp-anim img,.i-amphtml-story-grid-template-fill>amp-img img,.i-amphtml-story-grid-template-fill>amp-video video{-o-object-fit:cover!important;object-fit:cover!important}.i-amphtml-story-grid-template-vertical{grid-auto-flow:row!important;grid-template-columns:100%!important}.i-amphtml-story-grid-template-horizontal{grid-auto-flow:column!important;grid-template-rows:100%!important}.i-amphtml-story-grid-template-thirds{grid-template-rows:33% 33% 33%!important;grid-template-areas:\"upper-third\" \"middle-third\" \"lower-third\"!important}.i-amphtml-story-bookend-active .i-amphtml-story-dev-logs-button,.i-amphtml-story-dev-logs-button[data-count=\"0\"]{display:none!important}.i-amphtml-story-dev-logs-button{background-position:50%!important;background-repeat:no-repeat!important}.i-amphtml-story-dev-logs-button:after{background-color:#fff!important;border-radius:6px!important;box-sizing:border-box!important;color:#444;content:attr(data-count)!important;display:inline-block!important;font-family:Roboto!important;font-size:11px!important;height:12px!important;line-height:12px!important;padding:0 6px!important;position:absolute!important;right:0!important;top:6px!important}.i-amphtml-story-error-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-warning-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-success-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}amp-story[standalone] .i-amphtml-story-developer-log{background:rgba(0,0,0,0.85)!important;bottom:0!important;box-sizing:border-box!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto!important;left:0!important;max-height:45%!important;padding:0!important;position:fixed!important;right:0!important;text-align:left!important;z-index:100002!important}.i-amphtml-story-developer-log-header{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;background:rgba(3,169,244,0.85)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;font-weight:700!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:12px 20px!important;text-align:center!important}.i-amphtml-story-developer-log-close,.i-amphtml-story-developer-log-header{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-developer-log-close{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23FFF' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-context{color:#000!important;font-family:Roboto Mono!important}.i-amphtml-story-developer-log-entries{list-style-type:none!important;margin:0!important;overflow-x:hidden!important;overflow-y:auto!important;padding:0!important}.i-amphtml-story-developer-log-entry{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;border-bottom:1px solid hsla(0,0%,100%,0.5)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;padding:20px!important}.i-amphtml-story-developer-log-entry:before{background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;content:\"\";display:inline-block!important;-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:32px!important;margin-right:20px!important;width:32px!important}.i-amphtml-story-developer-log-entry-error:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-warning:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-success:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-line-pack:center!important;align-content:center!important;background-color:#222!important;bottom:0!important;color:#f0f0f0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto,sans-serif!important;font-size:20px!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;left:0!important;padding:32px!important;position:absolute!important;right:0!important;top:0!important;z-index:999999!important;text-align:center!important}.i-amphtml-story-experiment-icon{background-repeat:no-repeat!important;background-size:cover!important;height:64px!important;margin:0 auto 16px!important;width:64px!important}.i-amphtml-story-experiment-icon-error{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-icon-done{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error button{background-color:transparent!important;border:1px solid #f0f0f0!important;border-radius:8px!important;color:#f0f0f0!important;cursor:pointer!important;font-size:20px!important;font-family:Roboto,sans-serif!important;margin:16px 0 0!important;outline:none!important;padding:8px 32px!important;text-transform:uppercase!important;width:50%!important}.i-amphtml-story-experiment-error button:active,.i-amphtml-story-experiment-error button:focus{background-color:#f0f0f0!important;color:#222!important}.i-amphtml-story-toast{position:absolute!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;-webkit-animation:toast 2.2s!important;animation:toast 2.2s!important;-webkit-animation-fill-mode:both!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100002!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@-webkit-keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}@keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-button-container{display:none!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;top:calc(100% - 36px)!important;right:12px!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{-webkit-animation:container-rotate 1294ms linear infinite!important;animation:container-rotate 1294ms linear infinite!important}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{-webkit-animation-name:fill-unfill-rotate!important;animation-name:fill-unfill-rotate!important;-webkit-animation-duration:4400ms!important;animation-duration:4400ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important;opacity:1!important}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:\"\"!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;-webkit-transform:rotate(129deg)!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;-webkit-transform:rotate(-129deg)!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{-webkit-animation-duration:1100ms!important;animation-duration:1100ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{-webkit-animation-name:left-spin!important;animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{-webkit-animation-name:right-spin!important;animation-name:right-spin!important}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}\n/*# sourceURL=/extensions/amp-story/0.1/amp-story.css*/");
$AMP$jscomp$inline_4323$$.registerElement("amp-story-page", $AmpStoryPage$$module$extensions$amp_story$0_1$amp_story_page$$);
$AMP$jscomp$inline_4323$$.registerElement("amp-story-grid-layer", $AmpStoryGridLayer$$module$extensions$amp_story$0_1$amp_story_grid_layer$$);
$AMP$jscomp$inline_4323$$.registerElement("amp-story-cta-layer", $AmpStoryCtaLayer$$module$extensions$amp_story$0_1$amp_story_cta_layer$$);
$AMP$jscomp$inline_4323$$.registerElement("amp-story-consent", $AmpStoryConsent$$module$extensions$amp_story$0_1$amp_story_consent$$);

})});
