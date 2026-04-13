import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useScrollAnimation() {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const refreshObserver = () => {
      const targets = el.querySelectorAll(".scroll-fade, .reveal, .fade-up, section, .product-card");
      targets.forEach((target) => {
        if (!target.classList.contains("scroll-fade") && !target.classList.contains("reveal") && !target.classList.contains("fade-up")) {
          target.classList.add("scroll-fade");
        }
        observer.observe(target);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px" }
    );

    // Run slightly after mount and on route change
    const timer = setTimeout(refreshObserver, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return ref;
}
