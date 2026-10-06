'use client';

import { useLayoutEffect } from 'react';

// Zoom the whole page out (never in) when the screen is narrower than the
// 1592px design. The hero fills the screen height, and its tiger shrinks to fit.
const DESIGN_W = 1592;
const HERO_MAX = 1100;
const HERO_MIN = 560;

export default function FitScale() {
  useLayoutEffect(() => {
    const update = () => {
      const s = Math.min(1, window.innerWidth / DESIGN_W);
      const h = Math.min(HERO_MAX, Math.max(HERO_MIN, window.innerHeight / s));
      document.documentElement.style.setProperty('--fit', s.toFixed(4));
      document.documentElement.style.setProperty('--hero-h', Math.round(h) + 'px');
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return null;
}
