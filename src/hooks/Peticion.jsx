
export const Peticion = async (url, metodo, datosGuardar="",archivos=false) => {

	let loading = true;


	let opciones = {
		method: 'GET'
	}

	if (metodo == 'GET' || metodo == 'DELETE') {
		opciones = {
			method: metodo
		}
	}

	if(metodo == 'POST' || metodo == 'PUT'){
		
		if(archivos){
			opciones = {
				method: metodo,
				body: datosGuardar
			} 
		} else {
			opciones = {
				method: metodo,
				body: JSON.stringify(datosGuardar),
				headers: {
					'Content-Type': 'aplication/json'
				}
			}
		}
	}

	const peticion = await fetch(url);
	let data = await peticion.json();

	loading = false;


	return {
		data,
		loading

	}
}
