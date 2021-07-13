import styled, { keyframes } from 'styled-components';

const caretAnimation = keyframes`
    50% {
      border-color: transparent;
    }
`;

export const StyledSpan = styled.span`
	border-right: 0.05em solid;
	border-color: ${(props) => props.theme.fontColours.main};
	animation: ${caretAnimation} 1s steps(1) infinite;
`;
