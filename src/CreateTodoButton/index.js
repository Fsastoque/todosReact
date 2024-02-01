import React from 'react'
import './CreateTodoButton.css'

/*Recibir la propiedad setopenmodal */
function CreateTodoButton({ setOpenModal }) {
  return (
    <button className='CreateTodoButton' 
    onClick={
      (event) => {
        console.log('Hiciste click')
        console.log(event.target)
    }
    }>+</button>
  )
}

export { CreateTodoButton };