import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: "Hacer tarea", completed: true},
  {text: "Leer", completed: false},
  {text: "Entrenar", completed: true},
  {text: "Pintar", completed: false},
  {text: "Usar derivados de estados", completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); /*estado parametros que envia react, se define un estado inicial en useState*/

  /*Estados derivados son calculos o formulas que se hacencon los estados */

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)});

    const completeTodo = (text) => {
      const newTodos = [...todos];/*Crear copia arrays todos con los ... */
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed	= true;
      setTodos(newTodos);
    };

    const deleteTodo = (text) => {
      const newTodos = [...todos];/*Crear copia arrays todos con los ... */
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex,1);
      setTodos(newTodos);
    };

  return (  
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos}/>      
      <TodoSearch
      searchValue ={searchValue}/*Comunicacion de estados de padres a hijos*/
      setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}/*Encapsular la funcion dentro de otra funcion para poder enviar el texto */
          onDelete={() => deleteTodo(todo.text)}
          />)}
      </TodoList> 

       <CreateTodoButton/>
      
       </React.Fragment>
  );
}

export default App;
