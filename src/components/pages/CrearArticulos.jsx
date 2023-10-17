import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Peticion } from '../../hooks/Peticion';
import { Globals } from '../../helpers/Globals'

export const CrearArticulos = () => {
  
  const { formulario, enviado, cambiado } = useForm();

  // const [newArticle,setNewArticle] = useState({
  //   id: null,
  //   title: "",
  //   date: 0,
  //   content: "",
  //   image: null
  // })

  //Recoger datos de formularios
  const saveArticle = async(e) =>{
    e.preventDefault();
    // Crear nuevo articulo 
    let newArticle = formulario;
    // console.log(newArticle);

    // Guardar nuevo articulo en la API
    const { data } = await Peticion(Globals.url+'products','POST',newArticle)
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

  //   let target = e.target

  //   let article = {
  //     id: Math.random(),
  //     title: target.title.value,
  //     date: target.date.value,
  //     content: target.article_content.value 
  //   } 

  //   setNewArticle(article);
  // }
  
  

  return (
    <div className='pages'>
      <h1>Crear articulos</h1>
      <pre>{JSON.stringify(formulario)}</pre>

      <form className="form" action="post"onSubmit={saveArticle}>

        <input type='text' name='title' placeholder='Titulo del articulo' onChange={cambiado}/>
        <input type='date' name='date' placeholder='Fecha de creación del articulo'onChange={cambiado}/>
        <textarea name='article_content' placeholder='Contenido del articulo'onChange={cambiado}/>
        <input type='file' name='file0' id='file'/>
        <input type='submit' value="Guardar"/>

      </form>
    </div>
  )
}
