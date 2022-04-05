import { Outlet } from 'react-router'
import Navigation from '../Navigation/Navigation'
import { GlobalStyle } from '../../styles';
import * as L from './styles'

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