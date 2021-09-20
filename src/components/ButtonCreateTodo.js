import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/ButtonCreateTodo.css'

function ButtonCreateTodo() {
    return (
        <button>
            <FontAwesomeIcon className= "icon icon-plus" icon="plus" />
        </button>
    )
}

export { ButtonCreateTodo }
