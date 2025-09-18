import { motion } from 'motion/react';
import styles from './Navlink.module.scss';

interface NavLinkProps {
	title: string;
	scroll: number;
}

const NavLink = ({ title, scroll }: NavLinkProps) => {
	const scrollTop = () =>
		window.scrollTo({ top: scroll, behavior: 'smooth' });

	return (
		<motion.li
			className={styles.nav_link}
			onClick={scrollTop}
			whileHover={{ scale: 1.05, opacity: 0.9 }}
			whileTap={{ scale: 0.95 }}
		>
			{title}
		</motion.li>
	);
};

export default NavLink;
