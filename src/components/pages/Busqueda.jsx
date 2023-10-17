import React from 'react'
import { useState, useEffect } from 'react'
import { Globals } from '../../helpers/Globals'
import { Peticion } from '../../hooks/Peticion'
import { Listado } from './Listado'
import { useParams } from 'react-router-dom'

export const Busqueda = () => {


  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();
  // Number(params.busqueda)
  
  useEffect(() => {
    getAPIData();
  }, [])

  useEffect(() => { 
    getAPIData()
    console.log(params)}
    ,[params])

  const getAPIData = async () => {

    const { data, loading } = await Peticion(Globals.url + 'products?limit=' + params.busqueda, 'GET')


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
      isLoading ? "Cargando Articulos" :
      articles.length >= 1 ? 
        <Listado articles={articles} setArticles={setArticles}/> 
        : <h2>No hay Articulos</h2> 
      }

    </>
  )
}
