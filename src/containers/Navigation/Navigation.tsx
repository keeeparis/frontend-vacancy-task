import React from 'react'

import NavLink from '../../components/NavLink'
import * as N from './styles'

import menu from '../../mock/menu'
import { ReactComponent as LogoIcon } from '../../media/Logo.svg'

const Navigation = () => (
    <N.Wrapper>
        <N.LogoWrapper>
            <LogoIcon />
        </N.LogoWrapper>
        {menu.map((item) => (
            <NavLink
                key={item.id}
                item={item}
            />
        ))}
        <N.Footer>
            Русский
        </N.Footer>
    </N.Wrapper>
)

export default Navigation
