import instagram from '../assets/social-instagram.svg';
import youtube from '../assets/social-youtube.svg';
import linkedin from '../assets/social-linkedin.svg';
import './SocialLinks.css';

const items = [
  { name: 'Instagram', icon: instagram },
  { name: 'YouTube', icon: youtube },
  { name: 'LinkedIn', icon: linkedin },
];

export default function SocialLinks() {
  return (
    <div className="social">
      <p className="label">Follow us on</p>
      <div className="social__list">
        {items.map((i) => (
          <a key={i.name} href="#" aria-label={i.name}>
            <img src={i.icon} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
