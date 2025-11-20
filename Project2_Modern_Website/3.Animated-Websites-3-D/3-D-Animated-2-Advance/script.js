// 🌐 Setup Locomotive Scroll + GSAP ScrollTrigger for smooth scrolling animations



function locomotive() {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin for GSAP

    // Initialize Locomotive Scroll on the <main> tag for smooth scroll behavior

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true, // Enable smooth scrolling
    });

    // Whenever Locomotive scrolls, tell ScrollTrigger to update its position
    locoScroll.on("scroll", ScrollTrigger.update);

    // Connect Locomotive Scroll with ScrollTrigger (so they work together)
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            // If ScrollTrigger tries to set scroll position, use Locomotive’s scrollTo
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                // Otherwise, return Locomotive’s current scroll value
                : locoScroll.scroll.instance.scroll.y;
        },

        // Let ScrollTrigger know about viewport size
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        // Choose how pinning works depending on Locomotive’s transform usage
        pinType: document.querySelector("main").style.transform
            ? "transform"
            : "fixed",
    });

    // Update ScrollTrigger whenever Locomotive recalculates scroll positions
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh(); // Refresh ScrollTrigger setup
}
locomotive(); // 🚀 Run the Locomotive + ScrollTrigger integration



// 🎨 Setup the canvas where images will be drawn
const canvasElement = document.querySelector("canvas");
const context = canvasElement.getContext("2d"); // Get 2D drawing context

// Set canvas size equal to the browser window size
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// Adjust canvas size when window resizes
window.addEventListener("resize", function () {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    render(); // Redraw image to fit new canvas size
});



// 🖼️ Function to generate image file path based on frame index
function files(index) {
    const frameNumber = String(index + 1).padStart(4, "0"); // Convert 0 → "0001" style
    return `images/Canvas-Image/male${frameNumber}.png`; // Return image path
}

const frameCount = 300; // Total number of frames to animate
const imagesArr = [];   // Store all preloaded images
const imageSeq = { frame: 1 }; // Object to track current frame number



// 🔁 Preload all frame images into an array for smooth animation
for (let index = 0; index < frameCount; index++) {
    const img = new Image();      // Create new image object
    img.src = files(index);       // Set source path
    imagesArr.push(img);          // Store it in the array
}



// 🎬 Animate frame sequence using GSAP timeline
gsap.to(imageSeq, {
    frame: frameCount - 1, // Animate from frame 0 → 299
    snap: "frame",         // Round frame numbers to integers (no decimals)
    ease: "none",          // No easing = linear animation with scroll
    scrollTrigger: {
        trigger: "#section-1 canvas", // Canvas area that triggers animation
        scroller: "main",             // Use Locomotive scroll container
        start: "top top",             // Start when canvas reaches top
        end: "600% top",              // Scroll distance (6x viewport height)
        pin: true,                    // Keep canvas fixed while scrolling
        scrub: 0.15,                  // Smooth transition on scroll
    },
    onUpdate: render, // Call render() every time frame updates
});



// 📸 When first image finishes loading, display it immediately
imagesArr[0].onload = render;



// 🖌️ Render the current frame image on the canvas
function render() {
    scaleImage(imagesArr[imageSeq.frame], context); // Draw the current image frame
}



// ⚖️ Scale and position image to fill entire canvas while maintaining aspect ratio
function scaleImage(img, ctx) {
    if (!img.complete) return; // Skip if image not yet loaded

    const canvasEle = ctx.canvas;
    const hR = canvasEle.width / img.width;   // Horizontal scale ratio
    const vR = canvasEle.height / img.height; // Vertical scale ratio
    const ratio = Math.max(hR, vR);           // Choose ratio to cover entire canvas

    // Center the image on canvas
    const center_x = (canvasEle.width - img.width * ratio) / 2;
    const center_y = (canvasEle.height - img.height * ratio) / 2;

    // Clear previous frame before drawing next
    ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);

    // Draw scaled image properly centered
    ctx.drawImage(
        img,
        0, 0,                           // Start from top-left of image
        img.width, img.height,          // Original image dimensions
        center_x, center_y,             // Canvas position (centered)
        img.width * ratio, img.height * ratio // New scaled dimensions
    );
}



// 📌 Pin next sections (so they appear one by one after canvas animation)
ScrollTrigger.create({
    trigger: "#section-2",
    scroller: "main",
    pin: true,
    start: "top top",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: "#section-3",
    scroller: "main",
    pin: true,
    start: "top top",
    end: "bottom top",
});

ScrollTrigger.create({
    trigger: "#section-4",
    scroller: "main",
    pin: true,
    start: "top top",
    end: "bottom top",
});
