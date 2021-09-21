import React from 'react'
import './styles/TodoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <FontAwesomeIcon className={`${props.completed && 'desabled'} icon icon-times`} onClick={props.onDelete} icon="times-circle" />
                <FontAwesomeIcon className={`${!props.completed && 'desabled'} icon icon-check`} icon="check" />
            
            </div>
        </div>
    )
}

export { TodoItem }