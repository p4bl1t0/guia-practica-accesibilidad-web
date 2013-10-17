//busca caracteres que no sean espacio en blanco en una cadena  
function vacio(q){
    for (i = 0; i < q.length; i++) {
        if (q.charAt(i) != " ") {
            return true
        }
    }
    return false
}


/*
 * proceso para el manejo de llamadas de formularios
 * parametros:
 * 	- recibe el nombre de un formulario
 *  - div de salida del resultado en pantalla
 *  - parametros adicinales para indicar el tipo de busqueda
 */
function callform(formulario, divSalida, parametro, url){

//tomo el valor del campo de texto de busqueda
//campo_texto_form = document.getElementById("contenido_busqueda").value;

campo_texto_form =  $('#contenido_busqueda').attr('value'); 

//valido si no esta vacio o si solo contiene caracteres en blanco
    if ( vacio(campo_texto_form) == false) {
        alert("Ingrese criterio de busqueda.");
        document.getElementById("contenido_busqueda").focus();
        return false;
    }
    
    
    $("#resultado_busqueda").fadeIn(900, 0);
    $("#resultado_busqueda").html("<div align='center'><br><img id='image_wait' src='/extension/eztramites/design/eztramites_dgn/images/loading.gif' /></div><div align='center'><br>un momento por favor...</div>");
    //$("#resultado_busqueda").fadeOut(900);
    
    //var url = '/index.php/tramites/modul1/index?m=busqueda';    
    //alert('Parametros: formulario, ' + formulario + ' divsalida, ' + divSalida + ' parametro, ' + parametro + ' url, ' + url);
    
    //tomo el valor para la busqueda simple
    //alert('busqueda simple');
    texto = $('#contenido_busqueda').attr('value');
    $('#SearchText').attr('value', texto);
    $('#PhraseSearchText').attr('value', '');
    
    var options = {
        target: '#' + divSalida + '',
        url: url
        // updated with server response
        // beforeSubmit: showRequest, // pre-submit callback
        // success: showResponse // post-submit callback
    
        // other available options:
        // url: url // override for form's 'action' attribute
        // type: type // 'get' or 'post', override for form's 'method' attribute
        // dataType: null // 'xml', 'script', or 'json' (expected server response
        // type)
        // clearForm: true // clear all form fields after successful submit
        // resetForm: true // reset the form after successful submit
    
        // $.ajax options can be used here too, for example:
        // timeout: 3000
    };
    
    $('#' + formulario).ajaxSubmit(options);
    return false;
    
    // ejemplo capturando eventos
    /*
    
     
    
     
    
     
    
     * $(formulario).bind("submit", function() { //alert, capturo el evento del
    
     
    
     
    
     
    
     * submit del formulario });
    
     
    
     
    
     
    
     */
    
}

$(document).ready(function(){
    $('#contenido_busqueda').keyup(function(e){
        //alert(e.keyCode);
        if (e.keyCode == 13) {
            //alert('Enter key was pressed.');
            //callform('busqueda_simple','resultado_busqueda_simple', 'simple');
            //callform('busqueda_simple','resultado_busqueda','simple','/index.php/tramites/modul1/index?m=busqueda');
            //return true;
        }
    });
});
