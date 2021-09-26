import React from 'react'

import './styles/ButtonDeleteList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonDeleteList(props) {

    

    const handleClick = () => {

        props.setOpenModal(prevState => !prevState)
        props.onSetNewTodo(false)
        props.onSetDeleteTodos(true)
    }

    const setDeleteTodos = () => {
    }
    return (
        <button
        className="delete--button"
        onClick={handleClick}
        setDeleteTodos={setDeleteTodos}
        title="Delete all Todo"
        >
            <FontAwesomeIcon className= "icon icon-trash" icon="trash" /> 
        </button>
    )
}

export { ButtonDeleteList }
