import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  const [ads] = useState([
    {
      id: 1,
      name: 'Producto A',
      margin: 20,
      tacos: 8,
      spent: 300,
      sales: 25,
    },
    {
      id: 2,
      name: 'Producto B',
      margin: 15,
      tacos: 14,
      spent: 800,
      sales: 30,
    },
    {
      id: 3,
      name: 'Producto C',
      margin: 12,
      tacos: 18,
      spent: 600,
      sales: 20,
    }
  ]);

  const getStatusText = (tacos) => {
    if (tacos < 8) return '🟢 VERDE - Subí presupuesto';
    if (tacos < 12) return '🟡 AMARILLO - Revisar';
    if (tacos < 16) return '🟠 NARANJA - No escalar';
    return '🔴 ROJO - APAGAR PUBLICIDAD';
  };

  const totalSpent = ads.reduce((sum, ad) => sum + ad.spent, 0);
  const totalSales = ads.reduce((sum, ad) => sum + ad.sales, 0);

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>📊 Análisis de Publicidad</h1>
        <div>
          <span className="user-email">{user?.email}</span>
          <button onClick={onLogout} className="logout-btn">Salir</button>
        </div>
      </div>

      <div className="summary">
        <div className="summary-box">
          <h3>Gasto Total</h3>
          <p className="summary-value">${totalSpent}</p>
        </div>
        <div className="summary-box">
          <h3>Ventas Total</h3>
          <p className="summary-value">{totalSales} unidades</p>
        </div>
      </div>

      <div className="products-container">
        {ads.map(ad => (
          <div key={ad.id} className="product-card">
            <h3>{ad.name}</h3>
            <div className="product-info">
              <div className="info-pair">
                <span>Margen:</span>
                <strong>{ad.margin}%</strong>
              </div>
              <div className="info-pair">
                <span>TACOS:</span>
                <strong>{ad.tacos}%</strong>
              </div>
              <div className="info-pair">
                <span>Estado:</span>
                <strong>{getStatusText(ad.tacos)}</strong>
              </div>
              <div className="info-pair">
                <span>Gasto / Ventas:</span>
                <strong>${ad.spent} / {ad.sales} unidades</strong>
              </div>
            </div>
            
            {ad.tacos >= 16 && (
              <button className="button-red">
                🔴 APAGAR PUBLICIDAD AHORA
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}