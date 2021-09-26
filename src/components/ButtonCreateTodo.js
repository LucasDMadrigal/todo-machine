import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/ButtonCreateTodo.css'

function ButtonCreateTodo(props) {

    const handleClick = () =>{
        props.setOpenModal(prevState => !prevState)
        props.onSetNewTodo(true)
        props.onSetDeleteTodos(false)
    }

    const setNewTodo = () => {
        
    }

    return (
        <button
        className="toggle-modal--button"
        onClick={handleClick}
        setNewTodo={setNewTodo}
        title="Create new Todo"
        >
            <FontAwesomeIcon className= {`${props.openModal && 'cancel'} icon icon-plus`} icon="plus" /> 
        </button>
    )
}

export { ButtonCreateTodo }
