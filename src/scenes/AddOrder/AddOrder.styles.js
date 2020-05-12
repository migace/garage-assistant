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

  withoutLabel: {
    marginTop: theme.spacing(3),
  },

  selectWrapper: {
    position: "relative",
  },

  selectProgress: {
    position: "absolute",
    bottom: "6px",
    left: "calc(50% - 12px)",
  },
}));
