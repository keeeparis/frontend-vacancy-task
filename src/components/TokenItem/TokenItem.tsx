import { Link } from 'react-router-dom'
import React, { useCallback, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import addSpaceToNumbers from '../../utils/addSpaceToNumbers'
import ColorNumbers from '../ColorNumbers'
import * as T from './styles'

import { ReactComponent as UsersIcon } from '../../media/users.svg'
import { ReactComponent as ChevronDownIcon } from '../../media/chevron-down.svg'
import { Token } from '../../mock/types'

const TokenItem = ({ item }: { item: Token }) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
    const priceChange = [
        item.priceChange.hours24,
        item.priceChange.days7,
        item.priceChange.days365,
    ]

    const handleToggleDescription = useCallback(() => {
        setIsDescriptionVisible((prev) => !prev)
    }, [isDescriptionVisible])

    const noop = useCallback(() => {}, [])

    return (
        <div>
            <CSSTransition
                in
                appear
                addEndListener={noop}
                classNames="fade"
            >
                <T.Wrapper onClick={handleToggleDescription}>
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
                                {addSpaceToNumbers(item.volume)}
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
                                {addSpaceToNumbers(item.tvl)}
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
                            <p>{addSpaceToNumbers(item.users)}</p>
                        </T.Users>
                        <T.ChevronWrapper isOpen={isDescriptionVisible}>
                            <ChevronDownIcon color="var(--primary-color)" />
                        </T.ChevronWrapper>
                    </T.Inner>
                    <CSSTransition
                        in={isDescriptionVisible}
                        timeout={400}
                        classNames="description-visible"
                    >
                        <T.Description
                            aria-expanded={isDescriptionVisible}
                        >
                            <T.DescriptionInner>
                                {item.description}
                            </T.DescriptionInner>
                        </T.Description>
                    </CSSTransition>
                </T.Wrapper>
            </CSSTransition>
        </div>
    )
}

export default TokenItem
