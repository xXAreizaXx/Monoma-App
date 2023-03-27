// NextJS
import type { AppProps } from "next/app";

// Context
import { AuthProvider } from "@context/AuthContext";

// Styles
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
