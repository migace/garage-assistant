import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Page from '../layouts';

const IndexPage = () => (
  <Page>
    <Box m={4}>
        <Typography component="h1" variant="h4" gutterBottom>
          Garrage Assistant - your assistant to manage clients
        </Typography>
        <Typography paragraph>
          <strong>Garrage Assistant</strong> could help you to manage your clients and orders in business.
          You can add the client to the database, see all him orders, make notes, and save
          contacts for the future. The system can give you recommendations and allow to 
          <b> increase the quality of service customer.</b><br /><br />
          <b>The list of orders is simple and powerful.</b> It helps you every day on every
          step to increase your business and allow you to achieve success.  
        </Typography>
      </Box>
  </Page>
);

export default IndexPage;