import React from 'react';
import { FooterText } from './styles';

export const Footer = () => (
  <div className="container">
    <FooterText className="is-pulled-right">&copy; {(new Date()).getFullYear()} <a href="www.tiptopdesign.pl">tiptopdesign.pl</a></FooterText>
  </div>
);
