var tl=gsap.timeline()

tl.to("#page1",{  // ye line beena time lgaye uss page ko 0sc me neeche bhej di top se
  y:"100vh",      // as y pos hai to bottom me hi bhejega
  duration:0,

  scale:0.6    // as neeche jate waqt todha chota ho jaye wo
})
tl.to("#page1",{  // fir tum wapis aao lkin y se 30 vh tak hi abhi
  y:"30vh", // jab vh me value denge to inverted comma ki trah dena hpga as ye strng ban gya 
  duration:1,
  delay:1,
}) 
// wapis aao lkin ghumte hue 360 deg
tl.to("#page1",{
  y:"0vh",
  rotate:360,
  scale:1,
  duration:0.7
})
