// FONT SIZE MANAGEMENT 
function FindObj(n, d){ //v4.01
    var p, i, x;
    if (!d) 
        d = document;
    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document;
        n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) 
        x = d.all[n];
    for (i = 0; !x && i < d.forms.length; i++) 
        x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) 
        x = FindObj(n, d.layers[i].document);
    if (!x && d.getElementById) 
        x = d.getElementById(n);
    return x;
}

function ChangeProp(objName, x, theProp, theValue){ //v6.0
    var obj = FindObj(objName);
    if (obj && (theProp.indexOf("style.") == -1 || obj.style)) {
        if (theValue == true || theValue == false) 
            eval("obj." + theProp + "=" + theValue);
        else 
            eval("obj." + theProp + "='" + theValue + "'");
    }
}

// FONT SIZE MANAGEMENT 

function LoadActualFontSize(){
    tempArray = document.cookie.split(";");
    for (tA = 0; tA < tempArray.length; tA++) {
        if (tempArray[tA].indexOf('fontSize') > -1) {
            fontSizeValue = tempArray[tA].split("=")
            ACTUAL_FONTSIZE = parseInt(fontSizeValue[1]);
        }
    }
}

function SaveActualFontSize(){
    var expire = new Date();
    expire.setTime(expire.getTime() + (6000 * 24 * 3600000));
    expire = expire.toGMTString();
    document.cookie = "fontSize=" + ACTUAL_FONTSIZE + "; path=/; expires=" + expire;
}

function Bigger(){
    ACTUAL_FONTSIZE = ACTUAL_FONTSIZE + 1;
    if (ACTUAL_FONTSIZE > LARGEST_FONTSIZE) {
        ACTUAL_FONTSIZE = LARGEST_FONTSIZE
    }
    ChangeProp('texto', '', 'style.fontSize', ACTUAL_FONTSIZE, 'SPAN');
    SaveActualFontSize();
}

function Smaller(){
    ACTUAL_FONTSIZE = ACTUAL_FONTSIZE - 1
    if (ACTUAL_FONTSIZE < SMALLEST_FONTSIZE) {
        ACTUAL_FONTSIZE = SMALLEST_FONTSIZE
    }
    ChangeProp('texto', '', 'style.fontSize', ACTUAL_FONTSIZE, 'SPAN');
    SaveActualFontSize();
}

ACTUAL_FONTSIZE = 14;
SMALLEST_FONTSIZE = 10;
LARGEST_FONTSIZE = 20;


function agrandarLetra(){
    //alert('agrandarLetra');
    var tamano;
    if (parseInt(document.getElementById("texto").value) < 4) {
        tamano = parseInt(document.getElementById("texto").value) + 1;
        setearestilos5(colordefault, 'tamano' + tamano);
        document.getElementById("texto").value = tamano;
    }
}

function reducirLetra(){
    //alert('reducirLetra');
    var tamano;
    if (parseInt(document.getElementById("texto").value) > 1) {
        tamano = parseInt(document.getElementById("texto").value) - 1;
        setearestilos5(colordefault, 'tamano' + tamano);
        document.getElementById("texto").value = tamano;
    }
}


function tamano(mas){
    var signo = (mas) ? 1 : -1; // Para sumar o restar el porcentaje 
    // Obtenemos el objeto que contiene el texto 
    var obj = document.getElementById("contenido");
    // Obtenemos el tamaño de letra y lo modificamos 
    var fontsize = obj.style.fontSize;
    fontsize = parseInt(fontsize.replace(/%/g, ''));
    fontsize += signo * 10;
    if (fontsize > 0 && fontsize < 0) {
        obj.style.fontSize = fontsize + "%";
    }
}


//funciona en explorer y mozilla 
var min = 8;
var max = 20;
function increaseFontSize(){
    
	//var p = document.getElementsByTagName('p');
	
	//var p = document.getElementsByClassName('agrandable');
    
	var p = $(".agrandable")
	
	
	for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else {
            var s = 12;
        }
        if (s != max) {
            s += 1;
        }
        p[i].style.fontSize = s + "px"
    }
	
	/*
	 * para los agrandables titulos
	 */
	var p = $(".agrandableTitulo")
	var min = 15;
	var max = 60;
	for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else {
            var s = 15;
        }
        if (s != max) {
            s += 1;
        }
        p[i].style.fontSize = s + "px"
    }
	
	
}

function decreaseFontSize(){
    //var p = document.getElementsByTagName('p');
    
	//var p = document.getElementsByClassName('agrandable');
	
	var p = $(".agrandable")
	
	for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else {
            var s = 12;
        }
        if (s != min) {
            s -= 1;
        }
        p[i].style.fontSize = s + "px"
    }
	
	/*
	 * para los agrandableTitulo
	 */
	var p = $(".agrandableTitulo")
	var min = 15;
	var max = 60;	
	for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        }
        else {
            var s = 15;
        }
        if (s != min) {
            s -= 1;
        }
        p[i].style.fontSize = s + "px"
    }
	
	
	
}
