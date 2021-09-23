import React from 'react';
import { TodoContext } from '../TodoContext';
import './styles/TodoCounter.css'

function TodoCounter() {

    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <div className="todo-counter--container">
            <h1>
                Contador
            </h1>
                <h6>completaste {completedTodos} de {totalTodos} tareas</h6>
        </div>
    )
}

export { TodoCounter }
