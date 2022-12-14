gsap.from(".welcome", { y: -1000, ease: 'bounce power2', duration: 2 });
gsap.from(".welcome-smile", { y: -500, ease: 'bounce', duration: 3 });
gsap.to(".welcome-text-second-line", {
    text: "to my website",
    duration: 1,
    delay: 3,
    ease: 'power1.in'
});
gsap.to(".welcome-button", { scale: 1.1, opacity: 1, delay: 4, duration: 1, repeat: -1, repeatDelay: 0.5 });
gsap.from(".white", { y: '-100vh', duration: 1, delay: 5, });
gsap.from(".yellow", { x: '-100vw', duration: 1, delay: 5, });
gsap.from(".gray", { x: '100vw', duration: 1, delay: 5, });
gsap.from(".light-gray", { x: '-100vw', duration: 1, delay: 6, });
gsap.from(".orange", { y: '-100vh', duration: 1, delay: 5, });


document.querySelector('.welcome-button').addEventListener('click', () => {
    location.href = 'main.html';
});