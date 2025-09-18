import Marquee from 'react-fast-marquee';
import { skills } from '../../data/skills';
import styles from './Skills.module.scss';
import type { IconType } from 'react-icons';

const Skills = () => {
	return (
		<section className={styles.skillsContainer}>
			<h2 className={styles.sectionTitle}>Skills & Tech Stack</h2>

			<div className={styles.marqueeWrapper}>
				<Marquee autoFill speed={22} pauseOnHover>
					{skills.map((skill, i) => {
						const Icon = skill.icon as IconType;
						return (
							<div key={`r1-${i}`} className={styles.icon}>
								<Icon size={48} color="white" />
							</div>
						);
					})}
				</Marquee>
				<div className={styles.fadeLeft}></div>
				<div className={styles.fadeRight}></div>
			</div>

			<div className={styles.marqueeWrapper}>
				<Marquee autoFill direction="right" speed={19} pauseOnHover>
					{skills.map((skill, i) => {
						const Icon = skill.icon as IconType;
						return (
							<div key={`r2-${i}`} className={styles.icon}>
								<Icon size={48} color="white" />
							</div>
						);
					})}
				</Marquee>
				<div className={styles.fadeLeft}></div>
				<div className={styles.fadeRight}></div>
			</div>
		</section>
	);
};

export default Skills;
