import './LegalPages.css';

export default function Disclaimer() {
  return (
    <div className="legal-page section-padding container">
      <h1 className="heading-md text-center mb-5">Medical & General Disclaimer</h1>
      <div className="legal-content">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Not Medical Advice</h2>
        <p>The information provided by Beauty Brella on this website and our products is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.</p>

        <h2>2. Product Use</h2>
        <p>Our skincare products are designed to support and enhance natural beauty. However, individual results may vary. What works for one person may not work for another. Please read all product labels and ingredient lists carefully before use.</p>

        <h2>3. Patch Testing</h2>
        <p>We strongly recommend performing a patch test before incorporating any new skincare product into your routine, especially if you have sensitive skin or a history of allergies. Apply a small amount of the product to the inside of your wrist or behind an ear. If irritation occurs, discontinue use immediately and consult a healthcare professional.</p>

        <h2>4. Ingredient Sensitivities</h2>
        <p>While our products are formulated with natural ingredients, natural substances can still cause allergic reactions in some individuals. It is your responsibility to review the ingredient list for potential allergens before use.</p>
      </div>
    </div>
  );
}
