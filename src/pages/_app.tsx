import type { AppProps } from "next/app";
import "@assets/styles/main.css";
import "@assets/styles/global.scss";
import { appWithTranslation } from "next-i18next";
import CHead from "@components/CHead";
import { ApolloProvider } from "@apollo/client";
import client from "@lib/ApiClient";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@store/store";

const Noop: React.FC<any> = ({ children }) => <>{children}</>;

const MyApp = ({ Component, pageProps: { session , ...pageProps } }: AppProps) => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Provider store={store}>

        <SessionProvider session={session}>
          <Provider store={store}>
            <CHead>
              <title>{`${process.env.NEXT_PUBLIC_SITE_TITLE}`}</title>
              <meta
                name="description"
                content={process.env.NEXT_PUBLIC_SITE_DESCR}
              />
            </CHead>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </SessionProvider>
      </Provider>
    </>
  );
};

export default appWithTranslation(MyApp);
