import type { CleanupFn } from "../utils/types";

export async function initTyped(): Promise<CleanupFn> {
  const { default: Typed } = await import("typed.js");

  let typed: InstanceType<typeof Typed> | null = null;

  if (document.querySelector(".animated-type")) {
    const target = document.querySelector("#typed");
    const stringsEl = document.querySelector("#typed-strings");

    if (target && stringsEl) {
      typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        showCursor: true,
        cursorChar: "_",
        loop: true,
        typeSpeed: 70,
        backSpeed: 30,
        backDelay: 2500,
      });
    }
  }

  return () => typed?.destroy();
}