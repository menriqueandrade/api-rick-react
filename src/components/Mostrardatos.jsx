import React from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import { useState } from 'react';
import Personaje from './Personaje';
import Cargando from './Cargando';
/*diviendo componentes para comsumir apis*/
const Mostrardatos = ({ nombrePersonaje }) => {

  const [personajes, setPersonajes] = useState([]);
  /*creamos la variable loading para ver la barra de carga antes del api*/
  const [loading, setLoading] = useState(false);


  /*Apenas empieze el sitio carga esto*/
  useEffect(() => {
    consumirApi(nombrePersonaje);
    /*Para estar pendiente al texfield consultar*/
  }, [nombrePersonaje]);
  /*Consumir Datos de api */
  const consumirApi = async (nombre) => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
      console.log(res);
      /*Aca hacemos condiciones para validar el api*/
      if (!res.ok) {
        return Swal.fire({
          title: 'Error',
          text: 'Personaje no encontrado',
          icon: 'error',
        });
      }
      /*De esta manera vemos que queremos ver de la api verificar en el postman*/
      const datos = await res.json();
      console.log(datos.results);
      /*de esta manera enviamos los resultados al componenete principal*/
      setPersonajes(datos.results);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  /*Mostrar el cargando antes de consumir el api*/
  if (loading) {
    return <Cargando></Cargando>
  }


  return (
    <div className='row'>
     {
      /*De esta manera recorremos la api para mostrarla*/
      personajes.map(item=>(
        /*De esta manera enviamos los parametros al otro componente*/
      <Personaje key={item.id} personaje={item}>

      </Personaje>
      ))
     }
    </div>
  )
}

export default Mostrardatos