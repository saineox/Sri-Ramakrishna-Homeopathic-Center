import { useState, useEffect, useRef } from 'react';

export const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration / 16); // ~60fps
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Easy out quad curve
      const val = Math.round(end * (progress * (2 - progress)));
      
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(val);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [triggered, target, duration]);

  return { count, elementRef };
};
