🎨 3D Animated Websites — Modern Web Design Series

This repository showcases two advanced 3D animated websites, each exploring unique approaches to depth, motion, parallax, and cinematic web interactions using modern web technologies like GSAP and Locomotive Scroll.

Both projects are part of my Modern Web Design Series and demonstrate my ability to build high-performance, scroll-driven 3D web experiences.

🌐 Live Demos
Version	Preview Link	Status
3D Animated Website #1	🔗 View Live
	✅ Live
3D Animated Website #2 (Advanced Edition)	🔗 View Live
	✅ Live
🧩 Project 1 — 3D Animated Website #1
🖼️ Overview

This website demonstrates a scroll-synced 3D animation powered by a 117-frame canvas sequence, giving a realistic rotational/cinematic visual effect.

It is built with:

GSAP + ScrollTrigger for scroll-driven animation

Locomotive Scroll for smooth momentum

HTML Canvas for frame-by-frame rendering

✨ Key Features

🎞️ 117-frame image-sequence canvas animation

🔁 Scroll-synced playback

⏱️ GSAP ScrollTrigger integration

🧭 Locomotive smooth scrolling

📐 Auto canvas scaling

📱 Fully responsive

🎨 Minimal & modern 3D look

🗂️ Folder Structure

📁 3-D-Animated-1/
│
├── index.html
├── style.css
├── script.js
│
├── 📁 assets/
│ └── 📁 Canvas-Image/ (117 frames .webp)
│
└── README.md


🧩 Project 2 — 3D Animated Website #2 (Advanced Edition)
🖼️ Overview

The second website builds on the first one and introduces layered parallax, 3D depth transitions, scroll-based section animations, and modern cinematic hero interactions — all without using a canvas sequence.

This version uses:

GSAP Timelines

ScrollTrigger pinning

Locomotive Scroll integration

Layer-based parallax movements

It offers a smooth, modern, high-tech 3D visual experience.

✨ Key Features

🎥 Cinematic 3D parallax hero section

🪞 Multi-layer depth animations

➿ GSAP Timeline transitions

📌 ScrollTrigger pinning scenes

🧭 Locomotive smooth scrolling

🎨 Modern glassy UI & gradient backgrounds

🖱️ Hover micro-interactions

📱 Fully responsive and fast

🗂️ Folder Structure (UPDATED)

📁 3-D-Animated-2-Advance/
│
├── 📄 index.html — Main structure
├── 🎨 style.css — UI + effects
├── ⚙️ script.js — GSAP + animation logic
├── 📘 scriptExplanationScript.js — Script explanations / extra JS
│
├── 📁 images/ — General images and assets
│
├── 📁 canvas-Image/ — Parallax layers, sequence images, or depth assets
│ ├── layer images
│ ├── section visuals
│ └── animation frames (if used)
│
└── 📘 README.md

⚙️ Technical Stack (Common for Both)
Tool	Purpose
HTML5	Structure & sections
CSS3	Styling, 3D layering, responsiveness
JavaScript (ES6)	Logic + animations
GSAP	ScrollTrigger, timelines, transitions
Locomotive Scroll	Smooth scrolling
Canvas API	(Project 1 only) image sequence rendering
Layered Parallax	(Project 2) depth animation
🚀 Setup Instructions

Clone the repository:

git clone https://github.com/ashutosh-kesharwani/Full_Stack_Projects.git


Navigate to any project:

cd Project2_Modern_Website/3.Animated-Websites-3-D/3-D-Animated-1


or

cd Project2_Modern_Website/3.Animated-Websites-3-D/3-D-Animated-2-Advance


Open index.html in a browser
or
Use VS Code Live Server for best results.

🔮 Future Enhancements

Add real 3D scenes using Three.js

Add mouse-tracking parallax

Add scroll-scrub timeline controller

Add a landing preload animation

Optimize images with lazy-loading
