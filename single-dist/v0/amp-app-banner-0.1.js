(self.AMP=self.AMP||[]).push({n:"amp-app-banner",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($$jscomp$super$this$jscomp$20_element$jscomp$358$$){$$jscomp$super$this$jscomp$20_element$jscomp$358$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$20_element$jscomp$358$$)||this;$$jscomp$super$this$jscomp$20_element$jscomp$358$$.$G$=null;$$jscomp$super$this$jscomp$20_element$jscomp$358$$.$F$=!1;return $$jscomp$super$this$jscomp$20_element$jscomp$358$$},$JSCompiler_StaticMethods_setupOpenButton_$$=function($JSCompiler_StaticMethods_setupOpenButton_$self$$,
$button$jscomp$1$$,$openInAppUrl$$,$installAppUrl$$){$button$jscomp$1$$.addEventListener("click",function(){$JSCompiler_StaticMethods_setupOpenButton_$self$$.$J$($openInAppUrl$$,$installAppUrl$$)})},$JSCompiler_StaticMethods_checkIfDismissed_$$=function($JSCompiler_StaticMethods_checkIfDismissed_$self$$){$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$isDismissed$().then(function($dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$){if($dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$)$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$($JSCompiler_StaticMethods_checkIfDismissed_$self$$);
else{$dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$win$.document.createElement("i-amphtml-app-banner-top-padding");$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.appendChild($dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$);$dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$win$.document.createElement("button");
$dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$.classList.add("amp-app-banner-dismiss-button");$dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$.setAttribute("aria-label",$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.getAttribute("data-dismiss-button-aria-label")||"Dismiss");var $boundOnDismissButtonClick$jscomp$inline_2904$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$K$.bind($JSCompiler_StaticMethods_checkIfDismissed_$self$$);
$dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$.addEventListener("click",$boundOnDismissButtonClick$jscomp$inline_2904$$);$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.appendChild($dismissButton$jscomp$inline_2903_isDismissed_paddingBar$jscomp$inline_2902$$);_.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$(_.$JSCompiler_StaticMethods_getVsync$$($JSCompiler_StaticMethods_checkIfDismissed_$self$$),{measure:$measureBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,
$mutate$:$updateViewportPadding$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element,viewport:$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$getViewport$()});$JSCompiler_StaticMethods_checkIfDismissed_$self$$.expand()}})},$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$=function($JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$self$$){return _.$JSCompiler_StaticMethods_runPromise$$(_.$JSCompiler_StaticMethods_getVsync$$($JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$self$$),
{measure:void 0,$mutate$:$hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$self$$.element,viewport:$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$self$$.$getViewport$()})},$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($element$jscomp$359$$){return $AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,
$element$jscomp$359$$)||this},$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($$jscomp$super$this$jscomp$21_element$jscomp$360$$){$$jscomp$super$this$jscomp$21_element$jscomp$360$$=$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,$$jscomp$super$this$jscomp$21_element$jscomp$360$$)||this;$$jscomp$super$this$jscomp$21_element$jscomp$360$$.$D$=null;$$jscomp$super$this$jscomp$21_element$jscomp$360$$.$H$=null;return $$jscomp$super$this$jscomp$21_element$jscomp$360$$},
$JSCompiler_StaticMethods_parseIosMetaContent_$$=function($JSCompiler_StaticMethods_parseIosMetaContent_$self$$,$metaContent_openUrl$$){var $config$jscomp$53$$={};$metaContent_openUrl$$.replace(/\s/,"").split(",").forEach(function($JSCompiler_StaticMethods_parseIosMetaContent_$self$$){$JSCompiler_StaticMethods_parseIosMetaContent_$self$$=$JSCompiler_StaticMethods_parseIosMetaContent_$self$$.split("=");$config$jscomp$53$$[$JSCompiler_StaticMethods_parseIosMetaContent_$self$$[0]]=$JSCompiler_StaticMethods_parseIosMetaContent_$self$$[1]});
var $appId$jscomp$2_installAppUrl$jscomp$2$$=$config$jscomp$53$$["app-id"];($metaContent_openUrl$$=$config$jscomp$53$$["app-argument"])||_.$user$$module$src$log$$().error("amp-app-banner",'<meta name="apple-itunes-app">\'s content should contain app-argument to allow opening an already installed application on iOS.');$appId$jscomp$2_installAppUrl$jscomp$2$$="https://itunes.apple.com/us/app/id"+$appId$jscomp$2_installAppUrl$jscomp$2$$;$JSCompiler_StaticMethods_setupOpenButton_$$($JSCompiler_StaticMethods_parseIosMetaContent_$self$$,
$JSCompiler_StaticMethods_parseIosMetaContent_$self$$.$G$,$metaContent_openUrl$$||$appId$jscomp$2_installAppUrl$jscomp$2$$,$appId$jscomp$2_installAppUrl$jscomp$2$$)},$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($$jscomp$super$this$jscomp$22_element$jscomp$361$$){$$jscomp$super$this$jscomp$22_element$jscomp$361$$=$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,$$jscomp$super$this$jscomp$22_element$jscomp$361$$)||this;$$jscomp$super$this$jscomp$22_element$jscomp$361$$.$H$=
null;$$jscomp$super$this$jscomp$22_element$jscomp$361$$.$D$="";$$jscomp$super$this$jscomp$22_element$jscomp$361$$.$I$=!1;return $$jscomp$super$this$jscomp$22_element$jscomp$361$$},$handleDismiss$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($state$jscomp$47$$){$hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$jscomp$47$$);$state$jscomp$47$$.$storagePromise$.then(function($storage$jscomp$5$$){$storage$jscomp$5$$.set($state$jscomp$47$$.$storageKey$,!0)})},$hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=
function($state$jscomp$48$$){_.$JSCompiler_StaticMethods_removeFromFixedLayer$$($state$jscomp$48$$.viewport,$state$jscomp$48$$.element);_.$removeElement$$module$src$dom$$($state$jscomp$48$$.element);_.$JSCompiler_StaticMethods_updatePaddingBottom$$($state$jscomp$48$$.viewport,0)},$measureBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=function($state$jscomp$49$$){$state$jscomp$49$$.$bannerHeight$=$state$jscomp$49$$.viewport.$getLayoutRect$($state$jscomp$49$$.element).height},$updateViewportPadding$$module$extensions$amp_app_banner$0_1$amp_app_banner$$=
function($state$jscomp$50$$){_.$JSCompiler_StaticMethods_updatePaddingBottom$$($state$jscomp$50$$.viewport,$state$jscomp$50$$.$bannerHeight$);_.$JSCompiler_StaticMethods_addToFixedLayer$$($state$jscomp$50$$.viewport,$state$jscomp$50$$.element)};_.$$jscomp$inherits$$($AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,AMP.BaseElement);$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$J$=function(){};
$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$K$=function(){_.$JSCompiler_StaticMethods_Vsync$$module$src$service$vsync_impl_prototype$run$$(_.$JSCompiler_StaticMethods_getVsync$$(this),{measure:void 0,$mutate$:$handleDismiss$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:this.element,viewport:this.$getViewport$(),$storagePromise$:_.$Services$$module$src$services$storageForDoc$$(this.$getAmpDoc$()),$storageKey$:"amp-app-banner:"+this.element.id})};
$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$isDismissed$=function(){var $$jscomp$this$jscomp$456$$=this;return _.$Services$$module$src$services$storageForDoc$$(this.$getAmpDoc$()).then(function($storage$jscomp$4$$){return $storage$jscomp$4$$.get("amp-app-banner:"+$$jscomp$this$jscomp$456$$.element.id)}).then(function($$jscomp$this$jscomp$456$$){return!!$$jscomp$this$jscomp$456$$},function($$jscomp$this$jscomp$456$$){_.$dev$$module$src$log$$().error("amp-app-banner",
"Failed to read storage",$$jscomp$this$jscomp$456$$);return!1})};_.$$jscomp$inherits$$($AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);
$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$upgradeCallback$=function(){var $platform$jscomp$7$$=_.$Services$$module$src$services$platformFor$$(this.$win$);return _.$JSCompiler_StaticMethods_isIos$$($platform$jscomp$7$$)?new $AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$(this.element):_.$JSCompiler_StaticMethods_isAndroid$$($platform$jscomp$7$$)?new $AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$(this.element):
null};$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$layoutCallback$=function(){_.$user$$module$src$log$$().$Log$$module$src$log_prototype$info$("amp-app-banner","Only iOS or Android platforms are currently supported.");return $JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this)};_.$$jscomp$inherits$$($AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);
$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$preconnectCallback$=function($opt_onLayout$jscomp$5$$){this.element.parentNode&&this.$preconnect$.url("https://itunes.apple.com",$opt_onLayout$jscomp$5$$)};
$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$buildCallback$=function(){this.$D$=_.$Services$$module$src$services$viewerForDoc$$(this.$getAmpDoc$());var $platform$jscomp$8$$=_.$Services$$module$src$services$platformFor$$(this.$win$);(this.$F$=!this.$D$.$G$&&_.$JSCompiler_StaticMethods_isSafari$$($platform$jscomp$8$$))?(_.$user$$module$src$log$$().$Log$$module$src$log_prototype$info$("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),
$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this)):this.$D$.$G$&&!_.$JSCompiler_StaticMethods_hasCapability$$(this.$D$,"navigateTo")?$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this):(this.$H$=this.$win$.document.head.querySelector("meta[name=apple-itunes-app]"))?(this.$G$=this.element.querySelector("button[open-button]"),$JSCompiler_StaticMethods_parseIosMetaContent_$$(this,
this.$H$.getAttribute("content")),$JSCompiler_StaticMethods_checkIfDismissed_$$(this)):$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this)};$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$layoutCallback$=function(){return Promise.resolve()};
$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$J$=function($openInAppUrl$jscomp$1$$,$installAppUrl$jscomp$1$$){var $$jscomp$this$jscomp$458$$=this;this.$D$.$G$?(_.$Services$$module$src$services$timerFor$$(this.$win$).delay(function(){_.$JSCompiler_StaticMethods_Viewer$$module$src$service$viewer_impl_prototype$sendMessage$$($$jscomp$this$jscomp$458$$.$D$,"navigateTo",_.$dict$$module$src$utils$object$$({url:$installAppUrl$jscomp$1$$}))},1500),_.$JSCompiler_StaticMethods_Viewer$$module$src$service$viewer_impl_prototype$sendMessage$$(this.$D$,
"navigateTo",_.$dict$$module$src$utils$object$$({url:$openInAppUrl$jscomp$1$$}))):(_.$Services$$module$src$services$timerFor$$(this.$win$).delay(function(){_.$openWindowDialog$$module$src$dom$$($$jscomp$this$jscomp$458$$.$win$,$installAppUrl$jscomp$1$$,"_top")},1500),_.$openWindowDialog$$module$src$dom$$(this.$win$,$openInAppUrl$jscomp$1$$,"_top"))};_.$$jscomp$inherits$$($AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$preconnectCallback$=function($opt_onLayout$jscomp$6$$){this.element.parentNode&&(this.$preconnect$.url("https://play.google.com",$opt_onLayout$jscomp$6$$),this.$D$&&this.$preconnect$.preload(this.$D$))};
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$buildCallback$=function(){var $win$jscomp$338$$=this.$win$,$element$jscomp$362$$=this.element,$viewer$jscomp$36$$=_.$Services$$module$src$services$viewerForDoc$$(this.$getAmpDoc$());this.$H$=$win$jscomp$338$$.document.head.querySelector("link[rel=manifest],link[rel=origin-manifest]");var $platform$jscomp$9$$=_.$Services$$module$src$services$platformFor$$($win$jscomp$338$$);_.$Services$$module$src$services$urlForDoc$$($element$jscomp$362$$);
var $isChromeAndroid$$=_.$JSCompiler_StaticMethods_isAndroid$$($platform$jscomp$9$$)&&_.$JSCompiler_StaticMethods_isChrome$$($platform$jscomp$9$$);(this.$F$=!_.$isProxyOrigin$$module$src$url$$($win$jscomp$338$$.location)&&!$viewer$jscomp$36$$.$G$&&$isChromeAndroid$$)?(_.$user$$module$src$log$$().$Log$$module$src$log_prototype$info$("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this)):
(this.$I$=_.$JSCompiler_StaticMethods_isAndroid$$($platform$jscomp$9$$)&&!this.$H$)?$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$(this):(this.$D$=this.$H$.getAttribute("href"),this.$G$=$element$jscomp$362$$.querySelector("button[open-button]"),$JSCompiler_StaticMethods_checkIfDismissed_$$(this))};
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$layoutCallback$=function(){var $$jscomp$this$jscomp$459$$=this;return this.$I$||this.$F$?Promise.resolve():_.$JSCompiler_StaticMethods_fetchJson$$(_.$Services$$module$src$services$xhrFor$$(this.$win$),this.$D$,{requireAmpResponseSourceOrigin:!1}).then(function($$jscomp$this$jscomp$459$$){return $$jscomp$this$jscomp$459$$.json()}).then(function($JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$){a:{if($JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$=
$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$.related_applications){for(var $element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$=0;$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$<$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$.length;$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$++){var $app$jscomp$inline_2912_appId$jscomp$inline_6434$$=
$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$[$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$];if("play"==$app$jscomp$inline_2912_appId$jscomp$inline_6434$$.platform){$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$="https://play.google.com/store/apps/details?id="+$app$jscomp$inline_2912_appId$jscomp$inline_6434$$.id;$app$jscomp$inline_2912_appId$jscomp$inline_6434$$=
$app$jscomp$inline_2912_appId$jscomp$inline_6434$$.id;$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$=$$jscomp$this$jscomp$459$$.element;var $canonicalUrl$jscomp$inline_6436_cleanProtocol$jscomp$inline_6438$$=_.$Services$$module$src$services$documentInfoForDoc$$($element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$).canonicalUrl;$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$=_.$Services$$module$src$services$urlForDoc$$($element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$).parse($canonicalUrl$jscomp$inline_6436_cleanProtocol$jscomp$inline_6438$$);
$canonicalUrl$jscomp$inline_6436_cleanProtocol$jscomp$inline_6438$$=$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$.protocol.replace(":","");$JSCompiler_StaticMethods_setupOpenButton_$$($$jscomp$this$jscomp$459$$,$$jscomp$this$jscomp$459$$.$G$,"android-app://"+$app$jscomp$inline_2912_appId$jscomp$inline_6434$$+"/"+$canonicalUrl$jscomp$inline_6436_cleanProtocol$jscomp$inline_6438$$+"/"+$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$.host+
$element$jscomp$inline_6435_i$jscomp$inline_2911_parsedUrl$jscomp$inline_6437$$.pathname,$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$);$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$=void 0;break a}}_.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-app-banner","Could not find a platform=play app in manifest: %s",$$jscomp$this$jscomp$459$$.element)}else _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-app-banner",
"related_applications is missing from manifest.json file: %s",$$jscomp$this$jscomp$459$$.element);$JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$=void 0}return $JSCompiler_inline_result$jscomp$776_apps$jscomp$inline_2910_installAppUrl$jscomp$inline_2913_json$jscomp$11$$}).catch(function($error$jscomp$74$$){$JSCompiler_StaticMethods_AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner_prototype$hide_$$($$jscomp$this$jscomp$459$$);
_.$rethrowAsync$$module$src$log$$($error$jscomp$74$$)})};$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$J$=function($openInAppUrl$jscomp$3$$,$installAppUrl$jscomp$3$$){var $$jscomp$this$jscomp$460$$=this;_.$Services$$module$src$services$timerFor$$(this.$win$).delay(function(){$$jscomp$this$jscomp$460$$.$win$.top.location.assign($installAppUrl$jscomp$3$$)},1500);_.$openWindowDialog$$module$src$dom$$(this.$win$,$openInAppUrl$jscomp$3$$,"_top")};
self.AMP.registerElement("amp-app-banner",$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,"amp-app-banner{position:fixed!important;bottom:0!important;left:0;width:100%;max-height:100px!important;box-sizing:border-box;background:#fff;z-index:13;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}i-amphtml-app-banner-top-padding{position:absolute;top:0;left:0;right:0;background:#fff;height:4px;z-index:15}.amp-app-banner-dismiss-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;z-index:14;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}.amp-app-banner-dismiss-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-app-banner-dismiss-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-app-banner-dismiss-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-app-banner/0.1/amp-app-banner.css*/");
})});

//# sourceMappingURL=amp-app-banner-0.1.js.map
