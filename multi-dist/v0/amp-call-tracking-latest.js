(self.AMP=self.AMP||[]).push({n:"amp-call-tracking",v:"1904281823091",f:(function(AMP,_){
var $$jscomp$objectCreate$$="function"==typeof Object.create?Object.create:function($prototype$$){function $ctor$$(){}$ctor$$.prototype=$prototype$$;return new $ctor$$},$JSCompiler_temp$jscomp$12$$;
if("function"==typeof Object.setPrototypeOf)$JSCompiler_temp$jscomp$12$$=Object.setPrototypeOf;else{var $JSCompiler_inline_result$jscomp$13$$;a:{var $JSCompiler_x$jscomp$inline_19$$={a:!0},$JSCompiler_y$jscomp$inline_20$$={};try{$JSCompiler_y$jscomp$inline_20$$.__proto__=$JSCompiler_x$jscomp$inline_19$$;$JSCompiler_inline_result$jscomp$13$$=$JSCompiler_y$jscomp$inline_20$$.a;break a}catch($JSCompiler_e$jscomp$inline_21$$){}$JSCompiler_inline_result$jscomp$13$$=!1}$JSCompiler_temp$jscomp$12$$=$JSCompiler_inline_result$jscomp$13$$?
function($target$jscomp$83$$,$proto$jscomp$3$$){$target$jscomp$83$$.__proto__=$proto$jscomp$3$$;if($target$jscomp$83$$.__proto__!==$proto$jscomp$3$$)throw new TypeError($target$jscomp$83$$+" is not extensible");return $target$jscomp$83$$}:null}var $$jscomp$setPrototypeOf$$=$JSCompiler_temp$jscomp$12$$;
function $tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($component$jscomp$4$$,$fallback$$){$fallback$$=void 0===$fallback$$?"":$fallback$$;try{return decodeURIComponent($component$jscomp$4$$)}catch($e$jscomp$8$$){return $fallback$$}};var $regex$$module$src$url_parse_query_string$$=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
function $parseQueryString_$$module$src$url_parse_query_string$$($queryString$$){var $params$jscomp$1$$=Object.create(null);if(!$queryString$$)return $params$jscomp$1$$;for(var $match$$;$match$$=$regex$$module$src$url_parse_query_string$$.exec($queryString$$);){var $name$jscomp$70$$=$tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($match$$[1],$match$$[1]),$value$jscomp$86$$=$match$$[2]?$tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($match$$[2],$match$$[2]):"";
$params$jscomp$1$$[$name$jscomp$70$$]=$value$jscomp$86$$}return $params$jscomp$1$$};var $rtvVersion$$module$src$mode$$="";self.log=self.log||{user:null,dev:null,userForEmbed:null};var $logs$$module$src$log$$=self.log;function $user$$module$src$log$$(){if(!$logs$$module$src$log$$.user)throw Error("failed to call initLogConstructor");return $logs$$module$src$log$$.user}
function $userAssert$$module$src$log$$($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$,$opt_2$jscomp$1$$,$opt_3$jscomp$1$$){$user$$module$src$log$$().assert($shouldBeTrueish$jscomp$3$$,$opt_message$jscomp$14$$,$opt_1$jscomp$1$$,$opt_2$jscomp$1$$,$opt_3$jscomp$1$$,void 0,void 0,void 0,void 0,void 0,void 0)};function $getExistingServiceForDocInEmbedScope$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$){var $opt_fallbackToTopWin$$,$win$jscomp$7$$=$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$.ownerDocument.defaultView,$isEmbed$$=$win$jscomp$7$$!=($win$jscomp$7$$.__AMP_TOP||$win$jscomp$7$$);if($isEmbed$$){if($isServiceRegistered$$module$src$service$$($win$jscomp$7$$,
"url-replace")){var $embedService$$=$getServiceInternal$$module$src$service$$($win$jscomp$7$$,"url-replace");if($embedService$$)return $embedService$$}if(!$opt_fallbackToTopWin$$)return null}$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$=$getAmpdoc$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$);$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$=
$getAmpdoc$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$);$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$=$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$.isSingleDoc()?$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$.win:
$JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$;return $isServiceRegistered$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$,"url-replace")?$getServiceInternal$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_59_JSCompiler_ampdoc$jscomp$inline_61_JSCompiler_inline_result$jscomp$inline_60_element$jscomp$21$$,
"url-replace"):null}function $getService$$module$src$service$$($win$jscomp$9$$,$id$jscomp$11$$){$win$jscomp$9$$=$win$jscomp$9$$.__AMP_TOP||$win$jscomp$9$$;return $getServiceInternal$$module$src$service$$($win$jscomp$9$$,$id$jscomp$11$$)}
function $getAmpdoc$$module$src$service$$($nodeOrDoc$jscomp$3$$){return $nodeOrDoc$jscomp$3$$.nodeType?$getService$$module$src$service$$(($nodeOrDoc$jscomp$3$$.ownerDocument||$nodeOrDoc$jscomp$3$$).defaultView,"ampdoc").getAmpDoc($nodeOrDoc$jscomp$3$$):$nodeOrDoc$jscomp$3$$}
function $getServiceInternal$$module$src$service$$($holder$jscomp$4_s$jscomp$10$$,$id$jscomp$19$$){$isServiceRegistered$$module$src$service$$($holder$jscomp$4_s$jscomp$10$$,$id$jscomp$19$$);var $JSCompiler_services$jscomp$inline_30$$=$holder$jscomp$4_s$jscomp$10$$.services;$JSCompiler_services$jscomp$inline_30$$||($JSCompiler_services$jscomp$inline_30$$=$holder$jscomp$4_s$jscomp$10$$.services={});var $services$$=$JSCompiler_services$jscomp$inline_30$$;$holder$jscomp$4_s$jscomp$10$$=$services$$[$id$jscomp$19$$];
$holder$jscomp$4_s$jscomp$10$$.obj||($holder$jscomp$4_s$jscomp$10$$.obj=new $holder$jscomp$4_s$jscomp$10$$.ctor($holder$jscomp$4_s$jscomp$10$$.context),$holder$jscomp$4_s$jscomp$10$$.ctor=null,$holder$jscomp$4_s$jscomp$10$$.context=null,$holder$jscomp$4_s$jscomp$10$$.resolve&&$holder$jscomp$4_s$jscomp$10$$.resolve($holder$jscomp$4_s$jscomp$10$$.obj));return $holder$jscomp$4_s$jscomp$10$$.obj}
function $isServiceRegistered$$module$src$service$$($holder$jscomp$12_service$jscomp$4$$,$id$jscomp$27$$){$holder$jscomp$12_service$jscomp$4$$=$holder$jscomp$12_service$jscomp$4$$.services&&$holder$jscomp$12_service$jscomp$4$$.services[$id$jscomp$27$$];return!(!$holder$jscomp$12_service$jscomp$4$$||!$holder$jscomp$12_service$jscomp$4$$.ctor&&!$holder$jscomp$12_service$jscomp$4$$.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function $LruCache$$module$src$utils$lru_cache$$(){var $capacity$$=100;this.$capacity_$=$capacity$$;this.$access_$=this.$size_$=0;this.$cache_$=Object.create(null)}$LruCache$$module$src$utils$lru_cache$$.prototype.has=function($key$jscomp$43$$){return!!this.$cache_$[$key$jscomp$43$$]};$LruCache$$module$src$utils$lru_cache$$.prototype.get=function($key$jscomp$44$$){var $cacheable$$=this.$cache_$[$key$jscomp$44$$];if($cacheable$$)return $cacheable$$.access=++this.$access_$,$cacheable$$.payload};
$LruCache$$module$src$utils$lru_cache$$.prototype.put=function($JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$,$payload$$){this.has($JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$)||this.$size_$++;this.$cache_$[$JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$]={payload:$payload$$,access:this.$access_$};if(!(this.$size_$<=this.$capacity_$)){if($logs$$module$src$log$$.dev)$JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$=
$logs$$module$src$log$$.dev;else throw Error("failed to call initLogConstructor");$JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$.warn("lru-cache","Trimming LRU cache");$JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$=this.$cache_$;var $JSCompiler_oldest$jscomp$inline_34$$=this.$access_$+1,$JSCompiler_key$jscomp$inline_36$$;for($JSCompiler_key$jscomp$inline_36$$ in $JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$){var $JSCompiler_access$jscomp$inline_37$$=
$JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$[$JSCompiler_key$jscomp$inline_36$$].access;if($JSCompiler_access$jscomp$inline_37$$<$JSCompiler_oldest$jscomp$inline_34$$){$JSCompiler_oldest$jscomp$inline_34$$=$JSCompiler_access$jscomp$inline_37$$;var $JSCompiler_oldestKey$jscomp$inline_35$$=$JSCompiler_key$jscomp$inline_36$$}}void 0!==$JSCompiler_oldestKey$jscomp$inline_35$$&&(delete $JSCompiler_cache$jscomp$inline_33_JSCompiler_inline_result$jscomp$54_key$jscomp$45$$[$JSCompiler_oldestKey$jscomp$inline_35$$],
this.$size_$--)}};(function($opt_initial$jscomp$1$$){return $opt_initial$jscomp$1$$||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});var $a$$module$src$url$$,$cache$$module$src$url$$;var $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$={};
function $fetch_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($win$jscomp$45$$,$url$jscomp$41$$){$url$jscomp$41$$ in $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$||($cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$[$url$jscomp$41$$]=$getService$$module$src$service$$($win$jscomp$45$$,"xhr").fetchJson($url$jscomp$41$$,{credentials:"include"}).then(function($win$jscomp$45$$){return $win$jscomp$45$$.json()}));
return $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$[$url$jscomp$41$$]}
function $AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($$jscomp$super$this_element$jscomp$65$$){$$jscomp$super$this_element$jscomp$65$$=AMP.BaseElement.call(this,$$jscomp$super$this_element$jscomp$65$$)||this;$$jscomp$super$this_element$jscomp$65$$.$hyperlink_$=null;$$jscomp$super$this_element$jscomp$65$$.$configUrl_$=null;return $$jscomp$super$this_element$jscomp$65$$}var $JSCompiler_parentCtor$jscomp$inline_43$$=AMP.BaseElement;
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype=$$jscomp$objectCreate$$($JSCompiler_parentCtor$jscomp$inline_43$$.prototype);$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.constructor=$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$;
if($$jscomp$setPrototypeOf$$)$$jscomp$setPrototypeOf$$($AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$,$JSCompiler_parentCtor$jscomp$inline_43$$);else for(var $JSCompiler_p$jscomp$inline_44$$ in $JSCompiler_parentCtor$jscomp$inline_43$$)if("prototype"!=$JSCompiler_p$jscomp$inline_44$$)if(Object.defineProperties){var $JSCompiler_descriptor$jscomp$inline_45$$=Object.getOwnPropertyDescriptor($JSCompiler_parentCtor$jscomp$inline_43$$,$JSCompiler_p$jscomp$inline_44$$);$JSCompiler_descriptor$jscomp$inline_45$$&&
Object.defineProperty($AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$,$JSCompiler_p$jscomp$inline_44$$,$JSCompiler_descriptor$jscomp$inline_45$$)}else $AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$[$JSCompiler_p$jscomp$inline_44$$]=$JSCompiler_parentCtor$jscomp$inline_43$$[$JSCompiler_p$jscomp$inline_44$$];$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.$superClass_$=$JSCompiler_parentCtor$jscomp$inline_43$$.prototype;
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.isLayoutSupported=function($layout$jscomp$3$$){return"fixed"==$layout$jscomp$3$$||"fixed-height"==$layout$jscomp$3$$||"responsive"==$layout$jscomp$3$$||"fill"==$layout$jscomp$3$$||"flex-item"==$layout$jscomp$3$$||"fluid"==$layout$jscomp$3$$||"intrinsic"==$layout$jscomp$3$$||"container"==$layout$jscomp$3$$};
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.buildCallback=function(){var $JSCompiler_urlString$jscomp$inline_47$$=this.element.getAttribute("config"),$JSCompiler_elementContext$jscomp$inline_48$$=this.element;var $JSCompiler_sourceName$jscomp$inline_49$$=void 0===$JSCompiler_sourceName$jscomp$inline_49$$?"source":$JSCompiler_sourceName$jscomp$inline_49$$;$userAssert$$module$src$log$$(null!=$JSCompiler_urlString$jscomp$inline_47$$,"%s %s must be available",
$JSCompiler_elementContext$jscomp$inline_48$$,$JSCompiler_sourceName$jscomp$inline_49$$);var $JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$=$JSCompiler_urlString$jscomp$inline_47$$;if("string"==typeof $JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$){$a$$module$src$url$$||($a$$module$src$url$$=self.document.createElement("a"),$cache$$module$src$url$$=self.UrlCache||(self.UrlCache=new $LruCache$$module$src$utils$lru_cache$$));
var $JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$=$cache$$module$src$url$$,$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$=$a$$module$src$url$$;if($JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$&&$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$.has($JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$))$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$=
$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$.get($JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$);else{$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.href=$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$;$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.protocol||
($JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.href=$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.href);var $JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$={href:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.href,protocol:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.protocol,
host:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.host,hostname:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.hostname,port:"0"==$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.port?"":$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.port,pathname:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.pathname,
search:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.search,hash:$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.hash,origin:null};"/"!==$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.pathname[0]&&($JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.pathname="/"+$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.pathname);if("http:"==
$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.protocol&&80==$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.port||"https:"==$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.protocol&&443==$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.port)$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.port="",$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.host=$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.hostname;
$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.origin=$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.origin&&"null"!=$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.origin?$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.origin:"data:"!=$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.protocol&&$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.host?
$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.protocol+"//"+$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.host:$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$.href;$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$=self;if($JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_MODE)$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$=
$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_MODE;else{var $JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$=self.AMP_CONFIG||{},$JSCompiler_runningTests$jscomp$inline_94$$=!!$JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$.test||!(!$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_TEST&&!$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.__karma__),
$JSCompiler_isLocalDev$jscomp$inline_95$$=!!$JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$.localDev||$JSCompiler_runningTests$jscomp$inline_94$$,$JSCompiler_hashQuery$jscomp$inline_96$$=$parseQueryString_$$module$src$url_parse_query_string$$($JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.location.originalHash||$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.location.hash);
$JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$=$JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$.spt;var $JSCompiler_searchQuery$jscomp$inline_98$$=$parseQueryString_$$module$src$url_parse_query_string$$($JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.location.search);$rtvVersion$$module$src$mode$$||($rtvVersion$$module$src$mode$$=$JSCompiler_isLocalDev$jscomp$inline_95$$?"1904281823091":
$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_CONFIG&&$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_CONFIG.v?$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_CONFIG.v:"011904281823091");$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$=$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_MODE=
{localDev:$JSCompiler_isLocalDev$jscomp$inline_95$$,development:!("1"!=$JSCompiler_hashQuery$jscomp$inline_96$$.development&&!$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.AMP_DEV_MODE),examiner:"2"==$JSCompiler_hashQuery$jscomp$inline_96$$.development,filter:$JSCompiler_hashQuery$jscomp$inline_96$$.filter,geoOverride:$JSCompiler_hashQuery$jscomp$inline_96$$["amp-geo"],minified:!0,lite:void 0!=$JSCompiler_searchQuery$jscomp$inline_98$$.amp_lite,
test:$JSCompiler_runningTests$jscomp$inline_94$$,log:$JSCompiler_hashQuery$jscomp$inline_96$$.log,version:"1904281823091",rtvVersion:$rtvVersion$$module$src$mode$$,singlePassType:$JSCompiler_AMP_CONFIG$jscomp$inline_93_JSCompiler_singlePassType$jscomp$inline_97$$}}$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$=$JSCompiler_a$jscomp$inline_89_JSCompiler_temp$jscomp$inline_92_JSCompiler_win$jscomp$inline_91$$.test&&Object.freeze?Object.freeze($JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$):
$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$;$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$&&$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$.put($JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$,$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$);$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$=
$JSCompiler_frozen$jscomp$inline_99_JSCompiler_info$jscomp$inline_90$$}}($JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$="https:"==$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.protocol||"localhost"==$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.hostname||"127.0.0.1"==$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.hostname)||
($JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$=$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.hostname,$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$=$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.length-10,$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$=
0<=$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$&&$JSCompiler_string$jscomp$inline_84_JSCompiler_url$jscomp$inline_75_JSCompiler_url$jscomp$inline_81$$.indexOf(".localhost",$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$)==$JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$);$userAssert$$module$src$log$$($JSCompiler_index$jscomp$inline_85_JSCompiler_opt_cache$jscomp$inline_88_JSCompiler_temp$jscomp$78$$||
/^(\/\/)/.test($JSCompiler_urlString$jscomp$inline_47$$),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',$JSCompiler_elementContext$jscomp$inline_48$$,$JSCompiler_sourceName$jscomp$inline_49$$,$JSCompiler_urlString$jscomp$inline_47$$);this.$configUrl_$=$JSCompiler_urlString$jscomp$inline_47$$;this.$hyperlink_$=this.element.firstElementChild};
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.layoutCallback=function(){var $$jscomp$this$jscomp$1$$=this;return $getExistingServiceForDocInEmbedScope$$module$src$service$$(this.element).expandUrlAsync($user$$module$src$log$$().assertString(this.$configUrl_$)).then(function($url$jscomp$42$$){return $fetch_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($$jscomp$this$jscomp$1$$.win,$url$jscomp$42$$)}).then(function($data$jscomp$57$$){$userAssert$$module$src$log$$("phoneNumber"in
$data$jscomp$57$$,"Response must contain a non-empty phoneNumber field %s",$$jscomp$this$jscomp$1$$.element);$$jscomp$this$jscomp$1$$.$hyperlink_$.setAttribute("href","tel:"+$data$jscomp$57$$.phoneNumber);$$jscomp$this$jscomp$1$$.$hyperlink_$.textContent=$data$jscomp$57$$.formattedPhoneNumber||$data$jscomp$57$$.phoneNumber})};(function($AMP$jscomp$1$$){$AMP$jscomp$1$$.registerElement("amp-call-tracking",$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$)})(self.AMP);
})});

//# sourceMappingURL=amp-call-tracking-0.1.js.map
