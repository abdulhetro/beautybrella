import './LegalPages.css';

export default function TermsConditions() {
  return (
    <div className="legal-page section-padding container">
      <h1 className="heading-md text-center mb-5">Terms & Conditions</h1>
      <div className="legal-content">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Beauty Brella's website, you agree to be bound by these Terms and Conditions. If you do not agree to all terms and conditions, then you may not access the website or use any services.</p>

        <h2>2. Intellectual Property</h2>
        <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Beauty Brella, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

        <h2>3. Purchases and Payment</h2>
        <p>We accept various forms of payment. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. We reserve the right to refuse any order you place with us.</p>

        <h2>4. Product Availability and Errors</h2>
        <p>We are constantly updating our offerings of products on the Website. The products available on our Website may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Website and in our advertising on other web sites. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p>

        <h2>5. Limitation of Liability</h2>
        <p>In no event will Beauty Brella, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website.</p>
      </div>
    </div>
  );
}
