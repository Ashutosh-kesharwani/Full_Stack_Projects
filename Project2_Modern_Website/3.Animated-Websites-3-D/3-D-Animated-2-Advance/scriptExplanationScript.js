//Explanation of whole Script-Code [line by line] wriiten in script.js .


//1. This is locomotiveJs+GsapScrollTrigger func for Smooth-Scrolling-Animation
function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

//-------------------------------------------------------------------------------------------------------------------



//2.Sab se phle we select canvas tag
const canvasElement = document.querySelector('canvas');

//3.tells browser , that we are going to draw 2D graphics(like img,shape,or text) on this canvas
const context = canvasElement.getContext("2d");


//4.Adjusting our canvas heught and width according to windows inner width and height
// Explanation: jo upar window me hamar nav bna rahta hai jha maximize,minimize,close button hote hai usko hta ke jo hamare content ke liye visible area hai whi hai hamara , so uski height inner height and width hai inner width.
//Initially canvas width and height is according to windows inner width and height ke according
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

//-------------------------------------------------------------------------------------------------------------------


//5. To make our canvas responsive
// iska matlab jab ham screen ko resize karenge to jo nyi height and width hai window ki usko hamare canvas ke height and width ko kardo
//Using resize event listener on window object
window.addEventListener('resize', function () {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    render();// user-defined function that has been declared at bottom.
})

//-------------------------------------------------------------------------------------------------------------------


//6. Create a files function whose solely task is to return the filepath of the particulare images present at that index
//index params use , at time of calling the imagepath of the specific index is going to get return.
function files(index) {
    /* As we know that array index start from 0, so 
    this frame no. is going to  Convert index no. (0–299) to frame number (0001–0300) as because image serial number start from 0001 to 0300.*/


    /* `index + 1` increases the count to start from 1.
`String()` converts the number to text so `.padStart()` can be used.
`.padStart(4, "0")` adds leading zeros until the string length is 4.
 i.e .padStart(totalLength([padNO.+ actualStr]->4), "PadNo."->
"0");
Example: `6 → "0006"`, `45 → "0045"`, `123 → "0123"`.
 */
    const frameNumber = String(index+1).padStart(4,"0");
    
    return `images/Canvas-Image/male${frameNumber}.png`;
    //Return the required file path of ith index.
}
// For example:
// files(0);  // "./male0001.png"
// files(1);  // "./male0002.png"
// files(10); // "./male0011.png"


//-------------------------------------------------------------------------------------------------------------------


//Variable -Declaration 

//7. A var which denote the total number of images present that is to be use in canvas.
const frameCount=300;

//8. Blank Arr which use to stores img tag contain with src of all images use for canvas .
const imagesArr=[]


//8.Obj with frame:1 hamara image yha se suru ho
// So imageSeq.frame represents which image number (out of 300) should currently be shown on the canvas.
const imageSeq = {
  frame: 1,
};

for (let index = 0; index < frameCount; index++) {
    const img = new Image();
    img.src = files(index);
    imagesArr.push(img);
}


// console.log(imagesArr); // whole arr contain 300 img tag
// console.log(imagesArr[0]); // 1st img tag withits path [<img src="images/Canvas-Image/male0001.png">] this way


//-------------------------------------------------------------------------------------------------------------------

//9. We use gsap to draw the canvas with smoothness 

/*Ye code tumhara scroll-based frame-by-frame animation control karta hai.
Jaise scroll karte ho, GSAP frame number change karta hai,
aur render() canvas pe naya image draw karta hai —
result = smooth scrolling animation effect (like video playback on scroll)  */


gsap.to(imageSeq, {

  // Animate frames from 0 to the last frame (frameCount - 1)
  frame: frameCount - 1,

  // GSAP gives decimal frame values (e.g. 1.5, 2.8)
  // But image file names are integers (1, 2, 3...)
  // 'snap' rounds frame values to the nearest integer
  snap: "frame",

  // No easing — makes the animation linear and smooth
  ease: "none",

  // ScrollTrigger controls animation with scroll
  scrollTrigger: {

    // Smoothly sync scroll position with animation (no jerky motion)
    scrub: 0.15,

    // Element that triggers the scroll-based animation
    trigger: "#section-1 canvas",

    // When the top of the canvas reaches the top of the viewport, start animation
    start: `top top`,

    // Continue animation until 600% scroll distance (6x viewport height)
   end: "600% top",

    // Use custom scroller element (e.g. locomotive-scroll's <main>)
    scroller: "main",
    pin:true,
  },

  // Every time the animation updates, call 'render()' 
  // This function redraws the canvas with the new frame
  onUpdate: render,
});

//-------------------------------------------------------------------------------------------------------------------

//10 . Means har baar page reload hone pe hamari image jo phle 1 frame wli usko dhikaho

imagesArr[0].onload= render;

//-------------------------------------------------------------------------------------------------------------------


//11.Render Function():
//i.e The render() function ka kaam hai:
// "Har bar jab image frame change ho, canvas par naya image draw karna."

// scaleImage(imagesArr[imageSeq.frame]) ek helper fn hai jo hamari imageSeq object se frame me jo no. hai uss particular ko  hamare usse array se uthayga and send as parameter to scaleImage fn.

function render(){
    scaleImage(imagesArr[imageSeq.frame],context);
}



