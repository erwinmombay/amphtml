var $EMPTY_METADATA$$module$src$mediasession_helper$$ = {
    title: "",
    artist: "",
    album: "",
    artwork: [{
            src: ""
        }
    ]
};

function $setMediaSession$$module$src$mediasession_helper$$($win$jscomp$13$$, $metadata$$, $playHandler$$, $pauseHandler$$) {
    var $navigator$jscomp$1$$ = $win$jscomp$13$$.navigator;
    "mediaSession" in $navigator$jscomp$1$$ && $win$jscomp$13$$.o && ($navigator$jscomp$1$$.b.metadata = new $win$jscomp$13$$.o($EMPTY_METADATA$$module$src$mediasession_helper$$), $validateMetadata$$module$src$mediasession_helper$$($metadata$$), $navigator$jscomp$1$$.b.metadata = new $win$jscomp$13$$.o($metadata$$), $navigator$jscomp$1$$.b.setActionHandler("play",
        $playHandler$$), $navigator$jscomp$1$$.b.setActionHandler("pause", $pauseHandler$$))
}

function $parseSchemaImage$$module$src$mediasession_helper$$($doc$jscomp$16$$) {
    var $schema$$ = $doc$jscomp$16$$.querySelector('script[type="application/ld+json"]');
    if ($schema$$) {
        var $schemaJson$$ = $tryParseJson$$module$src$json$$($schema$$.textContent);
        if ($schemaJson$$ && $schemaJson$$.image) {
            if ("string" === typeof $schemaJson$$.image) return $schemaJson$$.image;
            if ($schemaJson$$.image["@list"] && "string" === typeof $schemaJson$$.image["@list"][0]) return $schemaJson$$.image["@list"][0];
            if ("string" === typeof $schemaJson$$.image.url) return $schemaJson$$.image.url;
            if ("string" === typeof $schemaJson$$.image[0]) return $schemaJson$$.image[0]
        }
    }
}

function $parseOgImage$$module$src$mediasession_helper$$($doc$jscomp$17$$) {
    var $metaTag$$ = $doc$jscomp$17$$.querySelector('meta[property="og:image"]');
    if ($metaTag$$) return $metaTag$$.getAttribute("content")
}

function $parseFavicon$$module$src$mediasession_helper$$($doc$jscomp$18$$) {
    var $linkTag$$ = $doc$jscomp$18$$.querySelector('link[rel="shortcut icon"]') || $doc$jscomp$18$$.querySelector('link[rel="icon"]');
    if ($linkTag$$) return $linkTag$$.getAttribute("href")
}

function $validateMetadata$$module$src$mediasession_helper$$($metadata$jscomp$1$$) {
    $metadata$jscomp$1$$ && $metadata$jscomp$1$$.artwork && ($isArray$$module$src$types$$($metadata$jscomp$1$$.artwork), $metadata$jscomp$1$$.artwork.forEach(function($metadata$jscomp$1$$) {
        if ($metadata$jscomp$1$$) {
            var $artwork$$ = $isObject$$module$src$types$$($metadata$jscomp$1$$) ? $metadata$jscomp$1$$.src : $metadata$jscomp$1$$;
            $user$$module$src$log$$().$Log$$module$src$log_prototype$assert$($isProtocolValid$$module$src$url$$($artwork$$))
        }
    }))
};
var $module$extensions$amp_audio$0_1$amp_audio$$ = {};

