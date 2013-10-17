jQuery.fn.simpleSlide = function(a){

	a				= a || {};
	a.duration		= a.duration || 5000;
	a.transition	= a.transition || 1000;
	a.stopAt		= a.stopAt || false;
	a.element		= a.element || "a";

	var	c	= $(this);

	$(c).css("position","relative");

	$(a.element,$(c))
		.css({
			'position'	: 'absolute',
			'top'		: '0px',
			'left'		: '0px',
			'z-index'	: '8',
			})
		.find(":first")
			.addClass("slideNew-active")
			.css({'z-index':'10'});

	var cnt			= 0;

	var interval	= setInterval(function(){

			if(!isNaN(a.stopAt)){
				cnt++;
				if(cnt==a.stopAt){
					clearTimeout(interval);
				}
			}

			var $active = $(a.element+".slideNew-active",$(c));

			if($active.length == 0) $active = $(a.element+":last",$(c));

			var $next	= $active.next().length ? $active.next() : $(a.element+":first",$(c));

			$active
				.addClass("slideNew-last-active")
				.css('z-index','9');

			$next
				.css({opacity: 0.0})
				.addClass("slideNew-active")
				.css('z-index','10')
				.animate({opacity: 1.0}, a.transition, function(){
					$active
						.removeClass('slideNew-active slideNew-last-active')
						.css('z-index','8');
				});
		}, a.duration);

}