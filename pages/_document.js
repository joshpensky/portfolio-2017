import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class Structure extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Josh Pensky</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}