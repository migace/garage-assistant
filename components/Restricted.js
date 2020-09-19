import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const Restricted = () => (
    <Box m={4}>
        <Typography align="center" component="h1" variant="h3" gutterBottom>
            Restricted area. <ErrorIcon color="secondary" fontSize="large" />
        </Typography>
        <Typography align="center">    
            You need to be logged to see this page.
            Please sign in or sign up if you don't have an account yet.
        </Typography>
    </Box>
);
