const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const sass = require('@zeit/next-sass');
const fonts = require('next-fonts');

module.exports = withPlugins([
  css, 
  sass,
  fonts
]);
