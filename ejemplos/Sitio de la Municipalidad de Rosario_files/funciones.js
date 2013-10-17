// Funciones


// Abre ventanas

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// Intercambio de im?genes

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// precarga de imagenes
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}


function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

/* funcion abrir agenda */ 

function abrirAgenda (ancla) {
		url = ("http://www.rosario.gov.ar/sitio/agenda/agenda.html#"+ ancla );
		window.open ( url ,'agenda','scrollbars=no,width=720,height=500,resizable=no');
}

/* Funcion goToUrl --  Chekear si se usa */ 

function goToUrl(box) {
	url = box.options[box.selectedIndex].value; 

	if (url.lastIndexOf(';') != -1) {			//	uso el ';' para separar la url de las opciones
		opciones = url.substring( url.lastIndexOf(";") + 1 );
		url = url.substring( 0, url.lastIndexOf(";") );
		window.open ( url , opciones ); 
		
	} else if (url != 'null') {					//	si la opcion es  null no tengo que ir a ningun lado
		document.quicklinks.action = url;
		document.quicklinks.submit();
	}

	return true; 
}