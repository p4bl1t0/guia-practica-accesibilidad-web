var strNotas = "";	
var strBanner = "";

var xmlNotas=LoadXMLDoc("xml/notas.xml");
var nodesNotas=xmlNotas.getElementsByTagName("item");


     strBanner += "<a href='https://seti.afip.gob.ar/av/seleccionVencimientos.do'><img src='http://www.afip.gov.ar/images/banners/paraAgendar.png' /></a>"
	 strBanner += "<br/><br/>";
for (i=0;i<nodesNotas.length;i++){
	strNotas += "<div class='cajaNota'>";					
	strNotas += "<div class='tituloNota'>";
	strNotas += nodesNotas[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	strNotas += "</div>";
	strNotas += "<p>";
	strNotas += nodesNotas[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
	strNotas += "<br/><br/>";
	strNotas += "<img src="+ nodesNotas[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + " alt="+ nodesNotas[i].getElementsByTagName("alt")[0].childNodes[0].nodeValue +" class='fixIe6' />";
	strNotas += "<br/><br/>";
	strNotas += "<a href=" + nodesNotas[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + " class='textoResaltadoCeleste'>+ info ></a>";
	strNotas += "</p>";
	strNotas += "</div>";
	strNotas += "<div class='clear15'></div>"						
}
document.getElementById("contenidoBanners").innerHTML = strBanner;
document.getElementById("contenidoNota").innerHTML = strNotas;
