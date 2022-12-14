import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 ${(props) => props.theme['yellow-500']}
    }

    body {
        background-color: #FAFAFA;
    }

    input {
        background-color: #EDEDED;
        border: 1px solid #E6E5E5;
        border-radius: 4px;
    }

    button {
        background-color: #E6E5E5;
    }
`
