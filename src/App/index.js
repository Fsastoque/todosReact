import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

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


//Custom hooks
//Los hooks son funciones que puedes llamar dentro de componentes funcionales 
//para agregar y manipular características de React, como el estado, el ciclo de
//vida y los efectos secundarios

function App() {
  
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error,
  } = useLocalStorage('TODOS_V1',[]);
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

//console.log('Log 1');

//Efectos
// React.useEffect(
//   () => {
//     console.log('Log 2');
//   },[]
// );

// React.useEffect(
//   () => {
//     console.log('Looooog 2');
//   },[totalTodos]//Se ejecuta al final y ejecuta cuando cambia el estado del array
// );

//console.log('Log 3');
  //Propiedades que se envian al componente AppUI
  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ); 
  }

export default App;
