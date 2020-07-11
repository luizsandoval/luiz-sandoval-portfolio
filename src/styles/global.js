import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
   
        &:focus {
            outline: 0;
        }
    }
    html {
        font-size: 16px;
    }

    body {
        display: grid;
        grid-template-rows: 1fr auto;
        width: 100%;
        height: 100vh;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
        div {
            &#root {
                display: grid;
                grid-template-rows: repeat(auto-fill, 1fr);
            }
        }
    }

    button, a {
        &:hover {
            cursor: pointer;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.2em;
    }

    h3 {
        font-size: 1.1em;
    }
    
    a {
        text-decoration: none;
    }
    
`;