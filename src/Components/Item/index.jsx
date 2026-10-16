function Item({todo, showDelete, onToggle, onDelete}) {
    return(
        <li style={{display: "flex", alignItem: "center", gap: 8}}>
            <input type="checkbox" checked={false} onChange={() => onToggle(todo.id)}/>
            <span style={{}}>(todo.text)</span>
            {showDelete && <button onClick={() => onDelete(todo.id)}></button>}
        </li>
    )
}

export default Item