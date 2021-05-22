import React from "react";

import { AddOrder } from "scenes/AddOrder";
import { Restricted } from "components/Restricted";
import { useSession } from "next-auth/client";

import Page from "../layouts";

const AddOrderPage = () => {
  const [session] = useSession();

  return <Page>{session ? <AddOrder /> : <Restricted />}</Page>;
};

export default AddOrderPage;
