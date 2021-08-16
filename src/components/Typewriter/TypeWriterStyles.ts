import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)`
	width: 100%;
`;

const caretAnimation = keyframes`
50% {
	border-color: transparent;
}
`;

export const StyledSpan = styled(motion.span)`
	border-right: 0.05em solid;
	border-color: ${(props) => props.theme.fontColours.main};
	animation: ${caretAnimation} 1s steps(1) infinite;
`;
