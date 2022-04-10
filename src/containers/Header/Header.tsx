import React, { FC } from 'react'
import * as H from './styles'

interface HeaderProps {
    heading: string,
}

const Header:FC<HeaderProps> = ({ heading, children }) => (
    <H.Header>
        <H.H1>{heading}</H.H1>
        {children}
    </H.Header>
)

export default Header
