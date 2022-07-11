import {useRecoilState, useRecoilValue} from "recoil";
import {hourSelector, minuteState} from "./atoms";
import React from "react";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const hours = useRecoilValue(hourSelector);
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
        setMinutes(parseInt(e.currentTarget.value));
    }
    return (
        <div>
            <input type="number" value={minutes} onChange={onChange} placeholder={'Minutes'}/>
            <input type="number" value={hours} placeholder={'Hours'}/>
        </div>
    )
}

export default App;
