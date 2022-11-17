import React from 'react';

type CounterPropsType = {
    count: number
    className: string
}

export const Count: React.FC<CounterPropsType> = (
    {
        count,
        className
    }) => {
    return <div className={className}>{count}</div>
};