/*
 * jquery-counter plugin
 *
 * Copyright (c) 2009 Martin Conte Mac Donell <Reflejo@gmail.com>
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 */
jQuery.fn.countdown=function(d){var e={stepTime:60,format:"dd:hh:mm:ss",startTime:"01:12:32:55",digitImages:6,digitWidth:53,digitHeight:77,timerEnd:function(){},image:"digits.png"};var f=[],interval;var g=function(a){var c=0;for(var i=0;i<e.startTime.length;i++){if(parseInt(e.startTime[i])>=0){elem=$('<div id="cnt_'+i+'" class="cntDigit" />').css({height:e.digitHeight*e.digitImages*10,float:'left',background:'url(\''+e.image+'\')',width:e.digitWidth});f.push(elem);h(c,-((parseInt(e.startTime[i])*e.digitHeight*e.digitImages)));f[c].__max=9;switch(e.format[i]){case'h':f[c].__max=(c%2==0)?5:9;if(c%2==0)f[c].__condmax=4;break;case'd':f[c].__max=9;break;case'm':case's':f[c].__max=(c%2==0)?5:9}++c}else elem=$('<div class="cntSeparator"/>').css({float:'left'}).text(e.startTime[i]);a.append(elem)}};var h=function(a,b){if(b!==undefined)return f[a].css({'marginTop':b+'px'});return parseInt(f[a].css('marginTop').replace('px',''))};var j=function(a){f[a]._digitInitial=-(f[a].__max*e.digitHeight*e.digitImages);return function _move(){mtop=h(a)+e.digitHeight;if(mtop==e.digitHeight){h(a,f[a]._digitInitial);if(a>0)j(a-1)();else{clearInterval(interval);for(var i=0;i<f.length;i++)h(i,0);e.timerEnd();return}if((a>0)&&(f[a].__condmax!==undefined)&&(f[a-1]._digitInitial==h(a-1)))h(a,-(f[a].__condmax*e.digitHeight*e.digitImages));return}h(a,mtop);if(h(a)/e.digitHeight%e.digitImages!=0)setTimeout(_move,e.stepTime);if(mtop==0)f[a].__ismax=true}};$.extend(e,d);this.css({height:e.digitHeight,overflow:'hidden'});g(this);interval=setInterval(j(f.length-1),1000)};
