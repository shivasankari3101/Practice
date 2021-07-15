let t1 = gsap.timeline();
t1.to(".home_text", { x: "-100%", opacity: 0 })
    .fromTo(".home_section1", {
        WebkitMaskPosition: "90% 20vh",
        WebkitMaskSize: "50%",
        duration: 5
    }, {
        WebkitMaskPosition: "50.4805% -200vh",
        WebkitMaskSize: "1000%",
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