import { useState } from "react"
import Tabs from "../Tabs"
import Form from "../Form"
import List from "../List"

function Dashboard () {
    const [todos, setTools] = useState([])
    const [tab, setTab] = useState('all')

    const visibleTodos = todos

    const handleAdd = (text) =>{
        // TODO: thêm task mới { id, text, active: true} vào todos
    }

    const handleToggle = (id) =>{
        // TODO: dùng map, đảo active của task có id trùng
    }

    const handleDelete = (id) =>{
        // TODO: dùng filter bỏ task có id trùng
    }

    const handleDeleteAll = () => {
        // TODO: giữ lại các task còn active
    }

    return(
        <div>
            <Tabs current={tab} onChange={setTab}/>
            <Form onAdd={handleAdd}/>
            <List
                todos={visilbleTodos}
                showDelete={tab === 'completed'}
                onToggle={handleToggle}
                onDelete={handleDelete}/>
        </div>
    )
}

export default Dashboard