import { Green, Red } from './styles'

export const assignColorToSign = (e: number) => {
    return (e > 0) 
    ?   <Green>+{e}%</Green>
    :   (e < 0)
        ?   <Red>{e}%</Red>
        :   <div>{e}%</div>
}