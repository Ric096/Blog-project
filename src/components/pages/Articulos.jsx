import React from 'react'
import { useState, useEffect } from 'react'
import { Globals } from '../../helpers/Globals'
import { Peticion } from '../../hooks/Peticion'
import { Listado } from './Listado'

export const Articulos = () => {


  const [articles, setArticles] = useState([])
  console.log(articles)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAPIData();
  }, [])


  const getAPIData = async () => {

    const { data, loading } = await Peticion(Globals.url + 'products?limit=5', 'GET')


    setArticles(data);

    setIsLoading(loading);

    /*
    fetch(Globals.url + "products?limit=5", {
      method: "GET"
    })
      .then(response => response.json())
      .then(ress => setArticles(ress))

    */
  }

  return (
    <>
      {
      isLoading ? <h2>Cargando Articulos</h2>:
      articles.length >= 1 ? 
        <Listado articles={articles} setArticles={setArticles}/> 
        : <h2>No hay Articulos</h2> 
      }

    </>
  )
}
