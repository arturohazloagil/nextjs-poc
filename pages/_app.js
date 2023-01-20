import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
function App({ Component, pageProps }) {
  return (
    // Use at the root of our app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
export default App;