const { useState } = React;

function App() {
    const [visible, setVisible] = useState([true, true, true, true]);

    const toggle = idx => {
        const copy = [...visible];
        copy[idx] = !copy[idx];
        setVisible(copy);
    };

    return (
        <div>
            <div className="controls">
                {visible.map((show, i) => (
                    <button key={i} onClick={() => toggle(i)}>
                        {show ? 'Hide' : 'Show'} Column {i + 1}
                    </button>
                ))}
            </div>
            <div className="container">
                {visible.map((show, i) => (
                    show && (
                        <div key={i} className="column">
                            Column {i + 1}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
