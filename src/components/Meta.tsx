import Head from "next/head";
import Script from "next/script";

type Props = {
  title: string;
  desc: string;
  url: string;
  image: string;
  twitter_handle: string;
};

const Meta = (props: Props) => {
  const { title, desc, url, image, twitter_handle } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content={url} />
        {image && <meta property="og:image" content={`${image}`} />}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content={twitter_handle} />
        <meta name="twitter:creator" content={twitter_handle} />
        {image && <meta name="twitter:image" content={`${image}`} />}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-TZ2VWL72P1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-TZ2VWL72P1');
        `}
      </Script>
    </>
  );
};

export default Meta;
