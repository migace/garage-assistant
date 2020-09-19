import React from 'react';

import { AddClient } from "scenes/AddClient";
import { useAuth, getServerSideAuth  } from 'auth';
import { Restricted } from "components/Restricted";

import Page from '../layouts';

const AddClientPage = ({ initialAuth }) => {
  const auth = useAuth(initialAuth);

  return (
    <Page>
      {auth ? <AddClient /> : <Restricted />}
    </Page>
  );
}

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
 
  return { props: { initialAuth } };
};

export default AddClientPage;
