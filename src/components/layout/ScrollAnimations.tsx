"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const els = document.querySelectorAll(
      ".product-card, .category-card, .trust-item"
    );

    els.forEach((el) => {
      const node = el as HTMLElement;
      node.style.opacity = "0";
      node.style.transform = "translateY(30px)";
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
