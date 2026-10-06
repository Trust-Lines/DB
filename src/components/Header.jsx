'use client';

import { useLayoutEffect, useRef, useState } from 'react';
const logo = '/assets/header-logo-new.svg';
const tshop = '/assets/tshop.svg';
import './Header.css';

// Figma navbar outline: flat bar with a rounded tab dipping under the logo.
// Built at the real pixel width so the corners never stretch.
const H = 101.166;
function shapePath(w) {
  return [
    `M${w} 0V70C${w} 76.6274 ${w - 5.37} 82 ${w - 12} 82`,
    `H125.435C122.599 82 120.234 84.0419 118.994 86.5931`,
    `C115.881 92.9967 109.447 97.5068 101.877 97.8389`,
    `L26.458 101.146C15.6295 101.621 6.39306 93.3843 5.63086 82.5723`,
    `L0 0H${w}Z`,
  ].join(' ');
}

export default function Header() {
  const ref = useRef(null);
  const [size, setSize] = useState({ w: 1402 });

  useLayoutEffect(() => {
    const el = ref.current;
    const update = () => setSize({ w: el.clientWidth });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = shapePath(size.w);

  return (
    <header className="header" ref={ref}>
      <svg
        className="header__shape"
        width={size.w}
        height={H}
        viewBox={`0 0 ${size.w} ${H}`}
        fill="none"
        aria-hidden="true"
      >
        <path d={d} fill="#334A64" />      </svg>
      <a className="header__logo" href="/">
        <img src={logo} alt="TLines Design & Build" />
      </a>
      <a className="header__shop" href="#">
        <img src={tshop} alt="" className="header__shop-bg" />
        <span className="header__shop-text">
          <b>T Shop</b>
          <small>Online Store</small>
        </span>
      </a>
    </header>
  );
}
