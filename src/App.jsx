import React , {useState}from 'react';
import './App.css';
import { SidebarComponent } from './Component/MenuLateral';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Stock } from './pages/stock';
import { Entrada } from './pages/entrada';
import { Salida } from './pages/salida';
import { Logins } from './pages/Logins';
import { Producto } from './pages/Producto';

function App() {
  const [isAuthenticated,setAutentico]=useState(false)
   
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Logins validar={setAutentico} />} />
        <Route path='/' element={isAuthenticated ? <Root /> : <Navigate to="/login" />}>
          <Route path='/producto' element={<Producto />} />
          <Route path='/stock' element={<Stock />} />
          <Route path='/entrada' element={<Entrada />} />
          <Route path='/salida' element={<Salida />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Root = () => (
  <>
    <div className="contenedor">
      <div className="sidebar-container">
        <SidebarComponent />
      </div>
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  </>

);

export default App;
