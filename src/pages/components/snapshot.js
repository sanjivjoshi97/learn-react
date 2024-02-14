import {useState} from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number.current + 1);
                setNumber(number.current + 1);
                setNumber(number.current + 1);
            }}>+3
            </button>
        </>
    )
}
