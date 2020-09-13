import React from "react";
import { useRouter } from "next/router";
import { useAuthRedirect } from "aws-cognito-next";
import queryString from "query-string";

const extractFirst = (value) => Array.isArray(value) ? value[0] : value;

export default function TokenSetter() {
  const router = useRouter();

  useAuthRedirect(() => {
    const redirectUriAfterSignIn =
      extractFirst(queryString.parse(window.location.search).to || "") || "/";

    router.replace(redirectUriAfterSignIn);
  });

  return <p>loading...</p>;
}