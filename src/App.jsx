import { useState } from 'react'
import Button from './componets/Button/Button'
import Modal from './componets/Modal/Modal'
import TodoList from './componets/TodoList/TodoList'
import './globalStyle.css'


function App() {
    const [isOpenModal, setIsOpenModal] = useState(false)


    const handleOnOpenModal = (e) => {
        setIsOpenModal(true)
    }

    const handleOnCloseModal = (e) => {
        setIsOpenModal(false)
    }

    return <>
        {isOpenModal && <Modal isOpen={isOpenModal} onClose={handleOnCloseModal} />}
        <Button title='Открыть модальное окно' onClick={handleOnOpenModal} />
    </>

}


export default App


