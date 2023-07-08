import { createGlobalStyle } from 'styled-components'

export const GlobalSyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{ 
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}

body{
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;    
}

body, input-security, textarea, button{
    font: 400 1rem Roboto, sans-serif;
}
`
