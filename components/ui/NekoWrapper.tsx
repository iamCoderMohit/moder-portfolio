"use client";

import { useEffect } from "react";

export default function NekoWrapper() {
  useEffect(() => {
    // Dynamically load neko.js from CDN
    const script = document.createElement("script");
    script.src = "https://unpkg.com/neko-ts@1.0.4/dist/neko.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.Neko) {
        // @ts-ignore
        new window.Neko({ element: document.body });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
