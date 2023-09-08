function AppUI(){
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

