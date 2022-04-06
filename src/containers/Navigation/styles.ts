import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 24px 64px 24px 24px;
    background: var(--gradient-color);
    height: 100vh;
    position: sticky;
    top: 0;
    flex: 0 1 320px;
    display: flex;
    flex-direction: column;
`
export const LogoWrapper = styled.div`
    margin: 64px 60px;

    @media (max-width: 1600px) {
        margin: 64px 0%;
    }
`
export const Footer = styled.div`
    text-align: center;
    margin-top: auto;
    font-size: 14px;
    color: var(--white);
`
