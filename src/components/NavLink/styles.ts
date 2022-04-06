import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    a {
        flex: 0 1 224px;
    }
`

export const Inner = styled.div<{active?: boolean}>`
    display: flex;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    margin-bottom: 24px;
    border-radius: 16px;
    transition-duration: 0.1s;
    background-color: ${(props) => (props.active
        ? css`var(--white)`
        : 'inherit')};
    color: ${(props) => (props.active
        ? css`var(--black)`
        : css`var(--white)`)};

    svg {
        color: ${(props) => (props.active
        ? css`var(--primary-color)`
        : css`var(--white)`)};
    }

    :hover {
        outline: ${(props) => !props.active
            && css`2px solid var(--white)`};  
    }
`
export const Text = styled.p`
    display: inline;
`
