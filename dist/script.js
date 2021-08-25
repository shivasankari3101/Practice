const html = document.getElementsByClassName("finger_section")[0];
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");


context.fillStyle = "red";
context.fill();
const frameCount = 115;
const currentFrame = index => (
    `images/Smart Ring/Ring on Finger/SmartRingIntoFinger.${index}.png`
)

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = 2500;
canvas.height = 2500;
img.onload = function() {
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
    console.log(currentFrame(index));
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );
    console.log(scrollTop);
    console.log(maxScrollTop);
    console.log(scrollFraction);
    console.log(frameIndex);
    context.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()