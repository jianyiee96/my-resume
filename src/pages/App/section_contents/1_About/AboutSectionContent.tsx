import {
	StyledAboutSectionContainer,
	StyledImgContainer,
	StyledImg,
	StyledTextContainer,
	StyledItemsContainer,
	StyledListItem,
} from './AboutSectionContentStyles';
import { ComponentPropType } from '../../../../config/content';

export type AboutSectionContentType = {
	paragraphs: string[];
	profilePicture: string;
	listItems: {
		header: string;
		items: {
			name: string;
			faUnicode?: string;
		}[];
	}[];
};

const AboutSectionContent = ({ content }: ComponentPropType): JSX.Element => {
	const { paragraphs, profilePicture, listItems } =
		content as AboutSectionContentType;

	const AdditionalInfo = ({
		className,
	}: {
		className?: string;
	}): JSX.Element => (
		<>
			{listItems.map((listItem) => (
				<StyledItemsContainer className={className}>
					<h2>{listItem.header}</h2>
					{listItem.items.map((item) => (
						<StyledListItem faUnicode={item.faUnicode}>
							{item.name}
						</StyledListItem>
					))}
				</StyledItemsContainer>
			))}
		</>
	);

	return (
		<StyledAboutSectionContainer>
			<StyledImgContainer>
				<StyledImg src={profilePicture} />
			</StyledImgContainer>
			<StyledTextContainer>
				{paragraphs.map((text) => (
					<p>{text}</p>
				))}
				<AdditionalInfo className="inner" />
			</StyledTextContainer>
			<AdditionalInfo className="outer" />
		</StyledAboutSectionContainer>
	);
};

export default AboutSectionContent;
