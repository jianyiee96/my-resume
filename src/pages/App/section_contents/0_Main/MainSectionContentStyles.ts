import styled from 'styled-components';

export const SubHeaderContainer = styled.div`
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
