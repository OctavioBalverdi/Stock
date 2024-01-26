import { Sidebar } from "keep-react";
import { Link,NavLink } from "react-router-dom";
import {
  Storefront ,
  ArrowCircleLeft ,
  StackOverflowLogo ,
  ArrowCircleRight ,
} from "phosphor-react";
import Logo from '../Component/img/Logo.jpg'

export const SidebarComponent = () => {

  const menuItems = [
    { id: 1, nombre: 'Producto', ruta: '/producto', icono: <Storefront  size={32} color="#7376a0" /> },
    { id: 2, nombre: 'Stock', ruta: '/stock', icono: <StackOverflowLogo  size={32} color="#0715cf" /> },
    { id: 3, nombre: 'Entrada', ruta: '/entrada', icono: <ArrowCircleRight  size={32} color="#0adb23"/> },
    { id: 4, nombre: 'Salida', ruta: '/salida', icono: <ArrowCircleLeft size={32} color="#db0a0a" /> },
  ]

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <img  src={Logo} alt="" className='w-[150px] h-[150px] border rounded p-1' />
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {
            menuItems.map(element => (
              <Sidebar.Item icon={element.icono} key={element.id}>
                <NavLink to={element.ruta}>{element.nombre}</NavLink>
              </Sidebar.Item>
            ))
          }
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}