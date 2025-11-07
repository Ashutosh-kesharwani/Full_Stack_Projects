function page1Animation(){
    var tl=gsap.timeline();

tl.from("nav h1 ",{
    y:-30,
    duration:0.7,
    opacity:0
})
tl.from("nav #actions h2  ",{
    y:-30,
    duration:0.6,
    opacity:0,
    stagger:0.2
})
tl.from("nav #actions button ",{
    y:-30,
    duration:0.5,
    opacity:0
})
tl.from("#center-part1 h2 ",{
    x:-300,
    duration:0.5,
    opacity:0
})
tl.from("#center-part1 p",{
    x:-100,
    duration:0.4,
    opacity:0
})
tl.from("#center-part1 button",{
    y:50,
    duration:0.3,
    opacity:0
})
// As ham chahte ki ye img eke hamara aur sab part1 ke jab load ho unke saath chale and 1s phle hi iska animation chalu ho uske liye if we use delay:-0.5 ye utna ache se kaam nhi karega | 
//So isse better }ke end me "-=0.5" means ye iss timeline ke chalne se ek sec phle chalega 
tl.from("#center-part2 img",{
    x:100,
    duration:0.3,
    opacity:0
},"-=0.3")

tl.from("#section1-bottom",{
    y:40,
    duration:0.6,
    opacity:0,
    stagger:0.15,
})


}

page1Animation()

function page2Animation(){
    // as har ek ele pe scrollTigger lkhna avoid ke lye we direct add scrollTigger direct on timeline of page2  i.e gsap.timeline({yha scrollTrigger likh do})
var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scrub:3,
        // markers:true,
    }
})

tl2.from("#services ",{
    y:20,
    opacity:0,
    duration:0.5
})

//Html class iss trah hai "service-card line1 left"
// ".service-card.line1.left" iska matlab ki service-card jo hai uske line1 me jo left wla hai usko target karo i.e sirf whi wla target hoga nite js me usse target ke waqt bina space diye likhna padega isse acha ki inidividual id bhi de sakte the but iss situation me iss trah
tl2.from(".service-card.line1.left ",{
    x:-300,
    opacity:0,
    duration:0.9
},"line1Anim")
tl2.from(".service-card.line1.right ",{
    x:300,
    opacity:0,
    duration:0.9
},"line1Anim")
//Upar ye problem ho rhi hai ki left right line 1 ke alag alag aa rahe hai so ek saath lane ke liye } close braces ke baad str me koi name dedo dono ko }"line1Anim"

//Note if ham chahte hai ki do diff ele ka animation ek saath chalu ho suke liye unn dono ele ko .from("name",{},yha pe same str dedo jisme jisme chahte hai ki vo ek saath start ho)

tl2.from(".service-card.line2.left ",{
    x:-300,
    opacity:0,
    duration:1
},"line2Anim")
tl2.from(".service-card.line2.right ",{
    x:300,
    opacity:0,
    duration:1
},"line2Anim")
}
page2Animation()


function page3Animation(){
    var tl3= gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0",
            scrub:2,
        }
    })
    
    tl3.from("#section3-header",{
        y:40,
        duration:0.5,
        opacity:0,
        
    })
    tl3.from("#section3-center",{
        y:-20,
        duration:0.5,
        opacity:0,
        
    })
    tl3.from("#section3-footer",{
        y:20,
        duration:0.5,
        opacity:0,
        
    })
}
page3Animation()
