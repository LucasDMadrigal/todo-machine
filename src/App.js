import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'


import { TodoCounter } from './components/TodoCounter'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

library.add(fab, faCheckCircle, faCheck, faTimesCircle)



function App() {
  return (
    <React.Fragment >
      <TodoCounter />

      <TodoList> 
        { todos.map( item => (
          <TodoItem
            key={item.text}
            text={item.text} />
            
          
          ))}
      </TodoList>

      {/* <ButtonCreateTodo /> */}
    </React.Fragment>
  );
}

export default App;
