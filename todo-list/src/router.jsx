import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import TaskList from './views/TaskList'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/task-list' element={<TaskList/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router