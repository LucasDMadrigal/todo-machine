import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/ButtonCreateTodo.css'

function ButtonCreateTodo(props) {

    const handleClick = () =>{
        props.onClick(!props.openModal)
    }
    return (
        <button
        className="toggle-modal--button"
        onClick={handleClick}
        title="Create new Todo"
        >
            <FontAwesomeIcon className= {`${props.openModal && 'cancel'} icon icon-plus`} icon="plus" /> 
        </button>
    )
}

export { ButtonCreateTodo }
