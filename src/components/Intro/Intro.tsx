import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useAnimation,
} from 'motion/react';
import { useEffect, useRef } from 'react';
import { variants } from '../../assets/animations/variants';

import styles from './Intro.module.scss';
// import { Link } from '../Link/Link';
// import GrainyBackground from '../GrainyBackground/GrainyBackground';

interface IntroProps {
	loaded: boolean;
}

export const Intro = ({ loaded }: IntroProps) => {
	const scrollRef = useRef<HTMLElement>(null);
	const controls = useAnimation();

	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ['0.16', '1'],
	});

	const headerSpring = useSpring(scrollYProgress, {
		damping: 18,
		stiffness: 70,
	});
	const leftValue = useTransform(headerSpring, [0, 1], ['0px', '-100px']);
	const rightValue = useTransform(headerSpring, [0, 1], ['0px', '100px']);

	const leftY = useTransform(headerSpring, [0, 1], ['10px', '0px']);
	const rightY = useTransform(headerSpring, [0, 1], ['10px', '0px']);

	useEffect(() => {
		if (loaded) controls.start('visible');
	}, [controls, loaded]);

	return (
		<section className={styles.introContainer} ref={scrollRef}>
			{/* Grainy background should be behind this content */}
			<div className={styles.introBackground}>
				{/* <GrainyBackground /> */}
			</div>

			<motion.div
				className={styles.intro_header}
				variants={variants.containerVariants}
				initial="hidden"
				animate={controls}
			>
				<motion.h2
					style={{ translateX: leftValue, translateY: leftY }}
					className={styles.intro_left}
					variants={variants.textVariants}
				>
					hello, I&rsquo;m
				</motion.h2>

				<motion.h1
					className={styles.intro_title}
					variants={variants.textVariants}
				>
					Aryan Kumar Singh
				</motion.h1>

				<motion.h2
					style={{ translateX: rightValue, translateY: rightY }}
					variants={variants.textVariants}
				>
					Software developer
				</motion.h2>
			</motion.div>
{/* 
			<motion.p
				className={styles.intro_info}
				initial="hidden"
				animate={controls}
				variants={variants.delayedVariants}
				style={{ opacity: 0 }}
			>
				I&rsquo;m a passionate Software Engineer from India. You can
				check out my{' '}
				<Link
					href="https://github.com/frustratedProton"
					name="github"
					label="Click here to view my github profile"
				/>{' '}
				or scroll down to see my projects.
			</motion.p> */}
		</section>
	);
};

export default Intro;
