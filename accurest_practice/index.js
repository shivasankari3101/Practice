var tween1 = gsap.fromTo(".home", {
    WebkitMaskPosition: "90%",
    WebkitMaskSize: "50%",
    duration: 5
}, {
    WebkitMaskPosition: "70%",
    WebkitMaskSize: "2000%",
    duration: 10
});

ScrollTrigger.create({
    animation: tween1,
    trigger: ".home",
    scrub: true,
    pin: true
})