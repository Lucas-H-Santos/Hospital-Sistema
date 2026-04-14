import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'hospital_cookie_consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner} role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div style={styles.content}>
        <p style={styles.text}>
          Este site utiliza cookies essenciais para autenticação e funcionamento do sistema.
          Ao continuar usando o site, você concorda com o uso desses cookies conforme nossa política de
          privacidade, em conformidade com a <strong>LGPD (Lei 13.709/2018)</strong>.
        </p>
        <button style={styles.button} onClick={handleAccept}>
          Aceitar e continuar
        </button>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a1a2e',
    color: '#fff',
    zIndex: 9999,
    padding: '16px 24px',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.3)'
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  },
  text: {
    margin: 0,
    flex: 1,
    fontSize: '14px',
    lineHeight: '1.5'
  },
  button: {
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    whiteSpace: 'nowrap'
  }
};

export default CookieBanner;
