import './styles.css'
import { useNavigate } from 'react-router-dom'

function ListItem (props) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/task-list')} className="ListItem">
            <p>{props.title}</p>
        </div>
    )
}

export default ListItem