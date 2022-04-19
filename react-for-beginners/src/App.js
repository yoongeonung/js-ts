import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)
    const [keyword, setKeyword] = useState("");
    const onChange = (e) => setKeyword(e.target.value);
    const onClick = () => setCounter(prev => prev + 1);
    console.log("I Run Every Time");
    const iRunOnlyOnce = () => {
        console.log("I Run Only Once");
    }
    useEffect(iRunOnlyOnce, []);
    useEffect(() => {
        console.log("hahah");
    }, [keyword]);
    return (
        <div>
            <input onChange={onChange} placeholder="Search Here" value={keyword}/>
            <h1>{counter}</h1>
            <button onClick={onClick}>Up!</button>
        </div>
    );
}

export default App;
