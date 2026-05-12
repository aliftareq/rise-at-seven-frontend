"use client";

import { useEffect } from "react";

export default function ReloadOnce() {
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloadedOnce");

    if (!hasReloaded) {
      sessionStorage.setItem("hasReloadedOnce", "true");
      window.location.reload();
    }
  }, []);

  return null;
}
