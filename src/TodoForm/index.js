import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Ejecutar tarea'>
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='' className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add'>Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };