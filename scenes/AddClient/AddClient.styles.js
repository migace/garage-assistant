import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: theme.spacing(4),

    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },

  formControl: {
    marginBottom: theme.spacing(4),
  },
}));
