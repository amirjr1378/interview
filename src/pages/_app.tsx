// NOTE : dont change This file!
import type { AppProps } from "next/app";
import Head from "next/head";
import Main from "../layout/Main";
// styles
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Doctop</title>
      </Head>

      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
export default MyApp;
