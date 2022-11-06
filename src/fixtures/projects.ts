import { StaticImageData } from 'next/image';
import superfanImage from '../../public/images/projects/superfan.jpg';
import sparkyImage from '../../public/images/projects/sparky.png';

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  textColor: string;
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
      description: "The social music app",
      image: superfanImage,
      url: "https://superfan.social",
      textColor: "#ffffff",
    },
  ],
  [
    ProjectIds.Sparky,
    {
      id: 2,
      slug: "sparky",
      title: "Sparky",
      description: "Build an API in 5 minutes",
      image: sparkyImage,
      url: "https://sparky.codes",
      textColor: "#ffffff",
    },
  ],
]);
