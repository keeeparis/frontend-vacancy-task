import React, { ButtonHTMLAttributes, FC } from 'react'

import ButtonWrap from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

const Button:FC<ButtonProps> = ({
    children, ...props
}) => (
    <ButtonWrap {...props}>
        {children}
    </ButtonWrap>
)

export default Button
