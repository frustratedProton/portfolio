import { useEffect, useRef, useState } from 'react';
import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	useInView,
	MotionValue,
} from 'motion/react';
import styles from './Projects.module.scss';
import Project from './Project';
import { projects } from '../../data/projects';
import { variants } from '../../assets/animations/variants';

export const Projects = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const moreRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ['-0.5', '1'],
	});

	const projectsSpring = useSpring(scrollYProgress, variants.springPhysics);
	const translateValue = useTransform(
		projectsSpring,
		[0, 1],
		['15vh', '-30vh']
	) as MotionValue<string | number>;

	const [windowSize, setWindowSize] = useState<[number, number]>([
		window.innerWidth,
		window.innerHeight,
	]);

	useEffect(() => {
		const handleResize = () =>
			setWindowSize([window.innerWidth, window.innerHeight]);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const moreInView = useInView(moreRef, { once: true });

	return (
		<section className={styles.projects}>
			<motion.h2 className={styles.projects_header}>Projects</motion.h2>

			<div className={styles.projects_grid} ref={scrollRef}>
				{projects.map((p) => (
					<Project
						key={p.title}
						classes={[
							styles.project,
							p.uneven && windowSize[0] >= 680
								? styles.project_uneven
								: '',
						].join(' ')}
						translateValue={
							p.uneven && windowSize[0] >= 680
								? translateValue
								: 0
						}
						title={p.title}
						description={p.description}
						website={p.website}
						img={p.img}
						alt={p.alt}
						tags={p.tags}
					/>
				))}

				<motion.div
					ref={moreRef}
					className={`project ${styles.more_projects}`}
					variants={variants.containerVariants}
					animate={moreInView ? 'visible' : 'hidden'}
				>
					<motion.h3
						className={styles.project_largeText}
						variants={variants.textVariants}
					>
						Want to see more?
					</motion.h3>
					<motion.p
						className={styles.more_projects_text}
						variants={variants.textVariants}
					>
						You can check out my other projects on{' '}
						<a
							href="https://github.com/your-username"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
