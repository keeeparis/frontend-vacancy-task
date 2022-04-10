import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 24px;
    border-radius: 16px;
    background-color: #fff;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition-duration: 0.1s;
    box-shadow: 0px 0px 25px 0px #0000000A;

    >svg {
        margin-left: auto
    }

    :hover {
        outline: 2px solid var(--primary-color);
    }
`
export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
`
export const Id = styled.p`
    color: var(--light-gray);
    flex: 0 0 35px;
    margin-bottom: 2px;
`
export const Logo = styled.img`
    margin-right: 8px;
    margin-bottom: 2px;
    width: 40px;
    height: 40px;
`
export const Name = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 220px;
    font-size: 21px;

    a:hover {
        text-decoration: underline;
    }
`
export const FullName = styled.p`
    font-size: 21px;
`
export const Symbol = styled.p`
    color: var(--primary-color);
    margin-top: -2px;
    font-size: 16px;
`
export const PriceWrapper = styled.div`
    flex: 0 1 219.4px;
`
export const Price = styled.p`
    color: var(--primary-color);
`
export const Volume = styled.div`
    flex: 0 1 219.4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`
export const VolChange = styled.span`
    color: var(--primary-color);
`
export const Users = styled.div`
    flex: 0 2 220px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    svg {
        color: var(--primary-color);
    }
`
export const Description = styled.div`
    font-size: 16px;
    color: var(--gray);
    margin-top: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
`
export const DescriptionInner = styled.div`
    padding-top: 24px;
`
export const ChevronWrapper = styled.div<{ isOpen: boolean }>`
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    transform: ${(props) => (props.isOpen
        ? css`rotateX(180deg) translateY(5px)`
        : css`rotateX(0deg)`)};
    margin-top: ${(props) => (props.isOpen
        && '4px')};
    border-radius: 50%;
    width: 32px;
    height: 32px;

    svg {
        padding-top: 1px;
        margin-left: 4px;
        width: 100%;
        height: 100%;
        color: var(--primary-color);
    }
`
