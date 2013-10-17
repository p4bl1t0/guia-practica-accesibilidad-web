/*
*	carouselGb, 'clippingWidth' : 93.5
*/

(function($){
	$.fn.carouselGb = function(options){
		var settings = $.extend({
			'posicion'				:	1,
			'muestra'				:	1,
			'lineas'				:	1,			
			'inicioAutomatico'		:	false,
			'clippingWidth'			:	0,			
			'elementsWidth'			:	176,
			'elementsPercent'		:   13.33,
			'pixelOrPercent'		:	'%',
			'ulHeightPadding'		:	17,
			'cycleAnimationTime'	:	1200,
			'mostrarApuntador'		: 	false,
			'reset'					:   false,
			'flechaIzqClass'		:	'flechaIzq',
			'flechaDerClass'		:	'flechaDer'
		}, options);
		
		var posicion = settings.posicion;
		var lineas = settings.lineas;		
		var muestra = settings.muestra;
		var inicioAutomatico = settings.inicioAutomatico;
		var elementsWidth = settings.elementsWidth;
		var clippingWidth = settings.clippingWidth;
		var elementsPercent = settings.elementsPercent;
		var pixelOrPercent = settings.pixelOrPercent;
		var ulHeightPadding = settings.ulHeightPadding;		
		var cycleAnimationTime = settings.cycleAnimationTime;
		var mostrarApuntador = settings.mostrarApuntador;
		var reset = settings.reset;
		var flechaIzqClass = settings.flechaIzqClass;
		var flechaDerClass = settings.flechaDerClass;
		
		var ulWidth = '';
		var ulHeight = '';		
		var animandoL = true;
		var animandoR = true;
		var elementosGlobal = '';
		var automatico = '';
		var newLeft = '';
		var carouselId = $(this).attr("id");
		var lastItem = '';
		var newLastItem = '';
		var flechaIzqClassTop = '';
		var flechaDerClassTop = '';
		var dif = '';
		$("#"+carouselId+" ul").attr("id", carouselId+"_ul");//agrego un id en UL del carousel
		var cantElementos = $("#"+carouselId+" #"+carouselId+"_ul li").size();
		var elemHeight = $("#"+carouselId+" #"+carouselId+"_ul li:first").outerHeight();

		if(reset){//reseteo
			animandoR = false;
			posicion = 1;
			$("#"+carouselId+" #"+carouselId+"_ul").css("left", "0px");
			$("#"+carouselId+"_"+flechaIzqClass).off('click');
			$("#"+carouselId+"_"+flechaDerClass).off('click');
			if($("#"+carouselId+" #"+carouselId+"_ul li.multi").length){
				elemHeight = $("#"+carouselId+" #"+carouselId+"_ul li.multi li:first").outerHeight();					
				$("#"+carouselId+" #"+carouselId+"_ul").find(".multi").each(function(){
					$(this).parent().append($(this).html());
					$(this).remove();
				});					
			}
			if(mostrarApuntador){
				$('.pelotita').removeClass('highlighted');
				$('#pelotita_'+posicion).addClass('highlighted');
			}
		}
		
		//if(!$.browser.msie){ $("#"+carouselId).swipe({ swipeLeft: muevoDerecha,	swipeRight: muevoIzquierda,	threshold: { x:30, y:90 } }); }
		if(lineas > 1){
			elementsWidth = muestra * elementsWidth;
			var muestraOrig = muestra;
			var corte = muestra * lineas;
			var counter = 1;
			var newLiCount = 1;
			$("#"+carouselId+" #"+carouselId+"_ul").prepend("<div class='"+corte+"'></div>");
			$("#"+carouselId+" #"+carouselId+"_ul li").each(function(){
				if(counter == corte + 1){
					corte = corte + muestra * lineas;
					$(this).parent().append("<div class='"+corte+"'></div>");
					newLiCount++;
				}
				$("."+corte).append("<li>"+$(this).detach().html()+"</li>");				
				counter++;
			});
			cantElementos = newLiCount;
			muestra = 1;
			$("#"+carouselId+" #"+carouselId+"_ul").children().each(function(){
				$(this).replaceWith(function(){
					return $("<li class='multi' />").append($(this).contents()).css('width', elementsWidth);
				});
			});
			var total = counter - 1;
			var cantXli = muestraOrig * lineas;
			var divideEn = Math.ceil((counter - 1) / (muestraOrig * lineas));
			var ultimosLi = total - ( cantXli * (divideEn - 1) );
			var espaciosVacios = cantXli - ultimosLi;
			//console.log("Total: "+total+" - Muestra: "+muestraOrig+" - Lineas: "+lineas+" - Cant x li: "+cantXli+" - Divide en: "+divideEn+" - Ultimo li: "+ultimosLi+" - espaciosVacios: "+espaciosVacios);
		}
		
		elementosGlobal = cantElementos;
		ulHeight = elemHeight * lineas + ulHeightPadding;
		ulWidth = elementsWidth * cantElementos;
		$("#"+carouselId).css('height', ulHeight);
		$("#"+carouselId+" #"+carouselId+"_ul").css({'width':ulWidth, 'height':ulHeight});	
		
		//if(inicioAutomatico && cantElementos != null && cantElementos != '' && cantElementos != undefined && cantElementos > 0) muevo();
		//if(inicioAutomatico && cantElementos != null && cantElementos != '' && cantElementos != undefined && cantElementos > 0) automatico = setInterval("muevoCarousel()", 5000);

		if(clippingWidth == 0){
			switch(pixelOrPercent){
				case '%':
					if(muestra >= elementosGlobal){
						clippingWidth = elementsPercent * elementosGlobal;
					}else{
						if(lineas > 1){
							clippingWidth = elementsPercent;
						}else{
							clippingWidth = elementsPercent * muestra;
						}
					}
				break;
				case 'px':
					if(muestra >= elementosGlobal){
						clippingWidth = elementsWidth * elementosGlobal;
					}else{
						if(lineas > 1){
							clippingWidth = elementsWidth;
						}else{
							clippingWidth = elementsWidth * muestra;
						}
					}					
				break;			
			}
			$("#"+carouselId).css("width", clippingWidth+pixelOrPercent);
		}
		
		var iElem = 1;
		if(lineas > 1){
			$("#"+carouselId+" #"+carouselId+"_ul").children().each(function(){
				$(this).attr("id", carouselId+"_element_"+iElem);
				iElem++;
			});
		}else{
			$("#"+carouselId+" #"+carouselId+"_ul li").each(function(){
				$(this).attr("id", carouselId+"_element_"+iElem);
				iElem++;
			});		
		}
                
		$(this).parent().find("."+flechaIzqClass).attr("id", carouselId+"_"+flechaIzqClass);//seteo el id de la flechaIzqClass
		$(this).parent().find("."+flechaDerClass).attr("id", carouselId+"_"+flechaDerClass);//seteo el id de la flechaDerClass
		var izqHeight = $("#"+carouselId+"_"+flechaIzqClass).outerHeight();
		var derHeight = $("#"+carouselId+"_"+flechaDerClass).outerHeight();
                
		$("#"+carouselId+"_"+flechaIzqClass).css('top', Math.round(Math.round(ulHeight / 2) - Math.round(izqHeight / 2)));//calculo la posicion
		$("#"+carouselId+"_"+flechaDerClass).css('top', Math.round(Math.round(ulHeight / 2) - Math.round(derHeight / 2)));
		
		if(muestra == 1 || muestra >= elementosGlobal){//si muestro de a uno el ultimo accesible es el ultimo item
			lastItem = elementosGlobal;
		}else{//obtener ultimo item accesible de acuerdo a la cantidad que querramos mostrar
			for(i = 1; i <= elementosGlobal; i++){
				if(i % muestra === 0){
					lastItem = i + 1;
				}
			}
		}
		if(lastItem > elementosGlobal){
			for(i = elementosGlobal - 1; i > 0; i--){
				if(i % muestra === 0){
					lastItem = i + 1;
					break;
				}
			}
		}
		
		dif = elementosGlobal - lastItem + 1;//Calculo los espacios vacíos para corregirlos		
		if(dif < muestra){
			/*newLastItem = muestra - dif;
			lastItem = newLastItem;*/
			lastItem = elementosGlobal - muestra + 1;
		}
		
		if(muestra < elementosGlobal){
			$("#"+carouselId+"_"+flechaIzqClass).fadeIn().css('zIndex','999');
			$("#"+carouselId+"_"+flechaDerClass).fadeIn().css('zIndex','999');
			
			$("#"+carouselId+"_"+flechaIzqClass).off('click').on('click',function(){//muevoIzquierda
				//muevoIzquierda();
				if(mostrarApuntador) clearInterval(automatico);
				if(posicion == 1){
					animandoL = false;
					//posicion = elementosGlobal;
					//newLeft = $("#"+carouselId+"_element_"+elementosGlobal).position();					
					posicion = lastItem;
					newLeft = $("#"+carouselId+"_element_"+lastItem).position();
					$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "-"+newLeft.left+"px"}, cycleAnimationTime);
					if(mostrarApuntador){				
						$('.pelotita').removeClass('highlighted');
						$('#pelotita_'+posicion).addClass('highlighted');
					}		
				}else if(posicion >= 2){
					animandoL = true; 
					//posicion--;
					posicion = posicion - muestra;//muevo la cantidad de posiciones que quiero mostrar (como un solo bloque)
					if(posicion < 1) posicion = 1;//si la posicion es menor a 1, lo llevo a 1
					newLeft = $("#"+carouselId+"_element_"+posicion).position();
					if(newLeft != null && newLeft != undefined){
						if($("#"+carouselId+" #"+carouselId+"_ul").is(":animated")) {
							$("#"+carouselId+" #"+carouselId+"_ul").stop().css("left", "-"+newLeft.left+"px");
						}else{
							$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "-"+newLeft.left+"px"}, cycleAnimationTime);
						}
						if(mostrarApuntador){		
							$('.pelotita').removeClass('highlighted');
							$('#pelotita_'+posicion).addClass('highlighted');
						}
					}else{
						animandoL = false;
						posicion = elementosGlobal;
						newLeft = $("#"+carouselId+"_element_"+elementosGlobal).position();
						$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "-"+newLeft.left+"px"}, cycleAnimationTime);
						if(mostrarApuntador){				
							$('.pelotita').removeClass('highlighted');
							$('#pelotita_'+posicion).addClass('highlighted');
						}
					}
				}	
			});

			$("#"+carouselId+"_"+flechaDerClass).off('click').on('click',function(){//muevoDerecha
				if(mostrarApuntador) clearInterval(automatico);	
				if(posicion >= elementosGlobal){
					animandoR = false;
					posicion = 1;
					$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "0px"}, "slow");
					if(mostrarApuntador){				
						$('.pelotita').removeClass('highlighted');                    
						$('#pelotita_'+posicion).addClass('highlighted');
					}	
				}else if(posicion <= elementosGlobal){
					animandoR = true;
					//posicion++;
					posicion = posicion + muestra;//muevo la cantidad de posiciones que quiero mostrar (como un solo bloque)
					if(posicion > lastItem && posicion <= elementosGlobal) posicion = lastItem;
					newLeft = $("#"+carouselId+"_element_"+posicion).position();
					if(newLeft != null && newLeft != undefined){
						if($("#"+carouselId+" #"+carouselId+"_ul").is(":animated")) {
							$("#"+carouselId+" #"+carouselId+"_ul").stop().css("left", "-"+newLeft.left+"px");
						}else{
							$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "-"+newLeft.left+"px"}, cycleAnimationTime);
						}
						if(mostrarApuntador){				
							$('.pelotita').removeClass('highlighted');
							$('#pelotita_'+posicion).addClass('highlighted');
						}
					}else{//si el elemento no existe vuelvo al principio
						animandoR = false;
						posicion = 1;
						$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "0px"}, "slow");
						if(mostrarApuntador){				
							$('.pelotita').removeClass('highlighted');                    
							$('#pelotita_'+posicion).addClass('highlighted');
						}					
					}
				}
			});
		}else{
			$("#"+carouselId+"_"+flechaIzqClass).css('display','none');
			$("#"+carouselId+"_"+flechaDerClass).css('display','none');
		}
		
		if(mostrarApuntador){
			var pelotitas = "<div style='text-align:right; height:50px; float:left;'><div style='float:left;cursor: pointer;font-size: 2em;' class='pelotita highlighted' id='pelotita_"+posicion+"'></div>";
			for(var i=1; i <= cantElementos - 1; i++){
				tot = i+1;
				pelotitas += "<div style='cursor: pointer;font-size: 2em; float:left;' class='pelotita'  id='pelotita_"+tot+"'></div>";
			}
			pelotitas += "</div>";
			$("#navPuntos").html(pelotitas);
			
			$(".pelotita").live('click',function(){
				clearInterval(automatico);
				var pelotita = $(this).attr('id').split('_');
				pelotita = pelotita[1];
				var left = 0;
				left = pelotita * elementsWidth - elementsWidth;
				posicion = pelotita;
				$("#"+carouselId+" #"+carouselId+"_ul").animate({"left" : "-"+left}, cycleAnimationTime);
				$('.pelotita').removeClass('highlighted');
				$('#pelotita_'+pelotita).addClass('highlighted');
			});		
		}		
	};	
})(jQuery);
