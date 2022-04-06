import { Link } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import ColorNumbers from '../ColorNumbers'
import * as T from './styles'

import { ReactComponent as UsersIcon } from '../../media/users.svg'
import { ReactComponent as ChevronDownIcon } from '../../media/chevron-down.svg'
import numberWithSpaces from '../../utils/addSpaceToNumbers'
import { Token } from '../../mock/types'

const TokenItem = ({ item }: { item: Token }) => {
    const [isDescription, setIsDescription] = useState(false)
    const priceChange = [
        item.priceChange.hours24,
        item.priceChange.days7,
        item.priceChange.days365,
    ]

    const handleShowDescription = useCallback(() => {
        setIsDescription((prev) => !prev)
    }, [setIsDescription])

    return (
        <div>
            <CSSTransition
                in
                appear
                addEndListener={() => {}}
                classNames="fade"
            >
                <T.Wrapper onClick={handleShowDescription}>
                    <T.Inner>
                        <T.Id>
                            #
                            {item.id}
                        </T.Id>
                        <T.Logo src={item.logoURI} alt={item.name} />
                        <T.Name>
                            <Link to={`/${item.symbol}`}>
                                <T.FullName>{item.name}</T.FullName>
                            </Link>
                            <T.Symbol>{item.symbol}</T.Symbol>
                        </T.Name>
                        <T.PriceWrapper>
                            <T.Price>
                                {item.price}
                                {' '}
                                $
                            </T.Price>
                            <ColorNumbers data={priceChange} />
                        </T.PriceWrapper>
                        <T.Volume>
                            <p>
                                {numberWithSpaces(item.volume)}
                                {' '}
                                $
                            </p>
                            <T.VolChange>
                                {item.volumeChangePercentage}
                                %
                            </T.VolChange>
                        </T.Volume>
                        <T.Volume>
                            <p>
                                {numberWithSpaces(item.tvl)}
                                {' '}
                                $
                            </p>
                            <T.VolChange>
                                {item.tvlChangePercentage}
                                %
                            </T.VolChange>
                        </T.Volume>
                        <T.Users>
                            <UsersIcon color="var(--primary-color)" />
                            <p>{numberWithSpaces(item.users)}</p>
                        </T.Users>
                        <T.ChevronWrapper isOpen={isDescription}>
                            <ChevronDownIcon color="var(--primary-color)" />
                        </T.ChevronWrapper>
                    </T.Inner>
                    <T.Description
                        aria-expanded={isDescription}
                    >
                        {item.description}
                    </T.Description>
                </T.Wrapper>
            </CSSTransition>
        </div>
    )
}

export default TokenItem
