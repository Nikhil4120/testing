/* ==============================================
          Preloader
==================================================*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/* ==============================================
          team
==================================================*/
$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            }
    }
    })
});
/* ==============================================
          Progress Bars
==================================================*/
$(function () {
    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"

            }, 2000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* ==============================================
          Responsive Tabs
==================================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});
/* ==============================================
          Portfolio
==================================================*/
$(window).on("load", function () {
    //initiallize isotope
    $('#isotope-container').isotope({

    });

    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {

        //get filter value
        var filtervalue = $(this).attr('data-filter');

        //flter Portfolio
        $('#isotope-container').isotope({
            filter: filtervalue
        });
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/* ==============================================
          Magnifier
==================================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* ==============================================
          Testimonial Section
==================================================*/
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});

/* ==============================================
          Stats
==================================================*/

$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/* ==============================================
                Clients
==================================================*/
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:6
            }
    }
    });
});

/* ==============================================
                  Google Map
==================================================*/
$(window).on("load", function () {
    // Map Variable
    var addressString = "230 Broadway, NY,New York 10007, USA";
    var myLating = {
        lat: 40.712685,
        lng: -74.005920
    };
    // render the google map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLating
    });
    // Map Marker
    var marker = new google.maps.Marker({
        position: myLating,
        map: map,
        title: "Click To See Address"
    });
    // Info WIndow
    var infowindow = new google.maps.InfoWindow({
        content: addressString,
    });

    // SHow Info Window When User Click Marker
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
    
    // Dom listener method
    google.maps.event.addDomListener(window,'resize',function(){
        
        var center = map.getCenter();
        google.maps.event.trigger(map,'resize');
        map.setCenter(center);
    });

});

/* ==============================================
                Navigation Bar
==================================================*/

/* Show and hide Navigation*/

$(function () {
    showHidenav();
    
    $(window).scroll(function () {

        showHidenav();    
        

    });

    function showHidenav() {


        if ($(window).scrollTop() > 50) {

            //show White navbar
            $("nav").addClass("white-nav-top");

            //dark logo

            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //back to top button
            $("#back-to-top").fadeIn();

        } else {
            $("nav").removeClass("white-nav-top");

            // normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }


    }
});

// smooth Scrolling
$(function(){
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        //get section id like #about #services
        
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop:$(section_id).offset().top - 64
        },1250,"easeInOutExpo");
        
        
    });
    
});

/* ==============================================
                  Mobile Menu
==================================================*/


$(function(){
    $("#mobile-nav-open-btn").click(function(){
       $("#mobile-nav").css("height","100%");
    });
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
       $("#mobile-nav").css("height","0%");
    });
});


/* ==============================================
                  Wow JS
==================================================*/

//animate on scroll

$(function(){
    new WOW().init();
});

//home animation on pageload
$(window).on("load",function(){
    
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    
    
});

