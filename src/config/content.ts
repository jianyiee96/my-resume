import { RotatingTextProps } from '../components/RotatingText/RotatingText';

type MainContentType = {
	typingTextContent: string;
	rotatingTextContent: RotatingTextProps;
};

export type ContentSectionType = {
	id: string;
	label: string;
	content: string;
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
	},
	{
		id: 'tab-skillsets',
		label: 'Skillsets',
		content: 'Skillsets',
	},
	{
		id: 'tab-experience',
		label: 'Past Experience',
		content: 'Past Experience',
	},
	{
		id: 'tab-projects',
		label: 'Projects',
		content: 'Projects',
	},
	{
		id: 'tab-others',
		label: 'Others',
		content: 'Others',
	},
];
