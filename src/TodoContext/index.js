import React from "react";
import { useLocalStorage } from './useLocalStorage';
 
const TodoContext = React.createContext();/*Creamos el contexto*/

//Componente Provider
//Se encapsula toda la logica para enviar props a otros componentes


function TodoProvider({children}){
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
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
          }}>
            {children}
        </TodoContext.Provider>
    );   
}

export { TodoContext, TodoProvider };
