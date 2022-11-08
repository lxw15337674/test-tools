import 'antd/dist/antd.css';
import '../styles/global.css';

import type { EmotionCache } from '@emotion/css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import Layout from '@/layout';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const MyApp = ({ Component, pageProps }: ExtendedAppProps) => {
  // const router = useRouter();
  // const handleRouteChangeStart = (url: string) =>
  //   console.log('routeChangeStart---', url);
  // const handleRouteChangeComplete = (url) =>
  //   console.log('routeChangeComplete---', url);
  // const handleBeforeHistoryChange = (url) =>
  //   console.log('beforeHistoryChange---', url);

  // useEffect(() => {
  //   // 注册事件
  //   router.events.on('routeChangeStart', handleRouteChangeStart);
  //   router.events.on('routeChangeComplete', handleRouteChangeComplete);
  //   router.events.on('beforeHistoryChange', handleBeforeHistoryChange);

  //   return () => {
  //     // 注销事件
  //     router.events.off('routeChangeStart', handleRouteChangeStart);
  //     router.events.off('routeChangeComplete', handleRouteChangeComplete);
  //     router.events.off('beforeHistoryChange', handleBeforeHistoryChange);
  //   };
  // }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
};

export default MyApp;
