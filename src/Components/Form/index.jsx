import { useState } from "react"

function Form({onAdd}) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="add details"/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form 