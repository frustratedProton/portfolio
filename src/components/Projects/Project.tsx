import { useRef } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { useInView, motion, MotionValue } from 'motion/react';
import styles from './Projects.module.scss';
import { Link } from '../Link/Link';
import { variants } from '../../assets/animations/variants';

interface ProjectProps {
	classes?: string;
	img: string;
	alt: string;
	title: string;
	description: string;
	website: string;
	tags: string[];
	translateValue?: string | number | MotionValue<string | number>;
}

const Project = ({
	classes,
	img,
	alt,
	title,
	description,
	website,
	tags,
	translateValue,
}: ProjectProps) => {
	const {
		primaryX,
		primaryY,
		secondaryX,
		secondaryY,
		onMouseMoveHandler,
		onMouseLeaveHandler,
	} = useParallax();

	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: '-150px' });

	return (
		<motion.article
			ref={ref}
			className={`${styles.project} ${classes || ''}`}
			animate={isInView ? 'visible' : 'hidden'}
			variants={variants.containerVariants}
			style={{ translateY: translateValue }}
		>
			<motion.img
				onMouseMove={onMouseMoveHandler}
				onMouseLeave={onMouseLeaveHandler}
				whileHover={{ scale: 1.05 }}
				style={{ x: primaryX, y: primaryY }}
				className={styles.project_image}
				variants={variants.imageVariants}
				src={img}
				alt={alt}
				width={800}
				height={450}
			/>

			<motion.div
				style={{ x: secondaryX, y: secondaryY }}
				variants={variants.textVariants}
			>
				<h3 className={styles.project_title}>{title}</h3>
				<ul className={styles.project_tags}>
					{tags.map((tag) => (
						<li key={tag} className={styles.project_tag}>
							{tag}
						</li>
					))}
				</ul>
			</motion.div>

			<motion.p
				className={styles.project_description}
				variants={variants.textVariants}
			>
				{description}
			</motion.p>

			<motion.div variants={variants.textVariants}>
				<Link
					name="View project"
					theme="medium"
					href={website}
					label={`Check out the ${title} website`}
				/>
			</motion.div>
		</motion.article>
	);
};

export default Project;
