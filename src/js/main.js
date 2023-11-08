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

// gsap.to(".element-1", {
//   y: "49%",
// });

// gsap.to(".element-1", {
//   scrollTrigger: {
//     trigger: ".element-1",
//     start: "top down",
//     end: "+=300%",
//     pin: true,
//     scrub: true,
//     markers: true,
//   },
//   y: "-75%",
//   ease: "sine.inOut",
// });

gsap.to(".element-1", {
  scrollTrigger: ".box-wrapper",
  y: "150px",
  ease: "sine.inOut",
});
