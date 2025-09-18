import type { ReactNode } from 'react'; // type-only import
import { useRef, useState, useCallback, useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useScroll, useTransform, useSpring, motion } from 'motion/react';

interface SmoothScrollProps {
	children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [pageHeight, setPageHeight] = useState(0);

	const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
		for (const entry of entries) {
			setPageHeight(entry.contentRect.height);
		}
	}, []);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) =>
			resizePageHeight(entries)
		);
		if (scrollRef.current) resizeObserver.observe(scrollRef.current);
		return () => resizeObserver.disconnect();
	}, [resizePageHeight]);

	const { scrollY } = useScroll();
	const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
	const spring = useSpring(transform, {
		damping: 15,
		mass: 0.27,
		stiffness: 55,
	});

	return (
		<>
			<motion.div
				ref={scrollRef}
				style={{ y: spring }}
				className="scroll_container"
			>
				{children}
			</motion.div>
			<div style={{ height: pageHeight }} />
		</>
	);
};

export default SmoothScroll;
