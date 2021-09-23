import React from 'react'
import { TodoContext } from '../TodoContext/index'
import './styles/TodoSearch.css'

function TodoSearch() {
    
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <input
        value={searchValue}
        placeholder="Busqueda"
        onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch }
