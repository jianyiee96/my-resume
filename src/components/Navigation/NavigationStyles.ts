import styled from 'styled-components';

type TabContainerType = {
	top?: boolean;
};

export const StyledTabContainer = styled.div<TabContainerType>`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 4.5rem;
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
	font-size: 1rem;
	&:hover {
		color: ${(props) => props.theme.fontColours.secondary};
		background: ${(props) => props.theme.colours.fifth};
		transition: all 0.6s ease;
		font-weight: bold;
		font-size: 120%;
	}

	@media (max-width: 800px) {
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
