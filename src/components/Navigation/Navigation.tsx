import React, { useRef, useEffect, forwardRef } from 'react';
import {
	StyledTabContainer,
	StyledTabLink,
	StyledSlider,
} from './NavigationStyles';
import { ContentSectionType } from '../../config/content';

type NavigationPropsType = {
	currentTabIdx: number | null;
	appContent: ContentSectionType[];
};

const Navigation: React.ForwardRefRenderFunction<
	HTMLDivElement,
	NavigationPropsType
> = (
	{ currentTabIdx, appContent }: NavigationPropsType,
	refTabsContainer
): JSX.Element => {
	const refTabs = useRef<Array<HTMLAnchorElement | null>>([]);
	const refSlider = useRef<HTMLDivElement>(null);
	const stickyTabsTop = currentTabIdx !== null;

	const handleSlider = (): void => {
		const tab = currentTabIdx !== null ? refTabs.current[currentTabIdx] : null;
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

	const handleResize = (): void => {
		handleSlider();
	};

	useEffect(() => {
		handleSlider();
	}, [currentTabIdx]);

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		e.preventDefault();
		const target = e.currentTarget.getAttribute('href');
		const location = target && document.querySelector(target);
		if (location) {
			location.scrollIntoView();
		}
	};

	return (
		<>
			<StyledTabContainer top={stickyTabsTop} ref={refTabsContainer}>
				{appContent.map((tab, idx) => (
					<StyledTabLink
						key={tab.id}
						href={`#${tab.id}`}
						ref={(el) => {
							refTabs.current[idx] = el;
						}}
						onClick={handleClick}
					>
						{tab.label}
					</StyledTabLink>
				))}
				<StyledSlider ref={refSlider} />
			</StyledTabContainer>
		</>
	);
};

export default forwardRef(Navigation);
