import type { GsapCore } from "../utils/types";

export async function initGsapLenis(): Promise<GsapCore> {
  const gsapModule = await import("gsap");
  const gsap = gsapModule.gsap;

  const stModule = await import("gsap/ScrollTrigger");
  const flipModule = await import("gsap/Flip");

  gsap.registerPlugin(stModule.ScrollTrigger);
  gsap.registerPlugin(flipModule.Flip);

  const { default: Lenis } = await import("lenis");
  const lenis = new Lenis();

  lenis.on("scroll", stModule.ScrollTrigger.update);

  const tickerFn = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  const cleanup = () => {
    gsap.ticker.remove(tickerFn);
    lenis.destroy();
    stModule.ScrollTrigger.getAll().forEach((t: any) => t.kill());
  };

  return {
    gsap,
    ScrollTrigger: stModule.ScrollTrigger,
    Flip: flipModule.Flip,
    lenis,
    cleanup,
  };
}