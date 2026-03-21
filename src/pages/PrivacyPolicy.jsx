import './LegalPages.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page section-padding container">
      <h1 className="heading-md text-center mb-5">Privacy Policy</h1>
      <div className="legal-content">
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>At Beauty Brella, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website (the "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
        
        <h2>2. Information We Collect</h2>
        <p>We collect several types of information from and about users of our Website, including information:</p>
        <ul>
          <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
          <li>That is about you but individually does not identify you, such as browsing history on our site.</li>
          <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
        <ul>
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it, such as processing your order.</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.</p>

        <h2>5. Contact Information</h2>
        <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <strong>privacy@beautybrella.com</strong>.</p>
      </div>
    </div>
  );
}
