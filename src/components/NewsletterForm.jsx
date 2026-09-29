const arrow = '/assets/arrow-submit.svg';
import './NewsletterForm.css';

export default function NewsletterForm() {
  return (
    <div className="newsletter">
      <h2 className="newsletter__title">
        Subscribe to<br />
        our <strong>Newsletter</strong>.
      </h2>
      <button className="newsletter__btn" type="button">
        <span>Submit your email</span>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}
