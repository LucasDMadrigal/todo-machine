import React from 'react'
import { TodoContext } from '../TodoContext'

import './styles/DeleteAll.css'

function DeleteAll() {
    const {
        deleteList,
        setOpenModal
    } = React.useContext(TodoContext)
    const deleteClick = () => {
        deleteList()
        setOpenModal(false)
    }

    const CancelClick = () => {
        setOpenModal(false)
    }

    return (
        <div>
            <h2>Estas seguro que deseas borrar toda la lista?</h2>

            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-confirm"
                onClick={deleteClick}>
                    Borrar
                </button>

                <button className="TodoForm-button TodoForm-button-cancel"
                onClick={CancelClick}
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default DeleteAll
