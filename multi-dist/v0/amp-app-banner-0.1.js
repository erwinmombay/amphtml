(self.AMP=self.AMP||[]).push({n:"amp-app-banner",v:"1904281823091",f:(function(AMP,_){
var $$jscomp$objectCreate$$="function"==typeof Object.create?Object.create:function($prototype$$){function $ctor$$(){}$ctor$$.prototype=$prototype$$;return new $ctor$$},$JSCompiler_temp$jscomp$8$$;
if("function"==typeof Object.setPrototypeOf)$JSCompiler_temp$jscomp$8$$=Object.setPrototypeOf;else{var $JSCompiler_inline_result$jscomp$9$$;a:{var $JSCompiler_x$jscomp$inline_13$$={a:!0},$JSCompiler_y$jscomp$inline_14$$={};try{$JSCompiler_y$jscomp$inline_14$$.__proto__=$JSCompiler_x$jscomp$inline_13$$;$JSCompiler_inline_result$jscomp$9$$=$JSCompiler_y$jscomp$inline_14$$.a;break a}catch($JSCompiler_e$jscomp$inline_15$$){}$JSCompiler_inline_result$jscomp$9$$=!1}$JSCompiler_temp$jscomp$8$$=$JSCompiler_inline_result$jscomp$9$$?
function($target$jscomp$83$$,$proto$jscomp$3$$){$target$jscomp$83$$.__proto__=$proto$jscomp$3$$;if($target$jscomp$83$$.__proto__!==$proto$jscomp$3$$)throw new TypeError($target$jscomp$83$$+" is not extensible");return $target$jscomp$83$$}:null}var $$jscomp$setPrototypeOf$$=$JSCompiler_temp$jscomp$8$$;
function $$jscomp$inherits$$($childCtor$$,$parentCtor$$){$childCtor$$.prototype=$$jscomp$objectCreate$$($parentCtor$$.prototype);$childCtor$$.prototype.constructor=$childCtor$$;if($$jscomp$setPrototypeOf$$)$$jscomp$setPrototypeOf$$($childCtor$$,$parentCtor$$);else for(var $p$$ in $parentCtor$$)if("prototype"!=$p$$)if(Object.defineProperties){var $descriptor$jscomp$1$$=Object.getOwnPropertyDescriptor($parentCtor$$,$p$$);$descriptor$jscomp$1$$&&Object.defineProperty($childCtor$$,$p$$,$descriptor$jscomp$1$$)}else $childCtor$$[$p$$]=
$parentCtor$$[$p$$];$childCtor$$.$superClass_$=$parentCtor$$.prototype};function $Deferred$$module$src$utils$promise$$(){var $resolve$$,$reject$$;this.promise=new Promise(function($res$$,$rej$$){$resolve$$=$res$$;$reject$$=$rej$$});this.resolve=$resolve$$;this.reject=$reject$$};function $createErrorVargs$$module$src$log$$($var_args$jscomp$53$$){for(var $JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$=null,$message$jscomp$28$$="",$i$jscomp$6$$=0;$i$jscomp$6$$<arguments.length;$i$jscomp$6$$++){var $arg$jscomp$6$$=arguments[$i$jscomp$6$$];if($arg$jscomp$6$$ instanceof Error&&!$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$){$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$=void 0;var $JSCompiler_messageProperty$jscomp$inline_18_JSCompiler_stack$jscomp$inline_19$$=
Object.getOwnPropertyDescriptor($arg$jscomp$6$$,"message");if($JSCompiler_messageProperty$jscomp$inline_18_JSCompiler_stack$jscomp$inline_19$$&&$JSCompiler_messageProperty$jscomp$inline_18_JSCompiler_stack$jscomp$inline_19$$.writable)$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$=$arg$jscomp$6$$;else{$JSCompiler_messageProperty$jscomp$inline_18_JSCompiler_stack$jscomp$inline_19$$=$arg$jscomp$6$$.stack;var $JSCompiler_e$jscomp$inline_20$$=Error($arg$jscomp$6$$.message);for($JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$ in $arg$jscomp$6$$)$JSCompiler_e$jscomp$inline_20$$[$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$]=
$arg$jscomp$6$$[$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$];$JSCompiler_e$jscomp$inline_20$$.stack=$JSCompiler_messageProperty$jscomp$inline_18_JSCompiler_stack$jscomp$inline_19$$;$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$=$JSCompiler_e$jscomp$inline_20$$}}else $message$jscomp$28$$&&($message$jscomp$28$$+=" "),$message$jscomp$28$$+=$arg$jscomp$6$$}$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$?$message$jscomp$28$$&&($JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$.message=
$message$jscomp$28$$+": "+$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$.message):$JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$=Error($message$jscomp$28$$);return $JSCompiler_prop$jscomp$inline_21_error$jscomp$10$$}function $rethrowAsync$$module$src$log$$($var_args$jscomp$54$$){var $error$jscomp$11$$=$createErrorVargs$$module$src$log$$.apply(null,arguments);setTimeout(function(){self.reportError($error$jscomp$11$$);throw $error$jscomp$11$$;})}self.log=self.log||{user:null,dev:null,userForEmbed:null};
var $logs$$module$src$log$$=self.log;function $user$$module$src$log$$(){if(!$logs$$module$src$log$$.user)throw Error("failed to call initLogConstructor");return $logs$$module$src$log$$.user}function $dev$$module$src$log$$(){if($logs$$module$src$log$$.dev)return $logs$$module$src$log$$.dev;throw Error("failed to call initLogConstructor");}
function $userAssert$$module$src$log$$($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$,$opt_2$jscomp$1$$){return $user$$module$src$log$$().assert($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$,$opt_2$jscomp$1$$,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function $getExistingServiceForDocInEmbedScope$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$){var $opt_fallbackToTopWin$$,$win$jscomp$6$$=$JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$.ownerDocument.defaultView,$isEmbed$$=$win$jscomp$6$$!=($win$jscomp$6$$.__AMP_TOP||$win$jscomp$6$$);if($isEmbed$$){if($isServiceRegistered$$module$src$service$$($win$jscomp$6$$,"url")){var $embedService$$=$getServiceInternal$$module$src$service$$($win$jscomp$6$$,
"url");if($embedService$$)return $embedService$$}if(!$opt_fallbackToTopWin$$)return null}$JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$=$getAmpdoc$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$);$JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$=$getAmpdocServiceHolder$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$);
return $isServiceRegistered$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$,"url")?$getServiceInternal$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_54_JSCompiler_holder$jscomp$inline_55_element$jscomp$11$$,"url"):null}
function $getService$$module$src$service$$($win$jscomp$8$$,$id$jscomp$11$$){$win$jscomp$8$$=$win$jscomp$8$$.__AMP_TOP||$win$jscomp$8$$;return $getServiceInternal$$module$src$service$$($win$jscomp$8$$,$id$jscomp$11$$)}
function $getServiceForDoc$$module$src$service$$($elementOrAmpDoc$$,$id$jscomp$15$$){var $ampdoc$jscomp$2_holder$jscomp$2$$=$getAmpdoc$$module$src$service$$($elementOrAmpDoc$$);$ampdoc$jscomp$2_holder$jscomp$2$$=$getAmpdocServiceHolder$$module$src$service$$($ampdoc$jscomp$2_holder$jscomp$2$$);return $getServiceInternal$$module$src$service$$($ampdoc$jscomp$2_holder$jscomp$2$$,$id$jscomp$15$$)}
function $getAmpdoc$$module$src$service$$($nodeOrDoc$jscomp$2$$){return $nodeOrDoc$jscomp$2$$.nodeType?$getService$$module$src$service$$(($nodeOrDoc$jscomp$2$$.ownerDocument||$nodeOrDoc$jscomp$2$$).defaultView,"ampdoc").getAmpDoc($nodeOrDoc$jscomp$2$$):$nodeOrDoc$jscomp$2$$}
function $getAmpdocServiceHolder$$module$src$service$$($ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$){$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$=$getAmpdoc$$module$src$service$$($ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$);return $ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$.isSingleDoc()?$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$.win:$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$}
function $getServiceInternal$$module$src$service$$($holder$jscomp$4_s$jscomp$8$$,$id$jscomp$19$$){$isServiceRegistered$$module$src$service$$($holder$jscomp$4_s$jscomp$8$$,$id$jscomp$19$$);var $services$$=$getServices$$module$src$service$$($holder$jscomp$4_s$jscomp$8$$);$holder$jscomp$4_s$jscomp$8$$=$services$$[$id$jscomp$19$$];$holder$jscomp$4_s$jscomp$8$$.obj||($holder$jscomp$4_s$jscomp$8$$.obj=new $holder$jscomp$4_s$jscomp$8$$.ctor($holder$jscomp$4_s$jscomp$8$$.context),$holder$jscomp$4_s$jscomp$8$$.ctor=
null,$holder$jscomp$4_s$jscomp$8$$.context=null,$holder$jscomp$4_s$jscomp$8$$.resolve&&$holder$jscomp$4_s$jscomp$8$$.resolve($holder$jscomp$4_s$jscomp$8$$.obj));return $holder$jscomp$4_s$jscomp$8$$.obj}
function $getServicePromiseInternal$$module$src$service$$($holder$jscomp$6_services$jscomp$2$$){var $JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$;($JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$=$getServices$$module$src$service$$($holder$jscomp$6_services$jscomp$2$$).storage)?$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$.promise?$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$=$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$.promise:
($getServiceInternal$$module$src$service$$($holder$jscomp$6_services$jscomp$2$$,"storage"),$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$=$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$.promise=Promise.resolve($JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$.obj)):$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$=null;var $cached$$=$JSCompiler_inline_result$jscomp$11_JSCompiler_s$jscomp$inline_28$$;if($cached$$)return $cached$$;
$holder$jscomp$6_services$jscomp$2$$=$getServices$$module$src$service$$($holder$jscomp$6_services$jscomp$2$$);$holder$jscomp$6_services$jscomp$2$$.storage=$emptyServiceHolderWithPromise$$module$src$service$$();return $holder$jscomp$6_services$jscomp$2$$.storage.promise}function $getServices$$module$src$service$$($holder$jscomp$9$$){var $services$jscomp$5$$=$holder$jscomp$9$$.services;$services$jscomp$5$$||($services$jscomp$5$$=$holder$jscomp$9$$.services={});return $services$jscomp$5$$}
function $isServiceRegistered$$module$src$service$$($holder$jscomp$12_service$jscomp$4$$,$id$jscomp$27$$){$holder$jscomp$12_service$jscomp$4$$=$holder$jscomp$12_service$jscomp$4$$.services&&$holder$jscomp$12_service$jscomp$4$$.services[$id$jscomp$27$$];return!(!$holder$jscomp$12_service$jscomp$4$$||!$holder$jscomp$12_service$jscomp$4$$.ctor&&!$holder$jscomp$12_service$jscomp$4$$.obj)}
function $emptyServiceHolderWithPromise$$module$src$service$$(){var $deferred$$=new $Deferred$$module$src$utils$promise$$,$$jscomp$destructuring$var2_reject$jscomp$3$$=$deferred$$,$promise$jscomp$1$$=$$jscomp$destructuring$var2_reject$jscomp$3$$.promise,$resolve$jscomp$4$$=$$jscomp$destructuring$var2_reject$jscomp$3$$.resolve;$$jscomp$destructuring$var2_reject$jscomp$3$$=$$jscomp$destructuring$var2_reject$jscomp$3$$.reject;$promise$jscomp$1$$.catch(function(){});return{obj:null,promise:$promise$jscomp$1$$,
resolve:$resolve$jscomp$4$$,reject:$$jscomp$destructuring$var2_reject$jscomp$3$$,context:null,ctor:null}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function $dict$$module$src$utils$object$$($opt_initial$jscomp$1$$){return $opt_initial$jscomp$1$$||{}};function $openWindowDialog$$module$src$dom$$($win$jscomp$18$$,$url$jscomp$21$$){var $opt_features$$;try{$win$jscomp$18$$.open($url$jscomp$21$$,"_top",$opt_features$$)}catch($e$jscomp$14$$){$dev$$module$src$log$$().error("DOM","Failed to open url on target: ","_top",$e$jscomp$14$$)}};function $AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($$jscomp$super$this_element$jscomp$55$$){$$jscomp$super$this_element$jscomp$55$$=AMP.BaseElement.call(this,$$jscomp$super$this_element$jscomp$55$$)||this;$$jscomp$super$this_element$jscomp$55$$.$openButton_$=null;$$jscomp$super$this_element$jscomp$55$$.$canShowBuiltinBanner_$=!1;return $$jscomp$super$this_element$jscomp$55$$}
$$jscomp$inherits$$($AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,AMP.BaseElement);$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.openButtonClicked=function(){};
function $JSCompiler_StaticMethods_setupOpenButton_$$($JSCompiler_StaticMethods_setupOpenButton_$self$$,$button$$,$openInAppUrl$$,$installAppUrl$$){$button$$.addEventListener("click",function(){$JSCompiler_StaticMethods_setupOpenButton_$self$$.openButtonClicked($openInAppUrl$$,$installAppUrl$$)})}
$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.$onDismissButtonClick_$=function(){this.getVsync().run({measure:void 0,mutate:$handleDismiss$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:this.element,viewport:this.getViewport(),storagePromise:$getServicePromiseInternal$$module$src$service$$($getAmpdocServiceHolder$$module$src$service$$(this.getAmpDoc())),storageKey:$JSCompiler_StaticMethods_getStorageKey_$$(this)})};
function $JSCompiler_StaticMethods_getStorageKey_$$($JSCompiler_StaticMethods_getStorageKey_$self$$){var $elementId$$=$userAssert$$module$src$log$$($JSCompiler_StaticMethods_getStorageKey_$self$$.element.id,"amp-app-banner should have an id.");return"amp-app-banner:"+$elementId$$}
$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.isDismissed=function(){var $$jscomp$this$jscomp$2$$=this;return $getServicePromiseInternal$$module$src$service$$($getAmpdocServiceHolder$$module$src$service$$(this.getAmpDoc())).then(function($storage$$){return $storage$$.get($JSCompiler_StaticMethods_getStorageKey_$$($$jscomp$this$jscomp$2$$))}).then(function($$jscomp$this$jscomp$2$$){return!!$$jscomp$this$jscomp$2$$},function($$jscomp$this$jscomp$2$$){$dev$$module$src$log$$().error("amp-app-banner",
"Failed to read storage",$$jscomp$this$jscomp$2$$);return!1})};
function $JSCompiler_StaticMethods_checkIfDismissed_$$($JSCompiler_StaticMethods_checkIfDismissed_$self$$){$JSCompiler_StaticMethods_checkIfDismissed_$self$$.isDismissed().then(function($isDismissed$$){if($isDismissed$$)$JSCompiler_StaticMethods_hide_$$($JSCompiler_StaticMethods_checkIfDismissed_$self$$);else{var $JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.win.document.createElement("i-amphtml-app-banner-top-padding");$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.appendChild($JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$);
$JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.win.document.createElement("button");$JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$.classList.add("amp-app-banner-dismiss-button");$JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$.setAttribute("aria-label",$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.getAttribute("data-dismiss-button-aria-label")||
"Dismiss");var $JSCompiler_boundOnDismissButtonClick$jscomp$inline_33$$=$JSCompiler_StaticMethods_checkIfDismissed_$self$$.$onDismissButtonClick_$.bind($JSCompiler_StaticMethods_checkIfDismissed_$self$$);$JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$.addEventListener("click",$JSCompiler_boundOnDismissButtonClick$jscomp$inline_33$$);$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element.appendChild($JSCompiler_dismissButton$jscomp$inline_32_JSCompiler_paddingBar$jscomp$inline_31$$);
$JSCompiler_StaticMethods_checkIfDismissed_$self$$.getVsync().run({measure:$measureBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,mutate:$updateViewportPadding$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:$JSCompiler_StaticMethods_checkIfDismissed_$self$$.element,viewport:$JSCompiler_StaticMethods_checkIfDismissed_$self$$.getViewport()});$JSCompiler_StaticMethods_checkIfDismissed_$self$$.expand()}})}
function $JSCompiler_StaticMethods_hide_$$($JSCompiler_StaticMethods_hide_$self$$){return $JSCompiler_StaticMethods_hide_$self$$.getVsync().runPromise({measure:void 0,mutate:$hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$},{element:$JSCompiler_StaticMethods_hide_$self$$.element,viewport:$JSCompiler_StaticMethods_hide_$self$$.getViewport()})}
function $AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($element$jscomp$56$$){return $AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,$element$jscomp$56$$)||this}$$jscomp$inherits$$($AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);
$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.upgradeCallback=function(){var $platform$$=$getService$$module$src$service$$(this.win,"platform");return $platform$$.isIos()?new $AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$(this.element):$platform$$.isAndroid()?new $AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$(this.element):null};
$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.layoutCallback=function(){$user$$module$src$log$$().info("amp-app-banner","Only iOS or Android platforms are currently supported.");return $JSCompiler_StaticMethods_hide_$$(this)};
function $AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($$jscomp$super$this$jscomp$1_element$jscomp$57$$){$$jscomp$super$this$jscomp$1_element$jscomp$57$$=$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,$$jscomp$super$this$jscomp$1_element$jscomp$57$$)||this;$$jscomp$super$this$jscomp$1_element$jscomp$57$$.$viewer_$=null;$$jscomp$super$this$jscomp$1_element$jscomp$57$$.$metaTag_$=null;return $$jscomp$super$this$jscomp$1_element$jscomp$57$$}
$$jscomp$inherits$$($AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.preconnectCallback=function($opt_onLayout$$){this.element.parentNode&&this.preconnect.url("https://itunes.apple.com",$opt_onLayout$$)};
$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.buildCallback=function(){this.$viewer_$=$getServiceForDoc$$module$src$service$$(this.getAmpDoc(),"viewer");var $platform$jscomp$1$$=$getService$$module$src$service$$(this.win,"platform");(this.$canShowBuiltinBanner_$=!this.$viewer_$.isEmbedded()&&$platform$jscomp$1$$.isSafari())?($user$$module$src$log$$().info("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),$JSCompiler_StaticMethods_hide_$$(this)):
this.$viewer_$.isEmbedded()&&!this.$viewer_$.hasCapability("navigateTo")?$JSCompiler_StaticMethods_hide_$$(this):(this.$metaTag_$=this.win.document.head.querySelector("meta[name=apple-itunes-app]"))?(this.$openButton_$=$userAssert$$module$src$log$$(this.element.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",this.element),$JSCompiler_StaticMethods_parseIosMetaContent_$$(this,this.$metaTag_$.getAttribute("content")),$JSCompiler_StaticMethods_checkIfDismissed_$$(this)):
$JSCompiler_StaticMethods_hide_$$(this)};$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.layoutCallback=function(){return Promise.resolve()};
$AmpIosAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.openButtonClicked=function($openInAppUrl$jscomp$1$$,$installAppUrl$jscomp$1$$){var $$jscomp$this$jscomp$4$$=this;this.$viewer_$.isEmbedded()?($getService$$module$src$service$$(this.win,"timer").delay(function(){$$jscomp$this$jscomp$4$$.$viewer_$.sendMessage("navigateTo",$dict$$module$src$utils$object$$({url:$installAppUrl$jscomp$1$$}))},1500),this.$viewer_$.sendMessage("navigateTo",$dict$$module$src$utils$object$$({url:$openInAppUrl$jscomp$1$$}))):
($getService$$module$src$service$$(this.win,"timer").delay(function(){$openWindowDialog$$module$src$dom$$($$jscomp$this$jscomp$4$$.win,$installAppUrl$jscomp$1$$)},1500),$openWindowDialog$$module$src$dom$$(this.win,$openInAppUrl$jscomp$1$$))};
function $JSCompiler_StaticMethods_parseIosMetaContent_$$($JSCompiler_StaticMethods_parseIosMetaContent_$self$$,$metaContent$$){var $parts$$=$metaContent$$.replace(/\s/,"").split(","),$config$jscomp$2$$={};$parts$$.forEach(function($JSCompiler_StaticMethods_parseIosMetaContent_$self$$){var $metaContent$$=$JSCompiler_StaticMethods_parseIosMetaContent_$self$$.split("=");$config$jscomp$2$$[$metaContent$$[0]]=$metaContent$$[1]});var $appId$jscomp$2_installAppUrl$jscomp$2$$=$config$jscomp$2$$["app-id"],
$openUrl$$=$config$jscomp$2$$["app-argument"];$openUrl$$?$userAssert$$module$src$log$$($getExistingServiceForDocInEmbedScope$$module$src$service$$($JSCompiler_StaticMethods_parseIosMetaContent_$self$$.element).isProtocolValid($openUrl$$),"The url in app-argument has invalid protocol: %s",$openUrl$$):$user$$module$src$log$$().error("amp-app-banner",'<meta name="apple-itunes-app">\'s content should contain app-argument to allow opening an already installed application on iOS.');$appId$jscomp$2_installAppUrl$jscomp$2$$=
"https://itunes.apple.com/us/app/id"+$appId$jscomp$2_installAppUrl$jscomp$2$$;$JSCompiler_StaticMethods_setupOpenButton_$$($JSCompiler_StaticMethods_parseIosMetaContent_$self$$,$JSCompiler_StaticMethods_parseIosMetaContent_$self$$.$openButton_$,$openUrl$$||$appId$jscomp$2_installAppUrl$jscomp$2$$,$appId$jscomp$2_installAppUrl$jscomp$2$$)}
function $AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($$jscomp$super$this$jscomp$2_element$jscomp$58$$){$$jscomp$super$this$jscomp$2_element$jscomp$58$$=$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.call(this,$$jscomp$super$this$jscomp$2_element$jscomp$58$$)||this;$$jscomp$super$this$jscomp$2_element$jscomp$58$$.$manifestLink_$=null;$$jscomp$super$this$jscomp$2_element$jscomp$58$$.$manifestHref_$="";$$jscomp$super$this$jscomp$2_element$jscomp$58$$.$missingDataSources_$=
!1;return $$jscomp$super$this$jscomp$2_element$jscomp$58$$}$$jscomp$inherits$$($AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,$AbstractAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$);$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.preconnectCallback=function($opt_onLayout$jscomp$1$$){this.element.parentNode&&(this.preconnect.url("https://play.google.com",$opt_onLayout$jscomp$1$$),this.$manifestHref_$&&this.preconnect.preload(this.$manifestHref_$))};
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.buildCallback=function(){var $win$jscomp$42$$=this.win,$element$jscomp$59$$=this.element,$viewer$$=$getServiceForDoc$$module$src$service$$(this.getAmpDoc(),"viewer");this.$manifestLink_$=$win$jscomp$42$$.document.head.querySelector("link[rel=manifest],link[rel=origin-manifest]");var $platform$jscomp$2$$=$getService$$module$src$service$$($win$jscomp$42$$,"platform"),$url$jscomp$22$$=$getExistingServiceForDocInEmbedScope$$module$src$service$$($element$jscomp$59$$),
$isChromeAndroid$$=$platform$jscomp$2$$.isAndroid()&&$platform$jscomp$2$$.isChrome(),$isProxyOrigin$$=$url$jscomp$22$$.isProxyOrigin($win$jscomp$42$$.location);(this.$canShowBuiltinBanner_$=!$isProxyOrigin$$&&!$viewer$$.isEmbedded()&&$isChromeAndroid$$)?($user$$module$src$log$$().info("amp-app-banner","Browser supports builtin banners. Not rendering amp-app-banner."),$JSCompiler_StaticMethods_hide_$$(this)):(this.$missingDataSources_$=$platform$jscomp$2$$.isAndroid()&&!this.$manifestLink_$)?$JSCompiler_StaticMethods_hide_$$(this):
(this.$manifestHref_$=this.$manifestLink_$.getAttribute("href"),$url$jscomp$22$$.assertHttpsUrl(this.$manifestHref_$,$element$jscomp$59$$,"manifest href"),this.$openButton_$=$userAssert$$module$src$log$$($element$jscomp$59$$.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s","amp-app-banner",$element$jscomp$59$$),$JSCompiler_StaticMethods_checkIfDismissed_$$(this))};
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.layoutCallback=function(){var $$jscomp$this$jscomp$5$$=this;return this.$missingDataSources_$||this.$canShowBuiltinBanner_$?Promise.resolve():$getService$$module$src$service$$(this.win,"xhr").fetchJson(this.$manifestHref_$,{requireAmpResponseSourceOrigin:!1}).then(function($$jscomp$this$jscomp$5$$){return $$jscomp$this$jscomp$5$$.json()}).then(function($json$$){var $JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$;
a:{if($JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$=$json$$.related_applications){for(var $JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$=0;$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$<$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$.length;$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$++){var $JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$=
$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$[$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$];if("play"==$JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$.platform){$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$="https://play.google.com/store/apps/details?id="+$JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$.id;
$JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$=$JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$.id;$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$=$$jscomp$this$jscomp$5$$.element;var $JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$=$getServiceForDoc$$module$src$service$$($JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$,
"documentInfo").get().canonicalUrl;$JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$=$getExistingServiceForDocInEmbedScope$$module$src$service$$($JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$).parse($JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$);$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$=
$JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$.protocol.replace(":","");$JSCompiler_StaticMethods_setupOpenButton_$$($$jscomp$this$jscomp$5$$,$$jscomp$this$jscomp$5$$.$openButton_$,"android-app://"+$JSCompiler_app$jscomp$inline_41_JSCompiler_appId$jscomp$inline_58$$+"/"+$JSCompiler_cleanProtocol$jscomp$inline_62_JSCompiler_element$jscomp$inline_59_JSCompiler_i$jscomp$inline_40$$+"/"+$JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$.host+
$JSCompiler_$jscomp$inline_63_JSCompiler_canonicalUrl$jscomp$inline_60_JSCompiler_parsedUrl$jscomp$inline_61$$.pathname,$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$);$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$=void 0;break a}}$user$$module$src$log$$().warn("amp-app-banner","Could not find a platform=play app in manifest: %s",$$jscomp$this$jscomp$5$$.element)}else $user$$module$src$log$$().warn("amp-app-banner",
"related_applications is missing from manifest.json file: %s",$$jscomp$this$jscomp$5$$.element);$JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$=void 0}return $JSCompiler_apps$jscomp$inline_39_JSCompiler_inline_result$jscomp$12_JSCompiler_installAppUrl$jscomp$inline_42$$}).catch(function($error$jscomp$14$$){$JSCompiler_StaticMethods_hide_$$($$jscomp$this$jscomp$5$$);$rethrowAsync$$module$src$log$$($error$jscomp$14$$)})};
$AmpAndroidAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$.prototype.openButtonClicked=function($openInAppUrl$jscomp$3$$,$installAppUrl$jscomp$3$$){var $$jscomp$this$jscomp$6$$=this;$getService$$module$src$service$$(this.win,"timer").delay(function(){$$jscomp$this$jscomp$6$$.win.top.location.assign($installAppUrl$jscomp$3$$)},1500);$openWindowDialog$$module$src$dom$$(this.win,$openInAppUrl$jscomp$3$$)};
function $handleDismiss$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$$){$hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$$);$state$$.storagePromise.then(function($storage$jscomp$1$$){$storage$jscomp$1$$.set($state$$.storageKey,!0)})}
function $hideBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$jscomp$1$$){$state$jscomp$1$$.viewport.removeFromFixedLayer($state$jscomp$1$$.element);var $JSCompiler_element$jscomp$inline_48$$=$state$jscomp$1$$.element;$JSCompiler_element$jscomp$inline_48$$.parentElement&&$JSCompiler_element$jscomp$inline_48$$.parentElement.removeChild($JSCompiler_element$jscomp$inline_48$$);$state$jscomp$1$$.viewport.updatePaddingBottom(0)}
function $measureBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$jscomp$2$$){$state$jscomp$2$$.bannerHeight=$state$jscomp$2$$.viewport.getLayoutRect($state$jscomp$2$$.element).height}function $updateViewportPadding$$module$extensions$amp_app_banner$0_1$amp_app_banner$$($state$jscomp$3$$){$state$jscomp$3$$.viewport.updatePaddingBottom($state$jscomp$3$$.bannerHeight);$state$jscomp$3$$.viewport.addToFixedLayer($state$jscomp$3$$.element)}
(function($AMP$jscomp$1$$){$AMP$jscomp$1$$.registerElement("amp-app-banner",$AmpAppBanner$$module$extensions$amp_app_banner$0_1$amp_app_banner$$,"amp-app-banner{position:fixed!important;bottom:0!important;left:0;width:100%;max-height:100px!important;box-sizing:border-box;background:#fff;z-index:13;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}i-amphtml-app-banner-top-padding{position:absolute;top:0;left:0;right:0;background:#fff;height:4px;z-index:15}.amp-app-banner-dismiss-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;z-index:14;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}.amp-app-banner-dismiss-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-app-banner-dismiss-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-app-banner-dismiss-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-app-banner/0.1/amp-app-banner.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-app-banner-0.1.js.map
