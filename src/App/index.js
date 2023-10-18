import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// import { useLocalStorage } from './useLocalStorage';

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
  
  
//console.log('Log 3');
  //Propiedades que se envian al componente AppUI
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  ); 
  }

export default App;
