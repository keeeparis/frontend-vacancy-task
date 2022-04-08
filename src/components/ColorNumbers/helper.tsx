import React from 'react'
import * as A from './styles'

const assignColorAndSignToNumber = (e: number) => {
    if (e > 0) {
        return (
            <A.Green>
                +
                {e}
                %
            </A.Green>
        )
    } if (e < 0) {
        return (
            <A.Red>
                {e}
                %
            </A.Red>
        )
    }
    return (
        <div>
            {e}
            %
        </div>
    )
}

export default assignColorAndSignToNumber
