import styled, { css } from 'styled-components';

const SharedSectionStyle = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	background: ${(props) => props.theme.colours.secondary};
	color: ${(props) => props.theme.fontColours.main};
	text-align: center;
	padding: 0 2em;
	h1 {
		font-size: 2rem;
		margin: 0;
		letter-spacing: 1rem;
	}
	h2 {
		font-size: 1.5rem;
		letter-spacing: 0.5rem;
		filter: brightness(80%);
	}
	h3 {
		font-size: 1rem;
		letter-spacing: 0.3rem;
		opacity: 0.6;
	}

	@media (min-width: 800px) {
		h1 {
			font-size: 3rem;
		}
		h2 {
			font-size: 2rem;
		}
	}
`;

export const StyledSection = styled.section`
	${SharedSectionStyle}
`;

type TabContainerType = {
	top?: boolean;
};

export const StyledTabContainer = styled.div<TabContainerType>`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 70px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	background: #fff;
	z-index: 10;
	${(props: TabContainerType) =>
		props.top &&
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
	font-size: 0.8rem;
	&:hover {
		color: ${(props) => props.theme.fontColours.secondary};
		background: ${(props) => props.theme.colours.fifth};
		transition: all 0.6s ease;
		font-weight: bold;
		font-size: 120%;
	}

	@media (min-width: 800px) {
		font-size: 1rem;
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
