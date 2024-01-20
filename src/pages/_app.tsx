import { AppProps } from "next/app";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import "./styles/global.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
