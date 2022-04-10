import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    `
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 66px 128px 66px 128px; // 128px !
    border-radius: 32px 0 0 0;
    margin-left: -32px;
    z-index: 1;
    background-color: var(--page-bg-color);
    overflow-y: scroll;

    @media (max-width: 1600px) {
        padding: 66px 64px 66px;
    }
`
