(self.AMP=self.AMP||[]).push({n:"amp-access-laterpay",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$=function($accessService$jscomp$2_articleId$$,$accessSource$$){this.ampdoc=$accessService$jscomp$2_articleId$$.ampdoc;this.$I$=$accessSource$$;this.$X$=_.$Services$$module$src$services$viewportForDoc$$(this.ampdoc);this.$D$=this.$I$.$getAdapterConfig$();this.$K$=this.$M$=this.$G$=null;this.$S$=[];this.$O$=!0;this.$R$=this.$J$=this.$F$=null;this.$V$=this.$D$.locale||"en";this.$H$=Object.assign({},$DEFAULT_MESSAGES$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$,
this.$D$.localeMessages||{});this.$P$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$$(this)+"/api/v1/public/amp?article_url=CANONICAL_URL&amp_reader_id=READER_ID&return_url=RETURN_URL";if($accessService$jscomp$2_articleId$$=this.$D$.articleId)this.$P$+="&article_id="+encodeURIComponent($accessService$jscomp$2_articleId$$);this.$W$=_.$Services$$module$src$services$timerFor$$(this.ampdoc.$win$);this.$U$=_.$Services$$module$src$services$vsyncFor$$(this.ampdoc.$win$);
this.$Y$=_.$Services$$module$src$services$xhrFor$$(this.ampdoc.$win$);_.$installStylesForDoc$$module$src$style_installer$$(this.ampdoc,".amp-access-laterpay{position:relative}@media (min-width:420px){.amp-access-laterpay{width:420px}}.amp-access-laterpay ul{width:100%;padding:0;margin:0 0 40px}.amp-access-laterpay li{list-style:none;margin-bottom:20px}.amp-access-laterpay label,.amp-access-laterpay li{display:-webkit-box;display:-ms-flexbox;display:flex}.amp-access-laterpay label{padding-right:10px}.amp-access-laterpay input{width:20px}.amp-access-laterpay-container{padding:16px 24px 16px 16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:12px;box-shadow:0 0 10px -1px rgba(0,0,0,0.25)}.amp-access-laterpay-sandbox{width:112%;padding:15px 10px;background-color:#f2902a;color:#fff;font-weight:700;text-align:center}.amp-access-laterpay-badge{text-align:center;color:#999}.amp-access-laterpay-badge a{color:#8db444}.amp-access-laterpay-header{font-size:1.2em;margin-bottom:40px}.amp-access-laterpay-metadata{width:92%}.amp-access-laterpay-title{font-size:1.1em;margin:0;padding:0}.amp-access-laterpay-description{font-size:0.9em;margin:0;padding:0}.amp-access-laterpay-price-container{margin-top:0;margin-left:auto}.amp-access-laterpay-price{font-size:1.5em}.amp-access-laterpay-currency{font-size:0.7em}.amp-access-laterpay-purchase-button{font-size:1.1em;padding:0.5em 0.8em;background-color:#8db444;border-radius:4px;border:0;color:#fff;width:70%}.amp-access-laterpay-already-purchased-link-container{font-size:0.9em}\n/*# sourceURL=/extensions/amp-access-laterpay/0.1/amp-access-laterpay.css*/",
function(){},!1,"amp-access-laterpay")},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$self$$){var $region$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$self$$.$D$.region||"eu";return(_.$getMode$$module$src$mode$$().localDev||
_.$getMode$$module$src$mode$$().$development$)&&$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$self$$.$D$.configUrl?$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$self$$.$D$.configUrl:$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getConfigUrl_$self$$.$D$.sandbox?$CONFIG_URLS$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$sandbox$$[$region$$]:
$CONFIG_URLS$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$live$$[$region$$]},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$){var $url$jscomp$118$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.$P$+
"&article_title="+encodeURIComponent($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$));return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.$I$.$buildUrl$($url$jscomp$118$$,!1).then(function($url$jscomp$118$$){return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.$I$.$AccessSource$$module$extensions$amp_access$0_1$amp_access_source_prototype$getLoginUrl$($url$jscomp$118$$)}).then(function($url$jscomp$118$$){_.$dev$$module$src$log$$().$Log$$module$src$log_prototype$info$("amp-access-laterpay",
"Authorization URL: ",$url$jscomp$118$$);return _.$JSCompiler_StaticMethods_timeoutPromise$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.$W$,3E3,_.$JSCompiler_StaticMethods_fetchJson$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.$Y$,$url$jscomp$118$$,{credentials:"include"})).then(function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$){return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$self$$.json()})})},
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$self$$,$name$jscomp$177$$){return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$self$$.ampdoc.$win$.document.createElement($name$jscomp$177$$)},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$$=
function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$self$$){return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$self$$.ampdoc.getRootNode().querySelector($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$self$$.$D$.articleTitleSelector).textContent.trim()},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$$=
function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$self_dialogContainer$$){$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$self_dialogContainer$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$self_dialogContainer$$.ampdoc.getElementById("amp-access-laterpay-dialog");return _.$JSCompiler_StaticMethods_assertElement$$(_.$user$$module$src$log$$(),
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$self_dialogContainer$$,"No element found with id amp-access-laterpay-dialog")},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$){if($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$O$)return Promise.resolve();
for(var $unlistener$jscomp$3$$;$unlistener$jscomp$3$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$S$.shift();)$unlistener$jscomp$3$$();$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$M$&&($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$M$(),$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$M$=
null);$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$K$&&($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$K$(),$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$K$=null);return _.$JSCompiler_StaticMethods_mutatePromise$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$U$,
function(){$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$O$=!0;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$.$F$=null;_.$removeChildren$$module$src$dom$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$self$$))})},
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$preselectFirstOption_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$preselectFirstOption_$self$$,$firstInput_firstOption$$){$firstInput_firstOption$$=$firstInput_firstOption$$.querySelector('input[type="radio"]');$firstInput_firstOption$$.checked=!0;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$preselectFirstOption_$self$$,
$firstInput_firstOption$$)},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$self$$,$area$$){if($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$self$$.$H$[$area$$]){var $el$jscomp$36$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$self$$,
"p");$el$jscomp$36$$.className="amp-access-laterpay-"+$area$$;$el$jscomp$36$$.textContent=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$self$$.$H$[$area$$];$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$self$$.$F$.appendChild($el$jscomp$36$$)}},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$$=
function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$){var $a$jscomp$8$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$,"a");$a$jscomp$8$$.href="https://laterpay.net";$a$jscomp$8$$.target=
"_blank";$a$jscomp$8$$.textContent="LaterPay";$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$,"p");$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$.className=
"amp-access-laterpay-badge";$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$.textContent="Powered by ";$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$.appendChild($a$jscomp$8$$);return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$self_el$jscomp$37$$},
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,$option$jscomp$3$$){var $li$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,
"li"),$control$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,"label");$control$$.for=$option$jscomp$3$$.title;$control$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,
$option$jscomp$3$$));var $metadataContainer$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,"div");$metadataContainer$$.className="amp-access-laterpay-metadata";var $description$jscomp$4_title$jscomp$14$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,
"span");$description$jscomp$4_title$jscomp$14$$.className="amp-access-laterpay-title";$description$jscomp$4_title$jscomp$14$$.textContent=$option$jscomp$3$$.title;$metadataContainer$$.appendChild($description$jscomp$4_title$jscomp$14$$);$description$jscomp$4_title$jscomp$14$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,
"p");$description$jscomp$4_title$jscomp$14$$.className="amp-access-laterpay-description";$description$jscomp$4_title$jscomp$14$$.textContent=$option$jscomp$3$$.description;$metadataContainer$$.appendChild($description$jscomp$4_title$jscomp$14$$);$control$$.appendChild($metadataContainer$$);$li$$.appendChild($control$$);$li$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$self$$,
$option$jscomp$3$$.price));return $li$$},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$,$option$jscomp$4_purchaseType$jscomp$1$$){var $radio$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$,
"input");$radio$$.name="purchaseOption";$radio$$.type="radio";$radio$$.id=$option$jscomp$4_purchaseType$jscomp$1$$.title;$radio$$.value=$option$jscomp$4_purchaseType$jscomp$1$$.purchase_url;$option$jscomp$4_purchaseType$jscomp$1$$="ppu"===$option$jscomp$4_purchaseType$jscomp$1$$.purchase_type?"payLater":"payNow";$radio$$.setAttribute("data-purchase-action-label",$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$.$H$[$option$jscomp$4_purchaseType$jscomp$1$$+
"Button"]);$radio$$.setAttribute("data-purchase-type",$option$jscomp$4_purchaseType$jscomp$1$$);$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$.$S$.push(_.$listen$$module$src$event_helper$$($radio$$,"change",$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$.$Z$.bind($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createRadioControl_$self$$)));
return $radio$$},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$,$price_valueEl$$){var $currency$$=Object.keys($price_valueEl$$)[0],$currencyEl_formattedPrice$$=($price_valueEl$$[$currency$$]/100).toLocaleString($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$.$V$,
{style:"decimal",minimumFractionDigits:0});$price_valueEl$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$,"span");$price_valueEl$$.className="amp-access-laterpay-price";$price_valueEl$$.textContent=$currencyEl_formattedPrice$$;$currencyEl_formattedPrice$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$,
"sup");$currencyEl_formattedPrice$$.className="amp-access-laterpay-currency";$currencyEl_formattedPrice$$.textContent=$currency$$;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$,
"p");$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$.className="amp-access-laterpay-price-container";$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$.appendChild($price_valueEl$$);$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$.appendChild($currencyEl_formattedPrice$$);
return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPrice_$self_priceEl$$},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$,$href$jscomp$4$$){var $p$jscomp$12$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$,
"p");$p$jscomp$12$$.className="amp-access-laterpay-already-purchased-link-container";var $a$jscomp$9$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$,"a");$a$jscomp$9$$.href=$href$jscomp$4$$;$a$jscomp$9$$.textContent=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$.$H$.alreadyPurchasedLink;
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$.$K$=_.$listen$$module$src$event_helper$$($a$jscomp$9$$,"click",function($p$jscomp$12$$){$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$$($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$self$$,$p$jscomp$12$$,
$href$jscomp$4$$,"alreadyPurchased")});$p$jscomp$12$$.appendChild($a$jscomp$9$$);return $p$jscomp$12$$},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$self$$,$target$jscomp$127$$){var $prevPurchaseOption$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$self$$.$J$,
$purchaseActionLabel$jscomp$1$$=$target$jscomp$127$$.dataset.purchaseActionLabel;$prevPurchaseOption$$&&$prevPurchaseOption$$.classList.contains("amp-access-laterpay-selected")&&$prevPurchaseOption$$.classList.remove("amp-access-laterpay-selected");$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$self$$.$J$=$target$jscomp$127$$;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$self$$.$J$.classList.add("amp-access-laterpay-selected");
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$self$$.$R$.textContent=$purchaseActionLabel$jscomp$1$$},$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$$=function($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$self$$,$ev$jscomp$3$$,$purchaseUrl$$,$purchaseType$jscomp$2$$){$ev$jscomp$3$$.preventDefault();
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$self$$.$I$.$buildUrl$($purchaseUrl$$,!1).then(function($ev$jscomp$3$$){"amp-access-laterpay";$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$self$$.$I$.$loginWithUrl$($ev$jscomp$3$$,$purchaseType$jscomp$2$$)})};var $CONFIG_URLS$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$live$$={$eu$:"https://connector.laterpay.net",$us$:"https://connector.uselaterpay.com"},$CONFIG_URLS$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$sandbox$$={$eu$:"https://connector.sandbox.laterpaytest.net",$us$:"https://connector.sandbox.uselaterpaytest.com"},$DEFAULT_MESSAGES$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$={$premiumContentTitle$:"Buy only this article",$payLaterButton$:"Buy Now, Pay Later",
$payNowButton$:"Buy Now",$defaultButton$:"Buy Now",$alreadyPurchasedLink$:"I already bought this",sandbox:"Site in test mode. No payment required."};
$LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$.prototype.$authorize$=function(){var $$jscomp$this$jscomp$251$$=this;return $JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getPurchaseConfig_$$(this).then(function($response$jscomp$26$$){if(204===$response$jscomp$26$$.status)throw _.$user$$module$src$log$$().$createError$("No merchant domains have been matched for this article, or no paid content configurations are setup.");$$jscomp$this$jscomp$251$$.$D$.scrollToTopAfterAuth&&
$$jscomp$this$jscomp$251$$.$U$.$mutate$(function(){return _.$JSCompiler_StaticMethods_Viewport$$module$src$service$viewport$viewport_impl_prototype$setScrollTop$$($$jscomp$this$jscomp$251$$.$X$,0)});$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$$($$jscomp$this$jscomp$251$$);return{$access$:$response$jscomp$26$$.$access$}},function($err$jscomp$22$$){if(!$err$jscomp$22$$||!$err$jscomp$22$$.response)throw $err$jscomp$22$$;
var $response$jscomp$27$$=$err$jscomp$22$$.response;if(402!==$response$jscomp$27$$.status)throw $err$jscomp$22$$;return $response$jscomp$27$$.json().catch(function(){}).then(function($err$jscomp$22$$){$$jscomp$this$jscomp$251$$.$G$=$err$jscomp$22$$;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$emptyContainer_$$($$jscomp$this$jscomp$251$$).then($$jscomp$this$jscomp$251$$.$aa$.bind($$jscomp$this$jscomp$251$$));return{$access$:!1}})})};
$LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$.prototype.$aa$=function(){var $$jscomp$this$jscomp$254$$=this,$dialogContainer$jscomp$1$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getContainer_$$(this);this.$F$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$(this,"div");this.$F$.className="amp-access-laterpay-container";this.$D$.sandbox&&
$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$$(this,"sandbox");$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$$(this,"header");var $listContainer$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$(this,"ul");this.$G$.premiumcontent.title=this.$H$.premiumContentTitle;
this.$G$.premiumcontent.description=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$getArticleTitle_$$(this);$listContainer$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$$(this,this.$G$.premiumcontent));this.$G$.timepasses.forEach(function($dialogContainer$jscomp$1$$){$listContainer$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$$($$jscomp$this$jscomp$254$$,
$dialogContainer$jscomp$1$$))});this.$G$.subscriptions.forEach(function($dialogContainer$jscomp$1$$){$listContainer$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createPurchaseOption_$$($$jscomp$this$jscomp$254$$,$dialogContainer$jscomp$1$$))});var $purchaseButton$$=$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createElement_$$(this,"button");$purchaseButton$$.className=
"amp-access-laterpay-purchase-button";$purchaseButton$$.textContent=this.$H$.defaultButton;this.$R$=$purchaseButton$$;this.$M$=_.$listen$$module$src$event_helper$$($purchaseButton$$,"click",function($dialogContainer$jscomp$1$$){$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$handlePurchase_$$($$jscomp$this$jscomp$254$$,$dialogContainer$jscomp$1$$,$$jscomp$this$jscomp$254$$.$J$.value,$$jscomp$this$jscomp$254$$.$J$.dataset.purchaseType)});
this.$F$.appendChild($listContainer$$);this.$F$.appendChild($purchaseButton$$);this.$F$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createAlreadyPurchasedLink_$$(this,this.$G$.apl));$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$renderTextBlock_$$(this,"footer");$dialogContainer$jscomp$1$$.appendChild(this.$F$);$dialogContainer$jscomp$1$$.appendChild($JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$createLaterpayBadge_$$(this));
this.$O$=!1;$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$preselectFirstOption_$$(this,$listContainer$$.firstElementChild)};$LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$.prototype.$Z$=function($ev$jscomp$2$$){$ev$jscomp$2$$.preventDefault();$JSCompiler_StaticMethods_LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl_prototype$selectPurchaseOption_$$(this,$ev$jscomp$2$$.target)};
$LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$.prototype.$AccessClientAdapter$$module$extensions$amp_access$0_1$amp_access_client_prototype$pingback$=function(){return Promise.resolve()};(function($AMP$jscomp$3$$){$AMP$jscomp$3$$.registerServiceForDoc("laterpay",function($AMP$jscomp$3$$){return _.$Services$$module$src$services$accessServiceForDoc$$($AMP$jscomp$3$$.$getHeadNode$()).then(function($AMP$jscomp$3$$){var $ampdoc$jscomp$111$$=$AMP$jscomp$3$$.$getVendorSource$("laterpay");$AMP$jscomp$3$$=new $LaterpayVendor$$module$extensions$amp_access_laterpay$0_1$laterpay_impl$$($AMP$jscomp$3$$,$ampdoc$jscomp$111$$);$ampdoc$jscomp$111$$.$D$.$registerVendor$($AMP$jscomp$3$$);return $AMP$jscomp$3$$})})})(self.AMP);
})});

//# sourceMappingURL=amp-access-laterpay-0.1.js.map
