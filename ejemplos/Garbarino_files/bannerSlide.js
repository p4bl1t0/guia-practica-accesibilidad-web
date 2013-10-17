/**	Función "bannerSlide" se llama sobre los selectores de menu normal y seleccionado,* 	ej: $('#Contbanner').bannerSlide();*	Acepta 2 parámetros: *	'velocidad' (la velocidad en milisegundos del fade).*	'nombreBanner' (es el id del contenedor del banner).*	'cycleAnimationTime' (el tiempo de duracion de cada slide).*	Ejemplo de estructura:*	<div id="Contbanner" class="bannerSlideWrap">*		<div class="bannerSlideNav">*			<ul>*				<li id="menu_1" class="itemNav selected">Banner 1</li>*				<li id="menu_2" class="itemNav">Banner 2</li>*				<li id="menu_3" class="itemNav">Banner 3</li>*			</ul> *		</div>*		<div class="bannerSlideContent">*			<div id="banner_1" class="banner" style="display:block"> BANNER 1</div>*			<div id="banner_2" class="banner"> BANNER 2</div>*			<div id="banner_3" class="banner"> BANNER 3</div>*		</div>*	</div>**/(function($){	$.fn.bannerSlide = function(options){		var settings = $.extend({			'posicion'				:	1,			'velocidad'				:	100,			'nombreBanner'			:	'Contbanner',			'cycleAnimationTime'	:	5000		}, options);				var nombreBanner = settings.nombreBanner;		var elementos = $("#"+nombreBanner+" .itemNav").size();		var automatico = '';		var posicion = settings.posicion;				$("#"+nombreBanner+" .itemNav").live("click", function(){						clearInterval(automatico);						var itemActivo = $("#"+nombreBanner+" .selected").attr("id");            if(itemActivo != undefined){                var elem = itemActivo.split("_");                var activo = elem[1];                var idItem = $(this).attr("id");                var elem1 = idItem.split("_");                var item = elem1[1];                posicion = item;                if(itemActivo != idItem){                    $("#"+nombreBanner+" #"+itemActivo).removeClass("selected");                    $(this).addClass("selected");                    $("#"+nombreBanner+" #banner_"+activo).fadeOut( settings.velocidad, function() {                        $("#"+nombreBanner+" #banner_"+item).fadeIn();                    });                }            }		});				$.fn.muevo = function muevo(){			posicion++;			if(posicion > elementos){				posicion = 1;					}						itemActivo = $("#"+nombreBanner+" .selected").attr("id");            if(itemActivo != undefined){                elem = itemActivo.split("_");                activo = elem[1];                var newActivo = parseInt(activo) + 1;                if(newActivo > elementos){                    newActivo = 1;                }                if(activo != newActivo){                    $("#"+nombreBanner+" #"+itemActivo).removeClass("selected");                    $("#"+nombreBanner+" #menu_"+newActivo).addClass("selected");                    $("#"+nombreBanner+" #banner_"+activo).fadeOut( settings.velocidad, function(){                        $("#"+nombreBanner+" #banner_"+newActivo).fadeIn();                    });                }            }		}				$.fn.empieza = function empieza(){			automatico = setInterval($.fn.muevo, settings.cycleAnimationTime);		}		$.fn.empieza();	};	})(jQuery);	