import React from "react";
import { useSession } from "next-auth/client";

import { ClientList } from "scenes/ClientList";
import { Restricted } from "components/Restricted";

import Page from "../layouts";

const ClientsPage = () => {
  const [session] = useSession();

  return <Page>{session ? <ClientList /> : <Restricted />}</Page>;
};

export default ClientsPage;
