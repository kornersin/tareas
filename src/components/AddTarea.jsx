import React from 'react';
import {useState} from 'react';

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState('')
    const [fecha, setFecha] = useState('')
    const [terminada, setTerminada] = useState (false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!texto){
            alert('Por favor teclea la descripción de la tarea')
            return
        }
        
        onAdd({texto, fecha, terminada})

        setTexto('')
        setFecha('')
        setTerminada(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tarea</label>
                <input type="text" placeholder='Agregar una tarea' value={texto} onChange={(e)=> setTexto(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Fecha</label>
                <input type="date" placeholder='Teclea la fecha'  value={fecha} onChange={(e)=> setFecha(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Terminada</label>
                <input type="checkbox" checked={terminada} value={terminada} onChange={(e)=> setTerminada(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Guardar" className='btn btn-block' />
        </form>
    )
}

export default AddTarea;