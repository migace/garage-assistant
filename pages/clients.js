import React from 'react';

import { ClientList } from 'scenes/ClientList';
import { useAuth, getServerSideAuth  } from 'auth';
import { Restricted } from "components/Restricted";

import Page from '../layouts';

const ClientsPage = ({ initialAuth }) => {
  const auth = useAuth(initialAuth);

  return (
    <Page>
      {auth ? <ClientList /> : <Restricted />}
    </Page>
  );
}

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
 
  return { props: { initialAuth } };
};

export default ClientsPage;
