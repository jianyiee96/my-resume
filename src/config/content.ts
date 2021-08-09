/* eslint-disable max-len */
import { MainContentType } from '../pages/App/section_contents/0_Main/MainSectionContent';
import AboutSectionContent, {
	AboutSectionContentType,
} from '../pages/App/section_contents/1_About/AboutSectionContent';
import SkillsetsSectionContent from '../pages/App/section_contents/2_Skillsets/SkillsetsSectionContent';
import ExperienceSectionContent from '../pages/App/section_contents/3_Experience/ExperienceSectionContent';
import ProjectsSectionContent from '../pages/App/section_contents/4_Projects/ProjectsSectionContent';
import OthersSectionContent from '../pages/App/section_contents/5_Others/OthersSectionContent';
import profilePicture from '../assets/jpgs/profile_picture.jpg';

export const mainPageContent: MainContentType = {
	typingTextContent: "Hi. I'm Bryan Thum",
	rotatingTextContent: {
		preText: 'I am a',
		items: ['Programmer', 'Developer', 'Thinker', 'Problem-Solver'],
	},
};

type BaseContentType = AboutSectionContentType | undefined;

export type ComponentPropType = {
	content: BaseContentType;
};

export type ContentSectionType = {
	id: string;
	label: string;
	subLabel: string;
	content?: BaseContentType;
	component: (props: ComponentPropType) => JSX.Element;
};

export const appContent: ContentSectionType[] = [
	{
		id: 'tab-about',
		label: 'More About Me',
		subLabel: 'My Journey . My Passion',
		content: {
			paragraphs: [
				'The whole idea of technology has constantly intrigued me. When you grow up in such a technology-focused society, you will not only grow into it but it becomes a part of you. My passion in this field has led me to pursue IT in NUS and SP.',
				'The thrill of problem solving and coming up with solutions that improves the lives of people fuels my motivation. In my opinion, learning from others and always having room to improve is the best part about technology.',
				'I take pride in writing software programs and also love to be a team player. Furthermore, I thrive in keeping my knowledge and skill sets relevant in the ever-changing landscape of IT.',
			],
			profilePicture,
			listItems: [
				{
					header: 'My Values',
					items: [
						{ name: 'Excellence', faUnicode: 'f091' },
						{ name: 'Agility', faUnicode: 'f135' },
						{ name: 'Empathy', faUnicode: 'f004' },
					],
				},
				{
					header: 'My Education',
					items: [
						{
							name: 'NUS - Bachelor of Computing in Information Systems (Hons)',
							faUnicode: 'f19d',
						},
						{
							name: 'SP - Diploma in Financial Informatics',
							faUnicode: 'f19d',
						},
					],
				},
			],
		},
		component: AboutSectionContent,
	},
	{
		id: 'tab-skillsets',
		label: 'Skillsets',
		subLabel: 'Skillsets',
		component: SkillsetsSectionContent,
	},
	{
		id: 'tab-experience',
		label: 'Past Experience',
		subLabel: 'Past Experience',
		component: ExperienceSectionContent,
	},
	{
		id: 'tab-projects',
		label: 'Projects',
		subLabel: 'Projects',
		component: ProjectsSectionContent,
	},
	{
		id: 'tab-others',
		label: 'Others',
		subLabel: 'Others',
		component: OthersSectionContent,
	},
];
