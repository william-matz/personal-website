module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      // I link to /connect from QR codes & NFC tags, so I control where it goes here, since I didn't build a separate page
      {
        source: "/connect",
        destination: "/",
        permanent: false,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
