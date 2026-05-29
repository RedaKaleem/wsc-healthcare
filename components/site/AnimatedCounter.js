'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, suffix = '', duration = 1800 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration]);
  const display = value % 1 === 0 ? Math.floor(n).toLocaleString() : n.toFixed(2);
  return <span ref={ref}>{display}{suffix}</span>;
}
