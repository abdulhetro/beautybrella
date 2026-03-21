import './LegalPages.css';

export default function RefundPolicy() {
  return (
    <div className="legal-page section-padding container">
      <h1 className="heading-md text-center mb-5">Refund & Return Policy</h1>
      <div className="legal-content">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Our True Purity Guarantee</h2>
        <p>We believe in the quality of our products and want you to be completely satisfied with your purchase. If for any reason you are not, we offer a straightforward return policy to ensure your peace of mind.</p>

        <h2>2. Return Window</h2>
        <p>You may return any unused, unopened products in their original condition and packaging within 30 days of the purchase date for a full refund to your original method of payment.</p>

        <h2>3. Used or Opened Items</h2>
        <p>Due to the hygienic nature of skincare products, we cannot accept returns or issue refunds for items that have been opened or used, unless the product arrived damaged or defective.</p>

        <h2>4. How to Request a Return</h2>
        <p>To initiate a return, please contact our support team at <strong>returns@beautybrella.com</strong> with your order number and the reason for the return. We will provide you with a Return Merchandise Authorization (RMA) number and instructions on how to send your items back to us.</p>

        <h2>5. Refunds Processing Time</h2>
        <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your credit card or original method of payment within 5-10 business days.</p>
      </div>
    </div>
  );
}
