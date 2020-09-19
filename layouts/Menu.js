import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Button from '@material-ui/core/Button';
import Link from 'next/link';

import { useStyles } from "./Menu.styles";

export const Menu = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Link href="/orders">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DehazeIcon />}
          >
            Orders List
          </Button> 
        </Link>
        <Link href="/clients">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DehazeIcon />}
          >
            Clients List
          </Button>
        </Link>      
      </div>
      <div className={classes.addOptions}>
        <Link href="/add-order">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add Order
          </Button>
        </Link>
        <Link href="/add-client">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add Client
          </Button>
        </Link>
      </div>
    </div>
  );
};
