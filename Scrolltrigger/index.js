gsap.registerPlugin(ScrollTrigger); 

var t1 = gsap.timeline();

t1.to(".welcome",{xPercent:-100,opacity:0},"simultaneous")
  .from(".orange",{xPercent:-100},"simultaneous")
  .to(".provide",{xPercent:-100,opacity:0},"simultaneous2")
  .from(".green",{xPercent:100},"simultaneous2")
  .from(".blue",{yPercent:-100})
  .addLabel("simultaneous")
  .addLabel("simultaneous2");


ScrollTrigger.create({
    animation:t1,
    trigger:".home",
    scrub:3,
    pin:true
})

var t2 = gsap.timeline();

t2.to(".overlay",{xPercent:-100},"simultaneous")
  .from(".overlay1",{xPercent:100},"simultaneous")
  .addLabel("simultaneous");

ScrollTrigger.create({
    animation:t2,
    trigger:".services",
    scrub:2.5,
    pin:true,
})


