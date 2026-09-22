import React from 'react';

const MercadoLibreAuth = ({ userId }) => {
  const CLIENT_ID = '1096957813719713';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  
  const handleConnect = () => {
    const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
    window.location.href = authUrl;
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button
        onClick={handleConnect}
        style={{
          padding: '12px 24px',
          backgroundColor: '#fff159',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#000',
        }}
      >
        Conectar Mercado Libre
      </button>
    </div>
  );
};

export default MercadoLibreAuth;