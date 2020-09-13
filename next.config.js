const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        env: {
          IDP_DOMAIN: "",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        env: {
          IDP_DOMAIN: "",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "",
          REDIRECT_SIGN_OUT: "",
          AUTH_COOKIE_DOMAIN: "",
        },
      };
  }
};