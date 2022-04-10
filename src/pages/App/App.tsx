/* eslint-disable no-unused-vars */
import React, {
    useState, useEffect, useCallback,
} from 'react'

import TokenItem from '../../components/TokenItem'
import useTokens from '../../hooks/useTokens'
import Header from '../../containers/Header'
import Tabs from '../../components/Tabs'

import { tokens, categories } from '../../mock/tokens'
import { Category } from '../../mock/types'

const App = () => {
    const [category, setCategory] = useState(categories[0])
    const [loading, setLoading] = useState(false)
    const sortedTokens = useTokens(tokens, category.id)

    const handleCategoryChange = useCallback((item: Category) => () => {
        if (item.id === category.id) return
        setCategory(item)
        setLoading(true)
    }, [category])

    useEffect(() => {
        setLoading(false)
    }, [category])

    return (
        <>
            <Header
                heading="Токены Everscale"
            >
                <Tabs
                    handleCategoryChange={handleCategoryChange}
                    category={category}
                />
            </Header>

            {!loading && sortedTokens.map((item) => (
                <TokenItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default App
