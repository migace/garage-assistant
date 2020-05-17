import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const materialUiSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => materialUiSheets.collect(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialUiSheets.getStyleElement()}
        </>
      )
    };
  }

  render() {
    return (
      <html>
        <Head>          
          {this.props.styleTags}
        </Head>
        <body>          
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
