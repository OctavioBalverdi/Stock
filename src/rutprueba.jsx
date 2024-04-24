import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';


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