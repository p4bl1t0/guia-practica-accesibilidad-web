var xmldoc;

function LoadXMLDoc(xmlFile)
{		
	if(window.XMLHttpRequest)
	{								
		xmldoc = new XMLHttpRequest();
		xmldoc.open("GET",xmlFile,false);	
		xmldoc.send(null);
		
		return (xmldoc.responseXML);
	}
	else if (window.ActiveXObject) 			
	{
		xmldoc = new ActiveXObject("MSXML.DOMDocument");		
		xmldoc.async = false;			
		xmldoc.load(xmlFile);
		
		return (xmldoc);								
	}
}			