import "styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import Script from "next/script";
import Meta from "components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta
        title="Will Matz | Software Engineer"
        desc="👋 Hi! I'm a software engineer building a company called Sparky. Find out more about me and my work here."
        url="https://willmatz.com"
        image="https://willmatz.com/images/meta.png"
        twitter_handle="@will_matz"
      />
      <ChakraProvider theme={theme}>
        <Component {...{ pageProps }} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
