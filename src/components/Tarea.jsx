import {FaRegTimesCircle} from 'react-icons/fa'

const Tarea = ({tarea, onDelete, onToogle}) => {
    return (
        <div className={`tarea ${tarea.terminada ? 'terminada' : ''}`} onDoubleClick={() => onToogle(tarea.id)}>
            <h3>{tarea.texto} <FaRegTimesCircle onClick={() => onDelete(tarea.id)} style={{cursor:'pointer', color:'red'}}/></h3>
            <p>{tarea.fecha}</p>
        </div>
    )
}

export default Tarea