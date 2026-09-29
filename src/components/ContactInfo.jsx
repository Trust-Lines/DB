import arrow from '../assets/arrow-link.svg';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact">
      <div className="contact__block">
        <p className="label">Locations</p>
        <a className="contact__loc" href="#">
          <span>Atalanta, Georgia (GA)</span>
          <img src={arrow} alt="" />
        </a>
      </div>
      <div className="contact__block">
        <p className="label">Call us</p>
        <a className="contact__tel" href="tel:8006603772">800-660-3772</a>
      </div>
    </div>
  );
}
