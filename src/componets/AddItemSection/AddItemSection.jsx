import Button from '../Button/Button'
import { Input } from '../Input/Input'
import './style.css'



export function AddItemSection() {

    return <div className="todo-control-block">
        <Input />
        <Button title='Add' />
    </div>


}