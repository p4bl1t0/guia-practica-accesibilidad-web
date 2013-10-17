var strNotasPie = "";		

var xmlNotasPie=LoadXMLDoc("xml/notasPie.xml");
var nodesNotasPie=xmlNotasPie.getElementsByTagName("item");



                 
for (i=0;i<nodesNotasPie.length;i++){
							
	strNotasPie += "<div class='cajaNota' id='cajaInferior'>";
	strNotasPie += "<div class='tituloNota'>";
	strNotasPie += nodesNotasPie[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	strNotasPie += "</div>";
	strNotasPie += "<p>";
	strNotasPie += nodesNotasPie[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
	strNotasPie += "<br/><br/>";	
	strNotasPie += "<img src="+ nodesNotasPie[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + " alt="+ nodesNotasPie[i].getElementsByTagName("alt")[0].childNodes[0].nodeValue +" class='fixIe6' border='0' />";
	strNotasPie += "<br/><br/><br/>";
	strNotasPie += "<a href=" + nodesNotasPie[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + " class='textoResaltadoCeleste'>+ info ></a>";
	strNotasPie += "</p>";
	strNotasPie += "</div>";					
}

document.getElementById("contenidoNotasPie").innerHTML = strNotasPie;