import { motion } from 'motion/react';
import styles from './Link.module.scss';

interface LinkProps {
	href: string;
	name: string;
	label: string;
	theme?: 'small' | 'medium' | 'large';
}

export const Link = ({ href, name, label, theme = 'small' }: LinkProps) => {
	const style =
		theme === 'large'
			? styles.link_large
			: theme === 'medium'
			? styles.link_medium
			: styles.link;

	return (
		<motion.a
			className={style}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			whileHover={{ scale: 1.05, opacity: 0.9 }}
			whileTap={{ scale: 0.95 }}
		>
			{name}
		</motion.a>
	);
};
