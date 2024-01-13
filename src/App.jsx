
import './App.css'
import {SidebarComponent}  from './Component/MenuLateral'
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route
} from 'react-router-dom'
import { Stock } from './pages/stock'
import { Entrada } from './pages/entrada'

function App() {


  return (
    <Router >
    <Routes>
      <Route path='/' element={<Root />}>
      <Route index element={<Stock />} />
        <Route path='/entrada' element={<Entrada />} />
        <Route path='/salida' element={<Salida />} />
        
      </Route>
    </Routes>
  </Router>

  )
}
const Root = () =>
  <>
    <div>
      <SidebarComponent />
    </div>
    <div>
      <Outlet />
    </div>
  </>

export default App
