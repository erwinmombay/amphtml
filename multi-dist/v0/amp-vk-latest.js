(self.AMP=self.AMP||[]).push({n:"amp-vk",v:"1904281823091",f:(function(AMP,_){
var $JSCompiler_prototypeAlias$$,$$jscomp$objectCreate$$="function"==typeof Object.create?Object.create:function($prototype$$){function $ctor$$(){}$ctor$$.prototype=$prototype$$;return new $ctor$$},$JSCompiler_temp$jscomp$12$$;
if("function"==typeof Object.setPrototypeOf)$JSCompiler_temp$jscomp$12$$=Object.setPrototypeOf;else{var $JSCompiler_inline_result$jscomp$13$$;a:{var $JSCompiler_x$jscomp$inline_18$$={a:!0},$JSCompiler_y$jscomp$inline_19$$={};try{$JSCompiler_y$jscomp$inline_19$$.__proto__=$JSCompiler_x$jscomp$inline_18$$;$JSCompiler_inline_result$jscomp$13$$=$JSCompiler_y$jscomp$inline_19$$.a;break a}catch($JSCompiler_e$jscomp$inline_20$$){}$JSCompiler_inline_result$jscomp$13$$=!1}$JSCompiler_temp$jscomp$12$$=$JSCompiler_inline_result$jscomp$13$$?
function($target$jscomp$83$$,$proto$jscomp$3$$){$target$jscomp$83$$.__proto__=$proto$jscomp$3$$;if($target$jscomp$83$$.__proto__!==$proto$jscomp$3$$)throw new TypeError($target$jscomp$83$$+" is not extensible");return $target$jscomp$83$$}:null}var $$jscomp$setPrototypeOf$$=$JSCompiler_temp$jscomp$12$$;self.log=self.log||{user:null,dev:null,userForEmbed:null};var $logs$$module$src$log$$=self.log;function $user$$module$src$log$$(){if(!$logs$$module$src$log$$.user)throw Error("failed to call initLogConstructor");return $logs$$module$src$log$$.user}
function $userAssert$$module$src$log$$($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$){return $user$$module$src$log$$().assert($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function $dict$$module$src$utils$object$$($opt_initial$jscomp$1$$){return $opt_initial$jscomp$1$$||{}};function $getServiceForDoc$$module$src$service$$($elementOrAmpDoc$$){var $JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$=$getAmpdoc$$module$src$service$$($elementOrAmpDoc$$);$JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$=$getAmpdoc$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$);$JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$=
$JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$.isSingleDoc()?$JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$.win:$JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$;return $getServiceInternal$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_47_JSCompiler_inline_result$jscomp$45_ampdoc$jscomp$2$$,"viewer")}
function $getAmpdoc$$module$src$service$$($JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$){if($JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$.nodeType){var $JSCompiler_win$jscomp$inline_49$$=($JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$.ownerDocument||$JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$).defaultView;$JSCompiler_win$jscomp$inline_49$$=$JSCompiler_win$jscomp$inline_49$$.__AMP_TOP||$JSCompiler_win$jscomp$inline_49$$;$JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$=$getServiceInternal$$module$src$service$$($JSCompiler_win$jscomp$inline_49$$,
"ampdoc").getAmpDoc($JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$)}return $JSCompiler_temp$jscomp$43_nodeOrDoc$jscomp$3$$}
function $getServiceInternal$$module$src$service$$($holder$jscomp$4_s$jscomp$10$$,$id$jscomp$19$$){var $JSCompiler_services$jscomp$inline_30$$=$holder$jscomp$4_s$jscomp$10$$.services;$JSCompiler_services$jscomp$inline_30$$||($JSCompiler_services$jscomp$inline_30$$=$holder$jscomp$4_s$jscomp$10$$.services={});var $services$$=$JSCompiler_services$jscomp$inline_30$$;$holder$jscomp$4_s$jscomp$10$$=$services$$[$id$jscomp$19$$];$holder$jscomp$4_s$jscomp$10$$.obj||($holder$jscomp$4_s$jscomp$10$$.obj=new $holder$jscomp$4_s$jscomp$10$$.ctor($holder$jscomp$4_s$jscomp$10$$.context),
$holder$jscomp$4_s$jscomp$10$$.ctor=null,$holder$jscomp$4_s$jscomp$10$$.context=null,$holder$jscomp$4_s$jscomp$10$$.resolve&&$holder$jscomp$4_s$jscomp$10$$.resolve($holder$jscomp$4_s$jscomp$10$$.obj));return $holder$jscomp$4_s$jscomp$10$$.obj};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
$dict$$module$src$utils$object$$({c:!0,v:!0,a:!0,ad:!0,action:!0});
function $appendEncodedParamStringToUrl$$module$src$url$$($url$jscomp$24$$,$paramString$$){var $opt_addToFront$$;if(!$paramString$$)return $url$jscomp$24$$;var $mainAndFragment$$=$url$jscomp$24$$.split("#",2),$mainAndQuery$$=$mainAndFragment$$[0].split("?",2),$newUrl$$=$mainAndQuery$$[0]+($mainAndQuery$$[1]?$opt_addToFront$$?"?"+$paramString$$+"&"+$mainAndQuery$$[1]:"?"+$mainAndQuery$$[1]+"&"+$paramString$$:"?"+$paramString$$);return $newUrl$$+=$mainAndFragment$$[1]?"#"+$mainAndFragment$$[1]:""}
function $serializeQueryString$$module$src$url$$($params$jscomp$5$$){var $s$jscomp$17$$=[],$k$jscomp$4$$;for($k$jscomp$4$$ in $params$jscomp$5$$){var $v$$=$params$jscomp$5$$[$k$jscomp$4$$];if(null!=$v$$)if(Array.isArray($v$$))for(var $i$jscomp$15_sv$3$$=0;$i$jscomp$15_sv$3$$<$v$$.length;$i$jscomp$15_sv$3$$++){var $sv$$=$v$$[$i$jscomp$15_sv$3$$];$s$jscomp$17$$.push(encodeURIComponent($k$jscomp$4$$)+"="+encodeURIComponent($sv$$))}else $i$jscomp$15_sv$3$$=$v$$,$s$jscomp$17$$.push(encodeURIComponent($k$jscomp$4$$)+
"="+encodeURIComponent($i$jscomp$15_sv$3$$))}return $s$jscomp$17$$.join("&")};var $optsSupported$$module$src$event_helper_listen$$;
function $internalListenImplementation$$module$src$event_helper_listen$$($element$jscomp$65$$,$listener$jscomp$62$$){var $opt_evtListenerOpts$$=void 0,$localElement$$=$element$jscomp$65$$,$localListener$$=$listener$jscomp$62$$;var $wrapped$$=function($element$jscomp$65$$){try{return $localListener$$($element$jscomp$65$$)}catch($e$jscomp$16$$){throw self.reportError($e$jscomp$16$$),$e$jscomp$16$$;}};var $optsSupported$$=$detectEvtListenerOptsSupport$$module$src$event_helper_listen$$(),$capture$$=!1;
$opt_evtListenerOpts$$&&($capture$$=$opt_evtListenerOpts$$.capture);$localElement$$.addEventListener("message",$wrapped$$,$optsSupported$$?$opt_evtListenerOpts$$:$capture$$);return function(){$localElement$$&&$localElement$$.removeEventListener("message",$wrapped$$,$optsSupported$$?$opt_evtListenerOpts$$:$capture$$);$wrapped$$=$localElement$$=$localListener$$=null}}
function $detectEvtListenerOptsSupport$$module$src$event_helper_listen$$(){if(void 0!==$optsSupported$$module$src$event_helper_listen$$)return $optsSupported$$module$src$event_helper_listen$$;$optsSupported$$module$src$event_helper_listen$$=!1;try{var $options$jscomp$14$$={get capture(){$optsSupported$$module$src$event_helper_listen$$=!0}};self.addEventListener("test-options",null,$options$jscomp$14$$);self.removeEventListener("test-options",null,$options$jscomp$14$$)}catch($err$jscomp$3$$){}return $optsSupported$$module$src$event_helper_listen$$}
;function $listen$$module$src$event_helper$$($element$jscomp$66$$,$listener$jscomp$63$$){return $internalListenImplementation$$module$src$event_helper_listen$$($element$jscomp$66$$,$listener$jscomp$63$$)};var $EmbedType$$module$extensions$amp_vk$0_1$amp_vk$$={POST:"post",POLL:"poll"};
function $AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$($$jscomp$super$this_element$jscomp$69$$){$$jscomp$super$this_element$jscomp$69$$=AMP.BaseElement.call(this,$$jscomp$super$this_element$jscomp$69$$)||this;$$jscomp$super$this_element$jscomp$69$$.$iframe_$=null;$$jscomp$super$this_element$jscomp$69$$.$widgetHeight_$=0;$$jscomp$super$this_element$jscomp$69$$.$unlistenMessage_$=null;$$jscomp$super$this_element$jscomp$69$$.$embedType_$=null;$$jscomp$super$this_element$jscomp$69$$.$ownerId_$=null;$$jscomp$super$this_element$jscomp$69$$.$postId_$=
null;$$jscomp$super$this_element$jscomp$69$$.$hash_$=null;$$jscomp$super$this_element$jscomp$69$$.$apiId_$=null;$$jscomp$super$this_element$jscomp$69$$.$pollId_$=null;return $$jscomp$super$this_element$jscomp$69$$}var $JSCompiler_parentCtor$jscomp$inline_33$$=AMP.BaseElement;$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$.prototype=$$jscomp$objectCreate$$($JSCompiler_parentCtor$jscomp$inline_33$$.prototype);$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$.prototype.constructor=$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$;
if($$jscomp$setPrototypeOf$$)$$jscomp$setPrototypeOf$$($AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$,$JSCompiler_parentCtor$jscomp$inline_33$$);else for(var $JSCompiler_p$jscomp$inline_34$$ in $JSCompiler_parentCtor$jscomp$inline_33$$)if("prototype"!=$JSCompiler_p$jscomp$inline_34$$)if(Object.defineProperties){var $JSCompiler_descriptor$jscomp$inline_35$$=Object.getOwnPropertyDescriptor($JSCompiler_parentCtor$jscomp$inline_33$$,$JSCompiler_p$jscomp$inline_34$$);$JSCompiler_descriptor$jscomp$inline_35$$&&
Object.defineProperty($AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$,$JSCompiler_p$jscomp$inline_34$$,$JSCompiler_descriptor$jscomp$inline_35$$)}else $AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$[$JSCompiler_p$jscomp$inline_34$$]=$JSCompiler_parentCtor$jscomp$inline_33$$[$JSCompiler_p$jscomp$inline_34$$];$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$.$superClass_$=$JSCompiler_parentCtor$jscomp$inline_33$$.prototype;$JSCompiler_prototypeAlias$$=$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$.prototype;
$JSCompiler_prototypeAlias$$.preconnectCallback=function($opt_onLayout$$){this.preconnect.url("https://vk.com",$opt_onLayout$$)};
function $JSCompiler_StaticMethods_getIFrameSrc_$$($JSCompiler_StaticMethods_getIFrameSrc_$self$$){var $createdTime$$=Date.now().toString(16),$iframeSrcPromise$$;"post"===$JSCompiler_StaticMethods_getIFrameSrc_$self$$.$embedType_$?$iframeSrcPromise$$=$JSCompiler_StaticMethods_getVkPostIFrameSrc_$$($JSCompiler_StaticMethods_getIFrameSrc_$self$$):"poll"===$JSCompiler_StaticMethods_getIFrameSrc_$self$$.$embedType_$&&($iframeSrcPromise$$=$JSCompiler_StaticMethods_getVkPollIFrameSrc_$$($JSCompiler_StaticMethods_getIFrameSrc_$self$$));
return $iframeSrcPromise$$.then(function($JSCompiler_StaticMethods_getIFrameSrc_$self$$){return $appendEncodedParamStringToUrl$$module$src$url$$($JSCompiler_StaticMethods_getIFrameSrc_$self$$,$createdTime$$)})}
function $JSCompiler_StaticMethods_getVkPostIFrameSrc_$$($JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$){return $getServiceForDoc$$module$src$service$$($JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.element).getReferrerUrl().then(function($ref$jscomp$3$$){var $startWidth$$=$JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.element.offsetWidth,$pageUrl$$=$JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.getAmpDoc().getUrl(),$iframeUrl$$="https://vk.com/widget_post.php",$queryParams$$=
$dict$$module$src$utils$object$$({app:"0",width:"100%",_ver:"1",owner_id:$JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.$ownerId_$,post_id:$JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.$postId_$,hash:$JSCompiler_StaticMethods_getVkPostIFrameSrc_$self$$.$hash_$,amp:"1",startWidth:$startWidth$$,url:$pageUrl$$,referrer:$ref$jscomp$3$$,title:"AMP Post"});return $appendEncodedParamStringToUrl$$module$src$url$$($iframeUrl$$,$serializeQueryString$$module$src$url$$($queryParams$$))})}
function $JSCompiler_StaticMethods_getVkPollIFrameSrc_$$($JSCompiler_StaticMethods_getVkPollIFrameSrc_$self$$){return $getServiceForDoc$$module$src$service$$($JSCompiler_StaticMethods_getVkPollIFrameSrc_$self$$.element).getReferrerUrl().then(function($queryParams$jscomp$1_ref$jscomp$4$$){var $pageUrl$jscomp$1$$=$JSCompiler_StaticMethods_getVkPollIFrameSrc_$self$$.getAmpDoc().getUrl();$queryParams$jscomp$1_ref$jscomp$4$$=$dict$$module$src$utils$object$$({app:$JSCompiler_StaticMethods_getVkPollIFrameSrc_$self$$.$apiId_$,
width:"100%",_ver:"1",poll_id:$JSCompiler_StaticMethods_getVkPollIFrameSrc_$self$$.$pollId_$,amp:"1",url:$pageUrl$jscomp$1$$,title:"AMP Poll",description:"",referrer:$queryParams$jscomp$1_ref$jscomp$4$$});return $appendEncodedParamStringToUrl$$module$src$url$$("https://vk.com/al_widget_poll.php",$serializeQueryString$$module$src$url$$($queryParams$jscomp$1_ref$jscomp$4$$))})}
$JSCompiler_prototypeAlias$$.buildCallback=function(){this.$embedType_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-vk> %s",this.element);$user$$module$src$log$$().assertEnumValue($EmbedType$$module$extensions$amp_vk$0_1$amp_vk$$,this.$embedType_$,"data-embedtype");"post"===this.$embedType_$?(this.$ownerId_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-owner-id"),"The data-owner-id attribute is required for <amp-vk> Post %s",
this.element),this.$postId_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-post-id"),"The data-post-id attribute is required for <amp-vk> Post %s",this.element),this.$hash_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-hash"),"The data-hash attribute is required for <amp-vk> Post %s",this.element)):"poll"===this.$embedType_$&&(this.$apiId_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-api-id"),"The data-api-id attribute is required for <amp-vk> Poll %s",
this.element),this.$pollId_$=$userAssert$$module$src$log$$(this.element.getAttribute("data-poll-id"),"The data-poll-id attribute is required for <amp-vk> Poll %s",this.element))};
$JSCompiler_prototypeAlias$$.layoutCallback=function(){var $$jscomp$this$jscomp$3$$=this,$iframe$$=this.element.ownerDocument.createElement("iframe");this.$iframe_$=$iframe$$;this.$unlistenMessage_$=$listen$$module$src$event_helper$$(this.win,this.$handleVkIframeMessage_$.bind(this));return $JSCompiler_StaticMethods_getIFrameSrc_$$(this).then(function($src$jscomp$4$$){$iframe$$.src=$src$jscomp$4$$;$iframe$$.setAttribute("name","fXD");$iframe$$.setAttribute("scrolling","no");$iframe$$.setAttribute("frameborder",
"0");$iframe$$.setAttribute("allowfullscreen","true");$$jscomp$this$jscomp$3$$.applyFillContent($iframe$$);$$jscomp$this$jscomp$3$$.element.appendChild($iframe$$);return $$jscomp$this$jscomp$3$$.loadPromise($iframe$$)})};
$JSCompiler_prototypeAlias$$.$handleVkIframeMessage_$=function($e$jscomp$18_matches$jscomp$1$$){if("https://vk.com"===$e$jscomp$18_matches$jscomp$1$$.origin&&$e$jscomp$18_matches$jscomp$1$$.source===this.$iframe_$.contentWindow){var $eventData$$=$e$jscomp$18_matches$jscomp$1$$.data;if($eventData$$){var $regExp$$=/\["resize",\[(\d+)\]]/;if(($e$jscomp$18_matches$jscomp$1$$=$regExp$$.exec($eventData$$))&&$e$jscomp$18_matches$jscomp$1$$[1]){var $newHeight$$=parseInt($e$jscomp$18_matches$jscomp$1$$[1],
10);this.$widgetHeight_$!==$newHeight$$&&(this.$widgetHeight_$=$newHeight$$,this.changeHeight($newHeight$$))}}}};$JSCompiler_prototypeAlias$$.isLayoutSupported=function($layout$jscomp$3$$){return"responsive"===$layout$jscomp$3$$||"flex-item"===$layout$jscomp$3$$||"fixed"===$layout$jscomp$3$$};$JSCompiler_prototypeAlias$$.unlayoutOnPause=function(){return!0};
$JSCompiler_prototypeAlias$$.unlayoutCallback=function(){if(this.$iframe_$){var $JSCompiler_element$jscomp$inline_41$$=this.$iframe_$;$JSCompiler_element$jscomp$inline_41$$.parentElement&&$JSCompiler_element$jscomp$inline_41$$.parentElement.removeChild($JSCompiler_element$jscomp$inline_41$$);this.$iframe_$=null}this.$unlistenMessage_$&&this.$unlistenMessage_$();return!0};(function($AMP$jscomp$1$$){$AMP$jscomp$1$$.registerElement("amp-vk",$AmpVk$$module$extensions$amp_vk$0_1$amp_vk$$)})(self.AMP);
})});

//# sourceMappingURL=amp-vk-0.1.js.map
