// const t1 = gsap.timeline();
// ScrollTrigger.create({
//     animation: t1,
//     trigger: ".picture_gallery",
//     scrub: true,
//     pin: true
// })

// t1.fromTo(".overlay", { yPercent: 100 }, { yPercent: 0 }, "same1")


const images1 = gsap.utils.toArray(".image");

images1.forEach((image, i) => {
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


// const video = document.querySelector("#video");

// if (video.readyState > 1) {
//     init();
// } else {
//     video.addEventListener("canplaythrough", init);
// }

// function init() {
//     video.removeEventListener("canplaythrough", init);

//     gsap.to(video, {
//         currentTime: video.duration,
//         scrollTrigger: {
//             trigger: ".header",
//             scrub: 1,
//             pin: true
//         }
//     });
// }


const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

const frameCount = 115;
const currentFrame = index => (
    `C:/Users/Paramesh/Desktop/Drawww Media/Practice/dist/images/Smart Ring/Ring on Finger/SmartRingIntoFinger.${index+1}.png`
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

gsap.to(finger_imgs, {
    frame: frameCount - 1,
    snap: "frame",
    scrollTrigger: {
        scrub: 1,
        trigger: ".animation_container",
        pin: true

    },
    onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[finger_imgs.frame], 0, 0, canvas.width, canvas.height);
}