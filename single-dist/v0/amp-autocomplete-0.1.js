(self.AMP=self.AMP||[]).push({n:"amp-autocomplete",i:["_base_i","_base_misc"],v:"1904281823091",f:(function(AMP,_){
var $AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$=function($$jscomp$super$this$jscomp$24_element$jscomp$376$$){$$jscomp$super$this$jscomp$24_element$jscomp$376$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$24_element$jscomp$376$$)||this;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$G$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$F$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$H$="";$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$I$=
"";$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$U$=1;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$M$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$V$=!1;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$K$=-1;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$J$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$D$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$P$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$S$=_.$Services$$module$src$services$templatesFor$$($$jscomp$super$this$jscomp$24_element$jscomp$376$$.$win$);
$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$O$=null;$$jscomp$super$this$jscomp$24_element$jscomp$376$$.$R$=null;return $$jscomp$super$this$jscomp$24_element$jscomp$376$$},$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$getInlineData_$$=function($items$jscomp$1_script$jscomp$3$$){$items$jscomp$1_script$jscomp$3$$=_.$tryParseJson$$module$src$json$$($items$jscomp$1_script$jscomp$3$$.textContent,function($items$jscomp$1_script$jscomp$3$$){throw $items$jscomp$1_script$jscomp$3$$;
}).items;return $items$jscomp$1_script$jscomp$3$$?$items$jscomp$1_script$jscomp$3$$:(_.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-autocomplete",'Expected key "items" in data but found nothing. Rendering empty results.'),[])},$JSCompiler_StaticMethods_getRemoteData_$$=function($JSCompiler_StaticMethods_getRemoteData_$self$$){var $ampdoc$jscomp$162$$=$JSCompiler_StaticMethods_getRemoteData_$self$$.$getAmpDoc$();return _.$batchFetchJsonFor$$module$src$batched_json$$($ampdoc$jscomp$162$$,
$JSCompiler_StaticMethods_getRemoteData_$self$$.element,void 0,2).then(function($JSCompiler_StaticMethods_getRemoteData_$self$$){$JSCompiler_StaticMethods_getRemoteData_$self$$=$JSCompiler_StaticMethods_getRemoteData_$self$$.items;return $JSCompiler_StaticMethods_getRemoteData_$self$$?$JSCompiler_StaticMethods_getRemoteData_$self$$:(_.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-autocomplete",'Expected key "items" in data but found nothing. Rendering empty results.'),[])})},
$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$$=function($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$){$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$=$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$.element.ownerDocument.createElement("div");
$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$.classList.add("i-amphtml-autocomplete-results");$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$.setAttribute("role","list");_.$toggle$$module$src$style$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$,
!1);return $JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$self_container$jscomp$10$$},$JSCompiler_StaticMethods_createElementFromItem_$$=function($JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$,$item$jscomp$16$$){$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$=$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$.element.ownerDocument.createElement("div");
$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$.classList.add("i-amphtml-autocomplete-item");$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$.setAttribute("role","listitem");$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$.setAttribute("data-value",$item$jscomp$16$$);$JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$.textContent=$item$jscomp$16$$;return $JSCompiler_StaticMethods_createElementFromItem_$self_element$jscomp$377$$},
$JSCompiler_StaticMethods_inputHandler_$$=function($JSCompiler_StaticMethods_inputHandler_$self$$){$JSCompiler_StaticMethods_inputHandler_$self$$.$H$=$JSCompiler_StaticMethods_inputHandler_$self$$.$F$.value;$JSCompiler_StaticMethods_inputHandler_$self$$.$mutateElement$(function(){$JSCompiler_StaticMethods_filterDataAndRenderResults_$$($JSCompiler_StaticMethods_inputHandler_$self$$,$JSCompiler_StaticMethods_inputHandler_$self$$.$G$,$JSCompiler_StaticMethods_inputHandler_$self$$.$H$);_.$toggle$$module$src$style$$($JSCompiler_StaticMethods_inputHandler_$self$$.$D$,
!0)})},$JSCompiler_StaticMethods_selectHandler_$$=function($JSCompiler_StaticMethods_selectHandler_$self$$,$event$jscomp$95$$){$JSCompiler_StaticMethods_selectHandler_$self$$.$mutateElement$(function(){$JSCompiler_StaticMethods_selectItem_$$($JSCompiler_StaticMethods_selectHandler_$self$$,$JSCompiler_StaticMethods_getItemElement_$$($JSCompiler_StaticMethods_selectHandler_$self$$,$event$jscomp$95$$.target))})},$JSCompiler_StaticMethods_filterDataAndRenderResults_$$=function($JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$,
$filteredData_sourceData$$,$opt_input$$){$opt_input$$=void 0===$opt_input$$?"":$opt_input$$;_.$removeChildren$$module$src$dom$$($JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$.$D$);$opt_input$$.length<$JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$.$U$||!$filteredData_sourceData$$||!$filteredData_sourceData$$.length?Promise.resolve():($filteredData_sourceData$$=$JSCompiler_StaticMethods_filterData_$$($JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$,$filteredData_sourceData$$,
$opt_input$$),$JSCompiler_StaticMethods_renderResults_$$($JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$,$filteredData_sourceData$$,$JSCompiler_StaticMethods_filterDataAndRenderResults_$self$$.$D$))},$JSCompiler_StaticMethods_renderResults_$$=function($JSCompiler_StaticMethods_renderResults_$self$$,$filteredData$jscomp$1$$,$container$jscomp$11$$){Promise.resolve();$JSCompiler_StaticMethods_resetActiveElement_$$($JSCompiler_StaticMethods_renderResults_$self$$);$JSCompiler_StaticMethods_renderResults_$self$$.$O$?
_.$JSCompiler_StaticMethods_renderTemplateArray$$($JSCompiler_StaticMethods_renderResults_$self$$.$S$,$JSCompiler_StaticMethods_renderResults_$self$$.$O$,$filteredData$jscomp$1$$).then(function($JSCompiler_StaticMethods_renderResults_$self$$){$JSCompiler_StaticMethods_renderResults_$self$$.map(function($JSCompiler_StaticMethods_renderResults_$self$$){$JSCompiler_StaticMethods_renderResults_$self$$.classList.add("i-amphtml-autocomplete-item");$JSCompiler_StaticMethods_renderResults_$self$$.setAttribute("role",
"listitem");$container$jscomp$11$$.appendChild($JSCompiler_StaticMethods_renderResults_$self$$)})}):$filteredData$jscomp$1$$.forEach(function($filteredData$jscomp$1$$){$container$jscomp$11$$.appendChild($JSCompiler_StaticMethods_createElementFromItem_$$($JSCompiler_StaticMethods_renderResults_$self$$,$filteredData$jscomp$1$$))})},$JSCompiler_StaticMethods_filterData_$$=function($JSCompiler_StaticMethods_filterData_$self$$,$data$jscomp$136_filteredData$jscomp$2$$,$input$jscomp$45$$){if("none"===$JSCompiler_StaticMethods_filterData_$self$$.$I$)return $JSCompiler_StaticMethods_truncateToMaxEntries_$$($JSCompiler_StaticMethods_filterData_$self$$,
$data$jscomp$136_filteredData$jscomp$2$$);$input$jscomp$45$$=$input$jscomp$45$$.toLocaleLowerCase();var $itemsExpr$$=$JSCompiler_StaticMethods_filterData_$self$$.element.getAttribute("filter-value")||"value";$data$jscomp$136_filteredData$jscomp$2$$=$data$jscomp$136_filteredData$jscomp$2$$.filter(function($data$jscomp$136_filteredData$jscomp$2$$){"object"===typeof $data$jscomp$136_filteredData$jscomp$2$$&&($data$jscomp$136_filteredData$jscomp$2$$=_.$getValueForExpr$$module$src$json$$($data$jscomp$136_filteredData$jscomp$2$$,
$itemsExpr$$));$data$jscomp$136_filteredData$jscomp$2$$=$data$jscomp$136_filteredData$jscomp$2$$.toLocaleLowerCase();switch($JSCompiler_StaticMethods_filterData_$self$$.$I$){case "substring":var $item$jscomp$18$$;"number"!==typeof $item$jscomp$18$$&&($item$jscomp$18$$=0);return $item$jscomp$18$$+$input$jscomp$45$$.length>$data$jscomp$136_filteredData$jscomp$2$$.length?!1:-1!==$data$jscomp$136_filteredData$jscomp$2$$.indexOf($input$jscomp$45$$,$item$jscomp$18$$);case "prefix":return _.$startsWith$$module$src$string$$($data$jscomp$136_filteredData$jscomp$2$$,
$input$jscomp$45$$);case "token-prefix":return $JSCompiler_StaticMethods_tokenPrefixMatch_$$($data$jscomp$136_filteredData$jscomp$2$$,$input$jscomp$45$$);case "fuzzy":throw Error("Filter not yet supported: "+$JSCompiler_StaticMethods_filterData_$self$$.$I$);case "custom":throw Error("Filter not yet supported: "+$JSCompiler_StaticMethods_filterData_$self$$.$I$);default:throw Error("Unexpected filter: "+$JSCompiler_StaticMethods_filterData_$self$$.$I$);}});return $JSCompiler_StaticMethods_truncateToMaxEntries_$$($JSCompiler_StaticMethods_filterData_$self$$,
$data$jscomp$136_filteredData$jscomp$2$$)},$JSCompiler_StaticMethods_tokenPrefixMatch_$$=function($item$jscomp$19_match$jscomp$26$$,$input$jscomp$46_inputTokens_remainingItemTokens$$){if(""===$input$jscomp$46_inputTokens_remainingItemTokens$$)return!0;$input$jscomp$46_inputTokens_remainingItemTokens$$=$JSCompiler_StaticMethods_tokenizeString_$$($input$jscomp$46_inputTokens_remainingItemTokens$$);var $itemTokensMap$$=$JSCompiler_StaticMethods_mapFromTokensArray_$$($JSCompiler_StaticMethods_tokenizeString_$$($item$jscomp$19_match$jscomp$26$$)),
$lastInputToken$$=$input$jscomp$46_inputTokens_remainingItemTokens$$[$input$jscomp$46_inputTokens_remainingItemTokens$$.length-1];$input$jscomp$46_inputTokens_remainingItemTokens$$.splice($input$jscomp$46_inputTokens_remainingItemTokens$$.length-1,1);$item$jscomp$19_match$jscomp$26$$=!0;for(var $i$jscomp$262$$=0;$i$jscomp$262$$<$input$jscomp$46_inputTokens_remainingItemTokens$$.length;$i$jscomp$262$$++){var $token$jscomp$29$$=$input$jscomp$46_inputTokens_remainingItemTokens$$[$i$jscomp$262$$];if(""!==
$token$jscomp$29$$){if(!_.$hasOwn$$module$src$utils$object$$($itemTokensMap$$,$token$jscomp$29$$)){$item$jscomp$19_match$jscomp$26$$=!1;break}var $count$jscomp$21$$=Number(_.$ownProperty$$module$src$utils$object$$($itemTokensMap$$,$token$jscomp$29$$));1<$count$jscomp$21$$?$itemTokensMap$$[$token$jscomp$29$$]=$count$jscomp$21$$-1:delete $itemTokensMap$$[$token$jscomp$29$$]}}$input$jscomp$46_inputTokens_remainingItemTokens$$=Object.keys($itemTokensMap$$);return $item$jscomp$19_match$jscomp$26$$&&(""===
$lastInputToken$$||$input$jscomp$46_inputTokens_remainingItemTokens$$.some(function($item$jscomp$19_match$jscomp$26$$){return _.$startsWith$$module$src$string$$($item$jscomp$19_match$jscomp$26$$,$lastInputToken$$)}))},$JSCompiler_StaticMethods_tokenizeString_$$=function($inputStr$$){$inputStr$$=$inputStr$$.replace(/[\.]+/g,"");return $inputStr$$.split(/[`~(){}_|+\-;:'",\[\]\\\/ ]+/g)},$JSCompiler_StaticMethods_mapFromTokensArray_$$=function($tokens$jscomp$9$$){var $tokensMap$$=_.$map$$module$src$utils$object$$();
$tokens$jscomp$9$$.forEach(function($tokens$jscomp$9$$){var $token$jscomp$30$$=_.$hasOwn$$module$src$utils$object$$($tokensMap$$,$tokens$jscomp$9$$)?_.$ownProperty$$module$src$utils$object$$($tokensMap$$,$tokens$jscomp$9$$)+1:1;$tokensMap$$[$tokens$jscomp$9$$]=$token$jscomp$30$$});return $tokensMap$$},$JSCompiler_StaticMethods_truncateToMaxEntries_$$=function($JSCompiler_StaticMethods_truncateToMaxEntries_$self$$,$data$jscomp$137$$){$JSCompiler_StaticMethods_truncateToMaxEntries_$self$$.$M$&&$JSCompiler_StaticMethods_truncateToMaxEntries_$self$$.$M$<
$data$jscomp$137$$.length&&($data$jscomp$137$$=$data$jscomp$137$$.slice(0,$JSCompiler_StaticMethods_truncateToMaxEntries_$self$$.$M$));return $data$jscomp$137$$},$JSCompiler_StaticMethods_toggleResultsHandler_$$=function($JSCompiler_StaticMethods_toggleResultsHandler_$self$$,$display$jscomp$3$$){$display$jscomp$3$$?$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$F$.form.setAttribute("autocomplete","off"):$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$P$?$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$F$.form.setAttribute("autocomplete",
$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$P$):$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$F$.form.removeAttribute("autocomplete");$JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$mutateElement$(function(){$display$jscomp$3$$||$JSCompiler_StaticMethods_resetActiveElement_$$($JSCompiler_StaticMethods_toggleResultsHandler_$self$$);_.$toggle$$module$src$style$$($JSCompiler_StaticMethods_toggleResultsHandler_$self$$.$D$,$display$jscomp$3$$)})},$JSCompiler_StaticMethods_getItemElement_$$=
function($JSCompiler_StaticMethods_getItemElement_$self$$,$element$jscomp$379$$){return null===$element$jscomp$379$$?null:$element$jscomp$379$$.classList.contains("i-amphtml-autocomplete-item")?$element$jscomp$379$$:$JSCompiler_StaticMethods_getItemElement_$$($JSCompiler_StaticMethods_getItemElement_$self$$,$element$jscomp$379$$.parentElement)},$JSCompiler_StaticMethods_selectItem_$$=function($JSCompiler_StaticMethods_selectItem_$self$$,$element$jscomp$380_selectEvent$jscomp$inline_2971$$){null!==
$element$jscomp$380_selectEvent$jscomp$inline_2971$$&&($JSCompiler_StaticMethods_selectItem_$self$$.$F$.value=$JSCompiler_StaticMethods_selectItem_$self$$.$H$=$element$jscomp$380_selectEvent$jscomp$inline_2971$$.getAttribute("data-value"),$element$jscomp$380_selectEvent$jscomp$inline_2971$$=_.$createCustomEvent$$module$src$event_helper$$($JSCompiler_StaticMethods_selectItem_$self$$.$win$,"amp-autocomplete.select",$JSCompiler_StaticMethods_selectItem_$self$$.$H$),$JSCompiler_StaticMethods_selectItem_$self$$.$R$.$trigger$($JSCompiler_StaticMethods_selectItem_$self$$.element,
"select",$element$jscomp$380_selectEvent$jscomp$inline_2971$$,100),_.$removeChildren$$module$src$dom$$($JSCompiler_StaticMethods_selectItem_$self$$.$D$))},$JSCompiler_StaticMethods_updateActiveItem_$$=function($JSCompiler_StaticMethods_updateActiveItem_$self$$,$delta$jscomp$1$$){if(0!==$delta$jscomp$1$$&&!$JSCompiler_StaticMethods_updateActiveItem_$self$$.$D$.hasAttribute("hidden")&&0<$JSCompiler_StaticMethods_updateActiveItem_$self$$.$D$.children.length){var $activeIndex$$=_.$mod$$module$src$utils$math$$(-1===
$JSCompiler_StaticMethods_updateActiveItem_$self$$.$K$&&0>$delta$jscomp$1$$?$delta$jscomp$1$$:$JSCompiler_StaticMethods_updateActiveItem_$self$$.$K$+$delta$jscomp$1$$,$JSCompiler_StaticMethods_updateActiveItem_$self$$.$D$.children.length),$newActiveElement$$=$JSCompiler_StaticMethods_updateActiveItem_$self$$.$D$.children[$activeIndex$$];$JSCompiler_StaticMethods_updateActiveItem_$self$$.$F$.value=$newActiveElement$$.getAttribute("data-value");$JSCompiler_StaticMethods_updateActiveItem_$self$$.$mutateElement$(function(){$JSCompiler_StaticMethods_resetActiveElement_$$($JSCompiler_StaticMethods_updateActiveItem_$self$$);
$newActiveElement$$.classList.add("i-amphtml-autocomplete-item-active");$JSCompiler_StaticMethods_updateActiveItem_$self$$.$K$=$activeIndex$$;$JSCompiler_StaticMethods_updateActiveItem_$self$$.$J$=$newActiveElement$$})}else Promise.resolve()},$JSCompiler_StaticMethods_displayUserInput_$$=function($JSCompiler_StaticMethods_displayUserInput_$self$$){$JSCompiler_StaticMethods_displayUserInput_$self$$.$F$.value=$JSCompiler_StaticMethods_displayUserInput_$self$$.$H$;$JSCompiler_StaticMethods_resetActiveElement_$$($JSCompiler_StaticMethods_displayUserInput_$self$$)},
$JSCompiler_StaticMethods_resetActiveElement_$$=function($JSCompiler_StaticMethods_resetActiveElement_$self$$){$JSCompiler_StaticMethods_resetActiveElement_$self$$.$J$&&($JSCompiler_StaticMethods_resetActiveElement_$self$$.$J$.classList.toggle("i-amphtml-autocomplete-item-active",!1),$JSCompiler_StaticMethods_resetActiveElement_$self$$.$J$=null,$JSCompiler_StaticMethods_resetActiveElement_$self$$.$K$=-1)},$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$$=
function($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$,$event$jscomp$96$$){switch($event$jscomp$96$$.key){case "ArrowDown":$event$jscomp$96$$.preventDefault();if($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$K$===$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$D$.children.length-
1){$JSCompiler_StaticMethods_displayUserInput_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$);Promise.resolve();break}$JSCompiler_StaticMethods_updateActiveItem_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$,1);break;case "ArrowUp":$event$jscomp$96$$.preventDefault();if(0===$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$K$){$JSCompiler_StaticMethods_displayUserInput_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$);
Promise.resolve();break}$JSCompiler_StaticMethods_updateActiveItem_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$,-1);break;case "Enter":!$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$D$.hasAttribute("hidden")&&0<$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$D$.children.length&&
!$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$V$&&$event$jscomp$96$$.preventDefault();$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$J$?$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$mutateElement$(function(){$JSCompiler_StaticMethods_selectItem_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$,
$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$J$);$JSCompiler_StaticMethods_resetActiveElement_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$)}):Promise.resolve();break;case "Escape":$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$mutateElement$(function(){$JSCompiler_StaticMethods_displayUserInput_$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$);
_.$toggle$$module$src$style$$($JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$self$$.$D$,!1)});break;default:Promise.resolve()}};_.$$jscomp$inherits$$($AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$,AMP.BaseElement);
$AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$.prototype.$buildCallback$=function(){this.$R$=_.$Services$$module$src$services$actionServiceForDoc$$(this.element);var $jsonScript$$=this.element.querySelector('script[type="application/json"]');$jsonScript$$?this.$G$=$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$getInlineData_$$($jsonScript$$):this.element.hasAttribute("src")||_.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-autocomplete",
'Expected a <script type="application/json"> child or a URL specified in "src".');this.$F$=_.$childElementsByTag$$module$src$dom$$(this.element,"INPUT")[0];this.$F$.getAttribute("type");this.$F$.form.hasAttribute("autocomplete")&&(this.$P$=this.$F$.form.getAttribute("autocomplete"));_.$JSCompiler_StaticMethods_maybeFindTemplate$$(this.element,"template, script[template]")&&(this.$O$=_.$JSCompiler_StaticMethods_maybeFindTemplate$$(this.element,"template, script[template]"),_.$JSCompiler_StaticMethods_Templates$$module$src$service$template_impl_prototype$renderTemplate$$(this.$S$,
this.$O$,{}).then(function(){}));this.$I$=this.element.getAttribute("filter");this.$U$=this.element.hasAttribute("min-characters")?parseInt(this.element.getAttribute("min-characters"),10):1;this.$M$=this.element.hasAttribute("max-entries")?parseInt(this.element.getAttribute("max-entries"),10):null;this.$V$=this.element.hasAttribute("submit-on-enter");this.$D$=$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$createContainer_$$(this);this.element.appendChild(this.$D$)};
$AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$.prototype.$layoutCallback$=function(){var $$jscomp$this$jscomp$471$$=this;this.$F$.setAttribute("autocomplete","off");this.$F$.addEventListener("input",function(){$JSCompiler_StaticMethods_inputHandler_$$($$jscomp$this$jscomp$471$$)});this.$F$.addEventListener("keydown",function($remoteDataPromise$$){$JSCompiler_StaticMethods_AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete_prototype$keyDownHandler_$$($$jscomp$this$jscomp$471$$,
$remoteDataPromise$$)});this.$F$.addEventListener("focus",function(){$JSCompiler_StaticMethods_toggleResultsHandler_$$($$jscomp$this$jscomp$471$$,!0)});this.$F$.addEventListener("blur",function(){$JSCompiler_StaticMethods_toggleResultsHandler_$$($$jscomp$this$jscomp$471$$,!1)});this.$D$.addEventListener("mousedown",function($remoteDataPromise$$){$JSCompiler_StaticMethods_selectHandler_$$($$jscomp$this$jscomp$471$$,$remoteDataPromise$$)});var $remoteDataPromise$$=Promise.resolve();this.element.hasAttribute("src")&&
(this.$G$&&_.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-autocomplete",'Discovered both inline <script> and remote "src" data. Was providing two datasets intended?'),$remoteDataPromise$$=$JSCompiler_StaticMethods_getRemoteData_$$(this));return $remoteDataPromise$$.then(function($remoteDataPromise$$){$$jscomp$this$jscomp$471$$.$G$=$remoteDataPromise$$||$$jscomp$this$jscomp$471$$.$G$;$JSCompiler_StaticMethods_filterDataAndRenderResults_$$($$jscomp$this$jscomp$471$$,$$jscomp$this$jscomp$471$$.$G$)})};
$AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$.prototype.$mutatedAttributesCallback$=function($mutations$jscomp$3_src$jscomp$26$$){var $$jscomp$this$jscomp$472$$=this;$mutations$jscomp$3_src$jscomp$26$$=$mutations$jscomp$3_src$jscomp$26$$.src;void 0===$mutations$jscomp$3_src$jscomp$26$$||null===$mutations$jscomp$3_src$jscomp$26$$?Promise.resolve():"string"===typeof $mutations$jscomp$3_src$jscomp$26$$?$JSCompiler_StaticMethods_getRemoteData_$$(this).then(function($mutations$jscomp$3_src$jscomp$26$$){$$jscomp$this$jscomp$472$$.$G$=
$mutations$jscomp$3_src$jscomp$26$$;$JSCompiler_StaticMethods_filterDataAndRenderResults_$$($$jscomp$this$jscomp$472$$,$$jscomp$this$jscomp$472$$.$G$,$$jscomp$this$jscomp$472$$.$H$)}):"object"===typeof $mutations$jscomp$3_src$jscomp$26$$?(this.$G$=$mutations$jscomp$3_src$jscomp$26$$.items||[],$JSCompiler_StaticMethods_filterDataAndRenderResults_$$(this,this.$G$,this.$H$)):_.$user$$module$src$log$$().error("amp-autocomplete",'Unexpected "src" type: '+$mutations$jscomp$3_src$jscomp$26$$)};
$AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$.prototype.$isLayoutSupported$=function($layout$jscomp$44$$){return"container"==$layout$jscomp$44$$};self.AMP.registerElement("amp-autocomplete",$AmpAutocomplete$$module$extensions$amp_autocomplete$0_1$amp_autocomplete$$,"amp-autocomplete,amp-autocomplete>input{font-family:sans-serif}amp-autocomplete>input{border-radius:4px;box-sizing:border-box}.i-amphtml-autocomplete-results{position:absolute;top:100%;width:calc(100% + 16px);margin-top:.5rem;margin-left:-.5rem;border-radius:4px;background-color:#fff;box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);z-index:10}.i-amphtml-autocomplete-item{position:relative;padding:.5rem 1rem;cursor:pointer}.i-amphtml-autocomplete-item:first-child{border-radius:4px 4px 0px 0px}.i-amphtml-autocomplete-item:nth-last-child(2){border-radius:0px 0px 4px 4px}.i-amphtml-autocomplete-item-active,.i-amphtml-autocomplete-item:hover{background-color:rgba(0,0,0,0.15)}\n/*# sourceURL=/extensions/amp-autocomplete/0.1/amp-autocomplete.css*/");
})});

//# sourceMappingURL=amp-autocomplete-0.1.js.map
