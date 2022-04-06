import React, { useState, SyntheticEvent, useCallback } from 'react'

import TokenItem from '../../components/TokenItem'
import Button from '../../components/Button'
import * as A from './styles'

import { tokens, categories } from '../../mock/tokens'
import useItems from '../../hooks/useItems'

const App = () => {
    const [category, setCategory] = useState(categories[0])
    const [loading, setLoading] = useState(false)
    const sortedItems = useItems(tokens, category.id)

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
            <A.Header>
                <A.H1>Токены Everscale</A.H1>
                <A.Tabs>
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
                </A.Tabs>
            </A.Header>
            {!loading && sortedItems.map((item) => (
                <TokenItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default App
