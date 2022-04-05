import styled, { css } from "styled-components";

export const Button = styled.button<{active?: boolean}>`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: ${props => props.active && 
        css`var(--gradient-color)`
    };
    box-shadow: ${props => props.active && 
        css`0px 3px 5px rgba(0, 0, 0, 0.07)`
    };
    font-family: inherit;
    padding: 8px;
    font-size: 14px;
    border-radius: 16px;
    letter-spacing: 0.02em;
    transition-duration: .2s;
    cursor: pointer;
    color: ${props => props.active ? 
        css`var(--white)` : 
        css`var(--light-gray)`
    };

    :hover {
        background: ${props => !props.active &&
            css`rgba(0, 0, 0, 0.09)`};
        transition-duration: .2s;
    }
`