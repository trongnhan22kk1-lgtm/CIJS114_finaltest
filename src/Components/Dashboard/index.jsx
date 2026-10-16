import { useState } from "react"
import Tabs from "../Tabs"
import Form from "../Form"
import List from "../List"

function Dashboard () {
    const [todos, setTodos] = useState([])
    const [tab, setTab] = useState('all')

    const visibleTodos = todos.filter(todo => {
        if (tab === 'active') return todo.active
        if (tab === 'completed') return !todo.active
        return true
    })

    const handleAdd = (text) =>{
        setTodos([...todos, { id: Date.now(), text, active: true }])
    }

    const handleToggle = (id) =>{
        setTodos(todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo))
    }

    const handleDelete = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleDeleteAll = () => {
        setTodos(todos.filter(todo => todo.active))
    }

    return(
        <div>
            <Tabs current={tab} onChange={setTab}/>
            {tab !== 'completed' && <Form onAdd={handleAdd}/>}
            <List
                todos={visibleTodos}
                showDelete={tab === 'completed'}
                onToggle={handleToggle}
                onDelete={handleDelete}/>
            {tab === 'completed' && visibleTodos.length > 0 && (
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button onClick={handleDeleteAll}>Delete all</button>
                </div>
            )}
        </div>
    )
}

export default Dashboard
