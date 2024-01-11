/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // loading screen
    $(window).on('load', function() {
        $("body").css("overflow","auto")
		$(".loading-overlay").fadeOut("1000");
	});
    
    // submenu at header
    $("header .submenu").hover(function(){
       $(this).children("ul").slideToggle(500);
    });
//    $(document).click(function(){
//        $("header .submenu ul").slideUp( 300 );
//    });
    
    
    // menu of progress courses at profile page
    $(".profile .container .profcourses > .row > div .row").click(function(e){
       $(this).children(".upmenu").slideToggle(500);
          e.stopPropagation();
    });
    $(document).click(function(){
        $(".profile .container .profcourses > .row > div .row .upmenu").slideUp( 300 );
    });
    
    
    // certificate form at header
    $("header .hricons img").click(function(){
       
        $("header .hricons .form-certificate").fadeToggle(500);
                
    });
    
    // search form at header
    $("header .flaticon-search").click(function(){
       
        $("header .hricons .form-search").fadeToggle(500);
                
    });
    
    // responsive menu at header at mobile screen
    
    $("header .hrlogo i").click(function(){
       
        $("header .hrlinks").slideToggle(500);
                
    });
    
    $("header .hrlogo i").click(function(){
       
        $("header .hricons").fadeToggle(500);
                
    });
        
    $('#Container').mixItUp();
    
    // multi-parts for selected portfolio
    $('.hamat-courses .portshuffle ul li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    
    // the bitton to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
    // multi-parts for course inner page
    $('.course-inner .course-details ul li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".course-inner .maincon .complex").hide();
        $("." + $(this).data('class')).fadeIn(500);
    });
    
    
    // this part for course content page scripts
    
    $(".item .item-up").click(function(){
       
        $(this).siblings(".item-down").slideToggle(500);
        $(this).children("div").children(".fa-angle-right").toggleClass('angle-rotate');
                
    });
    
    $(".tutorial-info .fa-plus").click(function(){
        
        $(".item .item-down").slideDown(500);
        $(".fa-angle-right").addClass('angle-rotate');
        
    })
    
    $(".tutorial-info .fa-minus").click(function(){
        
        $(".item .item-down").slideUp(500);
        $(".fa-angle-right").removeClass('angle-rotate');
        
    })
    
    $(".control-all").click(function(){
        
        $(".hidding-part").slideToggle(500);
        $(".fa-angle-right").toggleClass('angle-rotate');
        
    })
    
    
    // loop carousel
    $('.loop').owlCarousel({
        center: true,
        items:3,
        autoplay:true,
        smartSpeed:500,
        loop:true,
        dots:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1199:{
                items:3
            }
        }
    });
    
    // owl carousel 
    $('.four-items').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1199:{
                items:5
            }
        }
    });
    
    
    
});