function $AmpAudio$$module$extensions$amp_audio$0_1$amp_audio$$($$jscomp$super$this_element$jscomp$41$$) {
    $$jscomp$super$this_element$jscomp$41$$ = self.AMP.BaseElement.call(this, $$jscomp$super$this_element$jscomp$41$$) || this;
    $$jscomp$super$this_element$jscomp$41$$.$audio_$ = null;
    $$jscomp$super$this_element$jscomp$41$$.$metadata_$ = $EMPTY_METADATA$$module$src$mediasession_helper$$;
    $$jscomp$super$this_element$jscomp$41$$.isPlaying = !1;
    return $$jscomp$super$this_element$jscomp$41$$
}
$$jscomp$inherits$$($AmpAudio$$module$extensions$amp_audio$0_1$amp_audio$$, self.AMP.BaseElement);
$JSCompiler_prototypeAlias$$ = $AmpAudio$$module$extensions$amp_audio$0_1$amp_audio$$.prototype;
$JSCompiler_prototypeAlias$$.isLayoutSupported = function($layout$jscomp$3$$) {
    return "fixed" == $layout$jscomp$3$$ || "fixed-height" == $layout$jscomp$3$$
};
$JSCompiler_prototypeAlias$$.buildCallback = function() {
    this.registerAction("play", this.$play_$.bind(this));
    this.registerAction("pause", this.$pause_$.bind(this))
};
$JSCompiler_prototypeAlias$$.layoutCallback = function() {
    var $$jscomp$this$jscomp$1$$ = this,
        $audio$$ = this.element.ownerDocument.createElement("audio");
    if (!$audio$$.play) return this.toggleFallback(!0), Promise.resolve();
    $audio$$.controls = !0;
    var $src$jscomp$7_title$jscomp$10$$ = this.element.getAttribute("src");
    $src$jscomp$7_title$jscomp$10$$ && $assertHttpsUrl$$module$src$url$$($src$jscomp$7_title$jscomp$10$$, this.element);
    this.propagateAttributes("src preload autoplay muted loop aria-label aria-describedby aria-labelledby controlsList".split(" "),
        $audio$$);
    this.applyFillContent($audio$$);
    this.getRealChildNodes().forEach(function($$jscomp$this$jscomp$1$$) {
        $$jscomp$this$jscomp$1$$.getAttribute && $$jscomp$this$jscomp$1$$.getAttribute("src") && $assertHttpsUrl$$module$src$url$$($$jscomp$this$jscomp$1$$.getAttribute("src"), $$jscomp$this$jscomp$1$$);
        $audio$$.appendChild($$jscomp$this$jscomp$1$$)
    });
    this.element.appendChild($audio$$);
    this.$audio_$ = $audio$$;
    var $artwork$jscomp$1_document$jscomp$1$$ = this.getAmpDoc().win.document,
        $artist$$ = this.element.getAttribute("artist") ||
            "",
        $src$jscomp$7_title$jscomp$10$$ = this.element.getAttribute("title") || this.element.getAttribute("aria-label") || $artwork$jscomp$1_document$jscomp$1$$.title || "",
        $album$$ = this.element.getAttribute("album") || "",
        $artwork$jscomp$1_document$jscomp$1$$ = this.element.getAttribute("artwork") || $parseSchemaImage$$module$src$mediasession_helper$$($artwork$jscomp$1_document$jscomp$1$$) || $parseOgImage$$module$src$mediasession_helper$$($artwork$jscomp$1_document$jscomp$1$$) || $parseFavicon$$module$src$mediasession_helper$$($artwork$jscomp$1_document$jscomp$1$$) ||
            "";
    this.$metadata_$ = {
        title: $src$jscomp$7_title$jscomp$10$$,
        artist: $artist$$,
        album: $album$$,
        artwork: [{
                src: $artwork$jscomp$1_document$jscomp$1$$
            }
        ]
    };
    $listen$$module$src$event_helper$$(this.$audio_$, "playing", function() {
        return $JSCompiler_StaticMethods_audioPlaying_$$($$jscomp$this$jscomp$1$$)
    });
    return this.loadPromise($audio$$)
};
$JSCompiler_prototypeAlias$$.pauseCallback = function() {
    this.$audio_$ && this.$audio_$.pause()
};

function $JSCompiler_StaticMethods_isInvocationValid_$$($JSCompiler_StaticMethods_isInvocationValid_$self$$) {
    return $JSCompiler_StaticMethods_isInvocationValid_$self$$.$audio_$ ? $closestByTag$$module$src$dom$$($JSCompiler_StaticMethods_isInvocationValid_$self$$.element, "AMP-STORY") ? ($user$$module$src$log$$().$Log$$module$src$log_prototype$warn$("amp-audio", "<amp-story> elements do not support actions on <amp-audio> elements"), !1) : !0 : !1
}
$JSCompiler_prototypeAlias$$.$pause_$ = function() {
    $JSCompiler_StaticMethods_isInvocationValid_$$(this) && this.$audio_$.pause()
};
$JSCompiler_prototypeAlias$$.$play_$ = function() {
    $JSCompiler_StaticMethods_isInvocationValid_$$(this) && this.$audio_$.play()
};

function $JSCompiler_StaticMethods_audioPlaying_$$($JSCompiler_StaticMethods_audioPlaying_$self$$) {
    $setMediaSession$$module$src$mediasession_helper$$($JSCompiler_StaticMethods_audioPlaying_$self$$.getAmpDoc().win, $JSCompiler_StaticMethods_audioPlaying_$self$$.$metadata_$, function() {
        $JSCompiler_StaticMethods_audioPlaying_$self$$.$audio_$.play()
    }, function() {
        $JSCompiler_StaticMethods_audioPlaying_$self$$.$audio_$.pause()
    })
}(function($AMP$jscomp$1$$) {
    $AMP$jscomp$1$$.registerElement("amp-audio", $AmpAudio$$module$extensions$amp_audio$0_1$amp_audio$$)
})(self.AMP);
$module$extensions$amp_audio$0_1$amp_audio$$.AmpAudio = $AmpAudio$$module$extensions$amp_audio$0_1$amp_audio$$;
(self._S = self._S || [])["//extensions/amp-audio/0.1/amp-audio.js"] = $module$extensions$amp_audio$0_1$amp_audio$$;
