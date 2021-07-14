import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
    0%, 100% {opacity:0;}
    50% {opacity:1;}
`;

const changeAnimation = keyframes`
    0%, 20%, 100% {transform:translate3d(0,0,0);}
    24%, 44% {transform:translate3d(0,-25%,0);}
    48%, 68% {transform:translate3d(0,-50%,0);}
    72%, 92% {transform:translate3d(0,-75%,0);}
`;

export const StyledRotatingText = styled.div`
	.container {
		overflow: hidden;
		padding: 0 3rem;
		height: 2.4rem;
		position: relative;

		&:before {
			content: '[';
			left: 0;
		}

		&:after {
			content: ']';
			right: 0;
		}

		&:after,
		&:before {
			position: absolute;
			vertical-align: top;
			animation: ${opacityAnimation} 2s infinite;
		}

		.text {
			display: inline-block;
			vertical-align: top;
			margin: 0 1.5rem 0 0;
		}

		.list {
			display: inline-block;
			margin: 0;
			padding: 0;
			text-align: left;
			list-style: none;
			animation-name: ${changeAnimation};
			animation-duration: 10s;
			animation-iteration-count: infinite;
			.item {
				white-space: nowrap;
				margin: 0;
			}
		}
	}

	@media (max-width: 800px) {
		.container {
			height: 1.8rem;

			.text {
				margin: 0 1rem 0 0;
			}
		}
	}

	@media (max-width: 670px) {
		.container {
			height: 1.3rem;
			padding: 0 1rem;
			.text {
				margin: 0 0.8rem 0 0;
			}
			letter-spacing: 0.1rem;
			font-size: 1rem;
		}
	}
`;
