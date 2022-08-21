
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `


:root {
    --header-height: 3rem;
    --nav-width: 68px;
  
    --primary-blue: #007bff;
    --primary-pink: #f582a7;
    --primary-light-pink: #ffddee;
  }
  

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scrollbar-width: thin;
  }

  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
  }

 *::-webkit-scrollbar {
   width: 8px;
 }


`

export default GlobalStyles