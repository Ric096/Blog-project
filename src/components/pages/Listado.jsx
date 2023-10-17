import React from 'react'
import { Peticion } from '../../hooks/Peticion'
import {Globals} from '../../helpers/Globals'
import { Link } from 'react-router-dom'

export const Listado = ({ articles,setArticles }) => {

	
	const deleteArticle = async(id) => {
		const deleteArticle = await Peticion(Globals.url+'products/'+id,'DELETE')
		console.log(deleteArticle.data)

		let updateArticles = articles.filter(article => article.id !== id);
		console.log(updateArticles);
		setArticles(updateArticles);
	}


	return (

		articles.map(article => {
			return (
				<article className="articulo-item" key={article.id}>

					<div className='mask'>
						<img src={article.image} alt="Imagen del articulo" />
					</div>

					<div className='data'>
					{/* El Link sirve para redireccionar a otra pagina,
					en este caso creamos un 'acceso directo' a cada uno de los articulos pasandole su id */}
						<h3 className="title"><Link to={'/articulo/'+ article.id}>{article.title}</Link></h3>
						<p className="description">{article.description}</p>

						<Link className='edit' to={'/editar/' + article.id}>Editar</Link>
						<button className="delete" onClick={()=> {deleteArticle(article.id)}}>Borrar</button>
					</div>

				</article>

			)
		}
		)
	)
}
