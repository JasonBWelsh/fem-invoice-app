import { createTheme } from "@mui/material/styles";

// Consolidated Figma design system colors.
const colors = {
  purple:       "#7C5DFA", // Primary brand purple
  purpleLight:  "#9277FF", // Lighter purple
  navyDark:     "#1E2139", // Dark navy
  navyDarker:   "#252945", // Even darker navy SO DARK NAVY WOW!
  grayLight:    "#DFE3FA", // Light grayish
  grayMid:      "#888EB0", // Mid-tone gray (for those who can't commit)
  purpleGray:   "#7E88C3", // Purple-ish gray
  blackish:     "#0C0E16",
  red:          "#EC5757",
  pink:         "#FF9797",
  lightBg:      "#F8F8FB", // Light background
  nearBlack:    "#141625",
};

// ========== LIGHT THEME ==========
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.purple, // #7C5DFA
    },
    secondary: {
      main: colors.purpleLight, // #9277FF
    },
    error: {
      main: colors.red, // #EC5757
    },
    background: {
      default: colors.lightBg, // #F8F8FB
      paper: "#FFFFFF",
    },
    text: {
      primary: colors.blackish, // #0C0E16
      secondary: colors.grayMid, // #888EB0
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

// ========== DARK THEME ==========
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.purple, // or colors.purpleLight?
    },
    secondary: {
      main: colors.purpleLight,
    },
    error: {
      main: colors.red,
    },
    background: {
      default: colors.nearBlack, // #141625
      paper: colors.navyDark,    // #1E2139
    },
    text: {
      primary: colors.grayLight, // #DFE3FA
      secondary: colors.grayMid, // #888EB0
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});
