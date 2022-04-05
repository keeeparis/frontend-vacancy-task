import { useState, SyntheticEvent } from 'react'
import { tokens, categories } from '../../mock/tokens'
import { useItems } from '../../hooks/useItems'
import TokenItem from '../../components/TokenItem/TokenItem'
import * as A from './styles'
import Button from '../../components/Button/Button'

function App() {
    const [category, setCategory] = useState(categories[0])
    const sortedItems = useItems(tokens, category.id)

    const handleCategoryChange = (e: SyntheticEvent<HTMLButtonElement>) => {
        const categoryCurrent = (e.target as HTMLButtonElement).dataset
        if (categoryCurrent.id && categoryCurrent.title) {
            const obj = {
                id: categoryCurrent.id, 
                title: categoryCurrent.title
            }
            setCategory(obj)
        }
    }

    return (
        <>
            <A.Header>
                <A.H1>Токены Everscale</A.H1>
                <A.Tabs>
                    {categories.map(item => (
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
