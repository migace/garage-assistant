import App from "next/app";
import React from "react";
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import { mockServer } from "../server";

if (process.browser) {
  mockServer({});
}

Amplify.configure({
  Auth: {
    region: "us-east-2", 
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_CLIENT_ID,
    cookieStorage: {
      domain: process.env.AUTH_COOKIE_DOMAIN,
      path: "/",
      expires: 7,
      secure: false,
    },
  },
});
Auth.configure({
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid"],
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "token",
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;    

    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
