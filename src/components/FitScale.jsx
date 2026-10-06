'use client';

import { useLayoutEffect } from 'react';

// The hero is designed at 1592x1190. On screens smaller than that the whole
// page is zoomed out (never in) so the full hero is always visible.
const DESIGN_W = 1592;
const DESIGN_H = 1190;

export default function FitScale() {
  useLayoutEffect(() => {
    const update = () => {
      const s = Math.min(1, window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H);
      document.documentElement.style.setProperty('--fit', s.toFixed(4));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return null;
}
