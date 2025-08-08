
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

interface SplitTextProps {
  text: string;
  className?: string; // Optional class for additional styling
}

const SplitText: React.FC<SplitTextProps> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    el.style.position = "relative";

    let splitter: GSAPSplitText;
    try {
      splitter = new GSAPSplitText(el, {
        type: "chars",
        absolute: true,
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Failed to create SplitText:", error);
      return;
    }

    const targets = splitter.chars;
    if (!targets || targets.length === 0) {
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      (t as HTMLElement).style.willChange = "transform, opacity";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    tl.set(targets, { opacity: 0, y: 40, force3D: true });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
      force3D: true,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(targets);
      splitter.revert();
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal text-center${className ? " " + className : ""}`}
      style={{ wordWrap: "break-word" }}
    >
      {text}
    </p>
  );
};

export default SplitText;