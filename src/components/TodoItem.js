import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/TodoItem.css'

function TodoItem(props) {
    return (
        <div className="todo-item--container">
            <p className={`${props.completed && 'text-desabled'}`}>
                {
                    props.text
                }
            </p>
            <div className="todo_item-icon--container">

                <FontAwesomeIcon className={`${props.completed && 'desabled'} icon icon-check`} onClick={props.onComplete}  icon="check-circle" />
                <FontAwesomeIcon className={`${!props.completed && 'desabled'} icon icon-check`} icon="check" />
                <FontAwesomeIcon className="icon icon-times" onClick={props.onDelete} icon="times-circle" />
            
            </div>
        </div>
    )
}

export { TodoItem }