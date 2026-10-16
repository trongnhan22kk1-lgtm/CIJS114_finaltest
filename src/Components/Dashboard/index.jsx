import { useState } from "react"

function Dashboard () {
    const [showAll,setAll] = useState(false)
    const [showActive, setActive] = useState(false)
    const [showComplete, setComplete] = useState(false)
    const handleAll = () =>{
        setAll(!showAll)
    }
    const handleActive = () =>{
        setActive(!showActive)
    }
    const handleComplete = () =>{
        setComplete(!showComplete)
    }
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                <div onClick={handleAll}>All</div>
                {showAll && (
                   <table>
                        <tbody>
                            <th>
                                <tr><input type="radio"></input></tr>
                                <tr>All</tr>
                            </th>
                        </tbody>
                    </table>
                    )}
            </div>
            <div>
                <div onClick={handleAll}>All</div>
                {showActive && (
                    <table>
                        <tbody>
                            <th>
                                <tr><input type="radio"></input></tr>
                                <tr>Active</tr>
                            </th>
                        </tbody>
                    </table>
                    )}
            </div>
            <div>
                <div onClick={handleAll}>All</div>
                {showComplete && (
                    <table>
                        <tbody>
                            <th>
                                <tr><input type="radio"></input></tr>
                                <tr>Complete</tr>
                            </th>
                        </tbody>
                    </table>
                    )}
            </div>

        </div>
    )
}

export default Dashboard