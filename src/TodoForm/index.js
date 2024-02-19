import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext);
const [newTodoValue, setnewTodoValue] = React.useState(''); //estado local


const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};

const onCancel = () => {    
    setOpenModal(false);
};

const onChange = (event) => {
    setnewTodoValue(event.target.value);    
};
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Ejecutar tarea'
            value = {newTodoValue}
            onChange={onChange}
            >
            </textarea>
            <div className='TodoForm-buttonContainer'>
                <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
                <button type='submit'  className='TodoForm-button TodoForm-button--add'>Crear</button>
            </div>
        </form>
    );
}

export { TodoForm };