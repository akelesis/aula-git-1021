import { useState } from 'react'
import ListItem from '../../components/ListItem'
import './styles.css'

function Home () {
    const [listName, setListName] = useState('')
    const [todoList, setTodoList] = useState([])

    const list = todoList.map(item => {
        return (<ListItem title={item} key={item} />)
    })
    return(
        <div className='Home'>
            <h1>Pagina Inicial</h1>
            <label htmlFor="new-list">Nome da Lista de tarefas</label>
            <input type="text" id='new-list' value={listName} onChange={event => setListName(event.target.value)} />
            <button onClick={() => submitListName(listName, todoList, setTodoList)}>Enviar</button>
            <hr />
            {list}
        </div>
    )
}

function submitListName (listName, todoList, setTodoList) {
    setTodoList([listName, ...todoList])
}

export default Home