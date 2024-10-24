import './style.css'




export function Input(props) {
    const { onChange, label } = props
    return <>
        <input onChange={onChange} type="text" className="todo-control-input" value={label} />
    </>
}