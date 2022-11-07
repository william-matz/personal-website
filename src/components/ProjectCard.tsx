import {
  Box,
  IconButton,
  Stack,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { Project } from "../fixtures/projects";
import Link from "next/link";
import { ArrowUpRightIcon } from "./icons/ArrowUpRight";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { title, subtitle, image, slug, textColor } = project;
  const [isMobile] = useMediaQuery("(max-width: 400px)");

  return (
    <Link href={`/projects/${slug}`}>
      <Box w="full" borderRadius={20} position="relative">
        <Stack
          w="full"
          flexDirection="row"
          justifyContent="space-between"
          align="center"
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
            <Text
              color={textColor}
              opacity={0.8}
              lineHeight={"0%"}
              hidden={isMobile}
            >
              {subtitle}
            </Text>
          </Stack>
          <IconButton
            aria-label="See project"
            icon={<ArrowUpRightIcon color={"blackAlpha.900"} />}
            size={isMobile ? "md" : "lg"}
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
