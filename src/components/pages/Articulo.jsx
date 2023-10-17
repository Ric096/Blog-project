import React from 'react'
import { useState, useEffect } from 'react'
import { Globals } from '../../helpers/Globals'
import { Peticion } from '../../hooks/Peticion'
import { useParams } from 'react-router-dom'

export const Articulo = () => {


  const [article, setArticle] = useState([])
  console.log(article)

  let params = useParams();
  console.log(params)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAPIData();
  }, [])


  const getAPIData = async () => {

    const { data, loading } = await Peticion(Globals.url + 'products/' + params.id, 'GET')


    setArticle(data);

    setIsLoading(loading);

  }

  return (
    <>
      {
      isLoading ? <h3>Cargando Articulos</h3> :
        
        <div className='big-card'>
        <h2>{article.title}</h2>
        <h4>{article.description}</h4>
        </div>
      }

    </>
  )
}
