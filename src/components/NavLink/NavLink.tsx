import { useMemo } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Menu } from '../../mock/types'
import * as N from './styles'

const NavLink = ({ item }: { item: Menu }) => {
    const location = useLocation()
    console.log(location)

    // TODO: 
    // const isActive = useMemo(() => {
    //     item.id
    // }, params)

    return (
        <N.Wrapper>
            <Link to={`/${item.id}`}>
                {item.title}
            </Link>
        </N.Wrapper>
    )
}

export default NavLink