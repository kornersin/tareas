//import {useState} from 'react';
import Tarea from './Tarea';

const Tareas = ({tareas, onDelete, onToogle}) => {

    return (
        <>
        {tareas.map(
            (tarea)=>(<Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToogle={onToogle}/>))}
        </>
    ) 
}

export default Tareas