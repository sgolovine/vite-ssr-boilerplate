import { PageContextBuiltInClient } from 'vite-plugin-ssr/client';

export interface PageContext extends PageContextBuiltInClient {
  Page: (pageProps: {}) => React.ReactElement;
  pageProps: {};
  urlPathname: string;
  documentProps?: {
    title?: string;
    description?: string;
  };
}
