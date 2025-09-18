import { useEffect, useState } from 'react';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import SmoothScroll from './components/SmoothScroll';
import { Loader } from './components/Loader/Loader';
import './index.scss';
// import SmoothCursor from "./components/SmoothMouse";
import { Fluid } from './components/FluidBackground';
import SmoothFollower from './components/SmoothMouse';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{loading && <Loader />}
			<div className="noise"></div>
			<Fluid />
			<Header />
			<SmoothScroll>
				<Content loaded={!loading} />
			</SmoothScroll>
			<SmoothFollower />
		</>
	);
};

export default App;
