$('.omnyk_stories_carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true
})

$('.omnyk-working-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 2
        },
        768: {
            items: 3,
            margin: 30
        }
    }
})