import React from "react";
import { useSession } from "next-auth/client";

import { AddClient } from "scenes/AddClient";
import { Restricted } from "components/Restricted";

import Page from "../layouts";

const AddClientPage = () => {
  const [session] = useSession();

  return <Page>{session ? <AddClient /> : <Restricted />}</Page>;
};

export default AddClientPage;
