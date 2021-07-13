import { useEffect, useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import MainSectionContent from './section_contents/Main/MainSectionContent';
import {
	StyledTabContainer,
	StyledTabLink,
	StyledSlider,
	StyledSection,
} from './AppStyles';
import { defaultTheme } from '../../styles/themes';

const App = (): JSX.Element => {
	const [currentTab, setCurrentTab] = useState<
		HTMLAnchorElement | null | undefined
	>(null);
	const [tabsTop, setTabsTop] = useState<boolean>(false);

	const refMain = useRef<HTMLDivElement>(null);
	const refSections = useRef<Array<HTMLElement | null>>([]);
	const refTabs = useRef<Array<HTMLAnchorElement | null>>([]);
	const refTabsContainer = useRef<HTMLDivElement>(null);
	const refSlider = useRef<HTMLDivElement>(null);

	type TabType = {
		id: string;
		label: string;
		content: string;
		subContent: string;
	};

	const tabs: TabType[] = [
		{
			id: 'tab-about',
			label: 'More About Me',
			content: 'More About Me',
			subContent: 'something about me',
		},
		{
			id: 'tab-skillsets',
			label: 'Skillsets',
			content: 'Skillsets',
			subContent: 'something about skillsets',
		},
		{
			id: 'tab-experience',
			label: 'Past Experience',
			content: 'Past Experience',
			subContent: 'something about past experience',
		},
		{
			id: 'tab-projects',
			label: 'Projects',
			content: 'Projects',
			subContent: 'something about projects',
		},
		{
			id: 'tab-others',
			label: 'Others',
			content: 'Others',
			subContent: 'something about others',
		},
	];

	const checkTabContainerPositon = (): void => {
		const offset =
			(refMain.current?.offsetTop || 0) +
			(refMain.current?.clientHeight || 0) -
			(refTabsContainer.current?.clientHeight || 0);
		if (window.pageYOffset > offset) {
			setTabsTop(true);
		} else {
			setTabsTop(false);
			setCurrentTab(null);
		}
	};

	const checkCurrentTabSelector = (): void => {
		refSections.current.forEach((el) => {
			const offsetTop =
				(el?.offsetTop || 0) - (refTabsContainer.current?.clientHeight || 0);
			const offsetBottom = offsetTop + (el?.clientHeight || 0);
			if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
				setCurrentTab(
					refTabs.current.find((tab) => {
						const hrefString = tab?.href.toString();
						const match = (hrefString?.indexOf(el?.id || '') || -1) > 0;
						return match;
					})
				);
			}
		});
	};
	useEffect(() => {
		handleSlider(currentTab);
	}, [currentTab]);

	const handleSlider = (tab: HTMLAnchorElement | null | undefined): void => {
		if (tab) {
			let width = 0;
			let left = 0;
			width = tab.clientWidth;
			left = tab.offsetLeft;
			if (refSlider.current) {
				refSlider.current.style.width = `${width.toString()}px`;
				refSlider.current.style.left = `${left.toString()}px`;
			}
		} else if (refSlider.current) {
			refSlider.current.style.width = `0px`;
			refSlider.current.style.left = `0px`;
		}
	};

	const handleScroll = (): void => {
		checkTabContainerPositon();
		checkCurrentTabSelector();
	};

	const handleResize = (): void => {
		handleSlider(currentTab);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<ThemeProvider theme={defaultTheme}>
			<StyledSection ref={refMain}>
				<MainSectionContent />
				<StyledTabContainer ref={refTabsContainer} top={tabsTop}>
					{tabs.map((tab, idx) => (
						<StyledTabLink
							key={tab.id}
							href={`#${tab.id}`}
							ref={(el) => {
								refTabs.current[idx] = el;
							}}
						>
							{tab.label}
						</StyledTabLink>
					))}
					<StyledSlider ref={refSlider} />
				</StyledTabContainer>
			</StyledSection>

			<main>
				{tabs.map((tab, idx) => (
					<StyledSection
						key={tab.id}
						ref={(el) => {
							refSections.current[idx] = el;
						}}
						id={tab.id}
					>
						<h1>{tab.content}</h1>
						<h3>{tab.subContent}</h3>
					</StyledSection>
				))}
			</main>
		</ThemeProvider>
	);
};

export default App;
