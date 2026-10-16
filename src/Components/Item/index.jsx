function Item({todo, showDelete, onToggle, onDelete}) {
    return(
        <li style={{display: "flex", alignItems: "center", gap: 8}}>
            <input type="checkbox" checked={!todo.active} onChange={() => onToggle(todo.id)}/>
            <span style={{textDecoration: todo.active ? "none" : "line-through"}}>{todo.text}</span>
            {showDelete && <button onClick={() => onDelete(todo.id)}>Delete</button>}
        </li>
    )
}

export default Item
