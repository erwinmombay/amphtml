(self.AMP=self.AMP||[]).push({n:"amp-date-countdown",v:"1904281823091",f:(function(AMP,_){
var $$jscomp$objectCreate$$="function"==typeof Object.create?Object.create:function($prototype$$){function $ctor$$(){}$ctor$$.prototype=$prototype$$;return new $ctor$$},$JSCompiler_temp$jscomp$11$$;
if("function"==typeof Object.setPrototypeOf)$JSCompiler_temp$jscomp$11$$=Object.setPrototypeOf;else{var $JSCompiler_inline_result$jscomp$12$$;a:{var $JSCompiler_x$jscomp$inline_16$$={a:!0},$JSCompiler_y$jscomp$inline_17$$={};try{$JSCompiler_y$jscomp$inline_17$$.__proto__=$JSCompiler_x$jscomp$inline_16$$;$JSCompiler_inline_result$jscomp$12$$=$JSCompiler_y$jscomp$inline_17$$.a;break a}catch($JSCompiler_e$jscomp$inline_18$$){}$JSCompiler_inline_result$jscomp$12$$=!1}$JSCompiler_temp$jscomp$11$$=$JSCompiler_inline_result$jscomp$12$$?
function($target$jscomp$83$$,$proto$jscomp$3$$){$target$jscomp$83$$.__proto__=$proto$jscomp$3$$;if($target$jscomp$83$$.__proto__!==$proto$jscomp$3$$)throw new TypeError($target$jscomp$83$$+" is not extensible");return $target$jscomp$83$$}:null}var $$jscomp$setPrototypeOf$$=$JSCompiler_temp$jscomp$11$$;self.log=self.log||{user:null,dev:null,userForEmbed:null};var $logs$$module$src$log$$=self.log;function $user$$module$src$log$$(){if(!$logs$$module$src$log$$.user)throw Error("failed to call initLogConstructor");return $logs$$module$src$log$$.user};function $getService$$module$src$service$$($win$jscomp$8$$,$id$jscomp$11$$){$win$jscomp$8$$=$win$jscomp$8$$.__AMP_TOP||$win$jscomp$8$$;return $getServiceInternal$$module$src$service$$($win$jscomp$8$$,$id$jscomp$11$$)}
function $getServiceForDoc$$module$src$service$$($elementOrAmpDoc$$){var $ampdoc$jscomp$2_holder$jscomp$2$$=$getAmpdoc$$module$src$service$$($elementOrAmpDoc$$);$ampdoc$jscomp$2_holder$jscomp$2$$=$getAmpdocServiceHolder$$module$src$service$$($ampdoc$jscomp$2_holder$jscomp$2$$);return $getServiceInternal$$module$src$service$$($ampdoc$jscomp$2_holder$jscomp$2$$,"viewer")}
function $getAmpdoc$$module$src$service$$($nodeOrDoc$jscomp$2$$){return $nodeOrDoc$jscomp$2$$.nodeType?$getService$$module$src$service$$(($nodeOrDoc$jscomp$2$$.ownerDocument||$nodeOrDoc$jscomp$2$$).defaultView,"ampdoc").getAmpDoc($nodeOrDoc$jscomp$2$$):$nodeOrDoc$jscomp$2$$}
function $getAmpdocServiceHolder$$module$src$service$$($ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$){$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$=$getAmpdoc$$module$src$service$$($ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$);return $ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$.isSingleDoc()?$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$.win:$ampdoc$jscomp$4_nodeOrDoc$jscomp$3$$}
function $getServiceInternal$$module$src$service$$($holder$jscomp$4_s$jscomp$8$$,$id$jscomp$19$$){$isServiceRegistered$$module$src$service$$($holder$jscomp$4_s$jscomp$8$$,$id$jscomp$19$$);var $JSCompiler_services$jscomp$inline_24$$=$holder$jscomp$4_s$jscomp$8$$.services;$JSCompiler_services$jscomp$inline_24$$||($JSCompiler_services$jscomp$inline_24$$=$holder$jscomp$4_s$jscomp$8$$.services={});var $services$$=$JSCompiler_services$jscomp$inline_24$$;$holder$jscomp$4_s$jscomp$8$$=$services$$[$id$jscomp$19$$];
$holder$jscomp$4_s$jscomp$8$$.obj||($holder$jscomp$4_s$jscomp$8$$.obj=new $holder$jscomp$4_s$jscomp$8$$.ctor($holder$jscomp$4_s$jscomp$8$$.context),$holder$jscomp$4_s$jscomp$8$$.ctor=null,$holder$jscomp$4_s$jscomp$8$$.context=null,$holder$jscomp$4_s$jscomp$8$$.resolve&&$holder$jscomp$4_s$jscomp$8$$.resolve($holder$jscomp$4_s$jscomp$8$$.obj));return $holder$jscomp$4_s$jscomp$8$$.obj}
function $isServiceRegistered$$module$src$service$$($holder$jscomp$12_service$jscomp$4$$,$id$jscomp$27$$){$holder$jscomp$12_service$jscomp$4$$=$holder$jscomp$12_service$jscomp$4$$.services&&$holder$jscomp$12_service$jscomp$4$$.services[$id$jscomp$27$$];return!(!$holder$jscomp$12_service$jscomp$4$$||!$holder$jscomp$12_service$jscomp$4$$.ctor&&!$holder$jscomp$12_service$jscomp$4$$.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var $LOCALE_WORD$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$={de:"Jahren Monaten Tagen Stunden Minuten Sekunden".split(" "),en:"Years Months Days Hours Minutes Seconds".split(" "),es:"a\u00f1os meses d\u00edas horas minutos segundos".split(" "),fr:"ans mois jours heures minutes secondes".split(" "),id:"tahun bulan hari jam menit detik".split(" "),it:"anni mesi giorni ore minuti secondi".split(" "),ja:"\u5e74 \u30f6\u6708 \u65e5 \u6642\u9593 \u5206 \u79d2".split(" "),ko:"\ub144 \ub2ec \uc77c \uc2dc\uac04 \ubd84 \ucd08".split(" "),
nl:"jaar maanden dagen uur minuten seconden".split(" "),pt:"anos meses dias horas minutos segundos".split(" "),ru:"\u0433\u043e\u0434 \u043c\u0435\u0441\u044f\u0446 \u0434\u0435\u043d\u044c \u0447\u0430\u0441 \u043c\u0438\u043d\u0443\u0442\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430".split(" "),th:"\u0e1b\u0e35 \u0e40\u0e14\u0e37\u0e2d\u0e19 \u0e27\u0e31\u0e19 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 \u0e19\u0e32\u0e17\u0e35 \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35".split(" "),tr:"y\u0131l ay g\u00fcn saat dakika saniye".split(" "),
vi:"n\u0103m th\u00e1ng ng\u00e0y gi\u1edd ph\u00fat gi\u00e2y".split(" "),"zh-cn":"\u5e74 \u6708 \u5929 \u5c0f\u65f6 \u5206\u949f \u79d2".split(" "),"zh-tw":"\u5e74 \u6708 \u5929 \u5c0f\u6642 \u5206\u9418 \u79d2".split(" ")};
function $AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$($$jscomp$super$this_element$jscomp$65$$){$$jscomp$super$this_element$jscomp$65$$=AMP.BaseElement.call(this,$$jscomp$super$this_element$jscomp$65$$)||this;$$jscomp$super$this_element$jscomp$65$$.$templates_$=$getService$$module$src$service$$($$jscomp$super$this_element$jscomp$65$$.win,"templates");$$jscomp$super$this_element$jscomp$65$$.$boundRendered_$=$$jscomp$super$this_element$jscomp$65$$.$rendered_$.bind($$jscomp$super$this_element$jscomp$65$$);
$$jscomp$super$this_element$jscomp$65$$.$endDate_$="";$$jscomp$super$this_element$jscomp$65$$.$timeleftMs_$=0;$$jscomp$super$this_element$jscomp$65$$.$timestampMs_$=0;$$jscomp$super$this_element$jscomp$65$$.$timestampSeconds_$=0;$$jscomp$super$this_element$jscomp$65$$.$offsetSeconds_$=0;$$jscomp$super$this_element$jscomp$65$$.$locale_$="";$$jscomp$super$this_element$jscomp$65$$.$whenEnded_$="";$$jscomp$super$this_element$jscomp$65$$.$biggestUnit_$="";$$jscomp$super$this_element$jscomp$65$$.$localeWordList_$=
null;$$jscomp$super$this_element$jscomp$65$$.$countDownTimer_$=null;return $$jscomp$super$this_element$jscomp$65$$}var $JSCompiler_parentCtor$jscomp$inline_27$$=AMP.BaseElement;$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype=$$jscomp$objectCreate$$($JSCompiler_parentCtor$jscomp$inline_27$$.prototype);$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.constructor=$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$;
if($$jscomp$setPrototypeOf$$)$$jscomp$setPrototypeOf$$($AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$,$JSCompiler_parentCtor$jscomp$inline_27$$);else for(var $JSCompiler_p$jscomp$inline_28$$ in $JSCompiler_parentCtor$jscomp$inline_27$$)if("prototype"!=$JSCompiler_p$jscomp$inline_28$$)if(Object.defineProperties){var $JSCompiler_descriptor$jscomp$inline_29$$=Object.getOwnPropertyDescriptor($JSCompiler_parentCtor$jscomp$inline_27$$,$JSCompiler_p$jscomp$inline_28$$);
$JSCompiler_descriptor$jscomp$inline_29$$&&Object.defineProperty($AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$,$JSCompiler_p$jscomp$inline_28$$,$JSCompiler_descriptor$jscomp$inline_29$$)}else $AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$[$JSCompiler_p$jscomp$inline_28$$]=$JSCompiler_parentCtor$jscomp$inline_27$$[$JSCompiler_p$jscomp$inline_28$$];
$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.$superClass_$=$JSCompiler_parentCtor$jscomp$inline_27$$.prototype;
$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.buildCallback=function(){var $$jscomp$this$jscomp$1$$=this;this.$endDate_$=this.element.getAttribute("end-date");this.$timeleftMs_$=Number(this.element.getAttribute("timeleft-ms"));this.$timestampMs_$=Number(this.element.getAttribute("timestamp-ms"));this.$timestampSeconds_$=Number(this.element.getAttribute("timestamp-seconds"));this.$offsetSeconds_$=Number(this.element.getAttribute("offset-seconds"))||0;this.$locale_$=
(this.element.getAttribute("locale")||"en").toLowerCase();this.$whenEnded_$=(this.element.getAttribute("when-ended")||"stop").toLowerCase();this.$biggestUnit_$=(this.element.getAttribute("biggest-unit")||"DAYS").toUpperCase();this.$localeWordList_$=$JSCompiler_StaticMethods_getLocaleWord_$$(this.$locale_$);$getServiceForDoc$$module$src$service$$(this.getAmpDoc()).whenFirstVisible().then(function(){var $EPOCH$$=$JSCompiler_StaticMethods_getEpoch_$$($$jscomp$this$jscomp$1$$)+1E3*$$jscomp$this$jscomp$1$$.$offsetSeconds_$;
$JSCompiler_StaticMethods_tickCountDown_$$($$jscomp$this$jscomp$1$$,new Date($EPOCH$$)-new Date)})};$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.renderOutsideViewport=function(){return!0};
$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.layoutCallback=function(){var $$jscomp$this$jscomp$2$$=this,$DELAY$$=1E3,$EPOCH$jscomp$1$$=$JSCompiler_StaticMethods_getEpoch_$$(this)+this.$offsetSeconds_$*$DELAY$$,$differentBetween$$=new Date($EPOCH$jscomp$1$$)-new Date-$DELAY$$;this.$countDownTimer_$=this.win.setInterval(function(){$JSCompiler_StaticMethods_tickCountDown_$$($$jscomp$this$jscomp$2$$,$differentBetween$$);$differentBetween$$-=$DELAY$$},$DELAY$$);
return Promise.resolve()};$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.unlayoutCallback=function(){this.win.clearInterval(this.$countDownTimer_$);return!0};
$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.isLayoutSupported=function($layout$jscomp$3$$){return"fixed"==$layout$jscomp$3$$||"fixed-height"==$layout$jscomp$3$$||"responsive"==$layout$jscomp$3$$||"fill"==$layout$jscomp$3$$||"flex-item"==$layout$jscomp$3$$||"fluid"==$layout$jscomp$3$$||"intrinsic"==$layout$jscomp$3$$};
function $JSCompiler_StaticMethods_tickCountDown_$$($JSCompiler_StaticMethods_tickCountDown_$self$$,$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$){var $items$$={},$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$={DAYS:1,HOURS:2,MINUTES:3,SECONDS:4},$JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$=$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]==
$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.DAYS?$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$/864E5)):0,$JSCompiler_h$jscomp$inline_35$$=$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]==
$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.HOURS?$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$/36E5)):$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]<$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.HOURS?
$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$%864E5/36E5)):0,$JSCompiler_m$jscomp$inline_36$$=$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]==$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.MINUTES?
$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$/6E4)):$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]<$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.MINUTES?$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$%
36E5/6E4)):0;$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$=$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$[$JSCompiler_StaticMethods_tickCountDown_$self$$.$biggestUnit_$]==$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$.SECONDS?$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$/
1E3)):$JSCompiler_StaticMethods_supportBackDate_$$(Math.floor($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$%6E4/1E3));var $DIFF$$={d:$JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$,dd:$JSCompiler_StaticMethods_padStart_$$($JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$),h:$JSCompiler_h$jscomp$inline_35$$,
hh:$JSCompiler_StaticMethods_padStart_$$($JSCompiler_h$jscomp$inline_35$$),m:$JSCompiler_m$jscomp$inline_36$$,mm:$JSCompiler_StaticMethods_padStart_$$($JSCompiler_m$jscomp$inline_36$$),s:$JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$,ss:$JSCompiler_StaticMethods_padStart_$$($JSCompiler_TimeUnit$jscomp$inline_33_JSCompiler_s$jscomp$inline_37$$)};if("stop"===$JSCompiler_StaticMethods_tickCountDown_$self$$.$whenEnded_$&&1E3>$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$){a:if($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=
$JSCompiler_StaticMethods_tickCountDown_$self$$.element,$JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$=$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$.ownerDocument.defaultView,$JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$!=($JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$.__AMP_TOP||
$JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$)){if($isServiceRegistered$$module$src$service$$($JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$,"action")&&($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=$getServiceInternal$$module$src$service$$($JSCompiler_d$jscomp$inline_34_JSCompiler_win$jscomp$inline_56$$,
"action")))break a;$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=null}else $JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=$getAmpdoc$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$),
$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=$getAmpdocServiceHolder$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$),$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$=
$isServiceRegistered$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$,"action")?$getServiceInternal$$module$src$service$$($JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$,
"action"):null;$JSCompiler_ampdoc$jscomp$inline_63_JSCompiler_element$jscomp$inline_54_JSCompiler_embedService$jscomp$inline_58_JSCompiler_holder$jscomp$inline_64_JSCompiler_inline_result$jscomp$53_differentBetween$jscomp$1$$.trigger($JSCompiler_StaticMethods_tickCountDown_$self$$.element,"timeout",null,1);$JSCompiler_StaticMethods_tickCountDown_$self$$.win.clearInterval($JSCompiler_StaticMethods_tickCountDown_$self$$.$countDownTimer_$)}$items$$.data=Object.assign($DIFF$$,$JSCompiler_StaticMethods_tickCountDown_$self$$.$localeWordList_$);
$JSCompiler_StaticMethods_tickCountDown_$self$$.$templates_$.findAndRenderTemplate($JSCompiler_StaticMethods_tickCountDown_$self$$.element,$items$$.data).then($JSCompiler_StaticMethods_tickCountDown_$self$$.$boundRendered_$)}
function $JSCompiler_StaticMethods_getEpoch_$$($JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$){var $epoch$$;$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$endDate_$?$epoch$$=Date.parse($JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$endDate_$):$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timeleftMs_$?$epoch$$=Number(new Date)+$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timeleftMs_$:
$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timestampMs_$?$epoch$$=$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timestampMs_$:$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timestampSeconds_$&&($epoch$$=1E3*$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$.$timestampSeconds_$);$JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$=
!isNaN($epoch$$);$user$$module$src$log$$().assert($JSCompiler_StaticMethods_getEpoch_$self_JSCompiler_shouldBeTrueish$jscomp$inline_39$$,"One of end-date, timeleft-ms, timestamp-ms, timestamp-seconds is required",void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0);return $epoch$$}
function $JSCompiler_StaticMethods_getLocaleWord_$$($locale$jscomp$2$$){if($LOCALE_WORD$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$[$locale$jscomp$2$$]){var $localeWordList$$=$LOCALE_WORD$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$[$locale$jscomp$2$$];return{years:$localeWordList$$[0],months:$localeWordList$$[1],days:$localeWordList$$[2],hours:$localeWordList$$[3],minutes:$localeWordList$$[4],seconds:$localeWordList$$[5]}}$user$$module$src$log$$().error("amp-date-countdown",
"Invalid locale %s, return empty locale word",$locale$jscomp$2$$);return{}}function $JSCompiler_StaticMethods_padStart_$$($input$jscomp$9$$){return-9>$input$jscomp$9$$||9<$input$jscomp$9$$?String($input$jscomp$9$$):-9<=$input$jscomp$9$$&&0>$input$jscomp$9$$?"-0"+Math.abs($input$jscomp$9$$):"0"+$input$jscomp$9$$}function $JSCompiler_StaticMethods_supportBackDate_$$($input$jscomp$10$$){return 0>$input$jscomp$10$$?$input$jscomp$10$$+1:$input$jscomp$10$$}
$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$.prototype.$rendered_$=function($element$jscomp$66$$){var $$jscomp$this$jscomp$3$$=this;return this.mutateElement(function(){for(var $template$jscomp$3$$=$$jscomp$this$jscomp$3$$.$templates_$.findTemplate($$jscomp$this$jscomp$3$$.element),$isChildTemplate$$=$$jscomp$this$jscomp$3$$.element.contains($template$jscomp$3$$),$JSCompiler_parent$jscomp$inline_51$$=$$jscomp$this$jscomp$3$$.element;$JSCompiler_parent$jscomp$inline_51$$.firstChild;)$JSCompiler_parent$jscomp$inline_51$$.removeChild($JSCompiler_parent$jscomp$inline_51$$.firstChild);
$isChildTemplate$$&&$$jscomp$this$jscomp$3$$.element.appendChild($template$jscomp$3$$);$$jscomp$this$jscomp$3$$.element.appendChild($element$jscomp$66$$)})};(function($AMP$jscomp$1$$){$AMP$jscomp$1$$.registerElement("amp-date-countdown",$AmpDateCountdown$$module$extensions$amp_date_countdown$0_1$amp_date_countdown$$)})(self.AMP);
})});

//# sourceMappingURL=amp-date-countdown-0.1.js.map
