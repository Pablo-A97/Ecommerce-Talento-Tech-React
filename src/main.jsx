import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarritoProvider } from './contexts/CarritoContext';
import { LoginProvider } from './contexts/LoginContext.jsx';
import { ProductosProvider } from './contexts/ProductosContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <LoginProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </LoginProvider>
    </ProductosProvider>
  </StrictMode>,
)
