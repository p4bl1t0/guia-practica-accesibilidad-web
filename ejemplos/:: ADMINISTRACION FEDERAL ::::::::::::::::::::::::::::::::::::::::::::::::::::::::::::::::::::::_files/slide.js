$(document).ready(function() {	
        
            //Show Banner
            $(".contieneImagen .desc").show(); //Show Banner
            $(".contieneImagen .block").animate({ opacity: 0.85 }, 1 ); //Set Opacity
        
            //Click and Hover events for thumbnail list
            $(".image_thumb ul li:first").addClass('active'); 
            $(".image_thumb ul li").click(function(){ 
                //Set Variables
                var imgAlt = $(this).find('img').attr("alt"); //Get Alt Tag of Image
                var imgTitle = $(this).find('a').attr("href"); //Get Main Image URL
                var imgDesc = $(this).find('.block').html(); 	//Get HTML of block
                var imgDescHeight = $(".contieneImagen").find('.block').height();	//Calculate height of block	
                
                if ($(this).is(".active")) {  //If it's already active, then...
                    return false; // Don't click through
                } else {
                    //Animate the Teaser				
                    $(".contieneImagen .block").animate({ opacity: 0, marginBottom: -imgDescHeight }, 250 , function() {
                        $(".contieneImagen .block").html(imgDesc).animate({ opacity: 0.85,	marginBottom: "0" }, 250 );
                        $(".contieneImagen img").attr({ src: imgTitle , alt: imgAlt});
                    });
                }
                
                $(".image_thumb ul li").removeClass('active'); //Remove class of 'active' on all lists
                $(this).addClass('active');  //add class of 'active' on this list only
                return false;
                
            }) .hover(function(){
                $(this).addClass('hover');
                }, function() {
                $(this).removeClass('hover');
            });
                    
            //Toggle Teaser
            $("a.abrirCerrar").click(function(){
                $(".contieneImagen .block").slideToggle();
                $("a.abrirCerrar").toggleClass("show");
            });
            
        });//Close Function