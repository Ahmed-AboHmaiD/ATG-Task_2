gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((container) => {
  gsap.to(container, {
    scrollTrigger: {
      trigger: container,
      start: "top top",
      pin: true,
      pinSpacing: false,
      toggleActions: "restart none restart reset",
    },
    opacity: 1,
    duration: 0.2,
  });
});
