function VerificarCuil( cuil ) 
{
  var sCuil = new String(cuil);
  var sCab = sCuil.substr(0,2);
  var sNum = sCuil.substr(2,8);
  var sDv = sCuil.substr(10,1);
  var DVE, msg;
    
  if (sCuil.length != 11)
  {
    msg = " El CUIL debe ser de 11(once) digitos.";
    return msg;
  }
    
  if (sCab.length != 2)
  {
    msg = " Verifique el CUIL Ingresado";
    return msg;
  }
  
  if (sNum.length != 8)
  {
    msg = " Verifique el CUIL Ingresado";
    return msg;
  }
  
  if (sDv.length != 1)
  {
    msg = " Verifique el CUIL Ingresado";
    return msg;
  }
  //- Compruebo cabezal valido
  var j = /20|23|24|27|30|33|34/;
  var valor = sCab.match(j);
  if (valor == null)
  {
	msg = " Verifique el CUIL Ingresado";
	return msg;
  }
  //- Cargo los pesos
  var pesos = new Array();
    pesos[0] = 5;
    pesos[1] = 4;
    pesos[2] = 3;
    pesos[3] = 2;
    pesos[4] = 7;
    pesos[5] = 6;
    pesos[6] = 5;
    pesos[7] = 4;
    pesos[8] = 3;
    pesos[9] = 2;
  //- Genero el array
  var s = sCab + sNum;
  var ss = s.split("");
  var total = 0 ;
  //- Multiplico y sumo
  for (i = 0; i <= 9; i++) 
  {
    total = total + ss[i] * pesos[i];
  }
  //- Saco el mod
  var resto = total % 11;
  if((resto == 0) || (resto == 1))
  {
    DVE = 0;
  }	 

  if (resto > 1)
  {
	DVE = 11 - resto;
  }
  
  if(sDv == DVE)
  {
	msg = "OK";
	return msg;
  } 
  else 
  {		
    msg = "No es un CUIT/CUIL valido";
    return msg;
  }
}

function VerificarBeneficio(beneficio){
    if(beneficio.length > 9 && beneficio.length < 12){
        return "OK";
    }
    
    return "El número de beneficio no es válido";
}

function validarFormCuil(captcha){
    if($('#cuilTipo').val() != '0025' && $('#cuilTipo').val() != '0026' && $('#cuilTipo').val() != '0029'){
        $('#cuilTipo').addClass('error');
        return false;
    }
    if($('#cuilNumero').val().length < 6 || $('#cuilNumero').val().length > 8){
        $('#cuilNumero').addClass('error');
        $('#cuilNumero').next('p').html("El número de documento es incorrecto.");
        return false;
    }
    if($('#cuilNombre').val().length < 1 || $('#cuilNombre').val().length > 30){
        $('#cuilNombre').addClass('error');
        $('#cuilNombre').next('p').html("El nombre es incorrecto.");
        return false;
    }
    if($('#cuilApellido').val().length < 1 || $('#cuilApellido').val().length > 30){
        $('#cuilApellido').addClass('error');
        $('#cuilApellido').next('p').html("El apellido es incorrecto.");
        return false;
    }
    if($('#cuilApellidoCasada').val().length > 30){
        $('#cuilApellidoCasada').addClass('error');
        $('#cuilApellidoCasada').next('p').html("El apellido de casada es incorrecto.");
        return false;
    }
    var fecha = $('#cuilNacimiento').val();
    if(fecha.substr(2,1) != '/' || fecha.substr(5,1) != '/'){
        $('#cuilNacimiento').addClass('error');
        $('#cuilNacimiento').next('p').html("La fecha de nacimiento es incorrecta.");
        return false;
    }
    if(fecha.length != 10){
        $('#cuilNacimiento').addClass('error');
        $('#cuilNacimiento').next('p').html("La fecha de nacimiento es incorrecta.");
        return false;
    }
    
    if($('input[name=cuilSexo]:checked').val() != "F" && $('input[name=cuilSexo]:checked').val() != "M"){
        $('input[name=cuilSexo]').addClass('error');
        $('#cuilSexo').next('p').html("Debe seleccionar un sexo.");
        return false;
    }
    if(captcha.length != 6){
        $('#cuilCaptcha').addClass('error');
        return false;
    }
    
    return true;
}

