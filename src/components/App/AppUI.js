import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { ButtonCreateTodo } from '../ButtonCreateTodo'
import { ButtonDeleteList } from '../ButtonDeleteList'
import { TodoSearch } from '../TodoSearch'

import Form from '../TodoForm'

import { TodoContext } from "../../TodoContext/index";

import { Modal } from '../../Modal/Modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faCheck, faTimesCircle, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

library.add(fab, faCheckCircle, faCheck, faTimesCircle, faPlus, faTrash)

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    deleteList,
    openModal,
    setOpenModal
} = React.useContext(TodoContext)
  
  return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

       <TodoList>
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
          </TodoList>
        <ButtonCreateTodo
        openModal={openModal}
        onClick={setOpenModal}
        />
        <ButtonDeleteList
        // onClick={}
        />
        { !!openModal &&
          (<Modal>
          <Form />
        </Modal>)
        }
    </React.Fragment>
  );
}

export{ AppUI };
