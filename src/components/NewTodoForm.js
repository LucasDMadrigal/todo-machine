import React from 'react'
import { TodoContext } from '../TodoContext'
import './styles/TodoForm.css'
function NewTodoForm() {
    const [form, setForm] = React.useState('')

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const handleChange = (e) =>{
        setForm(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        addTodo(form)

        e.target.reset()

        setOpenModal(false)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea 
            placeholder="escribe aqui tu nueva tarea"
            value={form}
            onChange={handleChange}
            maxLength='50'
            required
            />
        <div>
            <button className="TodoForm-button TodoForm-button-add"
            type="button"
                onClick={onCancel}
                >
                Cancelar
            </button>
            <button className="TodoForm-button TodoForm-button-cancel"
            type="submit"
            >
                Agregar
            </button>
        </div>
        </form>
    )
}

export default NewTodoForm
