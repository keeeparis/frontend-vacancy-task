import styled from 'styled-components'

export const Green = styled.div`
    color: var(--green);
`
export const Red = styled.div`
    color: var(--red);
`
export const Prices = styled.div`
    font-size: 14px;
    display: flex;
    color: var(--light-gray);

    > :not(:last-child)::after {
        content: '•';
        margin: 0 6px;
        color: var(--light-gray);
    }
`
