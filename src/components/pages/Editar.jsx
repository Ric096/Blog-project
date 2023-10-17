import React, { useState,useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { Peticion } from '../../hooks/Peticion';
import { Globals } from '../../helpers/Globals'
import { useParams } from 'react-router-dom';

export const Editar = () => {
  
  const [article, setArticle] = useState([])
  const { formulario, enviado, cambiado } = useForm();

  let params = useParams();

  useEffect(() => {
    getAPIData();
  }, [])

  // reutilizamos la funcion que obtiene un solo articulo.. 
  const getAPIData = async () => {

    const { data } = await Peticion(Globals.url + 'products/' + params.id, 'GET')


    setArticle(data);

  }

  //Recoger datos de formularios
  const editArticle = async(e) =>{
    e.preventDefault();
    // Crear nuevo articulo 
    let newArticle = formulario;
    // console.log(newArticle);

    // Guardar nuevo articulo en la API
    const { data } = await Peticion(Globals.url+'products/'+ params.id,'PUT',newArticle)
    // console.log(data);

    // Subir imagenes a la API
    const file = document.querySelector('#file'); // Ubicamos el input del archivo a guardar y lo asignamos a una variable
    const formData = new FormData();              // Creamos un nuevo FormData para guardar los archivos
    formData.append('file0', file.files[0])       // Agregamos el archivo con el nombre que necesitemos y el archivo a subir
    // console.log(file.files[0]);

    // Guardamos los archivos en la API con la peticion
    const subirImg = await Peticion(Globals.url+'products/'+data,'POST', formData,true)

    console.log(subirImg.data);

  }

  return (
    <div className='pages'>
      <h1>Editar articulo</h1>
      <pre> Formulario a editar: {article.title}</pre>

      <form className="form" action="post"onSubmit={editArticle}>

        <input type='text' name='title' defaultValue={article.title} onChange={cambiado}/>
        <input type='date' name='date' onChange={cambiado}/>
        <textarea name='article_content' defaultValue={article.description} onChange={cambiado}/>
        <input type='file' name='file0' id='file'/>
        <input type='submit' value="Guardar"/>

      </form>
    </div>
  )
}
