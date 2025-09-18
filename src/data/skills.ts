import {
	FaReact,
	FaNodeJs,
	FaDocker,
	FaGitAlt,
	FaHtml5,
	FaCss3Alt,
} from 'react-icons/fa';
import {
	SiTypescript,
	SiTailwindcss,
	SiBootstrap,
	SiExpress,
	SiPostgresql,
	SiPrisma,
	SiEjs,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface Skill {
	name: string;
	icon: IconType;
}

export const skills: Skill[] = [
	{ name: 'React', icon: FaReact },
	{ name: 'Node.js', icon: FaNodeJs },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'HTML5', icon: FaHtml5 },
	{ name: 'CSS3', icon: FaCss3Alt },
	{ name: 'Tailwind', icon: SiTailwindcss },
	{ name: 'Bootstrap', icon: SiBootstrap },
	{ name: 'Express', icon: SiExpress },
	{ name: 'Docker', icon: FaDocker },
	{ name: 'Git', icon: FaGitAlt },
	{ name: 'PostgreSQL', icon: SiPostgresql },
	{ name: 'Prisma ORM', icon: SiPrisma },
	{ name: 'EJS', icon: SiEjs },
];
