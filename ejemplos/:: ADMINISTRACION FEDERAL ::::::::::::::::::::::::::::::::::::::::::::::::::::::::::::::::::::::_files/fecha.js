var fecha=new Date();
var diames=fecha.getDate();
var diasemana=fecha.getDay();
var mes=fecha.getMonth() +1 ;
var ano=fecha.getFullYear();
		
var textosemana = new Array (7);
  textosemana[0]="domingo";
  textosemana[1]="lunes";
  textosemana[2]="martes";
  textosemana[3]="miércoles";
  textosemana[4]="jueves";
  textosemana[5]="viernes";
  textosemana[6]="sábado";

var textomes = new Array (12);
  textomes[1]="enero";
  textomes[2]="febrero";
  textomes[3]="marzo";
  textomes[4]="abril";
  textomes[5]="mayo";
  textomes[6]="junio";
  textomes[7]="julio";
  textomes[8]="agosto";
  textomes[9]="septiembre";
  textomes[10]="octubre";
  textomes[11]="noviembre";
  textomes[12]="diciembre";
  document.write(textosemana[diasemana] + ", " + diames + " de " + textomes[mes] + " de " + ano);