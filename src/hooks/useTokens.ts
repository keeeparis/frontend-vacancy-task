import { useMemo } from 'react'

import { Token } from '../mock/types'

const useTokens = (data: Token[], category: string) => {
    const sortedItems = useMemo(() => {
        if (category === 'all') return data
        return data.filter((item) => item.categories.includes(category))
    }, [data, category])

    return sortedItems
}

export default useTokens