function validarFormExpedientes(captcha){
    if($('input[name=expTipo]:checked').val() == ""){
        $('input[name=expTipo]').addClass('error');
        return false;
    }
    
    $('.inputsExp:visible input').each(function(){
        if($(this).val() == '')
            return false;
    });

    if(captcha.length != 6){
        $('#expCaptcha').addClass('error');
        return false;
    }
    
    return true;
}

function getDondeCobro(tipo, valor, captcha){
    $('div.loading').show();
    $.ajax({
        url: "/svc/dondecobro.php",
        dataType: "json",
        type: 'POST',
        data: "&"+tipo+"="+valor+"&captcha="+captcha,
        success: function (data) {
            $(".innerGlobo").hide();
            if(data.success){
                if(data.tipo == "beneficio"){
                    $('#resultados').show();
                    $('#dcNombre').html(data.nombre);
                    $('#dcLugar').html(data.lugar);
                    $('#dcPeriodo').html("Período: "+data.periodo);
                    $('#dcFechas li:first span').html(data.desde);
                    $('#dcFechas li:last span').html(data.hasta);
                } else if(data.tipo == "listado"){
                    $('#beneficiario').show();
                    $('#beneficiario ul').empty();
                    for(var i=0; i<data.beneficios.length; i++){
                        $('#beneficiario ul').append("<li><a href='javascript:void(0)' data-beneficio='"+data.beneficios[i].numero+"'>"+data.beneficios[i].numero+" / <span class='bold'>"+data.beneficios[i].sistema+"</a></span></li>");
                    }
                    $('#beneficiario ul li a').on('click', function(){
                        var beneficio = $(this).attr('data-beneficio');
                        getDondeCobro('beneficio', beneficio, $('#dcCaptcha').val());
                    });
                }
            } else {
                $('.error').show();
                $('#dcError').html(data.error);
            }
            $('div.loading').hide();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".innerGlobo").hide();
            $('.error').show();
            $('#dcError').html("No se pudieron obtener resultados.");
            $('div.loading').hide();
        }
    });
}

function getCuil(tipo, numero, nombre, apellido, casada, nacimiento, sexo, captcha){
    $('div.loading').show();
    var postData = "&tipodoc="+tipo+"&numdoc="+numero+"&nombre="+nombre+"&apellido="+apellido+"&apellidocasada="+casada+"&fechnacimiento="+nacimiento+"&sexo="+sexo;
	_gaq.push(['_trackEvent',"1click", "Consulta", "CUIL"]);
    $.ajax({
        url: "/svc/cuil.php",
        dataType: "json",
        type: 'POST',
        data: postData+"&captcha="+captcha,
        success: function (data) {
            $(".innerGlobo").hide();
            if(data.success){
                $('#cuilResCuil').html(data.datos.cuil);
                $('#cuilResNombre').html(data.datos.nya);
                $('#cuilResDoc').html(data.datos.documento);
                $('#cuilResultados').show();
                $('#cuilURL').attr('href',"/svc/cuilPDF.php?cuil="+data.datos.cuil+postData);
            } else {
                $('.error').show();
                $('#cuilError').html(data.error);
            }
            $('div.loading').hide();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".innerGlobo").hide();
            $('.error').show();
            $('#cuilError').html("No se pudieron obtener resultados.");
            $('div.loading').hide();
        }
    });
}

function llenarExpediente(expediente){
    $(".innerGlobo").hide();
    var contenido = "<p><strong>Expediente:</strong> "+expediente.expediente+"</p>";
    contenido += "<p><strong>Carátula:</strong> "+expediente.caratula+"</p>";
    contenido += "<p><strong>Documento:</strong> "+expediente.documento+"</p>";
    contenido += "<p><strong>Tipo:</strong> "+expediente.tipo+"</p>";
    contenido += "<p><strong>Fecha:</strong> "+expediente.fecha+"</p>";
    contenido += "<p><strong>Estado:</strong> "+expediente.estado+"</p>";
    $('#detalleExpediente').empty().html(contenido).show();
}

