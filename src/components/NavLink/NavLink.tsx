import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Menu } from '../../mock/types'
import * as N from './styles'

const NavLink = ({ item }: { item: Menu }) => {
    const location = useLocation()

    const isActive = location.pathname === item.path

    return (
        <N.Wrapper>
            <Link to={item.path}>
                <N.Inner active={isActive}>
                    {item.icon}
                    <N.Text>{item.title}</N.Text>
                </N.Inner>
            </Link>
        </N.Wrapper>
    )
}

export default NavLink
