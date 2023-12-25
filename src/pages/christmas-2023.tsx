import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  Image,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaApple, FaSpotify } from "react-icons/fa";

const christmasPalette = {
  background: "#FFF4E6", // A warm off-white for a welcoming background ambiance
  cardBg: "#D1E2C4", // A muted Christmas green for card backgrounds
  appleIcon: "#3C6E71", // A rich maroon for the Apple Music icon, evoking the color of red wine
  spotifyIcon: "#3C6E71", // A deeper teal for the Spotify icon, reminiscent of dark evergreen foliage
  headingText: "#2A2D34", // A deep charcoal blue for text headings, adding contrast
  bodyText: "#404040", // A classic dark gray for body text, enhancing legibility
};

const playlists = [
  {
    name: "songs for ben",
    apple:
      "https://music.apple.com/us/playlist/songs-for-ben/pl.u-KVXBkABsmoq8Jm",
    spotify:
      "https://open.spotify.com/playlist/52nFBag7MHe4ZzeE4msnj9?si=A4ZOUMVLSIeks5aII9mlBw&pi=u-cYinAZM1Q9as",
  },
  {
    name: "songs for alyssa",
    apple:
      "https://music.apple.com/us/playlist/songs-for-alyssa/pl.u-8aAVZ5eSa798Aa",
    spotify:
      "https://open.spotify.com/playlist/6bCJXyaEtTQwMsqzVZBHnK?si=AoCuX5FPRQyZrn5NQ-C1cQ&pi=u-4fkfyQBAQvGW",
  },
  {
    name: "songs for mom",
    apple:
      "https://music.apple.com/us/playlist/songs-for-mom/pl.u-WabZv4jUvpmb7v",
    spotify:
      "https://open.spotify.com/playlist/52nFBag7MHe4ZzeE4msnj9?si=A4ZOUMVLSIeks5aII9mlBw&pi=u-cYinAZM1Q9as",
  },
  {
    name: "songs for josh",
    apple:
      "https://music.apple.com/us/playlist/songs-for-josh/pl.u-oZylD0YC0v6z20",
    spotify:
      "https://open.spotify.com/playlist/7um4Xg0uSrgLCxBocpMnwh?si=gQC1s0ZCTMSRyFLDbgu1xQ&pi=u-6mjppe6QQd6Q",
  },
  {
    name: "songs for dad",
    apple:
      "https://music.apple.com/us/playlist/songs-for-dad/pl.u-NpXmzeaTpjBDqp",
    spotify:
      "https://open.spotify.com/playlist/5SQAcu4hWaHjqxrdUJb1B7?si=fAnkE41nT4W6pxquZva-VA&pi=u-_IowEbc5TJ-F",
  },
];

/**
 * A card with a title and links to AM and Spotify
 */
const PlaylistCard = ({ name, apple, spotify }) => {
  return (
    <Box
      borderRadius="lg"
      p="6"
      bg={christmasPalette.cardBg}
      justifyContent="space-between"
    >
      <Heading
        fontSize="2xl"
        fontWeight="bold"
        lineHeight="short"
        mb="3"
        color={christmasPalette.headingText}
      >
        {name}
      </Heading>
      <Stack direction="row" spacing="4">
        {apple && (
          <Link href={apple} isExternal>
            <Icon as={FaApple} w={8} h={8} color={christmasPalette.appleIcon} />
          </Link>
        )}
        {spotify && (
          <Link href={spotify} isExternal>
            <Icon
              as={FaSpotify}
              w={8}
              h={8}
              color={christmasPalette.spotifyIcon}
            />
          </Link>
        )}
      </Stack>
    </Box>
  );
};

export default function Christmas2023() {
  return (
    <Box bg={christmasPalette.background}>
      <Head>
        <title>Matz Family Christmas 2023</title>
      </Head>
      <Container maxW={"8xl"} mt={4} pb={4}>
        <Stack
          direction={["column", "column", "row", "row"]}
          spacing={4}
          w="full"
        >
          <Stack
            flex={1}
            h="500px"
            borderRadius={12}
            px={8}
            py={6}
            bg={christmasPalette.cardBg}
            justifyContent="space-between"
            spacing={14}
          >
            <Box>
              <Heading
                maxW={"500px"}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight={600}
                lineHeight={"130%"}
                color={christmasPalette.headingText}
              >
                Matz Family Christmas 🎄🎅🏼
              </Heading>
              <Text
                mt={4}
                maxW={"500px"}
                fontSize={{ base: "md", sm: "lg", md: "lg" }}
                fontWeight={400}
                lineHeight={"130%"}
                color={christmasPalette.bodyText}
              >
                To celebrate Christmas this year, I made a playlist with some
                songs that I think each of you would like :)
              </Text>
            </Box>
          </Stack>
          <Box
            as={Image}
            borderRadius={12}
            backgroundColor="red"
            maxH="500px"
            src="/images/matz-family.jpg"
            alt="Will Matz Family"
            objectFit="cover"
          ></Box>
        </Stack>

        <Stack
          direction={["column", "column", "column", "column"]}
          spacing={4}
          w="full"
          mt={4}
        >
          {playlists.map((p) => (
            <PlaylistCard name={p.name} apple={p.apple} spotify={p.spotify} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
