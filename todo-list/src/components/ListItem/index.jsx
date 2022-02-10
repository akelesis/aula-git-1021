import './styles.css'

function ListItem (props) {
    return (
        <div className="ListItem">
            <p>{props.title}</p>
        </div>
    )
}

export default ListItem