import { useEffect, useRef } from 'react';

export const Fluid: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'js/fluidInit.js';
		script.async = true;
		script.type = 'module';

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return <canvas ref={canvasRef} className="fluid-canvas"></canvas>;
};
