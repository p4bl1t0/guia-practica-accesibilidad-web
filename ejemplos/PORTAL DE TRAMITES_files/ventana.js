function abrir (pagina,x,y) {
var
dimensiones="width="+x+",height="+y;
opciones="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,"+dimensiones+",top=0,left=0";
window.open(pagina,"",opciones);
}

function abrir_limpia (pagina,x,y) {

if ((typeof (x) == "undefined") && (typeof (y) == "undefined")) {
	var dimensiones = "type=fullWindow,fullscreen";
}
else {
	var dimensiones="width="+x+"px,height="+y+"px";	
}
var opciones="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,"+dimensiones+",top=85,left=170";
window.open(pagina,"imprimir","scrollbars=1,menubar=0,resizable=1,width=800,height=600,");

}


// abre una nueva y cierra la actual: usado actualmente para abrir
// www.virtualtours.com.ar
function abrir_cerrar_anterior (pagina) {
var
opciones="toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=800,height=600,top=85,left=140";
window.open(pagina,"",opciones);
window.close()
}


function pasarVariables(pagina, nombres) {
pagina +="?";
nomVec = nombres.split(",");
for (i=0; i<nomVec.length; i++)
pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
pagina = pagina.substring(0,pagina.length-1);
location.href=pagina;
}

