import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { MORALIS_APP_ID, MORALIS_SERVER_URL } from "../constants";
import { MoralisProvider } from "react-moralis";
import { GuildsProvider } from "../context/useGuildsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={MORALIS_SERVER_URL || "https://vqi9uxppuwwk.usemoralis.com:2053/server"}
      appId={MORALIS_APP_ID || "WVrFHH8uIlmzZ2f4Rb23nYsAqT4MFRm1eIPaXU0A"}
    >
      {/* <GuildsProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </GuildsProvider> */}
    </MoralisProvider>
  );
}

export default MyApp;
