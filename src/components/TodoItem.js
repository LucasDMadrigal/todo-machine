import React from 'react'
import './styles/TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TodoItem(props) {
    return (
        <div className="todo-item--container">
            <p>
                {
                    props.text
                }
            </p>
            <div className="todo_item-icon--container">

                <FontAwesomeIcon className={`${props.completed && 'desabled'} icon icon-check`} icon="check-circle" />
                <FontAwesomeIcon className={`${props.completed && 'desabled'} icon icon-times`} icon="times-circle" />
                <FontAwesomeIcon className={`${!props.completed && 'desabled'} icon icon-check`} icon="check" />
            
            </div>
        </div>
    )
}

export { TodoItem }