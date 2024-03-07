$(document).ready(function() {
    

    //------- Owl Carusel  js --------//  

    $('.active-testimonial-carusel').owlCarousel({
        items:3,
        loop:true,
        margin: 30,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed:150,         
        autoplay:true,    
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            961: {
                items: 3,
            }            
        }
    });


    

});
