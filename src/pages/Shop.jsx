import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data';
import './Shop.css';

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setFilter(category);
    } else {
      setFilter('all');
    }
  }, [location.search]);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  // Reusing the same grid style from Home.css using global classes or redefining here
  return (
    <div className="shop-page container section-padding">
      <div className="shop-header text-center">
        <h1 className="heading-md">Our Collection</h1>
        <p className="text-secondary shop-subtitle">Discover our full range of natural skincare and body products crafted for your glowing skin.</p>
        
        <div className="shop-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >All Products</button>
          <button 
            className={`filter-btn ${filter === 'skincare' ? 'active' : ''}`}
            onClick={() => setFilter('skincare')}
          >Skincare</button>
          <button 
            className={`filter-btn ${filter === 'body' ? 'active' : ''}`}
            onClick={() => setFilter('body')}
          >Body Care</button>
          <button 
            className={`filter-btn ${filter === 'hair' ? 'active' : ''}`}
            onClick={() => setFilter('hair')}
          >Hair Care</button>
        </div>
      </div>

      <div className="shop-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="shop-product-card">
            <Link to={`/product/${product.id}`} className="shop-image-container">
              <img src={product.image} alt={product.name} className="shop-image" loading="lazy" />
              <div className="shop-card-overlay">
                <span className="quick-add">View Details</span>
              </div>
            </Link>
            <div className="shop-product-info text-center">
              <h3 className="shop-product-name"><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
              <p className="shop-product-price">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
