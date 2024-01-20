import { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import GlobalStyle from "@/components/globalstyles";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <NextAuthProvider session={session}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
