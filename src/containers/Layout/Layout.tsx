import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../Navigation'
import GlobalStyle from '../../styles'
import * as L from './styles'

const Layout = () => (
    <>
        <GlobalStyle />
        <L.Wrapper>
            <Navigation />
            <L.Container>
                <Outlet />
            </L.Container>
        </L.Wrapper>
    </>
)

export default Layout
