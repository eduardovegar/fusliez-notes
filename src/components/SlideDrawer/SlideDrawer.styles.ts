import { ITheme } from "utils/types";
import { createUseStyles } from "react-jss";

export default createUseStyles((theme: ITheme) => ({
  Backdrop: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.75)",
    zIndex: "100",
    top: 0,
    left: 0,
    transition: "opacity 0.4s ease-in",
    opacity: 0,
    pointerEvents: "none",
  },
  isBackdropOpen: {
    opacity: 1,
    pointerEvents: "auto",
    transitionTimingFunction: "ease-out",
  },
  SlideDrawer: {
    alignItems: "center",
    background: theme.backgroundColor,
    height: "100%",
    "-webkit-overflow-scrolling": "touch",
    left: "-100%",
    overflowY: "scroll",
    width: "calc(100vw - 2rem)",
    position: "fixed",
    padding: "1rem",
    top: "0",
    transition: "left 0.4s ease-in",
    zIndex: "200",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  isDrawerOpen: {
    left: "0%",
    transitionTimingFunction: "ease-out",
  },
  SlideDrawerContent: {
    flex: "1 0 auto",
    alignSelf: "stretch",
  },
  SlideDrawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: "0.5rem",
    borderBottom: `1px solid ${theme.borderColor}`,
    marginBottom: "0.5rem",
    "& h1": {
      fontSize: "2rem",
      fontWeight: 200,
      letterSpacing: "0.05em",
    },
    "& h2": {
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.05em",
    },
  },
  SlideDrawerSubheader: {},
  SlideDrawerNav: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  SlideDrawerNavItem: {
    display: "block",
    fontSize: "1.25rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    padding: "0.5rem 0",
    cursor: "pointer",
    transition: "padding-left 0.2s ease-in",
    "&:hover": {
      paddingLeft: "1.5rem",
      transitionTimingFunction: "ease-out",
    },
  },
  SlideDrawerEmote: {
    width: "4rem",
    height: "auto",
    alignSelf: "flex-start",
    marginBottom: "2rem",
  },
}));
