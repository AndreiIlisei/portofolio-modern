import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
    *, *:after, *:before{
        box-sizing: border-box;
        margin: 0;
        outline: none;
        font-family: 'Noto Sans', sans-serif;

    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
