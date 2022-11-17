import React from 'react';
import s from "../../App.module.css";
import {Count} from "../Count/Count";
import {Button} from "../Button/Button";

type CounterPropsType = {
    maxValue: number
    startValue: number
    count: number
    plus: () => void
    reset: () => void
}

export const Counter: React.FC<CounterPropsType> = (
    {
        maxValue,
        startValue,
        count,
        plus,
        reset
    }) => {
    return (
        <div className={s.card}>
            <Count count={count} className={`${s.count} ${count >= maxValue ? s.active : ''}`}/>
            <div className={s.buttons}>
                <Button className={s.button} disabled={count >= maxValue} onClick={plus} name={'+'}/>
                <Button className={s.button} disabled={count === startValue} onClick={reset} name={'reset'}/>
            </div>
        </div>
    );
};