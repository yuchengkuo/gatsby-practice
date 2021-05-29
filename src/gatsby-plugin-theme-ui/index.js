import { transparentize } from "@theme-ui/color";
export default {
  colors: {
    text: "#E3E3E3",
    background: "#18191B",
    primary: "#FBA34A",
    lightGray: "#BDBEC1",
    gray: "#777980",
    darkGray: "#3B3C40",
  },
  fonts: {
    body: "Sora, san-serif",
    heading: "Sora, san-serif",
  },
  breakpoints: ["700px", "1300px", "2000px"],
  space: [0, 4, 8, 12, 16, 20, 24, 36, 40, 48, 64, 200],
  fontSizes: [
    "1.4rem",
    "2rem",
    "2.4rem",
    "2.8rem",
    "3.6rem",
    "4rem",
    "4.4rem",
    "6.4rem",
  ],
  fontWeights: {
    body: 200,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 2.4,
    heading: 1.2,
  },
  letterSpacings: {
    body: "normal",
    heading: "0.6px",
    caption: "0.9px",
  },
  shadows: {
    card: {
      filter:
        "drop-shadow(0px 0px 8px hsla(0, 0%, 0%, 0.3)) drop-shadow(0px 4px 24px hsla(0, 0%, 0%, 0.1))",
      "&:hover": {
        filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.15))",
      },
    },
  },
  sizes: {
    container: 960,
    text: 640,
    columnR: 560,
    columnL: 320,
    full: "100%",
    max: 2000,
  },

  // variants
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: "heading",
    },
    paragraph: {
      fontWeight: "body",
      lineHeight: "body",
      letterSpacing: "body",
    },
    sectionTitle: {
      variant: "text.heading",
      color: "gray",
      ml: "-24px",
    },
    caption: {
      color: "gray",
      fontWeight: "bold",
      letterSpacing: "caption",
    },
  },
  link: {
    nav: {
      variant: "text.heading",
      fontWeight: 600,
      textDecoration: "none",
      fontSize: 0,
      color: "gray",
      transition: "all 200ms ease-out",
      ":hover": {
        color: "text",
      },
    },
    button: {
      color: "text",
      variant: "text.heading",
      fontSize: 1,
      fontWeight: 600,
      py: 3,
      textAlign: "center",
      textDecoration: "none",
      flexGrow: "1",
      transition: "all 200ms ease-out",
      backgroundColor: transparentize("darkGray", 0.8),
      ":hover": {
        backgroundColor: transparentize("darkGray", 0.5),
        color: "primary",
        path: { fill: "primary", transition: "all 200ms ease-out" },
      },
    },
  },
  cards: {
    project: {
      position: "relative",
      minWidth: "300px",
      maxWidth: "640px",
      minHeight: "320px",
      maxHeight: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      borderRadius: "0.5rem",
      variant: "shadows.card",
    },
    card: {
      variant: "shadows.card",
      p: 5,
      backgroundColor: "background",
      color: "text",
      fontSize: 1,
      boxShadow: `inset 0px 4px 0px #FBA34A`,
      borderRadius: 2,
      h4: {
        ml: 0,
        mb: 6,
        color: "text",
      },
    },
  },
  overlay: {
    radial: {
      position: "relative",
      "::after": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: `radial-gradient(
          80.1% 80.1% at 50% 50%,
          rgba(29, 30, 33, 0) 0%,
          rgba(29, 30, 33, 0.5) 100%
        )`,
        zIndex: 1,
      },
    },
    project: {
      "::after": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg, #00000000 30%, hsla(0,0%,0%,0.8)) 100%, radial-gradient(80% 80% at 50% 50%,hsla(225, 6%, 12%, 0) 0%,hsla(225, 6%, 12%, 0.5) 100%)`,
      },
    },
    hero: {
      "::after": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg, rgba(29, 30, 33, 0.7) 0%,
          rgba(29, 30, 33, 0.35) 47.73%, #18191b 95%)`,
      },
    },
  },
  container: {
    wide: {
      maxWidth: "container",
      mx: "auto",
      px: [7, 7, "unset"],
    },
    text: {
      maxWidth: "text",
      mx: "auto",
      px: [7, "unset"],
    },
    hero: {
      maxWidth: "text",
      height: 800,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingBottom: 10,
      px: [7, "unset"],
    },
  },
  section: {
    my: 11,
  },

  useRootStyles: true,
  // styles
  styles: {
    root: {
      backgroundColor: "background",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: "62.5%",
      scrollbarColor: `#fba34a #18191b`,
      scrollbarWidth: `thin`,
      // scrollBehavior: `smooth`,
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "background",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "primary",
      },
      // mx: [7, 7, 0],
    },
    header: {
      variant: "container.wide",
      flexDirection: ["column", "row", "row"],
      alignItems: "center",
      justifyContent: ["center", "space-between"],
      mx: "auto",
      py: 7,
    },
    h1: {
      fontSize: 6,
      variant: "text.heading",
      m: 0,
      mb: 6,
    },
    h2: {
      fontSize: 5,
      variant: "text.heading",
      mb: 9,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
      mt: 9,
      mb: 7,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
      color: "lightGray",
      mb: 8,
      ml: -24,
    },
    h5: {
      fontSize: 0,
      variant: "text.heading",
    },
    h6: {
      fontSize: 0,
      variant: "text.caption",
    },
    p: {
      fontSize: 1,
      color: "lightGray",
      mb: 6,
      variant: "text.paragraph",
    },
    a: {
      color: "inherit",
      transition: "all 200ms ease-out",
      textDecoration: "underline",
      textDecorationColor: "darkGray",
      textDecorationThickness: 1.5,
      ":hover": {
        color: "text",
      },
    },
    li: {
      variant: "text.paragraph",
      fontSize: 1,
      color: "lightGray",
    },
    ul: {
      mb: 6,
      listStyle: `url("data:image/svg+xml,%3Csvg width='12' height='20' viewBox='0 0 4 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='12' width='4' height='4' fill='%23BDBEC1'/%3E%3C/svg%3E%0A")`,
    },
    ol: {
      mb: 6,
    },
    blockquote: {
      fontWeight: 700,
      px: 5,
      pt: 1,
      mb: 6,
      boxShadow: `inset 6px 0px 0px #FBA34A`,
      background: `#FBA34A10`,
      p: { mb: 0 },
    },
    em: {
      color: "background",
      backgroundColor: transparentize("primary", 0.1),
      fontStyle: "normal",
      px: 1,
      py: -6,
      fontWeight: 300,
    },
    hr: {
      color: "background",
      borderColor: "background",
      borderWidth: 0,
      my: 100,
    },
  },
};
