import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Recycle, Heart } from 'lucide-react';
import { products, testimonials } from '../data';
import './Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1600" 
            alt="Natural Skincare" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">Pure Beauty Starts Naturally</h1>
          <p className="hero-subtitle">Focus on organic, safe, and powerful natural beauty products for you and the planet.</p>
          <div className="hero-cta">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Explore Products</Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story section-padding bg-secondary">
        <div className="container text-center story-container">
          <h2 className="heading-md section-title">Our Philosophy</h2>
          <p className="story-text">
            At Beauty Brella, we believe that true beauty stems from nature. Our mission is to craft 
            premium, chemical-free skincare that nourishes your skin while protecting our earth. 
            We meticulously source the purest organic ingredients to create formulas you can trust.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="heading-md section-title">Featured Collections</h2>
            <Link to="/shop" className="text-gold view-all">View All Products →</Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`} className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                  <div className="product-card-overlay">
                    <span className="quick-view">Quick View</span>
                  </div>
                </Link>
                <div className="product-info">
                  <h3 className="product-name"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="heading-md section-title">Why Beauty Brella</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><Leaf size={32} /></div>
              <h4>100% Natural</h4>
              <p>Pure, plant-based ingredients for healthy skin.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><ShieldCheck size={32} /></div>
              <h4>Dermatologist Tested</h4>
              <p>Clinically proven to be safe and gentle.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Recycle size={32} /></div>
              <h4>Eco-Friendly</h4>
              <p>Sustainable packaging for a greener planet.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Heart size={32} /></div>
              <h4>Cruelty-Free</h4>
              <p>Never tested on animals, ever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section-padding">
        <div className="container benefits-container">
          <div className="benefits-image">
            <img 
              src="https://images.unsplash.com/photo-1615397323136-e8378bf66c25?auto=format&fit=crop&q=80&w=800" 
              alt="Glowing Skin" 
              loading="lazy"
            />
          </div>
          <div className="benefits-content">
            <h2 className="heading-md section-title">Awaken Your Natural Glow</h2>
            <ul className="benefits-list">
              <li>
                <strong>Deep Hydration:</strong> Restore your skin's natural moisture barrier.
              </li>
              <li>
                <strong>Anti-Aging Power:</strong> Smooth fine lines with botanical antioxidants.
              </li>
              <li>
                <strong>Radiant Complexion:</strong> Brighten dark spots for an even skin tone.
              </li>
              <li>
                <strong>Sensory Experience:</strong> Indulge in luxurious textures and natural aromas.
              </li>
            </ul>
            <Link to="/shop" className="btn btn-primary mt-4">Discover The Secret</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding bg-secondary">
        <div className="container text-center">
          <h2 className="heading-md section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <div className="stars">
                  {'★'.repeat(t.rating)}
                  {'☆'.repeat(5 - t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-author">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-overlay"></div>
        <div className="container cta-content text-center">
          <h2 className="heading-md text-light">Start Your Natural Beauty Journey Today</h2>
          <p className="text-light cta-subtitle">Experience the pure difference of chemical-free skincare.</p>
          <Link to="/shop" className="btn btn-primary btn-large">Shop The Collection</Link>
        </div>
      </section>
    </div>
  );
}
