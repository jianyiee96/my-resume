import styled, { css } from 'styled-components';

const SharedSectionStyle = css`
	display: flex;
	flex-direction: column;
	position: relative;
	background: ${(props) => props.theme.colours.secondary};
	color: ${(props) => props.theme.fontColours.main};
	text-align: center;
	padding: 0 2em;
`;

export const StyledMainSection = styled.section`
	${SharedSectionStyle}
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const StyledSubSection = styled.section`
	${SharedSectionStyle}
	justify-content: flex-start;
	min-height: calc(100vh - 7.5rem);
	padding-top: calc(4.5rem + 3rem);
`;
