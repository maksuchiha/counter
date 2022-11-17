import React from 'react';

type ButtonPropsType = {
    disabled?: boolean
    name?: string
    onClick?: () => void
    className?: string
}

export const Button: React.FC<ButtonPropsType> = (
    {
        disabled,
        name,
        onClick,
        className
    }) => {
    return <button className={className} disabled={disabled} onClick={onClick}>{name}</button>
};