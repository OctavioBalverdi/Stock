import './App.css';
import { SidebarComponent } from './Component/MenuLateral';
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route
} from 'react-router-dom';
import { Stock } from './pages/stock';
import { Entrada } from './pages/entrada';
import { Salida } from './pages/salida';
import { Logins } from './pages/Logins';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Logins />} />
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
