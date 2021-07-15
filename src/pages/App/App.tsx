import { useEffect, useState, useRef, createRef } from 'react';
import { ThemeProvider } from 'styled-components';
import MainSectionContent from './section_contents/Main/MainSectionContent';
import { StyledSection } from './AppStyles';
import { defaultTheme } from '../../styles/themes';
import { appContent } from '../../config/content';
import Navigation from '../../components/Navigation/Navigation';

const App = (): JSX.Element => {
	const [currentTabIdx, setCurrentTabIdx] = useState<number | null>(null);

	const refMain = useRef<HTMLDivElement>(null);
	const refSections = useRef<Array<HTMLElement | null>>([]);
	const refNavigationContainer = createRef<HTMLDivElement>();

	const checkSectionContainerPositon = (): void => {
		const offset =
			(refMain.current?.offsetTop || 0) +
			(refMain.current?.clientHeight || 0) -
			(refNavigationContainer.current?.clientHeight || 0);
		if (window.pageYOffset <= offset) {
			setCurrentTabIdx(null);
		}
	};

	const checkCurrentTabSelector = (): void => {
		refSections.current.forEach((el, idx) => {
			const offsetTop =
				(el?.offsetTop || 0) -
				(refNavigationContainer.current?.clientHeight || 0);
			const offsetBottom = offsetTop + (el?.clientHeight || 0);
			if (window.pageYOffset > offsetTop && window.pageYOffset < offsetBottom) {
				setCurrentTabIdx(idx);
			}
		});
	};

	const handleScrollAndResize = (): void => {
		checkSectionContainerPositon();
		checkCurrentTabSelector();
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScrollAndResize);
		window.addEventListener('resize', handleScrollAndResize);
		return () => {
			window.removeEventListener('scroll', handleScrollAndResize);
			window.removeEventListener('resize', handleScrollAndResize);
		};
	});

	return (
		<ThemeProvider theme={defaultTheme}>
			<StyledSection ref={refMain}>
				<MainSectionContent />
				<Navigation
					ref={refNavigationContainer}
					appContent={appContent}
					currentTabIdx={currentTabIdx}
				/>
			</StyledSection>

			<main>
				{appContent.map((tab, idx) => (
					<StyledSection
						key={tab.id}
						ref={(el) => {
							refSections.current[idx] = el;
						}}
						id={tab.id}
					>
						<h1>{tab.content}</h1>
						<h3>{tab.content}</h3>
					</StyledSection>
				))}
			</main>
		</ThemeProvider>
	);
};

export default App;
