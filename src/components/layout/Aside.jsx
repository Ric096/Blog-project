import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


export const Aside = () => {
  
  
  const navegar = useNavigate() // useNavigate sirve para redireccionar a una pagina 

  const hacerBusqueda = (e) => {
    e.preventDefault();

    let busqueda = e.target.search_field.value;

    navegar('buscar/'+busqueda)
    
    console.log(busqueda)
  }
  
  return (
    <aside className='lateral'>

      <div className="search">
        <h3 className='title'>Buscador</h3>
        <form onSubmit={hacerBusqueda}>
          <input
            type="text"
            name="search_field"
            autoComplete="off"
          />
          <input type='submit' id="search" value='Buscar' />
        </form>
      </div>

      {/*
        <div className="add">
          <h3 className="title">Añadir articulo</h3>
          <form>
            <input type="text"
              name="titulo"
              id="titulo"
              placeholder="Titulo" />
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
          </form>
        </div>
    */}

    </aside>
  )
}
