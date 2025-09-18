import {
	motion,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from 'motion/react';
import { useRef } from 'react';
import styles from './Contact.module.scss';
import { Link } from '../Link/Link';
import { variants } from '../../assets/animations/variants';

const Contact = () => {
	const ref = useRef<HTMLElement | null>(null);
	const isInView = useInView(ref, { once: true });
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['-3', '-2.4'],
	});
	const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
	const transformValue = useTransform(headerSpring, [0, 1], ['-80px', '0px']);

	return (
		<motion.section
			className={styles.contact}
			variants={variants.containerVariants}
			animate={isInView ? 'visible' : 'hidden'}
			ref={ref}
		>
			<div className={styles.contact_header}>
				<motion.h1
					variants={variants.textVariants}
					className={styles.contact_title}
				>
					Contact me
				</motion.h1>
				<motion.h2
					style={{ translateX: transformValue }}
					variants={variants.textVariants}
					className={styles.contact_right}
				>
					Let’s get in touch!
				</motion.h2>
			</div>
			<motion.div
				variants={variants.textVariants}
				className={styles.contact_text}
			>
				<Link
					name="aryansingh29052003@gmail.com"
					label="Email"
					theme="large"
					href="mailto:aryansingh29052003@gmail.com"
				/>
				<div className={styles.contact_websites}>
					<Link
						name="LinkedIn"
						label="LinkedIn profile"
						href="https://www.linkedin.com/in/aryan-kumar-singh-a2071522b"
					/>
					<Link
						name="GitHub"
						label="GitHub profile"
						href="https://github.com/frustratedProton"
					/>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Contact;
