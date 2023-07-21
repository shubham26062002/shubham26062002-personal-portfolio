import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    label: string,
    onClick?: () => void,
    color?: 'sea-green' | 'coral-pink',
    type?: 'button' | 'submit' | 'reset',
    disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    color = 'sea-green',
    type = 'button',
    disabled = false,
}) => {
    return (
        <button type={type} className={twMerge('inline-block py-2.5 px-6 rounded-full border-[1px] border-sea-green text-sea-green hover:text-white transition-all font-semibold duration-200 transform-gpu relative overflow-hidden before:content-[\'\'] before:absolute before:inset-0 before:bg-sea-green before:-translate-x-full hover:before:translate-x-0 before:transition-all before:duration-200 before:transform-gpu before:-z-50', color === 'coral-pink' && 'border-coral-pink text-coral-pink before:bg-coral-pink', disabled && 'opacity-50 cursor-not-allowed')} onClick={onClick} disabled={disabled}>{label}</button>
    )
}

export default Button