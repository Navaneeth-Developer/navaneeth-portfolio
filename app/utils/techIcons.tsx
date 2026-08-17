import React from 'react';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNodedotjs, SiAngular, SiOpenjdk, SiSpringboot, 
  SiMongodb, SiPostgresql, SiMariadb, SiRedis, 
  SiApachekafka, SiPython, SiRabbitmq, SiDocker, 
  SiTailwindcss, SiExpress, SiJsonwebtokens 
} from 'react-icons/si';
import { VscGitMerge } from 'react-icons/vsc';

// Centralized icon mapping dictionary
export const TECH_ICON_MAP: Record<string, React.ReactNode> = {
  javascript: <SiJavascript className="text-yellow-400" />,
  typescript: <SiTypescript className="text-blue-400" />,
  react: <SiReact className="text-cyan-400" />,
  'next.js': <SiNextdotjs className="text-white" />,
  nextjs: <SiNextdotjs className="text-white" />,
  'node.js': <SiNodedotjs className="text-green-500" />,
  nodejs: <SiNodedotjs className="text-green-500" />,
  express: <SiExpress className="text-white" />,
  angular: <SiAngular className="text-red-500" />,
  java: <SiOpenjdk className="text-orange-500" />,
  'spring boot': <SiSpringboot className="text-green-400" />,
  springboot: <SiSpringboot className="text-green-400" />,
  mongodb: <SiMongodb className="text-green-500" />,
  postgresql: <SiPostgresql className="text-blue-400" />,
  mariadb: <SiMariadb className="text-blue-300" />,
  redis: <SiRedis className="text-red-500" />,
  kafka: <SiApachekafka className="text-white" />,
  python: <SiPython className="text-yellow-300" />,
  rabbitmq: <SiRabbitmq className="text-orange-500" />,
  docker: <SiDocker className="text-blue-500" />,
  'ci/cd pipeline': <VscGitMerge className="text-purple-400" />,
  'tailwind css': <SiTailwindcss className="text-cyan-400" />,
  tailwindcss: <SiTailwindcss className="text-cyan-400" />,
  jwt: <SiJsonwebtokens className="text-yellow-400" />,
  jsonwebtoken: <SiJsonwebtokens className="text-yellow-400" />,
};

// Reusable helper function to look up icons anywhere
export const getTechIcon = (techName: string): React.ReactNode => {
  return TECH_ICON_MAP[techName.toLowerCase()] || null;
};