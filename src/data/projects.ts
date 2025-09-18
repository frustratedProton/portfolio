export interface ProjectData {
	title: string;
	description: string;
	website: string;
	img: string;
	alt: string;
	tags: string[];
	uneven?: boolean;
}

export const projects: ProjectData[] = [
	{
		title: 'Minish',
		description: 'A lightweight Unix-like shell implemented in C++...',
		website: 'https://github.com/frustratedProton/minish',
		img: '/portfolio/project/minish.png', // Updated path
		alt: 'Minish shell screenshot',
		tags: ['C++', 'Shell', 'GNU Readline'],
	},
	{
		title: 'Lunar Store',
		description: 'A full-stack file management app...',
		website: 'https://github.com/frustratedProton/lunar-store',
		img: '/portfolio/project/lunar-store.png', // Updated path
		alt: 'Lunar Store app screenshot',
		tags: [
			'React',
			'Node.js',
			'Express',
			'PostgreSQL',
			'Prisma',
			'Supabase',
			'Passport.js',
		],
		uneven: true,
	},
	{
		title: 'Gunpla Inventory App',
		description: 'Web app for managing Gunpla models...',
		website: 'https://github.com/frustratedProton/gunpla-inventory',
		img: '/portfolio/project/gunpla-inventory.png', // Updated path
		alt: 'Gunpla Inventory app screenshot',
		tags: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
	},
	{
		title: 'Shopping Cart Web App',
		description: 'Shopping cart application...',
		website: 'https://github.com/frustratedProton/styx-shopping-cart',
		img: '/portfolio/project/shopping-cart.png', // Updated path
		alt: 'Shopping cart app screenshot',
		tags: ['React', 'Context API', 'React Router', 'FakeStoreAPI'],
		uneven: true,
	},
];
