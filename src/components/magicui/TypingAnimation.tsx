import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  isVisible: boolean;
}

export default function TypingAnimation({
  text,
  duration = 150,
  className,
  isVisible,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    indexRef.current = 0;
    setDisplayedText("");

    const typingEffect = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration, isVisible]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}