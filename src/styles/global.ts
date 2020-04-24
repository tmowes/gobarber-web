import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto slab', serif;
    font-size: 16px;
    /* -webkit-autofill,
    -webkit-autofill:hover,
    -webkit-autofill:focus,
    -webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px black inset !important;
    } */
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
  }

  /* #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  } */

  button{
    cursor: pointer;
  }
`
