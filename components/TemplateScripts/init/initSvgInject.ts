import type { CleanupFn } from "../utils/types";

export async function initSvgInject(): Promise<CleanupFn> {
  const mod = await import("svg-injector");
  const SVGInjector = (mod as any).default ?? (mod as any).SVGInjector;

  const svgs = document.querySelectorAll("img.inject-me");
  if (svgs.length && typeof SVGInjector === "function") {
    SVGInjector(svgs as any, {
      evalScripts: "once",
      pngFallback: "assets/png",
      each: () => {},
    });
  }

  return () => {};
}