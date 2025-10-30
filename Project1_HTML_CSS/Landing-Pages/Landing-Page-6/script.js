var tl= gsap.timeline({
    repeat:-1
})
tl.to(".image-container",{
    width:"85%",
    stagger:2,
    ease:Expo.easeInOut,
},"syncAnim")
.to(".header-container h1",{
    top:0,
    stagger:2,
    ease:Expo.easeInOut,
},"syncAnim")
.to(".header-container h1",{
    delay:2,
    top:"-100%",
    stagger:2,
    ease:Expo.easeInOut,
},"syncAnim")
.to(".para-container p",{
    top:0,
    stagger:2,
    ease:Expo.easeInOut
},"syncAnim")
.to(".para-container p",{
    top:"-100%",
    delay:2,
    stagger:2,
    ease:Expo.easeInOut
},"syncAnim")







