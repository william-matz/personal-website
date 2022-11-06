import {
  Box,
  Button,
  Container,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GithubIcon } from "components/icons/Github";
import { LinkedInIcon } from "components/icons/LinkedIn";
import { TwitterIcon } from "components/icons/Twitter";
import { ProjectCard } from "components/ProjectCard";
import { ProjectIds, projects } from "fixtures/projects";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Container maxW={"8xl"} mt={4} pb={20}>
        <Stack
          direction={["column", "column", "row", "row"]}
          spacing={4}
          w="full"
        >
          <Stack
            flex={1}
            h="500px"
            borderRadius={20}
            px={8}
            py={6}
            background="#F2E8CF"
            justifyContent="space-between"
            spacing={14}
          >
            <Box>
              <Text
                maxW={"500px"}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight={600}
                lineHeight={"130%"}
              >
                Hey, I'm Will. I build apps and websites.
              </Text>
              <Text
                mt={4}
                maxW={"500px"}
                fontSize={{ base: "md", sm: "lg", md: "lg" }}
                fontWeight={400}
              >
                I do my best work solo and on small teams. I live in Columbus,
                Ohio and am building Sparky.
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
            borderRadius={20}
            backgroundColor="red"
            maxH="500px"
            src="/images/headshot.png"
            alt="Headshot"
            objectFit="cover"
          ></Box>
        </Stack>
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
      </Container>
    </>
  );
}
