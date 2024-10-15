let boxAnimation = gsap.to(".box", {
  duration: 1,
  scale: 0.1,
  ease: "power1.inOut",
  repeat: 1,
  yoyo: true,
  stagger: {
    each: 0.1,
    from: "center",
  },
});
document.body.addEventListener("click", () => {
  boxAnimation.restart();
});
