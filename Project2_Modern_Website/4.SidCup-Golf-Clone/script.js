
var crsr=document.querySelector("#cursor");
var crsr_blur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+"px";
   crsr.style.top=dets.y+"px";
   crsr_blur.style.left=dets.x-250+"px";
   crsr_blur.style.top=dets.y-250+"px";
})




var navItems = document.querySelectorAll("#nav h4");
navItems.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.transform = "scale(5.5)";
    crsr.style.border = "0.5px solid white";
    crsr.style.backgroundColor = "transparent";
    elem.style.color = "rgb(150,193,30)";  // text color change
    elem.style.transition = "all ease 0.15s";
  });

  elem.addEventListener("mouseleave", function() {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0px solid rgb(150, 193, 30)";
    crsr.style.backgroundColor = "rgb(150, 193, 30)";
    elem.style.color = "white"; // revert color
  });
});


gsap.to("#nav",{

  backgroundColor:"black",
  duration:0.5,
  height:"110px",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -1",// todha sa scroll karte hi motion chalu 
     // markers:true, samghne ke liye ki yeh line kab start hogi
    end:"top -11",
    scrub:1,
  }
})

gsap.to("#main",{
  backgroundColor:"black",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%", 
    end:"top -70%",
    scrub:2
  }
})



gsap.from("#about-us img,#about-us-title,#about-us-paragraph", {
  y: 100,
  opacity: 0,
  duration: 1,
  // stagger: 0.4, -> from this property will animate each element in the selected group
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
    
  }
});


// gsap.from(".card", {
//   scale: 0.8,
//   // opacity:0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // markers:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

gsap.from("#left-quote", {
  // 👇 Element ko kahan se laana hai (animation ka starting point)
  x: -100,           // Element screen ke left side se 100px bahar se aayega
  y: -100,           // Aur thoda upar se bhi aayega (top-left diagonal se slide karega)
  opacity: 0,        // Shuruaat me invisible hoga, phir dheere-dheere dikhne lagega
  duration: 1,       // Pure animation ka samay (1 sec) — bas reference ke liye, scrollTrigger me scrub use ho raha hai

  // 👇 Scroll ke basis par animation ka control
  scrollTrigger: {
    trigger: "#left-quote",   // Jab #left-quote wala element viewport me aayega, tab animation start hoga
    scroller:"body",
    start: "top 80%",         // Jab element ka top viewport ke 80% height tak pahuch jaaye, tab animation shuru karo
    end: "top 60%",           // Jab element ka top viewport ke 60% tak pahuch jaaye, tab animation ruk jaaye
    scrub: 4,                 // Scroll ke hisaab se animation smoothly chale (scroll based speed)
    // markers: true             // Debug markers dikhaye (red/green lines) — development ke liye helpful
  }
});

// 🔰 Right quote animation — bottom-right se andar aata hai
gsap.from("#right-quote", {
  x: 100,              // 👉 100px right se
  y: 100,              // 👇 100px bottom se
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#right-quote",
    scroller: "body",
    start: "top 80%",   // Same timing so both animate together
    end: "top 60%",
    scrub: 4,
    // markers: true
  }
});

gsap.from("#page4 h1",{
 y:50,
 duration:1,
 scrollTrigger:{
  trigger:"#page4 h1",
  scroller:"body",
  // markers:true,
  start:"top 75%",
  end:"top 70%",
  scrub:2
  }
})





