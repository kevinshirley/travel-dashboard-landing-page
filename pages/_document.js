require('dotenv').config();
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
const { 
  NODE_ENV,
  GOOGLE_ANALYTICS_CODE_1,
  GOOGLE_TAG_MANAGER_URL_1,
  GOOGLE_ANALYTICS_CODE_2,
  GOOGLE_TAG_MANAGER_URL_2,
  GOOGLE_ANALYTICS_CODE_3,
  GOOGLE_TAG_MANAGER_URL_3
} = process.env;

class Root extends Document {
  static async getInitialProps(ctx) {
    const isProduction = NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleTags1() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GOOGLE_ANALYTICS_CODE_1});
      `
    };
  }

  setGoogleTags2() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GOOGLE_ANALYTICS_CODE_2});
      `
    };
  }

  setGoogleTags3() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GOOGLE_ANALYTICS_CODE_3});
      `
    };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <html lang={this.props.__NEXT_DATA__.query.language}>
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script
                async
                src={GOOGLE_TAG_MANAGER_URL_1}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags1()} />
              <script
                async
                src={GOOGLE_TAG_MANAGER_URL_2}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags2()} />
              <script
                async
                src={GOOGLE_TAG_MANAGER_URL_3}
              />
              <script dangerouslySetInnerHTML={this.setGoogleTags3()} />
            </>
          )}
        </body>
      </html>
    );
  }
}

export default Root;
