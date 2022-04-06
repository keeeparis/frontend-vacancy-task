import React from 'react'
import { useParams } from 'react-router-dom'

import * as T from './styles'

const Token = () => {
    const params = useParams()

    return (
        <T.Header>
            <T.H1>{params.id}</T.H1>
        </T.Header>
    )
}

export default Token
