import React from 'react'
import { useParams } from 'react-router-dom'

import * as G from '../../styles'

const Token = () => {
    const params = useParams()

    return (
        <G.Header>
            <G.H1>{params.id}</G.H1>
        </G.Header>
    )
}

export default Token
