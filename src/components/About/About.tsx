import {
	motion,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from 'motion/react';
import { useRef } from 'react';
import { variants } from '../../assets/animations/variants';
import styles from './About.module.scss';

const About = () => {
	const ref = useRef<HTMLElement | null>(null);
	const isInView = useInView(ref, { once: true });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['-1', '0'],
	});

	const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
	const transformValue = useTransform(headerSpring, [0, 1], ['80px', '0px']);

	return (
		<motion.section
			className={styles.aboutMe}
			variants={variants.containerVariants}
			animate={isInView ? 'visible' : 'hidden'}
			ref={ref}
		>
			<div className={styles.aboutMe_header}>
				<motion.h2
					style={{ translateX: transformValue }}
					variants={variants.textVariants}
					className={styles.aboutMe_left}
				>
					Read more
				</motion.h2>
				<motion.h1
					variants={variants.textVariants}
					className={styles.aboutMe_title}
				>
					about me
				</motion.h1>
			</div>
			<motion.p
				variants={variants.textVariants}
				className={styles.aboutMe_text}
			>
				Hey, I’m a Aryan, a developer who loves building things that are
				both functional and creative. I enjoy experimenting with new
				technologies and pushing myself to learn by making projects that
				challenge me.
			</motion.p>
			<motion.p
				variants={variants.textVariants}
				className={styles.aboutMe_text}
			>
				I like working on side projects, exploring design ideas. Outside
				of coding, I’m into music, games, and novels.
			</motion.p>
		</motion.section>
	);
};

export default About;
