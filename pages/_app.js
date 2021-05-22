import App from "next/app";
import React from "react";
import { Provider } from "next-auth/client";

import { mockServer } from "../server";

if (process.browser) {
  mockServer({});
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />;
      </Provider>
    );
  }
}

export default MyApp;
