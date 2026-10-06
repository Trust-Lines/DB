const bg = '/assets/hero-bg.png';
const tiger = '/assets/tiger.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={bg} alt="" />
      </div>
      <div className="hero__stage">
        <div className="hero__text">
          <h1>Coming soon..</h1>
          <p>This website is under construction</p>
        </div>
        <div className="hero__tiger">
          <img src={tiger} alt="TLines tiger mascot" />
        </div>
      </div>
    </section>
  );
}
