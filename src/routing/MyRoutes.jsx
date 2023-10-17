import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import {Inicio} from '../components/pages/Inicio'
import {Articulo} from '../components/pages/Articulo'
import {Articulos} from '../components/pages/Articulos'
import {Busqueda} from '../components/pages/Busqueda'
import {Editar} from '../components/pages/Editar'
import {CrearArticulos} from '../components/pages/CrearArticulos'
import {Navigation} from '../components/layout/Navigation'
import { Aside } from '../components/layout/Aside'
import { Footer } from '../components/layout/Footer'
import { Globals } from '../helpers/Globals'
// import { Peticion } from '../hooks/Peticion'

export const MyRoutes = () => {
  
  // const {data,loading} = Peticion(Globals.url)

  // console.log(data);
  
  return (
    <BrowserRouter>

    {/* Header y navegación de la página */}

    <Header />
    <Navigation />

    {/*Rutas de navegación */}
    <section className='content'>
      <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/inicio' element={<Inicio />}/>
          <Route path='/articulo/:id' element={<Articulo />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/buscar/:busqueda' element={<Busqueda />} />
          <Route path='/editar/:id' element={<Editar />} />
          <Route path='/crear-articulos' element={<CrearArticulos />} />
          <Route path='/*' element=
            {
            <>
              <h1>ERROR 404</h1>
              <h3>Página no encontrada</h3>
            </>
            } 
          />
      </Routes>
    </section>
    {/* Barra lateral */}
   
    <Aside />
    
    {/* Footer de la página */}

    <Footer />

    </BrowserRouter>
    )
}
