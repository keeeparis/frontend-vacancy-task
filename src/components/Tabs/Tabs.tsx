import React from 'react'

import Button from '../Button'
import { Category } from '../../mock/types'
import { categories } from '../../mock/tokens'
import TabsWrap from './styles'

interface TabsProps {
    handleCategoryChange: (item: Category) => () => void,
    category: Category
}

const Tabs = ({
    handleCategoryChange,
    category,
} : TabsProps) => (
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
)

export default Tabs
