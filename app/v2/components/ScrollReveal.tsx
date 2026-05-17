"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasMounted(true);

    // If viewport is mobile, show content immediately for maximum mobile performance
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px", // Trigger slightly before entering
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animate only if mounted and viewport size is desktop (>= 768px)
  const shouldAnimate = hasMounted && typeof window !== "undefined" && window.innerWidth >= 768;

  const getDirectionStyles = () => {
    if (!shouldAnimate || isVisible) {
      return {
        opacity: 1,
        transform: "none",
      };
    }

    let transform = "";
    switch (direction) {
      case "up":
        transform = "translateY(24px)";
        break;
      case "down":
        transform = "translateY(-24px)";
        break;
      case "left":
        transform = "translateX(24px)";
        break;
      case "right":
        transform = "translateX(-24px)";
        break;
      default:
        transform = "none";
    }

    return {
      opacity: 0,
      transform,
    };
  };

  const { opacity, transform } = getDirectionStyles();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform,
        transitionProperty: shouldAnimate ? "opacity, transform" : "none",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: shouldAnimate && !isVisible ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </div>
  );
}
