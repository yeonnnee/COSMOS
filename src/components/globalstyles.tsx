import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`

    ${reset}
    *{
        box-sizing: border-box
    }
    html, body{
        width: 100%;
        height: 100vh;
        background-color:#181717;
        color: #f7f1e3;
        overflow:hidden;

    }
    
    @media only screen and (max-width: 1679px) {
        html,body {
            overflow: visible;
            overflow-x:hidden;
        }
    }
`;

export default globalStyles;

/*

font-family: 'Raleway', sans-serif;
font-family: 'Texturina', serif;
font-family: 'Karla', sans-serif;
font-family: 'Caveat', cursive;
font-family: 'Pompiere', cursive;
font-family: 'Electrolize', sans-serif;
font-family: 'Abel', sans-serif;
font-family: 'Barlow Condensed', sans-serif;
font-family: 'Open Sans Condensed', sans-serif;
font-family: 'Titillium Web', sans-serif;
*/
