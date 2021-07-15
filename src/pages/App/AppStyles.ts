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
`;

export const StyledSection = styled.section`
	${SharedSectionStyle}
`;
