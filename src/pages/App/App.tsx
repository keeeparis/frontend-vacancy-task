/* eslint-disable no-unused-vars */
import React, {
    useState, useEffect, useCallback,
} from 'react'

import TokenItem from '../../components/TokenItem'
import useTokens from '../../hooks/useTokens'
import Button from '../../components/Button'
import Header from '../../containers/Header'
import TabsWrap from './styles'

import { tokens, categories } from '../../mock/tokens'
import { Category } from '../../mock/types'

const App = () => {
    const [category, setCategory] = useState(categories[0])
    const [loading, setLoading] = useState(false)
    const sortedTokens = useTokens(tokens, category.id)

    const handleCategoryChange = useCallback((item: Category) => () => {
        setCategory(item)
        setLoading(true)
    }, [])

    useEffect(() => {
        setLoading(false)
    })

    return (
        <>
            <Header heading="Токены Everscale">
                <TabsWrap>
                    {categories.map((item) => (
                        <Button
                            key={item.id}
                            onClick={handleCategoryChange(item)}
                            active={category.id === item.id}
                        >
                            {item.title}
                        </Button>
                    ))}
                </TabsWrap>
            </Header>

            {!loading && sortedTokens.map((item) => (
                <TokenItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default App
