import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#73bdab",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
  },
  title: {
    color: "#981d26", 
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    textAlign: "center",
    fontFamily: "ADLaM Display",
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    position: "fixed",
  }
}));

export default useStyles;
