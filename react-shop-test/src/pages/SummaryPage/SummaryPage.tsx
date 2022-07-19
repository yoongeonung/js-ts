import React, {ReactHTMLElement, useState} from 'react';

const SummaryPage = () => {
    const [checked, setChecked] = useState(true);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(cur => !cur);
    }
    return (
        <>
            <div>
                <input type="checkbox" name="" id="confirm-checkbox" onChange={onChange}/>
                <label htmlFor={'confirm-checkbox'}>주문하려는 것을 확인하셨나요?</label>
            </div>
            <button type={"submit"} disabled={checked}>주문 확인</button>
        </>
    );
}

export default SummaryPage;