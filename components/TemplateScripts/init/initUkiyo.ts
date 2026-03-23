import type { CleanupFn } from "../utils/types";

export async function initUkiyo(): Promise<CleanupFn> {
  const { default: Ukiyo } = await import("ukiyojs");

  const images = document.querySelectorAll(".parallax-img");
  const imagesSmall = document.querySelectorAll(".parallax-img-small");
  const videos = document.querySelectorAll(".parallax-video");

  // Ukiyo destroy handle nahi deta most cases, so no cleanup required
  if (images.length) new Ukiyo(images, { scale: 1.5, speed: 1.5, externalRAF: false });
  if (imagesSmall.length) new Ukiyo(imagesSmall, { scale: 1.2, speed: 1.5, externalRAF: false });
  if (videos.length) new Ukiyo(videos, { scale: 1.5, speed: 1.5, externalRAF: false });

  return () => {};
}