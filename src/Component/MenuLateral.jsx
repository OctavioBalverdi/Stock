import { Sidebar } from "keep-react";
import { Link,NavLink } from "react-router-dom";
import {
  Chat,
  Handbag,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
} from "phosphor-react";
export const SidebarComponent = () => {

  const menuItems = [
    { id: 1, nombre: 'Producto', ruta: '/producto', icono: <SquaresFour size={24} /> },
    { id: 2, nombre: 'Stock', ruta: '/stock', icono: <Handbag size={24} /> },
    { id: 3, nombre: 'Entrada', ruta: '/entrada', icono: <Users size={24} /> },
    { id: 4, nombre: 'Salida', ruta: '/salida', icono: <ShoppingBagOpen size={24} /> },
  ]

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Logo href="" img="/images/keep.svg" imgAlt="Keep logo" />
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