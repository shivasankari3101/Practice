//Image gallery animation
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


//Canvas for finger animation

const canvas = document.getElementById("hero-lightpass");
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

//Header  animation
gsap.timeline({
        scrollTrigger: {
            scrub: true,
            pin: ".header_sections",
            markers: "true",
            start: "top top",
            end: document.getElementsByClassName("header_sections")[0].offsetHeight * 3
        }
    })
    .to(finger_imgs1, {
        frame: frameCount1 - 1,
        snap: "frame",
        onUpdate: render1,
    }, "same")
    .fromTo(".section1 .text_content", { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: -40 }, "same")
    .fromTo(".section1 img", { yPercent: 100 }, { yPercent: 0 })
    .addLabel("same")
    .to(finger_imgs, {
        frame: frameCount - 1,
        snap: "frame",
        onUpdate: render
    });

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