import { useSpring, useTransform, MotionValue } from 'motion/react';

interface UseParallaxReturn {
	primaryX: MotionValue<number>;
	primaryY: MotionValue<number>;
	secondaryX: MotionValue<number>;
	secondaryY: MotionValue<number>;
	onMouseMoveHandler: (event: React.MouseEvent) => void;
	onMouseLeaveHandler: () => void;
}

export const useParallax = (
	stiffness = 500,
	damping = 20,
	force = 100
): UseParallaxReturn => {
	const x = useSpring(0, { stiffness, damping });
	const y = useSpring(0, { stiffness, damping });

	const primaryX = useTransform(x, (val) => val / force);
	const primaryY = useTransform(y, (val) => val / force);
	const secondaryX = useTransform(x, (val) => val / -force);
	const secondaryY = useTransform(y, (val) => val / -force);

	const onMouseMoveHandler = (event: React.MouseEvent) => {
		x.set(event.clientX / 1.5);
		y.set(event.clientY / 1.5);
	};

	const onMouseLeaveHandler = () => {
		x.set(0);
		y.set(0);
	};

	return {
		primaryX,
		primaryY,
		secondaryX,
		secondaryY,
		onMouseMoveHandler,
		onMouseLeaveHandler,
	};
};
