import React from 'react'

import assignColorToSign from './helper'
import { Prices } from './styles'

const ColorNumbers = ({
    data,
} : {
    data: number[]
}) => (
    <Prices>
        {data.map((element, ind) => (
            <React.Fragment key={ind}>
                {assignColorToSign(element)}
            </React.Fragment>
        ))}
    </Prices>
)

export default ColorNumbers
