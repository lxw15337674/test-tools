import '../styles/global.css';
import 'antd/dist/antd.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Layout from '@/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorageState, useMount } from 'ahooks';
import { useAuth, userInit } from '@/layout/useAuth';
import store from '@/store';
import { Provider } from 'react-redux';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

const MyApp = ({ Component, pageProps }: ExtendedAppProps) => {
  const router = useRouter();
  // const handleRouteChangeStart = (url: string) =>{

  //   console.log('routeChangeStart---', url);

  // useEffect(() => {
  //   // 注册事件
  //   router.events.on('routeChangeStart', handleRouteChangeStart);

  //   return () => {
  //     // 注销事件
  //     router.events.off('routeChangeStart', handleRouteChangeStart);
  //   };
  // }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
