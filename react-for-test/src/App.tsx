import React, {ReactElement, ReactHTMLElement, useRef, useState} from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const onPlusBtnClick = () => {
        setCount(curCount => curCount + 1);
    };
    const onMinusBtnClick = () => {
        setCount(curCount => curCount - 1);
    }
    const onOnOffBtnClick = () => {
        setDisabled(prevState => !prevState);
    }
    return (
        <>
            <h1>Counter App</h1>
            <span data-testid={'counter'}>{count}</span>
            <button data-testid={'plus-btn'} onClick={onPlusBtnClick} disabled={disabled}>+</button>
            <button data-testid={'minus-btn'} onClick={onMinusBtnClick} disabled={disabled}>-</button>
            <button data-testid={'on/off-btn'} onClick={onOnOffBtnClick} style={{backgroundColor:'blue'}}>On/Off</button>
        </>
    );
}

export default App;
