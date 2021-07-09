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


  ScrollTrigger.create({
    animation:t1,
    trigger:".section1",
    scrub:true,
    pin:true
})