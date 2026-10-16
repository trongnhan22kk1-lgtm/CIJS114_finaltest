const TABS = [
    {key: "all", label: "All"},
    {key: "active", label: "Active"},
    {key: "completed", label: "Completed"}
]

function Tabs ({current, onChange}) {
    return(
        <div style={{display:'flex', justifyContent:'space-around'}}>
            {TABS.map(t=>(
                <div
                key={t.key}
                onClick={() => onChange(t.key)}
                style={{cursor: "pointer", borderBottom: current === t.key ? "4px solid #2F80ED" : "none"}}>
                    {t.label}
                </div>
            ))}
        </div>
    )
}

export default Tabs
