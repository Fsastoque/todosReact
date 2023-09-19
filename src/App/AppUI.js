import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

//Propiedades que recibe
function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}){
    return (      
        <React.Fragment>
          <TodoCounter
            completed={completedTodos}
            total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}/*Comunicacion de estados de padres a hijos*/
            setSearchValue={setSearchValue}
          />
          <TodoList>
          {loading && <p>Estamos Cargando...</p>}
          {error && <p>Se genero un error!!</p>}
          {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p> }

            {searchedTodos.map(todo =>
              <TodoItem key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}/*Encapsular la funcion dentro de otra funcion para poder enviar el texto */
                onDelete={() => deleteTodo(todo.text)}
              />)}
          </TodoList>
    
          <CreateTodoButton />
    
        </React.Fragment>
      );
}

export { AppUI };

