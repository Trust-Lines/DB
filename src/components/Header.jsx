import { useLayoutEffect, useRef, useState } from 'react';
import logo from '../assets/header-logo.svg';
import tshop from '../assets/tshop.svg';
import './Header.css';

// Builds the header outline at the real pixel size so the rounded corners
// keep their radius at every width (a stretched SVG would distort them).
function shapePath(w, h) {
  const s = Math.min(38.4, w * 0.0274); // slant of the bottom edge
  const rl = Math.min(30, h * 0.3);
  const rr = Math.min(26, h * 0.27);
  return [
    `M1 0`,
    `V${h - 1 - rl}`,
    `Q1 ${h - 1} ${1 + rl} ${h - 1}`,
    `L${w - 1 - rr} ${h - s}`,
    `Q${w - 1} ${h - s} ${w - 1} ${h - s - rr}`,
    `V0`,
  ].join(' ');
}

export default function Header() {
  const ref = useRef(null);
  const [size, setSize] = useState({ w: 1402, h: 134 });

  useLayoutEffect(() => {
    const el = ref.current;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const d = shapePath(size.w, size.h);

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
        <path d={d} stroke="#fff" strokeWidth="2" />
      </svg>
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
