import { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider, Spin } from 'antd';
import faIR from 'antd/lib/locale/fa_IR';
import posthog from 'posthog-js';
import apolloClient from '@/apollo/client';
import { GlobalConfigProvider } from '@/hooks/useGlobalConfig';
import { PostHogProvider } from 'posthog-js/react';
import { ApolloProvider } from '@apollo/client';
import { defaultIndicator } from '@/components/PageLoading';
import Persianize from '@/components/Persianize';

require('../styles/index.less');

Spin.setDefaultIndicator(defaultIndicator);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>داده یار</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider locale={faIR} direction="rtl">
        <GlobalConfigProvider>
          <ApolloProvider client={apolloClient}>
            <PostHogProvider client={posthog}>
              <Persianize />
              <main className="app">
                <Component {...pageProps} />
              </main>
            </PostHogProvider>
          </ApolloProvider>
        </GlobalConfigProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
