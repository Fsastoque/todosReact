import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  return (
    <button className='CreateTodoButton' 
    onClick={
      () => {
       setOpenModal(state => !state);//Llamar el actualizador del estado, se envia una array funtion y devuelve la negación del estado
    }
    }>+</button>
  )
}

export { CreateTodoButton };