import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function TypingEffect({ text, className, delay = 1 }) {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      gsap.fromTo(
        el.current,
        { text: "" },
        {
          text: text,
          duration: text.length * 0.03,
          ease: "none",
          delay: delay
        }
      );
    }
  }, [text, delay]);

  return <span ref={el} className={className} />;
}
