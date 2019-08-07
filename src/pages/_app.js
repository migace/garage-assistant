import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEquals, faPlus } from '@fortawesome/free-solid-svg-icons';

import 'react-datepicker/dist/react-datepicker.css';
import 'bulma/css/bulma.min.css';

import withReduxStore from '../middlewares/withReduxStore';

library.add(faEquals);
library.add(faPlus);

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
