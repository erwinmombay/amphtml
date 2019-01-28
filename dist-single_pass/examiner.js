(function(){isLongTaskApiSupported(self) && detectLongTasks(self);
function detectLongTasks($win$$) {
  var $observer$$ = new $win$$.PerformanceObserver(function($win$$) {
    for (var $entries$$ = $win$$.getEntries(), $i$jscomp$3$$ = 0; $i$jscomp$3$$ < $entries$$.length; $i$jscomp$3$$++) {
      if ("longtask" == $entries$$[$i$jscomp$3$$].entryType && "cross-origin-descendant" == $entries$$[$i$jscomp$3$$].name) {
        var $attr$$ = $entries$$[$i$jscomp$3$$].attribution[0];
        if ($attr$$ && $attr$$.containerSrc) {
          var $observer$$ = $entries$$[$i$jscomp$3$$].duration, $culprit$$ = $attr$$.containerSrc;
          if ($attr$$.containerName) {
            var $match$$ = $attr$$.containerName.match(/"type":"([^"]*)"/);
            1 < $match$$.length && ($culprit$$ = '<amp-ad type="' + $match$$[1] + '">');
          }
          console.log("%c LONG TASK %c " + $observer$$ + "ms from " + $culprit$$, "background: red; color: white", "background: #fff; color: #000");
        }
      }
    }
  });
  $observer$$.observe({entryTypes:["longtask"]});
}
function isLongTaskApiSupported($win$jscomp$1$$) {
  return !!$win$jscomp$1$$.PerformanceObserver && !!$win$jscomp$1$$.TaskAttributionTiming && "containerName" in $win$jscomp$1$$.TaskAttributionTiming.prototype;
}
;})();
//# sourceMappingURL=examiner.js.map

