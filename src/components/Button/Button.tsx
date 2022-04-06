import { ButtonHTMLAttributes, FC } from 'react'

import * as B from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

const Button:FC<ButtonProps> = ({ 
    children, ...props 
}) => (
    <B.Button {...props}>
        {children}
    </B.Button>
)


export default Button