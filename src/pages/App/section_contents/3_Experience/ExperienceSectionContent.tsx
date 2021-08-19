import HorizontalAccordian, {
	HASectionType,
} from '../../../../components/HorizontalAccordion/HorizontalAccordian';
import {
	StyledExperiencesSectionContainer,
	StyledAccordianContainer,
} from './ExperienceSectionContentStyles';
import { ComponentPropType } from '../../../../config/content';

export type ExperienceSectionContentType = {
	sections: HASectionType[];
};

const ExperienceSectionContent = ({
	content,
}: ComponentPropType): JSX.Element => {
	const { sections } = content as ExperienceSectionContentType;
	return (
		<StyledExperiencesSectionContainer>
			<StyledAccordianContainer>
				<HorizontalAccordian sections={sections} />
			</StyledAccordianContainer>
		</StyledExperiencesSectionContainer>
	);
};

export default ExperienceSectionContent;
