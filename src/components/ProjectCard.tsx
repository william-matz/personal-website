import { Box, IconButton, Stack, Text, Image } from "@chakra-ui/react";
import { Project } from "../fixtures/projects";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons/ArrowUpRight";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, image, slug, textColor, url } = project;

  return (
    <Link href={url}>
      <Box w="full" borderRadius={20} position="relative">
        <Stack
          w="full"
          flexDirection="row"
          justifyContent="space-between"
          px={8}
          py={6}
          position="absolute"
          top={0}
          left={0}
          zIndex={1}
        >
          <Stack>
            <Text color={textColor} fontSize={20} fontWeight={600}>
              {title}
            </Text>
            <Text color={textColor} opacity={0.8} lineHeight={"100%"}>
              {description}
            </Text>
          </Stack>
          <IconButton
            aria-label="See project"
            icon={<ArrowUpRightIcon color={"blackAlpha.900"} />}
            size="lg"
            colorScheme={"whiteAlpha"}
            bg="white"
            isRound
          />
        </Stack>
        <Image src={image.src} borderRadius={20} alt={`project - ${title}`} />
      </Box>
    </Link>
  );
};
