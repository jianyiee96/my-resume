import styled from 'styled-components';
import { motion } from 'framer-motion';
import { darken } from 'polished';
import { device } from '../../config/display';

export const StyledMobileMenu = styled.div`
	position: fixed;
	top: 0;
	z-index: 1;
	width: 100%;
	height: 3rem;
	display: flex;
	align-items: center;
	padding-left: 3rem;
	background: ${({ theme }) => theme.colours.secondary};
	color: ${(props) => props.theme.fontColours.main};
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const StyledHamburgerContainer = styled(motion.span)``;

export const StyledBackdrop = styled.div`
	z-index: 2;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(2px);
`;

export const StyledMobileNavigationContainer = styled(motion.div)`
	height: 100%;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.colours.third};
	overflow-x: hidden;
`;

export const StyledMobileTabLink = styled.a`
	color: ${({ theme }) => theme.fontColours.main};
	padding: 0.5rem 2rem 0.5rem 1rem;
	text-align: left;
	text-decoration: none;
	display: block;
	&:hover,
	&.active {
		background-color: ${({ theme }) => darken(0.05, theme.colours.third)};
		h3 {
			filter: brightness(100%);
		}
	}
	&:first-of-type {
		margin-top: 4rem;
	}
`;

export const StyledCloseButtonContainer = styled.p`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
`;

export const StyledTabContainer = styled.div<{ top?: boolean }>`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 4.5rem;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	z-index: 10;
	${({ top }) =>
		top &&
		`
			position: fixed;
			top: 0;
		`}
`;

export const StyledTabLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	color: ${(props) => props.theme.fontColours.main};
	background: ${(props) => props.theme.colours.secondary};
	letter-spacing: 0.1rem;
	transition: all 0.5s ease;
	font-size: 1rem;
	&:hover {
		color: ${(props) => props.theme.fontColours.secondary};
		background: ${(props) => props.theme.colours.fifth};
		transition: all 0.6s ease;
		font-weight: bold;
		font-size: 120%;
	}

	@media ${device.tablet} {
		font-size: 70%;
		&:hover {
			font-size: 70%;
			font-weight: bold;
		}
	}
`;

export const StyledSlider = styled.span`
	position: absolute;
	bottom: 0;
	width: 0;
	height: 6px;
	background: ${(props) => props.theme.colours.fifth};
	transition: left 0.3s ease;
`;
