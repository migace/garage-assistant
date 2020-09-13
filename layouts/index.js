import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Head from 'next/head';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import { useStyles } from "./style";
import { Menu } from './Menu';
import {
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";

export const Index = ({ children, initialAuth }) => {
  const classes = useStyles();
  const auth = useAuth(initialAuth);
  const { login, logout } = useAuthFunctions();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Garage-Assistant App</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Garrage Assistant
            </Typography>
            {auth ? (
              <Button color="inherit" onClick={() => logout()}>Sign out</Button>
            ) : (
              <Button color="inherit" onClick={() => login()}>Sign in</Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <CssBaseline />
      <Container fixed>
        <Menu />      
        { children }
      </Container>
      <Container>
        <Box component="div" m={4}>
          <Typography align="center" variant="body2">
            &copy; {(new Date()).getFullYear()}&nbsp;
            <Link href="www.tiptopdesign.pl">
              tiptopdesign.pl
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);

  return { props: { initialAuth } };
};

export default Index;