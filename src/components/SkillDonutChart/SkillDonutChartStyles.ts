import styled from 'styled-components';

export const ChartContainer = styled.div<{
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
	&:hover,
	&.active {
		transform: scale(120%);
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
		p {
			visibility: visible;
			font-size: 1rem;
			line-height: 1.2;
			display: block;
			color: ${({ color }) => color};
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			margin-bottom: 1.2rem;
			height: auto;
			opacity: 1;
			transition: opacity 200ms ease-in 200ms;
		}
	}

	p {
		visibility: hidden;
		opacity: 0;
		height: 0;
		margin: 0;
		transition: opacity 200ms ease-in;
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
		width: 55%;
		width: ${({ iconWidth }) => iconWidth || '55%'};
		transition: margin-top 200ms linear 200ms, transform 200ms linear 200ms;
	}
`;
