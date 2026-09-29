import logo from '../assets/logo-footer.png';
import BrandCards from './BrandCards.jsx';
import NewsletterForm from './NewsletterForm.jsx';
import SocialLinks from './SocialLinks.jsx';
import FooterMenu from './FooterMenu.jsx';
import ContactInfo from './ContactInfo.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img className="footer__logo" src={logo} alt="TLines Creativity Group" />
        <BrandCards />
      </div>

      <div className="footer__main">
        <div className="footer__left">
          <NewsletterForm />
          <SocialLinks />
        </div>
        <div className="footer__right">
          <FooterMenu />
          <ContactInfo />
        </div>
      </div>

      <div className="footer__copy">
        <p>All rights are reserved for TLines 2026</p>
        <p>All rights are reserved for TLines 2026</p>
      </div>
    </footer>
  );
}
