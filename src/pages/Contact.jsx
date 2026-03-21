import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page section-padding container" style={{ paddingTop: '120px' }}>
      <div className="text-center mb-5">
        <h1 className="heading-md">Get in Touch</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto' }}>
          We'd love to hear from you. Whether you have a question about products, shipping, or just want to chat about your skincare routine.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2 className="heading-sm mb-4">Contact Information</h2>
          <div className="info-item">
             <MapPin className="text-gold mt-1" size={24} />
             <div>
               <h4>Boutique Store</h4>
               <p>123 Nature Way Suite 100<br/>Botanical City, CA 90210</p>
             </div>
          </div>
          <div className="info-item">
             <Phone className="text-gold mt-1" size={24} />
             <div>
               <h4>Phone</h4>
               <p>+1 (800) 123-4567<br/>Mon-Fri, 9am to 6pm PST</p>
             </div>
          </div>
          <div className="info-item">
             <Mail className="text-gold mt-1" size={24} />
             <div>
               <h4>Email</h4>
               <p>hello@beautybrella.com<br/>support@beautybrella.com</p>
             </div>
          </div>
        </div>

        <div className="contact-form-container bg-secondary">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We will get back to you soon."); }}>
            <h2 className="heading-sm mb-4">Send a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
