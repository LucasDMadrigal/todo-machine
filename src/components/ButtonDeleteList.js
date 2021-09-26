import React from 'react'
import { TodoContext } from '../TodoContext'
import './styles/ButtonDeleteList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonDeleteList(props) {

    const {
        deleteList
    } = React.useContext(TodoContext)

    const handleClick = () => {
        deleteList()
        console.log('que onda?');
    }
    return (
        <button
        className="delete--button"
        onClick={handleClick}
        title="Delete all Todo"
        >
            <FontAwesomeIcon className= "icon icon-trash" icon="trash" /> 
        </button>
    )
}

export { ButtonDeleteList }
