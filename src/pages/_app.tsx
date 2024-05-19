import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/fonts";
import { theme } from "../theme";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta
        title="Will Matz | Founder of Superfan"
        desc="I'm building Superfan to connect music fans with their favorite artists."
        url="https://willmatz.com"
        image="https://willmatz.com/images/meta.png"
        twitter_handle="@will_matz"
      />
      <ChakraProvider theme={theme}>
        <Component {...{ pageProps }} />
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
