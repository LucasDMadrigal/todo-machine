import React from 'react'
import './styles/ButtonDeleteList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonDeleteList(props) {

    // const handleClick = () => {
    //     props.deleteTodo
    // }

    return (
        <button
        className="delete--button"
        // onClick={handleClick}
        title="Create new Todo"
        >
            <FontAwesomeIcon className= "icon icon-trash" icon="trash" /> 
        </button>
    )
}

export { ButtonDeleteList }
