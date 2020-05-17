import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(2),

    "&:last-child": {
      marginRight: 0,
    },
  },

  addOptions: {
    marginLeft: "auto",
  }
}));
