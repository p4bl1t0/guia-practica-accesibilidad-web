/*
*	Función "menuGb" se llama sobre los selectores de menu normal y seleccionado,
*	ej: $('.toggleMenuTitle, .toggleMenuTitle-on').menuGb();
*	Acepta 10 parámetros: 
*	'menuWrapTitle' (nombre de la clase de menu wrap normal clickeable), 'menuWrapTitleOn' (nombre de la clase de menu wrap seleccionado clickeable)
*	'menuWrap' (nombre de la clase del div que engloba todo el menu que va a hacer toggle), 'menuWrapClassState' (el estado de inicio del menu gral, abierto o cerrado),
*	'menuClass' (nombre de la clase de menu normal), 'menuClassOn' (nombre de la clase de menu seleccionado),
*	'menuCont' (nombre de la clase del contenedor del <ul>), 'menuFlecha' y 'menuFlechaOn' (las posiciones de la flecha indicativa de menu activo off y on respectivamente)
*	y 'speed' (la velocidad en milisegundos del toggle). Las 10 tienen asignaciones por default pero pueden cambiarse.
*	Ejemplo de estructura:
*	<h2 class="toggleMenuWrapTitle-on"><div class="toggleMenuFlecha-on">CATEGORÍAS</h2>
*	<div class="toggleMenuWrap">
*		<div class="toggleMenuTitle" id="toggleMenu_1">Mi menu</div>
*		<div class="toggleMenu" id="menu_toggleMenu_1">
*			<ul>
*				<li></li>
*			</ul>
*		</div>
*	</div>
*	Dentro de los nombres, debe respetarse el prefijo "menu_" en el id del contenedor del <ul>
*	asi como el sufijo "_1" donde 1 es el numero identificador entre el contenedor y el menu,
*	que debe tener el mismo sufijo en su id como lo muestra el ejemplo de la estructura.
*/
(function($){
	$.fn.menuGb = function(options){
		var settings = $.extend({
			'menuWrapTitle'			:	'toggleMenuWrapTitle',
			'menuWrapTitleOn'		:	'toggleMenuWrapTitle-on',
			'menuWrapClassState'	:	'off',
			'menuWrap'				:	'toggleMenuWrap',
			'menuClass'				:	'toggleMenuTitle',
			'menuClassOn'			:	'toggleMenuTitle-on',
			'menuCont'				: 	'toggleMenu',
			'menuFlecha'			:	'toggleMenuFlecha',
			'menuFlechaOn'			:	'toggleMenuFlecha-on',			
			'speed'					:	200,
			'sombraMenu'			:	0
		}, options);				

		var cat_activa = '';
		var speed = settings.speed;
		
		if(settings.menuWrapClassState == 'on'){
			$('.'+settings.menuWrap).slideDown(speed);
			$('.'+settings.menuFlecha).attr('class', settings.menuFlechaOn);
			$('.'+settings.menuWrapTitle).attr('class', settings.menuWrapTitleOn);
			if(settings.sombraMenu) $('.'+settings.menuWrapTitleOn).parent().addClass("mod_menuCategorias_masInfo");
		}		
		$('.'+settings.menuWrapTitleOn).live('click', function(){
			$('.'+settings.menuWrap).slideUp(speed);
			$('.'+settings.menuFlechaOn).attr('class', settings.menuFlecha);
			$(this).attr('class', settings.menuWrapTitle);
			if(settings.sombraMenu) $(this).parent().removeClass("mod_menuCategorias_masInfo");
		});
		$('.'+settings.menuWrapTitle).live('click', function(){
			$('.'+settings.menuWrap).slideDown(speed);
			$('.'+settings.menuFlecha).attr('class', settings.menuFlechaOn);
			$(this).attr('class', settings.menuWrapTitleOn);
			if(settings.sombraMenu) $('.'+settings.menuWrapTitleOn).parent().addClass("mod_menuCategorias_masInfo");
		});		
		
		this.live('click', function(){
			var menuClass = settings.menuClass;
			var menuClassOn = settings.menuClassOn;
			var menuCont = settings.menuCont;
			var cat_activa_orig = cat_activa;
			var new_cat_activa = $(this).attr('id').split("_"); new_cat_activa = new_cat_activa[1];
			var new_class_activa = $(this).attr('class');
			if(cat_activa != '' && cat_activa != new_cat_activa){
				$('#menu_'+menuCont+'_'+cat_activa).prev().attr('class', menuClass);
				cat_activa = new_cat_activa;
			}else if(cat_activa == ''){
				cat_activa = new_cat_activa;
				cat_activa_orig = new_cat_activa;
			}

			if($('#menu_'+menuCont+'_'+cat_activa).prev().attr('class') == menuClass){
				$('#menu_'+menuCont+'_'+cat_activa).prev().attr('class', menuClassOn);
				$('#menu_'+menuCont+'_'+cat_activa).slideDown(speed);
				if(cat_activa_orig != cat_activa){
					$('#menu_'+menuCont+'_'+cat_activa_orig).slideUp(speed);			
					$('#menu_'+menuCont+'_'+cat_activa_orig).prev().attr('class', menuClass);
				}
			}else{
				$('#menu_'+menuCont+'_'+cat_activa).prev().attr('class', menuClass);
				$('#menu_'+menuCont+'_'+cat_activa_orig).slideUp(speed);
				if(cat_activa_orig != cat_activa){							
					$('#menu_'+menuCont+'_'+cat_activa_orig).prev().attr('class', menuClass);
				}			
			}	
		});
	};
})(jQuery);