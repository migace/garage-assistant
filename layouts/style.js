import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  navbarRoot: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    paddingTop: theme.spacing(5),
  },
  link: {
    color: "#fff",
  }
}));
