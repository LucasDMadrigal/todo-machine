import React from 'react';
import './styles/TodoCounter.css'

function TodoCounter() {
    return (
        <div className="todo-counter--container">
            <h1>
                Contador
                <h6>completaste 2 de 3 tareas</h6>
            </h1>
        </div>
    )
}

export { TodoCounter }
