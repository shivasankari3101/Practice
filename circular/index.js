const t1 = gsap.timeline();

t1.fromTo(".text1", { yPercent: 0 }, { yPercent: -100 }, "same1")
    .fromTo(".img1", { yPercent: 0 }, { yPercent: -100 }, "same1")
    .addLabel("same1")
    .fromTo(".text2", { yPercent: 100 }, { yPercent: -100 }, "same2")
    .fromTo(".img2", { yPercent: 100 }, { yPercent: -100 }, "same2")
    .addLabel("same2")
    .fromTo(".text3", { yPercent: 100 }, { yPercent: -100 }, "same3")
    .fromTo(".img3", { yPercent: 100 }, { yPercent: -100 }, "same3")
    .addLabel("same3")
    .fromTo(".text4", { yPercent: 100 }, { yPercent: -100 }, "same4")
    .fromTo(".img4", { yPercent: 100 }, { yPercent: -100 }, "same4")
    .addLabel("same4")
    .from(".slogan", { yPercent: 100 })
    .fromTo(".overlay", { xPercent: 10 }, { xPercent: 100 });



ScrollTrigger.create({
    animation: t1,
    trigger: ".section1",
    scrub: true,
    pin: true
})


const t2 = gsap.timeline();

t2.to(".ring_box img", { rotation: 45 }, "same1")
    .fromTo(".p1", { yPercent: 0 }, { yPercent: -100 }, "same1")
    .to(".ring_box img", { rotation: 90 }, "same2")
    .fromTo(".p2", { yPercent: 100 }, { yPercent: -100 }, "same2")
    .to(".ring_box img", { rotation: 120 }, "same3")
    .fromTo(".p3", { yPercent: 100 }, { yPercent: 0 }, "same3")
    .addLabel("same1")
    .addLabel("same2")
    .addLabel("same3");

ScrollTrigger.create({
    animation: t2,
    trigger: ".ring_box",
    scrub: true,
    pin: true
});

gsap.registerPlugin(MotionPathPlugin);

const t3 = gsap.to(".circle", {
    duration: 5,
    ease: "power1.inOut",
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0, 1]
    }
});


ScrollTrigger.create({
    animation: t3,
    trigger: "#stairs",
    scrub: 4,
    pin: true
});


const t4 = gsap.timeline();

t4.to(".mobile1", { x: -70 }, "same")
    .to(".mobile2", { x: 0 }, "same")
    .to(".mobile3", { x: 70 }, "same")
    .addLabel("same");


ScrollTrigger.create({
    animation: t4,
    trigger: ".mobiles",
    scrub: 3,
    pin: true,
    start: "top center",
    end: "top center"
});


const feature_texts = gsap.utils.toArray(' .feature_text');

feature_texts.forEach((feature, i) => {
    gsap.to(feature, {
        scrollTrigger: {
            trigger: feature,
            scrub: 1,
            start: "center center",
            end: "center center",
        },
        yPercent: -20
    })
})

const features = gsap.utils.toArray(".feature");

features.forEach((feature, i) => {
    gsap.from(feature, {
        scrollTrigger: {
            trigger: feature,
            scrub: 3,
            start: "top center",
            end: "top center",
        },
        opacity: 0,
        scale: 0.95
    })
})