import { useParams } from 'react-router'

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