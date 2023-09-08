import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';

// const defaultTodos = [
//   {text: "Hacer tarea", completed: true},
//   {text: "Leer", completed: false},
//   {text: "Entrenar", completed: true},
//   {text: "Pintar", completed: false},
//   {text: "Usar derivados de estados", completed: true}
// ]
//const stringJson = JSON.stringify(defaultTodos) // se debe pasar a un string el array para guardarlo en localStorage
// localStorage.setItem('TODOS_V1', defaultTodos)
// localStorage.removeItem('TODOS_V1')

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1'); //Obtener la información guardada en localStorage
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify('[]'))
    parsedTodos = [];
  } else {

    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);
  /*todos = Nombre de la variable para obtener el valor | se obtiene el estado actual
  setTodos = Funcion que actualiza el valor | actualiza estado
  */
  const [searchValue, setSearchValue] = React.useState(''); /*estado parametros que envia react, se define un estado inicial en useState*/

  /*Estados derivados son calculos o formulas que se hacencon los estados */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  });

  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
     setTodos(newTodos);    
  }


  const completeTodo = (text) => {
    const newTodos = [...todos];/*Crear copia arrays todos con los ... */
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];/*Crear copia arrays todos con los ... */
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };  
}

export default App;
