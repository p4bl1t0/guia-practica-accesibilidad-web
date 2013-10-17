var strNews = "";		

var xmlNews=LoadXMLDoc("xml/noticias.xml");
var nodesNews=xmlNews.getElementsByTagName("item");


strNews += "<div class='panelNoticias'>";                    
for (i=0;i<nodesNews.length;i++){
							
	strNews += "<div class='tituloNoticia'>";
	strNews += nodesNews[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
	strNews += "</div>";
	strNews += "<p>";
	strNews += nodesNews[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
	strNews += "<br/><br/>";
	strNews += "<img src="+ nodesNews[i].getElementsByTagName("imagen")[0].childNodes[0].nodeValue + " alt="+nodesNews[i].getElementsByTagName("alt")[0].childNodes[0].nodeValue +"  class='fixIe6'  />";
	strNews += "<br/><br/><br/>";
	strNews += "<a href=" + nodesNews[i].getElementsByTagName("link")[0].childNodes[0].nodeValue + " class='textoResaltadoCeleste'>+ info ></a>";
	strNews += "</p>";
	strNews += "<div class='separa'></div>"						
}

document.getElementById("contenidoNoticias").innerHTML = strNews;