function getExpediente(captcha){
    $('div.loading').show();
    var data = {
        captcha: captcha,
        tipo: 'expediente'
    };
    data['expediente'] = $('#exp1').val()+"-"+$('#exp2').val()+"-"+$('#exp3').val()+"-"+$('#exp4').val()+"-"+$('#exp5').val()+"-"+$('#exp6').val();
    
    _gaq.push(['_trackEvent',"1click", "Consulta", "Expedientes"]);
    
    $.ajax({
        url: "/svc/expedientes.php",
        dataType: "json",
        type: 'POST',
        data: data,
        success: function (data) {
            $(".innerGlobo").hide();
            if(data.success){
                if(data.expedientes.length > 1){
                    $('#listaExpedientes').show();
                    $('#listaExpedientes ul').empty();
                    for(var i=0; i<data.expedientes.length; i++){
                        $('#listaExpedientes ul').append("<li><a href='javascript:void(0)' data-expediente='"+i+"'>"+data.expedientes[i].documento+" / <span class='bold'>"+data.expedientes[i].expediente+"</a></span></li>");
                    }
                    expedientes = data.expedientes;
                } else if(data.expedientes.length == 1){
                    llenarExpediente(data.expedientes[0]);
                } else if(data.expedientes.length == 0){
                    $('#detalleExpediente').empty().html("No hay resultados para esos datos").show();
                } else {
                    $('.error').show();
                    $('#expError').html("No se pudieron obtener resultados.");
                }
            } else {
                $('.error').show();
                $('#expError').html(data.error);
            }
            $('div.loading').hide();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".innerGlobo").hide();
            $('#error').show();
            $('#expError').html("No se pudieron obtener resultados.");
            $('div.loading').hide();
        }
    });
}

function cerrarGlobo(){
    $(".globito").fadeOut(function(){
        $(".globito > div").hide();
        $(".globito div.inicial").show();
        $(".globito input[type=text]").val("");
    });
}

