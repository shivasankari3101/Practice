let t1 = gsap.timeline();
t1.to(".home_text", { x: "-100%" })
    .fromTo(".home_section1", {
        WebkitMaskPosition: "90%",
        WebkitMaskSize: "50%",
        duration: 5
    }, {
        WebkitMaskPosition: "70%",
        WebkitMaskSize: "2000%",
        duration: 10
    })
    .fromTo(".services", {
        x: "-100%"
    }, {
        x: "0%"
    });

ScrollTrigger.create({
    animation: t1,
    trigger: ".home_section1",
    scrub: true,
    pin: true
})