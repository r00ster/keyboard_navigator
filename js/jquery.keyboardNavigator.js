(function($) {
    $.keyboardNavigator = function(element) {
        var $elements = $(element);
        var idx = 0;
        var distance;

        // Allow moving up/down from current element in view
        $(window).bind('scroll', function() {
            $elements.each(function() {
                var $elem = $(this);
                distance = $elem.offset().top - $(window).scrollTop();
                if(distance >= 0) {
                    idx = $elements.index($elem);
                    return false;
                }
            });
        });

        $(document).keydown(function(e) {
            if (e.keyCode == '37' || e.keyCode == '75') {
                // left arrow
                e.preventDefault();
                if(idx > 0) {
                    var $prev = $elements.eq(idx - 1);
                    var topOffset = $prev.offset().top;
                    $(window).scrollTop(topOffset);
                }
            } else if (e.keyCode == '39' || e.keyCode == '74') {
                // right arrow
                e.preventDefault();
                if(idx < ($elements.length)) {
                    var nextIdx = distance < 1 ? 1 : 0;
                    var $next = $elements.eq(idx + nextIdx);
                    var topOffset = $next.offset().top;
                    $(window).scrollTop(topOffset);
                }
            }
        });
    };
}(jQuery));
