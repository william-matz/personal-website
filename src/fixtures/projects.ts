import { StaticImageData } from 'next/image';
// Superfan
import superfanImage from '../../public/images/projects/superfan.jpg';
import superfanIcon from '../../public/images/projects/superfan-icon.png';
// Sparky
import sparkyImage from '../../public/images/projects/sparky.png';
import sparkyIcon from '../../public/images/projects/sparky-icon.png';
// CaringWire
import caringwireImage from '../../public/images/projects/caringwire.png';
import caringwireIcon from '../../public/images/projects/caringwire-icon.png';
// Shindig
import shindigImage from '../../public/images/projects/shindig.png';
import shindigIcon from '../../public/images/projects/shindig-icon.png';
// Alchemy
import alchemyImage from '../../public/images/projects/alchemy.png';
import alchemyIcon from '../../public/images/projects/alchemy-icon.png';

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
  primaryColor: string;
  textColor: string;
  links?: {
    title: string;
    url: string;
  }[]
  technologies?: string[];
  contributions?: string;
};

export enum ProjectIds {
  Superfan = "superfan",
  Sparky = "sparky",
  CaringWire = "caringwire",
  Shindig = "shindig",
  Alchemy = "alchemy",
}

export const projects = new Map<ProjectIds, Project>([
  [
    ProjectIds.Alchemy,
    {
      id: 3,
      slug: "alchemy",
      title: "Alchemy",
      subtitle: "A homebrewing assistant",
      description: "Alchemy is a homebrewing assistant that helps you brew the perfect beer. It's powered by GPT4, and I built it in a weekend in March 2023.",
      image: alchemyImage,
      icon: alchemyIcon,
      url: "https://alchemybrew.co",
      gradient: "linear(to-b, #2cbdbe, #388786)",
      primaryColor: "#ffe355",
      textColor: "#ffffff",
      links: [{
        title: "Website",
        url: "https://alchemybrew.co",
      }],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Chakra UI",
        "Supabase",
        "GPT-4",
        "Websockets",
      ],
      contributions: "I built the whole thing, but had some design help from my wonderful friends.",
    },
  ],
  [
    ProjectIds.Superfan,
    {
      id: 0,
      slug: "superfan",
      title: "Superfan",
      subtitle: "The social music app",
      description: "Superfan is an idea that my friends and I have been talking about forever. We love sharing our music with each other, but never truly understood what everyone was listening to. Superfan lets us check in every week to see everyones top songs, album binges, and new discoveries. I built the app over a long weekend, but worked with my friends for weeks to get it right.",
      image: superfanImage,
      icon: superfanIcon,
      url: "https://superfan.social",
      gradient: "linear(to-b, #2c2a3a, #473e51)",
      primaryColor: "#fd663f",
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
        "NodeJS",
        "OpenAI GPT-3",
        "Tableau",
      ],
      contributions: "I built this solo, but had design help from @kai_mckinney and product ideas from my wonderful friends.",
    },
  ],
  [
    ProjectIds.Sparky,
    {
      id: 1,
      slug: "sparky",
      title: "Sparky",
      subtitle: "Build an API in 5 minutes",
      description: "Sparky is a no-code API builder. Connect your existing databases and configure your API in minutes. We integrate with PostgreSQL, MongoDB, Auth0 and more. Behind the scenes, Sparky deploys a serverless API that connects to your database and runs the logic you configure.",
      image: sparkyImage,
      icon: sparkyIcon,
      url: "https://sparky.codes",
      gradient: "linear(to-b, #9559F4 -30%, #4A12EC)",
      primaryColor: "#652aee",
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
        "Stripe",
      ],
      contributions: "I built the first version of Sparky solo over the course of a few weeks.",
    },
  ],
  [
    ProjectIds.CaringWire,
    {
      id: 2,
      slug: "caringwire",
      title: "CaringWire",
      subtitle: "The digital caregiver assistant",
      description: "CaringWire teaches families how to resolve common issues and access local resources, while arming clinical care teams with helpful data that would not otherwise be collected. ",
      image: caringwireImage,
      icon: caringwireIcon,
      url: "https://caringwire.com",
      gradient: "linear(to-b, #6587FF, #1557BB)",
      primaryColor: "#008ec5",
      textColor: "#ffffff",
      links: [
        {
          title: "Website",
          url: "https://caringwire.com",
        },
        {
          title: "App Store",
          url: "https://apps.apple.com/us/app/caringwire/id1571494318",
        },
        {
          title: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.caringwire.app",
        }
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "React Native",
        "Expo",
        "MongoDB",
        "NodeJS",
        "Serverless Framework",
        "AWS",
        "Twilio",
        "SendGrid",
        "Auth0",
        "Azure DevOps",
        "Webflow",
        "...more"
      ],
      contributions: "I was the lead engineer at CaringWire for 2 years. I built and maintained huge portions of the mobile app, web app, databases, and APIs.",
    },
  ],
  [
    ProjectIds.Shindig,
    {
      id: 3,
      slug: "shindig",
      title: "Shindig",
      subtitle: "Event invites on Snapchat",
      description: "Launched on the App Store in January 2019. Shindig was one of the first apps to use the Snapchat SDK. We gave our users a way to put event invitations on Snapchat Stickers, then let their friends swipe up to RSVP in Snapchat. Ultimately, we weren't in love with the product and shut it down.",
      image: shindigImage,
      icon: shindigIcon,
      url: "",
      gradient: "linear(to-b, #2cbdbe, #388786)",
      primaryColor: "#2cbdbe",
      textColor: "#ffffff",
      links: [{
        title: "Wayback",
        url: "https://web.archive.org/web/20190909063707/https://shindigapp.io/",
      }],
      technologies: [
        "Flutter",
        "Dart",
        "Snapchat SDK",
        "Firebase",
      ],
      contributions: "I built this with a team of 4 over the course of a semester. This is the first app I ever worked on so I spent as much time learning as contributing.",
    },
  ],
]);
