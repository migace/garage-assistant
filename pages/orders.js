import React from 'react';

import { OrderList } from 'scenes/OrderList';
import { useAuth, getServerSideAuth  } from 'auth';
import { Restricted } from "components/Restricted";

import Page from '../layouts';

const OrdersPage = ({ initialAuth }) => {
  const auth = useAuth(initialAuth);

  return (
    <Page>
      {auth ? <OrderList /> : <Restricted />}
    </Page>
  );
}

export const getServerSideProps = async (context) => {
  const initialAuth = getServerSideAuth(context.req);
 
  return { props: { initialAuth } };
};

export default OrdersPage;