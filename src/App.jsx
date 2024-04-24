import React, { useState } from 'react';
import './App.css';
import { SidebarComponent } from './pages/Component/MenuLateral';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida'
import Login1 from './pages/Component/Login/log';
import { Producto } from './pages/domain/Producto';
import { RutasProtegidas } from './pages/Component/RutasProte'
import { Root } from './pages/Component/Root';

function App() {

  const [isAuthenticated, setAutentico] = useState(true);



  return (
    <Router>
      <Routes>
        <Route element={<RutasProtegidas />}>
          <Route path='/' element={<Root />}>
            <Route path='/producto' element={<Producto />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/entrada' element={<Entrada />} />
            <Route path='/salida' element={<Salida />} />


          </Route>
        </Route>




      </Routes>
    </Router>
  );
}



export default App;