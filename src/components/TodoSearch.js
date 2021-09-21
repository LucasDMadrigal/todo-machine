import React from 'react'
import './styles/TodoSearch.css'

export default function TodoSearch({searchValue, setSearchValue}) {
    
    const handleChange = (e) => {
        console.log(e.target.value);

        setSearchValue(e.target.value)
    }
    return (
        <input
        value={searchValue}
        placeholder="Busqueda"
        onChange={handleChange}
        />
    )
}

export { TodoSearch }
