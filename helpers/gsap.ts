import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin  from "gsap/dist/ScrollToPlugin";
import Flip from "gsap/dist/Flip";
const { SplitText } = require("./SplitText");

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, ScrollToPlugin);

export { gsap, ScrollTrigger, SplitText, Flip, ScrollToPlugin };
