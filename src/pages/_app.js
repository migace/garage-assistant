import App from "next/app";
import React from "react";

import { mockServer } from "../server";

class MyApp extends App {
  constructor(props) {
    super(props);
    mockServer();
  }

  render() {
    const { Component, pageProps } = this.props;    

    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
