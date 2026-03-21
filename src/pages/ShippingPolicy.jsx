import './LegalPages.css';

export default function ShippingPolicy() {
  return (
    <div className="legal-page section-padding container">
      <h1 className="heading-md text-center mb-5">Shipping Policy</h1>
      <div className="legal-content">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Processing Time</h2>
        <p>All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>

        <h2>2. Domestic Shipping Rates and Estimates</h2>
        <p>We offer flat-rate shipping for domestic orders:</p>
        <ul>
          <li><strong>Standard Shipping (3-5 business days):</strong> $5.99</li>
          <li><strong>Expedited Shipping (2 business days):</strong> $12.99</li>
          <li><strong>Free Shipping:</strong> On all orders over $50</li>
        </ul>

        <h2>3. International Shipping</h2>
        <p>We currently offer international shipping to select countries. Shipping charges for your order will be calculated and displayed at checkout depending on the destination. Please note that international orders may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Beauty Brella is not responsible for these charges if they are applied and are your responsibility as the customer.</p>

        <h2>4. How do I check the status of my order?</h2>
        <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>

        <h2>5. Eco-Friendly Packaging Commitment</h2>
        <p>In line with our "Pure & Natural" philosophy, all our shipping materials are 100% recyclable or biodegradable. We use minimal packaging aimed at ensuring the safety of your products while protecting the earth.</p>
      </div>
    </div>
  );
}
