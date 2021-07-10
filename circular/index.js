const t1 = gsap.timeline();

t1.fromTo(".text1",{yPercent:0},{yPercent:-100},"same1")
  .fromTo(".img1",{yPercent:0},{yPercent:-100},"same1")
  .addLabel("same1")
  .fromTo(".text2",{yPercent:100},{yPercent:-100},"same2")
  .fromTo(".img2",{yPercent:100},{yPercent:-100},"same2")
  .addLabel("same2")
  .fromTo(".text3",{yPercent:100},{yPercent:-100},"same3")
  .fromTo(".img3",{yPercent:100},{yPercent:-100},"same3")
  .addLabel("same3")
  .fromTo(".text4",{yPercent:100},{yPercent:-100},"same4")
  .fromTo(".img4",{yPercent:100},{yPercent:-100},"same4")
  .addLabel("same4")
  .from(".slogan",{yPercent:100})
  .fromTo(".overlay",{xPercent:10},{xPercent:100});



ScrollTrigger.create({
    animation:t1,
    trigger:".section1",
    scrub:true,
    pin:true
})


const t2 = gsap.timeline();

t2.to(".ring_box img",{rotation:45},"same1")
  .fromTo(".p1", {yPercent:0},{yPercent:-100},"same1")
  .to(".ring_box img",{rotation:90},"same2")
  .fromTo(".p2", {yPercent:100},{yPercent:-100},"same2")
  .to(".ring_box img",{rotation:120},"same3")
  .fromTo(".p3", {yPercent:100},{yPercent:0},"same3")
  .addLabel("same1")
  .addLabel("same2")
  .addLabel("same3");

ScrollTrigger.create({
  animation:t2,
  trigger:".ring_box",
  scrub:true,
  pin:true
})


  