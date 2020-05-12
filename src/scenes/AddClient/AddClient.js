import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import { useStyles } from "./AddClient.styles";

export const AddClient = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <form noValidate autoComplete="off">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <FormControl
                className={classes.formControl}
                fullWidth
              >
                <TextField
                  id="standard-helperText"
                  label="First name"
                  defaultValue=""
                />
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl
                className={classes.formControl}
                fullWidth
              >
                <TextField
                  id="standard-helperText"
                  label="Last name"
                  defaultValue=""
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={4} justify="flex-end">
            <Grid item>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
