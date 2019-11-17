import React from 'react';
import Head from 'next/head';
import { FooterText } from './styles';

export default () => (
  <div className="container">
    <FooterText className="is-pulled-right">&copy; {(new Date()).getFullYear()} <a href="www.tiptopdesign.pl">tiptopdesign.pl</a></FooterText>
  </div>
);
