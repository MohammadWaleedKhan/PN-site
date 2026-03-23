import type { CleanupFn } from "../utils/types";
import SplitType from "split-type";
import { gsap, SplitText, ScrollTrigger } from "@/helpers/gsap";

export async function initSplitTypeReveal(): Promise<CleanupFn> {
  // const { gsap } = await import("gsap");
  // const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  // const SplitType = (await import("split-type")).default;

  const splits: any[] = [];

  document.querySelectorAll<HTMLElement>(".reveal-type").forEach((el) => {
    const split = new SplitType(el, { types: "words,chars" }); // ✅ no space
    splits.push(split);

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.1,
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    splits.forEach((s) => s?.revert?.());
  };
}