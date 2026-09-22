import React from 'react';

function MercadoLibreAuth({ onConnected }) {
  const handleConnect = () => {
    const clientId = '1096957813719713';
    const redirectUri = 'https://ml-dashboard-khaki.vercel.app/callback';
    const state = Math.random().toString(36).substring(7);

    localStorage.setItem('ml_auth_state', state);

    const authUrl = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
    window.location.href = authUrl;
  };

  return (
    <button onClick={handleConnect} className="ml-auth-btn">
      Conectar Mercado Libre
    </button>
  );
}

export default MercadoLibreAuth;