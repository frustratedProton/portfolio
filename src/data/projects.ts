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
		description:
			'A lightweight Unix-like shell implemented in C++ with built-in commands (cd, pwd, echo, exit, type, history), variable expansion, tab completion, pipelines, and redirection. Integrated with GNU Readline for history and proper quoting/escape handling.',
		website: 'https://github.com/frustratedProton/minish',
		img: '/project/minish.png',
		alt: 'Minish shell screenshot',
		tags: ['C++', 'Shell', 'GNU Readline'],
	},
	{
		title: 'Lunar Store',
		description:
			'A full-stack file management app with React frontend, Express backend, Supabase storage, and PostgreSQL via Prisma. Features file uploads/downloads, image/PDF previews, and authentication with Passport.js.',
		website: 'https://github.com/frustratedProton/lunar-store',
		img: '/project/lunar-store.png',
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
		description:
			'Web app for managing Gunpla models and categories. Supports CRUD operations for categories and items, dynamic views with EJS, and PostgreSQL persistence.',
		website: 'https://github.com/frustratedProton/gunpla-inventory',
		img: '/project/gunpla-inventory.png',
		alt: 'Gunpla Inventory app screenshot',
		tags: ['Node.js', 'Express', 'PostgreSQL', 'EJS'],
	},
	{
		title: 'Shopping Cart Web App',
		description:
			'Shopping cart application built for the Styx Assignment. Uses React with hooks (useState, useEffect, useContext), React Router for navigation, and integrates FakeStoreAPI for products.',
		website: 'https://github.com/frustratedProton/styx-shopping-cart',
		img: '/project/shopping-cart.png',
		alt: 'Shopping cart app screenshot',
		tags: ['React', 'Context API', 'React Router', 'FakeStoreAPI'],
		uneven: true,
	},
];
