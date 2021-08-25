$(document).ready(function() {
    const currentFrame = index => (
        `../dist/images/Smart Ring/Ring on Finger/SmartRingIntoFinger.${index}.png`
    )
    for (var i = 1; i < 116; i++) {
        image = document.createElement("img");
        image.src = currentFrame(i);
        $('#container').append(image);
    }

    function img_frame(index) {
        for (var i = 0; i < 116; i++) {
            document.getElementsByClassName("animated")[i].style.display = "none";
            document.getElementsByClassName("animated")[i].style.display = "block";
        }
    }
    $("#container img").attr("class", "animated");
    gsap.to("#container", {

        scrollTrigger: {
            trigger: "#container",
            scrub: true,
            pin: true,
            onUpdate: ({ progress, direction }) => {
                var scrollfraction = Math.round(progress * 100 + 1);
                console.log(scrollfraction);

                if (direction == 1) {
                    document.getElementsByClassName("animated")[scrollfraction - 1].style.display = "none";
                    document.getElementsByClassName("animated")[scrollfraction].style.display = "block";
                } else {
                    document.getElementsByClassName("animated")[scrollfraction + 1].style.display = "none";
                    document.getElementsByClassName("animated")[scrollfraction].style.display = "block";
                }
            },
        }
    });


    // var pictureCount = $('#container img').length;
    // var scrollResolution = 5;

    // animateHorse();

    // function animateHorse() {
    //     var currentScrollPosition = window.pageYOffset;
    //     var imageIndex = Math.round(currentScrollPosition / scrollResolution);

    //     if (imageIndex >= pictureCount) {
    //         imageIndex = pictureCount - 1; // Select last image
    //     }

    //     $("#container img").hide();
    //     $("#container img").eq(imageIndex).show();
    //     console.log(imageIndex);
    // }

    // $(window).bind('scroll', function() {
    //     animateHorse();
    // });
});