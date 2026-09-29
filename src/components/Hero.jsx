import bg from '../assets/hero-bg.png';
import tiger from '../assets/tiger.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={bg} alt="" />
      </div>
      <div className="hero__text">
        <h1>Coming soon..</h1>
        <p>This website is under construction</p>
      </div>
      <div className="hero__tiger">
        <img src={tiger} alt="TLines tiger mascot" />
      </div>
    </section>
  );
}
