import { StaticImageData } from 'next/image';
import superfanImage from '../../public/images/projects/superfan.jpg';
import superfanIcon from '../../public/images/projects/superfan-icon.png';
import sparkyImage from '../../public/images/projects/sparky.png';
import sparkyIcon from '../../public/images/projects/sparky-icon.png';

export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  icon: StaticImageData;
  url: string;
  gradient: string;
  textColor: string;
  links?: {
    title: string;
    url: string;
  }[]
  technologies?: string[];
  team?: string;
};

export enum ProjectIds {
  Superfan = "superfan",
  Sparky = "sparky",
}

export const projects = new Map<ProjectIds, Project>([
  [
    ProjectIds.Superfan,
    {
      id: 1,
      slug: "superfan",
      title: "Superfan",
      subtitle: "The social music app",
      description: "Superfan is an idea that my friends and I have been talking about forever. We love sharing our music with each other, but never truly understood what everyone was listening to. Superfan lets us check in every week to see everyones top songs, album binges, and new discoveries. I built the app over a long weekend, but worked with my friends for weeks to get it right.",
      image: superfanImage,
      icon: superfanIcon,
      url: "https://superfan.social",
      gradient: "linear(to-b, #2c2a3a, #473e51)",
      textColor: "#ffffff",
      links: [
        {
          title: "Website",
          url: "https://superfan.social",
        }
      ],
      technologies: [
        "TypeScript",
        "React Native",
        "Expo",
        "Next.js",
        "Chakra UI",
        "Supabase",
        "PostgreSQL",
        "Spotify API",
        "NodeJS"
      ],
      team: "I built this solo, but had design help from @kai_mckinney and product ideas from my wonderful friends.",
    },
  ],
  [
    ProjectIds.Sparky,
    {
      id: 2,
      slug: "sparky",
      title: "Sparky",
      subtitle: "Build an API in 5 minutes",
      description: "Sparky is a no-code API builder. Connect your existing databases and configure your API in minutes. We integrate with PostgreSQL, MongoDB, Auth0 and more. Behind the scenes, Sparky deploys a serverless API that connects to your database and runs the logic you configure.",
      image: sparkyImage,
      icon: sparkyIcon,
      url: "https://sparky.codes",
      gradient: "linear(to-b, #9559F4 -30%, #4A12EC)",
      textColor: "#ffffff",
      links: [
        {
          title: "Website",
          url: "https://sparky.codes",
        },
        {
          title: "Docs",
          url: "https://docs.sparky.codes",
        }
      ],
      technologies: [
        "AWS Lambda",
        "AWS API Gateway",
        "AWS EventBridge",
        "AWS CloudFormation",
        "AWS ECS",
        "AWS ECR",
        "AWS Route53",
        "TypeScript",
        "React",
        "Next.js",
        "Chakra UI",
        "MongoDB",
        "Docusaurus",
        "Auth0",
        "PostgreSQL",
        "Serverless Framework",
        "NodeJS",
        "Docker",
        "Pulumi",
      ],
      team: "I built Sparky solo over the course of a few months.",
    },
  ],
]);
