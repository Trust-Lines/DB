'use client';

import { useLayoutEffect, useRef, useState } from 'react';
const logo = '/assets/header-logo-new.svg';
const tshop = '/assets/tshop.svg';
import './Header.css';

// Figma navbar outline: flat bar with a rounded tab dipping under the logo.
// Built at the real pixel width so the corners never stretch, and scaled
// by k so the bar follows the header height (shorter on phones).
const H = 101.166;
function shapePath(w, k) {
  const y = (n) => n * k;
  return [
    `M${w} 0V${y(70)}C${w} ${y(76.6274)} ${w - y(5.37)} ${y(82)} ${w - y(12)} ${y(82)}`,
    `H${y(125.435)}C${y(122.599)} ${y(82)} ${y(120.234)} ${y(84.0419)} ${y(118.994)} ${y(86.5931)}`,
    `C${y(115.881)} ${y(92.9967)} ${y(109.447)} ${y(97.5068)} ${y(101.877)} ${y(97.8389)}`,
    `L${y(26.458)} ${y(101.146)}C${y(15.6295)} ${y(101.621)} ${y(6.39306)} ${y(93.3843)} ${y(5.63086)} ${y(82.5723)}`,
    `L0 0H${w}Z`,
  ].join(' ');
}

export default function Header() {
  const ref = useRef(null);
  const [size, setSize] = useState({ w: 1402, h: H });

  useLayoutEffect(() => {
    const el = ref.current;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = shapePath(size.w, size.h / H);

  return (
    <header className="header" ref={ref}>
      <svg
        className="header__shape"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${size.w} ${size.h}`}
        fill="none"
        aria-hidden="true"
      >
        <path d={d} fill="#334A64" />
      </svg>
      <a className="header__logo" href="/">
        <img src={logo} alt="TLines Design & Build" />
      </a>
      <a className="header__shop" href="https://tshop-theta.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img src={tshop} alt="" className="header__shop-bg" />
        <span className="header__shop-text">
          <b>T Shop</b>
          <small>Online Store</small>
        </span>
      </a>
    </header>
  );
}
