import React, { useState, SyntheticEvent } from 'react'

import TokenItem from '../../components/TokenItem'
import Button from '../../components/Button'
import * as A from './styles'

import { tokens, categories } from '../../mock/tokens'
import useItems from '../../hooks/useItems'

const App = () => {
    const [category, setCategory] = useState(categories[0])
    const sortedItems = useItems(tokens, category.id)

    const handleCategoryChange = (e: SyntheticEvent<HTMLButtonElement>) => {
        const categoryCurrent = (e.target as HTMLButtonElement).dataset
        if (categoryCurrent.id && categoryCurrent.title) {
            const obj = {
                id: categoryCurrent.id,
                title: categoryCurrent.title,
            }
            setCategory(obj)
        }
    }

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
            {sortedItems.map((item) => (
                <TokenItem key={item.id} item={item} />
            ))}
        </>
    )
}

export default App
