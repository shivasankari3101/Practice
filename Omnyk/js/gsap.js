//Canvas for finger animation

const canvas = document.getElementById("ring_on_finger");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 115;
const currentFrame = index => (
    `./images/Smart Ring/Ring on Finger/SmartRingIntoFinger.${index+1}.png`
);

const images = []
const finger_imgs = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}


//Canvas for Zoomed ring animation

const canvas1 = document.getElementById("ring_zoom");
const context1 = canvas1.getContext("2d");

canvas1.width = 1158;
canvas1.height = 770;

const frameCount1 = 120;
const currentFrame1 = index => (
    `./images/Smart Ring/Ring Rotate Zoom In/SmartRingRotateZoom${(index).toString().padStart(3, '0')}.png`
);

const images1 = []
const finger_imgs1 = {
    frame: 0
};

for (let i = 0; i < frameCount1; i++) {
    const img = new Image();
    img.src = currentFrame1(i);
    images1.push(img);
}


//Canvas for ring on charger animation

const canvas2 = document.getElementById("ring_on_charger");
const context2 = canvas2.getContext("2d");

canvas2.width = 500;
canvas2.height = 500;

const frameCount2 = 60;
const currentFrame2 = index => (
    `./images/Smart Ring/Ring on Charger/SmartRingChargerKSPFile.${index+1}.png`
);

const images2 = []
const finger_imgs2 = {
    frame: 0
};

for (let i = 0; i < frameCount2; i++) {
    const img = new Image();
    img.src = currentFrame2(i);
    images2.push(img);
}


// Functions on scroll trigger update
images[0].onload = render;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[finger_imgs.frame], 0, 0, canvas.width, canvas.height);
}

images1[0].onload = render1;

function render1() {
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    context1.drawImage(images1[finger_imgs1.frame], 0, 0, canvas1.width, canvas1.height);
}

images2[0].onload = render2;

function render2() {
    context2.clearRect(0, 0, canvas1.width, canvas1.height);
    context2.drawImage(images2[finger_imgs2.frame], 0, 0, canvas2.width, canvas2.height);
}


//Header  animation
function header_animation() {
    gsap.timeline({
            scrollTrigger: {
                scrub: true,
                trigger: ".section1",
                pin: ".section1",
                start: "top top",
                end: "bottom bottom",
                endTrigger: ring_on_finger
            },
            ease: "power1.inOut"
        })
        .to(finger_imgs1, {
            frame: frameCount1 - 1,
            snap: "frame",
            onUpdate: render1,
        }, "same")
        .fromTo(".section1 .text_content", { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: -40 }, "same")
        .to(".header_animation", { opacity: 0 })
        .fromTo(".section1 img", { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 0.8 })
        .to("header", { yPercent: -100 });
}


// Ring on finger animation
function ring_on_finger() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            pin: ".section2",
            scrub: 1,
            start: "top top"

        },
        ease: "power1.inOut"
    });
    t1.to(finger_imgs, 20, {
        frame: frameCount - 1,
        snap: "frame",
        onUpdate: render
    });

    const section2_translate_texts = gsap.utils.toArray(".section2 .translate_text p");

    section2_translate_texts.forEach((translate_text, i) => {
        t1.from(translate_text, 4, {
                opacity: 0,
                yPercent: 100
            })
            .to(translate_text, 7, {
                opacity: 1,
                yPercent: 0
            })
        if (i < 2) {
            t1.to(translate_text, 4, {
                yPercent: -100,
                opacity: 0
            })
        }
    })

}

//Animated text

function animated_text() {
    var t2 = gsap.timeline({
        scrollTrigger: {
            pin: ".section3",
            scrub: true,
            end: "center top"
        }
    });
    t2.from(".section_3_image", {
            opacity: 0,
            scale: 0.8
        }, "same1")
        .fromTo(".animated_text span", {
            opacity: 0
        }, {
            duration: 1,
            opacity: 1,
            ease: "power1.inOut",
            stagger: {
                amount: 1
            }
        }, "same1")
        .from(".text_container p", {
            opacity: 0,
            scale: 0.8
        }, "same1")
        .from(".feature", {
            scale: 0.7,
            opacity: 0,
            ease: "Bounce.easeIn",
            stagger: {
                amount: 1
            }
        }, "same1")
}


//Translate text animation for flickering text

function translate_text_flickering() {
    const translate_texts = gsap.utils.toArray(".section4_translate_text h1");


    var t3 = gsap.timeline({
        scrollTrigger: {
            pin: ".section4",
            scrub: 3,
            ease: "SlowMo"
        }
    });

    translate_texts.forEach((translate_text, i) => {
        t3.from(translate_text, {
                opacity: 0,
                yPercent: 100,
            })
            .to(translate_text, {
                yPercent: 0
            })
        if (i < 2) {
            t3.to(translate_text, {
                yPercent: -100
            })
        }
    })
}


// Ring on charger function
function ring_on_charger() {
    gsap.timeline({
            scrollTrigger: {
                trigger: ".section6",
                pin: ".section6",
                scrub: 1,
                start: "top top"
            },
            ease: "power1.inOut",
            endTrigger: gallery_animation
        })
        .to(finger_imgs2, {
            frame: frameCount2 - 1,
            snap: "frame",
            onUpdate: render2
        })
}


//Gallery animation
function gallery_animation() {

    const images3 = gsap.utils.toArray(".image");

    images3.forEach((image, i) => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                scrub: 3,
                start: "top center",
                end: "top center",
            },
            opacity: 0,
            scale: 0.95,
            yPercent: -20,
            ease: "power1.inOut"
        })
    })
}


//Fade in animation of Omnyk stories
function omnyk_stories() {

    gsap.from(".omnyk_stories", {
        scrollTrigger: {
            trigger: ".omnyk_stories",
            scrub: 3,
            start: "top center",
            end: "top center",
            ease: "power1.inOut"
        },
        opacity: 0
    })
}



header_animation(); //Header animation

ring_on_finger(); //Ring on finger animation

animated_text(); //Animated text

translate_text_flickering(); //Translate text in flickering section

ring_on_charger(); //Ring on charger animation

gallery_animation(); //Gallery animation

omnyk_stories(); //Fade in animation of Omnyk stories