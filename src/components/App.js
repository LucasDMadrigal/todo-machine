import React, {useState} from "react";
import { TodoCounter } from './TodoCounter'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { ButtonCreateTodo } from './ButtonCreateTodo'
import { TodoSearch } from './TodoSearch'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faCheck, faTimesCircle, faPlus} from '@fortawesome/free-solid-svg-icons'
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

library.add(fab, faCheckCircle, faCheck, faTimesCircle, faPlus)

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  
  if(!localStorageItem){
    localStorage.setItem('itemName', JSON.stringify(initialValue))
    parsedItem = initialValue
  }
  else{
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem] = useState(parsedItem)
   
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ]
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todos => !!todos.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  }
  else{
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()

      return todoText.includes(searchText)
    })
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)

    const newTodos = [...todos]

    newTodos[todoIndex].completed = true

    saveTodos(newTodos)
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <React.Fragment >
      <TodoCounter
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList> 
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
    </React.Fragment>
  );
}

export default App;
