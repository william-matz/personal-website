import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Stack,
  Wrap,
  Tag,
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
    <>
      <Box h="4vh" w="full" bg={project.primaryColor} />
      <Box minH="96vh" w="full" bgGradient={"linear(to-b, #2c2a3a, #473e51)"}>
        <Container maxW="container.lg" h="full" py={10}>
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
              <Wrap
                mt={4}
                direction="row"
                spacing={2}
                hidden={!project.links || !project.links.length}
              >
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
              </Wrap>
            </VStack>
            <Image
              src={project.icon.src}
              alt={project.title}
              w={140}
              h={140}
              borderRadius={12}
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

          <Stack
            mt={10}
            direction={["column", "column", "row", "row"]}
            spacing={4}
            w="full"
          >
            <Box
              w={["100%", "100%", "50%", "50%"]}
              bg={"rgba(255, 255, 255, 0.1)"}
              px={8}
              py={6}
              borderRadius={12}
              hidden={!project.contributions}
            >
              <Heading color={project.textColor} size="md">
                Contributions
              </Heading>
              <Text color={project.textColor} mt={2}>
                {project.contributions}
              </Text>
            </Box>
            <Box
              w={["100%", "100%", "50%", "50%"]}
              bg={"rgba(255, 255, 255, 0.1)"}
              px={8}
              py={6}
              borderRadius={12}
              hidden={!project.technologies || !project.technologies.length}
            >
              <Heading color={project.textColor} size="md">
                Tech
              </Heading>
              <Wrap mt={2} spacing={2}>
                {project?.technologies?.map((tech, index) => (
                  <Tag rounded={"full"} key={index}>
                    {tech}
                  </Tag>
                ))}
              </Wrap>
            </Box>
          </Stack>

          {project.media && project.media.length > 0 && (
            <Stack my={4}>
              <Box
                w={["100%", "100%", "100%", "100%"]}
                bg={"rgba(255, 255, 255, 0.1)"}
                px={8}
                py={6}
                borderRadius={12}
              >
                <Heading color={project.textColor} size="md">
                  Media
                </Heading>
                <VStack align="start" spacing={2} mt={2} width={"100%"}>
                  {project.media.map((media, index) => (
                    <Button
                      key={index}
                      variant="link"
                      color={project.textColor}
                      rightIcon={<ExternalLinkIcon />}
                      onClick={() => window.open(media.url, "_blank")}
                      maxWidth={"100%"}
                      textOverflow={"ellipsis"}
                      overflow={"hidden"}
                      whiteSpace={"nowrap"}
                      textAlign={"left"}
                      noOfLines={1}
                    >
                      {media.title}
                    </Button>
                  ))}
                </VStack>
              </Box>
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
}
