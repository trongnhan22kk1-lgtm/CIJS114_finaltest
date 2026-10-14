import { useState } from "react"

function Dashboard () {
    const [setAll,setActive, setComplete] = useState(false)
    const showTable = useState(false)
    const handleAll = () =>{
        setAll=true
        setActive=false
        setComplete=false
    }
    const handleActive = () =>{
        setActive=true
        setAll=false
        setComplete=false
    }
    const handleComplete = () =>{
        setComplete=true
        setAll=false
        setActive=false
    }
    return(
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                <span onClick={handleAll}>All</span>
                {showTable && (
                    <table>
                        <tbody>
                            <th>
                                <tr><input type="radio"></input></tr>
                                <tr></tr>
                            </th>
                        </tbody>
                    </table>
                )}
            </div>
            <div>
                <span onClick={handleActive}>Active</span>
            </div>
            <div>
                <span onClick={handleComplete}>Complete</span>
            </div>
        </div>
    )
}

export default Dashboard