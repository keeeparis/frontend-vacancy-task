import React, { useState, SyntheticEvent, useCallback } from 'react'

import TokenItem from '../../components/TokenItem'
import Button from '../../components/Button'
import * as G from '../../styles'
import TabsWrap from './styles'

import { tokens, categories } from '../../mock/tokens'
import useTokens from '../../hooks/useTokens'

const App = () => {
    const [category, setCategory] = useState(categories[0])
    const [loading, setLoading] = useState(false)
    const sortedTokens = useTokens(tokens, category.id)

    const handleCategoryChange = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        const categoryCurrent = (e.target as HTMLButtonElement).dataset
        if (categoryCurrent.id && categoryCurrent.title) {
            const obj = {
                id: categoryCurrent.id,
                title: categoryCurrent.title,
            }
            // простое решение по созданию плавного появления
            setLoading(true)
            setCategory(obj)
            setTimeout(() => {
                setLoading(false)
            }, 100)
        }
    }, [])

    return (
        <>
            <G.Header>
                <G.H1>Токены Everscale</G.H1>
                <TabsWrap>
                    {categories.map((item) => (
                        <Button
                            key={item.id}
                            onClick={handleCategoryChange}
                            data-id={item.id}
                            data-title={item.title}
                            active={category.id === item.id}
                        >
                            {item.title}
                        </Button>
                    ))}
                </TabsWrap>
            </G.Header>
            {!loading && sortedTokens.map((item) => (
                <TokenItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default App
