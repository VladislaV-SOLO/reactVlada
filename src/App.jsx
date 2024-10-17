import { useState } from 'react'
import { AddItemSection } from './componets/AddItemSection/AddItemSection'
import { ListItem } from './componets/ListItem/ListItem'
import './globalStyle.css'

// const items = [<h1>'car'</h1>, <h2>'phone'</h2>, <h3>bag</h3>]
// const items = [{ label: 'Todo1', id: 1 }, { label: 'Todo2', id: 2 }, { label: 'Todo3', id: 3 }]

const items = [<ListItem />, <ListItem />, <ListItem />]

function App() {

    const [todos, setTodos] = useState([{ label: 'Todo1', id: 1 }, { label: 'Todo2', id: 2 }, { label: 'Todo3', id: 3 }])

    const list = todos.length ? todos.map((item, index) => <ListItem key={index} label={item.label} />) : 'Элементов нет'

    return <main className="todo">
        <AddItemSection />
        {list}
    </main>

}


export default App


/* <Button title="+" onClick={() => setInitialState((prevState) => prevState + 1)} />
     <h1>{initialState}</h1>
     <Button title="-" onClick={() => setInitialState((prevState) => prevState - 1)} /> */
