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
        font-family: "Lucida Console", "Courier New", monospace;;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyle;
