import ReactDOM from 'react-dom';
import React from 'react';
import { getPage } from 'vite-plugin-ssr/client';
import { PageContext } from './types';
import defaults from './defaults';

/** Main */
(async () => {
  const { Page, pageProps } = await getPage<PageContext>();

  ReactDOM.hydrate(
    <Page {...pageProps} />,
    document.getElementById(defaults.rootEl),
  );
})();
