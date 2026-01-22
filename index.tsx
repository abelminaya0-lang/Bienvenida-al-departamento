
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const startApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("No se pudo encontrar el elemento root para montar la app.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error durante el renderizado inicial:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; text-align: center; color: #1B365D; font-family: sans-serif;">
        <h2>Error al cargar la aplicación</h2>
        <p>Por favor, recarga la página. Si el error persiste, contacta al soporte.</p>
      </div>
    `;
  }
};

// Asegurar que el DOM esté listo antes de arrancar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
