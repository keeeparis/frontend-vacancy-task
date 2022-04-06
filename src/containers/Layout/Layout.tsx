import { Outlet } from 'react-router'

import Navigation from '../Navigation'
import * as L from './styles'

import { GlobalStyle } from '../../styles'

const Layout = () => {
    return (
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
}

export default Layout