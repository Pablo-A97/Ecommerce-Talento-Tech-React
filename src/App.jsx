import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer'
import ProductosConteiner from './components/ProductosConteiner'
import Carrito from './components/Carrito'
import About from './components/About'
import ProductoDetalle from './components/ProductoDetalle'
import Admin from './components/Admin'
import Login from './components/Login'
import Registrarse from './components/Registrarse'
import FormularioProducto from './components/FormularioProducto'
import FormularioEdicion from './components/FormularioEdicion'
import { useLoginContext } from './contexts/LoginContext'
import MiNavbar from './components/MiNavbar'

function App() {
  const { verificacionLog } = useLoginContext();

  useEffect(() => {
    verificacionLog();
  }, []);

  return (
    <Router>
      <div>
        <MiNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<ProductosConteiner />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/admin/agregarProducto" element={<FormularioProducto />} />
          <Route path="/admin/editarProducto/:id" element={<FormularioEdicion />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App