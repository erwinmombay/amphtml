(self.AMP=self.AMP||[]).push({n:"amp-google-document-embed",v:"1904281823091",f:(function(AMP,_){
var $JSCompiler_prototypeAlias$$,$$jscomp$objectCreate$$="function"==typeof Object.create?Object.create:function($prototype$$){function $ctor$$(){}$ctor$$.prototype=$prototype$$;return new $ctor$$},$JSCompiler_temp$jscomp$10$$;
if("function"==typeof Object.setPrototypeOf)$JSCompiler_temp$jscomp$10$$=Object.setPrototypeOf;else{var $JSCompiler_inline_result$jscomp$11$$;a:{var $JSCompiler_x$jscomp$inline_13$$={a:!0},$JSCompiler_y$jscomp$inline_14$$={};try{$JSCompiler_y$jscomp$inline_14$$.__proto__=$JSCompiler_x$jscomp$inline_13$$;$JSCompiler_inline_result$jscomp$11$$=$JSCompiler_y$jscomp$inline_14$$.a;break a}catch($JSCompiler_e$jscomp$inline_15$$){}$JSCompiler_inline_result$jscomp$11$$=!1}$JSCompiler_temp$jscomp$10$$=$JSCompiler_inline_result$jscomp$11$$?
function($target$jscomp$83$$,$proto$jscomp$3$$){$target$jscomp$83$$.__proto__=$proto$jscomp$3$$;if($target$jscomp$83$$.__proto__!==$proto$jscomp$3$$)throw new TypeError($target$jscomp$83$$+" is not extensible");return $target$jscomp$83$$}:null}var $$jscomp$setPrototypeOf$$=$JSCompiler_temp$jscomp$10$$;self.log=self.log||{user:null,dev:null,userForEmbed:null};var $logs$$module$src$log$$=self.log;(function($opt_initial$jscomp$1$$){return $opt_initial$jscomp$1$$||{}})({c:!0,v:!0,a:!0,ad:!0,action:!0});
function $addParamToUrl$$module$src$url$$($JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$){var $JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$=encodeURIComponent("url")+"="+encodeURIComponent($JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$);if($JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$){$JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$=["https://docs.google.com/gview?embedded=true"];
var $JSCompiler_mainAndQuery$jscomp$inline_45$$=$JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$[0].split("?",2);$JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$=$JSCompiler_mainAndQuery$jscomp$inline_45$$[0]+($JSCompiler_mainAndQuery$jscomp$inline_45$$[1]?"?"+$JSCompiler_mainAndQuery$jscomp$inline_45$$[1]+"&"+$JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$:"?"+$JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$);$JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$=
$JSCompiler_newUrl$jscomp$inline_46_field$jscomp$1$$+=$JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$[1]?"#"+$JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$[1]:""}else $JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$="https://docs.google.com/gview?embedded=true";return $JSCompiler_inline_result$jscomp$40_JSCompiler_mainAndFragment$jscomp$inline_44_value$jscomp$91$$}
;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var $ATTRIBUTES_TO_PROPAGATE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$=["title"],$GOOGLE_DOCS_EMBED_RE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$=/^https?:\/\/docs\.google\.com.+\/pub.*\??/;
function $AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$($$jscomp$super$this_element$jscomp$40$$){$$jscomp$super$this_element$jscomp$40$$=AMP.BaseElement.call(this,$$jscomp$super$this_element$jscomp$40$$)||this;$$jscomp$super$this_element$jscomp$40$$.$iframe_$=null;return $$jscomp$super$this_element$jscomp$40$$}var $JSCompiler_parentCtor$jscomp$inline_18$$=AMP.BaseElement;
$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$.prototype=$$jscomp$objectCreate$$($JSCompiler_parentCtor$jscomp$inline_18$$.prototype);$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$.prototype.constructor=$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$;
if($$jscomp$setPrototypeOf$$)$$jscomp$setPrototypeOf$$($AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$,$JSCompiler_parentCtor$jscomp$inline_18$$);else for(var $JSCompiler_p$jscomp$inline_19$$ in $JSCompiler_parentCtor$jscomp$inline_18$$)if("prototype"!=$JSCompiler_p$jscomp$inline_19$$)if(Object.defineProperties){var $JSCompiler_descriptor$jscomp$inline_20$$=Object.getOwnPropertyDescriptor($JSCompiler_parentCtor$jscomp$inline_18$$,$JSCompiler_p$jscomp$inline_19$$);
$JSCompiler_descriptor$jscomp$inline_20$$&&Object.defineProperty($AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$,$JSCompiler_p$jscomp$inline_19$$,$JSCompiler_descriptor$jscomp$inline_20$$)}else $AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$[$JSCompiler_p$jscomp$inline_19$$]=$JSCompiler_parentCtor$jscomp$inline_18$$[$JSCompiler_p$jscomp$inline_19$$];
$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$.$superClass_$=$JSCompiler_parentCtor$jscomp$inline_18$$.prototype;$JSCompiler_prototypeAlias$$=$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$.prototype;$JSCompiler_prototypeAlias$$.preconnectCallback=function($opt_onLayout$$){this.preconnect.url("https://docs.google.com",$opt_onLayout$$)};$JSCompiler_prototypeAlias$$.renderOutsideViewport=function(){return.75};
$JSCompiler_prototypeAlias$$.isLayoutSupported=function($layout$jscomp$3$$){return"fixed"==$layout$jscomp$3$$||"fixed-height"==$layout$jscomp$3$$||"responsive"==$layout$jscomp$3$$||"fill"==$layout$jscomp$3$$||"flex-item"==$layout$jscomp$3$$||"fluid"==$layout$jscomp$3$$||"intrinsic"==$layout$jscomp$3$$};
$JSCompiler_prototypeAlias$$.buildCallback=function(){var $JSCompiler_shouldBeTrueish$jscomp$inline_22$$=this.element.getAttribute("src"),$JSCompiler_opt_1$jscomp$inline_23$$=this.element;if(!$logs$$module$src$log$$.user)throw Error("failed to call initLogConstructor");$logs$$module$src$log$$.user.assert($JSCompiler_shouldBeTrueish$jscomp$inline_22$$,"The src attribute is required for <amp-google-document-embed> %s",$JSCompiler_opt_1$jscomp$inline_23$$,void 0,void 0,void 0,void 0,void 0,void 0,void 0,
void 0)};
$JSCompiler_prototypeAlias$$.layoutCallback=function(){var $iframe$$=this.element.ownerDocument.createElement("iframe");this.$iframe_$=$iframe$$;$iframe$$.setAttribute("frameborder","0");$iframe$$.setAttribute("allowfullscreen","");this.propagateAttributes($ATTRIBUTES_TO_PROPAGATE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$,$iframe$$);var $JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$=this.element.getAttribute("src");$JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$=$JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$.match($GOOGLE_DOCS_EMBED_RE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$)?
$JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$:$addParamToUrl$$module$src$url$$($JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$);$iframe$$.src=$JSCompiler_inline_result$jscomp$12_JSCompiler_src$jscomp$inline_35$$;this.applyFillContent($iframe$$);this.element.appendChild($iframe$$);return this.loadPromise($iframe$$)};
$JSCompiler_prototypeAlias$$.mutatedAttributesCallback=function($mutations$$){var $attrs$$=$ATTRIBUTES_TO_PROPAGATE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$.filter(function($attrs$$){return void 0!==$mutations$$[$attrs$$]}),$iframe$jscomp$1$$=this.$iframe_$;this.propagateAttributes($attrs$$,$iframe$jscomp$1$$,!0);var $src$jscomp$4$$=$mutations$$.src;$src$jscomp$4$$&&($iframe$jscomp$1$$.src=$src$jscomp$4$$.match($GOOGLE_DOCS_EMBED_RE$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$)?
$src$jscomp$4$$:$addParamToUrl$$module$src$url$$($src$jscomp$4$$))};$JSCompiler_prototypeAlias$$.unlayoutOnPause=function(){return!0};$JSCompiler_prototypeAlias$$.unlayoutCallback=function(){if(this.$iframe_$){var $JSCompiler_element$jscomp$inline_37$$=this.$iframe_$;$JSCompiler_element$jscomp$inline_37$$.parentElement&&$JSCompiler_element$jscomp$inline_37$$.parentElement.removeChild($JSCompiler_element$jscomp$inline_37$$);this.$iframe_$=null}return!0};
(function($AMP$jscomp$1$$){$AMP$jscomp$1$$.registerElement("amp-google-document-embed",$AmpDriveViewer$$module$extensions$amp_google_document_embed$0_1$amp_google_document_embed$$)})(self.AMP);
})});

//# sourceMappingURL=amp-google-document-embed-0.1.js.map
