import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { ButtonCreateTodo } from '../ButtonCreateTodo'
import { TodoSearch } from '../TodoSearch'

import { TodoContext } from "../../TodoContext/index";
import { TodoProvider } from "../../TodoContext/index";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faCheck, faTimesCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

library.add(fab, faCheckCircle, faCheck, faTimesCircle, faPlus)

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
} = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoContext.Consumer>
        {() => (<TodoList>
            {error && <p> Estamos cagando...</p>}
            {loading && <p> Estamos carrrrrgando...</p>}
            {(!loading && !searchedTodos.length) && <p> No hay ningun TODO. Crea uno nuevo!</p>}

            { searchedTodos.map( item => (
              <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete = {() => completeTodo(item.text)}
              onDelete = {() => deleteTodo(item.text)} />
              ))}
        <ButtonCreateTodo />
          </TodoList>
        )}
        </TodoContext.Consumer>
    </React.Fragment>
  );
}

export{ AppUI };
