$(document).ready(function(){

    $nav = $('nav');
    $toggleCollapse = $('.toggle-collapse');

    //click events

    $toggleCollapse.click(()=> { //when bars-icon is clicked
        $nav.toggleClass('collapse') //add or remove collapse class to nav
    })

    //Owl-carousel blog

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:3
                
            }
        }
    });
})