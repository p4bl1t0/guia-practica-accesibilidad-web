// Colocar nobre al archivo de imagenes de esta forma:
// icon-font-more-on.png
// icon-font-more-off.png
function setHover(img){
      
        strUrl = img.src
        arrUrl = strUrl.split('/');
        imgDir = arrUrl[arrUrl.length-2];
        fileName = arrUrl[arrUrl.length-1];
        arrFileName = fileName.split('.');
        fileName = arrFileName[arrFileName.length-2];
        fileExt = arrFileName[arrFileName.length-1];
        
        fileName = fileName.split('-off');
        
        //agregado para extension de ezpublish
      ///extension/eztramites/design/eztramites_dgn/images/icon-font-more-off.png
        img.src = "/extension/eztramites/design/eztramites_dgn/"+imgDir + "/" + fileName[0] + "-on." + fileExt;
}

// Colocar nobre al archivo de imagenes de esta forma:
// icon-font-more-on.png
// icon-font-more-off.png
function setOut(img){
        strUrl = img.src
        arrUrl = strUrl.split('/');
        imgDir = arrUrl[arrUrl.length-2];
        fileName = arrUrl[arrUrl.length-1];
        arrFileName = fileName.split('.');
        fileName = arrFileName[arrFileName.length-2];
        fileExt = arrFileName[arrFileName.length-1];
        fileName = fileName.split('-off');
        fileName = fileName[0].split('-on');
        img.src = "/extension/eztramites/design/eztramites_dgn/"+imgDir + "/" + fileName[0] + "-off." + fileExt;
}


function trim(cadena)
{
	for(i=0; i<cadena.length; )
	{
		if(cadena.charAt(i)==" ")
		cadena = cadena.substring(i+1, cadena.length);
		else
		break;
	}
	for(i = cadena.length-1; i>=0; i = cadena.length-1)
	{
		if(cadena.charAt(i)==" ")
		cadena = cadena.substring(0,i);
		else
		break;
	}
	return cadena;
}

function getCookie(name){
	var cname = name + "=";
	var dc = document.cookie;
	if (dc.length > 0) {
		begin = dc.indexOf(cname);
		if (begin != -1) {
			begin += cname.length;
			end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
			return unescape(dc.substring(begin, end));
		}
	}
	return null;
}

function setCookie(name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
	((expires == null) ? "" : "; expires=" + expires.toString()) +
	((path == null) ? "" : "; path=" + path) +
	((domain == null) ? "" : "; domain=" + domain) +
	((secure == null) ? "" : "; secure");
}

function delCookie(name,path,domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path == null) ? "" : "; path=" + path) +
		((domain == null) ? "" : "; domain=" + domain) +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

function pullCookie(id){
	var classifields = getCookie('classifields');
	if(classifields == null){
		classifields = 'null_null_null_null';
	}
	var arrClass = classifields.split('_');
	class_1 = arrClass[0];
	class_2 = arrClass[1];
	class_3 = arrClass[2];
	class_4 = arrClass[3];

	if ((id != class_1) && (id != class_2) && (id != class_3) && (id != class_4)){
		// Mueve la cola
		class_4 = class_3;
		class_3 = class_2;
		class_2 = class_1;
		class_1 = id;
		// Borra las viejas
		delCookie('classifields', '/');
		classifields = class_1 + '_' + class_2 + '_' + class_3 + '_' + class_4;
		// Fecha de expiracion		
		var expDays = 30;
		var exp = new Date(); 
		exp.setTime(exp.getTime() + (expDays*24*60*60*1000));		
		// Guarda los nuevos
		setCookie('classifields', classifields, exp, '/');
	}
}