// const t1 = gsap.timeline();
// ScrollTrigger.create({
//     animation: t1,
//     trigger: ".picture_gallery",
//     scrub: true,
//     pin: true
// })

// t1.fromTo(".overlay", { yPercent: 100 }, { yPercent: 0 }, "same1")


const features = gsap.utils.toArray(".image");

features.forEach((feature, i) => {
    gsap.from(feature, {
        scrollTrigger: {
            trigger: feature,
            scrub: 3,
            start: "top center",
            end: "top center",
        },
        opacity: 0,
        scale: 0.95,
        yPercent: -20
    })
})