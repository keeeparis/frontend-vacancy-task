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
            <div key={i}>
                {assignColorAndSignToNumber(element)}
            </div>
        ))}
    </C.Prices>
)

export default ColorNumbers
