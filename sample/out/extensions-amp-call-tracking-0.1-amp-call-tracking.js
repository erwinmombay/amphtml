(self.AMP=self.AMP||[]).push({n:"extensions-amp-call-tracking-0.1-amp-call-tracking.js", v:"erwin", f:(function(){var $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$={};
function $fetch_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($win$jscomp$288$$,$url$jscomp$156$$){$url$jscomp$156$$ in $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$||($cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$[$url$jscomp$156$$]=$Services$$module$src$services$xhrFor$$($win$jscomp$288$$).fetchJson($url$jscomp$156$$,{credentials:"include"}).then(function($win$jscomp$288$$){return $win$jscomp$288$$.json()}));
return $cachedResponsePromises_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$[$url$jscomp$156$$]}
function $AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($$jscomp$super$this$jscomp$26_element$jscomp$291$$){$$jscomp$super$this$jscomp$26_element$jscomp$291$$=AMP.BaseElement.call(this,$$jscomp$super$this$jscomp$26_element$jscomp$291$$)||this;$$jscomp$super$this$jscomp$26_element$jscomp$291$$.$hyperlink_$=null;$$jscomp$super$this$jscomp$26_element$jscomp$291$$.$configUrl_$=null;return $$jscomp$super$this$jscomp$26_element$jscomp$291$$}
$$jscomp$inherits$$($AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$,AMP.BaseElement);$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.isLayoutSupported=function($layout$jscomp$39$$){return $isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$39$$)||"container"==$layout$jscomp$39$$};
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.buildCallback=function(){this.$configUrl_$=$assertHttpsUrl$$module$src$url$$(this.element.getAttribute("config"),this.element);this.$hyperlink_$=this.element.firstElementChild};
$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$.prototype.layoutCallback=function(){var $$jscomp$this$jscomp$442$$=this;return $Services$$module$src$services$urlReplacementsForDoc$$(this.getAmpDoc()).expandUrlAsync($user$$module$src$log$$().assertString(this.$configUrl_$)).then(function($url$jscomp$157$$){return $fetch_$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$($$jscomp$this$jscomp$442$$.win,$url$jscomp$157$$)}).then(function($data$jscomp$102$$){$user$$module$src$log$$().$Log$$module$src$log_prototype$assert$("phoneNumber"in
$data$jscomp$102$$,"Response must contain a non-empty phoneNumber field %s",$$jscomp$this$jscomp$442$$.element);$$jscomp$this$jscomp$442$$.$hyperlink_$.setAttribute("href","tel:"+$data$jscomp$102$$.phoneNumber);$$jscomp$this$jscomp$442$$.$hyperlink_$.textContent=$data$jscomp$102$$.formattedPhoneNumber||$data$jscomp$102$$.phoneNumber})};(function($AMP$jscomp$30$$){$AMP$jscomp$30$$.registerElement("amp-call-tracking",$AmpCallTracking$$module$extensions$amp_call_tracking$0_1$amp_call_tracking$$)})(self.AMP);})});
//# sourceMappingURL=extensions-amp-call-tracking-0.1-amp-call-tracking.js.map

