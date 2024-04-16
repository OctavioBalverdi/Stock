import React, { useState } from 'react';
import './App.css';
import { SidebarComponent } from './pages/Component/MenuLateral';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida'
import Login1 from './pages/Component/Login/log';
import {Producto} from'./pages/domain/Producto'; 


function App() {

    const [isAuthenticated, setAutentico] = useState(true);



  return (
    <Router>
      <Routes>
        <Route path='/Login1' element={<Login1 onlog={()=>{setAutentico(false)}} />} />
        <Route path='/' element={isAuthenticated ? <Root /> : <Navigate to="/Login1" />}>
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