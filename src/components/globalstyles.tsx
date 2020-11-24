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
    }

`;

export default globalStyles;
