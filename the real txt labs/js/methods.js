$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    },
    dots: false,
    autoplay: true,
    navText:["<i class='fa nav-arrow fa-chevron-left' aria-hidden='true'></i>","<i class='fa nav-arrow fa-chevron-right' aria-hidden='true'></i>"]
})
