import {
	motion,
	useScroll,
	useMotionValueEvent,
	useAnimation,
	useTransform,
	useSpring,
} from 'motion/react';
import React from 'react';
import styles from './Header.module.scss';
import { variants } from '../../assets/animations/variants';
import NavLink from '../Navlink/Navlink';

export const Header = () => {
	const { scrollY } = useScroll();
	const scrollYRange = [0, 100];
	const scaleSpring = useSpring(scrollY, variants.springPhysics);
	const scale = useTransform(scaleSpring, scrollYRange, [0, 1]);

	const controls = useAnimation();
	const delta = React.useRef(0);
	const lastScrollY = React.useRef(0);

	useMotionValueEvent(scrollY, 'change', (val: number) => {
		const diff = Math.abs(val - lastScrollY.current);
		delta.current =
			val >= lastScrollY.current
				? Math.min(delta.current + diff, 10)
				: Math.max(delta.current - diff, -10);

		if (val < 150) controls.start('top');
		else if (delta.current === 10 && val > 150) controls.start('hidden');
		else if (delta.current === -10 || val < 150) controls.start('scrolled');

		lastScrollY.current = val;
	});

	const reloadPage = () => window.location.reload();

	return (
		<motion.header
			className={styles.header}
			initial="visible"
			animate={controls}
			variants={variants.headerVariants}
		>
			<motion.div
				className={styles.header_border}
				style={{ scaleX: scale }}
			/>
			<p className={styles.header_logo} onClick={reloadPage}>
				Aryan
			</p>

			<nav>
				<ul className={styles.nav_links}>
					<NavLink title="home" scroll={0} />
					<NavLink title="projects" scroll={900} />
					<NavLink title="about me" scroll={7000} />
				</ul>
			</nav>
		</motion.header>
	);
};
