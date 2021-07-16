let t1 = gsap.timeline();


ScrollTrigger.create({
    animation: t1,
    trigger: ".home_section1",
    scrub: true,
    pin: true
})


ScrollTrigger.matchMedia({
    "(max-width: 699px)": () => {
        t1.to(".home_text", { x: "-100%", opacity: 0 })
            .fromTo(".home_section1", {
                WebkitMaskPosition: "0% 0%",
                WebkitMaskSize: "100%"
            }, {
                WebkitMaskPosition: "50% 10%",
                WebkitMaskSize: "1500vmin"
            })
            .fromTo(".services", {
                x: "-100%"
            }, {
                x: "0%"
            });
    },
    "(min-width: 769px)": () => {
        t1.to(".home_text", { x: "-100%", opacity: 0 })
            .fromTo(".home_section1", {
                WebkitMaskPosition: "90% 20vh",
                WebkitMaskSize: "50%"
            }, {
                WebkitMaskPosition: "50.4805% -200vh",
                WebkitMaskSize: "1000%"
            })
            .fromTo(".services", {
                x: "-100%"
            }, {
                x: "0%"
            });
    },
});