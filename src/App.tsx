import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter/Counter";

export const App = () => {
    const maxValue = 5
    const startValue = 0

    const [count, setState] = useState<number>(startValue)

    const plus = () => count <= maxValue && setState(count + 1)

    const reset = () => setState(startValue)

    return (
        <div className={s.app}>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                plus={plus}
                reset={reset}
                count={count}/>
        </div>
    );
}