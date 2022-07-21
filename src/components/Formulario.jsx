import React from 'react'
import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'
const Formulario = ({setNombrePersonaje}) => {

    const [inputs, handleChange, reset] = useFormulario({
        nombre: '',
    })
    const { nombre } = inputs
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre);

        if (!nombre.trim()) {
            return Swal.fire({
                title: 'Error',
                text: 'El nombre no puede estar vacio',
                icon: 'error',
                

            });
            
        }
        setNombrePersonaje(nombre);
        reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Ingrese el personaje"
                className="form-control mb-2"
                value={nombre}
                onChange={handleChange}
                name="nombre">
                
            </input>
            <button className="btn btn-primary btn-block" type="submit">Buscar</button>
        </form>
    )
}

export default Formulario