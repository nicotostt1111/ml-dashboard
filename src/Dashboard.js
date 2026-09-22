import React, { useState } from 'react';

export default function Dashboard({ user }) {
  const [ads, setAds] = useState([
    {
      id: 1,
      name: 'Producto A',
      margin: 20,
      tacos: 8,
      spent: 300,
      sales: 25,
      status: 'green'
    },
    {
      id: 2,
      name: 'Producto B',
      margin: 15,
      tacos: 14,
      spent: 800,
      sales: 30,
      status: 'yellow'
    },
    {
      id: 3,
      name: 'Producto C',
      margin: 12,
      tacos: 18,
      spent: 600,
      sales: 20,
      status: 'red'
    }
  ]);

  const getTacosColor = (tacos) => {
    if (tacos < 8) return 'green';
    if (tacos < 12) return 'yellow';
    if (tacos < 16) return 'orange';
    return 'red';
  };

  const getStatusText = (tacos) => {
    if (tacos < 8) return '🟢 VERDE - Subí presupuesto';
    if (tacos < 12) return '🟡 AMARILLO - Revisar';
    if (tacos < 16) return '🟠 NARANJA - No escalar';
    return '🔴 ROJO - APAGAR PUBLICIDAD';
  };

  const handleTurnOffAds = (id) => {
    setAds(ads.map(ad => ad.id === id ? { ...ad, status: 'off' } : ad));
    alert(`Publicidad apagada para producto ${id}`);
  };

  const totalSpent = ads.reduce((sum, ad) => sum + ad.spent, 0);
  const totalSales = ads.reduce((sum, ad) => sum + ad.sales, 0);
  const avgTacos = (totalSpent / (totalSpent + totalSales * 100) * 100).toFixed(1);

  return (
    <div style={styles.container}>
      <h1>📊 Análisis de Publicidad</h1>

      <div style={styles.summary}>
        <div style={styles.summaryBox}>
          <h3>Gasto Total</h3>
          <p style={styles.summaryValue}>${totalSpent}</p>
        </div>
        <div style={styles.summaryBox}>
          <h3>Ventas Total</h3>
          <p style={styles.summaryValue}>{totalSales} unidades</p>
        </div>
        <div style={styles.summaryBox}>
          <h3>TACOS Promedio</h3>
          <p style={styles.summaryValue}>{avgTacos}%</p>
        </div>
      </div>

      <div style={styles.productsContainer}>
        {ads.map(ad => (
          <div key={ad.id} style={styles.productCard}>
            <h3>{ad.name}</h3>
            <div style={styles.productInfo}>
              <div style={styles.infoPair}>
                <span>Margen:</span>
                <strong>{ad.margin}%</strong>
              </div>
              <div style={styles.infoPair}>
                <span>TACOS:</span>
                <strong>{ad.tacos}%</strong>
              </div>
              <div style={styles.infoPair}>
                <span>Estado:</span>
                <strong>{getStatusText(ad.tacos)}</strong>
              </div>
              <div style={styles.infoPair}>
                <span>Gasto / Ventas:</span>
                <strong>${ad.spent} / {ad.sales} unidades</strong>
              </div>
            </div>
            
            {ad.tacos >= 16 && (
              <button
                onClick={() => handleTurnOffAds(ad.id)}
                style={styles.buttonRed}
              >
                🔴 APAGAR PUBLICIDAD AHORA
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    color: '#fff',
  },
  summary: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '15px',
    marginBottom: '30px',
  },
  summaryBox: {
    background: 'rgba(255,255,255,0.1)',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  summaryValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  productCard: {
    background: '#fff',
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  productInfo: {
    marginTop: '15px',
  },
  infoPair: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
  buttonRed: {
    width: '100%',
    padding: '12px',
    marginTop: '15px',
    background: '#ff4444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};