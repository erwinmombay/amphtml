(function(){var $JSCompiler_prototypeAlias$$;
function $includes$$module$src$polyfills$array_includes$$($value$jscomp$84$$, $i$jscomp$3_opt_fromIndex$jscomp$10$$) {
  var $fromIndex$$ = $i$jscomp$3_opt_fromIndex$jscomp$10$$ || 0, $len$$ = this.length;
  for ($i$jscomp$3_opt_fromIndex$jscomp$10$$ = 0 <= $fromIndex$$ ? $fromIndex$$ : Math.max($len$$ + $fromIndex$$, 0); $i$jscomp$3_opt_fromIndex$jscomp$10$$ < $len$$; $i$jscomp$3_opt_fromIndex$jscomp$10$$++) {
    var $other$jscomp$4$$ = this[$i$jscomp$3_opt_fromIndex$jscomp$10$$];
    if ($other$jscomp$4$$ === $value$jscomp$84$$ || $value$jscomp$84$$ !== $value$jscomp$84$$ && $other$jscomp$4$$ !== $other$jscomp$4$$) {
      return !0;
    }
  }
  return !1;
}
;function $sign$$module$src$polyfills$math_sign$$($x$jscomp$74$$) {
  return ($x$jscomp$74$$ = Number($x$jscomp$74$$)) ? 0 < $x$jscomp$74$$ ? 1 : -1 : $x$jscomp$74$$;
}
;var $hasOwnProperty$$module$src$polyfills$object_assign$$ = Object.prototype.hasOwnProperty;
function $assign$$module$src$polyfills$object_assign$$($target$jscomp$55$$, $var_args$jscomp$47$$) {
  if (null == $target$jscomp$55$$) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  for (var $output$jscomp$2$$ = Object($target$jscomp$55$$), $i$jscomp$4$$ = 1; $i$jscomp$4$$ < arguments.length; $i$jscomp$4$$++) {
    var $source$jscomp$12$$ = arguments[$i$jscomp$4$$];
    if (null != $source$jscomp$12$$) {
      for (var $key$jscomp$35$$ in $source$jscomp$12$$) {
        $hasOwnProperty$$module$src$polyfills$object_assign$$.call($source$jscomp$12$$, $key$jscomp$35$$) && ($output$jscomp$2$$[$key$jscomp$35$$] = $source$jscomp$12$$[$key$jscomp$35$$]);
      }
    }
  }
  return $output$jscomp$2$$;
}
;function $values$$module$src$polyfills$object_values$$($target$jscomp$56$$) {
  return Object.keys($target$jscomp$56$$).map(function($k$$) {
    return $target$jscomp$56$$[$k$$];
  });
}
;(function($win$$) {
  $win$$.Array.prototype.includes || $win$$.Object.defineProperty(Array.prototype, "includes", {enumerable:!1, configurable:!0, writable:!0, value:$includes$$module$src$polyfills$array_includes$$});
})(self);
(function($win$jscomp$2$$) {
  $win$jscomp$2$$.Object.assign || $win$jscomp$2$$.Object.defineProperty($win$jscomp$2$$.Object, "assign", {enumerable:!1, configurable:!0, writable:!0, value:$assign$$module$src$polyfills$object_assign$$});
})(self);
(function($win$jscomp$3$$) {
  $win$jscomp$3$$.Object.values || $win$jscomp$3$$.Object.defineProperty($win$jscomp$3$$.Object, "values", {configurable:!0, writable:!0, value:$values$$module$src$polyfills$object_values$$});
})(self);
(function($win$jscomp$1$$) {
  $win$jscomp$1$$.Math.sign || $win$jscomp$1$$.Object.defineProperty($win$jscomp$1$$.Math, "sign", {enumerable:!1, configurable:!0, writable:!0, value:$sign$$module$src$polyfills$math_sign$$});
})(self);
function $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$($type$jscomp$116$$, $args$$, $opt_value$jscomp$8$$) {
  this.type = $type$jscomp$116$$;
  this.args = $args$$;
  this.value = $opt_value$jscomp$8$$;
}
;function $tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($component$jscomp$4$$, $fallback$$) {
  $fallback$$ = void 0 === $fallback$$ ? "" : $fallback$$;
  try {
    return decodeURIComponent($component$jscomp$4$$);
  } catch ($e$jscomp$7$$) {
    return $fallback$$;
  }
}
;var $regex$$module$src$url_parse_query_string$$ = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
function $parseQueryString_$$module$src$url_parse_query_string$$($queryString$$) {
  var $params$jscomp$1$$ = Object.create(null);
  if (!$queryString$$) {
    return $params$jscomp$1$$;
  }
  for (var $match$$; $match$$ = $regex$$module$src$url_parse_query_string$$.exec($queryString$$);) {
    var $name$jscomp$65$$ = $tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($match$$[1], $match$$[1]), $value$jscomp$85$$ = $match$$[2] ? $tryDecodeUriComponent_$$module$src$url_try_decode_uri_component$$($match$$[2], $match$$[2]) : "";
    $params$jscomp$1$$[$name$jscomp$65$$] = $value$jscomp$85$$;
  }
  return $params$jscomp$1$$;
}
;var $rtvVersion$$module$src$mode$$ = "";
function $getMode$$module$src$mode$$($opt_win$$) {
  var $JSCompiler_temp$jscomp$6_win$jscomp$4$$ = $opt_win$$ || self;
  if ($JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_MODE) {
    $JSCompiler_temp$jscomp$6_win$jscomp$4$$ = $JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_MODE;
  } else {
    var $JSCompiler_AMP_CONFIG$jscomp$inline_18_JSCompiler_singlePassType$jscomp$inline_25$$ = self.AMP_CONFIG || {}, $JSCompiler_runningTests$jscomp$inline_22$$ = !!$JSCompiler_AMP_CONFIG$jscomp$inline_18_JSCompiler_singlePassType$jscomp$inline_25$$.test || !1, $JSCompiler_hashQuery$jscomp$inline_24$$ = $parseQueryString_$$module$src$url_parse_query_string$$($JSCompiler_temp$jscomp$6_win$jscomp$4$$.location.originalHash || $JSCompiler_temp$jscomp$6_win$jscomp$4$$.location.hash);
    $JSCompiler_AMP_CONFIG$jscomp$inline_18_JSCompiler_singlePassType$jscomp$inline_25$$ = $JSCompiler_AMP_CONFIG$jscomp$inline_18_JSCompiler_singlePassType$jscomp$inline_25$$.spt;
    var $JSCompiler_searchQuery$jscomp$inline_26$$ = $parseQueryString_$$module$src$url_parse_query_string$$($JSCompiler_temp$jscomp$6_win$jscomp$4$$.location.search);
    $rtvVersion$$module$src$mode$$ || ($rtvVersion$$module$src$mode$$ = $JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_CONFIG && $JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_CONFIG.v ? $JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_CONFIG.v : "011901181729101");
    $JSCompiler_temp$jscomp$6_win$jscomp$4$$ = $JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_MODE = {localDev:!1, development:!("1" != $JSCompiler_hashQuery$jscomp$inline_24$$.development && !$JSCompiler_temp$jscomp$6_win$jscomp$4$$.AMP_DEV_MODE), examiner:"2" == $JSCompiler_hashQuery$jscomp$inline_24$$.development, filter:$JSCompiler_hashQuery$jscomp$inline_24$$.filter, geoOverride:$JSCompiler_hashQuery$jscomp$inline_24$$["amp-geo"], minified:!0, lite:void 0 != $JSCompiler_searchQuery$jscomp$inline_26$$.amp_lite, 
    test:$JSCompiler_runningTests$jscomp$inline_22$$, log:$JSCompiler_hashQuery$jscomp$inline_24$$.log, version:"1901181729101", rtvVersion:$rtvVersion$$module$src$mode$$, singlePassType:$JSCompiler_AMP_CONFIG$jscomp$inline_18_JSCompiler_singlePassType$jscomp$inline_25$$};
  }
  return $JSCompiler_temp$jscomp$6_win$jscomp$4$$;
}
;var $toString_$$module$src$types$$ = Object.prototype.toString;
function $Log$$module$src$log$$($win$jscomp$8$$, $levelFunc$$, $opt_suffix$$) {
  this.win = $win$jscomp$8$$;
  this.$levelFunc_$ = $levelFunc$$;
  this.$level_$ = this.win.console && this.win.console.log && "0" != $getMode$$module$src$mode$$().log ? this.$levelFunc_$({localDev:!1, development:$getMode$$module$src$mode$$(void 0).development, filter:$getMode$$module$src$mode$$(void 0).filter, minified:!0, lite:$getMode$$module$src$mode$$(void 0).lite, test:!1, log:$getMode$$module$src$mode$$(void 0).log, version:$getMode$$module$src$mode$$(void 0).version, rtvVersion:$getMode$$module$src$mode$$(void 0).rtvVersion, singlePassType:$getMode$$module$src$mode$$(void 0).singlePassType}) : 
  0;
  this.$suffix_$ = $opt_suffix$$ || "";
}
function $JSCompiler_StaticMethods_msg_$$($JSCompiler_StaticMethods_msg_$self$$, $level$jscomp$8$$, $messages$$) {
  if (0 != $JSCompiler_StaticMethods_msg_$self$$.$level_$) {
    var $fn$jscomp$1$$ = $JSCompiler_StaticMethods_msg_$self$$.win.console.log;
    "ERROR" == $level$jscomp$8$$ ? $fn$jscomp$1$$ = $JSCompiler_StaticMethods_msg_$self$$.win.console.error || $fn$jscomp$1$$ : "INFO" == $level$jscomp$8$$ ? $fn$jscomp$1$$ = $JSCompiler_StaticMethods_msg_$self$$.win.console.info || $fn$jscomp$1$$ : "WARN" == $level$jscomp$8$$ && ($fn$jscomp$1$$ = $JSCompiler_StaticMethods_msg_$self$$.win.console.warn || $fn$jscomp$1$$);
    $fn$jscomp$1$$.apply($JSCompiler_StaticMethods_msg_$self$$.win.console, $messages$$);
  }
}
$JSCompiler_prototypeAlias$$ = $Log$$module$src$log$$.prototype;
$JSCompiler_prototypeAlias$$.isEnabled = function() {
  return 0 != this.$level_$;
};
$JSCompiler_prototypeAlias$$.fine = function($tag$jscomp$2$$, $var_args$jscomp$48$$) {
  4 <= this.$level_$ && $JSCompiler_StaticMethods_msg_$$(this, "FINE", Array.prototype.slice.call(arguments, 1));
};
$JSCompiler_prototypeAlias$$.info = function($tag$jscomp$3$$, $var_args$jscomp$49$$) {
  3 <= this.$level_$ && $JSCompiler_StaticMethods_msg_$$(this, "INFO", Array.prototype.slice.call(arguments, 1));
};
$JSCompiler_prototypeAlias$$.warn = function($tag$jscomp$4$$, $var_args$jscomp$50$$) {
  2 <= this.$level_$ && $JSCompiler_StaticMethods_msg_$$(this, "WARN", Array.prototype.slice.call(arguments, 1));
};
$JSCompiler_prototypeAlias$$.$error_$ = function($tag$jscomp$5$$, $var_args$jscomp$51$$) {
  if (1 <= this.$level_$) {
    $JSCompiler_StaticMethods_msg_$$(this, "ERROR", Array.prototype.slice.call(arguments, 1));
  } else {
    var $error$jscomp$2$$ = $createErrorVargs$$module$src$log$$.apply(null, Array.prototype.slice.call(arguments, 1));
    $JSCompiler_StaticMethods_prepareError_$$(this, $error$jscomp$2$$);
    return $error$jscomp$2$$;
  }
};
$JSCompiler_prototypeAlias$$.error = function($tag$jscomp$6$$, $var_args$jscomp$52$$) {
  var $error$jscomp$3$$ = this.$error_$.apply(this, arguments);
  $error$jscomp$3$$ && ($error$jscomp$3$$.name = $tag$jscomp$6$$ || $error$jscomp$3$$.name, self.reportError($error$jscomp$3$$));
};
$JSCompiler_prototypeAlias$$.expectedError = function($unusedTag$$, $var_args$jscomp$53$$) {
  var $error$jscomp$4$$ = this.$error_$.apply(this, arguments);
  $error$jscomp$4$$ && ($error$jscomp$4$$.expected = !0, self.reportError($error$jscomp$4$$));
};
$JSCompiler_prototypeAlias$$.createError = function($var_args$jscomp$54$$) {
  var $error$jscomp$5$$ = $createErrorVargs$$module$src$log$$.apply(null, arguments);
  $JSCompiler_StaticMethods_prepareError_$$(this, $error$jscomp$5$$);
  return $error$jscomp$5$$;
};
$JSCompiler_prototypeAlias$$.createExpectedError = function($var_args$jscomp$55$$) {
  var $error$jscomp$6$$ = $createErrorVargs$$module$src$log$$.apply(null, arguments);
  $JSCompiler_StaticMethods_prepareError_$$(this, $error$jscomp$6$$);
  $error$jscomp$6$$.expected = !0;
  return $error$jscomp$6$$;
};
$JSCompiler_prototypeAlias$$.assert = function($shouldBeTrueish$$, $opt_message$jscomp$7$$, $var_args$jscomp$56$$) {
  var $firstElement$$;
  if (!$shouldBeTrueish$$) {
    var $splitMessage$$ = ($opt_message$jscomp$7$$ || "Assertion failed").split("%s"), $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ = $splitMessage$$.shift(), $formatted$$ = $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$, $messageArray$$ = [], $e$jscomp$8_i$jscomp$5$$ = 2;
    for ("" != $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ && $messageArray$$.push($JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$); 0 < $splitMessage$$.length;) {
      var $nextConstant$$ = $splitMessage$$.shift(), $val$$ = arguments[$e$jscomp$8_i$jscomp$5$$++];
      $val$$ && $val$$.tagName && ($firstElement$$ = $val$$);
      $messageArray$$.push($val$$);
      $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ = $nextConstant$$.trim();
      "" != $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ && $messageArray$$.push($JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$);
      $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ = $formatted$$;
      var $JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$ = ($JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$ = $val$$) && 1 == $JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$.nodeType ? $JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$.tagName.toLowerCase() + ($JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$.id ? "#" + $JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$.id : 
      "") : $JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$;
      $formatted$$ = $JSCompiler_temp_const$jscomp$9_JSCompiler_val$jscomp$inline_32_first$jscomp$4$$ + ($JSCompiler_inline_result$jscomp$10_JSCompiler_val$jscomp$inline_34$$ + $nextConstant$$);
    }
    $e$jscomp$8_i$jscomp$5$$ = Error($formatted$$);
    $e$jscomp$8_i$jscomp$5$$.fromAssert = !0;
    $e$jscomp$8_i$jscomp$5$$.associatedElement = $firstElement$$;
    $e$jscomp$8_i$jscomp$5$$.messageArray = $messageArray$$;
    $JSCompiler_StaticMethods_prepareError_$$(this, $e$jscomp$8_i$jscomp$5$$);
    self.reportError($e$jscomp$8_i$jscomp$5$$);
    throw $e$jscomp$8_i$jscomp$5$$;
  }
  return $shouldBeTrueish$$;
};
$JSCompiler_prototypeAlias$$.assertElement = function($shouldBeElement$$, $opt_message$jscomp$8$$) {
  this.assert($shouldBeElement$$ && 1 == $shouldBeElement$$.nodeType, ($opt_message$jscomp$8$$ || "Element expected") + ": %s", $shouldBeElement$$);
  return $shouldBeElement$$;
};
$JSCompiler_prototypeAlias$$.assertString = function($shouldBeString$$, $opt_message$jscomp$9$$) {
  this.assert("string" == typeof $shouldBeString$$, ($opt_message$jscomp$9$$ || "String expected") + ": %s", $shouldBeString$$);
  return $shouldBeString$$;
};
$JSCompiler_prototypeAlias$$.assertNumber = function($shouldBeNumber$$, $opt_message$jscomp$10$$) {
  this.assert("number" == typeof $shouldBeNumber$$, ($opt_message$jscomp$10$$ || "Number expected") + ": %s", $shouldBeNumber$$);
  return $shouldBeNumber$$;
};
$JSCompiler_prototypeAlias$$.assertArray = function($shouldBeArray$$, $opt_message$jscomp$11$$) {
  this.assert(Array.isArray($shouldBeArray$$), ($opt_message$jscomp$11$$ || "Array expected") + ": %s", $shouldBeArray$$);
  return $shouldBeArray$$;
};
$JSCompiler_prototypeAlias$$.assertBoolean = function($shouldBeBoolean$$, $opt_message$jscomp$12$$) {
  this.assert(!!$shouldBeBoolean$$ === $shouldBeBoolean$$, ($opt_message$jscomp$12$$ || "Boolean expected") + ": %s", $shouldBeBoolean$$);
  return $shouldBeBoolean$$;
};
$JSCompiler_prototypeAlias$$.assertEnumValue = function($JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$, $s$jscomp$3$$, $opt_enumName$$) {
  a: {
    for (var $JSCompiler_k$jscomp$inline_38$$ in $JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$) {
      if ($JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$[$JSCompiler_k$jscomp$inline_38$$] === $s$jscomp$3$$) {
        $JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$ = !0;
        break a;
      }
    }
    $JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$ = !1;
  }
  if ($JSCompiler_inline_result$jscomp$8_enumObj$jscomp$1$$) {
    return $s$jscomp$3$$;
  }
  this.assert(!1, 'Unknown %s value: "%s"', $opt_enumName$$ || "enum", $s$jscomp$3$$);
};
function $JSCompiler_StaticMethods_prepareError_$$($JSCompiler_StaticMethods_prepareError_$self$$, $error$jscomp$7$$) {
  $error$jscomp$7$$ = $duplicateErrorIfNecessary$$module$src$log$$($error$jscomp$7$$);
  $JSCompiler_StaticMethods_prepareError_$self$$.$suffix_$ ? $error$jscomp$7$$.message ? -1 == $error$jscomp$7$$.message.indexOf($JSCompiler_StaticMethods_prepareError_$self$$.$suffix_$) && ($error$jscomp$7$$.message += $JSCompiler_StaticMethods_prepareError_$self$$.$suffix_$) : $error$jscomp$7$$.message = $JSCompiler_StaticMethods_prepareError_$self$$.$suffix_$ : 0 <= $error$jscomp$7$$.message.indexOf("\u200b\u200b\u200b") && ($error$jscomp$7$$.message = $error$jscomp$7$$.message.replace("\u200b\u200b\u200b", 
  ""));
}
function $duplicateErrorIfNecessary$$module$src$log$$($error$jscomp$8$$) {
  var $messageProperty$$ = Object.getOwnPropertyDescriptor($error$jscomp$8$$, "message");
  if ($messageProperty$$ && $messageProperty$$.writable) {
    return $error$jscomp$8$$;
  }
  var $stack$$ = $error$jscomp$8$$.stack, $e$jscomp$9$$ = Error($error$jscomp$8$$.message), $prop$jscomp$4$$;
  for ($prop$jscomp$4$$ in $error$jscomp$8$$) {
    $e$jscomp$9$$[$prop$jscomp$4$$] = $error$jscomp$8$$[$prop$jscomp$4$$];
  }
  $e$jscomp$9$$.stack = $stack$$;
  return $e$jscomp$9$$;
}
function $createErrorVargs$$module$src$log$$($var_args$jscomp$57$$) {
  for (var $error$jscomp$9$$ = null, $message$jscomp$27$$ = "", $i$jscomp$6$$ = 0; $i$jscomp$6$$ < arguments.length; $i$jscomp$6$$++) {
    var $arg$jscomp$6$$ = arguments[$i$jscomp$6$$];
    $arg$jscomp$6$$ instanceof Error && !$error$jscomp$9$$ ? $error$jscomp$9$$ = $duplicateErrorIfNecessary$$module$src$log$$($arg$jscomp$6$$) : ($message$jscomp$27$$ && ($message$jscomp$27$$ += " "), $message$jscomp$27$$ += $arg$jscomp$6$$);
  }
  $error$jscomp$9$$ ? $message$jscomp$27$$ && ($error$jscomp$9$$.message = $message$jscomp$27$$ + ": " + $error$jscomp$9$$.message) : $error$jscomp$9$$ = Error($message$jscomp$27$$);
  return $error$jscomp$9$$;
}
self.log = self.log || {user:null, dev:null, userForEmbed:null};
var $logs$$module$src$log$$ = self.log, $logConstructor$$module$src$log$$ = null;
function $user$$module$src$log$$() {
  $logs$$module$src$log$$.user || ($logs$$module$src$log$$.user = $getUserLogger$$module$src$log$$());
  return $logs$$module$src$log$$.user;
}
function $getUserLogger$$module$src$log$$() {
  var $suffix$$ = "\u200b\u200b\u200b";
  if (!$logConstructor$$module$src$log$$) {
    throw Error("failed to call initLogConstructor");
  }
  return new $logConstructor$$module$src$log$$(self, function($suffix$$) {
    var $mode$jscomp$10$$ = parseInt($suffix$$.log, 10);
    return $suffix$$.development || 1 <= $mode$jscomp$10$$ ? 4 : 2;
  }, $suffix$$);
}
function $dev$$module$src$log$$() {
  if ($logs$$module$src$log$$.dev) {
    return $logs$$module$src$log$$.dev;
  }
  if (!$logConstructor$$module$src$log$$) {
    throw Error("failed to call initLogConstructor");
  }
  return $logs$$module$src$log$$.dev = new $logConstructor$$module$src$log$$(self, function($logNum$jscomp$1_mode$jscomp$11$$) {
    $logNum$jscomp$1_mode$jscomp$11$$ = parseInt($logNum$jscomp$1_mode$jscomp$11$$.log, 10);
    return 3 <= $logNum$jscomp$1_mode$jscomp$11$$ ? 4 : 2 <= $logNum$jscomp$1_mode$jscomp$11$$ ? 3 : 0;
  });
}
function $userAssert$$module$src$log$$($shouldBeTrueish$jscomp$3$$, $opt_message$jscomp$14$$, $opt_1$jscomp$1$$) {
  $user$$module$src$log$$().assert($shouldBeTrueish$jscomp$3$$, $opt_message$jscomp$14$$, $opt_1$jscomp$1$$, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
;var $hasOwn_$$module$src$utils$object$$ = Object.prototype.hasOwnProperty;
function $map$$module$src$utils$object$$($opt_initial$$) {
  var $obj$jscomp$25$$ = Object.create(null);
  $opt_initial$$ && Object.assign($obj$jscomp$25$$, $opt_initial$$);
  return $obj$jscomp$25$$;
}
function $dict$$module$src$utils$object$$($opt_initial$jscomp$1$$) {
  return $opt_initial$jscomp$1$$ || {};
}
function $ownProperty$$module$src$utils$object$$($obj$jscomp$27$$, $key$jscomp$37$$) {
  if ($hasOwn_$$module$src$utils$object$$.call($obj$jscomp$27$$, $key$jscomp$37$$)) {
    return $obj$jscomp$27$$[$key$jscomp$37$$];
  }
}
;var $parser$$module$extensions$amp_bind$0_1$bind_expr_impl$$ = function() {
  function $o$jscomp$1$$($o$jscomp$1$$, $Parser$$, $$V0$$, $$V2$$) {
    $$V0$$ = $$V0$$ || {};
    for ($$V2$$ = $o$jscomp$1$$.length; $$V2$$--; $$V0$$[$o$jscomp$1$$[$$V2$$]] = $Parser$$) {
    }
    return $$V0$$;
  }
  function $Parser$$() {
    this.yy = {};
  }
  var $$V0$$ = [1, 7], $$V1$$ = [1, 10], $$V2$$ = [1, 11], $$V3$$ = [1, 12], $$V4$$ = [1, 13], $$V5$$ = [1, 23], $$V6$$ = [1, 17], $$V7$$ = [1, 18], $$V8$$ = [1, 19], $$V9$$ = [1, 20], $$Va$$ = [1, 21], $$Vb$$ = [1, 22], $$Vc$$ = [1, 26], $$Vd$$ = [1, 25], $$Ve$$ = [1, 27], $$Vf$$ = [1, 28], $$Vg$$ = [1, 29], $$Vh$$ = [1, 30], $$Vi$$ = [1, 31], $$Vj$$ = [1, 32], $$Vk$$ = [1, 33], $$Vl$$ = [1, 34], $$Vm$$ = [1, 35], $$Vn$$ = [1, 36], $$Vo$$ = [1, 37], $$Vp$$ = [1, 38], $$Vq$$ = [1, 39], $$Vr$$ = [1, 
  41], $$Vs$$ = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 33, 38, 39, 49], $$Vt$$ = [2, 40], $$Vu$$ = [1, 47], $$Vv$$ = [1, 52], $$Vw$$ = [1, 54], $$Vx$$ = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $$Vy$$ = [1, 75], $$Vz$$ = [33, 49], $$VA$$ = [10, 33, 39], $$VB$$ = [5, 10, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $$VC$$ = [5, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49], $$VD$$ = [5, 10, 19, 20, 25, 
  26, 27, 28, 33, 39, 49], $$VE$$ = [10, 33], $parser$$ = {trace:function() {
  }, yy:{}, $symbols_$:{error:2, result:3, expr:4, EOF:5, operation:6, invocation:7, member_access:8, "(":9, ")":10, variable:11, literal:12, "!":13, "-":14, "+":15, "*":16, "/":17, "%":18, "&&":19, "||":20, "<=":21, "<":22, ">=":23, ">":24, "!=":25, "==":26, "?":27, ":":28, NAME:29, args:30, ".":31, arrow_function:32, ",":33, "=>":34, params:35, array:36, member:37, "[":38, "]":39, primitive:40, object_literal:41, array_literal:42, STRING:43, NUMBER:44, TRUE:45, FALSE:46, NULL:47, "{":48, "}":49, 
  object:50, key_value:51, key:52, $accept:0, $end:1}, $terminals_$:{2:"error", 5:"EOF", 9:"(", 10:")", 13:"!", 14:"-", 15:"+", 16:"*", 17:"/", 18:"%", 19:"&&", 20:"||", 21:"<=", 22:"<", 23:">=", 24:">", 25:"!=", 26:"==", 27:"?", 28:":", 29:"NAME", 31:".", 33:",", 34:"=>", 38:"[", 39:"]", 43:"STRING", 44:"NUMBER", 45:"TRUE", 46:"FALSE", 47:"NULL", 48:"{", 49:"}"}, $productions_$:[0, [3, 2], [3, 1], [4, 1], [4, 1], [4, 1], [4, 3], [4, 1], [4, 1], [6, 2], [6, 2], [6, 2], [6, 3], [6, 3], [6, 3], [6, 
  3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 5], [7, 2], [7, 4], [7, 6], [7, 8], [32, 4], [32, 3], [32, 5], [35, 3], [35, 3], [30, 2], [30, 3], [8, 2], [37, 2], [37, 3], [11, 1], [12, 1], [12, 1], [12, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [42, 2], [42, 3], [42, 4], [36, 1], [36, 3], [41, 2], [41, 3], [41, 4], [50, 1], [50, 3], [51, 3], [52, 1], [52, 1], [52, 3]], performAction:function($o$jscomp$1$$, $Parser$$, $$V0$$, $$V2$$, $$V1$$, $$V3$$) {
    var $$0$$ = $$V3$$.length - 1;
    switch($$V1$$) {
      case 1:
        return $$V3$$[$$0$$ - 1];
      case 2:
        return "";
      case 3:
      case 4:
      case 5:
      case 7:
      case 8:
        this.$$$ = $$V3$$[$$0$$];
        break;
      case 6:
        this.$$$ = $$V3$$[$$0$$ - 1];
        break;
      case 9:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(12, [$$V3$$[$$0$$]]);
        break;
      case 10:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(13, [$$V3$$[$$0$$]]);
        break;
      case 11:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(14, [$$V3$$[$$0$$]]);
        break;
      case 12:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(15, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 13:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(16, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 14:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(17, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 15:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(18, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 16:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(19, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 17:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(20, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 18:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(21, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 19:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(22, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 20:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(23, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 21:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(24, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 22:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(25, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 23:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(26, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 24:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(27, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 25:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(28, [$$V3$$[$$0$$ - 4], $$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 26:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(1, [void 0, $$V3$$[$$0$$]], $$V3$$[$$0$$ - 1]);
        break;
      case 27:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(1, [$$V3$$[$$0$$ - 3], $$V3$$[$$0$$]], $$V3$$[$$0$$ - 1]);
        break;
      case 28:
        var $$V4$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(8, [$$V3$$[$$0$$ - 1]]);
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(1, [$$V3$$[$$0$$ - 5], $$V4$$], $$V3$$[$$0$$ - 3]);
        break;
      case 29:
        $$V4$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(8, [$$V3$$[$$0$$ - 3], $$V3$$[$$0$$ - 1]]);
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(1, [$$V3$$[$$0$$ - 7], $$V4$$], $$V3$$[$$0$$ - 5]);
        break;
      case 30:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(29, [void 0, $$V3$$[$$0$$]]);
        break;
      case 31:
        $$V4$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, [$$V3$$[$$0$$ - 2]]);
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(29, [$$V4$$, $$V3$$[$$0$$]]);
        break;
      case 32:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(29, [$$V3$$[$$0$$ - 3], $$V3$$[$$0$$]]);
        break;
      case 33:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 34:
        this.$$$ = $$V3$$[$$0$$ - 2];
        this.$$$.value.push($$V3$$[$$0$$]);
        break;
      case 35:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(2, []);
        break;
      case 36:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(2, [$$V3$$[$$0$$ - 1]]);
        break;
      case 37:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(3, [$$V3$$[$$0$$ - 1], $$V3$$[$$0$$]]);
        break;
      case 38:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(4, null, $$V3$$[$$0$$]);
        break;
      case 39:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(4, [$$V3$$[$$0$$ - 1]]);
        break;
      case 40:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(5, null, $$V3$$[$$0$$]);
        break;
      case 41:
      case 42:
      case 43:
      case 61:
        this.$$$ = $$V3$$[$$0$$];
        break;
      case 44:
        $$V3$$ = $o$jscomp$1$$.substr(1, $Parser$$ - 2);
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, $$V3$$);
        break;
      case 45:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, Number($o$jscomp$1$$));
        break;
      case 46:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, !0);
        break;
      case 47:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, !1);
        break;
      case 48:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, null);
        break;
      case 49:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(7, []);
        break;
      case 50:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(7, [$$V3$$[$$0$$ - 1]]);
        break;
      case 51:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(7, [$$V3$$[$$0$$ - 2]]);
        break;
      case 52:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(8, [$$V3$$[$$0$$]]);
        break;
      case 53:
      case 58:
        this.$$$ = $$V3$$[$$0$$ - 2];
        this.$$$.args.push($$V3$$[$$0$$]);
        break;
      case 54:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(9, []);
        break;
      case 55:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(9, [$$V3$$[$$0$$ - 1]]);
        break;
      case 56:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(9, [$$V3$$[$$0$$ - 2]]);
        break;
      case 57:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(10, [$$V3$$[$$0$$]]);
        break;
      case 59:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(11, [$$V3$$[$$0$$ - 2], $$V3$$[$$0$$]]);
        break;
      case 60:
        this.$$$ = new $AstNode$$module$extensions$amp_bind$0_1$bind_expr_defines$$(6, null, $$V3$$[$$0$$]);
        break;
      case 62:
        this.$$$ = $$V3$$[$$0$$ - 1];
    }
  }, table:[{3:1, 4:2, 5:[1, 3], 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {1:[3]}, {5:[1, 24], 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 37:40, 38:$$Vr$$}, {1:[2, 2]}, $o$jscomp$1$$($$Vs$$, [2, 3]), $o$jscomp$1$$($$Vs$$, [2, 4]), $o$jscomp$1$$($$Vs$$, 
  [2, 5]), {4:42, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 7]), $o$jscomp$1$$($$Vs$$, [2, 8]), {4:43, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:44, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 
  14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:45, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, $$Vt$$, {30:46, 9:$$Vu$$}), $o$jscomp$1$$($$Vs$$, [2, 41]), $o$jscomp$1$$($$Vs$$, [2, 42]), $o$jscomp$1$$($$Vs$$, [2, 43]), $o$jscomp$1$$($$Vs$$, [2, 44]), $o$jscomp$1$$($$Vs$$, 
  [2, 45]), $o$jscomp$1$$($$Vs$$, [2, 46]), $o$jscomp$1$$($$Vs$$, [2, 47]), $o$jscomp$1$$($$Vs$$, [2, 48]), {29:$$Vv$$, 38:$$Vw$$, 40:53, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 49:[1, 48], 50:49, 51:50, 52:51}, {4:57, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 36:56, 38:$$V5$$, 39:[1, 55], 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {1:[2, 1]}, {4:58, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 
  15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:59, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:60, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:61, 
  6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:62, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:63, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 
  45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:64, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:65, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:66, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 
  38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:67, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:68, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:69, 6:4, 7:5, 8:6, 9:$$V0$$, 
  11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:70, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:71, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 
  47:$$Va$$, 48:$$Vb$$}, {29:[1, 72]}, $o$jscomp$1$$($$Vs$$, [2, 37]), {4:73, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {10:[1, 74], 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 37:40, 38:$$Vr$$}, $o$jscomp$1$$($$Vx$$, [2, 9], {37:40, 31:$$Vq$$, 
  38:$$Vr$$}), $o$jscomp$1$$($$Vx$$, [2, 10], {37:40, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vx$$, [2, 11], {37:40, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vs$$, [2, 26]), {4:57, 6:4, 7:5, 8:6, 9:$$V0$$, 10:$$Vy$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 36:76, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 54]), {33:[1, 78], 49:[1, 77]}, $o$jscomp$1$$($$Vz$$, [2, 57]), {28:[1, 79]}, {28:[2, 60]}, {28:[2, 
  61]}, {4:80, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 49]), {33:[1, 82], 39:[1, 81]}, $o$jscomp$1$$($$VA$$, [2, 52], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VB$$, [2, 12], 
  {37:40, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VB$$, [2, 13], {37:40, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vx$$, [2, 14], {37:40, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vx$$, [2, 15], {37:40, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vx$$, [2, 16], {37:40, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$([5, 10, 19, 20, 27, 28, 33, 39, 49], [2, 17], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 
  24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$([5, 10, 20, 27, 28, 33, 39, 49], [2, 18], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VC$$, [2, 19], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VC$$, [2, 20], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 
  38:$$Vr$$}), $o$jscomp$1$$($$VC$$, [2, 21], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VC$$, [2, 22], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VD$$, [2, 23], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$VD$$, [2, 24], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 
  21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 31:$$Vq$$, 38:$$Vr$$}), {14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 28:[1, 83], 31:$$Vq$$, 37:40, 38:$$Vr$$}, $o$jscomp$1$$($$Vs$$, [2, 38], {30:84, 9:[1, 85]}), {14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 37:40, 38:$$Vr$$, 
  39:[1, 86]}, $o$jscomp$1$$($$Vs$$, [2, 6]), $o$jscomp$1$$($$Vs$$, [2, 35]), {10:[1, 87], 33:[1, 88]}, $o$jscomp$1$$($$Vs$$, [2, 55]), {29:$$Vv$$, 38:$$Vw$$, 40:53, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 49:[1, 89], 51:90, 52:51}, {4:91, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 
  20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 37:40, 38:$$Vr$$, 39:[1, 92]}, $o$jscomp$1$$($$Vs$$, [2, 50]), {4:94, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 39:[1, 93], 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {4:95, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 
  45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 27]), {4:57, 6:4, 7:5, 8:6, 9:[1, 97], 10:$$Vy$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:[1, 98], 32:96, 36:76, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 39]), $o$jscomp$1$$($$Vs$$, [2, 36]), {4:94, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 
  46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$Vs$$, [2, 56]), $o$jscomp$1$$($$Vz$$, [2, 58]), $o$jscomp$1$$($$Vz$$, [2, 59], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), {28:[2, 62]}, $o$jscomp$1$$($$Vs$$, [2, 51]), $o$jscomp$1$$($$VA$$, [2, 53], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 
  23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$([5, 10, 28, 33, 39, 49], [2, 25], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), {10:[1, 99], 33:[1, 100]}, {4:42, 6:4, 7:5, 8:6, 9:$$V0$$, 10:[1, 101], 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:[1, 103], 35:102, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 
  45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 33, 38], $$Vt$$, {30:46, 9:$$Vu$$, 34:[1, 104]}), $o$jscomp$1$$($$Vs$$, [2, 28]), {4:105, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {34:[1, 106]}, {10:[1, 107], 33:[1, 108]}, $o$jscomp$1$$([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 
  25, 26, 27, 31, 38], $$Vt$$, {30:46, 9:$$Vu$$, 33:[1, 109]}), {4:110, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {10:[1, 111], 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 37:40, 38:$$Vr$$}, {4:112, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 
  14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, {34:[1, 113]}, {29:[1, 114]}, {29:[1, 115]}, $o$jscomp$1$$($$VE$$, [2, 31], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), $o$jscomp$1$$($$Vs$$, [2, 29]), $o$jscomp$1$$($$VE$$, [2, 30], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 
  18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$}), {4:116, 6:4, 7:5, 8:6, 9:$$V0$$, 11:8, 12:9, 13:$$V1$$, 14:$$V2$$, 15:$$V3$$, 29:$$V4$$, 38:$$V5$$, 40:14, 41:15, 42:16, 43:$$V6$$, 44:$$V7$$, 45:$$V8$$, 46:$$V9$$, 47:$$Va$$, 48:$$Vb$$}, $o$jscomp$1$$($$VE$$, [2, 34]), $o$jscomp$1$$($$VE$$, [2, 33]), $o$jscomp$1$$($$VE$$, [2, 32], {37:40, 14:$$Vc$$, 15:$$Vd$$, 16:$$Ve$$, 17:$$Vf$$, 18:$$Vg$$, 19:$$Vh$$, 20:$$Vi$$, 
  21:$$Vj$$, 22:$$Vk$$, 23:$$Vl$$, 24:$$Vm$$, 25:$$Vn$$, 26:$$Vo$$, 27:$$Vp$$, 31:$$Vq$$, 38:$$Vr$$})], defaultActions:{3:[2, 2], 24:[2, 1], 52:[2, 60], 53:[2, 61], 92:[2, 62]}, parseError:function($o$jscomp$1$$, $Parser$$) {
    if ($Parser$$.recoverable) {
      this.trace($o$jscomp$1$$);
    } else {
      throw $o$jscomp$1$$ = Error($o$jscomp$1$$), $o$jscomp$1$$.hash = $Parser$$, $o$jscomp$1$$;
    }
  }, parse:function($o$jscomp$1$$) {
    function $Parser$$() {
      var $o$jscomp$1$$ = $$Vb$$.lex() || $$V8$$;
      "number" !== typeof $o$jscomp$1$$ && ($o$jscomp$1$$ = $$V0$$.$symbols_$[$o$jscomp$1$$] || $o$jscomp$1$$);
      return $o$jscomp$1$$;
    }
    var $$V0$$ = this, $$V2$$ = [0], $$V3$$ = [null], $$V1$$ = [], $$V4$$ = this.table, $$V5$$ = "", $$V6$$ = 0, $input$jscomp$9$$ = 0, $$V7$$ = 0, $$V9$$ = 2, $$V8$$ = 1, $$Va$$ = $$V1$$.slice.call(arguments, 1), $$Vb$$ = Object.create(this.lexer), $$Vs$$ = {yy:{}};
    for ($$Vm$$ in this.yy) {
      Object.prototype.hasOwnProperty.call(this.yy, $$Vm$$) && ($$Vs$$.yy[$$Vm$$] = this.yy[$$Vm$$]);
    }
    $$Vb$$.setInput($o$jscomp$1$$, $$Vs$$.yy);
    $$Vs$$.yy.lexer = $$Vb$$;
    $$Vs$$.yy.parser = this;
    "undefined" == typeof $$Vb$$.yylloc && ($$Vb$$.yylloc = {});
    var $$Vq$$ = $$Vb$$.yylloc;
    $$V1$$.push($$Vq$$);
    var $$Vr$$ = $$Vb$$.options && $$Vb$$.options.ranges;
    this.parseError = "function" === typeof $$Vs$$.yy.parseError ? $$Vs$$.yy.parseError : Object.getPrototypeOf(this).parseError;
    for (var $$Ve$$, $$Vf$$, $$Vg$$, $$Vc$$, $$Vd$$ = {}, $$Vj$$, $$Vk$$, $$Vh$$, $$Vi$$;;) {
      $$Vg$$ = $$V2$$[$$V2$$.length - 1];
      if (this.defaultActions[$$Vg$$]) {
        $$Vc$$ = this.defaultActions[$$Vg$$];
      } else {
        if (null === $$Ve$$ || "undefined" == typeof $$Ve$$) {
          $$Ve$$ = $Parser$$();
        }
        $$Vc$$ = $$V4$$[$$Vg$$] && $$V4$$[$$Vg$$][$$Ve$$];
      }
      if ("undefined" === typeof $$Vc$$ || !$$Vc$$.length || !$$Vc$$[0]) {
        var $$Vl$$ = "";
        $$Vi$$ = [];
        for ($$Vj$$ in $$V4$$[$$Vg$$]) {
          this.$terminals_$[$$Vj$$] && $$Vj$$ > $$V9$$ && $$Vi$$.push("'" + this.$terminals_$[$$Vj$$] + "'");
        }
        $$Vl$$ = $$Vb$$.showPosition ? "Parse error on line " + ($$V6$$ + 1) + ":\n" + $$Vb$$.showPosition() + "\nExpecting " + $$Vi$$.join(", ") + ", got '" + (this.$terminals_$[$$Ve$$] || $$Ve$$) + "'" : "Parse error on line " + ($$V6$$ + 1) + ": Unexpected " + ($$Ve$$ == $$V8$$ ? "end of input" : "'" + (this.$terminals_$[$$Ve$$] || $$Ve$$) + "'");
        this.parseError($$Vl$$, {text:$$Vb$$.match, token:this.$terminals_$[$$Ve$$] || $$Ve$$, line:$$Vb$$.yylineno, loc:$$Vq$$, expected:$$Vi$$});
      }
      if ($$Vc$$[0] instanceof Array && 1 < $$Vc$$.length) {
        throw Error("Parse Error: multiple actions possible at state: " + $$Vg$$ + ", token: " + $$Ve$$);
      }
      switch($$Vc$$[0]) {
        case 1:
          $$V2$$.push($$Ve$$);
          $$V3$$.push($$Vb$$.yytext);
          $$V1$$.push($$Vb$$.yylloc);
          $$V2$$.push($$Vc$$[1]);
          $$Ve$$ = null;
          $$Vf$$ ? ($$Ve$$ = $$Vf$$, $$Vf$$ = null) : ($input$jscomp$9$$ = $$Vb$$.yyleng, $$V5$$ = $$Vb$$.yytext, $$V6$$ = $$Vb$$.yylineno, $$Vq$$ = $$Vb$$.yylloc, 0 < $$V7$$ && $$V7$$--);
          break;
        case 2:
          $$Vk$$ = this.$productions_$[$$Vc$$[1]][1];
          $$Vd$$.$$$ = $$V3$$[$$V3$$.length - $$Vk$$];
          $$Vd$$.$_$$ = {first_line:$$V1$$[$$V1$$.length - ($$Vk$$ || 1)].first_line, last_line:$$V1$$[$$V1$$.length - 1].last_line, first_column:$$V1$$[$$V1$$.length - ($$Vk$$ || 1)].first_column, last_column:$$V1$$[$$V1$$.length - 1].last_column};
          $$Vr$$ && ($$Vd$$.$_$$.range = [$$V1$$[$$V1$$.length - ($$Vk$$ || 1)].range[0], $$V1$$[$$V1$$.length - 1].range[1]]);
          var $$Vm$$ = this.performAction.apply($$Vd$$, [$$V5$$, $input$jscomp$9$$, $$V6$$, $$Vs$$.yy, $$Vc$$[1], $$V3$$, $$V1$$].concat($$Va$$));
          if ("undefined" !== typeof $$Vm$$) {
            return $$Vm$$;
          }
          $$Vk$$ && ($$V2$$ = $$V2$$.slice(0, -2 * $$Vk$$), $$V3$$ = $$V3$$.slice(0, -1 * $$Vk$$), $$V1$$ = $$V1$$.slice(0, -1 * $$Vk$$));
          $$V2$$.push(this.$productions_$[$$Vc$$[1]][0]);
          $$V3$$.push($$Vd$$.$$$);
          $$V1$$.push($$Vd$$.$_$$);
          $$Vh$$ = $$V4$$[$$V2$$[$$V2$$.length - 2]][$$V2$$[$$V2$$.length - 1]];
          $$V2$$.push($$Vh$$);
          break;
        case 3:
          return !0;
      }
    }
  }}, $lexer$$ = function() {
    return {EOF:1, parseError:function($o$jscomp$1$$, $Parser$$) {
      if (this.yy.parser) {
        this.yy.parser.parseError($o$jscomp$1$$, $Parser$$);
      } else {
        throw Error($o$jscomp$1$$);
      }
    }, setInput:function($o$jscomp$1$$, $Parser$$) {
      this.yy = $Parser$$ || this.yy || {};
      this._input = $o$jscomp$1$$;
      this._more = this._backtrack = this.done = !1;
      this.yylineno = this.yyleng = 0;
      this.yytext = this.matched = this.match = "";
      this.conditionStack = ["INITIAL"];
      this.yylloc = {first_line:1, first_column:0, last_line:1, last_column:0};
      this.options.ranges && (this.yylloc.range = [0, 0]);
      this.offset = 0;
      return this;
    }, input:function() {
      var $o$jscomp$1$$ = this._input[0];
      this.yytext += $o$jscomp$1$$;
      this.yyleng++;
      this.offset++;
      this.match += $o$jscomp$1$$;
      this.matched += $o$jscomp$1$$;
      var $Parser$$ = $o$jscomp$1$$.match(/(?:\r\n?|\n).*/g);
      $Parser$$ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++;
      this.options.ranges && this.yylloc.range[1]++;
      this._input = this._input.slice(1);
      return $o$jscomp$1$$;
    }, unput:function($o$jscomp$1$$) {
      var $Parser$$ = $o$jscomp$1$$.length, $$V0$$ = $o$jscomp$1$$.split(/(?:\r\n?|\n)/g);
      this._input = $o$jscomp$1$$ + this._input;
      this.yytext = this.yytext.substr(0, this.yytext.length - $Parser$$);
      this.offset -= $Parser$$;
      var $$V2$$ = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1);
      this.matched = this.matched.substr(0, this.matched.length - 1);
      $$V0$$.length - 1 && (this.yylineno -= $$V0$$.length - 1);
      $o$jscomp$1$$ = this.yylloc.range;
      this.yylloc = {first_line:this.yylloc.first_line, last_line:this.yylineno + 1, first_column:this.yylloc.first_column, last_column:$$V0$$ ? ($$V0$$.length === $$V2$$.length ? this.yylloc.first_column : 0) + $$V2$$[$$V2$$.length - $$V0$$.length].length - $$V0$$[0].length : this.yylloc.first_column - $Parser$$};
      this.options.ranges && (this.yylloc.range = [$o$jscomp$1$$[0], $o$jscomp$1$$[0] + this.yyleng - $Parser$$]);
      this.yyleng = this.yytext.length;
      return this;
    }, more:function() {
      this._more = !0;
      return this;
    }, reject:function() {
      if (this.options.backtrack_lexer) {
        this._backtrack = !0;
      } else {
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {text:"", token:null, line:this.yylineno});
      }
      return this;
    }, less:function($o$jscomp$1$$) {
      this.unput(this.match.slice($o$jscomp$1$$));
    }, pastInput:function() {
      var $o$jscomp$1$$ = this.matched.substr(0, this.matched.length - this.match.length);
      return (20 < $o$jscomp$1$$.length ? "..." : "") + $o$jscomp$1$$.substr(-20).replace(/\n/g, "");
    }, upcomingInput:function() {
      var $o$jscomp$1$$ = this.match;
      20 > $o$jscomp$1$$.length && ($o$jscomp$1$$ += this._input.substr(0, 20 - $o$jscomp$1$$.length));
      return ($o$jscomp$1$$.substr(0, 20) + (20 < $o$jscomp$1$$.length ? "..." : "")).replace(/\n/g, "");
    }, showPosition:function() {
      var $o$jscomp$1$$ = this.pastInput(), $Parser$$ = Array($o$jscomp$1$$.length + 1).join("-");
      return $o$jscomp$1$$ + this.upcomingInput() + "\n" + $Parser$$ + "^";
    }, test_match:function($o$jscomp$1$$, $Parser$$) {
      var $$V0$$;
      if (this.options.backtrack_lexer) {
        var $$V2$$ = {yylineno:this.yylineno, yylloc:{first_line:this.yylloc.first_line, last_line:this.last_line, first_column:this.yylloc.first_column, last_column:this.yylloc.last_column}, yytext:this.yytext, match:this.match, matches:this.matches, matched:this.matched, yyleng:this.yyleng, offset:this.offset, _more:this._more, _input:this._input, yy:this.yy, conditionStack:this.conditionStack.slice(0), done:this.done};
        this.options.ranges && ($$V2$$.yylloc.range = this.yylloc.range.slice(0));
      }
      if ($$V0$$ = $o$jscomp$1$$[0].match(/(?:\r\n?|\n).*/g)) {
        this.yylineno += $$V0$$.length;
      }
      this.yylloc = {first_line:this.yylloc.last_line, last_line:this.yylineno + 1, first_column:this.yylloc.last_column, last_column:$$V0$$ ? $$V0$$[$$V0$$.length - 1].length - $$V0$$[$$V0$$.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + $o$jscomp$1$$[0].length};
      this.yytext += $o$jscomp$1$$[0];
      this.match += $o$jscomp$1$$[0];
      this.matches = $o$jscomp$1$$;
      this.yyleng = this.yytext.length;
      this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]);
      this._backtrack = this._more = !1;
      this._input = this._input.slice($o$jscomp$1$$[0].length);
      this.matched += $o$jscomp$1$$[0];
      $o$jscomp$1$$ = this.performAction.call(this, this.yy, this, $Parser$$, this.conditionStack[this.conditionStack.length - 1]);
      this.done && this._input && (this.done = !1);
      if ($o$jscomp$1$$) {
        return $o$jscomp$1$$;
      }
      if (this._backtrack) {
        for (var $$V3$$ in $$V2$$) {
          this[$$V3$$] = $$V2$$[$$V3$$];
        }
      }
      return !1;
    }, next:function() {
      if (this.done) {
        return this.EOF;
      }
      this._input || (this.done = !0);
      var $o$jscomp$1$$;
      this._more || (this.match = this.yytext = "");
      for (var $Parser$$ = this._currentRules(), $$V0$$ = 0; $$V0$$ < $Parser$$.length; $$V0$$++) {
        if (($o$jscomp$1$$ = this._input.match(this.rules[$Parser$$[$$V0$$]])) && (!$$V2$$ || $o$jscomp$1$$[0].length > $$V2$$[0].length)) {
          var $$V2$$ = $o$jscomp$1$$;
          var $$V3$$ = $$V0$$;
          if (this.options.backtrack_lexer) {
            $$V2$$ = this.test_match($o$jscomp$1$$, $Parser$$[$$V0$$]);
            if (!1 !== $$V2$$) {
              return $$V2$$;
            }
            if (this._backtrack) {
              $$V2$$ = !1;
            } else {
              return !1;
            }
          } else {
            if (!this.options.flex) {
              break;
            }
          }
        }
      }
      return $$V2$$ ? ($$V2$$ = this.test_match($$V2$$, $Parser$$[$$V3$$]), !1 !== $$V2$$ ? $$V2$$ : !1) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text:"", token:null, line:this.yylineno});
    }, lex:function() {
      var $o$jscomp$1$$ = this.next();
      return $o$jscomp$1$$ ? $o$jscomp$1$$ : this.lex();
    }, begin:function($o$jscomp$1$$) {
      this.conditionStack.push($o$jscomp$1$$);
    }, popState:function() {
      return 0 < this.conditionStack.length - 1 ? this.conditionStack.pop() : this.conditionStack[0];
    }, _currentRules:function() {
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, topState:function($o$jscomp$1$$) {
      $o$jscomp$1$$ = this.conditionStack.length - 1 - Math.abs($o$jscomp$1$$ || 0);
      return 0 <= $o$jscomp$1$$ ? this.conditionStack[$o$jscomp$1$$] : "INITIAL";
    }, pushState:function($o$jscomp$1$$) {
      this.begin($o$jscomp$1$$);
    }, stateStackSize:function() {
      return this.conditionStack.length;
    }, options:{}, performAction:function($o$jscomp$1$$, $Parser$$, $$V0$$) {
      switch($$V0$$) {
        case 1:
          return 47;
        case 2:
          return 45;
        case 3:
          return 46;
        case 4:
          return 44;
        case 5:
          return 29;
        case 6:
          return 43;
        case 7:
          return 43;
        case 8:
          return 34;
        case 9:
          return 15;
        case 10:
          return 14;
        case 11:
          return 16;
        case 12:
          return 17;
        case 13:
          return 19;
        case 14:
          return 20;
        case 15:
          return 25;
        case 16:
          return 26;
        case 17:
          return 21;
        case 18:
          return 22;
        case 19:
          return 23;
        case 20:
          return 24;
        case 21:
          return 13;
        case 22:
          return 27;
        case 23:
          return 28;
        case 24:
          return 18;
        case 25:
          return 38;
        case 26:
          return 39;
        case 27:
          return 48;
        case 28:
          return 49;
        case 29:
          return 9;
        case 30:
          return 10;
        case 31:
          return 33;
        case 32:
          return 31;
        case 33:
          return "INVALID";
        case 34:
          return 5;
      }
    }, rules:[/^(?:\s+)/, /^(?:null\b)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:[0-9]+(\.[0-9]+)?\b)/, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/, /^(?:'[^']*')/, /^(?:"[^"]*")/, /^(?:=>)/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:&&)/, /^(?:\|\|)/, /^(?:!=)/, /^(?:==)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:!)/, /^(?:\?)/, /^(?::)/, /^(?:%)/, /^(?:\[)/, /^(?:\])/, /^(?:\{)/, /^(?:\})/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\.)/, /^(?:.)/, /^(?:$)/], conditions:{INITIAL:{rules:[0, 1, 2, 3, 4, 5, 6, 
    7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], inclusive:!0}}};
  }();
  $parser$$.lexer = $lexer$$;
  $Parser$$.prototype = $parser$$;
  $parser$$.Parser = $Parser$$;
  return new $Parser$$;
}();
var $FUNCTION_WHITELIST$$module$extensions$amp_bind$0_1$bind_expression$$;
function $generateFunctionWhitelist$$module$extensions$amp_bind$0_1$bind_expression$$() {
  function $splice$$($splice$$, $instanceSplice$$, $sort$$, $whitelist$$) {
    if (!Array.isArray($splice$$)) {
      throw Error("splice: " + $splice$$ + " is not an array.");
    }
    var $out$$ = Array.prototype.slice.call($splice$$), $instanceSort$$ = Array.prototype.slice.call(arguments, 1);
    Array.prototype.splice.apply($out$$, $instanceSort$$);
    return $out$$;
  }
  function $instanceSplice$$() {
    return function($splice$$, $instanceSplice$$, $sort$$) {
      var $whitelist$$ = Array.prototype.slice.call(this);
      Array.prototype.splice.apply($whitelist$$, arguments);
      return $whitelist$$;
    };
  }
  function $sort$$($splice$$) {
    if (!Array.isArray($splice$$)) {
      throw Error("sort: " + $splice$$ + " is not an array.");
    }
    $splice$$ = Array.prototype.slice.call($splice$$);
    Array.prototype.sort.call($splice$$);
    return $splice$$;
  }
  function $instanceSort$$() {
    return function($splice$$) {
      var $instanceSplice$$ = Array.prototype.slice.call(this);
      Array.prototype.sort.call($instanceSplice$$, $splice$$);
      return $instanceSplice$$;
    };
  }
  var $whitelist$$ = $dict$$module$src$utils$object$$({"[object Array]":{concat:Array.prototype.concat, filter:Array.prototype.filter, indexOf:Array.prototype.indexOf, join:Array.prototype.join, lastIndexOf:Array.prototype.lastIndexOf, map:Array.prototype.map, reduce:Array.prototype.reduce, slice:Array.prototype.slice, some:Array.prototype.some, sort:$instanceSort$$(), splice:$instanceSplice$$(), includes:Array.prototype.includes}, "[object Number]":{toExponential:Number.prototype.toExponential, 
  toFixed:Number.prototype.toFixed, toPrecision:Number.prototype.toPrecision, toString:Number.prototype.toString}, "[object String]":{charAt:String.prototype.charAt, charCodeAt:String.prototype.charCodeAt, concat:String.prototype.concat, indexOf:String.prototype.indexOf, lastIndexOf:String.prototype.lastIndexOf, slice:String.prototype.slice, split:String.prototype.split, substr:String.prototype.substr, substring:String.prototype.substring, toLowerCase:String.prototype.toLowerCase, toUpperCase:String.prototype.toUpperCase}});
  $whitelist$$["custom-functions"] = {encodeURI:encodeURI, encodeURIComponent:encodeURIComponent, abs:Math.abs, ceil:Math.ceil, floor:Math.floor, max:Math.max, min:Math.min, random:Math.random, round:Math.round, sign:Math.sign, keys:Object.keys, values:Object.values};
  var $out$$ = $map$$module$src$utils$object$$();
  Object.keys($whitelist$$).forEach(function($splice$$) {
    $out$$[$splice$$] = $map$$module$src$utils$object$$();
    var $instanceSplice$$ = $whitelist$$[$splice$$];
    Object.keys($instanceSplice$$).forEach(function($sort$$) {
      var $whitelist$$ = $instanceSplice$$[$sort$$];
      if ($whitelist$$) {
        $out$$[$splice$$][$sort$$] = $whitelist$$;
      } else {
        throw Error("Unsupported function: " + $splice$$ + "." + $sort$$);
      }
    });
  });
  $out$$["custom-functions"].copyAndSplice = $splice$$;
  $out$$["custom-functions"].sort = $sort$$;
  $out$$["custom-functions"].splice = $splice$$;
  return $out$$;
}
function $BindExpression$$module$extensions$amp_bind$0_1$bind_expression$$($expressionString$$, $macros$$) {
  var $opt_maxAstSize$$;
  $FUNCTION_WHITELIST$$module$extensions$amp_bind$0_1$bind_expression$$ || ($FUNCTION_WHITELIST$$module$extensions$amp_bind$0_1$bind_expression$$ = $generateFunctionWhitelist$$module$extensions$amp_bind$0_1$bind_expression$$());
  this.expressionString = $expressionString$$;
  this.$macros_$ = $macros$$;
  this.$ast_$ = $parser$$module$extensions$amp_bind$0_1$bind_expr_impl$$.parse(this.expressionString);
  this.expressionSize = $JSCompiler_StaticMethods_numberOfNodesInAst_$$(this, this.$ast_$);
  var $maxSize$jscomp$1$$ = $opt_maxAstSize$$ || 100, $skipConstraint$$ = !1;
  if (this.expressionSize > $maxSize$jscomp$1$$ && !$skipConstraint$$) {
    throw Error("Expression size (" + this.expressionSize + ") exceeds max " + ("(" + $maxSize$jscomp$1$$ + "). Please reduce number of operands."));
  }
}
$BindExpression$$module$extensions$amp_bind$0_1$bind_expression$$.prototype.evaluate = function($scope$$) {
  return $JSCompiler_StaticMethods_eval_$$(this, this.$ast_$, $scope$$);
};
function $JSCompiler_StaticMethods_numberOfNodesInAst_$$($JSCompiler_StaticMethods_numberOfNodesInAst_$self$$, $ast$$) {
  if ($JSCompiler_StaticMethods_isMacroInvocationNode_$$($JSCompiler_StaticMethods_numberOfNodesInAst_$self$$, $ast$$)) {
    var $macro$$ = $JSCompiler_StaticMethods_numberOfNodesInAst_$self$$.$macros_$[String($ast$$.value)], $nodes$jscomp$3$$ = $macro$$.getExpressionSize();
    $JSCompiler_StaticMethods_argumentsForInvocation_$$($ast$$).forEach(function($ast$$) {
      $ast$$ && ($nodes$jscomp$3$$ += $JSCompiler_StaticMethods_numberOfNodesInAst_$$($JSCompiler_StaticMethods_numberOfNodesInAst_$self$$, $ast$$) - 1);
    });
    return $nodes$jscomp$3$$;
  }
  var $nodes$1$$ = 1;
  $ast$$.args && $ast$$.args.forEach(function($ast$$) {
    $ast$$ && ($nodes$1$$ += $JSCompiler_StaticMethods_numberOfNodesInAst_$$($JSCompiler_StaticMethods_numberOfNodesInAst_$self$$, $ast$$));
  });
  return $nodes$1$$;
}
function $JSCompiler_StaticMethods_isMacroInvocationNode_$$($JSCompiler_StaticMethods_isMacroInvocationNode_$self$$, $ast$jscomp$1$$) {
  var $isInvocationWithNoCaller$$ = 1 === $ast$jscomp$1$$.type && !$ast$jscomp$1$$.args[0];
  if ($isInvocationWithNoCaller$$) {
    var $macroExistsWithValue$$ = null != $JSCompiler_StaticMethods_isMacroInvocationNode_$self$$.$macros_$[String($ast$jscomp$1$$.value)];
    return $macroExistsWithValue$$;
  }
  return !1;
}
function $JSCompiler_StaticMethods_argumentsForInvocation_$$($ast$jscomp$2$$) {
  var $argsNode$$ = 2 === $ast$jscomp$2$$.args.length && 2 === $ast$jscomp$2$$.args[1].type ? $ast$jscomp$2$$.args[1] : null;
  if ($argsNode$$) {
    var $args$jscomp$3$$ = $argsNode$$.args;
    if (0 === $args$jscomp$3$$.length) {
      return [];
    }
    if (1 === $args$jscomp$3$$.length && 8 === $args$jscomp$3$$[0].type) {
      var $arrayNode$$ = $args$jscomp$3$$[0];
      return $arrayNode$$.args || [];
    }
  }
  return $ast$jscomp$2$$.args || [];
}
function $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $method$jscomp$1_node$jscomp$2_value$jscomp$90$$, $scope$jscomp$1$$) {
  if (!$method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
    return null;
  }
  var $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ = $method$jscomp$1_node$jscomp$2_value$jscomp$90$$.type, $args$jscomp$4$$ = $method$jscomp$1_node$jscomp$2_value$jscomp$90$$.args;
  $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ = $method$jscomp$1_node$jscomp$2_value$jscomp$90$$.value;
  if (6 === $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ && void 0 !== $method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
    return $method$jscomp$1_node$jscomp$2_value$jscomp$90$$;
  }
  switch($params$jscomp$2_target$jscomp$58_type$jscomp$118$$) {
    case 0:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
    case 1:
      var $isBuiltInOrMacro$$ = void 0 === $args$jscomp$4$$[0], $caller$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
      $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
      $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ = String($method$jscomp$1_node$jscomp$2_value$jscomp$90$$);
      var $validFunction$$, $unsupportedError$$;
      if ($isBuiltInOrMacro$$) {
        var $macro$jscomp$1$$ = $JSCompiler_StaticMethods_eval_$self$$.$macros_$[$method$jscomp$1_node$jscomp$2_value$jscomp$90$$];
        ($validFunction$$ = $macro$jscomp$1$$ ? function() {
          return $macro$jscomp$1$$.evaluate($scope$jscomp$1$$, Array.prototype.slice.call(arguments));
        } : $FUNCTION_WHITELIST$$module$extensions$amp_bind$0_1$bind_expression$$["custom-functions"][$method$jscomp$1_node$jscomp$2_value$jscomp$90$$]) || ($unsupportedError$$ = $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ + " is not a supported function.");
      } else {
        if (null === $caller$$) {
          return $user$$module$src$log$$().warn("amp-bind", "Cannot invoke method " + $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ + " on null; returning null."), null;
        }
        var $callerType$$ = Object.prototype.toString.call($caller$$), $whitelist$jscomp$1$$ = $FUNCTION_WHITELIST$$module$extensions$amp_bind$0_1$bind_expression$$[$callerType$$];
        if ($whitelist$jscomp$1$$) {
          var $f$jscomp$1$$ = $caller$$[$method$jscomp$1_node$jscomp$2_value$jscomp$90$$];
          $f$jscomp$1$$ && $f$jscomp$1$$ === $whitelist$jscomp$1$$[$method$jscomp$1_node$jscomp$2_value$jscomp$90$$] ? $validFunction$$ = $f$jscomp$1$$ : ("sort" === $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ || "splice" === $method$jscomp$1_node$jscomp$2_value$jscomp$90$$) && ($validFunction$$ = $whitelist$jscomp$1$$[$method$jscomp$1_node$jscomp$2_value$jscomp$90$$]);
        }
        $validFunction$$ || ($unsupportedError$$ = $callerType$$ + "." + $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ + " is not a supported function.");
      }
      if ($validFunction$$ && Array.isArray($params$jscomp$2_target$jscomp$58_type$jscomp$118$$)) {
        if ("keys" == $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ || "values" == $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ || "splice" == $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ ? 0 : $JSCompiler_StaticMethods_containsObject_$$($params$jscomp$2_target$jscomp$58_type$jscomp$118$$)) {
          throw Error("Unexpected argument type in " + $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ + "().");
        }
        return $validFunction$$.apply($caller$$, $params$jscomp$2_target$jscomp$58_type$jscomp$118$$);
      }
      throw Error($unsupportedError$$);
    case 3:
      $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
      var $member$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
      if (null === $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ || null === $member$$) {
        return null;
      }
      var $targetType$$ = typeof $params$jscomp$2_target$jscomp$58_type$jscomp$118$$;
      if ("string" !== $targetType$$ && "object" !== $targetType$$) {
        return null;
      }
      var $memberType$$ = typeof $member$$;
      return "string" !== $memberType$$ && "number" !== $memberType$$ ? null : $hasOwn_$$module$src$utils$object$$.call($params$jscomp$2_target$jscomp$58_type$jscomp$118$$, String($member$$)) ? $params$jscomp$2_target$jscomp$58_type$jscomp$118$$[$member$$] : null;
    case 4:
      return $method$jscomp$1_node$jscomp$2_value$jscomp$90$$ || $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
    case 5:
      var $variable$$ = $method$jscomp$1_node$jscomp$2_value$jscomp$90$$;
      return $hasOwn_$$module$src$utils$object$$.call($scope$jscomp$1$$, String($variable$$)) ? $scope$jscomp$1$$[$variable$$] : null;
    case 2:
    case 7:
      return 0 < $args$jscomp$4$$.length ? $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) : [];
    case 8:
      return $args$jscomp$4$$.map(function($method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
        return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $method$jscomp$1_node$jscomp$2_value$jscomp$90$$, $scope$jscomp$1$$);
      });
    case 9:
      return 0 < $args$jscomp$4$$.length ? $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) : $map$$module$src$utils$object$$();
    case 10:
      var $object$jscomp$1$$ = $map$$module$src$utils$object$$();
      $args$jscomp$4$$.forEach(function($method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
        var $args$jscomp$4$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $method$jscomp$1_node$jscomp$2_value$jscomp$90$$, $scope$jscomp$1$$);
        $object$jscomp$1$$[$args$jscomp$4$$.k] = $args$jscomp$4$$.v;
      });
      return $object$jscomp$1$$;
    case 11:
      return {k:$JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$), v:$JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$)};
    case 12:
      return !$JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
    case 13:
      return -Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$));
    case 14:
      return +Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$));
    case 15:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) + $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 16:
      return Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$)) - Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$));
    case 17:
      return Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$)) * Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$));
    case 18:
      return Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$)) / Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$));
    case 19:
      return Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$)) % Number($JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$));
    case 20:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) && $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 21:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) || $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 22:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) <= $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 23:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) < $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 24:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) >= $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 25:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) > $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 26:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) != $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 27:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) == $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$);
    case 28:
      return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$) ? $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $scope$jscomp$1$$) : $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[2], $scope$jscomp$1$$);
    case 29:
      var $functionScope$$ = $map$$module$src$utils$object$$($scope$jscomp$1$$);
      return function($method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
        for (var $isBuiltInOrMacro$$ = [], $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ = 0; $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ < arguments.length; ++$params$jscomp$2_target$jscomp$58_type$jscomp$118$$) {
          $isBuiltInOrMacro$$[$params$jscomp$2_target$jscomp$58_type$jscomp$118$$ - 0] = arguments[$params$jscomp$2_target$jscomp$58_type$jscomp$118$$];
        }
        var $validFunction$$ = $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[0], $scope$jscomp$1$$);
        $validFunction$$ && $validFunction$$.forEach(function($JSCompiler_StaticMethods_eval_$self$$, $method$jscomp$1_node$jscomp$2_value$jscomp$90$$) {
          $functionScope$$[$JSCompiler_StaticMethods_eval_$self$$] = $isBuiltInOrMacro$$[$method$jscomp$1_node$jscomp$2_value$jscomp$90$$];
        });
        return $JSCompiler_StaticMethods_eval_$$($JSCompiler_StaticMethods_eval_$self$$, $args$jscomp$4$$[1], $functionScope$$);
      };
    default:
      throw Error("Unexpected AstNodeType: " + $params$jscomp$2_target$jscomp$58_type$jscomp$118$$ + ".");
  }
}
function $JSCompiler_StaticMethods_containsObject_$$($array$jscomp$9$$) {
  for (var $i$jscomp$9$$ = 0; $i$jscomp$9$$ < $array$jscomp$9$$.length; $i$jscomp$9$$++) {
    if ("[object Object]" === $toString_$$module$src$types$$.call($array$jscomp$9$$[$i$jscomp$9$$])) {
      return !0;
    }
  }
  return !1;
}
;function $BindMacro$$module$extensions$amp_bind$0_1$bind_macro$$($data$jscomp$33$$, $referableMacros$$) {
  this.$argumentNames_$ = $data$jscomp$33$$.argumentNames || [];
  this.$expression_$ = new $BindExpression$$module$extensions$amp_bind$0_1$bind_expression$$($data$jscomp$33$$.expressionString, $referableMacros$$);
}
$BindMacro$$module$extensions$amp_bind$0_1$bind_macro$$.prototype.evaluate = function($scope$jscomp$2_state$jscomp$1$$, $args$jscomp$5$$) {
  $scope$jscomp$2_state$jscomp$1$$ = Object.assign({}, $scope$jscomp$2_state$jscomp$1$$);
  for (var $i$jscomp$10$$ = 0; $i$jscomp$10$$ < this.$argumentNames_$.length; $i$jscomp$10$$++) {
    $scope$jscomp$2_state$jscomp$1$$[this.$argumentNames_$[$i$jscomp$10$$]] = $args$jscomp$5$$[$i$jscomp$10$$];
  }
  return this.$expression_$.evaluate($scope$jscomp$2_state$jscomp$1$$);
};
$BindMacro$$module$extensions$amp_bind$0_1$bind_macro$$.prototype.getExpressionSize = function() {
  return this.$expression_$.expressionSize;
};
var $srcsetRegex$$module$src$srcset$$ = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;
function $Srcset$$module$src$srcset$$($sources$jscomp$1$$) {
  $userAssert$$module$src$log$$(0 < $sources$jscomp$1$$.length, "Srcset must have at least one source");
  this.$sources_$ = $sources$jscomp$1$$;
  for (var $hasWidth$$ = !1, $hasDpr$$ = !1, $i$jscomp$11$$ = 0; $i$jscomp$11$$ < $sources$jscomp$1$$.length; $i$jscomp$11$$++) {
    var $source$jscomp$14$$ = $sources$jscomp$1$$[$i$jscomp$11$$];
    $hasWidth$$ = $hasWidth$$ || !!$source$jscomp$14$$.width;
    $hasDpr$$ = $hasDpr$$ || !!$source$jscomp$14$$.dpr;
  }
  $userAssert$$module$src$log$$(!!($hasWidth$$ ^ $hasDpr$$), "Srcset must have width or dpr sources, but not both");
  $sources$jscomp$1$$.sort($hasWidth$$ ? $sortByWidth$$module$src$srcset$$ : $sortByDpr$$module$src$srcset$$);
  this.$widthBased_$ = $hasWidth$$;
}
$Srcset$$module$src$srcset$$.prototype.select = function($JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$, $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$) {
  if (this.$widthBased_$) {
    $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$ *= $JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$;
    $JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$ = this.$sources_$;
    for (var $JSCompiler_minIndex$jscomp$inline_46_JSCompiler_minIndex$jscomp$inline_56$$ = 0, $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$ = Infinity, $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$ = Infinity, $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$ = 0; $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$ < $JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$.length; $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$++) {
      var $JSCompiler_sWidth$jscomp$inline_50$$ = $JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$[$JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$].width, $JSCompiler_score$jscomp$inline_51$$ = Math.abs($JSCompiler_sWidth$jscomp$inline_50$$ - $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$);
      if ($JSCompiler_score$jscomp$inline_51$$ <= 1.1 * $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$ || 1.2 < $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$ / $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$) {
        $JSCompiler_minIndex$jscomp$inline_46_JSCompiler_minIndex$jscomp$inline_56$$ = $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$, $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$ = $JSCompiler_score$jscomp$inline_51$$, $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$ = $JSCompiler_sWidth$jscomp$inline_50$$;
      } else {
        break;
      }
    }
  } else {
    for ($JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$ = this.$sources_$, $JSCompiler_minIndex$jscomp$inline_46_JSCompiler_minIndex$jscomp$inline_56$$ = 0, $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$ = Infinity, $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$ = 0; $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$ < $JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$.length; $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$++) {
      if ($JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$ = Math.abs($JSCompiler_sources$jscomp$inline_45_JSCompiler_sources$jscomp$inline_55_width$jscomp$13$$[$JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$].dpr - $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$), $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$ <= $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$) {
        $JSCompiler_minIndex$jscomp$inline_46_JSCompiler_minIndex$jscomp$inline_56$$ = $JSCompiler_i$jscomp$inline_58_JSCompiler_minWidth$jscomp$inline_48$$, $JSCompiler_minScore$jscomp$inline_47_JSCompiler_minScore$jscomp$inline_57$$ = $JSCompiler_i$jscomp$inline_49_JSCompiler_score$jscomp$inline_59$$;
      } else {
        break;
      }
    }
  }
  $JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$ = $JSCompiler_minIndex$jscomp$inline_46_JSCompiler_minIndex$jscomp$inline_56$$;
  return this.$sources_$[$JSCompiler_temp$jscomp$12_JSCompiler_width$jscomp$inline_44_dpr$jscomp$1$$].url;
};
$Srcset$$module$src$srcset$$.prototype.getUrls = function() {
  return this.$sources_$.map(function($s$jscomp$5$$) {
    return $s$jscomp$5$$.url;
  });
};
$Srcset$$module$src$srcset$$.prototype.stringify = function($opt_mapper$$) {
  for (var $res$$ = [], $sources$jscomp$4$$ = this.$sources_$, $i$jscomp$14$$ = 0; $i$jscomp$14$$ < $sources$jscomp$4$$.length; $i$jscomp$14$$++) {
    var $source$jscomp$15$$ = $sources$jscomp$4$$[$i$jscomp$14$$], $src$jscomp$3$$ = $source$jscomp$15$$.url;
    $opt_mapper$$ && ($src$jscomp$3$$ = $opt_mapper$$($src$jscomp$3$$));
    $src$jscomp$3$$ = this.$widthBased_$ ? $src$jscomp$3$$ + (" " + $source$jscomp$15$$.width + "w") : $src$jscomp$3$$ + (" " + $source$jscomp$15$$.dpr + "x");
    $res$$.push($src$jscomp$3$$);
  }
  return $res$$.join(", ");
};
function $sortByWidth$$module$src$srcset$$($s1$$, $s2$$) {
  $userAssert$$module$src$log$$($s1$$.width != $s2$$.width, "Duplicate width: %s", $s1$$.width);
  return $s1$$.width - $s2$$.width;
}
function $sortByDpr$$module$src$srcset$$($s1$jscomp$1$$, $s2$jscomp$1$$) {
  $userAssert$$module$src$log$$($s1$jscomp$1$$.dpr != $s2$jscomp$1$$.dpr, "Duplicate dpr: %s", $s1$jscomp$1$$.dpr);
  return $s1$jscomp$1$$.dpr - $s2$jscomp$1$$.dpr;
}
;function $startsWith$$module$src$string$$($string$jscomp$7$$, $prefix$jscomp$2$$) {
  return $prefix$jscomp$2$$.length > $string$jscomp$7$$.length ? !1 : 0 == $string$jscomp$7$$.lastIndexOf($prefix$jscomp$2$$, 0);
}
;var $GLOBAL_PROPERTY_RULES$$module$extensions$amp_bind$0_1$bind_validator$$ = {"class":{blacklistedValueRegex:"(^|\\W)i-amphtml-"}, hidden:null, text:null}, $AMP_PROPERTY_RULES$$module$extensions$amp_bind$0_1$bind_validator$$ = {width:null, height:null}, $ELEMENT_RULES$$module$extensions$amp_bind$0_1$bind_validator$$ = {"AMP-BRIGHTCOVE":{"data-account":null, "data-embed":null, "data-player":null, "data-player-id":null, "data-playlist-id":null, "data-video-id":null}, "AMP-CAROUSEL":{slide:null}, "AMP-DATE-PICKER":{max:null, 
min:null, src:{allowedProtocols:{https:!0}}}, "AMP-GOOGLE-DOCUMENT-EMBED":{src:null, title:null}, "AMP-IFRAME":{src:null}, "AMP-IMG":{alt:null, attribution:null, src:{allowedProtocols:{data:!0, http:!0, https:!0}}, srcset:{alternativeName:"src"}}, "AMP-LIGHTBOX":{open:null}, "AMP-LIST":{src:{allowedProtocols:{https:!0}}, state:null, "is-layout-container":null}, "AMP-SELECTOR":{disabled:null, selected:null}, "AMP-STATE":{src:{allowedProtocols:{https:!0}}}, "AMP-TIMEAGO":{datetime:null, title:null}, 
"AMP-VIDEO":{alt:null, attribution:null, controls:null, loop:null, poster:null, preload:null, src:{allowedProtocols:{https:!0}}}, "AMP-YOUTUBE":{"data-videoid":null}, A:{href:{allowedProtocols:{ftp:!0, http:!0, https:!0, mailto:!0, "fb-messenger":!0, intent:!0, skype:!0, sms:!0, snapchat:!0, tel:!0, tg:!0, threema:!0, twitter:!0, viber:!0, whatsapp:!0}}}, BUTTON:{disabled:null, type:null, value:null}, DETAILS:{open:null}, FIELDSET:{disabled:null}, IMAGE:{"xlink:href":{allowedProtocols:{http:!0, https:!0}}}, 
INPUT:{accept:null, accesskey:null, autocomplete:null, checked:null, disabled:null, height:null, inputmode:null, max:null, maxlength:null, min:null, minlength:null, multiple:null, pattern:null, placeholder:null, readonly:null, required:null, selectiondirection:null, size:null, spellcheck:null, step:null, type:{blacklistedValueRegex:"(^|\\s)(button|image|)(\\s|$)"}, value:null, width:null}, OPTION:{disabled:null, label:null, selected:null, value:null}, OPTGROUP:{disabled:null, label:null}, SELECT:{autofocus:null, 
disabled:null, multiple:null, required:null, size:null}, SOURCE:{src:{allowedProtocols:{https:!0}}, type:null}, TRACK:{label:null, src:{allowedProtocols:{https:!0}}, srclang:null}, TEXTAREA:{autocomplete:null, autofocus:null, cols:null, disabled:null, maxlength:null, minlength:null, placeholder:null, readonly:null, required:null, rows:null, selectiondirection:null, selectionend:null, selectionstart:null, spellcheck:null, wrap:null}}, $URL_PROPERTIES$$module$extensions$amp_bind$0_1$bind_validator$$ = 
{src:!0, srcset:!0, href:!0, "xlink:href":!0};
function $BindValidator$$module$extensions$amp_bind$0_1$bind_validator$$($allowUrlBindings$$) {
  this.$allowUrlBindings_$ = $allowUrlBindings$$;
}
$BindValidator$$module$extensions$amp_bind$0_1$bind_validator$$.prototype.canBind = function($tag$jscomp$7$$, $property$jscomp$4$$) {
  return void 0 !== $JSCompiler_StaticMethods_rulesForTagAndProperty_$$(this, $tag$jscomp$7$$, $property$jscomp$4$$);
};
$BindValidator$$module$extensions$amp_bind$0_1$bind_validator$$.prototype.isResultValid = function($JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$, $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$, $value$jscomp$91$$) {
  var $rules$jscomp$1$$ = $JSCompiler_StaticMethods_rulesForTagAndProperty_$$(this, $JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$, $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$);
  $rules$jscomp$1$$ && $rules$jscomp$1$$.alternativeName && ($rules$jscomp$1$$ = $JSCompiler_StaticMethods_rulesForTagAndProperty_$$(this, $JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$, $rules$jscomp$1$$.alternativeName));
  if (void 0 === $rules$jscomp$1$$) {
    return !1;
  }
  if (null === $rules$jscomp$1$$) {
    return !0;
  }
  if ($value$jscomp$91$$ && $ownProperty$$module$src$utils$object$$($URL_PROPERTIES$$module$extensions$amp_bind$0_1$bind_validator$$, $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$)) {
    if ("srcset" === $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$) {
      try {
        $JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$ = [];
        for (var $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$; $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$ = $srcsetRegex$$module$src$srcset$$.exec($value$jscomp$91$$);) {
          var $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$[1], $JSCompiler_dpr$jscomp$inline_66$$ = $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$ = void 0;
          if ($JSCompiler_match$jscomp$inline_63_i$jscomp$17$$[2]) {
            var $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$ = $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$[3].toLowerCase();
            if ("w" == $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$) {
              $JSCompiler_width$jscomp$inline_65_property$jscomp$5$$ = parseInt($JSCompiler_match$jscomp$inline_63_i$jscomp$17$$[2], 10);
            } else {
              if ("x" == $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$) {
                $JSCompiler_dpr$jscomp$inline_66$$ = parseFloat($JSCompiler_match$jscomp$inline_63_i$jscomp$17$$[2]);
              } else {
                continue;
              }
            }
          } else {
            $JSCompiler_dpr$jscomp$inline_66$$ = 1;
          }
          $JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$.push({url:$JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$, width:$JSCompiler_width$jscomp$inline_65_property$jscomp$5$$, dpr:$JSCompiler_dpr$jscomp$inline_66$$});
        }
        var $srcset$$ = new $Srcset$$module$src$srcset$$($JSCompiler_sources$jscomp$inline_62_tag$jscomp$8$$);
      } catch ($e$jscomp$10$$) {
        return $user$$module$src$log$$().error("amp-bind", "Failed to parse srcset: ", $e$jscomp$10$$), !1;
      }
      var $urls$$ = $srcset$$.getUrls();
    } else {
      $urls$$ = [$value$jscomp$91$$];
    }
    for ($JSCompiler_match$jscomp$inline_63_i$jscomp$17$$ = 0; $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$ < $urls$$.length; $JSCompiler_match$jscomp$inline_63_i$jscomp$17$$++) {
      a: {
        $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$ = $urls$$[$JSCompiler_match$jscomp$inline_63_i$jscomp$17$$];
        $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = $rules$jscomp$1$$;
        if ($JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$) {
          if (/__amp_source_origin/.test($JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$)) {
            $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = !1;
            break a;
          }
          if ($JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$.allowedProtocols) {
            if ($JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$ = /^([^:\/?#.]+):[\s\S]*$/.exec($JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$), null !== $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$ && ($JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$ = 
            $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$[1].toLowerCase().trim(), !$hasOwn_$$module$src$utils$object$$.call($JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$, $JSCompiler_match$jscomp$inline_73_JSCompiler_protocol$jscomp$inline_74_JSCompiler_type$jscomp$inline_67_JSCompiler_url$jscomp$inline_70$$))) {
              $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = !1;
              break a;
            }
          }
        }
        $JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$ = !0;
      }
      if (!$JSCompiler_allowedProtocols$jscomp$inline_72_JSCompiler_inline_result$jscomp$13_JSCompiler_rules$jscomp$inline_71_JSCompiler_url$jscomp$inline_64$$) {
        return !1;
      }
    }
  }
  var $blacklistedValueRegex$$ = $rules$jscomp$1$$.blacklistedValueRegex;
  if ($value$jscomp$91$$ && $blacklistedValueRegex$$) {
    var $re$$ = new RegExp($blacklistedValueRegex$$, "i");
    if ($re$$.test($value$jscomp$91$$)) {
      return !1;
    }
  }
  return !0;
};
function $JSCompiler_StaticMethods_rulesForTagAndProperty_$$($JSCompiler_StaticMethods_rulesForTagAndProperty_$self$$, $tag$jscomp$9$$, $property$jscomp$6$$) {
  if ($startsWith$$module$src$string$$($property$jscomp$6$$, "aria-")) {
    return null;
  }
  if (!$ownProperty$$module$src$utils$object$$($URL_PROPERTIES$$module$extensions$amp_bind$0_1$bind_validator$$, $property$jscomp$6$$) || $JSCompiler_StaticMethods_rulesForTagAndProperty_$self$$.$allowUrlBindings_$) {
    var $globalRules$$ = $ownProperty$$module$src$utils$object$$($GLOBAL_PROPERTY_RULES$$module$extensions$amp_bind$0_1$bind_validator$$, $property$jscomp$6$$);
    if (void 0 !== $globalRules$$) {
      return $globalRules$$;
    }
    var $ampPropertyRules$$ = $ownProperty$$module$src$utils$object$$($AMP_PROPERTY_RULES$$module$extensions$amp_bind$0_1$bind_validator$$, $property$jscomp$6$$);
    if ($startsWith$$module$src$string$$($tag$jscomp$9$$, "AMP-") && void 0 !== $ampPropertyRules$$) {
      return $ampPropertyRules$$;
    }
    var $tagRules$$ = $ownProperty$$module$src$utils$object$$($ELEMENT_RULES$$module$extensions$amp_bind$0_1$bind_validator$$, $tag$jscomp$9$$);
    if ($tagRules$$) {
      return $tagRules$$[$property$jscomp$6$$];
    }
  }
}
;function $remove$$module$src$utils$array$$($array$jscomp$10$$, $shouldRemove$$) {
  for (var $index$jscomp$57$$ = 0, $i$jscomp$19$$ = 0; $i$jscomp$19$$ < $array$jscomp$10$$.length; $i$jscomp$19$$++) {
    var $item$$ = $array$jscomp$10$$[$i$jscomp$19$$];
    $shouldRemove$$($item$$, $i$jscomp$19$$, $array$jscomp$10$$) || ($index$jscomp$57$$ < $i$jscomp$19$$ && ($array$jscomp$10$$[$index$jscomp$57$$] = $item$$), $index$jscomp$57$$++);
  }
  $index$jscomp$57$$ < $array$jscomp$10$$.length && ($array$jscomp$10$$.length = $index$jscomp$57$$);
}
;function $BindEvaluator$$module$extensions$amp_bind$0_1$bind_evaluator$$($allowUrlProperties$$) {
  this.$bindings_$ = [];
  this.$macros_$ = Object.create(null);
  this.$validator_$ = new $BindValidator$$module$extensions$amp_bind$0_1$bind_validator$$($allowUrlProperties$$);
  this.$expressions_$ = Object.create(null);
}
$JSCompiler_prototypeAlias$$ = $BindEvaluator$$module$extensions$amp_bind$0_1$bind_evaluator$$.prototype;
$JSCompiler_prototypeAlias$$.addBindings = function($bindings$$) {
  var $$jscomp$this$jscomp$2$$ = this, $errors$$ = Object.create(null);
  $bindings$$.forEach(function($bindings$$) {
    var $parsed$$ = $JSCompiler_StaticMethods_parse_$$($$jscomp$this$jscomp$2$$, $bindings$$.expressionString);
    $parsed$$.error ? $errors$$[$bindings$$.expressionString] = $parsed$$.error : $$jscomp$this$jscomp$2$$.$bindings_$.push($bindings$$);
  });
  return $errors$$;
};
$JSCompiler_prototypeAlias$$.removeBindingsWithExpressionStrings = function($expressionStrings$$) {
  var $$jscomp$this$jscomp$3$$ = this, $expressionsToRemove$$ = Object.create(null);
  $expressionStrings$$.forEach(function($expressionStrings$$) {
    delete $$jscomp$this$jscomp$3$$.$expressions_$[$expressionStrings$$];
    $expressionsToRemove$$[$expressionStrings$$] = !0;
  });
  $remove$$module$src$utils$array$$(this.$bindings_$, function($expressionStrings$$) {
    return !!$expressionsToRemove$$[$expressionStrings$$.expressionString];
  });
};
$JSCompiler_prototypeAlias$$.addMacros = function($macros$jscomp$1$$) {
  var $$jscomp$this$jscomp$4$$ = this, $errors$jscomp$1$$ = [];
  $macros$jscomp$1$$.forEach(function($macros$jscomp$1$$, $index$jscomp$58$$) {
    var $referableMacros$jscomp$1$$ = Object.assign(Object.create(null), $$jscomp$this$jscomp$4$$.$macros_$);
    try {
      $$jscomp$this$jscomp$4$$.$macros_$[$macros$jscomp$1$$.id] = new $BindMacro$$module$extensions$amp_bind$0_1$bind_macro$$($macros$jscomp$1$$, $referableMacros$jscomp$1$$);
    } catch ($e$jscomp$12$$) {
      $errors$jscomp$1$$[$index$jscomp$58$$] = {message:$e$jscomp$12$$.message, stack:$e$jscomp$12$$.stack};
    }
  });
  return $errors$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.evaluateBindings = function($scope$jscomp$3$$) {
  var $$jscomp$this$jscomp$5$$ = this, $cache$$ = Object.create(null), $errors$jscomp$2$$ = Object.create(null);
  this.$bindings_$.forEach(function($binding$jscomp$2_expressionString$jscomp$2$$) {
    $binding$jscomp$2_expressionString$jscomp$2$$ = $binding$jscomp$2_expressionString$jscomp$2$$.expressionString;
    if (void 0 === $cache$$[$binding$jscomp$2_expressionString$jscomp$2$$] && !$errors$jscomp$2$$[$binding$jscomp$2_expressionString$jscomp$2$$]) {
      var $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$ = $$jscomp$this$jscomp$5$$.$expressions_$[$binding$jscomp$2_expressionString$jscomp$2$$];
      if ($$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$) {
        $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$ = $JSCompiler_StaticMethods_evaluate_$$($$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$, $scope$jscomp$3$$);
        var $result$$ = $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$.result;
        ($$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$ = $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$.error) ? $errors$jscomp$2$$[$binding$jscomp$2_expressionString$jscomp$2$$] = $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$ : $cache$$[$binding$jscomp$2_expressionString$jscomp$2$$] = $result$$;
      } else {
        $$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$ = Error('Expression "' + $binding$jscomp$2_expressionString$jscomp$2$$ + '"" is not cached.'), $errors$jscomp$2$$[$binding$jscomp$2_expressionString$jscomp$2$$] = {message:$$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$.message, stack:$$jscomp$destructuring$var10_error$3_error$jscomp$12_expression$jscomp$2$$.stack};
      }
    }
  });
  this.$bindings_$.forEach(function($scope$jscomp$3$$) {
    var $binding$jscomp$3_expressionString$jscomp$3$$ = $scope$jscomp$3$$.tagName, $property$jscomp$7$$ = $scope$jscomp$3$$.property;
    $scope$jscomp$3$$ = $scope$jscomp$3$$.expressionString;
    var $result$jscomp$1$$ = $cache$$[$scope$jscomp$3$$];
    if (void 0 !== $result$jscomp$1$$) {
      a: {
        if (null === $result$jscomp$1$$) {
          var $JSCompiler_inline_result$jscomp$14$$ = null;
        } else {
          switch($property$jscomp$7$$) {
            case "text":
              break;
            case "class":
              if (Array.isArray($result$jscomp$1$$)) {
                $JSCompiler_inline_result$jscomp$14$$ = $result$jscomp$1$$.join(" ");
                break a;
              }
              break;
            default:
              if ("boolean" === typeof $result$jscomp$1$$) {
                $JSCompiler_inline_result$jscomp$14$$ = $result$jscomp$1$$ ? "" : null;
                break a;
              }
          }
          $JSCompiler_inline_result$jscomp$14$$ = String($result$jscomp$1$$);
        }
      }
      var $resultString$$ = $JSCompiler_inline_result$jscomp$14$$;
      $$jscomp$this$jscomp$5$$.$validator_$.isResultValid($binding$jscomp$3_expressionString$jscomp$3$$, $property$jscomp$7$$, $resultString$$) || (delete $cache$$[$scope$jscomp$3$$], $binding$jscomp$3_expressionString$jscomp$3$$ = Error('"' + $result$jscomp$1$$ + '" is not a valid result for [' + $property$jscomp$7$$ + "]."), $errors$jscomp$2$$[$scope$jscomp$3$$] = {message:$binding$jscomp$3_expressionString$jscomp$3$$.message, stack:$binding$jscomp$3_expressionString$jscomp$3$$.stack});
    }
  });
  return {results:$cache$$, errors:$errors$jscomp$2$$};
};
$JSCompiler_prototypeAlias$$.evaluateExpression = function($expressionString$jscomp$4_parsed$jscomp$1$$, $scope$jscomp$4$$) {
  $expressionString$jscomp$4_parsed$jscomp$1$$ = $JSCompiler_StaticMethods_parse_$$(this, $expressionString$jscomp$4_parsed$jscomp$1$$);
  if (!$expressionString$jscomp$4_parsed$jscomp$1$$.expression) {
    return {result:null, error:$expressionString$jscomp$4_parsed$jscomp$1$$.error};
  }
  var $evaluated$$ = $JSCompiler_StaticMethods_evaluate_$$($expressionString$jscomp$4_parsed$jscomp$1$$.expression, $scope$jscomp$4$$);
  return $evaluated$$.result ? {result:$evaluated$$.result, error:null} : {result:null, error:$evaluated$$.error};
};
function $JSCompiler_StaticMethods_parse_$$($JSCompiler_StaticMethods_parse_$self$$, $expressionString$jscomp$5$$) {
  var $expression$jscomp$3$$ = $JSCompiler_StaticMethods_parse_$self$$.$expressions_$[$expressionString$jscomp$5$$], $error$jscomp$14$$ = null;
  if (!$expression$jscomp$3$$) {
    try {
      $expression$jscomp$3$$ = new $BindExpression$$module$extensions$amp_bind$0_1$bind_expression$$($expressionString$jscomp$5$$, $JSCompiler_StaticMethods_parse_$self$$.$macros_$), $JSCompiler_StaticMethods_parse_$self$$.$expressions_$[$expressionString$jscomp$5$$] = $expression$jscomp$3$$;
    } catch ($e$jscomp$13$$) {
      $error$jscomp$14$$ = {message:$e$jscomp$13$$.message, stack:$e$jscomp$13$$.stack};
    }
  }
  return {expression:$expression$jscomp$3$$, error:$error$jscomp$14$$};
}
function $JSCompiler_StaticMethods_evaluate_$$($expression$jscomp$4$$, $scope$jscomp$5$$) {
  var $result$jscomp$2$$ = null, $error$jscomp$15$$ = null;
  try {
    $result$jscomp$2$$ = $expression$jscomp$4$$.evaluate($scope$jscomp$5$$);
  } catch ($e$jscomp$14$$) {
    $error$jscomp$15$$ = {message:$e$jscomp$14$$.message, stack:$e$jscomp$14$$.stack};
  }
  return {result:$result$jscomp$2$$, error:$error$jscomp$15$$};
}
$JSCompiler_prototypeAlias$$.$bindingsForTesting$ = function() {
  return this.$bindings_$;
};
$JSCompiler_prototypeAlias$$.$expressionsForTesting$ = function() {
  return this.$expressions_$;
};
function $exponentialBackoffClock$$module$src$exponential_backoff$$($opt_base$jscomp$2$$) {
  var $base$jscomp$2$$ = $opt_base$jscomp$2$$ || 2, $count$jscomp$14$$ = 0;
  return function() {
    var $opt_base$jscomp$2$$ = Math.pow($base$jscomp$2$$, $count$jscomp$14$$++);
    var $JSCompiler_jitter$jscomp$inline_82_JSCompiler_opt_perc$jscomp$inline_81$$ = $opt_base$jscomp$2$$ * ($JSCompiler_jitter$jscomp$inline_82_JSCompiler_opt_perc$jscomp$inline_81$$ || .3) * Math.random();
    .5 < Math.random() && ($JSCompiler_jitter$jscomp$inline_82_JSCompiler_opt_perc$jscomp$inline_81$$ *= -1);
    $opt_base$jscomp$2$$ += $JSCompiler_jitter$jscomp$inline_82_JSCompiler_opt_perc$jscomp$inline_81$$;
    return 1000 * $opt_base$jscomp$2$$;
  };
}
;var $env$$module$src$config$$ = self.AMP_CONFIG || {}, $urls$$module$src$config$$ = {thirdParty:$env$$module$src$config$$.thirdPartyUrl || "https://3p.ampproject.net", thirdPartyFrameHost:$env$$module$src$config$$.thirdPartyFrameHost || "ampproject.net", thirdPartyFrameRegex:("string" == typeof $env$$module$src$config$$.thirdPartyFrameRegex ? new RegExp($env$$module$src$config$$.thirdPartyFrameRegex) : $env$$module$src$config$$.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/, cdn:$env$$module$src$config$$.cdnUrl || 
"https://cdn.ampproject.org", cdnProxyRegex:("string" == typeof $env$$module$src$config$$.cdnProxyRegex ? new RegExp($env$$module$src$config$$.cdnProxyRegex) : $env$$module$src$config$$.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/, localhostRegex:/^https?:\/\/localhost(:\d+)?$/, errorReporting:$env$$module$src$config$$.errorReportingUrl || "https://amp-error-reporting.appspot.com/r", localDev:$env$$module$src$config$$.localDev || !1};
(function() {
  $logConstructor$$module$src$log$$ = $Log$$module$src$log$$;
  $dev$$module$src$log$$();
  $user$$module$src$log$$();
})();
var $backoff_$$module$src$web_worker$web_worker$$ = function($opt_base$jscomp$1$$) {
  var $getTimeout$$ = $exponentialBackoffClock$$module$src$exponential_backoff$$($opt_base$jscomp$1$$);
  return function($opt_base$jscomp$1$$) {
    return setTimeout($opt_base$jscomp$1$$, $getTimeout$$());
  };
}(1.5);
function $errorHandler_$$module$src$web_worker$web_worker$$($event$jscomp$1$$) {
  $backoff_$$module$src$web_worker$web_worker$$(function() {
    return $report_$$module$src$web_worker$web_worker$$($event$jscomp$1$$.reason);
  });
}
var $evaluators_$$module$src$web_worker$web_worker$$ = [];
self.addEventListener("unhandledrejection", $errorHandler_$$module$src$web_worker$web_worker$$);
self.addEventListener("error", $errorHandler_$$module$src$web_worker$web_worker$$);
self.addEventListener("message", function($event$jscomp$2_method$jscomp$4$$) {
  var $$jscomp$destructuring$var12_scope$jscomp$6$$ = $event$jscomp$2_method$jscomp$4$$.data;
  $event$jscomp$2_method$jscomp$4$$ = $$jscomp$destructuring$var12_scope$jscomp$6$$.method;
  var $args$jscomp$6$$ = $$jscomp$destructuring$var12_scope$jscomp$6$$.args, $id$jscomp$6$$ = $$jscomp$destructuring$var12_scope$jscomp$6$$.id;
  $$jscomp$destructuring$var12_scope$jscomp$6$$ = $$jscomp$destructuring$var12_scope$jscomp$6$$.scope;
  "bind.init" === $event$jscomp$2_method$jscomp$4$$ || $evaluators_$$module$src$web_worker$web_worker$$[$$jscomp$destructuring$var12_scope$jscomp$6$$] || ($dev$$module$src$log$$().error("web-worker", "Missing evaluator for scope: %s", $$jscomp$destructuring$var12_scope$jscomp$6$$), $evaluators_$$module$src$web_worker$web_worker$$[$$jscomp$destructuring$var12_scope$jscomp$6$$] = new $BindEvaluator$$module$extensions$amp_bind$0_1$bind_evaluator$$(!0));
  var $evaluator$$ = $evaluators_$$module$src$web_worker$web_worker$$[$$jscomp$destructuring$var12_scope$jscomp$6$$];
  switch($event$jscomp$2_method$jscomp$4$$) {
    case "bind.init":
      if ($evaluator$$) {
        $dev$$module$src$log$$().error("web-worker", "Evaluator already exists for scope:", $$jscomp$destructuring$var12_scope$jscomp$6$$);
        var $returnValue$$ = !1;
      } else {
        $evaluators_$$module$src$web_worker$web_worker$$[$$jscomp$destructuring$var12_scope$jscomp$6$$] = new $BindEvaluator$$module$extensions$amp_bind$0_1$bind_evaluator$$($args$jscomp$6$$[0]), $returnValue$$ = !0;
      }
      break;
    case "bind.addBindings":
      $returnValue$$ = $evaluator$$.addBindings.apply($evaluator$$, $args$jscomp$6$$);
      break;
    case "bind.removeBindingsWithExpressionStrings":
      var $removeBindings$$ = $evaluator$$.removeBindingsWithExpressionStrings;
      $returnValue$$ = $removeBindings$$.apply($evaluator$$, $args$jscomp$6$$);
      break;
    case "bind.addMacros":
      $returnValue$$ = $evaluator$$.addMacros.apply($evaluator$$, $args$jscomp$6$$);
      break;
    case "bind.evaluateBindings":
      $returnValue$$ = $evaluator$$.evaluateBindings.apply($evaluator$$, $args$jscomp$6$$);
      break;
    case "bind.evaluateExpression":
      $returnValue$$ = $evaluator$$.evaluateExpression.apply($evaluator$$, $args$jscomp$6$$);
      break;
    default:
      $dev$$module$src$log$$().error("web-worker", "Unrecognized method: %s", $event$jscomp$2_method$jscomp$4$$);
  }
  self.postMessage({method:$event$jscomp$2_method$jscomp$4$$, returnValue:$returnValue$$, id:$id$jscomp$6$$});
});
function $report_$$module$src$web_worker$web_worker$$($e$jscomp$15_url$jscomp$23$$) {
  if (!$urls$$module$src$config$$.localhostRegex.test(self.location.origin)) {
    $e$jscomp$15_url$jscomp$23$$ instanceof Error || ($e$jscomp$15_url$jscomp$23$$ = Error($e$jscomp$15_url$jscomp$23$$));
    var $config$jscomp$2$$ = self.AMP_CONFIG || {};
    $e$jscomp$15_url$jscomp$23$$ = $urls$$module$src$config$$.errorReporting + "?ww=1&v=" + encodeURIComponent($config$jscomp$2$$.v) + "&m=" + encodeURIComponent($e$jscomp$15_url$jscomp$23$$.message) + "&ca=" + ($config$jscomp$2$$.canary ? 1 : 0) + "&s=" + encodeURIComponent($e$jscomp$15_url$jscomp$23$$.stack || "");
    fetch($e$jscomp$15_url$jscomp$23$$, {mode:"no-cors"}).catch(function($e$jscomp$15_url$jscomp$23$$) {
      console.error($e$jscomp$15_url$jscomp$23$$);
    });
  }
}
;})();
//# sourceMappingURL=ww.js.map

