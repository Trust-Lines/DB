import a from '../assets/brand1-a.svg';
import b from '../assets/brand1-b.svg';
import c from '../assets/brand1-c.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import './BrandCards.css';

export default function BrandCards() {
  return (
    <div className="brands">
      <div className="brands__card brands__card--green">
        <img className="brands__icon" src={a} alt="" />
        <img className="brands__word" src={c} alt="TLines" />
        <img className="brands__sub" src={b} alt="Store Maker" />
      </div>
      <img className="brands__card brands__card--img" src={brand2} alt="TLines Premium Store Fitouts" />
      <img className="brands__card brands__card--img" src={brand3} alt="TLines Design & Build" />
    </div>
  );
}
