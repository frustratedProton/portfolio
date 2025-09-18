import { motion } from 'motion/react';
import styles from './Curtain.module.scss';

export const Curtain = ({ loaded }: { loaded: boolean }) => {
	return (
		<div className={styles.curtainWrapper}>
			<motion.div
				className={styles.curtainHalf}
				initial={{ x: 0 }}
				animate={loaded ? { x: '-100%' } : { x: 0 }}
				transition={{ duration: 0.7, ease: 'easeInOut' }}
			/>
			<motion.div
				className={styles.curtainHalf}
				initial={{ x: 0 }}
				animate={loaded ? { x: '100%' } : { x: 0 }}
				transition={{ duration: 0.7, ease: 'easeInOut' }}
			/>
		</div>
	);
};
