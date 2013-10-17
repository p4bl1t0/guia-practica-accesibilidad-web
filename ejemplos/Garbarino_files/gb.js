$(document).ready(function(){
	$('img').live('error', function(){
		$(this).attr('src', 'http://images.garbarino.com/imag_no_disp_c.gif');
	});	

	if(!window.console) {
		window.console = {
			log : function(str) {
				//alert(str);
			}
		};
	}

	$(window).setBreakpoints({
		distinct: true,
		breakpoints: [745,935,1020,1130,1320,1450,1515,1700,1850]
	});

	$(window).on('enterBreakpoint745',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 60% !important;');
		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: none;');
		$(".Banner-Outlet").css('cssText','font-size: 12px; display: none; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 55% !important; position:relative;");		
	});

	$(window).on('enterBreakpoint935',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 60% !important;');
		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: none;');
		$(".Banner-Outlet").css('cssText','font-size: 12px; display: none; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 55% !important; position:relative;");		
	});

	$(window).on('enterBreakpoint1020',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 60% !important;');
		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: none;');
		$(".Banner-Outlet").css('cssText','font-size: 12px; display: none; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 55% !important; position:relative;");
	});

	$(window).on('enterBreakpoint1130',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 68% !important;');
		// $(".espacio_tel").css("display","block");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: none;');
		$(".Banner-Outlet").css('cssText','font-size: 16px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 60% !important; position:relative;");		

	});

	$(window).on('enterBreakpoint1320',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 72% !important;');
		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: none;');
		$(".Banner-Outlet").css('cssText','font-size: 16px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 70% !important; position:relative;");
	});

	$(window).on('enterBreakpoint1450',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 76% !important;');
		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","none");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: block;');
		$(".Banner-Outlet").css('cssText','font-size: 18px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 75% !important; position:relative;");
	});

	$(window).on('enterBreakpoint1515',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 79% !important;');
		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: block;');
		$(".Banner-Outlet").css('cssText','font-size: 24px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 75% !important; position:relative;");
	});

	$(window).on('enterBreakpoint1700',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 81% !important;');
		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: block;');
		$(".Banner-Outlet").css('cssText','font-size: 26px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 80% !important; position:relative;");		
	});

	$(window).on('enterBreakpoint1850',function(){
		$(".col_1 .mod_buscador .contenedor #cse-search-form").css('cssText','float:left; margin: 0 0 0 2px; width: 83% !important;');
		// $(".espacio_tel").css("display","none");
		// $(".sep_tel").css("display","inline");
		$(".mod_bannerCategorias").css('cssText','margin-left: 255px; display: block;');
		$(".Banner-Outlet").css('cssText','font-size: 26px; display: block; margin-top:10px;');
		// $(".buscadorCont").css("cssText","float: left; margin: 0px 0px 0px 2px; width: 80% !important; position:relative;");
	});

	
	$(".bannerPickup").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:650, innerHeight:695});
	});
	
	$(".mapa_outlet").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:450, innerHeight:450});
	});


	
	
    $('.fancyRetiroSucursal').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:820, innerHeight:750, scrolling:true});
	});
    $('.fancyAmbiental').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:500, innerHeight:322, scrolling:true});
	});
    $('.fancySumateGarbarino').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:700, innerHeight:720, scrolling:true});
	});
    $('.fancyTdaPromo').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:1024, innerHeight:358, scrolling:false});
	});
    $('.fancyCreditoGarbarino').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:820, innerHeight:720, scrolling:false});
	});
	$('.fancyAtteCliente').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:750, innerHeight:800, scrolling:false});
	});
    $('.fancyPrensa').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:750, innerHeight:220, scrolling:false});
	});
	$('.fancyVentaTelefonica').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:750, innerHeight:220, scrolling:false});
	});
		$('.fancyDatosPersonales').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:550, innerHeight:780, scrolling:false});
	});
		$('.fancyVerisign').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:700, innerHeight:640, scrolling:false});
	});
	$('.fancyBasesCondiciones').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:1000, innerHeight:800});
	});
	$('.fancyOtros').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:820, innerHeight:800, scrolling:true});
	});
	$('.fancyFaq').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:820, innerHeight:800, scrolling:true});
	});
	$('.fancyFormasDePago').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:960, innerHeight:960, scrolling:false});
	});
    $('.BtnMiCuenta').on('click', function(e){
        e.preventDefault();
        $('.Cont_LB_Ingresar').slideToggle();
    });
    $('.fancyAviones').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:720, innerHeight:506, scrolling:false});
	});
	$('.fancyDiaMadre').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:810, innerHeight:750});
	});
	$('.fancySucusOpen').live('click', function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		$.colorbox({href:href, iframe:true, innerWidth:810, innerHeight:750});
	});


    $('.Cont_LB_Btn_Ingresar').on('click', function(e){
        e.preventDefault();
        var usuario = $('#email').val();
        var password = $('#password').val();
        if(usuario == '' || password== ''){
            alert('debe ingresar usuario y contrase\u00f1a');
        }else{
            $.ajax({type: "POST", url: "ajax/login.php", data: "mail="+usuario+"&clave="+password,
                success: function(msg){
                    if(msg == '1'){
			alert('El E-mail es incorrecto');
                        $('#email').focus();
                    }
                    if(msg == '2'){
			alert('La clave es incorrecta');
                        //alert(msg);
                        $('#password').focus();
                    }if(msg == '3'){
                        console.log('3');
                        $('#desplegarLogin').attr('class', 'BtnMiCuenta_on');
                        $('.Cont_LB_Ingresar').slideToggle();
                        $('.Cont_LB_Ingresar').remove();
                        $('.Cont_LB_Logueado').slideToggle();
                    }

                }
            });
        }
    });
	$('.BtnMiCuenta_on').on('click', function(e){
		e.preventDefault();
		$('.Cont_LB_Logueado').slideToggle();
	});

});
if (top != self) 
{
	pasar = false;
	if (window.location.hostname)
	{	
		if (window.location.hostname.indexOf('garbarino.com') != '-1')
		{
			pasar = true;
		}
	}	
	if (pasar == false)
	{		
		top.location.href = location.href;
	}
}