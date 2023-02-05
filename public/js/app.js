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
    duration: 0.1,
  });
});

/*
 * SVG Animation
 * */

// Sec. Two
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".two",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "148, 1000",
  duration: 0.1,
});

gsap.to("#Dots2 path", {
  scrollTrigger: {
    trigger: ".two",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots2 .dotsstro2", {
  scrollTrigger: {
    trigger: ".two",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});

// Sec. Three
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".three",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "289, 1000",
  duration: 0.1,
});

gsap.to("#Dots3 path", {
  scrollTrigger: {
    trigger: ".three",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots3 .dotsstro3", {
  scrollTrigger: {
    trigger: ".three",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});

// Sec. Four
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".four",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "425, 1000",
  duration: 0.1,
});

gsap.to("#Dots4 path", {
  scrollTrigger: {
    trigger: ".four",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots4 .dotsstro4", {
  scrollTrigger: {
    trigger: ".four",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});

// Sec. Five
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".five",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "548, 1000",
  duration: 0.1,
});

gsap.to("#Dots5 path", {
  scrollTrigger: {
    trigger: ".five",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots5 .dotsstro5", {
  scrollTrigger: {
    trigger: ".five",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});

// Sec. Six
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".six",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "688, 1000",
  duration: 0.1,
});

gsap.to("#Dots6 path", {
  scrollTrigger: {
    trigger: ".six",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots6 .dotsstro6", {
  scrollTrigger: {
    trigger: ".six",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});

// Sec. Seven
gsap.to(".transrgwht", {
  scrollTrigger: {
    trigger: ".seven",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  strokeDasharray: "828, 1000",
  duration: 0.1,
});

gsap.to("#Dots7 path", {
  scrollTrigger: {
    trigger: ".seven",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  fill: "rgb(0, 146, 255)",
});

gsap.to("#Dots7 .dotsstro7", {
  scrollTrigger: {
    trigger: ".seven",
    start: "top top",
    toggleActions: "restart none restart reset",
  },
  opacity: 1,
});
