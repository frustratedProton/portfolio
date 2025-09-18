import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import styles from './Content.module.scss';

interface ContentProps {
	loaded: boolean;
}

export const Content = ({ loaded }: ContentProps) => {
	return (
		<main className={styles.main}>
			<Intro loaded={loaded} />
			<Skills />
			<Projects />
			<div className={styles.main_aboutAndContact}>
				<About />
				<Contact />
			</div>
		</main>
	);
};
