import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';

function Main() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <main>
      <section id="hero" className="hero-bg">
        <div className="container-8 hero">
          <HeroSection />
        </div>
      </section>

      <section id="menu">
        <div className="container-8">
          <MenuSection />
        </div>
      </section>

      <section id="testimonials">
        <div className="container-8">
          <TestimonialsSection />
        </div>
      </section>

      <section id="about">
        <div className="container-8">
          <AboutSection />
        </div>
      </section>
    </main>
  );
}

export default Main;
