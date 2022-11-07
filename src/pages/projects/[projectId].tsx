import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProjectIds, projects } from "../../fixtures/projects";

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  // If project id isn't in enum projectids
  if (
    !projectId ||
    typeof projectId !== "string" ||
    !Object.values(ProjectIds).includes(projectId as ProjectIds)
  ) {
    return (
      <VStack w="full" mt={20} pb={4} textAlign="center" spacing={6}>
        <Heading>Project not found</Heading>
        <Button
          rounded="full"
          color="white"
          bg="black"
          _hover={{ bg: "blackAlpha.800" }}
          onClick={() => router.replace("/")}
        >
          Back home
        </Button>
      </VStack>
    );
  }

  const project = projects.get(projectId as ProjectIds);

  return (
    // Full page gradient background
    <Box h="100vh" w="full" bgGradient={project.gradient}>
      <Container maxW="container.lg" h="full" py={20}>
        {/* Home button */}
        <Button
          variant={"unstyled"}
          leftIcon={<ArrowBackIcon />}
          color={project.textColor}
          onClick={() => router.replace("/")}
        >
          Back
        </Button>

        <Stack
          w="full"
          mt={8}
          direction={["column-reverse", "column-reverse", "row", "row"]}
          justifyContent="space-between"
          spacing={6}
        >
          <VStack w="full" align="start">
            <Heading color={project.textColor} size="2xl">
              {project.title}
            </Heading>
            <Text
              color={project.textColor}
              fontSize={[18, 20, 24, 26]}
              lineHeight={"180%"}
            >
              {project.subtitle}
            </Text>
            {/* Project links */}
            <Stack mt={4} direction="row" spacing={2}>
              {project.links.map((link) => (
                <Button
                  key={link.url}
                  rounded="full"
                  color="white"
                  rightIcon={<ArrowForwardIcon />}
                  bg={"rgba(255, 255, 255, 0.2)"}
                  _hover={{ bg: "blackAlpha.800" }}
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.title}
                </Button>
              ))}
            </Stack>
          </VStack>
          <Image
            src={project.icon.src}
            alt={project.title}
            w={140}
            h={140}
            borderRadius={20}
          />
        </Stack>

        <Text
          color={project.textColor}
          mt={8}
          fontSize={20}
          opacity={0.8}
          fontWeight={400}
        >
          {project.description}
        </Text>
      </Container>
    </Box>
  );
}
