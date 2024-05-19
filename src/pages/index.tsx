import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GithubIcon } from "../components/icons/Github";
import { LinkedInIcon } from "../components/icons/LinkedIn";
import { TwitterIcon } from "../components/icons/Twitter";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectIds, projects } from "../fixtures/projects";
import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Will Matz",
              givenName: "Will",
              familyName: "Matz",
              url: "https://willmatz.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Columbus",
                addressRegion: "Ohio",
                addressCountry: "United States",
              },
              sameAs: [
                "https://www.linkedin.com/in/matz-william",
                "https://www.twitter.com/will_matz",
                "https://github.com/william-matz",
                "https://www.crunchbase.com/person/will-matz-88ae",
              ],
              jobTitle: "Founder & Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Superfan",
                url: "https://superfan.social",
                founder: "Will Matz",
                sameAs: [
                  "https://apps.apple.com/us/app/superfan-the-social-music-app/id6443763704",
                  "https://twitter.com/superfan_social",
                  "https://www.linkedin.com/company/superfansocial",
                ],
              },
              image: "https://willmatz.com/images/headshot.jpeg",
              gender: "male",
              nationality: "American",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "The Ohio State University",
                member: [
                  {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Degree",
                    educationalLevel: "Bachelor's degree",
                    dateCreated: "2019-12",
                    recognizedBy: {
                      "@type": "EducationalOrganization",
                      name: "The Ohio State University",
                    },
                  },
                ],
              },
            }),
          }}
        />
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
            background="#F2E8CF"
            justifyContent="space-between"
            spacing={14}
          >
            <Box>
              <Heading
                maxW={"500px"}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight={700}
                lineHeight={"130%"}
              >
                Hey, I'm Will Matz.
              </Heading>
              <Text
                mt={4}
                maxW={"500px"}
                fontSize={{ base: "md", sm: "lg", md: "lg" }}
                fontWeight={400}
              >
                I'm building Superfan to connect music fans with their favorite
                artists. I'm based in Columbus, Ohio.
              </Text>
            </Box>
            <Stack direction="row">
              <Link href={"https://twitter.com/will_matz"}>
                <Button
                  size="lg"
                  bg="black"
                  color="white"
                  rounded={"full"}
                  _hover={{ bg: "blackAlpha.800", textDecoration: "none" }}
                >
                  Contact
                </Button>
              </Link>
              <Link href={"https://twitter.com/will_matz"}>
                <IconButton
                  aria-label="Twitter"
                  icon={<TwitterIcon color={"blackAlpha.900"} />}
                  size="lg"
                  colorScheme={"whiteAlpha"}
                  bg="white"
                  isRound
                />
              </Link>
              <Link href={"https://www.linkedin.com/in/matz-william/"}>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<LinkedInIcon color={"blackAlpha.900"} />}
                  size="lg"
                  colorScheme={"whiteAlpha"}
                  bg="white"
                  isRound
                />
              </Link>
              <Link href={"https://github.com/william-matz"}>
                <IconButton
                  aria-label="GitHub"
                  icon={<GithubIcon color={"blackAlpha.900"} />}
                  size="lg"
                  colorScheme={"whiteAlpha"}
                  bg="white"
                  isRound
                />
              </Link>
            </Stack>
          </Stack>
          <Box
            as={Image}
            borderRadius={12}
            backgroundColor="red"
            maxH="500px"
            src="/images/headshot.jpeg"
            alt="Headshot"
            objectFit="cover"
          ></Box>
        </Stack>

        {/* First row of projects */}
        <Stack
          mt={4}
          direction={["column", "column", "column", "row"]}
          spacing={4}
          w="full"
        >
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.Superfan)} />
          </Box>
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.Sparky)} />
          </Box>
        </Stack>

        {/* Second row of projects */}
        <Stack
          mt={4}
          direction={["column", "column", "column", "row"]}
          spacing={4}
          w="full"
        >
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.CaringWire)} />
          </Box>
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.Alchemy)} />
          </Box>
        </Stack>

        {/* Third row of projects */}
        <Stack
          mt={4}
          direction={["column", "column", "column", "row"]}
          spacing={4}
          w="full"
        >
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.Helm)} />
          </Box>
          <Box maxW={["100%", "100%", "100%", "50%"]}>
            <ProjectCard project={projects.get(ProjectIds.Shindig)} />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
