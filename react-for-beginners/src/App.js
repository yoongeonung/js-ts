import {useEffect, useState} from "react";


const Hello = () => {
    const hiFn = () => {
        console.log("created!");
        return byeFn;
    }
    const byeFn = () => {
        console.log("destroyed!");
    };
    useEffect(hiFn, []);
    return (
        <h1>Hello!</h1>);
};

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev)
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;
