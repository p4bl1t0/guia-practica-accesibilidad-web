$(document).ready(function(){


	
	$(window).on('enterBreakpoint745',function(){
		$("#carMDP").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 400, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 400, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carBannersFooter").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 400, 'pixelOrPercent' : 'px', 'elementsWidth' : 240, 'ulHeightPadding' : 0, 'reset' : true });		
		$("#carSorpresaRio").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 400, 'pixelOrPercent' : 'px', 'reset' : true });
		//window.location.href = "http://m.garbarino.com";

		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_masVisitados").css({"width":"100%", "margin":"0 0 10px 0", "float":"left"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".bannerDoble").css({"left":"0", "top":"951px","right":"none"});
		$(".bannerDobleMargen").css({"top":"640px"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","52%");			
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"95%", "width":"27%"});
		$(".bancosSlideBox img").css("padding","10px 0 0");	
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","none");		
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");	
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		$(".Corto").css({ "display":"block"});
		$(".Largo").css({ "display":"none"});
		$(".modRedesSocialesCol4").css({"width":"98%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".bannerContCuotas").css({"width":"25%"});
		// $(".cantCuotas").css({"font-size":"45px","letter-spacing":"-3px","height":"48px"});
		/*BP para Banner Bancos - Más Vendidos*/		
	});

	$(window).on('enterBreakpoint935',function(){
		$("#carMDP").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 600, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_masVisitados").css({"width":"100%", "margin":"0 0 10px 0", "float":"left"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".bannerDoble").css({"left":"0", "top":"951px","right":"none"});
		$(".bannerDobleMargen").css({"top":"640px"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","52%");		
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"95%", "width":"27%"});	
		$(".bancosSlideBox img").css("padding","10px 0 0");		
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","none");		
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");	
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		$(".Corto").css({ "display":"block"});
		$(".Largo").css({ "display":"none"});
		$(".modRedesSocialesCol4").css({"width":"98%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"160px","background-size":"160px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"100px","background-size":"100px","height":"18px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"90px","background-size":"90px","height":"16px"});
		// $(".bannerContCuotas").css({"width":"25%"});
		// $(".cantCuotas").css({"font-size":"45px","letter-spacing":"-3px","height":"48px"});
		/*BP para Banner Bancos - Más Vendidos*/			
	});
	
	$(window).on('enterBreakpoint1020',function(){
		$("#carMDP").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 600, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 600, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_masVisitados").css({"width":"100%", "margin":"0 0 10px 0", "float":"left"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		$(".bannerDoble").css({"left":"0", "top":"951px","right":"none"});
		$(".bannerDobleMargen").css({"top":"640px"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","52%");	
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"95%", "width":"27%"});	
		$(".bancosSlideBox img").css("padding","10px 0 0");
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","none");		
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");		
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		$(".Corto").css({ "display":"block"});
		$(".Largo").css({ "display":"none"});
		$(".modRedesSocialesCol4").css({"width":"98%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"25%"});
		// $(".cantCuotas").css({"font-size":"45px","letter-spacing":"-3px","height":"48px"});
	});
	
	$(window).on('enterBreakpoint1130',function(){
		$("#carMDP").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 800, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 5, 'cycleAnimationTime' : 800, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 5, 'cycleAnimationTime' : 800, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 5, 'cycleAnimationTime' : 800, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_masVisitados").css({"width":"100%", "margin":"0 0 10px 0", "float":"left"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".bannerDoble").css({"left":"0", "top":"951px","right":"none"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		$(".bannerDobleMargen").css({"top":"640px"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","52%");
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"95%", "width":"27%"});		
		$(".bancosSlideBox img").css("padding","10px 0 0");
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","none");
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");		
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$(".Corto").css({ "display":"block"});
		$(".Largo").css({ "display":"none"});
		$(".modRedesSocialesCol4").css({"width":"98%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});

	$(window).on('enterBreakpoint1320',function(){
		$("#carMDP").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 1000, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 6, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 5, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 6, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","none");
		$(".mod_masVisitados").css({"width":"100%", "margin":"0 0 10px 0", "float":"left"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".bannerDobleMargen").css({"top":"640px"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		$(".bannerDoble").css({"left":"0", "top":"631px","right":"none"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","65%");
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"135%", "width":"33%"});	
		$(".bancosSlideBox img").css("padding","0");	
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","block");		
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		/*BP para Banner Bancos - Más Vendidos*/	
		$(".Corto").css({ "display":"none"});
		$(".Largo").css({ "display":"block"});	
		$(".modRedesSocialesCol4").css({"width":"98%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});
	
	$(window).on('enterBreakpoint1450',function(){
		$("#carMDP").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 1000, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 2, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1000, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","none");
		//$(".mod_masVendidos, .mod_masVisitados").css({"width":"auto", "margin":"0 0 0 0", "float":"none"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".mod_masVisitados").css({"width":"50%", "margin":"0", "float":"left", "right":"none"});
		//$(".banner_bancos_promo").css({"display":"none"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"block"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$(".bannerDoble").css({"left":"0", "top":"631px","right":"none"});
		$(".bannerDobleMargen").css({"top":"351px"});
		$("#banner_bancos_promo_col1").css("width","100%");
		$("#banner_bancos_promo_col2").css({"width":"100%","margin":"10px 0 0"});
		$(".bancosSlideBoxProd a span").css("width","65%");	
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"95%", "width":"27%"});	
		$(".bancosSlideBox img").css("padding","0");	
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","none");		
		$("#imgVisaBancosMasVendidos").css("display","none");
		$("#imgVisaBancosMasVendidos2").css("display","block");
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		/*BP para Banner Bancos - Más Vendidos*/	
		$(".Corto").css({ "display":"none"});
		$(".Largo").css({ "display":"block"});
		$(".modRedesSocialesCol4").css({"width":"48%"});
		// $(".bannerContTitulo").css({"width":"100%","text-align":"center","margin-bottom":"10px"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"33%"});
		// $(".cont24cuotas").css({"width":"33%"});
		// $(".bannerCuotas").css({"height":"auto"});
		// $(".bannerContCuotas").css({"padding-bottom":"10px"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});
	
	$(window).on('enterBreakpoint1515',function(){
		$("#carMDP").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 6, 'cycleAnimationTime' : 1200, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });			
		$("#carMasVendidos").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1200, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 1200, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1200, 'pixelOrPercent' : 'px', 'reset' : true });		

		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		//$(".mod_masVendidos, .mod_masVisitados").css({"width":"auto", "margin":"0 0 0 0", "float":"none"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".mod_masVisitados").css({"width":"50%", "margin":"0", "float":"left", "right":"none"});
		//$(".banner_bancos_promo").css({"display":"block"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"none"});
		$(".bannerDoble").css({"left":"0", "top":"631px","right":"none"});
		$(".bannerDobleMargen").css({"top":"351px"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$("#banner_bancos_promo_col1").css("width","81.5%");		
		$("#banner_bancos_promo_col2").css({"width":"18.5%","margin":"0"});
		$(".bancosSlideBoxProd a span").css("width","65%");	
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"135%", "width":"33%"});		
		$(".bancosSlideBox img").css("padding","0");
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","block");		
		$("#imgVisaBancosMasVendidos").css("display","block");
		$("#imgVisaBancosMasVendidos2").css("display","none");
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		/*BP para Banner Bancos - Más Vendidos*/			
		$(".Corto").css({ "display":"none"});
		$(".Largo").css({ "display":"block"});
		$(".modRedesSocialesCol4").css({"width":"48%"});
		// $(".bannerContTitulo").css({"width":"30%","margin":"0"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline-block"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"22%"});
		// $(".cont24cuotas").css({"width":"24%"});
		// $(".bannerCuotas").css({"height":"110px"});
		// $(".bannerContCuotas").css({"padding-bottom":"0"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});

	$(window).on('enterBreakpoint1700',function(){
		$("#carMDP").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1600, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });
		$("#carMasVendidos").carouselGb({ 'muestra' : 8, 'cycleAnimationTime' : 1600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 3, 'cycleAnimationTime' : 1600, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 8, 'cycleAnimationTime' : 1600, 'pixelOrPercent' : 'px', 'reset' : true });	

		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		//$(".mod_masVendidos, .mod_masVisitados").css({"width":"auto", "margin":"0 0 0 0", "float":"none"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		//$(".banner_bancos_promo").css({"display":"block"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"none"});
		$(".mod_masVisitados").css({"width":"50%", "margin":"0", "float":"left", "right":"none"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$(".bannerDoble").css({"left":"0", "top":"631px","right":"none"});
		$(".bannerDobleMargen").css({"top":"351px"});
		$("#banner_bancos_promo_col1").css("width","81.5%");		
		$("#banner_bancos_promo_col2").css({"width":"18.5%","margin":"0"});	
		$(".bancosSlideBoxProd a span").css("width","70%");
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"135%", "width":"33%"});	
		$(".bancosSlideBox img").css("padding","0");	
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","block");		
		$("#imgVisaBancosMasVendidos").css("display","block");
		$("#imgVisaBancosMasVendidos2").css("display","none");	
		$(".ModuloSimple1").css({ "width":"100%"});
		$(".ModuloSimple2").css({ "width":"100%","margin-top":"10px"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$(".Corto").css({ "display":"none"});
		$(".Largo").css({ "display":"block"});
		$(".modRedesSocialesCol4").css({"width":"48%"});
		// $(".bannerContTitulo").css({"width":"30%","margin":"0"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline-block"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"22%"});
		// $(".cont24cuotas").css({"width":"24%"});
		// $(".bannerCuotas").css({"height":"110px"});
		// $(".bannerContCuotas").css({"padding-bottom":"0"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});
	
	$(window).on('enterBreakpoint1850',function(){
		$("#carMDP").carouselGb({ 'muestra' : 5, 'cycleAnimationTime' : 400, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'ulHeightPadding' : 0, 'flechaIzqClass' : 'flechaizq-mdp', 'flechaDerClass' : 'flechader-mdp', 'reset' : true });
		$("#menuSolapas").carouselGb({ 'muestra' : 7, 'cycleAnimationTime' : 1800, 'elementsWidth' : 308, 'pixelOrPercent' : 'px', 'flechaIzqClass' : 'flechaizq-solapas', 'flechaDerClass' : 'flechader-solapas', 'reset' : true });		
		$("#carMasVendidos").carouselGb({ 'muestra' : 9, 'cycleAnimationTime' : 1800, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carMasVisitados").carouselGb({ 'muestra' : 4, 'cycleAnimationTime' : 1800, 'pixelOrPercent' : 'px', 'reset' : true });
		$("#carSorpresaRio").carouselGb({ 'muestra' : 9, 'cycleAnimationTime' : 1800, 'pixelOrPercent' : 'px', 'reset' : true });	

		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		//$(".mod_masVendidos, .mod_masVisitados").css({"width":"auto", "margin":"0 0 0 0", "float":"none"});
		$(".mod_masVendidos").css({"width":"100%", "margin":"0 0 0 0", "float":"left"});
		$(".mod_masVisitados").css({"width":"50%", "margin":"0", "float":"left", "right":"none"});
		//$(".banner_bancos_promo").css({"display":"block"});
		$(".banner_bancos_promo_dobleLinea").css({"display":"none"});
		$(".bannerDoble").css({ "top":"341px", "left":"auto", "right":"10px"});
		$(".bannerDobleMargen").css({"top":"351px"});
		/*BP para Banner Bancos - Más Vendidos*/
		$("#banner_bancos_promo_col1").css("width","81.5%");		
		$("#banner_bancos_promo_col2").css({"width":"18.5%","margin":"0"});
		$(".bancosSlideBoxProd a span").css("width","70%");
		$(".bancosSlideBoxProd a .precio_rel").css({"font-size":"135%", "width":"33%"});
		$(".bancosSlideBox img").css("padding","0");
		$(".bancosSlideBoxProd a .ver_masInfo_relacionados").css("display","block");
		$("#imgVisaBancosMasVendidos").css("display","block");
		$("#imgVisaBancosMasVendidos2").css("display","none");	
		$(".ModuloSimple1").css({ "width":"45%"}); /* cambiar por 45% */
		$(".ModuloSimple2").css({ "width":"53%","margin-top":"0"});
		/*BP para Banner Bancos - Más Vendidos*/		
		$(".Corto").css({ "display":"none"});
		$(".Largo").css({ "display":"block"});
		$(".modRedesSocialesCol4").css({"width":"48%"});
		// $(".bannerContTitulo").css({"width":"30%","margin":"0"});
		// $(".bannerContTitulo h2, .bannerContTitulo h3").css({"display":"inline-block"});
		// $(".cont12cuotas, .cont18cuotas").css({"width":"22%"});
		// $(".cont24cuotas").css({"width":"24%"});
		// $(".bannerCuotas").css({"height":"110px"});
		// $(".bannerContCuotas").css({"padding-bottom":"0"});
		// $(".cont12cuotas .bannerContProd div").css({"width":"190px","background-size":"190px"});
		// $(".cont18cuotas .bannerContProd div").css({"width":"145px","background-size":"147px","height":"23px"});
		// $(".cont24cuotas .bannerContProd div").css({"width":"165px","background-size":"170px","height":"25px"});
		// $(".bannerContCuotas").css({"width":"90px"});
		// $(".cantCuotas").css({"font-size":"45px","letter-spacing":"-3px"});
		// $(".cantCuotas").css({"font-size":"75px","letter-spacing":"auto","height":"78px"});
	});
	
	$('.toggleMenuTitle, .toggleMenuTitle-on').menuGb({	
		'menuWrapClass'			:	'toggleMenuWrap',
		'menuWrapClassOn'		:	'toggleMenuWrap-on',
		'menuWrapClassState'	:	'on',
		'menuClass'				:	'toggleMenuTitle',
		'menuClassOn'			:	'toggleMenuTitle-on',
		'menuCont'				: 	'toggleMenu',
		'menuFlecha'			:	'toggleMenuFlecha',
		'menuFlechaOn'			:	'toggleMenuFlecha-on',
		'speed'					:	400
	});

	$('.ui-selectmenu-item-icon').live('change', function(){
        var id=$(this).val();
        if(id>=1){
            var banco = "includes/online-landing-generica.php?banco="+id;
            $.colorbox({href:banco, iframe:true, innerWidth:500, innerHeight:600});
        }
    });	
	
    $('.mobile-modal').live('click', function(){
        var id=$(this).attr('id');
        var banco = "images/landing_app_mobile3.png"
        $.colorbox({href:banco, iframe:true, innerWidth:770, innerHeight:1100});
    });
    $('.modal-flotante').live('click', function(){
        var id=$(this).attr('id');
        var banco = "landing-bancos.php?id="+id;
        $.colorbox({href:banco, iframe:true, innerWidth:770, innerHeight:1100});
    });
    $('.img-mercado').live('click', function(){            
        var banco = "includes/online-promos-mercadopago.php";
        $.colorbox({href:banco, iframe:true, innerWidth:900, innerHeight:900});
    });
    $('.tarjetass').live('click', function(){  
        var id=$(this).attr('id');
        var banco = "landing-bancos.php?tarjeta="+id;
        $.colorbox({href:banco, iframe:true, innerWidth:479, innerHeight:410});
    });
		    $('.BancoSantander').live('click', function(){  
        var id = $(this).attr('id');
        banco = 'landing-bancos.php?id='+id;
        $.colorbox({href:banco, iframe:true, innerWidth:479, innerHeight:410});
    });
	    $('.BancoCiudad').live('click', function(){  
        var id = $(this).attr('id');
        banco = 'landing-bancos.php?id='+id;
        $.colorbox({href:banco, iframe:true, innerWidth:479, innerHeight:410});
    });
		    $('.BancoNacion').live('click', function(){  
        var id = $(this).attr('id');
        banco = 'landing-bancos.php?id='+id;
        $.colorbox({href:banco, iframe:true, innerWidth:479, innerHeight:410});
    });
		    $('.BancoProvincia').live('click', function(){  
        var id = $(this).attr('id');
        banco = 'landing-bancos.php?id='+id;
        $.colorbox({href:banco, iframe:true, innerWidth:479, innerHeight:410});
    });
	
	if ($('#selectBancos').length > 0)
	{
		$('select#selectBancos').selectmenu({

			menuWidth: "311px"
		});
		$("#selectBancos-button").parent().css("float","left");            
		$('#selectBancos').change(function(){
		   url = 'landing-bancos.php?id='+$(this).val() ;
		   $.colorbox({href:url});
		});
	}
  
    $('#btn-enviar-newsletter').click(function() {
        if($('#correo').val()=="tu@email.com"||$('#correo').val()==""){

        }else{
            var mail=$('#correo').val();
            if (mail != ""){
                if((mail.indexOf ('@',0) == -1 ) || (mail.indexOf (' ',0) != -1 ) || (mail.indexOf (';',0) != -1 ) 
                || (mail.indexOf ('>',0) != -1 ) || (mail.indexOf ('|',0) != -1 ) || (mail.indexOf ('&',0) != -1 ) 
                || (mail.indexOf (';',0) != -1 ) || (mail.indexOf (':',0) != -1 ) || (mail.indexOf ('!',0) != -1 ) 
                || (mail.indexOf ('/',0) != -1 ) || (mail.indexOf ('>',0) != -1 ) || (mail.indexOf ('*',0) != -1 ) 
                || (mail.indexOf ('"',0) != -1 ) || (mail.indexOf ('$',0) != -1 ) || (mail.indexOf ('`',0) != -1 ) 
                || ((mail.length - 1 )==mail.lastIndexOf('@')) || ((mail.length - 1) == mail.lastIndexOf('.')) || (mail.indexOf ('@',0) > mail.lastIndexOf('.'))
                || (mail.indexOf ('@',0) != mail.lastIndexOf('@'))  )
                {
                  $("#Contenido1").html("Ingrese una direccion de mail valida");
                }else{
                    $.ajax({ type: "POST", url: "ajax/newsletter_ajax.php", data: "correo="+$('#correo').val(),
                        success: function(msg){
                            if(msg){ 
                                $("#Contenido2").html(msg);
                                $('#correo').val("tu@email.com");
                                //$('#correo').css("background",'red')
                            }
                        }
                    });
                }
            }
		}
    });
	
	/*SLIDE BANCOS MAS VENDIDOS*/
	$(".banner_bancos_promo").css("display","block");
	
	function initSlides(cantVeces){
		var timeOutTime = 0;
		var multi = 200;
		for(var i = 1; i <= cantVeces; i++){
			setTimeout(function(){slideUp(1)}, timeOutTime += multi);
			setTimeout(function(){slideUp(2)}, timeOutTime += multi * 6);
			setTimeout(function(){slideUp(3)}, timeOutTime += multi * 4);
			setTimeout(function(){slideUp(4)}, timeOutTime += multi * 4);
			setTimeout(function(){slideUp(5)}, timeOutTime += multi * 4);
			setTimeout(function(){slideDown(1)}, timeOutTime += multi * 12);
			setTimeout(function(){slideDown(2)}, timeOutTime += multi * 4);
			setTimeout(function(){slideDown(3)}, timeOutTime += multi * 4);
			setTimeout(function(){slideDown(4)}, timeOutTime += multi * 4);	
			setTimeout(function(){slideDown(5)}, timeOutTime += multi * 4);	
		}
	}
	initSlides(5);
	
	var animTime = 600;
	$(".slides").mouseenter(function(){
		var num = $(this).attr("id").split("_"); num = num[1];
		slideUp(num);
	}).mouseleave(function(){
		var num = $(this).attr("id").split("_"); num = num[1];
		slideDown(num);
	});	
	
	function slideUp(num){
		var childHeight = $("#slidesCont_"+num+" div:first-child").height();
		$("#slidesCont_"+num).stop().animate({ top : "-"+childHeight+"px" }, animTime);
	}
	
	function slideDown(num){
		$("#slidesCont_"+num).stop().animate({ top : "0px" }, animTime);
	}	
	/*SLIDE*/	
	$(".bannerPickup").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:650, innerHeight:695});
	});
	
	/*VER MAS RECOMENDACIONES FB*/
	var fbActivityOpen = 0;
	var fbIframeHeight = $("#fbActivityContainer iframe").outerHeight();
	$("#fbActivityMenu span").click(function(){
		var fbActivityVer = $(this).html();
		if(fbActivityOpen == 0){
			fbActivityOpen = 1;
			$("#fbActivityContainer").animate({ height: fbIframeHeight }, 1000);
			$("#fbActivityLimiter").fadeOut();
			$(this).html("Ver Menos");
		}else{
			fbActivityOpen = 0;
			$("#fbActivityContainer").animate({ height: '175px' }, 1000);
			$("#fbActivityLimiter").fadeIn();
			$(this).html("Ver Más");			
		}
	});
	/*VER MAS RECOMENDACIONES FB*/

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
	
	
	
	
	

});

$(window).ready(function(){

	$(".bannerCuotas").css("display","block");
	$(".mod_bannerHome").css("display","block");

});