import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/fonts";
import { theme } from "../theme";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta
        title="Will Matz | Software Engineer"
        desc="👋 Hi! Find out more about me and the software I build here."
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
