const defaultTheme = {
  fontSize: {
    textXXS: "10px",
    textXS: "13px",
    textSm: "24px",
    textMd: "32px",
    textBig: "40px",
  },
  palette: {
    white: "#fafafa",
    black: "#000000",
    grey: "#cbd5e0;",
    darkGrey: "#333333",
    titleColour: "rgb(107, 114, 128)",
    background: "rgb(36, 36, 36)",
    yellow: "#F7AB0A",
  },
};

export type ThemeType = typeof defaultTheme;

export default defaultTheme;
