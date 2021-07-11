import styled, { keyframes } from 'styled-components';

export const AppStyle = styled.div`
	text-align: center;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogoImg = styled.img`
	height: 40vmin;
	pointer-events: none;
	@media (prefers-reduced-motion: no-preference) {
		animation: ${rotateAnimation} infinite 20s linear;
	}
`;

export const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const AppLink = styled.a`
	color: #61dafb;
`;
