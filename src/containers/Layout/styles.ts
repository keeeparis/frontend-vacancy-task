import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    background-color: var(--page-bg-color);
    min-height: 100vh;
`
export const Container = styled.div`
    width: 100%;
    padding: 66px 128px;

    @media (max-width: 1600px) {
        padding: 66px 64px;
    }
`