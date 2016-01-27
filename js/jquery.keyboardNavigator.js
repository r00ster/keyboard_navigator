(function($) {
    $.keyboardNavigator = function(element) {
        var $elements = $(element);
        var idx = 0;

        $(window).bind('scroll', function() {
            $elements.each(function() {
                var elem = $(this);
                var position = elem.position().top - $(window).scrollTop();

                if (position <= 0) {
                    elem.addClass('closest');
                } else {
                    elem.removeClass('closest');
                }
            });
        });

        $(document).keyup(function(e) {
            if (e.keyCode == '37') {
                // left arrow
                e.preventDefault();
                if(idx !== 0) {
                    var prev = $elements.eq(--idx);
                    var topOffset = prev.offset().top;
                    $(window).scrollTop(topOffset);
                }
            } else if (e.keyCode == '39') {
                // right arrow
                e.preventDefault();
                if(idx !== ($elements.length - 1)) {
                    var next = $elements.eq(++idx);
                    var topOffset = next.offset().top;
                    $(window).scrollTop(topOffset);
                }
            }
        });
    };
}(jQuery));
