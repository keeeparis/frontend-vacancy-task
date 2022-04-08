import React from 'react'

import assignColorAndSignToNumber from './helper'
import * as C from './styles'

const ColorNumbers = ({
    data,
} : {
    data: number[]
}) => (
    <C.Prices>
        {data.map((element, i) => (
            <React.Fragment key={i}>
                {assignColorAndSignToNumber(element)}
            </React.Fragment>
        ))}
    </C.Prices>
)

export default ColorNumbers
