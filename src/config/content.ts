import { RotatingTextProps } from '../components/RotatingText/RotatingText';
import AboutSectionContent from '../pages/App/section_contents/1_About/AboutSectionContent';
import SkillsetsSectionContent from '../pages/App/section_contents/2_Skillsets/SkillsetsSectionContent';
import ExperienceSectionContent from '../pages/App/section_contents/3_Experience/ExperienceSectionContent';
import ProjectsSectionContent from '../pages/App/section_contents/4_Projects/ProjectsSectionContent';
import OthersSectionContent from '../pages/App/section_contents/5_Others/OthersSectionContent';

type MainContentType = {
	typingTextContent: string;
	rotatingTextContent: RotatingTextProps;
};

export type ContentSectionType = {
	id: string;
	label: string;
	content: string;
	component: () => JSX.Element;
};

export const mainPageContent: MainContentType = {
	typingTextContent: "Hi. I'm Bryan Thum",
	rotatingTextContent: {
		preText: 'I am a',
		items: ['Programmer', 'Developer', 'Thinker', 'Problem-Solver'],
	},
};

export const appContent: ContentSectionType[] = [
	{
		id: 'tab-about',
		label: 'More About Me',
		content: 'More About Me',
		component: AboutSectionContent,
	},
	{
		id: 'tab-skillsets',
		label: 'Skillsets',
		content: 'Skillsets',
		component: SkillsetsSectionContent,
	},
	{
		id: 'tab-experience',
		label: 'Past Experience',
		content: 'Past Experience',
		component: ExperienceSectionContent,
	},
	{
		id: 'tab-projects',
		label: 'Projects',
		content: 'Projects',
		component: ProjectsSectionContent,
	},
	{
		id: 'tab-others',
		label: 'Others',
		content: 'Others',
		component: OthersSectionContent,
	},
];
