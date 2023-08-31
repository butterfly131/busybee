import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 0,
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  footer: {
    backgroundColor: "#481f01",
    padding: theme.spacing(3),
    textAlign: "center",
    marginBottom: 0,
  },
  footerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  copywrite: {
    marginTop: theme.spacing(2),
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Ruluko",
    letterSpacing: "1px",
  }
}));

export default useStyles;