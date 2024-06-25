import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface VelocityScrollProps {
  children: string;
  direction?: 'left' | 'right';
  className?: string;
  highlightColor: string;
}

export function VelocityScroll({
  children,
  direction = 'left',
  className,
  highlightColor,
}: VelocityScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const x = useSpring(
    useTransform(
      scrollY,
      [0, 1000],
      direction === 'left' ? [0, -contentWidth] : [-contentWidth, 0]
    ),
    springConfig
  );

  useEffect(() => {
    if (ref.current) {
      setContentWidth(ref.current.scrollWidth / 2);
    }
  }, [children]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScrollEnd = () => {
      timeoutId = setTimeout(() => {
        x.stop();
      }, 500);
    };

    window.addEventListener('scroll', handleScrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScrollEnd);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [x]);

  const words = children.split('.');
  const repeatedWords = Array(20).fill(words).flat();

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x }} className="inline-block">
        {repeatedWords.map((word, index) => (
          <span key={index} className={`inline-block mx-4 ${index % words.length === 0 ? highlightColor : ''}`}>
            {word}
          </span>
        ))}
      </motion.div>
      <motion.div style={{ x }} className="inline-block">
        {repeatedWords.map((word, index) => (
          <span key={index} className={`inline-block mx-4 ${index % words.length === 0 ? highlightColor : ''}`}>
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}