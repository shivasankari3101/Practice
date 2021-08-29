$('.omnyk_stories_carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true
})

var omnyk_working_carousel = $('.omnyk-working-carousel');

omnyk_working_carousel.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 2,
            loop: true
        },
        768: {
            items: 3,
            margin: 30
        }
    }
})

$('#left_slider').click(function() {
    omnyk_working_carousel.trigger('prev.owl.carousel', [1000]);
})

$('#right_slider').click(function() {
    omnyk_working_carousel.trigger('next.owl.carousel', [1000]);
})

$(window).on('load', function() {
    $('#loader').css("display", "none");
});



var animate_letters = document.getElementsByClassName("animated_text")[0].innerText.split('');

document.getElementsByClassName("animated_text")[0].innerText = "";
for (var i = 0; i < animate_letters.length; i++) {
    var span = document.createElement("span");
    span.innerText = animate_letters[i];
    $(".animated_text").append(span);

}


// var letters = $('.animated_text span');

// TweenMax.staggerFrom(
//     letters,
//     0.25, { opacity: 0, y: 200, ease: Back.easeOut },
//     0.08
// );