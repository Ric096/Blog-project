import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='big-card'>
      <h1>Bienvenido al blog con React</h1>
      <p>Realizado con el stack MERN (MongoDB, Express, React y NodeJS )</p>
      <Link to='/articulos' className='button'>Ir a los articulos</Link>
    </div>
  )
}
