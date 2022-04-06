import React from 'react'
import { Green, Red } from './styles'

const assignColorToSign = (e: number) => {
    if (e > 0) {
        return (
            <Green>
                +
                {e}
                %
            </Green>
        )
    } if (e < 0) {
        return (
            <Red>
                {e}
                %
            </Red>
        )
    }
    return (
        <div>
            {e}
            %
        </div>
    )
}

export default assignColorToSign
