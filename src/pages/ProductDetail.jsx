import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products, testimonials } from '../data';
import { ShoppingBag, Star, Check, ArrowLeft } from 'lucide-react';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container section-padding text-center" style={{ paddingTop: '150px' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary mt-4">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail-page section-padding">
      <div className="container">
        
        <Link to="/shop" className="back-link">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="product-layout">
          {/* Gallery */}
          <div className="product-gallery">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>

          {/* Info */}
          <div className="product-main-info">
            <div className="product-header">
              <span className="product-category">{product.category}</span>
              <h1 className="heading-md">{product.name}</h1>
              <div className="product-reviews-summary">
                <span className="stars">★★★★★</span>
                <span className="review-count">(124 Reviews)</span>
              </div>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                className={`btn btn-primary add-btn ${added ? 'btn-success' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? <><Check size={20} className="mr-2"/> Added to Cart</> : <><ShoppingBag size={20} className="mr-2"/> Add to Cart - ${(product.price * quantity).toFixed(2)}</>}
              </button>
            </div>

            <div className="product-details-accordion">
              <div className="accordion-item">
                <h4>Key Benefits</h4>
                <ul>
                  {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <div className="accordion-item">
                <h4>Ingredients</h4>
                <p>{product.ingredients}</p>
              </div>
              <div className="accordion-item">
                <h4>How to Use</h4>
                <p>{product.usage}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
