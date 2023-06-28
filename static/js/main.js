$(function(){
 
	resize();
	$(window).resize(function(event) {
		resize();
	});
	$('.timer').each(count);
	$(".ul_tag li").click(function () {
	    $(this).addClass("on").siblings().removeClass("on");

	})
	$(".wow_list .wow").each(function (e) {
	    $(this).attr("data-wow-delay", ($(this).index() / 10) + "s");
	})

	$(".banner").each(function () {
	    if ($(this).find(".item").length > 1) {
	        var owl = $(this).find(".owl").owlCarousel({ items: 1, loop: true, autoplay: true });
	        owl.on('changed.owl.carousel', function (event) {
	            owl.find(".animated").each(function () { $(this).removeClass($(this).attr("data-animation")); })
	            owl.find(".owl-item").eq(event.item.index).find(".animated").each(function () { $(this).addClass($(this).attr("data-animation")); });
	        })
	        $(".banner_cur .prev").click(function () { owl.trigger("prev.owl.carousel") });
	        $(".banner_cur .next").click(function () { owl.trigger("next.owl.carousel") });
	    }
	})
	$(".banner .owl-item").eq(2).find(".animated").each(function () {
	    $(this).addClass($(this).attr("data-animation"));
	})
	$(window).scroll(function () {
	    $(".animated").each(function () {
	        if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 80)
	            $(this).removeClass($(this).attr("data-animation"));
	        else
	            $(this).addClass($(this).attr("data-animation"));
	    })

	    if ($(window).scrollTop() > 30) {
	        $(".header").addClass("fixed");
	    }
	    else { $(".header").removeClass("fixed"); }
	})


	$(".menu_wrap").click(function () { $(".header").toggleClass("h_menu") });


	$(window).load(function () {
	    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
	        new WOW().init();
	    }
	})

	if ($(".pro_owl .item").length > 1) { $(".pro_owl .owl").owlCarousel({ items: 1, dots: false, nav: true, navText: ["", ""], loop: true }) };
	$(".pro_list ul").removeClass("on").eq($(".page_tag li.on").index()).addClass("on");
	$(".page_tag ul li").click(function () {
	    $(this).addClass("on").siblings().removeClass("on");
	    $(".pro_list ul").removeClass("on").eq($(".page_tag li.on").index()).addClass("on");
	})

	if ($(".details .owl .item").length > 1) { $(".details .owl").owlCarousel({ items: 1, loop: true, autoplay: true }) }
});

/*main*/
//

function font() {


}


/*call*/
//
function resize(){
	var ht=$(window).height();
	 
}

$.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
        
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from: $(this).data('from'),
            to: $(this).data('to'),
            speed: $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals: $(this).data('decimals')
        }, options);

        
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

        
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

        $self.data('countTo', data);

       
        if (data.interval) {
            clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        
        render(value);

        function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof (settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;

                if (typeof (settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value);
                }
            }
        }

        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,               
    to: 0,                
    speed: 1000,           
    refreshInterval: 100,  
    decimals: 0,           
    formatter: formatter,  
    onUpdate: null,       
    onComplete: null       
};
function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
}
function formatter(value, settings) {
    return value.toFixed(settings.decimals);
}