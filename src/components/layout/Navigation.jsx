import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to='/inicio'>Inicio</NavLink></li>
        <li>  <NavLink to='/articulos'>Articulos</NavLink></li>
        {/* <li>  <NavLink to='/articulo'>Articulo</NavLink></li> */}
        <li>  <NavLink to='/crear-articulos'>Crear Articulo</NavLink></li>
        <li>  <NavLink to='/contacto'>Contacto</NavLink></li>
      </ul>
    </nav>

  )
}
