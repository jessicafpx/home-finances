import { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import GlobalStyle from "@/components/styles/globalstyles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/services/config/queryClient";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider session={session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextAuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
