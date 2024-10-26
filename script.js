// Initial animations for hero section
gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".hero-subtitle", { y: 50, opacity: 0, delay: 0.3, duration: 1, ease: "power2.out" });
gsap.from(".btn-group .hero-btn", { scale: 0.8, opacity: 0, delay: 0.6, duration: 0.8, stagger: 0.2 });
gsap.from(".scroll-down-indicator", { y: 20, opacity: 0, delay: 1, duration: 1, ease: "power2.out" });

// Parallax effect on mouse movement
const hero = document.querySelector(".hero");
hero.addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const xPos = (offsetX / target.clientWidth) - 0.5;
    const yPos = (offsetY / target.clientHeight) - 0.5;

    gsap.to(".hero-title", { x: xPos * 40, y: yPos * 40, duration: 0.3 });
    gsap.to(".hero-subtitle", { x: xPos * 25, y: yPos * 25, duration: 0.3 });
    gsap.to(".btn-group .hero-btn", { x: xPos * 15, y: yPos * 15, duration: 0.3 });
});

// Scroll-triggered animations for sections
gsap.registerPlugin(ScrollTrigger);

// Learn More Section Animation
gsap.from(".learn-more-section h2, .learn-more-section p, .learn-more-btn", {
    scrollTrigger: {
        trigger: ".learn-more-section",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
});

// Contact Section Animation
gsap.from(".contact-section h2, .contact-section p, .contact-form", {
    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
});

