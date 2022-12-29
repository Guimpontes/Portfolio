import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    html, body {
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body {
        background-color: ${props => props.theme.colors.primary};
    }

    ::-webkit-scrollbar {
        appearance: none;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        width: 100%;
        border-radius: 20px;
        background-color: ${(props) => props.theme.colors.secondary}
    }
`
export const Container = styled.div`
    max-width: 1100px;
    width: 100%;
    padding: 50px 20px; 
    padding-bottom: 20px;
    color: ${(props) => props.theme.colors.text};

    span {
        color: ${(props) => props.theme.colors.secondary};
    }

    @media screen and (max-width: 350px) {
        padding: 50px 5px;
    }
`