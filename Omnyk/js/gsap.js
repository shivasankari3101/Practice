// const t1 = gsap.timeline();
// ScrollTrigger.create({
//     animation: t1,
//     trigger: ".picture_gallery",
//     scrub: true,
//     pin: true
// })

// t1.fromTo(".overlay", { yPercent: 100 }, { yPercent: 0 }, "same1")


const images = gsap.utils.toArray(".image");

images.forEach((image, i) => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            scrub: 3,
            start: "top center",
            end: "top center",
        },
        opacity: 0,
        scale: 0.95,
        yPercent: -20
    })
})


gsap.from(".omnyk_stories", {
    scrollTrigger: {
        trigger: ".omnyk_stories",
        scrub: 3,
        start: "top center",
        end: "top center",
    },
    opacity: 0
})


console.clear();

const video = document.querySelector("#video");

if (video.readyState > 3) {
    init();
} else {
    video.addEventListener("canplaythrough", init);
}

function init() {
    video.removeEventListener("canplaythrough", init);

    gsap.to(video, {
        currentTime: video.duration,
        scrollTrigger: {
            trigger: ".header",
            scrub: 3,
            pin: true
        }
    });
}