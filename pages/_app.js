import App from "next/app";
import React from "react";

import { mockServer } from "../server";

if (process.browser) {
  mockServer({});
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;    

    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
