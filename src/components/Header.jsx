import Button from "./Button"

const Header = ({titulo, onAdd, mostrarForm}) => {

  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>{titulo}</h1>
      <Button texto={mostrarForm ? 'Cerrar' : 'Agregar'} color={mostrarForm ? '#5865f2' : '#2d8cff'} onClick={onAdd} />
    </header>
  )
}
Header.defaultProps = {
  titulo: 'Tareas'
}
export default Header