//Page-1 Animation
function page1Animation(){
    gsap.from("#img1",{
    y:60,
    delay:0.4,
    duration:1,
    opacity:0
})
gsap.from("#img2",{
    x:70,
    delay:0.4,
    duration:1,
    opacity:0
})
gsap.from("#img3",{
    y:-60,
    delay:0.4,
    duration:1,
    opacity:0
})
gsap.from("main h1",{
    delay:0.4,
    duration:1,
    opacity:0
})
gsap.from("main h3",{
    delay:0.4,
    duration:1,
    opacity:0,
    y:60,
})
}
page1Animation()

//Page-2 Animation
function page2Animation(){
    gsap.from("#page-2 h5",{
    y:40,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page-2 h5",
        // markers:true,
        start:"top 80%"
    }
})
gsap.from("#page-2 h1",{
    y:40,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page-2 h5",
        // markers:true,
        start:"top 60%"
    }
})
gsap.from("#page-2 a",{
    y:40,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page-2 h5",
        // markers:true,
        start:"top 40%"
    }
})
}
page2Animation()