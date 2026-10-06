const a = '/assets/brand1-a.svg';
const b = '/assets/brand1-b.svg';
const c = '/assets/brand1-c.svg';
const brand2 = '/assets/brand2.svg';
const brand3 = '/assets/brand3.svg';
import './BrandCards.css';

export default function BrandCards() {
  return (
    <div className="brands">
      <a className="brands__card brands__card--green" href="https://sm.tlines.us" target="_blank" rel="noopener noreferrer">
        <img className="brands__icon" src={a} alt="" />
        <img className="brands__word" src={c} alt="TLines" />
        <img className="brands__sub" src={b} alt="Store Maker" />
      </a>
      <a className="brands__card brands__card--img" href="https://psf.tlines.us" target="_blank" rel="noopener noreferrer">
        <img src={brand2} alt="TLines Premium Store Fitouts" />
      </a>
      <img className="brands__card brands__card--img" src={brand3} alt="TLines Design & Build" />
    </div>
  );
}
