import { useState } from 'react'

export const useForm = ( objetoInicial={} ) => {

  const [formulario,setFormulario] = useState(objetoInicial)
 
  const serializarFormulario = (formulario) => {
    // Para obtener los datos del formulario, utilizamos el objeto de JS llamado 'FormData' asignandolo a una variable
    const formData = new FormData(formulario);

    const objetoCompleto = {};

    for (let [name, value] of formData) {
      objetoCompleto[name] = value;
    }

    return (objetoCompleto);

  }

  const enviado = (e) => {
    e.preventDefault();

    let newForm = serializarFormulario(e.target);
    setFormulario(newForm)
  }

  const cambiado = ({target}) => {
    const {name,value} = target;

    setFormulario({
      ...formulario,
      [name] : value
    })
  }

  return {
    // Las funciones enviado y cambiado sirven para las mismas cosas la diferencia es que:
    formulario,
    enviado,  // Guarda los datos del formulario cuando hacemos click en el boton 
    cambiado  // Guarda los datos del formulario de manera instantanea mientras realizamos cambios
  }
}
