(self.AMP=self.AMP||[]).push({n:"amp-date-display",i:["_base_i","_base_misc"],v:"1901181729101",f:(function(AMP,_){
var $AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$ = function($$jscomp$super$this$jscomp$37_element$jscomp$385$$) {
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$ = window.AMP.BaseElement.call(this, $$jscomp$super$this$jscomp$37_element$jscomp$385$$) || this;
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$boundRendered_$ = $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$rendered_$.bind($$jscomp$super$this$jscomp$37_element$jscomp$385$$);
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$datetime_$ = "";
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$timestampSeconds_$ = 0;
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$timestampMiliseconds_$ = 0;
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$displayIn_$ = "";
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$offsetSeconds_$ = 0;
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$locale_$ = "";
  $$jscomp$super$this$jscomp$37_element$jscomp$385$$.$templates_$ = _.$Services$$module$src$services$templatesFor$$($$jscomp$super$this$jscomp$37_element$jscomp$385$$.$win$);
  return $$jscomp$super$this$jscomp$37_element$jscomp$385$$;
}, $JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$ = function($input$jscomp$50$$) {
  return 9 < $input$jscomp$50$$ ? $input$jscomp$50$$.toString() : "0" + $input$jscomp$50$$;
};
_.$$jscomp$inherits$$($AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$, window.AMP.BaseElement);
$AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$.prototype.$buildCallback$ = function() {
  if (_.$isExperimentOn$$module$src$experiments$$(this.$win$, "amp-date-display")) {
    this.$datetime_$ = this.element.getAttribute("datetime") || "";
    this.$timestampSeconds_$ = Number(this.element.getAttribute("timestamp-seconds"));
    this.$timestampMiliseconds_$ = Number(this.element.getAttribute("timestamp-ms"));
    this.$displayIn_$ = this.element.getAttribute("display-in") || "";
    this.$offsetSeconds_$ = Number(this.element.getAttribute("offset-seconds")) || 0;
    this.$locale_$ = this.element.getAttribute("locale") || "en";
    var $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$;
    "now" === this.$datetime_$.toLowerCase() ? $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = Date.now() : this.$datetime_$ ? $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = Date.parse(this.$datetime_$) : this.$timestampMiliseconds_$ ? $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = 
    this.$timestampMiliseconds_$ : this.$timestampSeconds_$ && ($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = 1000 * this.$timestampSeconds_$);
    $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = new Date($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ + 1000 * this.$offsetSeconds_$);
    if ("utc" === this.$displayIn_$.toLowerCase()) {
      var $hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$ = this.$locale_$;
      $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = {year:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCFullYear(), month:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCMonth() + 1, $monthName$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, 
      {month:"long", timeZone:"UTC"}), $monthNameShort$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, {month:"short", timeZone:"UTC"}), day:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCDate(), $dayName$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, 
      {weekday:"long", timeZone:"UTC"}), $dayNameShort$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, {weekday:"short", timeZone:"UTC"}), hour:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCHours(), 
      minute:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCMinutes(), second:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getUTCSeconds(), iso:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toISOString()};
    } else {
      $hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$ = this.$locale_$, $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = {year:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getFullYear(), month:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getMonth() + 
      1, $monthName$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, {month:"long"}), $monthNameShort$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, 
      {month:"short"}), day:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getDate(), $dayName$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, {weekday:"long"}), $dayNameShort$:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toLocaleDateString($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, 
      {weekday:"short"}), hour:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getHours(), minute:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getMinutes(), second:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.getSeconds(), 
      iso:$JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.toISOString()};
    }
    $hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$ = $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.hour % 12 || 12;
    $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$ = Object.assign({}, $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$, {$yearTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.year % 
    100), $monthTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.month), $dayTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.day), 
    $hourTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.hour), hour12:$hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$, $hour12TwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($hour12$jscomp$inline_6193_locale$jscomp$inline_6186_locale$jscomp$inline_6189$$), 
    $minuteTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.minute), $secondTwoDigit$:$JSCompiler_StaticMethods_AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display_prototype$padStart_$$($JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.second), 
    $dayPeriod$:12 > $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$.hour ? "am" : "pm"});
    _.$JSCompiler_StaticMethods_findAndRenderTemplate$$(this.$templates_$, this.element, $JSCompiler_inline_result$jscomp$723_JSCompiler_temp$jscomp$5635_basicData$jscomp$inline_3117_date$jscomp$inline_3116_epoch$jscomp$inline_6183$$).then(this.$boundRendered_$);
  } else {
    _.$user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-date-display", "Experiment %s is not turned on.", "amp-date-display");
  }
};
$AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$.prototype.$isLayoutSupported$ = function($layout$jscomp$49$$) {
  return _.$isLayoutSizeDefined$$module$src$layout$$($layout$jscomp$49$$);
};
$AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$.prototype.$rendered_$ = function($element$jscomp$386_event$jscomp$103$$) {
  _.$removeChildren$$module$src$dom$$(this.element);
  this.element.appendChild($element$jscomp$386_event$jscomp$103$$);
  $element$jscomp$386_event$jscomp$103$$ = _.$createCustomEvent$$module$src$event_helper$$(this.$win$, "amp:dom-update", null, {bubbles:!0});
  this.element.dispatchEvent($element$jscomp$386_event$jscomp$103$$);
};
window.self.AMP.registerElement("amp-date-display", $AmpDateDisplay$$module$extensions$amp_date_display$0_1$amp_date_display$$);

})});
