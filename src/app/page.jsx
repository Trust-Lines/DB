import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <div className="page__topbar">
        <Header />
      </div>
      <Hero />
      <Footer />
    </div>
  );
}
