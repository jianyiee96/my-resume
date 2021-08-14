import React, { useRef, useEffect, forwardRef, useState } from 'react';
import Media from 'react-media';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import {
	StyledBackdrop,
	StyledMobileMenu,
	StyledHamburgerContainer,
	StyledMobileNavigationContainer,
	StyledCloseButtonContainer,
	StyledMobileTabLink,
	StyledTabContainer,
	StyledTabLink,
	StyledSlider,
} from './NavigationStyles';
import { ContentSectionType } from '../../config/content';
import { device } from '../../config/display';
import {
	animateUpDownMenuVariants,
	animateLTRMenuVariants,
} from '../../config/framer-animations';

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
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [showMobileMenuIcon, setShowMobileMenuIcon] = useState(true);
	const refTabs = useRef<Array<HTMLAnchorElement | null>>([]);
	const refSlider = useRef<HTMLDivElement>(null);
	const stickyTabsTop = currentTabIdx !== null;
	const refBackdrop = useRef<HTMLDivElement>(null);

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
	let prevScrollpos = window.pageYOffset;
	window.onscroll = () => {
		const currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			setShowMobileMenuIcon(true);
		} else {
			setShowMobileMenuIcon(false);
		}

		prevScrollpos = currentScrollPos;
	};

	const clickToRemoveMenuHandler = (event: MouseEvent): void => {
		const eventTarget = event.target;
		if (eventTarget === refBackdrop.current) {
			setShowMobileMenu(false);
		}
	};
	useEffect(() => {
		if (showMobileMenu) {
			document.documentElement.addEventListener(
				'click',
				clickToRemoveMenuHandler
			);
		} else {
			document.documentElement.removeEventListener(
				'click',
				clickToRemoveMenuHandler
			);
		}
	}, [showMobileMenu]);

	return (
		<>
			<Media queries={{ mobile: device.mobileL }}>
				{(matches) =>
					matches.mobile ? (
						<>
							<AnimatePresence>
								{showMobileMenuIcon && (
									<StyledMobileMenu aria-label="collapased-menu">
										<StyledHamburgerContainer
											onClick={() => setShowMobileMenu(true)}
											initial={animateUpDownMenuVariants.hidden}
											animate={animateUpDownMenuVariants.orginal}
											exit={animateUpDownMenuVariants.hidden}
										>
											<GiHamburgerMenu size={20} />
										</StyledHamburgerContainer>
									</StyledMobileMenu>
								)}
							</AnimatePresence>
							<AnimatePresence>
								{showMobileMenu && (
									<>
										<StyledMobileNavigationContainer
											aria-label="mobile-menu"
											initial={animateLTRMenuVariants.left}
											animate={animateLTRMenuVariants.original}
											exit={animateLTRMenuVariants.left}
										>
											<StyledCloseButtonContainer
												onClick={() => setShowMobileMenu(false)}
											>
												<IoCloseSharp size={20} />
											</StyledCloseButtonContainer>
											{appContent.map((tab, idx) => (
												<StyledMobileTabLink
													key={tab.id}
													href={`#${tab.id}`}
													onClick={() => setShowMobileMenu(false)}
													// eslint-disable-next-line max-len
													className={currentTabIdx === idx ? 'active' : ''}
												>
													<h3>{tab.label}</h3>
												</StyledMobileTabLink>
											))}
										</StyledMobileNavigationContainer>
										<StyledBackdrop ref={refBackdrop} aria-label="backdrop" />
									</>
								)}
							</AnimatePresence>
						</>
					) : (
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
					)
				}
			</Media>
		</>
	);
};

export default forwardRef(Navigation);
