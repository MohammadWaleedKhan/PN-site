"use client";

import { useEffect } from "react";
import Script from "next/script";

type Props = {
  lenis?: { stop?: () => void; start?: () => void };
  triggerSelector?: string; // default "#showreel-trigger"
};

export default function ShowreelMagnific({
  lenis,
  triggerSelector = "#showreel-trigger",
}: Props) {
  useEffect(() => {
    let destroyed = false;

    const init = () => {
      if (destroyed) return;

      const $ = (window as any).jQuery || (window as any).$;
      if (!$) return false;
      if (!$.fn?.magnificPopup) return false;

      const $trigger = $(triggerSelector);
      if (!$trigger.length) return false;

      // avoid double init
      if ($trigger.data("mfp-initialized")) return true;
      $trigger.data("mfp-initialized", true);

      $trigger.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
          beforeOpen: function () {
            $("body").addClass("overflow-hidden");
            lenis?.stop?.();
          },
          close: function () {
            $("body").removeClass("overflow-hidden");
            lenis?.start?.();
          },
        },
      });

      return true;
    };

    // try immediately, then retry a few times (in case trigger renders late)
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      const ok = init();
      if (ok || tries >= 20) window.clearInterval(timer);
    }, 150);

    return () => {
      destroyed = true;
      window.clearInterval(timer);

      const $ = (window as any).jQuery || (window as any).$;
      if (!$) return;

      const $trigger = $(triggerSelector);
      try {
        $trigger.magnificPopup("destroy");
      } catch {}
      $trigger.removeData("mfp-initialized");

      // ensure body unlock
      document.body.classList.remove("overflow-hidden");
      lenis?.start?.();
    };
  }, [lenis, triggerSelector]);

  return (
    <>
      {/* CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"
      />

      {/* jQuery */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        strategy="afterInteractive"
      />

      {/* Magnific Popup */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}