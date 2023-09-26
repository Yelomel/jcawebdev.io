function slider_carouselInit() {
    $('.owl-carousel.slider-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        stagePadding: 2,
        autoplay: false,
        nav: true,
        navText: ["<i class='far fa-arrow-alt-circle-left'></i>","<i class='far fa-arrow-alt-circle-right'></i>"],
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
            },
            992: {
                items: 5
            }
        }
    });
}
slider_carouselInit();

$('.SeeMore').click(function(){
    var $this = $(this);
    $this.toggleClass('SeeMore');
    if($this.hasClass('SeeMore')){
        $this.text('Read More');			
    } else {
        $this.text('Read Less');
    }
});

$('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});