$(document).ready(function(){    
    $("#dondeBtn").click(function(e){
        var globo = $("#cuandoCobro");
        e.preventDefault();
        cerrarGlobo();
        _gaq.push(['_trackEvent',"1click", "Abrir", "DondeCobro"]);
        $("img.imgCaptcha", globo).attr('src','/svc/captcha.php'+ '?' + (new Date()).getTime());
        globo.fadeIn();
    });
    $("#cuilBtn").click(function(e){
        var globo = $("#cuil");
        e.preventDefault();
        cerrarGlobo();
        _gaq.push(['_trackEvent',"1click", "Abrir", "CUIL"]);
        $("img.imgCaptcha",globo).attr('src','/svc/captcha.php'+ '?' + (new Date()).getTime());
        globo.fadeIn();
    });
    $("#expBtn").click(function(e){
        var globo = $("#expedientes");
        e.preventDefault();
        cerrarGlobo();
        _gaq.push(['_trackEvent',"1click", "Abrir", "Expedientes"]);
        $("img.imgCaptcha",globo).attr('src','/svc/captcha.php'+ '?' + (new Date()).getTime());
        globo.fadeIn();
    });
    $('.cerrarGlobito').click(function(e){
        cerrarGlobo();
    });
    $(".volver").click(function(){
        $(".globito > div").hide();
        $(".globito div.inicial").show();
    });
    $("button[type=reset]").click(function(){
        var div = $(this).parent();
        $('input[type=text]', div).val('');
    });
    
    
    $('#btnDc').click(function(){
        var captcha = $('#dcCaptcha').val();
        var valor = $('#dcCuil').val();
        var valid;
        if($('input[name=consultaDc]:checked').val() == "cuil"){
            valor = $('#dcCuil').val();
            valid = VerificarCuil(valor);
        } else {
            valor = $('#dcCuil').val();
            valid = VerificarBeneficio(valor);
        }
        if(valid == "OK"){
            $('#dcCuil').removeClass('error');
            $('#dcInputError').html('').hide();
            if(captcha.length == 6){
                _gaq.push(['_trackEvent',"1click", "Consulta", "DondeCobro"]);
                getDondeCobro($('input[name=consultaDc]:checked').val(), valor, captcha);
            } else
                $('#dcCaptcha').addClass('error');
        } else {
            $('#dcCuil').addClass('error');
            $('#dcInputError').html("<strong>Error</strong>: "+valid).show();
        }
    });
    
    $('#beneficiario ul li a').on('click', function(){
        var beneficio = $(this).attr('data-beneficio');
        getDondeCobro('beneficio', beneficio, $('#dcCaptcha').val());
    });
    $('#listaExpedientes ul li a').on('click', function(){
        var id = $(this).attr('data-expediente');
        llenarExpediente(expedientes[id]);
    });
    
    $('button[type=submit]',$('#cuil')).click(function(){
        var globo = $('#cuil');
        var captcha = $('#cuilCaptcha').val();
        $('input',globo).removeClass('error');
        var valido = validarFormCuil(captcha);
        if(valido){
            getCuil($('#cuilTipo').val(), $('#cuilNumero').val(), $('#cuilNombre').val(), $('#cuilApellido').val(), $('#cuilApellidoCasada').val(), $('#cuilNacimiento').val(), $('input[name=cuilSexo]:checked').val(), captcha);
        }
    });
    
    $('#expedienteForm button[type=submit]').click(function(){
        var captcha = $('#expCaptcha').val();
        $('#expedienteForm input').removeClass('error');
        var valido = validarFormExpedientes(captcha);
        if(valido){
            getExpediente(captcha);
        }
    });
    
    $('#expedienteForm input[name=expTipo]').click(function(){
        if($('#expedienteForm input[name=expTipo]:checked').val() == 'dni'){
            $('.inputsExp').hide();
            $('.inputsExp:first').show();
        } else if($('#expedienteForm input[name=expTipo]:checked').val() == 'cuil'){
            $('.inputsExp').hide();
            $('.inputsExp:eq(1)').show();
        } else if($('#expedienteForm input[name=expTipo]:checked').val() == 'expediente'){
            $('.inputsExp').hide();
            $('.inputsExp:last').show();
        }
    });
    
    $('#cuandoCobro input').keydown(function(){
        $(this).removeClass('error');
    });
    $('input',$('#cuil')).keydown(function(){
        $(this).removeClass('error');
        $(this).next('p').html('');
    });
    $('#expedienteForm input').keydown(function(){
        $(this).removeClass('error');
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 96){
            $('nav.main').css({
                position: 'fixed',
                top: 30
            });
            $('.miAnses').css({
                marginTop: 46
            });
            $('nav.main ul').removeClass('roundedM');
        } else {
            $('nav.main').css({
                position: 'relative',
                top: 0
            });
            $('.miAnses').css({
                marginTop: 0
            });
            $('nav.main ul').addClass('roundedM');
        }
    });
    
    $('#reducirFont').click(function(){
        var actual = parseInt($('#desarrollo').css('font-size'));
        if(actual > 10)
            $('#desarrollo').css('font-size', parseInt(actual-1) + 'px');
    });
    
    $('#aumentarFont').click(function(){
        var actual = parseInt($('#desarrollo').css('font-size'));
        if(actual < 17)
            $('#desarrollo').css('font-size', parseInt(actual+1) + 'px');
    });
    
    $('ul.boxes > li > a').click(function(){
        $(this).siblings('div').toggle();
        $(this).siblings('ul').toggle();
    });
    
    /* buscador */
    
    $('form.buscador').submit(function(e){
        if($('input[type=text]', this).val() == ''){
            alert("Debe introducir un término de búsqueda.");
            e.preventDefault();
            return;
        }
    });
});