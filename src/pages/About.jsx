import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container text-center text-light">
          <h1 className="heading-md">Our Story</h1>
          <p className="about-subtitle">Defining true beauty through the purity of nature.</p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-sm mb-4">Born from a Desire for Purity</h2>
            <p>
              Beauty Brella was founded on a simple yet powerful belief: what you put on your body should be as pure and natural as what you put in it. We were tired of reading labels filled with unpronounceable chemicals and harsh additives that did more harm than good to our skin and the environment.
            </p>
            <p>
              Our journey began in a small botanical lab, where we spent years studying the healing properties of natural extracts, essential oils, and earth Clays. Our goal was to formulate skincare that not only delivers visible results but also respects the delicate balance of your skin's microbiome.
            </p>
            <h2 className="heading-sm mt-5 mb-4">Our Vision & Mission</h2>
            <p>
              <strong>Our Vision:</strong> To be the world's most trusted brand for natural, transparent, and sustainable beauty.
            </p>
            <p>
              <strong>Our Mission:</strong> To craft premium, chemical-free skincare that empowers you to feel confident in your natural skin, while committing to eco-friendly practices that protect our planet for future generations.
            </p>

            <div className="founder-message mt-5">
              <h3 className="heading-sm mb-3">A Message from the Founder</h3>
              <p className="italic">
                "I started Beauty Brella because I wanted my family to have products I could trust implicitly. Every formula we create is touched by passion, tested rigorously for safety, and crafted with love. Thank you for welcoming us into your daily routine."
              </p>
              <p className="mt-3 font-bold">— Elena R., Founder</p>
            </div>
            
            <Link to="/shop" className="btn btn-primary mt-5">Explore Our Collection</Link>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1556228720-192b61f89324?auto=format&fit=crop&q=80&w=800" 
              alt="Crafting natural products" 
              className="rounded-image shadow-soft"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
