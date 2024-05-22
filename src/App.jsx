// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RutasProtegidas from './pages/Component/RutasProte';
import { Root } from './pages/Component/Root';
import { NotFound } from './pages/Component/notFound';
import { Home } from './pages/Component/home'
import { Producto } from './pages/domain/Producto';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import Login1 from './pages/Component/Login/log';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function parseJWT(token) {
    if (!token) return false;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    const tokenExistAndStillValid = token && parseJWT(token).exp * 1000 > Date.now();
    {tokenExistAndStillValid ? setIsAuthenticated(true):setIsAuthenticated(false)}
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<RutasProtegidas isAuthenticated={isAuthenticated} />}>
          <Route element={<Root />}>
            <Route index element={<Home />} />
            <Route path='/producto' element={<Producto />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/entrada' element={<Entrada />} />
            <Route path='/salida' element={<Salida />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );

}

export default App;




/*import React from 'react';
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
export default App;*/