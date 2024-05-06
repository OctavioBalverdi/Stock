import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import { Producto } from './pages/domain/Producto';
import  RutasProtegidas  from './pages/Component/RutasProte';
import { Root } from './pages/Component/Root';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<RutasProtegidas />} replace>
          <Route path='/' element={<Root />}> 
            <Route path='/producto' element={<Producto />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/entrada' element={<Entrada />} />
            <Route path='/salida' element={<Salida />} />
         </Route>
         <Route path = '*' element={<> <p> 404 no hay nada aqui mi ray 8===D </p></>} />
        </Route>




      </Routes>
    </Router>
  );
}
export default App;