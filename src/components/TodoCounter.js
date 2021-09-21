import React from 'react';
import './styles/TodoCounter.css'

function TodoCounter({totalTodos, completedTodos}) {

    // const totalTodos = total
    // const completedTodos = completed

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
