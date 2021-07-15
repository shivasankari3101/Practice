var tween1 = gsap.fromTo(".home", {
    WebkitMaskPosition: "90%",
    WebkitMaskSize: "30%",
    duration: 5
}, {
    WebkitMaskPosition: "30%",
    WebkitMaskSize: "500%",
    duration: 10
});

ScrollTrigger.create({
    animation: tween1,
    trigger: ".home",
    scrub: true,
    pin: true
})