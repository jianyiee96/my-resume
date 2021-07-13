import styled from 'styled-components';

export const SubHeaderFade = styled.h2`
	&.visible {
		visibility: visible;
		opacity: 1;
		transition: opacity 2s ease-out;
	}
	&.hidden {
		visibility: hidden;
		opacity: 0;
	}
`;
