import React from "react";
import { useSession } from "next-auth/client";

import { OrderList } from "scenes/OrderList";
import { Restricted } from "components/Restricted";

import Page from "../layouts";

const OrdersPage = () => {
  const [session] = useSession();

  return <Page>{session ? <OrderList /> : <Restricted />}</Page>;
};

export default OrdersPage;
