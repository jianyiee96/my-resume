import styled from 'styled-components';
import { device } from '../../../../config/display';

export const StyledAboutSectionContainer = styled.div`
	display: flex;
	flex: 1;
	padding: 1rem;
	@media ${device.laptop} {
		flex-wrap: wrap;
	}
	@media ${device.tablet} {
		flex-direction: column;
	} ;
`;

export const StyledImgContainer = styled.div`
	flex: 1 1 30%;
	height: auto;
	@media ${device.laptop} {
		flex: 1 0 40%;
	}
`;

export const StyledImg = styled.img`
	width: 100%;
	height: auto;
	@media ${device.tablet} {
		object-fit: cover;
		object-position: center bottom;
		height: calc(100vw - 100px);
	}
`;

export const StyledTextContainer = styled.div`
	flex: 1 1 70%;
	padding: 0 4rem;
	line-height: 1.5;
	font-size: 1.5rem;
	text-align: justify;
	p:first-of-type {
		margin-top: 0;
	}
	@media ${device.laptopL} {
		font-size: 1.3rem;
	}
	@media ${device.laptop} {
		padding: 0 2rem;
		flex: 1 1 50%;
	}
	@media ${device.tablet} {
		font-size: 1rem;
		padding: 0;
	}
`;

export const StyledListItem = styled.div<{ faUnicode?: string }>`
	flex: 0 0 auto;
	margin: 0 2rem;
	line-height: 2;
	@media ${device.laptopL} {
		flex: 1 1 auto;
		margin: 0;
	}
	@media ${device.tablet} {
		flex-basis: 100%;
	}
	&:before {
		font-family: FontAwesome;
		color: ${({ theme }) => theme.fontColours.main};
		font-size: 32px;
		margin-right: 1rem;
	}
	${({ faUnicode }) =>
		faUnicode &&
		`&:before {
			content: '\\${faUnicode}';
		}
	`}
`;

export const StyledItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 3rem;
	text-align: center;
	font-weight: bold;
	font-size: 120%;
	&.outer {
		display: none;
	}
	@media ${device.laptop} {
		&.inner {
			display: none;
		}
		&.outer {
			display: flex;
			flex-basis: 100%;
		}
	}
	h1,
	h2,
	h3 {
		flex-basis: 100%;
	}
`;
