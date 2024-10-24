import { useState } from 'react'
import { AddItemSection } from '../AddItemSection/AddItemSection'
import { ListItem } from '../ListItem/ListItem'


// const items = [<h1>'car'</h1>, <h2>'phone'</h2>, <h3>bag</h3>]
// const items = [{ label: 'Todo1', id: 1 }, { label: 'Todo2', id: 2 }, { label: 'Todo3', id: 3 }]

const items = [<ListItem />, <ListItem />, <ListItem />]

function TodoList() {
    let [todos, setTodos] = useState([])
    const [label, setLabel] = useState('')

    const handleAddItem = (event) => {
        setTodos((prevState) => [{ title: label, id: new Date().getTime() }, ...prevState])
        setLabel('')
        console.log(todos);
    }

    const handleInput = (event) => {
        setLabel(event.target.value)
    }

    const handleRemoveItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const list = todos.length ? todos.map((item, index) =>
        <ListItem key={item.id} label={item.title} onClick={() => handleRemoveItem(item.id)} />) : 'Элементов нет'


    return <main className="todo">
        <AddItemSection onClick={handleAddItem} onChange={handleInput} label={label} />
        {list}
    </main>

}


export default TodoList
