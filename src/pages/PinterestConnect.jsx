import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PinterestConnect = () => {
  const location = useLocation();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check if Pinterest redirected back with an auth code
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('code') || queryParams.has('verified')) {
      setIsVerified(true);
    }
  }, [location]);

  const handleConnect = () => {
    // If the App ID is configured, redirect to the real Pinterest OAuth page
    // Important: You must add "http://localhost:5173/pinterest-connect" 
    // to your "Redirect URIs" in the Pinterest Developer Dashboard for this to work.
    
    const clientId = '1555054'; 
    const redirectUri = `${window.location.origin}/pinterest-connect`;
    const scope = 'boards:read,boards:write,pins:read,pins:write';
    
    const oauthUrl = `https://www.pinterest.com/oauth/?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}`;
    
    window.location.href = oauthUrl;
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px', backgroundColor: 'var(--bg-secondary)', padding: '50px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}>
        
        {isVerified ? (
          <div>
            <div style={{ 
              width: '80px', height: '80px', 
              backgroundColor: '#e60023', color: 'white', 
              borderRadius: '50%', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 20px', fontSize: '40px' 
            }}>
              ✓
            </div>
            <h2 className="heading-sm" style={{ marginBottom: '15px' }}>Pinterest Connected!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Your Pinterest business account has been successfully verified and linked to Beauty Brella.
            </p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
              Return Home
            </button>
          </div>
        ) : (
          <div>
            <div style={{ 
              width: '80px', height: '80px', 
              backgroundColor: '#e60023', color: 'white', 
              borderRadius: '50%', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', 
              margin: '0 auto 20px', fontSize: '40px', fontWeight: 'bold' 
            }}>
              P
            </div>
            <h2 className="heading-sm" style={{ marginBottom: '15px' }}>Integration Setup</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Link your Pinterest Business account to Beauty Brella to enable seamless publishing and visual bookmarking.
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleConnect} 
              style={{ backgroundColor: '#e60023', borderColor: '#e60023', width: '100%' }}
            >
              Connect your Pinterest Account
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestConnect;
