import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
          <div className="play"></div>
      </div>

      <h1>Blog con React</h1> 

    </header>
  )
}
      {/* <nav className='navbar'>
        <NavLink to='/inicio'>Inicio</NavLink>
        <NavLink to='/articulos'>Articulos</NavLink>
        <NavLink to='/articulo'>Articulo</NavLink>
        <NavLink to='/crear-articulos'>Crear Articulo</NavLink>
        <NavLink to='/editar'>Editar</NavLink>
      </nav> */}
