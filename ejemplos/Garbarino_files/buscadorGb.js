(function($){
	$.fn.buscadorGb = function(options){
		var settings = $.extend({
			'buscadorBtnClass'			:	'buscadorBtn',
			'buscadorContClass'			: 	'buscadorGb',
			'buscadorClass'				: 	'buscador',
			'sugerenciaClass'			: 	'sugerencia',
			'liveSugerenciaClass'		: 	'liveSugerencia',
			'liveSugerenciaHoverClass'	: 	'liveSugerenciaHover',
			'liveSugerenciaItem'		: 	'liveSugerenciaItem_',
			'busquedasUrl'				:	'http://www.garbarino.com/buscadorGB.php?q=',
			'tipoBusqueda'				:   'buscadorProductos'
		}, options);
		
		var buscadorBtnClass = settings.buscadorBtnClass;
		var buscadorContClass = settings.buscadorContClass;
		//var buscadorContId = "buscadorGb_"+settings.buscadorContId;
		var buscadorContId = $(this).attr("id");
		var buscadorClass = settings.buscadorClass;
		var sugerenciaClass = settings.sugerenciaClass;
		var liveSugerenciaClass = settings.liveSugerenciaClass;
		var liveSugerenciaItem = settings.liveSugerenciaItem;
		var liveSugerenciaHoverClass = settings.liveSugerenciaHoverClass;
		var busquedasUrl = settings.busquedasUrl;		
		var tipoBusqueda = settings.tipoBusqueda;		
		
		//console.log(tipoBusqueda+" - id:"+buscadorContId);
		
		$("#"+buscadorContId).attr('autocomplete', 'off');

		var seleccionActual = 0;
		var cantElem = '';
		var mouse_is_inside = false;
		
							
		$("#"+buscadorContId).find("."+sugerenciaClass).hover(function(){ 
			mouse_is_inside = true;
		}, function(){ 
			mouse_is_inside = false; 
		});

		$("html").mouseup(function(){
			if(!mouse_is_inside) {
				$("#"+buscadorContId).find("."+sugerenciaClass).empty();
				$("#"+buscadorContId).find("."+sugerenciaClass).css("display","none");
				seleccionActual = 0;		
			}
		});							

		$("#"+buscadorContId).find("."+buscadorClass).keydown(function(e){
			switch (e.keyCode) {
				// flecha "arriba"
				case 38:
					e.preventDefault();									
					$.fn.navegar('arriba', buscadorContId);
				break;
				// flecha "abajo"
				case 40:
					e.preventDefault();									
					$.fn.navegar('abajo', buscadorContId);
				break;
				case 13:
					if($("#"+buscadorContId).find("."+liveSugerenciaHoverClass).size() > 0){
						var busquedaMasInfo = $("."+liveSugerenciaHoverClass+" a").attr("href");
						window.location.href = busquedaMasInfo;
					}else{
						var busqueda = $(this).val();
						if(busqueda != '' && busqueda != undefined){
							window.location.href = busquedasUrl+busqueda;
						}		
					}
				break;
			}      
		});	

		$("#"+buscadorContId).find("."+buscadorClass).keyup(function(e){
			var buscar;
			buscar = $(this).val();
			
			if(e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 16 && e.keyCode != 13 && e.keyCode != 32){ //bloqueo flechas up/down, shift, enter y la barra espaciadora para evitar busquedas demas.
				if (buscar.length > 0){
					if (buscar.length >= 2){
						$("#"+buscadorContId).find("."+sugerenciaClass).css({"display":"block","height":"45px"});			
						$("#"+buscadorContId).find("."+sugerenciaClass).html('<div style="height:16px;text-align:center;margin:13px auto 0;"><img src="/images/ajax-loader-sugerencias.gif"/></div>');		
						$.fn.buscarConAjax(buscar, tipoBusqueda, buscadorContId);
					}	
				}else{
					$("#"+buscadorContId).find("."+sugerenciaClass).empty();
					$("#"+buscadorContId).find("."+sugerenciaClass).css("display","none");
					seleccionActual = 0;
				} 
			}
		});

		$("."+liveSugerenciaHoverClass+" a").live('click', function(e){
			sugerencia = $("."+buscadorClass).text();
			$("#"+buscadorContId).find("."+buscadorClass).val(sugerencia); //nombre
			$("#"+buscadorContId).find("."+sugerenciaClass).empty();
			$("#"+buscadorContId).find("."+sugerenciaClass).css("display","none");
			seleccionActual = 0;
		});
		$("#"+buscadorContId).find("."+liveSugerenciaClass).live({mouseenter: function(){
				$(this).addClass(liveSugerenciaHoverClass);
			}, mouseleave: function(){
				$(this).removeClass(liveSugerenciaHoverClass);
			}
		});
		
		$("#"+buscadorContId).parent().find("."+buscadorBtnClass).click(function(e){
			var busqueda = $("#"+buscadorContId).find("."+buscadorClass).val();
			if(busqueda != '' && busqueda != undefined){
				window.location.href = busquedasUrl+busqueda;			
			}
		});
		
		$.fn.navegar = function(direccion, buscadorContId){
			// algun item seleccionado?
			if($("#"+buscadorContId).find("."+liveSugerenciaHoverClass).size() == 0) {
				seleccionActual = -1;
			}else{
				var id = $("#"+buscadorContId).find("."+liveSugerenciaHoverClass).attr("id"); id = id.split("_"); id = id[1];
				seleccionActual = id;
			}
		   
			if(direccion == 'arriba' && seleccionActual != -1) {
				if(seleccionActual >= 1) {
					seleccionActual--;
				}else{
					seleccionActual = cantElem - 1;
				}
			} else if (direccion == 'abajo') {
				if(seleccionActual != $("#"+buscadorContId).find("."+liveSugerenciaClass).size() -1) {
					seleccionActual++;
				}else{
					seleccionActual = 0;
				}
			}
			$.fn.seleccionarSugerencia(seleccionActual, buscadorContId);
		}

		$.fn.seleccionarSugerencia = function(seleccion, buscadorContId){
		   $("#"+buscadorContId).find("."+liveSugerenciaClass).removeClass(liveSugerenciaHoverClass);
		   $("#"+buscadorContId).find("#"+liveSugerenciaItem+seleccion).addClass(liveSugerenciaHoverClass);
		   var sugerencia = $("#"+buscadorContId).find("#"+liveSugerenciaItem+seleccion+" a").text();
		   $("#"+buscadorContId).find("."+buscadorClass).val(sugerencia);
		}

		/* variable que guarda el ajax para cancelar busquedas previas */
		var busquedaAjax = null;

		$.fn.buscarConAjax = function(buscar, tipoBusqueda, buscadorContId){
			/* si existe otra busqueda, la abortamos y dejamos la var en null */
			if( busquedaAjax != null ) {
				busquedaAjax.abort();
				busquedaAjax = null;
			}
			
			if(tipoBusqueda == 'buscadorTags') buscar = buscar+"&tags=1";
			
			$("."+buscadorClass).die();
			/* hacemos la llamada nueva habiendo abortado la anterior ;) */
			busquedaAjax = $.ajax({ type: "POST", url: "/ajax/buscador_ajax.php", data: "data="+buscar,
				success: function(msg){
					if(msg){
						cantElem = $(msg).find("."+liveSugerenciaClass).size();
						//console.log("Elementos: "+cantElem);
						msg = $.trim(msg);
						if(msg == 'error'){
							$("#"+buscadorContId).find("."+sugerenciaClass).html("No se encontraron resultados");
							$("#"+buscadorContId).find("."+sugerenciaClass).css({"padding":"16px 0 0 10px","width":"97%"});						
						}else{
							$("#"+buscadorContId).find("."+sugerenciaClass).html(msg);
							$("#"+buscadorContId).find("."+sugerenciaClass).css({"height":"auto","padding":"0"});
						}
					}else{
						$("#"+buscadorContId).find("."+sugerenciaClass).empty();
						$("#"+buscadorContId).find("."+sugerenciaClass).css("display","none");
						seleccionActual = 0;					
					}
				}
			});
		}		
	}
})(jQuery);