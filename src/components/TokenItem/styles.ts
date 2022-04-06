import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition-duration: 0.1s;

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
    width: 100%;
    
`
export const Id = styled.p`
    color: var(--light-gray);
    flex: 0 0 40px;
`
export const Logo = styled.img`
    margin-right: 20px;
    width: 40px;
    height: 40px;
`
export const Name = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 220px;

    a:hover {
        text-decoration: underline;
    }
`
export const FullName = styled.p`
    font-size: 21px;
`
export const Symbol = styled.p`
    color: var(--primary-color);
`
export const PriceWrapper = styled.div`
    flex: 0 1 220px;
`
export const Price = styled.p`
    color: var(--primary-color);
`
export const Volume = styled.div`
    flex: 0 1 220px;
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
`
export const Description = styled.div`
    font-size: 16px;
    color: var(--gray);
    margin-top: 0;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0, 1, 0, 1);
    
    &[aria-expanded="true"] {
        max-height: 200px; // !important
        opacity: 1;
        margin-top: 24px;
        transition: 
            all 0.3s ease-in-out;
    } 
`
export const ChevronWrapper = styled.div<{ isOpen: boolean }>`
    margin-left: auto;
    transition: all 0.2s ease-in-out;
    transform: ${(props) => (props.isOpen
        ? css`rotateX(180deg) translateY(5px)`
        : css`rotateX(0deg)`)
};
    border-radius: 50%;
    width: 25px;
    height: 25px;

    svg {
        padding-top: 1px;
    }

    :hover {
        background-color: rgba(0,0,0,0.09);
    }
`
