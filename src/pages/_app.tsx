// NOTE : dont change This file!
import type { AppProps } from "next/app";
import Head from "next/head";
// styles
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Doctop</title>
      </Head>
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
