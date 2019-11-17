import App from 'next/app';
import Head from 'next/head'
import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEquals,
  faPlus,
  faCheck,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';
import 'bulma/css/bulma.min.css';

import withReduxStore from '../middlewares/withReduxStore';

library.add(faEquals);
library.add(faPlus);
library.add(faCheck);
library.add(faTimes);

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <Head>
          <title>Garage-Assistant App</title>
        </Head>      
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </>
    )
  }
}

export default withReduxStore(MyApp)
