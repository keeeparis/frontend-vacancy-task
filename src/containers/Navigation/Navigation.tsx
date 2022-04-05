import { menu } from '../../mock/menu'
import * as N from './styles'
import { ReactComponent as LogoIcon } from '../../media/Logo.svg'
import NavLink from '../../components/NavLink/NavLink'

const Navigation = () => {
    return (
        <N.Wrapper>
            <N.LogoWrapper>
                <LogoIcon />
            </N.LogoWrapper>
            {menu.map(item => (
                <NavLink 
                    key={item.id}
                    item={item}
                />
            ))}
        </N.Wrapper>
    )
}

export default Navigation