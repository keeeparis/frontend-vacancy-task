import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #6347F5;
        --gradient-color: linear-gradient(201.66deg, #B380FD 12.94%, #6347F5 78.23%);
        --black: #000;
        --white: #fff;
        --green: #30BF8C;
        --red: #FF647C;
        --gray: #5D5E6C;
        --light-gray: #93949D;
        --page-bg-color: #F7F7FB;
    }

    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: black;
        font-family: 'Montserrat';
    }

    p {
        font-size: 18px;
        height: 22px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .fade {
        &-appear {
            opacity: 0.01;
        }
        &-appear-active {
            opacity: 1;
            transition: opacity 300ms ease-in 100ms;
        }
    }

    .description-visible {
        &-enter {
            max-height: 0;
            overflow: hidden;
            z-index: 1;
            opacity: 0;
            position: relative;
        }
        &-enter-active, &-enter-done {
            max-height: 340px !important;
            opacity: 1 !important;
            transition: all 650ms;
        }
        &-exit {
            max-height: 340px !important;
            opacity: 1 !important;
        }
        &-exit-active, &-exit-done {
            max-height: 0 !important;
            opacity: 0 !important;
            transition: all 200ms ;
        }
    }
`
export default GlobalStyle

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`
export const H1 = styled.h1`
    font-size: 36px;
    line-height: 43px;
`
