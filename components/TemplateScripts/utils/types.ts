export type CleanupFn = () => void;

export type GsapCore = {
  gsap: any;
  ScrollTrigger: any;
  Flip: any;
  lenis: any;
  cleanup: CleanupFn;
};