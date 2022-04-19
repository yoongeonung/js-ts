import {useCallback, useEffect, useMemo, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)
    const onClick = () => setCounter(prev => prev + 1);
    console.log("I Run Every Time");
    const iRunOnlyOnce = () => {
        console.log("I Run Only Once");
    }
    useEffect(iRunOnlyOnce, []);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}>Up!</button>
        </div>
    );
}

export default App;
