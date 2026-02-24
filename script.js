/**
 * Hello World Signage Script
 * v20260221
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital Signage App Initialized with GSAP');

    const title = document.getElementById('text');
    const text = title.innerText;
    title.innerHTML = '';

    // Split text into individual letters wrapped in spans
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char; // Handle spaces
        span.style.display = 'inline-block';
        title.appendChild(span);
    });

    const letters = title.querySelectorAll('span');

    // GSAP Timeline
    const tl = gsap.timeline({ repeat: -1 });

    // 1. Initial Bounce & Entrance
    tl.from(letters, {
        duration: 0.8,
        opacity: 0,
        y: 100,
        scale: 0.5,
        rotationX: -90,
        stagger: 0.05,
        ease: "back.out(1.7)"
    });

    // 2. Pause briefly
    tl.to({}, { duration: 1 });

    // 3. Float Away Animation
    tl.to(letters, {
        duration: 2.5,
        y: -500,
        x: () => (Math.random() - 0.5) * 400, // Random drift
        rotation: () => (Math.random() - 0.5) * 180, // Random spin
        opacity: 0,
        scale: 1.5,
        filter: "blur(10px)",
        stagger: {
            amount: 1,
            from: "random"
        },
        ease: "power2.in"
    });

    // 4. Reset/Pause before repeat
    tl.to({}, { duration: 0.5 });
});
