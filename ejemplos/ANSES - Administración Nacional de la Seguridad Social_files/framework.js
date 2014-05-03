var cbFramework = {};

$(document).ready(function(){
    
    /*** TOOLKIT ***/
    cbFramework.toolkit = (function(){
        
        var elementConstructor = function (tag) {
            return document.createElement(tag);
        };
        
        var createElement = function(tag){
            var domElement = elementConstructor(tag);
            
            var bind = function(event, callback){
                if (domElement.addEventListener){
                  domElement.addEventListener(event, callback, false); 
                } else if (domElement.attachEvent){
                  domElement.attachEvent('on'+event, callback);
                }
            };
            
            var trigger = function (e) {
                var event;
                if (document.createEvent) {
                    event = document.createEvent("HTMLEvents");
                    event.initEvent(e, true, true);
                } else {
                    event = document.createEventObject();
                    event.eventType = "on"+e;
                }

                event.eventName = e;
                event.memo = memo || { };

                if (document.createEvent) {
                    element.dispatchEvent(event);
                } else {
                    element.fireEvent(event.eventType, event);
                }
            };
            
            return {
                addClass: function(clase){
                    domElement.className = clase;
                },
                getClass: function(){
                    return domElement.className;
                },
                setId: function(id){
                    domElement.id = id;
                },
                append: function(content){
                    domElement.innerHTML += content; 
                },
                getDom: function(){
                    return domElement;
                },
                bindClick: function(callback){
                    if(typeof callback !== 'function')
                        return;
                    
                    bind('click', callback);
                },
                triggerEvent: function(event){
                    trigger(event);
                },
                toString: function(){
                    return domElement.toString();
                }
            }
        };
        
        return {
            createElement: createElement
        }
    })();
    
    /*** NOTIFICACIONES ***/
    cbFramework.notificationHandler = (function () {

        var notify = document.createElement('div');
        notify.id = "notify";
        $('body').append(notify);
        
        var getMsgBox = function (txtTitulo, txtMensaje) {
            var titulo = document.createElement('p'),
                mensaje = document.createElement('p');
            titulo.innerHTML = txtTitulo;
            mensaje.innerHTML = txtMensaje;
            titulo.className = "titulo";
            var divDefault = document.createElement('div');
            divDefault.appendChild(titulo);
            divDefault.appendChild(mensaje);
            divDefault.style.display = 'none';
//            $(divDefault).click(function(){
//                hideMsgBox(this);
//            });
            notify.appendChild(divDefault);
            
            return divDefault;
        },
        hideMsgBox = function (msg){
            notify.removeChild(msg);
        };

        return {
            infoMsg: function (titulo, txt) {
                var msgBox = getMsgBox(titulo, txt);
                msgBox.style.display = 'block';
                setTimeout(this.ocultarMsg, 5000, msgBox);
            },
            errorMsg: function (txt) {
                this.infoMsg("Error", txt);
            },
            ocultarMsg: function (msg){
                hideMsgBox (msg);
            }
        }
    })();

    /*** AJAX ***/
    cbFramework.server = (function () {
        
        var send = function(command, action, params, callback){
            if (typeof(params) == 'object') {
                var strParams = '';
                for(var i in params) {
                    strParams += "&"+i+"="+params[i];
                }
            } else
                strParams = "&"+params;

            $.ajax({
                url: "/"+command.toDash()+"/"+action+"/json/",
                dataType: "json",
                type: 'POST',
                data: strParams,
                success: function (data) {
                    if(typeof callback == "function")
                        callback(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    cbFramework.notificationHandler.errorMsg("No se pudieron obtener resultados.");
                }
            });
        }
        
        return {
            send: send,
            sendForm: function(form, callback){
                send($('[name=command]',form).val(), $('[name=action]',form).val(), form.serialize(), callback);
            }
        }
    })();

    /*** FORMS ***/
    cbFramework.forms = (function () {
        
        function validar(form){
            var valida = true, f = $(form);

            $('[required]', f).each(function () {
               if ($(this).val() == '') {
                   valida = false;
                   $(this).addClass('error');
               }
            });
            
            if (valida)
                return true;

            cbFramework.notificationHandler.errorMsg("No se completaron todos los campos obligatorios.");
            return false;
        }
        
        return {
            validar: function (form){
                return validar(form);
            },
            serializar: function (form) {
                var f = $(form);
                
                $('input[type=date]', f).each(function(){
                    var valor = $(this).val();
                    $(this).val(valor.replace(/\//g, '-'));
                });

                if (validar(form))
                    return f.serialize();

                return false;
            },
            setTinyMCE: function (textarea) {
                $(textarea).tinymce({
                    script_url : '/js/tiny_mce/tiny_mce.js',
                    theme : "advanced",
                    content_css: "/css/tinymce.css",
                    plugins : "table",
                    width: '700px',
                    height: '250px',
                    theme_advanced_toolbar_location : "top",
                    theme_advanced_buttons1 : "formatselect,|,bold,italic,underline,|,justifyleft,justifycenter,justifyright,justifyfull,|,cut,copy,paste,|,bullist,numlist,|,outdent,indent,|,undo,redo,|,forecolor,|,removeformat",
                    theme_advanced_buttons2 : "link,unlink,|,tablecontrols,|,image",
                    theme_advanced_buttons3 : "",
                    theme_advanced_toolbar_align : "left",
                    theme_advanced_statusbar_location : "bottom",
                    end_container_on_empty_block: true,
                    theme_advanced_blockformats : "p,div,h2,h3,h4,blockquote",
                    convert_urls : false
                });
            },
            /**
             * @param select elemento del DOM
             * @param coleccion array
             * @param opciones object (primeroVacio, nombre, valor, seleccionado)
             */
            fillCombobox: function (select, coleccion, opciones) {
                if(opciones.primeroVacio === undefined)
                    opciones.primeroVacio = true;
                if(opciones.vaciar === undefined)
                    opciones.vaciar = true;

                if(opciones.vaciar)
                    $(select).empty();

                if (opciones.primeroVacio)
                    $(select).prepend("<option value=''></option>");

                for(var i=0; i<coleccion.length;i++) {
                    if (opciones.seleccionado == coleccion[i][opciones.valor])
                        $(select).append("<option value='"+coleccion[i][opciones.valor]+"' selected>"+coleccion[i][opciones.nombre]+"</option>");
                    else
                        $(select).append("<option value='"+coleccion[i][opciones.valor]+"'>"+coleccion[i][opciones.nombre]+"</option>");
                }
            }
        };
    })();

    /*** SUGGEST ***/
    /**
     * Recibe el objeto de DOM input y la configuración (objeto):
     * - name: propiedad del objeto JSON a usar como HTML de cada opción
     * - value: propiedad del objeto JSON a usar como valor de cada opción
     * - callback: función a llamar cuando se selecciona una opción
     */
    cbFramework.suggest = (function () {
        var ulSuggest = document.createElement('ul'),
        settings = {},
        extraInfo = {};
        
        function fnBlur(e){
//            $('ul.suggest').hide();
        }

        function fnKeydown(e) {
            var input = $(this);
            var code = (e.keyCode ? e.keyCode : e.which), selected = $('li.selected', ulSuggest);
            if (code == 38 && $('ul.suggest').is(':visible')) {
                var anterior = selected.prev('li');
                if (anterior.length == 0)
                    anterior = $('li:last', ulSuggest);
                selected.removeClass('selected');
                anterior.addClass('selected');
            } else if (code == 40 && $('ul.suggest').is(':visible')) {
                var siguiente = selected.next('li');
                if (siguiente.length == 0)
                    siguiente = $('li:first', ulSuggest);
                selected.removeClass('selected');
                siguiente.addClass('selected');
            } else if (code == 13 && $('ul.suggest').is(':visible')) {
                $('li.selected a', ulSuggest).click();
            } else if (code == 32 && $('ul.suggest').is(':visible')) {
                $(ulSuggest).hide();
            } else {
                if ($(this).val().length > 2) {
                    var n = {needle: $(this).val()};
                    if(extraInfo)
                        $.extend(n, extraInfo);
                    cbFramework.server.send($(this).attr('data-command'), 'suggest', n, function (data) {
                        $(ulSuggest).empty();
                        for(var i=0; i<data.coleccion.length; i++) {
                            var txt;
                            if(settings.adicional)
                                txt = data.coleccion[i][settings.name]+"<br/><small>"+data.coleccion[i][settings.adicional]+"</small>";
                            else
                                txt = data.coleccion[i][settings.name];
                            $(ulSuggest).append('<li val="'+data.coleccion[i][settings.value]+'"><a href="javascript:void(0)">'+txt+'</a></li>');
                        }
                        $('li', ulSuggest).click(function (e) {
                            e.stopPropagation();
                            $(input).val($('a',this).html());
                            if($.isFunction(settings.callback))
                                settings.callback($(this).attr('val'));
                            $(ulSuggest).hide();
                        });
                        $('li', ulSuggest).mouseover(function () {
                            $('li.selected', ulSuggest).removeClass('selected');
                            $(this).addClass('selected');
                        });

                        var offset = $(input).offset(),
                        offsetParent = $(input).parent().offset(),
                        top = offset.top - offsetParent.top + 20,
                        left = offset.left - offsetParent.left;
                        
                        $(ulSuggest).addClass('suggest').css({
                            top: top,
                            left: left
                        }).show();
                        $('li:first', ulSuggest).addClass('selected');
                        var padre = $(input).parent();
                        if ($('ul', padre).length == 0) {
                            padre.append(ulSuggest);
                            ulSuggest = $('ul', padre);
                        }
                    });
                }
            }
        }

        return {
            init: function(input, opt, extras){
                if(typeof opt != "undefined")
                    settings = opt;
                if(typeof extras != "undefined")
                    extraInfo = extras;
                input.keydown(fnKeydown);
                input.blur(fnBlur)
            }
        };
    })();

});


String.prototype.toDash = function(){
	return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();}).substr(1);
};