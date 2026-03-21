import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <Link to="/">
            <img src="/logo.jpeg" alt="Beauty Brella" className="footer-logo" />
          </Link>
          <p className="footer-tagline">Pure Beauty Starts Naturally. Focus on organic, safe, and natural beauty products for you and the planet.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?category=skincare">Skincare</Link></li>
            <li><Link to="/shop?category=body">Body Care</Link></li>
            <li><Link to="/shop?category=hair">Hair Care</Link></li>
            <li><Link to="/shop?category=bestsellers">Bestsellers</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/refunds">Refund Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Beautiful</h4>
          <p>Join our newsletter for 10% off your first order and exclusive beauty tips.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beauty Brella. All rights reserved.</p>
      </div>
    </footer>
  );
}
