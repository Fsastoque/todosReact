import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError"
import { EmptyTodos } from "../EmptyTodos"


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
          {loading && (
          <>
          <TodosLoading/>,
          <TodosLoading/>,
          <TodosLoading/>
          </>)}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/> }

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

