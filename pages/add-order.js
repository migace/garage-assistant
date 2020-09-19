import React from 'react';

import { AddOrder } from "scenes/AddOrder";
import { useAuth, getServerSideAuth  } from 'auth';
import { Restricted } from "components/Restricted";

import Page from '../layouts';

const AddOrderPage = ({ initialAuth }) => {
  const auth = useAuth(initialAuth);

  return (
    <Page>
      {auth ? <AddOrder /> : <Restricted />}
    </Page>
    );
}

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
 
  return { props: { initialAuth } };
};

export default AddOrderPage;