import React, { useState, useEffect } from 'react';
import './App.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import MercadoLibreAuth from './MercadoLibreAuth';
function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleAuth = async () => {
    setError('');
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setEmail('');
    setPassword('');
  };

  if (!user) {
    return (
      <div className="login-container">
        <h1>ML Dashboard</h1>
        <p>Gestiona tu publicidad en Mercado Libre</p>
        <div className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button onClick={handleAuth} disabled={loading}>
            {loading ? 'Cargando...' : isSignUp ? 'Registrarse' : 'Iniciar Sesión'}
          </button>
          <p className="toggle">
            {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
            <button className="link-btn" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Inicia sesión' : 'Regístrate'}
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <div>
          <span>{user.email}</span>
          <button onClick={handleLogout}>Salir</button>
        </div>
      </header>
      <main>
        <div className="card">
          <h2>Análisis de Publicidad</h2>
          <MercadoLibreAuth userId={user.uid} />
          <p>Próximamente...</p>
        </div>
      </main>
    </div>
  );
}

export default App;