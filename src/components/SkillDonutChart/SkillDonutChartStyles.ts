import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../config/display';

export const DescriptionContainer = styled(motion.div)`
	text-align: left;
	margin-left: 5rem;
`;

export const DescriptionHeader = styled.p<{
	color: string;
}>`
	color: ${({ color }) => color};
	padding: 1rem 0.5rem 0.5rem 1rem;
	filter: brightness(120%);
	font-weight: bold;
	letter-spacing: 0.1rem;
	white-space: nowrap;

	background-image: ${({ color }) =>
		`linear-gradient(to right, ${color}, ${color})`};
	background-position: bottom left;
	background-repeat: no-repeat;
	background-size: 100% 2px;
	&:before {
		content: '';
		left: -7px;
		top: 4.4px;
		height: 2.5rem;
		position: absolute;
		border-left: ${({ color }) => `solid 2px ${color}`};
		transform: rotate(-20deg);
	}
	&:after {
		content: '';
		position: absolute;
		left: -16px;
		top: 2.5px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: ${({ color }) => color};
	}
`;

export const DescriptionText = styled.p`
	margin-top: 0;
	margin-bottom: 0.5rem;
	padding-left: 2rem;
	word-wrap: break-word;
	&:before {
		content: '•';
		position: absolute;
		margin-right: 1rem;
		left: 0;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	@media ${device.tablet} {
		align-items: center;
		${DescriptionContainer} {
			margin-left: 0;
		}
		${DescriptionHeader} {
			text-align: center;
			&:before,
			&:after {
				content: none;
			}
		}
	}
`;

export const PieChartLabel = styled(motion.p)`
	font-size: 1rem;
	line-height: 1.2;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	margin-bottom: 1.2rem;
`;
export const ChartContainer = styled(motion.div)<{
	color: string;
	iconWidth?: string | undefined;
	iconMarginTop?: string | undefined;
}>`
	cursor: pointer;
	width: 8rem;
	position: relative;
	text-align: center;
	svg path {
		&:first-of-type {
			filter: brightness(30%);
		}
		&:last-of-type {
			filter: brightness(70%);
		}
	}
	${PieChartLabel} {
		color: ${({ color }) => color};
	}
	&:hover,
	&.active {
		svg path {
			&:first-of-type {
				filter: brightness(30%);
			}
			&:last-of-type {
				filter: brightness(120%);
			}
		}
	}

	&.active {
		svg.chart-icon {
			transform: scale(80%);
			margin-top: ${({ iconMarginTop }) => iconMarginTop || '0.7rem'};
			transition: margin-top 200ms linear, transform 200ms linear;
		}
	}
	svg.chart-icon {
		position: absolute;
		margin: auto;
		margin-top: 25%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		height: auto;
		width: ${({ iconWidth }) => iconWidth || '55%'};
		transition: margin-top 200ms linear 200ms, transform 200ms linear 200ms;
	}
`;
