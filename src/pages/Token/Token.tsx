import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../containers/Header'

const Token = () => {
    const params = useParams()

    const headingText = params.id ? params.id : 'Token'

    return (
        <Header heading={headingText} />
    )
}

export default Token