//12. scaleImage(imageTag,context) function
// Yeh function scaleImage() bahut important hai — iska kaam hai image ko canvas ke andar perfectly fit karna (center me, bina stretch/distortion ke).
function scaleImage(img, ctx) {
  // 🛑 Agar image abhi load nahi hui hai to kuch mat karo
  if (!img.complete) return;

  // 1️⃣ Canvas element ko context se access karo
  var canvasEle = ctx.canvas;                   

  // 2️⃣ Ratio calculate karo
  //hR - horizonatal ratio and vR - vertical ratio
  var hRatio = canvasEle.width / img.width;      // canvas aur image ke width ka ratio nikaalo i.e horizontal ration
  var vRatio = canvasEle.height / img.height;   // canvas aur image ke height ka ratio nikaalo vertical ratio

  // 3️⃣ Dono me se bada ratio lo (taaki image poora canvas cover kare)
  // jab resize kare to jo ratio hamara bad ho usse rato ke accordig image dhikha do
  // i.e uske resize hone pe if width badhi width ke basi dhikgao if heration to uske basis
  var ratio = Math.max(hRatio, vRatio);      

  // 4️⃣ Center me position nikalne ke liye offset
  // image ke resize hone pe bhi usko hor and ver center me lao 
  var centerShift_x = (canvasEle.width - img.width * ratio) / 2;    // image ko horizontally center me laane ka offset
  var centerShift_y = (canvasEle.height - img.height * ratio) / 2;   // image ko vertically center me laane ka offset

  // 5️⃣ Purane frame ko clear karo
  // jaise hi aage wali img load ho peeche wali image ko clear karte raho to avoid lagging
// General Syntax:   ctx.clearRect(x, y, width, height);
// This is a Canvas 2D API method that clears (erases) a rectangular area of the canvas.
// x:	The x-coordinate (in pixels) of the upper-left corner of the rectangle to clear
// y:	The y-coordinate of the upper-left corner
// width	The width of the rectangle to clear
// height	The height of the rectangle to clear
  ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);   // purane frame ko clear karo (ghosting na ho)

  // 6️⃣ Image draw karo (scaled aur centered)
  //ye drwaImage contect ka func hai jiske madad se we drwa image

//   ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
// 📘 Parameter Details:
// Parameter	Meaning
// image	The source image (can be <img>, <canvas>, or <video> element)
// sx	X-coordinate of the top-left corner of the source rectangle (the part of the image to draw)
// sy	Y-coordinate of the top-left corner of the source rectangle
// sWidth	Width of the source rectangle
// sHeight	Height of the source rectangle
// dx	X-coordinate where to place the image on the canvas
// dy	Y-coordinate where to place the image on the canvas
// dWidth	Width to draw the image on the canvas (used for scaling)
// dHeight	Height to draw the image on the canvas (used for scaling)
  ctx.drawImage(                                
    img,                                          // draw karne wali image
    0, 0,                                         // image ke start point (x,y)
    img.width, img.height,                        // image ka original size
    centerShift_x, centerShift_y,                 // canvas par place karne ka point (center offset)
    img.width * ratio, img.height * ratio         // image ka scale size (fit to canvas)
  );
  
}




//0. At start as we want that canvasElement which present in section-1 vo fixed(pin)rahe apni jgah pe at time of scroll usse jgah pe rah ke animation kare


/*[
 ScrollTrigger ka use canvas ko scroll ke sath control karne ke liye hota hai
//👉 .create() is a method (function) provided by GSAP’s ScrollTrigger plugin.
// It is used to create a new ScrollTrigger instance — meaning, it tells GSAP:
// “Hey GSAP, when the user scrolls to this point, do this behavior or animation.”


// iss ka equivalent hi hai 
// gsap.to("#page>canvas", {
//   scrollTrigger: {
//     trigger: "#page>canvas",   // kis element par trigger lagana hai
//     pin: true,                 // scroll ke dauraan canvas ko fix rakhega
//     scroller: "main",         // custom scrolling container
//     start: "top top",          // scroll start position
//     end: "600% top",           // scroll end position
//     // markers: true,          // optional debugging markers
//   }
// });
]*/


//pin:true pe hamne trugger me  trigger:"section-1>canvas", ye use kiya to ye hamare ele ko overall scroll me uss point pe rakhega but if we write[ trigger:"section-1", to ye canvas ka oura animatio  page -1 pe hi dhikha dega ]
// ScrollTrigger.create({
//     trigger:'#section-1>canvas',// element to trigger on scroll
//     scroller:'main',        // custom scroll container
//     pin:true,// keep it fixed during scroll
//     start:'top top', //When the top of the canvas reaches the top of the viewport, start animation
//     end:'600% top',
//     //"end: 600% top" → means the pin lasts for a scroll distance equal to 6× the viewport height.

// })

//Now making scrollTrigger istance for other pages as Matlab: section ek jagah chipak jaata hai, jab tak uss page ka animation na end ho jaye.

// Same create for section-3,4
ScrollTrigger.create({
    trigger:'#section-2',
    scroller:'main',
    pin:true,
    start:'top top',
    end:'bottom top'
})
ScrollTrigger.create({
    trigger:'#section-3',
    scroller:'main',
    pin:true,
    start:'top top',
    end:'bottom top'
})
ScrollTrigger.create({
    trigger:'#section-4',
    scroller:'main',
    pin:true,
    start:'top top',
    end:'bottom top'
})


