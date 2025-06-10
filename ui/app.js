const {useState} = React;

const COLUMNS = [
    {title: 'DBO', color: '#ffe5e5'},
    {title: 'Plan Assets', color: '#e5ffe5'},
    {title: 'Asset Ceiling', color: '#e5f0ff'},
    {title: 'DBL', color: '#fff5e5'}
];

function Column({index, expanded, toggle}) {
    const {title, color} = COLUMNS[index];
    return (
        <div className="column" style={{backgroundColor: color}}>
            <div className="column-header">
                <span>{title}</span>
                <button onClick={() => toggle(index)}>
                    {expanded ? 'Collapse' : 'Expand'}
                </button>
            </div>
            {expanded && (
                <div className="column-body">
                    {/* content placeholder */}
                </div>
            )}
        </div>
    );
}

function App() {
    const [expanded, setExpanded] = useState([true, true, true, true]);

    const toggle = idx => {
        const copy = [...expanded];
        copy[idx] = !copy[idx];
        setExpanded(copy);
    };

    return (
        <div className="container">
            {expanded.map((show, i) => (
                <Column key={i} index={i} expanded={show} toggle={toggle} />
            ))}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
