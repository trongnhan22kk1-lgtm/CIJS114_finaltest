import Item from "../Item"

function List ({ todos, showDelete, onToggle, onDelete}) {
    return (
        <ul style={{ listStyle:'none', padding:0}}>
            {todos.map(todo => (
                <Item key={todo.id} todo={todo} showDelete = {showDelete}
                    onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </ul>
    )
}

export default List 