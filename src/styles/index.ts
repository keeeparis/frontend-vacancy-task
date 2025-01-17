import { createGlobalStyle } from 'styled-components'

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
`
export default GlobalStyle
