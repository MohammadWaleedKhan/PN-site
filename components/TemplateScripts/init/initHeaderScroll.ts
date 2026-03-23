import type { CleanupFn } from "../utils/types";

export function initHeaderScroll(): CleanupFn {
  const onScroll = () => {
    const header = document.querySelector(".mxd-header");
    if (!header) return;

    window.scrollY > 10
      ? header.classList.add("is-hidden")
      : header.classList.remove("is-hidden");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}