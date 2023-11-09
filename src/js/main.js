import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin
);

gsap.to("#logo-tintin", {
  scrollTrigger: {
    trigger: "#logo-tintin",
    start: "top top",
    end: "bottom",
    scrub: true,
    markers: true,
  },
  y: "50px",
  opacity: 0,
  duration: 1,
  ease: "sine.inOut",
});

gsap.to("#arrow-down", {
  y: "50px",
  // opacity: 0,
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "expoScale(0.5,7,none)",
});

gsap.to("#moine-volant", {
  y: "50px",
  // opacity: 0,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to("#moine", {
  scrollTrigger: {
    trigger: "#moine",
    start: "-700px",
    end: "-100px",
    scrub: true,
    markers: true,
  },
  y: "190px",
  ease: "sine.inOut",
});

gsap.from("#bulle", {
  scrollTrigger: {
    trigger: "#moine",
    start: "-400px",
    end: "-350px",
    scrub: true,
    markers: true,
  },
  x: "-90px",
  opacity: 0,
  ease: "sine.inOut",
});
